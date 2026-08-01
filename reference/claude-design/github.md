repo: kmcphil/nms
branch: main

## Last sync

date: 2026-08-01T22:18:00Z

### Updated in this project

- Imported brand logo pack, favicon and curated photography from `public/`
- Tokens rebuilt from `src/styles/tokens.css` + `src/styles/home.css` (Brand System V1 values)
- Components authored from `src/components/**` and the home page section vocabulary
- Website UI kit recreated from `src/pages/HomePage.tsx`

## Screen map

| Project file | Built from |
|---|---|
| `ui_kits/website/HomeScreen.jsx` | `src/pages/HomePage.tsx`, `src/styles/home.css`, `Homepage.pdf` |
| `ui_kits/website/AboutScreen.jsx` | `Homepage.pdf`, `reference/language-notes.md` |
| `ui_kits/website/ServicesScreen.jsx` | `Homepage.pdf`, `src/data/site.ts` |
| `ui_kits/website/ContactScreen.jsx` | `src/components/forms/ContactForm.tsx`, `src/styles/components.css` |
| `components/chrome/*` | `src/components/navigation/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`, `src/components/sections/BragBar.tsx`, `src/styles/layout.css` |
| `components/editorial/*` | `src/styles/home.css`, `src/components/sections/EditorialSpread.tsx` |
| `components/core/*` | `src/components/ui/*`, `src/styles/global.css` |
| `tokens/*.css` | `src/styles/tokens.css`, `src/styles/home.css`, `reference/brand-system-spec.md` |
