import React from 'react';

/**
 * ScriptureBox — One Faith Delivered
 * White card, crimson left-rule, italic serif verse, mono reference.
 */
export function ScriptureBox({ children, reference, style = {} }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderLeft: 'var(--rule-gold)',
        borderLeftColor: 'var(--crimson)',
        borderLeftWidth: '4px',
        borderRadius: 'var(--radius-md)',
        padding: '22px 26px',
        margin: '28px 0',
        boxShadow: 'var(--shadow-xs)',
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          lineHeight: 1.8,
          color: 'var(--text-body)',
          fontStyle: 'italic',
          margin: 0,
        }}
      >
        {children}
      </p>
      {reference && (
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-3xs)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--dark-gold)',
            marginTop: '10px',
            fontStyle: 'normal',
          }}
        >
          {reference}
        </span>
      )}
    </div>
  );
}
