import React from 'react';

/** An engagement column: Playfair title, summary, Courier price, red text link. Divided by hairlines, not boxed. */
export function PathwayCard({ title = 'The Strategic Compass Sprint', summary = 'Six weeks. Three working sessions. One operating document your whole team runs on.', price = 'Begins at $9,500', cta = 'Explore the Sprint', href = '#' }) {
  return (
    <article style={{ padding: '1.875rem 1.25rem' }}>
      <h4 style={{ margin: '0 0 0.75rem', fontFamily: 'var(--font-display)', fontSize: 'var(--display-sm)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.2, color: 'var(--ink)' }}>{title}</h4>
      <p style={{ margin: '0 0 1rem', fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm)', lineHeight: 1.55, color: 'var(--body)' }}>{summary}</p>
      <p style={{ margin: '0 0 1.25rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-sm)', letterSpacing: 'var(--tracking-ui)', textTransform: 'uppercase', color: 'var(--label)' }}>{price}</p>
      <a href={href} style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', letterSpacing: 'var(--tracking-ui)', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none', borderBottom: '1px solid var(--red)', paddingBottom: '0.15rem' }}>{cta} →</a>
    </article>
  );
}
