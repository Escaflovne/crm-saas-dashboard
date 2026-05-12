# Figma Extraction Notes — Global Design Tokens

This document captures the Figma extraction notes required before implementing
global design tokens in `src/styles/tokens.css`. Figma is the visual source of
truth. Do not invent token values during implementation. Any value that is not
yet confirmed in Figma must remain marked as `TBD` until extracted.

## Source Frame

- Figma file: TBD
- Figma page: TBD
- Source frame or component set: TBD
- Last reviewed Figma version or date: TBD
- Reviewer: TBD

## Color Tokens

Document each token with its Figma style name and the exact value found in
Figma. Do not invent values.

Confirmed values below were extracted from the provided Fills / Color Palette
screenshot only. Semantic token mapping is still TBD until later Figma
inspection confirms usage.

| Figma label | Confirmed value |
| --- | --- |
| Primary | `#5E81F4` |
| Primary dark | `#1C1D21` |
| Primary grey | `#8181A5` |
| Outline | `#F0F0F3` |
| Background light | `#F5F5FA` |
| Primary outline | `#5E81F4` |
| Button hover | `#1C1D21` at 10% |
| Background | `#F6F6F6` |
| Background white | `#FFFFFF` |
| Outline white | `#FFFFFF` |
| Secondary yellow | `#F4BE5E` |
| Secondary green | `#7CE7AC` |
| Secondary red | `#FF808B` |
| Secondary purple | `#9698D6` |
| Secondary cyan | `#40E1FA` |
| Resting outline | `#ECECF2` |

- Brand / primary semantic mapping: TBD
- Neutral / surface semantic mapping: TBD
- Text colors (default, muted, inverse, link): TBD
- Border colors: TBD
- Status colors (success, warning, danger, info): TBD
- State colors (hover, active, focus, disabled): TBD
- Background colors (app, surface, elevated): TBD

## Typography Tokens

Document the font assets and the type ramp as defined in Figma.

The Typography screenshots confirm Lato as the primary font family and clarify
visible style categories, size labels, Lato style labels, and alignment
variants. Exact numeric implementation values must come from Figma Inspect and
remain TBD until inspected.

Oskar's Figma Inspect screenshots confirm the first exact typography values
below. These values are transcribed from screenshots because direct Figma MCP
inspection is currently blocked by plan tool-call limits.

- Font family (primary): Lato (target asset is `@fontsource/lato`)
- Font family (secondary, if any): TBD
- Visible Lato style labels: Regular, Bold, Black
- Numeric font weights: TBD
- Font sizes / type scale: TBD
- Line heights: TBD
- Letter spacing: TBD
- Heading styles (h1–h6): TBD
- Body styles (body, body-sm, caption, label): TBD

| Figma label | Font family | Font size | Line height | Font weight | Letter spacing | Text alignment variants | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Header/H1 / Lato Bold | Lato | 32px | 42px | Bold (numeric TBD) | TBD | TBD | Size/line height confirmed from Figma Inspect screenshot |
| Header/H2 / Lato Bold | Lato | 26px | 38px | Bold (numeric TBD) | TBD | TBD | Size/line height confirmed from Figma Inspect screenshot |
| H3 / Lato Bold | Lato | TBD | TBD | Bold (numeric TBD) | TBD | TBD | Visible category; needs Figma Inspect |
| H4 / Lato Bold | Lato | TBD | TBD | Bold (numeric TBD) | TBD | TBD | Visible category; needs Figma Inspect |
| H5 / Lato Bold | Lato | TBD | TBD | Bold (numeric TBD) | TBD | TBD | Visible category; needs Figma Inspect |
| Caption / Lato Black | Lato | TBD | TBD | Black (numeric TBD) | TBD | TBD | Visible category; needs Figma Inspect |
| Buttons/Label 14px / Lato Bold | Lato | 14px | Auto | Bold (numeric TBD) | TBD | Left, Center | Size/line height confirmed from Figma Inspect screenshot |
| Button Label / 12px / Lato Bold | Lato | 12px | TBD | Bold (numeric TBD) | TBD | Left, Center | Visible size/style/alignment; needs Figma Inspect |
| Text/14px/Bold / Lato Bold | Lato | 14px | 21px | Bold (numeric TBD) | TBD | Left, Center, Right | Size/line height confirmed from Figma Inspect screenshot |
| Regular text / 14px / Lato Regular | Lato | 14px | TBD | Regular (numeric TBD) | TBD | Left, Center, Right | Visible size/style/alignment; needs Figma Inspect |
| Regular text / 12px / Lato Regular | Lato | 12px | TBD | Regular (numeric TBD) | TBD | Left, Center, Right | Visible size/style/alignment; needs Figma Inspect |
| Regular text / 12px / Lato Bold | Lato | 12px | TBD | Bold (numeric TBD) | TBD | Left, Center, Right | Visible size/style/alignment; needs Figma Inspect |
| Secondary text / 14px / Lato Bold | Lato | 14px | TBD | Bold (numeric TBD) | TBD | TBD | Visible size/style; needs Figma Inspect |
| Secondary text / 12px / Lato Regular | Lato | 12px | TBD | Regular (numeric TBD) | TBD | TBD | Visible size/style; needs Figma Inspect |
| Secondary text / 12px / Lato Bold | Lato | 12px | TBD | Bold (numeric TBD) | TBD | TBD | Visible size/style; needs Figma Inspect |

Confirmed typography fills from Oskar's Figma Inspect screenshots:

- Header/H1: `#1C1D21`
- Header/H2: `#1C1D21`
- Text/14px/Bold: `#1C1D21`
- Buttons/Label 14px: `#5E81F4`

## Spacing Scale

Document the spacing scale as defined in Figma. Use the exact step values.

- Base unit: TBD
- Spacing steps (e.g., `space-0`, `space-1`, …): TBD
- Inset vs. stack vs. inline usage rules: TBD

## Radius Tokens

- Radius scale (e.g., `radius-sm`, `radius-md`, `radius-lg`, `radius-pill`): TBD
- Component-level radius usages: TBD

## Shadow Tokens

- Elevation scale (e.g., `shadow-sm`, `shadow-md`, `shadow-lg`): TBD
- Focus ring shadow: TBD
- Component-specific shadows (cards, modals, popovers): TBD

## Layout Tokens

- Breakpoints (mobile-first `min-width` values): TBD
- Container widths / max-widths: TBD
- Grid columns and gutters: TBD
- Sidebar width(s): TBD
- Topbar height: TBD
- Z-index scale: TBD

## Open Questions / Missing Figma Values

List anything that is unclear, inconsistent, or missing from Figma so it can be
resolved before token implementation begins.

- TBD
