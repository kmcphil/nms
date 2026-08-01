import React from 'react';

/** The signature gesture: a hand-drawn underscore beneath the one word that carries the line. */
export function HandUnderscore({ children = 'clarity', tone = 'ink' }) {
  const color = tone === 'cream' ? 'var(--cream)' : 'currentColor';
  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      {children}
      <span aria-hidden="true" style={{
        position: 'absolute', left: '-0.02em', right: '-0.02em', bottom: '0.06em', height: '0.1em',
        background: color, borderRadius: '1px 2px 1px 2px',
        transform: 'skewX(-12deg) translateY(0.22em)', opacity: 0.9, pointerEvents: 'none',
      }} />
    </span>
  );
}
