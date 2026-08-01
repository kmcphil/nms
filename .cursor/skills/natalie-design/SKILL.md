---
name: natalie-micale-schultz-design
description: >-
  Brand and UI system for Natalie Micale Schultz (brand strategy & growth clarity,
  Omaha NE). Use when designing or implementing site pages, components, copy voice,
  photography rules, or prototypes for this project.
---

# Natalie Micale Schultz — Design System

**Principle:** Serious strategy. Zero beige.  
**One rule:** Red means sequence or action. Nothing else.

## Where things live

| Need | Path |
|------|------|
| This skill (guidelines, tokens, component specs, UI kit) | `.cursor/skills/natalie-design/` |
| Human reference + screens | `reference/claude-design/` |
| Production app (ground truth) | `src/pages/`, `src/styles/`, `src/components/` |
| Identity style guide | `reference/style-guide.pdf` / `reference/style-guide-spec.md` |
| Brand System V1 (web) | `reference/brand-system-spec.md` |

**Production stack:** React + Vite + TypeScript (not Astro). Prefer shipping changes into `src/` over throwaway HTML unless the user asks for a mock.

## Before you design or code

1. Read `readme.md` in this skill (voice, red discipline, type, photography).
2. For production work, also open the matching live files — e.g. `src/pages/HomePage.tsx` + `src/styles/home.css` — Cursor hero polish may supersede older kit copy (no Word-style underlines on “capability”; “strategic moves” not “growth moves”).
3. UI kit screens: `ui_kits/website/` (also mirrored at `reference/claude-design/ui_kits/website/`).
4. Tokens: `tokens/*.css`.

## Red, twice

- `--brand-red: #C8102E` — logo / identity / print. Do not recolor supplied SVGs.
- `--red: #C20000` — on-screen sequence numbers, links, the one red panel.

## Logo minimums (style guide wins)

- Horizontal ≥ 160px wide → nav/footer height ~80px for the 2:1 mark  
- Stacked ≥ 120px · monogram ≥ 40px  
- Sunday April only inside logo files — never body or UI type

## If the user invokes this skill with no task

Ask what they want to build or refine, then output production React/CSS in this repo **or** static HTML mocks — whichever fits the ask.
