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
- **All site content lives in `src/utils/data.ts`** (`heroData`, `aboutData.description`/`skills`, `experienceData`, `projectsData`, `contactData`, `menuData`). To change text, links, skills, jobs, or projects, edit that file — components render it. `aboutData.description` is an array of paragraphs, each an array of `{ text, highlight? }` segments (`highlight: true` renders as an accent-colored `<span>`). Project images live in `public/` and are referenced by root-relative paths (e.g. `/trello_clone.jpg`). Skill icons are `react-icons` components stored directly in the data.
- Display order = array order in `data.ts`. `ExperienceTabs` keys tabs by array index (experience entries have no id — reordering is safe); `ProjectsSection` renders `featured: true` projects first (stable sort, order otherwise preserved). Exports use `satisfies` — don't revert to `as` casts.
- Styling: per-component MUI `styled()` wrappers + `sx` props; breakpoints customized in theme (`md: 840`, not the MUI default 900 — `useMediaQuery("(max-width: 840px)")` matches it).
- Theme (`src/styles/theme.ts`): palette has **custom keys `texts` and `accent`** injected via an `as CustomPaletteSettings` cast (used as `color: "texts.main"` in sx). Font is Source Code Pro via `next/font/google`.
- MUI/Emotion SSR is wired manually: `src/utils/createEmotionCache.ts` is shared by `src/pages/_app.tsx` and `src/pages/_document.tsx` (`getInitialProps` + `extractCriticalToChunks`). Keep both in sync if touching the styling setup.
- Imports use the `@/` alias (`@/` → `src/`). `Layout.tsx` lives in `src/styles/` even though it's a component — existing quirk.

## Conventions

- Enforced by lint: double quotes, semicolons, `eqeqeq`, always-curly.
- `next.config.js` sets `images.unoptimized` (required for static export) — no Next image optimization; `next/image` is fine to use but acts as a plain img.

## Known dead code / inconsistencies (don't propagate)

- `ContactSection.tsx` exists but is **not rendered** anywhere (contact icons live in `HeroSection`) — pending a render-or-delete decision.
- `AnimatedWrapper` accepts a `variants` prop but ignores it (hardcoded `initial`/`animate`).
- Roboto is loaded twice (`@fontsource/roboto` in `_app.tsx` + Google Fonts CDN link in `_document.tsx`) yet the theme doesn't use it.
