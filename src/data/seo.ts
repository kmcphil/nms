import { site } from './site';

/**
 * Per-page SEO metadata.
 *
 * Full strategy: docs/SEO-STRATEGY.md
 * The `Seo` component reads these and sets title, description, canonical,
 * Open Graph, Twitter, robots, and JSON-LD per route.
 */

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const defaultOg = '/brand/og-default.png';

export const pageSeo = {
  home: {
    title: site.name,
    description:
      'Brand strategy and growth clarity for founder-led businesses at an inflection point. Find the white space, sharpen the story, focus on the moves that matter. Omaha, NE.',
    path: '/',
    ogImage: defaultOg,
  },
  about: {
    title: 'About Natalie',
    description:
      'Former TV journalist. Built and sold a boutique agency. Tory Burch 2023 Fellow. Now a strategic partner to founder-led businesses at an inflection point.',
    path: '/about',
    ogImage: defaultOg,
  },
  services: {
    title: 'Services',
    description:
      'Three ways in: a positioning sprint, a strategic advisory retainer, or a full repositioning engagement, plus a paid diagnostic to figure out what you actually need.',
    path: '/services',
    ogImage: defaultOg,
  },
  sprint: {
    title: 'Strategic Compass Sprint',
    description:
      'A six-week positioning sprint for founder-led teams: three working sessions, one operating document with positioning, ICP, offers, messaging, and a 60–90 day plan.',
    path: '/services/strategic-compass-sprint',
    ogImage: defaultOg,
  },
  retainer: {
    title: 'Focused Growth Retainer',
    description:
      'Senior strategic advisory for founder-led teams. Sharper priorities, monthly. Not a task dump, not a fractional CMO. Ongoing clarity for growth-stage momentum.',
    path: '/services/focused-growth-retainer',
    ogImage: defaultOg,
  },
  reposition: {
    title: 'Strategic Repositioning Engagement',
    description:
      'High-stakes repositioning for established founder-led teams: rebrand strategy, market shifts, leadership transitions, and multi-stakeholder alignment.',
    path: '/services/strategic-repositioning',
    ogImage: defaultOg,
  },
  results: {
    title: 'Results',
    description:
      "Case studies and client testimonials from Natalie's strategic clarity work. Published only with approval. Nothing invented, nothing placeholder-as-proof.",
    path: '/results',
    ogImage: defaultOg,
    // Kept out of the index until at least one real case study is approved
    // and live. Re-enable by removing this flag when proof ships.
    noindex: true,
  },
  faq: {
    title: 'FAQ',
    description:
      'Straight answers on fit, pricing, timelines, AI in strategy work, and what this engagement is not. Every question a serious founder actually asks.',
    path: '/faq',
    ogImage: defaultOg,
  },
  contact: {
    title: 'Start the Conversation',
    description:
      'Tell Natalie about your business and the strategic problem. She reads every inquiry personally. Qualified conversations move to a fit call within days.',
    path: '/start-the-conversation',
    ogImage: defaultOg,
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'How Natalie Micale Schultz collects and uses information from this website.',
    path: '/privacy',
    ogImage: defaultOg,
  },
  terms: {
    title: 'Terms',
    description: 'Terms of use for nataliemicaleschultz.com.',
    path: '/terms',
    ogImage: defaultOg,
  },
  accessibility: {
    title: 'Accessibility',
    description: 'Accessibility commitment for nataliemicaleschultz.com.',
    path: '/accessibility',
    ogImage: defaultOg,
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you requested could not be found.',
    path: '/',
    ogImage: defaultOg,
    noindex: true,
  },
} satisfies Record<string, PageSeo>;

/**
 * Person schema: Natalie herself. Used on Home and About.
 * Add `sameAs` entries as her public profiles come online
 * (LinkedIn, Tory Burch Foundation fellows page, press bylines).
 */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: 'Brand strategist and growth clarity advisor',
    description:
      'Brand strategist and growth clarity advisor to founder-led and growth-stage companies. Former TV journalist and agency founder. Tory Burch 2023 Fellow.',
    knowsAbout: [
      'Brand strategy',
      'Positioning',
      'Growth strategy',
      'Messaging architecture',
      'Offer design',
      'Strategic repositioning',
      'Founder-led business advisory',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Omaha',
      addressRegion: 'NE',
      addressCountry: 'US',
    },
    award: 'Tory Burch Foundation Fellow, 2023',
  };
}

/**
 * ProfessionalService: the consultancy entity. Used on Home and Services index.
 */
export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.tagline,
    founder: { '@type': 'Person', name: site.name },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Omaha',
      addressRegion: 'NE',
      addressCountry: 'US',
    },
    areaServed: ['Omaha', 'Midwest', 'United States'],
    priceRange: '$$$$',
  };
}

/**
 * Service schema: one per offer page.
 * Add `offers.priceSpecification` when starting prices are approved for publication.
 */
export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Person', name: site.name },
    url: new URL(path, site.url).href,
    areaServed: 'US',
    serviceType: 'Brand strategy and growth advisory',
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Start the Conversation',
    url: new URL('/start-the-conversation', site.url).href,
    mainEntity: { '@type': 'Person', name: site.name, email: site.email },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/**
 * BreadcrumbList: use on service sub-pages so search engines and rich
 * results show the hierarchy (Home › Services › {Offer}).
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}
