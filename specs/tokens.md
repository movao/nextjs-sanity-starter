# Design Token Reference

> This file documents the complete design token system. All sections use these tokens exclusively.
> NEVER use hardcoded colors, font sizes, or spacing values. Always use the token classes below.

---

## CSS Custom Properties (set by apply-theme.ts)

These are generated from the active design profile and injected into `:root`:

### Colors

| Custom Property         | Purpose                                | Tailwind Class       |
|-------------------------|----------------------------------------|----------------------|
| `--color-background`    | Page background                        | `bg-background`      |
| `--color-foreground`    | Primary text color                     | `text-foreground`    |
| `--color-primary`       | Brand / accent actions                 | `bg-primary`, `text-primary` |
| `--color-accent`        | Secondary brand color (hover states)   | `bg-accent`, `text-accent`   |
| `--color-muted`         | Subtle backgrounds (alternating sections) | `bg-muted`        |
| `--color-card`          | Card / elevated surface background     | `bg-card`            |
| `--color-border`        | Borders, dividers                      | `border-border`      |
| `--color-input`         | Form input backgrounds                 | `bg-input`           |
| `--color-ring`          | Focus ring color                       | `ring-ring`          |
| `--color-destructive`   | Error / danger states                  | `text-destructive`   |
| `--color-success`       | Success states                         | `text-success`       |

### Typography

| Custom Property          | Purpose                     | Tailwind Class    |
|--------------------------|-----------------------------|-------------------|
| `--font-heading`         | Heading typeface            | `font-heading`    |
| `--font-heading-weight`  | Heading font weight         | (set in global.css base layer) |
| `--font-body`            | Body typeface               | `font-body`       |
| `--font-body-weight`     | Body font weight            | (set in global.css base layer) |

### Spacing and Form

| Custom Property           | Purpose                        | Tailwind Class / Usage         |
|---------------------------|--------------------------------|--------------------------------|
| `--spacing-section`       | Vertical padding for sections  | Used by `.section` / `.section-alt` |
| `--spacing-gap`           | Default gap between elements   | Direct CSS usage               |
| `--radius`                | Base border-radius             | `rounded` (default), `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl` |
| `--container-max-width`   | Max width for content          | `max-w-container` or `.container-narrow` |

---

## Tailwind Typography Scale

All font sizes are responsive (clamp-based). Use these instead of raw Tailwind sizes.

| Class          | Size Range                   | Line Height | Use For                             |
|----------------|------------------------------|-------------|-------------------------------------|
| `text-display` | `clamp(2.5rem, 5vw, 4.5rem)` | 1.1         | Hero headlines (h1 only)            |
| `text-title`   | `clamp(1.8rem, 3vw, 3rem)`   | 1.2         | Section headings (h2)               |
| `text-subtitle`| `clamp(1.2rem, 2vw, 1.5rem)` | 1.4         | Section subheadings, large body     |
| `text-body-lg` | `clamp(1rem, 1.2vw, 1.125rem)` | 1.6       | Important body text                 |

### Font Family Classes

| Class          | Maps To             | Use For                            |
|----------------|---------------------|------------------------------------|
| `font-heading` | `var(--font-heading)` | All headings (h1-h4), prices, stat values |
| `font-body`    | `var(--font-body)`    | Body text (set globally on `body`) |

---

## Border Radius Scale

All radius values derive from the `--radius` token:

| Class         | Computed Value               | Use For                     |
|---------------|------------------------------|-----------------------------|
| `rounded`     | `var(--radius)`              | Default rounding            |
| `rounded-sm`  | `calc(var(--radius) * 0.5)`  | Small elements              |
| `rounded-md`  | `calc(var(--radius) * 0.75)` | Medium elements             |
| `rounded-lg`  | `var(--radius)`              | Same as default             |
| `rounded-xl`  | `calc(var(--radius) * 1.5)`  | Cards, larger containers    |
| `rounded-2xl` | `calc(var(--radius) * 2)`    | Sections, large cards       |

---

## Component Classes (from global.css)

### Buttons

| Class           | Appearance                                           | Hover                    |
|-----------------|------------------------------------------------------|--------------------------|
| `.btn-primary`  | Solid primary bg, background-colored text, rounded   | Switches to accent bg    |
| `.btn-secondary`| Primary border + text, transparent bg, rounded       | Muted background fill    |

Both buttons include: `inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`.

### Section Wrappers

| Class              | Behavior                                                  |
|--------------------|-----------------------------------------------------------|
| `.section`         | `padding-top/bottom: var(--spacing-section)`              |
| `.section-alt`     | Same padding + `background-color: var(--color-muted)`     |
| `.container-narrow`| `max-width: var(--container-max-width)` + horizontal padding + centered |

### Section Text

| Class                | Behavior                                                         |
|----------------------|------------------------------------------------------------------|
| `.section-heading`   | `text-title` + `mb-4` + `font-heading` + `color-foreground`     |
| `.section-subheading`| `text-subtitle` + `max-w-2xl` + 60% foreground opacity          |

---

## Animation System

### CSS Animations (immediate)

| Class              | Effect                    |
|--------------------|---------------------------|
| `.animate-in`      | Fade-in-up on page load   |
| `.animate-delay-1` | 0.1s delay                |
| `.animate-delay-2` | 0.2s delay                |
| `.animate-delay-3` | 0.3s delay                |
| `.animate-delay-4` | 0.4s delay                |

### Scroll-Reveal Animations (Intersection Observer)

| Attribute                    | Effect               |
|------------------------------|----------------------|
| `data-animate="fade-up"`    | Slide up + fade in   |
| `data-animate="fade-in"`    | Fade in only         |
| `data-animate="scale-in"`   | Scale up + fade in   |
| `data-delay="100"`          | Custom delay in ms   |

Elements get `.is-visible` class when they enter the viewport.

All animations respect `prefers-reduced-motion: reduce`.

---

## Card Pattern

The standard card pattern used across all sections:

```
class="p-8 rounded-2xl bg-card border border-border
       hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
       transition-all duration-300"
```

Key properties:
- Background: `bg-card`
- Border: `border border-border`
- Hover border: `hover:border-primary/20`
- Hover shadow: `hover:shadow-lg hover:shadow-primary/5`
- Padding: `p-8` (standard) or `p-6` (compact)
- Radius: `rounded-2xl`
- Transition: `transition-all duration-300`

---

## Icon Container Pattern

Used for feature/service icons:

```
class="inline-flex items-center justify-center w-12 h-12 rounded-xl
       bg-muted text-primary text-xl
       group-hover:bg-primary group-hover:text-background transition-colors"
```

---

## Opacity Conventions for Text

| Pattern                | Use For                                   |
|------------------------|-------------------------------------------|
| `text-foreground`      | Primary text (headings, important labels) |
| `text-foreground/80`   | Form labels                               |
| `text-foreground/70`   | Testimonial quotes                        |
| `text-foreground/60`   | Body text, descriptions, subheadings      |
| `text-foreground/50`   | Metadata, dates, secondary info           |
| `text-foreground/40`   | Disabled features, very subtle text       |
| `text-foreground/20`   | Placeholder-level elements                |
| `text-primary/10`      | Decorative quote marks                    |
| `text-background`      | Text on primary-colored backgrounds       |
| `text-background/80`   | Subtext on primary-colored backgrounds    |

---

## Color Usage on Inverted Backgrounds

When a section uses `bg-primary` (CtaFullwidth, CtaBanner, HeroImmersive):
- Headings: `text-background`
- Body text: `text-background/80`
- Buttons: `bg-background text-foreground` (inverted)
- Decorative blurs: `bg-accent/10` or `bg-accent/15`

---

## FORBIDDEN Patterns (will break theme switching)

- Hardcoded colors: `bg-blue-500`, `text-gray-900`, `bg-white`, `bg-black`
- Hardcoded font sizes for headings: `text-4xl`, `text-5xl` (use `text-display`, `text-title`, `text-subtitle`)
- Hardcoded font families: `font-sans`, `font-serif` (use `font-heading`, `font-body`)
- Hardcoded border radius: `rounded-lg` works but `rounded-[12px]` does not respect the radius token
- Hardcoded spacing for sections: `py-20` (use `.section` or `.section-alt`)
- Hardcoded max-widths: `max-w-7xl` (use `.container-narrow` or `max-w-container`)
- Hardcoded shadows: `shadow-blue-500/20` (use `shadow-primary/5`)

---

## Image Handling

Images use the `<ImageSlot>` component which provides:
- Gradient placeholder when no image is provided
- Consistent aspect ratios
- Lazy loading
- Position-based naming for asset management

Common `ImageSlot` props:
- `position`: unique identifier (e.g., `hero-split`, `team-portrait-1`)
- `format`: `landscape`, `square`, `portrait`
- `aspect`: CSS aspect ratio (e.g., `4/3`, `1/1`, `16/10`)
- `priority`: `must-have` or `nice-to-have`
- `category`: `photo-custom`, `photo-stock`
- `gradientClass`: gradient for placeholder (e.g., `bg-gradient-to-br from-primary/10 to-primary/20`)
