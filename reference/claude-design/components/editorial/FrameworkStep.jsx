import React from 'react';

/** One step of the White Space Growth Framework — ghost numeral, red index, short body. */
export function FrameworkStep({ number = '01', title = 'Discover the Truth', children = 'Your best clients, your misfit clients, what’s actually working. Evidence before aspiration.' }) {
  return (
    <li style={{ position: 'relative', margin: 0, padding: '1.875rem 0', borderTop: '1px solid var(--hairline)', overflow: 'hidden', listStyle: 'none' }}>
      <span aria-hidden="true" style={{ position: 'absolute', right: 0, top: '0.75rem', fontFamily: 'var(--font-display)', fontSize: 'var(--numeral-ghost)', fontWeight: 'var(--weight-bold)', lineHeight: 1, color: 'var(--ghost)', userSelect: 'none', pointerEvents: 'none' }}>{number}</span>
      <p style={{ position: 'relative', zIndex: 1, margin: '0 0 0.5rem', fontFamily: 'var(--font-display)', fontSize: 'var(--display-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--ink)' }}>
        <span style={{ color: 'var(--red)', marginRight: '0.45rem' }}>{number}</span>{title}
      </p>
      <p style={{ position: 'relative', zIndex: 1, margin: 0, maxWidth: 'var(--measure-narrow)', fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm)', lineHeight: 1.55, color: 'var(--body)' }}>{children}</p>
    </li>
  );
}
