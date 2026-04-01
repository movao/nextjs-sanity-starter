import { Badge } from '@/components/ui/badge';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaUrgent({
  heading = 'Jetzt zuschlagen — bevor es zu spät ist',
  subheading = 'Nur noch wenige Plätze verfügbar. Sichern Sie sich Ihr Angebot.',
  ctaText = 'Jetzt sichern',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id="cta-urgent" className="bg-primary">
      <div className="container-narrow py-16 md:py-20">
        <div className="text-center" data-animate="fade-up">
          <Badge className="mb-6 px-4 py-1.5 rounded-full bg-background/20 text-background text-sm font-medium backdrop-blur-sm border-0">
            Zeitlich begrenzt
          </Badge>

          <h2 className="text-title font-heading font-bold text-background leading-tight">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-2 text-background/80 text-subtitle max-w-2xl mx-auto">
              {subheading}
            </p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href={ctaHref} size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg text-lg px-10 py-4">
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LinkButton>

            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="px-8 py-4 text-lg font-medium text-background border border-background/30 rounded-[var(--radius)] hover:bg-background/10 transition-colors"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
