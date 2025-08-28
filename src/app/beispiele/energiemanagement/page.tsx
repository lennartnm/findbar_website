// src/app/energiemanagement-als-cfo-hebel/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";
const siteUrl = "https://muster-gmbh.de";
const canonical = `${siteUrl}/energiemanagement-als-cfo-hebel`;

const author = {
  name: "Max Mustermann",
  role: "Energiemanager (ISO 50001/EMS)",
  linkedin: "https://linkedin.com",
  image: "/Autorenbild.jpg",
};

export const metadata: Metadata = {
  title:
    "Energiemanagement als CFO-Hebel: ISO 50001 & EMS senken Betriebskosten messbar",
  description:
    "Wie du mit ISO 50001 und einem Energiemanagementsystem (EMS) Lastspitzen glättest, PV-Eigenverbrauch steigerst, Förderungen sicherst und einen belastbaren ROI erzielst.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: canonical,
    title:
      "Energiemanagement als CFO-Hebel: ISO 50001 & EMS senken Betriebskosten messbar",
    description:
      "Leitfaden für CFOs: Lastspitzenmanagement, PV-Eigenverbrauch, Förderungen und ROI – praxisnah erklärt.",
    images: [
      {
        url: "/energie.jpg",
        width: 1600,
        height: 600,
        alt: "Produktionshalle mit Energie-Dashboard und PV-Dach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Energiemanagement als CFO-Hebel: ISO 50001 & EMS senken Betriebskosten messbar",
    description:
      "So senkst du OPEX mit ISO 50001 & EMS – Lastspitzen, PV-Eigenverbrauch, Fördermittel & ROI.",
    images: ["/energie.jpg"],
  },
};

export default function Page() {
  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Energiemanagement als CFO-Hebel: Wie ISO 50001 &amp; EMS Betriebskosten
          senken
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          In diesem Leitfaden erfährst du, wie du mit einem
          Energiemanagementsystem (EMS) und ISO 50001 Lastspitzen reduzierst,
          den PV-Eigenverbrauch erhöhst, Fördermittel sicherst – und so den
          ROI deiner Energie-Investitionen beschleunigst.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-27">27.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/energie.jpg" />
              <img
                fetchPriority="high"
                src="/energie.jpg"
                alt="Blick in eine Produktionshalle mit Energie-Dashboard – Symbolbild für ISO 50001 & EMS"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Energiemanagement sichtbar machen: Echtzeitdaten als CFO-Hebel für
            Kostenkontrolle.
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
      <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">
          Das Wichtigste auf einen Blick
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>ISO 50001 + EMS = CFO-Hebel:</strong> Standardisiert
            Prozesse, liefert belastbare Energiedaten und erschließt schnelle
            OPEX-Einsparungen bei Netzentgelten, Strombezug und Wärme.
          </li>
          <li>
            <strong>Lastspitzenmanagement</strong> senkt Leistungspreise
            (15-Min-Maximum) und stabilisiert Budgets – mit Regelstrategien,
            Lastverschiebung und ggf. Batterie/PV.
          </li>
          <li>
            <strong>PV-Eigenverbrauch</strong> lohnt sich für Industrie oft mehr
            als Volleinspeisung – mit EMS, Lastverschiebung und smartem Messen
            steigerst du die Eigenverbrauchsquote.
          </li>
          <li>
            <strong>Förderungen</strong> für Sensorik, Mess- &amp; Reglertechnik
            sowie EMS-Software reduzieren CAPEX deutlich; Anforderungen orientieren
            sich häufig an ISO 50001.
          </li>
          <li>
            <strong>ROI sichtbar machen:</strong> Nutze neben der
            Amortisationszeit die Kapitalwert-Logik (VALERI/DIN EN 17463) – so
            werden Investitionen vergleichbar und audit-fest.
          </li>
          <li>
            <strong>Praxisleitfaden</strong> inkl. Schritt-für-Schritt-Plan für
            die Produktion: von der Lastgang-Analyse über Quick Wins bis zur
            Zertifizierung.
          </li>
        </ul>
      </aside>

      {/* ToC */}
      <nav
        aria-label="Inhaltsverzeichnis"
        className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
      >
        <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#warum-energiemanagement-cfo"
            >
              Warum Energiemanagement ein CFO-Hebel ist
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#iso-50001-grundlagen"
            >
              ISO 50001 kompakt: Ziele, Aufbau und Nutzen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#ems-bausteine"
            >
              EMS-Bausteine: Messung, Analytik, Automatisierung
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#lastspitzenmanagement"
            >
              Lastspitzenmanagement: Peak Shaving in der Praxis
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#pv-eigenverbrauch"
            >
              PV-Eigenverbrauch: Vom Zählerwert zur Cash-Machine
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#foerderungen"
            >
              Förderungen: Sensorik, EMS-Software &amp; Co. finanzieren
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#roi-rechnung"
            >
              ROI &amp; VALERI: Rechnen wie ein CFO
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#schritt-fuer-schritt"
            >
              ISO 50001 Einführung – Schritt für Schritt (Produktion)
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#praxis-checkliste"
            >
              Praxis-Checkliste
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
      <section id="warum-energiemanagement-cfo">
        <h2 className="text-2xl font-bold mb-3">
          Warum Energiemanagement ein CFO-Hebel ist
        </h2>
        <p className="leading-relaxed">
          Energie ist nicht nur ein technischer, sondern vor allem ein
          finanzieller Steuerungshebel. Leistungspreise, volatile Börsenstrompreise,
          Umlagen und CO₂-Kosten machen die Energiekosten zu einem
          bedeutenden OPEX-Block. Ein professionelles Energiemanagement
          liefert dir als CFO folgende Vorteile:
        </p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Transparenz:</strong> 15-Min-Lastgänge, Energiekennzahlen
            (kWh/t, kWh/Stück), Benchmarks.
          </li>
          <li>
            <strong>Steuerung:</strong> Automatisierte Regelstrategien zur
            Glättung von Lastspitzen und zum Timing von Lasten.
          </li>
          <li>
            <strong>Finanzwirkung:</strong> Reduzierte Netzentgelte, sinkende
            Beschaffungskosten, weniger Blindleistung und Stillstände.
          </li>
          <li>
            <strong>Compliance &amp; Förderung:</strong> Erfüllung gesetzlicher
            Pflichten und Zugang zu Zuschüssen.
          </li>
        </ul>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4 md:col-span-2">
            <h3 className="font-semibold mb-2">
              2-zu-1-Vergleich: Kostenhebel vs. Datenquellen
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc ml-5">
                  <li>Leistungspreis (15-Min-Maximum)</li>
                  <li>Arbeitspreis (kWh) &amp; Börsenzeiten</li>
                  <li>Umlagen/Abgaben &amp; Netzentgelte</li>
                  <li>CO₂-Preis (Scope 1/2)</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc ml-5">
                  <li>RLM-Zähler, iMSys/Smart-Meter</li>
                  <li>Maschinen-Signale (OPC UA, Modbus)</li>
                  <li>PV-Erzeugung, Speicher-SoC</li>
                  <li>EMS-Analytics &amp; Alarming</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm">
              <strong>Tipp:</strong> Beginne mit den 10 größten
              Abnahmestellen. 80 % der Wirkung stecken meist in 20 % der
              Zählerpunkte.
            </p>
          </aside>
        </div>
      </section>

      <section id="iso-50001-grundlagen">
        <h2 className="text-2xl font-bold mb-3">
          ISO 50001 kompakt: Ziele, Aufbau und Nutzen
        </h2>
        <p>
          ISO 50001 ist der internationale Standard für
          Energiemanagementsysteme. Er folgt dem PDCA-Zyklus
          (Plan–Do–Check–Act) und schafft einen Rahmen, um Energieziele zu
          setzen, Daten zu nutzen, Maßnahmen zu bewerten und die Performance
          kontinuierlich zu verbessern. Für dich als CFO bedeutet das:
          nachvollziehbare Prozesse, auditierbare Kennzahlen und eine klare
          Roadmap für Wirtschaftlichkeit.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Thema/Standard
                </th>
                <th className="text-left font-semibold p-3">Ziel &amp; Nutzen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">ISO 50001</td>
                <td className="p-3">
                  Systematisches Energiemanagement mit KPIs, Rollen,
                  Verantwortlichkeiten, Mess- und Verbesserungsprozessen – ideal
                  für kontinuierliche OPEX-Reduktion.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  DIN EN 16247 (Energieaudit)
                </td>
                <td className="p-3">
                  Punktuelle Analyse, identifiziert Maßnahmen. Geringere
                  Prozessdichte als ISO 50001 – gut als Einstieg oder
                  Pflicht-Erfüllung, aber kein vollständiges Managementsystem.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">ISO 50005</td>
                <td className="p-3">
                  Stufenmodell für kleine/mittelgroße Organisationen; erleichtert
                  den Einstieg bis zur späteren Zertifizierung nach ISO 50001.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Ein zertifiziertes Energiemanagement schafft Vertrauen in Zahlen.
            Erst wenn Lastgänge, Verbräuche und Einsparmaßnahmen konsistent
            gemessen werden, lassen sich Budgets sicher steuern und Fördermittel
            effizient nutzen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Max Mustermann, Energiemanager (direktes Zitat)
          </figcaption>
        </figure>
      </section>

      <section id="ems-bausteine">
        <h2 className="text-2xl font-bold mb-3">
          EMS-Bausteine: Messung, Analytik, Automatisierung
        </h2>
        <p>
          Ein modernes EMS verbindet Daten aus Zählern, Anlagen und Erzeugern
          mit Analytik und Automatisierung. Kernmodule sind:
        </p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Erfassung:</strong> RLM-Zähler/iMSys, Submetering
            (Produktionslinien, große Verbraucher), PV-Inverter, Speicher.
          </li>
          <li>
            <strong>Analyse:</strong> Lastgang-Erkennung, Anomalie-Detection,
            KPI-Dashboards, Alarmgrenzen.
          </li>
          <li>
            <strong>Regelung:</strong> Lastverschiebung, Peak-Shaving, dynamische
            Bezugspreise nutzen (Time-of-Use), PV-Überschuss priorisieren.
          </li>
          <li>
            <strong>Compliance &amp; Reporting:</strong> Audit-fähige
            Dokumentation nach ISO 50001, Nachweise für Fördermittel.
          </li>
        </ul>

        {/* Bild 1 – volle Breite, 16:6 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/atomkraft.jpg" />
              <img
                loading="lazy"
                src="/atomkraft.jpg"
                alt="Vergleichsaufnahme: Energiequellen im Wandel – Kontext Industrie"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Energiequellen im Wandel: Für CFOs zählt, was messbar Kosten senkt –
            unabhängig von der Quelle.
          </figcaption>
        </figure>
      </section>

      <section id="lastspitzenmanagement">
        <h2 className="text-2xl font-bold mb-3">
          Lastspitzenmanagement: Peak Shaving in der Praxis
        </h2>
        <p>
          In vielen Netztarifen bestimmt das höchste 15-Min-Leistungsmaximum den
          jährlichen Leistungspreis. Ein EMS erkennt drohende Peaks und steuert
          Verbraucher oder Speicher vorausschauend. Typische Bausteine:
        </p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Vorhersage:</strong> Prognose der nächsten 15-Min-Intervalle
            aus Historie und Produktionstakt.
          </li>
          <li>
            <strong>Regeln:</strong> Zuschalten von Batteriespeichern bzw.
            Reduktion nicht-kritischer Lasten (Druckluft, HVAC, Ladeleistungen).
          </li>
          <li>
            <strong>PV-Integration:</strong> PV-Überschuss puffern und bei
            Peak-Gefahr zuschalten.
          </li>
        </ul>

        <aside className="mt-4 rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
          <p className="text-sm">
            <strong>Daumenregel:</strong> Ein einziger „Ausreißer“ kann den
            Leistungspreis fürs gesamte Jahr prägen. Ein Peak weniger ist oft ein
            vier- bis fünfstelliger Euro-Effekt.
          </p>
        </aside>
      </section>

      <section id="pv-eigenverbrauch">
        <h2 className="text-2xl font-bold mb-3">
          PV-Eigenverbrauch: Vom Zählerwert zur Cash-Machine
        </h2>
        <p>
          Für Industrie und Gewerbe ist Eigenverbrauch häufig profitabler als
          Volleinspeisung. Entscheidend sind Zählerarchitektur (z. B. RLM),
          Lastprofile (Werktage, Schichtbetrieb) und Speicherdimensionierung.
          Ein EMS steigert die Eigenverbrauchsquote, indem es Lasten in
          Sonnenstunden verschiebt, Speicher intelligent lädt und Überschüsse
          für Peaks vorhält.
        </p>

        {/* Bild 2 – 16:6 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/energiemanagement.png"
              />
              <img
                loading="lazy"
                src="/energiemanagement.png"
                alt="Fabriksilhouette mit EMS-Panel, gekappten Lastspitzen, Batterie- und Zähler-Icon sowie aufwärts gerichtetem ROI-Pfeil; dezenter ISO-Hinweis."
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            ISO 50001 und EMS im Einsatz: Lastspitzen glätten, Eigenverbrauch
            erhöhen, Förderungen nutzen – und Betriebskosten messbar senken.
          </figcaption>
        </figure>
      </section>

      <section id="foerderungen">
        <h2 className="text-2xl font-bold mb-3">
          Förderungen: Sensorik, EMS-Software &amp; Co. finanzieren
        </h2>
        <p>
          Für EMS-Einführung und -Erweiterung (z. B. Mess- und Reglertechnik,
          Sensorik, Software) gibt es attraktive Zuschüsse. Die Anforderungen
          orientieren sich oft an ISO 50001 – ein sauberer Systemaufbau erleichtert
          die Beantragung. Prüfe Zuschussquoten nach Unternehmensgröße (KMU/
          Nicht-KMU) und kombiniere Maßnahmen sinnvoll.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
          <h3 className="font-semibold mb-2">Förder-Quick-Check</h3>
          <ul className="list-disc ml-5">
            <li>Förderfähige Hardware: Zähler, Gateways, Sensorik, Speicher.</li>
            <li>Förderfähige Software: EMS/EnMS-Plattform, Reporting, Analytics.</li>
            <li>Projektkosten: Planung, Installation, Schulung – je Programm.</li>
            <li>Nachweise: Systembeschreibung, Messkonzept, Lastgänge, KPIs.</li>
          </ul>
        </div>
      </section>

      <section id="roi-rechnung">
        <h2 className="text-2xl font-bold mb-3">
          ROI &amp; VALERI: Rechnen wie ein CFO
        </h2>
        <p>
          Die einfache Amortisationszeit ist beliebt – aber sie blendet Effekte
          nach dem Break-even aus. Solide CFO-Entscheidungen nutzen die
          Kapitalwert-Logik (Net Present Value, NPV). Die europäische Norm
          DIN EN 17463 („VALERI“) beschreibt ein standardisiertes Vorgehen zur
          Bewertung energiebezogener Investitionen: Transparenz über Annahmen,
          Cash-Flows, Risiken – und Vergleichbarkeit zwischen Maßnahmen.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Metrik</th>
                <th className="text-left font-semibold p-3">Was sie zeigt</th>
                <th className="text-left font-semibold p-3">Einsatz im EMS-Kontext</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Amortisationszeit
                </td>
                <td className="p-3">Zeit bis Rückfluss der Investition.</td>
                <td className="p-3">Gut für Quick Wins und Priorisierung.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Kapitalwert</td>
                <td className="p-3">
                  Barwert aller Cash-Flows inkl. Restwerte &amp; Risiken.
                </td>
                <td className="p-3">
                  Maßstab für Wirtschaftlichkeit, z. B. Peak-Shaving+Speicher vs.
                  reine Lastverschiebung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">IRR (interner Zins)</td>
                <td className="p-3">Rendite der Maßnahme.</td>
                <td className="p-3">
                  Vergleich mit Kapitalkosten (WACC) – Invest-Go/No-Go.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-4">
          <h3 className="font-semibold mb-2">Beispielrechnung (vereinfachter Überblick)</h3>
          <p className="mb-2">
            <strong>Ausgangslage:</strong> Werk mit 2 MW Spitzenlast, jährlichem
            Peak-Leistungspreis von 110 €/kW. EMS-Maßnahme: Speicher + Regelung
            reduziert Peak um 250 kW, CAPEX 300.000 €, OPEX 10.000 €/a.
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Jährlicher Nutzen:</strong> 250 kW × 110 €/kW = 27.500 €/a
              Leistungspreis-Ersparnis + 5.000 €/a Beschaffungsoptimierung
              (vereinfachend) = 32.500 €/a
            </li>
            <li>
              <strong>Simple Payback:</strong> 300.000 € / 32.500 € ≈ 9,2 Jahre
              (ohne Restwert/Förderung/Steuern).
            </li>
            <li>
              <strong>Mit Förderung (25 % Zuschuss):</strong> CAPEX 225.000 € →
              Payback ≈ 6,9 Jahre; Kapitalwert/IRR verbessert sich deutlich.
            </li>
          </ul>
          <p className="mt-2 text-sm text-zinc-600">
            Hinweis: In der VALERI-Bewertung werden Cash-Flows diskontiert,
            Restwerte berücksichtigt und Risiken (z. B. Degradation, Preisänderungen)
            abgebildet.
          </p>
        </div>
      </section>

      <section id="schritt-fuer-schritt">
        <h2 className="text-2xl font-bold mb-3">
          ISO 50001 Einführung – Schritt für Schritt (Produktion)
        </h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <strong>Scoping:</strong> Standorte, Zähler, Hauptverbraucher,
            relevante Energieträger definieren.
          </li>
          <li>
            <strong>Messkonzept:</strong> RLM/iMSys, Submetering, Gateways und
            Datenpunkte festlegen (15-Min-Auflösung).
          </li>
          <li>
            <strong>Energy Review:</strong> Lastgang-Analyse, Top-Verbraucher,
            Baseline &amp; EnPIs (Energy Performance Indicators).
          </li>
          <li>
            <strong>Ziele &amp; Maßnahmenplan:</strong> Peak-Shaving, PV-Eigenverbrauch,
            Druckluft-Leckagen, Waste-Heat, Regelstrategien.
          </li>
          <li>
            <strong>Prozesse &amp; Verantwortlichkeiten:</strong> Rollen,
            Freigaben, Schulungen, internes Audit.
          </li>
          <li>
            <strong>Umsetzung:</strong> Sensorik/EMS installieren,
            Dashboards/Alarme, SOPs.
          </li>
          <li>
            <strong>Wirksamkeitskontrolle:</strong> EnPIs, Monatsreporting,
            Management-Bewertung.
          </li>
          <li>
            <strong>Zertifizierung &amp; Kontinuierliche Verbesserung:</strong>{" "}
            Audit durchführen, Maßnahmen nachsteuern, Fördermittel nachreichen.
          </li>
        </ol>
      </section>

      <section id="praxis-checkliste">
        <h2 className="text-2xl font-bold mb-3">Praxis-Checkliste</h2>
        <ul className="list-disc ml-5">
          <li>Top-10-Verbraucher mit Zählern ≥ 15 Min erfassen</li>
          <li>Peak-Alarm bei 85 % der zulässigen Last</li>
          <li>PV-Überschuss → Speicher → Peak-Abdeckung priorisieren</li>
          <li>Förderfähigkeit von Sensorik/Software prüfen</li>
          <li>Business Case nach VALERI (NPV) rechnen</li>
          <li>ISO-Dokumente &amp; Nachweise versionieren</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wie schnell wirkt Lastspitzenmanagement auf meine Kosten?
            </h3>
            <p>
              Sofort ab dem ersten vermiedenen Peak – denn der Leistungspreis
              orientiert sich am höchsten 15-Min-Wert im Abrechnungszeitraum.
              Je früher du glättest, desto größer der Effekt.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Brauche ich für Förderungen eine ISO-50001-Zertifizierung?
            </h3>
            <p>
              Nicht immer, aber sie erleichtert die Beantragung. Viele Programme
              fördern Sensorik/EMS-Software unabhängig von einer bereits
              vorhandenen Zertifizierung – Details hängen vom Modul ab.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Eigenverbrauch oder Volleinspeisung – was rechnet sich besser?
            </h3>
            <p>
              In der Industrie ist Eigenverbrauch meist attraktiver, besonders
              bei Tageslasten und Schichtbetrieb. Ein EMS hilft, die Quote zu
              maximieren und Peaks zu glätten.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ist die einfache Amortisationszeit ausreichend?
            </h3>
            <p>
              Für eine erste Priorisierung ja. Für belastbare Entscheidungen
              solltest du zusätzlich Kapitalwert und IRR gemäß VALERI
              betrachten.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie starte ich pragmatisch mit ISO 50001?
            </h3>
            <p>
              Scoping klein halten (z. B. Hauptwerk), Top-Verbraucher messen,
              Quick-Wins umsetzen, Prozesse stabilisieren – dann schrittweise
              erweitern und zertifizieren.
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
                  name:
                    "Wie schnell wirkt Lastspitzenmanagement auf meine Kosten?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Sofort ab dem ersten vermiedenen Peak – der Leistungspreis orientiert sich am höchsten 15-Min-Wert im Abrechnungszeitraum.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Brauche ich für Förderungen eine ISO-50001-Zertifizierung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nicht zwingend. Viele Programme fördern Sensorik/EMS-Software auch ohne bestehende Zertifizierung; ISO 50001 erleichtert jedoch die Beantragung.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Eigenverbrauch oder Volleinspeisung – was rechnet sich besser?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "In der Industrie ist Eigenverbrauch meist attraktiver. Ein EMS erhöht die Eigenverbrauchsquote und kann Lastspitzen mindern.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist die einfache Amortisationszeit ausreichend?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Für schnelle Priorisierung ja. Für belastbare Investitionsentscheidungen sollte zusätzlich der Kapitalwert (VALERI) berechnet werden.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie starte ich pragmatisch mit ISO 50001?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kleines Scoping, Messkonzept, Quick Wins, dann Prozesse stabilisieren und zertifizieren.",
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
            Wie senkst du als CFO mit ISO 50001 &amp; EMS nachhaltig deine
            Betriebskosten?
          </strong>{" "}
          Indem du Lastspitzen konsequent glättest, PV-Eigenverbrauch erhöhst
          und Fördermittel klug nutzt – auf Basis belastbarer Daten und
          VALERI-Rechnungen. So werden deine Energie-Investitionen planbar,
          audit-fest und messbar profitabel.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Willst du Lastspitzen kappen und den Eigenverbrauch steigern?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir entwickeln mit dir ein förderfähiges EMS-Konzept inkl.
            VALERI-Business-Case – schnell, schlank, wirksam.
          </p>

          <form
            className="mx-auto grid max-w-xl gap-3 text-left"
            role="group"
            aria-describedby="cta-note"
          >
            <label className="text-sm">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                placeholder="Max Mustermann"
                required
              />
            </label>
            <label className="text-sm">
              Telefon
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                placeholder="+49 123456789"
              />
            </label>
            <label className="text-sm">
              E-Mail
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                placeholder="max@mustermann.de"
                required
              />
            </label>

            <a
              href="#cta-pop"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            >
              Unverbindlich anfragen
            </a>

            <p id="cta-note" className="text-xs text-zinc-500">
              Mit Absenden des Formulars akzeptierst du unsere
              Datenschutzbedingungen.
            </p>
          </form>
        </div>

        <div
          id="cta-pop"
          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
        >
          <a
            href="#"
            className="absolute inset-0 bg-black/50"
            aria-label="Overlay schließen"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cta-pop-title"
            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
          >
            <a
              href="#"
              aria-label="Fenster schließen"
              className="absolute right-3 top-3 rounded-md border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
            >
              ✕
            </a>

            <h3 id="cta-pop-title" className="mb-2 text-lg font-semibold">
              Hinweis
            </h3>
            <p className="text-zinc-800">
              In diesem Beispiel-Blogartikel funktionieren die Links nicht.
              Möchtest du solch ein Projekt auch für dein Angebot umsetzen?{" "}
              <a
                href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium underline ${accent}`}
              >
                Klicke hier
              </a>{" "}
              und lass uns sprechen.
            </p>
          </div>
        </div>
      </section>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/energieaudit-edl-g">
              Energieaudit DIN EN 16247 vs. ISO 50001 – was passt wann?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/iso-50001-einfuehrung">
              ISO 50001 einführen: Fahrplan, Rollen, Audit-Tipps
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/pv-eigenverbrauch-industrie"
            >
              PV im Gewerbe: Eigenverbrauch erhöhen, Peak-Shaving kombinieren
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/lastspitzenmanagement-peak-shaving"
            >
              Lastspitzenmanagement: Speicher, Regeln, Business-Case
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Energiemanagement als CFO-Hebel
        </h2>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Begriff</th>
                <th className="text-left font-semibold p-3">Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">EnMS / EMS</td>
                <td className="p-3 text-zinc-700">
                  Energiemanagementsystem: Kombination aus Prozessen, Messung und
                  Software zur systematischen Verbesserung der Energieperformance.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Lastspitze</td>
                <td className="p-3 text-zinc-700">
                  Höchster 15-Min-Leistungswert eines Zeitraums; prägt oft den
                  jährlichen Leistungspreis.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">RLM / iMSys</td>
                <td className="p-3 text-zinc-700">
                  Registrierende Leistungsmessung bzw. intelligentes
                  Messsystem (Smart Meter) mit 15-Min-Auflösung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Eigenverbrauch</td>
                <td className="p-3 text-zinc-700">
                  Direktnutzung von selbst erzeugtem Strom (z. B. PV) im Betrieb
                  zur Reduktion von Netzbezug und Entgelten.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">VALERI</td>
                <td className="p-3 text-zinc-700">
                  DIN EN 17463-Methode zur wirtschaftlichen Bewertung
                  energiebezogener Investitionen auf Kapitalwert-Basis.
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
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Claudia Müller</strong> – Leiter Controlling /
            Business Controller (Energie &amp; Kosten).{" "}
            <a href="https://linkedin.com" className={`hover:underline ${accent}`}>
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            ISO: „ISO 50001 — Energy management“ –{" "}
            <a className={accent} href="https://www.iso.org/iso-50001-energy-management.html">
              https://www.iso.org/iso-50001-energy-management.html
            </a>
          </li>
          <li>
            BAFA: „Modul 3 – Energiemanagementsysteme“ –{" "}
            <a
              className={accent}
              href="https://www.bafa.de/DE/Energie/Energieeffizienz/Energieeffizienz_und_Prozesswaerme/Modul3_Energiemanagementsysteme/modul3_energiemanagementsysteme_node.html"
            >
              https://www.bafa.de/…/Modul3_Energiemanagementsysteme
            </a>
          </li>
          <li>
            BAFA: „Energieaudit nach EDL-G“ –{" "}
            <a
              className={accent}
              href="https://www.bafa.de/DE/Energie/Energieberatung/Energieaudit/energieaudit_node.html"
            >
              https://www.bafa.de/…/Energieaudit
            </a>
          </li>
          <li>
            Bundesnetzagentur: „Messeinrichtungen / Zähler (Smart Meter)“ –{" "}
            <a className={accent} href="https://www.bnetza.de/smartmeter">
              https://www.bnetza.de/smartmeter
            </a>
          </li>
          <li>
            Fraunhofer ISE: „Aktuelle Fakten zur Photovoltaik in Deutschland
            (2025)“ –{" "}
            <a
              className={accent}
              href="https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/aktuelle-fakten-zur-photovoltaik-in-deutschland.pdf"
            >
              PDF
            </a>
          </li>
          <li>
            Next Kraftwerke: „Peak Shaving und Netznutzungsentgelte“ –{" "}
            <a className={accent} href="https://www.next-kraftwerke.de/wissen/peak-shaving">
              https://www.next-kraftwerke.de/wissen/peak-shaving
            </a>
          </li>
          <li>
            KEA-BW &amp; Solarcluster: „Photovoltaik in Gewerbe und Industrie
            (Leitfaden 04/2025)“ –{" "}
            <a
              className={accent}
              href="https://www.kea-bw.de/fileadmin/user_upload/Publikationen/181_PV-Netzwerk_BW_solarcluster_Leitfaden_PV-in-Gewerbe-und-Industrie_April2025.pdf"
            >
              PDF
            </a>
          </li>
          <li>
            FfE: „Was ist die VALERI-Norm (DIN EN 17463)?“ –{" "}
            <a
              className={accent}
              href="https://www.ffe.de/veroeffentlichungen/info-excel-tool-was-ist-die-valeri-normdin-en-17463/"
            >
              https://www.ffe.de/…/valeri
            </a>
          </li>
        </ul>
      </section>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Energiemanagement als CFO-Hebel: ISO 50001 & EMS senken Betriebskosten messbar",
            description:
              "Leitfaden für CFOs: Lastspitzenmanagement, PV-Eigenverbrauch, Förderungen und ROI – praxisnah erklärt.",
            inLanguage: "de",
            image: `${siteUrl}/energie.jpg`,
            datePublished: "2025-08-27",
            dateModified: "2025-08-27",
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              sameAs: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: "Muster GmbH",
              email: "muster@beispiel.de",
              telephone: "+49 123456789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Musterstraße 1",
                addressCountry: "DE",
              },
            },
            mainEntityOfPage: canonical,
          }),
        }}
      />

      {/* Organization Schema (Company) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Muster GmbH",
            url: siteUrl,
            email: "muster@beispiel.de",
            telephone: "+49 123456789",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 1",
              addressCountry: "DE",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "muster@beispiel.de",
                telephone: "+49 123456789",
                availableLanguage: ["de", "en"],
              },
            ],
            logo: `${siteUrl}/energie.jpg`,
          }),
        }}
      />
    </article>
  );
}
