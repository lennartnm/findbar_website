import React from "react";
import Head from "next/head";
import { ArrowRight } from "lucide-react";

/**
 * Blog: CSRD & ESRS: Was Unternehmen 2025 konkret umsetzen müssen
 * Praxisleitfaden für mittelständische B2B-Unternehmen: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap
 * Autor: Max Mustermann – ESG-Reporting Manager (CSRD/ESRS)
 * Reviewer: Claudia Müller – Chief Sustainability Officer (CSO)
 * Company: Muster GmbH
 */

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

const canonical = "https://www.muster-gmbh.de/blog/csrd-esrs-2025";
const title =
  "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen";
const description =
  "Praxisleitfaden für mittelständische B2B-Unternehmen: doppelte Wesentlichkeit, Datenprozesse, KPIs, Scope 3 und Roadmap für die CSRD-/ESRS-Umsetzung 2025.";

export default function ArticlePage() {
  const dateISO = "2025-08-27";
  const dateShort = "27.08.2025";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.muster-gmbh.de/esg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.muster-gmbh.de/esg.jpg" />

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          // Article schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              inLanguage: "de",
              image: ["https://www.muster-gmbh.de/esg.jpg"],
              datePublished: dateISO,
              dateModified: dateISO,
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: author.role,
                image: `https://www.muster-gmbh.de${author.image}`,
                sameAs: [author.linkedin],
              },
              publisher: {
                "@type": "Organization",
                name: "Muster GmbH",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.muster-gmbh.de/logo.png",
                },
              },
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
              name: "Muster GmbH",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Musterstraße 1",
                addressCountry: "DE",
              },
              email: "muster@beispiel.de",
              telephone: "+49 123456789",
              url: "https://www.muster-gmbh.de",
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
            CSRD &amp; ESRS: Was Unternehmen 2025 konkret umsetzen müssen
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst 2025 die{" "}
            <strong>CSRD-Nachhaltigkeitsberichterstattung</strong> pragmatisch
            aufsetzen? In diesem Leitfaden erfährst du, wie du die{" "}
            <strong> doppelte Wesentlichkeit</strong> sauber durchführst,
            Datenprozesse für ESRS etablierst, die wichtigsten{" "}
            <strong>KPIs</strong> (inkl. Scope&nbsp;3) sicher erfasst und eine
            realistische <strong>Roadmap</strong> bis zum ersten
            Prüfungsdurchlauf baust.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am <time dateTime={dateISO}>{dateShort}</time>
            {" · "}Lesedauer: <span className="tabular-nums">12 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/esg.jpg" />
                <img
                  loading="eager"
                  src="/esg.jpg"
                  alt="ESG-Strategie im Unternehmen: Team arbeitet am CSRD-Fahrplan auf einem großen Whiteboard"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Strategieworkshop zur CSRD-Umsetzung.
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
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
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>Zeitleiste 2025:</strong> Durch die „Stop-the-clock“-Richtlinie
              wurden Pflichten für viele (Welle&nbsp;2/3) um <strong>2 Jahre</strong>
              verschoben – aber die <strong>Vorbereitung 2025</strong> bleibt
              erfolgskritisch (Daten, Prozesse, Wesentlichkeit).
            </li>
            <li>
              <strong>„Quick Fix“ 2025:</strong> Welle-1-Unternehmen berichten 2025/2026
              nicht mehr als 2024; <strong>erweiterte Übergangserleichterungen</strong>{" "}
              nehmen Druck aus ESRS-Details – ohne die Pflicht zur{" "}
              <strong>limitierten Prüfung</strong> zu ändern.
            </li>
            <li>
              <strong>Doppelte Wesentlichkeit</strong> zuerst: sauberer Prozess,
              dokumentierte Schwellen, eindeutige Entscheidungen. Das steuert,{" "}
              <em>was</em> du wirklich berichten musst.
            </li>
            <li>
              <strong>Datenprozesse &amp; KPIs:</strong> baue schlanke
              Datenerhebung entlang der Wertschöpfung (Scope&nbsp;3 inklusive),
              definiere Owner, Kontrollen &amp; Audit-Trail – prüfungssicher.
            </li>
            <li>
              <strong>Roadmap:</strong> 90-Tage-Start, 12-Monats-Plan und
              Meilensteine bis zur ersten Veröffentlichung – passend für{" "}
              <strong>mittelständische B2B-Unternehmen</strong>.
            </li>
            <li>
              <strong>EU-Taxonomie &amp; Lieferkette:</strong> Taxonomie-KPIs
              (Umsatz/CapEx/OpEx) sauber verknüpfen und Inhalte mit
              Lieferketten-Pflichten abstimmen.
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
              <a className={`hover:underline ${accent} font-medium`} href="#was-aendert-sich-2025">
                Was ändert sich 2025 wirklich?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#wer-ist-betroffen-und-wann">
                Wer ist betroffen – und wann?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#doppelte-wesentlichkeit">
                Doppelte Wesentlichkeit: so gehst du vor
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#datenprozesse-kpis">
                Datenprozesse &amp; KPIs: pragmatisch und prüfungssicher
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#scope-3">
                Scope&nbsp;3-Emissionen: vom Spend-basierten Start zum Primärdaten-Mix
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#eu-taxonomie">
                EU-Taxonomie &amp; ESRS: was zusammengehört
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#lieferkette">
                Lieferkettengesetz &amp; CSDDD: Abgleich mit ESRS
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#roadmap">
                Roadmap 2025: 90-Tage-Plan &amp; 12-Monats-Fahrplan
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
                Kurzfazit
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="was-aendert-sich-2025">
          <h2 className="text-2xl font-bold mb-2">Was ändert sich 2025 wirklich?</h2>
          <p className="leading-relaxed">
            2025 ist ein <strong>Umsetzungsjahr</strong>: Die EU hat zwei
            entscheidende Schritte gesetzt. Erstens die sogenannte{" "}
            <strong>„Stop-the-clock“-Richtlinie</strong>, die für viele
            Unternehmen die CSRD-Pflichten um <strong>zwei Jahre</strong>{" "}
            verschiebt (Welle&nbsp;2 und Welle&nbsp;3). Zweitens den{" "}
            <strong>„Quick Fix“</strong> für die erste ESRS-Generation:
            Unternehmen, die bereits für das Geschäftsjahr 2024 berichten
            müssen (Welle&nbsp;1), müssen 2025/2026 <em>keine zusätzlichen</em>{" "}
            Inhalte über 2024 hinaus offenlegen und profitieren teils von
            erweiterten Übergangsregeln. Für dich heißt das: etwas mehr Luft –
            aber keine Ausrede, die <strong>Grundlagen</strong> nicht zu
            bauen.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Kurz erklärt</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>
                  <strong>Stop-the-clock:</strong> Welle&nbsp;2/3 beginnt{" "}
                  <u>zwei Jahre später</u> als ursprünglich geplant (siehe
                  Zeitleiste unten).
                </li>
                <li>
                  <strong>Quick Fix:</strong> Welle-1 berichtet 2025/2026{" "}
                  <em>auf gleichem Level</em> wie 2024; gewisse Phase-ins
                  gelten zusätzlich.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Was heißt das für mittelständische B2B-Unternehmen?
              </h3>
              <p className="text-sm">
                Nutze 2025 für die <strong>doppelte Wesentlichkeit</strong>,
                die <strong>Datenarchitektur</strong> (inkl. Scope&nbsp;3) und
                <strong> Prozesse &amp; Kontrollen</strong>. So gehst du 2026
                entspannt in Pilots, 2027 in die erste vollständige
                Datenerhebung und 2028/2029 in die Veröffentlichung –
                abhängig von deiner Unternehmensgröße und Welle.
              </p>
            </div>
          </div>
        </section>

        <section id="wer-ist-betroffen-und-wann" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Wer ist betroffen – und wann?</h2>
          <p>
            Die CSRD gilt stufenweise („Wellen“). Vereinfacht:
          </p>
          <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-4">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Welle</th>
                  <th className="text-left font-semibold p-3">Wer?</th>
                  <th className="text-left font-semibold p-3">Erstes Berichtsjahr</th>
                  <th className="text-left font-semibold p-3">Veröffentlichung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Welle 1</td>
                  <td className="p-3">
                    Unternehmen, die bereits unter der NFRD berichteten (z. B.
                    große kapitalmarktorientierte)
                  </td>
                  <td className="p-3">2024 (unverändert)</td>
                  <td className="p-3">2025</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Welle 2</td>
                  <td className="p-3">
                    andere große Unternehmen (i. d. R. zwei von drei:
                    &gt; 250 MA, &gt; 40 Mio. € Umsatz, &gt; 20 Mio. € Bilanzsumme)
                  </td>
                  <td className="p-3">
                    <strong>2027</strong> (statt 2025)
                  </td>
                  <td className="p-3">2028</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Welle 3</td>
                  <td className="p-3">börsennotierte KMU (mit Opt-out-Möglichkeit)</td>
                  <td className="p-3">
                    <strong>2028</strong> (statt 2026)
                  </td>
                  <td className="p-3">2029</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Nicht-EU-Konzerne</td>
                  <td className="p-3">
                    mit &gt; 150 Mio. € EU-Umsatz und relevanter Präsenz
                  </td>
                  <td className="p-3">2028 (unverändert)</td>
                  <td className="p-3">2029</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-600 mt-2">
            Hinweis: Es liegt zudem ein <em>Vereinfachungsvorschlag</em> der
            EU-Kommission vor („Omnibus“), der die CSRD künftig nur für sehr
            große Unternehmen (&gt; 1.000 MA) anwenden würde. Das ist{" "}
            <strong>noch nicht beschlossen</strong>. Plane konservativ und
            halte Entwicklungen im Blick.
          </p>
        </section>

        {/* Bild 1 – volle Breite, 16:6 */}
       <figure className="mt-8">
  <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/nachhaltigkeit.jpg" />
      <img
        loading="lazy"
        src="/nachhaltigkeit.jpg"
        alt="Nachhaltigkeitsdaten entlang der Wertschöpfungskette: Prozessdiagramm an einer Glasscheibe"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  </div>
  <figcaption className="mt-2 text-xs text-zinc-600">
    Grundlage jeder ESRS-Berichterstattung: stabile Datenflüsse, klare Verantwortlichkeiten und nachvollziehbare Kontrollen.
  </figcaption>
</figure>

        <section id="doppelte-wesentlichkeit" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Doppelte Wesentlichkeit: so gehst du vor</h2>
          <p>
            Die <strong>doppelte Wesentlichkeit</strong> verbindet zwei Blickwinkel:
            <em>Impact</em> (Auswirkungen deines Unternehmens auf Umwelt &amp;
            Menschen) und <em>Financial</em> (Risiken &amp; Chancen für dein
            Unternehmen). Erst wenn ein Thema in mindestens einer Perspektive
            wesentlich ist, musst du berichten. So setzt du es um:
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Schritt-für-Schritt</h3>
              <ol className="list-decimal ml-5 space-y-2 text-sm">
                <li>
                  <strong>Kontext verstehen:</strong> Geschäftsmodell,
                  Standorte, Produkte, Lieferketten, Stakeholder.
                </li>
                <li>
                  <strong>IROs identifizieren:</strong> <em>Impacts, Risks,
                  Opportunities</em> entlang Wertschöpfung (Up- &amp; Downstream).
                </li>
                <li>
                  <strong>Bewerten &amp; priorisieren:</strong> klare Kriterien
                  (Schwere, Reichweite, Unerlässlichkeit; Eintrittswahrscheinlichkeit,
                  Finanzwirkung), transparente Schwellen &amp; Dokumentation.
                </li>
                <li>
                  <strong>Entscheiden &amp; begründen:</strong> Materialitätsmatrix,
                  Begründungen, Abgrenzung „nicht wesentlich“.
                </li>
                <li>
                  <strong>Verknüpfen:</strong> für wesentliche Themen die
                  relevanten ESRS-Datenpunkte &amp; KPIs ableiten.
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Praktische Tipps</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>
                  <strong>Entitäten konsistent:</strong> gleiche Konsolidierungskreise
                  wie im Abschluss, plus Wertschöpfungskette.
                </li>
                <li>
                  <strong>Stakeholder einbinden:</strong> Vertrieb, Einkauf,
                  HR, Produktion, Finanzen, Compliance.
                </li>
                <li>
                  <strong>Audit-Trail früh denken:</strong> Quellen, Annahmen,
                  Berechnungen versioniert ablegen.
                </li>
                <li>
                  <strong>Update-Zyklus:</strong> jährlich prüfen; bei
                  wesentlichen Änderungen ad hoc.
                </li>
              </ul>
            </div>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Die doppelte Wesentlichkeit ist kein theoretisches Projekt –
              sie ist dein <em>Scope-Fokusfilter</em>. Wer sie 2025 sauber
              aufsetzt, spart 2026/2027 die meisten Diskussionen mit Audit
              und Aufsichtsrat.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — indirektes Zitat aus internen ESG-Trainings, {reviewer.name},{" "}
              {reviewer.role}
            </figcaption>
          </figure>
        </section>

        <section id="datenprozesse-kpis" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Datenprozesse &amp; KPIs: pragmatisch und prüfungssicher
          </h2>
          <p>
            Dein Ziel 2025: <strong>schlanke, stabile</strong> Prozesse mit
            klaren Rollen (Data Owner, Controlling, ESG-Team), dokumentierten
            Methoden und <strong>Kontrollen</strong>. So vermeidest du Brüche
            zwischen Finance und Nachhaltigkeit.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Core-Prozesse</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Periodische Datenerhebung mit Cut-off &amp; Freigaben</li>
                <li>Methodenhandbuch (Definitionen, Formeln, Quellen)</li>
                <li>Kontrollen (Vier-Augen, Plausis, Ausreißer-Checks)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Top-KPIs (Auswahl)</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>ESRS&nbsp;E1: THG (Scope 1/2/3), Energie, Intensity</li>
                <li>ESRS&nbsp;S1: Belegschaft (Fluktuation, Unfälle)</li>
                <li>EU-Taxonomie: Umsatz/CapEx/OpEx ausgerichtet</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Kontrollen &amp; Prüfung</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Nachvollziehbare Herleitungen &amp; Belege</li>
                <li>Änderungsmanagement &amp; Versionshistorie</li>
                <li>Vorab-Audit („pre-assurance“) einzelner KPIs</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">2025 Must-haves</th>
                  <th className="text-left font-semibold p-3">Nice-to-have</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">
                    Dokumentierte Wesentlichkeit inkl. Schwellen, Methode &
                    Ergebnis
                  </td>
                  <td className="p-3">Materialitäts-Dashboard mit Drill-down</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Methodenhandbuch &amp; KPI-Datenmodell</td>
                  <td className="p-3">ESG-Daten im Data Warehouse</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">
                    Scope-3-Pilotrechnung (Top-5-Warengruppen)
                  </td>
                  <td className="p-3">Supplier Portal für Primärdaten</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Kontrollen &amp; Freigabeprozess</td>
                  <td className="p-3">Automatisierte Ausreißer-Erkennung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="scope-3" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Scope&nbsp;3-Emissionen: vom Spend-basierten Start zum Primärdaten-Mix
          </h2>
          <p>
            Für viele Mittelständler ist <strong>Scope&nbsp;3</strong>{" "}
            entscheidend – und herausfordernd. Starte <em>pragmatisch</em> mit
            einer <strong>Spend-basierten</strong> Erstberechnung (Einkaufsdaten
            × Emissionsfaktoren), verfeinere dann gezielt: für
            <em>Hotspots</em> Primärdaten der Lieferanten, Aktivitäten-basierte
            Methoden (z. B. Nutzung, Transporte) und bessere Faktoren. Wichtig
            ist, deine <strong>Methodik</strong> transparent zu dokumentieren.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Schrittfolge</h3>
              <ol className="list-decimal ml-5 space-y-2 text-sm">
                <li>Spend-Daten bereinigen &amp; Warengruppen clustern</li>
                <li>Emissionsfaktoren zuordnen (Herkunft, Vintage, Qualität)</li>
                <li>Top-Hotspots (Top-10 Lieferanten, Top-5 Kategorien) priorisieren</li>
                <li>Primärdatenabfrage &amp; Aktivitäten-Methoden ergänzen</li>
                <li>Verbesserungs-KPIs, Zielpfade &amp; Lieferantenprogramm</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Do vs. Don’t (2-zu-1)</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="rounded-lg border border-emerald-200 bg-white p-3 text-sm">
                    <strong>Do:</strong> Priorisieren, dokumentieren, Lieferanten
                    früh einbinden, Unsicherheiten beziffern.
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border border-red-200 bg-white p-3 text-sm">
                    <strong>Don’t:</strong> Alles gleichzeitig, Quellen mischen
                    ohne Kennzeichnung, Ergebnisse ohne Unsicherheiten publizieren.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bild 2 – Unsplash */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1551281044-8f72f25d0f3b?q=80&auto=format&fit=crop&w=1200"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1551281044-8f72f25d0f3b?q=80&auto=format&fit=crop&w=1800"
                alt="Dashboard mit Emissions- und Energie-Kennzahlen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Scope-3 sichtbar machen: ein konsistentes KPI-Set erleichtert
            Steuerung und Assurance.
          </figcaption>
        </figure>

        <section id="eu-taxonomie" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            EU-Taxonomie &amp; ESRS: was zusammengehört
          </h2>
          <p>
            Die <strong>EU-Taxonomie</strong> verlangt die Offenlegung der
            Anteile <strong>taxonomiefähiger</strong> und{" "}
            <strong>taxonomiekonformer</strong> Umsätze, CapEx und OpEx. Für die
            CSRD heißt das: Du verknüpfst ESRS-Informationen (z. B.
            Geschäftsmodell, Strategien, Übergangspläne) mit Taxonomie-KPIs.
            Praktisch: Erstelle für 2025 eine <em>Mapping-Tabelle</em>, die
            Aktivitäten, technische Kriterien, DNSH/Min-Safeguards und KPI-Zuordnung
            zeigt. So reduzierst du doppelten Aufwand.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              <strong>Startpunkt:</strong> Aktivitäten-Inventar &amp; CapEx-Plan
              (3–5 Jahre) – matchen mit Taxonomie-Kriterien.
            </li>
            <li>
              <strong>Kontrollen:</strong> klare Evidenzen pro KPI (Vertrag,
              Rechnung, technische Nachweise).
            </li>
            <li>
              <strong>Abstimmung:</strong> Finance × Nachhaltigkeit × Technik
              zur einheitlichen Bewertung.
            </li>
          </ul>
        </section>

        <section id="lieferkette" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Lieferkettengesetz &amp; CSDDD: Abgleich mit ESRS
          </h2>
          <p>
            Inhalte aus dem deutschen Lieferkettengesetz (und künftig der
            EU-CSDDD) überlappen mit ESRS-Themen (z. B. Menschenrechte,
            Arbeitsbedingungen, Umwelt in der Lieferkette). Nutze eine
            <strong> gemeinsame Risiko- &amp; Maßnahmenlogik</strong>:
            Identifikation, Prävention, Abhilfe, Wirksamkeitskontrolle –
            gespiegelt in ESRS-Angaben (Governance, Policies, Ziele, KPIs).
            So vermeidest du Parallelwelten und reduzierst Aufwand bei
            Nachweisen.
          </p>
        </section>

        <section id="roadmap" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Roadmap 2025: 90-Tage-Plan &amp; 12-Monats-Fahrplan</h2>
          <p>
            Diese Roadmap ist speziell für <strong>mittelständische
            B2B-Unternehmen</strong> gedacht – ein „csrd umsetzung leitfaden
            für mittelständische b2b unternehmen 2025“, der dich mit Fokus
            durch das Jahr führt.
          </p>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Die ersten 90 Tage</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>
                  <strong>Kick-off &amp; Governance:</strong> Sponsor im Vorstand,
                  RACI, Projektplan, Risiko- &amp; Change-Plan.
                </li>
                <li>
                  <strong>Materialität:</strong> Scoping-Workshop, IRO-Landkarte,
                  Stakeholder-Plan, Bewertungslogik, Schwellen.
                </li>
                <li>
                  <strong>Datenfundament:</strong> KPI-Liste (ESRS-getriggert),
                  Quellenscan, Datamap, erste Kontrollen.
                </li>
                <li>
                  <strong>Scope-3-Pilot:</strong> Spend-basierte Erstrechnung,
                  Hotspots bestimmen, Lieferantenansprache.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Monate 4–12</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>
                  <strong>Materialität finalisieren</strong> und mit
                  Aufsichtsrat/Prüfung vorbesprechen.
                </li>
                <li>
                  <strong>KPI-Prozesse</strong> industrialisieren (Owner,
                  Freigaben, Kontrollen, Tooling).
                </li>
                <li>
                  <strong>Scope-3-Vertiefung</strong> (Primärdaten, Aktivitäten,
                  Lieferantenprogramm).
                </li>
                <li>
                  <strong>Taxonomie-Mapping</strong> &amp; Evidenzen vorbereiten.
                </li>
                <li>
                  <strong>Pre-Assurance</strong> einzelner Kennzahlen und
                  Verbesserungsplan.
                </li>
                <li>
                  <strong>Entwurf Nachhaltigkeitsbericht</strong> mit Cross-Refs
                  zu Lagebericht &amp; Abschluss; interner Dry-Run.
                </li>
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
                Gilt die CSRD 2025 schon für mein mittelständisches Unternehmen?
              </h3>
              <p>
                In vielen Fällen <strong>nein</strong> – die Anwendung für
                Welle&nbsp;2 wurde um zwei Jahre auf{" "}
                <strong>Geschäftsjahre ab 2027</strong> verschoben. Trotzdem
                solltest du 2025 Materialität, Datenprozesse und Scope-3
                aufsetzen, um 2026/2027 sauber testen zu können.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Muss ich Scope-3 gleich vollständig berichten?</h3>
              <p>
                Berichte ist <em>pflichtig</em>, wenn Klima wesentlich ist, aber
                es gibt <strong>Übergangserleichterungen</strong>. Starte 2025
                spend-basiert und vertiefe gezielt – wichtig sind Transparenz,
                Unsicherheiten und ein Plan zur Datenverbesserung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Prüfung ist vorgeschrieben – und ab wann?
              </h3>
              <p>
                Aktuell ist eine <strong>limitierte Prüfung</strong> vorgesehen.
                Die EU arbeitet an Leitlinien und Standards; ein Wechsel zu
                „Reasonable Assurance“ ist derzeit <strong>nicht terminiert</strong>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie hängen EU-Taxonomie und ESRS zusammen?
              </h3>
              <p>
                ESRS liefern Kontext und Steuerungslogik (Strategie, Ziele,
                Policies), die Taxonomie setzt konkrete <strong>KPI-Quoten</strong>
                auf Umsatz/CapEx/OpEx. Baue ein gemeinsames Mapping und
                Evidenz-Set.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Was ist, wenn die „Omnibus“-Vorschläge kommen?
              </h3>
              <p>
                Dann würden Pflichten <em>möglicherweise</em> nur sehr große
                Unternehmen betreffen. Bis zur Entscheidung plane konservativ
                und halte dein Programm schlank und skalierbar.
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
                      "Gilt die CSRD 2025 schon für mein mittelständisches Unternehmen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "In vielen Fällen nein – die Anwendung für Welle 2 wurde um zwei Jahre auf Geschäftsjahre ab 2027 verschoben. Trotzdem solltest du 2025 Materialität, Datenprozesse und Scope-3 aufsetzen, um 2026/2027 sauber testen zu können.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Muss ich Scope-3 gleich vollständig berichten?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Berichte ist pflichtig, wenn Klima wesentlich ist, aber es gibt Übergangserleichterungen. Starte 2025 spend-basiert und vertiefe gezielt – wichtig sind Transparenz, Unsicherheiten und ein Plan zur Datenverbesserung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Prüfung ist vorgeschrieben – und ab wann?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Aktuell ist eine limitierte Prüfung vorgesehen. Die EU arbeitet an Leitlinien und Standards; ein Wechsel zu „Reasonable Assurance“ ist derzeit nicht terminiert.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie hängen EU-Taxonomie und ESRS zusammen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "ESRS liefern Kontext und Steuerungslogik (Strategie, Ziele, Policies), die Taxonomie setzt konkrete KPI-Quoten auf Umsatz/CapEx/OpEx. Baue ein gemeinsames Mapping und Evidenz-Set.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was ist, wenn die „Omnibus“-Vorschläge kommen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Dann würden Pflichten möglicherweise nur sehr große Unternehmen betreffen. Bis zur Entscheidung plane konservativ und halte dein Programm schlank und skalierbar.",
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
              Wie setzt du die CSRD/ESRS 2025 im Mittelstand pragmatisch um?
            </strong>{" "}
            Indem du <em>jetzt</em> die doppelte Wesentlichkeit sauber
            durchziehst, eine leichtgewichtige Datenarchitektur inkl.
            Scope-3-Pilot etablierst, Taxonomie-KPIs mappst und eine klare
            Roadmap mit Pre-Assurance aufsetzt. So bist du auf der sicheren
            Seite – egal, wie Regulierungsdetails sich weiterentwickeln.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Bereit für deinen CSRD-Kick-off?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir unterstützen dich bei Wesentlichkeit, Scope-3-Set-up,
              KPI-Prozessen und Pre-Assurance – maßgeschneidert für den
              Mittelstand.
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
                In diesem Beispiel-Blogartikel funktionieren die Links nicht.
                Möchtest du solch ein Projekt auch für dein Angebot umsetzen?{" "}
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
              <a className={`hover:underline ${accent}`} href="#">
                ESRS E1 in der Praxis: So startest du mit Scope-3
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                EU-Taxonomie: Umsatz/CapEx/OpEx richtig zuordnen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                Vom Excel zur Plattform: ESG-Datenarchitektur für KMU
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                Wesentlichkeitsmatrix Schritt-für-Schritt erstellen
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
                    EU-Richtlinie zur Nachhaltigkeitsberichterstattung, die
                    Inhalte, Prüfpflicht und Anwendungsbereich festlegt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">ESRS</td>
                  <td className="p-3 text-zinc-700">
                    Europäische Berichtsstandards, die detaillierte
                    Offenlegungspflichten und KPIs definieren.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Doppelte Wesentlichkeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Pflicht, Themen sowohl nach Wirkung auf Umwelt &amp;
                    Menschen als auch nach finanzieller Relevanz zu bewerten.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Scope 3</td>
                  <td className="p-3 text-zinc-700">
                    Indirekte Emissionen der Wertschöpfungskette (Einkauf,
                    Nutzung, Entsorgung etc.).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    EU-Taxonomie
                  </td>
                  <td className="p-3 text-zinc-700">
                    Klassifizierung ökologisch nachhaltiger Wirtschaftstätigkeiten
                    und zugehöriger Umsatz/CapEx/OpEx-KPIs.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Assurance</td>
                  <td className="p-3 text-zinc-700">
                    Externe Prüfung der Nachhaltigkeitsberichterstattung
                    (zunächst „limited assurance“).
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
              alt="Autor: Max Mustermann"
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
              European Commission:{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corporate sustainability reporting – Überblick &amp; Zeitleiste
              </a>
            </li>
            <li>
              EUR-Lex:{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025L0794"
                target="_blank"
                rel="noopener noreferrer"
              >
                Richtlinie (EU) 2025/794 („Stop-the-clock“) – Verschiebung der
                Anwendungsdaten
              </a>
            </li>
            <li>
              European Commission (11.07.2025):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://finance.ec.europa.eu/publications/commission-adopts-quick-fix-companies-already-conducting-corporate-sustainability-reporting_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                „Quick-Fix“ für ESRS – Erleichterungen für Welle-1
              </a>
            </li>
            <li>
              EFRAG (05/2024):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/IG%201%20Materiality%20Assessment_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Implementation Guidance 1 – Materiality Assessment
              </a>
            </li>
            <li>
              EFRAG (31.07.2025):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.efrag.org/en/news-and-calendar/news/press-release-efrag-shares-revised-esrs-exposure-drafts-and-launches-60day-public-consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Überarbeitete ESRS-Entwürfe („Revisions &amp; Simplification“)
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
