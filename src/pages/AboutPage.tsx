import { PageContainer } from '../components/layout/PageContainer';
import { Seo } from '../components/seo/Seo';
import { PrimaryCta } from '../components/ui/PrimaryCta';
import { Picture } from '../components/ui/Picture';
import { aboutImages } from '../data/images';
import { pageSeo, personSchema } from '../data/seo';
import '../styles/inner-pages.css';

export function AboutPage() {
  const meta = pageSeo.about;

  return (
    <PageContainer>
      <Seo {...meta} schema={[personSchema()]} />
      <section className="page-shell" aria-labelledby="about-heading">
        <div className="wrap-wide page-split">
          <div className="about-copy">
            <header className="page-opener">
              <p className="page-opener__kicker">About</p>
              <p className="page-opener__dateline">The strategist behind the practice</p>
              <h1 className="page-opener__title" id="about-heading">
                An experienced guide.<br />
                Not a long biography.
              </h1>
            </header>

            <p className="page-lede">
              Founding a business is the hardest work there is. Clarity is what lets a founder-led
              team outrun everyone else.
            </p>

            <div className="page-body">
              <p>
                I started as a TV journalist, producing, anchoring, and reporting as media shifted
                from broadcast to digital. That training taught me to find the signal inside the
                noise, understand what makes people care, and shape a clear story under pressure.
              </p>
              <p>
                From there I moved into agency growth, helping one agency reach acquisition, then
                founding my own boutique marketing agency in 2018 and selling it to Sentral Holdings
                in 2025. Across nearly a decade at two agencies, I worked with over 150 brands.
              </p>
              <p>
                As AI began reshaping how marketing gets produced, I chose not to build another
                traditional agency. I built a focused consultancy around the work that matters even
                more now: finding the white space, clarifying the story, and helping leaders make
                the right strategic decisions before they spend more on execution.
              </p>
            </div>

            <div className="btn-row">
              <PrimaryCta />
            </div>
          </div>

          <figure className="page-photo">
            <Picture
              src={aboutImages.hero}
              alt="Natalie Micale Schultz, portrait."
              width={1333}
              height={2000}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
    </PageContainer>
  );
}
