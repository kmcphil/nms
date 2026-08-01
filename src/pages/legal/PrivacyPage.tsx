import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { pageSeo } from '../../data/seo';
import { site } from '../../data/site';
import '../../styles/inner-pages.css';

export function PrivacyPage() {
  const meta = pageSeo.privacy;

  return (
    <PageContainer>
      <Seo {...meta} />
      <section className="page-shell" aria-labelledby="privacy-heading">
        <div className="wrap page-shell__inner">
          <p className="staging-banner">Shell for attorney review — not final legal advice</p>
          <h1 className="page-title" id="privacy-heading">
            Privacy Policy
          </h1>
          <div className="legal-body">
            <p>Last updated: August 1, 2026</p>
            <p>
              This site is operated by {site.name} (“I,” “me”). This page describes how information
              collected through {site.url.replace('https://', '')} is handled. Final language is
              subject to legal review.
            </p>
            <h2>Information you provide</h2>
            <p>
              When you submit the inquiry form, I collect the details you enter (name, email,
              business information, and the strategic context you share) so I can evaluate fit and
              respond.
            </p>
            <h2>Analytics</h2>
            <p>
              If analytics are enabled, aggregate usage data may be collected (pages viewed, events
              such as form submission). Non-essential cookies, if used, will be disclosed and
              consented to where required.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
