import pathlib
import modal
import subprocess

stub = modal.Stub("geospatial-jobs")
# datasette_image = (
#     modal.Image.debian_slim()
#     .pip_install(
#         "datasette~=0.63.2",
#         "flufl.lock",
#         "GitPython",
#         "sqlite-utils",
#     )
#     .apt_install("git")
# )

volume = modal.SharedVolume().persist("geospatial-jobs-urlwatch-cache")

CACHE_DIR = "/urlwatch_cache"
LOCK_FILE = str(pathlib.Path(CACHE_DIR, "lock-reports"))
REPO_DIR = pathlib.Path(CACHE_DIR, "COVID-19")
DB_PATH = pathlib.Path(CACHE_DIR, "geojobs.db")

URL_PATH = "urls.yaml"
CONFIG_PATH = "config.yaml"


@stub.function(schedule=modal.Period(days=1))
def run_geospatial_urlwatch():
    subprocess.run(["urlwatch", "--urls", URL_PATH, "--config", CONFIG_PATH, "--cache", DB_PATH])