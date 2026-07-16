import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navPrimary, primaryCta, site } from '../../data/site';

const navLinks = navPrimary.filter((item) => item.href !== primaryCta.href);

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open && !servicesOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, servicesOpen]);

  return (
    <header
      ref={headerRef}
      className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
    >
      <div className="header__inner wrap-wide">
        <Link className="header__brand" to="/" aria-label={`${site.name} home`}>
          <img
            className="header__logo header__logo--desktop"
            src="/brand/logo-horizontal-black.svg"
            alt={site.name}
            width={220}
            height={110}
          />
          <img
            className="header__logo header__logo--mobile"
            src="/brand/logo-stacked-black.svg"
            alt=""
            width={120}
            height={120}
            aria-hidden
          />
        </Link>

        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="header__toggle-bars" aria-hidden />
        </button>

        <nav
          className={`header__nav${open ? ' is-open' : ''}`}
          id={navId}
          aria-label="Primary"
        >
          <ul className="header__list">
            {navLinks.map((item) =>
              item.children ? (
                <li
                  key={item.href}
                  className={`header__item header__item--has-children${servicesOpen ? ' is-open' : ''}`}
                >
                  <button
                    className={`header__link header__link--parent${
                      pathname.startsWith('/services') ? ' is-active' : ''
                    }`}
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {item.label}
                    <span className="header__caret" aria-hidden />
                  </button>
                  <ul className="header__dropdown">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `header__dropdown-link${isActive ? ' is-active' : ''}`
                        }
                        to={item.href}
                        end
                      >
                        Overview
                      </NavLink>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          className={({ isActive }) =>
                            `header__dropdown-link${isActive ? ' is-active' : ''}`
                          }
                          to={child.href}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href} className="header__item">
                  <NavLink
                    className={({ isActive }) => `header__link${isActive ? ' is-active' : ''}`}
                    to={item.href}
                    end={item.href === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <Link className="btn btn--primary header__cta" to={primaryCta.href}>
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
