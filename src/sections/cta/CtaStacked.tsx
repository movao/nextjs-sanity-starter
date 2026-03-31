import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaStacked({
  heading = 'Warum jetzt handeln?',
  subheading = 'Starten Sie noch heute und profitieren Sie sofort.',
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id="cta-stacked" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center" data-animate="fade-up">
          <h2 className="text-title font-heading font-bold text-foreground">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-4 text-foreground/60 leading-relaxed">
              {subheading}
            </p>
          )}

          {/* Benefit bullets */}
          <ul className="mt-8 space-y-3 text-left inline-block">
            <li className="flex items-center gap-3 text-foreground/70">
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Schnelle Umsetzung in wenigen Tagen</span>
            </li>
            <li className="flex items-center gap-3 text-foreground/70">
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persönliche Betreuung von Anfang an</span>
            </li>
            <li className="flex items-center gap-3 text-foreground/70">
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Messbare Ergebnisse garantiert</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href={ctaHref} className="px-10 py-4 rounded-xl font-medium bg-primary text-background hover:bg-primary/90 transition-colors">{ctaText}</LinkButton>

            {secondaryCtaText && secondaryCtaHref && (
              <LinkButton href={secondaryCtaHref} variant="outline"
                className="px-8 py-4 rounded-xl font-medium bg-muted text-foreground hover:bg-primary hover:text-background transition-colors">{secondaryCtaText}</LinkButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
