from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import task, auth 
from app.db.database import Base, engine
app = FastAPI(title="Task Tracker API")





app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # или ["http://localhost:3000"] для Next.js
    allow_credentials=True,
    allow_methods=["*"],  # или ["POST", "GET", "OPTIONS"]
    allow_headers=["*"],
)

# Роутер
app.include_router(task.router)
app.include_router(auth.router)

# Создание таблиц при старте (один раз)
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)