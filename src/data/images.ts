/**
 * Curated photography — one primary use per image.
 * WebP for delivery; JPEG originals kept alongside for fallback tooling.
 * Keep in sync with public/images/{page}/. No cross-page repeats.
 */

export const homeImages = {
  hero: '/images/home/DL2A0265.webp',
  creed: '/images/home/DL2A0268.webp',
  framework: '/images/home/DL2A1100.webp',
  diagnostic: '/images/home/DL2A7656.webp',
  closing: '/images/home/DL2A8012.webp',
} as const;

export const aboutImages = {
  hero: '/images/about/DL2A0235.webp',
  tv: '/images/about/tv.webp',
  story: '/images/about/pandemic-tony-governor.webp',
  leadership: '/images/about/Governor.webp',
  summit: '/images/about/YP-Summit-105.webp',
  philosophy: '/images/about/DL2A7921.webp',
} as const;

export const servicesImages = {
  hero: '/images/services/DL2A0375.webp',
  clarity: '/images/services/DL2A1503.webp',
  diagnostic: '/images/services/DL2A7626.webp',
  closing: '/images/services/DL2A7970.webp',
  sprintHero: '/images/services/DL2A1513.webp',
  sprintProcess: '/images/services/DL2A3966.webp',
  retainerHero: '/images/services/DL2A1088.webp',
  retainerRhythm: '/images/services/DL2A1279.webp',
  repositionHero: '/images/services/DL2A7881.webp',
  repositionProcess: '/images/services/833A4516.webp',
} as const;

/** Results heroes reserved for approved case-study imagery — no Natalie portraits. */
export const resultsImages = {} as const;

export const faqImages = {
  accent: '/images/faq/DL2A9616.webp',
} as const;

export const contactImages = {
  hero: '/images/contact/DL2A0939.webp',
} as const;
