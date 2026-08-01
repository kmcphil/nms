import React from 'react';

/** Full-width magazine spread — uncropped photograph with a quote in its negative space. */
export function EditorialSpread({ src, alt = '', quote = 'Clarity is what lets a founder-led team outrun everyone else.', attribution, position = 'bottom-left' }) {
  const [v, h] = position.split('-');
  return (
    <section style={{ position: 'relative' }}>
      <figure style={{ margin: 0, position: 'relative' }}>
        {src ? <img src={src} alt={alt} loading="lazy" style={{ width: '100%', display: 'block' }} /> : <div style={{ width: '100%', aspectRatio: 'var(--aspect-wide)', background: 'var(--ghost)' }} />}
        <figcaption style={{
          position: 'absolute', [v === 'top' ? 'top' : 'bottom']: 'clamp(1.5rem, 4vw, 3.5rem)',
          [h === 'right' ? 'right' : 'left']: 'clamp(1.5rem, 4vw, 3.5rem)',
          maxWidth: 'min(28rem, 60%)', background: 'rgba(255,255,255,0.86)', padding: 'clamp(1.25rem, 2.5vw, 2rem)',
        }}>
          <blockquote style={{ margin: 0 }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 1.1rem + 0.8vw, 1.85rem)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.25, color: 'var(--ink)' }}>“{quote}”</p>
            {attribution ? <cite style={{ display: 'block', marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', fontStyle: 'normal', color: 'var(--label)' }}>{attribution}</cite> : null}
          </blockquote>
        </figcaption>
      </figure>
    </section>
  );
}
