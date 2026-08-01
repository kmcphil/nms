import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { pageSeo } from '../../data/seo';
import { site } from '../../data/site';
import '../../styles/inner-pages.css';

export function TermsPage() {
  const meta = pageSeo.terms;

  return (
    <PageContainer>
      <Seo {...meta} />
      <section className="page-shell" aria-labelledby="terms-heading">
        <div className="wrap page-shell__inner">
          <p className="staging-banner">Shell for attorney review — not final legal advice</p>
          <h1 className="page-title" id="terms-heading">
            Terms of Use
          </h1>
          <div className="legal-body">
            <p>Last updated: August 1, 2026</p>
            <p>
              By using {site.url.replace('https://', '')}, you agree to these terms. Engagement
              work is governed by a separate written scope and agreement.
            </p>
            <h2>Site content</h2>
            <p>
              Content on this site is for general information. It does not create a client
              relationship. Pricing shown as “begins at” is indicative until scoped in writing.
            </p>
            <h2>Acceptable use</h2>
            <p>
              Do not misuse the site, attempt to disrupt it, or submit false inquiry information.
            </p>
            <h2>Contact</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
