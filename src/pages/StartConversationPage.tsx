import { PageContainer } from '../components/layout/PageContainer';
import { ContactForm } from '../components/forms/ContactForm';
import { Seo } from '../components/seo/Seo';
import { Picture } from '../components/ui/Picture';
import { contactImages } from '../data/images';
import { contactPageSchema, pageSeo } from '../data/seo';
import '../styles/inner-pages.css';
import '../styles/components.css';

export function StartConversationPage() {
  const meta = pageSeo.contact;

  return (
    <PageContainer>
      <Seo {...meta} schema={contactPageSchema()} />
      <section className="page-shell" aria-labelledby="contact-heading">
        <div className="wrap-wide contact-layout">
          <div>
            <p className="page-kicker">Inquiry</p>
            <h1 className="page-title" id="contact-heading">
              Start the Conversation
            </h1>
            <p className="page-lede">
              Tell me about the business and the strategic problem. I review every inquiry. Qualified
              leads receive a link for a 30-minute fit call — scheduling is never automatic.
            </p>
            <figure className="page-photo">
              <Picture
                src={contactImages.hero}
                alt="Natalie Micale Schultz in conversation."
                width={1302}
                height={2000}
                loading="lazy"
              />
            </figure>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageContainer>
  );
}
