import React from 'react';
import { Button } from '../core/Button.jsx';

const defaultExplore = [
  { label: 'About', href: '/about' },
  { label: 'Ways to Work Together', href: '/services' },
  { label: 'Growth Clarity Diagnostic', href: '/services#diagnostic' },
  { label: 'Work With Me', href: '/start-the-conversation' },
];

/** Black footer — white logo, tagline, explore + connect columns, legal row. */
export function SiteFooter({ logoSrc = '/assets/logos/logo-horizontal-white.svg', tagline = 'Brand strategy and growth clarity for founder-led businesses with real traction.', explore = defaultExplore, email = 'hello@nataliemicaleschultz.com', region = 'Omaha, NE', year = 2026 }) {
  const label = { margin: '0 0 1rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' };
  const list = { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.65rem', fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)' };
  const link = { color: 'rgba(255,255,255,0.78)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--brand-black)', color: 'var(--paper)', padding: '4rem var(--page-margin-mobile) 1.5rem' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.85fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.14)', alignItems: 'start' }}>
          <div>
            <img src={logoSrc} alt="Natalie Micale Schultz" style={{ height: 'var(--logo-footer-height)', width: 'auto', minWidth: 'var(--logo-horizontal-min-width)', marginBottom: '1.5rem' }} />
            <p style={{ margin: '0 0 2rem', maxWidth: '22rem', fontFamily: 'var(--font-body)', fontSize: 'var(--body-xs)', lineHeight: 1.6, color: 'rgba(255,255,255,0.68)' }}>{tagline}</p>
            <Button variant="outlineLight" size="sm" href="/start-the-conversation">Start the Conversation</Button>
          </div>
          <nav aria-label="Footer">
            <p style={label}>Explore</p>
            <ul style={list}>{explore.map((i) => <li key={i.href}><a href={i.href} style={link}>{i.label}</a></li>)}</ul>
          </nav>
          <div>
            <p style={label}>Connect</p>
            <ul style={list}>
              <li><a href={'mailto:' + email} style={link}>{email}</a></li>
              <li><a href="https://www.linkedin.com" style={link}>LinkedIn</a></li>
              <li><span style={{ color: 'rgba(255,255,255,0.68)' }}>{region}</span></li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
          <p style={{ margin: 0 }}>© {year} Natalie Micale Schultz. All rights reserved.</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '1.5rem' }}>
            <li><a href="/privacy" style={link}>Privacy Policy</a></li>
            <li><a href="/terms" style={link}>Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
