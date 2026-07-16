import * as React from 'react';

export interface ScriptureBoxProps {
  children: React.ReactNode;
  /** Citation, e.g. "1 Timothy 2:5–6" — rendered as a mono reference. */
  reference?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Scripture citation card — white surface, crimson left-rule, italic serif verse, mono reference. */
export function ScriptureBox(props: ScriptureBoxProps): JSX.Element;
