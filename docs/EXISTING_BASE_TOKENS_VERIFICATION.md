# Existing Base Tokens Verification

This verification checks the existing base tokens in `src/styles/tokens.css`
against the confirmed global design token notes. It is report-only and does not
approve token mapping implementation or component implementation.

## Existing Tokens Inventory

### Current Color Tokens

| Token | Current value |
| --- | --- |
| `--color-primary` | `#5E81F4` |
| `--color-primary-dark` | `#1C1D21` |
| `--color-primary-grey` | `#8181A5` |
| `--color-outline` | `#F0F0F3` |
| `--color-background-light` | `#F5F5FA` |
| `--color-primary-outline` | `#5E81F4` |
| `--color-background` | `#F6F6F6` |
| `--color-background-white` | `#FFFFFF` |
| `--color-outline-white` | `#FFFFFF` |
| `--color-secondary-yellow` | `#F4BE5E` |
| `--color-secondary-green` | `#7CE7AC` |
| `--color-secondary-red` | `#FF808B` |
| `--color-secondary-purple` | `#9698D6` |
| `--color-secondary-cyan` | `#40E1FA` |
| `--color-resting-outline` | `#ECECF2` |

### Current Typography And Font Tokens

| Token | Current value |
| --- | --- |
| `--font-family-primary` | `"Lato", sans-serif` |
| `--font-weight-regular` | `400` |
| `--font-weight-bold` | `700` |
| `--font-weight-black` | `900` |
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

### Other Current Base Tokens

No spacing, radius, shadow, layout, z-index, breakpoint, icon, semantic color,
or component tokens are currently present in `src/styles/tokens.css`.

## Global Token Docs Comparison

### Confirmed Matches

Existing color tokens match confirmed values in
`docs/figma-notes/global-design-tokens.md`:

- `Primary` -> `--color-primary: #5E81F4`
- `Primary dark` -> `--color-primary-dark: #1C1D21`
- `Primary grey` -> `--color-primary-grey: #8181A5`
- `Outline` -> `--color-outline: #F0F0F3`
- `Background light` -> `--color-background-light: #F5F5FA`
- `Primary outline` -> `--color-primary-outline: #5E81F4`
- `Background` -> `--color-background: #F6F6F6`
- `Background white` -> `--color-background-white: #FFFFFF`
- `Outline white` -> `--color-outline-white: #FFFFFF`
- `Secondary yellow` -> `--color-secondary-yellow: #F4BE5E`
- `Secondary green` -> `--color-secondary-green: #7CE7AC`
- `Secondary red` -> `--color-secondary-red: #FF808B`
- `Secondary purple` -> `--color-secondary-purple: #9698D6`
- `Secondary cyan` -> `--color-secondary-cyan: #40E1FA`
- `Resting outline` -> `--color-resting-outline: #ECECF2`

Existing typography tokens match confirmed values in the global token notes:

- Lato primary font family.
- Regular, Bold, and Black numeric font weights: `400`, `700`, and `900`.
- Header H1-H5 font sizes and line heights.
- Caption size, line height, and confirmed `0px` letter spacing.
- Button label 14px size.
- Button label 12px size and `14px` line height.
- Text 14px and Text 12px size/line-height values.
- Secondary text 14px and 12px size/line-height values.

### Mismatches

No mismatches were found between existing base token values and confirmed
values in `docs/figma-notes/global-design-tokens.md`.

### Confirmed Global Values Missing From `tokens.css`

- `Button hover`: `#1C1D21` at `10%` is confirmed in the global color notes,
  but intentionally not represented in `tokens.css` yet because state/semantic
  token mapping remains out of scope.
- Buttons/Label 14px line-height variance is documented in the global token
  notes. `tokens.css` intentionally includes `--font-size-button-label-14` but
  does not include a 14px label line-height token because the documentation
  records instance variance.
- Text alignment variants are confirmed in notes but are intentionally not
  represented as CSS custom properties.
- Unresolved letter-spacing values remain intentionally excluded except for
  confirmed caption letter spacing.

### Tokens Not Clearly Supported By Global Token Notes

No current base token is unsupported by `docs/figma-notes/global-design-tokens.md`.

Current token names are direct base labels rather than semantic/component
tokens. Some names are implementation names rather than exact Figma labels, but
their values are supported by the confirmed global token notes.

## CSS Consumption Check

`src/styles/global.css` imports style layers in the expected order:

1. `tokens.css`
2. `reset.css`
3. `typography.css`

`src/styles/typography.css` consumes existing tokens correctly for base document
typography:

- `--color-background-light`
- `--color-primary-dark`
- `--font-family-primary`
- `--font-size-text-14`
- `--font-weight-regular`
- `--line-height-text-14`

No component CSS modules exist yet, so no component CSS modules are expected to
consume tokens at this stage.

## Font Readiness Check

Lato readiness:

- `@fontsource/lato` is installed in `package.json` at `5.2.7`.
- `src/main.tsx` imports:
  - `@fontsource/lato/400.css`
  - `@fontsource/lato/700.css`
  - `@fontsource/lato/900.css`
- These imports match the current Lato weights represented in
  `src/styles/tokens.css`.

Source Sans Pro status:

- Source Sans Pro appears only as copied Figma evidence in Forms Toggles notes.
- It is not installed, imported, or represented in `tokens.css`.
- It remains unresolved and must not be added in this ticket.

Icon font status:

- `la-solid-900` remains copied Figma evidence only.
- No icon dependency or icon font import is confirmed by the global token notes.
- No icon dependency should be introduced by token verification.

## Readiness Verdict

Existing base tokens are verified enough for the next token proposal step.

No correction ticket is needed for current base token values. The existing
tokens match confirmed global design token notes, and values intentionally left
out remain out for valid scope reasons.

Component implementation is not ready. Token mapping implementation is not
approved by this verification.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Semantic Color Token Proposal.

Reason: the existing base token layer is clean, and semantic/component token
implementation should still wait for a docs-only proposal that defines naming,
scope, and exclusions before editing `tokens.css`.

The next ticket should be docs-only and must not edit `src/styles/tokens.css`
unless a later explicit implementation ticket approves a small token change.
