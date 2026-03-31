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

interface PricingSideBySideProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingSideBySide({
  packages = [],
  heading = 'Investieren Sie in Ihren Erfolg',
  subheading = 'Transparente Preise, echte Ergebnisse. Wählen Sie das Paket, das zu Ihren Zielen passt.',
}: PricingSideBySideProps) {
  return (
    <section id="pricing-side" className="section bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Value text */}
          <div className="lg:sticky lg:top-24" data-animate="fade-up">
            <h2 className="section-heading text-left">{heading}</h2>
            <p className="section-subheading text-left mt-4">{subheading}</p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <svg
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keine versteckten Kosten</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/70">
                <svg
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Jederzeit kündbar</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/70">
                <svg
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persönlicher Support inklusive</span>
              </li>
            </ul>
          </div>

          {/* Right: Stacked pricing cards */}
          <div className="space-y-6">
            {packages.map((pkg, i) => (
              <Card
                key={i}
                className={cn(
                  'relative p-6 rounded-2xl transition-all duration-300',
                  'hover:shadow-lg hover:shadow-primary/5',
                  pkg.highlighted
                    ? 'bg-primary/5 border-primary'
                    : 'bg-card border-border hover:border-primary/20',
                )}
                data-animate="fade-up"
                data-delay={i * 100}
              >
                {pkg.highlighted && (
                  <Badge className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-primary text-background text-sm font-medium">
                    Beliebt
                  </Badge>
                )}

                <CardHeader className="p-0 mb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <CardTitle className="text-xl font-heading text-foreground">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-right">
                      <span className="text-2xl font-heading text-primary">{pkg.price}</span>
                      {pkg.period && (
                        <span className="text-foreground/60 text-base ml-1">/ {pkg.period}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 mb-6">
                  <ul className="flex flex-wrap gap-2">
                    {pkg.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-1.5 text-base text-foreground/60 bg-muted px-3 py-1 rounded-full"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-primary shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
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
      </div>
    </section>
  );
}
