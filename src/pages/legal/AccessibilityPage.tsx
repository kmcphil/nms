import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { pageSeo } from '../../data/seo';
import { site } from '../../data/site';
import '../../styles/inner-pages.css';

export function AccessibilityPage() {
  const meta = pageSeo.accessibility;

  return (
    <PageContainer>
      <Seo {...meta} />
      <section className="page-shell" aria-labelledby="a11y-heading">
        <div className="wrap page-shell__inner">
          <h1 className="page-title" id="a11y-heading">
            Accessibility
          </h1>
          <div className="legal-body">
            <p>
              {site.name} aims to make this website usable for as many people as possible. The site
              is built with semantic HTML, keyboard-reachable controls, visible focus styles, and
              respect for <code>prefers-reduced-motion</code>.
            </p>
            <h2>Standards</h2>
            <p>
              We work toward WCAG 2.2 Level AA where practical for a marketing site: text
              alternatives for meaningful images, sufficient contrast for brand-critical UI, and
              labeled form fields.
            </p>
            <h2>Feedback</h2>
            <p>
              If you encounter a barrier, email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> with the page URL and a short
              description. I will respond and prioritize a fix.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
