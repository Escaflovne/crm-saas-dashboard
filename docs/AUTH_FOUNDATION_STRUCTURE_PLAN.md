# Auth Foundation Structure Plan

This plan defines a conservative Auth foundation direction before implementing
Auth layout, primitives, or Sign In. It is docs-only and does not approve source
edits, route edits, component creation, dependency changes, validation
libraries, icon libraries, or Sign In implementation.

## Current Foundation Status

Current app architecture:

- The repository is a Vite React TypeScript SPA.
- `src/App.tsx` declares routes with React Router.
- `/sign-in` is already declared and points to the current placeholder
  `src/routes/auth/SignInPage.tsx`.
- `src/main.tsx` imports Lato weights `400`, `700`, and `900`, then imports
  `src/styles/global.css`.
- `src/styles/global.css` imports the global style foundation.

Available token foundations:

- Semantic color aliases are implemented in `src/styles/tokens.css`.
- Radius primitives are implemented:
  - `--radius-xs`
  - `--radius-sm`
  - `--radius-md`
  - `--radius-lg`
  - `--radius-xl`
- The panel shadow primitive is implemented:
  - `--shadow-panel`
- Typography foundation is available for Lato-based Auth planning:
  - Lato `400`, `700`, and `900`
  - Header size/line-height tokens
  - Text and secondary text size/line-height tokens
  - Button label size tokens

Icon strategy status:

- `la-solid-900` remains copied Figma evidence only.
- No icon dependency, icon font import, or icon token is approved.
- First-phase icon strategy is local inline SVG only when glyph identity is
  explicitly confirmed; otherwise nonessential icons should be omitted or
  deferred.

Still not implemented or approved:

- Auth component APIs.
- Button component API or behavior.
- Input component API or behavior.
- Auth layout spacing, padding, and dimensions.
- Form validation strategy.
- React Hook Form or Zod dependency decisions.
- Sign In screen values.

## Proposed Future Structure

The current repository uses `src/routes` for route modules, not `src/pages`.
Future Auth work should align with the existing React Router structure unless a
separate architecture ticket changes that convention.

Proposed future structure, proposal-only:

```text
src/routes/auth/
  SignInPage.tsx

src/components/auth/
  AuthLayout/
    AuthLayout.tsx
    AuthLayout.module.css
    AuthLayout.types.ts
    index.ts
  AuthCard/
    AuthCard.tsx
    AuthCard.module.css
    AuthCard.types.ts
    index.ts

src/components/ui/
  Button/
    Button.tsx
    Button.module.css
    Button.types.ts
    index.ts
  Input/
    Input.tsx
    Input.module.css
    Input.types.ts
    index.ts
```

This structure is not approved for creation in this ticket. It is a planning
target for later nano-tickets.

## Future Primitive Responsibilities

### AuthLayout

AuthLayout should be a layout shell only.

Future responsibilities may include:

- Page-level Auth layout composition.
- Responsive shell constraints once Sign In screen extraction confirms them.
- Background/surface usage through approved global tokens only.

AuthLayout must not invent:

- Figma dimensions.
- Spacing/padding.
- Responsive behavior.
- Decorative media or illustration behavior.

### AuthCard

AuthCard should be a surface/container only.

Future responsibilities may include:

- Auth form surface structure.
- Radius and shadow usage from approved primitives, if confirmed by the Sign In
  extraction and approved in the implementation ticket.
- Auth content grouping without validation or form behavior.

AuthCard must not own:

- Field validation.
- Form submission.
- Route navigation.
- Component-specific tokens unless explicitly approved later.

### Button

Button should start with a limited primary variant only.

Future responsibilities may include:

- Basic button element structure.
- Approved color, radius, typography, and sizing values from the relevant
  extraction.
- Disabled behavior only if explicitly defined in a later component ticket.

Button must not invent:

- Hover/focus/active/disabled behavior.
- Icon behavior.
- Padding/gap values from unavailable Auto Layout data.
- Additional variants beyond the approved ticket scope.

### Input

Input should start with a limited text/password/email field structure only.

Future responsibilities may include:

- Label, value/placeholder, and bottom-border field structure if confirmed for
  the selected Auth screen.
- Text/password/email `type` usage based on explicit Auth requirements.
- Optional icon slots only when glyph identity is confirmed or deliberately
  deferred.

Input must not invent:

- Validation behavior.
- Error/success behavior.
- Focus/hover/disabled behavior.
- Search/select/date behavior.
- Icon glyphs.
- Auto Layout spacing/gap/padding.

### Icon Slots

Icon slots should remain optional/deferred unless a future ticket confirms:

- Exact glyph identity.
- Whether the icon is decorative or functional.
- Accessible label requirements for interactive icons.
- The approved rendering strategy for that icon.

## Sign In First-Page Rationale

Sign In remains the recommended first page later because it should have a low
primitive count and can validate the smallest useful Auth foundation:

- AuthLayout.
- AuthCard.
- Button.
- Input.
- Basic text/heading usage.

These primitives should also be reusable for Sign Up, Recover, and related Auth
pages later.

Sign In implementation must not start yet. A Sign In screen extraction pass is
still required before implementation because the current local docs do not
confirm the selected Sign In screen values.

## Blockers Before Implementation

Implementation remains blocked by:

- Sign In screen extraction values are missing.
- Auth layout dimensions and surfaces are missing.
- Exact Auth spacing/padding remains TBD.
- Input behavior/API is not approved.
- Button behavior/API is not approved.
- AuthCard/AuthLayout API and scope are not approved.
- Form validation strategy is not approved.
- React Hook Form and Zod dependency decisions are not made.
- Icon glyph identity remains unresolved.
- Icon source/library mapping remains unresolved.
- Sign In responsive behavior is not confirmed.
- Component-specific tokens are not approved.

## Proposed Implementation Sequence

Recommended nano-ticket order after this plan:

1. Sign In Screen Extraction Checklist.
   - Define exactly what Figma values are still needed for the selected Sign In
     screen.
   - Keep it docs-only.
2. UI Component API Planning for Button/Input/Card.
   - Define minimal prop boundaries and exclusions.
   - Keep it docs-only.
3. Auth Layout Planning.
   - Define AuthLayout/AuthCard responsibilities against extracted screen
     values.
   - Keep it docs-only.
4. Dependency Decision: Form Validation, only if needed.
   - Decide whether native form handling is enough or whether React Hook Form
     and Zod need separate install tickets.
5. First implementation ticket only after the above gates.
   - Keep it narrow and limited to approved values, approved APIs, and approved
     behavior.

Implementation stays blocked until these gates are complete.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Sign In Screen Extraction Checklist.

Reason: Auth foundations are now planned enough to identify the next missing
source of truth. The safest next step is to define the exact Sign In Figma
values needed before any source implementation begins.
