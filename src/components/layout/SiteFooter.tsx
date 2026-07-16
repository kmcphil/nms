import { Link } from 'react-router-dom';
import { legalLinks, navPrimary, primaryCta, site } from '../../data/site';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner wrap-wide">
        <div className="footer__brand">
          <Link to="/" aria-label={`${site.name} home`}>
            <img
              className="footer__logo"
              src="/brand/logo-horizontal-white.svg"
              alt={site.name}
              width={200}
              height={100}
            />
          </Link>
          <p className="footer__tagline">{site.tagline}</p>
          <Link className="btn btn--primary footer__cta" to={primaryCta.href}>
            {primaryCta.label}
          </Link>
        </div>

        <nav className="footer__explore" aria-label="Footer">
          <p className="footer__label">Explore</p>
          <ul className="footer__nav">
            {navPrimary.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__meta">
          <p className="footer__label">Connect</p>
          <ul className="footer__nav">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>{site.region}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom wrap-wide">
        <p className="footer__copy">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="footer__legal">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
