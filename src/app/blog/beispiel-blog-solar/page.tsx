import Head from "next/head";
import {
CheckCircle2,
ShieldCheck,
Gauge,
PiggyBank,
Battery,
SolarPanel,
Landmark,
BadgeEuro,
Factory,
Building2,
Calculator,
FileSearch,
ArrowRight,
Info,
CalendarClock,
Timer,
LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/**
──────────────────────────────────────────────────────────────────────────────
Green Energy im Unternehmen – Photovoltaik und Energiespeicher sinnvoll einsetzen
Ready-to-deploy Next.js article page
Style, structure & visual patterns based on the provided Beispielcode.
(TL;DR box, checkmark bullets, Kurzfazit design, gradients, 16:6 images)
──────────────────────────────────────────────────────────────────────────────
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
name: "Jonas Richter",
role: "Energie- & PV-Berater (10+ Jahre Erfahrung)",
image:
"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=240&h=240&q=80&crop=faces&fit=crop",
linkedin: "https://www.linkedin.com/in/jonas-richter/",
};
const reviewer = {
name: "Dr. Laura Hoffmann",
role: "EE-Ökonomin & Fördermittel-Expertin",
linkedin: "https://www.linkedin.com/in/laurahoffmann/",
};
const company = {
name: "Deine Firma GmbH",
url: "https://www.deinefirma.de",
logo:
"https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=256&h=256&q=80&fit=crop&crop=faces",
};
// Sections for ToC & reading time
const sections = [
{
id: "grundlagen",
title:
"Was bedeuten kWp, Eigenverbrauch, Marktprämie – und wie spielt der Speicher mit?",
content:
"Photovoltaik (PV) wandelt Sonnenlicht direkt in Strom um. Für Unternehmen sind Dachanlagen attraktiv, weil sie Lasten direkt auf dem Gelände decken (Eigenverbrauch). Die Kenngröße kWp beschreibt die Nennleistung unter Standardbedingungen, die reale Jahresarbeit liegt in Deutschland je nach Ausrichtung grob um 900–1.050 kWh je kWp. Speicher erhöhen die Eigenverbrauchsquote, glätten Lastspitzen und senken Netzentgelte, indem sie Leistungsspitzen kappen.",
},
{
id: "wirtschaftlichkeit",
title: "Wirtschaftlichkeit verstehen: LCOE vs. Strompreis & CO₂-Effekt",
content:
"Die Stromgestehungskosten (LCOE) neuer PV-Anlagen in Deutschland liegen deutlich unter typischen Gewerbestrompreisen. Für Entscheider heißt das: Je höher der Eigenverbrauchsanteil, desto schneller amortisiert sich die Anlage. Batteriespeicher erhöhen die Autarkie und helfen, Leistungspreise zu senken. Zusätzlich reduziert eigener Solarstrom die Emissionen des Strombezugs spürbar.",
},
{
id: "investition",
title: "Investition & Amortisation: Von CAPEX zu Payback",
content:
"Die Investition umfasst Module, Unterkonstruktion, Wechselrichter, DC/AC, Statik, Installation, ggf. Brandschutz, Speicher und Anschlusskosten. Amortisation ergibt sich aus vermiedenen Strombezugskosten, Einspeisevergütung und reduzierten Netzentgelten/Leistungspreisen. Ein solider Business Case rechnet konservativ mit Erträgen, Degradation, Betriebskosten und Zinskosten.",
},
{
id: "foerderung",
title: "Förderungen & Finanzierung: EEG, KfW, BAFA-EEW im Überblick",
content:
"Die EEG-Vergütung sichert planbare Einnahmen für Überschüsse. KfW-Kredite und die BAFA-EEW (Zuschuss/Bonus) verbessern die Liquidität. Wichtig: Der Nullsteuersatz bei PV-Lieferungen gilt vor allem bei Wohngebäuden oder begünstigten Gebäudetypen – klassische Gewerbedächer fallen meist nicht darunter.",
},
{
id: "planung",
title: "Dimensionierung & Technik: So planst du PV + Speicher richtig",
content:
"Startpunkt ist der Lastgang: Er entscheidet über Anlagengröße, Speicherbedarf und Ziel-Eigenverbrauch. Dachstatik, Verschattung, Brandschutz und Wartungswege sind Pflicht. Für Speicher gilt: typischerweise 1–3 Stunden Entladedauer; Round-Trip-Wirkungsgrade liegen oft bei 80–95 %, Zyklenzahlen im tausender Bereich – abhängig von Chemie und Betrieb.",
},
{
id: "fehler",
title: "Typische Fehler & Risiken: Was Projekte ausbremst",
content:
"Ohne Lastdaten und konservative Annahmen wird der Case schnell zu optimistisch. Häufige Fehler sind fehlende Sicherung gegen Preis- und Regulierungsrisiken, unklare Vertrags-/Gewährleistungsregeln und eine zu kleine (oder zu große) Speicherdimensionierung.",
},
];
const wordCount = sections.reduce(
(sum, s) => sum + s.content.split(/\s+/).length,
0
);
const readingMinutes = Math.max(12, Math.ceil(wordCount / 170)); // conservative
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
    className={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}
  >
    {children}
  </span>
);
const Anchor = ({ id }: { id: string }) => (
<div id={id} aria-hidden className="pt-24 -mt-24" /> ); // stable anchor
// Simple static SVG chart – PV vs. Netzstrom-Kostenvergleich
const CostChart = () => {
// Values illustrative; backed by sources in text (Fraunhofer ISE LCOE; BDEW Industriepreise).
const items = [
{ k: "PV (Rooftop, neu)", value: 12 }, // ct/kWh (typisch <15)
{ k: "Gewerbestrom 2025 (Ø klein/mittel)", value: 18 }, // ct/kWh BDEW
];
const max = 22;
const width = 720;
const barH = 28;
const gap = 18;
const padTop = 16;
const left = 220;
const right = width - 24;
const scale = (v: number) => ((right - left) * v) / max;
return (
<figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
<svg
viewBox={0 0 ${width} ${items.length * (barH + gap) + padTop}}
role="img"
aria-label="Diagramm: Vergleich PV-LCOE vs. durchschnittlicher Gewerbestrompreis (ct/kWh)"
>
<defs>
<linearGradient id="g1" x1="0" x2="1">
<stop offset="0%" stopColor="#047857" />
<stop offset="100%" stopColor="#10b981" />
</linearGradient>
</defs>
{items.map((row, i) => {
const y = padTop + i * (barH + gap);
const isPV = i === 0;
return (
<g key={row.k}>
<text x={10} y={y + barH - 8} className="fill-zinc-700" fontSize="12">
{row.k}
</text>
<rect
x={left}
y={y}
width={scale(row.value)}
height={barH}
fill={isPV ? "url(#g1)" : "#e5e7eb"}
rx="8"
/>
<text
x={left + scale(row.value) + 6}
y={y + barH - 8}
fontSize="12"
className={isPV ? "fill-emerald-700" : "fill-zinc-500"}
>
{row.value.toFixed(0)} ct
</text>
</g>
);
})}
</svg>
<figcaption className="mt-2 text-sm text-zinc-600">
PV-Stromgestehungskosten (LCOE) neuer Dachanlagen in DE oft <15 ct/kWh
vs. Ø Gewerbestrompreis ~18 ct/kWh (Neuabschlüsse 2025, inkl. Stromsteuer). 
Fraunhofer ISE
bdew.de

</figcaption>
</figure>
);
};
// Einspeisevergütung – kompakte Tabelle (08/2025–01/2026)
const FeedInTable = () => {
const rows = [
{
size: "≤10 kWp",
teil: "8,26",
voll: "12,87",
},
{
size: "≤40 kWp",
teil: "7,20",
voll: "10,85",
},
{
size: "≤100 kWp",
teil: "5,96",
voll: "10,85",
},
{
size: "≤400 kWp",
teil: "5,96",
voll: "9,03",
},
{
size: "≤1.000 kWp",
teil: "5,96",
voll: "7,78",
},
];
return (
<div className="mt-6 overflow-x-auto">
<table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="eeg-2025-caption" >
<caption id="eeg-2025-caption" className="sr-only">
EEG-Einspeisevergütung (08/2025–01/2026)
</caption>
<thead>
<tr className="text-left">
<th className="px-3 py-2">Anlagengröße</th>
<th className="px-3 py-2">Teileinspeisung (ct/kWh)</th>
<th className="px-3 py-2">Volleinspeisung (ct/kWh)</th>
</tr>
</thead>
<tbody>
{rows.map((r) => (
<tr key={r.size} className="bg-zinc-50 rounded-xl">
<th scope="row" className="px-3 py-2 font-medium">
{r.size}
</th>
<td className="px-3 py-2">{r.teil}</td>
<td className="px-3 py-2">{r.voll}</td>
</tr>
))}
</tbody>
</table>
<p className="text-xs text-zinc-600 mt-2">
Anzulegende Werte (Marktprämie) für Inbetriebnahmen 01.08.2025–31.01.2026, Gebäudeanlagen (§48 EEG 2023). Quelle: Bundesnetzagentur. 
bundesnetzagentur.de

</p>
</div>
);
};
export default function Article() {
const updated = formatDateDE();
const title =
"Green Energy im Unternehmen: Photovoltaik & Energiespeicher wirtschaftlich planen";
const description =
"PV & Batteriespeicher im Unternehmen: Investition, Amortisation, Förderungen (EEG, KfW, BAFA-EEW), Dimensionierung, Risiken – mit Zahlen & Checklisten.";
const canonical = ${company.url}/blog/pv-und-energiespeicher-im-unternehmen;
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
    <meta property="og:url" content={canonical} />
    <meta
      property="og:image"
      content={`${company.url}/og/pv-speicher-wirtschaftlichkeit.jpg`}
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content={`${company.url}/og/pv-speicher-wirtschaftlichkeit.jpg`}
    />

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
          image: `${company.url}/og/pv-speicher-wirtschaftlichkeit.jpg`,
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
      // eslint-disable-next-line react/no-danger
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
        Du möchtest Stromkosten senken, CO₂ reduzieren und unabhängiger
        werden? Dieser Leitfaden zeigt, wie Unternehmen Photovoltaik mit
        Energiespeichern so planen, dass sich Investition und Amortisation
        wirklich rechnen – inklusive Förderungen und konkreter
        Entscheidungslogik.
      </p>

      {/* Hero 16:6 – Placeholder with ideal prompt */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            {/* Placeholder, no actual fetch – describe ideal image for AI gen */}
            <img
              loading="eager"
              src={`${company.url}/hero/pv-rooftop-placeholder.jpg`}
              alt='Platzhalter: 16:9 KI-Bildprompt – "Großes Gewerbedach mit PV-Feld bei Sonne, Batterieschränke im Vordergrund, Mitarbeiter mit Helm prüft Lastgang, klare Linien, moderne Industriearchitektur"'
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="sr-only">
          Idealisiertes Hero-Motiv für PV & Speicher in Unternehmen
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
            <span className="sr-only">Zuletzt aktualisiert am </span>
            <time dateTime={new Date().toISOString()}>
              Zuletzt aktualisiert: {updated}
            </time>
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
          <strong>PV ist heute oft günstiger</strong> als Bezug: LCOE &lt; 15 ct/kWh
          sind typisch, Gewerbestrom liegt um ~18 ct/kWh (Neuabschlüsse 2025). :contentReference[oaicite:2]{index=2}
        </TLDRItem>
        <TLDRItem icon={Battery}>
          <strong>Speicher</strong> erhöht Eigenverbrauch, senkt <strong>Leistungspreise</strong> und hilft
          bei Negativpreis-Spitzen (Mittag). RTE i. d. R. 80–95 %, Zyklen &gt; 4.000. :contentReference[oaicite:3]{index=3}
        </TLDRItem>
        <TLDRItem icon={Landmark}>
          <strong>Förderungen</strong>: EEG-Einspeisevergütung, KfW-Kredite, BAFA-EEW-Zuschüsse –
          Kombination je nach Case möglich. :contentReference[oaicite:4]{index=4}
        </TLDRItem>
        <TLDRItem icon={PiggyBank}>
          <strong>Amortisation</strong> ergibt sich über vermiedene Stromkosten, Vergütung und
          reduzierte Netzentgelte/Leistungspreise; solide Lastdaten sind Pflicht. :contentReference[oaicite:5]{index=5}
        </TLDRItem>
        <TLDRItem icon={FileSearch}>
          <strong>Steuern/USt</strong>: 0 % USt gilt überwiegend bei Wohn-/begünstigten Gebäuden –
          reine Gewerbedächer meist mit 19 %. :contentReference[oaicite:6]{index=6}
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
            {sections[0].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
            {sections[1].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#investition">
            {sections[2].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#foerderung">
            {sections[3].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#planung">
            {sections[4].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#fehler">
            {sections[5].title}
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
      {/* 1 – Grundlagen */}
      <Anchor id="grundlagen" />
      <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
      <p className="mb-6 leading-relaxed">
        Photovoltaik (PV) erzeugt Gleichstrom aus Sonnenlicht; Wechselrichter
        wandeln ihn in Wechselstrom. Die Nennleistung (kWp) ist die
        Maximalleistung unter Standard-Testbedingungen. Real entscheidend ist die
        Jahresarbeit pro kWp (<em>Specific Yield</em>): Für deutsche Dachanlagen
        liegen die Vollbenutzungsstunden typischerweise um ~922 h/a (≈ kWh/kWp),
        abhängig von Ausrichtung, Neigung und Verschattung. :contentReference[oaicite:7]{index=7}
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <SolarPanel className={`w-5 h-5 ${accent}`} />
            <strong>Eigenverbrauch &amp; Einspeisung</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Eigenverbrauch: Direktnutzung im Betrieb senkt Strombezug.</CheckLi>
            <CheckLi>Einspeisung: Überschüsse werden vergütet (EEG/Marktprämie).</CheckLi>
            <CheckLi>Volleinspeiser vs. Teileinspeiser: je nach Lastprofil wählen.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Battery className={`w-5 h-5 ${accent}`} />
            <strong>Rolle des Speichers</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Erhöht Eigenverbrauchsquote und Autarkie.</CheckLi>
            <CheckLi>Peak Shaving: Senkt Leistungspreise aus Netzentgelten.</CheckLi>
            <CheckLi>RTE häufig 80–95 %; Zyklen &gt; 4.000 je nach Chemie und Betrieb.</CheckLi>
          </ul>
          <p className="text-xs text-zinc-600 mt-2">
            Wirkungsgrad-/Zyklusbereiche: Literatur-Reviews &amp; Programmberichte. :contentReference[oaicite:8]{index=8}
          </p>
        </div>
      </div>

      {/* 2 – Wirtschaftlichkeit */}
      <Anchor id="wirtschaftlichkeit" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="mb-5 leading-relaxed">
        Für neue Dach-PV liegen die Stromgestehungskosten (LCOE) laut
        Fraunhofer-Studien im Regelfall unter 15 ct/kWh. Gleichzeitig zahlen
        kleine bis mittlere Industriebetriebe 2025 im Durchschnitt rund
        18 ct/kWh (Neuabschlüsse, inkl. Stromsteuer). Der direkte Ersatz von
        Bezugsstrom durch Eigenproduktion erzeugt somit einen stabilen
        Kostenvorteil, der durch Speicher weiter vergrößert werden kann. :contentReference[oaicite:9]{index=9}
      </p>

      <CostChart />

      <p className="mt-5 leading-relaxed">
        Neben Kosten wirkt auch CO₂: PV-Strom in Deutschland erreicht – je nach
        Standort und Technologie – Lebenszyklus-Emissionen von grob 30–35 g
        CO₂e/kWh, deutlich unter dem Strommix. :contentReference[oaicite:10]{index=10}
      </p>

      {/* Unsplash Bild 1 – 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600&h=600&fit=crop&crop=entropy&q=80"
            alt="Gewerbedach mit PV-Modulen in der Sonne – Symbol für Eigenverbrauch im Unternehmen"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <figcaption className="text-sm text-zinc-600">
          Eigenverbrauch ist der größte Hebel für die Wirtschaftlichkeit.
        </figcaption>
      </figure>

      {/* 3 – Investition & Amortisation */}
      <Anchor id="investition" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <PiggyBank className={`w-5 h-5 ${accent}`} /> Kostenblöcke (CapEx &amp; OpEx)
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Module, Unterkonstruktion, Wechselrichter, DC/AC.</CheckLi>
            <CheckLi>Installation, Statik/Brandschutz, Netzanschluss.</CheckLi>
            <CheckLi>Speicher: Leistung (kW) &amp; Kapazität (kWh), EMS.</CheckLi>
            <CheckLi>Betrieb: Wartung, Versicherung, Monitoring, Rücklagen.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Calculator className={`w-5 h-5 ${accent}`} /> Payback-Treiber
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Eigenverbrauchsanteil &amp; Strompreis (Arbeitspreis).</CheckLi>
            <CheckLi>Einspeisevergütung (Volleinspeiser/Teileinspeiser).</CheckLi>
            <CheckLi>Leistungspreisreduktion via Peak Shaving.</CheckLi>
            <CheckLi>Förderkonditionen (Zins/Zuschuss), steuerliche Effekte.</CheckLi>
          </ul>
          <p className="text-xs text-zinc-600 mt-2">
            Netzentgelt-Systematik inkl. Leistungspreis für Unternehmen. :contentReference[oaicite:11]{index=11}
          </p>
        </div>
      </div>

      {/* Beispielhafte EEG-Tabelle */}
      <FeedInTable />

      {/* Vergleichstabelle – Beispielannahmen */}
      <div className="mt-8 overflow-x-auto">
        <table
          className="w-full text-sm border-separate border-spacing-y-2"
          aria-describedby="bc-caption"
        >
          <caption id="bc-caption" className="sr-only">
            Beispielhafte Business-Case-Parameter
          </caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Parameter</th>
              <th className="px-3 py-2">PV + Speicher</th>
              <th className="px-3 py-2">Nur Netzbezug</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                p: "Ersatz Strombezug (ct/kWh)",
                a: "≈ 12–15 (LCOE PV) + Speicherverluste",
                b: "≈ 18 (Ø 2025 klein/mittel)",
              },
              {
                p: "Leistungspreise (€/kW·a)",
                a: "↓ durch Peak Shaving",
                b: "Unverändert",
              },
              {
                p: "Preisrisiko",
                a: "↓ (Fixkosten-dominiert)",
                b: "↑ (Marktpreise/Abgaben)",
              },
            ].map((row) => (
              <tr key={row.p} className="bg-zinc-50 rounded-xl">
                <th scope="row" className="px-3 py-2 font-medium">
                  {row.p}
                </th>
                <td className="px-3 py-2">{row.a}</td>
                <td className="px-3 py-2">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-zinc-600 mt-2">
          LCOE/Preise auf Basis jüngster Studien/Verbandszahlen; Details siehe Quellen. :contentReference[oaicite:12]{index=12}
        </p>
      </div>

      {/* 4 – Förderungen & Finanzierung */}
      <Anchor id="foerderung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Relevante Programme
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <Pill>EEG</Pill> Marktprämie/Einspeisevergütung, Sätze je Segment (vgl.
              Tabelle oben). :contentReference[oaicite:13]{index=13}
            </li>
            <li>
              <Pill>KfW</Pill> Kredite/Finanzierung für PV im Unternehmen (Zinsvorteile,
              Laufzeiten). :contentReference[oaicite:14]{index=14}
            </li>
            <li>
              <Pill>BAFA-EEW</Pill> Zuschüsse/Bonusse für Energie- &amp; Ressourceneffizienz
              (u. a. Lastmanagement/Prozessoptimierung, Speicher teils integrierbar). :contentReference[oaicite:15]{index=15}
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeEuro className={`w-5 h-5 ${accent}`} /> Steuer-/USt-Hinweise
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>
              0 % USt nach § 12 Abs. 3 UStG gilt für Lieferungen&nbsp;an/nahe
              Wohngebäuden bzw. begünstigten Gebäuden –{" "}
              <em>Gewerbedächer sind meist nicht begünstigt</em>.
            </CheckLi>
            <CheckLi>
              Prüfe Vorsteuerabzug/Optionen bei Unternehmer-Erwerb und Mischnutzung.
            </CheckLi>
          </ul>
          <p className="text-xs text-zinc-600 mt-2">
            Offizielle FAQ &amp; Leitfäden geben Details/Beispiele. :contentReference[oaicite:16]{index=16}
          </p>
        </div>
      </div>

      {/* Unsplash Bild 2 – 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1584276433295-4b60a54d5b39?w=1600&h=600&fit=crop&crop=entropy&q=80"
            alt="Batterieschränke (BESS) in Industriehalle – symbolisiert Peak Shaving & Lastmanagement"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <figcaption className="text-sm text-zinc-600">
          Batteriespeicher verschieben Solarstrom und kappen teure Leistungsspitzen.
        </figcaption>
      </figure>

      {/* 5 – Planung & Dimensionierung */}
      <Anchor id="planung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
      <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
        <li>
          <strong>Lastgang analysieren:</strong> 12–24 Monate Daten (15-min/1-min)
          zeigen Baseline, Spitzen und PV-Potenzial.
        </li>
        <li>
          <strong>Dach &amp; Standort prüfen:</strong> Statik, Dachhaut, Brandschutz,
          Verschattung, Flucht-/Wartungswege, Blitzschutz.
        </li>
        <li>
          <strong>PV-Größe bestimmen:</strong> Ziel-Eigenverbrauch festlegen; bei
          Rooftop sind ~900–1.050 kWh/kWp·a üblich (Ausrichtung!). :contentReference[oaicite:17]{index=17}
        </li>
        <li>
          <strong>Speicher dimensionieren:</strong> Für Peak Shaving 1–2 h Volllast,
          für Eigenverbrauch 2–4 h; RTE berücksichtigen. :contentReference[oaicite:18]{index=18}
        </li>
        <li>
          <strong>Netz &amp; Entgelte:</strong> Arbeitspreis vs. Leistungspreis im Blick;
          perspektivisch Reformen/Kapazitätspreise diskutiert. :contentReference[oaicite:19]{index=19}
        </li>
        <li>
          <strong>Wirtschaftlich rechnen:</strong> LCOE, CAPEX, OPEX, Degradation,
          Finanzierungszins, Vergütung, CO₂– und Preisrisiken.
        </li>
      </ol>

      {/* 6 – Fehler & Best Practices */}
      <Anchor id="fehler" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-rose-700" /> Vermeidbare Fehler
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Invest ohne Lastdaten → falsche Größe, niedriger Eigenverbrauch.
            </li>
            <li>
              Speicher rein „kWh-getrieben“ → Peak Shaving übersehen, RTE/Zyklen
              ignoriert.
            </li>
            <li>
              Vergütungs-/USt-Regeln nicht sauber geprüft → Planabweichungen.
            </li>
            <li>Unklare O&amp;M-/Garantie- und Schnittstellenverantwortung.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>Lastgang + Szenarien (Preis, Wachstum, Schichten) simulieren.</li>
            <li>PV-Layout mit Verschattungssimulation &amp; Brandschutz prüfen.</li>
            <li>EMS-Regeln: Eigenverbrauch vor Einspeisung, Peak Shaving priorisieren.</li>
            <li>Fördermix (EEG + KfW + EEW) früh mit Bank/BAFA abstimmen.</li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/lastgang-analysieren">
              Lastgang analysieren &amp; Peak Shaving planen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/ppa-stromliefervertrag">
              Solar-PPA für Unternehmen: Chancen &amp; Risiken
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/co2-bilanz-strommix">
              CO₂-Bilanz von Strommix vs. Eigenstrom
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
            q: "Volleinspeiser oder Teileinspeiser – was ist wirtschaftlicher?",
            a: "Teileinspeiser profitieren vom Ersatz teuren Bezugsstroms (Eigenverbrauch), Volleinspeiser erzielen höhere Vergütungssätze je kWh. Die richtige Wahl hängt vom Lastprofil und der möglichen Eigenverbrauchsquote ab.",
          },
          {
            q: "Wie groß soll mein Speicher sein?",
            a: "Für Peak Shaving orientiert man sich an der Differenz zwischen Lastspitzen und Grundlast (1–2 h Entladedauer). Für Eigenverbrauch typisch 2–4 h. Prüfe RTE und garantierte Zyklen der Batterie.",
          },
          {
            q: "Wie wirken negative Börsenpreise?",
            a: "Sie treten v. a. an sonnigen Mittagen auf. Mit Speicher kannst du Überschüsse puffern und Last verlagern – das erhöht den Nutzen der PV-Anlage im Betrieb. ",
          },
          {
            q: "Welche Förderungen sind 2025 relevant?",
            a: "EEG (Einspeisevergütung), KfW-Finanzierungen für PV-Projekte und BAFA-EEW-Zuschüsse (insb. bei Effizienz-/Dekarbonisierungsprojekten).",
          },
          {
            q: "Gilt die 0 % USt auch bei Firmengebäuden?",
            a: "Nur wenn das Gebäude die Voraussetzungen (z. B. Wohn- oder begünstigte Nutzung) erfüllt. Reine Gewerbedächer fallen in der Regel nicht darunter – dort gilt der Regelsteuersatz.",
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Volleinspeiser oder Teileinspeiser – was ist wirtschaftlicher?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Teileinspeiser profitieren vom Ersatz teuren Bezugsstroms (Eigenverbrauch), Volleinspeiser erzielen höhere Vergütungssätze je kWh. Die richtige Wahl hängt vom Lastprofil und der möglichen Eigenverbrauchsquote ab.",
                },
              },
              {
                "@type": "Question",
                name: "Wie groß soll mein Speicher sein?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Für Peak Shaving orientiert man sich an der Differenz zwischen Lastspitzen und Grundlast (1–2 h Entladedauer). Für Eigenverbrauch typisch 2–4 h. Prüfe RTE und garantierte Zyklen der Batterie.",
                },
              },
              {
                "@type": "Question",
                name: "Wie wirken negative Börsenpreise?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Sie treten v. a. an sonnigen Mittagen auf. Mit Speicher kannst du Überschüsse puffern und Last verlagern – das erhöht den Nutzen der PV-Anlage im Betrieb.",
                },
              },
              {
                "@type": "Question",
                name: "Welche Förderungen sind 2025 relevant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "EEG (Einspeisevergütung), KfW-Finanzierungen für PV-Projekte und BAFA-EEW-Zuschüsse (insb. bei Effizienz-/Dekarbonisierungsprojekten).",
                },
              },
              {
                "@type": "Question",
                name: "Gilt die 0 % USt auch bei Firmengebäuden?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Nur wenn das Gebäude die Voraussetzungen (z. B. Wohn- oder begünstigte Nutzung) erfüllt. Reine Gewerbedächer fallen in der Regel nicht darunter – dort gilt der Regelsteuersatz.",
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
        <strong>PV + Speicher sind für viele Unternehmen heute ein klarer Business Case:</strong>{" "}
        PV-Stromgestehungskosten liegen deutlich unter typischen Gewerbestrompreisen.
        Der Speicher hebt die Eigenverbrauchsquote, reduziert Leistungspreise und
        macht dich robuster gegen Preisspitzen und Negativpreise. Mit EEG-Vergütung,
        KfW-Finanzierungen und BAFA-EEW kannst du die Amortisation zusätzlich
        verbessern. Entscheidend sind ein sauberer Lastgang, konservative Annahmen und
        eine Größenwahl, die Eigenverbrauch und Peak Shaving optimal balanciert. :contentReference[oaicite:20]{index=20}
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">PV-/Speicher-Wirtschaftlichkeitscheck?</h2>
        <p className="text-zinc-700 mb-4">
          Wir analysieren deinen Lastgang und rechnen einen belastbaren Business Case
          inkl. Fördermix (EEG/KfW/EEW), Peak-Shaving-Strategie und Amortisationsplan.
        </p>

        {/* Form UI only */}
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
            {author.role}. Fokus: PV-Wirtschaftlichkeit, BESS, Netzentgelte &amp; Förderungen.
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
          Fraunhofer ISE (2024): Levelized Cost of Electricity – Renewable Energy
          Technologies. (LCOE PV &lt; 15 ct/kWh). :contentReference[oaicite:21]{index=21}
        </li>
        <li>
          BDEW (Juli 2025): Strompreisanalyse – Ø Neuabschlüsse klein/mittel 2025 ~
          18 ct/kWh inkl. Stromsteuer. :contentReference[oaicite:22]{index=22}
        </li>
        <li>
          Bundesnetzagentur (EEG 2023/2025): Anzulegende Werte 08/2025–01/2026
          (Gebäudeanlagen). :contentReference[oaicite:23]{index=23}
        </li>
        <li>
          Fraunhofer ISE (2025): Recent Facts about Photovoltaics in Germany – Vollbenutzungsstunden Dach ~922 h. :contentReference[oaicite:24]{index=24}
        </li>
        <li>
          KfW (2025): Photovoltaik für Unternehmen – Übersicht Fördermöglichkeiten. :contentReference[oaicite:25]{index=25}
        </li>
        <li>
          BAFA/EEW (2024/2025): Bundesförderung für Energie- und
          Ressourceneffizienz in der Wirtschaft. :contentReference[oaicite:26]{index=26}
        </li>
        <li>
          BMF (2023–2025): FAQ Nullsteuersatz § 12 Abs. 3 UStG (PV). :contentReference[oaicite:27]{index=27}
        </li>
        <li>
          NYSERDA (2024): Storage Impact – RTE-Bandbreite Li-Ion 77–95 %. :contentReference[oaicite:28]{index=28}
        </li>
        <li>
          MDPI Batteries (2025): Review – Li-Ion Zyklen &gt; 4.000 möglich (chemie-/betriebsspezifisch). :contentReference[oaicite:29]{index=29}
        </li>
        <li>
          FfE (2025): Negative Strompreise am Day-Ahead 2024 (459 h). :contentReference[oaicite:30]{index=30}
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
          <dt className="font-semibold text-zinc-900">kWp</dt>
          <dd className="text-zinc-700">
            Kilowatt Peak – Nennleistung der PV unter Standard-Testbedingungen.
          </dd>
        </div>
        <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
          <dt className="font-semibold text-zinc-900">Eigenverbrauch</dt>
          <dd className="text-zinc-700">
            Anteil des erzeugten PV-Stroms, der direkt im Unternehmen genutzt wird.
          </dd>
        </div>
        <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
          <dt className="font-semibold text-zinc-900">Marktprämie</dt>
          <dd className="text-zinc-700">
            EEG-Fördermechanismus: Differenz zwischen Marktpreis und anzulegendem
            Wert wird ausgeglichen.
          </dd>
        </div>
        <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
          <dt className="font-semibold text-zinc-900">Leistungspreis</dt>
          <dd className="text-zinc-700">
            Netzentgeltkomponente für die maximale abgenommene Leistung (€/kW·a).
          </dd>
        </div>
        <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
          <dt className="font-semibold text-zinc-900">RTE</dt>
          <dd className="text-zinc-700">
            Round-Trip-Effizienz von Speichern; Verhältnis abgegebener zu aufgenommener Energie.
          </dd>
        </div>
      </dl>
    </section>
  </article>
</>
);
}
