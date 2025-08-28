// src/app/blog/supply-chain-resilienz-digitale-transparenz/page.tsx
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const accent = "text-emerald-700";

const title =
  "Supply-Chain-Resilienz durch digitale Transparenz – Frühwarnsysteme, Multi-Sourcing & Bestandsoptimierung";
const description =
  "Wie du mit Lieferkettentransparenz, Risikofrüherkennung, Mehrquellenstrategie und Bestandsoptimierung deine Supply Chain robust und planbar machst.";
const canonical =
  "https://www.muster-gmbh.de/blog/supply-chain-resilienz-digitale-transparenz";

const publishDate = "2025-08-27";
const modifiedDate = "2025-08-27";

const author = {
  name: "Max Mustermann",
  role: "Supply Chain Risk Manager",
  focus:
    "Risikofrüherkennung, Lieferantennetzwerke, Bestandsstrategien & S&OP",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Leiter Strategischer Einkauf (Head of Procurement)",
  linkedin: "https://linkedin.com",
};

const publisher = {
  name: "Muster GmbH",
  logo: "/logo.png",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
  address: "Musterstraße 1",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: publisher.name,
    images: [
      {
        url: "/supply.jpg",
        width: 1600,
        height: 600,
        alt: "Digitale Transparenz in globalen Lieferketten – Dashboard mit Weltkarte und Risikoindikatoren",
      },
    ],
    locale: "de_DE",
    type: "article",
    authors: [author.name],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/supply.jpg"],
    creator: author.name,
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
      {/* Headline / Hero / Meta  — Starter Section Anfang */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Supply-Chain-Resilienz durch digitale Transparenz
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Methoden &amp; Tools für Risikofrüherkennung, Multi-Sourcing
          (Mehrquellenstrategie) und Bestandsoptimierung – einfach erklärt und
          mit konkreten Schritten, die du sofort umsetzen kannst.
        </p>

        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime={modifiedDate}>27.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/supply.jpg" />
              <img
                fetchPriority="high"
                loading="eager"
                decoding="async"
                src="/supply.jpg"
                alt="Dashboard zeigt globale Lieferkette mit Risiko-Hotspots und Bestandskennzahlen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Digitale Transparenz macht Risiken früh sichtbar und verkürzt
            Reaktionszeiten entlang der Lieferkette.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src={author.image}
            alt={`Autor: ${author.name}`}
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>Transparenz ist die Basis:</strong> Ohne durchgängige
            Sichtbarkeit (Tier-n, Materialflüsse, Events) bleibt jede
            Resilienz-Initiative Stückwerk. Zielbild: ein Control Tower mit
            Echtzeit-Signalen und klaren Verantwortlichkeiten.
          </li>
          <li>
            <strong>Frühwarnsystem statt Feuerwehr:</strong> Definiere
            Risikoindikatoren (z. B. Lead-Time-Drift, Lieferanten-OTIF,
            geopolitische/Echtzeit-Events) und verbinde sie mit
            Eskalationsregeln sowie Szenario-Simulation (digitaler Zwilling).
          </li>
          <li>
            <strong>Multi-Sourcing pragmatisch:</strong> Kritikalität bewerten,
            qualifizierte Zweitquelle vorbereiten, TCO und Risiko abwägen –
            Dual/Triple-Sourcing dort, wo es wirklich Resilienz bringt.
          </li>
          <li>
            <strong>Bestände smart optimieren:</strong> Segmentiere (ABC/XYZ),
            definiere Servicegrade, nutze MEIO für Netzwerke – so senkst du
            Kapitalbindung ohne Serviceverlust.
          </li>
          <li>
            <strong>S&amp;OP als Taktgeber:</strong> Eine integrierte Planung
            synchronisiert Nachfrage, Kapazitäten, Einkauf und Finanzen –
            inklusive klarer KPIs, Entscheidungsrechten und Rolling Forecast.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-resilienz">
              Was bedeutet Supply-Chain-Resilienz heute?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#transparenz-hebel">
              Warum ist Lieferkettentransparenz der Hebel?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#risikofruehwarnsystem">
              Risikofrüherkennung in der Praxis
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#multi-sourcing">
              Multi-Sourcing richtig aufsetzen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#bestaende-optimieren">
              Bestandsoptimierung: von Safety Stock zu MEIO
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#sop-taktgeber">
              S&amp;OP als Taktgeber
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#90-tage-plan">
              90-Tage-Plan: Deine Roadmap zur Resilienz
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#tool-landkarte">
              Tool-Landkarte &amp; Auswahlkriterien
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kpis-dashboard">
              KPI-Set &amp; Dashboard-Beispiele
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
      <section id="was-ist-resilienz" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Was bedeutet Supply-Chain-Resilienz heute?
        </h2>
        <p className="leading-relaxed">
          Resilienz heißt: Deine Lieferkette bleibt lieferfähig – trotz
          Störungen wie Werksschließungen, Engpässen, geopolitischen Ereignissen
          oder Cybervorfällen. Der Schlüssel liegt im Zusammenspiel von{" "}
          <strong>Transparenz</strong> (wissen, was passiert),
          <strong>Antizipation</strong> (früh erkennen, was droht) und{" "}
          <strong>Adaptivität</strong> (schnell, wirksam handeln). Anstelle von
          reiner Effizienz (Just-in-Time) strebst du heute ein{" "}
          <em>risikoadäquates Gleichgewicht</em> an – „Just-Right“ Bestände,
          diversifizierte Bezugsquellen und eine integrierte Planung, die
          Entscheidungen beschleunigt.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Die drei Ebenen der Resilienz
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Strukturell:</strong> Netzwerkdesign, Multi-Sourcing,
                Sicherheitsbestände, Near-/Friend-Shoring.
              </li>
              <li>
                <strong>Prozessual:</strong> S&amp;OP, Eskalationspfade,
                Krisen- und Wiederanlaufpläne.
              </li>
              <li>
                <strong>Digital:</strong> Control Tower, digitale Zwillinge,
                End-to-End-Transparenz, Risikoanalytik.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="font-semibold mb-2">Ergebnis in 1 Satz</h4>
            <p className="text-sm text-zinc-800">
              Resilienz schafft <strong>Planbarkeit &amp; Liefertreue</strong> –
              mit überschaubaren Mehrkosten, wenn du gezielt die richtigen
              Hebel setzt.
            </p>
          </aside>
        </div>
      </section>

      <section id="transparenz-hebel" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Warum ist Lieferkettentransparenz der Hebel?
        </h2>
        <p className="leading-relaxed">
          Transparenz bedeutet, <strong>Materialflüsse, Stammdaten und
          Ereignisse</strong> über mehrere Ebenen (Tier-n) zu kennen – und sie
          <strong>aktuell</strong> im Blick zu haben. Das ist nicht nur
          betriebswirtschaftlich sinnvoll, sondern auch durch gesetzliche
          Sorgfaltspflichten (z. B. LkSG, CSDDD) gefordert. Praktisch heißt das:
          Lieferanten und Teile strukturieren, Herkunft und Routen nachvollziehen,
          Datenquellen integrieren, Alarme definieren und Entscheidungen
          automatisieren.
        </p>

        {/* 2:1 Gegenüberstellung Control Tower vs Digital Twin */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Control Tower vs. Digitaler Zwilling – was ist der Unterschied?
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-4">
                <h4 className="font-semibold">Control Tower</h4>
                <p className="text-sm">
                  Bietet <strong>Echtzeit-Sichtbarkeit</strong> und
                  Orchestrierung: Status, ETA, Ausnahmen, Workflows.
                </p>
                <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
                  <li>Events, Alarme, Eskalationen</li>
                  <li>Auftrags- &amp; Bestandsabgleich</li>
                  <li>Lieferanten-Performance (OTIF, Qualität)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4">
                <h4 className="font-semibold">Digitaler Zwilling</h4>
                <p className="text-sm">
                  <strong>Simulation &amp; Prognose</strong>: „Was-wäre-wenn“
                  für Netzwerk, Kapazität, Bestände, Risikoausbreitung.
                </p>
                <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
                  <li>Monte-Carlo &amp; Szenarien</li>
                  <li>MEIO-Effekte im Netzwerk</li>
                  <li>Trade-offs Kosten/Risiko/Service</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="font-semibold mb-2">Praxis-Tipp</h4>
            <p className="text-sm">
              Starte mit einem <strong>Control Tower-MVP</strong> (kritische
              Teile, kritische Lieferanten), sammle Signale, füge dann einen
              <em> digitalen Zwilling</em> für Szenarien hinzu.
            </p>
          </aside>
        </div>

        {/* Bild 1 – volle Breite */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/container.jpg" />
              <img
                loading="lazy"
                decoding="async"
                src="/container.jpg"
                alt="Containerterminal bei Dämmerung: Sensorik und Tracking sorgen für Sichtbarkeit in der Supply Chain"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Sichtbarkeit entsteht aus <em>Datenfluss + Prozess</em> – Sensorik,
            Tracking und saubere Stammdaten reichen allein nicht.
          </figcaption>
        </figure>
      </section>

      <section id="risikofruehwarnsystem" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Risikofrüherkennung in der Praxis – welche Signale brauchst du?
        </h2>
        <p className="leading-relaxed">
          Ein gutes Frühwarnsystem kombiniert <strong>interne</strong> Daten
          (Aufträge, Bestände, Qualität, Lieferanten-OTIF) mit{" "}
          <strong>externen</strong> Signalen (Wetter, Geo-/Politik, Fracht,
          Cyber, Compliance). Diese Signale werden in einem <em>Risikoscore</em>{" "}
          verdichtet und lösen <strong>klare Aktionen</strong> aus – von
          Lieferanten-Check-ins über Expedite bis zur Re-Allocation.
        </p>

        {/* Tabelle – Risikoindikatoren */}
        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-60">
                  Indikator
                </th>
                <th className="text-left font-semibold p-3">Was zeigt er?</th>
                <th className="text-left font-semibold p-3 w-56">
                  Typische Schwelle/Aktion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Lead-Time-Drift (Δ Lieferzeit)
                </td>
                <td className="p-3 text-zinc-700">
                  Frühindikator für Engpass beim Lieferanten oder Transport.
                </td>
                <td className="p-3 text-zinc-700">
                  &gt; +15 % über 4 Wochen → Root-Cause &amp; Expedite prüfen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">OTIF Supplier</td>
                <td className="p-3 text-zinc-700">
                  Liefertreue in Menge und Zeit – stabiler Treiber für Service.
                </td>
                <td className="p-3 text-zinc-700">
                  &lt; 95 % 2 Wochen in Folge → Lieferantengespräch, Ersatzslot
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Qualitäts-PPM (Defects)
                </td>
                <td className="p-3 text-zinc-700">
                  Serienfehler gefährden Service &amp; Garantie.
                </td>
                <td className="p-3 text-zinc-700">
                  &gt; Zielband → Quarantäne, 100 %-Prüfung, Nacharbeit planen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Geo-/Compliance-Events
                </td>
                <td className="p-3 text-zinc-700">
                  Regulatorik, Streiks, Extremwetter, Sanktionen.
                </td>
                <td className="p-3 text-zinc-700">
                  Ampel „Rot“ am Knoten → Alternativroute/Sourcing aktivieren
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Transparenz ohne Aktion ist nur Beobachtung. Erst definierte
            Schwellen, klare Eskalationswege und Szenarien machen Daten zum
            Resilienz-Hebel.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — {author.name}, indirektes Zitat aus Projekterfahrungen
          </figcaption>
        </figure>

        {/* Infobox – Methodenkoffer */}
        <aside className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-2">Methodenkoffer für die Früherkennung</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>FMEA &amp; Lieferanten-Heatmaps</li>
              <li>ABC/XYZ-Risiko-Segmente</li>
              <li>Anomaly-Detection (Forecast vs. Ist)</li>
            </ul>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Monte-Carlo-Simulationen</li>
              <li>Network-Resilience-Score (Knoten/Kanten)</li>
              <li>Event-Playbooks („wenn X, dann Y“)</li>
            </ul>
          </div>
        </aside>
      </section>

      <section id="multi-sourcing" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Multi-Sourcing richtig aufsetzen – wann lohnt sich Dual/Triple?
        </h2>
        <p className="leading-relaxed">
          Single-Sourcing ist effizient, aber störungsanfällig. Multi-Sourcing
          erhöht Stabilität, kostet aber Onboarding, Zertifizierung und
          Koordination. Die Lösung: <strong>risikobasiert differenzieren</strong>.
          Für kritische Artikel etablierst du eine qualifizierte Alternative (oder
          zweite Region), während Du-Monopole dort bestehen bleiben, wo das
          Risiko überschaubar ist.
        </p>

        {/* Vergleichstabelle */}
        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Kriterium</th>
                <th className="text-left font-semibold p-3">Single-Sourcing</th>
                <th className="text-left font-semibold p-3">Multi-Sourcing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Kosten</td>
                <td className="p-3 text-zinc-700">Skaleneffekte</td>
                <td className="p-3 text-zinc-700">
                  Höher (Onboarding/Tooling) – amortisiert durch geringere
                  Ausfallkosten
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Risiko</td>
                <td className="p-3 text-zinc-700">Hoch (Single-Point-of-Failure)</td>
                <td className="p-3 text-zinc-700">Streut Ausfälle, schafft Redundanz</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Time-to-Recover</td>
                <td className="p-3 text-zinc-700">Langsam</td>
                <td className="p-3 text-zinc-700">Schneller (Switch &amp; Ramp-Up)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2">Mini-Playbook Dual-Sourcing</h3>
          <ol className="list-decimal ml-5 text-sm space-y-1">
            <li>Kritikalität &amp; Risiko bewerten (Umsatz, Substituierbarkeit).</li>
            <li>Qualifizierte Zweitquelle identifizieren &amp; auditieren.</li>
            <li>
              Tooling/PPAP bzw. Freigaben parallel aufsetzen; Rahmenvertrag
              fixieren.
            </li>
            <li>Volumen splitten (Start 80/20), KPI-Gate für Ramp-Up definieren.</li>
            <li>Regelmäßige Re-Zertifizierung &amp; Kosten/Nutzen-Review.</li>
          </ol>
        </aside>
      </section>

      <section id="bestaende-optimieren" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Bestandsoptimierung: von Safety Stock zu MEIO
        </h2>
        <p className="leading-relaxed">
          Bestände sind dein <strong>Stoßdämpfer</strong> – aber teurer als sie
          wirken. Der Weg zu „genug, aber nicht zu viel“ führt über
          <strong>Segmentierung</strong> (ABC/XYZ), klare{" "}
          <strong>Servicegrade</strong>, robuste{" "}
          <strong>Safety-Stock-Logik</strong> und <strong>MEIO</strong> (Multi-
          Echelon Inventory Optimization), damit Bestände <em>netzwerkweit</em>{" "}
          verteilt werden, wo sie den meisten Service bringen.
        </p>

        {/* Bild 2 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/resilienz.png" />
              <img
                loading="lazy"
                decoding="async"
                src="/resilienz.png"
                alt="Kettenglieder gehen in ein digitales Knotennetz über; Bestandsblöcke und Wellenform als Risikosignal."
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            So schafft Transparenz Resilienz: Risikofrüherkennung,
            Multi-Sourcing und Bestandsoptimierung entlang globaler Liefernetze.
          </figcaption>
        </figure>

        {/* Box – Vorgehen */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Pragmatisches Vorgehen</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>ABC/XYZ-Matrix: A/X zuerst optimieren.</li>
              <li>Servicegrade festlegen (melde klare Ziele je Segment).</li>
              <li>Variabilität messen (Forecast-Fehler, Lieferzeitstreuung).</li>
              <li>Safety-Stock-Formel konsistent anwenden.</li>
              <li>MEIO-Pilot auf 2–3 Knoten – danach Rollout.</li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">Do vs. Don’t</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>
                <strong>Do:</strong> Rechne Bestände gegen Service &amp; Cash.
              </li>
              <li>
                <strong>Don’t:</strong> One-Size-Fits-All (z. B. „2 Wochen für
                alles“).
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="sop-taktgeber" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">S&amp;OP als Taktgeber – wie setzt du es auf?</h2>
        <p className="leading-relaxed">
          S&amp;OP (Sales &amp; Operations Planning) ist dein
          <strong> Entscheidungsprozess</strong>, der Nachfrage, Kapazitäten,
          Einkauf, Logistik und Finanzen zusammenbringt. Wichtig sind klare
          Rollen, ein wiederkehrender Takt und ein KPI-Set, das Entscheidungen
          vorbereitet – nicht nur Berichte erzeugt.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Meeting-Takt &amp; Inhalte</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-semibold">Wöchentlich</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Exception-Review (Service, Engpässe)</li>
                <li>Risikosignale &amp; Aktionen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Monatlich</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Demand &amp; Supply Review</li>
                <li>Portfolio-Änderungen, NPI</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Quartalsweise</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Executive S&amp;OP (Szenarien, Risiken)</li>
                <li>Invest &amp; Kapazitätsentscheidungen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="90-tage-plan" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">90-Tage-Plan: Deine Roadmap zur Resilienz</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Phase 1 (Tage 1–30): Sichtbarkeit</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Top-100 Teile &amp; Tier-n abbilden</li>
              <li>Risikokategorien &amp; Indikatoren definieren</li>
              <li>Control-Tower-MVP starten</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Phase 2 (Tage 31–60): Früherkennung</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Scores, Schwellen &amp; Eskalation produktiv</li>
              <li>Dual-Sourcing-Kandidaten bewerten</li>
              <li>Safety-Stock-Review für A/X</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Phase 3 (Tage 61–90): Skalierung</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>MEIO-Pilot + digitaler Zwilling</li>
              <li>Lieferanten-QBR mit KPI-Gates</li>
              <li>S&amp;OP-Routinen finalisieren</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="tool-landkarte" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Tool-Landkarte &amp; Auswahlkriterien</h2>
        <p className="leading-relaxed">
          Du brauchst keine „eine Lösung für alles“. Erfolgreich wird, wer{" "}
          <strong>klar priorisiert</strong> und Tools entlang des Use-Cases
          auswählt – beginnend mit Datenqualität und Integration.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Kernkategorien</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Supply-Chain-Visibility / Control Tower</li>
              <li>Risikointelligence &amp; Lieferanten-Monitoring</li>
              <li>Planung: Demand/Supply, S&amp;OP, MEIO</li>
              <li>Traceability &amp; Compliance (CSDDD/LkSG)</li>
              <li>Integration (ERP/MES/TMS/APS/PLM)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Muss-Kriterien</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Tier-n-Mapping, Event-Feeds, ETA-Prognosen</li>
              <li>Alarme, Workflows, Kollaboration (intern/extern)</li>
              <li>Szenarien, Simulations-API (digitaler Zwilling)</li>
              <li>MEIO-Fähigkeiten (mehrstufig, Serviceziele)</li>
              <li>Governance, Audit-Trail, Rechte/Maskierung</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="kpis-dashboard" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">KPI-Set &amp; Dashboard-Beispiele</h2>
        <p className="leading-relaxed">
          Miss, was Entscheidungen treibt – nicht, was schön aussieht. Ein
          <strong>Resilienz-Dashboard</strong> fokussiert auf <em>Risiko,
          Service, Cash</em>.
        </p>
        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Kategorie</th>
                <th className="text-left font-semibold p-3">KPI</th>
                <th className="text-left font-semibold p-3">Zweck</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Risiko</td>
                <td className="p-3 text-zinc-700">
                  Resilienz-Score, Lead-Time-Drift, Supplier-OTIF, Event-Heatmap
                </td>
                <td className="p-3 text-zinc-700">
                  Frühwarnung &amp; Aktionssteuerung
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Service</td>
                <td className="p-3 text-zinc-700">
                  OTIF Customer, Fill-Rate, Backorder-Tage
                </td>
                <td className="p-3 text-zinc-700">Lieferfähigkeit sichern</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Cash</td>
                <td className="p-3 text-zinc-700">
                  Bestandsreichweite, DOH, Obsoleszenz
                </td>
                <td className="p-3 text-zinc-700">
                  Kapitalbindung steuern – ohne Serviceverlust
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Was ist der Unterschied zwischen Control Tower und digitalem Zwilling?
            </h3>
            <p>
              Control Tower = Echtzeit-Transparenz &amp; Steuerung; digitaler
              Zwilling = Simulation &amp; Szenarien. In der Praxis ergänzen sie
              sich: Sichtbarkeit löst Aktionen aus, Simulation bewertet
              Trade-offs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie viele Lieferanten brauche ich pro Teil?
            </h3>
            <p>
              Es gibt keine Fixzahl. Entscheidend sind Kritikalität, Risiko,
              Zertifizierungskosten und Time-to-Recover. Häufig: Dual-Sourcing
              für kritische Teile, Single dort, wo Risiko gering ist.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie starte ich mit MEIO, wenn ich nur Excel nutze?
            </h3>
            <p>
              Beginne mit ABC/XYZ und konsistenter Safety-Stock-Logik. Danach
              pilotierst du MEIO auf wenigen Knoten/Artikeln – erst dann skaliert
              ein Tool seinen Mehrwert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Rolle spielt S&amp;OP für Resilienz?
            </h3>
            <p>
              S&amp;OP priorisiert Engpässe, balanciert Bestände und sichert
              schnelle Entscheidungen – es ist der Taktgeber zwischen Vertrieb,
              Operations, Einkauf und Finanzen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Muss ich wegen LkSG/CSDDD alle Tier-n kennen?
            </h3>
            <p>
              Du brauchst einen risikobasierten Ansatz: Kritische Wertströme
              tiefer abbilden, Prozesse &amp; Nachweise etablieren und
              kontinuierlich verbessern – mit klaren Zuständigkeiten.
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
              "mainEntity": [
                {
                  "@type": "Question",
                  "name":
                    "Was ist der Unterschied zwischen Control Tower und digitalem Zwilling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Control Tower bietet Echtzeit-Transparenz und Steuerung; der digitale Zwilling liefert Simulation und Szenarien. In der Praxis ergänzen sie sich."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie viele Lieferanten brauche ich pro Teil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Es gibt keine Fixzahl. Entscheidend sind Kritikalität, Risiko, Zertifizierungskosten und Time-to-Recover. Häufig: Dual-Sourcing für kritische Teile."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie starte ich mit MEIO, wenn ich nur Excel nutze?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Starte mit ABC/XYZ und konsistenter Safety-Stock-Logik. Danach MEIO-Pilot auf wenigen Knoten/Artikeln – erst dann skaliert ein Tool seinen Mehrwert."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Welche Rolle spielt S&OP für Resilienz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "S&OP priorisiert Engpässe, balanciert Bestände und beschleunigt Entscheidungen – Taktgeber zwischen Vertrieb, Operations, Einkauf und Finanzen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Muss ich wegen LkSG/CSDDD alle Tier-n kennen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Risikobasiert vorgehen: Kritische Wertströme tiefer abbilden, Nachweise etablieren und kontinuierlich verbessern – mit klaren Zuständigkeiten."
                  }
                }
              ]
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            Wie setzt du digitale Transparenz gezielt ein, um Resilienz zu
            steigern?
          </strong>{" "}
          Indem du erst Sichtbarkeit (Control Tower) herstellst, dann aktionsfähige
          Früherkennung (Scores, Schwellen, Playbooks) etablierst und schließlich
          durch Multi-Sourcing und MEIO die strukturellen Hebel verankerst – im
          Takt eines konsequenten S&amp;OP.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Willst du Risiken früher erkennen und deine Liefertreue stabilisieren?
          </h2>
          <p className="text-zinc-700 mb-4">
            Die <strong>{publisher.name}</strong> unterstützt dich von der
            Risiko-Diagnose bis zum Control-Tower-MVP – schnell, pragmatisch,
            messbar.
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
              Vielen Dank! Für dieses Demo-Formular ist kein Versand
              hinterlegt. Du möchtest das Thema mit uns besprechen?{" "}
              <a
                href="mailto:muster@beispiel.de"
                className={`font-medium underline ${accent}`}
              >
                Schreib uns
              </a>{" "}
              oder ruf an: <strong>+49 123456789</strong>.
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
              href="/blog/sop-einfach-erklaert"
            >
              S&amp;OP einfach erklärt: Vom Meeting-Marathon zur Entscheidung
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/control-tower-leitfaden"
            >
              Leitfaden Control Tower: Use-Cases, Datenquellen, KPIs
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/meio-praxis"
            >
              MEIO in der Praxis: So verteilst du Bestände richtig
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/lieferantenportfolio-strategie"
            >
              Lieferantenportfolio: Von Single zu Dual-Sourcing
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Supply-Chain-Resilienz
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
                <td className="p-3 font-medium text-zinc-900">
                  Supply-Chain-Resilienz
                </td>
                <td className="p-3 text-zinc-700">
                  Fähigkeit der Lieferkette, Störungen zu absorbieren, sich
                  anzupassen und schnell zu erholen – bei stabiler Liefertreue.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Lieferkettentransparenz
                </td>
                <td className="p-3 text-zinc-700">
                  End-to-End-Sicht auf Materialflüsse, Tier-n-Lieferanten und
                  Ereignisse – Grundlage für Frühwarnung und Compliance.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">S&amp;OP</td>
                <td className="p-3 text-zinc-700">
                  Integrierter Management-Prozess, der Nachfrage, Angebot und
                  Finanzen synchronisiert und Entscheidungen vorbereitet.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Multi-Sourcing</td>
                <td className="p-3 text-zinc-700">
                  Strategie mit mehreren qualifizierten Lieferanten je Teil zur
                  Reduktion von Ausfallrisiken und Time-to-Recover.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">MEIO</td>
                <td className="p-3 text-zinc-700">
                  Multi-Echelon-Bestandsoptimierung über mehrere
                  Wertschöpfungsstufen hinweg – Bestände dort, wo sie am meisten
                  Service bringen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Control Tower</td>
                <td className="p-3 text-zinc-700">
                  Digitale Leitstelle für Echtzeit-Sichtbarkeit, Alarme,
                  Workflows und Kollaboration über die Supply Chain hinweg.
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
            Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
            <a
              href={reviewer.linkedin}
              className={`hover:underline ${accent}`}
            >
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
            McKinsey &amp; Company – Supply chains: Still vulnerable (2024):{" "}
            https://www.mckinsey.com/capabilities/operations/our-insights/supply-chain-risk-survey
          </li>
          <li>
            Deloitte Insights – Global supply chain resilience amid disruptions:{" "}
            https://www2.deloitte.com/us/en/insights/industry/manufacturing/global-supply-chain-resilience-amid-disruptions.html
          </li>
          <li>
            Financial Times – Companies seek AI solutions to supply chain fragility (2025):{" "}
            https://www.ft.com/content/1d07a823-43da-4c1b-84d3-7e453ebb1b16
          </li>
          <li>
            MIT / Digital Supply Chain – Dynamic capabilities &amp; digital twins (2023):{" "}
            https://digitalsc.mit.edu/the-influence-of-dynamic-capabilities-in-digital-supply-chain-transformation/
          </li>
          <li>
            PMC / Inventory resilience review (2024):{" "}
            https://pmc.ncbi.nlm.nih.gov/articles/PMC11997565/
          </li>
          <li>
            EU-Kommission – Corporate Sustainability Due Diligence Directive (CSDDD/CS3D):{" "}
            https://commission.europa.eu/business-economy-euro/doing-business-eu/sustainability-due-diligence-responsible-business/corporate-sustainability-due-diligence_en
          </li>
          <li>
            DHL – Trend Report Supply Chain Diversification:{" "}
            https://dhl-freight-connections.com/en/trends/dhl-presents-trend-report-on-supply-chain-diversification/
          </li>
        </ul>
      </section>

      {/* JSON-LD: Article & Organization & ItemList (ToC) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "de",
            image: `${canonical.replace(
              "/blog/supply-chain-resilienz-digitale-transparenz",
              ""
            )}/supply.jpg`,
            datePublished: publishDate,
            dateModified: modifiedDate,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: publisher.name,
              logo: {
                "@type": "ImageObject",
                url: `${canonical.replace(
                  "/blog/supply-chain-resilienz-digitale-transparenz",
                  ""
                )}/logo.png`,
              },
              email: publisher.email,
              telephone: publisher.phone,
            },
            mainEntityOfPage: canonical,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: publisher.name,
            url: canonical.replace(
              "/blog/supply-chain-resilienz-digitale-transparenz",
              ""
            ),
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: publisher.email,
                telephone: publisher.phone,
                areaServed: "DE",
                availableLanguage: ["de"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: publisher.address,
              addressCountry: "DE",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Was bedeutet Supply-Chain-Resilienz heute?",
                url: `${canonical}#was-ist-resilienz`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Warum ist Lieferkettentransparenz der Hebel?",
                url: `${canonical}#transparenz-hebel`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Risikofrüherkennung in der Praxis",
                url: `${canonical}#risikofruehwarnsystem`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Multi-Sourcing richtig aufsetzen",
                url: `${canonical}#multi-sourcing`,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Bestandsoptimierung: von Safety Stock zu MEIO",
                url: `${canonical}#bestaende-optimieren`,
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "S&OP als Taktgeber",
                url: `${canonical}#sop-taktgeber`,
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "90-Tage-Plan: Deine Roadmap",
                url: `${canonical}#90-tage-plan`,
              },
              {
                "@type": "ListItem",
                position: 8,
                name: "Tool-Landkarte & Auswahlkriterien",
                url: `${canonical}#tool-landkarte`,
              },
              {
                "@type": "ListItem",
                position: 9,
                name: "KPI-Set & Dashboard-Beispiele",
                url: `${canonical}#kpis-dashboard`,
              },
              {
                "@type": "ListItem",
                position: 10,
                name: "FAQ",
                url: `${canonical}#faq`,
              },
            ],
          }),
        }}
      />
    </article>
  );
}
