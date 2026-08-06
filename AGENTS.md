# AGENTS.md

Personal software developer portfolio for **Miguel Gnz** (miguelgnz.com) — a single-page static site presenting his hero intro, about/tech-stack, work experience, and project showcase. Dark navy theme (`#011627`), green/coral accents, monospace typography (Source Code Pro). Deployed on Vercel.

Stack: Next.js 13 (**pages router**) + TypeScript (strict) + MUI v5 with Emotion + framer-motion. Content is data-driven from one file (see below).

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint; **Prettier runs as an ESLint plugin and violations are errors** (no separate format script, no `.prettierrc` — Prettier defaults apply)
- `npm run build` — static export to `out/` (`output: "export"` in `next.config.js`)
- `npm run start` does **not** work with static export — preview with `npx serve out`
- No tests, no CI. Verify changes with `npm run lint` + `npm run build`.

## Architecture

- Single page: `src/pages/index.tsx` → `src/views/HomePage.tsx` → `src/styles/Layout.tsx` (Navbar/Footer) + `src/components/HomePageBody.tsx` → section components (`HeroSection`, `AboutSection`, `ExperienceSection`/`ExperienceTabs`, `ProjectsSection`/`ProjectCard`). Anchor nav via `id` divs (`#home`, `#about`, `#experience`, `#projects`) and `scrollBehavior: smooth` on `<html>`.
- **All site content lives in `src/utils/data.ts`** (`heroData`, `aboutData.skills`, `experienceData`, `projectsData`, `contactData`, `menuData`). To change text, links, skills, jobs, or projects, edit that file — components render it. Project images live in `public/` and are referenced by root-relative paths (e.g. `/trello_clone.jpg`). Skill icons are `react-icons` components stored directly in the data.
- Display order = array order in `data.ts` (ids are not sorted — e.g. `menuData` ids are 1,3,2 on purpose). Keep ids unique when adding entries; `ExperienceTabs` uses `exp.id` as the tab index.
- Styling: per-component MUI `styled()` wrappers + `sx` props; breakpoints customized in theme (`md: 840`, not the MUI default 900 — `useMediaQuery("(max-width: 840px)")` matches it).
- Theme (`src/styles/theme.ts`): palette has **custom keys `texts` and `accent`** injected via an `as CustomPaletteSettings` cast (used as `color: "texts.main"` in sx). Font is Source Code Pro via `next/font/google`.
- MUI/Emotion SSR is wired manually: `src/utils/createEmotionCache.ts` is shared by `src/pages/_app.tsx` and `src/pages/_document.tsx` (`getInitialProps` + `extractCriticalToChunks`). Keep both in sync if touching the styling setup.
- Imports use the `@/` alias (`@/` → `src/`). `Layout.tsx` lives in `src/styles/` even though it's a component — existing quirk.

## Conventions

- Enforced by lint: double quotes, semicolons, `eqeqeq`, always-curly.
- `next.config.js` sets `images.unoptimized` (required for static export) — no Next image optimization; `next/image` is fine to use but acts as a plain img.

## Known dead code / inconsistencies (don't propagate)

- `src/styles/globals.css` is **never imported** (create-next-app leftover); `sanitize-html` (+ its types) is a dependency but unused — `AboutSection` has an orphaned `sanitizeHtmlOptions` object.
- `AboutSection` **hardcodes** its description paragraphs instead of rendering `aboutData.description` (which contains `<span>` markup intended for sanitize-html). The hardcoded copy has drifted from the data and contains stray `+` characters.
- `Spinner.tsx` and the `SpinnerWrapper` styled-component in `pages/index.tsx` are unused; `ContactSection` is imported in `HomePageBody` but not rendered (contact icons live in `HeroSection`).
- `robots.txt` is at the repo root, so it is **not** deployed — only `public/` is copied to `out/`.
- `AnimatedWrapper` accepts a `variants` prop but ignores it (hardcoded `initial`/`animate`).
- Roboto is loaded twice (`@fontsource/roboto` in `_app.tsx` + Google Fonts CDN link in `_document.tsx`) yet the theme doesn't use it. Page `<meta description>` sits in `_document.tsx` with an invalid `title` attribute instead of in the page's `<Head>`.
