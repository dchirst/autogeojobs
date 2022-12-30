import pathlib
import modal
import subprocess
import urllib.request


stub = modal.Stub("geospatial-jobs")
urlwatch_image = (
    modal.Image.debian_slim()
    .pip_install(
        "urlwatch",
    )
)

volume = modal.SharedVolume().persist("geospatial-jobs-urlwatch-cache")

URLWATCH_DIR = "/urlwatch"

DB_PATH = pathlib.Path(URLWATCH_DIR, "geojobs.db")

URL_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/urls.yaml"
CONFIG_REMOTE_PATH = "https://raw.githubusercontent.com/dchirst/geospatialjobs/main/config.yaml"

URL_PATH = pathlib.Path(URLWATCH_DIR, "urls.yaml")
CONFIG_PATH = pathlib.Path(URLWATCH_DIR, "config.yaml")

@stub.function(schedule=modal.Period(days=1), image=urlwatch_image, shared_volumes={URLWATCH_DIR: volume},)
def run_geospatial_urlwatch():
    with urllib.request.urlopen(urllib.request.Request(URL_REMOTE_PATH)) as src:
        with open(URL_PATH, "w+") as dst:
            dst.write(src.read().decode("utf-8"))
    with urllib.request.urlopen(urllib.request.Request(CONFIG_REMOTE_PATH)) as src:
        with open(CONFIG_PATH, "w+") as dst:
            dst.write(src.read().decode("utf-8"))
    subprocess.run(["urlwatch", "--urls", URL_PATH, "--config", CONFIG_PATH, "--cache", DB_PATH])


if __name__ == '__main__':
    with stub.run():
        run_geospatial_urlwatch.call()