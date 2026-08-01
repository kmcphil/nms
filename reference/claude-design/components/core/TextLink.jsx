import React from 'react';

/** Red uppercase text link with a trailing arrow — the secondary action in every section. */
export function TextLink({ children = 'Explore the Sprint', href = '#', arrow = true, tone = 'red' }) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'light' ? 'var(--paper)' : 'var(--red)';
  const hoverColor = tone === 'light' ? 'var(--cream)' : 'var(--ink)';
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-ui)', textTransform: 'uppercase', textDecoration: 'none',
      color: hover ? hoverColor : color, borderBottom: '1px solid ' + (hover ? hoverColor : color),
      paddingBottom: '0.15rem', display: 'inline-block', transition: 'var(--transition-color)',
    }}>{children}{arrow ? ' →' : ''}</a>
  );
}
