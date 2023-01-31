import subprocess
from tqdm import tqdm

def validate_company_filter(idx: int, url_path: str = "urls_ttt.yaml",
                            config_path: str = "config_test.yaml",
                            hooks_path: str = "hooks.py"):
    if idx == 0:
        raise Exception("urlwatch is 1-indexed. Don't pass 0 as idx")

    output = subprocess.check_output(["urlwatch",
                    "--urls", url_path,
                    "--config", config_path,
                    "--hooks", hooks_path,
                    "--test-filter", str(idx)])

    print("\n\n" + output.decode("utf-8")[:100] + "\n\n")
    # if len(output.decode("utf-8")) < 100:
    #     raise Exception(f"No output for index {idx}")


if __name__ == '__main__':
    for i in tqdm(range(200)):
        validate_company_filter(i + 1)
