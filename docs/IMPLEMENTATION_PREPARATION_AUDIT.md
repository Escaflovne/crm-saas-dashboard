# Implementation Preparation Audit

This audit summarizes the current repository and Figma preparation state before
starting implementation work. Local documentation is the source of truth for
this audit; the Figma link was not required for this pass.

## Repository Architecture Status

Current verdict: the repository is a Vite React TypeScript SPA.

Evidence:

- `package.json` scripts are Vite-aligned:
  - `dev`: `vite`
  - `build`: `tsc -b && vite build`
  - `preview`: `vite preview`
  - `lint`: `eslint .`
- Runtime dependencies are React, React DOM, React Router DOM, and
  `@fontsource/lato`; `next` is not present in `package.json`.
- `vite.config.ts` uses `@vitejs/plugin-react` and a `@/*` alias to `src`.
- `src/main.tsx` is the app entry point. It imports Lato weights `400`, `700`,
  and `900`, then imports `src/styles/global.css`.
- `src/App.tsx` declares browser routes with React Router.
- `src/styles/global.css` imports the current style layers in order:
  `tokens.css`, `reset.css`, and `typography.css`.
- `src/styles/tokens.css` contains confirmed base color and typography custom
  properties.

Next.js runtime/config status:

- No Next.js runtime dependency is present in `package.json`.
- No active source imports from `next/*` were found.
- No active Next.js runtime/config files were found in the inspected source and
  config structure.
- Historical Next.js references remain in migration documentation, especially
  `docs/PRE_MIGRATION_REPOSITORY_AUDIT.md`; those are historical context, not
  current runtime evidence.

Architecture risks:

- Route modules are still placeholder pages with simple headings.
- Several target architecture dependencies listed in
  `docs/PHASE_1_ARCHITECTURE.md` are not installed yet and must remain explicit
  dependency nano-tickets if needed.
- `.DS_Store` files and build artifacts are present in the working tree
  structure; this audit does not remove them.
- The project has a base style foundation, but component-level token mapping and
  component CSS patterns have not started.

## Figma Documentation Inventory

### Global Design Tokens

`docs/figma-notes/global-design-tokens.md` documents confirmed base color and
typography values. It states that confirmed base color and typography tokens are
implemented in `src/styles/tokens.css`, and base body typography is applied in
`src/styles/typography.css`.

Still out of scope in the token notes:

- Semantic mappings.
- Unresolved letter-spacing tokens.
- Alignment tokens.
- Spacing, radius, shadow, layout, and component tokens.
- Component typography and heading styles.

### Buttons / Tags / Pagination

`docs/figma-notes/buttons-tags-pagination.md` is closed for preparation
boundary purposes. Its roadmap marks every documented UI scope as
`Partially documented / closed for now` with implementation allowed as `No`.

Documented scopes include:

- Plain Primary buttons.
- Plain Outline buttons.
- Primary buttons with icon.
- Outline buttons with icon.
- Color options.
- Color outline.
- Tags.
- Pagination.
- Progress bars.
- Tabs primary.
- Badge & status tag.

Important meaning: `Partially documented / closed for now` means the extraction
scope should not be reopened during implementation planning, but it does not
mean the component is implementation-ready.

Recurring unresolved blockers in this document include:

- Auto Layout padding/gap unavailable or TBD.
- State semantics and interaction behavior TBD.
- Icon source/library mapping TBD beyond copied font-family evidence.
- Responsive behavior TBD.
- Component API/scope decisions TBD.
- Source metadata TBD.

### Forms

`docs/figma-notes/forms.md` is also preparation documentation, not component
readiness approval. It marks Forms as not implementation-ready.

Documented or partially documented Forms scopes include:

- Text inputs.
- Error state.
- Success state.
- Select/dropdown fields.
- Date picker overview.
- Checkbox and Radio.
- Switch/Toggles.

Not ready or still TBD in Forms:

- Short input / empty state.
- Filled state.
- Placeholder state.
- Focus state.
- Disabled state as a full scope.
- Labels.
- Helper text.
- Validation messages.
- Search fields.
- Textarea.
- Source metadata.
- Component scope/API decisions.

The Forms notes repeatedly preserve copied Figma layer names as evidence only.
They explicitly prohibit converting copied names, absolute positions, percentage
offsets, or color/state labels into behavior assumptions.

## Implementation Readiness Gate

Full UI implementation is not ready.

Safe foundation work:

- Documentation-only audits.
- Token inventory and token mapping preparation.
- Review of repeated raw values against existing base tokens.
- Narrow CSS foundation work only after an explicit ticket approves the token
  boundary.

Token mapping work:

- Not ready to edit `tokens.css` in this ticket.
- Can begin only after a token mapping audit confirms which values should become
  semantic or component tokens and which values remain sample-only evidence.
- Must not invent names or values for missing spacing, radius, state, shadow,
  layout, or component semantics.

Component implementation work:

- Not ready for full components.
- Component work should wait until token mapping is approved and each component
  ticket explicitly defines which documented values are allowed to use.
- Component behavior must not be inferred from Figma layer names.

Blocked/TBD work:

- Any state or interaction behavior not explicitly documented.
- Any responsive behavior not explicitly documented.
- Any Auto Layout spacing/gap/padding not confirmed.
- Any icon source mapping beyond copied `la-solid-900` font-family evidence.
- Any Forms validation or accessibility behavior not explicitly specified.
- Any component API or architecture decision not covered by a ticket.

## Token Mapping Preparation

Repeated raw values that likely need review before implementation:

- Core colors: `#5E81F4`, `#1C1D21`, `#8181A5`, `#ECECF2`, `#F0F0F3`,
  `#F5F5FA`, `#F6F6F6`, `#FFFFFF`.
- Secondary/status colors: `#7CE7AC`, `#8AF1B9`, `#FF808B`, `#F4BE5E`,
  `#9698D6`, `#40E1FA`, `#2CE5F6`, `#1B51E5`.
- Common alpha overlays: `rgba(94, 129, 244, 0.1)`,
  `rgba(124, 231, 172, 0.1)`, `rgba(255, 128, 139, 0.1)`, and
  `rgba(153, 155, 168, 0.1)`.
- Common radii: `3px`, `4px`, `6px`, `8px`, `10px`, `12px`, `16.5px`,
  `100px`.
- Common typography: Lato `400`, `700`, `900`; `14px/21px`; `14px/17px`;
  `12px/14px`; `16px/24px`; icon evidence using `la-solid-900`.
- Forms Toggles labels use Source Sans Pro in copied CSS; this needs a font
  decision before implementation because current base font tokens are Lato.

Before token mapping starts:

- Decide whether token mapping is limited to existing confirmed base tokens or
  includes semantic/component tokens.
- Separate reusable design values from sample-only absolute positions.
- Decide how to handle copied icon font evidence.
- Decide whether Source Sans Pro is a real design requirement or copied CSS
  artifact before any dependency or font import changes.
- Keep unresolved `TBD` values out of `tokens.css`.

## Proposed Implementation Order

Recommended conservative order:

1. Token mapping preparation audit.
   - Blockers: semantic naming and component-token boundaries are not approved.
2. Approved token mapping implementation.
   - Blockers: spacing, radius, shadow, state, layout, and component token scope
     must be explicitly allowed.
3. Shared primitive planning for text, icon evidence, and state naming.
   - Blockers: icon source/library mapping remains TBD.
4. Buttons as the first visual component family, starting with plain buttons.
   - Blockers: Auto Layout padding/gap is unavailable; implementation must rely
     only on approved dimensions and child positions if allowed.
5. Tags and Badge/status tag preparation-to-component split.
   - Blockers: scope relationship and state semantics remain TBD.
6. Progress bars and Pagination.
   - Blockers: value semantics, responsive behavior, and interaction semantics
     remain TBD.
7. Forms text inputs before complex select/date controls.
   - Blockers: validation semantics, accessibility behavior, and API decisions
     remain TBD.
8. Select/dropdown and Date picker only after behavior/API decisions.
   - Blockers: open/closed behavior, day-cell grid, navigation, selection, and
     range behavior remain TBD.
9. Checkbox/Radio/Switches after token and behavior boundaries are approved.
   - Blockers: checked/unchecked/on/off/state semantics and accessibility
     behavior remain TBD.

## First Recommended Next Nano-Ticket

Recommended next nano-ticket: Token Mapping Readiness Audit.

Why this comes next: component implementation is still blocked, but the
repository has enough confirmed repeated raw values to prepare a token mapping
boundary. The next ticket should be report-only or docs-only and should not edit
`src/styles/tokens.css` yet.

## Guardrails For Future Implementation

- Use CSS Modules only.
- Use BEM naming.
- Use mobile-first media queries only: `@media (min-width: ...)`.
- Do not use Tailwind.
- Do not use `!important`.
- Do not hardcode colors in component CSS modules.
- Use global tokens from `src/styles/tokens.css` only after token mapping is
  approved.
- Do not infer component behavior from Figma layer names.
- Do not implement states that remain `TBD`.
- Do not invent Auto Layout spacing/gap/padding.
- Do not normalize copied Figma names into API names without an explicit
  implementation ticket.
- Keep each implementation ticket small, reviewable, and independently
  verifiable.
