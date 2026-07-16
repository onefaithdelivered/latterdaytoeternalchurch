import React from 'react';

/**
 * SectionDivider — One Faith Delivered
 * A centered mono label flanked by two hairlines. Used between article sections.
 */
export function SectionDivider({ label, style = {} }) {
  return (
    <div
      style={{
        margin: '48px 0 28px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        ...style,
      }}
    >
      <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-3xs)',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--dark-gold)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
    </div>
  );
}
