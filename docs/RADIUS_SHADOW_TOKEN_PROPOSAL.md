# Radius and Shadow Token Proposal

This document proposes a conservative radius and shadow token direction before
any edits to `src/styles/tokens.css`. It is docs-only and does not approve
component implementation.

## Current Radius/Shadow Token Status

`src/styles/tokens.css` currently has no radius tokens and no shadow tokens.

Current implemented token groups are:

- Base color tokens.
- Approved semantic color aliases.
- Base typography/font tokens.

This proposal does not implement anything. It only separates likely reusable
radius/shadow candidates from shape-specific and component-specific evidence.

## Confirmed Reusable Radius Evidence

The local Figma notes repeatedly document these radius values:

- `3px`
- `4px`
- `6px`
- `8px`
- `10px`
- `12px`
- `16.5px`
- `100px`
- Compound radii:
  - `8px 8px 0px 0px`
  - `0px 0px 8px 8px`
  - `0px 6px 6px 0px`
  - `6px 0px 0px 6px`

### Likely Global Scale Candidates

These values appear reusable enough for a later review, but are not approved by
this proposal:

| Radius value | Evidence summary | Proposal status |
| --- | --- | --- |
| `3px` | Progress bars and Badge / Round samples. | Candidate for a very small radius token. |
| `4px` | Dropdown and form control inner rectangles. | Candidate for a small radius token. |
| `6px` | Pagination items, arrows, status tag, and range segments. | Candidate for a medium-small radius token. |
| `8px` | Buttons, tags, tabs, date panels, form tag chips, and many containers. | Strong candidate for a default radius token. |
| `12px` | Toggles and Badge / Oval samples. | Candidate, but may be shape-specific. |

### Component/Shape-Specific Candidates To Defer

These should remain out of `tokens.css` until component scope is approved:

| Radius value | Reason to defer |
| --- | --- |
| `10px` | Used for radio active circles/inner dots; likely shape-specific. |
| `16.5px` | Used for a copied circular date selection background; likely geometry-specific. |
| `100px` | Used for radio resting circles; likely pill/circle shape-specific. |
| `8px 8px 0px 0px` | Calendar month header shape; component-specific compound radius. |
| `0px 0px 8px 8px` | Date picker bottom area shape; component-specific compound radius. |
| `0px 6px 6px 0px` | Date range segment shape; component-specific compound radius. |
| `6px 0px 0px 6px` | Date range segment shape; component-specific compound radius. |

## Confirmed Reusable Shadow Evidence

The inspected local Figma notes repeatedly confirm:

| Shadow value | Evidence summary | Proposal status |
| --- | --- | --- |
| `0px 6px 20px rgba(153, 155, 168, 0.1)` | Select/dropdown and date picker panel samples. | Candidate for a panel/elevation shadow token. |

The task requested review of this additional shadow value:

| Shadow value | Local documentation status | Proposal status |
| --- | --- | --- |
| `0px 3px 5px rgba(0, 0, 0, 0.1)` | Not found in the inspected local Figma notes or preparation audits. | Deferred until local documentation contains confirmed source evidence. |

### Panel/Elevation Shadow

`0px 6px 20px rgba(153, 155, 168, 0.1)` is the strongest current shadow
candidate. It appears on popup/panel-like surfaces such as dropdowns and date
picker panels.

### Knob/Thumb Shadow

No locally confirmed knob/thumb shadow was found in the inspected docs. The
requested `0px 3px 5px rgba(0, 0, 0, 0.1)` value may be relevant later, but it
must remain deferred until source evidence is documented locally.

## Proposed Token Categories

### Radius Scale Candidates

These could be reviewed as a small global radius scale:

- `3px`
- `4px`
- `6px`
- `8px`
- `12px`

No token names are approved here. A later review should decide whether this is
a complete global scale or whether some values are component-only.

### Shape-Specific Candidates To Defer

Defer:

- `10px`
- `16.5px`
- `100px`
- Compound radii tied to calendar/date range shapes.

These values look tied to circular, pill, or partial-corner geometry rather
than a general global radius scale.

### Elevation/Shadow Candidates

Candidate for review:

- `0px 6px 20px rgba(153, 155, 168, 0.1)`

This should be reviewed as an elevation/panel shadow, not as a component token.

### Component-Specific Shadows To Defer

Defer:

- `0px 3px 5px rgba(0, 0, 0, 0.1)` until local source evidence exists.
- Any knob/thumb/control shadow until the related component scope is approved.
- Any state-specific shadow until state behavior is approved.

## Exclusions

Do not map these categories into radius or shadow tokens:

- Absolute positions.
- Percentage offsets.
- Component-specific dimensions.
- Copied Figma layer names.
- State/behavior semantics still marked `TBD`.
- Component API decisions.
- Responsive behavior.
- Auto Layout spacing/gap/padding.
- Shape geometry that only exists to draw one copied sample.
- Shadows without local source evidence.

## Implementation Boundary

Potentially safe for a later review:

- A global radius scale using only confirmed reusable values after approval.
- A single panel/elevation shadow based on
  `0px 6px 20px rgba(153, 155, 168, 0.1)` after approval.

Must remain deferred:

- Shape-specific radii.
- Compound radii.
- Knob/thumb shadows.
- Component-specific shadows.
- State/behavior shadows.
- Any radius or shadow value not confirmed in local documentation.

Do not edit `src/styles/tokens.css` in this proposal ticket.

## Proposal Verdict

The proposal is ready for review, not implementation.

The local docs contain enough repeated radius evidence and one repeated
panel/elevation shadow value to justify a review step. Shape-specific radii and
unconfirmed knob/thumb shadows should remain deferred.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Radius and Shadow Token Proposal Review.

Reason: the next step should approve, rename, or defer the candidate radius and
shadow tokens before any `src/styles/tokens.css` edit. Component implementation
must remain blocked.
