# Forms Figma Notes

This document captures extraction notes for the Forms Figma area. Figma is the
visual source of truth. Values that are not confirmed must remain marked as
`TBD` until extracted from Copy-as-CSS or Figma Inspect.

## Status

- Forms are not implementation-ready.
- Text field extraction is partially documented from Oskar's provided
  Copy-as-CSS values.
- Behavior, validation, responsive rules, Auto Layout spacing, token mapping,
  and component API remain TBD.
- Implementation Ready: No

## Preparation Roadmap

| Group | Current status | Remaining extraction needs | Code implementation allowed |
| --- | --- | --- | --- |
| Text inputs | Partially documented / closed for now | Copied text field samples documented; behavior, validation semantics, responsive behavior, source metadata, and component API remain TBD | No |
| Short input / empty state | Not ready | TBD | No |
| Filled state | Not ready | TBD | No |
| Placeholder state | Not ready | TBD | No |
| Focus state | Not ready | TBD | No |
| Error state | Partially documented / closed for now | Copied error state samples documented; validation semantics, behavior, source metadata, and component API remain TBD | No |
| Success state | Partially documented / closed for now | Copied success state samples documented; validation semantics, behavior, source metadata, and component API remain TBD | No |
| Disabled state | Not ready | TBD | No |
| Labels | Not ready | TBD | No |
| Helper text | Not ready | TBD | No |
| Validation messages | Not ready | TBD | No |
| Select/dropdown fields, if present | Partially documented | Copied Select fields active samples documented; select/open/closed/hover/focus/active/selected behavior, source metadata, and component API remain TBD | No |
| Search fields, if present | Not ready | TBD | No |
| Textarea, if present | Not ready | TBD | No |
| Checkbox/radio/switch, if present | Not ready | TBD | No |
| Source metadata | Not ready | TBD | No |
| Component scope/API decision | Not ready | TBD | No |

## Extraction Checklist

| Extraction item | Status |
| --- | --- |
| Visible variants/items | TBD |
| Dimensions | TBD |
| Typography | TBD |
| Colors | TBD |
| Background/border/radius | TBD |
| Placeholder/label/value typography | TBD |
| Icon presence and icon source mapping, if applicable | TBD |
| Spacing/gap/padding | TBD |
| Focus/hover/active/disabled/error behavior | TBD |
| Validation semantics | TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Component scope/API decision | TBD |

## Text Fields Extraction Notes

Text fields are not implementation-ready. The extracted sample below documents
copied Figma values only. Layer names such as `Active`, `Inactive`, `Disabled`,
`Placeholder`, `Start typing…`, `Tags`, `Tags / Grey`, and
`Tags / GreyEditable` are preserved as copied Figma evidence and must not be
normalized into behavior assumptions.

### TextFields section title

| Property | Confirmed value |
| --- | --- |
| Layer/name | `TextFields` |
| Position | `absolute` |
| Width | `73px` |
| Height | `24px` |
| Left | `149px` |
| Top | `288px` |
| Font family | Lato |
| Font style | normal |
| Font weight | `700` |
| Font size | `16px` |
| Line height | `24px` |
| Color | `#1C1D21` |

### Forms / Input / Active Icon on Right

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / Active Icon on Right` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `150px` |
| Top | `344px` |
| Background position | `absolute` |
| Background height | `1px` |
| Background left | `0%` |
| Background right | `0%` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `calc(50% - 18px/2 + 9px)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#1C1D21` |
| Placeholder position | `absolute` |
| Placeholder width | `29px` |
| Placeholder height | `21px` |
| Placeholder left | `0px` |
| Placeholder top | `calc(50% - 21px/2 + 10.5px)` |
| Placeholder font family | Lato |
| Placeholder font style | normal |
| Placeholder font weight | `700` |
| Placeholder font size | `14px` |
| Placeholder line height | `21px` |
| Placeholder color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `calc(50% - 21px/2 - 15.5px)` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / Active Icon on Left

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / Active Icon on Left` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `150px` |
| Top | `472px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon left | `0px` |
| Icon top | `calc(50% - 18px/2 + 10px)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#1C1D21` |
| Placeholder position | `absolute` |
| Placeholder width | `29px` |
| Placeholder height | `21px` |
| Placeholder left | `29px` |
| Placeholder top | `calc(50% - 21px/2 + 11.5px)` |
| Placeholder font family | Lato |
| Placeholder font style | normal |
| Placeholder font weight | `700` |
| Placeholder font size | `14px` |
| Placeholder line height | `21px` |
| Placeholder color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `calc(50% - 21px/2 - 15.5px)` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / Inactive

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / Inactive` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `540px` |
| Top | `344px` |
| Background position | `absolute` |
| Background height | `1px` |
| Background left | `0%` |
| Background right | `0.28%` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `84px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#8181A5` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `36px` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#8181A5` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / Disabled

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / Disabled` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `930px` |
| Top | `344px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `84px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#8181A5` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `36px` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#8181A5` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / Active Basic

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / Active Basic` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `540px` |
| Top | `472px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `29px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `37px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Embedded Basic tags field

The embedded `Tags`, `Tags / Grey`, and `Tags / GreyEditable` copied layers are
documented only as Forms sample evidence. They do not reopen the previous Tags
scope.

| Property | Confirmed value |
| --- | --- |
| Parent/group name from copied CSS | `Tags` |
| Parent position | `absolute` |
| Parent width | `360px` |
| Parent height | `84px` |
| Parent left | `930px` |
| Parent top | `460px` |
| Nested layer/name | `Forms / Input / Active Icon on Right` |
| Nested position | `absolute` |
| Nested width | `360px` |
| Nested height | `84px` |
| Nested left | `930px` |
| Nested top | `460px` |
| Background position | `absolute` |
| Background height | `1px` |
| Background left | `0%` |
| Background right | `0%` |
| Background bottom | `0px` |
| Background color | `#ECECF2` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `calc(50% - 18px/2 + 9px)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#1C1D21` |
| Placeholder position | `absolute` |
| Placeholder width | `29px` |
| Placeholder height | `21px` |
| Placeholder left | `0px` |
| Placeholder top | `calc(50% - 21px/2 + 10.5px)` |
| Placeholder font family | Lato |
| Placeholder font style | normal |
| Placeholder font weight | `700` |
| Placeholder font size | `14px` |
| Placeholder line height | `21px` |
| Placeholder color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `61px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `calc(50% - 21px/2 - 15.5px)` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

Embedded tag chip:

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Tags / Grey` |
| Position | `absolute` |
| Width | `64px` |
| Height | `36px` |
| Left | `930px` |
| Top | `500px` |
| Background layer name | `bg hover` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#F5F5FA` |
| Border radius | `8px` |
| Tag position | `absolute` |
| Tag height | `21px` |
| Tag left | `21px` |
| Tag right | `21px` |
| Tag top | `calc(50% - 21px/2 - 0.5px)` |
| Tag font family | Lato |
| Tag font style | normal |
| Tag font weight | `700` |
| Tag font size | `14px` |
| Tag line height | `21px` |
| Tag text alignment | Center |
| Tag color | `#8181A5` |

Embedded editable tag chip:

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Tags / GreyEditable` |
| Position | `absolute` |
| Width | `106px` |
| Height | `36px` |
| Left | `998px` |
| Top | `500px` |
| Background layer name | `bg hover` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#F5F5FA` |
| Border radius | `8px` |
| Tag position | `absolute` |
| Tag width | `42px` |
| Tag height | `21px` |
| Tag left | `20px` |
| Tag top | `calc(50% - 21px/2 - 0.5px)` |
| Tag font family | Lato |
| Tag font style | normal |
| Tag font weight | `700` |
| Tag font size | `14px` |
| Tag line height | `21px` |
| Tag color | `#8181A5` |
| Close position | `absolute` |
| Close width | `16px` |
| Close height | `16px` |
| Close right | `13px` |
| Close top | `calc(50% - 16px/2)` |
| Close font family | `la-solid-900` |
| Close font style | normal |
| Close font weight | `400` |
| Close font size | `16px` |
| Close line height | `16px` |
| Close text alignment | Center |
| Close color | `#8181A5` |

### Text fields extraction status

| Extraction item | Status |
| --- | --- |
| Visible variants/items | Text field samples documented; broader Forms variants TBD |
| Dimensions | Copied dimensions documented where provided; percentage offsets not converted to pixel dimensions |
| Typography | Visible text field typography documented |
| Colors | Visible text field colors documented |
| Background/border/radius | Visible divider/background values documented; broader border/radius states TBD |
| Placeholder/label/value typography | Visible placeholder, value, and field title typography documented |
| Icon presence and icon source mapping, if applicable | `la-solid-900` documented as copied font-family evidence only; icon source/library mapping TBD |
| Spacing/gap/padding | Copied absolute positions documented; Auto Layout spacing/gap/padding TBD |
| Focus/hover/active/disabled/error behavior | Copied layer names documented; behavior semantics TBD |
| Validation semantics | Error and Success copied samples documented; validation behavior semantics TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Component scope/API decision | TBD |

## Text Fields States Extraction Notes

Text fields states are not implementation-ready. The extracted sample below
documents copied Figma values only. Layer names such as `Error`, `Success`,
`Error with Icon`, `Success with Icon`, `Start typing…`, and `Field title` are
preserved as copied Figma evidence and must not be normalized into validation
or interaction behavior assumptions.

Group context from screenshot:

| Property | Confirmed value |
| --- | --- |
| Visible section label | Text fields states |
| Screenshot-selected group dimensions | `751 × 200` |

### Forms / Input / States / Error

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / States / Error` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `149px` |
| Top | `723px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#FF808B` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `29px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / States / Success

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / States / Success` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `540px` |
| Top | `723px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#7CE7AC` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `29px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Forms / Input / States / Error with Icon

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / States / Error with Icon` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `149px` |
| Top | `851px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#FF808B` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `29px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `36px` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#FF808B` |

### Forms / Input / States / Success with Icon

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Forms / Input / States / Success with Icon` |
| Position | `absolute` |
| Width | `360px` |
| Height | `72px` |
| Left | `540px` |
| Top | `851px` |
| Background position | `absolute` |
| Background width | `360px` |
| Background height | `1px` |
| Background left | `0px` |
| Background bottom | `0px` |
| Background color | `#7CE7AC` |
| Text layer name | `Start typing…` |
| Text position | `absolute` |
| Text width | `29px` |
| Text height | `21px` |
| Text left | `0px` |
| Text top | `36px` |
| Text font family | Lato |
| Text font style | normal |
| Text font weight | `700` |
| Text font size | `14px` |
| Text line height | `21px` |
| Text color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `10px` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `36px` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#7CE7AC` |

### Text fields states extraction status

| Extraction item | Status |
| --- | --- |
| Visible variants/items | Error and Success state samples documented; broader Forms states TBD |
| Dimensions | Copied dimensions documented where provided |
| Typography | Visible text field state typography documented |
| Colors | Visible error/success divider and icon colors documented |
| Background/border/radius | Divider color values documented; broader border/radius states TBD |
| Icon presence and icon source mapping, if applicable | `la-solid-900` documented as copied font-family evidence only; icon source/library mapping TBD |
| Focus/hover/active/disabled/error/success behavior | Copied Error and Success layer names documented; behavior semantics TBD |
| Validation semantics | Copied Error and Success layer names documented; validation semantics TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Component scope/API decision | TBD |

## Text Fields States Closure Notes

- Text field states are partially documented and closed for preparation
  boundary purposes, but Forms remain not implementation-ready.
- Confirmed sample coverage includes `Forms / Input / States / Error`,
  `Forms / Input / States / Success`, `Forms / Input / States / Error with
  Icon`, and `Forms / Input / States / Success with Icon`.
- Copied absolute positions and dimensions are documentation evidence only,
  not normalized implementation values.
- `Error` and `Success` are copied Figma layer names and must not be
  normalized into validation behavior assumptions.
- `Start typing…` must preserve the single ellipsis character.
- `751 × 200` must preserve the multiplication sign.
- Icon font-family `la-solid-900` is documented as copied font-family evidence
  only; icon source/library mapping remains TBD.
- Validation semantics, behavior semantics, responsive behavior, source
  metadata, Auto Layout spacing/gap/padding, and component API/scope decisions
  remain TBD.
- Additional form states remain TBD.

## Select Fields Active Extraction Notes

Select fields active samples are not implementation-ready. The extracted sample
below documents copied Figma values only. Copied names such as `Dropdown`,
`Dropdown Icons`, `Forms / Input / Active Icon on Right`, `hover bg`, `Title`,
`Placeholder`, `Field title`, `Icon`, `Ico`, `IcoCopy`, `IcoCopy2`, and
`IcoCopy3` are preserved as Figma evidence and must not be normalized into
select, open, closed, hover, focus, active, selected, or component behavior
assumptions.

### SelectFieldsActive section title

| Property | Confirmed value |
| --- | --- |
| Layer/name | `SelectFieldsActive` |
| Position | `absolute` |
| Width | `132px` |
| Height | `24px` |
| Left | `149px` |
| Top | `1046px` |
| Font family | Lato |
| Font style | normal |
| Font weight | `700` |
| Font size | `16px` |
| Line height | `24px` |
| Color | `#1C1D21` |

### Select trigger inputs

All three trigger inputs use the copied layer/name `Forms / Input / Active Icon
on Right`. Repeated copied names are preserved exactly.

| Trigger | Layer/name | Position | Width | Height | Left | Top | Background color |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trigger input 1 | `Forms / Input / Active Icon on Right` | `absolute` | `360px` | `72px` | `150px` | `1103px` | `#ECECF2` |
| Trigger input 2 | `Forms / Input / Active Icon on Right` | `absolute` | `360px` | `72px` | `540px` | `1103px` | `#ECECF2` |
| Trigger input 3 | `Forms / Input / Active Icon on Right` | `absolute` | `360px` | `72px` | `934px` | `1103px` | `#5E81F4` |

Shared copied trigger child values:

| Property | Confirmed value |
| --- | --- |
| Background position | `absolute` |
| Background height | `1px` |
| Background left | `0%` |
| Background right | `0%` |
| Background bottom | `0px` |
| Icon position | `absolute` |
| Icon width | `18px` |
| Icon height | `18px` |
| Icon right | `0px` |
| Icon top | `calc(50% - 18px/2 + 9px)` |
| Icon font family | `la-solid-900` |
| Icon font style | normal |
| Icon font weight | `400` |
| Icon font size | `18px` |
| Icon line height | `18px` |
| Icon text alignment | Center |
| Icon color | `#1C1D21` |
| Placeholder position | `absolute` |
| Placeholder width | `29px` |
| Placeholder height | `21px` |
| Placeholder left | `0px` |
| Placeholder top | `calc(50% - 21px/2 + 10.5px)` |
| Placeholder font family | Lato |
| Placeholder font style | normal |
| Placeholder font weight | `700` |
| Placeholder font size | `14px` |
| Placeholder line height | `21px` |
| Placeholder color | `#1C1D21` |
| Field title position | `absolute` |
| Field title width | `58px` |
| Field title height | `21px` |
| Field title left | `0px` |
| Field title top | `calc(50% - 21px/2 - 15.5px)` |
| Field title font family | Lato |
| Field title font style | normal |
| Field title font weight | `400` |
| Field title font size | `14px` |
| Field title line height | `21px` |
| Field title color | `#8181A5` |

### Dropdown

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Dropdown` |
| Position | `absolute` |
| Width | `360px` |
| Height | `204px` |
| Left | `149px` |
| Top | `1192px` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#FFFFFF` |
| Box shadow | `0px 6px 20px rgba(153, 155, 168, 0.1)` |
| Border radius | `4px` |

| Item | Layer/name | Height | Left | Right | Top | Font | Color |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Title item 1 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 - 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 2 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 - 22.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#5E81F4` |
| Title item 3 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 + 23.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 4 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 + 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |

### Dropdown Icons

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Dropdown Icons` |
| Position | `absolute` |
| Width | `360px` |
| Height | `204px` |
| Left | `540px` |
| Top | `1192px` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#FFFFFF` |
| Box shadow | `0px 6px 20px rgba(153, 155, 168, 0.1)` |
| Border radius | `8px` |
| Icons group layer/name | `Icons` |
| Icons group position | `absolute` |
| Icons group left | `4.44%` |
| Icons group right | `90.56%` |
| Icons group top | `11.27%` |
| Icons group bottom | `12.25%` |

| Item | Layer/name | Height | Left | Right | Top | Font | Color |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Title item 1 | `Title` | `21px` | `12.5%` | `65%` | `calc(50% - 21px/2 - 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 2 | `Title` | `21px` | `12.5%` | `65%` | `calc(50% - 21px/2 - 22.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#5E81F4` |
| Title item 3 | `Title` | `21px` | `12.5%` | `65%` | `calc(50% - 21px/2 + 23.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 4 | `Title` | `21px` | `12.5%` | `65%` | `calc(50% - 21px/2 + 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |

| Icon layer | Width | Height | Left | Top | Font | Color |
| --- | --- | --- | --- | --- | --- | --- |
| `Ico` | `18px` | `18px` | `calc(50% - 18px/2)` | `calc(50% - 18px/2 - 23px)` | `la-solid-900` normal `400`, `18px`, line-height `18px`, Center | `#5E81F4` |
| `IcoCopy` | `18px` | `18px` | `calc(50% - 18px/2)` | `calc(50% - 18px/2 - 69px)` | `la-solid-900` normal `400`, `18px`, line-height `18px`, Center | `#1C1D21` |
| `IcoCopy2` | `18px` | `18px` | `calc(50% - 18px/2)` | `calc(50% - 18px/2 + 24px)` | `la-solid-900` normal `400`, `18px`, line-height `18px`, Center | `#1C1D21` |
| `IcoCopy3` | `18px` | `18px` | `calc(50% - 18px/2)` | `calc(50% - 18px/2 + 69px)` | `la-solid-900` normal `400`, `18px`, line-height `18px`, Center | `#1C1D21` |

### Dropdown

| Property | Confirmed value |
| --- | --- |
| Layer/name | `Dropdown` |
| Position | `absolute` |
| Width | `360px` |
| Height | `204px` |
| Left | `933px` |
| Top | `1192px` |
| Background box sizing | `border-box` |
| Background position | `absolute` |
| Background left/right/top/bottom | `0%` |
| Background | `#FFFFFF` |
| Border | `1px solid #ECECF2` |
| Border radius | `8px` |
| Hover bg layer/name | `hover bg` |
| Hover bg position | `absolute` |
| Hover bg left | `0%` |
| Hover bg right | `0%` |
| Hover bg top | `27.45%` |
| Hover bg bottom | `50%` |
| Hover bg background | `#F5F5FA` |

| Item | Layer/name | Height | Left | Right | Top | Font | Color |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Title item 1 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 - 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 2 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 - 22.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#5E81F4` |
| Title item 3 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 + 23.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |
| Title item 4 | `Title` | `21px` | `4.72%` | `72.78%` | `calc(50% - 21px/2 + 68.5px)` | Lato normal `700`, `14px`, line-height `21px` | `#1C1D21` |

### Select fields active extraction status

| Extraction item | Status |
| --- | --- |
| Visible variants/items | Trigger inputs and dropdown samples documented; broader select/dropdown variants TBD |
| Dimensions | Copied dimensions documented where provided; percentage offsets not converted to pixel dimensions |
| Typography | Visible trigger and dropdown typography documented |
| Colors | Visible trigger, dropdown, title, icon, border, shadow, and hover bg colors documented |
| Background/border/radius | Visible copied background, border, shadow, and radius values documented |
| Icon presence and icon source mapping, if applicable | `la-solid-900` documented as copied font-family evidence only; icon source/library mapping TBD |
| Spacing/gap/padding | Copied absolute positions documented; Auto Layout spacing/gap/padding TBD |
| Select/open/closed/hover/focus/active/selected behavior | Copied layer names documented; behavior semantics TBD |
| Validation semantics | TBD |
| Responsive behavior | TBD |
| Source metadata | TBD |
| Component scope/API decision | TBD |

## Text Fields Closure Notes

- Text fields are partially documented and closed for preparation boundary
  purposes, but Forms remain not implementation-ready.
- Confirmed sample coverage includes `Forms / Input / Active Icon on Right`,
  `Forms / Input / Active Icon on Left`, `Forms / Input / Inactive`,
  `Forms / Input / Disabled`, `Forms / Input / Active Basic`, and the embedded
  Basic tags field.
- Copied absolute positions and percentage offsets are documentation evidence
  only, not normalized implementation values.
- Copied names such as `Active`, `Inactive`, `Disabled`, `Placeholder`,
  `Start typing…`, `Tags`, `Tags / Grey`, `Tags / GreyEditable`, and
  `bg hover` are preserved as Figma evidence and must not be normalized into
  behavior assumptions.
- Embedded Tags layers remain Forms sample evidence only and do not reopen the
  previous Tags scope.
- `Start typing…` must preserve the single ellipsis character.
- Icon font-family `la-solid-900` is documented as copied font-family evidence
  only; icon source/library mapping remains TBD.
- Behavior semantics, validation semantics, responsive behavior, source
  metadata, Auto Layout spacing/gap/padding, and component API/scope decisions
  remain TBD.
- Additional form groups and states remain TBD.

## Anti-Assumption Notes

- Do not infer Auto Layout spacing from absolute positions.
- Do not infer validation behavior from color or layer names.
- Do not infer component API before extraction is complete.
- Do not map values to tokens yet.
- Do not invent dimensions, typography, colors, spacing, states, behavior,
  validation rules, responsive behavior, or component API.
- Do not infer hover, focus, active, disabled, error, or interaction behavior
  from copied layer names.
- Do not treat embedded `Tags / Grey` or `Tags / GreyEditable` layers as a
  reopening of the previous Tags scope.
