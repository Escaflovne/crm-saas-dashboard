# Migration Nano Tickets

The project is moving from the current Next.js scaffold to a Vite React
TypeScript SPA. Migration must happen through nano-tickets only. Do not combine
multiple migration steps unless a ticket explicitly allows it.

## Required Sequence

1. Document architecture change.
2. Audit dependencies and package scripts.
3. Install or add Vite, React Router, and `@fontsource/lato`; create the
   minimal Vite entry files needed for verification, including
   `vite.config.ts`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, and
   `src/App.tsx`.
4. Update package scripts from current scaffold commands to Vite commands.
5. Update TypeScript and ESLint configuration for Vite.
6. Move `src/app/globals.css` to `src/styles/global.css`.
7. Replace the `src/app` route skeleton with `src/routes`.
8. Remove Next.js dependencies, config, and files only after the Vite build
   works.
9. Add `vercel.json` SPA rewrite.
10. Verify lint, build, dev, and preview when relevant.

## Target Package Scripts

After the package script migration ticket, scripts should use these commands:

- `dev`: `vite`
- `build`: `tsc -b && vite build`
- `preview`: `vite preview`
- `lint`: `eslint .`

## Migration Rules

- Each step must be its own small, reviewable ticket unless explicitly approved.
- Do not delete Next.js files before the removal ticket.
- Do not install dependencies before the dependency ticket.
- Do not create UI while migrating the runtime.
- Keep public route paths unchanged.
- Keep `npm run lint` and `npm run build` passing after every migration ticket
  by default.
- No migration ticket may leave the repository in an unverifiable state unless
  that ticket explicitly says verification is temporarily expected to fail and
  explains the follow-up ticket that restores it.
