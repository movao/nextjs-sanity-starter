import { siteConfig } from '@/config';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactWithMapProps {
  heading?: string;
  subheading?: string;
}

export default function ContactWithMap({
  heading = 'Kontakt',
  subheading = 'Besuchen Sie uns oder schreiben Sie uns eine Nachricht',
}: ContactWithMapProps) {
  const { location } = siteConfig;
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.lng - 0.005}%2C${location.lat - 0.003}%2C${location.lng + 0.005}%2C${location.lat + 0.003}&layer=mapnik&marker=${location.lat}%2C${location.lng}`;

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16" data-animate="fade-up">
          {/* Formular */}
          <div>
            <form action={formEndpoint} method="POST" className="space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-map-gotcha">Dieses Feld nicht ausfüllen</label>
                <input type="text" id="contact-map-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="contact-map-name" className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
                <Input type="text" id="contact-map-name" name="name" required
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="Ihr Name" />
              </div>

              <div>
                <label htmlFor="contact-map-email" className="block text-sm font-medium text-foreground/80 mb-2">E-Mail *</label>
                <Input type="email" id="contact-map-email" name="email" required
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="ihre@email.de" />
              </div>

              <div>
                <label htmlFor="contact-map-phone" className="block text-sm font-medium text-foreground/80 mb-2">Telefon</label>
                <Input type="tel" id="contact-map-phone" name="phone"
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="+49 123 456 789" />
              </div>

              <div>
                <label htmlFor="contact-map-message" className="block text-sm font-medium text-foreground/80 mb-2">Nachricht *</label>
                <Textarea id="contact-map-message" name="message" rows={5} required
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
          </div>

          {/* Karte */}
          <div className="flex flex-col">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm flex-1 min-h-[400px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                loading="lazy"
                title="Standort auf der Karte"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
