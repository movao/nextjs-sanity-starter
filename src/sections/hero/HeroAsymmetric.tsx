import { siteConfig } from '@/config';
import { Button } from '@/components/ui/button';
import ImageSlot from '@/components/ui/ImageSlot';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badgeText?: string;
}

export default function HeroAsymmetric({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
  badgeText = 'Willkommen',
}: Props) {
  return (
    <section id="hero" className="section bg-background overflow-hidden">
      <div className="container-narrow">
        <div className="relative grid lg:grid-cols-5 gap-8 items-end py-16 md:py-24 min-h-[80vh]" data-animate="fade-up">
          {/* Text block: 60% width, offset down */}
          <div className="lg:col-span-3 pb-8 md:pb-16">
            {/* Accent badge */}
            {badgeText && (
              <div className="mb-8 animate-in">
                <span className="inline-block border-l-4 border-primary pl-4 text-base font-medium text-foreground/60 uppercase tracking-wider">
                  {badgeText}
                </span>
              </div>
            )}

            <h1 className="text-display font-heading font-bold text-foreground leading-tight animate-in animate-delay-1">
              {headline}
            </h1>

            {subheadline && (
              <p className="mt-8 text-subtitle text-foreground/60 max-w-lg animate-in animate-delay-2">
                {subheadline}
              </p>
            )}

            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
              <Button size="lg">
                <a href={ctaHref}>{ctaText}</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            </div>
          </div>

          {/* Image: top-right, partially cropped */}
          <div className="lg:col-span-2 relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] lg:h-[75%]">
            <ImageSlot
              src={undefined}
              alt=""
              position="hero-asymmetric"
              label="Hero-Bild"
              briefing="Kuenstlerisches Bild, oben rechts platziert, leicht beschnitten fuer einen Magazin-Look"
              format="portrait"
              aspect="3/4"
              priority="must-have"
              category="photo-custom"
              className="aspect-[3/4] lg:aspect-auto lg:h-full w-full rounded-2xl lg:rounded-none lg:rounded-bl-3xl overflow-hidden border border-border"
              gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
