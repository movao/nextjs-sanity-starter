import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactCardProps {
  heading?: string;
  subheading?: string;
}

export default function ContactCard({
  heading = 'Kontakt',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
}: ContactCardProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <Card className="shadow-lg border border-border">
            <CardContent className="p-8 md:p-12">
              <form action={formEndpoint} method="POST" className="space-y-5">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-card-gotcha">Dieses Feld nicht ausfüllen</label>
                  <input type="text" id="contact-card-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-card-name" className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
                    <Input type="text" id="contact-card-name" name="name" required
                           className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                           placeholder="Ihr Name" />
                  </div>

                  <div>
                    <label htmlFor="contact-card-email" className="block text-sm font-medium text-foreground/80 mb-2">E-Mail *</label>
                    <Input type="email" id="contact-card-email" name="email" required
                           className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                           placeholder="ihre@email.de" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-card-phone" className="block text-sm font-medium text-foreground/80 mb-2">Telefon</label>
                  <Input type="tel" id="contact-card-phone" name="phone"
                         className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                         placeholder="+49 123 456 789" />
                </div>

                <div>
                  <label htmlFor="contact-card-message" className="block text-sm font-medium text-foreground/80 mb-2">Nachricht *</label>
                  <Textarea id="contact-card-message" name="message" rows={5} required
                            className="w-full px-4 py-3 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground resize-y"
                            placeholder="Wie können wir Ihnen helfen?" />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required
                           className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-ring" />
                    <span className="text-sm text-foreground/60">
                      Ich stimme der Verarbeitung meiner Daten gemäß der
                      <a href="/datenschutz" className="text-primary hover:underline"> Datenschutzerklärung</a> zu. *
                    </span>
                  </label>
                </div>

                <Button type="submit" className="btn-primary w-full py-4">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
