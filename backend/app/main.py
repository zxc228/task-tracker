from fastapi import FastAPI
from app.routers import task, auth 
from app.db.database import Base, engine
app = FastAPI(title="Task Tracker API")

# Роутер
app.include_router(task.router)
app.include_router(auth.router)

# Создание таблиц при старте (один раз)
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)