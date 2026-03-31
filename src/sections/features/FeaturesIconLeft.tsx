import IconWrapper from '@/components/ui/IconWrapper';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  features: Feature[];
  heading?: string;
  subheading?: string;
}

export default function FeaturesIconLeft({
  features = [],
  heading = 'Unsere Leistungen',
  subheading = 'Was uns auszeichnet',
}: Props) {
  return (
    <section id="features" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="flex flex-col divide-y divide-border" data-animate="fade-up">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex items-start gap-8 py-8 first:pt-0 last:pb-0"
              data-delay={`${(i + 1) * 100}`}
            >
              {feature.icon && (
                <div className="shrink-0">
                  <IconWrapper icon={feature.icon} />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-base max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
