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
          <p className="staging-banner">Staging — proof publishes only with client approval</p>
          <p className="page-kicker">Results</p>
          <h1 className="page-title" id="results-heading">
            What clarity does to a business.
          </h1>
          <p className="page-lede">
            Case studies and named testimonials ship here when Natalie has approval. Nothing invented,
            nothing placeholder-as-proof.
          </p>
          <p className="results-note">
            “From tangled services to a sellable value ladder — in 45 days.” — Client name · Title,
            company · [being collected]
          </p>
          <p className="results-note">
            “The positioning that opened a market few were serving.” — Client name · Title, company ·
            [being collected]
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
