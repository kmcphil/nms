const { Kicker, MediaFrame, SectionOpener, TextLink, EditorialSpread, RedPanel, ProofQuote } = window.NatalieMicaleSchultzDesignSystem_f5075c;
const wrapA = { maxWidth: 1440, margin: '0 auto', padding: '0 72px' };
const displayA = { fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' };

function AboutScreen() {
  return (
    <div>
      <section style={{ ...wrapA, paddingTop: 64, paddingBottom: 72, display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 56, alignItems: 'end' }}>
        <div>
          <div style={{ marginBottom: 16 }}><Kicker>About · The guide</Kicker></div>
          <h1 style={{ ...displayA, fontSize: 60, lineHeight: 1.04, margin: '0 0 24px', maxWidth: '14ch' }}>Strategy from someone who has sat in the founder’s seat.</h1>
          <p style={{ margin: 0, maxWidth: 440, fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.6, color: 'var(--body)' }}>Former TV journalist. Built and sold a boutique marketing agency. Tory Burch 2023 Fellow. Now a strategic partner to founder-led businesses at an inflection point.</p>
        </div>
        <MediaFrame src="../../assets/photography/about-hero.jpg" alt="Natalie Micale Schultz" border />
      </section>

      <section style={{ ...wrapA, padding: '72px', borderTop: '1px solid var(--hairline)', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'start' }}>
        <MediaFrame src="../../assets/photography/broadcast-tv.jpeg" alt="Natalie on air" aspect="landscape" caption="The broadcast years" />
        <div>
          <SectionOpener number="01" title="The Broadcast Years" dateline="Signal inside the noise" />
          <p style={{ margin: '0 0 16px', maxWidth: 640, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--body)' }}>I started as a TV journalist — producing, anchoring, and reporting as media shifted from broadcast to digital. That training taught me to find the signal inside the noise, understand what makes people care, and shape a clear story under pressure.</p>
          <p style={{ margin: 0, maxWidth: 640, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--body)' }}>As AI began reshaping how marketing gets produced, I chose not to build another traditional agency. I built a focused consultancy around the work that matters even more now.</p>
        </div>
      </section>

      <EditorialSpread src="../../assets/photography/services-hero.jpg" alt="Natalie in a working session" quote="Clarity is what lets a founder-led team outrun everyone else." position="bottom-left" />

      <section style={{ ...wrapA, padding: '72px' }}>
        <SectionOpener number="02" title="What I Stand For" dateline="Working principles" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <ProofQuote>Story clarity before execution — always.</ProofQuote>
          <ProofQuote>Senior thinking, not a pair of hands.</ProofQuote>
        </div>
        <div style={{ marginTop: 32 }}><TextLink href="#services">See how we can work together</TextLink></div>
      </section>

      <RedPanel title={<>Let’s find the story that gets you to the next stage.</>} href="#contact" />
    </div>
  );
}
window.AboutScreen = AboutScreen;
