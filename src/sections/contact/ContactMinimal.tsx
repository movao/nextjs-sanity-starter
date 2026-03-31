interface ContactMinimalProps {
  heading?: string;
  subheading?: string;
}

export default function ContactMinimal({
  heading = 'Kontakt',
  subheading = 'Wir freuen uns auf Ihre Nachricht',
}: ContactMinimalProps) {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          <div className="text-center mb-12">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subheading mx-auto">{subheading}</p>
          </div>

          <form action={formEndpoint} method="POST" className="space-y-5">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-min-gotcha">Dieses Feld nicht ausfüllen</label>
              <input type="text" id="contact-min-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-min-name" className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
                <input type="text" id="contact-min-name" name="name" required
                       className="w-full px-4 py-3 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 bg-input outline-none transition-all text-foreground"
                       placeholder="Ihr Name" />
              </div>

              <div>
                <label htmlFor="contact-min-email" className="block text-sm font-medium text-foreground/80 mb-2">E-Mail *</label>
                <input type="email" id="contact-min-email" name="email" required
                       className="w-full px-4 py-3 rounded-lg border border-border focus:border-ring focus:ring-2 focus:ring-ring/20 bg-input outline-none transition-all text-foreground"
                       placeholder="ihre@email.de" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-min-message" className="block text-sm font-medium text-foreground/80 mb-2">Nachricht *</label>
              <textarea id="contact-min-message" name="message" rows={5} required
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
    </section>
  );
}
