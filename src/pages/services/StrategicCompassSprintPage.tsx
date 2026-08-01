import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function StrategicCompassSprintPage() {
  const meta = pageSeo.sprint;

  return (
    <PageContainer>
      <Seo
        {...meta}
        schema={serviceSchema(meta.title, meta.description, meta.path)}
      />
      <section className="page-shell" aria-labelledby="sprint-heading">
        <div className="wrap page-shell__inner">
          <p className="page-kicker">Strategic Compass Sprint</p>
          <h1 className="page-title" id="sprint-heading">
            Six weeks to an operating document your team can run.
          </h1>
          <p className="page-lede">
            For businesses with traction that have outgrown their story, offers, or priorities. Three
            working sessions. Positioning, ICP, offers, messaging, and a 60–90 day activation plan.
          </p>
          <div className="page-body">
            <p>
              <strong>Fit:</strong> You have momentum, but the story is tangled and every new idea
              feels urgent. Your team needs one shared operating document — not another deck that
              dies in a folder.
            </p>
            <p>
              <strong>Not a fit:</strong> You want hands to execute someone else’s plan, or you need
              a full-service agency rebuild.
            </p>
            <p>
              <strong>Investment:</strong> Begins at $9,500. Written scope before anything starts.
            </p>
          </div>
          <PrimaryCta />
        </div>
      </section>
    </PageContainer>
  );
}
