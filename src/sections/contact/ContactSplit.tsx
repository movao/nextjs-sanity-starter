import { siteConfig } from '@/config';
import IconWrapper from '@/components/ui/IconWrapper';

interface ContactSplitProps {
  heading?: string;
  subheading?: string;
}

export default function ContactSplit({
  heading = 'Kontakt',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
}: ContactSplitProps) {
  const { contact, location } = siteConfig;
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
          {/* Kontaktinfos + Karte */}
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <IconWrapper icon="map-pin" size={20} />
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-foreground/60">
                    {contact.address.street}<br />
                    {contact.address.zip} {contact.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon="phone" size={20} />
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a href={`tel:${contact.phone}`} className="text-foreground/60 hover:text-primary transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconWrapper icon="envelope" size={20} />
                <div>
                  <p className="font-medium text-foreground">E-Mail</p>
                  <a href={`mailto:${contact.email}`} className="text-foreground/60 hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div id="map" className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src={mapUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                title="Standort auf der Karte"
              />
            </div>
          </div>

          {/* Kontaktformular */}
          <div>
            <form action={formEndpoint} method="POST" className="space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-split-gotcha">Dieses Feld nicht ausfüllen</label>
                <input type="text" id="contact-split-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="contact-split-name" className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
                <input type="text" id="contact-split-name" name="name" required
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="Ihr Name" />
              </div>

              <div>
                <label htmlFor="contact-split-email" className="block text-sm font-medium text-foreground/80 mb-2">E-Mail *</label>
                <input type="email" id="contact-split-email" name="email" required
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="ihre@email.de" />
              </div>

              <div>
                <label htmlFor="contact-split-phone" className="block text-sm font-medium text-foreground/80 mb-2">Telefon</label>
                <input type="tel" id="contact-split-phone" name="phone"
                       className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                       placeholder="+49 123 456 789" />
              </div>

              <div>
                <label htmlFor="contact-split-message" className="block text-sm font-medium text-foreground/80 mb-2">Nachricht *</label>
                <textarea id="contact-split-message" name="message" rows={5} required
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

              <button type="submit" className="btn-primary w-full py-4">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
