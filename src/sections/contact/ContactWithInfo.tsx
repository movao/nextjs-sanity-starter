import { siteConfig } from '@/config';
import IconWrapper from '@/components/ui/IconWrapper';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactWithInfoProps {
  heading?: string;
  subheading?: string;
}

export default function ContactWithInfo({
  heading = 'Kontakt',
  subheading = 'So erreichen Sie uns',
}: ContactWithInfoProps) {
  const { contact } = siteConfig;
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        {/* Info-Leiste */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12 pb-12 border-b border-border" data-animate="fade-up">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="phone" size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Telefon</p>
              <a href={`tel:${contact.phone}`} className="text-foreground/60 hover:text-primary transition-colors text-base">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="envelope" size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">E-Mail</p>
              <a href={`mailto:${contact.email}`} className="text-foreground/60 hover:text-primary transition-colors text-base">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconWrapper icon="map-pin" size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Adresse</p>
              <p className="text-foreground/60 text-base">
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}
              </p>
            </div>
          </div>
        </div>

        {/* Formular */}
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <form action={formEndpoint} method="POST" className="space-y-5">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-info-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-info-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-info-name" className="block text-base font-medium text-foreground/80 mb-2">Name *</label>
                <Input type="text" id="contact-info-name" name="name" required
                       className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="Ihr Name" />
              </div>

              <div>
                <label htmlFor="contact-info-email" className="block text-base font-medium text-foreground/80 mb-2">E-Mail *</label>
                <Input type="email" id="contact-info-email" name="email" required
                       className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="ihre@email.de" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-info-phone" className="block text-base font-medium text-foreground/80 mb-2">Telefon</label>
              <Input type="tel" id="contact-info-phone" name="phone"
                     className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                     placeholder="+49 123 456 789" />
            </div>

            <div>
              <label htmlFor="contact-info-message" className="block text-base font-medium text-foreground/80 mb-2">Nachricht *</label>
              <Textarea id="contact-info-message" name="message" rows={5} required
                        className="w-full px-4 py-3.5 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground resize-y"
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
        </div>
      </div>
    </section>
  );
}
