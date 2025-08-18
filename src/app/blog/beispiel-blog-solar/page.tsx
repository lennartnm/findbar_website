import Head from "next/head";
import {
CheckCircle2,
ShieldCheck,
Gauge,
PiggyBank,
Battery,
Sun,
Factory,
Plug,
Landmark,
BadgeEuro,
ArrowRight,
Info,
CalendarClock,
Timer,
LineChart,
Leaf,
Calculator,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/* =========================================================================
Helper
========================================================================= */
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
const racingGreen = "from-emerald-700 to-emerald-500";
const accent = "text-emerald-700";
/* =========================================================================
Content Data
========================================================================= */
const author = {
name: "Jonas Becker",
role: "Energie- & Nachhaltigkeitsberater (10+ Jahre Industrieerfahrung)",
image:
"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&q=80&crop=faces&fit=crop",
linkedin: "https://www.linkedin.com/in/jonas-becker/",
};
const reviewer = {
name: "Dr. Katharina Meier",
role: "Energieökonomin & Regulatorik-Expertin",
linkedin: "https://www.linkedin.com/in/katharina-meier/",
};
const company = {
name: "Deine Firma GmbH",
url: "https://www.deinefirma.de",
logo:
"https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=256&h=256&q=80&fit=crop&crop=faces",
};
// Sections used for ToC and reading time (strings only). Keep ids stable!
const sections = [
{
id: "grundlagen",
title: "PV & Batteriespeicher: Grundlagen für Entscheider",
content:
"Photovoltaik (PV) wandelt Sonnenlicht direkt in elektrische Energie um. Im Unternehmen steigert PV vor allem die Wirtschaftlichkeit durch Eigenverbrauch: Jede selbst genutzte Kilowattstunde ersetzt teuren Netzstrom. Batteriespeicher erhöhen die Eigenverbrauchsquote, verschieben Strom in Zeiten mit höherem Bedarf (Lastverschiebung) und können Lastspitzen kappen (Peak Shaving). Für RLM-Kunden mit Leistungspreisen kann das Netzentgelte reduzieren. Wichtig ist die Unterscheidung von kWp (Generatorleistung) und kWh (Energie). Der Business Case entsteht aus dem Delta zwischen LCOE (Stromgestehungskosten aus PV), vermiedenen Netzstromkosten und ggf. Einspeisevergütung.",
},
{
id: "status-quo",
title: "Markt & Preisniveau 2025: Warum sich PV fast überall rechnet",
content:
"Der PV-Markt wächst rasant; in Deutschland wurden 2024 laut Fraunhofer ISE rund 16,9 GWp neu installiert. Die LCOE von PV liegen hierzulande typischerweise im einstelligen bis niedrigen zweistelligen Cent-Bereich pro kWh – deutlich unter typischen Gewerbestrompreisen. Batteriespeicher sind 2024/25 deutlich günstiger geworden; sinkende Batteriekosten stärken Peak-Shaving- und Eigenverbrauchs-Use-Cases. Gleichzeitig gelten für neue Anlagen Einspeisevergütungen (EEG), die vierteljährlich angepasst werden und die Wirtschaftlichkeit von Überschusseinspeisung verbessern.",
},
{
id: "business-case",
title: "Wirtschaftlich rechnen: Von Lastprofil bis CAPEX/OPEX",
content:
"Der wirtschaftliche Sweet Spot entsteht, wenn PV-Erzeugung zum Lastprofil des Standorts passt und ein Speicher gezielt Spitzen glättet. Kerneingaben sind: Lastgang (15-min-Werte), verfügbare Dach-/Flächen (Statik, Verschattung), CAPEX pro kWp/kWh, Finanzierung (Eigen-/Fremdkapital, KfW-Kredite), Strompreisstruktur (Arbeitspreis, Leistungspreis, Umlagen), Einspeisemodelle (Teil- vs. Volleinspeisung), Wartung und Degradation. Ein konservativer Business Case modelliert unterschiedliche Szenarien für Strompreis, PV-Ertrag und Speichernutzung.",
},
{
id: "technik",
title: "Technikentscheidungen: AC- oder DC-Kopplung, EMS & Sicherheit",
content:
"Für Unternehmen sind robuste, wartbare Systeme entscheidend. AC-gekoppelte Speicher sind flexibel nachrüstbar und für Peak Shaving bewährt; DC-Kopplung minimiert Wandlungsverluste und eignet sich oft bei Neubau/Retrofit der PV-Anlage. Das Energiemanagementsystem (EMS) steuert Eigenverbrauchsoptimierung, Peak Shaving, Ladeinfrastruktur und ggf. Notstrom. Safety: normgerechte Brandschutz- und Abschaltkonzepte, Zellchemie (oft LFP) mit gutem Sicherheitsprofil, redundant ausgelegte Kommunikation und Monitoring.",
},
{
id: "regulierung",
title: "Recht, Förderung & Tarife: Was du 2025 im Blick haben musst",
content:
"EEG-Einspeisevergütungen sichern Erlöse für Überschuss- oder Volleinspeisung über 20 Jahre; die konkreten Sätze variieren. Auf Bundesebene sind PV und Speicher 2025 v. a. über zinsgünstige Kredite (KfW 270/„Erneuerbare Energien – Standard“) finanzierbar. Für größere Verbraucher beeinflussen Netzentgelte (Arbeitspreis + ggf. Leistungspreis) sowie Umlagen wie der Aufschlag für besondere Netznutzung (ehem. §19 StromNEV-Umlage) den Business Case – Peak Shaving kann hier spürbar entlasten.",
},
{
id: "fehler",
title: "Typische Fehler & Risiken – und wie du sie vermeidest",
content:
"Häufige Fehler: falsche Dimensionierung (zu kleine PV oder zu großer Speicher), fehlendes Peak-Shaving-Konzept bei RLM-Tarifen, zu optimistische Ertragsannahmen, unklare Verantwortlichkeiten im Betrieb oder fehlende Wartungsbudgets. Gegenmittel: sauberer Datencheck des Lastgangs, konservative Szenarien, klarer Wartungs- & Sicherheitsplan, Referenzprojekte und belastbare SLAs.",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(14, Math.ceil(wordCount / 180)); // 180 wpm conservative
/* =========================================================================
UI Components (fixed style from example)
========================================================================= */
const TLDRItem = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => (
<li className="flex items-start gap-3"> <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden /> <span>{children}</span> </li> );
const CheckLi = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-2"> <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden /> <span className="flex-1">{children}</span> </li> );
import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

const accent = "text-emerald-700";
const racingGreen = "from-emerald-700 to-emerald-500";

export const TLDRItem = ({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: ReactNode;
}) => (
  <li className="flex items-start gap-3">
    <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden />
    <span>{children}</span>
  </li>
);

export const CheckLi = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden />
    <span className="flex-1">{children}</span>
  </li>
);

/** <-- Hier lag der Fehler: fehlende Backticks um den Template-String */
export const Pill = ({ children }: { children: ReactNode }) => (
  <span
    className={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}
  >
    {children}
  </span>
);

const Anchor = ({ id }: { id: string }) => <div id={id} aria-hidden className="pt-24 -mt-24" />;
/* =========================================================================
Simple static SVG chart – Vergleich ct/kWh (Beispielwerte 2025)
========================================================================= */
const BusinessCaseChart = () => {
// Example values informed by cited sources (see captions & text)
const items = [
{ k: "Netzstrom (KMU neu, 2025)", v: 18.0 }, // BDEW Mittelwert KMU neuabschlüsse
{ k: "PV LCOE (Spanne, Mitte)", v: 8.0 }, // Fraunhofer ISE LCOE range midpoint
{ k: "EEG Teileinspeisung", v: 7.86 }, // 1.8.2025–31.1.2026
{ k: "EEG Volleinspeisung", v: 12.6 },
];
const max = 22;
const barH = 18;
const rowH = 36;
const padTop = 12;
const width = 720;
const left = 220;
const right = width - 20;
const scale = (v: number) => (right - left) * (v / max);
return (
<figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
<svg
viewBox={0 0 ${width} ${items.length * rowH + padTop + 8}}
role="img"
aria-label="Diagramm: Beispielwerte in Cent/kWh – Netzstrompreis (KMU), PV-LCOE (Mitte der Spanne), EEG-Vergütungen 2025"
>
<defs>
<linearGradient id="g-emerald" x1="0" x2="1">
<stop offset="0%" stopColor="#047857" />
<stop offset="100%" stopColor="#10b981" />
</linearGradient>
</defs>
{items.map((row, i) => {
const y = padTop + i * rowH;
return (
<g key={row.k}>
<text x={10} y={y + barH - 2} className="fill-zinc-700" fontSize="12">
{row.k}
</text>
<rect x={left} y={y} width={scale(row.v)} height={barH} fill="url(#g-emerald)" rx="6" />
<text
x={left + scale(row.v) + 6}
y={y + barH - 4}
fontSize="11"
className="fill-emerald-700"
>
{row.v.toFixed(2)}
</text>
</g>
);
})}
</svg>
<figcaption className="mt-2 text-sm text-zinc-600">
Beispielhafte Orientierung für 2025: KMU-Netzstrom (BDEW-Mittel neu: ~18 ct/kWh),
PV-LCOE (DE, mittig aus Spanne), EEG-Vergütung Teil-/Volleinspeisung (ab 1.08.2025). Werte
variieren je nach Standort, Größe & Tarif. Quellen im Text verlinkt.
</figcaption>
</figure>
);
};
/* =========================================================================
Glossary Row
========================================================================= */
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
/* =========================================================================
Page
========================================================================= */
export default function Article() {
const updated = formatDateDE();
const title =
"Green Energy im Unternehmen: Photovoltaik & Batteriespeicher wirtschaftlich planen";
const description =
"PV & Speicher im Unternehmen: Business Case, Peak Shaving, Förderungen, Technik-Entscheidungen. Mit Zahlen, Diagrammen, Checklisten & FAQ – praxisnah erklärt.";
const canonical = ${company.url}/blog/photovoltaik-batteriespeicher-unternehmen;
return (
<>
<Head>
<title>{${title} | ${company.name}}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta name="robots" content="index, follow" />
      {/* Social */}
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={`${company.url}/og/pv-speicher.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${company.url}/og/pv-speicher.jpg`} />

    {/* Article Schema.org */}
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: "de",
          author: { "@type": "Person", name: author.name },
          reviewedBy: { "@type": "Person", name: reviewer.name },
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          image: `${company.url}/og/pv-speicher.jpg`,
          publisher: {
            "@type": "Organization",
            name: company.name,
            url: company.url,
            logo: { "@type": "ImageObject", url: company.logo },
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
          name: company.name,
          url: company.url,
          logo: company.logo,
        }),
      }}
    />
  </Head>

  <article
    lang="de"
    className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-10 text-zinc-900"
  >
    {/* Header */}
    <header className="mb-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
        {title}
      </h1>
      <p className="mt-3 text-lg text-zinc-700">
        Du willst Stromkosten senken, Risiken reduzieren und planbar dekarbonisieren? In diesem
        Leitfaden zeige ich dir, wie du Photovoltaik und Batteriespeicher{" "}
        <strong>wirtschaftlich</strong> planst – vom Lastprofil über Peak Shaving bis zu
        Förderungen. Mit Diagramm, Checklisten &amp; Rechenbeispiel.
      </p>

      {/* Hero 16:6 – Platzhalter mit idealem Prompt */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full bg-zinc-100" style={{ aspectRatio: "16 / 6" }}>
          {/* Platzhalter statt LCP-Bild: Idealbild-Beschreibung */}
          <div
            role="img"
            aria-label="Platzhalter – Hero: Firmengebäude mit PV auf Flachdach, Batteriespeicher-Container am Parkplatz, Gabelstapler lädt E-Flotte, Abendsonne; moderne grüne Akzente"
            className="absolute inset-0 flex items-center justify-center text-center p-6"
          >
            <div className="rounded-xl border border-dashed border-zinc-300 p-6">
              <p className="text-sm text-zinc-600">
                <strong>Hero-Bild (Platzhalter):</strong> „Rooftop-PV auf Industriehalle,
                Batteriespeicher-Container, EV-Lader – 16:6, clean, realistisch“
              </p>
            </div>
          </div>
        </div>
        <figcaption className="sr-only">
          Ideal: Firmenstandort mit PV-Dachanlage, Speicher und Ladepunkten.
        </figcaption>
      </figure>

      {/* Meta row */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
        <div className="flex items-center gap-3">
          <img
            src={author.image}
            alt="Autor:in"
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-medium text-zinc-900">{author.name}</div>
            <div>{author.role}</div>
          </div>
        </div>

        <span className="hidden sm:inline" aria-hidden>
          •
        </span>

        <div className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
          <CalendarClock className="w-4 h-4 text-zinc-600" aria-hidden />
          <div>
            <span className="font-medium">Zuletzt aktualisiert:</span>{" "}
            <time dateTime={new Date().toISOString()}>{updated}</time>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
          <Timer className="w-4 h-4 text-zinc-600" aria-hidden />
          <div>
            Lesedauer: <span className="tabular-nums">{readingMinutes} Min</span>
          </div>
        </div>
      </div>
    </header>

    {/* TL;DR */}
    <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
      <ul className="space-y-3">
        <TLDRItem icon={Gauge}>
          <strong>Business Case:</strong> PV-Stromgestehungskosten (LCOE) in Deutschland meist
          deutlich unter Gewerbestrom – Speicher erhöht Eigenverbrauch &amp; senkt
          Leistungsspitzen. :contentReference[oaicite:0]{index=0}
        </TLDRItem>
        <TLDRItem icon={ShieldCheck}>
          <strong>Tarife & Umlagen:</strong> Für KMU liegen Neuabschlüsse 2025 im Schnitt bei
          ~18&nbsp;ct/kWh; der Aufschlag für besondere Netznutzung wurde 2025 angepasst – Peak
          Shaving kann entlasten. :contentReference[oaicite:1]{index=1}
        </TLDRItem>
        <TLDRItem icon={PiggyBank}>
          <strong>Einspeisung:</strong> Neue Anlagen (08/2025–01/2026) erhalten ca.
          7,86&nbsp;ct/kWh (Teileinspeisung) bzw. bis 12,6&nbsp;ct/kWh (Volleinspeisung). :contentReference[oaicite:2]{index=2}
        </TLDRItem>
        <TLDRItem icon={Battery}>
          <strong>Kosten sinken:</strong> Li-Ion-Batteriepreise fielen 2024 auf ~115&nbsp;USD/kWh
          (Pack) – Speicheranwendungen werden wirtschaftlicher. :contentReference[oaicite:3]{index=3}
        </TLDRItem>
        <TLDRItem icon={Sun}>
          <strong>Markt:</strong> 2024 wurden in Deutschland ~16,9&nbsp;GWp PV neu installiert –
          du planst also nicht im Nischenmarkt, sondern im Mainstream. :contentReference[oaicite:4]{index=4}
        </TLDRItem>
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
          <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
            PV & Batteriespeicher: Grundlagen für Entscheider
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#status-quo">
            Markt &amp; Preisniveau 2025: Warum sich PV fast überall rechnet
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#business-case">
            Wirtschaftlich rechnen: Von Lastprofil bis CAPEX/OPEX
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#technik">
            Technikentscheidungen: AC/DC-Kopplung, EMS &amp; Sicherheit
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#regulierung">
            Recht, Förderung &amp; Tarife 2025
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#fehler">
            Typische Fehler &amp; Risiken – und wie du sie vermeidest
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
            Zusammenfassung
          </a>
        </li>
      </ol>
    </nav>

    {/* Content */}
    <section>
      {/* 1 */}
      <Anchor id="grundlagen" />
      <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
      <p className="mb-6 leading-relaxed">{sections[0].content}</p>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Sun className={`w-5 h-5 ${accent}`} />
            <strong>Photovoltaik – kurz erklärt</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Solarzellen erzeugen Gleichstrom; Wechselrichter speisen ins AC-Netz.</CheckLi>
            <CheckLi>Ertrag hängt von Ausrichtung, Neigung, Verschattung &amp; Temperatur ab.</CheckLi>
            <CheckLi>
              LCOE definieren die Vollkosten je kWh Strom aus PV – zentrale Basis für den
              Business Case. :contentReference[oaicite:5]{index=5}
            </CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Battery className={`w-5 h-5 ${accent}`} />
            <strong>Batteriespeicher – kurz erklärt</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Erhöht Eigenverbrauch (PV-Überschuss → späterer Bedarf).</CheckLi>
            <CheckLi>Peak Shaving reduziert teure Lastspitzen (RLM-Tarife/Leistungspreise). :contentReference[oaicite:6]{index=6}</CheckLi>
            <CheckLi>Typische Chemie LFP: robust, zyklenfest, gutes Sicherheitsprofil.</CheckLi>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <Anchor id="status-quo" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="mb-5 leading-relaxed">
        Der PV-Markt wächst massiv: 2024 kamen in Deutschland ~16,9&nbsp;GWp hinzu; global
        bleibt PV bis 2030 das Zugpferd der EE-Kapazitäten. :contentReference[oaicite:7]{index=7}
        Die LCOE für PV in Deutschland liegen je nach System und Standort im Bereich weniger bis
        rund einem Dutzend Cent pro kWh, meist unter Beschaffungs- und Netzkosten des
        Netzstroms. :contentReference[oaicite:8]{index=8}
      </p>

      {/* Chart */}
      <BusinessCaseChart />

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          „Für die meisten Standorte rechnet sich PV heute ohne Subvention – der Speicher macht
          aus einem guten Projekt ein robustes, weil er Lastspitzen glättet und Eigenverbrauch
          maximiert.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Redaktionelle Einschätzung auf Basis Fraunhofer ISE &amp; BDEW-Daten. :contentReference[oaicite:9]{index=9}
        </figcaption>
      </figure>

      {/* 3 */}
      <Anchor id="business-case" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <p className="leading-relaxed mb-4">{sections[2].content}</p>

      {/* Rechenbeispiel */}
      <div className="rounded-2xl border border-zinc-200 p-5 bg-white mb-6">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Calculator className={`w-5 h-5 ${accent}`} /> Mini-Business-Case (vereinfachtes
          Beispiel)
        </h3>
        <p className="text-sm text-zinc-700 mb-3">
          Standort mit 500&nbsp;MWh/a Verbrauch (RLM), Arbeitspreis 18&nbsp;ct/kWh, Leistungspreise
          relevant. PV-Dachanlage 300&nbsp;kWp (~290&nbsp;MWh/a), CAPEX 900&nbsp;€/kWp, Speicher
          300&nbsp;kWh CAPEX 400&nbsp;€/kWh.
        </p>
        <ul className="text-sm space-y-2">
          <CheckLi>Wert Eigenverbrauch: 290&nbsp;MWh × 0,18&nbsp;€/kWh = 52.200&nbsp;€/a.</CheckLi>
          <CheckLi>Peak-Shaving-Effekt (konservativ): 10&nbsp;% geringere Jahreshöchstlast → Netzentgelt-Ersparnis (standortabhängig) – hier nur qualitativ bewertet. :contentReference[oaicite:10]{index=10}</CheckLi>
          <CheckLi>EEG-Erlöse für Überschuss: konservativ 7,86&nbsp;ct/kWh ansetzen (Zeitraum 08/2025–01/2026 für neue Anlagen). :contentReference[oaicite:11]{index=11}</CheckLi>
          <CheckLi>Capex gesamt ~ (300×900) + (300×400) = 390.000&nbsp;€; Opex ~1–2&nbsp;%/a.</CheckLi>
        </ul>
        <p className="text-xs text-zinc-500 mt-3">
          Hinweis: Beispiel dient der Orientierung – echte Projekte immer mit Lastgangdaten,
          Tarifen, lokalen Bau-/Statik-Restriktionen und Szenarien rechnen.
        </p>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <PiggyBank className={`w-5 h-5 ${accent}`} /> Wenn PV+Speicher wirtschaftlich vorn
            liegt
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Hohe Tageslast + gute Dachfläche → hohe Eigenverbrauchsquote.</CheckLi>
            <CheckLi>RLM-Tarif mit Leistungspreisen → Peak Shaving spart Netzentgelte. :contentReference[oaicite:12]{index=12}</CheckLi>
            <CheckLi>EV-Laden, Kälte/Prozesswärme → flexible Verbraucher zum „Füllen“ von PV-Spitzen.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeEuro className={`w-5 h-5 ${accent}`} /> Wenn reine PV oft reicht
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Gute Tageslast &amp; kaum Lastspitzen → Speicher bringt wenig Zusatznutzen.</CheckLi>
            <CheckLi>Einspeiseerlöse ausreichend und Netzstrom sehr günstig.</CheckLi>
            <CheckLi>
              CAPEX-Budget knapp; Speicher als späteres Upgrade (AC-Kopplung) vorsehen.
            </CheckLi>
          </ul>
        </div>
      </div>

      {/* Vergleichstabelle AC vs. DC-Kopplung */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="kopplung-caption">
          <caption id="kopplung-caption" className="sr-only">
            Vergleich AC- und DC-Kopplung
          </caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Aspekt</th>
              <th className="px-3 py-2">AC-Kopplung</th>
              <th className="px-3 py-2">DC-Kopplung</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                a: "Nachrüstung",
                c: "Sehr gut – unabhängig vom PV-Strang",
                d: "Gut bei gleichzeitiger PV-Sanierung/Neubau",
              },
              {
                a: "Wirkungsgradkette",
                c: "Mehr Wandlungen (AC/DC/AC)",
                d: "Weniger Wandlungen, geringere Verluste",
              },
              {
                a: "Peak Shaving",
                c: "Bewährt im Gewerbe (RLM)",
                d: "Möglich, Fokus auf Eigenverbrauchsoptimierung",
              },
              {
                a: "Komplexität",
                c: "Geringer – modulare Komponenten",
                d: "Höher – Systemintegration PV+Speicher",
              },
              {
                a: "Invest",
                c: "Etwas höher je kWh (zusätzliche Hardware)",
                d: "Etwas niedriger je kWh bei Neuaufbau",
              },
            ].map((row) => (
              <tr key={row.a} className="bg-zinc-50 rounded-xl">
                <th scope="row" className="px-3 py-2 font-medium">
                  {row.a}
                </th>
                <td className="px-3 py-2">{row.c}</td>
                <td className="px-3 py-2">{row.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bild – Unsplash 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://source.unsplash.com/1600x600/?solar,rooftop,factory"
            />
            <img
              loading="lazy"
              src="https://source.unsplash.com/2400x900/?solar,rooftop,factory"
              alt="Rooftop-PV auf Industriehalle, invertierte Reihen in der Sonne"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Dachfläche prüfen: Statik, Fluchtwege, Verschattung – und <em>Brandschutz-/Abschaltkonzepte</em> früh einplanen.
        </figcaption>
      </figure>

      {/* 4 */}
      <Anchor id="technik" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Plug className={`w-5 h-5 ${accent}`} /> EMS-Funktionen, die sich lohnen
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Eigenverbrauchsoptimierung (PV-First) mit SOC- und Wetterprognosen.</CheckLi>
            <CheckLi>Peak Shaving mit 15-min-Fenstern (RLM) und dynamischen Limits. :contentReference[oaicite:13]{index=13}</CheckLi>
            <CheckLi>Priorisierung von EV-Laden/Prozessanlagen in PV-Spitzen.</CheckLi>
            <CheckLi>Notstrom-/USV-Fähigkeiten je nach Kritikalität (optional).</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${accent}`} /> Sicherheit &amp; Betrieb
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Normgerechte Planung (z. B. VDE-Anwendungsregeln) &amp; Brandschutz.</CheckLi>
            <CheckLi>Fernwartung, Monitoring, Alarme &amp; Ticketing für O&amp;M.</CheckLi>
            <CheckLi>Lebensdauer &amp; Garantiebedingungen (Zyklen/kalenderisch) prüfen.</CheckLi>
            <CheckLi>Versicherungsschutz (Sach, BU, Ertragsausfall) klären.</CheckLi>
          </ul>
        </div>
      </div>

      {/* 5 */}
      <Anchor id="regulierung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Relevante Punkte kurz &amp; knapp
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <Pill>EEG</Pill> Neue Einspeisesätze gelten für 20 Jahre ab Inbetriebnahme; Stand
              01.08.2025: 7,86&nbsp;ct/kWh (Teileinspeisung), bis 12,60&nbsp;ct/kWh
              (Volleinspeisung). :contentReference[oaicite:14]{index=14}
            </li>
            <li>
              <Pill>KfW 270</Pill> Zinsgünstige Kredite für PV und Speicher; Antrag über die
              Hausbank. :contentReference[oaicite:15]{index=15}
            </li>
            <li>
              <Pill>Netzentgelte</Pill> Aufschlag für besondere Netznutzung (vormals §19
              StromNEV-Umlage) wurde 2025 neu ausgewiesen. Peak Shaving kann Leistungskosten
              senken. :contentReference[oaicite:16]{index=16}
            </li>
          </ul>
        </div>

        {/* Souveränität & Compliance nicht zentral, aber Governance */}
        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Factory className={`w-5 h-5 ${accent}`} /> Praxis-Check: 7 Schritte zur Planung
          </h3>
          <ol className="text-sm space-y-2 list-decimal ml-5">
            <li>Lastgangdaten (12–24 Monate) sichern, Ausreißer prüfen.</li>
            <li>Dachflächen &amp; Statik klären; Flächenkonflikte (Lüftung, Oberlichter).</li>
            <li>PV-Potenzial simulieren (Neigung, Ausrichtung, Verschattung).</li>
            <li>Speicher-Sizing auf Eigenverbrauch + Peak Shaving ausrichten.</li>
            <li>Tarifstruktur (RLM/Leistungspreis) und EEG-Modell bewerten.</li>
            <li>CAPEX/OPEX, Zins, KfW, Restwerte, Degradation modellieren.</li>
            <li>O&amp;M-Plan, Monitoring, SLA &amp; Sicherheitskonzept festschreiben.</li>
          </ol>
        </div>
      </div>

      {/* Bild – Unsplash 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source media="(max-width: 640px)" srcSet="https://source.unsplash.com/1600x600/?battery,energy,container" />
            <img
              loading="lazy"
              src="https://source.unsplash.com/2400x900/?battery,energy,container"
              alt="Batteriespeicher-Container mit Wechselrichtern auf Firmengelände"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Speicher im Container: Platzierung, Schallschutz, Brandschutzabstände und
          Netzanschlusspunkt frühzeitig mit dem VNB klären.
        </figcaption>
      </figure>

      {/* 6 */}
      <Anchor id="fehler" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-rose-700" /> Vermeidbare Fehler
          </h3>
          <ul className="text-sm space-y-2">
            <li>Nur kWp „maximieren“, ohne auf das Lastprofil zu schauen.</li>
            <li>Speicher ohne Peak-Shaving-Strategie – verschenktes Potenzial.</li>
            <li>Zu optimistische Ertrags- oder Preisannahmen ohne Szenarien.</li>
            <li>Unklare Betriebsverantwortung &amp; fehlende Wartungsrücklagen.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>Lastdaten analysieren, Peak-Zeiten identifizieren, Ziele festlegen.</li>
            <li>EMS mit Prognosen &amp; dynamischen Limits (15-min-Fenster) einsetzen.</li>
            <li>Langfristige O&amp;M-Verträge, Monitoring, Ersatzteilkonzept sichern.</li>
            <li>
              Intern verlinken &amp; Wissen aufbauen:{" "}
              <a className={accent} href="/blog/energiemanagement-lastprofil">
                Lastprofil richtig lesen
              </a>{" "}
              •{" "}
              <a className={accent} href="/blog/iso-50001-einfuehrung">
                ISO&nbsp;50001 einführen
              </a>{" "}
              •{" "}
              <a className={accent} href="/blog/ev-ladeinfrastruktur-b2b">
                EV-Ladeinfrastruktur planen
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/pv-dach-checkliste">
              PV-Dach-Check: Statik, Brand- &amp; Blitzschutz einfach erklärt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/peak-shaving-praxis">
              Peak Shaving in der Praxis: So senkst du Leistungspreise
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/finanzierung-kfw-pv">
              Finanzierung: KfW-Kredite &amp; Leasing für PV+Speicher
            </a>
          </li>
        </ul>
      </aside>
    </section>

    {/* FAQ */}
    <section id="faq" className="mt-14">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl">
        {[
          {
            q: "Wann rechnet sich ein Batteriespeicher im Gewerbe?",
            a: "Wenn er die Eigenverbrauchsquote deutlich erhöht und/oder teure Leistungsspitzen kappt. Bei RLM-Tarifen mit Leistungspreisen zahlt sich Peak Shaving besonders aus; sinkende Batteriepreise verbessern die Rendite zusätzlich.",
          },
          {
            q: "Wie groß sollte ein Speicher im Verhältnis zur PV sein?",
            a: "Als Faustregel im Gewerbe: 0,5–1,0 Speicherkapazität (kWh) pro 1 kWp PV – feinjustiert am Lastprofil. Für primäres Peak Shaving sind Leistung (kW) und Regelgeschwindigkeit wichtiger als reine kWh.",
          },
          {
            q: "Teileinspeisung oder Volleinspeisung?",
            a: "Teileinspeisung maximiert Eigenverbrauchswert; Volleinspeisung kann attraktiv sein, wenn Last gering ist oder Dächer extern vermietet werden. Prüfe die jeweils gültigen EEG-Sätze zum Inbetriebnahmezeitpunkt.",
          },
          {
            q: "Welche Finanzierung ist 2025 sinnvoll?",
            a: "Viele Unternehmen nutzen zinsgünstige KfW-Kredite (z. B. Programm 270) über die Hausbank. Alternativ: Leasing/PPAs. Wichtig sind Eigenkapitalkosten und Bilanzwirkung.",
          },
          {
            q: "Was bringt ein Energiemanagementsystem (EMS)?",
            a: "Es orchestriert PV, Speicher, EV-Laden & Verbraucher. Mit Prognosen steigert es Eigenverbrauch und begrenzt Lastspitzen – Voraussetzung für stabile Einsparungen.",
          },
        ].map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium">
              <span>{f.q}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-open:rotate-90 ${accent}`} />
            </summary>
            <div className="mt-2 text-zinc-700">{f.a}</div>
          </details>
        ))}
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
                name: "Wann rechnet sich ein Batteriespeicher im Gewerbe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Wenn er die Eigenverbrauchsquote deutlich erhöht und/oder teure Leistungsspitzen kappt. Bei RLM-Tarifen mit Leistungspreisen zahlt sich Peak Shaving besonders aus; sinkende Batteriepreise verbessern die Rendite zusätzlich.",
                },
              },
              {
                "@type": "Question",
                name: "Wie groß sollte ein Speicher im Verhältnis zur PV sein?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Als Faustregel im Gewerbe: 0,5–1,0 Speicherkapazität (kWh) pro 1 kWp PV – feinjustiert am Lastprofil. Für primäres Peak Shaving sind Leistung (kW) und Regelgeschwindigkeit wichtiger als reine kWh.",
                },
              },
              {
                "@type": "Question",
                name: "Teileinspeisung oder Volleinspeisung?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Teileinspeisung maximiert Eigenverbrauchswert; Volleinspeisung kann attraktiv sein, wenn Last gering ist oder Dächer extern vermietet werden. Prüfe die jeweils gültigen EEG-Sätze zum Inbetriebnahmezeitpunkt.",
                },
              },
              {
                "@type": "Question",
                name: "Welche Finanzierung ist 2025 sinnvoll?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Viele Unternehmen nutzen zinsgünstige KfW-Kredite (z. B. Programm 270) über die Hausbank. Alternativ: Leasing/PPAs. Wichtig sind Eigenkapitalkosten und Bilanzwirkung.",
                },
              },
              {
                "@type": "Question",
                name: "Was bringt ein Energiemanagementsystem (EMS)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Es orchestriert PV, Speicher, EV-Laden & Verbraucher. Mit Prognosen steigert es Eigenverbrauch und begrenzt Lastspitzen – Voraussetzung für stabile Einsparungen.",
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
        <strong>PV &amp; Speicher im Unternehmen</strong> sind 2025 in vielen Fällen
        wirtschaftlich – PV erzeugt Strom günstiger als Netzbezug; der Speicher erhöht
        Eigenverbrauch und reduziert Leistungsspitzen. Mit sauberem Lastprofil, sorgfältigem
        Sizing (PV zuerst, Speicher gezielt), einem starken EMS und realistischen Szenarien
        entsteht ein belastbarer Business Case – <em>förderfähig</em> finanziert und über 20
        Jahre planbar durch EEG-Regeln. Wer jetzt strukturiert plant, senkt Kosten, CO₂ und
        Risiken zugleich. :contentReference[oaicite:17]{index=17}
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Kosten-/Architektur-Check gewünscht?</h2>
        <p className="text-zinc-700 mb-4">
          Wir analysieren Lastgang &amp; Dachflächen und entwerfen deinen PV+Speicher-Plan
          inkl. Peak-Shaving-Konzept, Finanzierung und O&amp;M.
        </p>

        {/* Demo-Formular */}
        <div className="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
          <label className="text-sm">
            Name
            <input
              name="name"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
              placeholder="Max Mustermann"
            />
          </label>
          <label className="text-sm">
            Telefon
            <input
              name="phone"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
              placeholder="+49 …"
            />
          </label>
          <label className="text-sm">
            E-Mail
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
              placeholder="max@firma.de"
            />
          </label>

          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-2 font-semibold text-white shadow-sm opacity-70 cursor-not-allowed"
            aria-disabled="true"
            title="Demo – ohne Funktion"
          >
            Demo anfordern
          </button>
          <p id="cta-note" className="text-xs text-zinc-500 mt-1">
            Demo-Formular – nur Vorschau, es werden keine Daten gesendet.
          </p>
        </div>
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
            {author.role}. Fokus: PV-Dachanlagen, Batteriespeicher, RLM-Tarife &amp; Peak Shaving
            in der Industrie.
          </div>
          <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
            LinkedIn-Profil
          </a>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden />
        <p className="text-sm text-zinc-700">
          Reviewed by: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
          Fraunhofer ISE (2025): Levelized Cost of Electricity – Deutschland, Stand 2024/2025.
          :contentReference[oaicite:18]{index=18}
        </li>
        <li>
          Fraunhofer ISE (2025): Photovoltaics Report – Markt &amp; Preisentwicklung. :contentReference[oaicite:19]{index=19}
        </li>
        <li>
          IEA – Solar PV: Ausblick bis 2030 (Renewables 2024). :contentReference[oaicite:20]{index=20}
        </li>
        <li>
          IEA-PVPS (2024): Trends in PV Applications. :contentReference[oaicite:21]{index=21}
        </li>
        <li>
          BDEW (07/2025): Strompreisanalyse – u. a. KMU-Neuabschlüsse ~18 ct/kWh. :contentReference[oaicite:22]{index=22}
        </li>
        <li>
          ADAC/Finanztip (08/2025): EEG-Einspeisevergütung 7,86 ct/kWh (Teileinspeisung) bzw.
          bis 12,60 ct/kWh (Volleinspeisung). :contentReference[oaicite:23]{index=23}
        </li>
        <li>
          Bundesnetzagentur (2025): Aufschlag für besondere Netznutzung (vormals §19
          StromNEV-Umlage). :contentReference[oaicite:24]{index=24}
        </li>
        <li>
          BloombergNEF (12/2024): Battery pack prices fallen to ~115 USD/kWh. :contentReference[oaicite:25]{index=25}
        </li>
        <li>
          KfW (2025): Programm „Erneuerbare Energien – Standard (270)“ &amp; PV für Unternehmen. :contentReference[oaicite:26]{index=26}
        </li>
        <li>
          Next Kraftwerke (Peak Shaving Grundlagen). :contentReference[oaicite:27]{index=27}
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow
          term="kWp"
          def="Kilowatt Peak: Nennleistung der PV-Anlage unter Standardtestbedingungen (STC)."
        />
        <GlossaryRow
          term="kWh"
          def="Kilowattstunde: Energiemenge; 1 kWh ist die Energie, die bei 1 kW Leistung in 1 Stunde erzeugt/verbrauch wird."
        />
        <GlossaryRow
          term="LCOE"
          def="Levelized Cost of Electricity: Vollkosten je erzeugter kWh über die Lebensdauer einer Anlage."
        />
        <GlossaryRow
          term="Benutzungsstunden"
          def="Jahresbenutzungsstunden = Verbrauch (kWh) ÷ Jahreshöchstlast (kW); Maß für Netzbeanspruchung."
        />
        <GlossaryRow
          term="Peak Shaving"
          def="Kappung kurzfristiger Lastspitzen, z. B. via Speicher – senkt Leistungspreise/Netzentgelte (RLM)."
        />
      </dl>
    </section>
  </article>
</>
);
}
