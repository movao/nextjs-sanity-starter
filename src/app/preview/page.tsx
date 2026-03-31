/**
 * Kitchen-Sink Preview -- zeigt ALLE Section-Komponenten mit Demo-Daten.
 * Organisiert in Tabs nach Section-Typ mit Bewertungssystem.
 * Wird NICHT in Kundenprojekte uebernommen.
 */
import type { Metadata } from 'next';
import { design } from '@/config/design';
import IconOrEmoji from '@/components/ui/IconOrEmoji';
import PreviewControls from '@/components/PreviewControls';
import PreviewShell from '@/components/PreviewShell';
import type { SectionGroup } from '@/components/PreviewShell';

// -- Hero --
import HeroImmersive from '@/sections/hero/HeroImmersive';
import HeroEditorial from '@/sections/hero/HeroEditorial';
import HeroMinimal from '@/sections/hero/HeroMinimal';
import HeroCentered from '@/sections/hero/HeroCentered';
import HeroSplit5050 from '@/sections/hero/HeroSplit5050';
import HeroWithStats from '@/sections/hero/HeroWithStats';
import HeroGradient from '@/sections/hero/HeroGradient';
import HeroImageOverlay from '@/sections/hero/HeroImageOverlay';
import HeroAsymmetric from '@/sections/hero/HeroAsymmetric';
import HeroCardStyle from '@/sections/hero/HeroCardStyle';

// -- Features --
import FeaturesGrid from '@/sections/features/FeaturesGrid';
import FeaturesBento from '@/sections/features/FeaturesBento';
import FeaturesAlternating from '@/sections/features/FeaturesAlternating';
import FeaturesIconLeft from '@/sections/features/FeaturesIconLeft';
import FeaturesLargeCards from '@/sections/features/FeaturesLargeCards';
import FeaturesMinimal from '@/sections/features/FeaturesMinimal';
import FeaturesNumbered from '@/sections/features/FeaturesNumbered';
import FeaturesCentered from '@/sections/features/FeaturesCentered';
import FeaturesHighlight from '@/sections/features/FeaturesHighlight';
import FeaturesWithImage from '@/sections/features/FeaturesWithImage';

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
import PricingSimple from '@/sections/pricing/PricingSimple';
import PricingToggle from '@/sections/pricing/PricingToggle';
import PricingCompact from '@/sections/pricing/PricingCompact';
import PricingFeatureMatrix from '@/sections/pricing/PricingFeatureMatrix';
import PricingGradient from '@/sections/pricing/PricingGradient';
import PricingSideBySide from '@/sections/pricing/PricingSideBySide';
import PricingMinimal from '@/sections/pricing/PricingMinimal';

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
import CtaSplit from '@/sections/cta/CtaSplit';
import CtaGradient from '@/sections/cta/CtaGradient';
import CtaWithTestimonial from '@/sections/cta/CtaWithTestimonial';
import CtaFloating from '@/sections/cta/CtaFloating';
import CtaMinimal from '@/sections/cta/CtaMinimal';
import CtaStacked from '@/sections/cta/CtaStacked';
import CtaUrgent from '@/sections/cta/CtaUrgent';

// -- Contact --
import ContactSplit from '@/sections/contact/ContactSplit';
import ContactMinimal from '@/sections/contact/ContactMinimal';
import ContactCentered from '@/sections/contact/ContactCentered';
import ContactWithMap from '@/sections/contact/ContactWithMap';
import ContactCard from '@/sections/contact/ContactCard';
import ContactFullwidth from '@/sections/contact/ContactFullwidth';
import ContactWithInfo from '@/sections/contact/ContactWithInfo';
import ContactSimple from '@/sections/contact/ContactSimple';
import ContactTwoStep from '@/sections/contact/ContactTwoStep';

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

/* ============================================
   Section groups -- passed to PreviewShell
   ============================================ */
const sectionGroups: SectionGroup[] = [
  {
    id: 'hero',
    label: 'Hero',
    sections: [
      {
        name: 'HeroImmersive',
        component: (
          <HeroImmersive
            headline="Ihre Gesundheit in besten Haenden"
            subheadline="Moderne Behandlung mit persoenlicher Betreuung -- in Ihrer Naehe."
            ctaText="Termin vereinbaren"
            ctaHref="#contact"
          />
        ),
      },
      {
        name: 'HeroEditorial',
        component: (
          <HeroEditorial
            headline="Willkommen in einer neuen Aera der Beratung"
            subheadline="Wir verbinden Expertise mit Empathie -- fuer Ergebnisse die Sie spueren."
            ctaText="Jetzt entdecken"
            ctaHref="#services"
          />
        ),
      },
      {
        name: 'HeroMinimal',
        component: (
          <HeroMinimal
            headline="Weniger ist mehr."
            subheadline="Klare Loesungen fuer komplexe Herausforderungen."
            ctaText="Kontakt aufnehmen"
            ctaHref="#contact"
          />
        ),
      },
      {
        name: 'HeroCentered',
        component: (
          <HeroCentered
            headline="Vertrauen beginnt hier"
            subheadline="Professionelle Betreuung die Sie verdienen."
            ctaText="Jetzt starten"
            ctaHref="#contact"
          />
        ),
      },
      {
        name: 'HeroSplit5050',
        component: (
          <HeroSplit5050
            headline="Qualitaet die man sieht"
            subheadline="15 Jahre Erfahrung. Tausende zufriedene Kunden."
            ctaText="Mehr erfahren"
            ctaHref="#services"
          />
        ),
      },
      {
        name: 'HeroWithStats',
        component: (
          <HeroWithStats
            headline="Zahlen die fuer sich sprechen"
            subheadline="Messbare Ergebnisse seit 2010."
            ctaText="Unsere Ergebnisse"
            ctaHref="#stats"
          />
        ),
      },
      {
        name: 'HeroGradient',
        component: (
          <HeroGradient
            headline="Die Zukunft beginnt jetzt"
            subheadline="Innovation trifft auf Tradition."
            ctaText="Entdecken"
            ctaHref="#services"
            badgeText="Jetzt neu"
          />
        ),
      },
      {
        name: 'HeroImageOverlay',
        component: (
          <HeroImageOverlay
            headline="Erleben Sie den Unterschied"
            subheadline="Wo Kompetenz auf Leidenschaft trifft."
            ctaText="Jetzt erleben"
            ctaHref="#contact"
          />
        ),
      },
      {
        name: 'HeroAsymmetric',
        component: (
          <HeroAsymmetric
            headline="Anders. Besser. Fuer Sie."
            subheadline="Wir denken weiter als andere."
            ctaText="Kontakt"
            ctaHref="#contact"
          />
        ),
      },
      {
        name: 'HeroCardStyle',
        component: (
          <HeroCardStyle
            headline="Ihr naechster Schritt"
            subheadline="Einfach. Persoenlich. Wirkungsvoll."
            ctaText="Los geht's"
            ctaHref="#contact"
          />
        ),
      },
    ],
  },
  {
    id: 'features',
    label: 'Features',
    sections: [
      {
        name: 'FeaturesGrid',
        component: <FeaturesGrid features={demoFeatures} heading="Warum wir?" subheading="Was uns von anderen unterscheidet" />,
      },
      {
        name: 'FeaturesBento',
        component: <FeaturesBento features={demoFeatures} heading="Unsere Staerken" subheading="Auf einen Blick" />,
      },
      {
        name: 'FeaturesAlternating',
        component: <FeaturesAlternating features={demoFeatures.slice(0, 3)} heading="So arbeiten wir" subheading="Schritt fuer Schritt zu Ihrem Erfolg" />,
      },
      {
        name: 'FeaturesIconLeft',
        component: <FeaturesIconLeft features={demoFeatures} heading="Unsere Leistungen" subheading="Was uns auszeichnet" />,
      },
      {
        name: 'FeaturesLargeCards',
        component: <FeaturesLargeCards features={demoFeatures} heading="Im Detail" subheading="Jede Leistung zaehlt" />,
      },
      {
        name: 'FeaturesMinimal',
        component: <FeaturesMinimal features={demoFeatures} heading="Einfach erklaert" subheading="Unsere Kernkompetenzen" />,
      },
      {
        name: 'FeaturesNumbered',
        component: <FeaturesNumbered features={demoFeatures} heading="Unsere Vorteile" subheading="Punkt fuer Punkt" />,
      },
      {
        name: 'FeaturesCentered',
        component: <FeaturesCentered features={demoFeatures} heading="Was wir bieten" subheading="Alles aus einer Hand" />,
      },
      {
        name: 'FeaturesHighlight',
        component: <FeaturesHighlight features={demoFeatures} heading="Highlights" subheading="Das Beste fuer Sie" />,
      },
      {
        name: 'FeaturesWithImage',
        component: <FeaturesWithImage features={demoFeatures.slice(0, 3)} heading="Visuell erklaert" subheading="Sehen Sie selbst" />,
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    sections: [
      {
        name: 'ServicesCards',
        component: <ServicesCards services={demoServices} heading="Unsere Leistungen" subheading="Individuell auf Sie zugeschnitten" />,
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    sections: [
      {
        name: 'AboutSplit',
        component: <AboutSplit heading={demoAbout.heading} text={demoAbout.text} highlights={demoAbout.highlights} />,
      },
    ],
  },
  {
    id: 'stats',
    label: 'Stats',
    sections: [
      {
        name: 'StatsGrid',
        component: <StatsGrid stats={demoStats} heading="In Zahlen" subheading="Das haben wir erreicht" />,
      },
      {
        name: 'StatsHighlight',
        component: <StatsHighlight stats={demoStats} heading="Fakten die sprechen" />,
      },
    ],
  },
  {
    id: 'process',
    label: 'Process',
    sections: [
      {
        name: 'ProcessSteps',
        component: <ProcessSteps steps={demoProcess} heading="Unser Ablauf" subheading="In vier Schritten zum Ziel" />,
      },
      {
        name: 'ProcessTimeline',
        component: <ProcessTimeline steps={demoProcess} heading="Der Weg zu Ihrem Projekt" subheading="Transparent und planbar" />,
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    sections: [
      {
        name: 'PricingCards',
        component: <PricingCards packages={demoPricing} heading="Unsere Pakete" subheading="Transparent und fair" />,
      },
      {
        name: 'PricingTable',
        component: <PricingTable packages={demoPricing} heading="Preisuebersicht" subheading="Alle Leistungen im Vergleich" />,
      },
      {
        name: 'PricingSimple',
        component: <PricingSimple packages={demoPricing} heading="Einfach & transparent" subheading="Waehlen Sie das passende Paket" />,
      },
      {
        name: 'PricingToggle',
        component: <PricingToggle packages={demoPricing} heading="Flexibel waehlen" subheading="Monatlich oder jaehrlich" />,
      },
      {
        name: 'PricingCompact',
        component: <PricingCompact packages={demoPricing} heading="Kompakt im Ueberblick" subheading="Schnell vergleichen" />,
      },
      {
        name: 'PricingFeatureMatrix',
        component: <PricingFeatureMatrix packages={demoPricing} heading="Feature-Vergleich" subheading="Alle Details auf einen Blick" />,
      },
      {
        name: 'PricingGradient',
        component: <PricingGradient packages={demoPricing} heading="Premium Pakete" subheading="Investieren Sie in Qualitaet" />,
      },
      {
        name: 'PricingSideBySide',
        component: <PricingSideBySide packages={demoPricing} heading="Seite an Seite" subheading="Direkt vergleichen" />,
      },
      {
        name: 'PricingMinimal',
        component: <PricingMinimal packages={demoPricing} heading="Klare Preise" subheading="Ohne versteckte Kosten" />,
      },
    ],
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    sections: [
      {
        name: 'TestimonialsCarousel',
        component: <TestimonialsCarousel testimonials={demoTestimonials} heading="Was unsere Kunden sagen" />,
      },
      {
        name: 'TestimonialsGrid',
        component: <TestimonialsGrid testimonials={demoTestimonials} heading="Kundenstimmen" subheading="Echte Erfahrungen" />,
      },
    ],
  },
  {
    id: 'team',
    label: 'Team',
    sections: [
      {
        name: 'TeamGrid',
        component: <TeamGrid members={demoTeam} heading="Unser Team" subheading="Die Menschen hinter dem Unternehmen" />,
      },
      {
        name: 'TeamMinimal',
        component: <TeamMinimal members={demoTeam} heading="Ihre Ansprechpartner" />,
      },
    ],
  },
  {
    id: 'faq',
    label: 'FAQ',
    sections: [
      {
        name: 'FaqAccordion',
        component: <FaqAccordion faqs={demoFAQs} heading="Haeufig gestellte Fragen" subheading="Hier finden Sie Antworten" />,
      },
    ],
  },
  {
    id: 'cta',
    label: 'CTA',
    sections: [
      {
        name: 'CtaFullwidth',
        component: <CtaFullwidth heading="Bereit fuer den naechsten Schritt?" subheading="Lassen Sie uns gemeinsam starten." ctaText="Jetzt Termin buchen" ctaHref="#contact" />,
      },
      {
        name: 'CtaCompact',
        component: <CtaCompact heading="Interesse geweckt?" subheading="Wir freuen uns auf Ihre Nachricht." ctaText="Kontakt aufnehmen" ctaHref="#contact" />,
      },
      {
        name: 'CtaBanner',
        component: <CtaBanner heading="Kostenlose Erstberatung" text="30 Minuten -- unverbindlich und persoenlich." buttonText="Termin anfragen" buttonHref="#contact" />,
      },
      {
        name: 'CtaSplit',
        component: <CtaSplit heading="Bleiben Sie auf dem Laufenden" subheading="Erhalten Sie exklusive Einblicke und Updates." ctaText="Anmelden" ctaHref="#contact" />,
      },
      {
        name: 'CtaGradient',
        component: <CtaGradient heading="Jetzt durchstarten" subheading="Ihr Erfolg beginnt mit einem Gespraech." ctaText="Beratung buchen" ctaHref="#contact" />,
      },
      {
        name: 'CtaWithTestimonial',
        component: <CtaWithTestimonial heading="Ueberzeugen Sie sich selbst" subheading="Hunderte Kunden vertrauen uns bereits." ctaText="Jetzt starten" ctaHref="#contact" />,
      },
      {
        name: 'CtaFloating',
        component: <CtaFloating heading="Noch Fragen?" subheading="Wir sind fuer Sie da." ctaText="Schreiben Sie uns" ctaHref="#contact" />,
      },
      {
        name: 'CtaMinimal',
        component: <CtaMinimal heading="Bereit?" subheading="Ein Klick genuegt." ctaText="Loslegen" ctaHref="#contact" />,
      },
      {
        name: 'CtaStacked',
        component: <CtaStacked heading="Alles was Sie brauchen" subheading="Starten Sie noch heute mit uns." ctaText="Kostenlos testen" ctaHref="#contact" />,
      },
      {
        name: 'CtaUrgent',
        component: <CtaUrgent heading="Nur noch heute" subheading="Sichern Sie sich Ihren Vorteil." ctaText="Jetzt sichern" ctaHref="#contact" />,
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    sections: [
      {
        name: 'ContactSplit',
        component: <ContactSplit heading="Kontakt aufnehmen" subheading="Wir freuen uns auf Ihre Nachricht" />,
      },
      {
        name: 'ContactMinimal',
        component: <ContactMinimal heading="Schreiben Sie uns" subheading="Schnell und unkompliziert" />,
      },
      {
        name: 'ContactCentered',
        component: <ContactCentered heading="Kontakt" subheading="Wir freuen uns auf Ihre Nachricht" />,
      },
      {
        name: 'ContactWithMap',
        component: <ContactWithMap heading="Finden Sie uns" subheading="Vor Ort oder digital" />,
      },
      {
        name: 'ContactCard',
        component: <ContactCard heading="Nachricht senden" subheading="Kompakt und uebersichtlich" />,
      },
      {
        name: 'ContactFullwidth',
        component: <ContactFullwidth heading="Sprechen Sie uns an" subheading="Wir antworten innerhalb von 24 Stunden" />,
      },
      {
        name: 'ContactWithInfo',
        component: <ContactWithInfo heading="Alle Wege fuehren zu uns" subheading="Telefon, E-Mail oder Formular" />,
      },
      {
        name: 'ContactSimple',
        component: <ContactSimple heading="Einfach Kontakt aufnehmen" subheading="Ohne Umwege" />,
      },
      {
        name: 'ContactTwoStep',
        component: <ContactTwoStep heading="In zwei Schritten zum Ziel" subheading="Schnell und strukturiert" />,
      },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    sections: [
      {
        name: 'BlogGrid',
        component: <BlogGrid posts={demoBlogPosts} heading="Aktuelles" subheading="Neuigkeiten aus unserem Blog" />,
      },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    sections: [
      {
        name: 'GalleryGrid',
        component: <GalleryGrid images={demoGallery} heading="Unsere Projekte" subheading="Ein Auszug aus unserem Portfolio" />,
      },
      {
        name: 'GalleryMasonry',
        component: <GalleryMasonry images={demoGallery} heading="Galerie" subheading="Eindruecke aus unserer Arbeit" />,
      },
    ],
  },
  {
    id: 'partners',
    label: 'Partners',
    sections: [
      {
        name: 'LogoBar',
        component: <LogoBar partners={demoPartners} heading="Unsere Partner" subheading="Vertrauen auf allen Seiten" />,
      },
    ],
  },
  {
    id: 'opening-hours',
    label: 'Zeiten',
    sections: [
      {
        name: 'OpeningHoursTable',
        component: <OpeningHoursTable hours={demoOpeningHours} heading="Oeffnungszeiten" subheading="Wir sind fuer Sie da" />,
      },
    ],
  },
  {
    id: 'map',
    label: 'Map',
    sections: [
      {
        name: 'MapEmbed',
        component: <MapEmbed heading="So finden Sie uns" subheading="Zentral gelegen und gut erreichbar" lat={51.2277} lng={6.7735} zoom={15} />,
      },
    ],
  },
];

const totalSections = sectionGroups.reduce((sum, g) => sum + g.sections.length, 0);

/* ============================================
   Header (rendered as server component, passed to shell)
   ============================================ */
function PreviewHeader() {
  return (
    <>
      {/* -- Page Header -- */}
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
    </>
  );
}

/* ============================================
   Page (Server Component)
   ============================================ */
export default function PreviewPage() {
  return (
    <>
      {/* Auf der Preview-Seite: Scroll-Animationen deaktivieren damit alles sofort sichtbar ist */}
      <style dangerouslySetInnerHTML={{ __html: `
        [data-animate] { opacity: 1 !important; transform: none !important; transition: none !important; }
      `}} />

      <PreviewShell groups={sectionGroups} header={<PreviewHeader />} />

      <PreviewControls />
    </>
  );
}
