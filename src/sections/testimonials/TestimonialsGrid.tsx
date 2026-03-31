import { cn } from '@/lib/utils';

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[];
  heading?: string;
  subheading?: string;
}

export default function TestimonialsGrid({
  testimonials = [],
  heading = 'Das sagen unsere Kunden',
  subheading = 'Erfahrungen und Bewertungen',
}: TestimonialsGridProps) {
  return (
    <section id="testimonials" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate="fade-up">
          {testimonials.map((item, i) => (
            <blockquote
              key={item._id}
              data-delay={`${((i % 3) + 1) * 100}`}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
                &ldquo;
              </span>

              {item.rating && (
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg
                      key={si}
                      className={cn(
                        'w-4 h-4',
                        si < item.rating! ? 'text-amber-400' : 'text-foreground/20',
                      )}
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              <p className="relative text-foreground/70 leading-relaxed italic">
                {item.quote}
              </p>

              <footer className="mt-6 pt-4 border-t border-border/50">
                <cite className="not-italic">
                  <span className="font-medium text-foreground">{item.name}</span>
                  {item.role && (
                    <span className="block text-sm text-foreground/50 mt-0.5">{item.role}</span>
                  )}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
