# site-layout Specification

## Purpose
Shared page container width used by all page content blocks.

## Requirements

### Requirement: Shared page container width
All page content blocks (breadcrumbs, page bodies, home sections, navigation bar contents, footer contents) SHALL be laid out in a centered container whose content width is at most 1320px, with 24px horizontal padding on each side. The width SHALL be defined once as a theme token and referenced by every container, not repeated as an arbitrary value.

#### Scenario: Wide desktop viewport
- **WHEN** a page is viewed at a viewport width of 1920px
- **THEN** the page content area is 1320px wide and horizontally centered

#### Scenario: Viewport narrower than the container
- **WHEN** a page is viewed at a viewport width of 1024px
- **THEN** the content fills the viewport minus 24px padding on each side and no horizontal scrollbar appears

#### Scenario: Single source of truth
- **WHEN** the codebase is searched for the container width
- **THEN** the value appears only in the theme definition and no component uses `max-w-[88rem]` or `max-w-7xl` for the page container

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
