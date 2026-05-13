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
| Plain Primary buttons | Ready | Preparation values are sufficiently documented; Auto Layout padding/gap is unavailable for inspected frames | No |
| Plain Outline buttons | Partially ready | Closed for now; Outline buttons / Hover full Copy-as-CSS is unavailable and not reliably selectable at this stage | No |
| Primary buttons with icon | Partially ready | Icon button Auto Layout spacing unavailable/TBD; icon source/library mapping TBD; dimensions for uninspected icon variants TBD; Primary Arrow-only has dimensions but no full visual-value row | No |
| Outline buttons with icon | Partially ready | Icon button Auto Layout spacing unavailable/TBD; icon source/library mapping TBD; dimensions for uninspected icon variants TBD; preserve Outline icon Active label weight `900` | No |
| Color options | Not ready | Extract states, colors, dimensions, typography, icon/source details, and selection behavior | No |
| Color outline | Not ready | Extract states, colors, dimensions, border values, typography, and selection behavior | No |
| Tags | Not ready | Extract tag states, colors, dimensions, typography, radius, and close/icon behavior if present | No |
| Pagination | Not ready | Extract item states, dimensions, typography, icons, active/resting/disabled colors, and spacing | No |
| Progress bars | Not ready | Extract dimensions, fill/background colors, radius, value states, and label behavior if present | No |
| Tabs primary | Not ready | Extract tab states, dimensions, typography, active/resting colors, indicator values, and spacing | No |
| Badge & status tag | Not ready | Extract status variants, colors, dimensions, typography, radius, and icon behavior if present | No |
| Token mapping review | Deferred | Map confirmed extracted values to implementation token names after extraction is complete | No |
| Final readiness check | Deferred | Verify all required values are extracted and no implementation blockers remain | No |

## Plain Button Closure Notes

- Plain Primary buttons are sufficiently documented for preparation. Confirmed
  values include Copy-as-CSS state data and inspected parent-frame dimensions
  for the documented variants.
- Plain Outline buttons are partially documented but closed for now. Confirmed
  values include ActiveButton and Resting Copy-as-CSS values plus
  screenshot-confirmed Hover dimensions and selection colors.
- The latest Copy-as-CSS block confirms `Buttons / Plain / Outline / Resting`,
  not Outline Hover: background `#FFFFFF`, border `1px solid #5E81F4`, radius
  `8px`, label Lato `700`, `14px`, `17px`, and label color `#1C1D21`.
- Outline buttons / Hover full Copy-as-CSS is unavailable and not reliably
  selectable at this stage. Hover remains screenshot-confirmed only for the
  dimensions and selection colors documented above.
- Auto Layout padding/gap is unavailable for inspected plain button frames.
  Implementation must not invent padding/gap; if Auto Layout is absent, use
  confirmed frame dimensions and measured child positions.

## Icon Button Closure Notes

- Primary buttons with icon and Outline buttons with icon are partially
  documented but not implementation-ready.
- Documented icon/label positions are absolute-position data, not confirmed
  Auto Layout spacing.
- Icon button Auto Layout spacing remains unavailable/TBD and must not be
  invented.
- If Auto Layout spacing remains unavailable, implementation may later need to
  rely on confirmed frame dimensions plus measured child positions.
- Icon source/library mapping remains TBD and blocks implementation.
- Dimensions for uninspected icon variants remain TBD.
- Outline icon Active label weight is confirmed as `900` and must not be
  normalized to `700`.
- Primary Arrow-only currently has documented dimensions, but no full
  visual-value row.

## Color Options Extraction Notes

Color options are not implementation-ready. The only currently confirmed fact
is that `#7CE7AC` is associated with Color options. No complete Color options
row or state is documented yet.

### Green filled color option sample

Screenshot context confirms the selected button is inside the Color options
group. The selected frame dimension is `98px x 46px`, and the selected button
appears to be the first green Color options button. The Copy-as-CSS comment
still says `Buttons / Plain / Primary / Active`; this naming mismatch is
preserved here and must not be used to reopen Plain Primary notes.

| Property | Confirmed value |
| --- | --- |
| Exact Color options variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Primary / Active` |
| Parent position | `absolute` |
| Parent left | `0.18%` |
| Parent right | `82.03%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Frame dimension | `98px x 46px` |
| Background | `#7CE7AC` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `32.65%` |
| Label right | `32.65%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#FFFFFF` |

### Red filled color option sample

The red sample belongs visually to the same Color options group/row as the
green sample. The Copy-as-CSS comment still says
`Buttons / Plain / Primary / Active`; this naming mismatch is preserved here
and must not be used to reopen Plain Primary notes. Based on the provided CSS
values, this sample is structurally equivalent to the green sample except for
background color and parent position.

| Property | Confirmed value |
| --- | --- |
| Exact Color options variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Primary / Active` |
| Parent position | `absolute` |
| Parent left | `23.77%` |
| Parent right | `58.44%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background | `#FF808B` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `32.65%` |
| Label right | `32.65%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#FFFFFF` |

| Extraction item | Status |
| --- | --- |
| Variant/state names | TBD |
| Colors per state | TBD |
| Dimensions | TBD |
| Typography | TBD |
| Icon/source details, if present | TBD |
| Selection behavior | TBD |
| Figma source metadata, if available | TBD |

## Color Outline Extraction Notes

Color outline is not implementation-ready. No confirmed Color outline values
are documented yet.

| Extraction item | Status |
| --- | --- |
| Variant/state names | TBD |
| Colors per state | TBD |
| Border values | TBD |
| Dimensions | TBD |
| Typography | TBD |
| Selection behavior | TBD |
| Figma source metadata, if available | TBD |

## Implementation Readiness

Button implementation status: Not ready.

Implementation blockers:

- Auto Layout padding/gap values are unavailable for the inspected
  Primary/Outline button frames.
- Button implementation must not invent padding/gap.
- If Auto Layout is not present in Figma, implementation must rely on confirmed
  frame dimensions and measured child positions instead.
- Outline buttons / Hover full Copy-as-CSS values are unavailable and not
  reliably selectable at this stage.
- Icon button Auto Layout spacing is TBD.
- Icon source/library mapping is TBD.
- Dimensions for uninspected variants are TBD.

The pasted `#7CE7AC` Copy-as-CSS block belongs to Color options and is
intentionally out of scope for the Primary/Outline button implementation notes.
