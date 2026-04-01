'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  yearlyPrice?: string;
}

interface PricingToggleProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingToggle({
  packages = [],
  heading = 'Flexibel planen',
  subheading = 'Monatlich oder jährlich — Sie entscheiden',
}: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing-toggle" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12" data-animate="fade-up" data-delay="100">
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              !isYearly ? 'text-primary' : 'text-foreground/60',
            )}
          >
            Monatlich
          </span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              'relative inline-flex h-8 w-14 items-center rounded-full transition-colors',
              isYearly ? 'bg-primary' : 'bg-muted',
            )}
            aria-label="Abrechnungszeitraum wechseln"
          >
            <span
              className={cn(
                'inline-block h-6 w-6 rounded-full bg-background shadow-sm transition-transform',
                isYearly ? 'translate-x-7' : 'translate-x-1',
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              isYearly ? 'text-primary' : 'text-foreground/60',
            )}
          >
            Jährlich
          </span>
          {isYearly && (
            <Badge className="bg-primary/10 text-primary border-0 text-xs">Spare 20%</Badge>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={cn(
                'group relative p-8 rounded-2xl transition-all duration-300',
                'hover:shadow-lg hover:shadow-primary/5',
                pkg.highlighted
                  ? 'bg-primary/5 border-primary'
                  : 'bg-card border-border hover:border-primary/20',
              )}
              data-animate="fade-up"
              data-delay={i * 100}
            >
              {pkg.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-background text-sm font-medium">
                  Beliebt
                </Badge>
              )}

              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-heading text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div>
                  <span className="text-4xl font-heading text-primary">
                    {isYearly && pkg.yearlyPrice ? pkg.yearlyPrice : pkg.price}
                  </span>
                  <span className="text-foreground/60 text-subtitle ml-1">
                    / {isYearly ? 'Jahr' : pkg.period || 'Monat'}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-0 mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-base text-foreground/60">
                      <svg
                        className="w-5 h-5 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-0">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
