# AGENTS.md

Personal portfolio for **Miguel González** (miguelgnz.dev) — a single-page static site: hero, highlights, selected work (CC Bot Tracker case study + Tattoo Studio), AI workflow, experience timeline + stack, contact footer. Minimal editorial dark theme (`#09090b` background, one accent `#8ea8ff`), Space Grotesk headings, Inter body, JetBrains Mono details. Deployed on Vercel.

Stack: Next.js 16 (**App Router**) + React 19 + TypeScript (strict) + Tailwind CSS v4. No UI kit, no animation library. Content is data-driven from one file (see below).

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`); **Prettier runs as an ESLint plugin and violations are errors** (no `.prettierrc` — Prettier defaults apply). `npx prettier --write src` fixes formatting.
- `npm run build` — static export to `out/` (`output: "export"` in `next.config.ts`)
- `npm run preview` — serves `out/` (`next start` does not work with static export)
- `npm run resume` — renders `resume/cv.html` to `public/resume.pdf` with headless Chrome (macOS path by default; override with `CHROME_BIN`). The CV is one US Letter page: after editing, check the page count before committing. Keep its content consistent with `src/utils/data.ts`.
- `npm run resume:docx` — builds the Word version from `resume/make-docx.js` into `resume/dist/` (git-ignored). Its text mirrors `resume/cv.html`: update both together.
- No tests, no CI. Verify changes with `npm run lint` + `npm run build`, then look at the page (desktop and 390px mobile).

## Architecture

- `src/app/layout.tsx` — fonts (`next/font/google`, exposed as CSS vars), site metadata (title, description, Open Graph/Twitter pointing at `/og.png`, favicons), Person JSON-LD.
- `src/app/page.tsx` — the home page: `Navbar`, `Hero`, `Highlights`, `SelectedWork`, `AiWorkflow`, `Experience`, `Footer` (all in `src/components/`). Anchor nav via section ids (`#work`, `#ai`, `#experience`, `#contact`).
- `src/app/og.png/route.tsx` — Open Graph image generated at build time with `next/og` (a route, not `opengraph-image.tsx`, so the exported file keeps its `.png` extension). `sitemap.ts` and `robots.ts` also live in `src/app` and need `export const dynamic = "force-static"`.
- `src/app/cc-bot/` and `src/app/cc-bot/privacy/` — Spanish info + privacy pages for the CC Bot Tracker Telegram bot. **They back the bot's Google OAuth verification: keep them reachable, `noindex`, and don't restyle them with the portfolio theme.** They use `CcBotPage` + `CcBotPage.module.css` and `ccBotMetadata()` for metadata.
- **All site content lives in `src/utils/data.ts`** (`siteData`, `contactData`, `navItems`, `highlightsData`, `caseStudyData`, `projectsData`, `aiWorkflowData`, `experienceData`, `stackData`). To change text, links, numbers, jobs, projects or skills, edit that file — components render it. Display order = array order. Icons are `react-icons` components stored in the data (`lu` = Lucide UI icons, `si`/`fa6` = brand logos). Exports use `satisfies` — don't revert to `as` casts. Keep every number in `highlightsData` verifiable.
- Images live in `public/` and are referenced by root-relative paths; prefer WebP for screenshots. The Tattoo Studio card uses a full-page capture (`public/mdt-full.webp`, captured from the live redesigned site with the floating WhatsApp button hidden) that auto-scrolls in `BrowserFrame` via the `page-scroll` CSS (pauses on hover/button, static with reduced motion). Avatar source art (not deployed) lives in `design/avatar/`. The avatar is `public/miguel-pixel-avatar-v2/navbar/miguel-head-*.png` (pixel art: always render with the `pixelated` utility).
- Styling: Tailwind utility classes in the components. Design tokens are defined in `src/app/globals.css` under `@theme` (`bg`, `surface*`, `line*`, `fg*`, `muted`, `subtle`, `accent`, `font-display`, `font-mono`) — use them (`bg-surface`, `text-muted`, `border-line-strong`) instead of raw hex values. Custom utilities: `grid-backdrop`, `dot-backdrop`, `pixelated`, `reveal`.
- Scroll reveal is CSS only (`Reveal` component → `.reveal` with `animation-timeline: view()`). Content must stay visible without JavaScript and with `prefers-reduced-motion`; don't reintroduce JS-driven `opacity: 0` initial states.
- Imports use the `@/` alias (`@/` → `src/`).

## Conventions

- Enforced by lint: double quotes, semicolons, `eqeqeq`, always-curly.
- `next.config.ts` sets `images.unoptimized` (required for static export) — `next/image` is fine to use but acts as a plain img.
- Accessibility: icon-only links need `aria-label`; decorative icons get `aria-hidden="true"`; keep text contrast at AA on the dark background (`text-muted` is the lightest grey allowed for body copy).

## Media notes

- The CC Bot Tracker case study shows a real screen recording (`public/media/cc-bot-demo.{mp4,webm}` + poster) of a demo bot seeded with synthetic data (bot repo: `docs/DEMO.md`). `DemoVideo` only plays while on screen, never autoplays with reduced motion and has a pause button — keep those behaviours. Re-encode new recordings to ~600px wide, muted, H.264 + VP9, under ~1 MB each.
