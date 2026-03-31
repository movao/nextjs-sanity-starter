import { siteConfig } from '@/config';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: '500+', label: 'Kunden' },
  { value: '15', label: 'Jahre Erfahrung' },
  { value: '98%', label: 'Zufriedenheit' },
  { value: '24/7', label: 'Support' },
];

export default function HeroWithStats({
  headline = siteConfig.name,
  subheadline = siteConfig.tagline,
  ctaText = 'Jetzt starten',
  ctaHref = '#contact',
  secondaryCtaText = 'Mehr erfahren',
  secondaryCtaHref = '#services',
  stats = defaultStats,
}: Props) {
  return (
    <section id="hero" className="section bg-background">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center py-16 md:py-24" data-animate="fade-up">
          <h1 className="text-display font-heading font-bold text-foreground leading-tight max-w-4xl animate-in">
            {headline}
          </h1>

          {subheadline && (
            <p className="mt-8 text-subtitle text-foreground/60 max-w-2xl animate-in animate-delay-1">
              {subheadline}
            </p>
          )}

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-3xl animate-in animate-delay-2">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-display font-heading font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-base text-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-in animate-delay-2">
            <LinkButton href={ctaHref} size="lg">{ctaText}</LinkButton>
            <LinkButton href={secondaryCtaHref} variant="outline" size="lg">{secondaryCtaText}</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
