const { Kicker, InquiryForm, MediaFrame, ProofQuote } = window.NatalieMicaleSchultzDesignSystem_f5075c;
const wrapC = { maxWidth: 1440, margin: '0 auto', padding: '64px 72px 88px' };
const displayC = { fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)' };

function ContactScreen() {
  const [status, setStatus] = React.useState('idle');
  return (
    <section style={{ ...wrapC, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 64, alignItems: 'start' }}>
      <div>
        <div style={{ marginBottom: 16 }}><Kicker>Work with me · Omaha, NE</Kicker></div>
        <h1 style={{ ...displayC, fontSize: 54, lineHeight: 1.05, margin: '0 0 24px', maxWidth: '14ch' }}>Start the conversation.</h1>
        <p style={{ margin: '0 0 40px', maxWidth: 440, fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.6, color: 'var(--body)' }}>Tell me what’s unclear. If there’s a fit, we’ll book a 30-minute conversation.</p>
        <InquiryForm status={status} onSubmit={() => { setStatus('pending'); setTimeout(() => setStatus('success'), 700); }} />
      </div>
      <div style={{ display: 'grid', gap: 28 }}>
        <MediaFrame src="../../assets/photography/home-creed.jpg" alt="Natalie Micale Schultz" border objectPosition="50% 22%" />
        <ProofQuote>I review every inquiry personally.</ProofQuote>
      </div>
    </section>
  );
}
window.ContactScreen = ContactScreen;
