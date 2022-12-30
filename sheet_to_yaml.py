import requests as rs
import pandas as pd
import yaml

if __name__ == '__main__':

    sheet_id = "1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY"
    sheet_url = f"https://docs.google.com/spreadsheets/u/0/d/{sheet_id}/export?format=csv&id={sheet_id}&gid=0"

    geo_companies = pd.read_csv(sheet_url)

    url_yaml = ""
    for idx, company in geo_companies.head(5).iterrows():
        urlwatch_entry = {
            "name": company.Company,
            "url": company.Website,
            "filter": ["html2text"]
        }
        url_yaml += yaml.dump(urlwatch_entry) + "---\n"

    with open("urls.yaml", "w") as f:
        f.write(url_yaml)


