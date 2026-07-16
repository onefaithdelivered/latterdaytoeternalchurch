// ArticlesIndex — the Articles listing view
function ArticlesIndex({ onOpenArticle }) {
  const { Badge } = window.OneFaithDeliveredDesignSystem_5bc0cc;

  const groups = [
    { label: 'Temple & Ritual', items: [
      { title: 'Behind the Veil', sub: 'Masonic origins of the temple endowment and the secret second anointing.', read: '18 min', open: true },
      { title: 'Garments and Tokens', sub: 'What the temple clothing signifies — and where it actually came from.', read: '7 min' },
    ]},
    { label: 'Authority', items: [
      { title: 'From the Temple to the Cathedral', sub: 'Apostolic succession and the question the Restoration was invented to solve.', read: '14 min' },
      { title: 'The Great Apostasy That Wasn\'t', sub: 'Examining the historical claim at the foundation of the Restoration.', read: '12 min' },
    ]},
    { label: 'Scripture', items: [
      { title: 'The Canon and the Council', sub: 'Who decided which books belong in the Bible — and why it matters.', read: '11 min' },
    ]},
  ];

  return (
    <div>
      <header style={{ background: 'var(--grad-hero)', color: 'var(--parchment)', padding: '64px 40px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--texture-scanline)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>The Library</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--parchment)', margin: 0 }}>Articles</h1>
        </div>
      </header>

      <main style={{ maxWidth: 880, margin: '0 auto', padding: '56px 24px 88px' }}>
        {groups.map((g, gi) => (
          <section key={gi} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <Badge variant="label">{g.label}</Badge>
              <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.items.map((a, i) => (
                <a key={i} onClick={() => a.open && onOpenArticle()} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                  padding: '20px 24px', background: 'var(--white)', border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-md)', textDecoration: 'none', cursor: a.open ? 'pointer' : 'default',
                  boxShadow: 'var(--shadow-xs)', transition: 'border-color var(--dur-base)',
                }}
                onMouseEnter={(e) => { if (a.open) e.currentTarget.style.borderColor = 'var(--crimson-line)'; }}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--line)'}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--crimson)', margin: '0 0 4px' }}>{a.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>{a.sub}</p>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--dark-gold)', whiteSpace: 'nowrap' }}>{window.ClockIcon} {a.read}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
window.ArticlesIndex = ArticlesIndex;
