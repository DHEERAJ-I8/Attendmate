# 🎓 AttendMate

> **Track smarter. Plan better. Stay above the attendance limit.**

AttendMate is an AI-powered attendance management and academic planning platform built for college students. It tracks attendance subject-by-subject, computes safe skips and recovery plans, and tells you exactly how many classes you must attend to hit your target — with a fast, modern interface and a 3D dashboard.

---

## ✨ Features

| | |
|---|---|
| 📊 **Smart Attendance Calculator** | Exact safe skips and the number of classes required to reach your target, computed live |
| 🤖 **AI Insights** | Grounded recommendations built from your real attendance numbers — never guesswork |
| 🗓️ **Timetable Management** | Weekly schedule with rooms and faculty, editable in seconds |
| 📈 **Deep Analytics** | Weekly and monthly trends, subject comparison and consistency scores |
| 🎯 **Semester Planner** | Turn exam dates and targets into a realistic attendance strategy |
| 🔔 **Actionable Alerts** | Know the moment a subject approaches the minimum requirement |
| 🌐 **Interactive 3D Dashboard** | Real-time attendance orb rendered with WebGL |

## 🧮 How the Maths Works

- **Current %** = attended ÷ (attended + missed) × 100
- **Safe skips** — how many future classes you can miss while staying at or above your target
- **Classes required** — how many consecutive classes you must attend to climb back to your target
- Every projection updates instantly as you mark attendance or adjust "what-if" scenarios

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR, server functions) |
| Routing | TanStack Router (type-safe, file-based) |
| Styling | Tailwind CSS v4 + shadcn-style UI components |
| State / Data | TanStack Query |
| 3D Graphics | Three.js + React Three Fiber |
| Charts | Recharts |
| Animations | Framer Motion |
| Backend | Lovable Cloud (PostgreSQL, Auth, Row Level Security) |
| AI | Lovable AI Gateway |
| Language | TypeScript (strict mode) |

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended: install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm (comes with Node.js)

### 1. Install dependencies

```sh
git clone https://github.com/<your-username>/attendmate.git
cd attendmate
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=<your-project-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
```

> ⚠️ Never commit `.env` to version control. It's already listed in `.gitignore`.

### 3. Run the dev server

```sh
npm run dev
```

Open **http://localhost:5173** in your browser.

### 4. Create an account

Sign up with any valid email and a password of 8+ characters — no email confirmation needed. New accounts start with a demo semester you can replace with your own subjects.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run format` | Format all files with Prettier |

## 📁 Project Structure

```text
src/
├── routes/
│   ├── index.tsx              # Landing page
│   ├── auth.tsx               # Sign in / sign up
│   └── _authenticated/        # Protected app pages
│       ├── dashboard.tsx      # Overview with stats & charts
│       ├── attendance.tsx     # Daily attendance marking
│       ├── calculator.tsx     # What-if simulator
│       ├── subjects.tsx       # Subject CRUD
│       ├── timetable.tsx      # Weekly schedule
│       ├── planner.tsx        # Semester goal planning
│       ├── analytics.tsx      # Trends & comparisons
│       ├── insights.tsx       # AI coaching
│       ├── notifications.tsx  # Alert inbox
│       ├── settings.tsx       # Profile & preferences
│       └── onboarding.tsx     # First-run setup
├── components/                # UI, dashboard & 3D components
├── services/                  # Data access layer (single source of truth)
├── hooks/                     # Auth, theme & data hooks
├── lib/                       # Attendance maths engine, AI helpers, utils
└── integrations/              # Generated backend client
```

## 🔐 Security

- Row Level Security on every table — users can only ever read and write their own data
- Server-side session handling with auto-refresh
- No secrets in the client bundle; environment variables are split between browser and server

## ☁️ Deployment

The fastest path: open the project in [Lovable](https://lovable.dev) and click **Publish** — the frontend and backend deploy together to a live URL.

Self-hosting / other platforms:

- **Vercel** — import the GitHub repo and deploy (zero-config for TanStack Start)
- **Netlify** — deploy via Git integration
- **Cloudflare Pages / Workers** — the app already targets an edge/Worker runtime

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ for students who'd rather not do the maths in their head.</p>
