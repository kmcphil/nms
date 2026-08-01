/**
 * Primary action button — uppercase Helvetica Neue, square corners, no shadow.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Renders an anchor instead of a button */
  href?: string;
  /** ink = system default · red = hero only · onRed = ink button on the red panel · outlineLight = on photography/dark */
  variant?: 'ink' | 'red' | 'onRed' | 'outlineLight';
  size?: 'md' | 'sm';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
