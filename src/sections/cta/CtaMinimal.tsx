import { Button } from '@/components/ui/button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaMinimal({
  heading = 'Bereit loszulegen?',
  ctaText = 'Kontakt aufnehmen',
  ctaHref = '#contact',
}: Props) {
  return (
    <section id="cta-minimal" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center" data-animate="fade-up">
          <h2 className="text-title font-heading font-bold text-foreground">
            {heading}
          </h2>

          <div className="mt-8">
            <Button
             
              className="px-10 py-4 rounded-xl font-medium bg-primary text-background hover:bg-primary/90 transition-colors"
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
