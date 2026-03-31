import { cn } from '@/lib/utils';
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

interface PricingFeatureMatrixProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingFeatureMatrix({
  packages = [],
  heading = 'Feature-Vergleich',
  subheading = 'Finden Sie heraus, welches Paket am besten zu Ihnen passt',
}: PricingFeatureMatrixProps) {
  const allFeatures = [...new Set(packages.flatMap((p) => p.features))];

  return (
    <section id="pricing-matrix" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {/* Desktop Matrix */}
        <div className="hidden md:block" data-animate="fade-up" data-delay="100">
          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Header Row */}
            <div
              className={cn(
                'grid items-end gap-0 bg-muted/50',
                packages.length === 2 && 'grid-cols-3',
                packages.length === 3 && 'grid-cols-4',
                packages.length >= 4 && `grid-cols-[200px_repeat(${packages.length},1fr)]`,
              )}
              style={{
                gridTemplateColumns: `200px repeat(${packages.length}, 1fr)`,
              }}
            >
              <div className="p-6" />
              {packages.map((pkg, pi) => (
                <div
                  key={pi}
                  className={cn(
                    'p-6 text-center',
                    pkg.highlighted && 'bg-primary/5',
                  )}
                >
                  {pkg.highlighted && (
                    <Badge className="mb-2 bg-primary text-background text-xs px-3 py-0.5 rounded-full">
                      Empfohlen
                    </Badge>
                  )}
                  <div className="text-xl font-heading text-foreground">{pkg.name}</div>
                  <div className="mt-2">
                    <span className="text-3xl font-heading text-primary">{pkg.price}</span>
                    {pkg.period && (
                      <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {allFeatures.map((feature, fi) => (
              <div
                key={fi}
                className={cn('grid items-center', fi % 2 === 0 ? 'bg-card' : 'bg-background')}
                style={{
                  gridTemplateColumns: `200px repeat(${packages.length}, 1fr)`,
                }}
              >
                <div className="p-4 text-sm text-foreground/70 border-r border-border">
                  {feature}
                </div>
                {packages.map((pkg, pi) => (
                  <div
                    key={pi}
                    className={cn(
                      'p-4 text-center',
                      pkg.highlighted && 'bg-primary/5',
                    )}
                  >
                    {pkg.features.includes(feature) ? (
                      <svg
                        className="w-5 h-5 text-primary mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-foreground/20">&mdash;</span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div
              className="grid items-center bg-muted/30 border-t border-border"
              style={{
                gridTemplateColumns: `200px repeat(${packages.length}, 1fr)`,
              }}
            >
              <div className="p-4" />
              {packages.map((pkg, pi) => (
                <div key={pi} className="p-4 text-center">
                  <Button
                   
                    variant={pkg.highlighted ? 'default' : 'outline'}
                    className={cn(
                      'px-6 py-3 rounded-xl font-medium transition-colors',
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
        </div>

        {/* Mobile Fallback: stacked cards */}
        <div className="md:hidden space-y-6" data-animate="fade-up" data-delay="100">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'p-6 rounded-2xl border',
                pkg.highlighted ? 'bg-primary/5 border-primary' : 'bg-card border-border',
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-heading text-foreground">{pkg.name}</span>
                {pkg.highlighted && (
                  <Badge className="bg-primary text-background text-xs px-2 py-0.5 rounded-full">
                    Empfohlen
                  </Badge>
                )}
              </div>
              <div className="mb-4">
                <span className="text-3xl font-heading text-primary">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {allFeatures.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    {pkg.features.includes(feature) ? (
                      <svg
                        className="w-4 h-4 text-primary shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="w-4 h-4 text-foreground/20 text-center shrink-0">&mdash;</span>
                    )}
                    <span className={pkg.features.includes(feature) ? 'text-foreground' : 'text-foreground/40'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
               
                variant={pkg.highlighted ? 'default' : 'outline'}
                className={cn(
                  'w-full py-3 px-6 rounded-xl font-medium transition-colors',
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
