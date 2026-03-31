import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaFloating({
  heading = 'Lassen Sie uns gemeinsam starten',
  subheading = 'Vereinbaren Sie noch heute ein kostenloses Erstgespräch.',
  ctaText = 'Gespräch vereinbaren',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id="cta-floating" className="section bg-muted">
      <div className="container-narrow">
        <Card
          className="max-w-2xl mx-auto p-10 md:p-14 rounded-2xl bg-card border-border shadow-lg shadow-primary/5 text-center"
          data-animate="fade-up"
        >
          <CardContent className="p-0">
            <h2 className="text-title font-heading font-bold text-foreground">
              {heading}
            </h2>

            {subheading && (
              <p className="mt-4 text-foreground/60 leading-relaxed max-w-md mx-auto">
                {subheading}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
               
                className="px-8 py-4 rounded-xl font-medium bg-primary text-background hover:bg-primary/90 transition-colors"
              >
                <a href={ctaHref}>{ctaText}</a>
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button
                 
                  variant="outline"
                  className="px-8 py-4 rounded-xl font-medium bg-muted text-foreground hover:bg-primary hover:text-background transition-colors"
                >
                  <a href={secondaryCtaHref}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
