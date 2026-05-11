# Nano Tickets

Nano-tickets keep implementation work small, reviewable, and aligned with the
architecture. Each ticket must define one small scope and avoid full sprint
implementation.

## Rules

- Use one small scope per ticket.
- Do not implement a full sprint at once.
- Do not include unrelated refactors.
- Do not expand the allowed file list while implementing.
- Keep each ticket independently reviewable.
- Run the required verification commands after the ticket.

## Ticket Format

Each ticket should use this format:

```text
Context
What prior architecture, design, or ticket this work depends on.

Scope
The exact work to complete in this ticket.

Allowed files
The files and folders Codex may create or edit.

Forbidden changes
The files, folders, dependencies, or behaviors Codex must not change.

Verification commands
npm run lint
npm run build
git status --short
git --no-pager diff --stat

Report format
- Changed files
- Concise summary
- Verification output
- git status --short
- git --no-pager diff --stat
- Remaining ambiguity or mismatches
```

## Good Tickets

- Add global design tokens only.
- Create the `Button` component only.
- Add route folders with `.gitkeep` files only.
- Document the Figma extraction checklist only.

## Bad Tickets

- Build the whole dashboard.
- Implement all auth screens and validation.
- Add every shared component in one pass.
- Refactor routing while adding a component.
- Install dependencies during a UI ticket that did not request dependencies.
