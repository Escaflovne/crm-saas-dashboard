# Phase 1 Architecture

This project is a CRM SaaS Dashboard based on a Figma CRM UI Kit. The senior
architecture decision is to migrate from the current Next.js scaffold to a pure
React + TypeScript single-page application built with Vite.

The current repository was originally scaffolded as Next.js. Do not delete
Next.js files, remove dependencies, or rewrite runtime code until an explicit
migration nano-ticket requests that step.

## Final Tech Stack

Phase 1 targets these pinned major versions and constraints:

- Vite 5.x.
- React 19.x.
- TypeScript 5.x with strict mode enabled.
- React Router 7.x with the Data Router API.
- CSS Modules with BEM class naming and CSS custom properties.
- Recharts 2.x for charts.
- TanStack Table v8 for data tables.
- React Hook Form 7.x with Zod 3.x for forms and validation.
- Zustand 4.x for client state stores.
- TanStack Query 5.x for mock API reads and future server data.
- date-fns 3.x for date formatting and date utilities.
- `@faker-js/faker` 8.x for deterministic mock data.
- `lucide-react` for icons.
- `@fontsource/lato` for the Lato font assets.
- ESLint flat config, Prettier, Husky, and lint-staged for code quality.

The target app must not use Next.js, SSR, React Server Components, or `next/*`
imports after migration. Dependencies that are not already installed must be
added only in explicit dependency nano-tickets.

## Runtime Model

- The app is a client-rendered SPA.
- There is no SSR.
- There are no React Server Components.
- Browser routing is handled by React Router.
- Routes are declared in `src/App.tsx`.
- The application entry point is `src/main.tsx`.
- The global CSS entry is `src/styles/global.css`.

## Target Package Scripts

After the Vite migration, package scripts should use these commands:

- `dev`: `vite`
- `build`: `tsc -b && vite build`
- `preview`: `vite preview`
- `lint`: `eslint .`

## Routes

Phase 1 targets these public routes:

- `/sign-in`
- `/recover`
- `/sign-up`
- `/sign-up/details`
- `/sign-up/finish`
- `/dashboard`
- `/dashboard/contacts`
- `/dashboard/finance`
- `/dashboard/empty`

The sign-up flow is three steps: account entry, details, and finish. The
`/dashboard/empty` route is a demo route for the reusable empty state.

Routes should be defined in the React Router route configuration in
`src/App.tsx`; do not rely on file-based routing after migration.

## Target Folder Structure

```text
src/
  App.tsx
  main.tsx
  components/
    ui/
      Button/
        Button.tsx
        Button.module.css
        Button.types.ts
        index.ts
      IconButton/
        IconButton.tsx
        IconButton.module.css
        IconButton.types.ts
        index.ts
    auth/
    dashboard/
      analytics/
      contacts/
      finance/
      shared/
    layouts/
    providers/
  hooks/
    queries/
  lib/
    constants/
    mock-api/
      endpoints/
    mock-data/
      generators/
    utils/
    validation/
  routes/
    RootPage.tsx
    NotFoundPage.tsx
    auth/
    dashboard/
  stores/
    useAuthStore.ts
    useDashboardStore.ts
    useSignUpStore.ts
  styles/
    global.css
    reset.css
    tokens.css
    typography.css
    utilities.css
  types/
```

Folders should be introduced only when a nano-ticket needs them.

## State Management

Use small Zustand stores with explicit responsibilities:

- `useAuthStore`: hydration-safe auth session state, mock user state, sign-in
  and sign-out state transitions.
- `useSignUpStore`: three-step sign-up draft state, step completion state, and
  reset behavior after completion.
- `useDashboardStore`: dashboard UI preferences that are not server data, such
  as selected periods, lightweight filters, and collapsed navigation state.

Auth guards must be hydration-safe. Do not redirect or render protected
client-only decisions until the auth store has hydrated.

## Mock API Architecture

Phase 1 uses mock data behind API-like boundaries so the backend can be swapped
later without rewriting components.

- `src/lib/mock-data`: deterministic fake records and fixture builders.
- `src/lib/mock-data/generators`: generators for repeatable mock datasets.
- `src/lib/mock-api`: async functions that simulate backend calls.
- `src/lib/mock-api/endpoints`: endpoint-shaped mock modules.
- `src/lib/query-keys`: stable TanStack Query key factories when query hooks
  are introduced.
- Async mock APIs should simulate loading states with small delays.
- Components should consume query hooks or API wrappers, not raw mock data.
- Future backend swaps should replace mock API implementations while preserving
  route, component, and query contracts.

## Component Pattern

Every component folder must use this pattern:

```text
Component.tsx
Component.module.css
Component.types.ts
index.ts
```

Component files should stay focused and under 200 lines where practical.
Create shared primitives before composing larger feature components.

## Design Token Strategy

Global design tokens live in:

```text
src/styles/tokens.css
```

Global style layers live in:

```text
src/styles/reset.css
src/styles/typography.css
src/styles/utilities.css
```

The imported global CSS entry is:

```text
src/styles/global.css
```

Use global tokens for color, typography, spacing, sizing, radii, shadows, and
breakpoints. Component-specific tokens may live inside CSS modules when they are
derived from global tokens. Component CSS modules must not hardcode colors.

## Styling Rules

- Use CSS Modules for component styles.
- Use BEM class naming for component CSS.
- Use CSS custom properties for design values.
- Use mobile-first media queries only: `@media (min-width: ...)`.
- Do not use `!important`.

## Dashboard Architecture

Dashboard work is split into shared shell components and route-specific modules.

- Shared dashboard components: shell, sidebar, topbar, metric cards, cards,
  charts, tables, filters, tabs, and empty state.
- Analytics dashboard: route summary, trend charts, metrics, and activity views
  visible in Figma.
- Contacts dashboard: contact lists, tables, filters, and contact summary
  patterns visible in Figma.
- Finance dashboard: finance metrics, charts, tables, and status patterns
  visible in Figma.
- Reusable empty state: shared component used by empty dashboard surfaces and
  demonstrated at `/dashboard/empty`.

## Auth Flow

The Phase 1 auth experience covers:

- Sign-in at `/sign-in`.
- Account recovery at `/recover`.
- Three-step sign-up:
  - `/sign-up`
  - `/sign-up/details`
  - `/sign-up/finish`

The auth flow should be implemented in small, reviewable tickets that map back
to the Figma design.

## Nano-Step Execution Roadmap

Do not implement a broad sprint at once. Each ticket must be small,
reviewable, and independently verified.

Example sequence:

- Documentation and architecture.
- Migration nano-tickets.
- Global tokens.
- Button.
- IconButton.
- Input.
- Form field.
- Card.
- EmptyState.
- App shell.
- Auth layout.
- Sign-in form.
- Recover form.
- Sign-up step one.
- Sign-up details step.
- Sign-up finish step.
- Dashboard route shell.
- Analytics dashboard widgets.
- Contacts dashboard table.
- Finance dashboard widgets.

Each ticket should specify exact files, expected behavior, responsive needs,
and verification commands.

## Future Extensibility

New dashboard modules should be added by creating a route entry in `src/App.tsx`,
a route module under `src/routes`, and module-specific components that reuse
shared dashboard primitives. Shared abstractions should be extracted only after
two or more modules prove the same need.

To add a new module later:

- Add a new React Router route in `src/App.tsx`.
- Add route code under `src/routes/<module>`.
- Add feature logic under `src/features/<module>` if a feature boundary is
  needed.
- Add mock data and mock API functions behind existing query patterns.
- Reuse shell, token, table, chart, and empty-state primitives.
- Avoid changing existing modules unless their public contracts need to evolve.
