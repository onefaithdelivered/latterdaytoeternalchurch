# ReadAloud — Document & Web Page Reader

A Progressive Web App (PWA) that reads web pages, documents, and RSS feeds aloud using text-to-speech.

## Files

Upload **all 5 files** to the same folder on your website (HTTPS required):

```
yoursite.com/readaloud/
  ├── index.html      ← rename from readaloud-index.html
  ├── manifest.json   ← rename from readaloud-manifest.json
  ├── sw.js           ← rename from readaloud-sw.js
  ├── icon-192.png    ← rename from readaloud-icon-192.png
  └── icon-512.png    ← rename from readaloud-icon-512.png
```

## Install on iPhone

1. Open the URL in **Safari**
2. Tap **Share** → **"Add to Home Screen"**
3. Name it "ReadAloud" → tap **Add**

## Features

### Input Sources
- **Paste Text** — paste any text to read aloud
- **Website URL** — fetch and read articles from any URL
- **Upload Files** — .docx, .txt, .md, .html, .csv
- **RSS Feeds** — load a blog's RSS/Atom feed and pick articles

### Playback
- Play, pause, stop controls
- Skip by **sentence** (⏮ ⏭) or by **paragraph** (⏮¶ ¶⏭)
- Adjustable speed (0.5x – 2.5x) with quick presets
- Adjustable pitch and **volume** control
- Sentence highlighting with auto-scroll
- Tap any sentence to jump there
- **Estimated time remaining** countdown

### Queue & Bookmarks
- **Read-it-later queue** — add URLs or text to a playlist
- Auto-plays through queue items sequentially
- **Bookmark** your position to resume later (saved per document)

### Sleep Timer
- Set 5, 15, 30, or 60 minute timers
- Live countdown display with cancel option
- Auto-stops playback when timer expires

### Text Cleanup
- Strip ads/subscribe prompts
- Remove share/social prompts
- Remove URLs from text
- Remove bracketed references [...]

### Accessibility
- **Text size controls** (A- / A+) for the reading view
- **Clipboard detection** — auto-offers to load copied text

### Audio Export
- Export current text as audio (.webm file)
- Progress indicator during generation

### Keyboard Shortcuts (desktop)
- **Space** — play/pause
- **Esc** — stop
- **← →** — prev/next sentence
- **Shift+← Shift+→** — prev/next paragraph
- **- +** — speed down/up
- **B** — bookmark position

### PWA
- Install to home screen
- Offline-capable (cached via service worker)
- Full-screen launch on mobile
