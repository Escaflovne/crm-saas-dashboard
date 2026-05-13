# Semantic Color Token Proposal Review

This document reviews `docs/SEMANTIC_COLOR_TOKEN_PROPOSAL.md` before any
`src/styles/tokens.css` edit. It is docs-only and does not approve component
implementation.

## Proposal Summary

The proposal defines a semantic color layer as aliases to existing verified
base color tokens only. It does not introduce new color values.

Proposed groups:

- Text colors: primary, muted, inverse, brand, and status-colored text aliases.
- Background/surface colors: app, surface, subtle, muted, and brand
  backgrounds.
- Border/outline colors: subtle, default, brand, and inverse borders.
- Brand/action colors: brand primary and action-oriented aliases.
- Status colors: success, warning, danger, info, and accent aliases.

Review policy:

- Approve broadly reusable names that do not depend on component behavior.
- Defer aliases that imply behavior, interaction state, validation semantics, or
  component scope.
- Defer overlay/alpha tokens.
- Do not normalize copied Figma layer names into token names.

## Approval Matrix

### Text Colors

| Proposed semantic token | Decision | Reason |
| --- | --- | --- |
| `--color-text-primary` | Approved | Broad default text role; aliases verified `--color-primary-dark`. |
| `--color-text-muted` | Approved | Broad muted text role; aliases verified `--color-primary-grey`. |
| `--color-text-inverse` | Approved | Broad inverse text role; aliases verified white base token. |
| `--color-text-brand` | Approved | Broad brand-colored text role; aliases verified primary base token. |
| `--color-text-warning` | Deferred | Depends on status/validation semantics that remain TBD. |
| `--color-text-success` | Deferred | Depends on status/validation semantics that remain TBD. |
| `--color-text-danger` | Deferred | Depends on status/validation semantics that remain TBD. |

### Background And Surface Colors

| Proposed semantic token | Decision | Reason |
| --- | --- | --- |
| `--color-bg-app` | Approved | Broad app/page background role; aliases verified background-light base token. |
| `--color-bg-surface` | Approved | Broad surface role; aliases verified white base token. |
| `--color-bg-subtle` | Approved | Broad subtle background role; aliases verified background base token. |
| `--color-bg-muted` | Deferred | Intended use mentions muted controls; control/component scope remains unapproved. |
| `--color-bg-brand` | Approved | Broad brand-filled surface role; aliases verified primary base token. |

### Border And Outline Colors

| Proposed semantic token | Decision | Reason |
| --- | --- | --- |
| `--color-border-subtle` | Approved | Broad light border/divider role; aliases verified outline base token. |
| `--color-border-default` | Approved | Broad default border role; aliases verified resting-outline base token. |
| `--color-border-brand` | Approved | Broad brand border role; aliases verified primary-outline base token. |
| `--color-border-inverse` | Approved | Broad inverse/white border role; aliases verified outline-white base token. |

### Brand And Action Colors

| Proposed semantic token | Decision | Reason |
| --- | --- | --- |
| `--color-brand-primary` | Approved | Broad brand identity role; aliases verified primary base token. |
| `--color-action-primary` | Deferred | Action role depends on component/action behavior approval. |
| `--color-action-on-primary` | Deferred | Action foreground depends on approved action component usage. |
| `--color-action-muted` | Deferred | Muted/disabled action semantics remain TBD. |

### Status Colors

| Proposed semantic token | Decision | Reason |
| --- | --- | --- |
| `--color-status-success` | Deferred | Status and validation semantics remain TBD. |
| `--color-status-warning` | Deferred | Status and warning semantics remain TBD. |
| `--color-status-danger` | Deferred | Status, error, and validation semantics remain TBD. |
| `--color-status-info` | Deferred | Info/status semantics remain TBD. |
| `--color-status-accent` | Deferred | Accent/status role requires approved usage scope. |

## Conservative Approval Policy

Approved aliases are limited to broad global roles:

- Default text roles.
- App/surface background roles.
- Generic border roles.
- Brand identity roles.

Deferred aliases include:

- Behavior-dependent state names.
- Action-specific names.
- Validation/status names.
- Component-state names.
- Overlay/alpha values.

No overlay/alpha tokens are approved in this review. Confirmed alpha evidence
remains proposal-only until overlay semantics are reviewed separately.

## Global Usability Check

Approved semantic tokens, once implemented in `:root` inside
`src/styles/tokens.css`, will be globally usable by CSS Modules via
`var(...)`.

Future component CSS modules must:

- Use approved global tokens only.
- Avoid hardcoded colors.
- Avoid TBD interaction states.
- Avoid copied Figma layer names as token or class semantics.
- Derive component-local custom properties from approved global tokens only
  after a component ticket defines the scope.

This review does not make any component implementation ready.

## Implementation Boundary

Safe to implement in a later `tokens.css` ticket, pending explicit approval:

- `--color-text-primary`
- `--color-text-muted`
- `--color-text-inverse`
- `--color-text-brand`
- `--color-bg-app`
- `--color-bg-surface`
- `--color-bg-subtle`
- `--color-bg-brand`
- `--color-border-subtle`
- `--color-border-default`
- `--color-border-brand`
- `--color-border-inverse`
- `--color-brand-primary`

Must remain deferred:

- `--color-text-warning`
- `--color-text-success`
- `--color-text-danger`
- `--color-bg-muted`
- `--color-action-primary`
- `--color-action-on-primary`
- `--color-action-muted`
- `--color-status-success`
- `--color-status-warning`
- `--color-status-danger`
- `--color-status-info`
- `--color-status-accent`

Also deferred:

- Any overlay/alpha token.
- Any hover, active, focus, selected, disabled, error, or success behavior token.
- Any component token.
- Any token based on copied Figma layer names.

## Review Verdict

The proposal is partially approved for implementation in a later token ticket.

Approved aliases are narrow, global, and map only to existing verified base
tokens. Deferred aliases require behavior, status, action, overlay, or component
scope decisions before implementation.

## Decision Counts

- Approved: 13
- Deferred: 12
- Rename recommended: 0
- Rejected: 0

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Implement Approved Semantic Color Tokens.

Reason: enough semantic aliases are approved to justify a small, tightly scoped
`tokens.css` implementation ticket. That future ticket must implement only the
13 approved aliases listed above and must not add overlays, status/action
tokens, component tokens, source code, or component CSS.
