import { cn } from '@/lib/utils';

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface PricingTableProps {
  packages?: Package[];
  heading?: string;
  subheading?: string;
}

export default function PricingTable({
  packages = [],
  heading = 'Pakete vergleichen',
  subheading = 'Alle Features im Überblick',
}: PricingTableProps) {
  /* Collect all unique features across packages */
  const allFeatures = [...new Set(packages.flatMap((p) => p.features))];

  return (
    <section id="pricing-table" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto" data-animate="fade-up" data-delay="100">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-foreground/60 font-medium border-b border-border">
                  Feature
                </th>
                {packages.map((pkg, pi) => (
                  <th
                    key={pi}
                    className={cn(
                      'p-4 text-center border-b font-heading',
                      pkg.highlighted ? 'border-primary text-primary' : 'border-border text-foreground',
                    )}
                  >
                    <div className="text-xl">{pkg.name}</div>
                    <div className="mt-1">
                      <span className="text-xl font-heading">{pkg.price}</span>
                      {pkg.period && (
                        <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                  <td className="p-4 text-foreground/60 border-b border-border">
                    {feature}
                  </td>
                  {packages.map((pkg, pi) => (
                    <td
                      key={pi}
                      className={cn(
                        'p-4 text-center border-b',
                        pkg.highlighted ? 'border-primary/20' : 'border-border',
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
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4" />
                {packages.map((pkg, pi) => (
                  <td key={pi} className="p-4 text-center">
                    <a
                      href="#contact"
                      className={cn(
                        'inline-block py-3 px-6 rounded-xl font-medium transition-colors',
                        pkg.highlighted
                          ? 'bg-primary text-background hover:bg-primary/90'
                          : 'bg-muted text-foreground hover:bg-primary hover:text-background',
                      )}
                    >
                      {pkg.ctaText || 'Auswählen'}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards fallback */}
        <div className="md:hidden space-y-6" data-animate="fade-up" data-delay="100">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'relative p-6 rounded-2xl border',
                pkg.highlighted
                  ? 'bg-primary/5 border-primary'
                  : 'bg-card border-border',
              )}
              data-delay={i * 100}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-background text-sm font-medium">
                  Beliebt
                </span>
              )}

              <h3 className="text-xl font-heading text-foreground mb-1">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-xl font-heading text-primary">{pkg.price}</span>
                {pkg.period && (
                  <span className="text-foreground/60 text-sm ml-1">/ {pkg.period}</span>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {allFeatures.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-base">
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
