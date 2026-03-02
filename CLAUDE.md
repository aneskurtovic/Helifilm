# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (use NODE_OPTIONS="--max-old-space-size=4096" on Windows)
npm run start        # Start production server
npm run lint         # ESLint
```

## Architecture

Single-page scrolling portfolio site for Helifilm Produkcija (drone videography company, Sarajevo). Built with Next.js 14 App Router, Tailwind CSS, Framer Motion, and TypeScript.

**Page composition** (`src/app/page.tsx`): Navbar → Hero → About → Services → Portfolio → Equipment → Testimonials → Contact → Footer → BackToTop. All sections are client components using `"use client"` for animations and interactivity.

**Bilingual system**: `LanguageContext` provides EN/BS translations via `useLanguage()` hook. All UI text lives in `src/data/translations.ts` as nested `en`/`bs` objects. Language persisted in localStorage (`"helifilm-lang"`).

**Data layer**: Static data files in `src/data/` — `translations.ts`, `portfolio.ts` (YouTube videos), `services.ts` (SVG icon paths), `equipment.ts` (bilingual descriptions). No CMS or API.

**Animations**: Shared Framer Motion variants in `src/lib/animations.ts`. Components use `whileInView` with `viewport={{ once: true }}` for scroll-triggered reveals. Hero has parallax zoom via `useScroll`/`useTransform`.

## Color Scheme (Bosnian Lily Theme)

| Role | Hex | Usage |
|------|-----|-------|
| Background dark | `#0a0f1a` | Primary bg, hero |
| Background light | `#111827` | Alternating sections (Services, Equipment, Contact) |
| Gold accent | `#D4A418` | All interactive elements, buttons, headings, dividers, hover states |
| Blue accent | `#1e3a8a` | Border tints, background glows, subtle accents |
| Footer dark | `#070b14` | Footer background |

Sections alternate between `#0a0f1a` and `#111827` backgrounds. All accent colors, hover states, and interactive elements use the golden `#D4A418`. The blue `#1e3a8a` is used subtly for borders and ambient glows.

## Key Patterns

- **Path alias**: `@/*` maps to `./src/*`
- **Fonts**: Inter (body via `--font-inter`), Montserrat (headings via `--font-montserrat`) — loaded from Google Fonts in layout.tsx
- **Portfolio thumbnails**: Auto-generated from YouTube via `getYoutubeThumbnail(youtubeId)` — no local image files needed
- **Missing images**: About photo, equipment images use styled gradient placeholders with SVG icons (intentional design, not broken)
- **Contact form**: Visual only — `handleSubmit` shows success message but doesn't send data anywhere yet
- **Navbar scroll-spy**: Tracks current section via `getBoundingClientRect()` and highlights with animated underline (`layoutId="activeNav"`)

## Content Updates

To add/change portfolio videos: edit `src/data/portfolio.ts` — each item needs a `youtubeId`, `title`, `description`, and `category` (aerial | commercial | events | realEstate).

To update translations: edit `src/data/translations.ts` — both `en` and `bs` keys must have matching structure.

Contact info (email, phone) is hardcoded in `src/components/Contact.tsx` and `src/components/Footer.tsx`.
