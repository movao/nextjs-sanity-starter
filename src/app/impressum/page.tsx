/**
 * Impressum
 *
 * PFLICHTANGABEN: Passe alle Daten unten an!
 * Dies ist eine Vorlage -- der Kunde muss seine
 * eigenen korrekten Angaben eintragen.
 *
 * Fuer die korrekte Erstellung empfehle ich:
 * https://www.e-recht24.de/impressum-generator.html
 */
import type { Metadata } from 'next';
import { siteConfig } from '@/config';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="container-narrow max-w-3xl mx-auto px-4">
        <h1 className="text-display text-foreground mb-10">Impressum</h1>

        <div className="prose max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4">

          <h2>Angaben gemaess &sect; 5 TMG</h2>
          <p>
            {siteConfig.name}<br />
            {siteConfig.contact.address.street}<br />
            {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {siteConfig.contact.phone}<br />
            E-Mail: {siteConfig.contact.email}
          </p>

          {/* ANPASSEN: Falls zutreffend
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemaess &sect; 27 a Umsatzsteuergesetz:<br />
            DE XXXXXXXXX
          </p>
          */}

          {/* ANPASSEN: Bei Heilberufen, Anwaelten etc.
          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: [z.B. Psychologische Psychotherapeutin]<br />
            Verliehen in: Deutschland<br />
            Zustaendige Aufsichtsbehoerde: [Kammer/Behoerde]
          </p>
          */}

          <h2>Verantwortlich fuer den Inhalt nach &sect; 55 Abs. 2 RStV</h2>
          <p>
            {siteConfig.name}<br />
            {siteConfig.contact.address.street}<br />
            {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung fuer Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemaess &sect; 7 Abs.1 TMG fuer eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind
            wir als Diensteanbieter jedoch nicht verpflichtet, uebermittelte oder gespeicherte
            fremde Informationen zu ueberwachen oder nach Umstaenden zu forschen, die auf eine
            rechtswidrige Taetigkeit hinweisen.
          </p>

          <h2>Haftung fuer Links</h2>
          <p>
            Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb koennen wir fuer diese fremden Inhalte auch keine
            Gewaehr uebernehmen. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
            beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  );
}
