// src/app/blog/csrd-esrs-umsetzung-2025/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "ESG-Reporting Manager (CSRD/ESRS)",
  focus:
    "CSRD-Umsetzung, ESRS-Datenprozesse, doppelte Wesentlichkeit, Scope-3-Accounting",
  image: "/public/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Chief Sustainability Officer (CSO)",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49123456789",
  url: "https://www.muster-gmbh.de",
};

export const metadata: Metadata = {
  title:
    "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
  description:
    "Praxisleitfaden zur CSRD-Umsetzung: doppelte Wesentlichkeit, Datenprozesse, KPIs, Roadmap bis 2028 – speziell für mittelständische B2B-Unternehmen.",
  alternates: {
    canonical: `${company.url}/blog/csrd-esrs-umsetzung-2025`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden zur CSRD-Umsetzung: doppelte Wesentlichkeit, Datenprozesse, KPIs, Roadmap bis 2028.",
    url: `${company.url}/blog/csrd-esrs-umsetzung-2025`,
    type: "article",
    images: [
      {
        url: "/public/nachhaltiges-windrad.jpg",
        alt: "Windrad als Symbol für Nachhaltigkeit und Energiewende",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap – für mittelständische B2B-Unternehmen.",
    images: ["/public/nachhaltiges-windrad.jpg"],
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
          CSRD &amp; ESRS: Was Unternehmen 2025 konkret umsetzen müssen
        </h1>

        <p className="mt-3 text-lg text-zinc-700">
          Du willst 2025 bei der Nachhaltigkeitsberichterstattung nichts dem
          Zufall überlassen? In diesem Leitfaden erfährst du, wie du{" "}
          <strong>CSRD</strong> und <strong>ESRS</strong> pragmatisch umsetzt –
          mit Fokus auf <strong>mittelständische B2B-Unternehmen</strong>:
          doppelte Wesentlichkeit, Datenprozesse, <strong>KPI-Set</strong> und
          eine klare Roadmap bis zur ersten testierten Veröffentlichung.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-27">27.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="public/nachhaltiges-windrad.jpg"
              />
              <img
                fetchPriority="high"
                loading="eager"
                src="public/nachhaltiges-windrad.jpg"
                alt="Hero-Bild: Windrad steht für die Transformation Richtung nachhaltiges Wirtschaften"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Hero-Bild: Windrad steht für die Transformation Richtung
            Nachhaltigkeitsbericht.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/public/Autorenbild.jpg"
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
            <strong>Relevanz 2025:</strong> Für viele mittelständische
            „Wave-2“-Unternehmen wurde die <strong>CSRD</strong> formal{" "}
            um <strong>2 Jahre verschoben</strong> – der Aufbau von Prozessen,
            der <strong>Wesentlichkeitsanalyse</strong> und der
            Datenarchitektur muss 2025 trotzdem starten, damit 2027/2028 alles
            sitzt.
          </li>
          <li>
            <strong>Doppelte Wesentlichkeit:</strong> Geschäftsauswirkungen{" "}
            <em>und</em> finanzielle Risiken priorisieren. Ohne klare Scoping-
            und Stakeholder-Methodik drohen falsche Schwerpunkte.
          </li>
          <li>
            <strong>Datenprozesse &amp; KPIs:</strong> Minimum-Set entlang
            <strong> ESRS 1/2</strong> und den <strong>Topical ESRS</strong>{" "}
            definieren (z. B. E1, S1, G1) – inklusive belastbarer{" "}
            <strong>Scope-3</strong>-Methodik und EU-Taxonomie-KPIs
            (Umsatz/CapEx/OpEx).
          </li>
          <li>
            <strong>Assurance-Fit:</strong> Ab dem ersten Bericht
            <strong> Limited Assurance</strong> einplanen: Nachvollziehbarkeit,
            Evidenzketten und interne Kontrollen (ICFR-ähnlich) sind Pflicht.
          </li>
          <li>
            <strong>Roadmap:</strong> 2025 Grundlagen, 2026 Pilot-Reporting,
            2027 Vollerhebung &amp; Dry-Run, 2028 Veröffentlichung mit Testat –
            inklusive <strong>Lieferkette</strong> und{" "}
            <strong>EU-Taxonomie</strong>.
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
            <a className={`hover:underline ${accent} font-medium`} href="#kontext">
              Warum 2025 trotzdem entscheidend ist
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#was-ist-csrd-esrs"
            >
              Was bedeuten CSRD &amp; ESRS – kurz erklärt
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#bin-ich-betroffen"
            >
              Bin ich 2025 betroffen? – Schwellenwerte &amp; Wellen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#wesentlichkeit">
              Doppelte Wesentlichkeit in 6 Schritten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#daten-kpis">
              Datenprozesse &amp; KPI-Set: praxisnahes Minimum
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#taxonomie">
              EU-Taxonomie: Umsatz, CapEx, OpEx im Griff
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#assurance">
              Limited Assurance vorbereiten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#roadmap">
              Roadmap 2025&nbsp;→&nbsp;2028 mit Checkliste
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#fehler">
              Häufige Fehler &amp; Quick Wins
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
      <section id="kontext" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Warum 2025 trotzdem entscheidend ist
        </h2>
        <p className="leading-relaxed">
          Auch wenn der Gesetzgeber den Start für viele Unternehmen um zwei
          Jahre nach hinten geschoben hat: <strong>2025</strong> ist das
          <em> operative Aufbaujahr</em>. In 12&nbsp;Monaten lassen sich weder
          Stakeholder-Dialoge noch verlässliche Datenketten für{" "}
          <strong>Scope-3-Emissionen</strong> oder{" "}
          <strong>EU-Taxonomie-KPIs</strong> aus dem Boden stampfen. Ziel ist
          deshalb, <strong>jetzt</strong> die Grundlagen zu schaffen: klare
          Rollen, ein realistisches KPI-Set, Datenflüsse, interne Kontrollen und
          eine saubere <strong>Wesentlichkeitsanalyse</strong>. So machst du
          dich berichts- und prüfungsfest – ohne Hektik kurz vor der Deadline.
        </p>
      </section>

      <section id="was-ist-csrd-esrs" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Was bedeuten CSRD &amp; ESRS – kurz erklärt
        </h2>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <p className="leading-relaxed">
            Die <strong>CSRD</strong> (Corporate Sustainability Reporting
            Directive) ist die EU-Richtlinie, die die Nachhaltigkeitsberichterstattung
            in der EU vereinheitlicht. Der Bericht folgt den{" "}
            <strong>ESRS</strong> (European Sustainability Reporting Standards)
            – bestehend aus <em>allgemeinen Standards</em> (ESRS&nbsp;1, ESRS&nbsp;2)
            und thematischen Standards (z. B. <strong>ESRS&nbsp;E1</strong>{" "}
            Klima, <strong>S1</strong> Eigene Belegschaft,{" "}
            <strong>G1</strong> Unternehmensführung). Das Prinzip:
            <strong> Materialität</strong> entscheidet, worüber du berichten
            musst – aber <em>Methodik</em> und <em>Dokumentation</em> sind
            klar vorgegeben.
          </p>
        </div>
      </section>

      <section id="bin-ich-betroffen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Bin ich 2025 betroffen? – Schwellenwerte &amp; Wellen
        </h2>
        <p className="leading-relaxed">
          Für viele <strong>mittelständische B2B-Unternehmen</strong> gilt:
          Sie zählen zur „Wave&nbsp;2“ (große Unternehmen mit mind. zwei von
          drei Kriterien: &gt;250 MA, &gt;€50&nbsp;Mio. Umsatz,
          &gt;€25&nbsp;Mio. Bilanzsumme). Nach dem EU-„Stop-the-Clock“ wurde
          diese Welle <strong>um zwei Jahre verschoben</strong>. Praktisch heißt
          das: erste Berichtsperiode i. d. R. <strong>FY&nbsp;2027</strong>,
          Veröffentlichung <strong>2028</strong>. Wer bereits zu Wave&nbsp;1
          gehört, berichtet weiterhin früher; gelistete KMU (Wave&nbsp;3) haben
          ebenfalls zusätzliche Zeit.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-xl font-semibold mb-2">
              Einordnung in 30&nbsp;Sekunden
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Wave 1:</strong> Große kapitalmarktorientierte
                Unternehmen (&gt;500&nbsp;MA) – bereits im Reporting.
              </li>
              <li>
                <strong>Wave 2:</strong> Übrige große Unternehmen –{" "}
                Start mit FY&nbsp;2027, Veröffentlichung 2028.
              </li>
              <li>
                <strong>Wave 3:</strong> Gelistete KMU – zeitversetzt, mit
                zusätzlicher Option zur Verschiebung.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="font-semibold mb-1">
              Wichtig für die Planung 2025&nbsp;→&nbsp;2026
            </h4>
            <p className="m-0">
              Trotz Verschiebung: Stakeholder-Mapping, Wesentlichkeit,
              Datenlandkarte, IT-Anforderungen und Lieferkettendaten benötigen
              <strong> 12–24 Monate</strong> Vorlauf.
            </p>
          </aside>
        </div>
      </section>

      <section id="wesentlichkeit" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Doppelte Wesentlichkeit in 6 Schritten
        </h2>
        <p className="leading-relaxed">
          Die <strong>doppelte Wesentlichkeitsanalyse</strong> betrachtet zwei
          Perspektiven: <em>Impact-Materialität</em> (Auswirkungen deines
          Geschäfts auf Umwelt &amp; Menschen) und{" "}
          <em>finanzielle Materialität</em> (Risiken/Chancen für dein
          Unternehmen). So gehst du vor:
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Scope definieren:</strong> Rechtskreise, Standorte,
                Wertschöpfungsstufen (inkl. Up-/Downstream).
              </li>
              <li>
                <strong>Stakeholder erfassen:</strong> interne Bereiche, Kunden,
                Lieferanten, Belegschaft, Communities, Investoren.
              </li>
              <li>
                <strong>Longlist Themen:</strong> entlang ESRS-Themenfeldern
                (z. B. Klima, Biodiversität, Menschenrechte, Korruption).
              </li>
              <li>
                <strong>Bewertung:</strong> qualitativ + quantitativ
                (Eintrittswahrscheinlichkeit, Ausmaß, Zeitbezug).
              </li>
              <li>
                <strong>Validierung:</strong> Management-Kalibrierung,
                Dokumentation der Annahmen und Quellen.
              </li>
              <li>
                <strong>Transparenz:</strong> Methodik, Schwellenwerte,
                Ergebnisse und Abdeckungsgrad offenlegen.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Methodik-Tipps</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Verknüpfe die Bewertung mit <strong>KPIs</strong> und
                <strong> Zielen</strong>.
              </li>
              <li>
                Nutze <strong>Heatmaps</strong> und klare
                Dokumentationsbausteine (Thema → Risiko/Chance → KPI → Steuerung).
              </li>
              <li>
                Beziehe die <strong>Wertschöpfungskette</strong> früh ein –
                sonst fehlen <strong>Scope-3-Daten</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Ohne saubere doppelte Wesentlichkeit wird alles teurer: Du sammelst
            zu viele Daten, verfehlst die Prioritäten – und diskutierst es in
            der Prüfung doppelt.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Max Mustermann, indirektes Zitat aus Projekterfahrungen
          </figcaption>
        </figure>
      </section>

      <section id="daten-kpis" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Datenprozesse &amp; KPI-Set: praxisnahes Minimum
        </h2>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Core-Set je ESRS-Bereich</h3>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Bereich</th>
                  <th className="text-left font-semibold p-3">Beispiel-KPIs</th>
                  <th className="text-left font-semibold p-3">
                    Datenquellen &amp; Systeme
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">ESRS&nbsp;E1 Klima</td>
                  <td className="p-3">
                    Scope&nbsp;1/2/3 (t&nbsp;CO₂e), Energieverbrauch,
                    Emissionsintensitäten, Transitionsplan-Meilensteine
                  </td>
                  <td className="p-3">
                    Zählerstände, Energieabrechnungen, Einkaufsdaten,{" "}
                    Lieferantenumfragen, LCA-Faktoren
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">ESRS&nbsp;S1 Belegschaft</td>
                  <td className="p-3">
                    Headcount, Gender-Pay-Gap, Unfallraten (LTIFR), Fluktuation,
                    Trainingsstunden
                  </td>
                  <td className="p-3">
                    HR-System, HSE-Tool, Lohnbuchhaltung, Arbeitssicherheit
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">ESRS&nbsp;G1 Governance</td>
                  <td className="p-3">
                    Code-of-Conduct-Schulungen, Hinweisgebersystem, Vorstands-
                    Aufsicht (ESG), Korruptionsfälle
                  </td>
                  <td className="p-3">
                    Compliance-Tool, Rechtsabteilung, Interne Kontrollen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Lieferkette</td>
                  <td className="p-3">
                    Anteil abgefragter ESG-Daten, Audit-Quote, kritische
                    Rohstoffe, Scope-3 Kategorie-Abdeckung
                  </td>
                  <td className="p-3">
                    ERP (Einkauf), Lieferantenportal, Fragebögen, Vertragstexte
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">EU-Taxonomie</td>
                  <td className="p-3">
                    Anteil taxonomiefähiger/-konformer Umsätze, CapEx, OpEx
                  </td>
                  <td className="p-3">
                    Finanzbuchhaltung, Investitionsplanung, Werks-/Anlagenliste
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h4 className="font-semibold mb-2">Scope-3 pragmatisch erfassen</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Starte mit den <strong>Top-Kategorien</strong> (z. B.
                  eingekaufte Güter/Dienstleistungen, Transport/Distribution,
                  Nutzungsphase).
                </li>
                <li>
                  Wähle je Kategorie eine <strong>Methodik</strong> (Supplier-
                  spezifisch &gt; Hybrid &gt; Durchschnittswerte) – mit klarer
                  Begründung.
                </li>
                <li>
                  Lege <strong>Datenqualitätsstufen</strong> fest und plane
                  jährliche Verbesserungen.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h4 className="font-semibold mb-2">Interne Kontrollen (IC)</h4>
              <p className="m-0">
                Definiere Eigentümer je KPI, Vier-Augen-Prinzip,
                Änderungsprotokolle, Belegnachweise und ein zentrales
                <strong> Evidenz-Repository</strong>. Das spart dir in der
                Prüfung viel Zeit.
              </p>
            </div>
          </div>
        </div>

        {/* Bild 1 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/public/nachhaltigkeit.jpg" />
              <img
                loading="lazy"
                src="/public/nachhaltigkeit.jpg"
                alt="Team arbeitet an ESG-Datenprozessen und KPI-Definition"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Datenprozesse, Verantwortlichkeiten und Evidenzmanagement sind die
            Basis für prüfungsfeste ESRS-KPIs.
          </figcaption>
        </figure>
      </section>

      <section id="taxonomie" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          EU-Taxonomie: Umsatz, CapEx, OpEx im Griff
        </h2>
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <p className="leading-relaxed">
              Unternehmen berichten den Anteil von <strong>Umsatz</strong>,{" "}
              <strong>CapEx</strong> und <strong>OpEx</strong>, der
              taxonomiefähig bzw. -konform ist. Für den Einstieg brauchst du:{" "}
              <em>Aktivitäten-Mapping</em> (NACE-Codes), Prüfung der
              technischen Kriterien (DNSH, Mindestschutz) und eine saubere
              Finanz-Zuordnung. Plane ein <strong>Taxonomie-Register</strong>{" "}
              mit Aktivität, Asset, Status, Nachweis.
            </p>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">Praxis-Hinweis</h3>
            <p className="m-0">
              Nicht jede OpEx-Kategorie ist materiell. Wenn OpEx für dein
              Geschäftsmodell kaum relevant ist, fokussiere auf Umsatz/CapEx
              und dokumentiere die Materialität.
            </p>
          </aside>
        </div>
      </section>

      <section id="assurance" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Limited Assurance vorbereiten</h2>
        <p className="leading-relaxed">
          Der erste CSRD-Bericht benötigt ein <strong>begrenztes
          Prüfungsurteil</strong> („Limited Assurance“). Das heißt: Zahlen,
          Methoden und Prozesse müssen <em>prüfbar</em> sein. Plane einen{" "}
          <strong>Pre-Assurance-Check</strong> (Gap-Analyse), ein IC-Konzept
          (Kontrollpunkte entlang der Datenkette) und ein Dokumentationspaket
          (Methoden-Memos, Prozessbeschreibungen, Evidenzen).
        </p>
      </section>

      <section id="roadmap" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Roadmap 2025&nbsp;→&nbsp;2028 mit Checkliste
        </h2>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Zeitplan</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>2025:</strong> Governance aufsetzen, Wesentlichkeit
              durchführen, Datenlandkarte, Lieferkette einbinden, KPI-Set
              definieren, IT-Anforderungen klären.
            </li>
            <li>
              <strong>2026:</strong> Pilot-Reporting (Q1–Q4), erste
              Taxonomie-Bewertung, Lieferanten-Datenerhebung skalieren,
              Kontrolle &amp; Evidenzen testen.
            </li>
            <li>
              <strong>2027:</strong> Vollerhebung, Dry-Run nach ESRS-Struktur,
              Pre-Assurance, Management-Review, Finalisierung Policies/Ziele.
            </li>
            <li>
              <strong>2028:</strong> Veröffentlichung &amp; Limited Assurance,
              Lessons Learned in Zyklus 2 überführen.
            </li>
          </ul>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h4 className="font-semibold mb-2">Checkliste „Start 2025“</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Projekt-Setup mit Steering &amp; Workstreams</li>
                <li>Stakeholder-Mapping &amp; Wesentlichkeitsscope</li>
                <li>KPI-Inventar je ESRS-Bereich</li>
                <li>Daten-Owner &amp; Prozesspfade festlegen</li>
                <li>Lieferanten-Onboarding (Fragebögen/Portal)</li>
                <li>Policy-Gap-Analyse (z. B. Klima, Menschenrechte)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h4 className="font-semibold mb-2">
                Quick Wins für den Mittelstand
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Energie- und Emissionsdaten aus Rechnungen &amp; Zählern
                  automatisieren.
                </li>
                <li>
                  Lieferantendaten über <em>Top-80&nbsp;% Einkaufsvolumen</em>{" "}
                  priorisieren.
                </li>
                <li>
                  Bestehende Compliance-Prozesse für G1/Whistleblowing nutzen.
                </li>
                <li>Einheitliche KPI-Templates &amp; Evidenzordner.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bild 2 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/public/ms-neu.jpg" />
              <img
                loading="lazy"
                src="/public/ms-neu.jpg"
                alt="Projektboard mit Meilensteinen für CSRD-Roadmap"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Visualisiere deine Roadmap – das schafft Verbindlichkeit und Tempo.
          </figcaption>
        </figure>
      </section>

      <section id="fehler" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Häufige Fehler &amp; Quick Wins</h2>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Typische Fehler</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Wesentlichkeit ohne Stakeholder-Einbindung.</li>
                <li>Zu spätes Anfangen mit Scope-3-Daten.</li>
                <li>Kein Evidenz-Repository → Prüfungsstress.</li>
                <li>
                  Nur Nachhaltigkeitsteam involviert – Fachbereiche fehlen.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Wins</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Zentrale <strong>KPI-Owner</strong> je Datenfluss benennen.
                </li>
                <li>
                  <strong>Template-Kit</strong> für Methoden-Memos &amp;
                  Kontrollen erstellen.
                </li>
                <li>
                  <strong>Lieferanten-Segmentierung</strong> nach Risiko &amp;
                  Volumen.
                </li>
                <li>
                  <strong>Taxonomie-Register</strong> früh pflegen.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Was bedeutet die CSRD-Verschiebung konkret für Wave-2-Unternehmen?
            </h3>
            <p>
              Der Start wurde um zwei Jahre nach hinten verlegt. Praktisch:
              erste Berichtsperiode meist FY&nbsp;2027, Veröffentlichung 2028.
              2025/2026 sind deshalb Aufbaujahre für Analyse, Daten, Kontrollen
              und Lieferkette.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Müssen Scope-3-Emissionen zwingend berichtet werden?
            </h3>
            <p>
              Ja, sofern <em>materiell</em>. Die doppelte Wesentlichkeit
              entscheidet. In vielen B2B-Sektoren sind Scope-3 die größte
              Emissionsquelle – starte mit Top-Kategorien und verbessere die
              Datenqualität iterativ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche EU-Taxonomie-Kennzahlen sind Pflicht?
            </h3>
            <p>
              Anteil taxonomiefähiger/-konformer <strong>Umsätze</strong>,{" "}
              <strong>CapEx</strong> und <strong>OpEx</strong>; plus die
              erforderlichen qualitativen Erläuterungen (z. B. Methodik,
              Annahmen).
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Brauche ich ab dem ersten Bericht eine Prüfung?
            </h3>
            <p>
              Ja. Der Bericht unterliegt einem{" "}
              <strong>Limited-Assurance-Engagement</strong>. Deshalb sind klare
              Kontrollen, Nachweise und konsistente Methoden entscheidend.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie verknüpfe ich CSRD mit dem Lieferkettengesetz?
            </h3>
            <p>
              Baue die Risiko- und Datenerhebung für Menschenrechte/Umwelt in
              der Lieferkette in deine Wesentlichkeit und Scope-3-Prozesse ein.
              So erfüllst du Berichtspflichten konsistent und reduzierst
              Doppelarbeit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Unser Unternehmen ist kleiner als die Schwellenwerte – trotzdem
              starten?
            </h3>
            <p>
              Ja, wenn Kunden/Finanzierer Daten verlangen oder du
              kapitalmarktnah bist. Ein schlanker Materialitäts- und KPI-Start
              verschafft dir Vorteile in Ausschreibungen und bei Investoren.
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
                    "Was bedeutet die CSRD-Verschiebung konkret für Wave-2-Unternehmen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Der Start wurde um zwei Jahre nach hinten verlegt. Praktisch: erste Berichtsperiode meist FY 2027, Veröffentlichung 2028. 2025/2026 sind Aufbaujahre.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Müssen Scope-3-Emissionen zwingend berichtet werden?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, sofern materiell. In vielen B2B-Sektoren sind Scope-3 maßgeblich. Starte mit Top-Kategorien und erhöhe die Datenqualität schrittweise.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche EU-Taxonomie-Kennzahlen sind Pflicht?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Anteil taxonomiefähiger/-konformer Umsätze, CapEx und OpEx sowie qualitative Erläuterungen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Brauche ich ab dem ersten Bericht eine Prüfung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja. Der Bericht unterliegt einem Limited-Assurance-Engagement. Klare Kontrollen und Evidenzen sind Pflicht.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie verknüpfe ich CSRD mit dem Lieferkettengesetz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Integriere Risiko- und Datenerhebung zu Menschenrechten/Umwelt in Wesentlichkeit und Scope-3-Prozesse.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Unser Unternehmen ist kleiner als die Schwellenwerte – trotzdem starten?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, wenn Marktanforderungen bestehen. Ein schlanker Start schafft Vorteile in Vertrieb und Finanzierung.",
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
            Wie setzt ein mittelständisches B2B-Unternehmen die CSRD/ESRS 2025
            richtig auf?
          </strong>{" "}
          Indem du 2025 die Grundlagen legst: doppelte Wesentlichkeit,
          belastbare Datenprozesse und ein fokussiertes KPI-Set. Mit einer
          klaren Roadmap und prüfungsfähigen Evidenzen kommst du 2027/2028
          stressfrei durch die Assurance.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Lust auf eine kompakte CSRD-Roadmap-Session?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir entwickeln mit dir in 90&nbsp;Minuten deinen individuellen
            Umsetzungsplan – von Wesentlichkeit bis Audit-Readiness.
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

        {/* Pop-up (Modal) */}
        <div
          id="cta-pop"
          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
        >
          {/* Klick auf Overlay schließt wieder */}
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
            {/* Schließen-Button */}
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
            <a
              className={`hover:underline ${accent}`}
              href="/blog/eu-taxonomie-erklaert"
            >
              EU-Taxonomie erklärt: So findest du deine Aktivitäten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/scope-3-guide">
              Scope-3 im Mittelstand: Methoden, Datenquellen, Qualität
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/doppelte-wesentlichkeit">
              Doppelte Wesentlichkeit: Vorlage &amp; Workshop-Ablauf
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/assurance-ready">
              Assurance-Ready Reporting: Kontrollen &amp; Evidenzen
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu CSRD &amp; ESRS
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
                <td className="p-3 font-medium text-zinc-900">CSRD</td>
                <td className="p-3 text-zinc-700">
                  EU-Richtlinie, die Umfang, Form und Prüfung der
                  Nachhaltigkeitsberichterstattung festlegt.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">ESRS</td>
                <td className="p-3 text-zinc-700">
                  Berichtsstandards (allgemein &amp; thematisch), die konkret
                  regeln, was und wie zu berichten ist.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Doppelte Wesentlichkeit
                </td>
                <td className="p-3 text-zinc-700">
                  Kombination aus Impact- und finanzieller Materialität; bestimmt
                  die relevanten Themen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Scope 3</td>
                <td className="p-3 text-zinc-700">
                  Indirekte Emissionen entlang der Wertschöpfungskette (z. B.
                  eingekaufte Güter, Transport, Nutzung).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  EU-Taxonomie-KPIs
                </td>
                <td className="p-3 text-zinc-700">
                  Anteil taxonomiefähiger/-konformer Umsätze, CapEx und OpEx.
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
            <div className="text-sm text-zinc-700">
              {author.role} – {author.focus}
            </div>
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
            <a href={reviewer.linkedin} className={`hover:underline ${accent}`}>
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
            European Commission – Corporate sustainability reporting (CSRD)
            Überblick:{" "}
            <a
              href="https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              finance.ec.europa.eu
            </a>
          </li>
          <li>
            EUR-Lex – CSRD-Richtlinie (konsolidierte Fassung):{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dir/2022/2464/2025-04-17/eng"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              eur-lex.europa.eu
            </a>
          </li>
          <li>
            EFRAG – Implementation Guidance IG&nbsp;1–3 (Materiality, Value
            Chain, Datapoints):{" "}
            <a
              href="https://www.efrag.org/en/projects/esrs-implementation-guidance-documents"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              efrag.org
            </a>
          </li>
          <li>
            Europäisches Parlament – „Stop-the-Clock“ (Verschiebung Wave 2/3):{" "}
            <a
              href="https://www.europarl.europa.eu/news/en/press-room/20250331IPR27557/sustainability-and-due-diligence-meps-agree-to-delay-application-of-new-rules"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              europarl.europa.eu
            </a>
          </li>
          <li>
            Deloitte – Omnibus Update &amp; revidierte ESRS-Entwürfe (31.07.2025):{" "}
            <a
              href="https://dart.deloitte.com/USDART/home/publications/deloitte/heads-up/2025/european-sustainability-omnibus-reporting-standards"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              dart.deloitte.com
            </a>
          </li>
          <li>
            CEAOB/EC – Leitlinien zur Limited Assurance (Zeitschiene, 2026):{" "}
            <a
              href="https://finance.ec.europa.eu/document/download/8ac2df18-2ae1-4bc7-9d87-a4a740e48f5e_en?filename=240930-ceaob-guidelines-limited-assurance-sustainability-reporting_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              finance.ec.europa.eu (PDF)
            </a>
          </li>
          <li>
            EU-Taxonomie – Offenlegung Umsatz/CapEx/OpEx (Überblick &amp;
            Vereinfachungen):{" "}
            <a
              href="https://finance.ec.europa.eu/document/download/5ae0ef14-2852-459a-bbbe-e55e1215a374_en?filename=250205-sustainable-finance-platform-simplifying-taxonomy_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              finance.ec.europa.eu (PDF)
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
              "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
            description:
              "Praxisleitfaden zur CSRD-Umsetzung: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap – speziell für mittelständische B2B-Unternehmen.",
            inLanguage: "de",
            image: `${company.url}/public/nachhaltiges-windrad.jpg`,
            dateModified: "2025-08-27",
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: company.name,
              url: company.url,
              logo: {
                "@type": "ImageObject",
                url: `${company.url}/public/nachhaltiges-windrad.jpg`,
              },
            },
            mainEntityOfPage: `${company.url}/blog/csrd-esrs-umsetzung-2025`,
          }),
        }}
      />

      {/* Company Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: company.url,
            email: company.email,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address,
              addressCountry: "DE",
            },
            sameAs: [author.linkedin, reviewer.linkedin],
          }),
        }}
      />
    </article>
  );
}
