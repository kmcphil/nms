import React from 'react';

/** Underlined form field — no boxes, no radius, red underline on focus. */
export function Field({ label = 'Name', name, type = 'text', required = false, placeholder, options, rows, full = false, value, onChange }) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: '100%', minHeight: type === 'textarea' ? '7rem' : '3rem', padding: '0.7rem 0',
    border: 0, borderBottom: '1px solid ' + (focus ? 'var(--red)' : 'var(--hairline)'), borderRadius: 0,
    background: 'transparent', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: 'var(--body-md)',
    outline: 'none', resize: type === 'textarea' ? 'vertical' : undefined,
  };
  const shared = { name, value, onChange, required, placeholder, onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: control };
  return (
    <label style={{ display: 'grid', gap: '0.4rem', gridColumn: full ? '1 / -1' : 'auto', fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', fontWeight: 'var(--weight-medium)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink)' }}>
      <span>{label}{required ? <abbr title="required" style={{ textDecoration: 'none', color: 'var(--red)' }}> *</abbr> : null}</span>
      {options ? <select {...shared}>{options.map((o) => <option key={o} value={o}>{o}</option>)}</select>
        : type === 'textarea' ? <textarea rows={rows || 4} {...shared} />
        : <input type={type} {...shared} />}
    </label>
  );
}
