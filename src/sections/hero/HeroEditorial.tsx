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

export default function HeroEditorial({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt Termin vereinbaren',
  ctaHref = '#contact',
  backgroundImage,
}: Props) {
  return (
    <section id="hero" className="section bg-background overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-animate="fade-up">
          {/* Text Seite */}
          <div>
            <h1 className="text-display font-heading font-bold text-foreground leading-tight animate-in">
              {headline}
            </h1>

            <p className="mt-2 text-lg text-foreground/60 max-w-lg animate-in animate-delay-1">
              {subheadline}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
              <LinkButton href={ctaHref} size="lg" variant="default" className="btn-primary text-lg px-8 py-4">{ctaText}</LinkButton>
              <LinkButton href="#services" variant="ghost" size="lg" className="text-foreground/60 hover:text-primary">
                Mehr erfahren
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </LinkButton>
            </div>
          </div>

          {/* Bild Seite */}
          <div className="relative">
            <ImageSlot
              src={backgroundImage}
              alt=""
              position="hero-split"
              label="Hero-Bild"
              briefing="Hauptbild des Unternehmens, zeigt Kompetenz und Vertrauen"
              format="landscape"
              aspect="4/3"
              priority="must-have"
              category="photo-custom"
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-border"
              gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
            />
            {/* Dekoratives Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/5 border border-border/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
