import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactSimpleProps {
  heading?: string;
  subheading?: string;
}

export default function ContactSimple({
  heading = 'Kontakt',
  subheading = 'Schreiben Sie uns kurz — wir melden uns umgehend',
}: ContactSimpleProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-4xl mx-auto" data-animate="fade-up">
          <form action={formEndpoint} method="POST">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-simple-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-simple-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label htmlFor="contact-simple-name" className="block text-base font-medium text-foreground/80 mb-2">Name *</label>
                <Input type="text" id="contact-simple-name" name="name" required
                       className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="Ihr Name" />
              </div>

              <div className="flex-1 w-full">
                <label htmlFor="contact-simple-email" className="block text-base font-medium text-foreground/80 mb-2">E-Mail *</label>
                <Input type="email" id="contact-simple-email" name="email" required
                       className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="ihre@email.de" />
              </div>

              <div className="flex-[2] w-full">
                <label htmlFor="contact-simple-message" className="block text-base font-medium text-foreground/80 mb-2">Nachricht *</label>
                <Textarea id="contact-simple-message" name="message" rows={1} required
                          className="w-full px-4 py-3.5 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground resize-none"
                          placeholder="Ihre Nachricht..." />
              </div>

              <div className="w-full lg:w-auto">
                <Button type="submit" className="btn-primary px-8 py-3 w-full lg:w-auto whitespace-nowrap">
                  Senden
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required
                       className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
                <span className="text-sm text-foreground/60">
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
