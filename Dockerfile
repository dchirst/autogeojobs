FROM ubuntu:20.04
RUN apt-get update && apt-get install -y software-properties-common gcc && \
    add-apt-repository -y ppa:deadsnakes/ppa
RUN apt-get update && apt-get install -y python3.6 python3-distutils python3-pip python3-apt python-is-python3

RUN pip install webchanges[use_browser] pandas beautifulsoup4 minidb
RUN playwright install chrome