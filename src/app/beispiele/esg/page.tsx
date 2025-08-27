// src/app/blog/csrd-esrs-umsetzung-2025/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "ESG-Reporting Manager (CSRD/ESRS)",
  image: "/Autorenbild.jpg",
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
  phone: "49123456789",
  url: "https://www.muster-gmbh.de",
};

export const metadata: Metadata = {
  title:
    "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
  description:
    "Praxisleitfaden zur CSRD-Umsetzung 2025: doppelte Wesentlichkeit, Datenprozesse, KPIs, EU-Taxonomie & Roadmap – speziell für mittelständische B2B-Unternehmen.",
  alternates: {
    canonical:
      "https://www.muster-gmbh.de/blog/csrd-esrs-umsetzung-2025",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden zur CSRD-Umsetzung 2025: doppelte Wesentlichkeit, Datenprozesse, KPIs, EU-Taxonomie & Roadmap.",
    url: "https://www.muster-gmbh.de/blog/csrd-esrs-umsetzung-2025",
    images: [
      {
        url: "/esg.jpg",
        width: 1200,
        height: 630,
        alt: "Nachhaltigkeitsreporting: CSRD & ESRS – Roadmap 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap – für Mittelstand.",
    images: ["/esg.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
            description:
              "Praxisleitfaden zur CSRD-Umsetzung 2025 inklusive doppelter Wesentlichkeit, Datenprozessen, KPIs, EU-Taxonomie & Roadmap.",
            inLanguage: "de-DE",
            image: `${company.url}/esg.jpg`,
            datePublished: "2025-08-27",
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
                url: `${company.url}/esg.jpg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.muster-gmbh.de/blog/csrd-esrs-umsetzung-2025",
            },
          }),
        }}
      ></script>

      {/* Company Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: company.url,
            email: company.email,
            telephone: `+${company.phone}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address,
              addressCountry: "DE",
            },
          }),
        }}
      ></script>

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
            Praxisleitfaden für mittelständische B2B-Unternehmen: doppelte
            Wesentlichkeit, Datenprozesse, KPIs &amp; Roadmap – damit dein{" "}
            <strong>Nachhaltigkeitsbericht</strong> 2025/26 sicher sitzt.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-27">27.08.2025</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">10–12 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div
              className="relative w-full"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/esg.jpg" />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src="/esg.jpg"
                  alt="ESG-Reporting Dashboard mit Kennzahlen und Trendlinien"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Visualisierung für ESG-Kennzahlen und Reporting-Prozesse
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="/Autorenbild.jpg"
              alt="Autor: Max Mustermann"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-medium text-zinc-900">
                {author.name}
              </div>
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
              <strong>2025 ist ein Scharnierjahr:</strong> Erste CSRD-Berichte
              erscheinen (Datenjahr 2024). Für viele Mittelständler beginnt
              jetzt die <em>Umsetzung</em> – mit Fokus auf Materialität,
              Datenbasics und steuerbare KPIs.
            </li>
            <li>
              <strong>Doppelte Wesentlichkeit</strong> entscheidet über
              Berichtsumfang. Ohne sauberen Prozess mit Stakeholdern,
              Schwellenwerten &amp; Dokumentation riskierst du Lücken in ESRS
              E1–S/G.
            </li>
            <li>
              <strong>Datenprozesse &amp; Governance:</strong> Definiere
              eindeutige Ownership, Systemlandschaft, Kontrollen und
              Nachweispfade – prüfungsfest von Anfang an.
            </li>
            <li>
              <strong>KPIs, die zählen:</strong> Treibhausgase (Scope 1–3),
              Energie, EU-Taxonomie (Umsatz/CapEx/OpEx), Workforce- und
              Lieferketten-Indikatoren – schlank, messbar, auditierbar.
            </li>
            <li>
              <strong>Roadmap bis zum Bericht:</strong> 6–9 Monate, in
              Meilensteine geschnitten (Materialität → Daten → Taxonomie →
              Draft → Assurance → Veröffentlichung).
            </li>
          </ul>
        </aside>

        {/* ToC */}
        <nav
          aria-label="Inhaltsverzeichnis"
          className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 className="text-base font-semibold mb-3">
            Inhaltsverzeichnis
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#warum-2025"
              >
                Warum 2025 für CSRD &amp; ESRS so wichtig ist
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#wer-betroffen"
              >
                Wer ist betroffen &amp; ab wann? (Zeitplan)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#doppelte-wesentlichkeit"
              >
                Doppelte Wesentlichkeit – Schritt für Schritt erklärt
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#datenprozesse"
              >
                Datenprozesse, Governance &amp; Prüfpfade
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#scope3-esrs-e1"
              >
                Klimabilanz (Scope 1–3) &amp; ESRS E1 – pragmatisch umsetzen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#eu-taxonomie"
              >
                EU-Taxonomie: KPIs richtig ermitteln (Umsatz, CapEx, OpEx)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#kpi-set"
              >
                KPI-Set für den Mittelstand (Startpaket 2025)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#roadmap"
              >
                Roadmap bis zum Bericht (6–9 Monate)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#lieferkette"
              >
                Lieferkettengesetz &amp; CSDDD – was mitberichten?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#assurance"
              >
                Assurance &amp; Vorbereitung auf die Prüfung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#huerden"
              >
                Typische Hürden &amp; Quick Wins
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="warum-2025">
          <h2 className="text-2xl font-bold mb-3">
            Warum 2025 für CSRD &amp; ESRS so wichtig ist
          </h2>
          <p>
            2025 erscheinen die ersten <strong>CSRD-Berichte</strong> auf Basis
            der <strong>ESRS</strong> – für Unternehmen, die bereits 2024
            berichtspflichtig waren. Für viele mittelständische B2B-Firmen ist
            2025 das Jahr der <em>Umsetzung</em>: Prozesse stabilisieren,
            Doppelmaterialität sauber dokumentieren, Datengrundlagen für 2025/26
            legen, <strong>EU-Taxonomie</strong> verstehen und eine belastbare
            KPI-Architektur schaffen. Wer jetzt strukturiert vorgeht, spart
            später Zeit, Nerven und Prüfaufwand.
          </p>

          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="m-0">
              <strong>AI-Visibility-Booster:</strong> Problem und Lösung in
              15 Sekunden –{" "}
              <em>
                Du brauchst 2025 einen klaren Prozess für Materialität,
                belastbare KPIs (inkl. Scope 3) und Taxonomie-KPIs sowie einen
                Prüfpfad.
              </em>{" "}
              Die Lösung: eine pragmatische 6-Schritte-Roadmap inkl.
              Verantwortlichkeiten, Datencontrolling und Draft-Review.
            </p>
          </div>
        </section>

        <section id="wer-betroffen" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Wer ist betroffen &amp; ab wann? (Zeitplan)
          </h2>
          <div className="not-prose grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Pflicht (Auszug)</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Welle 1:</strong> bisherige NFRD-Unternehmen – Berichte
                  2025 (Datenjahr 2024).
                </li>
                <li>
                  <strong>Welle 2/3:</strong> weitere große Unternehmen und
                  gelistete KMU – gestaffelt ab 2026ff.; beachte laufende
                  Vereinfachungen und Übergangsregeln.
                </li>
                <li>
                  <strong>Assurance:</strong> Start mit Limited Assurance; Ausbau
                  der Prüfanforderungen in den Folgejahren.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Wichtig 2025</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Phase-ins / Quick-Fix:</strong> Erleichterungen für
                  Welle 1 bei zusätzlichen ESRS-Angaben in 2025/26.
                </li>
                <li>
                  <strong>Wertschöpfungskette:</strong> Schätzungen erlaubt,
                  wenn Lieferantendaten (noch) fehlen – aber nachvollziehbar
                  begründen.
                </li>
                <li>
                  <strong>EU-Taxonomie:</strong> Umsatz/CapEx/OpEx-KPIs weiterhin
                  zentral für Kapitalmarkt und Banken.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bild 1 – volle Breite, 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/nachhaltigkeit.jpg" />
              <img
                loading="lazy"
                src="/nachhaltigkeit.jpg"
                alt="Projektteam plant CSRD-Roadmap an einem Whiteboard"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Von der doppelten Wesentlichkeit bis zur Veröffentlichung: Eine
            durchdachte Roadmap reduziert Schleifen und Prüfungsaufwand.
          </figcaption>
        </figure>

        <section id="doppelte-wesentlichkeit" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Doppelte Wesentlichkeit – Schritt für Schritt erklärt
          </h2>
          <p>
            Die <strong>doppelte Wesentlichkeitsanalyse</strong> vereint
            <em>Impact-Materialität</em> (Auswirkungen des Unternehmens auf
            Umwelt &amp; Menschen) und <em>Finanz-Materialität</em> (Auswirkungen
            nachhaltigkeitsbezogener Themen auf Geschäft, Cashflows, Bewertung).
            Sie entscheidet, welche ESRS-Angaben du liefern musst. Ein
            schlanker, prüfbarer Prozess umfasst:
          </p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong>Scoping &amp; Kontext:</strong> Geschäftsmodell,
              Wertschöpfungskette, Standorte, Stakeholder, relevante
              Regulierungen.
            </li>
            <li>
              <strong>Initiale Themenliste:</strong> ESRS-Themen + branchenspezifische
              Risiken; konsolidieren, Dubletten vermeiden.
            </li>
            <li>
              <strong>Stakeholder-Einbindung:</strong> strukturierte
              Interviews/Workshops; klare Kriterien &amp; Schwellenwerte.
            </li>
            <li>
              <strong>Bewertung &amp; Priorisierung:</strong> Impact (Schwere,
              Häufigkeit, Reichweite) und Finanzwirkung (Wahrscheinlichkeit,
              Größenordnung) mit nachvollziehbarer Scoring-Logik.
            </li>
            <li>
              <strong>Validierung:</strong> Management-Review, Abgleich mit
              Strategie, Risiken, Kontrollen; Dokumentation für die Prüfung.
            </li>
            <li>
              <strong>Mapping auf ESRS:</strong> Betroffene
              Offenlegungsanforderungen ableiten (inkl. EU-Taxonomie-Bezug).
            </li>
          </ol>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Die Materialität ist kein Excel-Häkchen, sondern die
              <em> Architekturskizze</em> deines Berichts. Wer hier sauber
              arbeitet, spart später 50 % der Schleifen im Audit.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Max Mustermann, indirektes Zitat aus Projektpraxis
            </figcaption>
          </figure>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">
              Häufige Fragen zur Materialität
            </h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Ist E1 (Klima) immer Pflicht?</strong> Nein, alle
                thematischen ESRS unterliegen der Materialität. Wenn Klima
                <em> nicht</em> wesentlich ist, brauchst du eine klare
                Begründung und Kurzangaben – realistisch ist Klima bei den
                meisten B2B-Firmen relevant.
              </li>
              <li>
                <strong>Was, wenn Lieferantendaten fehlen?</strong> Dann sind
                methodisch saubere Schätzungen erlaubt – wichtig sind
                Transparenz, Konsistenz und ein Plan, wie du echte Daten
                nachziehst.
              </li>
            </ul>
          </div>
        </section>

        <section id="datenprozesse" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Datenprozesse, Governance &amp; Prüfpfade
          </h2>
          <p>
            Dein <strong>Datenmodell</strong> sollte die ESRS-Logik
            widerspiegeln: von Policies, Maßnahmen und Zielen zu Kennzahlen und
            Nachweisen. Für die <strong>Prüfung (Limited Assurance)</strong>{" "}
            zählen klare Verantwortlichkeiten, Kontrollen und ein lückenfreier
            Audit-Trail.
          </p>

          <div className="not-prose grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Must-have-Kontrollen (2025)
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Datenquellenkatalog &amp; Owner je Kennzahl</li>
                <li>Vier-Augen-Prinzip bei Berechnungen</li>
                <li>Versionierung von Methoden &amp; Faktoren</li>
                <li>Belegbare Stichproben &amp; Reperformances</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Nice-to-have</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Automatisierte ETL-Pipelines</li>
                <li>Systemgestützte Taxonomie-Tagging-Logik</li>
                <li>Kontrollmatrix mit Risikobewertung</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="scope3-esrs-e1" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Klimabilanz (Scope 1–3) &amp; ESRS E1 – pragmatisch umsetzen
          </h2>
          <p>
            Für viele B2B-Unternehmen sind <strong>Scope 3-Emissionen</strong>{" "}
            entscheidend (v. a. eingekaufte Güter/Dienstleistungen, Transporte,
            Nutzungsphase). Starte mit einem <em>materialitätsbasierten</em>{" "}
            Screening, priorisiere 3–5 Kategorien und setze dann auf
            Datenerhebung bei Schlüssel-Lieferanten – ergänzt um robuste
            Schätzverfahren und Improvement-Plan.
          </p>

          <div className="rounded-2xl border border-zinc-200 p-5 mt-4">
            <h3 className="font-semibold mb-2">Rechenweg (Kurz)</h3>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Systemgrenzen &amp; Kategorien festlegen</li>
              <li>Aktivitätsdaten beschaffen oder ableiten</li>
              <li>Emissionsfaktoren dokumentiert zuordnen</li>
              <li>Berechnen, plausibilisieren, Unsicherheiten offenlegen</li>
              <li>Ziele &amp; Maßnahmen (inkl. Lieferanten-Engagement)</li>
            </ol>
          </div>

          {/* Bild 2 – Unsplash */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div
              className="relative w-full"
              style={{ aspectRatio: "16 / 6" }}
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&auto=format&fit=crop&w=1920"
                alt="Team arbeitet an Emissionsfaktoren und Scope-3-Kategorien am Laptop"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="text-sm text-zinc-600">
              Scope-3-Screening: Kategorien priorisieren, Datenlücken sauber
              schätzen, Lieferanten systematisch einbinden.
            </figcaption>
          </figure>
        </section>

        <section id="eu-taxonomie" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            EU-Taxonomie: KPIs richtig ermitteln (Umsatz, CapEx, OpEx)
          </h2>
          <p>
            Die <strong>EU-Taxonomie</strong> verlangt die Offenlegung
            taxonomie-fähiger und -ausgerichteter Anteile an Umsatz, CapEx und
            OpEx. Praktisch heißt das: Aktivitäten klassifizieren, DNSH- und
            Mindestschutz-Kriterien prüfen, Nachweise sammeln und KPIs
            ableiten. Für den Mittelstand lohnt sich ein <em>CapEx-First</em>-
            Ansatz: Investitionen systematisch taggen und auf
            Taxonomie-Konformität prüfen.
          </p>

          <div className="rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">
                    KPI
                  </th>
                  <th className="text-left font-semibold p-3">
                    Kurzdefinition &amp; Praxis-Hinweise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Umsatz-KPI
                  </td>
                  <td className="p-3 text-zinc-700">
                    Anteil des Netto-Umsatzes aus Taxonomie-ausgerichteten
                    Aktivitäten; Erlöskonten sauber mappen; Prüfbarkeit durch
                    Belege sicherstellen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    CapEx-KPI
                  </td>
                  <td className="p-3 text-zinc-700">
                    Anteil der Investitionen, die Taxonomie-Kriterien erfüllen;
                    CapEx-Plan und technische Kriterien frühzeitig abstimmen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    OpEx-KPI
                  </td>
                  <td className="p-3 text-zinc-700">
                    Anteil förderfähiger Betriebsaufwendungen; klare
                    Abgrenzung (z. B. Instandhaltung, kurze Verträge,
                    Direktkosten) dokumentieren.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="kpi-set" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            KPI-Set für den Mittelstand (Startpaket 2025)
          </h2>
          <p>
            Wähle wenige, <strong>steuerungsrelevante</strong> Kennzahlen, die
            ESRS-konform sind und dein Geschäftsmodell wirklich abbilden:
          </p>
          <div className="not-prose grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Klima &amp; Umwelt</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>THG gesamt (tCO₂e) &amp; Intensitäten (pro Umsatz/Einheit)</li>
                <li>Energieverbrauch &amp; Anteil Erneuerbare</li>
                <li>Relevante Scope-3-Kategorien (Top 3–5)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Soziales &amp; Governance</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Arbeitsunfälle &amp; Abwesenheitstage</li>
                <li>Gender Pay Gap (so weit verfügbar)</li>
                <li>Compliance-Fälle &amp; Trainingsquoten</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            Ergänze je nach Materialität: Wasserentnahme (E3), Biodiversität
            (E4), Circularity-Quoten (E5), Wertschöpfungsketten-KPIs (S2–S4),
            Geschäftsgepflogenheiten (G1).
          </p>
        </section>

        <section id="roadmap" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Roadmap bis zum Bericht (6–9 Monate)
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong>Kick-off &amp; Gap-Analyse (2–4 Wo.):</strong>{" "}
              Reifegrad / Pflichten, Ressourcen, Tools, Risiken.
            </li>
            <li>
              <strong>Materialität (4–6 Wo.):</strong> Stakeholder,
              Scoring-Modell, Management-Abnahme.
            </li>
            <li>
              <strong>Datenaufbau (6–10 Wo.):</strong> Templates, Lieferanten,
              Emissionsfaktoren, Kontrollen.
            </li>
            <li>
              <strong>EU-Taxonomie (parallel, 4–8 Wo.):</strong> Aktivitäten
              mappen, DNSH/Mindestschutz prüfen, KPIs berechnen.
            </li>
            <li>
              <strong>Drafting &amp; Review (4–6 Wo.):</strong> ESRS-Kapitel,
              Konsistenz, Visuals, Management-Review.
            </li>
            <li>
              <strong>Pre-Assurance (2–4 Wo.):</strong> Stichproben, Nachweise,
              Reperformances; Findings schließen.
            </li>
            <li>
              <strong>Veröffentlichung &amp; Lessons Learned:</strong> Timing,
              Kanäle, Verbesserungsplan 2026.
            </li>
          </ol>
        </section>

        <section id="lieferkette" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Lieferkettengesetz &amp; CSDDD – was mitberichten?
          </h2>
          <p>
            In Deutschland gilt das <strong>Lieferkettensorgfaltspflichtengesetz</strong>{" "}
            (LkSG) für größere Unternehmen. Auch wenn dein Unternehmen (noch)
            nicht direkt betroffen ist, verlangt die CSRD{" "}
            <em>wertschöpfungskettenbezogene</em> Angaben und Prozesse. Nutze
            Synergien: Risikoanalyse, Maßnahmen, Beschwerdeverfahren und
            Wirksamkeitsprüfung lassen sich in CSRD-Governance integrieren –
            das hilft bei ESRS S2–S4 und Anfragen deiner Großkunden.
          </p>
        </section>

        <section id="assurance" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Assurance &amp; Vorbereitung auf die Prüfung
          </h2>
          <p>
            <strong>Limited Assurance</strong> über den Nachhaltigkeitsbericht
            bedeutet: Prüfer plausibilisieren Verfahren, Datenflüsse und
            Kennzahlen. Bereite dich vor mit einem <em>Evidence-Pack</em>:
            Datenquellen, Rechenlogiken, Emissionsfaktoren, Protokolle,
            Management-Freigaben, Taxonomie-Nachweise. Plane früh eine
            <em> Pre-Assurance</em>, um Überraschungen zu vermeiden.
          </p>
        </section>

        <section id="huerden" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Typische Hürden &amp; Quick Wins
          </h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Hürden</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Unklare Ownership &amp; fehlende Kontrollen</li>
                <li>Scope-3-Datengaps &amp; inkonsistente Methoden</li>
                <li>Taxonomie-Nachweise nicht prüfbar abgelegt</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Quick Wins</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Mini-Kontrollhandbuch (1 Seite je KPI)</li>
                <li>Einheitliche Faktor-Bibliothek mit Versionen</li>
                <li>CapEx-Tagging in Finanzsystemen aktivieren</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Muss ich 2025 schon einen vollständigen CSRD-Bericht
                veröffentlichen?
              </h3>
              <p>
                Nur, wenn du zur ersten Welle gehörst (Datenjahr 2024). Viele
                mittelständische B2B-Unternehmen sind 2025 primär in der
                Umsetzung: Materialität, Daten, Taxonomie und
                Prüfungsfähigkeit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Wie streng ist die doppelte Wesentlichkeit?
              </h3>
              <p>
                Sehr – sie bestimmt den Berichtsinhalt. Entscheidend sind
                methodische Klarheit, Stakeholder-Einbindung, Schwellenwerte
                und eine gute Dokumentation, damit die Prüfung hält.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Was mache ich bei fehlenden Scope-3-Daten?
              </h3>
              <p>
                Transparent schätzen (anerkannte Methoden), Unsicherheiten
                offenlegen und parallel Lieferantendaten aufbauen. Wichtig:
                konsistente Methoden und ein Daten-Verbesserungsplan.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Wie beginne ich mit der EU-Taxonomie?
              </h3>
              <p>
                Starte mit dem CapEx-KPI: Investitionen taggen, technische
                Kriterien prüfen, Nachweise sammeln. Danach Umsatz/OpEx
                ergänzen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Welche Software brauche ich zwingend?
              </h3>
              <p>
                Keine Pflicht zu einem bestimmten Tool. Wichtig sind klare
                Templates, Nachweispfade und Kontrollen – Tooling kann
                schrittweise wachsen.
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
                      "Muss ich 2025 schon einen vollständigen CSRD-Bericht veröffentlichen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nur, wenn du zur ersten Welle gehörst (Datenjahr 2024). Viele mittelständische B2B-Unternehmen sind 2025 primär in der Umsetzung: Materialität, Daten, Taxonomie und Prüfungsfähigkeit.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Wie streng ist die doppelte Wesentlichkeit?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sie ist entscheidend: Die Analyse bestimmt den Berichtsinhalt. Methodische Klarheit, Stakeholder-Einbindung, Schwellenwerte und eine gute Dokumentation sind prüfungsrelevant.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was mache ich bei fehlenden Scope-3-Daten?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Anerkannte Schätzmethoden nutzen, Unsicherheiten offenlegen, Lieferantendaten systematisch aufbauen und einen Verbesserungsplan definieren.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie beginne ich mit der EU-Taxonomie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Mit dem CapEx-KPI starten: Investitionen taggen, technische Kriterien prüfen, Nachweise sammeln; anschließend Umsatz/OpEx ergänzen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Software brauche ich zwingend?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Keine Pflicht. Entscheidend sind Templates, Nachweispfade und Kontrollen. Software kann pragmatisch schrittweise eingeführt werden.",
                    },
                  },
                ],
              }),
            }}
          ></script>
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie setzt ein mittelständisches B2B-Unternehmen die CSRD 2025
              konkret um?
            </strong>{" "}
            Mit einer fokussierten Roadmap: doppelte Wesentlichkeit sauber
            durchführen, Datenprozesse und Kontrollen aufsetzen, ein
            schlankes KPI-Set (inkl. Scope 3 &amp; Taxonomie) etablieren und
            frühzeitig Richtung Assurance denken. So wird dein
            Nachhaltigkeitsbericht prüfbar – und wirklich nützlich für
            Steuerung und Finanzierung.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Brauchst du 2025 einen klaren CSRD-Umsetzungsplan?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir erstellen mit dir in 10 Tagen einen prüfungsfesten
              Fahrplan – Materialität, KPIs, Taxonomie &amp; Assurance-Ready.
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

              {/* Button öffnet das Pop-up via :target */}
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
                In diesem Beispiel-Blogartikel funktionieren die Links
                nicht. Möchtest du solch ein Projekt auch für dein Angebot
                umsetzen?{" "}
                <a
                  href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-700 underline"
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
                href="/blog/doppelte-wesentlichkeit-richtig-aufsetzen"
              >
                Doppelte Wesentlichkeit richtig aufsetzen: Kriterien,
                Schwellenwerte, Dokumentation
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/scope-3-daten-aufbauen"
              >
                Scope-3-Daten aufbauen: Von Schätzung zu Primärdaten
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/eu-taxonomie-kpi-capex-umsatz-opex"
              >
                EU-Taxonomie in der Praxis: Umsatz-, CapEx- und OpEx-KPI
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/esrs-checkliste-mittelstand"
              >
                ESRS-Checkliste für den Mittelstand: 30 Punkte für 2025
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
                  <th className="text-left font-semibold p-3 w-56">
                    Begriff
                  </th>
                  <th className="text-left font-semibold p-3">
                    Erklärung
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">CSRD</td>
                  <td className="p-3 text-zinc-700">
                    EU-Richtlinie zur Nachhaltigkeitsberichterstattung; legt
                    fest, <em>wer</em> berichtet, <em>was</em> berichtet wird
                    und <em>wie</em> es geprüft wird.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">ESRS</td>
                  <td className="p-3 text-zinc-700">
                    Europäische Standards, die den Inhalt des
                    Nachhaltigkeitsberichts konkretisieren (E, S, G und
                    Querschnitt ESRS 1/2).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Doppelte Wesentlichkeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Kombination aus Impact- und Finanz-Materialität; bestimmt
                    den Berichtsumfang.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Scope 3-Emissionen
                  </td>
                  <td className="p-3 text-zinc-700">
                    Indirekte Emissionen entlang der Wertschöpfungskette (z. B.
                    eingekaufte Güter, Transport, Nutzung).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    EU-Taxonomie
                  </td>
                  <td className="p-3 text-zinc-700">
                    Klassifikationssystem, das festlegt, welche
                    Wirtschaftsaktivitäten ökologisch nachhaltig sind – Basis
                    für Umsatz/CapEx/OpEx-KPIs.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">LkSG</td>
                  <td className="p-3 text-zinc-700">
                    Deutsches Lieferkettengesetz; verpflichtet große
                    Unternehmen zu menschenrechts- und
                    umweltbezogenen Sorgfaltspflichten.
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
                {author.role} – Fokus: CSRD-Umsetzung, ESRS-Datenprozesse,
                EU-Taxonomie-KPIs
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
              Überprüft von: <strong>{reviewer.name}</strong> –{" "}
              {reviewer.role}.{" "}
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
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              European Commission – Corporate sustainability reporting (CSRD):
              Who, when, how (Timeline &amp; scope).{" "}
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
              Commission Delegated Regulation (EU) 2023/2772 (ESRS Set 1).{" "}
              <a
                href="https://pl.materiality.pl/wp-content/uploads/2024/01/ESRS_OJ_2023-2772_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                EUR-Lex (PDF)
              </a>
            </li>
            <li>
              EFRAG – Implementation Guidance IG 1: Materiality Assessment
              (05/2024).{" "}
              <a
                href="https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/IG%201%20Materiality%20Assessment_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                efrag.org (PDF)
              </a>
            </li>
            <li>
              EFRAG – Implementation Guidance IG 2: Value Chain (05/2024).{" "}
              <a
                href="https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/EFRAG%20IG%202%20Value%20Chain_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                efrag.org (PDF)
              </a>
            </li>
            <li>
              European Commission – FAQs zur Umsetzung der CSRD (08/2024).{" "}
              <a
                href="https://finance.ec.europa.eu/publications/frequently-asked-questions-implementation-eu-corporate-sustainability-reporting-rules_en"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                finance.ec.europa.eu
              </a>
            </li>
            <li>
              Commission Delegated Regulation (11/07/2025): Amending
              2023/2772 (Postponement of certain disclosure requirements for
              wave 1).{" "}
              <a
                href="https://ec.europa.eu/finance/docs/level-2-measures/csrd-delegated-act-2025-4812_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                ec.europa.eu (PDF)
              </a>
            </li>
            <li>
              BAFA – German Supply Chain Act (LkSG) Overview.{" "}
              <a
                href="https://www.bafa.de/EN/Supply_Chain_Act/Overview/overview_node.html"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                bafa.de
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
