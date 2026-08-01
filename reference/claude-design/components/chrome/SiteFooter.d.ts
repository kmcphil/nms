/**
 * Black site footer with white logo, explore + connect columns and legal row.
 */
export interface SiteFooterProps {
  logoSrc?: string;
  tagline?: string;
  explore?: { label: string; href: string }[];
  email?: string;
  region?: string;
  year?: number;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
