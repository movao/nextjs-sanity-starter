import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  quote?: string;
  quoteName?: string;
}

export default function CtaWithTestimonial({
  heading = 'Überzeugen Sie sich selbst',
  subheading = 'Hunderte Kunden vertrauen bereits auf unsere Lösung.',
  ctaText = 'Kostenlos testen',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  quote = 'Die Zusammenarbeit war hervorragend. Wir konnten unsere Ziele schneller als erwartet erreichen.',
  quoteName = 'Maria Müller, Geschäftsführerin',
}: Props) {
  return (
    <section id="cta-testimonial" className="section bg-background">
      <div className="container-narrow">
        <div
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
          data-animate="fade-up"
        >
          {/* Left: CTA */}
          <div>
            <h2 className="text-title font-heading font-bold text-foreground">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-2 text-base text-foreground/60 leading-relaxed">
                {subheading}
              </p>
            )}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <LinkButton href={ctaHref} className="px-8 py-4 rounded-xl font-medium bg-primary text-background hover:bg-primary/90 transition-colors">{ctaText}</LinkButton>
              {secondaryCtaText && secondaryCtaHref && (
                <LinkButton href={secondaryCtaHref} variant="outline"
                  className="px-8 py-4 rounded-xl font-medium bg-muted text-foreground hover:bg-primary hover:text-background transition-colors">{secondaryCtaText}</LinkButton>
              )}
            </div>
          </div>

          {/* Right: Quote */}
          <div className="relative p-8 rounded-2xl bg-muted border border-border">
            {/* Quote mark */}
            <svg
              className="absolute -top-4 left-6 w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="text-foreground/80 text-lg leading-relaxed italic">
              {quote}
            </blockquote>

            {quoteName && (
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-base font-medium text-foreground">{quoteName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
