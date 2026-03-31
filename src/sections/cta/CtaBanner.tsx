import { LinkButton } from '@/components/ui/link-button';

export interface Props {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  heading = 'Bereit durchzustarten?',
  text = 'Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch.',
  buttonText = 'Jetzt starten',
  buttonHref = '#contact',
}: Props) {
  return (
    <section id="cta-banner" className="section bg-primary">
      <div className="container-narrow">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          data-animate="fade-up"
        >
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-background mb-2">
              {heading}
            </h2>
            <p className="text-background/80 leading-relaxed">
              {text}
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0" data-animate="fade-up" data-delay="200">
            <LinkButton href={buttonHref} variant="outline"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl
                         bg-background text-primary font-heading font-semibold
                         hover:bg-background/90 hover:shadow-lg
                         transition-all duration-300">{buttonText}</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
