# stitch.scot

The website of Stitch, an Alaskan Malamute. A static [Astro](https://astro.build) site.

- `/` — homepage.
- `/walker` — a one-page handover sheet for the dog walker, designed to print
  on a single A4 page in black and white.

## Editing

- Sheet content and Stitch's basic facts (including his age) live in
  `src/data/handover.ts`. Both pages read from it.
- The homepage photo is `src/assets/stitch-hero.jpg`; replace that file to
  change it.

The site is public: keep home address, personal phone numbers and house access
details out of the repository.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the site to `dist/` |
| `npm run check` | Type-check with `astro check` |
| `npm run preview` | Preview the built site |

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.
