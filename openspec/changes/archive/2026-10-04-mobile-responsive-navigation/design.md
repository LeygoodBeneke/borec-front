## Context

The site is a React + Vite + Tailwind v4 SPA with React Router. Every page renders through `PageLayout`, so `SiteHeader` → `MainNavigation` → `<main>` → `SiteFooter` is the shared structure. Navigation data lives in one place, `navItems` in `src/content/navigation.ts`. It has six top-level items, and two of them have children: "Каталог" (8 links, no own page) and "Завод Борец" (`/` plus 2 links).

Current mobile problems:
- `MainNavigation` is a `flex-wrap justify-between` row. Its dropdowns use `group-hover` only, so touch users can't open them.
- `SiteHeader` already has ≤960px and ≤640px rules, but the result is a ~300px-tall stacked block (logo, name, tagline, phone, e-mail, search, request).
- `ProseSection` renders sanitized legacy HTML. It contains tables with inline fixed widths (432–677px, about 80 tables on piston compressor model pages) and images with inline `width`/`float`, which overflow a 375px screen.

The existing header breakpoints (1680/1440/1260/960/640px) come from the production site. 960px stays the switch point between desktop and mobile navigation.

## Goals / Non-Goals

**Goals:**
- Any page is reachable in at most two taps from any page on a phone.
- The menu is always reachable without scrolling back up.
- No horizontal page scroll at 320px and up on any routed page.
- Accessible drawer: keyboard operable, focus trapped while open, correct ARIA.
- Desktop (>960px) looks the same as now.

**Non-Goals:**
- Redesigning desktop layout or content pages.
- Rewriting legacy HTML content in `src/content/*.ts`. It is fixed with CSS only.
- A bottom tab bar, a search-as-you-type overlay or a PWA.
- Replacing third-party embeds (Rutube, YouTube, Yandex Maps).

## Decisions

### 1. Slide-in drawer from the right, opened by a menu button in a sticky compact bar
At ≤960px the header collapses into a 56px sticky bar: logo (40px), short name "Завод БОРЕЦ", a call icon button (`tel:`) and a menu button. The button opens a drawer of `min(320px, 85vw)` that slides in from the right over a dimmed backdrop.

- *Why the right side:* thumb reach on phones held in the right hand, and it matches the button's position.
- *Alternative — bottom tab bar:* rejected. Six sections plus two groups don't fit 4–5 tabs, and a tab bar permanently takes screen height.
- *Alternative — full-screen overlay menu:* workable, but a partial-width drawer keeps page context visible and is a common pattern users already know.
- *Alternative — keep the horizontal menu and make it scroll sideways:* hides items off-screen and still doesn't solve submenus.

### 2. Accordion groups inside the drawer
"Каталог" and "Завод Борец" render as buttons with a chevron that expand their children in place (`aria-expanded`, `aria-controls`). The group that contains the current route starts expanded. "Завод Борец" has its own page (`/`), so its expanded list starts with a "Главная" link to `/` followed by the children. This avoids a single control that both navigates and expands.

### 3. One data source, a new component
New `MobileNavDrawer.tsx` reads the same `navItems`. `MainNavigation` stays desktop-only, with `max-[960px]:hidden` on its `<nav>`. No new dependencies. The animation uses CSS transforms (`translate-x`) with `transition`, and `motion-reduce:transition-none` turns it off for users who prefer reduced motion.

### 4. Drawer behavior
- Open state lives in `SiteHeader` (`useState`). It closes on route change (an effect on `useLocation().pathname`), on Escape, on backdrop click and on the close button.
- While the drawer is open, body scroll is locked with `overflow: hidden` on `document.documentElement`, and the original value is restored on close.
- Focus: on open, focus moves to the close button and Tab cycles inside the drawer. On close, focus returns to the menu button. This is implemented with a small keydown handler, without a library.
- The drawer is rendered with `role="dialog"` and `aria-modal="true"`, labelled "Меню". While closed it is `inert` and `aria-hidden`, so it stays out of the tab order.
- The bottom of the drawer holds the phone, e-mail, "Поиск" and "Оставить запрос". These are the header contacts/actions that are hidden in the compact bar.

### 5. Desktop dropdowns: hover + focus-within + click
Add `group-focus-within:visible group-focus-within:opacity-100` so keyboard users can open them. "Каталог" has no `href` and becomes a `<button aria-expanded>` that toggles the dropdown on click, so tablets above 960px with touch screens work too. A click outside the menu or Escape closes it.

### 6. Responsive legacy content via CSS on the prose wrapper
In `globals.css`, scoped to `.prose`:
- `img { max-width: 100%; height: auto; }`. The `!important` is needed because inline `width` attributes and styles are present.
- `@media (max-width: 640px)`: floated images get `float: none; display: block; margin: 0 auto 1rem`.
- `table { display: block; max-width: 100%; overflow-x: auto; }`, plus `width: auto !important` to override inline widths. Cells keep their natural width, so the table scrolls inside its box.
- `iframe { max-width: 100%; }`.

*Alternative — wrap tables in a scroll container with a DOMPurify `afterSanitizeElements` hook:* more correct semantically (the table keeps `display: table`), but heavier. The CSS approach is enough here and reversible. We'll revisit it only if screen-reader table semantics turn out to matter.

### 7. Footer nav on mobile
`MainNavigation flat` at ≤640px renders as a 2-column grid (`grid grid-cols-2`) with comfortable 44px tap targets.

## Risks / Trade-offs

- [Sticky bar covers in-page anchor targets] → Add `scroll-margin-top: 64px` to headings at ≤960px.
- [`display: block` on tables can affect screen-reader table navigation in some browsers] → It is limited to `.prose` content and keeps the visual layout. If audits flag it, switch to the DOMPurify wrapper approach (Decision 6, alternative).
- [`!important` overrides in prose CSS] → Scoped to `.prose img`/`.prose table` only, so the rules can't leak into components.
- [Body scroll lock on iOS Safari] → `overflow: hidden` on `<html>` is enough for current iOS. We accept slight rubber-banding.
- [The home-page address notice sits between header and menu] → On mobile it stays directly under the sticky bar, so spec order is preserved.
- [The `inert` attribute is missing in very old browsers] → `aria-hidden` plus `visibility: hidden` when closed covers them.

## Migration Plan

Front-end only. Ship in one release. Roll back by reverting the commit. No data or URL changes.

## Open Questions

- Should the compact bar also show a search icon, or is search in the drawer enough? Default: drawer only, to keep the bar uncluttered.
