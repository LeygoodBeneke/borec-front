## ADDED Requirements

### Requirement: Navigation bar height and font size
The horizontal main navigation bar SHALL have a minimum height of 52px (up from its previous implicit height) and its nav item labels SHALL render at 16px font size. The bar SHALL remain teal (`#009C82` or the existing brand token) and all other nav bar styles (active state, dropdown behavior, spacing) remain unchanged.

#### Scenario: Nav bar height on desktop
- **WHEN** the home page is viewed at 1920px wide
- **THEN** the teal navigation bar is at least 52px tall and nav item labels are 16px

#### Scenario: Nav bar height at laptop
- **WHEN** the home page is viewed at 1366px wide
- **THEN** the teal navigation bar is at least 52px tall and nav item labels are 16px

### Requirement: Spacing between navigation bar and hero section
On the home page, there SHALL be a visible gap of at least 16px between the bottom edge of the horizontal navigation bar and the top edge of the hero/video section, matching the visual separation seen on the reference site.

#### Scenario: Gap visible on desktop
- **WHEN** the home page is viewed at 1920px wide
- **THEN** there is a visible white/background gap of at least 16px between the nav bar and the hero image

#### Scenario: Gap visible on laptop
- **WHEN** the home page is viewed at 1366px wide
- **THEN** the gap between nav bar and hero is at least 16px
