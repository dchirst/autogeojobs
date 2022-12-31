import requests as rs
import pandas as pd
import yaml

if __name__ == '__main__':

    sheet_id = "1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY"
    sheet_url = f"https://docs.google.com/spreadsheets/u/0/d/{sheet_id}/export?format=csv&id={sheet_id}&gid=0"

    geo_companies = pd.read_csv(sheet_url)

    url_yaml = ""
    companies_list = "<ul class=\"list-disc text-left\">\n"
    geo_companies = geo_companies[geo_companies["Careers URL"].notnull()].drop_duplicates(subset="Careers URL")

    for idx, company in geo_companies.iterrows():
        urlwatch_entry = {
            "name": company.Company,
            "url": company["Careers URL"],
            "filter": ["html2text"]
        }

        url_yaml += yaml.dump(urlwatch_entry) + "---\n"
        companies_list += f"\t<li><a href=\"{company['Careers URL']}\">{company.Company}</a></li>\n"

    companies_list += "</ul>"
    with open("urls.yaml", "w") as f:
        f.write(url_yaml)

    with open("web/src/lib/CompaniesList.svelte", "w") as f:
        f.write(companies_list)


