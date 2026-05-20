from fastapi import FastAPI
from src.elastic import es

app = FastAPI(title="Wheelsearch API", version="1.0.0")

@app.get("/")
async def health_check():
    return {"message": "Wheelsearch Backend is running!"}

@app.get("/search")
async def search(size: int = 10):
    return es.get_all_results(size=size)
