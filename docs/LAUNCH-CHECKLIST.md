# Launch checklist — nataliemicaleschultz.com

Marigold ONE11 owns launch execution. Do **not** treat staging placeholders as production-ready proof.

## Before go-live

### Content & brand
- [ ] Natalie approves home, about, services, engagement, FAQ, and contact copy
- [ ] Results page: remove staging banner and placeholders; only approved proof
- [ ] Legal: attorney review of Privacy / Terms; replace shell language
- [ ] Social URLs in footer (when provided)
- [ ] Logo SVGs and favicon verified on light and dark chrome

### Technical
- [ ] `npm run build` succeeds
- [ ] `public/robots.txt` points at `sitemap.xml`
- [ ] Sitemap lists all public routes once (no duplicate `/`)
- [ ] OG image loads: `/brand/og-default.jpg`
- [ ] Contact form posts to live `VITE_CONTACT_ENDPOINT` (API Gateway → Lambda → SES)
- [ ] Form success / error states tested end-to-end (including honeypot ignored)
- [ ] `VITE_GA_MEASUREMENT_ID` set for production only; verify events in GA4 DebugView:
  - `cta_click`
  - `form_submit` / `form_success` / `form_error`
- [ ] Cookie/consent banner only if non-essential cookies require it
- [ ] Lighthouse (mobile): LCP, CLS, accessibility pass review
- [ ] Keyboard: skip link, header menu, FAQ details, form tab order
- [ ] `prefers-reduced-motion` smoke check

### Hosting / DNS
- [ ] Staging bucket/CloudFront protected (noindex or auth)
- [ ] Production S3 + CloudFront (or chosen host) wired to domain
- [ ] TLS certificate valid
- [ ] Redirect map for any prior URLs
- [ ] Search Console property + sitemap submit
- [ ] GA4 property linked; conversion events marked

### Handoff
- [ ] Deliver `docs/CMS-HANDOFF.md` and access instructions
- [ ] Document form inbox / SES recipients
- [ ] Confirm Natalie owns Results proof gate going forward

## Environment

```bash
# .env (never commit)
VITE_CONTACT_ENDPOINT=https://…/contact
VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
```

## Explicitly out of scope for v1 launch

- Instant calendar booking on submit
- Blog / client portal
- Fake or unapproved testimonials in production
