# Project: Send Web to Kindle — Landing Page

## Overview

A single-page marketing site for the "Send Web articles to Kindle" Chrome extension. The page communicates the extension's core value (distraction-free reading on Kindle from any web article), walks visitors through how it works, and drives installs via the Chrome Web Store CTA. It is optimised for SEO and loads as a fully static site.

## Tech Stack

- **Framework**: Next.js 16 (App Router, `output: 'export'` for static HTML)
- **Styling**: Tailwind CSS v4 (already configured)
- **Language**: TypeScript
- **Fonts**: Google Fonts via `next/font` — `Lora` (serif, headings/reading aesthetic) + `Inter` (sans-serif, body/UI)
- **Icons**: Inline SVG — no icon library dependency
- **SEO**: Next.js `generateMetadata`, OpenGraph tags, JSON-LD structured data (SoftwareApplication schema)
- **Deployment**: Static export (`out/` directory), host-agnostic

## Design System

### Palette (warm/cream Kindle aesthetic)

| Token | Value | Usage |
|-------|-------|-------|
| `cream` | `#FAF7F2` | Page background |
| `parchment` | `#F0EAD6` | Card/section backgrounds |
| `ink` | `#1A1208` | Primary text |
| `ink-light` | `#4A3F2F` | Secondary text |
| `amber` | `#C27B2C` | Primary CTA, accents |
| `amber-dark` | `#A0621E` | CTA hover |
| `sage` | `#5C7A5E` | Trust/privacy accent |
| `border` | `#DDD3BB` | Dividers, card borders |

### Typography

- Headings: `Lora` serif
- Body/UI: `Inter` sans-serif
- Code snippets: `font-mono`

## Page Sections (top → bottom)

1. **Navbar** — Logo/name + single CTA button (Add to Chrome)
2. **Hero** — Headline, subheadline, primary CTA, secondary "see how it works" anchor link, hero illustration (open book / browser-to-kindle visual in SVG)
3. **Social Proof Bar** — "Fully local · No server · No account required · Open source"
4. **Features Grid** — 6 feature cards (icon + title + 1-line description)
5. **How It Works** — 4-step numbered flow (visual steps with short descriptions)
6. **Kindle Setup** — 5-step numbered instructions for Gmail+Kindle delivery, styled as a setup card
7. **Privacy Section** — 3-column trust grid (Local processing · No data collection · Minimal permissions)
8. **CTA Banner** — Final conversion section with headline + button
9. **Footer** — Name, privacy policy link, CWS link, copyright

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, globals
  page.tsx            # Single page — composes all sections
  globals.css         # Tailwind base + CSS custom properties
components/
  sections/
    Navbar.tsx
    Hero.tsx
    SocialProofBar.tsx
    FeaturesGrid.tsx
    HowItWorks.tsx
    KindleSetup.tsx
    PrivacySection.tsx
    CtaBanner.tsx
    Footer.tsx
  ui/
    Button.tsx        # Reusable amber CTA button
    FeatureCard.tsx   # Icon + title + description card
    StepItem.tsx      # Numbered step for How It Works / Kindle Setup
docs/
  content.md          # Source content (read-only reference)
  spec.md             # This file
next.config.ts        # Must add output: 'export'
```

## SEO Targets

- **Title**: `Send Web to Kindle — Save Articles as EPUB from Chrome`
- **Description**: `A Chrome extension that turns any web article into an EPUB and sends it to your Kindle via Gmail. Fully local, no server, no account required.`
- **OG image**: `/og-image.png` (placeholder — 1200×630, generated separately)
- **JSON-LD**: `SoftwareApplication` schema with `operatingSystem: Chrome`, `applicationCategory: BrowserApplication`
- **Canonical**: Set to production URL once known; leave relative for now

## Implementation Checklist

- [x] Task 1: Configure `next.config.ts` with `output: 'export'` and update `app/globals.css` with CSS custom properties (palette tokens)
- [x] Task 2: Update `app/layout.tsx` — load Lora + Inter fonts, set base metadata (title, description, OG tags, JSON-LD)
- [x] Task 3: Build `components/ui/Button.tsx`, `components/ui/FeatureCard.tsx`, `components/ui/StepItem.tsx`
- [x] Task 4: Build `components/sections/Navbar.tsx`
- [x] Task 5: Build `components/sections/Hero.tsx` with inline SVG illustration
- [x] Task 6: Build `components/sections/SocialProofBar.tsx`
- [x] Task 7: Build `components/sections/FeaturesGrid.tsx` (6 cards with inline SVG icons)
- [x] Task 8: Build `components/sections/HowItWorks.tsx` (4-step flow)
- [x] Task 9: Build `components/sections/KindleSetup.tsx` (5-step Kindle delivery setup)
- [x] Task 10: Build `components/sections/PrivacySection.tsx` (3-column trust grid)
- [x] Task 11: Build `components/sections/CtaBanner.tsx`
- [x] Task 12: Build `components/sections/Footer.tsx`
- [x] Task 13: Compose all sections in `app/page.tsx`
- [x] Task 14: Run `next build` to verify clean static export; fix any issues
