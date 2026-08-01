const { Button, TextLink, Kicker, HandUnderscore, MediaFrame, SectionOpener, FrameworkStep, SignalCard, PathwayCard, ProofQuote, Creed, RedPanel, BragBar } = window.NatalieMicaleSchultzDesignSystem_f5075c;

const wrap = { maxWidth: 1100, margin: '0 auto', padding: '0 72px' };
const wrapWide = { maxWidth: 1440, margin: '0 auto', padding: '0 72px' };
const display = { fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' };
const lede = { fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.6, color: 'var(--body)' };

const signals = [
  ['Your sales cycle keeps stretching.', 'Prospects take months to understand what it is you actually do.'],
  ['Your website says everything, so it says nothing.', 'Every service you can deliver is there, but none of what you should be known for is clear.'],
  ['Your team is busy, not focused.', 'Activity everywhere. Progress somewhere. Priority nowhere.'],
  ['Your best work is invisible.', 'The offer your best clients rave about is buried under everything else you sell — no clear value ladder.'],
];

const steps = [
  ['01', 'Discover the Truth.', 'Your best clients, your misfit clients, what’s actually working. Evidence before aspiration.'],
  ['02', 'Find the White Space.', 'The gap in your market nobody’s claiming — where your story wins by default.'],
  ['03', 'Shape the Message.', 'Positioning, offers, and language your whole team can say out loud and the market can repeat back.'],
  ['04', 'Activate the Strategy.', 'A 60–90 day plan with priorities and owners. Strategy that doesn’t grow revenue is decoration.'],
];

const pathways = [
  ['The Strategic Compass Sprint', 'Six weeks. Three working sessions. One operating document your whole team runs on: positioning, ICP, offers, messaging, and a 60–90 day activation plan.', 'Begins at $9,500', 'Explore the Sprint'],
  ['The Focused Growth Retainer', 'Ongoing strategic advisory for founders with traction and too much noise. Sharper priorities, monthly.', 'Begins at $3,500/month', 'See How It Works'],
  ['The Strategic Repositioning Engagement', 'For established teams facing a defined strategic challenge: repositioning, stakeholder alignment, a new market chapter.', 'Custom-scoped, from $18,000', 'Learn More'],
];

function HomeScreen({ go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ ...wrapWide, paddingTop: 40, paddingBottom: 88, display: 'grid', gridTemplateColumns: '0.52fr 0.48fr', gap: 56, alignItems: 'center' }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ marginBottom: 14 }}><Kicker>Brand strategy &amp; growth clarity · Omaha, NE</Kicker></div>
          <h1 style={{ ...display, fontSize: 66, lineHeight: 1.02, margin: '0 0 30px' }}>
            <span style={{ display: 'block' }}>You don’t have a</span>
            <span style={{ display: 'block' }}>capability problem.</span>
            <em style={{ display: 'block', marginTop: '0.08em', fontStyle: 'italic', fontSize: '0.92em', color: 'var(--red)' }}>You have a <HandUnderscore>clarity</HandUnderscore> problem.</em>
          </h1>
          <p style={{ ...lede, margin: 0, maxWidth: 440 }}>I help founder-led businesses with real traction find the white space in their market, sharpen the story, and focus on the growth moves that actually matter.</p>
          <div style={{ marginTop: 28 }}><Button variant="red" onClick={() => go('contact')}>Start the Conversation</Button></div>
          <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--label)' }}>
            Not sure where to start? <a href="#diagnostic" style={{ color: 'var(--body)' }}>Begin with a Growth Clarity Diagnostic →</a>
          </p>
        </div>
        <MediaFrame src="../../assets/photography/home-hero.jpg" alt="Natalie Micale Schultz" shadow objectPosition="72% 42%" />
      </section>

      <BragBar />

      {/* 01 Problem */}
      <section style={{ background: 'var(--night)', padding: '88px 0' }}>
        <div style={wrap}>
          <p style={{ margin: '0 0 22px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--red)' }}>01 — The Problem</p>
          <h2 style={{ ...display, color: 'var(--paper)', fontSize: 50, lineHeight: 1.08, margin: '0 0 24px', maxWidth: '16ch' }}>More marketing won’t fix a message problem.</h2>
          <p style={{ ...lede, color: 'var(--on-dark-lede)', maxWidth: 640, margin: '0 0 48px' }}>You have momentum. Customers are buying. Something is clearly working — and that’s exactly what makes this stage dangerous. Because right now, every new idea feels urgent, every channel feels necessary, and the story that got you here is too tangled to get you where you’re going.</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--on-dark-border)' }}>
            {signals.map(([t, b], i) => (
              <div key={t} style={{ borderRight: i % 2 === 0 ? '1px solid var(--on-dark-hairline)' : 'none', borderBottom: i < 2 ? '1px solid var(--on-dark-hairline)' : 'none' }}>
                <SignalCard title={t}>{b}</SignalCard>
              </div>
            ))}
          </ul>
          <p style={{ margin: '32px 0 0', fontFamily: 'var(--font-body)', fontSize: 18, fontStyle: 'italic', color: 'var(--on-dark-body)' }}>If any of those made you wince, keep reading.</p>
        </div>
      </section>

      <Creed mediaSide="left" media={<MediaFrame src="../../assets/photography/about-philosophy.jpg" alt="Natalie Micale Schultz" objectPosition="50% 25%" />} />

      {/* 02 Meet */}
      <section style={{ ...wrapWide, padding: '80px 72px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'start' }}>
        <div>
          <SectionOpener number="02" title="Meet Natalie" dateline="The guide" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.5, color: 'var(--body)', margin: '0 0 28px', maxWidth: 560 }}>Founding a business is the hardest work there is. Clarity is what lets a founder-led team outrun everyone else.</p>
          <div style={{ marginBottom: 12 }}><Kicker>The broadcast years · TV journalist</Kicker></div>
          <h3 style={{ ...display, fontSize: 40, lineHeight: 1.1, margin: '0 0 24px', maxWidth: '16ch' }}>I’ve watched the market change — and built my career by changing with it.</h3>
          <div style={{ display: 'grid', gap: 16, maxWidth: 640, marginBottom: 24 }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--body)' }}>I started as a TV journalist — producing, anchoring, and reporting as media shifted from broadcast to digital. That training taught me to find the signal inside the noise, understand what makes people care, and shape a clear story under pressure.</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--body)' }}>From there I moved into agency growth — helping one agency reach acquisition, then founding my own boutique marketing agency in 2018 and selling it to Sentral Holdings in 2025. Across nearly a decade at two agencies, I worked with over 150 brands.</p>
          </div>
          <div style={{ marginBottom: 24 }}><Kicker>Former TV journalist · Built and sold a boutique agency · 150+ brands · Tory Burch 2023 Fellow</Kicker></div>
          <TextLink href="#about" onClick={() => go('about')}>More about Natalie</TextLink>
        </div>
        <MediaFrame src="../../assets/photography/about-hero.jpg" alt="Natalie Micale Schultz" border objectPosition="50% 25%" />
      </section>

      {/* 03 Method */}
      <section style={{ borderTop: '1px solid var(--hairline)', padding: '80px 0' }}>
        <div style={wrap}>
          <SectionOpener number="03" title="The Method" dateline="The framework" />
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 48, alignItems: 'center' }}>
            <MediaFrame src="../../assets/photography/services-clarity.jpg" alt="Working session notebook — if your brand was a celebrity, who would it be?" caption="The work, in progress" objectPosition="40% 60%" />
            <div>
              <h3 style={{ ...display, fontSize: 44, margin: '0 0 20px' }}>The White Space Growth Framework</h3>
              <p style={{ ...lede, maxWidth: 640, margin: 0 }}>The method underneath every engagement: first uncover what is true, then find the market opportunity few are clearly owning, shape the story and offers around it, and turn that clarity into focused action.</p>
            </div>
          </div>
          <ol style={{ listStyle: 'none', margin: '40px 0 0', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
            {steps.map(([n, t, b]) => <FrameworkStep key={n} number={n} title={t}>{b}</FrameworkStep>)}
          </ol>
          <p style={{ margin: '40px 0 0', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--label)' }}>The white space — where you win by <HandUnderscore>default</HandUnderscore></p>
        </div>
      </section>

      {/* 04 Ways in */}
      <section style={{ borderTop: '1px solid var(--hairline)', padding: '80px 0' }} id="diagnostic">
        <div style={wrap}>
          <SectionOpener number="04" title="Ways In" dateline="Engagements" />
          <h3 style={{ ...display, fontSize: 44, margin: '0 0 32px' }}>Three ways in. One standard of <HandUnderscore>thinking</HandUnderscore>.</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--hairline)' }}>
            {pathways.map(([t, s, p, c], i) => (
              <div key={t} style={{ borderRight: i < 2 ? '1px solid var(--hairline)' : 'none' }}>
                <PathwayCard title={t} summary={s} price={p} cta={c} href="#services" />
              </div>
            ))}
          </div>
          <p style={{ margin: '32px 0 0', maxWidth: 768, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--body)' }}>
            Not sure which fits? Start with a Growth Clarity Diagnostic ($1,500–$2,500): one focused working session, a written findings memo, and a straight answer about what you actually need — even if the answer is “not me.”{' '}
            <TextLink href="#contact">Book the Diagnostic</TextLink>
          </p>
        </div>
      </section>

      {/* 05 Proof */}
      <section style={{ borderTop: '1px solid var(--hairline)', padding: '80px 72px', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'start' }}>
        <div>
          <SectionOpener number="05" title="Proof" dateline="Results" />
          <h3 style={{ ...display, fontSize: 44, margin: '0 0 28px' }}>What clarity does to a business.</h3>
          <div style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
            <ProofQuote attribution="Client name · Title, company · [being collected]">From tangled services to a sellable value ladder — in 45 days.</ProofQuote>
            <ProofQuote attribution="Client name · Title, company · [being collected]">The positioning that opened a market few were serving.</ProofQuote>
          </div>
          <TextLink href="#results">Read the Results</TextLink>
        </div>
        <MediaFrame src="../../assets/photography/home-proof.jpg" alt="Natalie presenting" border />
      </section>

      {/* 06 Stand */}
      <section style={{ borderTop: '1px solid var(--hairline)', padding: '80px 72px', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'center' }}>
        <MediaFrame src="../../assets/photography/home-stand.jpg" alt="Natalie in conversation" border objectPosition="50% 20%" />
        <div>
          <SectionOpener number="06" title="What You Can Count On" dateline="How I show up" />
          <p style={{ ...lede, margin: 0 }}>I’m direct. I’ll tell you which of your ideas to kill, which offer is underpriced, and when the problem is the story you’re telling — including the version you tell yourself. If you’re looking for a yes-person or a pair of hands to execute someone else’s plan, I’m not your strategist. If you want the truth, a sharper story, and a plan you can actually run with quickly to get results, welcome. Let’s talk.</p>
        </div>
      </section>

      <RedPanel href="#contact" />
    </div>
  );
}
window.HomeScreen = HomeScreen;
