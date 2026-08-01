import { Link } from 'react-router-dom';
import { BragBar } from '../components/sections/BragBar';
import { PrimaryCta } from '../components/ui/PrimaryCta';
import { Picture } from '../components/ui/Picture';
import { Seo } from '../components/seo/Seo';
import { homeImages } from '../data/images';
import { pageSeo, personSchema, professionalServiceSchema } from '../data/seo';
import '../styles/home.css';

const problemSignals = [
  {
    icon: 'stretch' as const,
    title: 'Your sales cycle keeps stretching.',
    body: 'Prospects take months to understand what it is you actually do.',
  },
  {
    icon: 'lines' as const,
    title: 'Your website says everything, so it says nothing.',
    body: (
      <>
        Every service you <em>can</em> deliver is there, but none of what you should be{' '}
        <em>known</em> for is clear.
      </>
    ),
  },
  {
    icon: 'scatter' as const,
    title: 'Your team is busy, not focused.',
    body: 'Activity everywhere. Progress somewhere. Priority nowhere.',
  },
  {
    icon: 'slash' as const,
    title: 'Your best work is invisible.',
    body: 'The offer your best clients rave about is buried under everything else you sell — no clear value ladder.',
  },
];

function ProblemIcon({ name }: { name: (typeof problemSignals)[number]['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    'aria-hidden': true as const,
  };

  if (name === 'stretch') {
    return (
      <svg {...common}>
        <path d="M4 14h20M8 10l-4 4 4 4M20 10l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'lines') {
    return (
      <svg {...common}>
        <path d="M5 8h18M5 14h18M5 20h18" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'scatter') {
    return (
      <svg {...common}>
        <circle cx="10" cy="10" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="18" cy="9" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="14" cy="14" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="9" cy="18" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="19" cy="17" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="6" y="6" width="16" height="16" />
      <path d="M7 21L21 7" strokeLinecap="round" />
    </svg>
  );
}

const frameworkSteps = [
  {
    n: '01',
    title: 'Discover the Truth',
    body: 'Your best clients, your misfit clients, what’s actually working. Evidence before aspiration.',
  },
  {
    n: '02',
    title: 'Find the White Space',
    body: 'The gap in your market nobody’s claiming — where your story wins by default.',
  },
  {
    n: '03',
    title: 'Shape the Message',
    body: 'Positioning, offers, and language your whole team can say out loud and the market can repeat back.',
  },
  {
    n: '04',
    title: 'Activate the Strategy',
    body: 'A 60–90 day plan with priorities and owners. Strategy that doesn’t grow revenue is decoration.',
  },
];

const pathways = [
  {
    name: 'The Strategic Compass Sprint',
    href: '/services/strategic-compass-sprint',
    summary:
      'Six weeks. Three working sessions. One operating document your whole team runs on: positioning, ICP, offers, messaging, and a 60–90 day activation plan.',
    price: 'Begins at $9,500',
    cta: 'Explore the Sprint →',
  },
  {
    name: 'The Focused Growth Retainer',
    href: '/services/focused-growth-retainer',
    summary:
      'Ongoing strategic advisory for founders with traction and too much noise. Sharper priorities, monthly.',
    price: 'Begins at $3,500/month',
    cta: 'See How It Works →',
  },
  {
    name: 'The Strategic Repositioning Engagement',
    href: '/services/strategic-repositioning',
    summary:
      'For established teams facing a defined strategic challenge: repositioning, stakeholder alignment, a new market chapter.',
    price: 'Custom-scoped, from $18,000',
    cta: 'Learn More →',
  },
];

/**
 * Homepage structure follows client Homepage.pdf + Brand System V1.
 * Photography: curated home set (DL2A0265 · DL2A0268 · DL2A1100 · DL2A7656 · DL2A8012).
 */
export function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} schema={[personSchema(), professionalServiceSchema()]} />

      {/* M1 — Hero · DL2A0265 */}
      <section className="cover" aria-label="Introduction">
        <div className="cover__inner wrap-wide">
          <div className="cover__content">
            <p className="cover__kicker">Brand strategy · Growth clarity · Omaha, NE</p>
            <h1 className="cover__title">
              <span className="cover__title-line">You don’t have a</span>
              <span className="cover__title-line">capability problem.</span>
              <em className="cover__title-accent">
                <span className="cover__title-line">You have a</span>
                <span className="cover__title-line">clarity problem.</span>
              </em>
            </h1>
            <p className="cover__lede">
              I help founder-led businesses with real traction find the white space in their market,
              sharpen their positioning, and focus on the strategic moves that matter most.
            </p>
            <div className="cover__actions">
              <PrimaryCta label="Start the Conversation" />
            </div>
            <p className="cover__aside">
              Not sure where to start?{' '}
              <Link to="/#diagnostic">
                Begin with a Growth Clarity Diagnostic
                <span aria-hidden="true"> →</span>
              </Link>
            </p>
          </div>
          <div className="cover__photo">
            <Picture
              src={homeImages.hero}
              alt="Natalie Micale Schultz, strategic advisor and former agency founder."
              width={1333}
              height={2000}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <BragBar label="Trusted by founders, nonprofits, media organizations, and nationally recognized brands." />

      {/* 01 — The Problem */}
      <section className="edition" id="problem" aria-labelledby="problem-heading">
        <div className="wrap edition__inner">
          <p className="edition__label">01 — The Problem</p>
          <h2 className="edition__display" id="problem-heading">
            More marketing won’t fix a message problem.
          </h2>
          <p className="edition__lede">
            You have momentum. Customers are buying. Something is clearly working — and that’s
            exactly what makes this stage dangerous. Because right now, every new idea feels urgent,
            every channel feels necessary, and the story that got you here is too tangled to get you
            where you’re going.
          </p>

          <ul className="signal-grid">
            {problemSignals.map((item) => (
              <li key={item.title}>
                <span className="signal-grid__icon">
                  <ProblemIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Creed · DL2A0268 */}
      <section className="creed" aria-label="What I believe">
        <div className="wrap-wide creed__inner">
          <div className="creed__copy">
            <p className="creed__label">What I believe</p>
            <blockquote className="creed__quote">
              <p>
                Strategy is what you say. <em>Story</em> is how you say it. Get both right first —
                everything you execute is built on it.
              </p>
            </blockquote>
          </div>
          <figure className="creed__photo">
            <Picture
              src={homeImages.creed}
              alt="Natalie Micale Schultz, warm and direct."
              width={1333}
              height={2000}
            />
          </figure>
        </div>
      </section>

      {/* 02 — Meet Natalie · DL2A1100 */}
      <section className="meet" id="meet" aria-labelledby="meet-heading">
        <div className="wrap-wide meet__inner">
          <div className="meet__copy">
            <header className="section-opener">
              <span className="section-opener__n" aria-hidden="true">
                02
              </span>
              <h2 className="section-opener__title" id="meet-heading">
                Meet Natalie
              </h2>
              <p className="section-opener__dateline">The guide</p>
            </header>

            <p className="meet__deck">
              Founding a business is the hardest work there is. Clarity is what lets a founder-led
              team outrun everyone else.
            </p>

            <p className="cover__kicker meet__chapter">The broadcast years · TV journalist</p>
            <h3 className="edition__display meet__headline">
              I’ve watched the market change — and built my career by changing with it.
            </h3>

            <div className="meet__body">
              <p>
                I started as a TV journalist — producing, anchoring, and reporting as media shifted
                from broadcast to digital. That training taught me to find the signal inside the
                noise, understand what makes people care, and shape a clear story under pressure.
              </p>
              <p>
                From there I moved into agency growth — helping one agency reach acquisition, then
                founding my own boutique marketing agency in 2018 and selling it to Sentral Holdings
                in 2025. Across nearly a decade at two agencies, I worked with over 150 brands.
              </p>
              <p>
                As AI began reshaping how marketing gets produced, I chose not to build another
                traditional agency. I built a focused consultancy around the work that matters even
                more now: finding the white space, clarifying the story, and helping leaders make the
                right strategic decisions before they spend more on execution.
              </p>
            </div>

            <p className="meet__creds">
              Former TV journalist · Built and sold a boutique agency · 150+ brands · Tory Burch 2023
              Fellow
            </p>

            <Link className="cover__link" to="/about">
              More about Natalie →
            </Link>
          </div>

          <figure className="meet__photo">
            <Picture
              src={homeImages.framework}
              alt="Natalie Micale Schultz mapping strategy at the whiteboard."
              width={1333}
              height={2000}
            />
          </figure>
        </div>
      </section>

      {/* 03 — The Method */}
      <section className="method" id="method" aria-labelledby="method-heading">
        <div className="wrap method__inner">
          <header className="section-opener">
            <span className="section-opener__n" aria-hidden="true">
              03
            </span>
            <h2 className="section-opener__title" id="method-heading">
              The Method
            </h2>
            <p className="section-opener__dateline">The framework</p>
          </header>

          <h3 className="edition__display">The White Space Growth Framework</h3>
          <p className="edition__lede">
            The White Space Growth Framework is the method underneath every engagement: first
            uncover what is true, then find the market opportunity few are clearly owning, shape the
            story and offers around it, and turn that clarity into focused action. It keeps
            businesses from spending more on execution before they have made the strategic decisions
            that make the work effective.
          </p>

          <ol className="framework">
            {frameworkSteps.map((step) => (
              <li key={step.n} className="framework__step">
                <span className="framework__ghost" aria-hidden="true">
                  {step.n}
                </span>
                <div>
                  <p className="framework__index">
                    <span className="framework__num">{step.n}</span>
                    {step.title}
                  </p>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="method__tag">
            The white space — where you win by <span className="cover__mark">default</span>
          </p>
        </div>
      </section>

      {/* 04 — Ways In */}
      <section className="ways" id="ways" aria-labelledby="ways-heading">
        <div className="wrap ways__inner">
          <header className="section-opener">
            <span className="section-opener__n" aria-hidden="true">
              04
            </span>
            <h2 className="section-opener__title" id="ways-heading">
              Ways In
            </h2>
            <p className="section-opener__dateline">Engagements</p>
          </header>

          <h3 className="edition__display">
            Three ways in. One standard of <span className="cover__mark">thinking</span>.
          </h3>

          <div className="ways__grid">
            {pathways.map((item) => (
              <article className="ways__card" key={item.href}>
                <h4>{item.name}</h4>
                <p>{item.summary}</p>
                <p className="ways__price">{item.price}</p>
                <Link className="cover__link" to={item.href}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="ways__note" id="diagnostic">
            Not sure which fits? Start with a Growth Clarity Diagnostic ($1,500–$2,500): one focused
            working session, a written findings memo, and a straight answer about what you actually
            need — even if the answer is “not me.”{' '}
            <Link to="/start-the-conversation">Book the Diagnostic →</Link>
          </p>
        </div>
      </section>

      {/* 05 — Proof · DL2A7656 */}
      <section className="proof-block" id="proof" aria-labelledby="proof-heading">
        <div className="wrap-wide proof-block__inner">
          <div className="proof-block__copy">
            <header className="section-opener">
              <span className="section-opener__n" aria-hidden="true">
                05
              </span>
              <h2 className="section-opener__title" id="proof-heading">
                Proof
              </h2>
              <p className="section-opener__dateline">Results</p>
            </header>

            <h3 className="edition__display">What clarity does to a business.</h3>

            <ul className="proof-quotes">
              <li>
                <blockquote>
                  <p>“From tangled services to a sellable value ladder — in 45 days.”</p>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>“The positioning that opened a market few were serving.”</p>
                </blockquote>
              </li>
            </ul>

            <Link className="cover__link" to="/results">
              Read the Results →
            </Link>
          </div>

          <figure className="proof-block__photo">
            <Picture
              src={homeImages.diagnostic}
              alt="Natalie presenting a Growth Clarity Diagnostic visual."
              width={1333}
              height={2000}
            />
          </figure>
        </div>
      </section>

      {/* 06 — What you can count on · DL2A8012 */}
      <section className="stand" id="stand" aria-labelledby="stand-heading">
        <div className="wrap-wide stand__inner">
          <figure className="stand__photo">
            <Picture
              src={homeImages.closing}
              alt="Natalie Micale Schultz in conversation."
              width={1333}
              height={2000}
            />
          </figure>

          <div className="stand__copy">
            <header className="section-opener">
              <span className="section-opener__n" aria-hidden="true">
                06
              </span>
              <h2 className="section-opener__title" id="stand-heading">
                What You Can Count On
              </h2>
              <p className="section-opener__dateline">How I show up</p>
            </header>

            <p className="edition__lede stand__body">
              I’m direct. I’ll tell you which of your ideas to kill, which offer is underpriced, and
              when the problem is the story you’re telling — including the version you tell yourself.
              If you’re looking for a yes-person or a pair of hands to execute someone else’s plan,
              I’m not your strategist. If you want the truth, a sharper story, and a plan you can
              actually run with quickly to get results, welcome. Let’s talk.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA — the one red moment */}
      <section className="red-moment" aria-labelledby="close-heading">
        <div className="wrap red-moment__inner">
          <h2 id="close-heading" className="red-moment__title">
            The next stage of growth starts with a{' '}
            <em>
              clearer <span className="cover__mark cover__mark--cream">story</span>
            </em>
            .
          </h2>
          <p className="red-moment__lede">
            Brand strategy and growth clarity for founder-led businesses with real traction.
          </p>
          <PrimaryCta label="Start the Conversation" className="red-moment__cta" />
        </div>
      </section>
    </>
  );
}
