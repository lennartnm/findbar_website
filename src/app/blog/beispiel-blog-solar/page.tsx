"use client";
/*
Artikel-Template basierend auf den Style- und UI-Leitplanken aus dem Beispielcode.
Farben, Typografie, Layout-Patterns wurden daran angelehnt.
Struktur, SEO- und Research-Anforderungen folgen der Instruktions-PDF.
*/
import React from "react";
import {
Sun,
Battery,
CheckCircle2,
CircleDollarSign,
PieChart,
Wrench,
Info,
HelpCircle,
ArrowRight,
PlugZap,
Building2,
FileText,
ShieldCheck,
Cpu,
} from "lucide-react";
/* ---------- Design Tokens (wie im Beispielcode) ---------- */
const RG600 = "#1b4d2b"; // Racing Green (dunkel)
const RG300 = "#7ca98e"; // Racing Green (hell)
const serifClass = "font-serif";
const containerClass = "w-full max-w-5xl mx-auto px-6";
/* ---------- Hilfen ---------- */
function formatDateDE(d: Date) {
return d.toLocaleDateString("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
});
}
const UPDATED_AT = new Date("2025-08-18T08:00:00+02:00");
const READING_MIN = 18; // konservativ auf Basis Textlänge
/* ---------- Meta (Next.js App Router) ---------- */
export const metadata = {
title:
"Green Energy im Unternehmen: Photovoltaik & Speicher wirtschaftlich planen (EEG 2025, Förderungen, ROI)",
description:
"So planst du PV-Anlagen & Batteriespeicher im Unternehmen wirtschaftlich: Investition, Amortisation, EEG 2025, Förderungen (KfW 270), Praxis-Checklisten & ROI-Beispiele.",
alternates: {
canonical:
"https://findbar.de/blog/photovoltaik-speicher-unternehmen",
},
robots: { index: true, follow: true },
openGraph: {
title:
"PV & Speicher im Unternehmen – wirtschaftlich planen (EEG 2025, Förderungen, ROI)",
description:
"Praxisleitfaden für Entscheider: realistische Annahmen, Rechtsupdate, Förderwege, Checklisten & ROI.",
url: "https://findbar.de/blog/photovoltaik-speicher-unternehmen",
siteName: "findbar",
type: "article",
},
twitter: {
card: "summary_large_image",
title:
"PV & Speicher im Unternehmen – wirtschaftlich planen (EEG 2025, Förderungen, ROI)",
description:
"Praxisleitfaden für Entscheider: realistische Annahmen, Rechtsupdate, Förderwege, Checklisten & ROI.",
},
};
/* ---------- JSON-LD Helper ---------- */
function JsonLd({ data }: { data: Record<string, any> }) {
return (
<script
type="application/ld+json"
// @ts-ignore
dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
/>
);
}
/* =========================================================
PAGE
========================================================= */
export default function ArticlePage() {
const jsonLdArticle = {
"@context": "https://schema.org",
"@type": "Article",
headline:
"Green Energy im Unternehmen – Photovoltaik und Energiespeicher sinnvoll einsetzen",
inLanguage: "de-DE",
description:
"Investition, Amortisation, Förderungen: So planst du PV-Anlagen und Speicherlösungen wirtschaftlich – mit realistischen Annahmen, rechtlichem Update (EEG 2025) und Praxis-Checklisten.",
author: {
"@type": "Person",
name: "Lennart F.",
jobTitle: "Energie & Growth Consultant",
url: "https://findbar.de/team/lennart",
},
dateModified: UPDATED_AT.toISOString(),
publisher: {
"@type": "Organization",
name: "findbar",
logo: {
"@type": "ImageObject",
url: "https://findbar.de/logo.png",
},
},
image: [
// Hero: Platzhalter-Bild (Prompt 16:9, siehe unten)
"https://findbar.de/og/photovoltaik-speicher-unternehmen.png",
],
};
const jsonLdOrg = {
"@context": "https://schema.org",
"@type": "Organization",
name: "findbar",
url: "https://findbar.de",
logo: "https://findbar.de/logo.png",
};
const faq = [
{
q: "Volleinspeisung, Teileinspeisung oder Eigenverbrauch – was rechnet sich 2025 im Gewerbe?",
a: "Mit aktuellen EEG-Vergütungen (z. B. 7,86 ct/kWh Teileinspeisung und 12,47 ct/kWh Volleinspeisung für kleine Dachanlagen) ist Eigenverbrauch weiterhin der stärkste Hebel. Speicher erhöhen den Eigenverbrauchsanteil und reduzieren Lastspitzen. Siehe die ROI-Beispiele im Artikel.",
},
{
q: "Welche EEG-2025-Änderungen muss ich kennen?",
a: "Vereinfachter Netzanschluss bis 30 kW, keine Förderung bei negativen Börsenpreisen für Neuanlagen und (anders als teils berichtet) keine Absenkung der Direktvermarktungs-Schwelle unter 100 kW. Details in Abschnitt „Rechtliches Update“.",
},
{
q: "Wie finanziere ich PV & Speicher als Unternehmen?",
a: "KfW-Programm 270 (Darlehen) deckt PV und Speicher inkl. Planung/Installation ab. Zusätzlich existieren Landes-/Kommunalprogramme. Steuerlich ist im Betrieb meist 20-jährige lineare AfA (5 % p. a.) relevant.",
},
{
q: "Welche Effizienz liefern Batteriespeicher real?",
a: "Die HTW-Stromspeicher-Inspektion 2025 weist neue Wirkungsgrad-Bestwerte aus; die Qualität des Energiemanagements beeinflusst wirtschaftlich relevante Verluste.",
},
{
q: "Wie gehe ich bei der Umsetzung pragmatisch vor?",
a: "Mit Lastprofilen starten, Potenziale für Eigenverbrauch/Peak-Shaving quantifizieren, Netzanschluss klären, Anbieter vergleichen (inkl. Garantien/Service), Finanzierung & Förderung fixieren, Bau & Inbetriebnahme projektieren.",
},
];
const jsonLdFAQ = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: faq.map((f) => ({
"@type": "Question",
name: f.q,
acceptedAnswer: { "@type": "Answer", text: f.a },
})),
};
return (
<main className="bg-white text-slate-900">
{/* JSON-LD */}
<JsonLd data={jsonLdArticle} />
<JsonLd data={jsonLdOrg} />
<JsonLd data={jsonLdFAQ} />
    {/* HERO */}
  <article className="relative overflow-hidden">
    <header
      className="relative border-b border-slate-200"
      aria-labelledby="article-title"
    >
      <div className={`${containerClass} py-10 md:py-14`}>
        <div className="max-w-3xl">
          <h1
            id="article-title"
            className={`text-3xl md:text-5xl leading-tight ${serifClass}`}
          >
            Green Energy im Unternehmen – Photovoltaik und Energiespeicher
            sinnvoll einsetzen
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Investition, Amortisation, Förderungen: So planst du
            PV-Anlagen und Speicherlösungen wirtschaftlich – mit
            realistischen Annahmen, Rechts-Update (EEG 2025) und
            Praxis-Checklisten.
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <img
                src="https://source.unsplash.com/64x64/?portrait,consultant"
                alt="Autorenbild Lennart F."
                className="h-8 w-8 rounded-full object-cover"
                loading="lazy"
              />
              <span>
                Von <strong className="font-medium">Lennart F.</strong>{" "}
                · Energie & Growth Consultant
              </span>
            </div>
            <span aria-label="Zuletzt aktualisiert">
              · Zuletzt aktualisiert: {formatDateDE(UPDATED_AT)}
            </span>
            <span aria-label="Lesedauer">· {READING_MIN} Min. Lesezeit</span>
          </div>
        </div>

        {/* Hero-Bild – Platzhalter/PROMPT (16:9) */}
        <figure className="mt-8 w-full">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
            <div className="flex h-full w-full items-center justify-center p-6 text-center">
              <div className="max-w-3xl text-slate-600">
                <p className="font-medium">
                  Platzhalter Hero (KI-Prompt, 16:9):
                </p>
                <p className="mt-1 text-sm">
                  „Ultra-realistische Dachlandschaft eines
                  mittelständischen Produktionsbetriebs mit 100 kWp
                  Photovoltaik, Batteriespeicher im Technikraum,
                  sonniger Vormittag, Logistik-Hof mit E-Transportern,
                  klare Linien, modernes Corporate-Look & Feel,
                  Farbakzente in Racing-Green“
                </p>
              </div>
            </div>
          </div>
          <figcaption className="mt-2 text-xs text-slate-500">
            Idealisiertes Motiv für Entscheider in Industrie/Gewerbe.
          </figcaption>
        </figure>
      </div>
    </header>

    {/* TL;DR */}
    <section className="bg-slate-50">
      <div className={`${containerClass} py-8 md:py-10`}>
        <aside
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          aria-labelledby="tldr"
        >
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-slate-700" />
            <h2 id="tldr" className={`text-xl font-semibold ${serifClass}`}>
              Das Wichtigste auf einen Blick
            </h2>
          </div>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {[
              "Eigenverbrauch schlägt Einspeisung – Speicher steigern den Nutzen bei typischen Gewerbe-Lastprofilen.",
              "EEG 2025: Vereinfachter Netzanschluss bis 30 kW; keine EEG-Vergütung bei negativen Börsenpreisen für Neuanlagen.",
              "Förderung: KfW 270 (Darlehen) für PV & Speicher; regionale Zuschüsse prüfen.",
              "Wirtschaftlichkeit: Mit LCOE von ~4–14 ct/kWh sind PV-Dachanlagen deutlich unter typischen Strombezugspreisen.",
              "Praxis: Starte mit Messdaten (Lastgänge), prüfe Dachstatik/Brandschutz, kalkuliere konservativ – dann entscheiden.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1b4d2b]"
                  aria-hidden
                />
                <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>

    {/* Inhaltsverzeichnis */}
    <nav
      className="border-y border-slate-200 bg-white"
      aria-label="Inhaltsverzeichnis"
    >
      <div className={`${containerClass} py-6`}>
        <h2 className={`text-lg font-semibold ${serifClass}`}>Inhalt</h2>
        <ol className="mt-3 grid gap-2 md:grid-cols-2">
          {[
            ["grundlagen", "1. Warum PV & Speicher? (Business-Case)"],
            ["wirtschaftlichkeit", "2. Wirtschaftlich rechnen: Annahmen & Beispiel"],
            ["speicher", "3. Speicher clever einsetzen (EV-Anteil, Peaks)"],
            ["recht", "4. Rechtliches Update: EEG 2025 & Solarpaket I"],
            ["praxis", "5. Umsetzung & Checklisten (von Lastgang bis Abnahme)"],
            ["foerderung", "6. Förderungen, Finanzierung & Steuern"],
            ["faq", "7. FAQ"],
            ["summary", "8. Zusammenfassung & nächste Schritte"],
          ].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-[#1b4d2b] hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>

    {/* 1. Grundlagen */}
    <section id="grundlagen">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            1) Warum PV & Speicher im Unternehmen? Der Business-Case in
            120 Sekunden
          </h2>
        </header>

        <div className="mt-4 grid gap-10 md:grid-cols-2">
          {/* Text */}
          <div className="prose prose-slate max-w-none">
            <p>
              Kurz gesagt: Du tauschst volatile Bezugspreise gegen
              kalkulierbare Stromgestehungskosten (LCOE). Für
              Dach-PV liegen diese in Deutschland je nach Systemgröße
              typischerweise im Bereich von grob 4–14 ct/kWh (ohne
              Speicher; Standort/Capex-Bandbreite eingerechnet).{" "}
              {/* LCOE Spanne */}
              
            </p>
            <p>
              Bei Einspeisung greifen feste Vergütungen nach EEG.
              Für kleine Dachanlagen (Gebäude) gelten z. B. zum
              Inbetriebnahme-Fenster 1. Aug. 2025–31. Jan. 2026
              anzulegende Werte von bis zu rund 7,86 ct/kWh
              (Teileinspeisung ≤ 10 kWp) bzw. 12,47 ct/kWh
              (Volleinspeisung ≤ 10 kWp). In höheren Klassen sind
              die Werte niedriger.{" "}
              {/* EEG / BNetzA & Fraunhofer */}
              
            </p>
            <p>
              Eigenverbrauch bleibt für Gewerbe der zentrale
              Renditetreiber, weil er Netzstromkosten (inkl.
              Netzentgelte) substituiert. Netzentgelte machen 2025
              im Schnitt ~10,9 ct/kWh und damit ~28 % des
              Strompreises kleiner/gewerblicher Verbraucher aus –
              eine relevante Stellschraube zugunsten
              Eigenverbrauch. 
            </p>
          </div>

          {/* Unsplash Bild (16:6) */}
          <figure>
            <img
              src="https://source.unsplash.com/1600x600/?rooftop,solar,industry"
              alt="PV-Dachanlage auf einem Gewerbedach"
              className="aspect-[16/6] w-full rounded-xl object-cover ring-1 ring-slate-200"
              loading="lazy"
            />
            <figcaption className="mt-2 text-xs text-slate-500">
              Typische Gewerbedach-PV als Basis des Business-Case.
            </figcaption>
          </figure>
        </div>

        {/* Vergleichstabelle */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <caption className="mb-3 text-left font-medium text-slate-700">
              Vergleich Betriebsmodelle (vereinfacht)
            </caption>
            <thead>
              <tr className="bg-slate-50 text-slate-600">
                <th className="whitespace-nowrap border border-slate-200 p-3 text-left">
                  Aspekt
                </th>
                {["Eigenverbrauch", "Teileinspeisung", "Volleinspeisung"].map(
                  (h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border border-slate-200 p-3 text-left"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Cashflow-Hebel",
                  "Hoch (Bezugspreis-Substitution)",
                  "Mittel (Mix aus EEG & Substitution)",
                  "Planbar (EEG-Vergütung, kein Eigenverbrauch)",
                ],
                [
                  "Speicher-Nutzen",
                  "Sehr hoch (Eigenverbrauch, Peak-Shaving)",
                  "Mittel (je nach Lastprofil)",
                  "Gering (meist unnötig)",
                ],
                [
                  "Regulatorik-Komplexität",
                  "Mittel",
                  "Mittel",
                  "Niedrig",
                ],
                [
                  "Erlösrisiken",
                  "Bezugspreis-Szenario",
                  "EEG-Sätze & Bezugspreise",
                  "EEG-Sätze; negative Preise ohne Vergütung beachten",
                ],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-slate-50/60">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border border-slate-200 p-3 align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-slate-500">
            Hinweis: Seit 25. Feb. 2025 keine EEG-Vergütung mehr bei
            negativen Strompreisen für Neuanlagen. 
          </p>
        </div>
      </div>
    </section>

    {/* 2. Wirtschaftlichkeit */}
    <section id="wirtschaftlichkeit" className="bg-white">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            2) Wirtschaftlich rechnen – realistische Annahmen & Beispiel
          </h2>
          <p className="mt-2 text-slate-700">
            Ziel: transparente, konservative Kalkulation statt
            „Hochglanz-ROI“. So baust du die Basisannahmen auf.
          </p>
        </header>

        {/* Annahmen-Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className={`mb-2 font-semibold ${serifClass}`}>
              Kernannahmen (Beispiele)
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <Sun className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                <span>
                  Systemgröße: 100 kWp Dach-PV (Gewerbe); Capex
                  Annahme: 700–1.200 €/kWp (Bandbreite für
                  größere Dächer; projektspezifisch). 
                </span>
              </li>
              <li className="flex gap-2">
                <CircleDollarSign className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                <span>
                  LCOE-Orientierung: 4–14 ct/kWh (System-, Standort-,
                  Kapitalkosten). 
                </span>
              </li>
              <li className="flex gap-2">
                <PlugZap className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                <span>
                  Netzentgelte: Ø 10,9 ct/kWh (2025) ≈ 28 % des
                  Strompreises (klein/gewerblich). 
                </span>
              </li>
              <li className="flex gap-2">
                <FileText className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                <span>
                  EEG-Vergütung (kleine Dachanlagen, 08/2025–01/2026):
                  bis 7,86 ct/kWh (Teileinspeisung ≤ 10 kWp),
                  bis 12,47 ct/kWh (Volleinspeisung ≤ 10 kWp). 
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className={`mb-2 font-semibold ${serifClass}`}>
              ROI-Beispiel (vereinfacht)
            </h3>
            <p className="text-sm text-slate-700">
              100 kWp Dach-PV, 900 h/a Volllaststunden ⇒ 90 MWh/a
              Erzeugung. Eigenverbrauch 60 %, Speicher 60 kWh
              (optimiert für Tagesverschiebung). Gesparte
              Strombezugskosten 26 ct/kWh (inkl. Netzentgelte) →
              90 MWh × 60 % × 0,26 €/kWh = 14.040 €/a. Rest
              40 % Einspeisung × 7,2 ct/kWh (Beispiel Klasse) →
              ~2.592 €/a. Summe ≈ 16.600 €/a. Capex: 100 kWp ×
              950 €/kWp = 95.000 € (+ Speicher 35.000 €) ⇒
              ~130.000 € gesamt. Amortisation grob ~7,8 Jahre (ohne
              Wartung/Steuern/Degradation/Zinsen).
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Achtung: Projektspezifisch stark variabel (Lastprofil,
              Standort, Finanzierung, Speicherwirkungsgrade, OPEX).
              Dieses Beispiel dient nur der Orientierung.
            </p>
          </div>
        </div>

        {/* Diagramm-Placeholder (16:9) */}
        <figure className="mt-8">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="h-full w-full">
              {/* Simple SVG-Flächengrafik (reine Deko) */}
              <svg
                viewBox="0 0 1200 450"
                className="h-full w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor={RG300} />
                    <stop offset="100%" stopColor={RG600} />
                  </linearGradient>
                </defs>
                <rect width="1200" height="450" fill="#f8fafc" />
                <polyline
                  points="0,380 150,360 300,320 450,300 600,260 750,210 900,180 1050,140 1200,120"
                  fill="none"
                  stroke="url(#g)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="p-3 text-xs text-slate-500">
              Platzhalter Grafik (KI-Prompt, 16:9): „Cashflow-Kurve
              PV + Speicher über 20 Jahre, Capex-Peak Jahr 0,
              jährliche Einsparungen/Einspeiseerlöse, Racing-Green
              Farbverlauf, klare Legende, seriöser Magazin-Look“
            </div>
          </div>
        </figure>

        {/* Interne Links */}
        <p className="mt-6 text-sm text-slate-600">
          Weiterführend:{" "}
          <a
            href="/blog/photovoltaik-roi-rechner"
            className="text-[#1b4d2b] underline"
          >
            PV-ROI-Rechner (Methodik & Annahmen)
          </a>{" "}
          ·{" "}
          <a
            href="/blog/energiemanagement-lastgang-lesen"
            className="text-[#1b4d2b] underline"
          >
            Lastgänge richtig lesen & optimieren
          </a>{" "}
          ·{" "}
          <a
            href="/blog/peak-shaving-batteriespeicher"
            className="text-[#1b4d2b] underline"
          >
            Peak-Shaving im Gewerbe
          </a>
        </p>
      </div>
    </section>

    {/* 3. Speicher */}
    <section id="speicher" className="bg-slate-50">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            3) Batteriespeicher sinnvoll einsetzen: Eigenverbrauch, Peaks,
            Resilienz
          </h2>
        </header>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Textblock */}
          <div className="prose prose-slate max-w-none">
            <h3>Worauf es ankommt</h3>
            <ul>
              <li>
                Wirkungsgrade &amp; Systemdesign (AC/DC): Die
                Stromspeicher-Inspektion 2025 bestätigt neue
                Effizienzrekorde; die Qualität des Energiemanagements
                (z. B. prognosebasiertes Laden) beeinflusst real erzielbare
                Einsparungen deutlich. 
              </li>
              <li>
                Markttrend: Heimspeicher flachen ab, Gewerbe zieht an –
                relevante Skaleneffekte und neue Use-Cases entstehen. 
              </li>
              <li>
                Praxis: Für Gewerbe lohnen Speicher oft durch
                Lastspitzenkappung (Leistungspreise) und Verschiebung von
                PV-Überschüssen in Hauptlastzeiten. Leitfäden von
                DIHK/BVES geben Orientierung zu Geschäftsmodellen. 
              </li>
            </ul>
          </div>

          {/* Unsplash Bild (16:6) */}
          <figure>
            <img
              src="https://source.unsplash.com/1600x600/?battery,energy,industrial"
              alt="Batteriespeicher in Technikräumen eines Gewerbebetriebs"
              className="aspect-[16/6] w-full rounded-xl object-cover ring-1 ring-slate-200"
              loading="lazy"
            />
            <figcaption className="mt-2 text-xs text-slate-500">
              Batteriespeicher für Eigenverbrauch & Peak-Shaving.
            </figcaption>
          </figure>
        </div>

        {/* Infobox */}
        <aside className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 text-sm text-emerald-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            <strong>Best Practice</strong>
          </div>
          <ul className="mt-2 grid gap-2 md:grid-cols-2">
            {[
              "Ziel-KPIs vorab festlegen (EV-Anteil, Peak-Reduktion, Autarkiegrad).",
              "Wirkungsgrade & Standby-Verluste aus Tests/Herstellerdaten prüfen.",
              "EMS-Funktionen (Prognosen, Tarif-Signale) vertraglich fixieren.",
              "Service-Level, Garantien (Zyklen/Restkapazität) & Ersatzteil-Supply klären.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <Wrench className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>

    {/* 4. Rechtliches Update */}
    <section id="recht">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            4) Rechtliches Update (EEG 2025 & Solarpaket I): Was für dich zählt
          </h2>
        </header>

        <div className="mt-4 space-y-4 text-slate-800">
          <p>
            <strong>EEG-Vergütung & „anzulegende Werte“:</strong> Für
            Gebäudeanlagen mit Inbetriebnahme 01. 08. 2025 – 31. 01. 2026
            veröffentlicht die Bundesnetzagentur die anzulegenden Werte pro
            Leistungsklasse (z. B. ≤ 10 kWp: 7,86 ct/kWh Teileinspeisung,
            12,47 ct/kWh Volleinspeisung). 
          </p>
          <p>
            <strong>Negative Börsenpreise:</strong> Für Neuanlagen besteht
            seit 25. Feb. 2025 kein Anspruch auf EEG-Vergütung in
            Zeiträumen mit negativen Strompreisen. 
          </p>
          <p>
            <strong>Netzanschluss erleichtert:</strong> Das vereinfachte
            Verfahren gilt bis 30 kW (vorher 10,8 kW), für bis 100 kW sind
            weitere Vereinfachungen vorgesehen. 
          </p>
          <p>
            <strong>Direktvermarktung-Schwelle:</strong> Eine generelle
            Absenkung auf 25 kW ist NICHT in Kraft; unter 100 kW bleibt die
            verpflichtende Direktvermarktung unverändert. 
          </p>
          <p className="text-sm text-slate-500">
            Kontext & Zahlenüberblick liefert u. a. Fraunhofer ISE (Aktuelle
            Fakten zur Photovoltaik in Deutschland). 
          </p>
        </div>
      </div>
    </section>

    {/* 5. Praxis-Umsetzung */}
    <section id="praxis" className="bg-slate-50">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            5) Umsetzung in der Praxis – von Lastgang bis Inbetriebnahme
          </h2>
          <p className="mt-2 text-slate-700">
            Strukturiert vorgehen, Risiken minimieren, Ertrag sichern.
          </p>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Checklist
            title="Checkliste – Vorbereitung"
            items={[
              "12–24 Monate Lastprofile (15-min) beschaffen & analysieren",
              "Dachstatik, Blitz-/Brandschutz, Fluchtwege prüfen",
              "Belegungsplan: Verschattung, Flächen & Wartungswege",
              "Netzbetreiber-Prüfung (Leistung, Anschluss, Einspeisepunkt)",
            ]}
          />
          <Checklist
            title="Checkliste – Planung & Vertragswerk"
            items={[
              "Dimensionierung PV & Speicher (EV-Ziele, Peak-Tarife)",
              "EMS-Funktionen (Prognose, Tarifsignale, Lastmanagement)",
              "Garantie-Matrix (Module, WR, Speicher, Leistung)",
              "Wartungs-/Service-SLA, Ersatzteil-Logistik",
            ]}
          />
          <Checklist
            title="Checkliste – Bau & Abnahme"
            items={[
              "Sicherheitskonzept, Baustellenorganisation",
              "Dokumentation (Schaltpläne, Inbetriebnahmeprotokolle)",
              "Zähler-/Messkonzept & Fernwirktechnik",
              "Probebetrieb, Abnahme, Monitoring aufschalten",
            ]}
          />
          <Checklist
            title="Checkliste – Betrieb"
            items={[
              "Monitoring-KPIs (EV-Anteil, spezifischer Ertrag, Peaks)",
              "Reinigung/Inspektion, Fehler-Alerts, Ersatzteile",
              "Versicherung & Meldepflichten",
              "Regelmäßiger Soll-/Ist-Abgleich: Nachjustieren",
            ]}
          />
        </div>
      </div>
    </section>

    {/* 6. Förderungen & Steuern */}
    <section id="foerderung">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            6) Förderungen, Finanzierung & Steuern (Kurzüberblick)
          </h2>
        </header>

        <div className="mt-4 space-y-4 text-slate-800">
          <p>
            <strong>KfW 270 (Erneuerbare Energien – Standard):</strong>{" "}
            Darlehen für PV und Speicher inkl. Planung/Installation;
            anwendbar für Unternehmen und öffentliche Einrichtungen.{" "}
            
          </p>
          <p>
            <strong>Regionale Programme:</strong> Viele Länder/Kommunen
            fördern Investitionen oder Speicher, teils mit Fristen/Antrag
            vor Auftrag. Prüfe lokale Portale (z. B. IHK, Landesenergieagentur).
          </p>
          <p>
            <strong>Umsatzsteuer (Nullsteuersatz § 12 Abs. 3 UStG):</strong>{" "}
            Gilt für bestimmte Fälle (v. a. Wohngebäude, öffentliche oder dem
            Gemeinwohl dienende Gebäude). Für rein gewerbliche Gebäude gilt
            i. d. R. der Regelsteuersatz. Details & Beispiele liefert das
            BMF-Schreiben. 
          </p>
          <p>
            <strong>Ertragsteuern (AfA):</strong> Für betriebliche Anlagen
            wird in der Praxis häufig eine lineare AfA über 20 Jahre
            (≈ 5 % p. a.) angesetzt; monatsgenaue Absetzung beachten.{" "}
            
          </p>
        </div>

        {/* CTA-Box (gestrichelter Rahmen) */}
        <aside
          className="mt-8 rounded-xl border-2 border-dashed border-slate-300 p-6"
          aria-labelledby="cta"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-slate-700" />
            <h3 id="cta" className={`text-xl font-semibold ${serifClass}`}>
              Kosten-/ROI-Abschätzung für dein Dach anfordern
            </h3>
          </div>
          <form
            className="mt-4 grid gap-3 md:grid-cols-3"
            action="/api/demo"
            method="post"
            aria-label="Kontaktformular"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1b4d2b] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-slate-600"
              >
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1b4d2b] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-600">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#1b4d2b] focus:outline-none"
              />
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[#1b4d2b] px-4 py-2 text-white hover:opacity-95"
              >
                Demo anfordern <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </aside>
      </div>
    </section>

    {/* 7. FAQ */}
    <section id="faq" className="bg-white">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            7) FAQ
          </h2>
        </header>

        <div className="mt-6 space-y-3">
          {faq.map((f, i) => (
            <details
              key={i}
              className="group rounded-md border border-slate-200 bg-slate-50 p-4"
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* 8. Zusammenfassung */}
    <section id="summary" className="bg-slate-50">
      <div className={`${containerClass} py-10 md:py-14`}>
        <header className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serifClass}`}>
            8) Kurzfazit & nächste Schritte
          </h2>
        </header>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="prose prose-slate max-w-none">
            <p>
              Für Gewerbe bleibt PV der günstigste zusätzliche
              Stromerzeuger am eigenen Standort. Speicher verbessern die
              Wirtschaftlichkeit durch höheren Eigenverbrauch und
              Peak-Shaving – vorausgesetzt, Wirkungsgrade und EMS passen.
              EEG 2025 schafft klarere Spielregeln (z. B. negative Preise
              ohne Vergütung), erleichtert aber den Anschluss kleinerer
              Anlagen.{" "}
              <span className="text-slate-500">
                (EEG-Sätze/Regelungen siehe Quellen)
              </span>
            </p>
            <p>
              <strong>Empfohlene Reihenfolge:</strong> Lastprofile →
              EV-Potenzial & Peak-Tarife → Technikkonzept PV + Speicher →
              Netzanschluss & Vergütungsmodell → Finanzierung/Förderung →
              Bau & Betrieb.
            </p>
          </div>
          <aside className="rounded-xl border border-emerald-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[#1b4d2b]" />
              <h3 className={`font-semibold ${serifClass}`}>
                Entscheidungs-Check (60 Sek.)
              </h3>
            </div>
            <ul className="mt-2 grid gap-2 text-sm">
              {[
                "EV-Anteil ohne/mit Speicher ≥ 40 % / ≥ 60 % erreichbar?",
                "Leistungspreise/Peaks: spürbares Sparpotenzial?",
                "Interne CO₂-/ESG-Ziele: PV + Speicher als „Quick Win“?",
                "Finanzierung (KfW 270) & lokale Zuschüsse nutzbar?",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>

    {/* E-E-A-T: Autoren-Bio (+ optional Review) */}
    <section className="bg-white">
      <div className={`${containerClass} py-10`}>
        <div className="rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <img
              src="https://source.unsplash.com/96x96/?portrait,expert"
              alt="Autor"
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h3 className={`text-lg font-semibold ${serifClass}`}>
                Über den Autor
              </h3>
              <p className="text-sm text-slate-700">
                <strong>Lennart F.</strong> – Energie & Growth Consultant.
                8+ Jahre Erfahrung in B2B-Wachstum, Industriekunden und
                Energieprojekten.{" "}
                <a
                  href="https://www.linkedin.com/"
                  className="text-[#1b4d2b] underline"
                >
                  LinkedIn
                </a>
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Reviewed by: <em>(optional) Fachplaner:in Elektrotechnik</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quellenverzeichnis */}
    <section className="bg-slate-50">
      <div className={`${containerClass} py-10`}>
        <h2 className={`text-2xl font-semibold ${serifClass}`}>
          Quellen & Studien (Auswahl)
        </h2>
        <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
          <li>
            Bundesnetzagentur – Anzulegende Werte & EEG-Förderung. 
          </li>
          <li>
            Fraunhofer ISE – Aktuelle Fakten zur Photovoltaik in Deutschland. 
          </li>
          <li>
            Fraunhofer ISE – LCOE-Studie (Kostenbänder & LCOE). 
          </li>
          <li>
            EnBW – Netzentgelte 2025 (Anteil am Strompreis). 
          </li>
          <li>
            SMA – Solarspitzengesetz 2025 (u. a. negative Preise). 
          </li>
          <li>
            BFW – Solarpaket I (vereinfachter Netzanschluss bis 30 kW). 
          </li>
          <li>
            Green-Energy-Law – Direktvermarktungsschwelle bleibt <100 kW. 
          </li>
          <li>
            HTW Berlin – Stromspeicher-Inspektion 2025 (Effizienz/EMS). 
          </li>
          <li>
            DIHK/BVES – Leitfäden & Marktanalysen Gewerbespeicher. 
          </li>
          <li>
            KfW 270 – Erneuerbare Energien – Standard. 
          </li>
          <li>
            BMF – Nullsteuersatz Photovoltaik (§ 12 Abs. 3 UStG) & Anwendung. 
          </li>
          <li>
            Haufe – Lineare AfA 20 Jahre (betriebliche PV). 
          </li>
        </ul>
      </div>
    </section>
  </article>

  {/* Styles (scoped) */}
  <style>{`
    .prose :where(h3):not(:where([class~="not-prose"] *)) {
      color: #0f172a;
      margin-top: 1rem;
      margin-bottom: .5rem;
    }
  `}</style>
</main>
);
}
/* =========================================================
Kleine UI-Komponenten
========================================================= */
function Checklist({ title, items }: { title: string; items: string[] }) {
return (
<section className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<Building2 className="h-5 w-5 text-[#1b4d2b]" />
<h3 className={font-semibold ${serifClass}}>{title}</h3>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
{items.map((t, i) => (
<li key={i} className="flex items-start gap-2">
<PieChart className="mt-0.5 h-4 w-4 text-[#1b4d2b]" />
<span>{t}</span>
</li>
))}
</ul>
</section>
);
}
