import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { breadcrumbSchema, pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function StrategicRepositioningPage() {
  const meta = pageSeo.reposition;

  return (
    <PageContainer>
      <Seo
        {...meta}
        schema={[
          serviceSchema(meta.title, meta.description, meta.path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: meta.title, path: meta.path },
          ]),
        ]}
      />
      <section className="page-shell" aria-labelledby="reposition-heading">
        <div className="wrap page-shell__inner">
          <header className="page-opener">
            <p className="page-opener__kicker">Repositioning</p>
            <p className="page-opener__dateline">The strategic chapter</p>
            <h1 className="page-opener__title" id="reposition-heading">
              The business changed.<br />
              The story did not.
            </h1>
          </header>

          <p className="page-lede">
            High-stakes repositioning, market shifts, leadership transitions, and multi-stakeholder
            alignment. Research-informed and appropriately resourced.
          </p>

          <dl className="service-spec">
            <div className="service-spec__item">
              <dt className="service-spec__label">Format</dt>
              <dd className="service-spec__value">Custom-scoped · Multi-week engagement</dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Deliverable</dt>
              <dd className="service-spec__value">
                Repositioning, market narrative, and a rollout plan across stakeholders
              </dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Investment</dt>
              <dd className="service-spec__value">Custom-scoped, from $18,000</dd>
            </div>
          </dl>

          <div className="service-fit">
            <div className="service-fit__block">
              <p className="service-fit__label">For</p>
              <p className="service-fit__body">
                Established founder-led and growth-stage teams facing a defined strategic chapter.
                Corporate-capable tone with founder clarity.
              </p>
            </div>
            <div className="service-fit__block">
              <p className="service-fit__label">Not for</p>
              <p className="service-fit__body">
                Teams looking for a vague “refresh,” a cosmetic rebrand, or a one-week workshop.
                This is a defined problem with a written scope.
              </p>
            </div>
          </div>

          <div className="service-close">
            <p className="service-close__text">
              Written scope, timeline, and boundaries before kickoff. Every engagement begins with
              a Diagnostic to confirm fit.
            </p>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
