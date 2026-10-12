# home-hero Specification

## Purpose
Home page hero: video block over the factory photo.

## Requirements

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
