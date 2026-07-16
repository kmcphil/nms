# Natalie Micale Schultz — Website Brief

> Reference document for Marigold ONE11 development. Not a public site asset.

## Project goal

Build a premium, editorial, strategic, warm, confident, and human personal-brand website for Natalie Micale Schultz.

### Must not feel like

- A generic consulting template
- A traditional agency website
- An overly corporate website
- A beige or sterile brand
- An AI-generated website
- A site made entirely from repetitive cards
- An overanimated website

### Should feel like

- Editorial · Sharp · Warm · Confident · Strategic · Modern · Human · Founder-led · Visually alive · Distinctly Natalie

**Design north stars:** Notion, Linear, Basecamp, Stripe Press, Intercom, Pentagram, IDEO, Collins, Instrument, Work & Co — lots of whitespace, editorial typography, large photography, minimal cards, interesting layouts.

**Anti-patterns:** HubSpot, Deloitte, Accenture, McKinsey.

## Primary audience

- Founder-led companies ~$5M–$50M
- Lean leadership teams
- Growth-stage companies
- CMOs and senior decision-makers
- Established organizations navigating repositioning or strategic change

## Primary conversion goal

Move qualified prospects toward **Start the Conversation** (inquiry form).

- Do **not** use “Book a free strategy call.”
- Introductory call = fit and scope, not free consulting.
- Growth Clarity Diagnostic = lower-risk paid entry point (highlighted on Services).
- Published starting prices qualify prospects before inbox.
- Proof near major buying decisions.

## Sitemap

```
HOME
├── ABOUT
├── SERVICES
│   ├── Strategic Compass Sprint
│   ├── Focused Growth Retainer
│   └── Strategic Repositioning Engagement
├── RESULTS
├── FAQ
└── START THE CONVERSATION
```

Growth Clarity Diagnostic lives on **Services** only (no standalone page).

## Navigation

**Primary nav:** Home · About · Services · Results · FAQ · **Start the Conversation** (persistent CTA)

**Services dropdown:** Strategic Compass Sprint · Focused Growth Retainer · Strategic Repositioning Engagement

**Footer:** Privacy · Terms · Accessibility · Social · FAQ · engagement links

## UX principles

- One clear primary CTA per viewport
- Clarity and legibility over clever interaction
- Proof near buying decisions
- Avoid excessive card layouts
- Typography and photography as major design elements
- Editorial layout rhythm
- Restrained, intentional animation
- Mobile-first responsive
- Accessibility best practices

## Page content strategy (summary)

| Page | Purpose |
|------|---------|
| Home | Clarity-problem hero, credibility, symptoms, framework, engagements, diagnostic tease, proof teasers, CTA |
| About | Portrait-led editorial story; journalism → agency → strategic layer; how I work; light credentials |
| Services | Four pathways, comparison, investments, proof, framework, CTA |
| Strategic Compass Sprint | Flagship sell page — problem, fit, structure, deliverables, investment |
| Focused Growth Retainer | Senior advisory relief — not coaching / frac CMO |
| Strategic Repositioning | High-stakes, multi-stakeholder, research-informed |
| Results | Case studies + 6 distributed testimonials; **production gate** on approvals |
| FAQ | Objections, pricing rationale, AI, timelines, what she doesn’t do |
| Start the Conversation | Form-as-hero; qualify inquiries |

## Results production gate

Do **not** go live with: Lorem ipsum, fake testimonials, inactive case-study links, unapproved metrics, placeholder client logos.

## Brand (see `style-guide.pdf`)

- Colors only: Red `#C8102E`, Black `#000000`, White `#FFFFFF`
- Logos: Horizontal (primary), Stacked, NMS monogram — official files only
- Script font (`Sunday April`): logo only, never body/UI
- Favicon: white NMS on red circle

## Marigold ONE11 owns

Technical architecture · Development · Responsive · UI/UX refinement · Accessibility · SEO · Image optimization · Analytics/events · Form integration · Performance · Browser/device QA · Launch · CMS handoff

## Natalie owns

Positioning · Copy · Creative direction · Photography selection · Client permissions · Legal review

## Technical stack (this project)

- React + Vite + TypeScript
- React Router
- Custom CSS (no UI kit)
- Semantic HTML, accessible forms
- SEO meta, OG, sitemap, robots.txt
- GA4-ready event hooks (pending)
- Contact form → API endpoint (`VITE_CONTACT_ENDPOINT`)

## Reference files in this folder

- `style-guide.pdf` — official brand guidelines
- `website-brief.md` — this document
- `design-reference/` — layout screenshots and mockups (not site assets)
