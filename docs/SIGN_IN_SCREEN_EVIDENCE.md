# Sign In Screen Evidence

This document captures the initial Sign In Figma evidence provided by Oskar in
chat. It preserves confirmed values exactly and marks missing values as `TBD`.
It does not approve source edits, routes, components, package changes,
validation libraries, icon libraries, or Sign In implementation.

## Current Evidence Status

- This document captures initial Sign In evidence only.
- Sign In implementation remains blocked.
- A full Sign In screenshot was provided.
- The screenshot visible Figma label is `Sign In`.
- Only one Copy-as-CSS block was provided: `Frame 20`.
- Screenshot-only observations are visual evidence, not implementation values.
- Earlier Sign Up screenshot evidence is intentionally not documented here as
  Sign In evidence.

## Confirmed Visual Content From Screenshot

Visible text/content:

| Item | Visual evidence |
| --- | --- |
| Heading | `Welcome to our CRM. Sign In to see latest updates.` |
| Subtitle | `Enter your details to proceed further` |
| Email field label | `Email` |
| Email field value | `john.doe@gmail.com` |
| Password field label | `Password` |
| Password placeholder/value | `Start typing...` visually; exact ellipsis remains TBD until copied CSS confirms it |
| Remember-me label | `Remember me` |
| Recover password link | `Recover password` |
| Primary button label | `Sign In` |
| Secondary button label | `Sign Up` |
| Social text | `Or sign in with` |

Visible structure:

| Structure item | Visual evidence |
| --- | --- |
| Left Auth surface | Present |
| Right-side blue illustration/gradient area | Present |
| Email input | Present, right icon visible |
| Password input | Present, right lock icon visible |
| Remember-me control | Present |
| Recover password link | Present |
| Primary button | Present |
| Secondary button | Present |
| Social login area | Present |
| Social icon buttons | Twitter-like, Google-like, and Facebook-like icons visible |
| Illustration/vector handling | TBD |

The social icon labels above are visual descriptions only. Exact icon glyph
identity, decorative/functional role, source mapping, and accessibility labels
remain `TBD`.

## Confirmed Copy-as-CSS Values

### Frame 20

| Property | Confirmed value |
| --- | --- |
| CSS comment | `Frame 20` |
| Display | `flex` |
| Flex direction | `row` |
| Justify content | `center` |
| Align items | `center` |
| Padding | `71px 153px` |
| Gap | `10px` |
| Position | `absolute` |
| Width | `802px` |
| Height | `900px` |
| Left | `0px` |
| Top | `0px` |
| Background | `#FFFFFF` |
| Border radius | `0px 16px 16px 0px` |

Raw Copy-as-CSS excerpt:

```css
/* Frame 20 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 71px 153px;
gap: 10px;

position: absolute;
width: 802px;
height: 900px;
left: 0px;
top: 0px;

background: #FFFFFF;
border-radius: 0px 16px 16px 0px;
```

## Token Mapping Notes

These are planning notes only. Do not edit tokens from this evidence document.

- `#FFFFFF` maps to existing base/semantic surface tokens after approval in a
  component implementation ticket.
- `16px` radius is not currently an approved radius primitive and must not be
  mapped automatically.
- `0px 16px 16px 0px` is a screen-specific compound radius evidence item, not
  an approved global radius token.
- `71px 153px` is screen-specific padding evidence, not a global spacing token.
- `10px` is screen-specific gap evidence here, not an approved spacing token.
- Absolute position values are documentation evidence only.

## Missing Evidence / TBD

Required evidence still missing:

- Root Sign In frame Copy-as-CSS.
- Right-side gradient/illustration container Copy-as-CSS.
- Exact illustration asset strategy.
- Heading Copy-as-CSS.
- Subtitle Copy-as-CSS.
- Email input Copy-as-CSS.
- Password input Copy-as-CSS.
- Remember-me control Copy-as-CSS.
- Recover password link Copy-as-CSS.
- Primary `Sign In` button Copy-as-CSS.
- Secondary `Sign Up` button Copy-as-CSS.
- Social login area Copy-as-CSS.
- Social icon button Copy-as-CSS.
- Icon glyph identities.
- Decorative vs functional icon roles.
- Accessibility labels for functional icons.
- Responsive/mobile frame evidence.
- Complete spacing/gap hierarchy.
- Complete padding hierarchy.
- AuthCard/AuthLayout dimensions and surfaces beyond `Frame 20`.
- Final component API decisions.
- Input behavior/API decisions.
- Button behavior/API decisions.
- Form validation strategy.
- React Hook Form and Zod decision.

## Implementation Readiness Verdict

Sign In is not implementation-ready yet.

The current evidence is enough to start a focused extraction follow-up, not
source code. The screenshot establishes the visible content and structure, and
the `Frame 20` Copy-as-CSS block confirms one left-surface/layout frame. The
remaining screen-specific layers and behavior decisions still need extraction.

## Recommended Next Nano-Ticket

Recommended next nano-ticket: Sign In Detailed Layer Extraction.

Reason: the next step should collect Copy-as-CSS and Inspect values for the
specific Sign In layers listed above before any source implementation begins.
