## MODIFIED Requirements

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
