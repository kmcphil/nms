import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Seo } from '../components/seo/Seo';
import { PrimaryCta } from '../components/ui/PrimaryCta';
import { pageSeo, professionalServiceSchema } from '../data/seo';
import '../styles/inner-pages.css';

const pathways = [
  {
    name: 'Growth Clarity Diagnostic',
    href: '/start-the-conversation',
    summary:
      'One focused working session, a written findings memo, and a straight answer about what you actually need, even if the answer is “not me.”',
    price: '$1,500–$2,500',
    id: 'diagnostic',
  },
  {
    name: 'Strategic Compass Sprint',
    href: '/services/strategic-compass-sprint',
    summary:
      'Six weeks. Three working sessions. One operating document your whole team runs on: positioning, ICP, offers, messaging, and a 60–90 day activation plan.',
    price: 'Begins at $9,500',
  },
  {
    name: 'Focused Growth Retainer',
    href: '/services/focused-growth-retainer',
    summary:
      'Ongoing strategic advisory for founders with traction and too much noise. Sharper priorities, monthly.',
    price: 'Begins at $3,500/month',
  },
  {
    name: 'Strategic Repositioning Engagement',
    href: '/services/strategic-repositioning',
    summary:
      'For established teams facing a defined strategic challenge: repositioning, stakeholder alignment, a new market chapter.',
    price: 'Custom-scoped, from $18,000',
  },
];

export function ServicesPage() {
  const meta = pageSeo.services;

  return (
    <PageContainer>
      <Seo {...meta} schema={professionalServiceSchema()} />
      <section className="page-shell" aria-labelledby="services-heading">
        <div className="wrap-wide">
          <header className="page-opener">
            <p className="page-opener__kicker">Services</p>
            <p className="page-opener__dateline">Ways to work together</p>
            <h1 className="page-opener__title" id="services-heading">
              Four ways in.<br />
              One standard of thinking.
            </h1>
          </header>

          <p className="page-lede">
            Start with a Diagnostic if you need a clear read. Choose a Sprint, Retainer, or
            Repositioning engagement when the problem is already defined.
          </p>

          <ol className="pathway-ledger">
            {pathways.map((item, i) => (
              <li className="pathway-row" key={item.name} id={item.id}>
                <span className="pathway-row__ord" aria-hidden="true">
                  N<span className="pathway-row__ord-degree">o</span> 0{i + 1}
                </span>
                <div className="pathway-row__body">
                  <h2 className="pathway-row__title">{item.name}</h2>
                  <p className="pathway-row__summary">{item.summary}</p>
                </div>
                <div className="pathway-row__rail">
                  <p className="pathway-row__price">{item.price}</p>
                  <Link className="pathway-row__cta" to={item.href}>
                    Learn more →
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <div className="services-close">
            <p className="services-close__text">
              Not sure which fits? A Diagnostic is the first step for most engagements.
            </p>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
