import { siteConfig } from '@/config';
import { Button } from '@/components/ui/button';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroCardStyle({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
}: Props) {
  return (
    <section id="hero" className="section bg-muted">
      <div className="container-narrow">
        <div className="flex items-center justify-center py-16 md:py-24" data-animate="fade-up">
          {/* Card container */}
          <div className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-lg px-8 md:px-16 py-16 md:py-20 text-center">
            <h1 className="text-display font-heading font-bold text-foreground leading-tight animate-in">
              {headline}
            </h1>

            {subheadline && (
              <p className="mt-8 text-subtitle text-foreground/60 max-w-xl mx-auto animate-in animate-delay-1">
                {subheadline}
              </p>
            )}

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-in animate-delay-2">
              <Button size="lg">
                <a href={ctaHref}>{ctaText}</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
