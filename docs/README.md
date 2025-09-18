# Smart Task Manager — Project Plan

## 1) Project Title & Description
Smart Task Manager is a minimal REST API for creating and managing tasks. It started with an in‑memory store and now supports Supabase as a backend, exposing endpoints to list, create, and delete tasks. The goal is a clean, modular baseline suitable for demos, backend exercises, and incremental enhancements.

## 2) Setup & Run

Prerequisites
- Node.js 18+ and npm
- Supabase project (URL + anon key)

Install dependencies
```bash
npm install
```

Run locally (default port 3000)
```bash
# Set Supabase environment variables
export SUPABASE_URL="<your-supabase-url>"
export SUPABASE_ANON_KEY="<your-anon-key>"

npm run start
# http://localhost:3000
```

On Windows (PowerShell)
```powershell
$env:SUPABASE_URL="<your-supabase-url>"; $env:SUPABASE_ANON_KEY="<your-anon-key>"; npm run start
```

## 3) Features Implemented
- Express server with JSON middleware
- Tasks router mounted at `/api/tasks`
- Endpoints:
  - GET `/api/tasks` → return all tasks
  - POST `/api/tasks` → add a task `{ title }`
  - DELETE `/api/tasks/:id` → delete a task by ID
- Supabase persistence in `tasks` table: `id`, `title`, `completed`
- Config via env vars: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, optional `PORT`

## 4) Tech Stack
- Node.js (runtime)
- Express (web framework)
- Supabase (database + JS client)
- Cursor AI (assistant inside IDE)

## 5) AI Usage Notes
AI supported multiple phases of the build:
- Code generation: scaffolded initial HTTP server, refactored to Express, created the tasks router.
- Documentation: authored and refined `README.md` (root) and this plan; updated configuration notes.
- Reflection: drafted a ~500‑word analysis in `docs/reflection.md` covering impact, limitations, and prompting lessons.
- Git workflow help: produced clean push instructions and conventional commit examples.

AI was used iteratively: generate → review → refine. Human steps included verifying env setup, resolving duplicate folders, and confirming the final API behavior. Next steps include adding validation, tests, and CI.


