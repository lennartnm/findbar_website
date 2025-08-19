import Head from "next/head";
import {
CheckCircle2,
ArrowRight,
Info,
CalendarClock,
Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
// ---------- Helper ----------
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
// Farbwelt
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";
// Autor, Review, Firma (E-E-A-T)
const author = {
name: "Jana Weber, M.Sc.",
role: "Energieökonomin & PV-Projektleiterin",
image: "/autor.webp",
linkedin: "https://www.linkedin.com/in/janaweber-energy/",
};
const reviewer = {
name: "Dr. Leon Fischer",
role: "Elektroingenieur (TÜV)",
linkedin: "https://www.linkedin.com/in/leon-fischer/",
};
const company = {
name: "Ihre Firma GmbH",
url: "https://www.deinefirma.de",
logo: "/logo.png",
};
// ---------- Sections for ToC & Lesedauer ----------
const sections = [
{
id: "grundlagen",
title: "Was bringt PV im Betrieb? Grundlagen in 5 Minuten",
content:
"Photovoltaik (PV) wandelt Sonnenlicht in Strom. Für Unternehmen heißt das: weniger Stromzukauf, planbare Energiekosten und ein messbarer CO2-Impact. Zentrale Begriffe: kWp (Kilowattpeak, die installierte Spitzenleistung), kWh (Kilowattstunde, die erzeugte/verbrauchte Energie), Eigenverbrauchsquote (Anteil des PV-Stroms, den du selbst nutzt) und Lastprofil (wie dein Verbrauch über den Tag verläuft). Für flache Gewerbedächer sind Ost-West- oder Süd-Ausrichtungen möglich – Süd maximiert Jahresertrag, Ost-West glättet die Produktion und passt besser zu typischen Betriebszeiten. Batteriespeicher erhöhen den Eigenverbrauch, verschieben PV-Strom in Abend-/Morgenstunden und helfen, teure Lastspitzen (kW) zu kappen.",
},
{
id: "status-quo",
title: "Status quo 2025: Vergütungssätze, Strompreise & neue Regeln",
content:
"Zum 1. August 2025 gelten für neue Anlagen bis 100 kW EEG-Fördersätze von 7,86 ct/kWh (Teileinspeisung bis 10 kWp) und 12,47 ct/kWh (Volleinspeisung bis 10 kWp); für 10–40 kWp: 6,80 bzw. 10,45 ct/kWh; für 40–100 kWp: 5,56 bzw. 10,45 ct/kWh. Parallel zahlen kleine bis mittlere Industriebetriebe bei Neuabschlüssen im Schnitt rund 18 ct/kWh für Strom (2025). Seit Februar 2025 gilt zudem das „Solarspitzengesetz“: Bei negativen Börsenstrompreisen gibt es für Neuanlagen zeitweise keine Vergütung; diese Zeiträume werden an das Ende der 20-jährigen Vergütungsdauer angehängt. Fazit: Eigenverbrauch bleibt der wichtigste Hebel, Speicher werden wirtschaftlich relevanter.",
},
{
id: "planung",
title: "Von der Idee zum Konzept: Bedarf, Größe & Eigenverbrauch planen",
content:
"Starte mit Messdaten: Mindestens zwei Wochen Lastgang (15-Min-Werte) – ideal 12 Monate. Schätze den spezifischen PV-Ertrag am Standort (in DE grob 900–1.100 kWh/kWp·a, abhängig von Ausrichtung/Neigung). Ziel: Eine Anlagengröße, die tagsüber einen hohen Eigenverbrauch ermöglicht. Speichergröße leitest du aus der Restkurve ab: Wie viel PV-Überschuss fällt an, und welche Abend-/Frühspitzen möchtest du decken? Richtwert für Gewerbe: 1,5–3 kWh Speicherkapazität pro kWp PV zur Eigenverbrauchsoptimierung – abhängig von Öffnungszeiten, E-Mobilität und Prozessen.",
},
{
id: "business-case",
title: "Business Case: Investition, Amortisation & Beispielrechnung",
content:
"Investitionskosten variieren je nach Dach, Statik und Elektrik. Für 50–200 kWp-Aufdachanlagen liegen typische Bandbreiten 2025 oft zwischen ~800 und 1.500 €/kWp. Gewerbliche Lithium-Speicher bewegen sich (turnkey, abhängig von Leistung, Dauer, Brandschutz) grob in der Größenordnung ~250–500 €/kWh. Laufende Kosten für Wartung/Versicherung kann man mit 1–2 % p. a. vom Invest abschätzen. Wirtschaftlichkeit treibt vor allem: Strompreis (bezogen vs. vermieden), Eigenverbrauchsquote, Einspeisetarife, negative-Preis-Regel, Speicherwirkungsgrad (~90 %) und Zyklenlebensdauer (mehrere tausend Vollzyklen).",
},
{
id: "foerderung",
title: "Förderungen & Finanzierung: EEG, Marktprämie, KfW-270 & Co.",
content:
"EEG-Einspeisevergütung oder Marktprämie sichern Erlöse. Das Solarpaket I vereinfacht u. a. Genehmigungen, hebt teils die Direktvermarktungspflicht an und stärkt Mieterstrom. Für CAPEX-Finanzierung nutzen Unternehmen häufig das KfW-Programm 270 (zinsgünstiger Kredit). Zusätzlich können PPAs, Contracting oder Energy-as-a-Service Lösungen CAPEX vom CAPEX-Budget entkoppeln. Steuerlich gilt in der Praxis häufig lineare AfA über 20 Jahre; der 0-%-USt-Satz greift in der Regel nur bei PV/Batterien auf oder an Wohngebäuden – bei reinen Gewerbebauten meist nicht.",
},
{
id: "fehler",
title: "Typische Fehler & Risiken – und wie du sie vermeidest",
content:
"Häufige Stolpersteine: Zu kleine Eigenverbrauchsbasis, fehlende Lastdaten, Speicher nur „nach Gefühl“, Netzanschlussfragen zu spät geklärt, unterschätzte Regelungen (z. B. negative Preise, Smart-Meter-Pflichten), unrealistische Ertragsannahmen und zu optimistische OPEX-/Lebensdauer-Annahmen. Mit sauberem Mess- und Angebotsvergleich, realistischen Annahmen und klaren Verträgen lassen sich die Risiken stark reduzieren.",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // ~180 wpm
// ---------- UI Components ----------
const TLDRItem = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-3">
 <ArrowRight className={`w-5 h-5 mt-1 ${accent}`} aria-hidden="true" />
 <span>{children}</span>
 </li>
 );
const CheckLi = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-2">
 <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden="true" />
 <span className="flex-1">{children}</span>
 </li>
 );
const Pill = ({ children }: { children: ReactNode }) => (
  <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}>
    {children}
  </span>
);
const Anchor = ({ id }: { id: string }) => (
<div id={id} aria-hidden="true" className="pt-24 -mt-24" />
 ); // stable anchor
// --------- Static SVG Chart (no client JS) ----------
const ComparisonChart = () => {
// Vergleich: Teileinspeisung (Eigenverbrauch) vs. Volleinspeisung
const items = [
{ k: "Wirtschaftlichkeit im Mittel", vergleich1: 9, vergleich2: 6 },
{ k: "Planbarkeit der Erlöse", vergleich1: 8, vergleich2: 7 },
{ k: "Regelungsrisiko (Negativpreise)", vergleich1: 8, vergleich2: 6 },
{ k: "Bürokratie/Komplexität", vergleich1: 7, vergleich2: 6 },
{ k: "Netznutzen/Lastverschiebung mit Speicher", vergleich1: 9, vergleich2: 5 },
{ k: "Skalierbarkeit auf Bestandsdächern", vergleich1: 8, vergleich2: 8 },
];
// Legende: vergleich1 = Teileinspeisung (Eigenverbrauch), vergleich2 = Volleinspeisung
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
aria-label="Bewertung (0–10) zweier PV-Strategien: Teileinspeisung/Eigenverbrauch (grau, oben) vs. Volleinspeisung (grün, unten) nach sechs Kriterien"
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
          {/* Teileinspeisung (grau, top bar) */}
          <rect x={left} y={y} width={scale(row.vergleich1)} height={barH} fill="#e5e7eb" rx="6" />
          <text x={left + scale(row.vergleich1) + 6} y={y + barH - 4} fontSize="11" className="fill-zinc-500">
            {row.vergleich1}
          </text>
          {/* Volleinspeisung (grün, bottom bar) */}
          <rect x={left} y={y + barH + gap} width={scale(row.vergleich2)} height={barH} fill="url(#g1)" rx="6" />
          <text x={left + scale(row.vergleich2) + 6} y={y + barH + gap + barH - 4} fontSize="11" className="fill-emerald-700">
            {row.vergleich2}
          </text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Einordnung basierend auf aktuellen EEG-Sätzen (08/2025), Strompreisen im Mittelstand und der Negativpreis-Regel (Solarspitzengesetz). Quellen u. a.: Bundesnetzagentur; BDEW.
  </figcaption>
</figure>

  );
};
// Glossary row
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4">
 <dt className="font-semibold text-zinc-900">{term}</dt>
 <dd className="text-zinc-700">{def}</dd>
 </div>
 );
export default function Article() {
const updated = formatDateDE();
const title = "PV & Speicher im Unternehmen: Investition, Amortisation, Förderungen richtig planen";
const description = "So planst du PV-Anlagen und Batteriespeicher wirtschaftlich: aktuelle EEG-Sätze 2025, ROI-Rechnung, KfW-270 & Praxis-Tipps.";
const canonical = ${company.url}/blog/pv-speicher-wirtschaftlich-planen;
// FAQ Content (sichtbar + Schema)
const faqs = [
{
q: "Wann lohnt sich ein Batteriespeicher im Gewerbe wirklich?",
a: "Wenn dein Lastprofil deutliche Abend-/Morgenspitzen hat, der Arbeitspreis hoch ist und viel PV-Überschuss anfällt. Speicher erhöhen die Eigenverbrauchsquote und helfen, Lastspitzen (kW) zu kappen. Rechne konservativ mit ~90 % Rundtrip-Wirkungsgrad und realistischen Zyklen – die Wirtschaftlichkeit hängt stark von Nutzung und Strompreis ab.",
},
{
q: "Welche EEG-Vergütung gilt aktuell für neue Dachanlagen bis 100 kW?",
a: "Für Inbetriebnahmen vom 1. August 2025 bis 31. Januar 2026 gelten (Gebäude): Teileinspeisung 7,86/6,80/5,56 ct/kWh (≤10/≤40/≤100 kW), Volleinspeisung 12,47/10,45/10,45 ct/kWh. Für Direktvermarktung gelten entsprechende anzulegende Werte.",
},
{
q: "Was ändert das „Solarspitzengesetz“ für Unternehmen?",
a: "Bei negativen Börsenstrompreisen entfällt für neue Anlagen (ab 25.02.2025, Details je nach Smart-Meter-Status) die Vergütung in diesen Zeitfenstern; die Zeiträume werden an die Vergütungsdauer angehängt. Ohne Smart Meter/Steuerbox gilt teils eine 60-%-Einspeisegrenze.",
},
{
q: "Welche Förderungen gibt es für Firmen?",
a: "Neben EEG (Einspeisevergütung/Marktprämie) ist KfW-270 die Standardfinanzierung für PV/Speicher. Je nach Bundesland kommen Programme für Speicher/Ladeinfrastruktur hinzu. Alternativen: PPA, Contracting oder Energy-as-a-Service, um CAPEX zu vermeiden.",
},
{
q: "Wie setze ich die AfA und die 0-%-USt korrekt an?",
a: "In der Praxis wird PV häufig linear über 20 Jahre abgeschrieben (AfA). Der 0-%-USt-Satz gilt in der Regel für Lieferungen/Installationen auf oder in der Nähe von Wohngebäuden – bei reinen Gewerbebauten meist nicht. Bitte steuerlich prüfen lassen.",
},
];
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
    <meta property="og:image" content="/hero-placeholder.webp" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/hero-placeholder.webp" />

    {/* Article Schema.org */}
    <script
      type="application/ld+json"
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
          image: "/hero-placeholder.webp",
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

  <article lang="de" className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-10 text-zinc-900">
    {/* Header */}
    <header className="mb-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">{title}</h1>
      <p className="mt-3 text-lg text-zinc-700">
        Du willst PV und Speicher wirtschaftlich einsetzen? Hier findest du aktuelle Vergütungssätze (2025), eine einfache ROI-Rechnung, Förderoptionen und konkrete Planungsschritte.
      </p>

      {/* Hero 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/hero-placeholder.webp" />
            <img loading="lazy" src="/hero-placeholder.webp" alt="Illustration: Unternehmensdach mit PV, Batteriespeicher im Technikraum, Lastgang-Diagramm" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
        </div>
        <figcaption className="sr-only">
          Ideal für ein KI-Hero: „Industriehalle im Morgenlicht mit PV-Modulen auf dem Flachdach, innen ein Batteriespeicher-Rack; Fokus auf Nachhaltigkeit, Wirtschaftlichkeit; 16:9“
        </figcaption>
      </figure>

      {/* Meta row */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
        <div className="flex items-center gap-3">
          <img src={author.image} alt="Autor:in" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
          <div>
            <div className="font-medium text-zinc-900">{author.name}</div>
            <div>{author.role}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
          <CalendarClock className="w-4 h-4 text-zinc-600" aria-hidden="true" />
          <div>
            <span className="sr-only">Zuletzt aktualisiert am </span>
            <time dateTime={new Date().toISOString()}>{updated}</time>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
          <Timer className="w-4 h-4 text-zinc-600" aria-hidden="true" />
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
        <TLDRItem><strong>Eigenverbrauch schlägt Einspeisung:</strong> Mit ~18 ct/kWh Stromkosten im Mittelstand und EEG-Sätzen von ~5,6–12,5 ct/kWh ist die Nutzung im Betrieb meist wirtschaftlicher als die Volleinspeisung.</TLDRItem>
        <TLDRItem><strong>Solarspitzengesetz beachten:</strong> Bei negativen Börsenpreisen entfällt die Vergütung zeitweise – Speicher/Lastverschiebung erhöhen deshalb den Nutzen der Anlage.</TLDRItem>
        <TLDRItem><strong>Planung datenbasiert:</strong> Lastgang (15-Min), spezifischer Ertrag (~900–1.100 kWh/kWp·a), Ziel-Eigenverbrauchsquote und Speichergröße (Richtwert 1,5–3 kWh/kWp) bestimmen den Business Case.</TLDRItem>
        <TLDRItem><strong>Invest & Opex realistisch:</strong> Aufdach-Gewerbe: ~800–1.500 €/kWp; Speicher grob ~250–500 €/kWh; Opex 1–2 % p. a.; Wirkungsgrad ~90 %, mehrere tausend Zyklen.</TLDRItem>
        <TLDRItem><strong>Förderung/Finanzierung:</strong> EEG oder Marktprämie, KfW-270, ggf. Mieterstrom/PPAs/Contracting. AfA häufig 20 Jahre; 0-%-USt in der Regel nur bei Wohngebäuden.</TLDRItem>
      </ul>
    </aside>

    {/* ToC */}
    <nav aria-label="Inhaltsverzeichnis" className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
      <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
      <ol className="list-decimal ml-5 space-y-2">
        <li><a className={`hover:underline ${accent} font-medium`} href="#grundlagen">Grundlagen & Begriffe</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#status-quo">Status quo 2025</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#planung">Planung: Größe & Speicher</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#business-case">Business Case & ROI</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#foerderung">Förderungen & Finanzierung</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#fehler">Fehler vermeiden</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#faq">FAQ</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">Kurzfazit</a></li>
      </ol>
    </nav>

    {/* Content */}
    <section>
      {/* 1 */}
      <Anchor id="grundlagen" />
      <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
      <p className="mb-6 leading-relaxed">{sections[0].content}</p>

      {/* Erklärung von zwei zentralen fachlichen Gegebenheiten */}
      <div className="grid md:grid-cols-2 gap-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="mb-2">
            <strong>Eigenverbrauch vs. Einspeisung</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Eigenverbrauch spart deinen Beschaffungspreis (inkl. Umlagen/Abgaben) – meist deutlich über EEG-Vergütung.</CheckLi>
            <CheckLi>Volleinspeisung bietet höhere Vergütungssätze als Überschuss, ist aber weniger flexibel und sensibler für Negativpreise.</CheckLi>
            <CheckLi>Mit Speicher verschiebst du PV-Strom in teure Zeiten und reduzierst Lastspitzen (kW-Bezug).</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="mb-2">
            <strong>Spezifischer Ertrag & Lastprofil</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Richtwert in Deutschland: ~900–1.100 kWh/kWp·a (Standort, Neigung, Verschattung beachten).</CheckLi>
            <CheckLi>Ein 100 kWp-Dach liefert grob 90.000–110.000 kWh/Jahr – wichtig für die Dimensionierung von Speicher & Anschluss.</CheckLi>
            <CheckLi>15-Min-Messdaten (mind. 2 Wochen, besser 12 Monate) sind Basis für saubere Auslegung.</CheckLi>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <Anchor id="status-quo" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="mb-5 leading-relaxed">{sections[1].content}</p>

      {/* Chart */}
      <ComparisonChart />

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          (indirektes Zitat) Studien von Fraunhofer ISE zeigen: PV zählt in Deutschland zu den günstigsten Stromerzeugungsoptionen; auf Dächern liegen die Stromgestehungskosten im niedrigen bis einstelligen Cent-Bereich pro kWh – ein starkes Argument für Eigenverbrauch.
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">— Fraunhofer ISE, LCOE-Studien & Photovoltaics Report (2024/2025)</figcaption>
      </figure>

      {/* 3 */}
      <Anchor id="planung" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <p className="leading-relaxed mb-4">{sections[2].content}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2">PV ohne Speicher – wann sinnvoll?</h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Wenn dein Tagesverbrauch groß ist (z. B. Produktion/Logistik) und PV-Erzeugung tagsüber direkt genutzt wird.</CheckLi>
            <CheckLi>Wenn Netzanschluss/Statik die Speicherintegration vorerst erschweren und du schnell starten willst.</CheckLi>
            <CheckLi>Wenn Einspeisesätze/Marktprämie und geringe Negativpreis-Risiken am Standort den Case tragen.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2">PV + Speicher – wann sinnvoll?</h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Bei deutlichen Abend-/Morgenspiten, Break-Even durch vermiedene kWh-Kosten + Lastspitzen (kW-Preis).</CheckLi>
            <CheckLi>Wenn du Flexibilität für E-Mobilität/Prozesse brauchst und Negativpreis-Zeitfenster überbrücken willst.</CheckLi>
            <CheckLi>Wenn du Lastverschiebung (Peak-Shaving, Time-Shifting) und ggf. Vermarktung/Regelleistung perspektivisch planst.</CheckLi>
          </ul>
        </div>
      </div>

      {/* Vergleichstabelle */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
          <caption id="vergleich-caption" className="sr-only">Vergleich Überschusseinspeisung vs. Volleinspeisung</caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Aspekt</th>
              <th className="px-3 py-2">Teileinspeisung (Eigenverbrauch)</th>
              <th className="px-3 py-2">Volleinspeisung</th>
            </tr>
          </thead>
          <tbody>
            {[
              { a: "Erlöslogik", c: "Einsparung teurer Bezugsstrom + EEG für Überschuss", o: "EEG-Vergütung bzw. Marktprämie für gesamte Erzeugung" },
              { a: "Negativpreis-Regel", c: "Weniger kritisch (Eigenverbrauch priorisiert)", o: "Kritischer (vergütungsfreie Zeiten möglich)" },
              { a: "Planbarkeit", c: "Hoch (strompreisindexierte Einsparung)", o: "Hoch (fixe Sätze), aber abhängig von Gesetzeslage" },
              { a: "Komplexität", c: "Messkonzept, ggf. Speicher-EMS", o: "Einfacher Betrieb, aber Direktvermarktung bei >100 kW ggf." },
              { a: "Skalierung", c: "An Lastprofil gekoppelt", o: "An Dach/Netz geknüpft" },
              { a: "Nachhaltigkeit/CSR", c: "Hohe Wirkung (direkte Emissionsvermeidung)", o: "Nachweisbar, aber indirekter" },
            ].map((row) => (
              <tr key={row.a} className="bg-zinc-50 rounded-xl">
                <th scope="row" className="px-3 py-2 font-medium text-left">{row.a}</th>
                <td className="px-3 py-2">{row.c}</td>
                <td className="px-3 py-2">{row.o}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4 */}
      <Anchor id="business-case" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2">Zusammenfassung ROI-Logik</h3>
          <ul className="text-sm space-y-2">
            <li><Pill>Ertrag</Pill> Spezifischer Ertrag × kWp = Jahres-kWh (P50/P90 berücksichtigen).</li>
            <li><Pill>Sparen</Pill> Eigenverbrauchs-kWh × Strompreis (ct/kWh) = Einsparung.</li>
            <li><Pill>Einspeisung</Pill> Überschuss-kWh × EEG-Satz = Vergütung (Negativpreise beachten).</li>
            <li><Pill>OPEX</Pill> Wartung/Versicherung ~1–2 % p. a.; EMS/IT ggf. zusätzlich.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2">Beispielrechnung (vereinfachtes Modell)</h3>
          <ul className="text-sm space-y-2">
            <CheckLi>100 kWp Dachanlage, 1.000 kWh/kWp·a ⇒ 100.000 kWh/Jahr. Eigenverbrauch 70 %, Überschuss 30 %.</CheckLi>
            <CheckLi>Strompreis 18 ct/kWh (Neuabschluss kleiner/mittlerer Industriebetrieb, 2025). EEG für Überschuss: 6,80–7,86 ct/kWh (bis 40 kW/≤10 kW).</CheckLi>
            <CheckLi>Invest PV: 1.000 €/kWp ⇒ 100.000 €; OPEX 1,5 % = 1.500 €/a. Speicher optional: 200 kWh × 350 €/kWh ⇒ 70.000 €.</CheckLi>
            <CheckLi>Einsparung: 70.000 kWh × 0,18 € = 12.600 €/a; Einspeiseerlös: 30.000 kWh × ~0,07 € ≈ 2.100 €/a; Summe ≈ 14.700 €/a vor OPEX.</CheckLi>
            <CheckLi>PV-Payback ca. 100.000 € / (14.700 € − 1.500 €) ≈ 7,4 Jahre (ohne Speicher; Steuern/Finanzierung nicht berücksichtigt).</CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 1 – Unsplash */}
      <figure className="mt-8">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source media="(max-width: 640px)" srcSet="https://source.unsplash.com/1600x600/?solar,rooftop,industry" />
            <img loading="lazy" src="https://source.unsplash.com/1600x600/?solar,rooftop,industry" alt="Gewerbedach mit PV-Modulen im Morgenlicht" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
        </div>
        <figcaption className="mt-2 text-sm text-zinc-600">PV auf dem Flachdach einer Produktionshalle: Ost-West-Ausrichtung glättet die Erzeugung und passt zu Betriebszeiten.</figcaption>
      </figure>

      {/* 5 */}
      <Anchor id="foerderung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
      <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
        <li><strong>EEG-Vergütung/Marktprämie:</strong> Fixe Sätze über 20 Jahre; bei Negativpreisen zeitweise Null-Vergütung für Neuanlagen (Details je Smart-Meter-Status).</li>
        <li><strong>Solarpaket I (2024):</strong> Entbürokratisierung, u. a. Erleichterungen bei Netzanschluss/Repowering, gestärkter Mieterstrom, Direktvermarktungspflichten angepasst (z. B. Befreiungen bis 200 kWp).</li>
        <li><strong>KfW-270 Kredit:</strong> Zinsgünstige Finanzierung für PV/Speicher; Finanzierung von Planung/Installation möglich (Hausbankprinzip).</li>
        <li><strong>Steuern:</strong> In der Praxis häufig lineare AfA über 20 Jahre; 0-%-USt idR nur bei Wohngebäuden (PV + Speicher). Firmengebäude sind meist nicht begünstigt.</li>
        <li><strong>Alternative Modelle:</strong> PPA/Direktvermarktung, Contracting, Energy-as-a-Service (OPEX-Modell) – sinnvoll bei CAPEX-Knappheit oder Risiko-Sharing.</li>
        <li><strong>Landesprogramme:</strong> Punktuell Speicher-/Ladeinfrastruktur-Förderungen; Bedingungen und Budgets prüfen (stark variierend).</li>
        <li><strong>Compliance:</strong> MaStR-Registrierung, Messkonzept, VDE-Normen, Brandschutz/Statik – frühzeitig klären.</li>
      </ol>

      {/* Bild 2 – Unsplash */}
      <figure className="mt-8">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source media="(max-width: 640px)" srcSet="https://source.unsplash.com/1600x600/?battery,energy,storage,industrial" />
            <img loading="lazy" src="https://source.unsplash.com/1600x600/?battery,energy,storage,industrial" alt="Batteriespeicher-Racks in einem Technikraum" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
        </div>
        <figcaption className="mt-2 text-sm text-zinc-600">Gewerblicher Lithium-Speicher: Eigenverbrauchsoptimierung, Lastspitzenkappung und Flexibilität für E-Mobilität.</figcaption>
      </figure>

      {/* 6 */}
      <Anchor id="fehler" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-rose-700" aria-hidden="true" /> Vermeidbare Fehler
          </h3>
          <ul className="text-sm space-y-2">
            <li>Nur Jahresverbrauch statt Lastgangdaten nutzen – führt oft zu falschen Speichergrößen.</li>
            <li>Negativpreis-Regel ignorieren – Einspeiseerlöse überschätzt, Speicherwert unterschätzt.</li>
            <li>OPEX, Degradation und Wirkungsgrad zu optimistisch – Payback schöngerechnet.</li>
            <li>Netzanschluss/Statik/Brandschutz zu spät klären – Verzögerungen und Zusatzkosten.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} aria-hidden="true" /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>Mind. 2 Wochen 15-Min-Lastgang, ideal 12 Monate; konservative P50/P90-Ertragsannahmen.</li>
            <li>Messkonzept & Smart-Meter-Rollout früh planen; EMS mit klaren Betriebsstrategien.</li>
            <li>Mehrere Angebote (PV/ESS/Finanzierung) vergleichen; Service-Level & Garantien prüfen.</li>
            <li>CO₂-Bilanz & CSR dokumentieren; interne Kommunikation/Branding nutzen.</li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li><a className={`hover:underline ${accent}`} href="/blog/lastspitzen-kappen-speicher">Lastspitzen kappen: Speicher richtig dimensionieren</a></li>
          <li><a className={`hover:underline ${accent}`} href="/blog/strombeschaffung-ppa-grundlagen">Strombeschaffung mit PPA: Chancen & Risiken</a></li>
          <li><a className={`hover:underline ${accent}`} href="/blog/ladeinfrastruktur-fuhrpark">PV & Ladeinfrastruktur für den Firmenfuhrpark</a></li>
          <li><a className={`hover:underline ${accent}`} href="/blog/energiemanagement-iso50001">ISO 50001: Energiemanagement im Mittelstand</a></li>
        </ul>
      </aside>
    </section>

    {/* FAQ */}
    <section id="faq" className="mt-14">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer items-center justify-between font-medium">
              <span>{f.q}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-open:rotate-90 ${accent}`} aria-hidden="true" />
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
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>

    {/* Summary */}
    <section id="zusammenfassung" className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
      <p className="leading-relaxed">
        Für Unternehmen ist PV der Einstieg in planbare, günstigere Energie – und Speicher machen das System robust gegenüber Negativpreisen und Lastspitzen. Der wirtschaftliche Sweet-Spot entsteht,
        wenn du datenbasiert dimensionierst (Lastprofil!), Eigenverbrauch priorisierst und Förder-/Finanzierungsoptionen geschickt kombinierst. Mit realistischen Annahmen liegt der Payback
        vieler Dachanlagen im Bereich mehrerer Jahre; Speicher rechnen sich, wenn sie regelmäßig genutzt werden (Eigenverbrauch + Peak-Shaving). Technisch sauber planen, rechtliche Rahmenbedingungen
        berücksichtigen – und starten.
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Willst du wissen, wie groß PV & Speicher für deinen Standort sein sollten?</h2>
        <p className="text-zinc-700 mb-4">Wir erstellen dir eine schnelle, konservative Wirtschaftlichkeitsabschätzung auf Basis deiner Lastgangdaten.</p>

        {/* Demo UI */}
        <div className="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
          <label className="text-sm">
            Name
            <input name="name" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Max Mustermann" />
          </label>
          <label className="text-sm">
            Telefon
            <input name="phone" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="+49 123456789" />
          </label>
          <label className="text-sm">
            E-Mail
            <input type="email" name="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="max@firma.de" />
          </label>

          <button type="button" className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-2 font-semibold text-white shadow-sm opacity-70 cursor-not-allowed" aria-disabled="true" title="Demo – ohne Funktion">
            Demo anfordern
          </button>
          <p id="cta-note" className="text-xs text-zinc-500 mt-1">Demo-Formular – nur Vorschau, es werden keine Daten gesendet.</p>
        </div>
      </div>
    </section>

    {/* E-E-A-T */}
    <section className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Über die Autorin</h2>
      <div className="flex items-center gap-4">
        <img src={author.image} alt="Autorin" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-zinc-700">{author.role}. Schwerpunkte: PV-Wirtschaftlichkeit, Speicher, Energiemanagement.</div>
          <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>LinkedIn-Profil</a>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
        <p className="text-sm text-zinc-700">
          Reviewed by: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
          <a href={reviewer.linkedin} className={`hover:underline ${accent}`}>LinkedIn</a>
        </p>
      </div>
    </section>

    {/* Quellenverzeichnis */}
    <section className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>Bundesnetzagentur – EEG-Fördersätze (gültig ab 01.08.2025): https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html</li>
        <li>ADAC – Einspeisevergütung 2025 (Übersicht & Beispiele): https://www.adac.de/rund-ums-haus/energie/spartipps/einspeiseverguetung-pv-anlagen/</li>
        <li>BDEW – Strompreisanalyse Juli 2025 (Industriepreise): https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/</li>
        <li>BMWK – Solarpaket I (Regelungen & Ziele): https://www.bmwk.de/Redaktion/DE/Artikel/Energie/solarpaket-1.html</li>
        <li>Fraunhofer ISE – LCOE-Studie (2024): https://www.ise.fraunhofer.de/en/publications/studies/cost-of-electricity.html</li>
        <li>Fraunhofer ISE – Photovoltaics Report (29.05.2025): https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/Photovoltaics-Report.pdf</li>
        <li>JRC PVGIS – Ertragsabschätzung: https://re.jrc.ec.europa.eu/pvg_tools/en/tools.html</li>
        <li>KfW – Programm 270 (Merkblatt 05/2025): https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/Förderprodukte/Erneuerbare-Energien-Standard-(270)/</li>
        <li>SolarPower Europe – European Market Outlook for Battery Storage 2025–2029: https://www.solarpowereurope.org/insights/outlooks/european-market-outlook-for-battery-storage-2025-2029/detail</li>
        <li>DIHK – Leitfaden Stromspeicher in Industrie & Gewerbe (2025): https://www.dihk.de/resource/blob/130814/eb5c844e8cfcf4facd2a3c1f26d75d21/dihk-leitfaden-gewerbespeicher-data.pdf</li>
        <li>EEG §51 – Nullvergütung bei negativen Preisen (Solarspitzengesetz, Überblick): https://www.solarwirtschaft.de/unsere-themen/photovoltaik/standpunkte/faq-solarspitzengesetz/</li>
        <li>BMF – FAQ Nullsteuersatz PV ab 2023 (Wohngebäude-Bezug): https://www.bundesfinanzministerium.de/Content/DE/FAQ/foerderung-photovoltaikanlagen.html</li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow term="kWp" def="Kilowattpeak – installierte Spitzenleistung der PV-Anlage unter Standard-Testbedingungen." />
        <GlossaryRow term="kWh" def="Kilowattstunde – Energiemenge; was eine Anlage/Verbraucher in einer Stunde mit 1 kW Leistung erzeugt/verbraucht." />
        <GlossaryRow term="Eigenverbrauchsquote" def="Anteil des erzeugten PV-Stroms, der direkt im Betrieb genutzt wird." />
        <GlossaryRow term="Marktprämie" def="EEG-Fördermechanismus bei Direktvermarktung; Ausgleich zwischen Marktpreis und anzulegendem Wert." />
        <GlossaryRow term="Peak-Shaving" def="Kappen von Leistungsspitzen (kW), um Leistungspreise/Netzentgelte zu reduzieren – oft per Batteriespeicher." />
      </dl>
    </section>
  </article>
</>

  );
}
