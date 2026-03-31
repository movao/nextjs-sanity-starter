'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ContactTwoStepProps {
  heading?: string;
  subheading?: string;
}

const topics = [
  { label: 'Beratung', value: 'beratung' },
  { label: 'Angebot', value: 'angebot' },
  { label: 'Support', value: 'support' },
  { label: 'Sonstiges', value: 'sonstiges' },
] as const;

export default function ContactTwoStep({
  heading = 'Kontakt',
  subheading = 'Was können wir für Sie tun?',
}: ContactTwoStepProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '#';

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-8" data-animate="fade-up">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto">{subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto" data-animate="fade-up">
          {/* Step 1: Thema wählen */}
          {!selectedTopic && (
            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic.value}
                  type="button"
                  onClick={() => setSelectedTopic(topic.value)}
                  className="px-6 py-5 rounded-xl border border-border bg-card text-foreground font-medium text-lg hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  {topic.label}
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Formular */}
          {selectedTopic && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {topics.find((t) => t.value === selectedTopic)?.label}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="text-sm text-foreground/50 hover:text-foreground transition-colors underline"
                >
                  Ändern
                </button>
              </div>

              <form action={formEndpoint} method="POST" className="space-y-5">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-twostep-gotcha">Dieses Feld nicht ausfüllen</label>
                  <input type="text" id="contact-twostep-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <input type="hidden" name="topic" value={selectedTopic} />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-twostep-name" className="block text-base font-medium text-foreground/80 mb-2">Name *</label>
                    <Input type="text" id="contact-twostep-name" name="name" required
                           className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                           placeholder="Ihr Name" />
                  </div>

                  <div>
                    <label htmlFor="contact-twostep-email" className="block text-base font-medium text-foreground/80 mb-2">E-Mail *</label>
                    <Input type="email" id="contact-twostep-email" name="email" required
                           className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                           placeholder="ihre@email.de" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-twostep-phone" className="block text-base font-medium text-foreground/80 mb-2">Telefon</label>
                  <Input type="tel" id="contact-twostep-phone" name="phone"
                         className="w-full px-4 py-3.5 rounded-lg border border-border bg-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                         placeholder="+49 123 456 789" />
                </div>

                <div>
                  <label htmlFor="contact-twostep-message" className="block text-base font-medium text-foreground/80 mb-2">Nachricht *</label>
                  <Textarea id="contact-twostep-message" name="message" rows={5} required
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
          )}
        </div>
      </div>
    </section>
  );
}
