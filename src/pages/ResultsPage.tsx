import { PageContainer } from '../components/layout/PageContainer';
import { Seo } from '../components/seo/Seo';
import { PrimaryCta } from '../components/ui/PrimaryCta';
import { pageSeo } from '../data/seo';
import '../styles/inner-pages.css';

export function ResultsPage() {
  const meta = pageSeo.results;

  return (
    <PageContainer>
      <Seo {...meta} />
      <section className="page-shell" aria-labelledby="results-heading">
        <div className="wrap page-shell__inner">
          <header className="page-opener">
            <p className="page-opener__kicker">Results</p>
            <p className="page-opener__dateline">In progress</p>
            <h1 className="page-opener__title" id="results-heading">
              What clarity does to a business.
            </h1>
          </header>

          <p className="page-lede">
            Named case studies and testimonials publish here as engagements close and clients
            grant approval. What follows is representative language from recent work.
          </p>

          <ul className="results-quotes">
            <li>
              <blockquote className="results-quote">
                <p>“From tangled services to a sellable value ladder. In 45 days.”</p>
                <footer className="results-quote__attr">
                  Client · Title, company · Approval pending
                </footer>
              </blockquote>
            </li>
            <li>
              <blockquote className="results-quote">
                <p>“The positioning that opened a market few were serving.”</p>
                <footer className="results-quote__attr">
                  Client · Title, company · Approval pending
                </footer>
              </blockquote>
            </li>
          </ul>

          <p className="results-footnote">
            Editor’s note: this page publishes only reviewed, named proof. If you’d like references
            during an initial conversation, ask directly.
          </p>

          <div className="results-close">
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
