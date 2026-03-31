import { cn } from '@/lib/utils';

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface PricingCardsProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingCards({
  packages = [],
  heading = 'Unsere Pakete',
  subheading = 'Finden Sie das passende Angebot für Ihre Bedürfnisse',
}: PricingCardsProps) {
  return (
    <section id="pricing" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'group relative p-8 rounded-2xl border transition-all duration-300',
                'hover:shadow-lg hover:shadow-primary/5',
                pkg.highlighted
                  ? 'bg-primary/5 border-primary'
                  : 'bg-card border-border hover:border-primary/20',
              )}
              data-animate="fade-up"
              data-delay={i * 100}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-background text-sm font-medium">
                  Beliebt
                </span>
              )}

              <h3 className="text-xl font-heading text-foreground mb-2">
                {pkg.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-heading text-primary">
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span className="text-foreground/60 text-subtitle ml-1">
                    / {pkg.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-foreground/60">
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

              <a
                href="#contact"
                className={cn(
                  'block w-full text-center py-3 px-6 rounded-xl font-medium transition-colors',
                  pkg.highlighted
                    ? 'bg-primary text-background hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-background',
                )}
              >
                {pkg.ctaText || 'Auswählen'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
