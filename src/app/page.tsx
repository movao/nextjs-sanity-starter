/**
 * Homepage — wird beim Build von AgencyOS überschrieben.
 * Zeigt eine Demo mit den wichtigsten Sections.
 */
import HeroEditorial from '@/sections/hero/HeroEditorial';
import ServicesCards from '@/sections/services/ServicesCards';
import FeaturesGrid from '@/sections/features/FeaturesGrid';
import FaqAccordion from '@/sections/faq/FaqAccordion';
import ContactSplit from '@/sections/contact/ContactSplit';
import { siteConfig } from '@/config';
import { demoServices, demoFeatures, demoFAQs } from '@/data/demo';

export default function HomePage() {
  return (
    <>
      <HeroEditorial
        headline={siteConfig.name}
        subheadline={siteConfig.tagline}
        ctaText="Kontakt aufnehmen"
        ctaHref="#contact"
      />
      <ServicesCards
        services={demoServices}
        heading="Unsere Leistungen"
        subheading="Was wir für Sie tun können"
      />
      <FeaturesGrid
        features={demoFeatures}
        heading="Warum wir?"
        subheading="Das zeichnet uns aus"
      />
      <FaqAccordion
        faqs={demoFAQs}
        heading="Häufige Fragen"
        subheading="Schnelle Antworten"
      />
      <ContactSplit
        heading="Kontakt"
        subheading="Wir freuen uns auf Ihre Nachricht"
      />
    </>
  );
}
