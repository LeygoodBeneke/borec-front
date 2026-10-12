## Context

The site header currently shows the tagline "основан в 1897 году в Москве" at 24px. A second address line needs to be added below it at the same size, but the current 24px is too large to fit two lines without crowding the header. The blue-background address notice (spec: `home-hero`, `#0066FF`) was a temporary placement that must now be removed entirely. The teal horizontal nav bar lacks padding/height and the green gradient overlay on the hero image was part of the original design but is no longer wanted.

All five changes are CSS/markup-only; no data model, routing, or API changes are involved.

## Goals / Non-Goals

**Goals:**
- Reduce tagline font size so two lines fit comfortably in the header's left group
- Add the second address line directly below the tagline, same weight and size
- Delete the blue `#0066FF` address notice from the home page (DOM node + styles)
- Increase nav bar height and nav item font size
- Add top margin/padding between nav bar and hero section
- Remove the teal/green gradient overlay from the hero background

**Non-Goals:**
- Changing the hero video layout, dimensions, or border radius
- Altering any page other than the home page for the hero/notice changes
- Changing header behavior on mobile (≤960px compact bar is out of scope)
- Updating any content other than the two header lines

## Decisions

**1. Tagline font size reduction**
Drop from 24px to ~18–20px (exact value chosen during implementation to maintain visual balance with the 40px company name). The second address line uses the same computed size and weight (regular/400). Both lines share the same `<p>` or a new `<span>` block inside the existing tagline container, so no structural refactor is needed.

**2. Blue notice removal**
The `home-hero` spec Requirement "Address notice styling" and "Address notice text" and "Address notice above the menu" are superseded. The DOM node and its wrapper are deleted outright; no redirect or migration is needed.

**3. Nav bar height and font size**
Increase the nav bar's `min-height` (or padding) by ~8–12px and bump nav item `font-size` from its current value by ~2px. Exact values to be confirmed against the reference screenshot at zavod-borec.ru.

**4. Spacing below nav bar**
Add `margin-top` or `padding-top` to the hero/video section to match the gap visible on the reference site. A value in the range 12–20px is expected.

**5. Green overlay removal**
The hero background gradient `rgba(0,156,130,0.9)` → `rgba(0,156,130,0.4)` is removed. The factory photo `/assets/d/bg.jpg` becomes the sole background (cover, centered). If a subtle dark scrim is needed for video contrast it can be added as a neutral `rgba(0,0,0,0.2)`, but the teal color is gone.

## Risks / Trade-offs

- [Tagline wrapping] Reducing font size to fit two lines may cause the single-line tagline to look small at narrow breakpoints → verify at 1260px and 1024px
- [Green overlay removal] The video iframe may lose contrast against the photo → mitigate with a neutral dark scrim if needed
- [Nav height increase] Could push content down on very short viewports → test at 768px and confirm no overflow
