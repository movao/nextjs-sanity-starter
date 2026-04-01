import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaGradient({
  heading = 'Bereit für den nächsten Schritt?',
  subheading = 'Starten Sie jetzt und bringen Sie Ihr Projekt auf das nächste Level.',
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id="cta-gradient" className="relative overflow-hidden bg-gradient-to-br from-primary to-accent">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-background/5 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-background/5 rounded-full translate-y-1/2 blur-3xl" />

      <div className="container-narrow relative z-10 py-20 md:py-28 text-center">
        <div data-animate="fade-up">
          <h2 className="text-title font-heading font-bold text-background leading-tight">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-2 text-subtitle text-background/80 max-w-2xl mx-auto">
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
