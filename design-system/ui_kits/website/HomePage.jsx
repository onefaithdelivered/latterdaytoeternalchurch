// HomePage — hero + featured essay + recent articles grid
function HomePage({ onOpenArticle, onNav }) {
  const { Ornament, Badge, Button } = window.OneFaithDeliveredDesignSystem_5bc0cc;

  const recent = [
    { tag: 'Temple & Ritual', title: 'Behind the Veil', excerpt: 'The Masonic origins of the LDS temple ceremony, the secret second anointing, and why none of it is biblical.', read: '18 min', open: true },
    { tag: 'Authority', title: 'From the Temple to the Cathedral', excerpt: 'How apostolic succession answers the question of authority that the Restoration was invented to solve.', read: '14 min' },
    { tag: 'Scripture', title: 'The Canon and the Council', excerpt: 'Who decided which books belong in the Bible — and why that history undermines the "Great Apostasy" thesis.', read: '11 min' },
    { tag: 'Sacraments', title: 'Bread, Wine, and Real Presence', excerpt: 'The earliest Christians believed the Eucharist was the body of Christ. The written record is unambiguous.', read: '9 min' },
  ];

  return (
    <div>
      {/* HERO */}
      <header style={{
        background: 'var(--grad-hero)', color: 'var(--parchment)',
        padding: '88px 40px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--texture-scanline)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <Ornament onDark />
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900,
            letterSpacing: '-0.5px', color: 'var(--parchment)', margin: '18px 0 16px', lineHeight: 1.15,
          }}>One Faith, <span style={{ color: 'var(--gold)' }}>Once Delivered</span></h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.15rem', fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(245,240,232,0.78)', maxWidth: 620, margin: '0 auto 28px', lineHeight: 1.6,
          }}>
            Long-form essays examining the historical, scriptural, and theological claims of Latter-day
            Saint doctrine against the witness of biblical Christianity.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="solid" tone="gold" onClick={() => onNav('articles')}>Browse Articles</Button>
            <Button variant="mono" tone="gold" onClick={() => onOpenArticle()}>Featured Essay</Button>
          </div>
        </div>
      </header>

      {/* FEATURED */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 0' }}>
        <Badge variant="label">Featured Essay</Badge>
        <div onClick={() => onOpenArticle()} style={{
          marginTop: 16, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0,
          border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          boxShadow: 'var(--shadow-md)', cursor: 'pointer', background: 'var(--white)',
        }}>
          <div style={{ padding: '40px 44px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dark-gold)', marginBottom: 14 }}>Temple &amp; Ritual · Historical Analysis</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--crimson)', lineHeight: 1.15, margin: '0 0 16px' }}>Behind the Veil</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--ink)', margin: '0 0 24px' }}>
              The LDS temple is presented as the most sacred space on earth. But its documented history begins
              not in ancient Jerusalem — but in a Masonic lodge in Nauvoo, Illinois, in the spring of 1842.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--crimson)' }}>
              Read the Essay {window.ArrowRightIcon}
            </span>
          </div>
          <div style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'var(--texture-scanline)' }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 24 }}>
              <div style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '14px', marginBottom: 18 }}>✦</div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.3rem', color: 'rgba(245,240,232,0.85)', lineHeight: 1.5 }}>
                "Seven weeks from<br />lodge to endowment."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px 80px' }}>
        <Badge variant="label">Recent Articles</Badge>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 }}>
          {recent.map((a, i) => (
            <article key={i} onClick={() => a.open && onOpenArticle()} style={{
              background: 'var(--white)', border: '1px solid var(--line)', borderLeft: 'var(--rule-crimson)',
              borderRadius: 'var(--radius-md)', padding: '26px 28px', boxShadow: 'var(--shadow-sm)',
              cursor: a.open ? 'pointer' : 'default', transition: 'box-shadow var(--dur-base)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Badge variant="label">{a.tag}</Badge>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', color: 'var(--muted)', letterSpacing: '0.08em' }}>{window.ClockIcon} {a.read}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--crimson)', lineHeight: 1.25, margin: '0 0 10px' }}>{a.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>{a.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
window.HomePage = HomePage;
