// src/app/blog/b2b-sales-deutschland/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const siteUrl = "https://www.findbar.info";
const canonical = `${siteUrl}/blog/b2b-sales-deutschland`;
const accent = "text-emerald-700";

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist & Gründer von findbar",
  image: "/lennart-niehausmeier.webp",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
};

export const metadata: Metadata = {
  title:
    "B2B Sales in Deutschland: Definition, Begriffe & globaler Vergleich – praxisnah erklärt",
  description:
    "Was bedeutet B2B Sales? Wichtige Begriffe, Prozess, rechtliche Besonderheiten in Deutschland (UWG, E-Rechnung) & Unterschiede im globalen Vergleich – kompakt.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "B2B Sales in Deutschland: Definition, Begriffe & globaler Vergleich",
    description:
      "Definition, Prozess, rechtliche Besonderheiten und internationale Unterschiede – klar und praxisnah.",
    url: canonical,
    type: "article",
    images: [
      {
        url: "/deutschland-im-b2b-sales.jpg",
        width: 1600,
        height: 600,
        alt: "Frankfurt Skyline als Symbol für B2B Sales in Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "B2B Sales in Deutschland: Definition, Begriffe & globaler Vergleich",
    description:
      "Definition, Prozess, rechtliche Besonderheiten und internationale Unterschiede – klar und praxisnah.",
    images: ["/deutschland-im-b2b-sales.jpg"],
  },
};

export default function Page() {
  const publishedISO = "2025-08-20";
  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl  font-semibold leading-tight tracking-tight">
          B2B Sales: Definition, Begriffe und wie sich Deutschland im globalen
          Vergleich einordnet
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Dieser Leitfaden erklärt dir leicht verständlich, was B2B Sales ist,
          welche Begriffe du kennen solltest und worin sich der Vertrieb in
          Deutschland von anderen Märkten unterscheidet &ndash; inklusive
          praxisnaher Tipps für deinen Go-to-Market.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime={publishedISO}>29.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-sm border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/deutschland-im-b2b-sales.jpg"
              />
              <img
                fetchPriority="high"
                src="/deutschland-im-b2b-sales.jpg"
                alt="B2B Sales in Deutschland: Frankfurt Skyline als wirtschaftliches Zentrum"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Frankfurt als Symbol für den B2B-Vertrieb in Deutschland
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src={author.image}
            alt="Autor"
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-medium text-zinc-900">{author.name}</div>
            <div>{author.role}</div>
          </div>
        </div>
      </header>

      {/* TL;DR */}
      <aside className="mb-10 rounded-sm border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">
          Das Wichtigste auf einen Blick
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>B2B Sales</strong> bedeutet der Vertrieb von Produkten,
            Software oder Services zwischen Unternehmen &ndash; Prozesse sind
            komplexer, Zyklen länger, mehrere Entscheider sind beteiligt.
          </li>
          <li>
            In <strong>Deutschland</strong> prägen Mittelstand, Messen,
            Datenschutz und seit 2025 die E-Rechnung den Vertrieb. Das macht
            Go-to-Market-Pläne formaler &amp; dokumentationsstärker.
          </li>
          <li>
            International gilt heute ein <strong>Omnichannel-Modell</strong>:
            Käufer erwarten nahtlose Wechsel zwischen Website, Remote und
            persönlichem Kontakt.
          </li>
          <li>
            <strong>Zahlungsziele</strong> sind in Deutschland im EU-Vergleich
            eher kurz. Für Forecasts und Cashflow lohnt es, DSO aktiv zu
            managen und Kreditrisiken früh zu prüfen.
          </li>
          <li>
            Für deinen Markteintritt: klare ICP, deutsches Messaging, rechtssichere
            Outreach-Prozesse (UWG), Messen als Pipeline-Hebel und saubere
            E-Rechnungs-Workflows.
          </li>
        </ul>
      </aside>

      {/* ToC */}
      <nav
        aria-label="Inhaltsverzeichnis"
        className="mb-12 rounded-sm border border-zinc-200 bg-zinc-50 p-5"
      >
        <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#definition">
              Was ist B2B Sales; Definition &amp; Abgrenzung
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#prozess">
              Der B2B-Sales-Prozess in 7 einfachen Schritten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#deutschland-besonderheiten">
              Besonderheiten in Deutschland
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#globaler-vergleich">
              Deutschland im globalen Vergleich
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#zahlen-trends">
              Zahlen &amp; Trends im B2B-Vertrieb
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxis-tipps">
              Praxis-Tipps f&uuml;r deinen Go-to-Market in DACH
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="definition" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Was ist B2B Sales; Definition &amp; Abgrenzung
        </h2>
        <p className="leading-relaxed">
          <strong>B2B Sales</strong> beschreibt den Vertrieb zwischen
          Unternehmen. Anders als im B2C adressierst du Buying Center statt
          Einzelpersonen, arbeitest häufiger mit Ausschreibungen,
          Rahmenverträgen und komplexen Implementierungen. Schlüssel sind
          <em> Vertrauen</em>, <em>Nutzenbelege</em> und <em>Risikoabbau</em>.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2 bg-white">
            <h3 className="font-semibold mb-2">Kurz erklärt</h3>
            <p className="m-0">
              Im B2B treffen <em>höherer Deal-Wert</em>, <em>mehr Stakeholder</em> und
              <em> längere Zyklen</em> aufeinander. Deshalb sind Prozessklarheit,
              Content, Demos und Referenzen entscheidend.
            </p>
          </div>
          <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Begriffe, die du kennen solltest</h3>
            <ul className="m-0 list-disc ml-5 space-y-1">
              <li>ICP &amp; Persona</li>
              <li>Marketing- &amp; Sales-Qualified Leads</li>
              <li>Buying Center &amp; Champion</li>
              <li>Sales Cycle, ACV, ARR</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="prozess" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Der B2B-Sales-Prozess in 7 einfachen Schritten
        </h2>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong>Zielkunden definieren</strong> &ndash; ICP festlegen, Buying
            Center skizzieren, Pain Points priorisieren.
          </li>
          <li>
            <strong>Aufmerksamkeit erzeugen</strong> &ndash; Content, Events, Ads
            und Outbound orchestrieren; klare Botschaften statt Feature-Feuerwerk.
          </li>
          <li>
            <strong>Qualifizieren</strong> &ndash; Problem-Fit, Budget, Timing,
            Stakeholder. Discovery klärt, ob und wie du wirklich helfen kannst.
          </li>
          <li>
            <strong>Lösungs-Design</strong> &ndash; Demo, Business-Case,
            Machbarkeiten, Datenschutz und IT-Sicherheit beantworten.
          </li>
          <li>
            <strong>Verhandeln</strong> &ndash; Preislogik, Vertragswerk,
            Lieferumfang, Service-Level, Zahlungsziele.
          </li>
          <li>
            <strong>Abschluss &amp; Implementierung</strong> &ndash; reibungsarmes
            Onboarding, frühe Erfolgssignale, Trainings.
          </li>
          <li>
            <strong>Erweiterung</strong> &ndash; Value Review, NPS, Cross- und
            Upsell, Referenzen und Partnerschaften.
          </li>
        </ol>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-sm border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            E-Commerce ist im B2B unverzichtbar &ndash; und bei Anbietern, die ihn
            anbieten, der wichtigste Umsatzkanal.{" "}
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            &mdash; Indirektes Zitat nach McKinsey B2B Pulse 2024
          </figcaption>
        </figure>
      </section>

      <section id="deutschland-besonderheiten" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Besonderheiten in Deutschland
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Mittelstand &amp; Hidden Champions
              </h3>
              <p className="m-0">
                Über 99&nbsp;% der Unternehmen sind KMU. Entscheidungen laufen
                oft über Inhaber&ndash; oder Familienstrukturen. Beziehungsaufbau
                und belastbare Nachweise (z.&nbsp;B. Referenzen, Zertifikate)
                zählen besonders.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Messen bleiben Deal-Treiber</h3>
              <p className="m-0">
                Deutschland ist weltweit führender Messeplatz: Hunderte
                internationale Messen, hohe Auslandsanteile bei Ausstellern und
                Besuchern. Für Pipelines bedeuten Leitmessen strukturierte
                Terminpläne, Live-Demos und Follow-ups binnen 48&nbsp;Stunden.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Recht &amp; Datenschutz im Vertrieb
              </h3>
              <ul className="list-disc ml-5 space-y-1 m-0">
                <li>
                  <strong>Telefon-Outreach:</strong> B2B-Werbeanrufe erfordern
                  mindestens eine <em>mutmaßliche Einwilligung</em> nach §&nbsp;7
                  UWG. Dokumentiere Anknüpfungstatsachen (z.&nbsp;B. konkrete
                  Branchenrelevanz) und ermögliche Widerspruch.
                </li>
                <li>
                  <strong>E-Mail:</strong> Ohne vorherige Einwilligung unzulässig.
                </li>
                <li>
                  <strong>E-Rechnung:</strong> Seit 1.&nbsp;Januar&nbsp;2025 ist die
                  elektronische Rechnung der Standard bei inländischen B2B-Umsätzen
                  (mit Übergangsregelungen). Alle Unternehmen müssen E-Rechnungen
                  empfangen können; die Pflicht zum Ausstellen wird stufenweise
                  eingeführt.
                </li>
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Praxis-Checkliste</h3>
              <ul className="list-disc ml-5 m-0 space-y-1">
                <li>DE-Website, Impressum, Datenschutz</li>
                <li>Sales-Assets auf Deutsch (One-Pager, DPA, TOMs)</li>
                <li>UWG-sichere Outbound-Guidelines</li>
                <li>E-Rechnung: EN&nbsp;16931, XRechnung, ZUGFeRD-Flow</li>
                <li>Messestände &amp; Nachfassplan</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Typische Erwartungen</h3>
              <p className="m-0">
                Präzise Angebote, verlässliche Timings, klare
                Verantwortlichkeiten &amp; dokumentierte Sicherheit. Proof&ndash;of&ndash;Concepts
                und Referenzkunden wirken besonders stark.
              </p>
            </div>
          </aside>
        </div>

        {/* Bild 1 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/online-meeting-in-deutschem-mittelstand.jpg"
              />
              <img
                loading="lazy"
                src="/online-meeting-in-deutschem-mittelstand.jpg"
                alt="Online-Meeting in einem mittelständischen Unternehmen in Deutschland"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Zusammenarbeit im Mittelstand: Entscheidungen brauchen Klarheit und
            Nachweise &ndash; dafür eignen sich Live-Demos und Proofs.
          </figcaption>
        </figure>
      </section>

      <section id="globaler-vergleich" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Deutschland im globalen Vergleich
        </h2>

        <div className="rounded-sm border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-40">Aspekt</th>
                <th className="text-left font-semibold p-3">Deutschland</th>
                <th className="text-left font-semibold p-3">USA/UK</th>
                <th className="text-left font-semibold p-3">Italien/Frankreich</th>
                <th className="text-left font-semibold p-3">China</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Kaufprozess</td>
                <td className="p-3">
                  Formal, dokumentiert, oft mit Betriebsrat/IT-Sicherheit.
                </td>
                <td className="p-3">
                  Schneller, experimentierfreudig, stark digital-self-serve.
                </td>
                <td className="p-3">
                  Starker Regulierungsfokus &amp; E-Invoicing-Pflichten.
                </td>
                <td className="p-3">
                  Plattform- &amp; Marktplatzgetrieben, hohe
                  Geschwindigkeit.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Channels</td>
                <td className="p-3">
                  Messen, Partner, Direktvertrieb &amp; wachsende E-Commerce-Anteile.
                </td>
                <td className="p-3">
                  Stärker outbound-getrieben, viel Product-Led und SDR-Skalierung.
                </td>
                <td className="p-3">
                  Marktplätze plus Pflicht zur elektronischen Rechnung.
                </td>
                <td className="p-3">
                  Digitale Marktplätze, Social Commerce &amp; Chat-Vertrieb.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Zahlungsziele</td>
                <td className="p-3">Eher kurz &ndash; Cashflow-stark planbar.</td>
                <td className="p-3">Variabel &ndash; abhängig von Branche/Größe.</td>
                <td className="p-3">
                  Tendenziell länger (insb. in Frankreich).
                </td>
                <td className="p-3">Teils deutlich länger.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Recht</td>
                <td className="p-3">UWG &amp; DSGVO beachten; E-Rechnung seit 2025 Standard.</td>
                <td className="p-3">Do-Not-Call/Privacy je Land/State beachten.</td>
                <td className="p-3">Klarer Fahrplan zu B2B-E-Invoicing (Italien seit 2019).</td>
                <td className="p-3">Vielfach staatliche Plattformen vorgeschrieben.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">
              Was bedeutet das f&uuml;r deine Pipeline;
            </h3>
            <p className="m-0">
              Plane in Deutschland mit mehr Touchpoints und klaren Nachweisen.
              International zahlt sich ein Omnichannel-Setup aus: Website, Remote
              und vor Ort verzahnen &ndash; mit konsistenter Story, Preisen und
              SLAs.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Taktiken, die sich bewähren</h3>
            <ul className="list-disc ml-5 m-0 space-y-1">
              <li>Live-Demos mit klaren <em>Success Criteria</em></li>
              <li>Messetermin &rarr; Demo &rarr; Angebot &rarr; E-Rechnung einstellen</li>
              <li>Referenzen aus ähnlichen Branchen/Regionen</li>
              <li>DSO-steuernde Zahlungspläne</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="zahlen-trends" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Zahlen &amp; Trends</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Omnichannel &amp; Buying Teams</h3>
            <ul className="list-disc ml-5 m-0 space-y-1">
              <li>
                Käufer wollen flexibel zwischen Website, Remote und vor Ort
                wechseln; viele nutzen zehn oder mehr Touchpoints.
              </li>
              <li>
                Typische Buying-Teams bestehen aus mehreren Stakeholdern &ndash; je
                komplexer der Kauf, desto größer die Runde.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">B2B E-Commerce in Deutschland</h3>
            <p className="m-0">
              E-Commerce (inkl. EDI) ist Wachstumstreiber im B2B. Umsätze über
              Onlineshops und Marktplätze legen besonders zu. Damit steigen auch
              Erwartungen an Self-Service, Preistransparenz und Lieferzuverlässigkeit.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Zahlungsziele &amp; DSO</h3>
            <p className="m-0">
              In Deutschland sind Zahlungsziele im europäischen Vergleich eher
              kurz. Wirtschaftliche Lage und Branchenrisiken können die
              Forderungslaufzeit dennoch verlängern. Wer seine Terms aktiv
              managt und schnell fakturiert, schützt Cashflow und Forecast.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Messen als Umsatzmotor</h3>
            <p className="m-0">
              Die Messewirtschaft ist wieder stark: hohe Internationalität und
              Besucherzahlen &ndash; ideal, um komplexe Lösungen erlebbar zu
              machen und Deals zu beschleunigen.
            </p>
          </div>
        </div>

        {/* Bild 2 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/frankfurt-als-wirtschaftliches-zentrum-in-deutschland.jpg"
              />
              <img
                loading="lazy"
                src="/frankfurt-als-wirtschaftliches-zentrum-in-deutschland.jpg"
                alt="Frankfurt als wirtschaftliches Zentrum in Deutschland"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Finanz- und Entscheidungszentrum: Frankfurt steht stellvertretend
            f&uuml;r internationale B2B-Str&ouml;me in Deutschland.
          </figcaption>
        </figure>
      </section>

      <section id="praxis-tipps" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Praxis-Tipps f&uuml;r deinen Go-to-Market in DACH
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">1; ICP &amp; Messaging</h3>
            <p className="m-0">
              Formuliere Nutzen in Kundensprache: Effizienz, Sicherheit,
              Compliance, Verfügbarkeit. Vermeide Superlative &ndash; belege mit
              Zahlen, Referenzen und Piloten.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">2; Rechtssicherer Outreach</h3>
            <p className="m-0">
              Dokumentiere mutmaßliche Einwilligung, ermögliche einfachen
              Widerspruch, halte Blacklists aktuell. E-Mail nur mit Einwilligung.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">3; E-Rechnung integrieren</h3>
            <p className="m-0">
              EN&nbsp;16931-Formate (XRechnung, ZUGFeRD) beherrschen, Prozesse
              testen, Kundenstammdaten prüfen und Connectoren fr&uuml;hzeitig
              anbinden.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">4; Messe-Playbook</h3>
            <ul className="list-disc ml-5 m-0 space-y-1">
              <li>Vorab 6&ndash;8 Wochen: Termin-Setter &amp; Agenda</li>
              <li>Am Stand: Qual-Fragen, Kurz-Demo, Nächste Schritte</li>
              <li>Nach 48&nbsp;Std.: Dank, 2-Min Video, Terminlink</li>
              <li>Nach 7&nbsp;Tagen: Angebot/PoC, Stakeholder-Map</li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">5; Deal-Risiken senken</h3>
            <p className="m-0">
              Security-Fragebogen, DPA, TOMs und Referenzen parat. Ein
              <em> Mutual Action Plan</em> macht Timing und Verantwortlichkeiten
              transparent.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">6; DSO &amp; Cashflow</h3>
            <p className="m-0">
              Split-Invoices nach Meilensteinen, Skonto-Anreize, digitale
              Freigaben &amp; sofortige Faktura verkürzen Zeit bis Zahlung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Was unterscheidet B2B Sales von B2C Vertrieb?
            </h3>
            <p>
              Größere Buying-Teams, mehr Touchpoints, längere Zyklen, formale
              Anforderungen &amp; Implementierung. Emotionen spielen mit, aber
              Risiken &amp; Nutzenbelege wiegen schwerer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Ist Kaltakquise per Telefon erlaubt?</h3>
            <p>
              Ja, aber nur mit <em>mutmaßlicher Einwilligung</em> nach §&nbsp;7
              UWG (B2B). E-Mail-Werbung ist ohne Einwilligung unzulässig.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ab wann ist die E-Rechnung in Deutschland Pflicht?
            </h3>
            <p>
              Seit 01.01.2025 ist die E-Rechnung Standard im inländischen B2B.
              Empfangen muss jede Firma k&ouml;nnen; Ausstellen wird stufenweise
              Pflicht.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie kurz sind Zahlungsziele in Deutschland typischerweise?
            </h3>
            <p>
              Im EU-Vergleich eher kurz. Je nach Branche &amp; Lage schwanken
              DSO; aktives Forderungsmanagement lohnt immer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Rolle spielen Messen im deutschen B2B?
            </h3>
            <p>
              Eine große: Deutschland ist Top-Messeplatz. Für komplexe Produkte
              sind Messen ideale Kontakt- und Abschlussbeschleuniger.
            </p>
          </div>
        </div>

        {/* FAQ Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was unterscheidet B2B Sales von B2C Vertrieb?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Größere Buying-Teams, mehr Touchpoints, längere Zyklen, formale Anforderungen & Implementierung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Kaltakquise per Telefon erlaubt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, aber nur mit mutmaßlicher Einwilligung nach § 7 UWG (B2B). E-Mail-Werbung ist ohne Einwilligung unzulässig.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ab wann ist die E-Rechnung in Deutschland Pflicht?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Seit 01.01.2025 ist die E-Rechnung Standard im inländischen B2B. Empfangen muss jede Firma können; Ausstellen wird stufenweise Pflicht.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie kurz sind Zahlungsziele in Deutschland typischerweise?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Im EU-Vergleich eher kurz. Je nach Branche & Lage schwanken DSO; aktives Forderungsmanagement lohnt immer.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielen Messen im deutschen B2B?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Eine große: Deutschland ist Top-Messeplatz. Für komplexe Produkte sind Messen ideale Kontakt- und Abschlussbeschleuniger.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            Wie definierst du B2B Sales und was ist speziell in Deutschland zu
            beachten;
          </strong>{" "}
          B2B Sales ist der strukturierte Vertrieb zwischen Unternehmen. In
          Deutschland funktionieren Deals mit klaren Nachweisen, rechtssicheren
          Outreach-Prozessen, Messen als Beschleuniger und E-Rechnung als
          Standard. International gewinnt Omnichannel &ndash; wer Website,
          Remote und Vor-Ort nahtlos verbindet, gewinnt Marktanteile.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel f&uuml;r dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme
            B2B-Leser f&uuml;r dein Sales-Team.
          </p>

          <div className="mx-auto max-w-xl">
            <a
              href="https://www.findbar.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
              aria-label="Zu findbar.info wechseln (öffnet in neuem Tab)"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar &ndash; Die wichtigsten Begriffe zu B2B Sales
        </h2>

        <div className="rounded-sm border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Begriff</th>
                <th className="text-left font-semibold p-3">Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">ICP</td>
                <td className="p-3 text-zinc-700">
                  <em>Ideal Customer Profile</em>: Beschreibung der bestpassenden
                  Zielkunden f&uuml;r Vertrieb und Marketing.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Buying Center</td>
                <td className="p-3 text-zinc-700">
                  Gruppe der Entscheider, Nutzer und Beeinflusser, die zusammen
                  &uuml;ber eine Anschaffung befinden.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">SQL</td>
                <td className="p-3 text-zinc-700">
                  <em>Sales Qualified Lead</em>: Qualifizierter Lead, der f&uuml;r
                  ein Vertriebsgespr&auml;ch bereit ist.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">DSO</td>
                <td className="p-3 text-zinc-700">
                  <em>Days Sales Outstanding</em>: Durchschnittliche Zeit bis zur
                  Zahlungseingang nach Rechnungsstellung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">E-Rechnung</td>
                <td className="p-3 text-zinc-700">
                  Strukturierte elektronische Rechnung gem&auml;&szlig;
                  EN&nbsp;16931 &ndash; u.&nbsp;a. XRechnung, ZUGFeRD.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Über den Autor</h2>
        <div className="flex items-center gap-4">
          <img
            src={author.image}
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a
              href={author.linkedin}
              className={`text-sm hover:underline ${accent}`}
            >
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überpr&uuml;ft von:{" "}
            <strong>findbar Redaktion</strong> &ndash; Redaktionelle
            Qualit&auml;tssicherung.{" "}
            <a
              href="https://www.findbar.info"
              className={`hover:underline ${accent}`}
            >
              Website
            </a>
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Quellen &amp; weiterf&uuml;hrende Studien
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            McKinsey &amp; Company &ndash; B2B Pulse 2024: Five fundamental truths
            (Artikel und Exhibits):{" "}
            <a
              href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-fundamental-truths-how-b2b-winners-keep-growing"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mckinsey.com/.../five-fundamental-truths-how-b2b-winners-keep-growing
            </a>
          </li>
          <li>
            IFH K&ouml;ln &ndash; B2B-Marktmonitor 2024: Ums&auml;tze und Trends im
            B2B-E-Commerce:{" "}
            <a
              href="https://www.ifhkoeln.de/b2b-marktmonitor-2024-umsaetze-und-trends-im-b2b-e-commerce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ifhkoeln.de/b2b-marktmonitor-2024-umsaetze-und-trends-im-b2b-e-commerce/
            </a>
          </li>
          <li>
            AUMA &ndash; Kennzahlen und Messer&uuml;ckblick 2024/2025 (de/en):{" "}
            <a
              href="https://www.auma.de/messedeutschland/kennzahlen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.auma.de/messedeutschland/kennzahlen/
            </a>{" "}
            &amp;{" "}
            <a
              href="https://www.auma.de/en/trade-fair-venue-germany/key-figures/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.auma.de/en/trade-fair-venue-germany/key-figures/
            </a>
          </li>
          <li>
            Bundesfinanzministerium (BMF) &ndash; FAQ zur Einf&uuml;hrung der
            obligatorischen E-Rechnung (ab 01.01.2025):{" "}
            <a
              href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html
            </a>
          </li>
          <li>
            Coface &ndash; B2B-Zahlungsumfrage Deutschland 2024 (Durchschnittsfristen
            im L&auml;ndervergleich):{" "}
            <a
              href="https://www.coface.ch/de/news-publikationen-einblicke/die-coface-b2b-umfrage-2024-zu-zahlungen-in-deutschland-scheinbare-ruhe-doch-diese-ruhe-ist-truegerisch"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.coface.ch/.../die-coface-b2b-umfrage-2024-zu-zahlungen-in-deutschland
            </a>
          </li>
          <li>
            UWG §&nbsp;7 &ndash; Einzelnorm und Leitlinien zur Telefonwerbung (B2B):{" "}
            <a
              href="https://www.gesetze-im-internet.de/uwg_2004/__7.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gesetze-im-internet.de/uwg_2004/__7.html
            </a>
          </li>
        </ul>
      </section>

      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "B2B Sales: Definition, Begriffe und globaler Vergleich für Deutschland",
            description:
              "Definition, Prozess, rechtliche Besonderheiten und internationale Unterschiede – praxisnah erklärt.",
            inLanguage: "de",
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              image: author.image,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: "Findbar",
              url: siteUrl,
              logo: { "@type": "ImageObject", url: "/icon.png" },
            },
            image: `${siteUrl}/deutschland-im-b2b-sales.jpg`,
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            mainEntityOfPage: canonical,
          }),
        }}
      />

      {/* Company Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Findbar",
            url: siteUrl,
            email: "lennart@findbar.info",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              postalCode: "32139",
              addressLocality: "Spenge",
              addressCountry: "DE",
            },
            logo: `${siteUrl}/icon.png`,
            sameAs: [
              "https://www.linkedin.com/in/lennart-niehausmeier/",
              "https://www.findbar.info",
            ],
          }),
        }}
      />
    </article>
  );
}
