import { PageContainer } from '../../components/layout/PageContainer';
import { Seo } from '../../components/seo/Seo';
import { PrimaryCta } from '../../components/ui/PrimaryCta';
import { pageSeo, serviceSchema } from '../../data/seo';
import '../../styles/inner-pages.css';

export function FocusedGrowthRetainerPage() {
  const meta = pageSeo.retainer;

  return (
    <PageContainer>
      <Seo
        {...meta}
        schema={serviceSchema(meta.title, meta.description, meta.path)}
      />
      <section className="page-shell" aria-labelledby="retainer-heading">
        <div className="wrap page-shell__inner">
          <p className="page-kicker">Focused Growth Retainer</p>
          <h1 className="page-title" id="retainer-heading">
            Senior judgment, monthly — not a task dump.
          </h1>
          <p className="page-lede">
            Ongoing strategic advisory for founders with traction and too much noise. Sharper
            priorities, clearer decisions, and a partner who will tell you what to stop.
          </p>
          <div className="page-body">
            <p>
              This is not coaching theater, not a fractional CMO seat, and not an endless backlog of
              marketing tickets. It is focused growth counsel at the decision layer.
            </p>
            <p>
              <strong>Investment:</strong> Begins at $3,500/month. Scoped to the problems that
              actually move the business.
            </p>
          </div>
          <PrimaryCta />
        </div>
      </section>
    </PageContainer>
  );
}
