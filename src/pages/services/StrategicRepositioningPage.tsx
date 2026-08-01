import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function StrategicRepositioningPage() {
  const meta = pageSeo.reposition;

  return (
    <PageContainer>
      <Seo
        {...meta}
        schema={serviceSchema(meta.title, meta.description, meta.path)}
      />
      <section className="page-shell" aria-labelledby="reposition-heading">
        <div className="wrap page-shell__inner">
          <p className="page-kicker">Strategic Repositioning Engagement</p>
          <h1 className="page-title" id="reposition-heading">
            The business changed. The story did not.
          </h1>
          <p className="page-lede">
            High-stakes repositioning, market shifts, leadership transitions, and multi-stakeholder
            alignment — research-informed and appropriately resourced.
          </p>
          <div className="page-body">
            <p>
              For established founder-led and growth-stage teams facing a defined strategic chapter,
              not a vague “refresh.” Expect a corporate-capable tone with founder clarity.
            </p>
            <p>
              <strong>Investment:</strong> Custom-scoped, from $18,000. Written scope, timeline, and
              boundaries before kickoff.
            </p>
          </div>
          <PrimaryCta />
        </div>
      </section>
    </PageContainer>
  );
}
