import React from 'react';

const defaultLogos = ['Tory Burch Foundation', 'oh hello', '10/11 News', 'Marigold ONE11', 'Foreman Technologies', 'Contemporary Woods'];

/** Compact credibility strip under the hero — italic line of copy over greyed client marks. */
export function BragBar({ label = 'Trusted by founders, nonprofits, media organizations, and nationally recognized brands.', logos = defaultLogos }) {
  return (
    <section aria-label="Trusted by" style={{ background: 'var(--paper)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: 'clamp(2.5rem, 3.5vw, 3.5rem) var(--page-margin-mobile)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.85rem' }}>
        <p style={{ margin: 0, maxWidth: '38rem', fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 0.95rem + 0.2vw, 1.125rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--body)' }}>{label}</p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: 'clamp(1.5rem, 3.5vw, 2.75rem)', rowGap: '0.85rem' }}>
          {logos.map((logo) => (
            <li key={typeof logo === 'string' ? logo : logo.name} style={{ display: 'flex', alignItems: 'center', height: '1.75rem' }}>
              {typeof logo === 'string'
                ? <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', fontWeight: 'var(--weight-medium)', letterSpacing: '0.04em', color: 'rgba(0,0,0,0.45)', whiteSpace: 'nowrap' }}>{logo}</span>
                : <img src={logo.src} alt={logo.name} style={{ height: '100%', width: 'auto', filter: 'grayscale(1) contrast(0.92)', opacity: 0.7 }} />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
