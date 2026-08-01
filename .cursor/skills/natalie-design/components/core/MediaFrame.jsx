import React from 'react';

const ratios = { portrait: '4 / 5', landscape: '3 / 2', wide: '16 / 9', square: '1' };

/** Photography frame. Clean rectangle — optional 2px ink border, optional soft photo shadow. */
export function MediaFrame({ src, alt = '', aspect = 'portrait', border = false, shadow = false, objectPosition = '50% 30%', caption }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        overflow: 'hidden', background: 'var(--ghost)', borderRadius: 'var(--radius)',
        border: border ? 'var(--photo-border-width) solid var(--border-photo)' : 'none',
        boxShadow: shadow ? 'var(--shadow-photo)' : 'none',
      }}>
        {src
          ? <img src={src} alt={alt} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', aspectRatio: ratios[aspect] || ratios.portrait, objectFit: 'cover', objectPosition }} />
          : <div role="img" aria-label={alt || 'Photography'} style={{ width: '100%', aspectRatio: ratios[aspect] || ratios.portrait, background: 'var(--ghost)' }} />}
      </div>
      {caption ? <figcaption style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-xs)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: 'var(--caption)' }}>{caption}</figcaption> : null}
    </figure>
  );
}
