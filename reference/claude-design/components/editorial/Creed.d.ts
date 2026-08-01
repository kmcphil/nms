/**
 * Cream belief statement panel with optional portrait.
 */
export interface CreedProps {
  /** Courier label, red — the one place a label is allowed to be red */
  label?: string;
  children?: React.ReactNode;
  /** A <MediaFrame> to sit beside the statement */
  media?: React.ReactNode;
  /** Image path — renders a MediaFrame for you (use instead of media in templates) */
  mediaSrc?: string;
  mediaAlt?: string;
  /** Which side the portrait sits on — alternate down the page */
  mediaSide?: 'left' | 'right';
}
export function Creed(props: CreedProps): JSX.Element;
