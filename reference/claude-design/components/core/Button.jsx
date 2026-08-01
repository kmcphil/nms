import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
  fontFamily: 'var(--font-ui)', fontWeight: 'var(--weight-medium)', textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-ui-wide)', lineHeight: 1, textDecoration: 'none',
  border: '1px solid transparent', borderRadius: 'var(--radius)', cursor: 'pointer',
  transition: 'var(--transition-color)',
};

const sizes = {
  md: { fontSize: 'var(--ui-sm)', minHeight: '2.9rem', padding: '0.75rem 1.4rem' },
  sm: { fontSize: 'var(--ui-sm)', minHeight: '2.5rem', padding: '0.65rem 1.1rem' },
};

const variants = {
  ink: { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' },
  red: { background: 'var(--red)', color: 'var(--paper)', borderColor: 'var(--red)' },
  onRed: { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' },
  outlineLight: { background: 'transparent', color: 'var(--paper)', borderColor: 'rgba(255,255,255,0.5)' },
};

const hovers = {
  ink: { background: 'var(--red)', borderColor: 'var(--red)', color: 'var(--paper)' },
  red: { background: 'var(--ink)', borderColor: 'var(--ink)', color: 'var(--paper)' },
  onRed: { background: 'var(--paper)', borderColor: 'var(--paper)', color: 'var(--ink)' },
  outlineLight: { background: 'var(--paper)', borderColor: 'var(--paper)', color: 'var(--ink)' },
};

/** Primary action. Ink fill is the system default; red fill is the hero exception. */
export function Button({ children = 'Start the Conversation', href, variant = 'ink', size = 'md', disabled = false, fullWidth = false, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base, ...sizes[size] || sizes.md, ...variants[variant] || variants.ink,
    ...(hover && !disabled ? hovers[variant] || hovers.ink : null),
    ...(fullWidth ? { width: '100%' } : null),
    ...(disabled ? { opacity: 0.4, pointerEvents: 'none' } : null),
  };
  const props = { style, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), ...rest };
  if (href) return <a href={href} {...props}>{children}</a>;
  return <button type="button" disabled={disabled} onClick={onClick} {...props}>{children}</button>;
}
