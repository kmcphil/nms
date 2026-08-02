# Credibility logos (`BragBar`)

Marks live under `/images/logos/`. Order and metadata: `src/data/bragLogos.ts`.

## Live marks

| Brand | File |
|-------|------|
| CBS News | `cbs-news.png` |
| C-SPAN | `c-span.png` |
| WUSA 9 | `wusa-9.png` |
| 10/11 NOW News | `1011-news.png` |
| oh! | `oh.png` |

## Pending — drop file, then flip `pending: false`

| Brand | Expected file |
|-------|---------------|
| Tory Burch Foundation | `tory-burch-foundation.png` |
| Marigold ONE11 | `marigold-one11.png` |
| Second client (TBD) | `client-2.png` (rename in `bragLogos.ts` when approved) |

## Rules

- Prefer transparent-background PNG or SVG. Black-on-transparent renders best (the CSS greys them).
- The strip filters out any entry marked `pending: true`, so nothing broken renders in the meantime.
- Alternate press ↔ client in the order — don't cluster all news marks together.
- Max 8 marks. Past 8 the strip becomes wallpaper.
