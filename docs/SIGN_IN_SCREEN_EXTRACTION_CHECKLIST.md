# Sign In Screen Extraction Checklist

This checklist defines the Figma evidence Oskar should provide for the selected
Sign In screen before any Auth/UI implementation begins. It is docs-only and
does not approve source edits, route edits, components, dependencies, form
libraries, icon libraries, or Sign In implementation.

## Current Status

- Sign In is planned as the first real page later.
- Implementation remains blocked.
- `/sign-in` already exists in `src/App.tsx` and points to
  `src/routes/auth/SignInPage.tsx`.
- `src/routes/auth/SignInPage.tsx` is currently a placeholder route with a
  simple heading.
- This checklist does not require implementation. It only defines the evidence
  needed before implementation can be planned safely.

## Required Figma Evidence From Oskar

Provide the following for the selected Sign In screen.

### Screen And Source Metadata

| Evidence item | Needed value |
| --- | --- |
| Full Sign In screen screenshot | Required |
| Figma file/page reference | Required if available |
| Frame or node name | Required if available |
| Node id | Required if available |
| Full page/frame dimensions | Required |
| Desktop viewport/frame size | Required |
| Mobile/responsive frame screenshot | Optional but needed before responsive implementation |
| Last reviewed date/version | Required if available |

### Background And Layout

| Evidence item | Needed value |
| --- | --- |
| Page background color or image | Required |
| Surface/background layers | Required |
| Auth layout structure | Required |
| Left/right columns, if present | Required |
| Column widths or frame dimensions | Required |
| Main alignment and constraints | Required |
| Decorative media/illustration assets, if present | Required |
| Responsive/mobile layout differences | Required before responsive implementation |

### Auth Card Or Surface

| Evidence item | Needed value |
| --- | --- |
| Card/surface layer name | Required if present |
| Card/surface dimensions | Required |
| Background/fill | Required |
| Border | Required if present |
| Radius | Required |
| Shadow | Required if present |
| Internal padding | Required if visible/available |
| Child spacing/gaps | Required if visible/available |
| Auto Layout values | Required if available; otherwise mark unavailable |

### Logo Or Brand Area

| Evidence item | Needed value |
| --- | --- |
| Logo/brand presence | Required |
| Logo asset or text values | Required if present |
| Logo dimensions | Required if present |
| Logo position/spacing | Required if present |
| Brand typography/color | Required if text-based |

### Heading And Body Copy

| Evidence item | Needed value |
| --- | --- |
| Heading text | Required |
| Heading typography | Required |
| Heading color | Required |
| Heading dimensions/position | Required |
| Subtitle/body text | Required if present |
| Subtitle/body typography | Required if present |
| Subtitle/body color | Required if present |
| Text alignment | Required |

### Input Fields

For each visible input field, provide:

| Evidence item | Needed value |
| --- | --- |
| Field label | Required if present |
| Placeholder or value text | Required |
| Expected field type | Required if visible or known, such as email or password |
| Field dimensions | Required |
| Border/background values | Required |
| Radius | Required if present |
| Typography for label/value/placeholder | Required |
| Text and placeholder colors | Required |
| Icon presence | Required |
| Exact icon glyph identity | Required only if icon is needed |
| Icon decorative vs functional role | Required if icon is present |
| Field state | Required only if explicitly visible; do not infer |
| Focus/error/disabled/success values | Required only if visible in the selected screen |

### Primary Button

| Evidence item | Needed value |
| --- | --- |
| Button label | Required |
| Button variant | Required if visible/known |
| Button dimensions | Required |
| Background/fill | Required |
| Text color | Required |
| Typography | Required |
| Radius | Required |
| Border | Required if present |
| Shadow | Required if present |
| State | Required only if explicitly visible; do not infer |
| Icon presence | Required |

### Links And Supporting Text

| Evidence item | Needed value |
| --- | --- |
| Forgot password link | Required if present |
| Sign up link | Required if present |
| Terms/privacy links | Required if present |
| Link typography | Required |
| Link color | Required |
| Link placement and spacing | Required |
| Supporting text typography/color | Required if present |

### Spacing And Constraints

| Evidence item | Needed value |
| --- | --- |
| Vertical gaps between major sections | Required |
| Horizontal gaps between columns or inline items | Required |
| Card/internal padding | Required |
| Form field spacing | Required |
| Button spacing | Required |
| Link/supporting text spacing | Required |
| Layout constraints | Required if available |
| Auto Layout padding/gap | Required if available |
| Unavailable Auto Layout values | Mark explicitly unavailable; do not infer |

### Icons

| Evidence item | Needed value |
| --- | --- |
| Exact glyph identity | Required before rendering an icon |
| Copied font-family evidence | Useful but not enough |
| Decorative vs functional role | Required |
| Accessibility label for functional icon | Required |
| Icon dimensions | Required |
| Icon color | Required |
| Icon position/spacing | Required |

### Responsive And Mobile

| Evidence item | Needed value |
| --- | --- |
| Mobile screenshot/frame | Required before mobile implementation |
| Mobile frame dimensions | Required |
| Mobile layout changes | Required |
| Mobile spacing/padding | Required |
| Mobile typography changes | Required if any |
| Mobile hidden/shown elements | Required if any |

## Copy-as-CSS / Inspect Request Format

Screenshots are helpful for orientation, but they are not enough for precise
implementation. For each selected layer, Oskar should provide either
Copy-as-CSS output, visible Inspect values, or both.

Preferred extraction order:

1. Page/frame container.
2. Auth layout wrapper and major surfaces.
3. Card/container.
4. Heading and subtitle/body copy.
5. Each input field, one field at a time.
6. Primary button.
7. Links and supporting text.
8. Icons only if identity is known.

For each selected layer, include:

- Copied layer/frame name.
- Position mode and dimensions.
- Fill/background values.
- Border values, if present.
- Radius values.
- Shadow values, if present.
- Typography values for text layers.
- Text color.
- Auto Layout padding/gap values if visible.
- Note when Auto Layout values are unavailable.
- For icons, exact glyph identity and whether the icon is decorative or
  functional.

Do not convert percentage offsets into pixel dimensions unless Figma Inspect
explicitly provides pixel values.

## Existing Generic Evidence That May Help Later

Existing local docs already contain generic component evidence that may be
useful during later planning:

- Forms text-field samples in `docs/figma-notes/forms.md`.
- Button samples in `docs/figma-notes/buttons-tags-pagination.md`.
- Approved semantic color aliases in `src/styles/tokens.css`.
- Approved radius primitives in `src/styles/tokens.css`.
- Approved `--shadow-panel` primitive in `src/styles/tokens.css`.
- Lato typography foundation in `src/styles/tokens.css`.

These generic values do not replace Sign In screen extraction. Sign In
screen-specific layout, spacing, final text, final component scope, responsive
behavior, and implementation boundaries still require direct extraction from
the selected Sign In screen.

## Blockers Before Implementation

Implementation remains blocked by:

- Missing screen-specific dimensions.
- Missing spacing/padding values.
- Missing AuthCard/AuthLayout dimensions.
- Missing responsive behavior.
- Missing final screen text/content.
- Input API is not approved.
- Button API is not approved.
- Form validation strategy is not decided.
- React Hook Form and Zod dependency decisions are not made.
- Icon glyph identity remains unresolved.
- Icon accessibility behavior remains unresolved.
- Component scope and API boundaries remain unapproved.

## Checklist Verdict

This checklist is complete enough to guide Figma evidence collection. It does
not make Sign In implementation ready.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Collect Sign In Figma Evidence.

Reason: the next step should gather the exact screenshot, Inspect, and
Copy-as-CSS values listed above before any source implementation begins.
