# Review Checklist

Senior review verifies that each nano-ticket matches the architecture, design,
and requested scope before the next ticket begins.

## Checklist

- Architecture fit: matches `AGENTS.md` and `PHASE_1_ARCHITECTURE.md`.
- File scope: changes only allowed files and folders.
- TypeScript strictness: no `any`, `@ts-ignore`, or `@ts-expect-error`.
- CSS Modules + BEM: component styles use CSS Modules and BEM naming.
- Token usage: component CSS uses tokens, not hardcoded colors.
- Responsive coverage: mobile, tablet, and desktop behavior is considered.
- Accessibility: semantic HTML, labels, focus states, and keyboard behavior are
  considered for UI work.
- Figma visual match: spacing, typography, color, radius, shadows, icons, and
  states match the approved Figma source.
- Lint/build status: `npm run lint` and `npm run build` pass.
- Git review: `git status --short` and `git --no-pager diff --stat` are
  reviewed.

## Approval States

- Approved: ready for the next ticket.
- Approved with notes: acceptable, with follow-up notes captured.
- Changes requested: revisions are required before moving on.
- Blocked: missing input, dependency, design source, or architecture decision.
