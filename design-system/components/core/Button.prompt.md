Editorial button — mono (uppercase, tracked, thin-bordered) for nav/utility, serif (Playfair) for prominent CTAs, solid for emphasis. Use when you need an action or a styled link in the One Faith Delivered voice.

```jsx
<Button variant="mono" href="/articles">All Articles</Button>
<Button variant="serif" tone="crimson">Read the Essay</Button>
<Button variant="solid" tone="crimson" size="sm">Subscribe</Button>
```

Variants: `mono` (default), `serif`, `solid`. Tones: `crimson` (default), `gold`. Sizes: `sm`, `md`. Pass `iconLeft` / `iconRight` for Lucide SVGs. Renders an `<a>` when `href` is set, otherwise a `<button>`.
