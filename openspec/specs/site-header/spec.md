# site-header Specification

## Purpose
Site header layout, typography, contacts, actions and responsive behavior matching zavod-borec.ru.
## Requirements
### Requirement: Header layout matches production
The site header SHALL reproduce the zavod-borec.ru header: a light gray (`#F5F5F5`) band with 18px vertical and 20px horizontal padding, an inner row at most 1600px wide and centered, a left group (logo, then name and tagline) that takes the remaining space, and a right group with two columns separated by a 60px gap: a contacts column and an actions column. All header text SHALL use Montserrat.

#### Scenario: Desktop layout
- **WHEN** any page is viewed at 1920px wide
- **THEN** the header shows, left to right: the 107×107px logo, a 60px gap, the company name above the tagline, then the contacts column (phone above e-mail), then the actions column ("Поиск" above "Оставить запрос"), all vertically centered

### Requirement: Header typography and colors
The company name "АО "Компрессорный завод БОРЕЦ"" SHALL be bold, `#303030`, 40px with 35px line height. The tagline SHALL be regular weight, `#303030`, 20px with 1.3 line height, 13px below the name. The tagline SHALL display two lines: line 1 "основан в 1897 году в Москве" and line 2 "с 2008 года производственная площадка находится по адресу: г. Краснодар, Ростовское шоссе, 14/2". Both lines SHALL use the same font size and weight. If the full address line does not fit on one line it SHALL wrap naturally with a line break before "г. Краснодар". The phone link SHALL be bold 26px/24px. The e-mail, "Поиск" and "Оставить запрос" links SHALL be bold 16px/24px, black, each preceded by its 18×18px icon with a 10px gap. The phone, e-mail and both actions SHALL be rendered at 0.7 opacity and SHALL NOT be underlined on hover.

#### Scenario: Tagline two lines shown
- **WHEN** the header is viewed at 1920px wide
- **THEN** the tagline area shows "основан в 1897 году в Москве" on the first line and "с 2008 года производственная площадка находится по адресу: г. Краснодар, Ростовское шоссе, 14/2" on the second line, both at 20px regular weight

#### Scenario: Address wraps if needed
- **WHEN** the header is viewed at 1260px wide
- **THEN** if the address line does not fit in one row it wraps before "г. Краснодар" and no horizontal overflow occurs

#### Scenario: Name and tagline styling
- **WHEN** the header is inspected at 1920px wide
- **THEN** the name computes to Montserrat 700 40px `#303030` and both tagline lines to Montserrat 400 20px `#303030`

#### Scenario: Contact and action styling
- **WHEN** the header is inspected at 1920px wide
- **THEN** the phone computes to 26px bold and the e-mail, "Поиск" and "Оставить запрос" to 16px bold with an icon on the left, all at opacity 0.7

### Requirement: Header tagline text
The header tagline SHALL display two lines: "основан в 1897 году в Москве" and "с 2008 года производственная площадка находится по адресу: г. Краснодар, Ростовское шоссе, 14/2". The word "завод" SHALL NOT appear in the address line. The text "Производитель компрессорного оборудования с 1897 года" SHALL NOT appear in the header.

#### Scenario: Both tagline lines shown
- **WHEN** any page is opened
- **THEN** the tagline under the company name shows both address lines and the word "завод" does not appear in the second line

### Requirement: Header contacts and actions
The phone SHALL link to `tel:+78619914554` and display "+7 (861) 991-45-54". The e-mail SHALL link to `mailto:zakaz@zavod-borec.ru`. "Поиск" SHALL navigate to `/search`. "Оставить запрос" SHALL navigate to the feedback form at `/forma-obratnoj-svyazi`. The logo SHALL navigate to `/`.

#### Scenario: Request action
- **WHEN** the user clicks "Оставить запрос"
- **THEN** the feedback form page `/forma-obratnoj-svyazi` opens

#### Scenario: Search action
- **WHEN** the user clicks "Поиск"
- **THEN** the search page `/search` opens

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

### Requirement: Desktop dropdowns are keyboard and touch accessible
Above 960px, top-level menu items with children SHALL open their dropdown on mouse hover and when focus is inside the item (keyboard). No arrow or chevron indicators SHALL be shown on desktop menu items. Items without their own page ("Каталог") SHALL be buttons with `aria-expanded` that also toggle the dropdown on click or tap; items with their own page ("Завод Борец") SHALL navigate on click. An open dropdown SHALL close on Escape and on a click outside it.

#### Scenario: Keyboard
- **WHEN** a keyboard user tabs to "Каталог" in the desktop menu
- **THEN** the catalog dropdown becomes visible and its links are reachable with Tab

#### Scenario: Touch tablet
- **WHEN** a user taps "Каталог" on a 1024px-wide touch screen
- **THEN** the dropdown opens, and tapping outside closes it

