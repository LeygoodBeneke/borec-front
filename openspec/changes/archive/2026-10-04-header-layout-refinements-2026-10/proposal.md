## Why

Client review of 2026-10-03 asked for the rebuilt site to look like the current production site (zavod-borec.ru) in the header and home hero, to use a slightly wider page (reference: rutector.ru), and to update two pieces of copy. Today the header uses a different layout, color and font sizes, the address notice is buried below the video, and the header has no search or request actions that the production header offers.

## What Changes

- Widen the shared page container to a content width of 1320px (rutector.ru `.inner` max-width), defined once as a theme token instead of 41 hard-coded `max-w-[88rem]` classes.
- Rebuild `SiteHeader` to match zavod-borec.ru 1:1: Montserrat, `#303030` name 40px/35px bold and tagline 24px/22px, 107px logo with 60px gap, right side with a contacts column (phone 26px bold, e-mail 16px bold with icon, 0.7 opacity) and an actions column ("Поиск", "Оставить запрос" with icons), 1600px inner width, 18px/20px padding, and the production breakpoints (1680/1440/1260/960/640px).
- Replace the tagline "Производитель компрессорного оборудования с 1897 года" with "основан в 1897 году в Москве".
- Home page only: move the address notice above the horizontal menu, restyle it like production (`#0066ff` background, white text, 20px, 5px radius, 12px/15px padding) and change its text to "С 2008 года производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе, 14/2."
- Home hero: place the video on the left like production (639px video, 410px at ≤1440px, teal gradient overlay over the factory photo, 20px padding, stacks on mobile).
- Add a `/search` page with client-side full-text search over page titles and content, linked from the header "Поиск" action.

## Capabilities

### New Capabilities
- `site-layout`: shared page container width used by all pages.
- `site-header`: header structure, typography, colors, contacts, actions and responsive behavior.
- `home-hero`: home page address notice (placement, styling, text) and the video/photo hero layout.
- `site-search`: search page, search index built from site content, and result display.

### Modified Capabilities
<!-- none: openspec/specs/ has no existing capabilities -->

## Impact

- `src/components/layout/SiteHeader.tsx`, `PageLayout.tsx` (home-only notice slot above `MainNavigation`)
- `src/pages/HomePage.tsx`
- New `src/pages/SearchPage.tsx`, `src/content/searchIndex.ts`, route in `src/App.tsx`
- `src/styles/globals.css` (container token)
- All pages and common/layout components that use `max-w-[88rem]` (36 files with uncommitted width edits already in the working tree)
- No new dependencies.
