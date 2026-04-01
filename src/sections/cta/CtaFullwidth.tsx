import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CtaFullwidth({
  heading = 'Bereit loszulegen?',
  subheading = 'Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.',
  ctaText = 'Jetzt Kontakt aufnehmen',
  ctaHref = '#contact',
}: Props) {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary">
      {/* Dekorative Elemente */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

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

          <div className="mt-6">
            <LinkButton href={ctaHref} size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg text-lg px-10 py-4">
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
