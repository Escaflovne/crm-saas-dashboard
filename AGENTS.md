# AGENTS.md

This file is the source of truth for Codex and other coding agents working in
this repository.

## Required Working Rules

- Always read `AGENTS.md` before editing files.
- Work in nano-steps only: each task should be small, reviewable, and easy to
  verify.
- Never implement a full sprint at once.
- Implement only the exact nano-ticket requested.
- Before editing, explain the planned file changes.
- Change only the requested scope.
- Do not perform broad refactors unless explicitly requested.
- Do not implement UI or application logic unless the current task explicitly
  asks for it.
- Do not install dependencies unless explicitly approved.
- Do not change `package.json` unless explicitly requested.
- Do not make commits unless explicitly approved.

## Verification

Run verification after every change:

```bash
npm run lint
npm run build
git status --short
git --no-pager diff --stat
```

Report the results clearly.

After every ticket, report:

- Changed files.
- Verification output.
- `git status --short`.
- `git --no-pager diff --stat`.

## TypeScript

- Use TypeScript strict mode.
- Do not use `any`.
- Do not use `@ts-ignore`.
- Do not use `@ts-expect-error`.

## Styling

- Use CSS Modules.
- Use BEM naming for component classes.
- Use CSS custom properties for design values.
- Do not hardcode colors in component CSS modules.
- Use mobile-first media queries only: `@media (min-width: ...)`.
- Do not use `!important`.

### Styling Examples

BEM class names should use block, element, and modifier names:

```css
.button {}
.button__icon {}
.button--primary {}
.button--disabled {}
```

Mobile-first media queries should start with the base mobile styles, then add
larger viewport changes with `min-width`:

```css
.card {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .card {
    padding: var(--space-6);
  }
}
```

Do not hardcode colors in component CSS modules:

```css
/* Good */
.button {
  background: var(--color-surface-action);
  color: var(--color-text-inverse);
}

/* Bad */
.button {
  background: #2563eb;
  color: white;
}
```

Global tokens belong in `src/styles/tokens.css`. Component-scoped tokens may
live inside CSS modules only when they are derived from global tokens:

```css
.button {
  --button-background: var(--color-surface-action);
  --button-radius: var(--radius-md);
}
```

## Components

Component folders must follow this structure:

```text
Button/
  Button.tsx
  Button.module.css
  Button.types.ts
  index.ts
```

Keep source code files and component files under 200 lines where practical.
This rule does not apply to long-form documentation files. When a source file
is growing past 200 lines, split by responsibility: types, constants, helpers,
subcomponents, or feature-level composition.

## Code Hygiene

- Do not add `console.log` calls.
- Prefer narrow, local changes over shared abstractions.
- Match existing project conventions before introducing new patterns.
