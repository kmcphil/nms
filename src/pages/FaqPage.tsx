import { PageContainer } from '../components/layout/PageContainer';
import { Seo } from '../components/seo/Seo';
import { PrimaryCta } from '../components/ui/PrimaryCta';
import { faqItems } from '../data/faq';
import { faqPageSchema, pageSeo } from '../data/seo';
import '../styles/inner-pages.css';

export function FaqPage() {
  const meta = pageSeo.faq;
  const items = faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageContainer>
      <Seo {...meta} schema={faqPageSchema(items)} />
      <section className="page-shell" aria-labelledby="faq-heading">
        <div className="wrap page-shell__inner">
          <header className="page-opener">
            <p className="page-opener__kicker">FAQ</p>
            <p className="page-opener__dateline">The most-asked questions</p>
            <h1 className="page-opener__title" id="faq-heading">
              Straight answers.
            </h1>
          </header>

          <p className="page-lede">
            Fit, pricing rationale, timelines, AI, and what this work is not. If you still have a
            question, start the conversation.
          </p>

          <ul className="faq-list">
            {faqItems.map((item) => (
              <li key={item.question}>
                <details>
                  <summary>
                    <span className="faq-list__q">{item.question}</span>
                    <span className="faq-list__toggle" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>

          <div className="faq-close">
            <p className="faq-close__text">
              Still curious? Ask the specific question directly.
            </p>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
