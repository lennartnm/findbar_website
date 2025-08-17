"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const RG600 = "#1b4d2b";
const RG300 = "#7ca98e";
const serifClass = "font-serif";

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          <a href="/#blog" className="text-sm" style={{ color: "#334155" }}>
            Blog-Beispiele
          </a>
          <a href="/#preise" className="text-sm" style={{ color: "#334155" }}>
            Preise
          </a>
          <a href="/#ablauf" className="text-sm" style={{ color: "#334155" }}>
            Ablauf
          </a>
          <a href="/#faq" className="text-sm" style={{ color: "#334155" }}>
            FAQ
          </a>
        </nav>
        <Button asChild>
          <a className="text-white" href="/#preise">
            Jetzt anfragen
          </a>
        </Button>
      </div>
    </header>
  );
}

// Neuer Marquee-Bereich
function FirmNameMarquee() {
  return (
    <div className="bg-slate-50 overflow-hidden py-3 border-b border-slate-100">
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-16 will-change-transform"
          style={{ animation: "marquee-ltr 40s linear infinite" }}
        >
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className={`text-3xl md:text-4xl italic ${serifClass} text-slate-400 select-none`}
            >
              findbar
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-60%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Datenschutzerklärung
        </h1>

        <div
          className="rounded-2xl text-white p-8 shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${RG300}, ${RG600})`,
          }}
        >
          <div className="space-y-8 text-sm leading-6">
            <p>Stand: 17.08.2025</p>
            <p>
              Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zwecke der Verarbeitung personenbezogener
              Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebots findbar.info (nachfolgend „Webseite“)
              sowie der mit ihm verbundenen Funktionen und Inhalte.
            </p>

            <div>
              <h2 className="font-semibold">1. Verantwortlicher</h2>
              <p>
                Lennart Niehausmeier<br />
                Am Rabenecksiek 5<br />
                32139 Spenge<br />
                Deutschland<br />
                E‑Mail: <a className="underline" href="mailto:lennart@findbar.info">lennart@findbar.info</a><br />
                Telefon: +49 (0)151 70084420<br />
                Website: <a className="underline" href="https://www.findbar.info" target="_blank" rel="noreferrer">https://www.findbar.info</a>
              </p>
              <p className="mt-2">
                Hinweis zum Impressum: Seit 14.05.2024 gilt das Digitale‑Dienste‑Gesetz (DDG). Die Anbieterkennzeichnung
                erfolgt daher nach § 5 DDG (nicht mehr § 5 TMG).
              </p>
            </div>

            <div>
              <h2 className="font-semibold">2. Begriffe &amp; Rechtsgrundlagen (Kurzüberblick)</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>DSGVO: Verordnung (EU) 2016/679.</li>
                <li>
                  TDDDG: Telekommunikation‑Digitale‑Dienste‑Datenschutz‑Gesetz (§ 25 TDDDG: Speichern/Zugriff auf
                  Informationen in Endeinrichtungen – „Cookies/Tracking“).
                </li>
                <li>
                  Rechtsgrundlagen: Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Anbahnung), lit. c (rechtliche
                  Pflicht), lit. f (berechtigte Interessen), Art. 49 (Drittlandübermittlungen in Sonderfällen).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">3. Kategorien verarbeiteter Daten</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffsdaten, Zeitstempel, Referrer‑URL)</li>
                <li>Meta-/Kommunikationsdaten (z. B. IP‑Adresse, User‑Agent; bei GA4 ohne dauerhafte IP‑Speicherung)</li>
                <li>Kontakt-/Inhaltsdaten (z. B. E‑Mails, Telefonanfragen)</li>
                <li>Cookie‑/Consent‑Informationen (Consent‑Status, Zeitpunkt, Geräte-/Browser‑Kontext)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">4. Zwecke der Verarbeitung</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bereitstellung und Sicherbetrieb der Webseite (IT‑Sicherheit, Fehleranalyse, Missbrauchsprävention)</li>
                <li>Reichweitenmessung/Statistik (Google Analytics) – nur mit Einwilligung</li>
                <li>Marketing/Conversion‑Messung (Meta Pixel/Facebook, LinkedIn Insight Tag) – nur mit Einwilligung</li>
                <li>Kommunikation und Beantwortung von Anfragen</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">5. Hosting &amp; Auftragsverarbeitung</h2>
              <p>
                Wir setzen ggf. externe Hosting‑Dienstleister zur Bereitstellung dieses Onlineangebots ein. Dabei werden
                Server‑Logdaten verarbeitet (siehe Ziff. 6). Die Verarbeitung erfolgt auf Grundlage Art. 6 Abs. 1 lit. f
                DSGVO (betriebsnotwendiger Betrieb, Sicherheit) und ggf. eines Auftragsverarbeitungsvertrags nach Art. 28
                DSGVO.
              </p>
              <p className="mt-2 italic">
                Hinweis: Bitte teilen Sie uns mit, wer Ihr Hoster ist; wir ergänzen dann Name, Anschrift und AV‑Status.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">6. Server‑Logfiles</h2>
              <p>
                Bei jedem Zugriff auf die Webseite werden automatisiert folgende Daten protokolliert: aufgerufene URL,
                Datum/Uhrzeit, übertragene Datenmenge, HTTP‑Statuscode, Referrer, Browser/Version, Betriebssystem,
                IP‑Adresse.
              </p>
              <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (technischer Betrieb, IT‑Sicherheit).</p>
              <p className="mt-2">
                Speicherdauer: Logdaten werden aus Sicherheitsgründen kurzfristig gespeichert und anschließend gelöscht
                oder anonymisiert. Üblich sind 7–30 Tage; konkrete Dauer je nach Hoster.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">7. Cookies, lokale Speicherung &amp; Einwilligungen (§ 25 TDDDG)</h2>
              <p>
                Wir nutzen ein Consent‑Management‑Tool (CMP). Nicht technisch notwendige Technologien (z. B.
                Analytics/Marketing‑Cookies, Web‑Storage, Pixel) werden erst nach Ihrer Einwilligung gesetzt/ausgeführt.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <span className="underline">Technisch notwendige Technologien</span>: für die Bereitstellung des ausdrücklich
                  gewünschten digitalen Dienstes erforderlich (z. B. Consent‑Speichercookie, Sicherheits‑Cookies).
                </li>
                <li>
                  <span className="underline">Nicht notwendige Technologien</span>: z. B. Google Analytics, Meta Pixel, LinkedIn
                  Insight Tag – nur mit Einwilligung.
                </li>
              </ul>
              <p className="mt-2">
                Sie können Ihre Einwilligungen jederzeit über den Link „Cookie‑Einstellungen“ auf jeder Seite ändern oder
                widerrufen.
              </p>
              <p className="mt-2">
                Rechtsgrundlagen: § 25 Abs. 1 TDDDG (Speichern/Zugriff) i. V. m. Art. 6 Abs. 1 lit. a DSGVO
                (Folgeverarbeitung). Für notwendige Technologien ggf. § 25 Abs. 2 TDDDG.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">8. Google Analytics (GA4)</h2>
              <p>
                Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Muttergesellschaft: Google
                LLC, USA.
              </p>
              <p>
                Zwecke: Reichweitenmessung, Nutzungsanalyse, Verbesserung unseres Onlineangebots. Datenkategorien:
                Nutzungsdaten, Ereignisdaten, pseudonyme Kennungen; IP‑Adressen werden bei GA4 nicht dauerhaft
                gespeichert; Standort-/Gerätedaten können reduziert werden.
              </p>
              <p>
                Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG). Auftragsverarbeitung:
                mit Google (Art. 28 DSGVO). Übermittlungen in Drittländer: USA. Für zertifizierte Google‑Einheiten kann die
                Übermittlung auf das EU‑US Data Privacy Framework (DPF) gestützt werden; im Übrigen auf
                EU‑Standardvertragsklauseln (SCC).
              </p>
              <p>
                Speicherdauer: Ereignisdaten werden in GA4 je nach Konfiguration (z. B. 2/14 Monate) gespeichert;
                aggregierte Berichte länger. Widerspruch/Widerruf: über unser CMP (Cookie‑Einstellungen).
              </p>
              <p className="mt-2">
                Weitere Informationen: <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy</a> ·
                <a className="underline ml-1" href="https://support.google.com/analytics/answer/3379636" target="_blank" rel="noreferrer">GA‑Datenverarbeitung/Controller‑Terms</a> ·
                <a className="underline ml-1" href="https://policies.google.com/privacy/frameworks" target="_blank" rel="noreferrer">EU‑US DPF</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold">9. Meta Pixel (Facebook)</h2>
              <p>
                Anbieter: Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland; Muttergesellschaft: Meta
                Platforms, Inc., USA.
              </p>
              <p>
                Zwecke: Conversion‑Messung, Reichweitenanalyse, ggf. Remarketing (Custom Audiences). Datenkategorien:
                Ereignisdaten (z. B. Seitenaufrufe, Käufe/Events), technische Kennungen (z. B. Cookie‑IDs), ggf. weitere
                Parameter; Einsatz nur nach Einwilligung.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG. Auftragsverarbeitung/Joint
                Controllership: Nach Metas Bedingungen; je nach Einsatz kann eine gemeinsame Verantwortlichkeit für
                bestimmte Events bestehen. Übermittlungen in Drittländer: USA (DPF/SCC, je nach Zertifizierung).
              </p>
              <p>
                Opt‑out/Widerruf: jederzeit über unser CMP. Weitere Informationen: <a className="underline" href="https://www.facebook.com/legal/terms/dataprocessing" target="_blank" rel="noreferrer">Meta Data Processing Terms</a> ·
                <a className="underline ml-1" href="https://www.facebook.com/privacy/policy" target="_blank" rel="noreferrer">Meta Privacy</a> ·
                <a className="underline ml-1" href="https://www.facebook.com/privacy/policies/data_privacy_framework/" target="_blank" rel="noreferrer">DPF‑Hinweise Meta</a>
              </p>
              <p className="mt-2">
                Hinweis: Funktionen wie „Erweitertes Abgleichen“ (Advanced Matching) nutzen wir nur, wenn hierfür eine
                ausdrückliche Einwilligung vorliegt.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">10. LinkedIn Insight Tag</h2>
              <p>
                Anbieter: LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland; Muttergesellschaft:
                LinkedIn Corporation, USA (Microsoft‑Konzern).
              </p>
              <p>
                Zwecke: Conversion‑Tracking, Kampagnen‑Auswertung, ggf. Retargeting – nur mit Einwilligung. Datenkategorien:
                Seitenaufrufe, URL, Referrer, IP‑Adresse (gekürzt/gekürzt gespeichert), Geräte-/Browserdaten, Zeitstempel,
                LinkedIn‑ID (falls eingeloggt).
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG. Übermittlungen in Drittländer: USA
                (DPF/SCC, je nach Zertifizierung). Widerruf: über unser CMP. Weitere Informationen: <a className="underline" href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noreferrer">LinkedIn Privacy</a> ·
                <a className="underline ml-1" href="https://legal.linkedin.com/dpa" target="_blank" rel="noreferrer">LinkedIn DPA</a> ·
                <a className="underline ml-1" href="https://www.dataprivacyframework.gov/list" target="_blank" rel="noreferrer">DPF‑Eintrag LinkedIn</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold">11. Terminbuchung über Calendly</h2>
              <p>
                Anbieter: Calendly, LLC, USA. Zwecke: Online‑Terminvereinbarung (z. B. über eingebettetes Widget oder per
                externer Calendly‑Seite), Terminbestätigungen und Erinnerungen.
              </p>
              <p>
                Datenkategorien: von Ihnen eingegebene Daten (z. B. Name, E‑Mail, Telefonnummer, Termininhalt),
                Verfügbarkeiten, technische Metadaten (IP‑Adresse, Geräte-/Browserdaten), Nutzungsdaten.
              </p>
              <p>
                <span className="underline">Rechtsgrundlagen</span>: Art. 6 Abs. 1 lit. b DSGVO (Terminbuchung auf Anfrage/Vertragserfüllung). § 25 Abs. 1 TDDDG
                i. V. m. Art. 6 Abs. 1 lit. a DSGVO für etwaige Cookies/ähnliche Technologien des eingebetteten
                Calendly‑Widgets vor aktiver Nutzung. Wir setzen hierfür eine Zwei‑Klick‑Lösung bzw. das
                Consent‑Management‑Tool ein, sodass Calendly erst nach Ihrer Einwilligung lädt. Alternativ können Sie über
                die angegebenen Kontaktwege Termine abstimmen.
              </p>
              <p>
                Auftragsverarbeitung/Übermittlungen: Wir haben mit Calendly einen Auftragsverarbeitungsvertrag (Art. 28
                DSGVO) geschlossen. Datenübermittlungen in die USA erfolgen – je nach Zertifizierungsstatus – auf Grundlage
                des EU‑US Data Privacy Framework (DPF) und ergänzend der EU‑Standardvertragsklauseln (SCC).
              </p>
              <p>
                Speicherdauer: nach Zweckerfüllung bzw. gemäß vertraglichen/gesetzlichen Aufbewahrungspflichten;
                Termine/Kommunikation können in unserem Kalender‑/CRM‑System gespeichert werden.
              </p>
              <p>
                Widerruf/Opt‑out: Sie können Ihre Einwilligung für das Laden des Widgets jederzeit über die
                Cookie‑Einstellungen widerrufen.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a className="underline" href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noreferrer">Calendly Privacy Notice</a> ·
                <a className="underline ml-1" href="https://calendly.com/legal/data-processing-addendum" target="_blank" rel="noreferrer">Calendly DPA</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold">12. E‑Mail‑Versand und Newsletter mit Brevo (Sendinblue)</h2>
              <p>
                Anbieter: Brevo (Sendinblue), Brevo SAS, 55, rue d’Amsterdam, 75008 Paris, Frankreich. Zwecke: Versand von
                transaktionalen E‑Mails (z. B. System‑/Service‑Mails), Verwaltung von Verteilerlisten, ggf. Versand von
                Newslettern und Marketing‑E‑Mails sowie Auswertung der Reichweite (sofern aktiviert).
              </p>
              <p>
                Datenkategorien: E‑Mail‑Adresse, Name, optional weitere Profildaten; technische Metadaten (IP/Time‑Stamp
                für Double‑Opt‑In), Versand‑ und Zustellinformationen; bei Marketing‑E‑Mails Interaktionsdaten
                (Öffnungen/Clicks, Endgerät, Zeitpunkt) nur bei entsprechender Einwilligung.
              </p>
              <p>
                <span className="underline">Rechtsgrundlagen</span>: Art. 6 Abs. 1 lit. b DSGVO für transaktionale E‑Mails/vertragsbezogene Kommunikation. Art. 6
                Abs. 1 lit. a DSGVO i. V. m. § 7 Abs. 2 Nr. 3 UWG für Newsletter/Marketing (mit Double‑Opt‑In und
                Protokollierung). Tracking‑Funktionen (Öffnungs-/Klick‑Tracking) setzen wir nur nach Einwilligung ein.
              </p>
              <p>
                Auftragsverarbeitung/Speicherung: Mit Brevo besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
                Brevo betreibt Rechenzentren in der EU; es können Unterauftragsverarbeiter eingesetzt werden. Soweit dabei
                Drittlandübermittlungen (z. B. in die USA) erfolgen, werden EU‑Standardvertragsklauseln und ggf.
                zusätzliche Maßnahmen genutzt.
              </p>
              <p>
                Widerruf/Widerspruch: Sie können Marketing‑Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen,
                z. B. über den Abmeldelink in jeder E‑Mail oder über Kontakt an uns. Transaktionale E‑Mails sind hiervon
                unberührt.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a className="underline" href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noreferrer">Brevo Privacy Policy</a> ·
                <a className="underline ml-1" href="https://help.brevo.com/hc/en-us/articles/15403782599570" target="_blank" rel="noreferrer">Brevo DPA‑Hinweise</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold">13. Kommunikation (E‑Mail/Telefon)</h2>
              <p>
                Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage: Art. 6
                Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) bzw. lit. f (Allgemeine Anfragen).
              </p>
              <p>Speicherdauer: Anfragen werden gelöscht, sobald sie erledigt sind; gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
            </div>

            <div>
              <h2 className="font-semibold">14. Empfänger &amp; Kategorien von Empfängern</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>IT‑Dienstleister/Hoster, technische Dienstleister (Wartung, Entwicklung)</li>
                <li>Tool‑Anbieter: Google, Meta, LinkedIn (siehe oben)</li>
                <li>Behörden/öffentliche Stellen bei rechtlicher Verpflichtung</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">15. Drittlandübermittlungen</h2>
              <p>
                Eine Datenübermittlung in Drittländer (insb. USA) kann im Rahmen der o. g. Tools erfolgen. Soweit der
                jeweilige Anbieter unter dem EU‑US Data Privacy Framework zertifiziert ist, erfolgt die Übermittlung auf
                Grundlage eines Angemessenheitsbeschlusses. Andernfalls verwenden wir EU‑Standardvertragsklauseln und
                führen – soweit erforderlich – Zusatzmaßnahmen durch. Details entnehmen Sie bitte den
                Datenschutzinformationen der Anbieter.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">16. Speicherdauer</h2>
              <p>
                Soweit in dieser Erklärung nicht ausdrücklich angegeben, löschen oder anonymisieren wir Daten, sobald der
                Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Für GA4 können je nach
                Konfiguration z. B. 2 oder 14 Monate gelten.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">17. Sicherheit</h2>
              <p>
                Wir treffen technische und organisatorische Maßnahmen (TOMs) zur Sicherung der Daten nach dem Stand der
                Technik (u. a. Zugriffs- und Zugriffskontrollen, Verschlüsselung, Protokollierung, Rechte‑/Rollenkonzepte).
              </p>
            </div>

            <div>
              <h2 className="font-semibold">18. Ihre Rechte</h2>
              <p>
                Sie haben – unter den gesetzlichen Voraussetzungen – folgende Rechte: Auskunft (Art. 15), Berichtigung
                (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21
                DSGVO; insbesondere gegen Verarbeitung auf Grundlage berechtigter Interessen) sowie Widerruf erteilter
                Einwilligungen (Art. 7 Abs. 3 DSGVO, mit Wirkung für die Zukunft).
              </p>
            </div>

            <div>
              <h2 className="font-semibold">19. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für
                Nordrhein‑Westfalen zuständig ist u. a. die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
                (LDI NRW), Kavalleriestraße 2‑4, 40213 Düsseldorf, <a className="underline" href="https://www.ldi.nrw.de/" target="_blank" rel="noreferrer">https://www.ldi.nrw.de/</a>.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">20. Pflicht zur Bereitstellung von Daten</h2>
              <p>
                Die Bereitstellung technisch erforderlicher Daten ist für den Betrieb der Webseite notwendig. Eine Pflicht zur
                Bereitstellung von Daten für Analytics/Marketing besteht nicht; ohne Einwilligung funktionieren diese
                Dienste nicht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">21. Automatisierte Entscheidungen/Profiling</h2>
              <p>
                Eine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO findet nicht statt. Profiling zu
                Marketingzwecken kann durch die genannten Drittanbieter erfolgen – jedoch nur nach Ihrer Einwilligung und
                innerhalb deren Verantwortungsbereiche.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">22. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir passen diese Datenschutzerklärung an, wenn technische, rechtliche oder organisatorische Änderungen dies
                erfordern. Die jeweils aktuelle Fassung ist unter <a className="underline" href="https://www.findbar.info/datenschutz" target="_blank" rel="noreferrer">https://www.findbar.info/datenschutz</a> abrufbar.
              </p>
            </div>

            <p className="text-xs text-white/80">
              © {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        <div className="space-x-4">
          <a href="/impressum">Impressum</a>
          <a href="/agb">AGB</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
