# Task Tracker API

Backend for a personal task tracker. Built with FastAPI + SQLite and JWT authentication.

## Technology Stack

- **Python 3.12**
- **FastAPI**
- **SQLAlchemy (async)**
- **SQLite**
- **JWT Authentication**
- **curl-friendly REST API**

---

## Installation

```bash
git clone https://github.com/zxc228/task-tracker.git
cd task-tracker/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Setup

Create a .env file in the backend directory
```bash
SECRET_KEY=your_super_secret_key
ALGORITHM=your_algorithm
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

It is recommended to use `openssl rand -hex 32` to generate the key

And it's recommended to use HS256


## Running the Server

```bash
cd backend
python main.py
```

### Documentation will be available at:
Swagger: http://127.0.0.1:8000/docs

## Project Structure
```
backend/
├── app/
│   ├── db/
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   └── main.py
├── .env
├── tasks.db
└── README.md
```


## Authentication
### Registration:
```bash
POST /auth/register
```

### Login:
```bash
POST /auth/login
```
Response:
```json
{
  "access_token": "<JWT>",
  "token_type": "bearer"
}
```

```Use Authorization: Bearer <JWT> for all tasks```

## Tasks
- POST /tasks/ — create
- GET /tasks/ — get a list (filters: is_completed, priority, due_before)
= GET /tasks/{id} — get one
= PUT /tasks/{id} — update
= DELETE /tasks/{id} — delete


## Author
Ilya Istomin — [telegram](https://t.me/diabobus) | portfolio (in progress)
