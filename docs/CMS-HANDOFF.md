# Content edit handoff (v1)

Natalie Micale Schultz site content lives in the React codebase — not a hosted CMS. Marigold ONE11 can edit copy and structured data without a headless CMS; upgrade later only if non-dev editing is required.

## Where to edit what

| Content | Location |
|--------|----------|
| Site name, nav, CTA, legal link list | `src/data/site.ts` |
| Page titles / meta / schema builders | `src/data/seo.ts` |
| FAQ Q&A | `src/data/faq.ts` |
| Photo paths (one use per image) | `src/data/images.ts` + `public/images/` |
| Brag / logo strip | `src/data/bragLogos.ts` + `public/images/logos/` |
| Home sections & copy | `src/pages/HomePage.tsx` |
| About / Services / Contact / Results / FAQ | `src/pages/*.tsx` and `src/pages/services/*.tsx` |
| Legal shells | `src/pages/legal/*.tsx` (attorney review before treating as final) |
| Contact form fields | `src/components/forms/ContactForm.tsx` |

## Rules

1. **Voice:** Editorial, first person, direct. Prefer “Start the Conversation.” Never “Book a free strategy call.”
2. **Proof gate:** Do not invent testimonials, metrics, or client names. Results page staging placeholders stay labeled until approved.
3. **Photos:** One primary use per image. Prefer WebP in `images.ts`; keep JPEG siblings for fallback. Re-run `python scripts/optimize-images.py` after adding large originals.
4. **Red:** UI accent `#C20000`. Logo identity red `#C8102E` — do not recolor supplied SVGs.
5. **Sunday April:** Logo artwork only — never body or UI type.

## Deploying a content change

```bash
npm run build
npm run preview   # smoke-check locally
# then deploy dist/ per docs/LAUNCH-CHECKLIST.md
```

## Future CMS

If Natalie needs non-developer editing, migrate FAQ, Results modules, and long-form About sections first (Astro Content Collections or a small hosted CMS). Keep offer architecture and CTA routing in code reviews.
