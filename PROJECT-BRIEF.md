# Natalie Micale Schultz — PROJECT BRIEF

Marigold ONE11 development reference for Natalie’s personal-brand website.

## Quick links

| Document | Location |
|----------|----------|
| Full website brief | [reference/website-brief.md](reference/website-brief.md) |
| Brand style guide | [reference/style-guide.pdf](reference/style-guide.pdf) |
| Layout screenshots | [reference/design-reference/](reference/design-reference/) |
| Brand style guide (SSOT) | [reference/style-guide.pdf](reference/style-guide.pdf) |
| Brand specs (extracted) | [reference/style-guide-spec.md](reference/style-guide-spec.md) |
| Creative north star | [reference/design-direction.md](reference/design-direction.md) |
| Build process | [reference/build-process.md](reference/build-process.md) |

## Architecture

```
Natalie M Schultz/
├── reference/                 ← Briefs & process (not site assets)
├── public/
│   ├── brand/                 ← Logos
│   ├── images/                ← Curated photography by page
│   │   ├── home|about|services|results|faq|contact/
│   └── videos/                ← Curated video only
├── src/
│   ├── assets/                ← Vite-bundled (images|icons|fonts)
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/          ← Fill when building a page
│   │   ├── ui/
│   │   ├── forms/
│   │   └── seo/
│   ├── data/                  ← site.ts, images.ts
│   ├── hooks/
│   ├── layouts/MainLayout.tsx ← Header → Main → Footer
│   ├── pages/
│   │   ├── services/
│   │   └── legal/
│   ├── routes.tsx             ← Route table
│   ├── routePaths.ts          ← Public URL list
│   ├── styles/                ← tokens + chrome; page CSS when designed
│   └── utils/
├── PROJECT-BRIEF.md
├── package.json
└── vite.config.ts
```

## Stack

React · Vite · TypeScript · React Router · Custom CSS

## Sitemap / routes

| Page | Path |
|------|------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Strategic Compass Sprint | `/services/strategic-compass-sprint` |
| Focused Growth Retainer | `/services/focused-growth-retainer` |
| Strategic Repositioning Engagement | `/services/strategic-repositioning` |
| Results | `/results` |
| FAQ | `/faq` |
| Start the Conversation | `/start-the-conversation` |

## Current phase

**Home page built** from content strategy + assigned photography.  
Other pages remain placeholders.  
**Next:** Review Home, then build **About** only.

## Non-negotiables

1. **Brand SSOT:** `reference/style-guide.pdf` — colors, logos, Sunday April (logo only), favicon
2. **Colors only:** `#C8102E` · `#000000` · `#FFFFFF` (no invented palette)
3. **CTA:** Start the Conversation — never “Book a free strategy call”
4. **Feel:** Premium consulting firm — not agency, not coach
5. **Photos:** Curated, one primary use each — no dumps, no repeats
6. **Results:** No fake proof in production
7. **Process:** One page at a time — see `reference/build-process.md`

## Run locally

```bash
npm install
npm run dev
```
