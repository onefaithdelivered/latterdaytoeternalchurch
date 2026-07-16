import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "label" */
  variant?: 'label' | 'outline' | 'underline';
  /** @default "gold" */
  tone?: 'gold' | 'crimson' | 'muted';
  /** Use gold on dark/maroon surfaces. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * The signature mono eyebrow label / tag — UPPERCASE, tracked JetBrains Mono.
 * Used for section eyebrows, column labels, and meta lines.
 */
export function Badge(props: BadgeProps): JSX.Element;
