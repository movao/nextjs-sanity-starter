'use client';

import { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  heading?: string;
  subheading?: string;
}

export default function TestimonialsCarousel({
  testimonials = [],
  heading = 'Das sagen unsere Kunden',
  subheading = 'Erfahrungen und Bewertungen',
}: TestimonialsCarouselProps) {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getCardWidth = useCallback(() => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 32 : 0; // 32 = gap-8
  }, []);

  const handleNext = useCallback(() => {
    if (!trackRef.current || !wrapperRef.current) return;
    const maxOffset = trackRef.current.scrollWidth - wrapperRef.current.offsetWidth;
    setOffset((prev) => Math.min(prev + getCardWidth(), maxOffset));
  }, [getCardWidth]);

  const handlePrev = useCallback(() => {
    setOffset((prev) => Math.max(prev - getCardWidth(), 0));
  }, [getCardWidth]);

  return (
    <section id="testimonials" className="section bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {/* Carousel wrapper */}
        <div ref={wrapperRef} className="relative overflow-hidden" data-animate="fade-up">
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-500"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {testimonials.map((item) => (
              <blockquote
                key={item._id}
                className="relative flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] p-8 rounded-2xl bg-card border border-border shadow-sm"
              >
                <span className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
                  &ldquo;
                </span>

                {item.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          'w-4 h-4',
                          i < item.rating! ? 'text-amber-400' : 'text-foreground/20',
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

          {/* Navigation */}
          {testimonials.length > 3 && (
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/20 transition-colors"
                aria-label="Vorheriges Testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/20 transition-colors"
                aria-label="Nächstes Testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
