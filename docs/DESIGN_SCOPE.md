# Design Scope

This project implements a CRM SaaS Dashboard based on the Figma CRM UI Kit.
Figma is the visual source of truth.

## Scope

- Build all dashboard variants visible in the Figma design.
- Build the empty state as a reusable pattern.
- Provide a demo route for the empty state at `/dashboard/empty`.
- Match the Figma design before inventing new interface patterns.
- Build auth and dashboard screens through nano-tickets that map to visible
  Figma sections.
- Treat mobile, tablet, and desktop layouts as part of the visual scope.

## Boundaries

- Do not invent UI beyond the Figma design unless explicitly approved.
- Do not add extra dashboard states, modules, components, or flows unless they
  are present in Figma or requested in a ticket.
- Keep implementation work tied to small, reviewable tickets.
- Do not fill missing Figma details with unrelated design patterns.
- Do not implement a broad screen set when the ticket asks for one component or
  one route.

## Design Token Boundary

Figma defines the visual intent. Project tokens translate that intent into
CSS custom properties in `src/styles/tokens.css`. Component CSS modules may add
local custom properties derived from global tokens, but they must not hardcode
colors.
