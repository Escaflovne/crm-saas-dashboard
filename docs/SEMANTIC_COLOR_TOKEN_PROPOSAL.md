# Semantic Color Token Proposal

This document proposes a conservative semantic color layer for review before
any edits to `src/styles/tokens.css`. It is docs-only. The proposal uses
existing confirmed base color values only and does not approve implementation,
component tokens, interaction behavior, or component work.

## Current Base Color Inventory

The current primitive/base color layer in `src/styles/tokens.css` is verified
against `docs/figma-notes/global-design-tokens.md` and should remain the
existing base layer.

| Existing base token | Value | Source label |
| --- | --- | --- |
| `--color-primary` | `#5E81F4` | Primary |
| `--color-primary-dark` | `#1C1D21` | Primary dark |
| `--color-primary-grey` | `#8181A5` | Primary grey |
| `--color-outline` | `#F0F0F3` | Outline |
| `--color-background-light` | `#F5F5FA` | Background light |
| `--color-primary-outline` | `#5E81F4` | Primary outline |
| `--color-background` | `#F6F6F6` | Background |
| `--color-background-white` | `#FFFFFF` | Background white |
| `--color-outline-white` | `#FFFFFF` | Outline white |
| `--color-secondary-yellow` | `#F4BE5E` | Secondary yellow |
| `--color-secondary-green` | `#7CE7AC` | Secondary green |
| `--color-secondary-red` | `#FF808B` | Secondary red |
| `--color-secondary-purple` | `#9698D6` | Secondary purple |
| `--color-secondary-cyan` | `#40E1FA` | Secondary cyan |
| `--color-resting-outline` | `#ECECF2` | Resting outline |

## Semantic Color Proposal

The names below are proposal-only aliases to the existing base layer. They are
not implemented. Final names and scope require review before any
`tokens.css` edit.

### Text Colors

| Proposed semantic token | Proposed value source | Intended boundary |
| --- | --- | --- |
| `--color-text-primary` | `var(--color-primary-dark)` | Default high-emphasis text. |
| `--color-text-muted` | `var(--color-primary-grey)` | Muted labels, secondary text, subdued UI copy. |
| `--color-text-inverse` | `var(--color-background-white)` | Text on dark or brand-filled surfaces. |
| `--color-text-brand` | `var(--color-primary)` | Brand-colored text when the design explicitly uses primary blue. |
| `--color-text-warning` | `var(--color-secondary-yellow)` | Proposal-only status text; behavior semantics still need approval. |
| `--color-text-success` | `var(--color-secondary-green)` | Proposal-only status text; behavior semantics still need approval. |
| `--color-text-danger` | `var(--color-secondary-red)` | Proposal-only status text; behavior semantics still need approval. |

### Background And Surface Colors

| Proposed semantic token | Proposed value source | Intended boundary |
| --- | --- | --- |
| `--color-bg-app` | `var(--color-background-light)` | App/page background. |
| `--color-bg-surface` | `var(--color-background-white)` | Default panels, cards, dropdowns, and elevated surfaces after component approval. |
| `--color-bg-subtle` | `var(--color-background)` | Disabled/subtle background where documented and approved. |
| `--color-bg-muted` | `var(--color-background-light)` | Muted controls or neutral filled UI after scope approval. |
| `--color-bg-brand` | `var(--color-primary)` | Brand-filled surfaces and primary action backgrounds after behavior approval. |

### Border And Outline Colors

| Proposed semantic token | Proposed value source | Intended boundary |
| --- | --- | --- |
| `--color-border-subtle` | `var(--color-outline)` | Light divider or outline where `#F0F0F3` is confirmed. |
| `--color-border-default` | `var(--color-resting-outline)` | Resting/default border where `#ECECF2` is confirmed. |
| `--color-border-brand` | `var(--color-primary-outline)` | Brand outline where primary blue border is confirmed. |
| `--color-border-inverse` | `var(--color-outline-white)` | White outline only where explicitly confirmed. |

### Brand And Action Colors

| Proposed semantic token | Proposed value source | Intended boundary |
| --- | --- | --- |
| `--color-brand-primary` | `var(--color-primary)` | Brand identity color. |
| `--color-action-primary` | `var(--color-primary)` | Primary action color after component behavior is approved. |
| `--color-action-on-primary` | `var(--color-background-white)` | Foreground on primary action backgrounds. |
| `--color-action-muted` | `var(--color-primary-grey)` | Disabled or muted action foreground only after disabled semantics are approved. |

### Status Colors

The values below are proposal-only because validation, success/error behavior,
and status semantics remain TBD in component notes.

| Proposed semantic token | Proposed value source | Intended boundary |
| --- | --- | --- |
| `--color-status-success` | `var(--color-secondary-green)` | Success state color after status semantics are approved. |
| `--color-status-warning` | `var(--color-secondary-yellow)` | Warning or yellow status color after status semantics are approved. |
| `--color-status-danger` | `var(--color-secondary-red)` | Error/danger state color after status semantics are approved. |
| `--color-status-info` | `var(--color-secondary-cyan)` | Info/cyan status color after status semantics are approved. |
| `--color-status-accent` | `var(--color-secondary-purple)` | Purple accent/status color after usage is approved. |

## Exclusions

The following must not be mapped in this proposal:

- Absolute positions.
- Percentage offsets.
- Copied Figma layer names.
- Component-specific behavior colors without approved behavior semantics.
- Unresolved overlays.
- Source Sans Pro evidence.
- `la-solid-900` evidence.
- Hard component tokens.
- Interaction states that remain TBD.
- Auto Layout spacing/gap/padding.
- Component API or component scope decisions.
- Responsive behavior.
- Values not already present in the confirmed base color layer.

## Overlay And Alpha Policy

Confirmed overlay evidence exists in the local Figma notes:

- `rgba(94, 129, 244, 0.1)`
- `rgba(124, 231, 172, 0.1)`
- `rgba(255, 128, 139, 0.1)`
- `rgba(153, 155, 168, 0.1)`
- `#1C1D21` at `10%`
- `#1C1D21` at `35%`

Policy recommendation:

- Keep overlay and alpha values proposal-only for now.
- Do not add overlay tokens until overlay semantics are approved.
- Do not create hover, active, selected, focus, disabled, success, or error
  overlay tokens from copied layer names alone.
- Do not normalize component-specific overlays into global tokens until the
  same role is confirmed across approved component scopes.
- The first overlay proposal should distinguish surface tint, status tint,
  elevation shadow, and interaction overlay before implementation.

## Component Implementation Impact

After semantic color tokens are reviewed and approved:

- Future component CSS modules should consume approved semantic tokens rather
  than hardcoded hex values.
- Component CSS modules should use CSS custom properties from the approved
  global token layer.
- Component-local custom properties may derive from approved global tokens only
  after the component ticket defines the allowed scope.
- Component CSS must not use copied Figma layer names as token names.
- Component CSS must not implement TBD interaction states.
- Component CSS must not invent missing hover, focus, active, disabled,
  selected, validation, or responsive behavior.

This proposal does not make any component implementation ready.

## Proposal Verdict

The semantic color names above are ready for review, but not implementation.

The existing base color layer is verified, and there is enough confirmed color
evidence to review a semantic alias layer. However, state semantics, component
token boundaries, overlay behavior, and component APIs remain unresolved.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Semantic Color Token Proposal Review.

Reason: this proposal should be reviewed and approved or revised before any
`src/styles/tokens.css` edits. The next ticket should remain docs-only and
should decide which proposed semantic names are approved, rejected, renamed, or
deferred.
