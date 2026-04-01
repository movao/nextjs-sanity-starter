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
}

interface PricingGradientProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingGradient({
  packages = [],
  heading = 'Unsere Pakete',
  subheading = 'Das passende Angebot für jeden Bedarf',
}: PricingGradientProps) {
  return (
    <section id="pricing-gradient" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={cn(
                'group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden',
                'hover:shadow-lg',
                pkg.highlighted
                  ? 'bg-gradient-to-br from-primary to-accent border-0 text-background'
                  : 'bg-card border-border hover:border-primary/20',
              )}
              data-animate="fade-up"
              data-delay={i * 100}
            >
              {pkg.highlighted && (
                <Badge className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/20 text-background text-xs font-medium backdrop-blur-sm">
                  Empfohlen
                </Badge>
              )}

              <CardHeader className="p-0 mb-6">
                <CardTitle
                  className={cn(
                    'text-xl font-heading mb-2',
                    pkg.highlighted ? 'text-background' : 'text-foreground',
                  )}
                >
                  {pkg.name}
                </CardTitle>
                <div>
                  <span
                    className={cn(
                      'text-4xl font-heading',
                      pkg.highlighted ? 'text-background' : 'text-primary',
                    )}
                  >
                    {pkg.price}
                  </span>
                  {pkg.period && (
                    <span
                      className={cn(
                        'text-subtitle ml-1',
                        pkg.highlighted ? 'text-background/70' : 'text-base text-foreground/60',
                      )}
                    >
                      / {pkg.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-0 mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className={cn(
                        'flex items-start gap-3',
                        pkg.highlighted ? 'text-background/80' : 'text-base text-foreground/60',
                      )}
                    >
                      <svg
                        className={cn(
                          'w-5 h-5 shrink-0 mt-0.5',
                          pkg.highlighted ? 'text-background' : 'text-primary',
                        )}
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
                 
                  variant={pkg.highlighted ? 'outline' : 'outline'}
                  className={cn(
                    'w-full py-3 px-6 rounded-xl font-medium transition-colors',
                    pkg.highlighted
                      ? 'bg-background text-foreground hover:bg-background/90 border-0'
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
