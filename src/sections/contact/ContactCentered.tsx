import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactCenteredProps {
  heading?: string;
  subheading?: string;
}

export default function ContactCentered({
  heading = 'Kontakt',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
}: ContactCenteredProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-lg mx-auto" data-animate="fade-up">
          <form action={formEndpoint} method="POST" className="space-y-5">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-centered-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-centered-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="contact-centered-name" className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
              <Input type="text" id="contact-centered-name" name="name" required
                     className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                     placeholder="Ihr Name" />
            </div>

            <div>
              <label htmlFor="contact-centered-email" className="block text-sm font-medium text-foreground/80 mb-2">E-Mail *</label>
              <Input type="email" id="contact-centered-email" name="email" required
                     className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                     placeholder="ihre@email.de" />
            </div>

            <div>
              <label htmlFor="contact-centered-phone" className="block text-sm font-medium text-foreground/80 mb-2">Telefon</label>
              <Input type="tel" id="contact-centered-phone" name="phone"
                     className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                     placeholder="+49 123 456 789" />
            </div>

            <div>
              <label htmlFor="contact-centered-message" className="block text-sm font-medium text-foreground/80 mb-2">Nachricht *</label>
              <Textarea id="contact-centered-message" name="message" rows={5} required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground resize-y"
                        placeholder="Wie können wir Ihnen helfen?" />
            </div>

            <div>
              <label className="flex items-center justify-center gap-3 cursor-pointer">
                <input type="checkbox" required
                       className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
                <span className="text-sm text-foreground/60">
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
                </span>
              </label>
            </div>

            <div className="text-center pt-2">
              <Button type="submit" className="btn-primary px-12 py-4">
                Nachricht senden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
