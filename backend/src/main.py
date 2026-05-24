from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.elastic import es

app = FastAPI(title="Wheelsearch API", version="1.0.0")

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins
)

@app.get("/")
async def health_check():
    return {"message": "Wheelsearch Backend is running!"}

@app.get("/search")
async def search(size: int = 10):
    return es.get_all_results(size=size)
