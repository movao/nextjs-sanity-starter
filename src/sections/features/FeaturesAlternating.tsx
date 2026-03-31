import { cn } from '@/lib/utils';
import ImageSlot from '@/components/ui/ImageSlot';
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

export default function FeaturesAlternating({
  features = [],
  heading = 'Unsere Leistungen',
  subheading = 'Was uns auszeichnet',
}: Props) {
  return (
    <section id="features" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-20" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="space-y-24" data-animate="fade-up">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className={cn(
                  'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
                  isReversed && 'lg:direction-rtl',
                )}
                data-delay={`${((i % 3) + 1) * 100}`}
              >
                {/* Text */}
                <div className={cn(isReversed && 'lg:order-2')}>
                  {feature.icon && (
                    <IconWrapper icon={feature.icon} className="mb-4" />
                  )}

                  <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-foreground/60 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Bild Platzhalter */}
                <div className={cn(isReversed && 'lg:order-1')}>
                  <ImageSlot
                    position={`feature-image-${i + 1}`}
                    label={`Bild: ${feature.title}`}
                    briefing={`Bild zur Leistung "${feature.title}"`}
                    format="landscape"
                    aspect="4/3"
                    priority="nice-to-have"
                    category="photo-custom"
                    className="aspect-[4/3] rounded-2xl overflow-hidden border border-border"
                    gradientClass="bg-gradient-to-br from-primary/5 to-primary/10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
