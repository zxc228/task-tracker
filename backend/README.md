# 📦 Backend — Task Tracker

This is the backend part of the **Task Tracker** project — a REST API for task management using **FastAPI** and **SQLite**.  
It may later be adapted for PostgreSQL and rewritten in Go.

---

## 🚀 Stack

- **FastAPI** — framework for asynchronous APIs
- **SQLite** — lightweight embedded database
- **SQLAlchemy** — ORM for database interaction
- **Pydantic** — data validation
- **Uvicorn** — ASGI server

---

## 📁 Structure

app/  
├── main.py              ← Entry point  
├── db/  
│   └── database.py      ← SQLite connection  
├── models/  
│   └── task.py          ← Task model  
├── schemas/  
│   └── task.py          ← Pydantic schema  
├── routers/  
│   └── task.py          ← CRUD endpoints  
└── services/  
    └── task.py          ← Business logic (optional)  

---

## ⚙️ Installation

```bash
# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
```

# Install dependencies
pip install -r requirements.txt

### 🛠 Environment Variables

Create a `.env` file based on the template:

```bash
cp .env.example .env
```

Fill in the required variables in the `.env` file.

---

## 🧪 Running the Application

To start the development server, run:

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`.

---

## 🧹 Linting and Formatting

TODO

---

## 🧪 Testing


TODO

---

## 📜 License

This project is licensed under the MIT License.