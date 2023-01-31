import pandas as pd
import yaml


SHEET_ID = "1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY"


def get_companies(sheet_id: str = SHEET_ID) -> pd.DataFrame:
    sheet_url = f"https://docs.google.com/spreadsheets/u/0/d/{sheet_id}/export?format=csv&id={sheet_id}&gid=0"
    df = pd.read_csv(sheet_url)
    return df[(df["Careers URL"].notnull()) &
              (df["Careers URL"] != "r") &
              (df["Careers URL"] != "x") &
              (df["Skip"].isna())]\
        .drop_duplicates(subset="Careers URL")\
        .reset_index(drop=True)


def make_yaml(df: pd.DataFrame, filename: str = "urls.yaml", output_dir: str = None, rows: int = 0) -> str:
    if not output_dir:
        output_dir = "."
    url_yaml = ""
    if rows:
        df = df.head(rows)
    for idx, company in df.iterrows():
        url_yaml += f"# {idx + 1}\n"
        urlwatch_entry = {
            "name": company.Company,
            "filter": [{"element-by-tag": "body"}, {"ignore": "script, style"}]
        }
        if type(company["Ignore"]) == str:
            urlwatch_entry["filter"][1]["ignore"] = urlwatch_entry["filter"][1]["ignore"] + ", " + company["Ignore"]
        if type(company["Navigate"]) == str:
            urlwatch_entry["navigate"] = company["Careers URL"]
            urlwatch_entry["wait_until"] = "networkidle"
        else:
            urlwatch_entry["url"] = company["Careers URL"]


        if type(company["Element Class"]) == str:
            urlwatch_entry["filter"].append({"element-by-class": company["Element Class"]})
        if type(company["Element ID"]) == str:
            urlwatch_entry["filter"].append({"element-by-class": company["Element ID"]})

        urlwatch_entry["filter"].append("html2text")

        url_yaml += yaml.dump(urlwatch_entry) + "---\n"

    with open(filename, "w") as f:
        f.write(url_yaml)

    return filename


def update_companies_list(df: pd.DataFrame) -> str:
    companies_list = "<ul class=\"list-disc text-left\">\n"
    for idx, company in df.iterrows():
        companies_list += f"\t<li><a href=\"{company['Careers URL']}\">{company.Company}</a></li>\n"
    companies_list += "</ul>"

    with open("web/src/lib/CompaniesList.svelte", "w") as f:
        f.write(companies_list)


if __name__ == '__main__':
    df = get_companies()

    make_yaml(df)


    update_companies_list(df)




