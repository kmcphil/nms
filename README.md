# Natalie Micale Schultz — Website

Premium editorial personal-brand site. Built by Marigold ONE11.

**Project brief:** [PROJECT-BRIEF.md](PROJECT-BRIEF.md) · **Full spec:** [reference/website-brief.md](reference/website-brief.md) · **Brand:** [reference/style-guide.pdf](reference/style-guide.pdf)

## Stack

- React + Vite + TypeScript
- React Router
- Custom CSS (editorial system — not a UI kit)
- Brand colors: identity `#C8102E` · web UI red `#C20000` · black · white
- Type: Playfair Display + EB Garamond + Helvetica Neue (UI) · Courier (datelines)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

Optional image pass after adding photos:

```bash
python scripts/optimize-images.py
```

## Docs

- [docs/SEO.md](docs/SEO.md)
- [docs/QA-CHECKLIST.md](docs/QA-CHECKLIST.md)
- [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md)
- [docs/CMS-HANDOFF.md](docs/CMS-HANDOFF.md)
- Claude Design system: [`.cursor/skills/natalie-design/`](.cursor/skills/natalie-design/) · [`reference/claude-design/`](reference/claude-design/)

## Brief alignment

- Primary CTA: Start the Conversation (not “book a free strategy call”)
- Nav: Home · About · Services (dropdown) · Results · FAQ · persistent CTA
- Growth Clarity Diagnostic lives on Services (`#diagnostic`)
- Results production gate: no fake testimonials/metrics

## Ownership

- **Natalie:** positioning, copy, creative direction, photography, proof permissions
- **Marigold:** architecture, development, UI/UX, a11y, SEO, images, forms, analytics, QA, launch, CMS handoff
