# Website-Template (nextjs-sanity-starter)

## Stack
- **Framework:** Next.js 16 App Router, React 19, TypeScript
- **Styling:** Tailwind CSS 4 mit CSS Custom Properties
- **UI:** shadcn/ui (installiert), Framer Motion (installiert), Phosphor Icons React
- **CMS:** Sanity (optional, Client in src/lib/sanity.ts)
- **Fonts:** Lokal gehostet in public/fonts/ (DSGVO-konform, kein CDN)
- **Port:** 3000 (NICHT 3002 — das ist das AgencyOS-Dashboard)

## Design-System
- **Profiles:** src/design/profiles.ts — 12 Fonts x 12 Farben x 4 Layouts x 3 Spacings x 4 Radius x 3 Icon-Styles
- **Theme:** src/design/apply-theme.ts generiert CSS Custom Properties
- **Config:** src/config/design.ts wählt das aktive Profil
- **Tokens:** Farben via `bg-primary`, `text-foreground`, `bg-card` etc. — NIEMALS hardcodierte Farben
- **Typoskala:** 1.25 Ratio (Minor Third) — display > title > subtitle > body-lg > base
- **Referenz:** specs/tokens.md

## Sections
- **30 Komponenten** in src/sections/[typ]/[Variante].tsx
- **React Server Components** (default) — `'use client'` nur wo interaktiv nötig
- **Import:** `import X from '@/sections/[typ]/[Variante]'`
- **Referenz:** specs/sections.md
- **Preview:** /preview zeigt alle Sections mit Demo-Daten

## Dateien die AgencyOS beim Build überschreibt
- `src/config.ts` — Kundendaten
- `src/config/design.ts` — Design-Profil
- `app/page.tsx` — Homepage mit Sections

## Regeln
- Keine hardcodierten Farben (kein text-white, bg-gray-*, text-neutral-*)
- Keine Inline-Styles für Farben
- tailwind.config.ts NICHT ändern
- Fonts lokal — kein Google Fonts CDN
- Deutsche Sprache für UI-Texte, Englisch für Code
