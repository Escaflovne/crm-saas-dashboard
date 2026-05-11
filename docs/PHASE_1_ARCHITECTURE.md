# Phase 1 Architecture

This project is a Next.js 15 CRM SaaS Dashboard based on a Figma CRM UI Kit.
Phase 1 establishes the application architecture before UI or application logic
is implemented. Work must proceed through nano-tickets, not broad sprint-sized
implementation.

## Final Tech Stack

Phase 1 targets these pinned major versions:

- Next.js 15.x with the App Router, not Next.js 16.
- React 19.x through the Next.js 15 application baseline.
- TypeScript 5.x with strict mode enabled.
- CSS Modules with BEM class naming and CSS custom properties.
- Recharts 2.x for charts.
- TanStack Table v8 for data tables.
- React Hook Form 7.x with Zod 3.x for forms and validation.
- Zustand 4.x for client state stores.
- TanStack Query 5.x for mock API reads and future server data.
- date-fns 3.x for date formatting and date utilities.
- `@faker-js/faker` 8.x for deterministic mock data.
- `lucide-react` for icons.
- ESLint flat config, Prettier, Husky, and lint-staged for code quality.

Dependencies that are not already installed must be added only in an explicit
dependency ticket.

## Routes

Phase 1 targets these routes:

- `/sign-in`
- `/recover`
- `/sign-up`
- `/sign-up/details`
- `/sign-up/finish`
- `/dashboard`
- `/dashboard/contacts`
- `/dashboard/finance`
- `/dashboard/empty`

The sign-up flow is three steps: account entry, details, and finish.
The `/dashboard/empty` route is a demo route for the reusable empty state.
Route groups in parentheses organize files only and do not create URL segments.

```text
src/app/
├── (auth)/
│   ├── sign-in/page.tsx          # /sign-in
│   ├── recover/page.tsx          # /recover
│   └── sign-up/
│       ├── page.tsx              # /sign-up
│       ├── details/page.tsx      # /sign-up/details
│       └── finish/page.tsx       # /sign-up/finish
└── (app)/
    └── dashboard/
        ├── page.tsx              # /dashboard
        ├── contacts/page.tsx     # /dashboard/contacts
        ├── finance/page.tsx      # /dashboard/finance
        └── empty/page.tsx        # /dashboard/empty
```

## Target Folder Structure

```text
src/
  app/
    (auth)/
      recover/
        page.tsx
      sign-in/
        page.tsx
      sign-up/
        page.tsx
        details/
          page.tsx
        finish/
          page.tsx
    (app)/
      dashboard/
        page.tsx
        contacts/
          page.tsx
        empty/
          page.tsx
        finance/
          page.tsx
    layout.tsx
    page.tsx
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
      DashboardShell/
      EmptyState/
      MetricCard/
      Sidebar/
      Topbar/
    charts/
    forms/
    tables/
  features/
    auth/
      components/
      schemas/
      stores/
    dashboard/
      analytics/
      contacts/
      finance/
  lib/
    mock-api/
    mock-data/
    query-keys/
    validation/
  stores/
    useAuthStore.ts
    useDashboardStore.ts
    useSignUpStore.ts
  styles/
    reset.css
    tokens.css
    typography.css
    utilities.css
  types/
```

The Next.js root layout imports `src/app/globals.css`. That file remains the
global CSS entrypoint and should import the global style layers from
`src/styles`.

```text
src/app/globals.css
src/styles/reset.css
src/styles/tokens.css
src/styles/typography.css
src/styles/utilities.css
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
- `src/lib/mock-api`: async functions that simulate backend calls.
- `src/lib/query-keys`: stable TanStack Query key factories.
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

The imported global CSS entry remains:

```text
src/app/globals.css
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
- Global tokens.
- Button.
- IconButton.
- Input.
- Form field.
- Card.
- EmptyState.
- DashboardShell.
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

New dashboard modules should be added by creating a route under `src/app`, a
feature folder under `src/features`, and module-specific components that reuse
shared dashboard primitives. Shared abstractions should be extracted only after
two or more modules prove the same need.

To add a new module later:

- Add a new route under `src/app/(app)/dashboard`.
- Add feature logic under `src/features/<module>`.
- Add mock data and mock API functions behind existing query patterns.
- Reuse shell, token, table, chart, and empty-state primitives.
- Avoid changing existing modules unless their public contracts need to evolve.
