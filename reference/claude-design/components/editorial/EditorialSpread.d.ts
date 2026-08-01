/** Full-bleed photograph with a quote set into the image's negative space (white scrim, T2 treatment). */
export interface EditorialSpreadProps {
  src?: string;
  alt?: string;
  quote?: string;
  attribution?: string;
  /** Which corner the scrim sits in — pick the emptiest area of the frame */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}
export function EditorialSpread(props: EditorialSpreadProps): JSX.Element;
