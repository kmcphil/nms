import React from 'react';
import { HandUnderscore } from '../core/HandUnderscore.jsx';
import { MediaFrame } from '../core/MediaFrame.jsx';

/** Cream belief panel — Courier label + oversized Playfair statement, red on the pivot word. */
export function Creed({ label = 'What I believe', children, media, mediaSrc, mediaAlt = 'Natalie Micale Schultz', mediaSide = 'right' }) {
  const left = mediaSide === 'left';
  const figure = media || (mediaSrc ? <MediaFrame src={mediaSrc} alt={mediaAlt} objectPosition="50% 25%" /> : null);
  return (
    <section style={{ background: 'var(--cream)', color: 'var(--ink)', padding: 'clamp(4rem, 8vw, 5.5rem) var(--page-margin-mobile)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', display: 'grid', gridTemplateColumns: figure ? (left ? '0.95fr 1.05fr' : '1.05fr 0.95fr') : '1fr', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center' }}>
        <div>
          <p style={{ margin: '0 0 1.25rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-sm)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: 'var(--red)' }}>{label}</p>
          <blockquote style={{ margin: 0, maxWidth: 'var(--measure-narrow)' }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 1.3rem + 1.5vw, 2.65rem)', fontWeight: 'var(--weight-semibold)', lineHeight: 'var(--leading-title)', letterSpacing: 'var(--tracking-display)', color: 'var(--ink)' }}>
              {children || <>Strategy is what you say. <em style={{ color: 'var(--red)' }}><HandUnderscore>Story</HandUnderscore></em> is how you say it. Get both right first — everything you execute is built on it.</>}
            </p>
          </blockquote>
        </div>
        {figure ? <div style={{ order: left ? -1 : 0, borderLeft: left ? 'none' : 'var(--rule-structural-width) solid var(--ink)', borderRight: left ? 'var(--rule-structural-width) solid var(--ink)' : 'none', paddingLeft: left ? 0 : 'clamp(2rem, 4vw, 3.5rem)', paddingRight: left ? 'clamp(2rem, 4vw, 3.5rem)' : 0 }}>{figure}</div> : null}
      </div>
    </section>
  );
}
