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
          <header className="page-opener">
            <p className="page-opener__kicker">404</p>
            <p className="page-opener__dateline">Not here</p>
            <h1 className="page-opener__title" id="not-found-heading">
              This page isn’t here.
            </h1>
          </header>

          <p className="page-lede">
            The link may be outdated, or the page moved. From here you can head back to the main
            entrance.
          </p>

          <div className="btn-row">
            <Link className="btn btn--primary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
