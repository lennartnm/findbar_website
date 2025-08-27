// src/app/blog/csrd-esrs-umsetzung-2025/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const canonical = "https://www.muster-gmbh.de/blog/csrd-esrs-umsetzung-2025";

const author = {
  name: "Max Mustermann",
  role: "ESG-Reporting Manager (CSRD/ESRS)",
  topics: "CSRD, ESRS, EU-Taxonomie, ESG-Datenprozesse",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Chief Sustainability Officer (CSO)",
  linkedin: "https://linkedin.com",
};

const publisher = {
  name: "Muster GmbH",
  logo: "/favicon.ico",
  url: "https://www.muster-gmbh.de",
  email: "mailto:muster@beispiel.de",
  phone: "+49123456789",
  street: "Musterstraße 1",
  locality: "Musterstadt",
  postal: "00000",
  country: "DE",
};

export default function Page() {
  const pageTitle =
    "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen";
  const pageDescription =
    "Praxisleitfaden: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap für die CSRD/ESRS-Pflichten 2025 – kompakt und umsetzbar.";
  const updated = "2025-08-27";

  return (
    <>
      <Head>
        <title>
          CSRD &amp; ESRS 2025: Was mittelständische B2B-Unternehmen jetzt
          konkret umsetzen müssen
        </title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={publisher.name} />
        <meta property="og:image" content="/esg.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="/esg.jpg" />

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: pageTitle,
              description: pageDescription,
              inLanguage: "de",
              datePublished: "2025-08-27",
              dateModified: updated,
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: author.role,
                sameAs: [author.linkedin],
              },
              reviewer: {
                "@type": "Person",
                name: reviewer.name,
                jobTitle: reviewer.role,
                sameAs: [reviewer.linkedin],
              },
              publisher: {
                "@type": "Organization",
                name: publisher.name,
                url: publisher.url,
                logo: {
                  "@type": "ImageObject",
                  url: publisher.logo,
                },
              },
              image: [
                "https://www.muster-gmbh.de/esg.jpg",
                "https://www.muster-gmbh.de/nachhaltigkeit.jpg",
                "https://www.muster-gmbh.de/glashaus.png",
              ],
              mainEntityOfPage: canonical,
            }),
          }}
        />

        {/* Organization / Company Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: publisher.name,
              url: publisher.url,
              email: publisher.email,
              telephone: publisher.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: publisher.street,
                addressLocality: publisher.locality,
                postalCode: publisher.postal,
                addressCountry: publisher.country,
              },
              sameAs: [],
            }),
          }}
        />
      </Head>

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
            CSRD &amp; ESRS 2025: Was mittelständische B2B-Unternehmen jetzt
            konkret umsetzen müssen
          </h1>

          <p className="mt-3 text-lg text-zinc-700">
            In diesem Praxisleitfaden erfährst du, wie du{" "}
            <strong>CSRD</strong> und <strong>ESRS</strong> im Jahr{" "}
            <strong>2025</strong> sauber aufsetzt: von der{" "}
            <em>doppelten Wesentlichkeitsanalyse</em> über stabile
            Datenprozesse bis zu den wichtigsten <em>KPIs</em> – inklusive
            Roadmap, Quick-Wins und Checklisten. Kurz:{" "}
            <span className={`${accent} font-medium`}>
              csrd umsetzung leitfaden für mittelständische b2b unternehmen
              2025
            </span>
            .
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={updated}>27.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">12 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/esg.jpg" />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src="/esg.jpg"
                  alt="ESG-Dashboard auf großem Screen in einem modernen Büro – Symbolbild für CSRD/ESRS-Reporting"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Hero-Bild: Symbol für systematisches ESG-Reporting nach CSRD/ESRS.
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
              <strong>Wer ist 2025 betroffen?</strong> Große Unternehmen (und
              PIEn, die bereits nach NFRD berichtet haben) veröffentlichen 2025
              die ersten Berichte zu <em>Geschäftsjahr 2024</em>; die breite
              zweite Welle für große Unternehmen (FY 2025) befindet sich durch
              EU-Vorschläge zur{" "}
              <em>Omnibus-Vereinfachung</em> politisch in Bewegung – plane
              dennoch voll CSRD/ESRS-konform, bis Änderungen final sind.
            </li>
            <li>
              <strong>Doppelte Wesentlichkeit zuerst.</strong> Ohne saubere,
              dokumentierte Materialität (Impact &amp; Financial) laufen Daten
              und KPIs ins Leere – setze hier die „Spielregeln“ für alle
              Themen, Datenpunkte, Verantwortlichkeiten und Kontrollen.
            </li>
            <li>
              <strong>Datenprozesse &amp; Assurance.</strong> Baue ein
              prüfbares Datengerüst (Scopes 1-3, Belegketten, Kontrollen),
              definiere Verantwortliche und bereite dich auf{" "}
              <em>Limited Assurance</em> vor – die Prüfbarkeit entscheidet über
              Effizienz und Risiko.
            </li>
            <li>
              <strong>Kern-KPIs 2025.</strong> Treiber sind u. a. Emissionen
              (E1), Energie, Taxonomie-Quoten, Mitarbeiter-KPIs (S1) sowie
              Governance-Offenlegungen (G1) – mit klaren Zielen und Zeitpfaden.
            </li>
            <li>
              <strong>Roadmap in 120 Tagen.</strong> Kick-off, Wesentlichkeit,
              Dateninventur, Pilotrechnung, Zielbild &amp; Kontrollen – so
              kommst du strukturiert zum belastbaren Bericht.
            </li>
            <li>
              <strong>Abhängigkeiten beachten.</strong> EU-Taxonomie,
              Lieferkettengesetz (LkSG) und ESRS-Änderungen 2025 greifen in
              Planung, KPIs und Templates ein – integriere Schnittstellen früh.
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
              <a className={`hover:underline ${accent} font-medium`} href="#was-ist-csrd-esrs">
                Was ist CSRD &amp; ESRS – kurz erklärt?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#wer-ist-betroffen-2025">
                Wer ist 2025 betroffen – und was ändert sich?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#doppelte-wesentlichkeit">
                Doppelte Wesentlichkeit: Vorgehen &amp; Vorlage
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#datenprozesse-kontrollen">
                Datenprozesse, Kontrollen &amp; Assurance
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#kpis-2025">
                KPIs 2025: E, S, G – was du berichten musst
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#eu-taxonomie">
                EU-Taxonomie: Templates, Quoten &amp; Abgleich
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#roadmap-120-tage">
                Roadmap: In 120 Tagen zum belastbaren Bericht
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#praxisbausteine">
                Praxis-Bausteine: Quick-Wins, Tools, Checkliste
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
        <section id="was-ist-csrd-esrs">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Was ist CSRD &amp; ESRS – kurz erklärt?
          </h2>
          <p className="text-zinc-800">
            Die <strong>Corporate Sustainability Reporting Directive (CSRD)</strong> ist
            die neue EU-Berichtspflicht für Nachhaltigkeit. Sie verlangt, dass
            Unternehmen ihre <em>nachhaltigkeitsbezogenen Auswirkungen</em> und{" "}
            <em>finanziellen Risiken/Chancen</em> transparent und vergleichbar
            offenlegen – in einem <strong>prüfbaren</strong> Bericht innerhalb
            des Lageberichts. Grundlage sind die{" "}
            <strong>European Sustainability Reporting Standards (ESRS)</strong>:
            ein Set aus <em>querschnittlichen</em> Standards (ESRS 1 &amp; 2)
            und <em>thematischen</em> Standards (u. a. E1 Klima, S1
            Belegschaft, G1 Governance). Der Clou: Berichtet wird, was{" "}
            <strong>„doppelt wesentlich“</strong> ist – also sowohl in der
            Außenwirkung (Impact) als auch finanziell (Risiken/Chancen)
            relevant.
          </p>

          <div className="rounded-2xl border border-zinc-200 p-5 mt-5">
            <h3 className="font-semibold text-lg mb-2">
              Warum das wichtig ist – für B2B-Mittelstand
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Vertriebsvorteil:</strong> Kunden fordern belastbare
                ESG-Daten (Lieferantenfragebögen, RfQs) – CSRD liefert die
                Basis.
              </li>
              <li>
                <strong>Finanzierung:</strong> Banken und Investoren verankern
                ESRS-Kennzahlen in ihren Entscheidungen.
              </li>
              <li>
                <strong>Effizienz &amp; Risiko:</strong> Saubere Datenprozesse
                sparen Kosten in Prüfung, Audits und Due Diligence.
              </li>
            </ul>
          </div>
        </section>

        <section id="wer-ist-betroffen-2025">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Wer ist 2025 betroffen – und was ändert sich?
          </h2>
          <p className="text-zinc-800">
            2025 erscheinen die ersten CSRD-Berichte für Unternehmen, die{" "}
            <em>bereits</em> unter die frühere NFRD fielen (Berichtsjahr 2024).
            Für <strong>große Unternehmen</strong> (erfüllen 2 von 3:
            &gt;250&nbsp;MA, &gt;50&nbsp;Mio.&nbsp;€ Umsatz, &gt;25&nbsp;Mio.&nbsp;€ Bilanzsumme)
            war ursprünglich die erste Berichterstattung für das{" "}
            <em>Geschäftsjahr 2025</em> vorgesehen. Seit Anfang 2025 diskutiert
            die EU allerdings eine <strong>Omnibus-Vereinfachung</strong>, die
            den Anwendungsbereich und Zeitpläne anpassen könnte. Stand Ende
            August 2025 gilt: <em>Plane konservativ CSRD-konform</em>, bis
            finale Gesetzestexte verabschiedet und im Amtsblatt veröffentlicht
            sind.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Sicher: Das bleibt</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Bericht nach ESRS im Lagebericht</li>
                <li>Prinzip der doppelten Wesentlichkeit</li>
                <li>Externe <em>Limited Assurance</em> (prüferische Durchsicht)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">In Bewegung: Das kann sich ändern</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Anwendungsbereich (Mitarbeiter-/Umsatz-Schwellen)</li>
                <li>Entlastungen &amp; vereinfachte Templates</li>
                <li>Timings für weitere Wellen (z. B. gelistete KMU)</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-600">
                Entscheidend ist die finale Fassung – bis dahin mit
                Vollumfänglichkeit planen.
              </p>
            </div>
          </div>

          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/nachhaltigkeit.jpg" />
                <img
                  loading="lazy"
                  src="/nachhaltigkeit.jpg"
                  alt="Nachhaltigkeitsstrategie-Workshop mit Board und KPI-Board – Symbol für Governance und Reporting-Pflichten"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Von Pflicht zur Kür: Wer 2025 strukturiert startet, reduziert
              Kosten, Risiken und Zeitdruck in kommenden Prüfzyklen.
            </figcaption>
          </figure>
        </section>

        <section id="doppelte-wesentlichkeit">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Doppelte Wesentlichkeit: Vorgehen &amp; Vorlage
          </h2>
          <p className="text-zinc-800">
            Die doppelte Wesentlichkeit ist das Herzstück deines
            CSRD-Projekts. Sie bewertet (1) <strong>Impact-Wesentlichkeit</strong> –
            wie stark das Unternehmen Umwelt/Menschen beeinflusst – und (2){" "}
            <strong>finanzielle Wesentlichkeit</strong> – wie stark Nachhaltigkeitsaspekte
            das Unternehmen finanziell beeinflussen (Risiken/Chancen). Du
            priorisierst <em>Themen</em>, leitest <em>Offenlegungen</em> ab und
            definierst <em>Daten-, Ziel- und Steuerungspflichten</em>.
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">
              Schritt-für-Schritt – so setzt du die Analyse sauber auf
            </h3>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Scope/Methodik definieren:</strong> Unternehmensgrenzen,
                Wertschöpfungskette, Stakeholder, Bewertungslogik (Skalen,
                Schwellen).
              </li>
              <li>
                <strong>Longlist erstellen:</strong> Themen aus ESRS (E, S, G),
                EU-Taxonomie, LkSG, Branchenrisiken, Kundenanforderungen.
              </li>
              <li>
                <strong>Stakeholder &amp; Experten befragen:</strong> intern wie
                extern – strukturiert und dokumentiert.
              </li>
              <li>
                <strong>Scoring &amp; Konsolidierung:</strong> Impact und
                Finanzen getrennt bewerten, dokumentieren, Heatmaps erstellen.
              </li>
              <li>
                <strong>Management-Kalibrierung:</strong> Abgleich, Schwellen
                festlegen, Entscheidung protokollieren.
              </li>
              <li>
                <strong>Mapping:</strong> Materiale Themen → passende ESRS
                DRs/KPIs, Policies, Ziele, Maßnahmen.
              </li>
              <li>
                <strong>Review &amp; Update:</strong> jährlich, bzw. anlassbezogen.
              </li>
            </ol>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Ohne eine saubere doppelte Wesentlichkeitsanalyse ist alles
              Folgende Zufall – sie entscheidet, welche ESRS-Angaben wirklich
              für dich gelten und welche Daten du mit welcher Qualität
              aufbauen musst.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Max Mustermann, direktes Zitat
            </figcaption>
          </figure>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <aside className="md:col-span-1 rounded-xl border border-zinc-200 p-4 bg-zinc-50">
              <h4 className="font-semibold mb-2">Outputs deiner Analyse</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Materiality-Heatmap (Impact/Financial)</li>
                <li>Topic-Sheets inkl. ESRS-Mapping</li>
                <li>Data Owner &amp; Kontrollen je KPI</li>
                <li>Entscheidungsprotokoll (Audit-fähig)</li>
              </ul>
            </aside>
            <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
              <h4 className="font-semibold mb-2">
                Typische Themen im Mittelstand (Auszug)
              </h4>
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="text-left font-semibold p-2">Thema</th>
                      <th className="text-left font-semibold p-2">
                        Relevante ESRS
                      </th>
                      <th className="text-left font-semibold p-2">
                        Übliche KPIs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Klimawirkung</td>
                      <td className="p-2">E1 (Klima), ESRS 2</td>
                      <td className="p-2">
                        Scope&nbsp;1–3, Energieintensität, Reduktionsziele
                      </td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Ressourcen &amp; Abfall</td>
                      <td className="p-2">E5, E2, E3</td>
                      <td className="p-2">
                        Abfallquoten, Recycling, Wasserentnahme
                      </td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Mitarbeitende</td>
                      <td className="p-2">S1</td>
                      <td className="p-2">
                        Fluktuation, Unfallrate, Schulungen, Gender-Pay-Gap
                      </td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Lieferkette</td>
                      <td className="p-2">S2–S4, G1, LkSG-Bezug</td>
                      <td className="p-2">
                        Auditrate, Risiko-Screenings, Abhilfemaßnahmen
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="datenprozesse-kontrollen">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Datenprozesse, Kontrollen &amp; Assurance
          </h2>
          <p className="text-zinc-800">
            CSRD-Berichte benötigen <strong>prüffähige</strong> Daten. Baue
            deshalb ein schlankes, aber robustes internes Kontrollsystem (IKS)
            für Nachhaltigkeitsdaten – analog zur Finanzberichterstattung. So
            minimierst du Prüfungsaufwände und Nachfragen.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Kern-Prozessdesign</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Data Inventory:</strong> Alle ESRS-Datapoints + Quelle
                  + Owner + Frequenz + Evidenzen.
                </li>
                <li>
                  <strong>Belegketten &amp; Versionierung:</strong> Nachvollziehbar
                  vom Rohdatensatz bis zur Kennzahl.
                </li>
                <li>
                  <strong>Kontrollen:</strong> 4-Augen-Prinzip, Plausis,
                  Schwellen, Abweichungslog.
                </li>
                <li>
                  <strong>Change-Log &amp; Berechtigungen:</strong> Governance
                  für Tools, Excel/BI, Schnittstellen.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Assurance-Readiness</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Scope &amp; Materialität:</strong> Welche KPIs werden
                  geprüft? Welche Erleichterungen gelten?
                </li>
                <li>
                  <strong>Sampling &amp; Evidenzen:</strong> Prüfbarkeit deiner
                  Datensätze sicherstellen.
                </li>
                <li>
                  <strong>Management-Representation:</strong> Verantwortlichkeiten
                  klären, Freigaben dokumentieren.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold">Tool-Stapel – pragmatisch starten</h3>
            <p>
              Starte pragmatisch mit deinem vorhandenen BI/ERP plus klaren
              Rollen. Wichtig ist <strong>Konsistenz</strong>: gleiche
              Definitionen, stabile Prozesse, saubere Evidenzen. Später kannst
              du auf spezialisierte ESG-Plattformen migrieren.
            </p>
          </div>
        </section>

        <section id="kpis-2025">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            KPIs 2025: E, S, G – was du berichten musst
          </h2>
          <p className="text-zinc-800">
            Welche Kennzahlen du berichtest, ergibt sich aus deiner
            Wesentlichkeit. Einige ESRS-Angaben sind jedoch <em>grundsätzlich</em>{" "}
            zu beachten (ESRS 2), andere sind themenspezifisch. Hier die
            wichtigsten Treiber für mittelständische B2B-Unternehmen:
          </p>

          <div className="overflow-x-auto mt-4 -mx-1">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-2">Bereich</th>
                  <th className="text-left font-semibold p-2">Pflichtinhalte</th>
                  <th className="text-left font-semibold p-2">Beispiel-KPIs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">Klima (E1)</td>
                  <td className="p-2">
                    Ziele &amp; Transition-Plan; Scope&nbsp;1–3 Emissionen;
                    Energie; klimabezogene Risiken/Chancen
                  </td>
                  <td className="p-2">
                    tCO₂e Scope&nbsp;1/2/3; Emissionsintensität; Anteil
                    erneuerbarer Energie; Invest-/Opex in Klimamaßnahmen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">Ressourcen (E2–E5)</td>
                  <td className="p-2">
                    Wasser, Biodiversität, Rohstoffe, Abfall (je nach
                    Wesentlichkeit)
                  </td>
                  <td className="p-2">
                    Wasserentnahme/-einleitung; Recyclingquote; kritische
                    Rohstoffe; Abfallintensität
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">Mitarbeitende (S1)</td>
                  <td className="p-2">
                    Belegschaftsstruktur, Gesundheit/Sicherheit, Vergütung,
                    Weiterbildung, Diversität
                  </td>
                  <td className="p-2">
                    Unfallrate, Fluktuation, Trainingsstunden, Gender-Pay-Gap,
                    Diversity-Quoten
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">Lieferkette (S2–S4)</td>
                  <td className="p-2">
                    Menschenrechts-/Umwelt-Risiken, Präventions- &amp;
                    Abhilfemaßnahmen
                  </td>
                  <td className="p-2">
                    Risiko-Screenings, Auditquoten, Corrective Action Plans,
                    Eskalationen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">Governance (G1)</td>
                  <td className="p-2">
                    Verantwortlichkeiten, Vergütung mit Nachhaltigkeitsbezug,
                    Compliance/Anti-Korruption
                  </td>
                  <td className="p-2">
                    Anteil variabler Vergütung an ESG-Zielen, Vorfälle, Schulungen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 align-top">
                  <td className="p-2 font-medium">EU-Taxonomie</td>
                  <td className="p-2">
                    Anteil taxonomiefähiger/-konformer Umsätze, CapEx, OpEx
                  </td>
                  <td className="p-2">Taxonomie-Quoten &amp; Qualitative Angaben</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Praxis-Hinweise</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Scope&nbsp;3 smart angehen:</strong> Fokus auf die
                wesentlichen Kategorien (typisch: eingekaufte Güter/Dienstl.,
                Nutzung verkaufter Produkte, Transport).
              </li>
              <li>
                <strong>Targets konsistent machen:</strong> Basisjahr, Abdeckungsgrad
                (Scopes), Methodik (market-/location-based) eindeutig dokumentieren.
              </li>
              <li>
                <strong>„Undue Effort“-Erleichterungen</strong> sorgfältig
                begründen und belegen – sonst erhöhtes Prüfungsrisiko.
              </li>
            </ul>
          </div>
        </section>

        <section id="eu-taxonomie">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            EU-Taxonomie: Templates, Quoten &amp; Abgleich
          </h2>
          <p className="text-zinc-800">
            Die EU-Taxonomie ergänzt CSRD/ESRS um die Frage: <em>Wie „grün“</em>{" "}
            sind Umsatz, CapEx und OpEx? Für relevante Aktivitäten sind
            <strong> Taxonomie-Quoten</strong> zu berichten – inklusive
            qualitativer Erläuterungen. 2025 stehen vereinfachte Templates im
            Raum; bis zur finalen Verabschiedung gilt: plane mit den bestehenden
            Offenlegungsanforderungen und dokumentiere Annahmen transparent.
          </p>

          <div className="rounded-xl border border-zinc-200 p-4 mt-4">
            <h3 className="font-semibold mb-2">
              Checkliste – Taxonomie im Zusammenspiel mit ESRS
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Geschäftsaktivitäten mappen (NACE &rarr; Taxonomie-Anhänge)</li>
              <li>Kriterien prüfen (DNSH, Mindestschutz, technische Kriterien)</li>
              <li>Finanzzahlen je Aktivität bereitstellen (Umsatz/CapEx/OpEx)</li>
              <li>Qualitative Erklärungen (Methoden, Annahmen, Unsicherheiten)</li>
              <li>Abgleich mit ESRS-Themen (z. B. E1-Investitionen, Ziele)</li>
            </ul>
          </div>
        </section>

        <section id="roadmap-120-tage">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Roadmap: In 120 Tagen zum belastbaren Bericht
          </h2>
          <p className="text-zinc-800">
            Du brauchst einen klaren Pfad von „0 auf Bericht“. Die folgende
            Roadmap funktioniert in mittelständischen B2B-Umgebungen verlässlich
            – auch parallel zum Tagesgeschäft.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Tage 1–30: Kick-off &amp; Setup</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Projektkernteam &amp; Steering festlegen</li>
                <li>Scope, Zeitplan, Ressourcen, Risiken</li>
                <li>Policy-Lücken &amp; Quick-Wins identifizieren</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Tage 31–60: Wesentlichkeit</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Stakeholder-Mapping &amp; Befragung</li>
                <li>Scoring, Heatmaps, Management-Buy-in</li>
                <li>ESRS-Mapping, Topic-Sheets</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Tage 61–90: Daten &amp; Piloten</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Dateninventur &amp; IKS-Design</li>
                <li>Erste Pilot-KPIs (z. B. Scope&nbsp;3-Kategorien)</li>
                <li>Taxonomie-Vorabquote</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Tage 91–120: Zielbild &amp; Report</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Targets, Maßnahmenplan, Budget</li>
                <li>Entwurf Nachhaltigkeits-Statement (ESRS-Struktur)</li>
                <li>Assurance-Dry-Run &amp; Management-Freigabe</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="font-semibold">Ergebnisse</h3>
              <p className="text-sm">
                Geprüftes Datenfundament, priorisierte KPIs, Taxonomie-Quoten
                und ein veröffentlichungsfähiger Entwurf – inklusive klarer
                Roadmap für das Folgejahr.
              </p>
            </div>
          </div>

          {/* HowTo / Schema.org for the Roadmap */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                name: "CSRD/ESRS in 120 Tagen umsetzen",
                description:
                  "Schritt-für-Schritt-Plan für mittelständische B2B-Unternehmen.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Kick-off & Setup",
                    position: 1,
                    text:
                      "Projektteam, Scope, Zeitplan, Policy-Lücken, Quick-Wins.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Wesentlichkeit",
                    position: 2,
                    text:
                      "Stakeholder-Befragung, Scoring, Heatmaps, ESRS-Mapping.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Daten & Piloten",
                    position: 3,
                    text:
                      "Dateninventur, IKS-Design, Pilot-KPIs, Taxonomie-Vorabquote.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Zielbild & Report",
                    position: 4,
                    text:
                      "Ziele, Maßnahmenplan, Budget, Entwurf & Assurance-Dry-Run.",
                  },
                ],
              }),
            }}
          />
        </section>

        <section id="praxisbausteine">
          <h2 className="text-2xl font-bold mt-10 mb-3">
            Praxis-Bausteine: Quick-Wins, Tools, Checkliste
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Quick-Wins (30 Tage)</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>ESRS-Themenliste + Verantwortliche benennen</li>
                <li>Bestehende Datenquellen konsolidieren</li>
                <li>Scope&nbsp;1/2 vorziehen (Energie, Fuhrpark)</li>
                <li>Lieferantenfragebogen für Scope&nbsp;3 pilotieren</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Tooling</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>ERP/BI + Datenkatalog + Freigabe-Workflow</li>
                <li>GHG-Rechnungstool mit Kategorienlogik</li>
                <li>Dokumentenablage (Evidenzen) mit Versionierung</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Kontrollpunkte</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Definitionen/Methoden schriftlich fixieren</li>
                <li>Owner-Vertretungen und 4-Augen-Prinzip</li>
                <li>Plausibilitäten &amp; Thresholds</li>
                <li>Abweichungslog &amp; Korrekturprozess</li>
              </ul>
            </div>
          </div>

          {/* Bild 2 – volle Breite, 16:6 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/glashaus.png" />
                <img
                  loading="lazy"
                  src="/glashaus.png"
                  alt="Glasgebäude mit überlagerten Ebenen, Datenflüssen, zwei sich überschneidenden Kreisen (doppelte Wesentlichkeit), KPI-Balken und Roadmap-Punkten"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Visualisiert den Praxisleitfaden zu CSRD/ESRS 2025: doppelte
              Wesentlichkeit, Datenprozesse, KPIs und eine klare
              Umsetzungs-Roadmap.
            </figcaption>
          </figure>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">„Pflicht vs. Kür“ – Übersicht</h3>
              <div className="overflow-x-auto -mx-1 mt-2">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="text-left font-semibold p-2">Pflicht</th>
                      <th className="text-left font-semibold p-2">Kür</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Wesentlichkeitsanalyse</td>
                      <td className="p-2">Szenarioanalysen Klima/Übergang</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">ESRS-Offenlegungen nach Materialität</td>
                      <td className="p-2">TCFD-kompatible Darstellung</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Limited Assurance</td>
                      <td className="p-2">Interne Audit-Reviews pro Quartal</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Taxonomie-Quoten</td>
                      <td className="p-2">Science-Based Targets (SBTi)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Checkliste – „Bin ich bereit?“</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Materialität dokumentiert &amp; freigegeben</li>
                <li>Datenkatalog + Evidenzen vollständig</li>
                <li>Taxonomie-Mapping erfolgt</li>
                <li>KPIs mit Ownern und Kontrollen versehen</li>
                <li>Assurance-Vorgespräch geführt</li>
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
                Muss jedes mittelständische Unternehmen 2025 nach CSRD berichten?
              </h3>
              <p>
                Nein. 2025 berichten vor allem Unternehmen, die bereits nach
                NFRD in der Pflicht waren (für FY 2024). Für andere große
                Unternehmen war FY 2025 geplant; politische Vorschläge zur
                Vereinfachung können Zeitpläne und Schwellen verändern. Solange
                nichts final ist, solltest du die CSRD/ESRS-Anforderungen
                vollständig vorbereiten.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie beginne ich mit Scope-3-Emissionen?
              </h3>
              <p>
                Fokussiere dich auf die wesentlichen Kategorien aus der
                Wesentlichkeitsanalyse (typisch: eingekaufte Güter/Dienstl.,
                Nutzung verkaufter Produkte, Transporte). Nutze belastbare
                Sekundärdaten als Startpunkt, plane parallel die Erhebung
                primärer Lieferantendaten.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Was prüft die Limited Assurance konkret?
              </h3>
              <p>
                Sie bewertet v. a. Verfahren und Plausibilität deiner Angaben:
                Datenquellen, Kontrollen, Nachweise, Konsistenz mit Policies und
                Methodik. Gute Belegketten und klare Definitionen verkürzen die
                Prüfung erheblich.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie hängen CSRD/ESRS, EU-Taxonomie und LkSG zusammen?
              </h3>
              <p>
                CSRD/ESRS definieren <em>was</em> du berichten musst,
                Taxonomie bewertet die „Grünheit“ von Umsatz/CapEx/OpEx, LkSG
                adressiert menschenrechtliche/umweltbezogene Sorgfalt in der
                Lieferkette. Inhalte überschneiden sich (z. B. Risiken,
                Maßnahmen) – nutze ein gemeinsames Datenmodell.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Brauche ich jetzt schon sektor-spezifische ESRS?
              </h3>
              <p>
                Die erste ESRS-Generation ist sektoragnostisch; sektor-spezifische
                Standards befinden sich in Arbeit. Richte dich 2025 nach ESRS 1/2
                und den thematischen Standards (E/S/G) – beobachte Updates.
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
                      "Muss jedes mittelständische Unternehmen 2025 nach CSRD berichten?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nein. 2025 berichten vor allem Unternehmen, die bereits nach NFRD in der Pflicht waren (für FY 2024). Für andere große Unternehmen war FY 2025 geplant; politische Vorschläge zur Vereinfachung können Zeitpläne und Schwellen verändern. Solange nichts final ist, solltest du die CSRD/ESRS-Anforderungen vollständig vorbereiten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie beginne ich mit Scope-3-Emissionen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Fokussiere die wesentlichen Kategorien aus der Wesentlichkeitsanalyse (z. B. eingekaufte Güter/Dienstleistungen, Nutzung verkaufter Produkte, Transporte). Nutze belastbare Sekundärdaten als Startpunkt und plane parallel die Erhebung primärer Lieferantendaten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was prüft die Limited Assurance konkret?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Verfahren und Plausibilität der Angaben: Datenquellen, Kontrollen, Nachweise, Konsistenz mit Policies und Methodik. Gute Belegketten und klare Definitionen verkürzen die Prüfung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Wie hängen CSRD/ESRS, EU-Taxonomie und LkSG zusammen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "CSRD/ESRS definieren was berichtet wird, die EU-Taxonomie bewertet die ‚Grünheit‘ von Umsatz/CapEx/OpEx, das LkSG adressiert Sorgfaltspflichten in der Lieferkette. Inhalte überschneiden sich und sollten in einem gemeinsamen Datenmodell zusammengeführt werden.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Brauche ich jetzt schon sektor-spezifische ESRS?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Die erste ESRS-Generation ist sektoragnostisch; sektor-spezifische Standards befinden sich in Arbeit. 2025 gelten ESRS 1/2 und die thematischen Standards (E/S/G).",
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
              Wie setzt du CSRD/ESRS 2025 pragmatisch und prüffähig um?
            </strong>{" "}
            Indem du mit der doppelten Wesentlichkeit startest, ein schlankes
            Datengerüst mit klaren Ownern und Kontrollen aufbaust, die
            Kern-KPIs (insb. Klima, Belegschaft, Taxonomie) priorisierst und
            einer 120-Tage-Roadmap folgst. So veröffentlichst du einen Bericht,
            der Stakeholdern hilft – und dich 2026/27 schneller macht.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Ready für CSRD/ESRS – aber knapp in Zeit &amp; Ressourcen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir begleiten dich von Wesentlichkeit bis veröffentlichungsreifem
              Bericht – effizient, prüffähig, mittelstandstauglich.
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
              <a
                className={`hover:underline ${accent}`}
                href="/blog/doppelte-wesentlichkeit-methodik"
              >
                Doppelte Wesentlichkeit: Methodik, Scoring &amp; Fallstricke
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/scope-3-emissionen-b2b"
              >
                Scope-3 im Mittelstand: Kategorien, Datenquellen, Hebel
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/eu-taxonomie-erklaert"
              >
                EU-Taxonomie erklärt: So berechnest du Umsatz/CapEx/OpEx
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/esrs-kpis-checkliste"
              >
                ESRS-KPIs 2025: Checkliste &amp; Best Practices
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu CSRD &amp; ESRS 2025
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
                    EU-Richtlinie zur Nachhaltigkeitsberichterstattung, die
                    Umfang, Qualität und Prüfung von ESG-Informationen
                    vorschreibt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">ESRS</td>
                  <td className="p-3 text-zinc-700">
                    Europäische Berichtsstandards, die festlegen, <em>was</em>{" "}
                    und <em>wie</em> berichtet wird – querschnittlich (ESRS 1/2)
                    und themenspezifisch (E/S/G).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Doppelte Wesentlichkeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Bewertung von Themen nach Außenwirkung (Impact) und
                    finanzieller Relevanz (Risiken/Chancen); steuert, welche
                    Angaben/KPIs zu berichten sind.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Scope-3-Emissionen
                  </td>
                  <td className="p-3 text-zinc-700">
                    Indirekte Emissionen entlang der Wertschöpfungskette (z. B.
                    eingekaufte Güter, Nutzung, Transport) – meist der größte
                    Anteil.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    EU-Taxonomie
                  </td>
                  <td className="p-3 text-zinc-700">
                    Klassifizierung, wann wirtschaftliche Aktivitäten als
                    ökologisch nachhaltig gelten; Grundlage für
                    Umsatz/CapEx/OpEx-Quoten.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">LkSG</td>
                  <td className="p-3 text-zinc-700">
                    Deutsches Lieferkettensorgfaltspflichtengesetz – regelt
                    menschenrechtliche/umweltbezogene Sorgfalt in Lieferketten.
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
                {author.role} – Schwerpunkte: {author.topics}
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
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              European Commission (2023): „Commission adopts the European
              Sustainability Reporting Standards (ESRS)“ –{" "}
              <a
                href="https://finance.ec.europa.eu/news/commission-adopts-european-sustainability-reporting-standards-2023-07-31_en"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                finance.ec.europa.eu
              </a>
            </li>
            <li>
              EUR-Lex: „Commission Delegated Regulation (EU) 2023/2772“ –{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg_del/2023/2772/oj/eng"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                eur-lex.europa.eu
              </a>
            </li>
            <li>
              EFRAG (2024): „Materiality Assessment Implementation Guidance
              (IG 1)“ –{" "}
              <a
                href="https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/IG%201%20Materiality%20Assessment_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                efrag.org
              </a>
            </li>
            <li>
              Council of the EU (2025): „Simplification – Council agrees
              position …“ –{" "}
              <a
                href="https://www.consilium.europa.eu/en/press/press-releases/2025/06/23/simplification-council-agrees-position-on-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                consilium.europa.eu
              </a>
            </li>
            <li>
              European Commission (2025): „Corporate sustainability reporting“ –{" "}
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
              BAFA: „Supply Chain Act (LkSG) – Overview“ –{" "}
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
