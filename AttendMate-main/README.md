# AttendMate

Smart attendance tracking for students who want to stay above the minimum requirement without guessing.

AttendMate helps you monitor subject-wise attendance, calculate safe skips, plan for future classes, and make smarter decisions before your attendance drops below the threshold.

## Why AttendMate?

- Track attendance subject by subject
- See live percentage calculations and trends
- Know exactly how many classes you can safely skip
- Plan the classes needed to reach your target
- Get AI-powered coaching and practical recovery guidance
- Stay organized with semester-level insights and notifications

## Features

- Attendance dashboard with real-time metrics
- Subject-wise attendance management
- Safe skip and required-attendance calculator
- Semester planning and attendance goal tracking
- Weekly and monthly analytics
- AI insights for recommended next steps
- Secure authentication and data handling through Supabase

## Tech Stack

- React + TypeScript
- Vite
- TanStack Start
- Tailwind CSS
- Supabase
- Recharts + Framer Motion

## Project Structure

```bash
src/
├── components/
├── hooks/
├── integrations/
├── lib/
├── routes/
├── services/
├── styles.css
├── types/
└── server.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or Bun
- A Supabase project

### Installation

```bash
git clone https://github.com/<your-username>/AttendMate.git
cd AttendMate
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the root of the project and add the required Supabase and optional AI credentials:

```env
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
AI_API_KEY=
AI_API_URL=
AI_MODEL=
```

> If `AI_API_KEY` is not configured, the app falls back to rule-based insights instead of failing.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Deployment

This project is ready to be deployed on platforms such as Vercel, Netlify, or any Node-compatible hosting environment.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome. If you want to improve AttendMate, feel free to fork the repository, create a feature branch, and submit a pull request.

## Contact

For questions or collaboration opportunities, reach out through the project repository or your preferred contact channel.
