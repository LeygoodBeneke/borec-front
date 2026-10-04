## Why

On phones the site is hard to navigate. The teal main menu wraps its six items onto several uneven rows. The "Каталог" and "Завод Борец" submenus open only on mouse hover, so on touch screens their eight catalog pages and two company pages can't be reached from the menu at all. The header stacks the logo, name, contacts and actions into a tall block that pushes content below the fold. Legacy HTML content (spec tables with fixed `width: 432px…677px`, floated images with fixed widths) also overflows narrow screens and causes horizontal scrolling.

## What Changes

- Add a mobile navigation drawer. At ≤960px the horizontal teal menu is replaced by a menu button that opens a full-height panel sliding in from the right. The panel lists every section, has expandable groups for "Каталог" and "Завод Борец", highlights the current page and offers quick actions (call, e-mail, search, request). It closes when a link is chosen, on the close button, on backdrop tap and on Escape. Page scroll is locked while it is open.
- Replace the tall mobile header with a compact sticky bar at ≤960px: logo, short company name, a phone-call icon button and the menu button. It stays at the top while scrolling, so the menu is always one tap away. **BREAKING** (spec-level): this replaces the current ≤960px and ≤640px header rules in `site-header`.
- Make the desktop dropdowns reachable by keyboard and by tap: open on focus-within and on click as well as on hover.
- Make legacy HTML content fit narrow screens: images scale down to the container width, floated images stop floating at ≤640px, and wide tables scroll horizontally inside their own box instead of widening the page.
- Footer navigation on mobile becomes a readable two-column list instead of a wrapped row.
- Guarantee no horizontal page scroll from 320px up on every routed page.

## Capabilities

### New Capabilities
- `mobile-navigation`: The menu button, slide-in navigation drawer, its expandable groups, quick actions, open/close behavior, focus management and scroll lock on screens ≤960px.
- `responsive-content`: Rules that make legacy HTML content (images, floats, tables, embeds) and footer navigation fit screens from 320px wide without horizontal page scroll.

### Modified Capabilities
- `site-header`: "Header responsive behavior" changes — at ≤960px the header becomes a compact sticky bar (logo, short name, call button, menu button) and the contacts/actions columns move into the drawer. The horizontal main menu is hidden at ≤960px. Desktop dropdowns must also open on focus and on click.

## Impact

- `src/components/layout/SiteHeader.tsx`: compact mobile bar, menu button, hide contacts/actions at ≤960px.
- `src/components/layout/MainNavigation.tsx`: hidden at ≤960px; dropdowns open on focus-within and click.
- New `src/components/layout/MobileNavDrawer.tsx`: drawer component using `navItems` from `src/content/navigation.ts`.
- `src/components/layout/SiteFooter.tsx`: two-column mobile nav.
- `src/components/common/ProseSection.tsx` and `src/styles/globals.css`: responsive rules for images, floats, tables and iframes inside prose.
- No new dependencies, no routing or content-data changes. Desktop layout above 960px is unchanged apart from keyboard and click access to dropdowns.
