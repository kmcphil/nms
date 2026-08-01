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
          <p className="page-kicker">FAQ</p>
          <h1 className="page-title" id="faq-heading">
            Straight answers.
          </h1>
          <p className="page-lede">
            Fit, pricing rationale, timelines, AI, and what this work is not. If you still have a
            question, start the conversation.
          </p>

          <ul className="faq-list">
            {faqItems.map((item) => (
              <li key={item.question}>
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2.5rem' }}>
            <PrimaryCta />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
