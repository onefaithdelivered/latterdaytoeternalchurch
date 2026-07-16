import React from 'react';

/**
 * Card — One Faith Delivered
 * White surface, hairline border, soft shadow, restrained radius.
 * The signature variant carries a thick left crimson (or gold) rule.
 */
export function Card({
  children,
  rule = 'crimson',     // 'crimson' | 'gold' | 'none'
  tone = 'light',       // 'light' | 'alt' | 'dark'
  padded = true,
  style = {},
  ...rest
}) {
  const surfaces = {
    light: { background: 'var(--surface-card)', color: 'var(--text-body)' },
    alt: { background: 'var(--surface-card-alt)', color: 'var(--text-body)' },
    dark: { background: 'var(--grad-hero)', color: 'var(--text-on-dark)' },
  };

  const ruleStyle =
    rule === 'crimson' ? { borderLeft: 'var(--rule-crimson)' }
    : rule === 'gold' ? { borderLeft: 'var(--rule-gold)' }
    : {};

  return (
    <div
      style={{
        border: tone === 'dark' ? 'none' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        boxShadow: tone === 'dark' ? 'none' : 'var(--shadow-sm)',
        padding: padded ? '28px 32px' : 0,
        ...surfaces[tone],
        ...ruleStyle,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
