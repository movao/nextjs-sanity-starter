import { siteConfig } from '@/config';
import ImageSlot from '@/components/ui/ImageSlot';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function HeroImmersive({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt Termin vereinbaren',
  ctaHref = '#contact',
  backgroundImage,
}: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        )}
        {/* Dekorative Blur-Kreise */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10 text-center">
        <div className="max-w-4xl mx-auto" data-animate="fade-up">
          <h1 className="text-display font-heading font-bold text-background leading-tight animate-in">
            {headline}
          </h1>

          <p className="mt-8 text-subtitle text-background/80 max-w-2xl mx-auto animate-in animate-delay-1">
            {subheadline}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-in animate-delay-2">
            <LinkButton href={ctaHref} size="lg" variant="default" className="btn-primary text-lg px-10 py-5">{ctaText}</LinkButton>
            <LinkButton href="#services" variant="ghost" size="lg" className="text-background/80 hover:text-background">
              Mehr erfahren
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-background/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
