# Figma Extraction Guide

Extract Figma details before implementation. The extracted notes become the
visual contract for the nano-ticket.

## Required Extraction

- Frame name.
- Route or component target.
- Desktop notes.
- Tablet notes.
- Mobile notes.
- Colors.
- Typography.
- Spacing.
- Radius.
- Shadows.
- Icons.
- States:
  - Default.
  - Hover.
  - Active.
  - Disabled.
  - Error.
  - Empty.
  - Loading.

## Screenshots

Screenshots are required before implementation:

- Desktop screenshot.
- Tablet screenshot when a tablet design exists.
- Mobile screenshot when a mobile design exists.
- State screenshots for hover, active, disabled, error, empty, and loading when
  those states exist in Figma.

## Notes Location

Extraction notes should live in:

```text
docs/figma-notes/
```

Screenshots may be referenced from:

```text
docs/figma-notes/README.md
```

No implementation should start until the relevant extraction notes exist for
that component or route.

## Boundaries

- Figma is the visual source of truth.
- Do not invent UI that is not in Figma unless explicitly approved.
- If Figma is missing a required state, document the gap before implementing.
- Do not infer unrelated layout, color, or behavior patterns from other screens
  without approval.
