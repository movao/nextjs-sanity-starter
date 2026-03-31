# Section Component Specification

> Complete reference for all 30 section components.
> Use this to select the right section for a page and pass the correct props.
> All sections use the design token system documented in `tokens.md`.

---

## Table of Contents

1. [Hero Sections](#hero-sections) (3)
2. [Features Sections](#features-sections) (3)
3. [Services Sections](#services-sections) (1)
4. [About Sections](#about-sections) (1)
5. [Stats Sections](#stats-sections) (2)
6. [Process Sections](#process-sections) (2)
7. [Pricing Sections](#pricing-sections) (2)
8. [Testimonials Sections](#testimonials-sections) (2)
9. [Team Sections](#team-sections) (2)
10. [FAQ Sections](#faq-sections) (1)
11. [CTA Sections](#cta-sections) (3)
12. [Contact Sections](#contact-sections) (2)
13. [Blog Sections](#blog-sections) (1)
14. [Gallery Sections](#gallery-sections) (2)
15. [Partners Sections](#partners-sections) (1)
16. [Map Sections](#map-sections) (1)
17. [Opening Hours Sections](#opening-hours-sections) (1)

---

## Hero Sections

### HeroImmersive

**Path:** `src/sections/hero/HeroImmersive.astro`
**ID:** `#hero`

**Layout:** Full-screen (min-h-screen), centered text over a primary-gradient background. Optional background image overlaid at 20% opacity. Decorative blur circles in accent color. Scroll indicator at bottom. Two CTAs side by side (primary button + text link to #services).

**Props:**

| Prop              | Type     | Default                          | Required |
|-------------------|----------|----------------------------------|----------|
| `headline`        | `string` | `siteConfig.name`                | No       |
| `subheadline`     | `string` | `siteConfig.tagline`             | No       |
| `ctaText`         | `string` | `'Jetzt Termin vereinbaren'`     | No       |
| `ctaHref`         | `string` | `'#contact'`                     | No       |
| `backgroundImage` | `string` | `undefined`                      | No       |

**Token Classes:** `bg-primary` gradient (from-primary/95 via-primary/85 to-primary/75), `text-background`, `text-background/80`, `btn-primary`, `text-display`, `text-subtitle`, `font-heading`, `container-narrow`, `bg-accent/15` (decorative)

**Data:** Text props only. No Sanity data needed.

**Best For:** Landing pages, dramatic first impression, businesses that want bold visual impact.

---

### HeroEditorial

**Path:** `src/sections/hero/HeroEditorial.astro`
**ID:** `#hero`

**Layout:** Two-column grid (text left, image right) on desktop. Single column stacked on mobile. Image uses `ImageSlot` with 4:3 aspect ratio. Decorative offset shadow behind image. Two CTAs (primary button + text link).

**Props:**

| Prop              | Type     | Default                          | Required |
|-------------------|----------|----------------------------------|----------|
| `headline`        | `string` | `siteConfig.name`                | No       |
| `subheadline`     | `string` | `siteConfig.tagline`             | No       |
| `ctaText`         | `string` | `'Jetzt Termin vereinbaren'`     | No       |
| `ctaHref`         | `string` | `'#contact'`                     | No       |
| `backgroundImage` | `string` | `undefined`                      | No       |

**Token Classes:** `bg-background`, `text-foreground`, `text-foreground/60`, `btn-primary`, `text-display`, `font-heading`, `container-narrow`, `border-border`, `bg-primary/5` (decorative offset)

**Data:** Text props only. Image via `backgroundImage` prop or ImageSlot placeholder.

**Best For:** Professional services, agencies, businesses that want to show a key image alongside their message.

---

### HeroMinimal

**Path:** `src/sections/hero/HeroMinimal.astro`
**ID:** `#hero`

**Layout:** Left-aligned large headline, optional subheadline, single text-link CTA with arrow. No image. Minimum 80vh height. Clean whitespace-driven design.

**Props:**

| Prop          | Type     | Default                  | Required |
|---------------|----------|--------------------------|----------|
| `headline`    | `string` | `siteConfig.name`        | No       |
| `subheadline` | `string` | `siteConfig.tagline`     | No       |
| `ctaText`     | `string` | `'Mehr erfahren'`        | No       |
| `ctaHref`     | `string` | `'#services'`            | No       |

**Token Classes:** `bg-background`, `text-foreground`, `text-foreground/50`, `text-primary`, `text-display`, `text-subtitle`, `font-heading`, `container-narrow`

**Data:** Text props only. No images, no Sanity data.

**Best For:** Typography-focused brands, minimalist design, editorial/creative businesses.

---

## Features Sections

### FeaturesGrid

**Path:** `src/sections/features/FeaturesGrid.astro`
**ID:** `#features`

**Layout:** Section heading centered, then a responsive grid of feature cards (3 columns on desktop, 2 on tablet, 1 on mobile). Each card has optional icon, title, description. Standard card pattern with hover effects.

**Props:**

| Prop         | Type        | Default                    | Required |
|--------------|-------------|----------------------------|----------|
| `features`   | `Feature[]` | `[]`                       | Yes      |
| `heading`    | `string`    | `'Unsere Leistungen'`      | No       |
| `subheading` | `string`    | `'Was uns auszeichnet'`    | No       |

**Feature Object:**

| Field         | Type     | Required |
|---------------|----------|----------|
| `title`       | `string` | Yes      |
| `description` | `string` | Yes      |
| `icon`        | `string` | No       |

**Token Classes:** `bg-background`, `.section`, `.section-heading`, `.section-subheading`, `bg-card`, `border-border`, `text-foreground`, `text-foreground/60`, `text-primary`, `bg-muted` (icon bg), `font-heading`

**Data:** Array of features passed as props. Icon uses `IconOrEmoji` component (Phosphor icon name or emoji string).

**Best For:** 3-6 features/benefits. Clean, equal-weight presentation.

---

### FeaturesBento

**Path:** `src/sections/features/FeaturesBento.astro`
**ID:** `#features`

**Layout:** Bento grid (3-column on desktop). First item spans 2 columns and 2 rows (larger card). Fourth item spans 2 columns. All others are single cells. Decorative gradient blur in top-right of each card. Auto-rows with equal height.

**Props:** Same as FeaturesGrid.

| Prop         | Type        | Default                    | Required |
|--------------|-------------|----------------------------|----------|
| `features`   | `Feature[]` | `[]`                       | Yes      |
| `heading`    | `string`    | `'Unsere Leistungen'`      | No       |
| `subheading` | `string`    | `'Was uns auszeichnet'`    | No       |

**Feature Object:** Same as FeaturesGrid.

**Token Classes:** Same as FeaturesGrid + `bg-primary/5` (decorative gradient)

**Data:** Array of features. Best with 5-6 items for visual balance.

**Best For:** 5-6 features where you want visual hierarchy. First feature is the hero feature.

---

### FeaturesAlternating

**Path:** `src/sections/features/FeaturesAlternating.astro`
**ID:** `#features`

**Layout:** Vertically stacked feature rows. Each row is a 2-column grid (text + image). Odd rows: text left, image right. Even rows: text right, image left. Large vertical spacing (space-y-24) between rows. Each feature gets its own `ImageSlot`.

**Props:** Same as FeaturesGrid.

| Prop         | Type        | Default                    | Required |
|--------------|-------------|----------------------------|----------|
| `features`   | `Feature[]` | `[]`                       | Yes      |
| `heading`    | `string`    | `'Unsere Leistungen'`      | No       |
| `subheading` | `string`    | `'Was uns auszeichnet'`    | No       |

**Feature Object:** Same as FeaturesGrid.

**Token Classes:** `bg-background`, `.section`, `text-foreground`, `text-foreground/60`, `text-primary`, `bg-primary/10` (icon bg), `border-border`, `font-heading`

**Data:** Array of features. Each gets a placeholder image via ImageSlot.

**Best For:** 2-4 features that each deserve detailed attention. Story-driven presentation.

---

## Services Sections

### ServicesCards

**Path:** `src/sections/services/ServicesCards.astro`
**ID:** `#services`

**Layout:** Centered heading + responsive grid of service cards (3 columns desktop, 2 tablet, 1 mobile). Identical layout to FeaturesGrid but with Sanity `_id` field on each service. Standard card pattern with icon hover effect.

**Props:**

| Prop         | Type        | Default                        | Required |
|--------------|-------------|--------------------------------|----------|
| `services`   | `Service[]` | `[]`                           | Yes      |
| `heading`    | `string`    | `'Unsere Leistungen'`          | No       |
| `subheading` | `string`    | `'Was wir fur Sie tun konnen'` | No       |

**Service Object:**

| Field         | Type     | Required |
|---------------|----------|----------|
| `_id`         | `string` | Yes      |
| `title`       | `string` | Yes      |
| `description` | `string` | Yes      |
| `icon`        | `string` | No       |

**Token Classes:** Same as FeaturesGrid.

**Data:** Expects Sanity documents (has `_id`). Typically fetched from a `service` document type.

**Best For:** Service-based businesses. Pair with Sanity CMS for dynamic service management.

---

## About Sections

### AboutSplit

**Path:** `src/sections/about/AboutSplit.astro`
**ID:** `#about`

**Layout:** Two-column grid (image left, text + highlights right). Image uses ImageSlot with 4:3 aspect. Text side has heading, paragraph, and optional highlight grid (2x2). Each highlight is a small card with a bold value and label.

**Props:**

| Prop          | Type          | Default                                              | Required |
|---------------|---------------|------------------------------------------------------|----------|
| `heading`     | `string`      | `'Uber uns'`                                         | No       |
| `text`        | `string`      | `'Erfahren Sie mehr uber unser Unternehmen...'`      | No       |
| `image`       | `string`      | `undefined`                                          | No       |
| `highlights`  | `Highlight[]` | `[]`                                                 | No       |

**Highlight Object:**

| Field   | Type     | Required |
|---------|----------|----------|
| `label` | `string` | Yes      |
| `value` | `string` | Yes      |

**Token Classes:** `bg-background`, `.section`, `.section-heading`, `text-foreground/60`, `bg-card`, `border-border`, `text-primary`, `font-heading`

**Data:** Text props + optional image. Highlights are plain objects (no Sanity _id).

**Best For:** Company story, team introduction. Pairs well with 2-4 key metrics as highlights.

---

## Stats Sections

### StatsGrid

**Path:** `src/sections/stats/StatsGrid.astro`
**ID:** `#stats`

**Layout:** Centered heading, then 4-column grid (2 on mobile) of stat items. Each stat shows a large number in primary color (display size) with a label below. Clean, no cards — just numbers on background.

**Props:**

| Prop         | Type     | Default                          | Required |
|--------------|----------|----------------------------------|----------|
| `stats`      | `Stat[]` | `[]`                             | Yes      |
| `heading`    | `string` | `'In Zahlen'`                    | No       |
| `subheading` | `string` | `'Das haben wir bisher erreicht'`| No       |

**Stat Object:**

| Field    | Type     | Required |
|----------|----------|----------|
| `value`  | `string` | Yes      |
| `label`  | `string` | Yes      |
| `prefix` | `string` | No       |
| `suffix` | `string` | No       |

**Token Classes:** `bg-background`, `.section`, `.section-heading`, `.section-subheading`, `text-display`, `text-primary`, `text-subtitle`, `text-foreground/60`, `font-heading`

**Data:** Array of stat objects. No Sanity data needed.

**Best For:** 4 key metrics displayed with equal weight.

---

### StatsHighlight

**Path:** `src/sections/stats/StatsHighlight.astro`
**ID:** `#stats-highlight`

**Layout:** One featured stat displayed large in a card (text-6xl/7xl), followed by remaining stats in a 3-column grid below. The first item in the array becomes the hero stat.

**Props:** Same as StatsGrid.

**Token Classes:** Same as StatsGrid + `bg-card`, `border-border` (for the featured stat card)

**Data:** Array of stats. First item gets special treatment.

**Best For:** When one metric is significantly more impressive. Lead with your best number.

---

## Process Sections

### ProcessSteps

**Path:** `src/sections/process/ProcessSteps.astro`
**ID:** `#process-steps`

**Layout:** 4-column horizontal grid on desktop (2 on tablet, 1 on mobile). Each step has a numbered circle at top (or icon), connecting horizontal line between steps, and a card below with title and description.

**Props:**

| Prop         | Type     | Default                       | Required |
|--------------|----------|-------------------------------|----------|
| `steps`      | `Step[]` | `[]`                          | Yes      |
| `heading`    | `string` | `'Unser Prozess'`             | No       |
| `subheading` | `string` | `'So arbeiten wir zusammen'`  | No       |

**Step Object:**

| Field         | Type     | Required |
|---------------|----------|----------|
| `title`       | `string` | Yes      |
| `description` | `string` | Yes      |
| `icon`        | `string` | No       |

**Token Classes:** `bg-background`, `.section`, `bg-primary text-background` (step circles), `bg-card`, `border-border`, `bg-border` (connecting line), `text-foreground`, `text-foreground/60`, `font-heading`

**Data:** Array of steps. No Sanity data needed. Icons via IconOrEmoji.

**Best For:** 3-4 step processes. Horizontal visual flow suggests progression.

---

### ProcessTimeline

**Path:** `src/sections/process/ProcessTimeline.astro`
**ID:** `#process-timeline`

**Layout:** Vertical timeline with a center line on desktop (left-aligned on mobile). Steps alternate left/right of the timeline. Each step has a numbered circle on the line and a card extending to the side.

**Props:** Same as ProcessSteps.

**Token Classes:** Same as ProcessSteps.

**Data:** Array of steps. No Sanity data needed.

**Best For:** 4-6 step processes where each step needs more description. Vertical layout accommodates longer content.

---

## Pricing Sections

### PricingCards

**Path:** `src/sections/pricing/PricingCards.astro`
**ID:** `#pricing`

**Layout:** Centered heading, then responsive card grid (3 columns desktop, 2 tablet, 1 mobile). Each card shows package name, price (display size), optional period, feature checklist, and CTA button. One package can be highlighted (badge + primary border + tinted bg).

**Props:**

| Prop         | Type        | Default                                          | Required |
|--------------|-------------|--------------------------------------------------|----------|
| `packages`   | `Package[]` | `[]`                                             | Yes      |
| `heading`    | `string`    | `'Unsere Pakete'`                                | No       |
| `subheading` | `string`    | `'Finden Sie das passende Angebot...'`           | No       |

**Package Object:**

| Field          | Type       | Required |
|----------------|------------|----------|
| `name`         | `string`   | Yes      |
| `price`        | `string`   | Yes      |
| `period`       | `string`   | No       |
| `features`     | `string[]` | Yes      |
| `highlighted`  | `boolean`  | No       |
| `ctaText`      | `string`   | No       |

**Token Classes:** `bg-background`, `.section`, `bg-card`, `border-border`, `bg-primary/5` (highlighted), `border-primary` (highlighted), `text-display`, `text-primary`, `text-foreground/60`, `bg-primary text-background` (badge + highlighted CTA), `bg-muted` (normal CTA)

**Data:** Array of packages. No Sanity data needed.

**Best For:** 2-3 pricing tiers with feature comparison.

---

### PricingTable

**Path:** `src/sections/pricing/PricingTable.astro`
**ID:** `#pricing-table`

**Layout:** Feature comparison table on desktop (rows = features, columns = packages). Checkmarks for included features, dashes for excluded. Mobile fallback shows cards instead. CTA buttons in table footer.

**Props:** Same as PricingCards.

**Token Classes:** Same as PricingCards + `bg-muted/30` (alternating rows)

**Data:** Array of packages. Features are automatically deduplicated across all packages.

**Best For:** 3+ packages with many features to compare. Detailed comparison view.

---

## Testimonials Sections

### TestimonialsCarousel

**Path:** `src/sections/testimonials/TestimonialsCarousel.astro`
**ID:** `#testimonials`

**Layout:** Horizontal scrolling carousel of testimonial cards. Each card has optional star rating, quote text, and author info with role. Navigation prev/next buttons appear when > 3 testimonials. Cards are fixed-width (1/3 on desktop, 1/2 tablet, full mobile). Section background is muted.

**Props:**

| Prop           | Type             | Default                          | Required |
|----------------|------------------|----------------------------------|----------|
| `testimonials` | `Testimonial[]`  | `[]`                             | Yes      |
| `heading`      | `string`         | `'Das sagen unsere Kunden'`      | No       |
| `subheading`   | `string`         | `'Erfahrungen und Bewertungen'`  | No       |

**Testimonial Object:**

| Field    | Type     | Required |
|----------|----------|----------|
| `_id`    | `string` | Yes      |
| `name`   | `string` | Yes      |
| `role`   | `string` | No       |
| `quote`  | `string` | Yes      |
| `rating` | `number` | No       |

**Token Classes:** `bg-muted` (section), `bg-card`, `border-border`, `text-foreground/70` (quote), `text-primary/10` (decorative quote mark), `text-amber-400` (stars), `text-foreground/20` (empty stars), `text-foreground`, `text-foreground/50` (role)

**Data:** Expects Sanity documents (has `_id`). Includes client-side JS for carousel navigation.

**Best For:** 4+ testimonials. Interactive, saves vertical space.

---

### TestimonialsGrid

**Path:** `src/sections/testimonials/TestimonialsGrid.astro`
**ID:** `#testimonials`

**Layout:** Static grid of testimonial cards (3 columns desktop, 2 tablet, 1 mobile). Same card design as carousel but in a grid layout. No JavaScript needed.

**Props:** Same as TestimonialsCarousel.

**Token Classes:** `bg-background` (section), rest same as TestimonialsCarousel.

**Data:** Expects Sanity documents (has `_id`).

**Best For:** 3-6 testimonials. Simple, no-JS approach.

---

## Team Sections

### TeamGrid

**Path:** `src/sections/team/TeamGrid.astro`
**ID:** `#team`

**Layout:** Grid of team member cards (3 columns desktop, 2 tablet). Each member has a circular portrait (w-40 h-40) with ring shadow, name, role in primary color, and optional bio text. Section uses `section-alt` (muted background).

**Props:**

| Prop         | Type           | Default                                     | Required |
|--------------|----------------|---------------------------------------------|----------|
| `members`    | `TeamMember[]` | `[]`                                        | Yes      |
| `heading`    | `string`       | `'Unser Team'`                              | No       |
| `subheading` | `string`       | `'Die Menschen hinter unserem Unternehmen'` | No       |

**TeamMember Object:**

| Field   | Type     | Required |
|---------|----------|----------|
| `_id`   | `string` | Yes      |
| `name`  | `string` | Yes      |
| `role`  | `string` | Yes      |
| `bio`   | `string` | No       |
| `image` | `any`    | No       |

**Token Classes:** `.section-alt`, `ring-card` (portrait ring), `text-foreground`, `text-primary`, `text-foreground/60`, `font-heading`

**Data:** Expects Sanity documents. Images via ImageSlot.

**Best For:** 3-6 team members with photos and bios.

---

### TeamMinimal

**Path:** `src/sections/team/TeamMinimal.astro`
**ID:** `#team`

**Layout:** Flex-wrap row of small portraits (w-20/w-24 on md) centered. Each has name and role below. Very compact. No bio text. Uses `bg-background`.

**Props:** Same as TeamGrid (except no `bio` shown).

**TeamMember Object:** Same as TeamGrid (bio is ignored).

**Token Classes:** `bg-background`, `.section`, `ring-border` (portrait ring), `text-foreground`, `text-foreground/50`, `font-heading`

**Data:** Expects Sanity documents. Images via ImageSlot.

**Best For:** 4-10+ team members, overview-style. No detailed bios needed.

---

## FAQ Sections

### FaqAccordion

**Path:** `src/sections/faq/FaqAccordion.astro`
**ID:** `#faq`

**Layout:** Centered narrow column (max-w-3xl). Native HTML `<details>` accordion. Each item is a card with question as summary and answer as expandable content. Chevron rotates on open. Section uses `section-alt`.

**Props:**

| Prop         | Type       | Default                                  | Required |
|--------------|------------|------------------------------------------|----------|
| `faqs`       | `FAQItem[]`| `[]`                                     | Yes      |
| `heading`    | `string`   | `'Haufige Fragen'`                       | No       |
| `subheading` | `string`   | `'Antworten auf die wichtigsten Fragen'` | No       |

**FAQItem Object:**

| Field      | Type     | Required |
|------------|----------|----------|
| `_id`      | `string` | Yes      |
| `question` | `string` | Yes      |
| `answer`   | `string` | Yes      |

**Token Classes:** `.section-alt`, `bg-card`, `border-border`, `text-foreground`, `text-foreground/60`, `text-foreground/50` (chevron), `text-primary` (hover)

**Data:** Expects Sanity documents. No JavaScript needed (native details/summary).

**Best For:** 4-10 FAQ items. Accessible, lightweight.

---

## CTA Sections

### CtaCompact

**Path:** `src/sections/cta/CtaCompact.astro`
**ID:** `#cta`

**Layout:** Centered card (max-w-3xl) with heading + text on left, button on right (stacks on mobile). Card uses bg-card with border. Clean, contained feel.

**Props:**

| Prop          | Type     | Default                                            | Required |
|---------------|----------|----------------------------------------------------|----------|
| `heading`     | `string` | `'Bereit loszulegen?'`                             | No       |
| `subheading`  | `string` | `'Kontaktieren Sie uns noch heute...'`             | No       |
| `ctaText`     | `string` | `'Kontakt aufnehmen'`                              | No       |
| `ctaHref`     | `string` | `'#contact'`                                       | No       |

**Token Classes:** `bg-background`, `.section`, `bg-card`, `border-border`, `text-foreground`, `text-foreground/60`, `.btn-primary`, `text-title`, `font-heading`

**Data:** Text props only.

**Best For:** Mid-page call-to-action that doesn't dominate. Subtle, professional.

---

### CtaFullwidth

**Path:** `src/sections/cta/CtaFullwidth.astro`
**ID:** `#cta`

**Layout:** Full-width primary background with decorative accent blur circles. Centered text with heading, subheading, and inverted button (bg-background text-foreground). No section wrapper (custom padding py-20/28).

**Props:**

| Prop          | Type     | Default                                            | Required |
|---------------|----------|----------------------------------------------------|----------|
| `heading`     | `string` | `'Bereit loszulegen?'`                             | No       |
| `subheading`  | `string` | `'Kontaktieren Sie uns noch heute...'`             | No       |
| `ctaText`     | `string` | `'Jetzt Kontakt aufnehmen'`                        | No       |
| `ctaHref`     | `string` | `'#contact'`                                       | No       |

**Token Classes:** `bg-primary`, `text-background`, `text-background/80`, `bg-background text-foreground` (button), `bg-accent/10` (decorative), `text-title`, `text-subtitle`, `font-heading`

**Data:** Text props only.

**Best For:** High-impact call-to-action. Use before footer or between major sections.

---

### CtaBanner

**Path:** `src/sections/cta/CtaBanner.astro`
**ID:** `#cta-banner`

**Layout:** Horizontal banner with primary background. Text left, button right (stacks on mobile). Uses section padding. Button is inverted (bg-background text-primary).

**Props:**

| Prop          | Type     | Default                                            | Required |
|---------------|----------|----------------------------------------------------|----------|
| `heading`     | `string` | `'Bereit durchzustarten?'`                         | No       |
| `text`        | `string` | `'Kontaktieren Sie uns noch heute...'`             | No       |
| `buttonText`  | `string` | `'Jetzt starten'`                                  | No       |
| `buttonHref`  | `string` | `'#contact'`                                       | No       |

**Token Classes:** `bg-primary`, `.section`, `text-background`, `text-background/80`, `bg-background text-primary` (button), `font-heading`

**Data:** Text props only.

**Best For:** Quick, compact call-to-action strip. Less dramatic than CtaFullwidth.

---

## Contact Sections

### ContactSplit

**Path:** `src/sections/contact/ContactSplit.astro`
**ID:** `#contact`

**Layout:** Two-column grid. Left: contact info (address, phone, email with icons) + embedded OpenStreetMap. Right: contact form (name, email, phone, message, privacy checkbox, submit). Includes honeypot spam protection.

**Props:**

| Prop         | Type     | Default                                   | Required |
|--------------|----------|-------------------------------------------|----------|
| `heading`    | `string` | `'Kontakt'`                               | No       |
| `subheading` | `string` | `'Wir freuen uns auf Ihre Nachricht'`     | No       |

**Token Classes:** `bg-background`, `.section`, `text-foreground`, `text-foreground/60`, `text-foreground/80`, `text-primary`, `bg-muted` (icon containers), `border-border`, `ring-ring` (focus), `.btn-primary`, `font-heading`

**Data:** Reads `siteConfig.contact` and `siteConfig.location` for address/phone/email/map coordinates. Form posts to `PUBLIC_FORM_ENDPOINT` env var.

**Best For:** Full contact section with all details. Best as the main contact area on a page.

---

### ContactMinimal

**Path:** `src/sections/contact/ContactMinimal.astro`
**ID:** `#contact`

**Layout:** Single centered column (max-w-2xl). Just a contact form (name + email side by side, message, privacy checkbox, submit). No contact info, no map. Honeypot included.

**Props:**

| Prop         | Type     | Default                                   | Required |
|--------------|----------|-------------------------------------------|----------|
| `heading`    | `string` | `'Kontakt'`                               | No       |
| `subheading` | `string` | `'Wir freuen uns auf Ihre Nachricht'`     | No       |

**Token Classes:** `bg-background`, `.section`, `text-foreground`, `text-foreground/60`, `text-foreground/80`, `text-primary`, `border-border`, `ring-ring`, `.btn-primary`

**Data:** Form posts to `PUBLIC_FORM_ENDPOINT` env var. No siteConfig dependency.

**Best For:** Simple contact form when address/phone are not needed or shown elsewhere.

---

## Blog Sections

### BlogGrid

**Path:** `src/sections/blog/BlogGrid.astro`
**ID:** `#blog`

**Layout:** Responsive card grid (3 columns desktop, 2 tablet, 1 mobile). Each card has an ImageSlot thumbnail (16:10 aspect), date + author metadata, linked title, excerpt (3 lines max), and "Weiterlesen" link. Optional "Alle Beitrage ansehen" button when more posts exist than the limit.

**Props:**

| Prop         | Type         | Default                            | Required |
|--------------|--------------|------------------------------------|----------|
| `posts`      | `BlogPost[]` | `[]`                               | Yes      |
| `heading`    | `string`     | `'Aktuelles'`                      | No       |
| `subheading` | `string`     | `'Neuigkeiten und Wissenswertes'`  | No       |
| `limit`      | `number`     | `3`                                | No       |

**BlogPost Object:**

| Field         | Type                      | Required |
|---------------|---------------------------|----------|
| `_id`         | `string`                  | Yes      |
| `title`       | `string`                  | Yes      |
| `slug`        | `{ current: string }`     | Yes      |
| `excerpt`     | `string`                  | No       |
| `publishedAt` | `string` (ISO date)       | Yes      |
| `author`      | `string`                  | No       |

**Token Classes:** `bg-background`, `.section`, `bg-card`, `border-border`, `text-foreground`, `text-foreground/50`, `text-foreground/60`, `text-primary`, `font-heading`, `.btn-secondary`

**Data:** Expects Sanity blog post documents. Dates formatted in German locale.

**Best For:** Blog section on homepage. Links to individual blog pages via slug.

---

## Gallery Sections

### GalleryMasonry

**Path:** `src/sections/gallery/GalleryMasonry.astro`
**ID:** `#gallery`

**Layout:** CSS columns masonry layout (3 columns desktop, 2 tablet, 1 mobile). Images maintain natural aspect ratios. Each image in a card with optional caption below. Placeholder gradient when no src.

**Props:**

| Prop         | Type            | Default                           | Required |
|--------------|-----------------|-----------------------------------|----------|
| `images`     | `GalleryImage[]`| `[]`                              | Yes      |
| `heading`    | `string`        | `'Galerie'`                       | No       |
| `subheading` | `string`        | `'Eindrucke aus unserer Arbeit'`  | No       |

**GalleryImage Object:**

| Field     | Type     | Required |
|-----------|----------|----------|
| `src`     | `string` | No       |
| `alt`     | `string` | Yes      |
| `caption` | `string` | No       |

**Token Classes:** `bg-background`, `.section`, `bg-card`, `border-border`, `text-foreground/60`, `text-subtitle`, `bg-primary/10` (placeholder gradient)

**Data:** Array of image objects. No Sanity _id required.

**Best For:** Portfolio, project showcases with mixed aspect ratio images.

---

### GalleryGrid

**Path:** `src/sections/gallery/GalleryGrid.astro`
**ID:** `#gallery-grid`

**Layout:** Uniform grid (3 columns desktop, 2 mobile). All images forced to square aspect ratio with object-cover. Hover zoom effect on images. Card with optional caption.

**Props:** Same as GalleryMasonry.

**Token Classes:** Same as GalleryMasonry.

**Data:** Array of image objects. No Sanity _id required.

**Best For:** Clean, uniform gallery. Instagram-like grid aesthetic.

---

## Partners Sections

### LogoBar

**Path:** `src/sections/partners/LogoBar.astro`
**ID:** `#partners`

**Layout:** Flex-wrap row of partner cards centered. Each card shows a logo image (grayscale, fades to color on hover) or text fallback. Section uses muted background.

**Props:**

| Prop         | Type        | Default                              | Required |
|--------------|-------------|--------------------------------------|----------|
| `partners`   | `Partner[]` | `[]`                                 | Yes      |
| `heading`    | `string`    | `'Unsere Partner'`                   | No       |
| `subheading` | `string`    | `'Vertraut von fuhrenden Unternehmen'`| No      |

**Partner Object:**

| Field  | Type     | Required |
|--------|----------|----------|
| `name` | `string` | Yes      |
| `logo` | `string` | No       |

**Token Classes:** `bg-muted` (section), `bg-card`, `border-border`, `text-foreground/60`, `text-title`, `font-heading`, `text-primary/20` (hover border)

**Data:** Array of partners. No Sanity _id required.

**Best For:** Client logos, partnership badges, trust signals.

---

## Map Sections

### MapEmbed

**Path:** `src/sections/map/MapEmbed.astro`
**ID:** `#map`

**Layout:** Centered heading + full-width OpenStreetMap iframe (400px height) in a rounded card. OSM attribution below.

**Props:**

| Prop         | Type     | Default                   | Required |
|--------------|----------|---------------------------|----------|
| `heading`    | `string` | `'Standort'`              | No       |
| `subheading` | `string` | `'Hier finden Sie uns'`   | No       |
| `lat`        | `number` | `51.1657`                 | No       |
| `lng`        | `number` | `10.4515`                 | No       |
| `zoom`       | `number` | `15`                      | No       |

**Token Classes:** `bg-background`, `.section`, `border-border`, `text-foreground/40`, `text-primary`

**Data:** Coordinates as props. No Sanity data. GDPR-compliant (OpenStreetMap, no Google).

**Best For:** Standalone map section. Use ContactSplit if you need map + form together.

---

## Opening Hours Sections

### OpeningHoursTable

**Path:** `src/sections/opening-hours/OpeningHoursTable.astro`
**ID:** `#hours`

**Layout:** Narrow centered column (max-w-lg). Single card with rows for each day. Current day is highlighted (muted bg, primary text, "Heute" badge). Uses `section-alt`. Client-side JS highlights today.

**Props:**

| Prop         | Type            | Default                  | Required |
|--------------|-----------------|--------------------------|----------|
| `hours`      | `OpeningHour[]` | `[]`                     | Yes      |
| `heading`    | `string`        | `'Offnungszeiten'`       | No       |
| `subheading` | `string`        | `'Wir sind fur Sie da'`  | No       |

**OpeningHour Object:**

| Field      | Type      | Required |
|------------|-----------|----------|
| `_id`      | `string`  | Yes      |
| `day`      | `string`  | Yes      |
| `dayOrder` | `number`  | Yes      |
| `from`     | `string`  | Yes      |
| `to`       | `string`  | Yes      |
| `closed`   | `boolean` | Yes      |

**Token Classes:** `.section-alt`, `bg-card`, `border-border`, `text-foreground/80`, `text-foreground/70`, `text-foreground/50`, `text-primary`, `bg-primary/10`, `bg-muted` (today highlight)

**Data:** Expects Sanity documents (has `_id`). `dayOrder` is 1=Monday through 7=Sunday.

**Best For:** Restaurants, shops, service businesses with physical locations.

---

## Section Selection Guide

### By Page Type

| Page Type              | Recommended Sections (in order)                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------|
| **Landing Page**       | HeroImmersive, FeaturesGrid/Bento, StatsGrid, ServicesCards, TestimonialsCarousel, CtaFullwidth, ContactSplit |
| **Corporate / Agency** | HeroEditorial, AboutSplit, FeaturesAlternating, ProcessSteps, TeamGrid, CtaCompact, ContactSplit |
| **Minimal / Creative** | HeroMinimal, FeaturesGrid, GalleryMasonry, TestimonialsGrid, CtaBanner, ContactMinimal          |
| **Service Business**   | HeroEditorial, ServicesCards, ProcessTimeline, PricingCards, FaqAccordion, CtaFullwidth, ContactSplit |
| **Restaurant / Shop**  | HeroImmersive, AboutSplit, GalleryGrid, OpeningHoursTable, MapEmbed, ContactMinimal              |
| **Blog / Content**     | HeroMinimal, BlogGrid, FeaturesGrid, CtaCompact, ContactMinimal                                 |

### Background Alternation Pattern

For visual rhythm, alternate section backgrounds:

```
bg-background  -> HeroEditorial
bg-background  -> FeaturesGrid
section-alt    -> TeamGrid          (muted background)
bg-background  -> ProcessSteps
section-alt    -> FaqAccordion      (muted background)
bg-primary     -> CtaFullwidth      (primary background)
bg-background  -> ContactSplit
```

Sections with built-in muted/primary backgrounds:
- **`section-alt` (bg-muted):** TeamGrid, FaqAccordion, OpeningHoursTable
- **`bg-muted`:** LogoBar, TestimonialsCarousel
- **`bg-primary`:** CtaFullwidth, CtaBanner, HeroImmersive (gradient)
- **`bg-background`:** Everything else

### Common Prop Patterns

All sections with heading/subheading follow the same pattern:
```astro
<SectionName
  heading="Section Title"
  subheading="Supporting description text"
/>
```

All sections with array data follow this pattern:
```astro
<SectionName
  heading="Title"
  subheading="Subtitle"
  features={[
    { title: "...", description: "...", icon: "..." },
  ]}
/>
```

### Icon System

Icons use the `IconOrEmoji` component which accepts:
- **Phosphor icon names:** `"globe"`, `"rocket"`, `"shield-check"`, `"chart-line"`, `"users"`, `"clock"`
- **Emoji strings:** Any emoji like `"🚀"`, `"💡"`, `"🎯"`

Used in: FeaturesGrid, FeaturesBento, FeaturesAlternating, ServicesCards, ProcessSteps, ProcessTimeline
