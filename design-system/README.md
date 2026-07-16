# One Faith Delivered — Design System

A design system distilled from the **One Faith Delivered** publication — a Catholic
apologetics website publishing long-form essays that examine the historical, scriptural,
and theological claims of Latter-day Saint doctrine against the witness of biblical
Christianity. The aesthetic is **scholarly, ecclesiastical, and editorial**: warm parchment,
deep crimson, antique gold, and three serif/mono typefaces working in strict roles.

## Source
- **Origin file:** `uploads/behind-the-veil.html` — a complete long-form article ("Behind the
  Veil") whose embedded CSS *is* the de-facto brand. Every token, type role, and component in
  this system is lifted from or directly extends that file.
- **Publication:** One Faith Delivered (`onefaithdelivered.org`). No codebase, Figma, or asset
  archive was provided beyond the single article — the system is reconstructed from it.

---

## CONTENT FUNDAMENTALS

**Voice.** Measured, scholarly, and confident — the register of a serious historical essay,
not a polemic blog. Claims are stated plainly and then *evidenced*: dates, names, primary
sources, and direct quotation. The writing assumes an intelligent, skeptical reader.

**Person.** Third person and impersonal ("the timeline is not in dispute", "Scripture teaches").
Almost never "I"; "you" appears only rarely and obliquely. Authority comes from the evidence,
not the author's personality.

**Casing.** Headlines and section titles use **Title Case** in Playfair Display. Eyebrow labels,
meta lines, dates, and dividers are **ALL CAPS** in JetBrains Mono with wide tracking. Body copy
is sentence case.

**Tone & rhythm.** Long, well-built sentences in the body; short, declarative punches at the end
of a section ("It does not exist."). Roman numerals number sections (I, II, III…). A recurring
three-part framing — *Claim → Record → Reality* — structures comparisons.

**Diction.** Precise and slightly formal: "endowment", "ordinance", "apostolic succession",
"the witness of Scripture". Scripture is quoted with its citation in mono caps. Em-dashes are
used liberally for parenthetical force.

**Emoji.** None. The only decorative glyph is the gold **✦** (and small ✦ ✦ ✦ ornament rows).
Unicode arrows (← →) appear in nav and "next article" links.

**Examples.**
- Eyebrow: `LONG-FORM ESSAY · TEMPLE & RITUAL · HISTORICAL ANALYSIS`
- Section label: `III — Shared Elements`
- Headline: *Seven Weeks: From Lodge to Endowment*
- Closing punch: *"His temple is not a locked building. His sacrifice is not a secret."*

---

## VISUAL FOUNDATIONS

**Color.** A four-part brand palette on warm neutrals:
- **Crimson** `#8B0000` (primary — headings, accents, rules) and **Dark Crimson** `#5C0000` (hover).
- **Gold** `#C5A55A` (ornaments, eyebrow labels on dark) and **Dark Gold** `#8B7335` (mono labels on light).
- **Maroon** `#4A0F1A → #6B1D2A → #3D1520` — the hero/feature gradient.
- Neutrals are **warm**: parchment `#F5F0E8` page, `#FAF6F0`/`#EDE7DB` surface variants, white cards,
  ink `#2A2A2A` text, `#666` muted, `#D0C8B8` hairlines. There is no cool gray anywhere.

**Type.** Three families, strictly cast:
- **Playfair Display** — display & headings (700/900, occasional italic for closing lines). Crimson.
- **Source Serif 4** — body & subtitles (300/400/600; italic 300 for leads and pull quotes).
  Long-form body runs at ~1.02rem with a generous **1.9 line-height**.
- **JetBrains Mono** — eyebrows, meta, dates, dividers, nav (600, UPPERCASE, 0.1–0.15em tracking).

**Backgrounds & texture.** Flat parchment for reading surfaces. Dark surfaces use the maroon
**diagonal gradient** overlaid with a faint horizontal **scanline texture**
(`repeating-linear-gradient`, 3% white at 2px) — subtle, like aged print. No photography, no
illustration, no stock imagery in the source; imagery slots use the gradient + ornament as a motif.

**Borders & the signature rule.** The defining device is a **thick left accent rule** — 5px crimson
(intro/scripture boxes) or 4px gold (pull quotes). Cards otherwise carry a 1px `#D0C8B8` hairline.
Column-header labels sit above a **2px** bottom rule. Timeline dates carry a 3px crimson right-rule.

**Corner radii.** Restrained: **2–6px**. Chips 2px, nav buttons 3px, cards/boxes 4px, feature panels
& tables 6px. Nothing is pill-shaped or sharply squared.

**Shadows.** Soft, warm, low-opacity, never colored: `0 2px 12px rgba(0,0,0,0.06)` is the workhorse;
`0 1px 8px rgba(0,0,0,0.04)` for small boxes. No glow, no hard drop shadows.

**Cards.** White surface, 1px hairline, 4px radius, soft shadow, and (usually) a crimson left rule.
The alternate card surface is `#F8F4F0`. Dark feature cards use the maroon gradient with an inset
`1px rgba(197,165,90,0.25)` gold frame (the "verdict" panel).

**Motion.** Quiet and functional — color/background transitions at **0.15–0.2s**, the sidebar slides
at 0.3s. Hover states **darken** (crimson → dark-crimson) or wash a faint tint (`rgba(...,0.06–0.08)`);
links shift color; the "next article" arrow nudges +4px on hover. No bounces, no spring, no parallax.
Reduced-motion is respected by keeping everything to short fades/color shifts.

**Press / hover detail.** Outlined mono buttons fill with a faint accent tint and recolor to crimson;
solid buttons deepen to dark-crimson. Cards lift their shadow one step on hover.

**Transparency & blur.** Used sparingly: the sticky nav is a translucent parchment gradient with a
6px backdrop-blur; the mobile sidebar overlay is `rgba(0,0,0,0.45)` + 2px blur. Tints
(`rgba(197,165,90,0.07)`, `rgba(139,0,0,0.05)`) carry quiet accent fills.

**Layout.** Article column maxes at **800px** for readability; index/grid layouts at ~1100px,
centered. Generous vertical rhythm (48–88px between major blocks). The reading-progress bar
(crimson→gold gradient) and sticky nav are the only fixed elements.

---

## ICONOGRAPHY

The source uses **inline Lucide-style line icons** — `stroke-width: 2`, round caps/joins, 24×24
viewBox, `currentColor`. Observed in the source: **printer** (print/PDF), **play triangle** (video
resources), and Unicode **arrows** (← → for nav and "next article"). There is **no icon font, no
sprite, and no raster icons** in the source, and **no emoji**.

- **Approach in this system:** icons are reproduced as a small Lucide-style set in
  `ui_kits/website/Icons.jsx` (printer, play, arrow-right, external-link, clock, book). For new
  work, use **[Lucide](https://lucide.dev)** via CDN — it is a pixel match for the source's stroke
  weight and cap style. *(Substitution flagged: the source hand-rolled its few SVGs; Lucide is the
  closest off-the-shelf set and matches them exactly.)*
- **The ✦ glyph** (gold) is the brand's one decorative mark — used in ornament rows and verdict
  headings. It is a Unicode character, not an icon asset.
- Keep icons small (13–20px), inline, `currentColor`, paired with mono labels.

**Fonts note (flagged):** all three families — Playfair Display, Source Serif 4, JetBrains Mono —
are **Google Fonts**, loaded via `@import` in `tokens/fonts.css` (no local binaries shipped). The
compiler therefore reports 0 `@font-face` rules; consumers still receive the fonts through the
Google CDN when they link `styles.css`. If you need self-hosted binaries, download these three
families from Google Fonts and add local `@font-face` rules.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this only). `@import`s the five token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts `@import` (Playfair Display, Source Serif 4, JetBrains Mono).
- `colors.css` — brand, maroon, warm neutrals, tints + semantic aliases.
- `typography.css` — families, scale, weights, line-heights, tracking.
- `spacing.css` — space scale, layout widths, component padding.
- `effects.css` — radii, shadows, accent rules, gradients, scanline texture, motion.

**Components** (`components/`)
- `core/` — **Button**, **Badge**, **Card**, **Ornament**.
- `editorial/` — **PullQuote**, **ScriptureBox**, **SectionDivider**, **Callout**, **Timeline**.
- Each ships `.jsx` + `.d.ts` + `.prompt.md`; one `@dsCard` HTML per directory.

**UI Kit** (`ui_kits/website/`)
- Interactive recreation of the One Faith Delivered site: **HomePage**, **ArticlesIndex**,
  **ArticlePage**, plus **SiteNav**, **SiteFooter**, **Icons**. Entry: `index.html`.

**Foundation cards** (`guidelines/`)
- Colors (brand, neutrals, maroon), Type (display, body, mono, scale), Spacing (scale, radii),
  Brand (wordmark, ornaments) — all tagged `@dsCard` for the Design System tab.

**Namespace:** components compile to `window.OneFaithDeliveredDesignSystem_5bc0cc`.
