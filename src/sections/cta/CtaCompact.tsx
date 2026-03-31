import { Button } from '@/components/ui/button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CtaCompact({
  heading = 'Bereit loszulegen?',
  subheading = 'Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.',
  ctaText = 'Kontakt aufnehmen',
  ctaHref = '#contact',
}: Props) {
  return (
    <section id="cta" className="section bg-background">
      <div className="container-narrow">
        <div
          className="max-w-3xl mx-auto p-10 md:p-14 rounded-2xl bg-card border border-border
                      flex flex-col md:flex-row items-center gap-8 md:gap-12"
          data-animate="fade-up"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-title font-heading font-bold text-foreground">
              {heading}
            </h2>

            {subheading && (
              <p className="mt-3 text-foreground/60 leading-relaxed">
                {subheading}
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            <Button render={<a href={ctaHref} />} variant="default" className="btn-primary px-8 py-4 whitespace-nowrap">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
