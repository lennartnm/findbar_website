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


export default function AGBPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
            <FirmNameMarquee />
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Allgemeine Geschäftsbedingungen (AGB)
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
              Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der Webseite findbar.info sowie – soweit
              angeboten – das Zustandekommen und die Durchführung von Verträgen über von uns bereitgestellte Leistungen.
            </p>

            <div>
              <h2 className="font-semibold">1. Anbieter</h2>
              <p>
                Lennart Niehausmeier<br />
                Am Rabenecksiek 5<br />
                32139 Spenge, Deutschland<br />
                Telefon: +49 (0)151 70084420<br />
                E‑Mail: <a className="underline" href="mailto:lennart@findbar.info">lennart@findbar.info</a><br />
                Website: <a className="underline" href="https://www.findbar.info" target="_blank" rel="noreferrer">https://www.findbar.info</a>
              </p>
              <p className="mt-2">Hinweis: Die Anbieterkennzeichnung im Impressum richtet sich nach § 5 DDG.</p>
            </div>

            <div>
              <h2 className="font-semibold">2. Geltungsbereich &amp; Begriffe</h2>
              <p>
                Diese AGB gelten für die Nutzung von findbar.info und für sämtliche von uns angebotenen Leistungen
                ausschließlich gegenüber Unternehmern (§ 14 BGB), juristischen Personen des öffentlichen Rechts oder
                öffentlich‑rechtlichen Sondervermögen.
              </p>
              <p>
                Verbraucher (§ 13 BGB) sind von unserem Leistungsangebot ausgeschlossen; über die Website werden keine
                Verträge mit Verbrauchern geschlossen.
              </p>
              <p>
                Im Zweifel hat der Nutzer uns auf Verlangen seine Unternehmereigenschaft nachzuweisen (z. B. USt‑ID,
                Handelsregisterangaben).
              </p>
            </div>

            <div>
              <h2 className="font-semibold">3. Leistungen von findbar.info</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Website‑Inhalte: Die bereitgestellten Informationen dienen allgemeinen Informationszwecken.</li>
                <li>
                  Kennenlerngespräch (unverbindlich): Über die Website kann ausschließlich ein Kennenlerngespräch (z. B.
                  per Calendly) vereinbart werden. Dadurch kommt noch kein Vertrag über entgeltliche Leistungen zustande.
                </li>
                <li>
                  Vertragsleistungen nur individuell: Etwaige entgeltliche Beratungs‑/Dienstleistungen werden nicht online
                  gebucht, sondern ausschließlich auf Grundlage eines individuellen Angebots und einer gesonderten Annahme
                  erbracht.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">4. Vertragsschluss – kein Online‑Vertragsschluss über die Website</h2>
              <p>
                Die Darstellung von Leistungen auf der Website ist unverbindlich (invitatio ad offerendum).
              </p>
              <p>
                Die Vereinbarung eines Kennenlerngesprächs dient ausschließlich der Kontaktaufnahme und Bedarfsklärung; sie
                begründet keinen Anspruch auf Abschluss eines Vertrages und keine Vergütungspflicht.
              </p>
              <p>
                Ein Vertrag über entgeltliche Leistungen kommt nur zustande, wenn wir dem Kunden außerhalb der Website ein
                individuelles Angebot unterbreiten und der Kunde dieses annimmt (z. B. in Textform per E‑Mail) oder wenn
                wir mit der Leistungserbringung beginnen und der Kunde dem zustimmt.
              </p>
              <p>
                Umfang, Laufzeit, Vergütung und sonstige Konditionen ergeben sich aus dem jeweiligen Angebot/Vertrag.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">5. Preise, Zahlungsbedingungen</h2>
              <p>
                Preise und Zahlungsmodalitäten ergeben sich aus dem individuellen Angebot bzw. dem Vertrag; Preise
                verstehen sich – sofern nicht anders ausgewiesen – zuzüglich gesetzlicher Umsatzsteuer.
              </p>
              <p>
                Zulässige Zahlungsarten und Fälligkeiten werden im Angebot/Vertrag festgelegt.
              </p>
              <p>
                Bei Zahlungsverzug gelten die gesetzlichen Regelungen; wir können die weitere Leistungserbringung bis zur
                Zahlung angemessen zurückhalten.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">6. Leistungserbringung, Termine &amp; Mitwirkung</h2>
              <p>
                Leistungsfristen sind nur verbindlich, wenn sie ausdrücklich schriftlich zugesagt wurden.
              </p>
              <p>
                Der Kunde hat alle zur Leistungserbringung erforderlichen Informationen, Zugänge und Mitwirkungshandlungen
                rechtzeitig und vollständig bereitzustellen. Verzögerungen aufgrund fehlender Mitwirkungen verlängern
                Fristen angemessen.
              </p>
              <p>
                Bei digitalen Leistungen behalten wir uns technisch bedingte, zumutbare Wartungsfenster und Updates vor.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">7. Nutzungsrechte an Inhalten</h2>
              <p>
                Sämtliche Website‑Inhalte (Texte, Grafiken, Logos, Designs etc.) unterliegen dem Urheber‑/Leistungsschutzrecht.
              </p>
              <p>
                Soweit im Einzelvertrag vereinbart, räumen wir dem Kunden einfache, nicht übertragbare Nutzungsrechte in dem
                für den Vertragszweck erforderlichen Umfang ein. Eine Weitergabe, Unterlizenzierung oder Bearbeitung bedarf
                unserer Zustimmung, sofern gesetzlich nicht zwingend erlaubt.
              </p>
              <p>
                Eine Nutzung unserer Marken/Logos bedarf stets unserer vorherigen schriftlichen Zustimmung.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">8. Pflichten des Nutzers / Verbotene Handlungen</h2>
              <p>
                Es ist untersagt, Sicherheitsmechanismen zu umgehen, automatisierte Abfragen ohne Zustimmung
                durchzuführen, rechtswidrige Inhalte zu verbreiten oder Rechte Dritter zu verletzen.
              </p>
              <p>
                Bei Verstößen behalten wir uns vor, Zugänge zu sperren, Inhalte zu entfernen und rechtliche Schritte
                einzuleiten.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">9. Gewährleistung</h2>
              <p>
                Es gelten die gesetzlichen Gewährleistungsrechte.
              </p>
              <p>
                Bei unentgeltlichen Diensten/Informationen auf der Website übernehmen wir keine Gewähr für Richtigkeit,
                Vollständigkeit und Verfügbarkeit; dies gilt nicht für Fälle von Vorsatz oder grober Fahrlässigkeit sowie
                bei Verletzung von Leben, Körper oder Gesundheit.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">10. Haftung</h2>
              <p>
                Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, für Schäden aus der Verletzung des Lebens,
                des Körpers oder der Gesundheit, sowie nach den Vorschriften des Produkthaftungsgesetzes.
              </p>
              <p>
                Bei leichter Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht; in diesem Fall
                ist die Haftung der Höhe nach auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
              </p>
              <p>Im Übrigen ist die Haftung ausgeschlossen. Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten unserer gesetzlichen Vertreter und Erfüllungsgehilfen.</p>
            </div>

            <div>
              <h2 className="font-semibold">11. Datenschutz</h2>
              <p>
                Es gilt unsere Datenschutzerklärung in der jeweils aktuellen Fassung: <a className="underline" href="https://www.findbar.info/datenschutz" target="_blank" rel="noreferrer">https://www.findbar.info/datenschutz</a>.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">12. Streitbeilegung</h2>
              <p>
                Das Verbraucherstreitbeilegungsgesetz (VSBG) findet auf unsere Verträge grundsätzlich keine Anwendung, da
                wir ausschließlich Verträge mit Unternehmern schließen. Eine Teilnahme an Streitbeilegungsverfahren vor
                Verbraucherschlichtungsstellen erfolgt nicht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">13. Anwendbares Recht, Vertragssprache, Gerichtsstand</h2>
              <p>
                Es gilt deutsches Recht unter Ausschluss des UN‑Kaufrechts (CISG).
              </p>
              <p>
                Gegenüber Verbrauchern mit gewöhnlichem Aufenthalt in der EU gelten zusätzlich die zwingenden
                Verbraucherschutzbestimmungen ihres Aufenthaltsstaats.
              </p>
              <p>
                Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich‑rechtliches
                Sondervermögen, ist Gerichtsstand für alle Streitigkeiten unser Sitz (Spenge).
              </p>
              <p>Vertragssprache ist Deutsch.</p>
            </div>

            <div>
              <h2 className="font-semibold">14. Änderungen dieser AGB</h2>
              <p>
                Für einmalige Verträge gelten die bei Vertragsschluss aktuellen AGB.
              </p>
              <p>
                Bei Dauerschuldverhältnissen (z. B. Abonnements) können wir diese AGB ändern, sofern damit keine
                wesentlichen Regelungen des Vertragsverhältnisses berührt werden und die Änderungen aufgrund gesetzlicher
                Anpassungen, technischer Änderungen oder neuer Funktionen erforderlich sind. Über Änderungen informieren
                wir spätestens 6 Wochen vor ihrem Inkrafttreten in Textform. Der Kunde hat das Recht, der Änderung zu
                widersprechen; bei fristgerechtem Widerspruch besteht ein Sonderkündigungsrecht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">15. Schlussbestimmungen</h2>
              <p>
                Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der
                übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.
              </p>
              <p>
                Nebenabreden, Änderungen oder Ergänzungen bedürfen der Textform (z. B. E‑Mail), soweit gesetzlich keine
                strengere Form vorgeschrieben ist.
              </p>
            </div>

            <p className="text-xs text-white/80">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
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
