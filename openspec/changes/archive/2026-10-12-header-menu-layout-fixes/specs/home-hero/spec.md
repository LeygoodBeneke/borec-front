## REMOVED Requirements

### Requirement: Address notice above the menu on the home page
**Reason**: The address information is now displayed directly in the site header tagline; a separate notice block is redundant and visually clutters the page.
**Migration**: No migration needed. The notice DOM node and its wrapper are deleted. The address text is now in the header.

### Requirement: Address notice text
**Reason**: Superseded by the header tagline change. The address is shown in the header.
**Migration**: No migration needed.

### Requirement: Address notice styling
**Reason**: The blue `#0066FF` notice block is removed entirely. No replacement component is needed.
**Migration**: Remove the component and all associated CSS. No redirect or fallback is required.

## MODIFIED Requirements

### Requirement: Video hero layout
The home hero SHALL show the factory photo (`/assets/d/bg.jpg`) as a cover background with no color overlay. The embedded Rutube video SHALL be on the left side at a fixed width of 639px (410px at ≤1440px, at most 40% at ≤1024px), 16:9 aspect ratio and 5px rounded corners. Above 1440px the video SHALL align to the left edge of the hero (20px from the viewport edge); at ≤1440px it SHALL align to the left edge of a centered 1214px column. At ≤768px the video SHALL take the full width. If contrast between the video and the background requires a scrim, a neutral dark overlay `rgba(0,0,0,0.2)` MAY be applied; the teal/green color SHALL NOT appear.

#### Scenario: Wide desktop — no green overlay
- **WHEN** the home page is viewed at 1920px wide
- **THEN** the hero background is the factory photo with no teal or green tint visible

#### Scenario: Laptop
- **WHEN** the home page is viewed at 1366px wide
- **THEN** the video is 410px wide and aligned to the left of a centered 1214px column

#### Scenario: Mobile
- **WHEN** the home page is viewed at 375px wide
- **THEN** the video spans the hero width minus padding and keeps a 16:9 ratio
