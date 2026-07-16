# Brand System V1 — web team notes

> **Source:** [`brand-system.pdf`](./brand-system.pdf) (Brand System · V1 · For the web team · 2026)  
> Client-supplied editorial system. Distilled for Marigold ONE11 implementation.

**Principle:** Serious strategy. Zero beige.  
**One rule:** Red means sequence or action. Nothing else.

---

## Conflict with older `style-guide.pdf`

| Token | Older style guide | Brand System V1 |
|-------|-------------------|-----------------|
| Signature red | `#C8102E` | `#C20000` |
| Black / ink | `#000000` | `#141110` |
| Body text | black opacity | `#3a3631` |
| Cream | not allowed | `#F4EDE1` (on red/ink) |
| Label muted | black opacity | `#8a857c` |
| Display font | Cormorant / Instrument | **Playfair Display** |
| Body font | Newsreader | **EB Garamond** |
| UI font | Outfit | **Helvetica Neue** |
| Labels / datelines | UI sans | **Courier New** |
| Logo height (nav) | large (~7–8rem) | **44px** (footer 40px) |
| Primary CTA | red fill | **ink fill** |
| Text link | black / red hover | **red** underline + arrow |
| Photo corners | rounded OK | **clean rectangles only** (no round-crop) |
| Kickers | often red | **muted gray / ink — not red** |

Until the team locks SSOT, treat **Brand System V1 as the web direction** and reconcile logo asset pack + live CSS in a dedicated pass.

---

## Color

| Token | Hex | Use |
|-------|-----|-----|
| Ink | `#141110` | Text, structural rules |
| Signature red | `#C20000` | Sequence numbers, links/actions, one red panel |
| Paper | `#FFFFFF` | Page |
| Body text | `#3a3631` | Body on white |
| Cream | `#F4EDE1` | On red / ink |
| Label muted | `#8a857c` | Datelines / labels |
| Caption grey | `#6a655d` | Captions |
| Hairline | `#e6e4e0` | 1px rules |
| Ghost numeral | `#f0efec` | Framework step backgrounds |

**Red allowed on:** sequence numbers · links & actions · set-pieces (marquee / growth arc) · **exactly one** full red panel per page  
**Red banned on:** kickers & italic asides · body · headlines · decorative dots · two red panels on one page

---

## Typography (four voices + signature)

1. **Playfair Display** — headlines, numerals · 600 display · 700–800 numbers · tracking −0.01em on large  
2. **EB Garamond** — body, italic asides · 18–21px · line-height 1.6 · color `#3a3631`  
3. **Helvetica Neue** — nav, buttons, UI · always uppercase · tracking 0.16–0.24em · 11–12px  
4. **Courier New** — dateline labels (“THE METHOD”, “CASE 01”) · 10–11px · muted `#8a857c`  
5. **Signature logo asset only** — never retype; never Pinyon or script substitute · asset: `logo-tight.png`

---

## Logo

- Asset: `logo-tight.png` (supplied)  
- Nav height: **44px** · Footer: **40px**  
- On dark: `filter: invert(1) brightness(2)`  
- Clear space ≥ logo height on all sides  
- One mark everywhere — don’t recreate in type  

---

## Spacing & rules

- Page margin: **72px** L/R  
- Section padding: **64–80px** vertical  
- List row padding: **30px** (J2 rhythm)  
- Grid gaps: 16 / 24 / 32 / 64  
- Rules: **2px ink** structural · **1px #e6e4e0** hairline  
- Max text measure: ~**440px** hero · ~**640px** body  

---

## Section opener (every major section)

Red running number + Playfair title + Courier dateline (right) over **2px ink rule**.

- Number: Playfair 700, 22px, `#C20000`  
- Title: Playfair 600, 26px  
- Dateline: Courier 10px, tracking 0.2em, `#8a857c`  
- Rule: 2px `#141110`  

Sections read **01, 02, 03…** like a running order.

---

## Iconography

Numbers, not pictograms. Index marks (01 02 03) default. Marquee bulbs = set-pieces only.

---

## Signature gesture — hand underscore

Draw under the **one** word that carries the line (verb or payoff). **At least twice per page** — typically hero headline + closing CTA. Never twice inside the same headline.

---

## Photography

- Full-color · no chrome · clean rectangles  
- **No** arches, vignettes, round-crops, duotones, collages, caption tabs, corner ticks on photos (except noted frames)  
- Framed hero portrait may keep an **ink border**  
- Image + statement: **T1** clean split · **T2** text in negative space + white scrim · **W3** one decisive image  
- Never set type over a face or body  

---

## Buttons & links

1. **Primary** — ink fill (nav & hero)  
2. **On red panel** — ink button on red  
3. **Text link** — red underline + arrow (`Explore →`)  

Closing CTA = **the one red moment** per page (full red field once).

---

## Do / Don’t (pin this)

**Do:** number sections · body 18–21 @ 1.6 · 72px margins · underscore key words · quiet red  
**Don’t:** decorative red · type on faces · new fonts / gradients / drop shadows / rounded cards · photo collages · pictogram icons  

---

## Homepage hero implications (quick)

- Kicker / dateline → Courier, uppercase, muted `#8a857c` (not brand red)  
- Headline → Playfair; body lede → EB Garamond `#3a3631`  
- Primary CTA → ink fill (system), text link → red  
- Hero measure ~440px for copy column  
- Consider ink border on hero portrait; prefer clean rectangle over heavy radius if adopting V1 strictly  
- Hand underscore under one word in the H1 (e.g. **clarity**)
