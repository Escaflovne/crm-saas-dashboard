# Icon Strategy Decision

This document records the first-phase icon strategy for future Auth/Form
primitives and Sign In planning. It is docs-only and does not approve source
edits, dependency changes, icon font imports, component implementation, or
component API decisions.

## Current Icon Evidence

Local Figma notes repeatedly document `la-solid-900` as copied CSS
`font-family` evidence. It appears in:

- Buttons with icon and arrow-only icon button samples.
- Tags / GreyEditable close icon.
- Pagination arrow controls.
- Tabs primary icon samples.
- Forms text-field right and left icon samples.
- Forms text-field state icons.
- Select/dropdown trigger and dropdown icon samples.
- Date picker trigger, calendar navigation, and SetDate control samples.

This evidence is copied Figma font-family data only. It does not confirm:

- The actual icon glyph identity.
- The source package or icon font file.
- Whether `la-solid-900` should be installed.
- Whether icons are decorative or functional.
- Accessible labels for interactive icon controls.

No icon dependency, icon font, icon source mapping, or icon token is currently
approved.

## Package And Source Status

Current package status:

- `package.json` includes React, React DOM, React Router DOM, and
  `@fontsource/lato`.
- No icon package is currently installed.
- No Line Awesome, Font Awesome, Lucide, Heroicons, or other icon dependency is
  present in `package.json`.

Current source status:

- `src/main.tsx` imports Lato weights `400`, `700`, and `900`.
- `src/main.tsx` imports `./styles/global.css`.
- No icon font CSS import exists in `src/main.tsx`.
- `src/styles/tokens.css` has no icon tokens.

No dependency change is approved by this decision alone.

## Options Considered

| Option | Suitability for first phase | Risks |
| --- | --- | --- |
| Keep using `la-solid-900` icon font | Not recommended now | Figma CSS only confirms a font-family label, not the font asset, package, glyph mapping, or accessibility behavior. Installing or emulating it would require guessing. |
| Install an icon library | Defer | Could be a good later decision, but it needs a separate dependency decision/install ticket and a mapping from needed Figma glyphs to library icons. |
| Use local inline SVG icons | Recommended when glyph identity is explicitly confirmed | Keeps dependencies stable and avoids icon-font guessing. Risk remains if a ticket invents glyphs, so future tickets must provide exact icon identity or use a clearly accepted standard glyph for a functional control. |
| Temporarily avoid icons where not essential | Recommended fallback | Allows Auth/Form foundation planning to continue when icons are decorative or unresolved. Risk is visual incompleteness until icon identity is confirmed. |

## Recommended First-Phase Strategy

Recommended strategy: use local inline SVG icons only when a future ticket
explicitly confirms the needed glyph identity; otherwise temporarily avoid
nonessential icons and keep icon slots optional.

Why this is the safest first-phase strategy:

- It does not require adding a dependency in this ticket.
- It does not treat `la-solid-900` as a confirmed source/library mapping.
- It avoids guessing Figma glyphs.
- It supports Auth/Form primitives where icons may be decorative or optional.
- It allows functional controls, such as password visibility, only when the
  ticket defines the exact icon identity and accessibility behavior.

If Oskar later wants a shared icon library, that must be handled by a separate
dependency decision/install ticket before component implementation relies on
it.

## Future Implementation Boundary

Future component tickets may:

- Use an inline SVG icon only when the ticket explicitly identifies the glyph
  and its purpose.
- Omit a nonessential icon when icon identity is unresolved.
- Reserve an icon slot in component planning documents if the visual layout
  requires one, while keeping the rendered icon deferred.
- Define accessibility labels for interactive icons in the same ticket that
  implements the interaction.

Future component tickets must not:

- Import `la-solid-900` or any icon font without an approved dependency/source
  ticket.
- Add icon packages without an approved dependency ticket.
- Infer glyph identity from copied layer names such as `Icon`, `Ico`, `Left`,
  `Right`, `close`, or `Circle`.
- Normalize copied Figma layer names into API names.
- Treat copied font-family evidence as a component API.
- Implement interactive icon behavior without accessible names and explicit
  behavior requirements.

Password visibility, search, and right-icon cases:

- If icon source remains unresolved, password visibility should stay out of the
  first implementation ticket or use explicitly identified local inline SVG
  glyphs with accessible button labels.
- Search icons and passive right icons should be omitted or deferred unless
  the ticket confirms the glyph identity.
- Decorative icons must be documented as decorative before implementation.
- Functional icons must include accessible labels and behavior requirements.

## Blockers And TBDs

- Icon glyph identity remains TBD.
- Icon source/library mapping remains TBD.
- Accessibility labels for interactive icons remain TBD.
- Whether each icon is decorative or functional remains TBD.
- Whether the selected Sign In screen actually requires icons remains TBD.
- Dependency choice for a shared icon library remains TBD.
- Icon token strategy remains TBD.

## Decision Verdict

Icon strategy is clean enough for Auth foundation planning, but not for
component implementation.

The first phase should avoid icon dependency work and avoid nonessential icons
unless a future ticket provides exact glyph identity and behavior requirements.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Auth Foundation Structure Plan.

Reason: icon strategy no longer blocks planning. The next safe step is a
docs-only structure plan for Auth foundations that keeps icons optional,
defers unresolved icon details, and still does not implement components.
