import * as React from 'react';

export interface TimelineRow {
  /** Mono crimson date label, e.g. "1990". */
  date: React.ReactNode;
  /** Serif event description. */
  event: React.ReactNode;
}

export interface TimelineProps {
  /** Playfair gold header title (optional). */
  title?: React.ReactNode;
  /** Serif subtitle under the title (optional). */
  subtitle?: React.ReactNode;
  rows: TimelineRow[];
  style?: React.CSSProperties;
}

/**
 * Bordered timeline chart with a maroon gradient header and date/event rows.
 */
export function Timeline(props: TimelineProps): JSX.Element;
