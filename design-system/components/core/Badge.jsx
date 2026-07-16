import React from 'react';

/**
 * Badge — One Faith Delivered
 * The signature mono eyebrow label / tag. UPPERCASE, tracked JetBrains Mono.
 * "label" = bare tracked text (section eyebrows, meta).
 * "outline" = bordered chip. "underline" = label with a 2px rule beneath.
 */
export function Badge({
  children,
  variant = 'label',   // 'label' | 'outline' | 'underline'
  tone = 'gold',       // 'gold' | 'crimson' | 'muted'
  onDark = false,
  style = {},
}) {
  const color = onDark
    ? 'var(--gold)'
    : tone === 'crimson' ? 'var(--crimson)'
    : tone === 'muted' ? 'var(--muted)'
    : 'var(--dark-gold)';

  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-2xs)',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color,
    lineHeight: 1.4,
  };

  const variants = {
    label: {},
    outline: {
      border: `1px solid ${onDark ? 'var(--gold-line)' : tone === 'crimson' ? 'var(--crimson-line)' : 'var(--gold-line)'}`,
      borderRadius: 'var(--radius-xs)',
      padding: '0.4rem 1.1rem',
    },
    underline: {
      paddingBottom: '8px',
      borderBottom: '2px solid var(--line)',
    },
  };

  return <span style={{ ...base, ...variants[variant], ...style }}>{children}</span>;
}
