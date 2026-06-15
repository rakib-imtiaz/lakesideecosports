# Lakeside Eco Sports — Redesign Mock

A concept redesign of [lakesideecosports.com](https://lakesideecosports.com) — Kelowna, BC e-bike / wine / adventure tours.

## What's here
```
lakesideecosports/
├─ site/                     ← the redesigned mock (open site/index.html)
│  ├─ index.html             home page
│  ├─ wine-tour.html         flagship tour-detail template (conversion-first)
│  ├─ css/styles.css         design system
│  ├─ js/main.js             sticky nav, scroll reveals, count-up, mobile menu, booking stub
│  └─ assets/img/            harvested brand photos + logo
└─ research/
   ├─ REDESIGN-PLAN.md       audit → plan + design tokens + IA
   ├─ screenshots/           full-page captures of the CURRENT live site (desktop+mobile)
   ├─ mock-shots/            captures of THIS redesign
   ├─ shoot.mjs              Playwright: screenshot live pages
   ├─ harvest.mjs            Playwright: download brand imagery from the live site
   └─ shoot-mock.mjs         Playwright: screenshot the local mock
```

## View it
Open `site/index.html` in any browser (no build step). It's pure HTML/CSS/JS + Google Fonts.

## Process followed
1. **Analyzed** every key page with Playwright full-page screenshots (live site).
2. **Verified** the audit with a second agent reviewing the screenshots.
3. **Planned** a redesign + design system (see `research/REDESIGN-PLAN.md`).
4. **Harvested** the brand's own (genuinely good) photography + logo.
5. **Built** the home page and the flagship wine-tour detail template.

## Key changes vs. the current site
- Cinematic hero with a clear value proposition + one persistent amber **Book** CTA (replacing the ~20-card catalog dump and flat blue all-caps headings).
- Curated **Experiences** (3 tiles) instead of an undifferentiated grid.
- **Wine tour** rebuilt as a conversion page: immersive hero, hour-by-hour itinerary, "what's included," and a **sticky booking panel** (price / date / availability).
- Sustainability promoted to a **branded pillar** with animated stats (it was buried in footer badges).
- Cohesive brand system: Fraunces + Inter, lake-blue / pine-green / sunset-amber, full-bleed photography, restrained motion, mobile sticky book bar, reduced-motion safe.

## Notes
- Images are the brand's own, pulled from the live Squarespace CDN for fidelity (swap freely).
- Copy/prices/phone are realistic placeholders for the mock.
- The booking form is a no-network stub (shows a confirmation state).
- Playwright MCP wasn't connected this session, so screenshots were captured with the Playwright **library** via the scripts in `research/` (same Chromium engine).
