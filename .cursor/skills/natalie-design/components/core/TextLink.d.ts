/** Uppercase red text link with trailing arrow. */
export interface TextLinkProps {
  children?: React.ReactNode;
  href?: string;
  /** Trailing → (default true) */
  arrow?: boolean;
  /** light = on red or dark backgrounds */
  tone?: 'red' | 'light';
}
export function TextLink(props: TextLinkProps): JSX.Element;
