import { Outlet } from 'react-router-dom';
import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/navigation/SiteHeader';

/**
 * Global layout:
 * Header → Main (page outlet) → Footer
 */
export function MainLayout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="site__main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
