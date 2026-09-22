# SAIT Website Redesign — Challenge Submission

Redesign prototype for the SAIT (Students' Association of Information Technology,
Dept. of IT, SOE, CUSAT) Website Redesign Challenge.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Structure
See `app/` for routes (one per required section) and `components/` grouped by domain.
All content in `data/` is mock/placeholder data, as permitted by the challenge brief —
swap it for real department data before a production launch.

## Deploy
Push to GitHub, then import the repo at vercel.com/new. No environment variables required.
