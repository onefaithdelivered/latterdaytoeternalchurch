import * as React from 'react';

export interface CalloutColumn {
  /** Mono uppercase eyebrow, e.g. "LDS Claim". */
  label?: React.ReactNode;
  /** Playfair crimson title. */
  title?: React.ReactNode;
  /** Serif body copy. */
  body?: React.ReactNode;
}

export interface CalloutProps {
  /** 2–3 columns; odd-indexed columns are tinted. */
  columns: CalloutColumn[];
  style?: React.CSSProperties;
}

/** Multi-column comparison callout (Claim / Record / Reality). Alternating columns tint. */
export function Callout(props: CalloutProps): JSX.Element;
