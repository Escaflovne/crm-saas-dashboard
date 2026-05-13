# Typography Token Readiness Audit

This audit checks whether the current typography token foundation is ready for
future Auth foundation and Sign In planning. It is docs-only and does not
approve component implementation, typography token edits, dependency changes,
Source Sans Pro installation, icon font installation, or component API work.

## Current Typography Token Inventory

`src/styles/tokens.css` currently defines the following typography-related
tokens inside `:root`.

### Font Family And Weights

| Token | Current value |
| --- | --- |
| `--font-family-primary` | `"Lato", sans-serif` |
| `--font-weight-regular` | `400` |
| `--font-weight-bold` | `700` |
| `--font-weight-black` | `900` |

### Header Tokens

| Token | Current value |
| --- | --- |
| `--font-size-header-h1` | `32px` |
| `--line-height-header-h1` | `42px` |
| `--font-size-header-h2` | `26px` |
| `--line-height-header-h2` | `38px` |
| `--font-size-header-h3` | `20px` |
| `--line-height-header-h3` | `32px` |
| `--font-size-header-h4` | `18px` |
| `--line-height-header-h4` | `27px` |
| `--font-size-header-h5` | `16px` |
| `--line-height-header-h5` | `24px` |

### Caption, Button, Text, And Secondary Text Tokens

| Token | Current value |
| --- | --- |
| `--font-size-caption` | `14px` |
| `--line-height-caption` | `17px` |
| `--letter-spacing-caption` | `0px` |
| `--font-size-button-label-14` | `14px` |
| `--font-size-button-label-12` | `12px` |
| `--line-height-button-label-12` | `14px` |
| `--font-size-text-14` | `14px` |
| `--line-height-text-14` | `21px` |
| `--font-size-text-12` | `12px` |
| `--line-height-text-12` | `18px` |
| `--font-size-secondary-text-14` | `14px` |
| `--line-height-secondary-text-14` | `21px` |
| `--font-size-secondary-text-12` | `12px` |
| `--line-height-secondary-text-12` | `18px` |

`src/styles/typography.css` consumes the existing token foundation for base
document typography:

- `--font-family-primary`
- `--font-size-text-14`
- `--font-weight-regular`
- `--line-height-text-14`
- `--color-primary-dark`
- `--color-background-light`

No component CSS modules are expected to consume typography tokens yet because
component implementation is still blocked.

## Font Readiness

Lato is ready as the current primary font foundation:

- `@fontsource/lato` is installed in `package.json` at `5.2.7`.
- `src/main.tsx` imports `@fontsource/lato/400.css`.
- `src/main.tsx` imports `@fontsource/lato/700.css`.
- `src/main.tsx` imports `@fontsource/lato/900.css`.
- These imported weights match the existing font-weight tokens.

Source Sans Pro status:

- Source Sans Pro appears only as copied Figma evidence in the Forms Toggles
  notes.
- Source Sans Pro is not installed, imported, or represented in
  `src/styles/tokens.css`.
- No font or dependency change is approved by this audit.

Icon font status:

- `la-solid-900` appears repeatedly as copied Figma font-family evidence.
- It remains unresolved source/library evidence only.
- No icon font, icon library, or icon token is approved by this audit.

## Auth/Form Typography Readiness

The existing typography foundation appears sufficient for a future narrow Auth
primitive planning ticket, especially for Lato-based Auth and form primitives.

Existing tokens that appear useful for near-term Auth foundations:

| Need | Existing token coverage | Readiness |
| --- | --- | --- |
| Button label size | `--font-size-button-label-14` | Sufficient for planning; line-height needs caution. |
| Small button/link label | `--font-size-button-label-12` and `--line-height-button-label-12` | Sufficient for planning where 12px/14px is confirmed. |
| Default form text | `--font-size-text-14` and `--line-height-text-14` | Sufficient for Lato 14px/21px field labels, placeholders, and values. |
| Secondary/muted text | `--font-size-secondary-text-14` and `--line-height-secondary-text-14` | Sufficient for Lato 14px/21px supporting text planning. |
| Auth headings | Header H1-H5 size and line-height tokens | Sufficient for planning if the selected Auth heading maps to confirmed header scale values. |
| Font weights | `--font-weight-regular`, `--font-weight-bold`, `--font-weight-black` | Sufficient for Lato 400, 700, and 900 evidence. |

Unresolved typography gaps:

- Buttons/Label 14px line-height is documented as variant-dependent in the
  global token notes; `tokens.css` intentionally has the 14px size but no
  approved 14px button label line-height token.
- Letter-spacing remains unresolved except for confirmed caption
  `--letter-spacing-caption: 0px`.
- Pagination Fullsize documents `0.21px` letter-spacing, but this remains
  component/sample evidence and is not approved as a global token.
- Source Sans Pro evidence from Forms Toggles remains unresolved and must not
  be introduced without a separate font decision ticket.
- `la-solid-900` remains icon font evidence only and must not become a
  typography token.
- Component-specific text styles, Auth-specific typography aliases, and form
  component typography tokens are not approved yet.

## Values To Keep Out

Keep these out of typography tokens and Auth foundation work for now:

- Copied Figma layer names.
- Absolute positions.
- Percentage offsets.
- Unconfirmed letter-spacing values.
- Source Sans Pro until a font decision is approved.
- `la-solid-900` and all icon font evidence.
- Component API decisions.
- State, validation, or interaction behavior.
- Component-specific text style aliases.
- Any value marked `TBD` in the local extraction notes.

## Readiness Verdict

Typography foundation is ready for a future narrow Auth primitive planning
ticket, but not for component implementation.

Why:

- Lato is installed and imported for the confirmed weights.
- Existing base typography tokens cover the common Lato 14px/21px text pattern,
  12px/14px label pattern, secondary text patterns, and the confirmed heading
  scale.
- Remaining gaps are known and can be kept out of the Auth foundation until a
  dedicated ticket approves them.

Do not start Auth component implementation from this audit alone. The next
foundation decision should resolve icon strategy before Sign In work needs
icons or password visibility controls.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Icon Strategy Decision.

Reason: typography is clean enough for future Auth foundation planning, while
`la-solid-900` remains copied Figma evidence only. The next blocker for Auth
and form primitives is deciding how icons will be sourced without guessing or
adding dependencies inside a component ticket.
