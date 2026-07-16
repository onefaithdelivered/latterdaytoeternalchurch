---
name: one-faith-delivered-design
description: Use this skill to generate well-branded interfaces and assets for One Faith Delivered, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** One Faith Delivered — Catholic apologetics publication. Scholarly, ecclesiastical, editorial.

**Colors:** Crimson `#8B0000` / Dark Crimson `#5C0000`; Gold `#C5A55A` / Dark Gold `#8B7335`;
Maroon hero gradient `#4A0F1A → #6B1D2A → #3D1520`; warm neutrals — parchment `#F5F0E8`, ink `#2A2A2A`,
muted `#666`, hairline `#D0C8B8`.

**Type:** Playfair Display (display/headings), Source Serif 4 (body, 1.9 line-height), JetBrains Mono
(eyebrows/meta/dates, UPPERCASE, tracked). All three are Google Fonts.

**Signatures:** thick left accent rule (5px crimson / 4px gold), gold ✦ ornament, mono eyebrow labels,
maroon gradient + scanline texture on dark surfaces, restrained 2–6px radii, soft warm shadows. No emoji.

## Files
- `styles.css` — link this one file to inherit all tokens & fonts.
- `tokens/` — colors, typography, spacing, effects, fonts.
- `components/` — Button, Badge, Card, Ornament, PullQuote, ScriptureBox, SectionDivider, Callout, Timeline.
- `ui_kits/website/` — interactive site recreation (home, articles index, long-form essay).
- `guidelines/` — foundation specimen cards.

Components compile to `window.OneFaithDeliveredDesignSystem_5bc0cc` via `_ds_bundle.js`.
