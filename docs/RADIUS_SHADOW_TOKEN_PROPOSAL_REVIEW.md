# Radius and Shadow Token Proposal Review

This document reviews `docs/RADIUS_SHADOW_TOKEN_PROPOSAL.md` before any
`src/styles/tokens.css` edit. It is review-only: no token implementation,
component token creation, behavior token creation, or component implementation
is approved by this document.

## Proposal Summary

The proposal identifies a small set of repeated radius values from the local
Figma notes and separates broadly reusable candidates from shape-specific or
component-specific geometry.

Radius candidates reviewed:

- `3px`
- `4px`
- `6px`
- `8px`
- `12px`
- `10px`
- `16.5px`
- `100px`
- `8px 8px 0px 0px`
- `0px 0px 8px 8px`
- `0px 6px 6px 0px`
- `6px 0px 0px 6px`

Shadow candidates reviewed:

- `0px 6px 20px rgba(153, 155, 168, 0.1)`
- `0px 3px 5px rgba(0, 0, 0, 0.1)`

The review approves only locally documented, broadly reusable primitives. It
defers values tied to circular geometry, partial-corner date picker shapes,
knob/thumb/control shadows, or source evidence that is not present in the local
docs.

## Radius Approval Matrix

| Radius value | Decision | Proposed generic token name | Reason |
| --- | --- | --- | --- |
| `3px` | Approved | `--radius-xs` | Confirmed in multiple local samples and useful as a very small reusable radius. |
| `4px` | Approved | `--radius-sm` | Confirmed in dropdown/form-control evidence and broad enough for a small radius primitive. |
| `6px` | Approved | `--radius-md` | Confirmed across pagination, status tag, and range segment evidence; broadly reusable. |
| `8px` | Approved | `--radius-lg` | Most common repeated UI radius across buttons, tags, tabs, panels, chips, and containers. |
| `12px` | Approved | `--radius-xl` | Confirmed locally and useful as a larger primitive, but should not imply pill behavior. |
| `10px` | Deferred | TBD | Tied to radio active circles/inner dots; likely shape-specific. |
| `16.5px` | Deferred | TBD | Tied to a copied circular date selection background; geometry-specific. |
| `100px` | Deferred | TBD | Tied to radio circular shapes; should wait for shape/pill token policy. |
| `8px 8px 0px 0px` | Deferred | TBD | Calendar month header compound radius; component-specific shape. |
| `0px 0px 8px 8px` | Deferred | TBD | Date picker bottom area compound radius; component-specific shape. |
| `0px 6px 6px 0px` | Deferred | TBD | Date range segment compound radius; component-specific shape. |
| `6px 0px 0px 6px` | Deferred | TBD | Date range segment compound radius; component-specific shape. |

## Shadow Approval Matrix

| Shadow value | Decision | Proposed generic token name | Reason |
| --- | --- | --- | --- |
| `0px 6px 20px rgba(153, 155, 168, 0.1)` | Approved | `--shadow-panel` | Locally documented on popup/panel-like surfaces and broadly reusable as a panel elevation primitive. |
| `0px 3px 5px rgba(0, 0, 0, 0.1)` | Deferred | TBD | Not found in inspected local Figma notes or preparation audits; may be knob/thumb/control evidence later, but source documentation is missing. |

## Approved Implementation Boundary

The following values would be safe to implement in a later dedicated
`src/styles/tokens.css` ticket, if that ticket asks for exactly the approved
radius and shadow tokens:

| Proposed token | Approved value |
| --- | --- |
| `--radius-xs` | `3px` |
| `--radius-sm` | `4px` |
| `--radius-md` | `6px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |
| `--shadow-panel` | `0px 6px 20px rgba(153, 155, 168, 0.1)` |

These names are approved as generic primitive tokens only. They do not approve
component tokens, state tokens, behavior tokens, or any component CSS.

Do not implement:

- Component-specific radius aliases.
- Shape/pill/circle aliases.
- Compound radius aliases.
- Knob/thumb/control shadows.
- State or interaction shadows.
- Any radius or shadow not confirmed in local documentation.

## Deferred Values

| Deferred value | Reason |
| --- | --- |
| `10px` | Shape-specific radio evidence; defer until shape/pill policy or component scope is approved. |
| `16.5px` | Date selection geometry evidence; defer as sample-specific circular shape. |
| `100px` | Radio/circle evidence; defer until circle/pill token policy is approved. |
| `8px 8px 0px 0px` | Calendar header compound shape; defer until date picker component scope is approved. |
| `0px 0px 8px 8px` | Date picker bottom area compound shape; defer until date picker component scope is approved. |
| `0px 6px 6px 0px` | Date range segment compound shape; defer until date picker/range behavior and component scope are approved. |
| `6px 0px 0px 6px` | Date range segment compound shape; defer until date picker/range behavior and component scope are approved. |
| `0px 3px 5px rgba(0, 0, 0, 0.1)` | Not locally documented; defer until source evidence exists and the relevant control/knob scope is approved. |

## Implementation Boundary

The next token implementation ticket may add only the six approved primitive
tokens listed above. It must not add component tokens, behavior/state tokens,
or deferred shape/control tokens.

Future component CSS modules must continue to wait for component-specific
implementation tickets. Approved radius and shadow primitives alone do not make
any UI component implementation-ready.

## Review Verdict

The proposal is approved for a narrow follow-up implementation ticket.

Approved:

- Five generic radius primitives.
- One generic panel shadow primitive.

Deferred:

- Three shape-specific single-value radii.
- Four compound component-specific radii.
- One locally undocumented/control-shadow candidate.

Component implementation remains blocked.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Implement Approved Radius and Shadow Tokens.

Reason: enough generic primitive values are approved for one narrow
`src/styles/tokens.css` update, while all component-specific and behavior
tokens remain deferred.
