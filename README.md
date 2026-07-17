# Trainer J Fitness

Static Astro rebuild of Trainer J Fitness.

## Local commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Project map

- `src/pages/index.astro`: home page content and page order
- `src/components/Hero.astro`: current hero and future photo swap point
- `src/components/Header.astro`: desktop and mobile navigation
- `src/layouts/SiteLayout.astro`: metadata, icons, schema, fonts, and global shell
- `src/styles/global.css`: design system and responsive behavior
- `public/`: robots, icons, manifest, hosting headers, and public brand assets
- `assets/original/`: decoded assets and fonts from the previous live site
- `assets/brand-source/`: preserved full-resolution transparent logo and social-preview masters
- `assets/ASSET_MANIFEST.md`: source URLs, dimensions, sizes, and extraction notes
- `audit/`: raw pre-fix and final Lighthouse mobile reports
- `SITE_AUDIT.md`: full findings and release gates
- `HERO_PHOTO_BRIEF.md`: exact replacement photo request

The extracted source snapshot and checksums are preserved under `assets/`.

## GitHub Pages staging

Pushes to `main` run `.github/workflows/deploy-pages.yml` and publish the Astro build to the repository's GitHub Pages project URL. The workflow supplies the Pages subpath at build time while normal local and production builds continue to use `/`.

The staging build includes `noindex` metadata. Its form previews the success flow without sending or storing lead information.
