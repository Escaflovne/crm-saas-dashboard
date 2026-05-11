# Workflow

Work proceeds in nano-steps:

```text
Architecture -> ticket -> Codex implementation -> review -> next ticket
```

## Expectations

- Every task must be small and reviewable.
- Codex must implement only the exact nano-ticket requested.
- Codex must never implement a full sprint at once.
- Each implementation ticket should have a clear scope and visible completion
  criteria.
- Codex must explain planned file changes before editing.
- Review happens before moving to the next ticket.
- Broad refactors are out of scope unless explicitly requested.
- Verification must run after every change as defined in `AGENTS.md`.

## Ticket Shape

Each ticket should define:

- The files or folders that may change.
- The files or folders that must not change.
- The intended behavior or documentation outcome.
- The responsive expectations for UI work.
- The required verification commands.

Examples of acceptable nano-tickets:

- Add global design tokens.
- Build `Button`.
- Build `IconButton`.
- Build `Input`.
- Build `Card`.
- Build the reusable empty state.

Examples of unacceptable broad tickets:

- Build the whole dashboard.
- Implement the full auth flow.
- Create all components in one pass.

## Post-Ticket Report

After every ticket, report:

- Changed files.
- Verification output.
- `git status --short`.
- `git --no-pager diff --stat`.

## Responsive Review

Every UI task must consider:

- Mobile.
- Tablet.
- Desktop.

Responsive behavior should be designed from the smallest viewport upward.
