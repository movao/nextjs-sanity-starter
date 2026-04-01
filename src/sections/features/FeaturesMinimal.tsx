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

export default function FeaturesMinimal({
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16" data-animate="fade-up">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group"
              data-delay={`${((i % 3) + 1) * 100}`}
            >
              {feature.icon && (
                <IconWrapper icon={feature.icon} className="mb-4" />
              )}

              <h3 className="text-xl font-heading text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-base text-foreground/60 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
