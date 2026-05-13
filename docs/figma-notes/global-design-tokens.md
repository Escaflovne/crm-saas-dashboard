# Figma Extraction Notes — Global Design Tokens

This document captures the Figma extraction notes required before implementing
global design tokens in `src/styles/tokens.css`. Figma is the visual source of
truth. Do not invent token values during implementation. Any value that is not
yet confirmed in Figma must remain marked as `TBD` until extracted.

## Implementation Status

Confirmed base color and typography tokens have an initial CSS implementation
in `src/styles/tokens.css`. `src/styles/typography.css` applies base body
typography using confirmed tokens. Heading styles, component typography,
semantic text variants, unresolved letter-spacing tokens, alignment variants,
spacing, radius, shadow, layout, and component tokens remain out of scope.

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
below. Some values are also confirmed by Copy-as-CSS output. These values are
transcribed from screenshots and Copy-as-CSS because direct Figma MCP inspection
is currently blocked by plan tool-call limits.

- Font family (primary): Lato (target asset is `@fontsource/lato`)
- Font family (secondary, if any): TBD
- Visible Lato style labels: Regular, Bold, Black
- Numeric font weights: partially confirmed; remaining values TBD
- Font sizes / type scale: partially confirmed; remaining values TBD
- Line heights: partially confirmed; remaining values TBD
- Letter spacing: TBD
- Heading styles (h1–h5): partially confirmed; remaining heading values TBD
- Body styles (body, body-sm, caption, label): partially confirmed; remaining body values TBD

| Figma label | Font family | Font size | Line height | Font weight | Letter spacing | Text alignment variants | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Header/H1 / Lato Bold | Lato | 32px | 42px | Bold (700) | TBD | Right | Confirmed from Copy-as-CSS |
| Header/H2 / Lato Bold | Lato | 26px | 38px | Bold (700) | TBD | Center | Confirmed from Copy-as-CSS |
| Header/H3 / Lato Bold | Lato | 20px | 32px | Bold (700) | TBD | Center | Confirmed from Copy-as-CSS |
| Header/H4 / Lato Bold | Lato | 18px | 27px | Bold (700) | TBD | Center | Confirmed from Copy-as-CSS |
| Header/H5 / Lato Bold | Lato | 16px | 24px | Bold (700) | TBD | Center | Confirmed from Copy-as-CSS |
| Caption / Lato Black | Lato | 14px | 17px | Black (900) | 0px | TBD | Confirmed from Copy-as-CSS |
| Buttons/Label 14px / Lato Bold | Lato | 14px | Auto | Bold (700) | TBD | Left, Center | Inspect and Copy-as-CSS confirm multiple label instances; line-height and fill vary by instance |
| Buttons / Label 12px / Lato Bold | Lato | 12px | 14px | Bold (700) | TBD | Left, Center | Center instance confirmed from Copy-as-CSS |
| Text/14px/Bold / Lato Bold | Lato | 14px | 21px | Bold (700) | TBD | Left, Center, Right | Center instance confirmed from Copy-as-CSS |
| Text / 14px / Regular / Lato Regular | Lato | 14px | 21px | Regular (400) | TBD | Left, Center, Right | Center instance confirmed from Copy-as-CSS |
| Text / 12px / Regular / Lato Regular | Lato | 12px | 18px | Regular (400) | TBD | Left, Center, Right | Center instance confirmed from Copy-as-CSS |
| Text / 12px / Bold / Lato Bold | Lato | 12px | 18px | Bold (700) | TBD | Left, Center, Right | Center instance confirmed from Copy-as-CSS |
| Secondary text / 14px / Lato Bold | Lato | 14px | 21px | Bold (700) | TBD | Center | Center instance confirmed from Copy-as-CSS |
| Secondary text / 12px / Lato Regular | Lato | 12px | 18px | Regular (400) | TBD | Center | Center instance confirmed from Copy-as-CSS |
| Secondary text / 12px / Lato Bold | Lato | 12px | 18px | Bold (700) | TBD | Center | Center instance confirmed from Copy-as-CSS |

Confirmed typography fills from Figma Inspect screenshots and Copy-as-CSS:

- Header/H1: `#1C1D21`
- Header/H2: `#1C1D21`
- Header/H3: `#1C1D21`
- Header/H4: `#1C1D21`
- Header/H5: `#1C1D21`
- Caption / Lato Black: `#1C1D21`
- Buttons / Label 12px: `#1C1D21`
- Text/14px/Bold: `#1C1D21`
- Text / 14px / Regular: `#1C1D21`
- Text / 12px / Regular: `#1C1D21`
- Text / 12px / Bold: `#1C1D21`
- Buttons/Label 14px primary/blue instance: `#5E81F4`
- Buttons/Label 14px dark instance: `#1C1D21`
- Secondary text / 14px: `#5E81F4`
- Secondary text / 12px / Regular: `#F4BE5E`
- Secondary text / 12px / Bold: `#5E81F4`

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

- No additional open questions beyond table-level TBD values.
