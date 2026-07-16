// SiteNav — sticky parchment nav with wordmark + mono links
function SiteNav({ current = 'home', onNav }) {
  const { Button } = window.OneFaithDeliveredDesignSystem_5bc0cc;
  const PrinterIcon = window.PrinterIcon;
  const links = [
    ['articles', 'Articles'],
    ['charts', 'Charts'],
    ['topics', 'Topics'],
    ['resources', 'Resources'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--grad-nav)',
      borderBottom: '1px solid var(--line)',
      padding: '0.75rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backdropFilter: 'blur(6px)',
      boxShadow: 'var(--shadow-nav)',
    }}>
      <a onClick={() => onNav('home')} style={{
        fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700,
        letterSpacing: '0.05em', color: 'var(--crimson)', textDecoration: 'none', cursor: 'pointer',
      }}>One Faith Delivered</a>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a onClick={() => onNav(id)} style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: current === id ? 'var(--crimson)' : 'var(--ink)',
              textDecoration: 'none', cursor: 'pointer',
            }}>{label}</a>
          </li>
        ))}
      </ul>
      <Button variant="mono" tone="gold" size="sm" onClick={() => window.print && window.print()}>
        {PrinterIcon} Print
      </Button>
    </nav>
  );
}

window.SiteNav = SiteNav;
