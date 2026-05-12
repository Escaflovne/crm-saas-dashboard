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

The Typography screenshot confirms Lato as the primary font family. Exact type
style values must come from Figma Inspect and remain TBD until inspected.

- Font family (primary): Lato (target asset is `@fontsource/lato`)
- Font family (secondary, if any): TBD
- Font weights in use: TBD
- Font sizes / type scale: TBD
- Line heights: TBD
- Letter spacing: TBD
- Heading styles (h1–h6): TBD
- Body styles (body, body-sm, caption, label): TBD

| Figma label | Font family | Font size | Line height | Font weight | Letter spacing | Text alignment variants | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H1 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| H2 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| H3 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| H4 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| H5 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Caption | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Button label 14 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Button label 12 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Regular text 14 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Regular text 12 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Secondary text 14 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |
| Secondary text 12 | Lato | TBD | TBD | TBD | TBD | TBD | Needs Figma Inspect |

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
