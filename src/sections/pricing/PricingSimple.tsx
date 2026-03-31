import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface PricingSimpleProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingSimple({
  packages = [],
  heading = 'Einfach & transparent',
  subheading = 'Wählen Sie das passende Paket',
}: PricingSimpleProps) {
  return (
    <section id="pricing-simple" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div
          className="flex flex-col md:flex-row items-stretch justify-center gap-6"
          data-animate="fade-up"
          data-delay="100"
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'flex-1 flex items-center justify-between gap-6 p-6 rounded-2xl border transition-all duration-300',
                pkg.highlighted
                  ? 'bg-primary/5 border-primary'
                  : 'bg-card border-border hover:border-primary/20',
              )}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xl font-heading text-foreground">{pkg.name}</span>
                <span className="text-foreground/40">&mdash;</span>
                <div>
                  <span className="text-2xl font-heading text-primary">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                  )}
                </div>
              </div>

              <Button
               
                variant={pkg.highlighted ? 'default' : 'outline'}
                className={cn(
                  'shrink-0 px-6 py-3 rounded-xl font-medium transition-colors',
                  pkg.highlighted
                    ? 'bg-primary text-background hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-background',
                )}
              >
                <a href="#contact">{pkg.ctaText || 'Auswählen'}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
