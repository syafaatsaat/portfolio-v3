# Portfolio v3

My personal portfolio site, the third version: one set of content, presented in two very different themes.

- **Bento × Bauhaus** (the main theme): a bold grid of colour blocks and geometric shapes.
- **SYAF_OS** (the easter egg): a Cybercore × Y2K desktop, with every section as an app window and a taskbar for navigation.

Built with React 19 and Vite, with no UI or routing libraries. Developed with Claude Code.

## Features

- **Two themes, one source of truth.** All content lives in [`src/data/profile.js`](src/data/profile.js); each theme only decides how to present it. Themes are lazy-loaded, so visitors download only the one they see.
- **Projects page** at `/projects` with every project; the home page shows the featured ones. Web apps link to their live site and source, data pipelines to their source, and school games open their gameplay video in a pop-up.
- **Easter eggs.** The power button on the Bauhaus hero boots SYAF_OS, and past versions of this portfolio are hidden in both themes.
- **Accessible and responsive.** Semantic landmarks, keyboard-friendly dialogs, `prefers-reduced-motion` support, and layouts tuned from 320px phones up to wide desktops.

## Tech

- React 19, Vite
- Plain CSS with native nesting, one stylesheet folder per theme
- A small hand-written router on the History API (`src/states/hooks/useRoute.js`)
- Theme choice saved to `localStorage`; `?theme=cyber` opens the site straight into SYAF_OS
- Deployed on Vercel (`vercel.json` serves `index.html` for every route)

## Project structure

```
src/
  data/          profile.js (all content) and small data models
  states/        theme registry and store, storage adapters, hooks
  components/
    shared/      pieces both themes use (links, router link, video player)
    bauhaus/     Bauhaus theme: site, sections, primitives
    cyber/       SYAF_OS theme: site, sections, primitives
  styles/        base.css plus one folder per theme
public/
  projects/      project screenshots and thumbnails (800×500 WebP)
  resume/        CV (PDF)
```

## Running locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # ESLint
```

## Adding a project

Add an entry to the `projects` array in `src/data/profile.js`. The comment above the array explains each field (`kind`, `motif`, `preview`, `video`, `featured`, `builtWithClaude`). Put its preview image in `public/projects/` at 800×500.
