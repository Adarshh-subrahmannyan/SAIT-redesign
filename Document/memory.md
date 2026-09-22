# Project memory — SAIT Website Redesign

Context file for anyone (human or AI) picking this project back up. Written
2026-09-22.

## What this is
A submission prototype for the **SAIT Website Redesign Challenge** — a
competition run by the Students' Association of Information Technology
(Division of IT, School of Engineering, CUSAT). Individual/team-of-2
challenge to redesign the department's student-association website.

- Competition deadline stated in the brief PDF: **12 Sept 2026, 11:59 PM**
  (already passed as of this build — confirm with organisers whether this
  is for a future cycle, an extension, or reference use).
- Deliverable required by the brief: a public GitHub repo + a live hosted
  prototype link.
- Scored out of 100: Visual Design (25), UX & Flow (20), Responsiveness (20),
  Innovation (15), Guideline Adherence (10), Code Modularity (10).

## Reference site
Current live SAIT site: https://sait-opal.vercel.app/
Real details pulled from it into this rebuild: department founded 1995,
CUSAT/School of Engineering framing, general nav shape (Home, Placements,
Events, Notifications, Alumni, Executives...). Its extra "Hostels" and
"Notes" sections are **not** in this rebuild — they aren't in the PDF's
required section list, so they were dropped rather than kept as extras.
Revisit this if the real association wants them back.

## Decisions made so far
- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS +
  Framer Motion + lucide-react. No real shadcn/ui dependency — hand-rolled
  Tailwind primitives styled to look like it, to avoid extra install
  surface area before judging.
- **Content strategy**: mix real facts (founding year, department framing)
  with mock data for people/stats/recruiters, per the brief's explicit
  "mock data may be used" allowance. Faculty, exec committee, sub-team
  members, alumni, recruiters, and achievements are all invented —
  swap for real names before any real-world launch.
- **Visual identity**: fresh direction, not a copy of the current site —
  a "blueprint/schematic" theme (paper background, navy ink, copper accent,
  Space Grotesk + Inter, corner-bracket cards, thin rule lines instead of
  shadows/rounded cards). Dark mode auto-switches via `prefers-color-scheme`.
- **Activity Logger** (section H): UI-only, no backend, as the brief allows.
  Submissions persist client-side via `localStorage` so it's demoable
  during judging. Seed/mock submissions + a static mock leaderboard live in
  `data/activity-logger.ts`.
- **Deployment target**: Vercel (matches how the current site is hosted).

## Status
- All 9 required content sections (A–I) + footer/contact (L) are built as
  real Next.js routes — 12 routes total including the dynamic
  `/events/[slug]` detail page.
- Verified with an actual `npm install && npm run build` — compiles clean,
  all routes prerender (0 errors). Google Fonts fetch will only work with
  real internet access (blocked in the build sandbox used to test this,
  not an issue for local dev or Vercel).
- Not yet done: real photos/images (currently text/initials only, no
  `public/` assets), a live map embed for the footer (kept as a static
  card instead — Google Maps iframe wasn't worth the dependency), and any
  real backend for the Activity Logger if that's ever wanted.

## Still open (ask before changing)
- Whether to fully replace mock people/recruiter names with real ones.
- Whether solo or 2-person team — codebase isn't currently split for
  parallel ownership beyond the existing component/data folders.
- Whether real photos exist to drop into `public/`.

## Run it
```bash
npm install
npm run dev
```
Deploy: push to GitHub → import at vercel.com/new, no env vars needed.
