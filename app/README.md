# Lakeside Eco Sports — React app (Vercel-ready)

Animated redesign of the Lakeside Eco Sports site, built with **Vite + React 19**, **Framer Motion**, and **Lenis** smooth scroll.

## Run locally
```bash
cd app
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Deploy to Vercel
- Push this `app/` folder to a Git repo (or run `vercel` from inside `app/`).
- In Vercel: **Framework = Vite**, **Build = `npm run build`**, **Output = `dist`**.
  If the repo root is the parent folder, set **Root Directory** to `app`.
- `vercel.json` already adds the SPA rewrite so `/wine-tour` works on refresh.

## What's animated (from the original brief + Sequoia Animation-Spec)
- **Intro loader** — logo + filling progress bar, slides up to reveal the hero, gates the hero reveal.
- **Lenis smooth scroll** (disabled under `prefers-reduced-motion`).
- **Clip-mask word reveals** (`SplitText`) on every headline; the hero's is gated on the loader.
- **Parallax hero** — background drifts + content fades on scroll (`useScroll`/`useTransform`).
- **Scroll reveals** (`Reveal`) — fade + rise, once, staggered.
- **Count-ups** (`CountUp`) on the trust + eco stats.
- **Spring hover** — experience/testimonial cards lift; buttons/arrows nudge.
- **Animated mobile menu** — staggered links; sticky book bar reveals past the hero.

## Structure
```
app/src/
  lib/        anim.js (variants/easings), useLenis.js
  components/ Loader, Header, Hero, HomeSections, Footer, BookBar, Reveal, SplitText, CountUp
  pages/      Home.jsx, WineTour.jsx
  App.jsx     router + loader + smooth scroll
  styles.css  design system
app/public/assets/img/  brand photos + logo
```
All copy/prices/phone are realistic placeholders; the booking form is a no-network stub.
