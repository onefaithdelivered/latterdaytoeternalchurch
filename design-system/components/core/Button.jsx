import React from 'react';

/**
 * Button — One Faith Delivered
 * Two visual languages live here:
 *  - "mono" buttons: JetBrains Mono, uppercase, tracked, thin bordered (nav / utility)
 *  - "serif" buttons: Playfair Display, used for prominent calls-to-action
 */
export function Button({
  children,
  variant = 'mono',      // 'mono' | 'serif' | 'solid'
  tone = 'crimson',      // 'crimson' | 'gold'
  size = 'md',           // 'sm' | 'md'
  href,
  onClick,
  disabled = false,
  iconLeft,
  iconRight,
  style = {},
  ...rest
}) {
  const accent = tone === 'gold' ? 'var(--dark-gold)' : 'var(--crimson)';
  const accentLine = tone === 'gold' ? 'var(--gold-line)' : 'var(--crimson-line)';
  const accentTint = tone === 'gold' ? 'var(--gold-tint)' : 'var(--crimson-tint)';

  const pads = {
    sm: variant === 'serif' ? '10px 20px' : '0.4rem 1.1rem',
    md: variant === 'serif' ? '16px 28px' : '0.6rem 1.4rem',
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: pads[size],
    borderRadius: variant === 'serif' ? 'var(--radius-md)' : 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-color), border-color var(--dur-base)',
    border: '1px solid',
    lineHeight: 1.1,
  };

  const variants = {
    mono: {
      fontFamily: 'var(--font-mono)',
      fontSize: size === 'sm' ? 'var(--text-2xs)' : '0.78rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: accent,
      background: 'transparent',
      borderColor: accentLine,
    },
    serif: {
      fontFamily: 'var(--font-display)',
      fontSize: size === 'sm' ? '0.95rem' : '1.1rem',
      fontWeight: 700,
      letterSpacing: '0.01em',
      color: accent,
      background: accentTint,
      borderColor: accentLine,
    },
    solid: {
      fontFamily: 'var(--font-mono)',
      fontSize: size === 'sm' ? 'var(--text-2xs)' : '0.78rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--parchment)',
      background: accent,
      borderColor: accent,
    },
  };

  const merged = { ...base, ...variants[variant], ...style };
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === 'button' ? disabled : undefined}
      style={merged}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'solid') { e.currentTarget.style.background = 'var(--dark-crimson)'; }
        else { e.currentTarget.style.background = accentTint; e.currentTarget.style.color = 'var(--dark-crimson)'; }
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.color = variants[variant].color;
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
