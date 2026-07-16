import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';

export function NotFoundPage() {
  return (
    <PageContainer>
      <section className="page-placeholder stack">
        <h1>Not found</h1>
        <p>
          <Link className="btn btn--ghost" to="/">
            Back to Home
          </Link>
        </p>
      </section>
    </PageContainer>
  );
}
