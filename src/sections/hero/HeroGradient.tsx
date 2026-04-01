import { siteConfig } from '@/config';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badgeText?: string;
}

export default function HeroGradient({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
  badgeText = 'Neu: Jetzt online buchen',
}: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-[length:200%_200%] animate-[gradientShift_8s_ease_infinite]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, var(--color-primary), var(--color-accent), var(--color-primary))',
        }}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay" />

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center py-16" data-animate="fade-up">
          {/* Badge */}
          {badgeText && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-sm border border-background/20 px-4 py-2 animate-in">
              <span className="text-base font-medium text-background">
                {badgeText}
              </span>
            </div>
          )}

          <h1 className="text-display font-heading font-bold text-background leading-tight max-w-4xl animate-in animate-delay-1">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-2 text-subtitle text-background/80 max-w-2xl animate-in animate-delay-2">
              {subheadline}
            </p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
            <LinkButton href={ctaHref} size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-primary">{ctaText}</LinkButton>
            {secondaryCtaText && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-background/80 hover:text-background font-medium transition-colors"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CSS animation keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
