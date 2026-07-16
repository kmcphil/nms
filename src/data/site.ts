export const site = {
  name: 'Natalie Micale Schultz',
  tagline: 'Strategic clarity for founders and leadership teams.',
  url: 'https://nataliemicaleschultz.com',
  email: 'hello@nataliemicaleschultz.com',
  locale: 'en_US',
  region: 'Omaha, Midwest',
};

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** Primary sitemap — exact order */
export const navPrimary: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Strategic Compass Sprint', href: '/services/strategic-compass-sprint' },
      { label: 'Focused Growth Retainer', href: '/services/focused-growth-retainer' },
      { label: 'Strategic Repositioning Engagement', href: '/services/strategic-repositioning' },
    ],
  },
  { label: 'Results', href: '/results' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Start the Conversation', href: '/start-the-conversation' },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

export const primaryCta = {
  label: 'Start the Conversation',
  href: '/start-the-conversation',
};
