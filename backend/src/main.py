from fastapi import FastAPI

app = FastAPI(title="Wheelsearch Backend API", version="1.0.0")


@app.get("/")
async def health_check():
    return {"message": "Wheelsearch Backend API is running!"}
