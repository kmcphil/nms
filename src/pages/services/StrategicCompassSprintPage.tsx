import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { breadcrumbSchema, pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function StrategicCompassSprintPage() {
  const meta = pageSeo.sprint;

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
      <section className="page-shell" aria-labelledby="sprint-heading">
        <div className="wrap page-shell__inner">
          <header className="page-opener">
            <p className="page-opener__kicker">Sprint</p>
            <p className="page-opener__dateline">The operating document</p>
            <h1 className="page-opener__title" id="sprint-heading">
              Six weeks to an operating document your team can run.
            </h1>
          </header>

          <p className="page-lede">
            For businesses with traction that have outgrown their story, offers, or priorities.
            Three working sessions. Positioning, ICP, offers, messaging, and a 60–90 day
            activation plan.
          </p>

          <dl className="service-spec">
            <div className="service-spec__item">
              <dt className="service-spec__label">Format</dt>
              <dd className="service-spec__value">Six weeks · Three working sessions</dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Deliverable</dt>
              <dd className="service-spec__value">
                One operating document: positioning, ICP, offers, messaging, and a 60–90 day
                activation plan
              </dd>
            </div>
            <div className="service-spec__item">
              <dt className="service-spec__label">Investment</dt>
              <dd className="service-spec__value">Begins at $9,500</dd>
            </div>
          </dl>

          <div className="service-fit">
            <div className="service-fit__block">
              <p className="service-fit__label">For</p>
              <p className="service-fit__body">
                You have momentum, but the story is tangled and every new idea feels urgent. Your
                team needs one shared operating document, not another deck that dies in a folder.
              </p>
            </div>
            <div className="service-fit__block">
              <p className="service-fit__label">Not for</p>
              <p className="service-fit__body">
                You want hands to execute someone else’s plan, or you need a full-service agency
                rebuild.
              </p>
            </div>
          </div>

          <div className="service-close">
            <p className="service-close__text">
              Written scope before anything starts. If you want a smaller commitment first, a
              Diagnostic is the natural entry point.
            </p>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
