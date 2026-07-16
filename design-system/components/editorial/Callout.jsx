import React from 'react';

/**
 * Callout — One Faith Delivered
 * The 3-column comparison grid (LDS Claim / Historical Record / Biblical Reality).
 * Each column: mono label, Playfair title, serif body. Middle column is tinted.
 */
export function Callout({ columns = [], style = {} }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns.length || 1}, 1fr)`,
        gap: '1px',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        margin: '32px 0',
        boxShadow: 'var(--shadow-sm)',
        ...style,
      }}
    >
      {columns.map((col, i) => (
        <div
          key={i}
          style={{
            padding: '22px 20px',
            background: i % 2 === 1 ? 'var(--surface-card-alt)' : 'var(--surface-card)',
            borderLeft: i % 2 === 1 ? '1px solid var(--border-default)' : 'none',
            borderRight: i % 2 === 1 ? '1px solid var(--border-default)' : 'none',
          }}
        >
          {col.label && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-3xs)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--dark-gold)',
                marginBottom: '10px',
                paddingBottom: '8px',
                borderBottom: '2px solid var(--line)',
              }}
            >
              {col.label}
            </div>
          )}
          {col.title && (
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--crimson)',
                marginBottom: '8px',
                lineHeight: 1.25,
              }}
            >
              {col.title}
            </div>
          )}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.87rem',
              lineHeight: 1.7,
              color: 'var(--text-body)',
              margin: 0,
            }}
          >
            {col.body}
          </p>
        </div>
      ))}
    </div>
  );
}
