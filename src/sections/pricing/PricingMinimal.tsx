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

interface PricingMinimalProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingMinimal({
  packages = [],
  heading = 'Preise',
  subheading = 'Klar. Einfach. Fair.',
}: PricingMinimalProps) {
  return (
    <section id="pricing-minimal" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div
          className="flex flex-col md:flex-row items-stretch justify-center gap-8"
          data-animate="fade-up"
          data-delay="100"
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'flex-1 flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300',
                pkg.highlighted
                  ? 'bg-primary/5 ring-2 ring-primary'
                  : 'hover:bg-muted/50',
              )}
            >
              <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                {pkg.name}
              </span>
              <div className="mb-6">
                <span className="text-5xl font-heading text-primary">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                )}
              </div>
              <Button
               
                variant={pkg.highlighted ? 'default' : 'outline'}
                className={cn(
                  'px-8 py-3 rounded-xl font-medium transition-colors',
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
