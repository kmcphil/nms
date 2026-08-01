/**
 * One of the three ways in. Not a card — a column divided from its neighbours by 1px hairlines.
 */
export interface PathwayCardProps {
  title?: string;
  summary?: string;
  /** Courier, uppercase, muted — e.g. "Begins at $3,500/month" */
  price?: string;
  cta?: string;
  href?: string;
}
export function PathwayCard(props: PathwayCardProps): JSX.Element;
