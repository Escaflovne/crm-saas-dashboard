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
| Plain Primary buttons | Partially documented / closed for now | Preparation values are sufficiently documented; Auto Layout padding/gap is unavailable for inspected frames | No |
| Plain Outline buttons | Partially documented / closed for now | Outline buttons / Hover full Copy-as-CSS is unavailable and not reliably selectable at this stage | No |
| Primary buttons with icon | Partially documented / closed for now | Icon button Auto Layout spacing unavailable/TBD; icon source/library mapping TBD; dimensions for uninspected icon variants TBD; Primary Arrow-only has dimensions but no full visual-value row | No |
| Outline buttons with icon | Partially documented / closed for now | Icon button Auto Layout spacing unavailable/TBD; icon source/library mapping TBD; dimensions for uninspected icon variants TBD; preserve Outline icon Active label weight `900` | No |
| Color options | Partially documented / closed for now | Filled color samples documented; exact variant/state names, additional states, incomplete dimensions, selection behavior, source metadata, and icon/source details remain TBD | No |
| Color outline | Partially documented / closed for now | Outline color samples documented; exact variant/state names, additional states, incomplete dimensions, selection behavior, and source metadata remain TBD | No |
| Tags | Partially documented / closed for now | Visible tag variants documented; state semantics, additional states, selection/interaction behavior, source metadata, and Tags vs Badge/status tag scope separation remain TBD | No |
| Pagination | Partially documented / closed for now | Visible Pagination variants documented; exact state semantics, disabled/hover behavior, responsive behavior, interaction behavior, icon source mapping, source metadata, and component scope remain TBD | No |
| Progress bars | Partially documented / closed for now | Visible Progress bar variants documented; exact state/value semantics, pixel dimensions, labels, responsive behavior, source metadata, and component scope remain TBD | No |
| Tabs primary | Partially documented / closed for now | Visible Tabs primary sample documented; disabled/focus/hover behavior, responsive behavior, icon source mapping, source metadata, and component API remain TBD | No |
| Badge & status tag | Partially documented / closed for now | Visible Badge & status tag sample documented; state semantics, behavior, responsiveness, source metadata, Tags relationship, and component API remain TBD | No |
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

Color options are not implementation-ready. Filled color samples are documented
below, but exact Color options variant/state names remain TBD.

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

### Yellow filled color option sample

The yellow/gold sample belongs visually to the same Color options group/row as
the green and red samples. The Copy-as-CSS comment still says
`Buttons / Plain / Primary / Active`; this naming mismatch is preserved here
and must not be used to reopen Plain Primary notes. Based on the provided CSS
values, this sample is structurally equivalent to the green and red samples
except for background color and parent position.

| Property | Confirmed value |
| --- | --- |
| Exact Color options variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Primary / Active` |
| Parent position | `absolute` |
| Parent left | `47.37%` |
| Parent right | `34.85%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background | `#F4BE5E` |
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

### Purple filled color option sample

The purple/lavender sample belongs visually to the same Color options group/row
as the green, red, and yellow samples. The Copy-as-CSS comment still says
`Buttons / Plain / Primary / Active`; this naming mismatch is preserved here
and must not be used to reopen Plain Primary notes. Based on the provided CSS
values, this sample is structurally equivalent to the green, red, and yellow
samples except for background color and parent position.

| Property | Confirmed value |
| --- | --- |
| Exact Color options variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Primary / Active` |
| Parent position | `absolute` |
| Parent left | `70.96%` |
| Parent right | `11.25%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background | `#9698D6` |
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

Color outline is not implementation-ready. The samples below are visually part
of the Color outline group/row. Their Copy-as-CSS comment says
`Buttons / Plain / Outline / ActiveButton`; this naming is preserved here and
must not be used to reopen Plain Outline notes. The four samples are
structurally equivalent based on the provided CSS values, except for border
color, label color, and parent position. Exact Color outline variant/state
names remain TBD.

### Green outline color sample

| Property | Confirmed value |
| --- | --- |
| Exact Color outline variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Outline / ActiveButton` |
| Parent position | `absolute` |
| Parent left | `0.18%` |
| Parent right | `82.03%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left | `0%` |
| Background right | `0%` |
| Background top | `0%` |
| Background bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #7CE7AC` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `33.16%` |
| Label right | `32.14%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#7CE7AC` |

### Red outline color sample

| Property | Confirmed value |
| --- | --- |
| Exact Color outline variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Outline / ActiveButton` |
| Parent position | `absolute` |
| Parent left | `23.05%` |
| Parent right | `59.17%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left | `0%` |
| Background right | `0%` |
| Background top | `0%` |
| Background bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #FF808B` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `33.16%` |
| Label right | `32.14%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#FF808B` |

### Yellow outline color sample

| Property | Confirmed value |
| --- | --- |
| Exact Color outline variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Outline / ActiveButton` |
| Parent position | `absolute` |
| Parent left | `45.92%` |
| Parent right | `36.3%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left | `0%` |
| Background right | `0%` |
| Background top | `0%` |
| Background bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #F4BE5E` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `33.16%` |
| Label right | `32.14%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#F4BE5E` |

### Gray purple outline color sample

| Property | Confirmed value |
| --- | --- |
| Exact Color outline variant/state name | TBD |
| Copy-as-CSS comment | `Buttons / Plain / Outline / ActiveButton` |
| Parent position | `absolute` |
| Parent left | `68.78%` |
| Parent right | `13.43%` |
| Parent top | `65.3%` |
| Parent bottom | `0.37%` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left | `0%` |
| Background right | `0%` |
| Background top | `0%` |
| Background bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #8181A5` |
| Border radius | `8px` |
| Label height | `17px` |
| Label left | `33.16%` |
| Label right | `32.14%` |
| Label top | `calc(50% - 17px/2 - 0.5px)` |
| Label font family | Lato |
| Label font style | normal |
| Label font weight | `700` |
| Label font size | `14px` |
| Label line height | `17px` |
| Label text alignment | Center |
| Label color | `#8181A5` |

| Extraction item | Status |
| --- | --- |
| Variant/state names | TBD |
| Colors per state | TBD |
| Border values | TBD |
| Dimensions | TBD |
| Typography | TBD |
| Selection behavior | TBD |
| Figma source metadata, if available | TBD |

## Color Button Closure Notes

- Color options and Color outline are sufficiently documented for preparation
  boundary purposes, but not implementation-ready.
- Confirmed Color options samples are green `#7CE7AC`, red `#FF808B`,
  yellow/gold `#F4BE5E`, and purple/lavender `#9698D6`.
- Confirmed Color outline samples are green border/label `#7CE7AC`, red
  border/label `#FF808B`, yellow/gold border/label `#F4BE5E`, and gray purple
  border/label `#8181A5`.
- Color options Copy-as-CSS says `Buttons / Plain / Primary / Active`; this
  naming mismatch must not reopen Plain Primary notes.
- Color outline Copy-as-CSS says `Buttons / Plain / Outline / ActiveButton`;
  this naming mismatch must not reopen Plain Outline notes.
- Exact variant/state names remain TBD.
- Additional states remain unknown.
- Dimensions are incomplete.
- Selection behavior remains TBD.
- Figma source metadata remains TBD.
- Icon/source details remain TBD if present.

## Tags Extraction Notes

Tags are not implementation-ready. The Copy-as-CSS block below is for the
visible `Tags` group. Do not infer hover/resting/active semantics from internal
layer names such as `bg hover`.

### Tags group extraction sample

Group container metadata:

| Property | Confirmed value |
| --- | --- |
| Group name | `Tags` |
| Position | `absolute` |
| Width | `1141px` |
| Height | `124px` |
| Left | `149px` |
| Top | `910px` |

Group context metadata, not tag variants:

| Context item | Confirmed values |
| --- | --- |
| Tags title | Height `24px`; left `0%`; right `97.2%`; top `calc(50% - 24px/2 - 18px)`; Lato normal `700`; `16px`; line-height `24px`; color `#1C1D21` |
| Line | Left `0.09%`; right `0%`; top `0%`; bottom `98.39%`; border `1px solid #EEEEEE` |

All visible regular tag labels use Lato normal `700`, `14px`, line-height
`21px`. Text alignment is Center where present. All visible tag backgrounds use
border-radius `8px`.

| Variant | Parent position | Parent left | Parent right | Parent top | Parent bottom | Background | Label height | Label left | Label right | Label top | Label color |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tags / Primary | `absolute` | `0%` | `92.64%` | `70.97%` | `0%` | `#5E81F4` | `21px` | `31px` | `31px` | `calc(50% - 21px/2 - 0.5px)` | `#FFFFFF` |
| Tags / Blue | `absolute` | `10.78%` | `81.86%` | `70.97%` | `0%` | `linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF` | `21px` | `36.9%` | `36.9%` | `calc(50% - 21px/2 - 0.5px)` | `#5E81F4` |
| Tags / LightBlue | `absolute` | `20.95%` | `71.69%` | `70.97%` | `0%` | `linear-gradient(0deg, rgba(64, 225, 250, 0.1), rgba(64, 225, 250, 0.1)), #FFFFFF` | `21px` | `36.9%` | `36.9%` | `calc(50% - 21px/2 - 0.5px)` | `#2CE5F6` |
| Tags / Green | `absolute` | `31.64%` | `61%` | `70.97%` | `0%` | `linear-gradient(0deg, rgba(124, 231, 172, 0.1), rgba(124, 231, 172, 0.1)), #FFFFFF` | `21px` | `31px` | `31px` | `calc(50% - 21px/2 - 0.5px)` | `#7CE7AC` |
| Tags / Yellow | `absolute` | `41.81%` | `50.83%` | `70.97%` | `0%` | `linear-gradient(0deg, rgba(244, 190, 94, 0.1), rgba(244, 190, 94, 0.1)), #FFFFFF` | `21px` | `31px` | `31px` | `calc(50% - 21px/2 - 0.5px)` | `#F4BE5E` |
| Tags / Red | `absolute` | `52.5%` | `40.14%` | `70.97%` | `0%` | `linear-gradient(0deg, rgba(255, 128, 139, 0.1), rgba(255, 128, 139, 0.1)), #FFFFFF` | `21px` | `31px` | `31px` | `calc(50% - 21px/2 - 0.5px)` | `#FF808B` |
| Tags / Grey | `absolute` | `62.66%` | `29.97%` | `70.97%` | `0%` | `#F5F5FA` | `21px` | `31px` | `31px` | `calc(50% - 21px/2 - 0.5px)` | `#8181A5` |
| Tags / GreyEditable | `absolute` | `73.36%` | `19.28%` | `70.97%` | `0%` | `#F5F5FA` | `21px` | `20px` | None confirmed | `calc(50% - 21px/2 - 0.5px)` | `#8181A5` |

Tags / GreyEditable label and close icon details:

| Property | Confirmed value |
| --- | --- |
| Label width | `22px` |
| Label height | `21px` |
| Label left | `20px` |
| Label top | `calc(50% - 21px/2 - 0.5px)` |
| Label color | `#8181A5` |
| Close icon present | yes |
| Close width | `16px` |
| Close height | `16px` |
| Close right | `13px` |
| Close top | `calc(50% - 16px/2)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `16px` |
| Icon line height | `16px` |
| Icon text alignment | Center |
| Icon color | `#8181A5` |

| Extraction item | Status |
| --- | --- |
| Variant/state names | Visible tag variants documented; state semantics TBD |
| Colors per state | Visible sample colors documented; additional states TBD |
| Dimensions | Group dimensions documented; tag pixel dimensions not inferred from percentage positioning |
| Typography | Visible regular tag label typography documented |
| Radius | Visible tag background radius documented as `8px` |
| Close/icon behavior, if present | Tags / GreyEditable close icon documented; other icon behavior TBD if present |
| Selection/interaction behavior, if present | TBD |
| Figma source metadata | TBD |
| Whether Tags and Badge/status tag variants should be separate scopes | TBD |

## Tags Closure Notes

- Tags are sufficiently documented for preparation boundary purposes, but not
  implementation-ready.
- Confirmed visible variants are Tags / Primary, Tags / Blue, Tags /
  LightBlue, Tags / Green, Tags / Yellow, Tags / Red, Tags / Grey, and Tags /
  GreyEditable.
- Regular tag labels use Lato normal `700`, `14px`, line-height `21px`.
- Text alignment is Center where present.
- Visible tag backgrounds use `8px` border radius.
- Visible backgrounds and label colors are documented in the Tags group
  extraction sample.
- Tags / GreyEditable includes a documented close icon.
- State semantics remain TBD.
- Additional states remain TBD.
- Tag pixel dimensions were not inferred from percentage positioning.
- Selection/interaction behavior remains TBD.
- Figma source metadata remains TBD.
- Tags vs Badge/status tag scope separation remains TBD.
- Other icon behavior remains TBD if present.

## Pagination Extraction Notes

Pagination is not implementation-ready. The Copy-as-CSS block below is for the
visible `Pagination` group. Do not infer responsive behavior, hover/resting/
disabled behavior, or implementation semantics from layer names such as
`bg active`, `bg copy`, or `Buttons/Link Button/Active`.

### Pagination group extraction sample

Group container metadata:

| Property | Confirmed value |
| --- | --- |
| Group name | `Pagination` |
| Position | `absolute` |
| Width | `1141px` |
| Height | `217px` |
| Left | `149px` |
| Top | `1126px` |

Group context metadata, not pagination variants:

| Context item | Confirmed values |
| --- | --- |
| Pagination title | Lato normal `700`; `16px`; line-height `24px`; color `#1C1D21` |
| Line | Border `1px solid #EEEEEE` |

Visible variants are `Pagination/Primary`, `Pagination/Boxed`, and
`Pagination/Fullsize`.

#### Pagination/Primary

| Property | Confirmed value |
| --- | --- |
| Parent left | `0.09%` |
| Parent right | `57.58%` |
| Parent top | `44.93%` |
| Parent bottom | `36.64%` |
| Numbers container width | `215px` |
| Numbers container height | `32px` |
| Active background color | `#5E81F4` |
| Active background radius | `6px` |
| Number typography | Lato normal `700`; `14px`; line-height `21px`; Center |
| Page 2 color | `#FFFFFF` |
| Pages 1/3/4/5 color | `#1C1D21` |
| Left control | `79px` width; `40px` height |
| Right control | `80px` width; `40px` height |
| Arrow background | `#F5F5FA`; radius `6px` |
| Arrow icon typography | `la-solid-900`; weight `400`; `18px`; line-height `18px`; color `#8181A5` |
| Prev/Next label typography | Lato normal `400`; `14px`; line-height `21px`; color `#8181A5` |

#### Pagination/Boxed

| Property | Confirmed value |
| --- | --- |
| Parent left | `0.09%` |
| Parent right | `57.58%` |
| Parent top | `81.57%` |
| Parent bottom | `0%` |
| Visible item backgrounds | White backgrounds with `6px` radius |
| Active/selected page 2 | White background with `1px solid #ECECF2`; radius `6px` |
| Number typography | Lato normal `700`; `14px`; line-height `21px`; Center |
| Page 2 color | `#1C1D21` |
| Pages 1/3/4/5 color | `#8181A5` |
| Left/right arrow controls | `40px x 40px` |
| Arrow backgrounds | `#F5F5FA`; radius `6px` |
| Arrow icon typography | `la-solid-900`; weight `400`; `18px`; line-height `18px`; color `#8181A5` |

#### Pagination/Fullsize

| Property | Confirmed value |
| --- | --- |
| Parent left | `50.57%` |
| Parent right | `0.09%` |
| Parent top | `45.16%` |
| Parent bottom | `18.43%` |
| Numbers container width | `211px` |
| Numbers container height | `61px` |
| Active underline | `2px` height; background `#5E81F4` |
| Number item backgrounds | `36px x 36px`; radius `6px` |
| Page 2 background | `linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF` |
| Pages 1/3/4/5 backgrounds | `#F5F5FA` |
| Number typography | Lato normal `700`; `14px`; line-height `32px`; letter-spacing `0.21px`; Center |
| Page 2 color | `#5E81F4` |
| Pages 1/3/4/5 color | `#1C1D21` |
| Prev and Next controls | `82px x 36px` |
| Prev/Next background | `#8181A5` at `0.1` opacity; radius `6px` |
| Prev/Next label typography | Lato normal `900`; `12px`; line-height `14px`; uppercase; color `#8181A5` |
| Prev/Next icon typography | `la-solid-900`; weight `400`; `18px`; line-height `18px`; color `#8181A5` |
| Fullsize Prev internal link button | Auto-layout row direction; center alignment; gap `5px`; width `54px`; height `18px` |

| Extraction item | Status |
| --- | --- |
| Item/state names | Visible variants documented; exact state semantics TBD |
| Active/resting/disabled/hover states, if present | Active/selected sample values documented where visible; disabled/hover behavior TBD |
| Container dimensions | Group and visible container dimensions documented where provided |
| Item dimensions | Visible item/control dimensions documented where provided; dimensions not inferred from percentages |
| Typography | Visible typography documented |
| Icons and icon source/library mapping | Copied icon font family documented; source/library mapping TBD |
| Colors per state | Visible colors documented; additional states TBD |
| Spacing/gap | Fullsize Prev internal gap documented; other spacing/gap TBD |
| Selection/current-page behavior | TBD |
| Responsive behavior | TBD |
| Whether the three variants should become one component with variants or separate components later | TBD |
| Figma source metadata | TBD |

## Pagination Closure Notes

- Pagination is sufficiently documented for preparation boundary purposes, but
  not implementation-ready.
- Confirmed visible variants are Pagination/Primary, Pagination/Boxed, and
  Pagination/Fullsize.
- Group metadata is documented.
- Context title and line metadata are documented.
- Visible typography is documented.
- Visible colors/backgrounds are documented.
- Visible controls/arrows/icons are documented.
- Visible dimensions are documented where provided.
- Exact state semantics remain TBD.
- Disabled/hover behavior remains TBD.
- Responsive behavior remains TBD.
- Selection/current-page interaction behavior remains TBD.
- Icon source mapping beyond copied `la-solid-900` remains TBD.
- Figma source metadata remains TBD.
- Whether the three variants become one component with variants or separate
  components remains TBD.
- Additional state colors/spacing beyond documented samples remain TBD.

## Progress Bars Extraction Notes

Progress bars are not implementation-ready. The Copy-as-CSS block below is for
the visible `Progress` group. Do not infer value percentages beyond the copied
right offsets, and do not infer label/value behavior because no visible labels
or values are confirmed inside the bars.

### Progress bars group extraction sample

Group container metadata:

| Property | Confirmed value |
| --- | --- |
| Group name | `Progress` |
| Position | `absolute` |
| Width | `1141px` |
| Height | `113px` |
| Left | `149px` |
| Top | `1433px` |

Group context metadata, not progress bar variants:

| Context item | Confirmed values |
| --- | --- |
| ProgressBars title | Lato normal `700`; `16px`; line-height `24px`; color `#1C1D21` |
| Line | Border `1px solid #EEEEEE` |

Visible variants are `Progress Bars / High`, `Progress Bars / Medium`,
`Progress Bars / Low`, `Progress Bars/Full`, `Progress Bars / Primary`, and
`Progress Bars/Resting`.

Shared confirmed facts:

- Track/background color is `#F5F5FA` where visible.
- Fill radius is `3px`.
- Background radius is `3px`.
- No visible labels/values are confirmed inside the bars.

| Variant | Parent left | Parent right | Parent top | Parent bottom | Background color | Background radius | Fill left | Fill right | Fill top | Fill bottom | Fill color | Fill radius | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Progress Bars / High | `0.09%` | `73.62%` | `96.46%` | `0%` | `#F5F5FA` | `3px` | `0%` | `16.5%` | `0%` | `0%` | `#7CE7AC` | `3px` | None |
| Progress Bars / Medium | `0.09%` | `73.62%` | `77.88%` | `18.58%` | `#F5F5FA` | `3px` | `0%` | `40.78%` | `0%` | `0%` | `#F4BE5E` | `3px` | None |
| Progress Bars / Low | `36.9%` | `36.81%` | `77.88%` | `18.58%` | `#F5F5FA` | `3px` | `0%` | `77.67%` | `0%` | `0%` | `#FF808B` | `3px` | None |
| Progress Bars/Full | `73.71%` | `0%` | `77.88%` | `18.58%` | None visible in copied values | None visible in copied values | `0%` | `0%` | `0%` | `0%` | `#7CE7AC` | `3px` | No background layer is visible in the copied values |
| Progress Bars / Primary | `36.9%` | `36.81%` | `96.46%` | `0%` | `#F5F5FA` | `3px` | `0%` | `20.39%` | `0%` | `0%` | `#5E81F4` | `3px` | None |
| Progress Bars/Resting | `73.71%` | `0%` | `96.46%` | `0%` | `#F5F5FA` | `3px` | None visible in copied values | None visible in copied values | None visible in copied values | None visible in copied values | None visible in copied values | None visible in copied values | No fill layer is visible in the copied values |

| Extraction item | Status |
| --- | --- |
| Variant names | Visible variants documented; exact state/value semantics TBD |
| Track dimensions | Track pixel dimensions TBD; dimensions not inferred from percentages |
| Fill dimensions or percentage/value examples | Copied fill offsets documented where visible; actual percentage/value meaning TBD |
| Track/background colors | Visible track/background colors documented where present |
| Fill colors | Visible fill colors documented where present |
| Radius | Visible fill/background radius documented as `3px` |
| Value states | TBD |
| Label presence and label typography, if present | No visible labels/values confirmed inside the bars; label behavior TBD |
| Spacing/alignment | Copied positioning documented; spacing/alignment beyond copied positioning TBD |
| Responsive behavior | TBD |
| Figma source metadata | TBD |
| Whether Progress bars are one component with variants or multiple component scopes | TBD |

## Progress Bars Closure Notes

- Progress bars are partially documented and closed for preparation boundary
  purposes, but not implementation-ready.
- Confirmed visible variants are Progress Bars / High, Progress Bars / Medium,
  Progress Bars / Low, Progress Bars/Full, Progress Bars / Primary, and
  Progress Bars/Resting.
- Track/background color is `#F5F5FA` where visible.
- Fill/background radius is documented as `3px`.
- No visible labels or values are confirmed inside the bars.
- Copied right offsets are documentation evidence only, not normalized
  implementation-ready progress values.
- Full has no background layer visible in the copied values.
- Resting has no fill layer visible in the copied values.
- Exact state/value semantics remain TBD.
- Track and fill pixel dimensions remain TBD.
- Label/value behavior remains TBD.
- Responsive behavior remains TBD.
- Component API and component-scope decisions remain TBD.

## Tabs Primary Extraction Notes

Tabs primary is not implementation-ready. The extracted sample below documents
copied Figma values only; it does not confirm responsive behavior, hover,
focus, disabled, interaction behavior, Auto Layout spacing, icon source
mapping, or component API.

### Tabs primary group extraction sample

Group container metadata:

| Property | Confirmed value |
| --- | --- |
| Group/layer | `Tabs` |
| Position | `absolute` |
| Width | `551px` |
| Height | `132px` |
| Left | `149px` |
| Top | `1639px` |

Group context metadata, not tab variants:

| Context item | Confirmed values |
| --- | --- |
| Section title `Tabs primary` | Position `absolute`; height `24px`; left `0%`; right `83.3%`; top `calc(50% - 24px/2 - 22.5px)`; Lato normal `700`; `16px`; line-height `24px`; color `#1C1D21` |
| Line | Position `absolute`; left `0.18%`; right `0%`; top `0%`; bottom `99.24%`; border `1px solid #EEEEEE` |

#### Text active tab

| Property | Confirmed value |
| --- | --- |
| Layer | `Tabs/Text/Active` |
| Position | `absolute` |
| Parent left | `0%` |
| Parent right | `87.3%` |
| Parent top | `67.8%` |
| Parent bottom | `0.38%` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #ECECF2` |
| Border radius | `8px` |
| Tab Title width | `34px` |
| Tab Title height | `21px` |
| Tab Title left | `calc(50% - 34px/2 - 0.5px)` |
| Tab Title top | `calc(50% - 21px/2 + 0.5px)` |
| Tab Title font family | Lato |
| Tab Title font style | normal |
| Tab Title font weight | `700` |
| Tab Title font size | `14px` |
| Tab Title line height | `21px` |
| Tab Title text alignment | Center |
| Tab Title color | `#1C1D21` |

#### Icon active tab

| Property | Confirmed value |
| --- | --- |
| Layer | `Tabs / Icon / ActiveTab` |
| Position | `absolute` |
| Parent left | `47.55%` |
| Parent right | `36.12%` |
| Parent top | `67.8%` |
| Parent bottom | `0.38%` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#5E81F4` |
| Border radius | `8px` |
| Text layer name | `Tab 1` |
| Text width | `33px` |
| Text height | `14px` |
| Text left | `40px` |
| Text top | `13px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `900` |
| Text font size | `12px` |
| Text line height | `14px` |
| Text transform | uppercase |
| Text color | `#FFFFFF` |
| Icon layer name | `ico` |
| Icon width | `16px` |
| Icon height | `16px` |
| Icon left | `17px` |
| Icon top | `calc(50% - 16px/2)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `16px` |
| Icon line height | `16px` |
| Icon text alignment | Center |
| Icon color | `#FAFBFF` |

#### Text resting tabs

There are two copied `Tabs/Text/Resting` instances. The duplicated copied
layer names are preserved exactly.

| Instance | Position | Height | Left | Right | Top |
| --- | --- | --- | --- | --- | --- |
| `Tabs/Text/Resting` instance 1 | `absolute` | `42px` | `13.97%` | `73.32%` | `calc(50% - 42px/2 + 44.5px)` |
| `Tabs/Text/Resting` instance 2 | `absolute` | `42px` | `28.13%` | `59.17%` | `calc(50% - 42px/2 + 44.5px)` |

Shared Tab Title values:

| Property | Confirmed value |
| --- | --- |
| Position | `absolute` |
| Height | `21px` |
| Left | `25.68%` |
| Right | `25.75%` |
| Top | `10px` |
| Font family | Lato |
| Font style | normal |
| Font weight | `700` |
| Font size | `14px` |
| Line height | `21px` |
| Text alignment | Center |
| Color | `#8181A5` |

#### Icon resting tabs

There are two copied `Tabs / Icon / RestingTab` instances. The duplicated
copied `Tab 2` text layer names are preserved exactly.

| Instance | Position | Height | Left | Right | Top |
| --- | --- | --- | --- | --- | --- |
| `Tabs / Icon / RestingTab` instance 1 | `absolute` | `42px` | `65.15%` | `18.51%` | `calc(50% - 42px/2 + 44.5px)` |
| `Tabs / Icon / RestingTab` instance 2 | `absolute` | `42px` | `82.94%` | `0.73%` | `calc(50% - 42px/2 + 44.5px)` |

Shared rectangle values:

| Property | Confirmed value |
| --- | --- |
| Position | `absolute` |
| Left/right/top/bottom | `0%` |
| Background | `linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF` |
| Border radius | `8px` |

Shared text values:

| Property | Confirmed value |
| --- | --- |
| Layer name | `Tab 2` |
| Width | `33px` |
| Height | `14px` |
| Left | `40px` |
| Top | `13px` |
| Font family | Lato |
| Font style | normal |
| Font weight | `900` |
| Font size | `12px` |
| Line height | `14px` |
| Text transform | uppercase |
| Color | `#5E81F4` |

Shared icon values:

| Property | Confirmed value |
| --- | --- |
| Layer name | `ico` |
| Width | `16px` |
| Height | `16px` |
| Left | `17px` |
| Top | `12px` |
| Font family | `la-solid-900` |
| Font style | normal |
| Font weight | `400` |
| Font size | `16px` |
| Line height | `16px` |
| Text alignment | Center |
| Color | `#5E81F4` |

| Extraction item | Status |
| --- | --- |
| Visible variants/states | Visible active/resting text and icon samples documented; disabled/focus/hover states TBD |
| Active/resting/disabled semantics | Copied active/resting names documented; exact interaction semantics and disabled behavior TBD |
| Dimensions | Group dimensions and copied item dimensions documented where provided; percentage offsets not converted to pixel dimensions |
| Typography | Visible typography documented |
| Colors | Visible colors documented |
| Border/radius | Visible border/radius values documented |
| Icon presence and icon source mapping, if applicable | Icon font-family `la-solid-900` documented as copied CSS evidence only; source/library mapping TBD |
| Spacing/gap/padding | Copied absolute positions documented; Auto Layout spacing/gap/padding TBD |
| Focus/hover/active behavior | Active sample documented; focus/hover behavior TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Component scope/API decision | TBD |

## Tabs Primary Closure Notes

- Tabs primary is partially documented and closed for preparation boundary
  purposes, but not implementation-ready.
- Confirmed sample coverage includes text active, icon active, text resting,
  and icon resting copied Figma values.
- Copied absolute positions and percentage offsets are documentation evidence
  only, not normalized implementation values.
- Duplicated copied names such as `Tabs/Text/Resting`, `Tabs / Icon /
  RestingTab`, and `Tab 2` are preserved as Figma evidence and must not be
  normalized.
- Icon font-family `la-solid-900` is documented as copied CSS evidence only;
  icon source/library mapping remains TBD.
- Disabled, focus, hover, responsive, and interaction behavior remain TBD.
- Auto Layout spacing/gap/padding remains TBD.
- Source metadata remains TBD.
- Component API and component-scope decisions remain TBD.

## Badge & Status Tag Extraction Notes

Badge & status tag is not implementation-ready. The extracted sample below
documents copied Figma values only. This scope remains separate from the
existing Tags extraction notes.

### Badge & status tag group extraction sample

Group container metadata:

| Property | Confirmed value |
| --- | --- |
| Group/layer | `Badge` |
| Position | `absolute` |
| Width | `551px` |
| Height | `120px` |
| Left | `741px` |
| Top | `1639px` |

Group context metadata, not badge or status tag variants:

| Context item | Confirmed values |
| --- | --- |
| Section title `Badge & status tag` | Position `absolute`; height `24px`; left `0%`; right `75.86%`; top `calc(50% - 24px/2 - 16.5px)`; Lato normal `700`; `16px`; line-height `24px`; color `#1C1D21` |
| Line | Position `absolute`; left `0.18%`; right `0%`; top `0%`; bottom `99.17%`; border `1px solid #EEEEEE` |

#### Badge oval

| Property | Confirmed value |
| --- | --- |
| Layer | `Badge / Oval` |
| Position | `absolute` |
| Parent left | `18.51%` |
| Parent right | `76.04%` |
| Parent top | `78.33%` |
| Parent bottom | `1.67%` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `linear-gradient(0deg, rgba(124, 231, 172, 0.1), rgba(124, 231, 172, 0.1)), #FFFFFF` |
| Border radius | `12px` |
| Number position | `absolute` |
| Number height | `21px` |
| Number left | `11px` |
| Number right | `10px` |
| Number top | `calc(50% - 21px/2 - 0.5px)` |
| Number font family | Lato |
| Number font style | normal |
| Number font weight | `700` |
| Number font size | `14px` |
| Number line height | `21px` |
| Number text alignment | Center |
| Number color | `#7CE7AC` |

#### Badge round

| Property | Confirmed value |
| --- | --- |
| Layer | `Badge / Round` |
| Position | `absolute` |
| Parent left | `28.68%` |
| Parent right | `65.88%` |
| Parent top | `78.33%` |
| Parent bottom | `1.67%` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `linear-gradient(0deg, rgba(124, 231, 172, 0.1), rgba(124, 231, 172, 0.1)), #FFFFFF` |
| Border radius | `3px` |
| Number position | `absolute` |
| Number height | `21px` |
| Number left | `11px` |
| Number right | `10px` |
| Number top | `calc(50% - 21px/2 - 0.5px)` |
| Number font family | Lato |
| Number font style | normal |
| Number font weight | `700` |
| Number font size | `14px` |
| Number line height | `21px` |
| Number text alignment | Center |
| Number color | `#7CE7AC` |

#### Status tag

| Property | Confirmed value |
| --- | --- |
| Layer | `Tags / Status tag` |
| Position | `absolute` |
| Parent left | `0.18%` |
| Parent right | `86.21%` |
| Parent top | `76.67%` |
| Parent bottom | `0%` |
| Background layer name | `bg hover` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#F5F5FA` |
| Border radius | `6px` |
| Text layer name | `Online` |
| Text position | `absolute` |
| Text height | `21px` |
| Text left | `23px` |
| Text right | `11px` |
| Text top | `calc(50% - 21px/2 - 0.5px)` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `400` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#8181A5` |
| Indicator layer name | `Circle` |
| Indicator position | `absolute` |
| Indicator width | `8px` |
| Indicator height | `8px` |
| Indicator left | `9px` |
| Indicator top | `calc(50% - 8px/2)` |
| Indicator background | `#7CE7AC` |

| Extraction item | Status |
| --- | --- |
| Visible variants/items | Visible `Badge / Oval`, `Badge / Round`, and `Tags / Status tag` samples documented |
| Badge shape variants, if present | Oval and Round samples documented |
| Status tag variants, if present | Visible `Online` status tag sample documented; broader status variants TBD |
| State semantics | Copied names documented; status semantics beyond visible `Online` label TBD |
| Dimensions | Group dimensions and copied item dimensions documented where provided; percentage offsets not converted to pixel dimensions |
| Typography | Visible typography documented |
| Colors | Visible colors documented |
| Background/radius/border | Visible background/radius values documented; border values not confirmed beyond copied values |
| Status indicator/dot behavior, if present | Visible `Circle` indicator documented; behavior TBD |
| Icon presence, if present | None confirmed beyond visible status indicator |
| Spacing/gap/padding | Copied absolute positions documented; Auto Layout spacing/gap/padding TBD |
| Hover/focus/active/disabled behavior | `bg hover` is preserved as copied layer name only; behavior TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Relationship to existing Tags scope | Kept separate from existing Tags extraction notes; final relationship TBD |
| Component scope/API decision | TBD |

## Badge & Status Tag Closure Notes

- Badge & status tag is partially documented and closed for preparation
  boundary purposes, but not implementation-ready.
- Confirmed sample coverage includes `Badge / Oval`, `Badge / Round`, and
  `Tags / Status tag` copied Figma values.
- Copied absolute positions and percentage offsets are documentation evidence
  only, not normalized implementation values.
- `bg hover`, `Online`, `Number`, and `Circle` are preserved as copied Figma
  evidence only and must not be normalized into behavior assumptions.
- Status semantics beyond the visible `Online` label remain TBD.
- Badge count behavior from the copied `Number` layer remains TBD.
- Additional status variants remain TBD.
- Hover, focus, active, disabled, responsive, and interaction behavior remain
  TBD.
- Auto Layout spacing/gap/padding remains TBD.
- Source metadata remains TBD.
- Relationship to the existing Tags scope remains TBD; this scope stays
  separate from the Tags extraction notes.
- Component API and component-scope decisions remain TBD.

## Implementation Readiness

Documented UI implementation status: Not ready.

Implementation blockers include:

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
