import { cn } from '@/lib/utils';
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

function getBentoClass(index: number): string {
  if (index === 0) return 'md:col-span-2 md:row-span-2';
  if (index === 3) return 'md:col-span-2';
  return '';
}

export default function FeaturesBento({
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

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr" data-animate="fade-up">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                'group relative p-8 rounded-2xl bg-card border border-border overflow-hidden',
                'hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
                getBentoClass(i),
              )}
              data-delay={`${((i % 3) + 1) * 100}`}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                {feature.icon && (
                  <IconWrapper icon={feature.icon} className="mb-6" />
                )}

                <h3 className={cn(
                  'font-heading text-foreground mb-2',
                  i === 0 ? 'text-2xl md:text-3xl' : 'text-xl',
                )}>
                  {feature.title}
                </h3>

                <p className={cn(
                  'text-foreground/60 leading-relaxed',
                  i === 0 ? 'text-base md:text-lg' : 'text-base',
                )}>
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
