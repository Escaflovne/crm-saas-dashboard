# Figma Extraction Notes — Buttons / Tags / Pagination

This document captures confirmed Figma extraction values for the Buttons / Tags
/ Pagination UI Kit section. Figma is the visual source of truth. Values that
are not confirmed must remain marked as `TBD` until extracted.

## Source Frame

- Figma file: TBD
- Figma page: TBD
- Source frame or component set: TBD
- Last reviewed Figma version or date: TBD
- Reviewer: TBD

## Button Tokens / Primary And Outline Buttons

The values below are transcribed from Oskar's Copy-as-CSS output. In these
variant paths, "Plain" is the internal Copy-as-CSS naming for buttons without
icons. The visible Figma groups are Primary buttons and Outline buttons. Exact
width, height, padding, and gap remain TBD where the provided CSS uses
percentage positioning and does not confirm component dimensions.

| Figma variant | Background | Border | Radius | Label font family | Label font weight | Label font size | Label line height | Label alignment | Label color | Confirmed behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Buttons / Plain / Primary / Active | `#5E81F4` | None confirmed | `8px` | Lato | `700` | `14px` | `17px` | Center | `#FFFFFF` | Active primary fill confirmed |
| Buttons / Plain / Primary / Hover | `#5E81F4` | None confirmed | `8px` | Lato | `700` | `14px` | `17px` | Center | `#FFFFFF` | Hover overlay `#1C1D21` at `35%` opacity, `mix-blend-mode: normal` |
| Buttons / Plain / Primary / Resting | `linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF` | None confirmed | `8px` | Lato | `700` | `14px` | `17px` | Center | `#5E81F4` | Figma comment: Tags & Badges / 5E81F4, 10% |
| Buttons / Plain / Primary / Disabled | `#F6F6F6` | None confirmed | `8px` | Lato | `700` | `14px` | `17px` | Center | `#8181A5` | Disabled primary state confirmed |
| Buttons / Plain / Outline / ActiveButton | `#FFFFFF` | `1px solid #5E81F4` | `8px` | Lato | `700` | `14px` | `17px` | Center | `#5E81F4` | Active outline state confirmed |
| Buttons / Plain / Outline / Resting | `#FFFFFF` | `1px solid #5E81F4` | `8px` | Lato | `700` | `14px` | `17px` | Center | `#1C1D21` | Resting outline state confirmed |

## Primary Buttons With Icon

The values below are confirmed from Copy-as-CSS for primary icon button
instances. Icon and label positions are absolute-position data from the
provided CSS, not confirmed Auto Layout spacing.

| Figma variant | Background | Radius | Label font family | Label font weight | Label font size | Label line height | Label color | Label width | Label left | Icon width | Icon height | Icon left | Icon font family | Icon font size | Icon line height | Icon alignment | Icon color | Confirmed behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Buttons / Icon / Primary / Active | `#5E81F4` | `8px` | Lato | `700` | `14px` | `17px` | `#FFFFFF` | `40px` | `45px` | `18px` | `18px` | `19px` | la-solid-900 | `18px` | `18px` | Center | `#FFFFFF` | Active primary icon button confirmed |
| Buttons / Icon / Primary / Hover | `#5E81F4` | `8px` | Lato | `700` | `14px` | `17px` | `#FFFFFF` | `39px` | `45px` | `18px` | `18px` | `19px` | la-solid-900 | `18px` | `18px` | Center | `#FFFFFF` | Hover overlay `#1C1D21` at `35%` opacity, `mix-blend-mode: normal` |
| Buttons / Icon / Primary / Resting | `linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF` | `8px` | Lato | `700` | `14px` | `17px` | `#5E81F4` | `47px` | `46px` | `18px` | `18px` | `18px` | la-solid-900 | `18px` | `18px` | Center | `#5E81F4` | Figma comment: Tags & Badges / 5E81F4, 10% |
| Buttons / Icon / Primary / Disabled | `#F6F6F6` | `8px` | Lato | `700` | `14px` | `17px` | `#8181A5` | `47px` | `46px` | `18px` | `18px` | `18px` | la-solid-900 | `18px` | `18px` | Center | `#8181A5` | Disabled primary icon button confirmed |

## Outline Buttons With Icon

The values below are confirmed from Copy-as-CSS for outline icon button
instances. Icon and label positions are absolute-position data from the
provided CSS, not confirmed Auto Layout spacing.

| Figma variant | Background | Border | Radius | Label font family | Label font weight | Label font size | Label line height | Label color | Label width | Label left | Icon width | Icon height | Icon left | Icon top | Icon font family | Icon font weight | Icon font size | Icon line height | Icon alignment | Icon color | Confirmed behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Buttons / Icon / Outline / Active | `#FFFFFF` | `1px solid #5E81F4` | `8px` | Lato | `900` | `14px` | `17px` | `#5E81F4` | `41px` | `45px` | `18px` | `18px` | `19px` | None confirmed | la-solid-900 | `400` | `18px` | `18px` | Center | `#5E81F4` | Active outline icon button confirmed |
| Buttons / Icon / Outline / Hover | `#FFFFFF` | `1px solid #5E81F4` | `8px` | Lato | `700` | `14px` | `17px` | `#1C1D21` | `39px` | `45px` | `18px` | `18px` | `19px` | None confirmed | la-solid-900 | `400` | `18px` | `18px` | Center | `#1C1D21` | Hover outline icon button confirmed |
| Buttons / Icon / Outline / Resting | `#FFFFFF` | `1px solid #ECECF2` | `8px` | Lato | `700` | `14px` | `17px` | `#8181A5` | `47px` | `45px` | `18px` | `18px` | `19px` | None confirmed | la-solid-900 | `400` | `18px` | `18px` | Center | `#8181A5` | Resting outline icon button confirmed |
| Buttons / Icon / Outline / Arrow | `#FFFFFF` | `1px solid #ECECF2` | `8px` | None confirmed | None confirmed | None confirmed | None confirmed | None confirmed | None confirmed | None confirmed | `18px` | `18px` | `calc(50% - 18px/2)` | `calc(50% - 18px/2)` | la-solid-900 | `400` | `18px` | `18px` | Center | `#8181A5` | Arrow-only outline icon button confirmed |

### Button Dimensions And Spacing

- Buttons / Plain / Primary / Active frame: `98px` width, `46px` height.
- Buttons / Plain / Primary / Resting frame: `98px` width, `46px` height.
- Buttons / Plain / Primary / Disabled frame: `98px` width, `46px` height.
- Buttons / Plain / Outline / ActiveButton frame: `98px` width, `46px` height.
- Buttons / Plain / Outline / Hover frame: `98px` width, `46px` height.
- Buttons / Plain / Outline selected "Disabled" / visible "Resting" frame:
  `98px` width, `46px` height.
- Buttons / Icon / Primary / Active frame: `104px` width, `46px` height.
- Buttons / Icon / Primary / Hover frame: `101px` width, `46px` height.
- Buttons / Icon / Primary / Resting frame: `106px` width, `46px` height.
- Buttons / Icon / Primary / Disabled frame: `114px` width, `46px` height.
- Buttons / Icon / Primary / Arrow frame: `46px` width, `46px` height.
- Buttons / Icon / Outline / Active frame: `104px` width, `46px` height.
- Buttons / Icon / Outline / Hover frame: `106px` width, `46px` height.
- Buttons / Icon / Outline / Resting frame: `114px` width, `47px` height.
- Buttons / Icon / Outline / Arrow frame: `46px` width, `46px` height.
- Confirmed parent-frame dimensions are listed above for inspected variants.
- Dimensions for uninspected variants remain TBD.
- Padding from Auto Layout: TBD
- Gap from Auto Layout: TBD

### Screenshot-Confirmed Plain Button Selection Colors

- Buttons / Plain / Primary / Resting: `#5E81F4` and Tags & Badges /
  `#5E81F4` at `10%`.
- Buttons / Plain / Primary / Disabled: `#8181A5` and `#F6F6F6`.
- Buttons / Plain / Outline / ActiveButton: `#5E81F4`, Outline / `#5E81F4`,
  and `#FFFFFF`.
- Buttons / Plain / Outline / Hover: `#1C1D21`, Outline / `#5E81F4`, and
  `#FFFFFF`.
- Outline buttons / Hover currently has screenshot-confirmed dimensions and
  selection colors, but full Copy-as-CSS is not confirmed.
- Buttons / Plain / Outline selected "Disabled" / visible "Resting":
  `#8181A5`, Outline / `#ECECF2`, and `#FFFFFF`. The selected variant name and
  visible label differ in the screenshot.

## Preparation Roadmap

No code implementation is allowed for any Buttons / Tags / Pagination group
until extraction is complete and explicitly approved. Missing Auto Layout
padding/gap is a confirmed limitation and must not be invented.

| Group | Current status | Remaining extraction needs | Code implementation allowed |
| --- | --- | --- | --- |
| Plain Primary buttons | Partially ready | Auto Layout padding/gap; confirm dimensions for any uninspected variants | No |
| Plain Outline buttons | Partially ready | Outline buttons / Hover full Copy-as-CSS values; Auto Layout padding/gap; confirm dimensions for any uninspected variants | No |
| Primary buttons with icon | Partially ready | Icon button Auto Layout spacing; icon source/library mapping; confirm dimensions for any uninspected variants | No |
| Outline buttons with icon | Partially ready | Icon button Auto Layout spacing; icon source/library mapping; confirm dimensions for any uninspected variants | No |
| Color options | Not ready | Extract states, colors, dimensions, typography, icon/source details, and selection behavior | No |
| Color outline | Not ready | Extract states, colors, dimensions, border values, typography, and selection behavior | No |
| Tags | Not ready | Extract tag states, colors, dimensions, typography, radius, and close/icon behavior if present | No |
| Pagination | Not ready | Extract item states, dimensions, typography, icons, active/resting/disabled colors, and spacing | No |
| Progress bars | Not ready | Extract dimensions, fill/background colors, radius, value states, and label behavior if present | No |
| Tabs primary | Not ready | Extract tab states, dimensions, typography, active/resting colors, indicator values, and spacing | No |
| Badge & status tag | Not ready | Extract status variants, colors, dimensions, typography, radius, and icon behavior if present | No |
| Token mapping review | Deferred | Map confirmed extracted values to implementation token names after extraction is complete | No |
| Final readiness check | Deferred | Verify all required values are extracted and no implementation blockers remain | No |

## Implementation Readiness

Button implementation status: Not ready.

Implementation blockers:

- No Auto Layout padding/gap values are currently visible or confirmed for the
  inspected Primary/Outline button frames.
- Button implementation must not invent padding/gap.
- If Auto Layout is not present in Figma, implementation must rely on confirmed
  frame dimensions and measured child positions instead.
- Outline buttons / Hover full Copy-as-CSS values are unconfirmed.
- Icon button Auto Layout spacing is TBD.
- Icon source/library mapping is TBD.
- Dimensions for uninspected variants are TBD.

The pasted `#7CE7AC` Copy-as-CSS block belongs to Color options and is
intentionally out of scope for the Primary/Outline button implementation notes.
