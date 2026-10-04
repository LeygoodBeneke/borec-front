## Context

borec-front is a Vite + React 19 + Tailwind v4 SPA that re-implements zavod-borec.ru. Content lives in typed modules under `src/content/` (`<page>Title` + `<page>Sections: ContentSection[]`, plus `newsItems`, `pistonCompressorModels`, `home.ts`, `production.ts`, `contactInfo`). Layout is `PageLayout` → `SiteHeader` (logo block + `MainNavigation`) → routed page → `SiteFooter`.

Current state relevant to this change:
- The working tree already has uncommitted edits in 36 files changing the container from `max-w-7xl` (1280px) to `max-w-[88rem]` (1408px, 1360px content). This change supersedes that value.
- `SiteHeader` uses teal text, a grid of name/phone/tagline/e-mail and no actions.
- `HomePage` renders the video inside the page container (`max-w-2xl`) over `bg.jpg`, then the address notice as plain slate text above the catalog icons.

Reference values were taken from the production stylesheets (`/t/v1410/images/site.head.scss.css`, `site.main.scss.css`, `css/site.addons.scss.css`) and rutector.ru (`.inner { width: 96%; max-width: 1320px }`). Note: production's base `.icons-wrap-text` is `#ECECEC` / `#303030`, but `site.addons.scss.css` overrides it with `background: #06f !important; color: #fff !important` — the rendered result (blue/white) is what the client sees and is the target.

## Goals / Non-Goals

**Goals:**
- Pixel-level header parity with production at the production breakpoints.
- One container-width token used everywhere.
- Home notice and video hero matching production rendering.
- Working `/search` with no backend and no new dependencies.

**Non-Goals:**
- Restyling `MainNavigation` (production hides its horizontal menu on desktop; we keep ours as-is).
- Reproducing production's mobile side-panel/burger and its 72px header top offset at ≤960px.
- Fuzzy/morphological Russian search (stemming, typo tolerance).
- Changing the footer design beyond the container width.

## Decisions

### 1. Container width as a Tailwind v4 theme token
Add `--container-site: 85.5rem;` to `@theme` in `globals.css` → utility `max-w-site`. 85.5rem = 1368px = 1320px content + 2×24px (`px-6`). Replace every `max-w-[88rem]` with `max-w-site`.
- *Alternative:* keep `max-w-[88rem]` (1360px content). Rejected: wider than the rutector reference and duplicated in 41 places.
- *Alternative:* a `<Container>` component. Rejected for now: larger diff across 36 files for no behavioral gain; a token achieves the single source of truth.

### 2. Header gets its own width (1600px), not the site token
Production's `.header-in` is 1600px with 20px padding while content is narrower. Since the request is "100% как на zavod-borec.ru", the header uses `max-w-[1600px]` and `px-5 py-[18px]` with a `bg-[#f5f5f5]` band (production `.wrapper` background `rgba(245,245,245,.95)` on white).
- *Trade-off:* header edges won't align with page content on wide screens — same as production.

### 3. Header styling via Tailwind arbitrary values + breakpoints
Use arbitrary breakpoint variants matching production's max-width queries: `max-[1680px]:`, `max-[1440px]:`, `max-[1260px]:`, `max-[960px]:`, `max-[640px]:`. Colors/sizes via arbitrary values (`text-[#303030]`, `text-[40px]`, `leading-[35px]`). Header root sets `font-heading` (Montserrat, already self-hosted at 400/600/700).
- *Alternative:* port production CSS into a `.header-*` block in `globals.css`. Rejected: rest of the codebase is utility-first.
- Icons (mail, search, request) are inlined as the production 18×18 SVG paths in a small local component inside `SiteHeader.tsx`.
- "Оставить запрос" is a `<Link to="/forma-obratnoj-svyazi">` instead of production's modal form — the site already has that form page.

### 4. Home-only notice slot in the header
`SiteHeader` renders `<AddressNotice />` between the logo block and `<MainNavigation />` only when `useLocation().pathname === '/'`. The notice is removed from `HomePage`.
- *Alternative:* render header pieces from `HomePage` / pass a slot prop through `PageLayout`. Rejected: `PageLayout` wraps all routes in `App.tsx`, so a route check in the header is the smallest change.
- Notice styling: wrapper `mx-auto max-w-site px-6 py-3` (keeps it aligned with content), inner `rounded-[5px] bg-[#0066ff] px-[15px] py-3 text-[20px] leading-[1.2] text-white max-[1024px]:text-base max-[768px]:text-[15px]`. Font: production `.common-text` inherits Arial from `.wrapper`; we use the site body font (Open Sans) for consistency with the rest of the copy — size/color/background match.

### 5. Video hero layout
Hero container: `relative p-5` with the photo as an absolutely positioned cover background and a `::before`-equivalent overlay div using `bg-[linear-gradient(90deg,rgba(0,156,130,.9)_0%,rgba(0,156,130,.4)_100%)]`. Inner: `relative flex items-center`, unconstrained above 1440px (video sits 20px from the viewport edge) and `max-[1440px]:mx-auto max-[1440px]:max-w-[1214px]` below. Video column: `w-[639px] shrink-0 max-[1440px]:w-[410px] max-[1024px]:max-w-[40%] max-[768px]:w-full max-[768px]:max-w-none`, iframe in an `aspect-video` box with `rounded-[5px]`.

### 6. Search: build-time static index, client-side filtering
`src/content/searchIndex.ts` exports `searchIndex: { title: string; href: string; text: string }[]` assembled from the content modules:
- `ContentSection[]` pages → flatten `prose`/`sideImage` html, `list` items, `captionedGallery` captions.
- `pistonCompressorModels` → `/kompressory/porshnevye-kompressory/<slug>`; `newsItems` → `/novosti/<slug>` (title + teaser + body).
- Home (`history`, `qualityBlocks`, `units`/`catalogIcons` titles), production arrays, `contactInfo` fields, cookie policy strings.
- HTML → text via a small `htmlToText` helper using `DOMParser` (`textContent`), executed lazily on first search and memoized, so the HTML is never inserted into the live DOM.

`src/pages/SearchPage.tsx` reads/writes `q` via `useSearchParams`. Normalization: `toLowerCase()`, `ё→е`, collapse whitespace. A result matches if every query word is a substring of normalized title+text; title matches sort first. Snippet: ~200 chars around the first hit, highlights produced by splitting the snippet string and wrapping hits in `<mark>` React elements — no `dangerouslySetInnerHTML`.
- *Alternative:* a library (FlexSearch/MiniSearch). Rejected: ~60 pages of content, linear scan is instant; avoids a dependency.
- *Alternative:* index pages by rendering them. Rejected: requires mounting every route.

## Risks / Trade-offs

- [Uncommitted 88rem edits in 36 files] → implementation does a mechanical replace of `max-w-[88rem]` → `max-w-site` on top of the working tree; do not revert or stash the user's other changes.
- [Header 1600px vs content 1320px misalignment looks odd to the client] → it mirrors production; if rejected, switch header inner to `max-w-site` (one class).
- [Montserrat fallback metrics differ before fonts load] → fonts are self-hosted with `font-display: swap`; acceptable.
- [Pages whose copy lives in TSX (Production, Contacts) are only partially indexed] → index their data arrays plus a short hand-written summary string; note in tasks.
- [Search index adds content strings to the main bundle] → lazy-load `SearchPage` with `React.lazy` so the index ships only with `/search`.
- [Arbitrary-value breakpoints duplicated in header/hero] → acceptable; they are local to two components.

## Migration Plan

Pure front-end change; deploy with the normal pipeline. Rollback = revert the commit.

## Open Questions

- Should the header band's `#F5F5F5` background also apply to the whole page body as on production (whose entire wrapper is light gray)? Default: header only.
