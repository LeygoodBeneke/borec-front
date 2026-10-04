## 1. Compact mobile header

- [x] 1.1 In `SiteHeader.tsx`, hide the full header band at ≤960px and add a compact sticky bar (`sticky top-0 z-40`, 56px, `#F5F5F5`, bottom shadow) shown only at ≤960px
- [x] 1.2 Compact bar contents: 40px logo linking to `/`, truncated "Завод БОРЕЦ" (Montserrat bold 16px `#303030`), call icon button `tel:+78619914554` with `aria-label="Позвонить"`, menu button (≥44×44px, `aria-label="Открыть меню"`, `aria-expanded`, `aria-controls`)
- [x] 1.3 Keep the address notice on `/` rendered directly below the header on mobile
- [x] 1.4 Add `scroll-margin-top: 64px` for headings at ≤960px in `globals.css`

## 2. Navigation drawer

- [x] 2.1 Create `src/components/layout/MobileNavDrawer.tsx` with props `open`, `onClose` and a ref to the menu button for focus return
- [x] 2.2 Render the backdrop and right-side panel (`min(320px, 85vw)`, full height) with `translate-x` and opacity transitions, plus `motion-reduce:transition-none`
- [x] 2.3 Panel semantics: `role="dialog"`, `aria-modal="true"`, `aria-label="Меню"`, a close button labelled "Закрыть меню"; while closed, `inert`, `aria-hidden` and `invisible`
- [x] 2.4 Render `navItems` in order with ≥44px rows, highlighting the current route and adding `aria-current="page"`
- [x] 2.5 Accordion groups for items with children: toggle button with chevron, `aria-expanded`/`aria-controls`; "Завод Борец" lists "Главная" (`/`) first; a group containing the current route starts expanded
- [x] 2.6 Quick actions block below the list: phone, e-mail, "Поиск" (`/search`), "Оставить запрос" (`/forma-obratnoj-svyazi`), reusing the header icons
- [x] 2.7 Close on link click, backdrop click, Escape, route change (effect on `pathname`) and resize above 960px (`matchMedia('(min-width: 961px)')`)
- [x] 2.8 Lock page scroll while open (`overflow: hidden` on `<html>`, original value restored on close)
- [x] 2.9 Focus management: on open, focus the close button; trap Tab/Shift+Tab inside the panel; on close, return focus to the menu button
- [x] 2.10 Wire the drawer into `SiteHeader` with `useState` open state

## 3. Desktop menu accessibility

- [x] 3.1 Hide `MainNavigation` (non-flat) at ≤960px
- [x] 3.2 Open dropdowns on keyboard focus (`:focus-visible` inside the item, via state so Escape can close them) in addition to hover
- [x] 3.3 Turn the "Каталог" label into a `<button aria-expanded>` that toggles its dropdown on click; for "Завод Борец" add a small toggle button next to the link
- [x] 3.4 Close an open dropdown on Escape and on a click outside the menu

## 4. Responsive legacy content

- [x] 4.1 In `globals.css`, scoped to `.prose`: `img { max-width: 100% !important; height: auto !important; }`
- [x] 4.2 At ≤640px: floated `.prose img` get `float: none; display: block; margin: 0 auto 1rem`
- [x] 4.3 `.prose table { display: block; max-width: 100%; width: auto !important; overflow-x: auto; }`
- [x] 4.4 `.prose iframe` and the page-level iframes (home, contacts, cylinder page) are never wider than their container
- [x] 4.5 Make the footer `MainNavigation flat` a 2-column grid with ≥44px links at ≤640px

## 5. Verification

- [x] 5.1 `npx tsc -p tsconfig.app.json --noEmit` and `npm run build` pass
- [x] 5.2 In the browser at 320, 375 and 900px, check every route for horizontal scroll (`document.documentElement.scrollWidth === innerWidth`), including a piston compressor model page and `/kontakty`
- [x] 5.3 Drawer checks: opens and closes (link, backdrop, Escape, route change, resize), groups expand, current page highlighted, focus trapped and returned, page scroll locked
- [x] 5.4 At 1280px the desktop header and menu look unchanged; "Каталог" opens with keyboard Tab and with a click
