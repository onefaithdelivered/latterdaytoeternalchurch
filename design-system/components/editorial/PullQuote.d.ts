import * as React from 'react';

export interface PullQuoteProps {
  children: React.ReactNode;
  /** Attribution line, rendered as a mono uppercase source. */
  source?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Editorial pull quote — gold rule, faint tint, Playfair italic, mono source line. */
export function PullQuote(props: PullQuoteProps): JSX.Element;
