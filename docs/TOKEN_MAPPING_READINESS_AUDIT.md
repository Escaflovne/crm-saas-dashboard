# Token Mapping Readiness Audit

This audit determines whether confirmed Figma values are ready to be mapped
into `src/styles/tokens.css`. It is preparation-only: no token mapping,
component implementation, package change, or source-code change is approved by
this document.

## Current Token Foundation Status

`src/styles/tokens.css` already contains an initial base token foundation under
`:root`.

Existing color tokens:

- `--color-primary`
- `--color-primary-dark`
- `--color-primary-grey`
- `--color-outline`
- `--color-background-light`
- `--color-primary-outline`
- `--color-background`
- `--color-background-white`
- `--color-outline-white`
- `--color-secondary-yellow`
- `--color-secondary-green`
- `--color-secondary-red`
- `--color-secondary-purple`
- `--color-secondary-cyan`
- `--color-resting-outline`

Existing typography tokens:

- `--font-family-primary`
- `--font-weight-regular`
- `--font-weight-bold`
- `--font-weight-black`
- Header H1-H5 font-size and line-height tokens.
- Caption font-size, line-height, and confirmed letter-spacing token.
- Button label 14px and 12px size tokens, with 12px line-height.
- Text 14px and 12px size/line-height tokens.
- Secondary text 14px and 12px size/line-height tokens.

Current CSS consumption:

- `src/styles/global.css` imports `tokens.css`, `reset.css`, and
  `typography.css`.
- `src/styles/typography.css` consumes the current base tokens for body
  font-family, font-size, line-height, font-weight, text color, and background.
- No component CSS modules consume tokens yet.

Readiness of `tokens.css` for expansion:

- Ready for review, not ready for broad expansion.
- Safe only for tightly scoped edits after a separate approved token mapping
  ticket.
- Not ready for semantic color tokens, component tokens, spacing tokens, radius
  tokens, shadow tokens, state tokens, icon tokens, or Source Sans Pro tokens
  without a proposal/approval step.

## Confirmed Reusable Raw Values

The following values appear repeatedly in local Figma extraction notes and are
good candidates for token mapping review. This section does not assign token
names.

### Colors

Already represented by existing base color tokens:

- `#5E81F4`
- `#1C1D21`
- `#8181A5`
- `#F0F0F3`
- `#F5F5FA`
- `#F6F6F6`
- `#FFFFFF`
- `#F4BE5E`
- `#7CE7AC`
- `#FF808B`
- `#9698D6`
- `#40E1FA`
- `#ECECF2`

Repeated values not yet represented by existing base tokens:

- `#8AF1B9`
- `#2CE5F6`
- `#1B51E5`
- `#EEEEEE`

Repeated alpha/overlay evidence:

- `rgba(94, 129, 244, 0.1)`
- `rgba(124, 231, 172, 0.1)`
- `rgba(255, 128, 139, 0.1)`
- `rgba(153, 155, 168, 0.1)`
- `#1C1D21` at `10%`
- `#1C1D21` at `35%`

### Typography

Confirmed repeated Lato evidence:

- Lato normal `400`
- Lato normal `700`
- Lato normal `900`
- `14px` / `21px`
- `14px` / `17px`
- `12px` / `14px`
- `16px` / `24px`
- Heading values already documented in global tokens.

Current installed font package:

- `@fontsource/lato` is installed.
- `src/main.tsx` imports Lato weights `400`, `700`, and `900`.

Source Sans Pro evidence:

- Forms Toggles labels use Source Sans Pro normal `400`, `14px`, line-height
  `18px` in copied CSS.
- Source Sans Pro is not installed or imported.
- This must remain a design decision blocker, not an automatic dependency or
  token change.

Icon font-family evidence:

- `la-solid-900` appears repeatedly in button, tag, pagination, tab, badge,
  form input, select, date picker, and embedded tag samples.
- Local docs consistently treat `la-solid-900` as copied font-family evidence
  only, not confirmed source/library mapping.

### Radius Values

Repeated or notable radius evidence:

- `3px`
- `4px`
- `6px`
- `8px`
- `10px`
- `12px`
- `16.5px`
- `100px`
- Compound radii such as `8px 8px 0px 0px`, `0px 0px 8px 8px`,
  `0px 6px 6px 0px`, and `6px 0px 0px 6px`.

These should be reviewed before mapping. Some values may be component-specific
or shape-specific rather than global radius scale values.

### Shadow Values

Repeated shadow evidence:

- `0px 6px 20px rgba(153, 155, 168, 0.1)`

This appears in select/dropdown and date picker panel samples. It may become an
elevation token later, but elevation naming and scope are not approved.

## Values That Must Stay Out Of Tokens For Now

Do not tokenize these categories yet:

- Absolute positions such as `left`, `right`, `top`, and `bottom` values.
- Percentage offsets.
- Copied Figma layer names.
- Sample-only dimensions that define one copied frame rather than a reusable
  scale.
- Unconfirmed Auto Layout spacing/gap/padding.
- Interaction or state semantics still marked `TBD`.
- Component API decisions.
- Responsive behavior.
- Icon source/library mapping.
- Source Sans Pro font-family evidence until the font decision is approved.
- Component-specific state values where the state behavior is not defined.

## Token Mapping Blockers

Token mapping is not ready to edit `src/styles/tokens.css` broadly.

Current blockers:

- Semantic naming is not approved.
- Component token boundary is not approved.
- Source Sans Pro decision is unresolved.
- Icon source/library mapping is unresolved.
- State semantics are unresolved for many scopes.
- Spacing/gap/padding is unresolved or explicitly unavailable in several
  inspected frames.
- Radius scale semantics are not approved.
- Shadow/elevation semantics are not approved.
- Responsive/layout tokens remain TBD.
- Component API and scope decisions remain TBD.

## Proposed Token Mapping Phases

### Phase 1: Safe Existing/Base Tokens Review

Review the current `tokens.css` against
`docs/figma-notes/global-design-tokens.md` and confirm:

- Existing base token names still match the approved base-token boundary.
- Existing token values match confirmed global token values.
- No existing token encodes an unapproved semantic or component behavior.
- Values intentionally left out remain out.

### Phase 2: Semantic Color Tokens Proposal

Draft a docs-only proposal for semantic colors after reviewing repeated color
usage across the Figma notes. This should propose names and usage boundaries,
but must not edit `tokens.css` until approved.

### Phase 3: Typography Tokens Proposal

Draft a docs-only proposal for typography aliases and component typography
coverage. This must resolve:

- Whether heading/body/button aliases should map to existing base tokens.
- How to handle unresolved letter spacing.
- Whether Source Sans Pro is required or should remain sample evidence.

### Phase 4: Radius/Shadow Tokens Proposal

Draft a docs-only proposal for reusable radius and shadow values. This must
separate global scale candidates from component-specific shape values.

### Phase 5: Component Tokens

Introduce component tokens only after component scope is approved for a specific
component family. Component tokens must derive from approved global tokens where
possible and must not encode unconfirmed behavior.

## First Safe Token-Related Nano-Ticket

Recommended next nano-ticket: Existing Base Tokens Verification.

Why this comes next:

- It is safer than adding new tokens.
- It can be docs-only or report-only.
- It verifies the current `tokens.css` against the confirmed global design token
  notes before any semantic/component token proposal begins.
- It keeps component implementation blocked while giving Oskar a reliable token
  baseline.

Suggested scope for that ticket:

- Inspect `src/styles/tokens.css` and
  `docs/figma-notes/global-design-tokens.md`.
- Report mismatches, missing confirmed base tokens, and intentionally excluded
  values.
- Do not edit `tokens.css` unless a later ticket explicitly asks for a small
  correction.

## Guardrails

- No hardcoded colors in future component CSS modules.
- Component CSS should use approved global tokens only.
- No token for a value unless it is confirmed and reusable.
- No token for behavior semantics unless behavior is explicitly defined.
- No token for copied layer names.
- No token for absolute positions or percentage offsets.
- No token for unconfirmed Auto Layout spacing/gap/padding.
- No dependency or font change without its own ticket.
- Do not introduce React Hook Form, Zod, icon libraries, font imports, or other
  dependencies in token work.
- Do not mark component implementation as ready from this audit.

## Readiness Verdict

Token mapping implementation should wait.

The project is ready for a narrow base-token verification ticket, followed by
docs-only token proposals. It is not ready for broad `tokens.css` expansion,
semantic token implementation, component tokens, or component implementation.
