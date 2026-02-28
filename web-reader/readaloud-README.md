# ReadAloud — Document & Web Page Reader

A Progressive Web App (PWA) that reads web pages and documents aloud using text-to-speech.

## Files

- `index.html` — Main app (all HTML, CSS, JS in one file)
- `manifest.json` — PWA manifest for home screen install
- `sw.js` — Service worker for offline caching
- `icon-192.png` — App icon (192×192)
- `icon-512.png` — App icon (512×512)

## Deployment

Upload **all 5 files** to the same folder on your website. For example:

```
yoursite.com/readaloud/
  ├── index.html
  ├── manifest.json
  ├── sw.js
  ├── icon-192.png
  └── icon-512.png
```

Your site must use HTTPS for the PWA features (service worker, Add to Home Screen) to work.

## Install on iPhone

1. Open the URL in **Safari** (e.g. `https://yoursite.com/readaloud/`)
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "ReadAloud" and tap **Add**

It will now appear on your home screen and launch full-screen like a native app.

## Features

- **Paste Text** — Paste any text to read aloud
- **Website URL** — Fetch and read articles from the web
- **Upload Files** — Read .docx, .txt, .md, .html, .csv files
- **Playback controls** — Play, pause, stop, skip forward/back
- **Speed control** — 0.5x to 2.5x with quick presets
- **Pitch control** — Adjustable voice pitch
- **Voice selection** — Choose from available system voices
- **Sentence highlighting** — Follow along as it reads
- **Tap to jump** — Tap any sentence to start reading from there
- **Works offline** — Cached for offline use (except URL fetching)
