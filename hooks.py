from webchanges import filters
from bs4 import BeautifulSoup

class IgnoreFilter(filters.FilterBase):
    __kind__ = 'ignore'

    def filter(self, data, subfilter=None):
        if subfilter is None:
            return data

        soup = BeautifulSoup(data, 'html.parser')
        for element in soup.select(subfilter):
            element.extract()
        return str(soup)