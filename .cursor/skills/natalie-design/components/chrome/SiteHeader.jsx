import React from 'react';
import { Button } from '../core/Button.jsx';

const defaultNav = [
  { label: 'About', href: '/about' },
  { label: 'Ways to Work Together', href: '/services' },
];

/** Sticky site header — signature logo left, uppercase nav right, one persistent CTA. */
export function SiteHeader({ logoSrc = '/assets/logos/logo-horizontal-black.svg', nav = defaultNav, cta = 'Work With Me', ctaHref = '/start-the-conversation', activeHref }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--page-margin-mobile)', height: '7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <a href="/" aria-label="Natalie Micale Schultz — home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src={logoSrc} alt="Natalie Micale Schultz" style={{ height: 'var(--logo-nav-height)', width: 'auto', minWidth: 'var(--logo-horizontal-min-width)' }} />
        </a>
        <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-ui)', textTransform: 'uppercase', textDecoration: 'none', color: activeHref === item.href ? 'var(--red)' : 'var(--ink)' }}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Button size="sm" href={ctaHref}>{cta}</Button>
        </nav>
      </div>
    </header>
  );
}
