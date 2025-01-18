## fonts
Serif fonts are used
- Copernicus
- Copernicus Condensed

Problem
- font not available via cdn
- font trial available but ttf / otf extension
- use license if commercial product of font

Solution
- use similar serif fonts (cdn) OR
- convert ttf to woff/woff2
- ttf otf don't scale well with web and increase the bundle size
- https://transfonter.org/ can convert to woff/ woff2

## product listing (interesting usecase)

- for chimney and light products we have 4 col grid and 5 col grid
- we can use common component for both cases by passing `col` as prop