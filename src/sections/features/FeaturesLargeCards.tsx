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

export default function FeaturesLargeCards({
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

        <div className="grid md:grid-cols-2 gap-8" data-animate="fade-up">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-12 rounded-2xl bg-muted
                         hover:shadow-lg hover:shadow-primary/5
                         transition-all duration-300"
              data-delay={`${((i % 2) + 1) * 100}`}
            >
              {feature.icon && (
                <IconWrapper icon={feature.icon} size={32} className="mb-8" />
              )}

              <h3 className="text-xl font-heading text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-foreground/60 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
