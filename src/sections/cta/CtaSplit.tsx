import { Card, CardContent } from '@/components/ui/card';
import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CtaSplit({
  heading = 'Bleiben Sie auf dem Laufenden',
  subheading = 'Erhalten Sie exklusive Einblicke und Updates direkt in Ihr Postfach.',
  ctaText = 'Anmelden',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id="cta-split" className="section bg-background">
      <div className="container-narrow">
        <div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          data-animate="fade-up"
        >
          {/* Left: Text */}
          <div>
            <h2 className="text-title font-heading font-bold text-foreground">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-foreground/60 leading-relaxed">
                {subheading}
              </p>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-block mt-4 text-base text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>

          {/* Right: Newsletter-style Card */}
          <Card className="p-8 rounded-2xl bg-card border-border">
            <CardContent className="p-0">
              <form className="space-y-4" action="#" method="POST">
                <label htmlFor="cta-email" className="sr-only">
                  E-Mail-Adresse
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
                <LinkButton href={ctaHref} className="w-full py-3 px-6 rounded-xl font-medium bg-primary text-background hover:bg-primary/90 transition-colors">{ctaText}</LinkButton>
              </form>
              <p className="mt-3 text-xs text-foreground/40 text-center">
                Kein Spam. Jederzeit abbestellbar.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
