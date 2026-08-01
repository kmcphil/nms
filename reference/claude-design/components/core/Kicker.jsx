import React from 'react';

/** Courier dateline / kicker above a headline. Muted grey — never red. */
export function Kicker({ children = 'Brand strategy · Growth clarity · Omaha, NE', tone = 'muted', align = 'left' }) {
  const colors = { muted: 'var(--label)', ink: 'var(--ink)', light: 'rgba(255,255,255,0.6)' };
  return (
    <p style={{
      margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase',
      color: colors[tone] || colors.muted, textAlign: align, lineHeight: 1.55,
    }}>{children}</p>
  );
}
