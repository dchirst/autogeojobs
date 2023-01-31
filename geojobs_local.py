import pathlib
import subprocess
import urllib.request
from os import environ
import re
from dotenv import load_dotenv

load_dotenv()


URLWATCH_DIR = "test"

DB_PATH = pathlib.Path(URLWATCH_DIR, "geojobs.db")

URL_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/urls.yaml"
CONFIG_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/config.yaml"

URL_PATH = pathlib.Path(URLWATCH_DIR, "urls.yaml")
CONFIG_PATH = pathlib.Path(URLWATCH_DIR, "config.yaml")


def run_geospatial_urlwatch():
    with urllib.request.urlopen(urllib.request.Request(URL_REMOTE_PATH)) as src:
        with open(URL_PATH, "w+") as dst:
            dst.write(src.read().decode("utf-8"))
    with urllib.request.urlopen(urllib.request.Request(CONFIG_REMOTE_PATH)) as src:
        with open(CONFIG_PATH, "w+") as dst:
            config_data = re.sub(r'\$\{password\}',
            environ.get("EMAIL_PASSWORD"),
            src.read().decode("utf-8"))
            config_data = re.sub(r'\$\{to_email\}',
            environ.get("TO_EMAIL"),
            config_data)
            print(config_data)
            dst.write(config_data)
    subprocess.run(["urlwatch",
                    "--urls", URL_PATH,
                    "--config", CONFIG_PATH,
                    "--cache", DB_PATH,
                    "--hooks", "hooks.py"])


if __name__ == '__main__':
    run_geospatial_urlwatch()
