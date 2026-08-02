export type BragLogo = {
  id: string;
  /** Short name used for text placeholder until the file lands */
  name: string;
  /** Accessible alt text for the logo mark */
  alt: string;
  /** Path under `public/images/logos/`. SVG preferred. */
  src: string;
  /**
   * Set true when the logo file isn't in `public/images/logos/` yet.
   * Pending entries are filtered out of the strip so nothing renders as text.
   */
  pending?: boolean;
};

/**
 * Credibility marks for `BragBar`.
 *
 * Order matters. Alternates press ↔ client so the strip doesn't read as
 * all-media. Tory Burch Foundation is the anchor credential and sits first.
 *
 * Add or unlock a logo by dropping the file into `public/images/logos/` and
 * removing `pending: true` on the matching entry.
 */
export const bragLogos: BragLogo[] = [
  {
    id: 'tory-burch-foundation',
    name: 'Tory Burch Foundation',
    alt: 'Tory Burch Foundation, 2023 Fellow',
    src: '/images/logos/tory-burch-foundation.svg',
  },
  {
    id: 'cbs-news',
    name: 'CBS News',
    alt: 'CBS News',
    src: '/images/logos/cbs-news.png',
  },
  {
    id: 'marigold-one11',
    name: 'Marigold ONE11',
    alt: 'Marigold ONE11',
    src: '/images/logos/marigold-one11.png',
    pending: true,
  },
  {
    id: 'c-span',
    name: 'C-SPAN',
    alt: 'C-SPAN',
    src: '/images/logos/c-span.png',
  },
  {
    id: 'oh',
    name: 'oh!',
    alt: 'oh!',
    src: '/images/logos/oh.png',
  },
  {
    id: 'wusa-9',
    name: 'WUSA 9',
    alt: 'WUSA 9',
    src: '/images/logos/wusa-9.png',
  },
  {
    id: 'client-slot-2',
    name: 'Client (pending)',
    alt: 'Client logo, pending approval',
    src: '/images/logos/client-2.png',
    pending: true,
  },
  {
    id: '1011-news',
    name: '10/11 News',
    alt: '10/11 NOW News, Omaha',
    src: '/images/logos/1011-news.png',
  },
];

/** Only marks with a live file. Everything else waits until the file lands. */
export const activeBragLogos = bragLogos.filter((logo) => !logo.pending);
