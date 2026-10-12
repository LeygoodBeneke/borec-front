## Why

The site header and homepage layout need visual refinements to better match the reference site (zavod-borec.ru): the header subtitle text needs adjustment, an unwanted blue-background banner must be removed, the nav bar needs more visual weight, and a green color overlay on the hero image/video should be eliminated.

## What Changes

- Reduce font size of "основан в 1897 году в Москве" subtitle in site header
- Add a second line of same font/size below: "с 2008 года производственная площадка находится по адресу: г. Краснодар, Ростовское шоссе, 14/2" (wraps to two lines if needed)
- Remove the blue-background text block entirely (text and background)
- Make horizontal navigation bar taller and increase font size of nav items
- Add spacing between the navigation bar and the video/hero section below it
- Remove green color overlay from the hero image and video

## Capabilities

### New Capabilities

*(none — all changes are refinements to existing capabilities)*

### Modified Capabilities

- `site-header`: subtitle text updated (second line added, font size reduced)
- `site-layout`: nav bar height and font size increased; spacing added below nav; blue-background block removed
- `home-hero`: green overlay removed from hero image and video

## Impact

- Header component and its CSS
- Navigation bar component and its CSS
- Homepage hero/video section CSS
- Blue-background promotional/info block (markup + styles to be deleted)
