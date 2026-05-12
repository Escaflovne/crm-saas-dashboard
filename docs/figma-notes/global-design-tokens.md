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

- Brand / primary colors: TBD
- Neutral / surface colors: TBD
- Text colors (default, muted, inverse, link): TBD
- Border colors: TBD
- Status colors (success, warning, danger, info): TBD
- State colors (hover, active, focus, disabled): TBD
- Background colors (app, surface, elevated): TBD

## Typography Tokens

Document the font assets and the type ramp as defined in Figma.

- Font family (primary): TBD (target asset is `@fontsource/lato`)
- Font family (secondary, if any): TBD
- Font weights in use: TBD
- Font sizes / type scale: TBD
- Line heights: TBD
- Letter spacing: TBD
- Heading styles (h1–h6): TBD
- Body styles (body, body-sm, caption, label): TBD

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
