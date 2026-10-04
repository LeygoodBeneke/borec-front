## MODIFIED Requirements

### Requirement: Header responsive behavior
The header SHALL follow the production breakpoints above 960px:
- at ≤1680px: logo gap 20px, name 31px, tagline 19px, right-group gap 30px;
- at ≤1440px: name 31px/29px, tagline 19px/18px with 10px top margin;
- at ≤1260px: name 26px, tagline 16px, both with 1.25 line height.

At ≤960px the header SHALL be replaced by a compact bar that is sticky at the top of the viewport while scrolling. It SHALL be 56px tall with a light gray (`#F5F5F5`) background and a bottom shadow, and contain, left to right: the logo (40px wide, linking to `/`), the short name "Завод БОРЕЦ" (Montserrat bold, 16px, `#303030`, truncated with an ellipsis if it does not fit), a call icon button linking to `tel:+78619914554` (accessible name "Позвонить"), and the menu button. The tagline, e-mail, "Поиск" and "Оставить запрос" SHALL NOT be shown in the compact bar. They are available in the navigation drawer. The horizontal main menu SHALL be hidden at ≤960px.

#### Scenario: Tablet
- **WHEN** a page is viewed at 900px wide
- **THEN** the header is a single 56px bar with the logo, "Завод БОРЕЦ", a call button and a menu button, and no horizontal teal menu is shown

#### Scenario: Phone
- **WHEN** a page is viewed at 375px wide
- **THEN** the compact bar fits on one line and no horizontal scrollbar appears

#### Scenario: Sticky while scrolling
- **WHEN** the user scrolls down a long page at 375px wide
- **THEN** the compact bar stays pinned to the top of the viewport

#### Scenario: Call button
- **WHEN** the user taps the call button in the compact bar
- **THEN** the device starts a call to `+78619914554`

#### Scenario: Laptop unchanged
- **WHEN** a page is viewed at 1280px wide
- **THEN** the full header (logo, name, tagline, contacts column, actions column) and the horizontal teal menu are shown as before

## ADDED Requirements

### Requirement: Desktop dropdowns are keyboard and touch accessible
Above 960px, top-level menu items with children SHALL open their dropdown on mouse hover and when focus is inside the item (keyboard). No arrow or chevron indicators SHALL be shown on desktop menu items. Items without their own page ("Каталог") SHALL be buttons with `aria-expanded` that also toggle the dropdown on click or tap; items with their own page ("Завод Борец") SHALL navigate on click. An open dropdown SHALL close on Escape and on a click outside it.

#### Scenario: Keyboard
- **WHEN** a keyboard user tabs to "Каталог" in the desktop menu
- **THEN** the catalog dropdown becomes visible and its links are reachable with Tab

#### Scenario: Touch tablet
- **WHEN** a user taps "Каталог" on a 1024px-wide touch screen
- **THEN** the dropdown opens, and tapping outside closes it
