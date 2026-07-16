import * as React from 'react';

export interface OrnamentProps {
  /** Number of glyphs. @default 3 */
  count?: number;
  /** @default "✦" */
  glyph?: string;
  /** Letter-spacing between glyphs. @default "12px" */
  spacing?: string;
  /** Dims slightly for maroon surfaces. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** The gold ✦ flourish used above heroes and inside verdict headings. */
export function Ornament(props: OrnamentProps): JSX.Element;
