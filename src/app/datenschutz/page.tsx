/**
 * Datenschutzerklaerung
 *
 * WICHTIG: Dies ist eine VORLAGE!
 * Fuer eine rechtssichere Datenschutzerklaerung
 * nutze einen Generator wie:
 * https://www.e-recht24.de/muster-datenschutzerklaerung.html
 * https://datenschutz-generator.de/
 *
 * Passe alle Angaben an den jeweiligen Kunden an.
 */
import type { Metadata } from 'next';
import { siteConfig } from '@/config';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="container-narrow max-w-3xl mx-auto px-4">
        <h1 className="text-display text-foreground mb-10">Datenschutzerklaerung</h1>

        <div className="prose max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3">

          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich fuer die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
          </p>
          <p>
            {siteConfig.name}<br />
            {siteConfig.contact.address.street}<br />
            {siteConfig.contact.address.zip} {siteConfig.contact.address.city}<br />
            E-Mail: {siteConfig.contact.email}<br />
            Telefon: {siteConfig.contact.phone}
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
            Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf
            den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
            Namen, Websitezugriffe und sonstige Daten, die ueber eine Website generiert
            werden, handeln.
          </p>
          {/* ANPASSEN: Hoster-Name und ggf. AV-Vertrag erwaehnen */}

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persoenlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle fuer die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            {siteConfig.name}<br />
            {siteConfig.contact.address.street}<br />
            {siteConfig.contact.address.zip} {siteConfig.contact.address.city}<br />
            E-Mail: {siteConfig.contact.email}
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgaenge sind nur mit Ihrer ausdruecklichen Einwilligung
            moeglich. Sie koennen eine bereits erteilte Einwilligung jederzeit widerrufen.
            Die Rechtmaessigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
            vom Widerruf unberuehrt.
          </p>

          <h3>Recht auf Datenuebertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
            Erfuellung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
            in einem gaengigen, maschinenlesbaren Format aushaendigen zu lassen.
          </p>

          <h3>Auskunft, Loeschung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
            auf unentgeltliche Auskunft ueber Ihre gespeicherten personenbezogenen Daten,
            deren Herkunft und Empfaenger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder Loeschung dieser Daten.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags zusammenhaengt oder
            zur Durchfuehrung vorvertraglicher Massnahmen erforderlich ist. In allen uebrigen
            Faellen beruht die Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
            DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>

          <h3>Cookies</h3>
          <p>
            Diese Website verwendet nur technisch notwendige Cookies. Ein technisch
            notwendiges Cookie speichert lediglich Ihre Cookie-Praeferenz, damit der
            Cookie-Hinweis nicht bei jedem Besuch erneut angezeigt wird.
          </p>
          {/* ANPASSEN: Falls Analytics, Tracking oder andere Cookies genutzt werden */}

          <h2>5. Plugins und Tools</h2>

          <h3>Google Fonts</h3>
          {/* Variante A: Fonts LOKAL eingebunden (DSGVO-konform, empfohlen) */}
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte
            Google Fonts. Die Google Fonts sind lokal installiert. Eine Verbindung zu
            Servern von Google findet nicht statt.
          </p>

          <h3>OpenStreetMap</h3>
          <p>
            Wir nutzen den Kartendienst von OpenStreetMap (OSM). Beim Aufruf der Seite
            mit der eingebetteten Karte wird Ihre IP-Adresse an die Server von
            OpenStreetMap uebermittelt. Weitere Informationen finden Sie in der
            Datenschutzerklaerung von OpenStreetMap:{' '}
            <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
              https://wiki.osmfoundation.org/wiki/Privacy_Policy
            </a>.
          </p>

          <hr className="my-10" />
          <p className="text-sm text-neutral-400">
            {/* ANPASSEN: Datum der letzten Aktualisierung */}
            Stand: [Datum einfuegen]
          </p>
        </div>
      </div>
    </section>
  );
}
