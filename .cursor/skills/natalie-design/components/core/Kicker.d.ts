/** Courier New dateline/kicker label. */
export interface KickerProps {
  children?: React.ReactNode;
  /** muted is the default; kickers are never red */
  tone?: 'muted' | 'ink' | 'light';
  align?: 'left' | 'center' | 'right';
}
export function Kicker(props: KickerProps): JSX.Element;
