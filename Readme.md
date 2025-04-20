# 🎤 Dev Jam

> Like Def Jam… but for devs.

**Dev Jam** is a dev-to-dev matching and collaboration platform where developers can:
- Create a profile
- Match by tech stack / vibe
- Jam in real-time via chat
- Build projects together

---

## 🔧 Stack

| Area        | Tech                          |
|-------------|-------------------------------|
| Frontend    | Next.js, Tailwind, Zustand    |
| Backend     | Rust, Axum, SeaORM            |
| Realtime    | WebSocket                     |
| Database    | PostgreSQL                    |
| Auth        | JWT + GitHub OAuth (optional) |

---

## ✨ Features

- Developer profiles with GitHub integration
- Skill-based filtering + match requests
- Real-time 1-on-1 messaging
- "Jam Sessions" → collaborative mini-projects
- Dashboard w/ active matches & stats

---

## 🛠️ Run Locally

```bash
git clone https://github.com/yourname/devjam
cd devjam

# Start frontend
cd frontend
npm install
npm run dev

# Start backend
cd ../backend
cargo run

