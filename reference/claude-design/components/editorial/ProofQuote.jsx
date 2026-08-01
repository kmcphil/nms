import React from 'react';

/** Editorial pull quote — italic Playfair. Used for client outcomes in the Proof section. */
export function ProofQuote({ children = 'From tangled services to a sellable value ladder — in 45 days.', attribution, tone = 'ink' }) {
  const light = tone === 'light';
  return (
    <blockquote style={{ margin: 0, padding: 0, border: 'none' }}>
      <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 1.1rem + 0.8vw, 1.75rem)', fontStyle: 'italic', fontWeight: 'var(--weight-semibold)', lineHeight: 1.3, color: light ? 'var(--cream)' : 'var(--ink)' }}>“{children}”</p>
      {attribution ? <cite style={{ display: 'block', marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', fontStyle: 'normal', color: light ? 'rgba(255,255,255,0.6)' : 'var(--label)' }}>{attribution}</cite> : null}
    </blockquote>
  );
}
