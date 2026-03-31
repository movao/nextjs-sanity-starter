import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface PricingCompactProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingCompact({
  packages = [],
  heading = 'Pakete im Vergleich',
  subheading = 'Alle Optionen auf einen Blick',
}: PricingCompactProps) {
  return (
    <section id="pricing-compact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <Card className="rounded-2xl border-border overflow-hidden" data-animate="fade-up" data-delay="100">
          <CardContent className="p-0">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={cn(
                  'grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_1fr_auto] items-center gap-4 md:gap-8 p-6',
                  i !== packages.length - 1 && 'border-b border-border',
                  pkg.highlighted && 'bg-primary/5',
                )}
              >
                {/* Name + Features */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-heading text-foreground">{pkg.name}</span>
                    {pkg.highlighted && (
                      <Badge className="bg-primary text-background text-xs px-2 py-0.5 rounded-full">
                        Beliebt
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-foreground/60 truncate hidden md:block">
                    {pkg.features.join(' · ')}
                  </p>
                </div>

                {/* Price */}
                <div className="text-right md:text-left">
                  <span className="text-2xl font-heading text-primary">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                  )}
                </div>

                {/* CTA */}
                <Button
                 
                  variant={pkg.highlighted ? 'default' : 'outline'}
                  className={cn(
                    'px-6 py-2 rounded-xl font-medium transition-colors text-sm',
                    pkg.highlighted
                      ? 'bg-primary text-background hover:bg-primary/90'
                      : 'bg-muted text-foreground hover:bg-primary hover:text-background',
                  )}
                >
                  <a href="#contact">{pkg.ctaText || 'Auswählen'}</a>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
