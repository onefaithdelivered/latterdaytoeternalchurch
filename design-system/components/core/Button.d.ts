import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual language. @default "mono" */
  variant?: 'mono' | 'serif' | 'solid';
  /** Accent color. @default "crimson" */
  tone?: 'crimson' | 'gold';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Renders an anchor when set. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Primary button for One Faith Delivered. Mono variant for nav/utility,
 * serif variant for prominent editorial calls-to-action, solid for emphasis.
 */
export function Button(props: ButtonProps): JSX.Element;
