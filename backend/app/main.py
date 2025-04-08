from fastapi import FastAPI

app = FastAPI(title="Task Tracker API")

@app.get("/")
async def root():
    return {"message": "Welcome to Task Tracker API 🚀"}