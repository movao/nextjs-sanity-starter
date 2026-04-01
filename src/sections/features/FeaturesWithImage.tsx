import IconWrapper from '@/components/ui/IconWrapper';
import ImageSlot from '@/components/ui/ImageSlot';

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

export default function FeaturesWithImage({
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

        <div className="grid lg:grid-cols-2 gap-16 items-center" data-animate="fade-up">
          {/* Feature list */}
          <div className="flex flex-col gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group flex items-start gap-4"
                data-delay={`${(i + 1) * 100}`}
              >
                {feature.icon && (
                  <div className="shrink-0 mt-1">
                    <IconWrapper icon={feature.icon} size={20} />
                  </div>
                )}

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

          {/* Image */}
          <ImageSlot
            position="features-image"
            label="Features Bild"
            briefing="Bild passend zu den vorgestellten Leistungen"
            format="portrait"
            priority="nice-to-have"
            category="photo-stock"
            className="w-full aspect-[4/5] rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
