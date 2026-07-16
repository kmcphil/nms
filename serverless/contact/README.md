# Contact form (API Gateway + Lambda + SES)

Marigold owns this path. The static Astro site posts `FormData` to `PUBLIC_CONTACT_ENDPOINT`.

## Expected behavior

1. Reject honeypot field `company_website` if filled
2. Validate required fields
3. Email Natalie via SES with engagement-based subject line
4. Return JSON `{ "ok": true }`
5. Do **not** send calendar links automatically

## Next implementation step

Deploy a small Node or Python Lambda behind API Gateway (CORS enabled for the site origin), wire SES, set `PUBLIC_CONTACT_ENDPOINT` in the Astro build environment.
