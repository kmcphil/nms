# SEO implementation notes

## Per-page meta

`src/components/seo/Seo.tsx` sets title, description, canonical, Open Graph, Twitter card, optional `noindex`, and JSON-LD on route change.

Page copy lives in `src/data/seo.ts` (`pageSeo`).

## Schema

| Type | Where |
|------|--------|
| `Person` + `ProfessionalService` | Home |
| `Person` | About |
| `ProfessionalService` | Services index |
| `Service` | Sprint / Retainer / Repositioning |
| `FAQPage` | FAQ |
| `ContactPage` | Start the Conversation |

## Crawlability

This is a client-rendered Vite SPA. Meta tags update in the browser. For maximum crawl fidelity at launch, prefer:

1. Prerender/SSG of public routes, **or**
2. Confirm Googlebot renders JS and re-test with URL Inspection

`vite-plugin-sitemap` emits `sitemap.xml` at build time from `src/routePaths.ts`.

## Images

- Delivery: WebP via `src/data/images.ts`, JPEG fallback through `Picture`
- Max long edge ~2000px (`scripts/optimize-images.py`)
- Default share image: `/brand/og-default.jpg` (1200×630)
