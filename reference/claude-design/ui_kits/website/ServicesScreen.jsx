const { Kicker, SectionOpener, PathwayCard, FrameworkStep, MediaFrame, RedPanel, TextLink, HandUnderscore } = window.NatalieMicaleSchultzDesignSystem_f5075c;
const wrapS = { maxWidth: 1100, margin: '0 auto', padding: '0 72px' };
const displayS = { fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' };

const offers = [
  ['The Strategic Compass Sprint', 'Six weeks. Three working sessions. One operating document your whole team runs on: positioning, ICP, offers, messaging, and a 60–90 day activation plan.', 'Begins at $9,500', 'Explore the Sprint'],
  ['The Focused Growth Retainer', 'Ongoing strategic advisory for founders with traction and too much noise. Sharper priorities, monthly.', 'Begins at $3,500/month', 'See How It Works'],
  ['The Strategic Repositioning Engagement', 'For established teams facing a defined strategic challenge: repositioning, stakeholder alignment, a new market chapter.', 'Custom-scoped, from $18,000', 'Learn More'],
];

function ServicesScreen() {
  return (
    <div>
      <section style={{ ...wrapS, paddingTop: 64, paddingBottom: 56 }}>
        <div style={{ marginBottom: 16 }}><Kicker>Ways to work together</Kicker></div>
        <h1 style={{ ...displayS, fontSize: 60, lineHeight: 1.04, margin: '0 0 24px', maxWidth: '14ch' }}>Three ways in. One standard of <HandUnderscore>thinking</HandUnderscore>.</h1>
        <p style={{ margin: 0, maxWidth: 640, fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.6, color: 'var(--body)' }}>Every engagement runs on the same discipline: clarity first, execution second.</p>
      </section>

      <section style={{ ...wrapS, paddingBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
          {offers.map(([t, s, p, c], i) => (
            <div key={t} style={{ borderRight: i < 2 ? '1px solid var(--hairline)' : 'none' }}>
              <PathwayCard title={t} summary={s} price={p} cta={c} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...wrapS, paddingBottom: 72 }}>
        <SectionOpener number="01" title="Growth Clarity Diagnostic" dateline="Start here" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--body)' }}>One focused working session, a written findings memo, and a straight answer about what you actually need — even if the answer is “not me.”</p>
            <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--label)' }}>$1,500 – $2,500</p>
            <TextLink href="#contact">Book the Diagnostic</TextLink>
          </div>
          <MediaFrame src="../../assets/photography/faq-accent.jpg" alt="Working session" aspect="landscape" />
        </div>
      </section>

      <section style={{ ...wrapS, paddingBottom: 80 }}>
        <SectionOpener number="02" title="The Method" dateline="Every engagement" />
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
          <FrameworkStep number="01" title="Discover the Truth.">Your best clients, your misfit clients, what’s actually working.</FrameworkStep>
          <FrameworkStep number="02" title="Find the White Space.">The gap in your market nobody’s claiming.</FrameworkStep>
          <FrameworkStep number="03" title="Shape the Message.">Positioning, offers, and language the market can repeat back.</FrameworkStep>
          <FrameworkStep number="04" title="Activate the Strategy.">A 60–90 day plan with priorities and owners.</FrameworkStep>
        </ol>
      </section>

      <RedPanel title={<>Ready to make the decision before you spend on execution?</>} href="#contact" />
    </div>
  );
}
window.ServicesScreen = ServicesScreen;
