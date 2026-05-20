import os
from dotenv import load_dotenv
load_dotenv()

ELASTICSEARCH_ENDPOINT = os.getenv("ES_ENDPOINT")
ELASTICSEARCH_API_KEY = os.getenv("ES_API_KEY")
INDEX_NAME = "motorcycles"