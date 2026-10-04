## ADDED Requirements

### Requirement: Address notice above the menu on the home page
On the home page (`/`) only, an address notice SHALL be rendered between the header and the horizontal main menu. It SHALL NOT be rendered on any other page and SHALL NOT also appear in its old position below the video.

#### Scenario: Home page
- **WHEN** the user opens `/`
- **THEN** the notice is shown directly above the teal main menu, and the section below the video starts with the catalog icons

#### Scenario: Other pages
- **WHEN** the user opens `/kontakty`
- **THEN** no address notice is shown above the menu

### Requirement: Address notice text
The notice SHALL read exactly: "С 2008 года производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе, 14/2."

#### Scenario: Text replaced
- **WHEN** the home page is rendered
- **THEN** the notice shows the new text and the phrase "информирует всех заинтересованных лиц" appears nowhere on the page

### Requirement: Address notice styling
The notice SHALL match the production rendering: background `#0066FF`, white text, 20px font size (16px at ≤1024px, 15px at ≤768px), line height 1.2, 12px vertical and 15px horizontal padding, 5px border radius, left-aligned, placed inside the shared page container.

#### Scenario: Desktop styling
- **WHEN** the home page is inspected at 1920px wide
- **THEN** the notice has a `#0066FF` background, white 20px text and 5px rounded corners

### Requirement: Video hero layout
The home hero SHALL show the factory photo (`/assets/d/bg.jpg`) as a cover background overlaid with a left-to-right teal gradient from `rgba(0,156,130,0.9)` to `rgba(0,156,130,0.4)`, with 20px padding. The embedded Rutube video SHALL be on the left side at a fixed width of 639px (410px at ≤1440px, at most 40% at ≤1024px), 16:9 aspect ratio and 5px rounded corners. Above 1440px the video SHALL align to the left edge of the hero (20px from the viewport edge); at ≤1440px it SHALL align to the left edge of a centered 1214px column. At ≤768px the video SHALL take the full width.

#### Scenario: Wide desktop
- **WHEN** the home page is viewed at 1920px wide
- **THEN** the video is 639px wide and its left edge is 20px from the viewport's left edge

#### Scenario: Laptop
- **WHEN** the home page is viewed at 1366px wide
- **THEN** the video is 410px wide and aligned to the left of a centered 1214px column

#### Scenario: Mobile
- **WHEN** the home page is viewed at 375px wide
- **THEN** the video spans the hero width minus padding and keeps a 16:9 ratio
