import { siteConfig } from '@/config';
import { LinkButton } from '@/components/ui/link-button';
import ImageSlot from '@/components/ui/ImageSlot';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroImageOverlay({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
}: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageSlot
          src={undefined}
          alt=""
          position="hero-background"
          label="Hero-Hintergrundbild"
          briefing="Grossflaechiges, stimmungsvolles Hintergrundbild fuer den Hero-Bereich"
          format="landscape"
          aspect="auto"
          priority="must-have"
          category="photo-custom"
          className="absolute inset-0 w-full h-full object-cover"
          gradientClass="bg-gradient-to-br from-foreground/20 to-foreground/40"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center py-16" data-animate="fade-up">
          <h1 className="text-display font-heading font-bold text-background leading-tight max-w-4xl animate-in">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-2 text-subtitle text-background/80 max-w-2xl animate-in animate-delay-1">
              {subheadline}
            </p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
            <LinkButton href={ctaHref} size="lg">{ctaText}</LinkButton>
            <LinkButton href={secondaryCtaHref} variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">{secondaryCtaText}</LinkButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
