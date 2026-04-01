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

export default function HeroSplit5050({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
}: Props) {
  return (
    <section id="hero" className="section bg-background overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left panel: primary background with white text */}
        <div className="bg-primary flex items-center" data-animate="fade-up">
          <div className="px-8 md:px-16 lg:px-20 py-16 max-w-xl ml-auto">
            <h1 className="text-display font-heading font-bold text-background leading-tight animate-in">
              {headline}
            </h1>

            {subheadline && (
              <p className="mt-2 text-subtitle text-background/80 animate-in animate-delay-1">
                {subheadline}
              </p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
              <LinkButton href={ctaHref} size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">{ctaText}</LinkButton>
              {secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-background/80 hover:text-background font-medium transition-colors"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right panel: image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <ImageSlot
            src={undefined}
            alt=""
            position="hero-split"
            label="Hero-Bild"
            briefing="Hochwertiges Bild, das die rechte Haelfte des Heros fuellt"
            format="portrait"
            aspect="auto"
            priority="must-have"
            category="photo-custom"
            className="absolute inset-0 w-full h-full object-cover"
            gradientClass="bg-gradient-to-br from-primary/10 to-primary/20"
          />
        </div>
      </div>
    </section>
  );
}
