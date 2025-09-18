# 🔖 Smart Task Manager

Smart Task Manager is a minimal Node.js/Express service for creating and managing tasks. It exposes a simple REST API with in-memory storage, suitable for demos, prototypes, and backend integration exercises.

---

## ✨ Features

- Basic task CRUD endpoints (list, create, delete)
- In-memory store for simplicity (no database required)
- JSON request/response
- Clear, modular structure (`api/` for routes, `src/` for server)

---

## 🧱 Project Structure

```
smart-task-manager/
├── api/
│   └── tasks.js           # Express router (GET/POST/DELETE)
├── docs/
│   ├── README.md
│   └── reflection.md
├── src/
│   └── server.js          # Express app mounting tasks router
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (LTS recommended)
- **Web Framework:** Express.js 4
- **Language:** JavaScript (CommonJS)

---

## 🚀 Setup & Run

Prerequisites:
- Node.js 18+ (LTS) and npm

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm run start
# or
node src/server.js
```

Server runs at:
```
http://localhost:3000
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

- GET `/api/tasks`
  - Response: `{ "tasks": [{ id, title, done }] }`

- POST `/api/tasks`
  - Body: `{ "title": "My task" }`
  - Response (201): `{ "task": { id, title, done } }`

- DELETE `/api/tasks/:id`
  - Response: `{ "task": { id, title, done } }`
  - 404 if not found

Notes:
- Storage is in-memory and resets on restart.
- `Content-Type: application/json` required for POST.

---

## ⚙️ Configuration

Environment variables:
- `PORT` (optional): port for the HTTP server. Default: `3000`.

Run with a custom port:
```bash
PORT=4000 npm run start
```

---

## 🧪 Development

- Start (prod): `npm run start`
- Start (basic dev): `npm run dev` (same as start; swap for nodemon if desired)

Suggested improvement:
```bash
npm install --save-dev nodemon
```
Then add: `"dev": "nodemon src/server.js"`

---

## 🧠 AI Usage Notes

- **Code scaffolding:** Generate boilerplate routes, validation helpers, and docs.
- **Refactors:** Propose modularization (e.g., services layer, DTOs) and add tests.
- **Docs:** Keep README and `docs/` up to date, including API examples.
- **Guardrails:** Avoid leaking secrets; review generated code for security/perf.

---

## 🗺️ Roadmap

- Add persistence (SQLite/Postgres) and a data access layer
- Add PUT/PATCH for updates
- Add request validation (Joi/Zod)
- Add unit/integration tests (Jest/Supertest)
- Add CORS and rate limiting

---

## 📄 License

MIT (see `LICENSE` if present)