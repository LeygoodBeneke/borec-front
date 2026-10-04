# responsive-content Specification

## Purpose
Rules that keep every page, including legacy HTML content, readable on screens from 320px wide without horizontal page scroll.

## Requirements
### Requirement: No horizontal page scroll
Every routed page SHALL render without horizontal page scrolling at viewport widths from 320px up. The document's scroll width SHALL NOT exceed the viewport width.

#### Scenario: Narrowest phone
- **WHEN** any routed page is viewed at 320px wide
- **THEN** `document.documentElement.scrollWidth` equals the viewport width

#### Scenario: Model page with spec tables
- **WHEN** a piston compressor model page under `/kompressory/porshnevye-kompressory/` is viewed at 375px wide
- **THEN** the page does not scroll horizontally

### Requirement: Images in legacy content scale down
Images inside legacy HTML content SHALL never be wider than their container and SHALL keep their aspect ratio, even when they carry inline `width`/`height` attributes or styles. At ≤640px, floated images SHALL stop floating and be centered on their own line.

#### Scenario: Wide inline-width image
- **WHEN** a content image with inline `width: 663px` is shown at 375px wide
- **THEN** the image is no wider than the content column and is not distorted

#### Scenario: Floated image on phone
- **WHEN** the "Оппозитный компрессор" image (floated right) is shown at 375px wide
- **THEN** it is displayed on its own line, centered, with text below it

### Requirement: Wide tables scroll inside their box
Tables inside legacy HTML content that are wider than the content column SHALL scroll horizontally within their own box, ignoring inline fixed widths for the box size, while the page itself does not scroll horizontally.

#### Scenario: Spec table on phone
- **WHEN** a specification table with inline `width: 677px` is shown at 375px wide
- **THEN** the table box fits the content column and the user can swipe the table sideways to see all columns

### Requirement: Embeds fit the screen
Embedded iframes (video, map) SHALL never be wider than their container.

#### Scenario: Map on contacts page
- **WHEN** `/kontakty` is viewed at 360px wide
- **THEN** the map is no wider than the content column

### Requirement: Footer navigation on phones
At ≤640px the footer navigation SHALL be laid out as a two-column list of links with tap targets at least 44px tall.

#### Scenario: Footer on phone
- **WHEN** the footer is viewed at 375px wide
- **THEN** the six navigation links appear in two columns of three, each at least 44px tall

