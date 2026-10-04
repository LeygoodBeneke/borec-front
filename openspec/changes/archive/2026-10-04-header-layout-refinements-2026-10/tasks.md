## 1. Page width

- [x] 1.1 Add `--container-site: 85.5rem;` to `@theme` in `src/styles/globals.css`
- [x] 1.2 Replace every `max-w-[88rem]` with `max-w-site` across `src/` (pages, `Breadcrumb`, `MainNavigation`, `SiteFooter`, `SiteHeader`, `HomePage`) on top of the existing uncommitted edits
- [x] 1.3 Verify `grep -rn "max-w-\[88rem\]\|max-w-7xl" src` returns nothing and content is 1320px wide at 1920px viewport

## 2. Header

- [x] 2.1 Restructure `SiteHeader` markup: `#f5f5f5` band (`px-5 py-[18px]`, `font-heading`), inner `mx-auto max-w-[1600px] flex flex-wrap items-center`, left group (logo 107px + `mr-[60px]`, name/tagline wrap `flex-1`), right group (`pl-5 gap-x-[60px]`) with contacts column and actions column (`gap-y-2.5`, `p-2.5` each)
- [x] 2.2 Apply typography: name `text-[40px] leading-[35px] font-bold text-[#303030]`; tagline `text-[24px] leading-[22px] mt-[13px] text-[#303030]`
- [x] 2.3 Change tagline text to "основан в 1897 году в Москве"
- [x] 2.4 Contacts: phone `+7 (861) 991-45-54` (`tel:+78619914554`, 26px/24px bold, opacity-70); e-mail with 18×18 mail icon (`mailto:zakaz@zavod-borec.ru`, 16px/24px bold black, opacity-70)
- [x] 2.5 Add local `HeaderIcon` SVGs (mail, search, request) using production paths; actions "Поиск" → `/search` and "Оставить запрос" → `/forma-obratnoj-svyazi`, 16px/24px bold black, opacity-70, no hover underline
- [x] 2.6 Add responsive rules: `max-[1680px]` (logo mr-5, name 31px, tagline 19px, right gap 30px), `max-[1440px]` (name 31/29, tagline 19/18 mt-2.5), `max-[1260px]` (name 26px, tagline 16px, leading-tight 1.25), `max-[960px]` (groups full-width centered, right group pt-[15px]), `max-[640px]` (logo stacked mb-2.5, centered text, name 22px, tagline 14px mt-[7px])
- [x] 2.7 Check header at 1920/1600/1366/1200/900/375px against zavod-borec.ru side by side

## 3. Home notice and hero

- [x] 3.1 Create `AddressNotice` (in `SiteHeader.tsx` or `src/components/layout/AddressNotice.tsx`) with text "С 2008 года производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе, 14/2." and styling `bg-[#0066ff] text-white text-[20px] leading-[1.2] rounded-[5px] px-[15px] py-3`, `max-[1024px]:text-base`, `max-[768px]:text-[15px]`, inside `mx-auto max-w-site px-6 py-3`
- [x] 3.2 Render `AddressNotice` in `SiteHeader` between the logo block and `MainNavigation` only when `pathname === '/'`
- [x] 3.3 Remove the old notice paragraph from `HomePage`
- [x] 3.4 Rebuild the home hero: `relative p-5`, cover background `bg.jpg`, overlay div with teal 90°→40% gradient, inner `relative flex items-center` with `max-[1440px]:mx-auto max-[1440px]:max-w-[1214px]`, `max-[768px]:flex-col`
- [x] 3.5 Video column `w-[639px] shrink-0 max-[1440px]:w-[410px] max-[1024px]:max-w-[40%] max-[768px]:w-full max-[768px]:max-w-none`, `aspect-video` iframe with `rounded-[5px]`
- [x] 3.6 Verify at 1920px the video's left edge is 20px from the viewport, at 1366px it is 410px wide in a centered 1214px column, at 375px it is full width

## 4. Search

- [x] 4.1 Create `src/content/searchIndex.ts` with `SearchEntry { title; href; text }` and entries for all `<page>Title`/`<page>Sections` modules mapped to their routes from `App.tsx`
- [x] 4.2 Add entries for `pistonCompressorModels` (`/kompressory/porshnevye-kompressory/<slug>`), `newsItems` (`/novosti/<slug>`), home (`/`: history, quality blocks, unit/catalog titles), production (`/proizvodstvo`: data arrays + summary), contacts (`/kontakty`: `contactInfo`), cookie policy (`/cookie`), factory history pages
- [x] 4.3 Implement `htmlToText` via `DOMParser` and a memoized `getSearchIndex()` that flattens section HTML to plain text on first use
- [x] 4.4 Implement `searchSite(query)`: normalize (lowercase, ё→е, collapse whitespace), require ≥2 chars, all words must match title+text, title matches first; return entries with ~200-char snippet around first hit
- [x] 4.5 Create `src/pages/SearchPage.tsx`: breadcrumb "Поиск", h1, form with input + submit bound to `?q=` via `useSearchParams`, result count, result list (title link + snippet with `<mark>` highlights built as React nodes), "Ничего не найдено" and "минимум 2 символа" states
- [x] 4.6 Register `/search` in `App.tsx` with `React.lazy` + `Suspense`
- [x] 4.7 Verify queries "клапан", "Шторм", "202ВП-12/3", "ЗАВОД БОРЁЦ", "к", "zzzz" and `<img src=x onerror=alert(1)>` behave as specified

## 5. Validation

- [x] 5.1 Run `npm run build` and `npm run lint` with no errors
- [x] 5.2 Run `openspec validate header-layout-refinements-2026-10` and fix any issues
