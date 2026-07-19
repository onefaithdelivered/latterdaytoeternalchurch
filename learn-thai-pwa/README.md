# Learn Thai — เรียนภาษาไทย (PWA export)

This is a self-contained export of the **Learn Thai** progressive web app, bundled
for moving into its own repository.

## Contents

| File | Purpose |
|------|---------|
| `learn-thai.html` | The entire app. All CSS, JavaScript, and the app/apple-touch icon are inlined (the icon is an embedded base64 PNG), so this single file is the whole PWA. |
| `learn-thai-icon-1024.png` | 1024×1024 source app icon (kept for future manifest/store use; the running app uses the inlined base64 icon, so this file is not referenced at runtime). |

## What it depends on

- **No local file dependencies.** `learn-thai.html` references no other files in this
  repo — verified by scanning every `href`/`src`.
- **External CDN only:** Google Fonts (`fonts.googleapis.com` — Fraunces, Plus Jakarta
  Sans, Noto Sans Thai). Requires an internet connection for fonts; everything else is
  inline.

## PWA / installability notes

- Installable on iOS via Apple web-app meta tags (`apple-mobile-web-app-capable`,
  `apple-mobile-web-app-title="Learn Thai"`, inline `apple-touch-icon`).
- There is **no `manifest.webmanifest` and no service worker** for this app. (The
  `latin/sw.js` in the original repo belongs to the Japanese app, not Learn Thai.)
  To make it fully installable on Android/Chrome and work offline, add a web app
  manifest and a service worker in the new repo — the `learn-thai-icon-1024.png`
  above can supply the 512/192 manifest icons.

## Original location

- Path in source repo: `latin/learn-thai.html`
- Public URL it was served from: `https://onefaithdelivered.org/latin/learn-thai.html`
- Linked from the language hub page `language-home.html` (that hub page stays in the
  original repo — update its link to the new URL after moving).
