import React from 'react';
import { Button } from '../core/Button.jsx';

/** The one red moment per page — closing CTA on a full red field. */
export function RedPanel({ title, lede = 'Brand strategy and growth clarity for founder-led businesses with real traction.', cta = 'Start the Conversation', href = '#' }) {
  return (
    <section style={{ background: 'var(--red)', color: 'var(--cream)', padding: 'clamp(4.5rem, 9vw, 6.5rem) var(--page-margin-mobile)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ maxWidth: '40rem' }}>
          <h2 style={{ margin: '0 0 1.25rem', fontFamily: 'var(--font-display)', fontSize: 'var(--display-xl)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.12, letterSpacing: 'var(--tracking-display)', color: 'var(--paper)' }}>
            {title || <>The next stage of growth starts with a <em style={{ color: 'var(--cream)' }}>clearer story</em>.</>}
          </h2>
          <p style={{ margin: '0 0 2rem', maxWidth: 'var(--measure-narrow)', fontFamily: 'var(--font-body)', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--cream)' }}>{lede}</p>
          <Button variant="onRed" href={href}>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
