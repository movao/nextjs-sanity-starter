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

export default function HeroCentered({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
}: Props) {
  return (
    <section id="hero" className="section bg-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center py-16 md:py-24" data-animate="fade-up">
          <h1 className="text-display font-heading font-bold text-foreground leading-tight max-w-4xl animate-in">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-8 text-subtitle text-foreground/60 max-w-2xl animate-in animate-delay-1">
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
      </div>
    </section>
  );
}
