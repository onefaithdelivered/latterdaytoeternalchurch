// SiteFooter — minimal mono footer
function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--white)', textAlign: 'center', padding: '28px 20px',
      borderTop: '1px solid var(--line)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xs)', fontWeight: 600,
      letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)',
    }}>
      © One Faith Delivered &nbsp;·&nbsp; All Rights Reserved
    </footer>
  );
}
window.SiteFooter = SiteFooter;
