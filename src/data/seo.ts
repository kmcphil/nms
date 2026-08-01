import { site } from './site';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const defaultOg = '/brand/og-default.jpg';

export const pageSeo = {
  home: {
    title: site.name,
    description:
      'Brand strategy and growth clarity for founder-led businesses with real traction. Find the white space, sharpen the story, and focus on the strategic moves that matter most.',
    path: '/',
    ogImage: defaultOg,
  },
  about: {
    title: 'About',
    description:
      'Former TV journalist and agency founder turned strategic advisor. Natalie helps founder-led teams clarify the story before they spend more on execution.',
    path: '/about',
    ogImage: defaultOg,
  },
  services: {
    title: 'Services',
    description:
      'Growth Clarity Diagnostic, Strategic Compass Sprint, Focused Growth Retainer, and Strategic Repositioning — clear pathways into the work.',
    path: '/services',
    ogImage: defaultOg,
  },
  sprint: {
    title: 'Strategic Compass Sprint',
    description:
      'Six weeks. Three working sessions. One operating document your whole team runs on — positioning, ICP, offers, messaging, and a 60–90 day plan.',
    path: '/services/strategic-compass-sprint',
    ogImage: defaultOg,
  },
  retainer: {
    title: 'Focused Growth Retainer',
    description:
      'Ongoing strategic advisory for founders with traction and too much noise. Sharper priorities, monthly — not a task dump or fractional CMO.',
    path: '/services/focused-growth-retainer',
    ogImage: defaultOg,
  },
  reposition: {
    title: 'Strategic Repositioning Engagement',
    description:
      'High-stakes repositioning, market shifts, and multi-stakeholder alignment for established founder-led teams.',
    path: '/services/strategic-repositioning',
    ogImage: defaultOg,
  },
  results: {
    title: 'Results',
    description:
      'Case studies and client proof for Natalie’s strategic clarity work — published when approved.',
    path: '/results',
    ogImage: defaultOg,
  },
  faq: {
    title: 'FAQ',
    description:
      'Straight answers on fit, pricing rationale, timelines, AI, and what Natalie does not do.',
    path: '/faq',
    ogImage: defaultOg,
  },
  contact: {
    title: 'Start the Conversation',
    description:
      'Tell Natalie about your business and the strategic problem. She reviews every inquiry; qualified leads get a fit-call link.',
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

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: 'Brand strategist and growth clarity advisor',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Omaha',
      addressRegion: 'NE',
      addressCountry: 'US',
    },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.tagline,
    areaServed: ['Omaha', 'Midwest', 'United States'],
    priceRange: '$$$$',
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Person', name: site.name },
    url: new URL(path, site.url).href,
    areaServed: 'US',
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
