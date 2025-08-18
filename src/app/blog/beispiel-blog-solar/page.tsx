import Head from "next/head";
import {
CheckCircle2,
ShieldCheck,
Gauge,
PiggyBank,
BatteryCharging,
Sun,
Factory,
Building2,
FileSearch,
Landmark,
BadgeEuro,
ArrowRight,
Info,
CalendarClock,
Timer,
BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/**
Green Energy im Unternehmen – PV & Speicher wirtschaftlich planen
Struktur, Farben, Fonts, TL;DR, Checkmarks & Kurzfazit
angelehnt an den bereitgestellten Beispielcode.
*/
// ---------- Helper ----------
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";
// ---------- Content Data (edit freely) ----------
const author = {
name: "Jonas Meyer",
role: "Energie- & PV-Strategie (10+ Jahre Erfahrung)",
image:
"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&q=80&crop=faces&fit=crop",
linkedin: "https://www.linkedin.com/in/jonasmeyer/",
};
const reviewer = {
name: "Dr. Katharina Schulz",
role: "Energierecht & Fördermittel",
linkedin: "https://www.linkedin.com/in/katharinaschulz/",
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
title: "Was bringen PV & Batteriespeicher im Unternehmen – in einfachen Worten?",
content:
"Photovoltaik (PV) wandelt Sonnenlicht in Strom (kWp = installierte Spitzenleistung; kWh = erzeugte/gespeicherte Energiemenge). Unternehmen nutzen PV-Strom idealerweise direkt (Eigenverbrauch), der Rest wird gegen Vergütung ins Netz eingespeist. Ein Batteriespeicher erhöht die Eigenverbrauchsquote, verschiebt Solarstrom in Abend- und Morgenstunden und kann Lastspitzen kappen (Peak Shaving). Wirtschaftlich entscheidend: dein Lastgang (wann und wie viel Strom ihr bezieht), der Strompreis (Arbeitspreis ct/kWh + ggf. Leistungspreis €/kW), die Systemkosten (CapEx + Betrieb), die Dach- bzw. Flächenqualität (Ausrichtung, Verschattung) und die Förder-/Regellage (EEG, KfW, BAFA).",
},
{
id: "wirtschaftlichkeit",
title: "Wirtschaftlichkeit verstehen: LCOE, Eigenverbrauch & Amortisation",
content:
"Die Kennzahl Levelized Cost of Electricity (LCOE) beschreibt Stromgestehungskosten über die Lebensdauer. PV auf Gewerbedächern liegt in Deutschland – je nach Größe, Standort, Kapitalkosten und O&M – deutlich unter typischen Netzstromkosten. Der wichtigste Hebel ist Eigenverbrauch: Jede selbst verbrauchte kWh ersetzt teureren Netzstrom. Speicher rechnen sich, wenn Lastspitzengebühren (Leistungspreise) relevant sind oder wenn sich Zeitverschiebung/Arbitrage mit dynamischen Tarifen lohnt. Rechne konservativ: PV-Ertrag (kWh/kWp·a) × kWp → Jahresertrag. Davon Eigenverbrauchsquote × Strompreisersparnis + Einspeiseerlöse = jährlicher Cashflow vor OPEX. Amortisation ≈ Investition / (jährlicher Netto-Cashflow).",
},
{
id: "planung",
title: "Dimensionierung & Technik: In 7 Schritten zur passenden Auslegung",
content:
"1) Lastprofil analysieren (15-min-Werte, mindestens 12 Monate) und Tages-/Wochenmuster erkennen. 2) Dach & Statik prüfen (Flachdach: Aufständerung + Ballast; Satteldach: Dachdeckung, Durchdringung, Brandschutz). 3) Ausrichtung/Neigung optimieren (Ost/West für lange Erzeugungszeiten, Süd für hohe Peaks). 4) DC/AC-Verhältnis festlegen (1.1–1.3 üblich), Stringplanung & Verschattungsanalyse. 5) Speichergröße definieren (Daumenregel: 0,5–1,0 kWh pro 1 kWp; bei Peak Shaving zusätzlich Leistung [kW] nach Spitzenbedarf). 6) Zähler- & Schutzkonzept, NA-Schutz, Messkonzept (Eigenverbrauch, Überschuss, ggf. Direktvermarktung). 7) Betriebs- & Wartungskonzept (Monitoring, Reinigung, Garantie-/Degradationsmanagement).",
},
{
id: "investitionen",
title: "Investition, Finanzierung & Förderungen: Was es 2025 zu beachten gilt",
content:
"Neben Eigenmitteln sind Förderkredite und Zuschüsse wichtige Stellhebel. KfW-Programm 270 (Erneuerbare Energien – Standard) finanziert PV-Anlagen und Speicher – Konditionen sind laufzeit- und bonitätsabhängig. Ergänzend kommen Programme der Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW, BAFA – v. a. Modul 4) in Frage, wenn Speicher Lastspitzen senkt oder Prozesse energieeffizienter werden. Für die Einspeisung sind EEG-Sätze und ggf. Direktvermarktung relevant. Wichtig: Konditionen ändern sich – prüfe tagesaktuell und nutze Hausbank/Förderlotsen.",
},
{
id: "recht",
title: "EEG, Solarpaket & Direktvermarktung: Reglerahmen für Gewerbe",
content:
"Für PV bis 100 kW gibt es feste EEG-Fördersätze; Volleinspeiser erhalten höhere Vergütung als Teileinspeiser. Größere Anlagen nutzen in der Regel Direktvermarktung mit gleitender Marktprämie (anzulegender Wert minus Marktwert). Mit dem Solarpaket I wurden Erleichterungen und Detailanpassungen eingeführt (u. a. Vereinfachungen, technische Anforderungen). Bei negativen Börsenpreisen kann für neue Anlagen zeitweise keine Vergütung fließen – das ist in der Planung zu berücksichtigen. Direktvermarktungspflichten und technische Anforderungen (Fernsteuerbarkeit, Messung) hängen von der Anlagengröße und dem Inbetriebnahmedatum ab.",
},
{
id: "fehler",
title: "Typische Fehler & Risiken – und wie du sie vermeidest",
content:
"Häufige Stolpersteine: Speicher überdimensionieren (zu lange Lade-/Entladezeiten, zu wenig Zyklen) oder unterdimensionieren (Peak Shaving wirkungslos), nur auf kWp-Preis schauen statt auf Gesamtnutzen (LCOE, Lastprofil, Leistungspreise), fehlende Wartungs- & Monitoringprozesse, unklare Mess-/Zählerkonzepte und ungeklärte steuerliche Fragen (z. B. USt/ESt bei Vermietung, Stromlieferung an Dritte im Gebäude). Gegenmaßnahmen: Saubere Datenbasis, Lastgangsimulation mit und ohne Speicher, Sensitivitätsanalyse (Strompreis, Zins, Ertrag), klare Verträge (Direktvermarktung, Service Level), und „Test-Peak-Shaving“ mit Messphase.",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(12, Math.ceil(wordCount / 180)); // 180 wpm conservative
// ---------- UI Components ----------
const TLDRItem = ({
icon: Icon,
children,
}: {
icon: LucideIcon;
children: ReactNode;
}) => (
<li className="flex items-start gap-3"> <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden /> <span>{children}</span> </li> );
const CheckLi = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-2"> <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden /> <span className="flex-1">{children}</span> </li> );
const Pill = ({ children }: { children: ReactNode }) => (
<span
className={inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium}
  {children}
</span> );
const Anchor = ({ id }: { id: string }) => (
<div id={id} aria-hidden className="pt-24 -mt-24" /> ); // stable anchor
// Simple static SVG chart – Business Case: PV ohne vs. mit Speicher (0–10)
const ComparisonChart = () => {
const items = [
{ k: "Stromkostenersparnis", ohne: 7, mit: 9 },
{ k: "Eigenverbrauchsquote", ohne: 6, mit: 9 },
{ k: "Amortisationsdauer", ohne: 8, mit: 6 },
{ k: "Peak Shaving (Leistungspreise)", ohne: 3, mit: 8 },
{ k: "Resilienz/Backup", ohne: 2, mit: 7 },
{ k: "Planbarkeit & Komplexität", ohne: 8, mit: 5 },
];
const max = 10;
const barH = 16;
const gap = 6;
const rowH = barH * 2 + gap + 16;
const padTop = 14;
const width = 720;
const left = 200;
const right = width - 20;
const scale = (v: number) => (right - left) * (v / max);
return (
<figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
<svg
viewBox={0 0 ${width} ${items.length * rowH + padTop}}
role="img"
aria-label="Diagramm: Wirtschaftlicher Vergleich PV ohne vs. mit Speicher (0–10)"
>
<defs>
<linearGradient id="g1" x1="0" x2="1">
<stop offset="0%" stopColor="#047857" />
<stop offset="100%" stopColor="#10b981" />
</linearGradient>
</defs>
      {items.map((row, i) => {
      const y = padTop + i * rowH;
      return (
        <g key={row.k}>
          <text x={10} y={y + barH + 6} className="fill-zinc-700" fontSize="12">
            {row.k}
          </text>
          {/* Ohne Speicher (grey, top bar) */}
          <rect
            x={left}
            y={y}
            width={scale(row.ohne)}
            height={barH}
            fill="#e5e7eb"
            rx="6"
          />
          <text
            x={left + scale(row.ohne) + 6}
            y={y + barH - 4}
            fontSize="11"
            className="fill-zinc-500"
          >
            {row.ohne}
          </text>
          {/* Mit Speicher (green, bottom bar) */}
          <rect
            x={left}
            y={y + barH + gap}
            width={scale(row.mit)}
            height={barH}
            fill="url(#g1)"
            rx="6"
          />
          <text
            x={left + scale(row.mit) + 6}
            y={y + barH + gap + barH - 4}
            fontSize="11"
            className="fill-emerald-700"
          >
            {row.mit}
          </text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Vergleich (0–10) pro Kriterium. Oben: Grau = PV ohne Speicher, unten: Grün = PV mit
    Speicher. Richtwerte – je Standort & Tarifmodell variabel.
  </figcaption>
</figure>
);
};
// Glossary row
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
export default function Article() {
const updated = formatDateDE();
const title =
"Green Energy im Unternehmen: Photovoltaik & Energiespeicher wirtschaftlich planen";
const description =
"Investition, Amortisation, Förderungen: So setzen Firmen PV-Anlagen und Speicherlösungen wirtschaftlich ein – mit Rechenweg, Checklisten & aktuellen Regelungen.";
const canonical = ${company.url}/blog/photovoltaik-speicher-wirtschaftlich-planen;
return (
<>
<Head>
<title>{${title} | ${company.name}}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content={`${company.url}/og/pv-speicher-business-case.jpg`}
    />
    <meta property="og:url" content={canonical} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content={`${company.url}/og/pv-speicher-business-case.jpg`}
    />

    {/* Article Schema.org */}
    <script
      type="application/ld+json"
      // JSON-LD must be a string
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
          image: `${company.url}/og/pv-speicher-business-case.jpg`,
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
        Du willst Stromkosten, CO₂ und Risiko senken? Dieser Leitfaden zeigt, wie
        Unternehmen Photovoltaik und Batteriespeicher so planen, dass sich Investition und
        Amortisation rechnen – mit einfachen Rechenwegen, konkreten Größenordnungen und
        den wichtigsten Förderoptionen für 2025.
      </p>

      {/* Hero 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          {/* Hero: bewusst Platzhalter (KI-/Foto-Briefing) */}
          <div className="absolute inset-0 grid place-items-center bg-zinc-50 text-center px-6">
            <div className="max-w-2xl text-zinc-700">
              <strong>Hero-Bild (16:6) – Platzhalter:</strong> Luftaufnahme eines
              Gewerbedachs mit PV-Modulen und sichtbarem Batteriespeicher/Wechselrichter-
              Container; daneben Produktionshalle (Industrie), sonniger Himmel,
              Fokus auf professionelle Umsetzung & Arbeitssicherheit.
            </div>
          </div>
        </div>
        <figcaption className="sr-only">
          Ideales Motiv: PV auf Gewerbedach + Batteriespeicher vor Produktionshalle.
        </figcaption>
      </figure>

      {/* Meta row – better legibility */}
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
            <span className="sr-only">Zuletzt aktualisiert am </span>
            <time dateTime={new Date().toISOString()}>Zuletzt aktualisiert: {updated}</time>
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
          PV senkt <strong>Arbeitspreis-Risiken</strong>, Speicher erhöht die{" "}
          <strong>Eigenverbrauchsquote</strong> und kann <strong>Leistungspreise</strong>{" "}
          glätten – Basis ist immer dein <strong>Lastprofil</strong>.
        </TLDRItem>
        <TLDRItem icon={ShieldCheck}>
          Regulatorik 2025: <strong>EEG-Fördersätze bis 100 kW</strong>, größere Anlagen
          i. d. R. <strong>Direktvermarktung mit Marktprämie</strong>;{" "}
          <em>Solarpaket I</em> bringt Erleichterungen – Details je Anlagengröße beachten.
        </TLDRItem>
        <TLDRItem icon={PiggyBank}>
          Rechne mit <strong>LCOE vs. Netzpreis</strong> und prüfe{" "}
          <strong>Sensitivitäten</strong> (Strompreis, Zins, Ertrag). Speicher nur so groß,
          wie er <strong>Lastspitzen</strong> und <strong>Zeitschnitt</strong> wirklich
          bedient.
        </TLDRItem>
        <TLDRItem icon={BatteryCharging}>
          Business-Case Speicher: <strong>Peak Shaving</strong> +{" "}
          <strong>Eigenverbrauch</strong> + (optional) <strong>Tarif-Arbitrage</strong>.
        </TLDRItem>
        <TLDRItem icon={Landmark}>
          Fördercheck: <strong>KfW 270</strong> (Kredit) +{" "}
          <strong>BAFA-EEW Modul 4</strong> (Zuschüsse bei Effizienz/Prozessbezug).
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
            Was bringen PV & Batteriespeicher im Unternehmen?
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
            Wirtschaftlichkeit: LCOE, Eigenverbrauch & Amortisation
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#planung">
            Dimensionierung & Technik – 7 Schritte
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#investitionen">
            Investition, Finanzierung & Förderungen 2025
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#recht">
            EEG, Solarpaket & Direktvermarktung
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#fehler">
            Typische Fehler & Risiken
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
      <p className="mb-6 leading-relaxed">
        {sections[0].content}
      </p>
      {/* Inline Expertenkontext */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Sun className={`w-5 h-5 ${accent}`} />
            <strong>Photovoltaik – kurz erklärt</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>kWp = Modulspitzenleistung, kWh = Energieertrag/Verbrauch.</CheckLi>
            <CheckLi>Jahresertrag grob: 900–1.100 kWh je kWp (Standort & Neigung).</CheckLi>
            <CheckLi>Eigenverbrauch spart den teureren Netzstrombezug.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <BatteryCharging className={`w-5 h-5 ${accent}`} />
            <strong>Speicher – kurz erklärt</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Erhöht Eigenverbrauch & verschiebt PV-Strom zeitlich.</CheckLi>
            <CheckLi>Peak Shaving senkt Leistungspreise (kW-Gebühren).</CheckLi>
            <CheckLi>Lebensdauer: Zyklen & Kalenderalter beachten (Garantie).</CheckLi>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <Anchor id="wirtschaftlichkeit" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="leading-relaxed mb-5">
        {sections[1].content}
        {/* Quellenhinweis: Fraunhofer ISE LCOE / Photovoltaics Report */}
        {/* :contentReference[oaicite:0]{index=0} */}
      </p>

      {/* Chart */}
      <ComparisonChart />

      {/* Beispielrechnung Box */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          Beispiel: 200&nbsp;kWp Dachanlage, Ertrag 1.000&nbsp;kWh/kWp·a → 200.000&nbsp;kWh/a.
          Bei 60&nbsp;% Eigenverbrauch ersetzt du 120.000&nbsp;kWh Netzstrom. Liegt dein
          Vollkosten-Netzpreis bei 0,18&nbsp;€/kWh (Industrie ohne Privilegien; Richtwert),
          sparst du ≈ 21.600&nbsp;€/a. Überschuss (80.000&nbsp;kWh) wird vergütet. Speicher
          erhöht Eigenverbrauch z.&nbsp;B. auf 75&nbsp;% – prüfe, ob die zusätzlichen
          Einsparungen die Mehrinvestition tragen.
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          Werte variieren stark (Tarife, Standort, Betriebstempo, Lastprofil).
        </figcaption>
        {/* :contentReference[oaicite:1]{index=1} */}
      </figure>

      {/* 3 */}
      <Anchor id="planung" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <p className="leading-relaxed mb-4">
        {sections[2].content}
      </p>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BarChart3 className={`w-5 h-5 ${accent}`} /> Heuristiken &amp; Richtwerte
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Eigenverbrauch ohne Speicher häufig 40–70&nbsp;% (Gewerbe).</CheckLi>
            <CheckLi>
              Speichergröße: 0,5–1,0&nbsp;kWh je kWp (Eigenverbrauch), für Peak Shaving
              zusätzlich Leistungsbedarf in kW dimensionieren.
            </CheckLi>
            <CheckLi>DC/AC-Ratio 1.1–1.3 für bessere Vollaststunden des Wechselrichters.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FileSearch className={`w-5 h-5 ${accent}`} /> Mess- &amp; Simulationscheck
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>15-min-Lastdaten aus Zähler/EMS ziehen und „dry-run“ simulieren.</CheckLi>
            <CheckLi>
              Szenarien: ohne/mit Speicher, mit dynamischem Tarif, Peak-Shaving-Setpoints.
            </CheckLi>
            <CheckLi>Sensitivitäten: Strompreis ±20&nbsp;%, Zins ±2 pp, Ertrag ±5&nbsp;%.</CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 1 – Unsplash, 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80&auto=format&fit=crop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1920&q=80&auto=format&fit=crop"
              alt="Gewerbedach mit großflächiger PV-Anlage und Aufständerung"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          PV auf großen Gewerbedächern skaliert schnell – entscheidend ist eine saubere
          Statik- und Verschattungsprüfung.
        </figcaption>
      </figure>

      {/* 4 */}
      <Anchor id="investitionen" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>
      <p className="leading-relaxed mb-4">
        {sections[3].content}
        {/* :contentReference[oaicite:2]{index=2} */}
      </p>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <PiggyBank className={`w-5 h-5 ${accent}`} /> Was treibt den Business-Case?
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              <strong>Netzpreis</strong> (Arbeitspreis + ggf. Leistungspreis) vs. LCOE PV.
            </CheckLi>
            <CheckLi>
              <strong>Eigenverbrauchsquote</strong> &amp; <strong>Erzeugungsprofil</strong>.
            </CheckLi>
            <CheckLi>
              <strong>Kapitalkosten</strong> (Zins, Laufzeit) &amp; Betrieb (O&amp;M).
            </CheckLi>
            <CheckLi>Förderkredit/Zuschuss &amp; Steuer-/Bilanzierungseffekte.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeEuro className={`w-5 h-5 ${accent}`} /> Rechenweg (vereinfacht)
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              Jahresertrag = kWp × spezifischer Ertrag (kWh/kWp·a).
            </CheckLi>
            <CheckLi>
              Cashflow = Eigenverbrauch (kWh) × Netzpreis (€) + Einspeise-Erlös.
            </CheckLi>
            <CheckLi>Amortisation ≈ Investition / Cashflow (vor Steuern/OPEX).</CheckLi>
            <CheckLi>IRR/NPV für belastbare Investment-Entscheidung ergänzen.</CheckLi>
          </ul>
        </div>
      </div>

      {/* 5 */}
      <Anchor id="recht" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${accent}`} /> Relevante Punkte (2025)
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <Pill>EEG-Vergütung</Pill> Feste Sätze bis 100&nbsp;kW (Teileinspeisung vs.
              Volleinspeisung; halbjährliche Degression). {/* :contentReference[oaicite:3]{index=3} */}
            </li>
            <li>
              <Pill>Direktvermarktung</Pill> Größere Anlagen i. d. R. Direktvermarktung mit
              Marktprämie (anzulegender Wert – Marktwert). {/* :contentReference[oaicite:4]{index=4} */}
            </li>
            <li>
              <Pill>Solarpaket I</Pill> Vereinfachungen/Anpassungen für PV – technische
              Anforderungen und Abläufe je Größe. {/* :contentReference[oaicite:5]{index=5} */}
            </li>
            <li>
              <Pill>Negative Preise</Pill> Bei künftigen Anlagen können Phasen ohne
              Vergütung auftreten (Planung berücksichtigen). {/* :contentReference[oaicite:6]{index=6} */}
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Förderung &amp; Finanzierung
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>
              <strong>KfW 270</strong>: Kredit für PV & Speicher – Konditionen variieren,
              Hausbank ansprechen. {/* :contentReference[oaicite:7]{index=7} */}
            </CheckLi>
            <CheckLi>
              <strong>BAFA-EEW Modul 4</strong>: Zuschüsse für Effizienz-Maßnahmen (u. a.
              prozessbezogene Optimierung); Bedingungen je Unternehmensgröße.
              {/* :contentReference[oaicite:8]{index=8} */}
            </CheckLi>
            <CheckLi>
              <strong>Praxis</strong>: Kombination aus Kredit + Zuschuss + optimierter
              Mess-/Direktvermarktung.
            </CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 2 – Unsplash, 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=1200&q=80&auto=format&fit=crop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=1920&q=80&auto=format&fit=crop"
              alt="Batteriespeicher-Container und Umspannanlage neben Werkshalle"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Stationäre Speicher: Für Peak Shaving zählt die abrufbare Leistung (kW) und die
          erlaubte Entladetiefe – nicht nur die Kapazität (kWh).
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
            <li>Kein Lastgang → Speicher/Anlage am Bedarf vorbei ausgelegt.</li>
            <li>Nur kWp-Preis statt Gesamtnutzen (LCOE, Peak Shaving) betrachtet.</li>
            <li>Messkonzept/Steuerbarkeit unklar (Direktvermarktung, § 9-Anforderungen).</li>
            <li>Wartung/Monitoring vernachlässigt – Ertragsverluste bleiben unentdeckt.</li>
            <li>Steuer-/Rechtsfragen (Lieferung an Dritte im Haus) nicht geklärt.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>12-Monats-Lastdaten, Standortertrag & Sensitivitäten simulieren.</li>
            <li>Peak-Shaving-Setpoints testen (Messphase) – Speicherleistung verifizieren.</li>
            <li>Service-/Garantiekonzept (Zyklen, SoH, Austausch) fixieren.</li>
            <li>Direktvermarkter & Netzbetreiber früh einbinden (Fernsteuerbarkeit).</li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/lastgang-analyse-unternehmen"
            >
              Lastgang analysieren: So findest du den optimalen PV-/Speicher-Mix
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/dynamische-stromtarife-b2b">
              Dynamische Tarife & Arbitrage im B2B – Chancen & Risiken
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/eeg-direktvermarktung-guide">
              EEG-Direktvermarktung: Technik, Verträge, Vergütung – ein Praxisleitfaden
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/pv-betrieb-optimieren">
              Betrieb & Monitoring: Erträge sichern, Degradation managen
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
            q: "Wie groß sollte der Speicher im Gewerbe sein?",
            a: "Für Eigenverbrauch grob 0,5–1,0 kWh pro kWp PV. Für Peak Shaving ist die Leistung (kW) entscheidend – sie muss deine typischen 15-min-Spitzen decken. Starte mit einer Mess-/Testphase und prüfe dann die Wirtschaftlichkeit in Szenarien.",
          },
          {
            q: "Lohnt sich PV auch ohne Speicher?",
            a: "Ja – in vielen Betrieben ist der Eigenverbrauch tagsüber hoch genug. Speicher kommt hinzu, wenn Leistungspreise relevant sind oder sich Zeitverschiebung/Tarifarbitrage rechnet. Der Business-Case steht und fällt mit deinem Lastprofil.",
          },
          {
            q: "Was sind typische Strompreise für Unternehmen?",
            a: "Stark abhängig von Abnahme, Privilegien und Region. Modellierte Industriestrompreise ohne Vergünstigungen lagen 2024 grob im Bereich um 17 ct/kWh; Prüfe deine Vertragskonditionen individuell.",
          },
          {
            q: "Welche EEG-Regeln gelten für Gewerbe-PV?",
            a: "Bis 100 kW feste EEG-Sätze (Teileinspeisung/Volleinspeisung). Größere Anlagen gehen in die Direktvermarktung mit gleitender Marktprämie. Technische Anforderungen (z. B. Fernsteuerbarkeit) je Größe/Datum beachten.",
          },
          {
            q: "Welche Förderungen gibt es?",
            a: "KfW 270 als Förderkredit für PV & Speicher; Zuschüsse über BAFA-EEW (insb. Modul 4) bei Effizienz-/Prozessbezug. Konditionen ändern sich – Hausbank/BAFA-Merkblätter prüfen.",
          },
        ].map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium">
              <span>{f.q}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform group-open:rotate-90 ${accent}`}
              />
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
                name: "Wie groß sollte der Speicher im Gewerbe sein?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Für Eigenverbrauch grob 0,5–1,0 kWh pro kWp PV. Für Peak Shaving ist die Leistung (kW) entscheidend – sie muss typische 15-min-Spitzen decken.",
                },
              },
              {
                "@type": "Question",
                name: "Lohnt sich PV auch ohne Speicher?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Ja. In vielen Betrieben ist der Eigenverbrauch tagsüber hoch genug. Speicher rechnet sich, wenn Leistungspreise relevant sind oder Arbitrage möglich ist.",
                },
              },
              {
                "@type": "Question",
                name: "Was sind typische Strompreise für Unternehmen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Variiert. Modellierte Industriestrompreise ohne Vergünstigungen lagen 2024 bei etwa 17 ct/kWh; konkrete Verträge prüfen.",
                },
              },
              {
                "@type": "Question",
                name: "Welche EEG-Regeln gelten für Gewerbe-PV?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Bis 100 kW feste EEG-Sätze; größere Anlagen in Direktvermarktung mit Marktprämie. Technische Anforderungen je Größe/Datum beachten.",
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
        <strong>PV & Speicher im Unternehmen</strong> lohnen sich, wenn sie zu deinem
        Lastprofil passen: PV senkt Arbeitspreise über hohen Eigenverbrauch, Speicher
        addiert Nutzen aus Peak Shaving und Zeitschnitt. Plane datenbasiert (Lastgang,
        Simulation), prüfe Förderkredit/Zuschuss und beachte EEG-Details (Vergütung,
        Direktvermarktung, technische Anforderungen). So erreichst du eine{" "}
        <em>robuste Amortisation</em> und reduzierst gleichzeitig CO₂-Emissionen – ohne
        die Abläufe im Betrieb zu stören.
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">
          PV-/Speicher-Business-Case für dein Unternehmen prüfen?
        </h2>
        <p className="text-zinc-700 mb-4">
          Wir analysieren Lastgang, Tarife und Flächen und entwerfen einen belastbaren
          Business-Case inkl. Fördercheck und Peak-Shaving-Plan.
        </p>

        {/* Demo-Form (ohne Funktion) */}
        <div
          className="mx-auto grid max-w-xl gap-3 text-left"
          role="group"
          aria-describedby="cta-note"
        >
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
            {author.role}. Fokus: PV-Strategie, Lastgang-Analysen, Energiespeicher.
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
          Bundesnetzagentur: EEG-Förderung & Fördersätze – Einspeisevergütung bis 100 kW,
          Marktprämie, Direktvermarktung.
          https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html
          {/* :contentReference[oaicite:9]{index=9} */}
        </li>
        <li>
          BMWK: Solarpaket I – Überblick & FAQ (Regelungen/Erleichterungen).
          https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Artikel/Energie/solarpaket-1.html
          {/* :contentReference[oaicite:10]{index=10} */}
        </li>
        <li>
          Fraunhofer ISE: Aktuelle Fakten zur Photovoltaik in Deutschland – Fassung vom
          18.08.2025.
          https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html
          {/* :contentReference[oaicite:11]{index=11} */}
        </li>
        <li>
          Fraunhofer ISE: Stromgestehungskosten erneuerbare Energien (2024).
          https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html
          {/* :contentReference[oaicite:12]{index=12} */}
        </li>
        <li>
          IEA: Renewables 2024 – Electricity & Markttrends bis 2030.
          https://www.iea.org/reports/renewables-2024/electricity
          {/* :contentReference[oaicite:13]{index=13} */}
        </li>
        <li>
          SMARD/BNetzA: Industriestrompreise – Entwicklung 2024/2025 (modelliert).
          https://www.smard.de/page/home/topic-article/444/215830/entwicklung-der-industriestrompreise
          {/* :contentReference[oaicite:14]{index=14} */}
        </li>
        <li>
          ADAC/Finanztip: Einspeisevergütung 2025 – aktuelle Sätze & Hinweise (neg. Preise).
          https://www.adac.de/rund-ums-haus/energie/spartipps/einspeiseverguetung-pv-anlagen/
          {/* :contentReference[oaicite:15]{index=15} */}
        </li>
        <li>
          KfW 270 – Erneuerbare Energien (Standard): Förderkredit für PV & Speicher.
          https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/Förderprodukte/Erneuerbare-Energien-Standard-(270)/
          {/* :contentReference[oaicite:16]{index=16} */}
        </li>
        <li>
          BAFA EEW Modul 4 – Basis-/Premiumförderung (KMU-Quoten & Bedingungen).
          https://www.bafa.de/DE/Energie/Energieeffizienz/Energieeffizienz_und_Prozesswaerme/Modul4_Energiebezogene_Optimierung_Basisfoerderung/modul4_energiebezogene_optimierung_basisfoerderung_node.html
          {/* :contentReference[oaicite:17]{index=17} */}
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow
          term="kWp"
          def="Kilowattpeak – installierte Spitzenleistung der PV-Module unter Standard-Testbedingungen."
        />
        <GlossaryRow
          term="Eigenverbrauchsquote"
          def="Anteil des erzeugten PV-Stroms, den das Unternehmen selbst nutzt (statt einzuspeisen)."
        />
        <GlossaryRow
          term="LCOE"
          def="Levelized Cost of Electricity – Stromgestehungskosten über die Lebensdauer je kWh."
        />
        <GlossaryRow
          term="Peak Shaving"
          def="Reduktion teurer Lastspitzen (kW) mit Speicher; senkt Leistungspreise/Netzentgelte je nach Tarif."
        />
        <GlossaryRow
          term="Direktvermarktung"
          def="Vermarktung des PV-Stroms an der Börse über einen Direktvermarkter; Vergütung via Marktpreis + Marktprämie."
        />
      </dl>
    </section>
  </article>
</>
);
}
