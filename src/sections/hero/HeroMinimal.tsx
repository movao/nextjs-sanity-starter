import { siteConfig } from '@/config';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroMinimal({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Mehr erfahren',
  ctaHref = '#services',
}: Props) {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl py-24 md:py-32" data-animate="fade-up">
          <h1 className="text-display font-heading font-bold text-foreground leading-[1.05] tracking-tight animate-in">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-8 text-subtitle text-foreground/50 max-w-2xl animate-in animate-delay-1">
              {subheadline}
            </p>
          )}

          <div className="mt-12 animate-in animate-delay-2">
            <LinkButton href={ctaHref} variant="ghost" size="lg" className="group text-lg text-primary hover:text-primary/80">
              {ctaText}
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
