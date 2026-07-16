import * as React from 'react';

export interface CardProps {
  children: React.ReactNode;
  /** Left accent rule. @default "crimson" */
  rule?: 'crimson' | 'gold' | 'none';
  /** Surface treatment. @default "light" */
  tone?: 'light' | 'alt' | 'dark';
  /** @default true */
  padded?: boolean;
  style?: React.CSSProperties;
}

/**
 * Content card with the signature left accent rule. Light/alt/dark surfaces.
 * The base container for intro boxes, callouts, and feature panels.
 */
export function Card(props: CardProps): JSX.Element;
