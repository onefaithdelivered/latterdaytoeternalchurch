import React from 'react';

/**
 * Timeline — One Faith Delivered
 * A bordered chart with a maroon gradient header and date/event rows.
 * Each row: crimson mono date with a crimson right-rule, serif event body.
 */
export function Timeline({ title, subtitle, rows = [], style = {} }) {
  return (
    <div
      style={{
        margin: '40px 0',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        ...style,
      }}
    >
      {(title || subtitle) && (
        <div style={{ background: 'var(--grad-panel)', padding: '18px 24px', textAlign: 'center' }}>
          {title && (
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--gold)',
                margin: 0,
              }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'rgba(245,240,232,0.7)',
                marginTop: '4px',
                margin: '4px 0 0',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div style={{ background: 'var(--surface-card)' }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr',
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'var(--crimson)',
                padding: '14px 16px',
                borderRight: '3px solid var(--crimson)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                textAlign: 'right',
              }}
            >
              {row.date}
            </div>
            <div
              style={{
                padding: '14px 20px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.65,
                color: 'var(--text-body)',
              }}
            >
              {row.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
