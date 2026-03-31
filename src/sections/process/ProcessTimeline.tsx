import { cn } from '@/lib/utils';
import IconOrEmoji from '@/components/ui/IconOrEmoji';

export interface Step {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  steps: Step[];
  heading?: string;
  subheading?: string;
}

export default function ProcessTimeline({
  steps = [],
  heading = 'Unser Prozess',
  subheading = 'Schritt für Schritt zum Erfolg',
}: Props) {
  return (
    <section id="process-timeline" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={cn(
                    'relative flex items-start gap-8',
                    'md:gap-0',
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse',
                  )}
                  data-animate="fade-up"
                  data-delay={String((i + 1) * 100)}
                >
                  {/* Content card */}
                  <div className={cn(
                    'flex-1 ml-16 md:ml-0',
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left',
                  )}>
                    <div className="p-8 rounded-2xl bg-card border border-border
                                    hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
                                    transition-all duration-300">
                      <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base text-foreground/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center
                                  w-12 h-12 rounded-full bg-primary text-background font-heading text-lg font-bold
                                  z-10 shrink-0">
                    {step.icon ? (
                      <IconOrEmoji icon={step.icon} size={20} weight="regular" />
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
