from elasticsearch import Elasticsearch
from src.config import ELASTICSEARCH_ENDPOINT, ELASTICSEARCH_API_KEY, INDEX_NAME


class Elastic:
    def __init__(self):
        self.client = Elasticsearch(
            ELASTICSEARCH_ENDPOINT, api_key=ELASTICSEARCH_API_KEY
        )

    def search(self, query, index=INDEX_NAME):
        return self.client.search(index=index, body=query)

    def get_all_results(self, index=INDEX_NAME, size=1000):
        match_all_query = {
            "query": {
                "match_all": {}
            },
            "size": size
        }
        return self.search(match_all_query, index=index)


es = Elastic()
