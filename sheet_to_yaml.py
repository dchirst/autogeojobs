import requests as rs
import pandas as pd
import yaml

if __name__ == '__main__':

    sheet_id = "1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY"
    sheet_url = f"https://docs.google.com/spreadsheets/u/0/d/{sheet_id}/export?format=csv&id={sheet_id}&gid=0"

    geo_companies = pd.read_csv(sheet_url)

    url_yaml = ""
    geo_companies = geo_companies[geo_companies["Careers URL"].notnull()].drop_duplicates(subset="Careers URL")

    for idx, company in geo_companies.iterrows():
        urlwatch_entry = {
            "name": company.Company,
            "url": company.Website,
            "filter": ["html2text"]
        }
        url_yaml += yaml.dump(urlwatch_entry) + "---\n"

    with open("urls.yaml", "w") as f:
        f.write(url_yaml)


