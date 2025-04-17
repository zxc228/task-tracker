# Task Tracker Frontend

The official frontend for the **[Task Tracker API](../backend/README.md)**, built with Next.js 14, Tailwind CSS, and modern design principles.

`Fully client-rendered, minimal UI, smooth auth flow with JWT.`

---

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (with custom design system)
- JWT Authentication
- React Hooks + Context
- React Hot Toast for notifications
- REST API connection to FastAPI backend

---
## Installation
```bash
git clone https://github.com/yourname/task-tracker.git
cd task-tracker/frontend
npm install
```

You can also use pnpm or yarn if preferred.

---

## Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```bash
frontend/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js routing, layout, pages
│   ├── components/       # Shared UI components (Navbar, Spinner, etc.)
│   ├── features/         # Feature-specific logic (auth, tasks)
│   │   ├── auth/         # Auth forms, API functions
│   │   └── tasks/        # Tasks list, modals, CRUD logic
│   ├── hooks/            # Custom React hooks (e.g., useAuth)
│   ├── lib/              # Helpers, utils, config
│   ├── styles/           # Global or component styles
│   └── types/            # Shared TypeScript types
├── tailwind.config.ts
├── tsconfig.json
└── README.md             # You are here
```
---
## Features
- Login & registration with JWT
- Auth-aware navbar (Sign out / Login / Register)
- Task CRUD: create, read, update, delete
- Modal-based task editing
- Priority labels & status badges
- Toast-based notifications
- Responsive, minimal layout
- Type-safe API integration


## Backend API

The frontend connects to the **[FastAPI](../backend/README.md)** using token-based auth.

You’ll need to have the backend running on http://localhost:8000 (or update the API URL in lib/config.ts)

## Author

Ilya Istomin
Full-stack developer focused on building fast, modern, minimal web tools.
- GitHub: @zxc228
- Telegram: @diabobus
- Portfolio: coming soon…

---

## License

MIT — use it, modify it, deploy it.
Just give credit if you do 
