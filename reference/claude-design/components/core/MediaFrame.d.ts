/** Photography container — clean rectangles only, no round-crop, no duotone. */
export interface MediaFrameProps {
  src?: string;
  alt?: string;
  aspect?: 'portrait' | 'landscape' | 'wide' | 'square';
  /** 2px ink border — used on portraits inside editorial sections */
  border?: boolean;
  /** Soft shadow, permitted on photography only (never on UI) */
  shadow?: boolean;
  objectPosition?: string;
  caption?: string;
}
export function MediaFrame(props: MediaFrameProps): JSX.Element;
