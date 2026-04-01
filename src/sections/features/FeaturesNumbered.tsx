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

export default function FeaturesNumbered({
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
              className="group flex items-start gap-6 p-8 rounded-2xl bg-card border border-border
                         hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                         transition-all duration-300"
              data-delay={`${((i % 2) + 1) * 100}`}
            >
              <span className="shrink-0 text-4xl font-heading font-bold text-primary/20 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-foreground/60 leading-relaxed text-base">
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
