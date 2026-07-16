# One Faith Delivered — Website UI Kit

An interactive recreation of the One Faith Delivered publication website, built entirely
from the design system's component primitives.

## Screens
- **HomePage** — maroon-gradient hero, featured-essay split card, recent-articles grid.
- **ArticlesIndex** — grouped article listing (Temple & Ritual, Authority, Scripture).
- **ArticlePage** — full long-form essay recreation ("Behind the Veil") using `Card`,
  `Callout`, `SectionDivider`, `PullQuote`, `Timeline`, `ScriptureBox`, and the verdict panel.

## Shared chrome
- **SiteNav** — sticky parchment nav, wordmark, mono links, Print button.
- **SiteFooter** — minimal mono copyright line.
- **Icons.jsx** — Lucide-style line icons (printer, play, arrow, clock, book).

## Interaction
`index.html` runs a small state router: Home → Featured Essay opens the article;
nav links route to the Articles index; any "Behind the Veil" entry opens the essay.

## Notes
Components are pulled from `window.OneFaithDeliveredDesignSystem_5bc0cc` (the compiled
`_ds_bundle.js`). Cross-file JSX components register themselves on `window` and are
referenced as `window.ComponentName` from the router to survive Babel's per-script scope.
