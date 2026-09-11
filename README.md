# Loam Landing Page

A two-page marketing site for Loam (a coming-soon home page and an About
page), built with React + Vite. No router library — `src/router.jsx` is a
~40-line pathname router.

## Structure

```
loam-landing/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React root + route switch (/ → Home, /about → About)
    ├── router.jsx          # tiny client-side router (pushState + popstate)
    ├── home.jsx            # coming-soon hero, teaser post, invite waitlist
    ├── about.jsx           # pillars, demo feed, profile mock, what's next, join
    ├── LoamLanding.css     # all styles; only ever references theme vars
    ├── theme.js            # design tokens, mirrors the mobile app's lib/theme.js
    ├── emojis.jsx          # <Emoji name="…"/> from assets/emojis/*.svg
    ├── components/
    │   ├── brand.jsx       # shared: logo marks, BlobCard, Avatar, Reactions, CARD_COLORS
    │   └── nav.jsx         # SiteNav / SiteFooter used by both pages
    ├── assets/emojis/      # tone-2 reaction SVGs
    └── images/
```

Import direction is one-way: `theme` → `brand` → `nav` → pages. Pages never
import from each other.

## Getting started

```bash
npm install
npm run dev
```

## Building

```bash
npm run build      # outputs dist/
npm run preview
```

## Deploying

The site uses real paths (`/` and `/about`), so the host needs to serve
`index.html` for any unknown path (an "SPA fallback"). Vite's dev server
does this already. On Netlify add a `_redirects` file containing
`/* /index.html 200`; on Vercel a `vercel.json` rewrite; on GitHub Pages
copy `index.html` to `404.html` after building.

## Notes

- The waitlist form on the home page only flips to a "noted" state right
  now — `submit()` in `home.jsx` is the place to post to Supabase.
- Motion respects `prefers-reduced-motion`.
- Fonts (Bricolage Grotesque, Host Grotesk) load via the `@import` at the
  top of `LoamLanding.css`; the same URL is exported from `theme.js` as
  `googleFontsHref` if you'd rather `<link>` it from `index.html`.
