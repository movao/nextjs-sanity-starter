import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactFullwidthProps {
  heading?: string;
  subheading?: string;
}

export default function ContactFullwidth({
  heading = 'Kontakt aufnehmen',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
}: ContactFullwidthProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading text-primary-foreground">{heading}</h2>
          <p className="section-subheading mx-auto text-primary-foreground/70">{subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <form action={formEndpoint} method="POST" className="space-y-5">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-full-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-full-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-full-name" className="block text-sm font-medium text-primary-foreground/80 mb-2">Name *</label>
                <Input type="text" id="contact-full-name" name="name" required
                       className="w-full px-4 py-3 rounded-lg border border-background/30 bg-background/10 focus:border-background/60 focus:ring-2 focus:ring-background/20 outline-none transition-all text-primary-foreground placeholder:text-primary-foreground/40"
                       placeholder="Ihr Name" />
              </div>

              <div>
                <label htmlFor="contact-full-email" className="block text-sm font-medium text-primary-foreground/80 mb-2">E-Mail *</label>
                <Input type="email" id="contact-full-email" name="email" required
                       className="w-full px-4 py-3 rounded-lg border border-background/30 bg-background/10 focus:border-background/60 focus:ring-2 focus:ring-background/20 outline-none transition-all text-primary-foreground placeholder:text-primary-foreground/40"
                       placeholder="ihre@email.de" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-full-phone" className="block text-sm font-medium text-primary-foreground/80 mb-2">Telefon</label>
              <Input type="tel" id="contact-full-phone" name="phone"
                     className="w-full px-4 py-3 rounded-lg border border-background/30 bg-background/10 focus:border-background/60 focus:ring-2 focus:ring-background/20 outline-none transition-all text-primary-foreground placeholder:text-primary-foreground/40"
                     placeholder="+49 123 456 789" />
            </div>

            <div>
              <label htmlFor="contact-full-message" className="block text-sm font-medium text-primary-foreground/80 mb-2">Nachricht *</label>
              <Textarea id="contact-full-message" name="message" rows={5} required
                        className="w-full px-4 py-3 rounded-lg border border-background/30 bg-background/10 focus:border-background/60 focus:ring-2 focus:ring-background/20 outline-none transition-all text-primary-foreground placeholder:text-primary-foreground/40 resize-y"
                        placeholder="Wie können wir Ihnen helfen?" />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required
                       className="mt-1 w-4 h-4 rounded border-background/30 text-background focus:ring-background/20" />
                <span className="text-sm text-primary-foreground/70">
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  <a href="/datenschutz" className="text-primary-foreground underline hover:no-underline"> Datenschutzerklärung</a> zu. *
                </span>
              </label>
            </div>

            <Button type="submit" className="w-full py-4 bg-background text-foreground hover:bg-background/90 font-medium rounded-lg transition-colors">
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
