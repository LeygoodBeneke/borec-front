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
The company name "АО "Компрессорный завод БОРЕЦ"" SHALL be bold, `#303030`, 40px with 35px line height. The tagline SHALL be regular weight, `#303030`, 24px with 22px line height, 13px below the name. The phone link SHALL be bold 26px/24px. The e-mail, "Поиск" and "Оставить запрос" links SHALL be bold 16px/24px, black, each preceded by its 18×18px icon with a 10px gap. The phone, e-mail and both actions SHALL be rendered at 0.7 opacity and SHALL NOT be underlined on hover.

#### Scenario: Name and tagline styling
- **WHEN** the header is inspected at 1920px wide
- **THEN** the name computes to Montserrat 700 40px `#303030` and the tagline to Montserrat 400 24px `#303030`

#### Scenario: Contact and action styling
- **WHEN** the header is inspected at 1920px wide
- **THEN** the phone computes to 26px bold and the e-mail, "Поиск" and "Оставить запрос" to 16px bold with an icon on the left, all at opacity 0.7

### Requirement: Header tagline text
The header tagline SHALL read "основан в 1897 году в Москве". The text "Производитель компрессорного оборудования с 1897 года" SHALL NOT appear in the header.

#### Scenario: Tagline shown
- **WHEN** any page is opened
- **THEN** the tagline under the company name reads exactly "основан в 1897 году в Москве"

### Requirement: Header contacts and actions
The phone SHALL link to `tel:+78619914554` and display "+7 (861) 991-45-54". The e-mail SHALL link to `mailto:zakaz@zavod-borec.ru`. "Поиск" SHALL navigate to `/search`. "Оставить запрос" SHALL navigate to the feedback form at `/forma-obratnoj-svyazi`. The logo SHALL navigate to `/`.

#### Scenario: Request action
- **WHEN** the user clicks "Оставить запрос"
- **THEN** the feedback form page `/forma-obratnoj-svyazi` opens

#### Scenario: Search action
- **WHEN** the user clicks "Поиск"
- **THEN** the search page `/search` opens

### Requirement: Header responsive behavior
The header SHALL follow the production breakpoints:
- at ≤1680px: logo gap 20px, name 31px, tagline 19px, right-group gap 30px;
- at ≤1440px: name 31px/29px, tagline 19px/18px with 10px top margin;
- at ≤1260px: name 26px, tagline 16px, both with 1.25 line height;
- at ≤960px: the left group and right group each take the full width and are centered, with 15px above the right group;
- at ≤640px: logo stacks above the name (10px below it), text is centered, name 22px, tagline 14px with 7px top margin.

#### Scenario: Tablet
- **WHEN** a page is viewed at 900px wide
- **THEN** the logo/name group is centered on one row and the contacts/actions group is centered on the row below

#### Scenario: Phone
- **WHEN** a page is viewed at 375px wide
- **THEN** the logo is centered above the centered name (22px) and tagline (14px) and no horizontal scrollbar appears
