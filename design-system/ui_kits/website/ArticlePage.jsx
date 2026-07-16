// ArticlePage — long-form article recreation using editorial components
function ArticlePage({ onNav }) {
  const { Ornament, Badge, Card, SectionDivider, Callout, PullQuote, ScriptureBox, Timeline, Button } = window.OneFaithDeliveredDesignSystem_5bc0cc;

  return (
    <div>
      {/* PAGE HEADER */}
      <header style={{
        background: 'var(--grad-hero)', color: 'var(--parchment)',
        padding: '72px 40px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--texture-scanline)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a onClick={() => onNav('articles')} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', cursor: 'pointer', opacity: 0.85 }}>← All Articles</a>
          <div style={{ margin: '24px 0 16px' }}><Ornament onDark /></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.5px', color: 'var(--parchment)', margin: '0 0 14px', lineHeight: 1.2 }}>Behind <span style={{ color: 'var(--gold)' }}>the Veil</span></h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,232,0.75)', maxWidth: 680, margin: '0 auto' }}>The Masonic Origins of the LDS Temple Ceremony, the Secret Second Anointing, and Why None of It Is Biblical</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(197,165,90,0.65)', marginTop: 22 }}>Long-Form Essay · Temple &amp; Ritual · Historical Analysis</p>
        </div>
      </header>

      {/* BODY */}
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px 88px' }}>
        <Card rule="crimson" style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink)', margin: 0 }}>
            The LDS temple is presented to Latter-day Saints as the most sacred space on earth — the place
            where heaven meets mortality. But the documented history of the temple ceremony tells a very
            different story — one that begins not in ancient Jerusalem but in a <strong style={{ color: 'var(--crimson)', fontWeight: 600 }}>Masonic lodge in Nauvoo, Illinois</strong>, in the spring of 1842.
          </p>
        </Card>

        <Callout columns={[
          { label: 'LDS Claim', title: 'Restored Ancient Ordinance', body: 'The endowment was "kept hid from before the foundation of the world" and restored through Joseph Smith.' },
          { label: 'Historical Record', title: 'Seven Weeks After Initiation', body: 'Joseph Smith became a Master Mason on March 15–16, 1842. He introduced the endowment on May 4, 1842.' },
          { label: 'Biblical Reality', title: 'No Precedent in Scripture', body: 'Neither the Old nor New Testament contains any ceremony resembling the endowment.' },
        ]} />

        <SectionDivider label="I — The Masonic Connection" />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: 'var(--crimson)', lineHeight: 1.25, margin: '0 0 18px' }}>Seven Weeks: From Lodge to Endowment</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--ink)', margin: '0 0 18px' }}>
          The timeline is not in dispute — not even by the LDS Church itself. Joseph Smith was initiated as an
          Entered Apprentice Mason on March 15, 1842, and raised to Master Mason the following day. Exactly seven
          weeks later, he introduced the temple endowment ceremony to nine men — every single one of whom was a Freemason.
        </p>

        <PullQuote source="Heber C. Kimball, letter to Parley P. Pratt, June 1842">
          Thare is a similarity of preast Hood in masonary. Br Joseph ses masonry was taken from preasthood but has become degenerated, but menny things are perfect.
        </PullQuote>

        <SectionDivider label="IV — The Evolving Ceremony" />
        <Timeline
          title="Timeline of Major Changes to the LDS Temple Endowment"
          subtitle="From Joseph Smith's Nauvoo ceremony to the present day"
          rows={[
            { date: '1842', event: <span><strong style={{ color: 'var(--crimson)' }}>Endowment introduced</strong> by Joseph Smith to nine men — seven weeks after his Masonic initiation.</span> },
            { date: '1990', event: <span><strong style={{ color: 'var(--crimson)' }}>Largest single revision.</strong> Blood oath penalties eliminated. Five Points of Fellowship removed.</span> },
            { date: '2023', event: <span><strong style={{ color: 'var(--crimson)' }}>Further changes.</strong> Most handshake/token exchanges removed. Live witness couple eliminated.</span> },
          ]}
        />

        <SectionDivider label="VI — The Biblical Verdict" />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: 'var(--crimson)', lineHeight: 1.25, margin: '0 0 18px' }}>What Does Scripture Actually Say?</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.9, color: 'var(--ink)', margin: '0 0 18px' }}>
          The endowment teaches that specific handshakes and passwords are necessary to pass through the veil
          into God's presence. But Scripture teaches that access to God comes through one mediator alone:
        </p>
        <ScriptureBox reference="1 Timothy 2:5–6">
          "For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all."
        </ScriptureBox>

        {/* VERDICT */}
        <Card tone="dark" rule="none" style={{ marginTop: 56, padding: '48px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ position: 'absolute', inset: 8, border: '1px solid rgba(197,165,90,0.25)', borderRadius: 'var(--radius-md)', pointerEvents: 'none' }} />
          <h3 style={{ position: 'relative', fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)', margin: '0 0 20px' }}>✦ &nbsp; A House Built on Sand &nbsp; ✦</h3>
          <p style={{ position: 'relative', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(245,240,232,0.9)', maxWidth: 640, margin: '0 auto' }}>
            The LDS temple endowment was not restored from antiquity. It was assembled in the spring of 1842
            from the rituals of a fraternal organization with no connection to Solomon, the apostles, or the God of the Bible.
          </p>
          <p style={{ position: 'relative', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--gold)', marginTop: 28 }}>
            His temple is not a locked building. His sacrifice is not a secret.
          </p>
        </Card>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Button variant="serif" tone="crimson" onClick={() => onNav('articles')}>← Back to All Articles</Button>
        </div>
      </main>
    </div>
  );
}
window.ArticlePage = ArticlePage;
