import React from 'react';

/**
 * PullQuote — One Faith Delivered
 * Gold left-rule, faint gold tint, Playfair italic body, mono source line.
 */
export function PullQuote({ children, source, style = {} }) {
  return (
    <blockquote
      style={{
        borderLeft: 'var(--rule-gold)',
        margin: '32px 0',
        padding: '18px 28px',
        background: 'var(--gold-tint)',
        borderRadius: '0 var(--radius-md) var(--radius-md) 0',
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--dark-crimson)',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {children}
      </p>
      {source && (
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-3xs)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dark-gold)',
            marginTop: '10px',
          }}
        >
          {source}
        </span>
      )}
    </blockquote>
  );
}
