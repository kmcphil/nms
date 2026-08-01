import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../data/seo';
import '../styles/inner-pages.css';

export function NotFoundPage() {
  const meta = pageSeo.notFound;

  return (
    <PageContainer>
      <Seo {...meta} />
      <section className="page-shell" aria-labelledby="not-found-heading">
        <div className="wrap page-shell__inner">
          <p className="page-kicker">404</p>
          <h1 className="page-title" id="not-found-heading">
            This page isn’t here.
          </h1>
          <p className="page-lede">The link may be outdated, or the page moved.</p>
          <Link className="btn btn--primary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
