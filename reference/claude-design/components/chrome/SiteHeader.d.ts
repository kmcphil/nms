/**
 * Site header — logo at 44px, uppercase Helvetica nav, one persistent ink CTA.
 */
export interface SiteHeaderProps {
  logoSrc?: string;
  nav?: { label: string; href: string }[];
  cta?: string;
  ctaHref?: string;
  /** href of the current page — renders that link red */
  activeHref?: string;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
