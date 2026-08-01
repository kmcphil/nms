/** Credibility strip beneath the hero. Accepts logo files or falls back to monochrome text marks. */
export interface BragBarProps {
  label?: string;
  /** Strings render as text marks; objects render greyscale images */
  logos?: (string | { name: string; src: string })[];
}
export function BragBar(props: BragBarProps): JSX.Element;
