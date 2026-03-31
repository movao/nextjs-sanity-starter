/**
 * Kitchen-Sink Preview -- zeigt ALLE Section-Komponenten mit Demo-Daten.
 * Dient zum Testen von Design-Profilen und zur Qualitaetskontrolle.
 * Wird NICHT in Kundenprojekte uebernommen.
 */
import type { Metadata } from 'next';
import { design } from '@/config/design';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import PreviewControls from '@/components/PreviewControls';

// -- Hero --
import HeroImmersive from '@/sections/hero/HeroImmersive';
import HeroEditorial from '@/sections/hero/HeroEditorial';
import HeroMinimal from '@/sections/hero/HeroMinimal';

// -- Features --
import FeaturesGrid from '@/sections/features/FeaturesGrid';
import FeaturesBento from '@/sections/features/FeaturesBento';
import FeaturesAlternating from '@/sections/features/FeaturesAlternating';

// -- Services --
import ServicesCards from '@/sections/services/ServicesCards';

// -- About --
import AboutSplit from '@/sections/about/AboutSplit';

// -- Stats --
import StatsGrid from '@/sections/stats/StatsGrid';
import StatsHighlight from '@/sections/stats/StatsHighlight';

// -- Process --
import ProcessSteps from '@/sections/process/ProcessSteps';
import ProcessTimeline from '@/sections/process/ProcessTimeline';

// -- Pricing --
import PricingCards from '@/sections/pricing/PricingCards';
import PricingTable from '@/sections/pricing/PricingTable';

// -- Testimonials --
import TestimonialsCarousel from '@/sections/testimonials/TestimonialsCarousel';
import TestimonialsGrid from '@/sections/testimonials/TestimonialsGrid';

// -- Team --
import TeamGrid from '@/sections/team/TeamGrid';
import TeamMinimal from '@/sections/team/TeamMinimal';

// -- FAQ --
import FaqAccordion from '@/sections/faq/FaqAccordion';

// -- CTA --
import CtaFullwidth from '@/sections/cta/CtaFullwidth';
import CtaCompact from '@/sections/cta/CtaCompact';
import CtaBanner from '@/sections/cta/CtaBanner';

// -- Contact --
import ContactSplit from '@/sections/contact/ContactSplit';
import ContactMinimal from '@/sections/contact/ContactMinimal';

// -- Blog --
import BlogGrid from '@/sections/blog/BlogGrid';

// -- Gallery --
import GalleryGrid from '@/sections/gallery/GalleryGrid';
import GalleryMasonry from '@/sections/gallery/GalleryMasonry';

// -- Partners --
import LogoBar from '@/sections/partners/LogoBar';

// -- Opening Hours --
import OpeningHoursTable from '@/sections/opening-hours/OpeningHoursTable';

// -- Map --
import MapEmbed from '@/sections/map/MapEmbed';

// -- Demo-Daten --
import {
  demoFeatures,
  demoAbout,
  demoServices,
  demoTeam,
  demoBlogPosts,
  demoOpeningHours,
  demoFAQs,
  demoTestimonials,
  demoPricing,
  demoStats,
  demoGallery,
  demoPartners,
  demoProcess,
} from '@/data/demo';

export const metadata: Metadata = {
  title: 'Section Preview',
  robots: { index: false, follow: false },
};

const sections = [
  { id: 'hero', label: 'Hero', count: 3 },
  { id: 'features', label: 'Features', count: 3 },
  { id: 'services', label: 'Services', count: 1 },
  { id: 'about', label: 'About', count: 1 },
  { id: 'stats', label: 'Stats', count: 2 },
  { id: 'process', label: 'Process', count: 2 },
  { id: 'pricing', label: 'Pricing', count: 2 },
  { id: 'testimonials', label: 'Testimonials', count: 2 },
  { id: 'team', label: 'Team', count: 2 },
  { id: 'faq', label: 'FAQ', count: 1 },
  { id: 'cta', label: 'CTA', count: 3 },
  { id: 'blog', label: 'Blog', count: 1 },
  { id: 'gallery', label: 'Gallery', count: 2 },
  { id: 'partners', label: 'Partners', count: 1 },
  { id: 'opening-hours', label: 'Zeiten', count: 1 },
  { id: 'contact', label: 'Contact', count: 2 },
  { id: 'map', label: 'Map', count: 1 },
];

const totalSections = sections.reduce((sum, s) => sum + s.count, 0);

function SectionLabel({ name }: { name: string }) {
  return (
    <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur text-xs font-mono px-2 py-1 rounded border border-muted">
      {name}
    </div>
  );
}

function CategoryHeader({ id, label, count }: { id: string; label: string; count: number }) {
  return (
    <div id={id} className="border-t-4 border-primary/20">
      <div className="bg-card/50 px-4 py-3 border-b border-muted">
        <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">{label}</span>
        <span className="text-xs text-muted-foreground ml-2">{count} Variante{count !== 1 ? 'n' : ''}</span>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <>
      {/* Auf der Preview-Seite: Scroll-Animationen deaktivieren damit alles sofort sichtbar ist */}
      <style dangerouslySetInnerHTML={{ __html: `
        [data-animate] { opacity: 1 !important; transform: none !important; transition: none !important; }
      `}} />

      {/* -- Sticky Navigation -- */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">Preview</span>
            <span className="text-muted-foreground/30">|</span>
            <a href="#tokens" className="text-xs font-medium text-primary hover:text-foreground transition-colors whitespace-nowrap shrink-0">
              Tokens
            </a>
            <span className="text-muted-foreground/30">|</span>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap shrink-0"
              >
                {s.label} <span className="text-muted-foreground/50">({s.count})</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* -- Header -- */}
      <div className="bg-card border-b border-muted py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-heading font-bold text-foreground">Section Preview</h1>
          <p className="text-muted-foreground">
            Alle {totalSections} Section-Komponenten mit dem aktiven Design-Profil.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Font: {design.fonts?.heading || '?'}</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Layout: {design.layout}</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Spacing: {design.spacing?.id || '?'}</span>
          </div>
        </div>
      </div>

      {/* ============================================
          DESIGN TOKENS -- Typoskala + Icon-Stile + Radius
          ============================================ */}
      <div id="tokens" className="bg-card border-b border-muted py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Typoskala */}
          <div>
            <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">Typoskala (1.25 Ratio)</h2>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">display</span>
                <span className="text-display font-heading text-foreground">Grosse Ueberschrift</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">title</span>
                <span className="text-title font-heading text-foreground">Section-Titel</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">subtitle</span>
                <span className="text-subtitle text-foreground/60">Untertitel und Beschreibungen</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">xl (20px)</span>
                <span className="text-xl font-heading text-foreground">Card-Titel / Feature-Name</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">lg (18px)</span>
                <span className="text-lg font-heading text-foreground">Step-Titel / Blog-Titel</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">base (16px)</span>
                <span className="text-base text-foreground/60">Fliesstext und Body-Content der Website.</span>
              </div>
            </div>
          </div>

          {/* Icon-Stile */}
          {(() => { const activeIcon = design.iconStyle?.id as string; return (
          <div>
            <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">Icon-Stile</h2>
            <div className="grid grid-cols-3 gap-8">
              {/* Filled Box */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-primary">
                    <IconOrEmoji icon="lightning" size={24} weight="regular" />
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">Filled Box</p>
                <p className="text-xs text-muted-foreground">
                  Icon in gefuellter Box{activeIcon === 'filledBox' ? ' (aktiv)' : ''}
                </p>
              </div>
              {/* Ring */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 text-primary">
                    <IconOrEmoji icon="lightning" size={24} weight="regular" />
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">Ring</p>
                <p className="text-xs text-muted-foreground">
                  Kreis mit farbigem Rand{activeIcon === 'ring' ? ' (aktiv)' : ''}
                </p>
              </div>
              {/* Naked */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <span className="inline-flex items-center justify-center text-primary">
                    <IconOrEmoji icon="lightning" size={28} weight="regular" />
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">Naked</p>
                <p className="text-xs text-muted-foreground">
                  Frei stehend{activeIcon === 'naked' ? ' (aktiv)' : ''}
                </p>
              </div>
            </div>
          </div>

          ); })()}

          {/* Border-Radius */}
          <div>
            <h2 className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">Border-Radius</h2>
            <div className="grid grid-cols-4 gap-6">
              {(['sharp', 'subtle', 'soft', 'round'] as const).map((r) => {
                const vals = { sharp: '0px', subtle: '4px', soft: '10px', round: '20px' };
                const isActive = design.borderRadius?.id === r;
                return (
                  <div key={r} className="text-center space-y-3">
                    <div
                      className="mx-auto w-24 h-16 bg-primary/10 border border-primary/20"
                      style={{ borderRadius: vals[r] }}
                    />
                    <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {r} ({vals[r]})
                    </p>
                    {isActive && <span className="text-xs text-primary font-semibold">aktiv</span>}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ============================================
          HERO
          ============================================ */}
      <CategoryHeader id="hero" label="Hero" count={3} />

      <div className="relative">
        <SectionLabel name="HeroImmersive" />
        <HeroImmersive
          headline="Ihre Gesundheit in besten Haenden"
          subheadline="Moderne Behandlung mit persoenlicher Betreuung -- in Ihrer Naehe."
          ctaText="Termin vereinbaren"
          ctaHref="#contact"
        />
      </div>

      <div className="relative">
        <SectionLabel name="HeroEditorial" />
        <HeroEditorial
          headline="Willkommen in einer neuen Aera der Beratung"
          subheadline="Wir verbinden Expertise mit Empathie -- fuer Ergebnisse die Sie spueren."
          ctaText="Jetzt entdecken"
          ctaHref="#services"
        />
      </div>

      <div className="relative">
        <SectionLabel name="HeroMinimal" />
        <HeroMinimal
          headline="Weniger ist mehr."
          subheadline="Klare Loesungen fuer komplexe Herausforderungen."
          ctaText="Kontakt aufnehmen"
          ctaHref="#contact"
        />
      </div>

      {/* ============================================
          FEATURES
          ============================================ */}
      <CategoryHeader id="features" label="Features" count={3} />

      <div className="relative">
        <SectionLabel name="FeaturesGrid" />
        <FeaturesGrid features={demoFeatures} heading="Warum wir?" subheading="Was uns von anderen unterscheidet" />
      </div>

      <div className="relative">
        <SectionLabel name="FeaturesBento" />
        <FeaturesBento features={demoFeatures} heading="Unsere Staerken" subheading="Auf einen Blick" />
      </div>

      <div className="relative">
        <SectionLabel name="FeaturesAlternating" />
        <FeaturesAlternating features={demoFeatures.slice(0, 3)} heading="So arbeiten wir" subheading="Schritt fuer Schritt zu Ihrem Erfolg" />
      </div>

      {/* ============================================
          SERVICES
          ============================================ */}
      <CategoryHeader id="services" label="Services" count={1} />

      <div className="relative">
        <SectionLabel name="ServicesCards" />
        <ServicesCards services={demoServices} heading="Unsere Leistungen" subheading="Individuell auf Sie zugeschnitten" />
      </div>

      {/* ============================================
          ABOUT
          ============================================ */}
      <CategoryHeader id="about" label="About" count={1} />

      <div className="relative">
        <SectionLabel name="AboutSplit" />
        <AboutSplit heading={demoAbout.heading} text={demoAbout.text} highlights={demoAbout.highlights} />
      </div>

      {/* ============================================
          STATS
          ============================================ */}
      <CategoryHeader id="stats" label="Stats" count={2} />

      <div className="relative">
        <SectionLabel name="StatsGrid" />
        <StatsGrid stats={demoStats} heading="In Zahlen" subheading="Das haben wir erreicht" />
      </div>

      <div className="relative">
        <SectionLabel name="StatsHighlight" />
        <StatsHighlight stats={demoStats} heading="Fakten die sprechen" />
      </div>

      {/* ============================================
          PROCESS
          ============================================ */}
      <CategoryHeader id="process" label="Process" count={2} />

      <div className="relative">
        <SectionLabel name="ProcessSteps" />
        <ProcessSteps steps={demoProcess} heading="Unser Ablauf" subheading="In vier Schritten zum Ziel" />
      </div>

      <div className="relative">
        <SectionLabel name="ProcessTimeline" />
        <ProcessTimeline steps={demoProcess} heading="Der Weg zu Ihrem Projekt" subheading="Transparent und planbar" />
      </div>

      {/* ============================================
          PRICING
          ============================================ */}
      <CategoryHeader id="pricing" label="Pricing" count={2} />

      <div className="relative">
        <SectionLabel name="PricingCards" />
        <PricingCards packages={demoPricing} heading="Unsere Pakete" subheading="Transparent und fair" />
      </div>

      <div className="relative">
        <SectionLabel name="PricingTable" />
        <PricingTable packages={demoPricing} heading="Preisuebersicht" subheading="Alle Leistungen im Vergleich" />
      </div>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <CategoryHeader id="testimonials" label="Testimonials" count={2} />

      <div className="relative">
        <SectionLabel name="TestimonialsCarousel" />
        <TestimonialsCarousel testimonials={demoTestimonials} heading="Was unsere Kunden sagen" />
      </div>

      <div className="relative">
        <SectionLabel name="TestimonialsGrid" />
        <TestimonialsGrid testimonials={demoTestimonials} heading="Kundenstimmen" subheading="Echte Erfahrungen" />
      </div>

      {/* ============================================
          TEAM
          ============================================ */}
      <CategoryHeader id="team" label="Team" count={2} />

      <div className="relative">
        <SectionLabel name="TeamGrid" />
        <TeamGrid members={demoTeam} heading="Unser Team" subheading="Die Menschen hinter dem Unternehmen" />
      </div>

      <div className="relative">
        <SectionLabel name="TeamMinimal" />
        <TeamMinimal members={demoTeam} heading="Ihre Ansprechpartner" />
      </div>

      {/* ============================================
          FAQ
          ============================================ */}
      <CategoryHeader id="faq" label="FAQ" count={1} />

      <div className="relative">
        <SectionLabel name="FaqAccordion" />
        <FaqAccordion faqs={demoFAQs} heading="Haeufig gestellte Fragen" subheading="Hier finden Sie Antworten" />
      </div>

      {/* ============================================
          CTA
          ============================================ */}
      <CategoryHeader id="cta" label="CTA" count={3} />

      <div className="relative">
        <SectionLabel name="CtaFullwidth" />
        <CtaFullwidth heading="Bereit fuer den naechsten Schritt?" subheading="Lassen Sie uns gemeinsam starten." ctaText="Jetzt Termin buchen" ctaHref="#contact" />
      </div>

      <div className="relative">
        <SectionLabel name="CtaCompact" />
        <CtaCompact heading="Interesse geweckt?" subheading="Wir freuen uns auf Ihre Nachricht." ctaText="Kontakt aufnehmen" ctaHref="#contact" />
      </div>

      <div className="relative">
        <SectionLabel name="CtaBanner" />
        <CtaBanner heading="Kostenlose Erstberatung" text="30 Minuten -- unverbindlich und persoenlich." buttonText="Termin anfragen" buttonHref="#contact" />
      </div>

      {/* ============================================
          BLOG
          ============================================ */}
      <CategoryHeader id="blog" label="Blog" count={1} />

      <div className="relative">
        <SectionLabel name="BlogGrid" />
        <BlogGrid posts={demoBlogPosts} heading="Aktuelles" subheading="Neuigkeiten aus unserem Blog" />
      </div>

      {/* ============================================
          GALLERY
          ============================================ */}
      <CategoryHeader id="gallery" label="Gallery" count={2} />

      <div className="relative">
        <SectionLabel name="GalleryGrid" />
        <GalleryGrid images={demoGallery} heading="Unsere Projekte" subheading="Ein Auszug aus unserem Portfolio" />
      </div>

      <div className="relative">
        <SectionLabel name="GalleryMasonry" />
        <GalleryMasonry images={demoGallery} heading="Galerie" subheading="Eindruecke aus unserer Arbeit" />
      </div>

      {/* ============================================
          PARTNERS
          ============================================ */}
      <CategoryHeader id="partners" label="Partners" count={1} />

      <div className="relative">
        <SectionLabel name="LogoBar" />
        <LogoBar partners={demoPartners} heading="Unsere Partner" subheading="Vertrauen auf allen Seiten" />
      </div>

      {/* ============================================
          OPENING HOURS
          ============================================ */}
      <CategoryHeader id="opening-hours" label="Opening Hours" count={1} />

      <div className="relative">
        <SectionLabel name="OpeningHoursTable" />
        <OpeningHoursTable hours={demoOpeningHours} heading="Oeffnungszeiten" subheading="Wir sind fuer Sie da" />
      </div>

      {/* ============================================
          CONTACT
          ============================================ */}
      <CategoryHeader id="contact" label="Contact" count={2} />

      <div className="relative">
        <SectionLabel name="ContactSplit" />
        <ContactSplit heading="Kontakt aufnehmen" subheading="Wir freuen uns auf Ihre Nachricht" />
      </div>

      <div className="relative">
        <SectionLabel name="ContactMinimal" />
        <ContactMinimal heading="Schreiben Sie uns" subheading="Schnell und unkompliziert" />
      </div>

      {/* ============================================
          MAP
          ============================================ */}
      <CategoryHeader id="map" label="Map" count={1} />

      <div className="relative">
        <SectionLabel name="MapEmbed" />
        <MapEmbed heading="So finden Sie uns" subheading="Zentral gelegen und gut erreichbar" lat={51.2277} lng={6.7735} zoom={15} />
      </div>

      <PreviewControls />
    </>
  );
}
