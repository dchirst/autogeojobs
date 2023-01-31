import pathlib
import modal
import subprocess
import urllib.request
from os import environ
import re
from sheet_to_yaml import make_yaml, get_companies
import hooks

stub = modal.Stub("geospatial-jobs-staging")
urlwatch_image = modal.Image.from_dockerfile("Dockerfile")
volume = modal.SharedVolume().persist("geospatial-jobs-urlwatch-cache-staging")

URLWATCH_DIR = "/urlwatch"

DB_PATH = pathlib.Path(URLWATCH_DIR, "geojobs.db")

URL_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/urls.yaml"
CONFIG_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/config.yaml"

URL_PATH = pathlib.Path(URLWATCH_DIR, "urls.yaml")
CONFIG_PATH = pathlib.Path(URLWATCH_DIR, "config.yaml")


@stub.function(schedule=modal.Cron("0 7 * * 1-5"),
               image=urlwatch_image,
               shared_volumes={URLWATCH_DIR: volume},
               secrets=[modal.Secret.from_name("gmail")])
def run_geospatial_urlwatch():
    # print(environ["PYPPETEER_HOME"])
    # subprocess.run(Launcher().cmd)
    df = get_companies()

    make_yaml(df, filename=URL_PATH)
    print("created urls")
    with urllib.request.urlopen(urllib.request.Request(CONFIG_REMOTE_PATH)) as src:
        with open(CONFIG_PATH, "w+") as dst:
            config = src.read().decode("utf-8")
            config_data = re.sub(r'\$\{password\}',
            environ.get("EMAIL_PASSWORD"),
            config)
            config_data = re.sub(r'\$\{to_email\}',
            environ.get("TO_EMAIL_STAGING"),
            config_data)
            dst.write(config_data)
    subprocess.run(["webchanges",  "--urls", URL_PATH, "--config", CONFIG_PATH, "--hooks", "hooks.py", "--cache", DB_PATH])


if __name__ == '__main__':
    with stub.run():
        run_geospatial_urlwatch.call()