## ADDED Requirements

### Requirement: Menu button on small screens
At viewport widths ≤960px the horizontal main menu SHALL be hidden and a menu button SHALL be shown at the right end of the compact header bar. The button SHALL be at least 44×44px, labelled "Открыть меню" for assistive technology, and expose `aria-expanded` and `aria-controls` pointing to the drawer. Above 960px the menu button SHALL NOT be shown and the horizontal menu SHALL be shown.

#### Scenario: Phone viewport
- **WHEN** any page is viewed at 375px wide
- **THEN** the teal horizontal menu is not visible and a menu button is visible in the header bar

#### Scenario: Desktop viewport
- **WHEN** any page is viewed at 1280px wide
- **THEN** the horizontal menu is visible and no menu button is shown

### Requirement: Navigation drawer
Activating the menu button SHALL open a navigation panel that slides in from the right edge, `min(320px, 85vw)` wide and full viewport height, over a semi-transparent backdrop. The panel SHALL have `role="dialog"`, `aria-modal="true"` and the accessible name "Меню". It SHALL list every top-level item of the site navigation in the same order as the desktop menu, with tap targets at least 44px tall. The link to the current page SHALL be visually highlighted and marked with `aria-current="page"`.

#### Scenario: Open the drawer
- **WHEN** the user taps the menu button at 375px wide
- **THEN** a panel slides in from the right listing "Каталог", "Завод Борец", "Производство", "Ремонт", "Реинжиниринг", "Контакты", and the page behind it is dimmed

#### Scenario: Current page highlighted
- **WHEN** the user opens the drawer while on `/kontakty`
- **THEN** the "Контакты" item is highlighted and has `aria-current="page"`

### Requirement: Expandable groups in the drawer
Items with children ("Каталог", "Завод Борец") SHALL render as toggle buttons with a chevron and `aria-expanded`. Tapping one SHALL expand or collapse its child links in place without navigating. A group containing the current route SHALL start expanded. The "Завод Борец" group SHALL list a "Главная" link to `/` before its children.

#### Scenario: Expand catalog
- **WHEN** the user taps "Каталог" in the drawer
- **THEN** its eight links ("Клапаны" … "Азотные станции") appear beneath it and the chevron rotates

#### Scenario: Group of current page starts open
- **WHEN** the user opens the drawer while on `/agnks`
- **THEN** the "Каталог" group is already expanded and "АГНКС" is highlighted

#### Scenario: Company group
- **WHEN** the user expands "Завод Борец"
- **THEN** the links "Главная", "Новости", "Вакансии" are shown

### Requirement: Quick actions in the drawer
Below the navigation list the drawer SHALL show the phone link (`tel:+78619914554`, "+7 (861) 991-45-54"), the e-mail link (`mailto:zakaz@zavod-borec.ru`), a "Поиск" link to `/search` and an "Оставить запрос" link to `/forma-obratnoj-svyazi`.

#### Scenario: Request from drawer
- **WHEN** the user taps "Оставить запрос" in the drawer
- **THEN** the feedback form page `/forma-obratnoj-svyazi` opens and the drawer is closed

### Requirement: Closing the drawer
The drawer SHALL close when the user taps a navigation link, taps the close button (labelled "Закрыть меню"), taps the backdrop, presses Escape, or when the route changes. It SHALL also close if the viewport is resized above 960px.

#### Scenario: Navigate via drawer
- **WHEN** the user taps "Ремонт" in the open drawer
- **THEN** `/remont-porshnevogo-kompressora` opens and the drawer is no longer visible

#### Scenario: Backdrop tap
- **WHEN** the drawer is open and the user taps the dimmed area outside it
- **THEN** the drawer closes and the page is unchanged

#### Scenario: Escape key
- **WHEN** the drawer is open and the user presses Escape
- **THEN** the drawer closes

### Requirement: Focus management and scroll lock
While the drawer is open, the page behind it SHALL NOT scroll. Focus SHALL move into the drawer on open, Tab and Shift+Tab SHALL cycle within the drawer, and on close focus SHALL return to the menu button. While closed, drawer contents SHALL NOT be reachable by Tab or exposed to assistive technology.

#### Scenario: Scroll locked
- **WHEN** the drawer is open and the user swipes on the backdrop
- **THEN** the page behind does not scroll

#### Scenario: Focus returns
- **WHEN** the user opens the drawer with the keyboard and closes it with Escape
- **THEN** focus is on the menu button

#### Scenario: Hidden when closed
- **WHEN** the drawer is closed and the user presses Tab repeatedly through the header
- **THEN** focus never lands on a link inside the drawer

### Requirement: Reduced motion
The drawer slide and backdrop fade SHALL be disabled when the user has `prefers-reduced-motion: reduce` set.

#### Scenario: Reduced motion
- **WHEN** reduced motion is enabled and the user opens the drawer
- **THEN** the drawer appears without a slide animation
