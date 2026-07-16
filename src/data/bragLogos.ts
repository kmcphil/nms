export type BragLogo = {
  id: string;
  /** Short name used for text placeholder until the file lands */
  name: string;
  /** Accessible alt text for the logo mark */
  alt: string;
  /** Path under `public/images/logos/` — SVG preferred */
  src: string;
};

/**
 * Credibility marks for `BragBar`.
 * Drop matching files into `public/images/logos/` — SVG preferred.
 * Until then, the UI shows a monochrome text placeholder.
 */
export const bragLogos: BragLogo[] = [
  {
    id: 'tory-burch-foundation',
    name: 'Tory Burch Foundation',
    alt: 'Tory Burch Foundation',
    src: '/images/logos/tory-burch-foundation.svg',
  },
  {
    id: 'oh-hello',
    name: 'oh hello',
    alt: 'oh hello',
    src: '/images/logos/oh-hello.svg',
  },
  {
    id: '10-11-news',
    name: '10/11 News',
    alt: '10/11 News',
    src: '/images/logos/1011-news.svg',
  },
  {
    id: 'marigold-one11',
    name: 'Marigold ONE11',
    alt: 'Marigold ONE11',
    src: '/images/logos/marigold-one11.svg',
  },
  {
    id: 'foreman-technologies',
    name: 'Foreman Technologies',
    alt: 'Foreman Technologies',
    src: '/images/logos/foreman-technologies.svg',
  },
  {
    id: 'contemporary-woods',
    name: 'Contemporary Woods',
    alt: 'Contemporary Woods',
    src: '/images/logos/contemporary-woods.svg',
  },
];
