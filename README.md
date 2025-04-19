# Task Tracker

A minimal, fast, and secure task tracking app built as a pet project by [Ilya Istomin](https://github.com/zxc228).  
This project is designed as a full-stack portfolio piece with **FastAPI** on the backend and **Next.js** on the frontend (in progress).

---

## Project Structure
```bash
task-tracker/
├── backend/   → FastAPI app (API, auth, SQLite, JWT)
├── frontend/  → Next.js app (UI, not finished yet)
├── README.md  → you’re here
```

Each part of the project is fully independent and documented separately.

---

## 📡 Backend

> ✅ Status: **Done**

The backend includes:
- 🔐 JWT-based authentication
- 🧠 Async SQLAlchemy with SQLite
- 📋 Task CRUD with filters
- 🔁 User-to-task relation
- ⚙️ `.env` configuration
- 🧪 Easy `curl`-based testing

📘 **[Backend README](./backend/README.md)** — setup, endpoints and more.

---

## 🧾 Frontend

> ✅ Status: **Done**

The frontend is built with:
- ⚛️ Next.js (App Router)
- 💅 Tailwind CSS
- 🔐 JWT-based auth flow

📘 **[Frontend README](./frontend/README.md)** — setup, features and more.

---
## 🐳 Running with Docker

You can run both the **backend** and **frontend** using Docker and Docker Compose.
### 📦 Requirements
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)

### 🚀 Quick Start
```bash
git clone https://github.com/zxc228/task-tracker.git
cd task-tracker
docker-compose up --build
```

- Backend: http://localhost:8000
- Frontend: http://localhost:3000

🔐 Make sure you have a valid .env file inside the backend/ folder.

### 🛑 Stopping the Containers
```bash
docker-compose down
```
---
## 👨‍💻 Author

**Ilya Istomin** — full-stack developer focused on Python and modern JavaScript.  
Currently building pet projects, real-world tools, and portfolio apps.

- GitHub: [@zxc228](https://github.com/zxc228)
- Telegram: [@diabobus](https://t.me/diabobus)
- Portfolio site: _coming soon..._

---

## 📦 License

MIT — use it, modify it, ship it 🚢