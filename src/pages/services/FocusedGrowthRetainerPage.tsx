import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { breadcrumbSchema, pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function FocusedGrowthRetainerPage() {
  const meta = pageSeo.retainer;

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
      <section className="page-shell" aria-labelledby="retainer-heading">
        <div className="wrap page-shell__inner">
          <header className="page-opener">
            <p className="page-opener__kicker">Retainer</p>
            <p className="page-opener__dateline">The monthly counsel</p>
            <h1 className="page-opener__title" id="retainer-heading">
              Senior judgment, monthly. Not a task dump.
            </h1>
          </header>

          <p className="page-lede">
            Ongoing strategic advisory for founders with traction and too much noise. Sharper
            priorities, clearer decisions, and a partner who will tell you what to stop.
          </p>

          <dl className="service-spec">
            <div className="service-spec__item">
              <dt className="service-spec__label">Format</dt>
              <dd className="service-spec__value">Monthly · Ongoing counsel</dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Deliverable</dt>
              <dd className="service-spec__value">
                Sharper priorities, clearer decisions, at the decision layer
              </dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Investment</dt>
              <dd className="service-spec__value">Begins at $3,500/month</dd>
            </div>
          </dl>

          <div className="service-fit">
            <div className="service-fit__block">
              <p className="service-fit__label">For</p>
              <p className="service-fit__body">
                Founders with traction and too much noise, who need a partner willing to tell them
                what to stop as clearly as what to do next.
              </p>
            </div>
            <div className="service-fit__block">
              <p className="service-fit__label">Not for</p>
              <p className="service-fit__body">
                Coaching theater, a fractional CMO seat, or an endless backlog of marketing
                tickets. This is focused growth counsel, not staff augmentation.
              </p>
            </div>
          </div>

          <div className="service-close">
            <p className="service-close__text">
              Scoped to the problems that actually move the business. A Diagnostic is a natural
              first step to confirm the fit.
            </p>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
