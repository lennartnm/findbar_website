"use client";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import {
CheckCircle2,
BatteryCharging,
Building2,
Calculator,
FileText,
Leaf,
Lightning,
BarChart3,
CalendarClock,
Info,
ArrowRight,
ShieldCheck,
Factory,
Sun,
CircleHelp,
Phone,
Mail,
User,
} from "lucide-react";
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ReferenceLine,
} from "recharts";
// ---- Brand styles
const RG600 = "#1b4d2b"; // Racing Green
const RG400 = "#2c6b3f";
const RG300 = "#7ca98e";
const textMuted = "text-slate-600";
const container = "w-full max-w-4xl md:max-w-6xl mx-auto px-6";
const serif = "font-serif";
// ---- Helper: reading time via client-side text scan
function useReadingTime(rootId: string, wpm = 200) {
const [minutes, setMinutes] = React.useState<number | null>(null);
React.useEffect(() => {
const node = document.getElementById(rootId);
if (!node) return;
const text = node.innerText || "";
const words = text.trim().split(/\s+/).length;
setMinutes(Math.max(5, Math.ceil(words / wpm))); // min 5 min
}, [rootId, wpm]);
return minutes;
}
// ---- Sample data for ROI chart (illustrative)
const roiData = [
{ year: "0", cashflow: -290000 },
{ year: "1", cashflow: -245000 },
{ year: "2", cashflow: -197000 },
{ year: "3", cashflow: -148000 },
{ year: "4", cashflow: -98000 },
{ year: "5", cashflow: -42000 },
{ year: "6", cashflow: 14000 },
{ year: "7", cashflow: 76000 },
{ year: "8", cashflow: 138000 },
];
export default function ArticlePVStorage() {
const updated = new Date().toLocaleDateString("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
});
const minutes = useReadingTime("article-root");
// FAQ data for JSON-LD and rendering
const faqItems = [
{
q: "Lohnt sich ein Speicher auch ohne hohe Lastspitzen?",
a: "Ja – neben Peak Shaving erhöht er die Eigenverbrauchsquote und hilft, negative Preisfenster zu überbrücken. Bei flachen Lastprofilen kleiner dimensionieren.",
},
{
q: "Direktvermarktung: Muss ich das als Firma?",
a: "Stand 18.08.2025 gilt die Pflicht in der Regel ab 100 kW installierter Leistung. Prüfe Gesetzesupdates – eine Absenkung der Schwelle wird politisch diskutiert.",
},
{
q: "Welche Lebensdauer darf ich ansetzen?",
a: "PV 25–30 Jahre (Wechselrichter 10–15), Li-Ion-Speicher typ. 10–15 Jahre bzw. 3000–6000 Zyklen. Garantien & Zyklen zählen – TCO rechnen.",
},
{
q: "Wie berücksichtige ich negative Preise im Business Case?",
a: "Mit stündlicher/viertelstündlicher Simulation (Last, PV-Erzeugung, Börsenpreise) und EMS-Strategie. Speicher/Nachladung in günstigen Phasen einplanen.",
},
{
q: "Gibt es Zuschüsse statt Kredit?",
a: "Je nach Bundesland/Programm möglich; auf Bundesebene vor allem EEW-Zuschüsse für Effizienz (BAFA) sowie KfW-Kredite für PV/Speicher.",
},
];
return (
<div className="bg-white text-slate-900">
<Head>
{/* 2) Meta & Head */}
<title>
Photovoltaik & Batteriespeicher im Unternehmen planen (2025) – Kosten,
Amortisation, Förderungen
</title>
<meta name="description" content="Green Energy im Unternehmen: So planst du Photovoltaik und Energiespeicher wirtschaftlich – CAPEX/OPEX, Amortisation, EEG 2025, Förderungen (KfW 270), Praxisbeispiel & Checklisten." />
<link rel="canonical" href="https://www.example.com/blog/photovoltaik-speicher-unternehmen" />
<meta name="robots" content="index,follow" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Photovoltaik & Batteriespeicher im Unternehmen – Wirtschaftlich planen (2025)" />
<meta property="og:description" content="Investition, Amortisation, Förderungen: Der praxisnahe B2B-Guide für PV-Anlagen und kommerzielle Batteriespeicher." />
<meta property="og:image" content="https://source.unsplash.com/1600x900/?solar,rooftop,factory" />
<meta property="og:locale" content="de_DE" />
<meta name="twitter:card" content="summary_large_image" />


    {/* 3) Strukturierte Daten (Schema.org) */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            'Photovoltaik & Batteriespeicher im Unternehmen – Wirtschaftlich planen (2025)',
          description:
            'Investition, Amortisation, Förderungen: So planen Firmen PV-Anlagen und Speicherlösungen wirtschaftlich.',
          inLanguage: 'de-DE',
          author: {
            '@type': 'Person',
            name: 'Lennart Dierkes',
            jobTitle: 'Energie- & B2B-Content-Consultant',
            url: 'https://www.example.com/team/lennart-dierkes',
          },
          publisher: {
            '@type': 'Organization',
            name: 'findbar',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.example.com/logo.png',
            },
          },
          dateModified: new Date().toISOString(),
          image: [
            'https://source.unsplash.com/1600x900/?photovoltaic,industrial',
          ],
          mainEntityOfPage:
            'https://www.example.com/blog/photovoltaik-speicher-unternehmen',
        }),
      }}
    />
    {/* Company Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DeinUnternehmen GmbH',
          url: 'https://www.example.com',
          sameAs: [
            'https://www.linkedin.com/company/example',
            'https://twitter.com/example',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            telephone: '+49-30-000000',
            email: 'sales@example.com',
            areaServed: 'DE',
            availableLanguage: ['de', 'en'],
          },
        }),
      }}
    />
  </Head>

  {/* Article */}
  <article id="article-root">
    {/* 1. H1 */}
    <header className="border-b border-slate-200 bg-white">
      <div className={`${container} py-10 md:py-14`}>
        <h1 className={`text-3xl md:text-5xl font-semibold ${serif}`}>
          Green Energy im Unternehmen – Photovoltaik und Energiespeicher
          sinnvoll einsetzen
        </h1>
        {/* 2. Subhead */}
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Investition, Amortisation, Förderungen: So planst du PV-Anlagen und
          Speicherlösungen wirtschaftlich – mit realistischen Annahmen,
          rechtlichem Update (EEG 2025) und Praxis-Checklisten.
        </p>

        {/* 3. Hero-Bild Platzhalter (mit idealem Prompt) */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="aspect-[16/9] grid place-items-center bg-slate-50 text-slate-600 text-center p-8">
            <div>
              <div className="text-xs uppercase tracking-wider mb-2">Hero – Platzhalter</div>
              <p className="max-w-2xl mx-auto">
                <strong>AI PROMPT (16:9):</strong> "Large industrial rooftop with
                shimmering photovoltaic panels at golden hour, a logistics hall
                and company fleet in the background, battery container on the
                ground, crisp aerial perspective, Germany, modern, clean, high
                dynamic range"
              </p>
            </div>
          </div>
          <figcaption className="px-4 py-3 text-sm text-slate-600 bg-white border-t">
            Titelmotiv: PV-Dachanlage mit Batteriespeicher am Firmenstandort.
          </figcaption>
        </figure>

        {/* 4–6. Author, updated, reading time */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=80"
              alt="Autor: Lennart Dierkes"
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-medium text-slate-900">Lennart Dierkes</div>
              <div className="text-xs">Energie & B2B-Content</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CalendarClock className="h-4 w-4 text-slate-500" />
            <span>
              <strong>Zuletzt aktualisiert:</strong> {updated}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4 text-slate-500" />
            <span>
              <strong>Lesedauer:</strong> {minutes ? `${minutes} Min.` : "…"}
            </span>
          </div>
        </div>

        {/* 7. TL;DR */}
        <aside
          className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4"
          aria-label="Das Wichtigste auf einen Blick"
        >
          <div className="flex items-center gap-2 text-emerald-900">
            <Info className="h-5 w-5" />
            <h2 className="text-base font-semibold">
              Das Wichtigste auf einen Blick
            </h2>
          </div>
          <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" />
              <span>
                <strong>Eigenverbrauch schlägt Einspeisung:</strong> Gewerbestrom
                liegt laut BDEW 07/2025 bei ~18 ct/kWh für KMU – die
                Einspeisevergütung (EEG) liegt deutlich darunter. Eigenverbrauch
                spart am meisten.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" />
              <span>
                <strong>Speicher lohnt bei Lastspitzen & Autarkie:</strong> Peaks
                glätten, Überschüsse nutzen, negative Börsenpreise umgehen – so
                verbessert ein BESS den Business Case.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" />
              <span>
                <strong>EEG 2025 beachten:</strong> Bei <em>negativen
                Strompreisen</em> entfällt die Vergütung zeitweise. Gute
                Energiesteuerung wird wichtiger.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700" />
              <span>
                <strong>Förderung & Finanzierung:</strong> KfW 270 bietet
                zinsgünstige Kredite – zusätzlich Prüfungen regionaler Programme
                & BAFA/EEW-Zuschüsse für Effizienzmaßnahmen.
              </span>
            </li>
          </ul>
        </aside>

        {/* 8. Inhaltsverzeichnis */}
        <nav
          aria-label="Inhaltsverzeichnis"
          className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li><a href="#kap1" className="text-[#1b4d2b]">1. Was ist der Business Case?</a></li>
            <li><a href="#kap2" className="text-[#1b4d2b]">2. Recht & Markt 2025: EEG, Preise, Netze</a></li>
            <li><a href="#kap3" className="text-[#1b4d2b]">3. Planung: Dimensionierung, Lastprofil, Speicher</a></li>
            <li><a href="#kap4" className="text-[#1b4d2b]">4. Wirtschaftlichkeit: CAPEX/OPEX, ROI & Risiken</a></li>
            <li><a href="#kap5" className="text-[#1b4d2b]">5. Förderungen & Finanzierung</a></li>
            <li><a href="#kap6" className="text-[#1b4d2b]">6. Umsetzung: Best Practices & typische Fehler</a></li>
          </ol>
        </nav>
      </div>
    </header>

    {/* 9. Hauptteil */}
    <section id="kap1" className="py-12">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>1. Was ist der Business Case?</h2>
          <p className={textMuted}>
            PV auf dem Firmendach senkt Strombezugskosten und macht unabhängiger
            von volatilen Tarifen. Der Speicher erhöht den Eigenverbrauch und
            reduziert Lastspitzen (Peak Shaving). Ergebnis: planbare Energiekosten
            und bessere Resilienz.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="font-semibold">Kernbegriffe kurz erklärt</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Sun className="h-4 w-4 text-amber-500"/><span><strong>Eigenverbrauch:</strong> Anteil des erzeugten PV-Stroms, den dein Unternehmen direkt nutzt.</span></li>
                <li className="flex items-start gap-2"><BatteryCharging className="h-4 w-4 text-emerald-600"/><span><strong>Peak Shaving:</strong> Speicher puffert Lastspitzen und senkt leistungsabhängige Entgelte.</span></li>
                <li className="flex items-start gap-2"><BarChart3 className="h-4 w-4 text-sky-600"/><span><strong>LCOE:</strong> Stromgestehungskosten deiner PV (€/kWh) über die Lebensdauer.</span></li>
              </ul>
            </div>
            <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <img
                src="https://source.unsplash.com/1600x900/?solar,warehouse"
                alt="PV-Module auf Lagerhallen-Dach"
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="px-4 py-2 text-xs text-slate-600 bg-white">
                Bild: Typisches Gewerbedach mit PV – ideale Dachflächen liefern
                tagsüber hohe Grundlastabdeckung.
              </figcaption>
            </figure>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Teileinspeisung vs. Volleinspeisung vs. Direktvermarktung</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-left">
                      <th className="px-3 py-2">Modell</th>
                      <th className="px-3 py-2">Nutzen</th>
                      <th className="px-3 py-2">Beachte</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2 font-medium">Teileinspeisung</td>
                      <td className="px-3 py-2">Max. Eigenverbrauch; Überschüsse
                        erhalten EEG-Vergütung.</td>
                      <td className="px-3 py-2">Wirtschaftlich häufig bestes
                        Verhältnis; Speicher erhöht Nutzen.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 font-medium">Volleinspeisung</td>
                      <td className="px-3 py-2">Erhöhte Vergütungssätze möglich.</td>
                      <td className="px-3 py-2">Kein Eigenverbrauch – selten für
                        Unternehmen sinnvoll.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 font-medium">Direktvermarktung</td>
                      <td className="px-3 py-2">Vermarktung zum Börsenpreis plus
                        Marktprämie.</td>
                      <td className="px-3 py-2">Pflicht ab 100 kW (Stand 08/2025);
                        Diskussion über künftige Absenkung. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                Quellen im Text: Bundesnetzagentur / BMWK zu EEG-Vergütung &
                Direktvermarktung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="kap2" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            2. Recht & Markt 2025: EEG, Preise, Netze
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold">EEG & Vergütung</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Lightning className="h-4 w-4 text-orange-600"/><span>
                  <strong>Vergütungssätze</strong> werden halbjährlich angepasst; die
                  <a className="text-[#1b4d2b] underline ml-1" href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html" target="_blank" rel="noopener">Bundesnetzagentur</a> veröffentlicht die jeweils gültigen Werte inkl. Unterscheidung zwischen Teile- und Volleinspeisung.
                </span></li>
                <li className="flex items-start gap-2"><CircleHelp className="h-4 w-4 text-indigo-600"/><span>
                  <strong>Negative Strompreise:</strong> Seit Anfang 2025 entfällt die EEG-
                  Vergütung zeitanteilig bei negativen Spotmarktpreisen ("Nullvergütung").
                  Ein Speicher hilft, diese Zeitfenster zu überbrücken. <a className="text-[#1b4d2b] underline" href="https://www.roedl.de/themen/stadtwerke-kompass/2025/03/das-solarspitzengesetz-zweitausendfuenfundzwanzig-wichtige-aenderungen-fuer-erneuerbare-energie-anlagen" target="_blank" rel="noopener">Rechtliche Einordnung (Rödl & Partner)</a> und
                  <a className="text-[#1b4d2b] underline ml-1" href="https://www.netztransparenz.de/de-de/Erneuerbare-Energien-und-Umlagen/EEG/Transparenzanforderungen/Marktpr%C3%A4mie/Negativer-Spotmarktpreis-%C3%9Cbersichtstabellen" target="_blank" rel="noopener">Übersichtstabellen der ÜNB</a>.
                </span></li>
                <li className="flex items-start gap-2"><FileText className="h-4 w-4 text-emerald-700"/><span>
                  <strong>Direktvermarktung:</strong> Pflicht i. d. R. ab 100 kW
                  (Stand: 18.08.2025). Vereinfachungen für kleinere Anlagen sind im
                  <a className="text-[#1b4d2b] underline ml-1" href="https://www.bmwk.de/Redaktion/DE/Artikel/Energie/solarpaket-1.html" target="_blank" rel="noopener">Solarpaket I (BMWK)</a> beschrieben; eine weitergehende Absenkung der Schwelle wird diskutiert.
                </span></li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold">Marktdaten & Preise</h3>
              <p className="mt-2 text-sm text-slate-700">
                Laut <a className="text-[#1b4d2b] underline" href="https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/" target="_blank" rel="noopener">BDEW-Strompreisanalyse 07/2025</a> liegen Neuabschlüsse für kleine bis mittlere
                Industriebetriebe bei rund <strong>18 ct/kWh</strong> (inkl. Stromsteuer).
                Eurostat zeigt für Nicht-Haushaltskunden EU-weit fallende Preise bis H1/2024
                und leichte Erholung H2/2024.
              </p>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">
                <li>
                  <a className="text-[#1b4d2b] underline" href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Electricity_price_statistics" target="_blank" rel="noopener">Eurostat: Electricity price statistics</a>
                </li>
                <li>
                  <a className="text-[#1b4d2b] underline" href="https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html" target="_blank" rel="noopener">Fraunhofer ISE – Aktuelle Fakten (Fassung 18.08.2025)</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold">Netzentgelte & Standortfaktoren</h3>
              <p className="text-sm text-slate-700 mt-2">
                Die Bundesnetzagentur hat ein neues Verrechnungsmodell für 2025
                eingeführt, das regionale Netzkosten fairer verteilt. Für energieintensive
                Betriebe bleiben lokale Netzentgelte dennoch ein Kostenfaktor – Peak Shaving
                kann hier besonders attraktiv sein.
              </p>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">
                <li>
                  <a className="text-[#1b4d2b] underline" href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Aktuelles/VerteilungNetzkosten/start.html" target="_blank" rel="noopener">BNetzA – Verteilung Netzkosten 2025</a>
                </li>
                <li>
                  <a className="text-[#1b4d2b] underline" href="https://www.agora-energiewende.de/fileadmin/Projekte/2025/2025-10_DE_Stromnetzentgelte/A-EW_370_Stromnetzentgelte-gut-und-g%C3%BCnstig_WEB.pdf" target="_blank" rel="noopener">Agora Energiewende – Analyse 07/2025</a>
                </li>
              </ul>
            </div>

            <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="aspect-[16/9] grid place-items-center bg-slate-50 text-slate-600 text-center p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">Grafik – Platzhalter</div>
                  <p className="text-sm max-w-xl mx-auto">
                    <strong>AI PROMPT (16:9):</strong> "Infographic showing PV self-consumption vs. feed-in revenue vs. battery peak-shaving savings for a German SME, clean minimal style, racing green accents"
                  </p>
                </div>
              </div>
              <figcaption className="px-4 py-2 text-xs text-slate-600 bg-white">
                Visualisierung: Kosten- und Nutzenhebel im Vergleich.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="kap3" className="py-12">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            3. Planung: Dimensionierung, Lastprofil, Speicher
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-semibold">Schritt für Schritt</h3>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Lastprofil analysieren:</strong> 15-min-Werte, Grund- vs. Spitzenlast, Wochenenden/Schichten.</li>
              <li><strong>Dach & Elektrik prüfen:</strong> Statik, Verschattung, Fluchtwege, Netzanschlussleistung.</li>
              <li><strong>PV-Größe festlegen:</strong> Eigenverbrauchsquote optimieren (typ. 60–90&nbsp;%).</li>
              <li><strong>Speicher auslegen:</strong> Ziel: Lastspitzen kappen, Abend-/Morgenlast decken, negative Preisfenster puffern.</li>
              <li><strong>Betriebsstrategie:</strong> Regelbasiert oder EMS/AI (Preis-, Wetter- und Produktionsprognosen).</li>
            </ol>

            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
              <h4 className="font-semibold flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700"/>Normen & Sicherheit</h4>
              <p className="text-sm mt-2 text-slate-700">
                Für stationäre Speicher gelten u. a. <strong>VDE-AR-E&nbsp;2510-50</strong> (Sicherheitsanforderungen) und VDE-FNN-Hinweise zum Anschluss im
                Niederspannungsnetz. Für größere Systeme beachten Unternehmen zudem
                Versichererstandards (z.&nbsp;B. FM Global Data Sheet&nbsp;5-33) und baurechtliche
                Vorgaben (Brandschutz, Aufstellräume, Abstände).
              </p>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">
                <li><a className="text-[#1b4d2b] underline" href="https://www.dke.de/de/normen-standards/dokument?id=7090957&type=dke%7Cdokument" target="_blank" rel="noopener">VDE-AR-E&nbsp;2510-50</a></li>
                <li><a className="text-[#1b4d2b] underline" href="https://www.vde.com/resource/blob/2322542/8c4409de40eb1e69555cfc7e075fd781/vde-fnn-hinweis--anschluss-und-betrieb-von-speichern-am-niederspannungsnetz---2024--data.pdf" target="_blank" rel="noopener">VDE-FNN Hinweis „Speicher im Niederspannungsnetz“ (07/2024)</a></li>
                <li><a className="text-[#1b4d2b] underline" href="https://fireprotectionsupport.nl/wp-content/uploads/2024/03/FMDS0533-2024-01.pdf" target="_blank" rel="noopener">FM Global&nbsp;5-33 (2024)</a></li>
              </ul>
            </div>
          </div>

          <div>
            <figure className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src="https://source.unsplash.com/1600x900/?battery,energy,container"
                alt="Batteriespeicher-Container am Gewerbestandort"
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="px-4 py-2 text-xs text-slate-600 bg-white">
                Bild: Gewerblicher Batteriespeicher – Peak Shaving & Flexibilität.
              </figcaption>
            </figure>

            <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Dimensionierungs-Tipps (Daumenregeln)</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>PV-Leistung ≈ 60–80&nbsp;% der Anschlussleistung bei hoher Tagesgrundlast.</li>
                <li>Speichergröße: 0,5–1,0&nbsp;× täglicher PV-Überschuss <em>oder</em> so ausgelegt, dass die höchsten 50&nbsp;% der Peaks geglättet werden.</li>
                <li>Entladeleistung ≥ 50&nbsp;% der kWp-Leistung für wirksames Peak Shaving.</li>
                <li>DoD/Alterung in TCO berücksichtigen (Zyklen, Restkapazität).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="kap4" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            4. Wirtschaftlichkeit: CAPEX/OPEX, ROI & Risiken
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-semibold">Beispielrechnung (vereinfachtes Modell)</h3>
            <div className="mt-3 rounded-xl border border-slate-200 p-4 bg-white text-sm">
              <ul className="space-y-2">
                <li><strong>Ausgangslage:</strong> 300&nbsp;kWp Dach-PV, 400&nbsp;kWh/300&nbsp;kW-BESS, Jahreslast 1,2&nbsp;GWh.</li>
                <li><strong>Erzeugung:</strong> 300&nbsp;kWp × 950&nbsp;kWh/kWp ≈ 285&nbsp;MWh/a.</li>
                <li><strong>Eigenverbrauchsquote:</strong> 75&nbsp;% → 214&nbsp;MWh/a; Einspeisung 71&nbsp;MWh/a.</li>
                <li><strong>Ersparnis Strombezug:</strong> 214&nbsp;MWh × 0,18&nbsp;€/kWh (BDEW) ≈ 38.5&nbsp;T€/a.</li>
                <li><strong>Einspeiseerlös:</strong> 71&nbsp;MWh × 0,078&nbsp;€/kWh (Richtwert kleine Dächer; aktuelle Werte BNetzA prüfen) ≈ 5.5&nbsp;T€/a.</li>
                <li><strong>Peak-Shaving/Nebeneffekte:</strong> konservativ 10–20&nbsp;T€/a (leistungsabhängige Entgelte, Lastspitzen, Eigenverbrauchsoptimierung).</li>
                <li><strong>CAPEX-Daumen:</strong> PV ~ 850–1.050&nbsp;€/kWp; BESS ~ 350–600&nbsp;€/kWh (standort-/projektabhängig).</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Hinweis: Werte sind illustrativ. Prüfe die <em>aktuellen</em> Vergütungssätze
                der <a className="text-[#1b4d2b] underline" href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html" target="_blank" rel="noopener">BNetzA</a> und unternehmensspezifische Netzentgelte.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Cashflow-Kurve (vereinfachte Annahmen)</h3>
              <div className="mt-3 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiData}>
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                    <Tooltip formatter={(v: number) => `${(v/1000).toFixed(0)}k €`} />
                    <ReferenceLine y={0} stroke="#64748b" />
                    <Bar dataKey="cashflow" fill={RG600} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Payback in Jahr&nbsp;6 im Beispiel (ohne Steuer-/Inflationseffekte). Speicher
                verschiebt Erträge in Zeiten niedriger/negativer Börsenpreise.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Risiken & wie du sie mitigierst</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><strong>Negative Preise:</strong> EMS so konfigurieren, dass Einspeisung
                  in Nullvergütungs-Zeitfenstern minimiert wird; Speicher/Lastverschiebung
                  priorisieren.</li>
                <li><strong>Fehl-Dimensionierung:</strong> Erst Lastanalyse, dann PV/Storage –
                  Autarkieziele definieren (z.&nbsp;B. 60&nbsp;%).</li>
                <li><strong>Technikrisiken:</strong> VDE-AR-E&nbsp;2510-50, Brandschutz, Wartung,
                  Ersatzteil-/Servicekonzepte vertraglich fixieren.</li>
                <li><strong>PPA/Marktrisiko:</strong> Bei Direktvermarktung Preisbandbreiten,
                  Sicherheiten und Regelenergieanforderungen beachten.</li>
              </ul>
            </div>

            <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <img
                src="https://source.unsplash.com/1600x900/?solar,inverter,room"
                alt="Wechselrichter- und Speicherraum im Unternehmen"
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="px-4 py-2 text-xs text-slate-600 bg-white">
                Bild: Technikraum – saubere Kabelführung & Zugänglichkeit erleichtern
                Betrieb und Service.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-700">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p>
              <strong>Pro-Tipp (Interne Links):</strong> Lies weiter zu
              <a className="text-[#1b4d2b] underline ml-1" href="/blog/energiemanagement-systeme-ems">Energiemanagement & Flexibilität</a>,
              <a className="text-[#1b4d2b] underline ml-1" href="/blog/unternehmens-ppa">Unternehmens-PPA</a>
              und <a className="text-[#1b4d2b] underline ml-1" href="/blog/lastspitzen-senken">Lastspitzen senken</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="kap5" className="py-12">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            5. Förderungen & Finanzierung
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Bundesprogramme</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <strong>KfW&nbsp;270 – Erneuerbare Energien Standard:</strong> zinsgünstige
                  Darlehen für PV/Speicher. <a className="text-[#1b4d2b] underline" href="https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Erneuerbare-Energien-Standard-%28270%29/" target="_blank" rel="noopener">Programmseite</a> •
                  <a className="text-[#1b4d2b] underline ml-1" href="https://www.kfw.de/PDF/Download-Center/F%C3%B6rderprogramme-%28Inlandsf%C3%B6rderung%29/PDF-Dokumente/6000000178_M_270_EE-Standard.pdf" target="_blank" rel="noopener">Merkblatt 05/2025</a>
                </li>
                <li>
                  <strong>EEW (BAFA):</strong> Zuschüsse/Kredite für Energie- & Ressourceneffizienz
                  (z.&nbsp;B. MSR, Abwärme, Elektrifizierung). <a className="text-[#1b4d2b] underline" href="https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/energieeffizienz-u-prozesswaerme-zuschuss-5.html" target="_blank" rel="noopener">Förderdatenbank</a>
                </li>
                <li>
                  <strong>Landes-/Kommunalprogramme:</strong> je nach Bundesland für Speicher,
                  Netzintegration oder PV-Plus (Transformationskonzepte, Ladeinfrastruktur).
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Batterierecht & ESG</h3>
              <p className="text-sm mt-2 text-slate-700">
                Die neue EU-Batterieverordnung (2023/1542) bringt u. a. CE-Kennzeichen,
                Vorgaben zu Haltbarkeit/Reparierbarkeit und perspektivisch einen
                <em> digitalen Batteriepass</em>. Für Unternehmen wichtig mit Blick auf ESG,
                Einkauf und Rücknahme.
              </p>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">
                <li><a className="text-[#1b4d2b] underline" href="https://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX%3A32023R1542" target="_blank" rel="noopener">Verordnung (EU)&nbsp;2023/1542</a></li>
                <li><a className="text-[#1b4d2b] underline" href="https://www.vde.com/batteries" target="_blank" rel="noopener">VDE Renewables – Battery Testing</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Checkliste: Förderfit in 7 Punkten</h3>
              <ol className="mt-2 list-decimal pl-5 space-y-2 text-sm">
                <li>Last- und Erzeugungsdaten sauber dokumentieren.</li>
                <li>EMS-Konzept (Steuerbarkeit, Smart Meter) beilegen.</li>
                <li>Wirtschaftlichkeitsrechnung & Sensitivitäten (Preis, Degradation).</li>
                <li>Netzbetreiber-Rückmeldung/Angebot beifügen.</li>
                <li>EEG-Vergütung/Veräußerungsform wählen (Teil/Volleinspeisung, Direktvermarktung).</li>
                <li>Genehmigungen/Brandschutz abstimmen.</li>
                <li>Eigenmittel/Bankgespräche parallel anstoßen.</li>
              </ol>
            </div>

            <blockquote className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-sm italic">
              „Europaweit wächst der Speichermarkt stark – bis 2029 rechnet
              SolarPower Europe mit einer Ver-6-fachung. Für Unternehmen wird Flexibilität
              damit zum Wettbewerbsvorteil.“ – Bezug: SPE, Market Outlook 05/2025
              (<a className="text-[#1b4d2b] underline" href="https://www.solarpowereurope.org/insights/outlooks/european-market-outlook-for-battery-storage-2025-2029/detail" target="_blank" rel="noopener">Quelle</a>)
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <section id="kap6" className="py-12">
      <div className={container}>
        <header className="mb-6">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            6. Umsetzung: Best Practices & typische Fehler
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Best Practices</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Early Involvement von Netzbetreiber & Brandschutz.</li>
                <li>EMS mit Preis-, Wetter- und Produktionsprognosen koppeln.</li>
                <li>SLAs für Verfügbarkeit, Reaktionszeiten und Ersatzteilhaltung.</li>
                <li>Monitoring/Reporting (Transparenz für ESG & Energieaudit).</li>
                <li>Interne Kommunikation: Standortteams früh einbinden.</li>
              </ul>
            </div>
            <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4">
              <h3 className="font-semibold">Typische Fehler</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Nur kWp „maximieren“, statt auf Eigenverbrauch & Peaks zu optimieren.</li>
                <li>Negative Preisfenster ignorieren → Erlöseinbußen ohne Speicher.</li>
                <li>Brandschutz/Normen erst am Ende betrachten.</li>
                <li>Zu knappe Annahmen bei Degradation & Wirkungsgraden.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Mini-Projektplan (12–20 Wochen)</h3>
              <ol className="mt-2 list-decimal pl-5 space-y-2 text-sm">
                <li>KW&nbsp;1–3: Datenaufnahme, Lastprofil, Standortprüfung.</li>
                <li>KW&nbsp;3–6: Vorplanung, Netzgespräch, CAPEX-/OPEX-Modell.</li>
                <li>KW&nbsp;6–10: Genehmigungen, Ausschreibung, Förderanträge.</li>
                <li>KW&nbsp;10–16: Ausführung, EMS-Einrichtung, Probebetrieb.</li>
                <li>ab KW&nbsp;16: Monitoring, Optimierung, Reporting.</li>
              </ol>
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-white">
              <h3 className="font-semibold">Interner Champion gesucht</h3>
              <p className="text-sm text-slate-700">
                Benenne eine verantwortliche Person (Technik/Facility/Einkauf), die
                Stakeholder zusammenbringt, Meilensteine treibt und Entscheidungen
                vorbereitet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 10. FAQ */}
    <section id="faq" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className={container}>
        <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((f, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="font-medium cursor-pointer flex items-center justify-between">
                <span>{f.q}</span>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}

          {/* FAQPage structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqItems.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>

    {/* 11. Zusammenfassung */}
    <section id="summary" className="py-12">
      <div className={container}>
        <header className="mb-4">
          <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>
            Zusammenfassung: So setzt du PV & Speicher wirtschaftlich ein
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div className="rounded-xl border border-slate-200 p-4 bg-white">
            <h3 className="font-semibold">Kurzfazit</h3>
            <p className="mt-2 text-slate-700">
              Der Business Case steht und fällt mit dem <strong>Eigenverbrauch</strong>.
              Speicherlösungen erhöhen ihn und reduzieren <strong>Leistungsspitzen</strong>.
              Rechtlich sind <strong>EEG-Vergütung</strong>, Direktvermarktungs-Regeln und
              <strong>negative Strompreise</strong> zu beachten. Mit sauberer
              <strong>Lastanalyse</strong>, realistischer Dimensionierung und Fördermix
              (KfW/EEW) erreichst du in vielen Projekten <strong>Amortisation &lt; 7&nbsp;Jahre</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
            <h3 className="font-semibold">Nächste Schritte</h3>
            <ol className="mt-2 list-decimal pl-5 space-y-1">
              <li>15-Min-Lastdaten sammeln &amp; Grundlast bestimmen.</li>
              <li>PV-/Speicher-Potenzial und Dachstatik prüfen.</li>
              <li>EMS-Strategie inkl. Preis-/Wetterprognosen planen.</li>
              <li>Förder- &amp; Finanzierungsoptionen klären (KfW&nbsp;270, EEW).</li>
              <li>Angebote einholen, Projektplan starten.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    {/* 12. CTA-Box mit Formular */}
    <section id="cta" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className={`${container} max-w-3xl`}>
        <aside className="rounded-xl border border-dashed border-emerald-300 bg-white p-6">
          <div className="flex items-start gap-3">
            <div className="shrink-0">
              <Building2 className="h-6 w-6 text-emerald-700" />
            </div>
            <div className="w-full">
              <h2 className={`text-xl font-semibold ${serif}`}>
                Kostenfreie Erstberatung: PV &amp; Speicher für dein Unternehmen
              </h2>
              <p className="mt-1 text-sm text-slate-700">
                Wir prüfen Lastprofil, Potenzial und Förderoptionen – unverbindlich.
                Trag dich ein, wir melden uns binnen 1–2 Werktagen.
              </p>

              <form
                className="mt-4 grid gap-3 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const payload = Object.fromEntries(data.entries());
                  console.log("CTA form submit:", payload);
                  alert("Danke! Wir melden uns kurzfristig.");
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-slate-700">Name</span>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="Vor- und Nachname"
                      aria-label="Name"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-slate-700">Telefon</span>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="+49 …"
                      aria-label="Telefon"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-1 sm:col-span-2">
                  <span className="text-xs font-medium text-slate-700">E-Mail</span>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                      placeholder="name@firma.de"
                      aria-label="E-Mail"
                    />
                  </div>
                </label>

                <div className="sm:col-span-2 flex items-start gap-2 text-xs text-slate-600">
                  <input
                    id="privacy"
                    required
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-400"
                    aria-required="true"
                  />
                  <label htmlFor="privacy">
                    Ich bin einverstanden, dass meine Angaben zur Kontaktaufnahme
                    verwendet werden. Hinweise in der{" "}
                    <a href="/datenschutz" className="underline text-[#1b4d2b]">
                      Datenschutzerklärung
                    </a>
                    .
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-[#1b4d2b] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#165a2d] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    Demo anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </section>

    {/* 13. E-E-A-T: Autoren-Bio */}
    <section id="author" className="py-12">
      <div className={`${container} max-w-3xl`}>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80"
              alt="Autor: Lennart Dierkes"
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h3 className={`text-lg font-semibold ${serif}`}>Lennart Dierkes</h3>
              <p className="text-sm text-slate-700">
                Energie- &amp; B2B-Content-Consultant. 8+ Jahre Erfahrung mit
                industriellen Energieprojekten, u.&nbsp;a. PV, Speicher, Flexibilität.
                <a
                  href="https://www.example.com/team/lennart-dierkes"
                  className="ml-1 underline text-[#1b4d2b]"
                >
                  Profil
                </a>{" "}
                •{" "}
                <a
                  href="https://www.linkedin.com/in/example"
                  className="underline text-[#1b4d2b]"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <em>Reviewed by:</em> Dr.&nbsp;M. Schneider (Energiewirtschaft), Stand: {updated}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 14. Quellenverzeichnis */}
    <section id="quellen" className="py-12 bg-slate-50 border-y border-slate-200">
      <div className={`${container} max-w-3xl`}>
        <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>Quellen</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>
            Bundesnetzagentur – EEG-Förderung &amp; Vergütung:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html" target="_blank" rel="noopener">bnetza.de</a>
          </li>
          <li>
            ÜNB – Negative Spotmarktpreise (Übersichtstabellen):{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.netztransparenz.de/de-de/Erneuerbare-Energien-und-Umlagen/EEG/Transparenzanforderungen/Marktpr%C3%A4mie/Negativer-Spotmarktpreis-%C3%9Cbersichtstabellen" target="_blank" rel="noopener">netztransparenz.de</a>
          </li>
          <li>
            BMWK – Solarpaket I:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.bmwk.de/Redaktion/DE/Artikel/Energie/solarpaket-1.html" target="_blank" rel="noopener">bmwk.de</a>
          </li>
          <li>
            BDEW Strompreisanalyse:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/" target="_blank" rel="noopener">bdew.de</a>
          </li>
          <li>
            Eurostat – Electricity price statistics:{" "}
            <a className="underline text-[#1b4d2b]" href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Electricity_price_statistics" target="_blank" rel="noopener">ec.europa.eu</a>
          </li>
          <li>
            Fraunhofer ISE – Aktuelle Fakten zur Photovoltaik:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html" target="_blank" rel="noopener">ise.fraunhofer.de</a>
          </li>
          <li>
            KfW&nbsp;270 – Programm &amp; Merkblatt:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Erneuerbare-Energien-Standard-%28270%29/" target="_blank" rel="noopener">kfw.de</a>
          </li>
          <li>
            EEW/BAFA – Effizienzprogramme:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Bund/BMWi/energieeffizienz-u-prozesswaerme-zuschuss-5.html" target="_blank" rel="noopener">foerderdatenbank.de</a>
          </li>
          <li>
            VDE-AR-E&nbsp;2510-50; VDE-FNN Hinweis Speicher (07/2024); FM Global 5-33 (2024)
          </li>
          <li>
            SolarPower Europe – European Market Outlook for Battery Storage 2025–2029:{" "}
            <a className="underline text-[#1b4d2b]" href="https://www.solarpowereurope.org/insights/outlooks/european-market-outlook-for-battery-storage-2025-2029/detail" target="_blank" rel="noopener">solarpowereurope.org</a>
          </li>
        </ul>
      </div>
    </section>

    {/* 15. Mini-Glossar */}
    <section id="glossar" className="py-12">
      <div className={`${container} max-w-3xl`}>
        <h2 className={`text-2xl md:text-3xl font-semibold ${serif}`}>Mini-Glossar</h2>
        <dl className="mt-4 grid gap-4">
          <div>
            <dt className="font-semibold">Eigenverbrauch</dt>
            <dd className="text-sm text-slate-700">
              Anteil des erzeugten PV-Stroms, der direkt am Standort genutzt wird.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Peak Shaving</dt>
            <dd className="text-sm text-slate-700">
              Glättung von Leistungsspitzen durch Batterien, um Netzentgelte zu senken.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">LCOE</dt>
            <dd className="text-sm text-slate-700">
              Levelized Cost of Electricity – durchschnittliche Stromgestehungskosten (€/kWh).
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Direktvermarktung</dt>
            <dd className="text-sm text-slate-700">
              Verkauf von Strom über den Marktpreis plus Marktprämie anstelle fester EEG-Sätze.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">EMS</dt>
            <dd className="text-sm text-slate-700">
              Energiemanagementsystem zur Prognose-basierten Steuerung von PV, Speicher und Lasten.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </article>

  {/* Footer */}
  <footer className="border-t border-slate-200 py-10">
    <div className={`${container} flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}>
      <div className="text-sm text-slate-600">
        © {new Date().getFullYear()} DeinUnternehmen GmbH • Alle Rechte vorbehalten
      </div>
      <nav className="flex items-center gap-4 text-sm">
        <a href="/impressum" className="hover:text-slate-900">Impressum</a>
        <a href="/agb" className="hover:text-slate-900">AGB</a>
        <a href="/datenschutz" className="hover:text-slate-900">Datenschutz</a>
      </nav>
    </div>
  </footer>
</div>

);
}
