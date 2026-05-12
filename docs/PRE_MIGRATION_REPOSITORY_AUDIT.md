# Pre-Migration Repository Audit

Ticket: 0.8

## Current Scaffold Summary

The repository is still Next.js-based.

Evidence:

- `package.json` scripts use Next.js commands: `next dev`, `next build`, and
  `next start`.
- `package.json` dependencies include `next`.
- `package.json` devDependencies include `eslint-config-next`.
- `next.config.ts` exists and imports `NextConfig` from `next`.
- `next-env.d.ts` exists and references Next.js types.
- `src/app/` exists and contains the current App Router scaffold.
- `src/app/layout.tsx` imports `Metadata` from `next` and `Geist` /
  `Geist_Mono` from `next/font/google`.
- `src/app/globals.css` is the current global stylesheet entry.

## Current Package.json Audit

Current scripts:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Current dependencies:

```json
{
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "next": "15.5.18"
}
```

Current devDependencies:

```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.5.18",
  "@eslint/eslintrc": "^3"
}
```

Next.js-specific entries:

- Script `dev`: `next dev`.
- Script `build`: `next build`.
- Script `start`: `next start`.
- Dependency `next`.
- Dev dependency `eslint-config-next`.

Entries that will need later replacement for Vite:

- `dev` should become `vite`.
- `build` should become `tsc -b && vite build`.
- `preview` should be added as `vite preview`.
- `lint` should become `eslint .`.
- `next` should be removed after Vite build works.
- `eslint-config-next` should be removed after ESLint is migrated away from
  Next.js presets.
- Vite target dependencies and devDependencies are not yet present, including
  `vite`, React Router, and `@fontsource/lato`.

## Current Framework And Runtime Files

Next.js-related files and folders:

- `next.config.js`: does not exist.
- `next.config.mjs`: does not exist.
- `next.config.ts`: exists.
- `next-env.d.ts`: exists.
- `src/app/`: exists.
- `src/app/layout.tsx`: exists.
- `src/app/layout.jsx`: does not exist.
- `src/app/page.tsx`: exists.
- `src/app/page.jsx`: does not exist.
- `src/app/globals.css`: exists.

Additional current `src/app/` entries:

- `src/app/(app)/.gitkeep`
- `src/app/(auth)/.gitkeep`
- `src/app/favicon.ico`

## Current Source Folder Skeleton

Current top-level folders under `src/`:

- `src/app`
- `src/components`
- `src/hooks`
- `src/lib`
- `src/stores`
- `src/styles`
- `src/types`

Folders likely to stay during migration:

- `src/components`
- `src/hooks`
- `src/lib`
- `src/stores`
- `src/styles`
- `src/types`

Folders likely to need replacement or relocation:

- `src/app` should be replaced by explicit React Router route modules and
  removed only after Vite build works.
- `src/app/globals.css` should move to `src/styles/global.css` in the dedicated
  CSS migration ticket.
- `src/app/favicon.ico` may need relocation to `public/` or another Vite-safe
  asset location in a later ticket.

## Current Configuration Audit

`tsconfig.json` currently includes settings compatible with the current
Next.js scaffold:

- `jsx` is `preserve`.
- `moduleResolution` is `bundler`.
- `noEmit` is `true`.
- `strict` is `true`.
- The `@/*` alias maps to `./src/*`.

Next.js-specific TypeScript references that need later update:

- `plugins` includes `{ "name": "next" }`.
- `include` includes `next-env.d.ts`.
- `include` includes `.next/types/**/*.ts`.

`eslint.config.mjs` currently uses Next.js presets through `FlatCompat`:

- `next/core-web-vitals`
- `next/typescript`

Next.js-specific ESLint references that need later update:

- The Next.js preset extensions should be replaced by Vite/React TypeScript
  ESLint configuration.
- The ignore list includes `.next/**` and `next-env.d.ts`; those entries should
  be reconsidered after Next.js files are removed.

No configuration files were changed in this audit.

## Missing Vite Target Files

Current Vite target file status:

- `index.html`: missing.
- `vite.config.ts`: missing.
- `tsconfig.node.json`: missing.
- `src/main.tsx`: missing.
- `src/App.tsx`: missing.
- `src/routes/`: missing.
- `src/styles/global.css`: missing.
- `vercel.json`: missing.

These files were not created during this audit.

## Migration Risks

- Removing `next` before Vite is installed and configured would break current
  `npm run dev`, `npm run build`, and `npm run start`.
- Changing package scripts to Vite commands before adding Vite and the minimal
  Vite entry files would break verification.
- Removing `eslint-config-next` before replacing the ESLint config would break
  lint.
- Removing `next-env.d.ts` or `.next/types/**/*.ts` from `tsconfig.json`
  without a coordinated TypeScript update may change type-check behavior.
- Moving `src/app/globals.css` before `src/styles/global.css` is imported from
  the Vite entry may drop global styles.
- Deleting `src/app/` before `src/App.tsx` and `src/routes/` exist would remove
  the current route skeleton without a replacement.
- `src/app/layout.tsx` uses `next/font/google`; font migration must coordinate
  with `@fontsource/lato` so font loading does not depend on `next/font`.
- The current `npm run build` is still `next build`; Vite build verification
  will not happen until the package script migration ticket.
- Any migration ticket that combines dependency changes, script changes,
  config changes, file moves, and Next.js deletion risks leaving the repository
  in an unverifiable state.

## Recommended Next Nano-Ticket

Recommended next smallest safe migration ticket:

Add Vite, React Router, and `@fontsource/lato` dependencies and create the
minimal Vite entry/config files while leaving current Next.js scripts, files,
and dependencies in place.

Suggested scope:

- Allow package dependency updates only for the required Vite migration
  packages.
- Create only `index.html`, `vite.config.ts`, `tsconfig.node.json`,
  `src/main.tsx`, and `src/App.tsx`.
- Do not move `src/app/globals.css`.
- Do not delete `src/app/`, `next.config.ts`, `next-env.d.ts`, `next`, or
  `eslint-config-next`.
- Keep `npm run lint` and `npm run build` passing after the ticket.
