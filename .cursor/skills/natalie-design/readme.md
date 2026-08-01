# Natalie Micale Schultz — Design System

Brand strategy and growth clarity for founder-led businesses with real traction. Natalie Micale Schultz is a boutique strategic consultancy in Omaha, NE — a former TV journalist who built and sold a marketing agency (Sentral Holdings, 2025), Tory Burch 2023 Fellow, now advising founder-led and growth-stage companies on positioning, story, offer architecture and 60–90 day activation.

**Principle:** *Serious strategy. Zero beige.*
**One rule:** *Red means sequence or action. Nothing else.*

The product is a single surface: the marketing website (`nataliemicaleschultz.com`) — home, about, ways to work together, results, FAQ, and a qualifying inquiry form. There is no app, no dashboard, no second product.

## Sources

| Source | What it gave us |
|---|---|
| `github.com/kmcphil/nms` (branch `main`) | Live React/Vite build. Ground truth for tokens, components, home page, logo assets, curated photography. Worth exploring further — `src/styles/home.css` and `src/pages/HomePage.tsx` carry more detail than any spec. |
| `uploads/Natalie_Brand_Style_Guide.pdf` | Identity SSOT — three logos, three colors, Sunday April logo script, clear space, minimum sizes, favicon. |
| `uploads/Homepage (1).pdf` | Desktop + mobile comp of the homepage, with copy and section order. |
| `uploads/Natalie Micale Schultz Website Questionnaire + Strategy Brief.pdf` | Positioning, audiences, voice. Distilled upstream in `reference/language-notes.md`. |
| `uploads/natalie_logo_final (1) (1)/` | Original logo pack (AI/SVG/PNG + favicon). Same marks as `assets/logos/`. |
| Repo `reference/brand-system-spec.md`, `design-direction.md` | Brand System V1 — the web direction this system implements. |

Built by Marigold ONE11 for the client.

### Red, twice — read this before you pick a hex

The identity style guide specifies **#C8102E**. Brand System V1 (the web direction, and what the live site is actually built with) specifies **#C20000**. Both are declared:

- `--brand-red: #C8102E` — logo, print, identity artwork. Do not alter the supplied SVGs.
- `--red: #C20000` — everything on screen: sequence numbers, links, the one red panel.

The team has not formally reconciled these. **Flag it before a print run.**

### Logo height — 160px minimum wins

Brand System V1 sets the nav logo at 44px tall and the footer at 40px. Those numbers were written for a tighter-cropped mark; the supplied horizontal signature is 2:1, so 44px tall is only 88px wide — barely half the style guide's **160px minimum width**, and the thin script disappears (it is invisible in white on black at that size). This system resolves in favour of the style guide: `--logo-nav-height` and `--logo-footer-height` are **80px**, giving a 160px-wide mark, and `SiteHeader` / `SiteFooter` both apply `min-width: var(--logo-horizontal-min-width)` as a floor. **Confirm with the client before launch.**

## Content fundamentals

**Voice.** Editorial, founder-led, direct, warm, premium. Natalie speaks in first person — "I help founder-led businesses…", "I review every inquiry", "I'll tell you which of your ideas to kill." The reader is "you," and the copy is not afraid to accuse: *"Your website says everything, so it says nothing."*

**Structure.** Sentences are short and land hard. Fragments are used deliberately as rhythm: *"Activity everywhere. Progress somewhere. Priority nowhere."* Headlines set up a reversal — *"You don't have a capability problem. You have a clarity problem."* — and the payoff word is italic and red.

**Casing.** Sentence case for headlines and body. UPPERCASE only for nav, buttons, kickers, datelines and prices — with wide tracking. Datelines read like a running order: `01 — THE PROBLEM`, `03 — THE METHOD`, `THE BROADCAST YEARS · TV JOURNALIST`.

**Punctuation.** Em dashes with spaces, middots between credential fragments (`Former TV journalist · 150+ brands · Tory Burch 2023 Fellow`), curly quotes, en dashes in ranges (`60–90 day`, `$1,500–$2,500`).

**Emoji: never.** No exclamation marks. No emoji, no icons standing in for words.

**Named language to use verbatim:** White Space Growth Framework · Discover the Truth · Find the White Space · Shape the Message · Activate the Strategy · Growth Clarity Diagnostic · Strategic Compass Sprint · Focused Growth Retainer · Strategic Repositioning Engagement.

**Prefer / avoid**

| Prefer | Avoid |
|---|---|
| Strategic clarity, focused growth | Full-service marketing |
| Unclear story, scattered momentum | "We do social, email, and ads" |
| Find the white space | Buzzword soup |
| Story clarity before execution | Execution-first framing |
| **Start the Conversation** | "Book a free strategy call" |

**Repel copy is a feature.** The site actively disqualifies: *"If you're looking for a yes-person or a pair of hands to execute someone else's plan, I'm not your strategist."* Keep it.

**Proof gate.** No invented testimonials, metrics or client names. Placeholder attributions read `Client name · Title, company · [being collected]`.

## Visual foundations

**Colors.** Ink `#141110`, body `#3a3631`, paper white, cream `#F4EDE1` (only on red or ink), signature red `#C20000`, label muted `#8a857c`, caption `#6a655d`, hairline `#e6e4e0`, ghost numeral `#f0efec`, night `#0d0d0d` for the one dark section. Hierarchy comes from these neutrals — never from a fourth accent.

**Red discipline.** Allowed on sequence numbers, links and actions, set-pieces, and **exactly one** full red panel per page (always the closing CTA). Banned on kickers, italic asides, body, headlines, decorative dots, and any second red panel.

**Type — four voices.** Playfair Display 600 for headlines (700 for numerals, −0.01em on large sizes); EB Garamond 18–21px / 1.6 for body and italic asides; Helvetica Neue for nav, buttons and links — always uppercase, 0.16–0.24em tracking, 11–12px; Courier New for datelines and labels, 10–11px, 0.2em, muted grey. **Sunday April** is the logo script and appears only inside the supplied logo files — never typeset, never substituted.

**Layout.** 72px page margins (24px mobile), 64–80px section padding, 30px list-row rhythm, gaps of 16/24/32/64. Containers 1100px (text) and 1440px (wide). Text measure ~440px in hero columns, ~640px in body. Editorial and often asymmetrical — folios and hairline rules, never card farms. White space is a feature.

**Borders and rules.** 2px ink rules are structural (under every section opener); 1px `#e6e4e0` hairlines divide columns and list rows. Photography may carry a 2px ink border. Nothing else has a border.

**Corner radii: 0.** Everywhere. Buttons, images, inputs, panels.

**Shadows.** None on UI. The single permitted shadow is `0 18px 48px rgba(20,17,16,.1)` on photography, used sparingly on the hero and creed portraits.

**Cards.** There are none in the usual sense. What look like cards are columns divided by hairlines — no box, no fill, no radius, no shadow, no colored left border.

**Backgrounds.** Flat fields only: white, cream, night `#0d0d0d`, red. No gradients, no textures, no patterns, no illustration. Full-bleed photography is used for editorial spreads.

**Transparency and blur.** Two places only: the sticky header (`rgba(255,255,255,.92)` + `blur(12px)`), and the white scrim behind a quote set into a photograph's negative space (`rgba(255,255,255,.86)`). On-dark text uses white at 0.88 / 0.72 / 0.45 opacity.

**Photography.** Full colour, warm natural light, neutral studio grounds, 4:5 portrait by default. Clean rectangles — no arches, vignettes, round-crops, duotones, collages or corner ticks. One primary use per image; no repeats across pages. Type never sits over a face or body.

**Signature gesture — the hand underscore.** A skewed hand-drawn stroke under the one word that carries the line (`clarity`, `story`, `default`, `thinking`). At least twice per page — typically hero headline and closing CTA — never twice inside the same headline. It is the brand's only decoration.

**Animation.** Restrained. `cubic-bezier(0.16, 1, 0.3, 1)` at 180ms (color) / 380ms (base) / 1100ms (slow reveals). Quiet fades on scroll; no bounces, no parallax, no scale-ins. `prefers-reduced-motion` is honoured.

**Hover.** Colour only — never opacity or movement. Ink button → red; red button → ink; on-red ink button → white; text link red → ink with the underline following; nav link → red. **Press:** no shrink, no shadow — the colour change is the feedback. **Focus:** 2px red outline, 3px offset.

**Fixed elements.** The header is sticky and the only fixed chrome. No floating CTAs, no cookie bars in design, no back-to-top.

## Iconography

**The system uses numbers, not pictograms.** Index marks (01 02 03 04) carry the structural role icons usually play — running section numbers, ghost numerals behind framework steps.

The one exception is the dark "The Problem" grid, where the live build draws four **28×28 stroked line marks** at 1.5px weight (arrows, rules, scatter dots, a struck rectangle) directly in `HomePage.tsx`. There is no icon font, no sprite sheet and no icon package in the codebase. `SignalCard` accepts an optional `icon` node so those marks can be passed in; nothing is substituted from a CDN set.

**Unicode:** the trailing arrow `→` on every text link, and the middot `·` as a credential separator. Both are typed characters, not icons.

**Emoji: never used.**

If new icons are ever needed, match the existing marks: 28px box, 1.5px stroke, `currentColor`, round caps, no fills — and get them approved rather than importing a library.

## Index

| File | What it is |
|---|---|
| `styles.css` | Entry point — `@import`s only. Link this one file. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `structure` · `motion` · `base` |
| `components/` | React primitives (below) |
| `ui_kits/website/` | Click-through recreation of the marketing site — see its README |
| `guidelines/` | 20 specimen cards: Colors, Type, Spacing, Brand |
| `assets/logos/` | Horizontal, stacked and monogram marks in black / red / white, plus favicon |
| `assets/photography/` | 23 curated photographs (home · about · services · contact · faq), one primary use each |
| `github.md` | Upstream repo association and screen map |
| `SKILL.md` | Agent Skills front-matter for use in Claude Code |

### Components

**core** — `Button` · `TextLink` · `Kicker` · `HandUnderscore` · `MediaFrame`
**editorial** — `SectionOpener` · `FrameworkStep` · `SignalCard` · `PathwayCard` · `ProofQuote` · `Creed` · `RedPanel` · `EditorialSpread`
**chrome** — `SiteHeader` · `SiteFooter` · `BragBar`
**forms** — `Field` · `InquiryForm`

Every family maps to something the upstream repo or the homepage comp defines. **Intentional additions:** `Kicker` and `HandUnderscore` are extracted from CSS classes (`.cover__kicker`, `.cover__mark`) rather than existing as upstream components — they are used often enough to deserve an API. `Field` is factored out of `ContactForm.tsx` for reuse.

### Not built (deliberately)

Results, FAQ and the three individual service pages are placeholders upstream, so no screens were invented for them. There are no client logo files in the repo — `BragBar` renders monochrome text marks until real SVGs land.

## Substitutions to confirm

- **Playfair Display** and **EB Garamond** load from Google Fonts. If licensed desktop/web files exist, swap the `@import` in `tokens/fonts.css` for local `@font-face` rules.
- **Helvetica Neue** and **Courier New** are system fonts with Arial / Courier fallbacks — no webfont is shipped for either.
- **Sunday April** (logo script) is not licensed here and is never needed: the logo is always the supplied SVG.
