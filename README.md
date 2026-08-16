# Maneesha Akash — Portfolio

A personal portfolio website for Maneesha Akash, an AI undergraduate and aspiring Software & AI Engineer. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer-Motion-free CSS animations for a fast, dependency-light site.

## Content source of truth

All personal content (education, experience, skills, projects, certificates, contact info) lives in **`lib/data.ts`**. To update anything on the site — a new project, a new skill, a change of contact details — edit that one file. Nothing else needs to change.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to your main branch will redeploy automatically.

## Project structure

```
app/                 # App Router: layout, page, global styles, favicon
components/          # All UI sections (Navbar, Hero, About, Skills, Projects, ...)
lib/data.ts          # Single source of truth for all CV-derived content
public/
  images/maneesha.jpg          # Profile photo (used in About section)
  Maneesha_Akash_Resume.pdf    # Downloadable CV (wired to the "Download CV" button)
```

## Notes

- **Design system:** near-black navy (`#0B0F14`) for the Hero and Contact sections (bookending the page), off-white/white for the body sections in between, one professional blue accent (`#2563EB`, `#4F6BFF` in dark contexts). Inter throughout (self-hosted via `@fontsource`, no external font requests). Soft, natural shadows — no glow/neon effects.
- **Dark/light mode** toggles the body sections (About, Skills, Projects, Experience, Education, Certificates) via `components/ThemeProvider.tsx`, persisted to `localStorage`, defaulting to the visitor's system preference. The Hero and Contact sections stay dark by design regardless of the toggle (a deliberate bookend, similar to a dark hero band on an otherwise light site).
- **Scroll animations** live in `components/Reveal.tsx` (IntersectionObserver-based fade-up), and the navbar's active-section underline uses the same technique in `components/Navbar.tsx`. Both fire correctly during normal scrolling; note that automated full-page screenshot tools which resize the viewport instantly (rather than scrolling) may capture these elements before they've triggered.
- **Replacing the CV file:** drop a new PDF into `public/` and update `cvPath` in `lib/data.ts` if the filename changes.
- **Replacing the photo:** replace `public/images/maneesha.jpg` (used in both the Hero and About sections).
- **Project GitHub links:** only projects with a real, working repository URL show a GitHub button, to avoid dead links (see `github` field per project in `lib/data.ts`).
- Verified: production build has zero errors, zero console errors, no horizontal scrolling from 320px to 1920px, and keyboard/focus states are in place throughout (nav, filters, modal, form).
