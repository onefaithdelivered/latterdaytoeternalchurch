import React from 'react';

/**
 * Ornament — One Faith Delivered
 * The gold ✦ flourish used above heroes and inside verdict headings.
 */
export function Ornament({
  count = 3,
  glyph = '✦',
  spacing = '12px',
  onDark = false,
  style = {},
}) {
  const row = Array.from({ length: count })
    .map(() => glyph)
    .join('\u00A0\u00A0');

  return (
    <span
      style={{
        display: 'block',
        textAlign: 'center',
        color: 'var(--gold)',
        opacity: onDark ? 0.7 : 1,
        fontSize: '1rem',
        letterSpacing: spacing,
        lineHeight: 1,
        ...style,
      }}
    >
      {row}
    </span>
  );
}
