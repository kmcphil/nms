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
    body: 'The offer your best clients rave about is buried under everything else you sell. No clear value ladder.',
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
    body: 'The gap in your market nobody’s claiming, where your story wins by default.',
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
 * Photography: curated home set (DL2A0265 · DL2A7921 · DL2A7975 · DL2A7656 · DL2A8012).
 */
export function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} schema={[personSchema(), professionalServiceSchema()]} />

      {/* M1: Hero · DL2A0265 */}
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

      <BragBar />

      {/* 01: The Problem */}
      <section className="edition" id="problem" aria-labelledby="problem-heading">
        <div className="wrap edition__inner">
          <header className="section-opener">
            <span className="section-opener__n" aria-hidden="true">
              01
            </span>
            <h2 className="section-opener__title" id="problem-heading">
              The Problem
            </h2>
            <p className="section-opener__dateline">The diagnosis</p>
          </header>

          <h3 className="edition__display">
            More marketing won’t fix a message problem.
          </h3>
          <p className="edition__lede">
            You have momentum. Customers are buying. Something is clearly working. And that’s
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

          <p className="edition__close">
            None of these are marketing failures. They’re a message-clarity failure. Clarity has a
            discipline.
          </p>
        </div>
      </section>

      {/* Creed · DL2A1100 · editorial interlude between 01 and 02 */}
      <section className="creed" aria-labelledby="creed-heading">
        <div className="wrap-wide">
          <header className="section-opener section-opener--interlude">
            <h2 className="section-opener__title" id="creed-heading">
              First Principle
            </h2>
            <p className="section-opener__dateline">Everything is built on it</p>
          </header>

          <div className="creed__spread">
            <figure className="creed__photo">
              <Picture
                src={homeImages.creedWhiteboard}
                alt="Natalie sketching a positioning matrix on a whiteboard."
                width={1600}
                height={1067}
              />
            </figure>

            <blockquote className="creed__quote">
              <p>
                Strategy is what you say. <em>Story</em> is how you say it.
              </p>
              <p>
                Get both right first. Everything you execute is built on it.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 02: Meet Natalie · DL2A7975 */}
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

            <h3 className="edition__display meet__headline">
              I’ve watched the market change, and built my career by changing with it.
            </h3>

            <div className="meet__body">
              <p>
                I started in TV news, learning to find the signal in the noise, then spent nearly a
                decade in agency growth, building and selling my own boutique firm after working with
                150+ brands. As AI reshaped marketing, I built a focused consultancy around what
                matters more now: clarity before spend.
              </p>
            </div>

            <Link className="cover__link" to="/about">
              More about Natalie →
            </Link>
          </div>

          <figure className="meet__photo">
            <Picture
              src={homeImages.meet}
              alt="Natalie Micale Schultz, founder of Natalie Micale Schultz consultancy."
              width={1067}
              height={1600}
            />
          </figure>
        </div>
      </section>

      {/* 03: The Method */}
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

          <div className="method__intro">
            <div className="method__copy">
              <h3 className="edition__display">The White Space Growth Framework</h3>
              <p className="edition__lede">
                The method underneath every engagement: uncover what is true, find the market
                opportunity few are clearly owning, shape the story and offers around it, then turn
                that clarity into focused action, before more spend on execution.
              </p>
            </div>

            <figure className="method__diagram">
              <img
                src={homeImages.whiteSpace}
                alt=""
                width={320}
                height={320}
              />
              <figcaption>
                The white space, where you win by <span className="cover__mark">default</span>
              </figcaption>
            </figure>
          </div>

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
        </div>
      </section>

      {/* 04: Ways In — dark editorial ledger */}
      <section className="ways edition" id="ways" aria-labelledby="ways-heading">
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

          <ol className="ways__ledger">
            {pathways.map((item, i) => (
              <li className="ways__row" key={item.href}>
                <span className="ways__ord" aria-hidden="true">
                  N<span className="ways__ord-degree">o</span> 0{i + 1}
                </span>
                <div className="ways__row-body">
                  <h4 className="ways__row-title">{item.name}</h4>
                  <p className="ways__row-summary">{item.summary}</p>
                </div>
                <div className="ways__rail">
                  <p className="ways__price">{item.price}</p>
                  <Link className="cover__link" to={item.href}>
                    {item.cta}
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <p className="ways__note" id="diagnostic">
            Not sure which fits? Start with a Growth Clarity Diagnostic ($1,500–$2,500): one focused
            working session, a written findings memo, and a straight answer about what you actually
              need, even if the answer is “not me.”{' '}
            <Link to="/start-the-conversation">Book the Diagnostic →</Link>
          </p>
        </div>
      </section>

      {/* 05: Proof · DL2A7656 */}
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
                  <p>“From tangled services to a sellable value ladder. In 45 days.”</p>
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

      {/* 06: What you can count on · DL2A8012 */}
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

            <p className="stand__credo">I’m direct.</p>

            <p className="stand__body">
              I’ll tell you which of your ideas to kill, which offer is underpriced, and when the
              problem is the story you’re telling. Including the version you tell yourself.
            </p>

            <p className="stand__body">
              If you’re looking for a yes-person, or a pair of hands to execute someone else’s
              plan, I’m not your strategist. If you want the truth, a sharper story, and a plan you
              can actually run with, welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA: the one red moment */}
      <section className="red-moment" aria-labelledby="close-heading">
        <div className="wrap red-moment__inner">
          <h2 id="close-heading" className="red-moment__title">
            The next stage of growth starts with a{' '}
            <em>
              clearer <span className="cover__mark cover__mark--light">story</span>
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
