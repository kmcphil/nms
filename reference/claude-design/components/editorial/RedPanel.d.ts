/**
 * Full-bleed red closing CTA. Exactly one per page — the page's single red field.
 */
export interface RedPanelProps {
  title?: React.ReactNode;
  lede?: string;
  cta?: string;
  href?: string;
}
export function RedPanel(props: RedPanelProps): JSX.Element;
