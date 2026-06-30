# Hyperbuilt — Marketing Site

Production implementation of the Hyperbuilt landing page, built from the Claude Design
handoff bundle in `../project/`. Dark, industrial defense-tech brand for an autonomous
precision-manufacturing platform.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Plain CSS (`src/app/globals.css`) with design tokens — no UI framework
- Statically prerendered (`output: static`); deploys to any static/Node host

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app/layout.tsx` — document shell, metadata, favicons, and the pre-paint
  motion-enable script (adds `.motion` only when the visitor hasn't requested
  reduced motion, so content is never hidden without JS).
- `src/app/page.tsx` — the full single-page site (hero, moment, photo band, platform,
  operating layer, network/result, founders, footer).
- `src/app/globals.css` — all styles and design tokens (`--bg`, `--blue`, etc.).
- `src/components/Header.tsx` — fixed nav; transparent over the hero, solid black on scroll.
- `src/components/RevealController.tsx` — IntersectionObserver that fades/raises
  `.reveal` blocks into view (enhancement only).

## Media

The hero, operating-layer, and founders background videos were transcoded from the
original 4K/HD uploads (~28 MB total) down to ~3.5 MB total (720p, audio stripped,
faststart) and live in `public/uploads/`. Images are the pre-compressed `.min.jpg`
assets from the design bundle.

To swap in new footage, drop a file at the matching path in `public/uploads/`
(`hero.mp4`, `layer.mp4`, `founders.mp4`).
