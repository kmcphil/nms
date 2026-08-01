import React from 'react';

/** A symptom in the dark "Problem" grid — hairline cell, title, short body. No box, no radius. */
export function SignalCard({ title = 'Your sales cycle keeps stretching.', children = 'Prospects take months to understand what it is you actually do.', icon }) {
  return (
    <li style={{ margin: 0, padding: 'clamp(1.75rem, 3.5vw, 2.75rem)', listStyle: 'none' }}>
      {icon ? <span style={{ display: 'flex', alignItems: 'center', margin: '0 0 1.1rem', color: 'var(--paper)' }}>{icon}</span> : null}
      <h3 style={{ margin: '0 0 0.65rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 1.05rem + 0.35vw, 1.375rem)', fontWeight: 'var(--weight-semibold)', lineHeight: 'var(--leading-title)', color: 'var(--paper)' }}>{title}</h3>
      <p style={{ margin: 0, maxWidth: 'var(--measure-narrow)', fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm)', lineHeight: 1.55, color: 'var(--on-dark-body)' }}>{children}</p>
    </li>
  );
}
