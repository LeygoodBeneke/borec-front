## ADDED Requirements

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
