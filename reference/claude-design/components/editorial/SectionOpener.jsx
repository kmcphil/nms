import React from 'react';

/** Red running number + Playfair title + Courier dateline over a 2px ink rule. Opens every major section. */
export function SectionOpener({ number = '01', title = 'The Problem', dateline = 'The method', tone = 'ink' }) {
  const light = tone === 'light';
  return (
    <header style={{
      display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'baseline',
      gap: '0.75rem 1rem', width: '100%', margin: '0 0 2.5rem', paddingBottom: '0.85rem',
      borderBottom: 'var(--rule-structural-width) solid ' + (light ? 'var(--paper)' : 'var(--ink)'),
    }}>
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 'var(--weight-bold)', color: 'var(--red)', lineHeight: 1 }}>{number}</span>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--display-md)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-display)', color: light ? 'var(--paper)' : 'var(--ink)' }}>{title}</h2>
      <p style={{ margin: 0, justifySelf: 'end', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: light ? 'rgba(255,255,255,0.6)' : 'var(--label)' }}>{dateline}</p>
    </header>
  );
}
