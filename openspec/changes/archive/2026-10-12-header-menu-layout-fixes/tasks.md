## 1. Header tagline update

- [x] 1.1 Locate the header tagline element in the component (search for "основан в 1897 году в Москве")
- [x] 1.2 Reduce tagline font size from 24px to 20px (update CSS rule or Tailwind class)
- [x] 1.3 Add second tagline line: "с 2008 года производственная площадка находится по адресу: г. Краснодар, Ростовское шоссе, 14/2" with same font size and weight
- [x] 1.4 Verify both lines render correctly at 1920px, 1366px and 1260px without overflow

## 2. Remove blue address notice

- [x] 2.1 Find and delete the blue `#0066FF` address notice DOM node and its wrapper from the home page template
- [x] 2.2 Remove associated CSS rules for the notice block
- [x] 2.3 Verify no trace of the blue block or its styles remains on the home page

## 3. Navigation bar height and font size

- [x] 3.1 Find the teal horizontal nav bar component and its CSS
- [x] 3.2 Increase nav bar `min-height` or vertical padding so total height is at least 52px
- [x] 3.3 Increase nav item label font size to 16px
- [x] 3.4 Verify nav bar appearance at 1920px and 1366px

## 4. Spacing below navigation bar

- [x] 4.1 Add `margin-top` or `padding-top` of at least 16px to the hero/video section on the home page
- [x] 4.2 Verify the gap is visible between the nav bar and the hero at 1920px and 1366px

## 5. Remove green overlay from hero

- [x] 5.1 Find the hero background CSS gradient (`rgba(0,156,130` or similar teal value)
- [x] 5.2 Remove the teal gradient, leaving the factory photo as the sole background
- [x] 5.3 Check video contrast against the photo; add `rgba(0,0,0,0.2)` scrim only if video is unreadable
- [x] 5.4 Verify no green/teal tint visible on hero at 1920px and 375px
