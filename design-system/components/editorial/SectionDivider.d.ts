import * as React from 'react';

export interface SectionDividerProps {
  /** Centered mono label, e.g. "III — Shared Elements". */
  label: React.ReactNode;
  style?: React.CSSProperties;
}

/** Centered mono section label flanked by two hairlines. Separates article sections. */
export function SectionDivider(props: SectionDividerProps): JSX.Element;
