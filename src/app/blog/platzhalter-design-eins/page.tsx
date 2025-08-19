import Head from "next/head";
import {
CheckCircle2,
ShieldCheck,
Gauge,
PiggyBank,
Server,
Cloud,
Network,
FileSearch,
Landmark,
BadgeEuro,
ArrowRight,
Info,
CalendarClock,
Timer,
Battery,
Sun,
Factory,
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
// ---------- Theme ----------
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";
// ---------- Entities (fülle bei Bedarf mit echten Daten aus deinem Projekt) ----------
const author = {
name: "Lena Schneider, M.Sc. Energieökonomie",
role: "Senior Consultant Energie & Sustainability",
image:
"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=240&q=80",
linkedin: "https://www.linkedin.com/in/lena-schneider-energy/",
};
const reviewer = {
name: "Dr.-Ing. Markus Weber",
role: "PV-Projektierer & Energieberater (TÜV)",
linkedin: "https://www.linkedin.com/in/markus-weber-pv/",
};
const company = {
name: "Deine Firma GmbH",
url: "https://www.deinefirma.de",
logo: "/logo.png",
};
// Sections used for ToC and reading time (strings only). Keep ids stable!
const sections = [
{
id: "grundlagen",
title:
"Warum PV und Speicher? Grundlagen für Unternehmen in 5 Minuten erklärt",
content:
"Photovoltaik (PV) wandelt Sonnenlicht in elektrischen Strom um. Für Unternehmen ist PV heute eine der günstigsten Stromquellen: Selbst erzeugter Solarstrom senkt Energiekosten, macht unabhängiger von Preisschwankungen und reduziert CO₂-Emissionen. In Deutschland liefern gut geplante Dachanlagen je nach Standort typischerweise 900–1.100 kWh pro kWp und Jahr. Kombiniert man PV mit einem Batteriespeicher, erhöht sich die Eigenverbrauchsquote deutlich – Lastspitzen können gekappt und der Netzbezug reduziert werden. Wichtig ist ein belastbarer Business Case aus CAPEX, OPEX, Stromgestehungskosten (LCOE) und realistischem Lastprofil.",
},
{
id: "status-quo",
title:
"Status quo 2025: Preise, Vergütungen & Rahmenbedingungen für Firmen",
content:
"Der durchschnittliche Industriestrompreis für kleine bis mittlere Betriebe liegt 2025 bei rund 18 ct/kWh (Neuabschlüsse inkl. Stromsteuer). Neue Aufdach-PV-Anlagen erzeugen Strom oft zwischen ca. 6–14 ct/kWh (LCOE), je nach Größe, Zins und Dachkosten. Für Einspeisung gelten anzulegende Werte nach EEG: Für Inbetriebnahmen zwischen 01.08.2025 und 31.01.2026 liegen die Vergütungen bei Teileinspeisung z. B. zwischen 5,96 und 8,26 ct/kWh (je nach Leistungsklasse), bei Volleinspeisung zwischen 7,78 und 12,87 ct/kWh. An Tagen mit negativen Börsenpreisen entfällt die Vergütung für Neuanlagen zeitweise. Finanzierung: Der KfW-Kredit 270 unterstützt Unternehmen mit zinsgünstigen Darlehen für PV- und Speichervorhaben.",
},
{
id: "investition",
title:
"Investition & Amortisation: So rechnest du PV-Anlagen und Speicher wirtschaftlich",
content:
"Die Wirtschaftlichkeit steht und fällt mit deinem Verbrauchsprofil. PV lohnt sich vor allem, wenn tagsüber viel Last anliegt. Speicher heben den Eigenverbrauch von meist ~30–40 % (ohne Speicher) auf 60–70 % (mit Speicher) und senken teure Leistungsspitzen. Kalkuliere immer mit konservativen Erträgen, realistischen Degradation-Annahmen, 20-Jahres-Perspektive (EEG) und Szenarien für Strompreis-Entwicklung. Ergebnis ist die Amortisationszeit und ein interner Zinsfuß (IRR), der mit Alternativinvestitionen vergleichbar ist.",
},
{
id: "foerderung",
title:
"Förderungen & Finanzierung: EEG, Direktvermarktung, KfW 270 – was passt zu dir?",
content:
"Unter 100 kW installierter Leistung kannst du die feste Vergütung gem. EEG nutzen; ab 100 kW ist Direktvermarktung Pflicht. Volleinspeisung bietet höhere Vergütungen, Teileinspeisung optimiert die Eigenstromnutzung. Für CAPEX-Finanzierung ist KfW 270 der Standard – zusätzlich können Länderprogramme oder kommunale Zuschüsse existieren. Steuerlich gelten Besonderheiten wie der Nullsteuersatz nach § 12 Abs. 3 UStG für Lieferungen an Betreiber bestimmter PV-Anlagen (Prüfung im Einzelfall, z. B. Gebäudekategorie).",
},
{
id: "vorgehen",
title:
"In 7 Schritten zur PV-Anlage mit Speicher: Von der Idee zum belastbaren Business Case",
content:
"Von der Dachprüfung über das Erzeugungs- und Lastprofil bis zu Ausschreibung, Finanzierung und Inbetriebnahme – diese sieben Schritte führen strukturiert zur Entscheidung. Jedes Unternehmen ist anders: Plane individuell, dokumentiere Annahmen transparent und simuliere mindestens drei Szenarien.",
},
{
id: "fehler",
title:
"Typische Fehler & Risiken – und wie du sie vermeidest",
content:
"Zu große Speicher, überoptimistische Erträge oder fehlende Prüfungen von Statik, Brandschutz und Blitzschutz sind die häufigsten Kostentreiber. Gute Praxis: Datenbasiert planen, unabhängig kalkulieren, Vergütungsklauseln verstehen und Wartung/Monitoring von Beginn an mitdenken.",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // 180 wpm konservativ
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
<span className={inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium}>
{children}
</span>
);
const Anchor = ({ id }: { id: string }) => (
<div id={id} aria-hidden className="pt-24 -mt-24" /> ); // stable anc
// Simple static SVG chart (no client JS)
const ComparisonChart = () => {
const items = [
{ k: "Eigenverbrauchsquote", vergleich1: 3, vergleich2: 7 }, // ~30% vs. ~70%
{ k: "Autarkiegrad", vergleich1: 2, vergleich2: 6 },
{ k: "Spitzenlastreduktion", vergleich1: 1, vergleich2: 6 },
{ k: "CO₂-Minderung (Score)", vergleich1: 5, vergleich2: 8 },
{ k: "Planbarkeit über 20 Jahre", vergleich1: 6, vergleich2: 8 },
{ k: "Wirtschaftlichkeit (Score)", vergleich1: 6, vergleich2: 8 },
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
aria-label="Vergleich: PV ohne Speicher (grau) vs. PV mit Speicher (grün) – Nutzenkriterien im Unternehmenskontext"
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
          <rect x={left} y={y} width={scale(row.vergleich1)} height={barH} fill="#e5e7eb" rx="6" />
          <text x={left + scale(row.vergleich1) + 6} y={y + barH - 4} fontSize="11" className="fill-zinc-500">
            {row.vergleich1}/10
          </text>
          {/* Mit Speicher (green, bottom bar) */}
          <rect x={left} y={y + barH + gap} width={scale(row.vergleich2)} height={barH} fill="url(#g1)" rx="6" />
          <text x={left + scale(row.vergleich2) + 6} y={y + barH + gap + barH - 4} fontSize="11" className="fill-emerald-700">
            {row.vergleich2}/10
          </text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Heuristischer Vergleich gängiger Nutzenkriterien. Grundlage: typische Eigenverbrauchsquoten (~30–40 % ohne, ~60–70 % mit Speicher) und Industrie-Use-Cases 2025.
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
"Green Energy im Unternehmen: Photovoltaik & Batteriespeicher wirtschaftlich planen";
const description =
"Investition, Amortisation, Förderungen: So setzen Firmen PV-Anlagen und Speicher wirtschaftlich ein – mit Zahlen, Beispielen und einer 7-Schritte-Checkliste.";
const canonical = ${company.url}/blog/pv-batteriespeicher-unternehmen;
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
        PV senkt Kosten, Speicher erhöht Unabhängigkeit – hier erfährst du
        in klaren Schritten, wie du Invest, Förderung und Amortisation für
        dein Unternehmen richtig planst.
      </p>

      {/* Hero 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/hero-placeholder.webp"
            />
            <img
              loading="eager"
              src="/hero-placeholder.webp"
              alt="Ideales Hero-Motiv (Prompt-Vorschlag für KI-Bild, 16:9): Moderne Industriehalle mit PV-Dach, Tageslicht, sichtbares Batteriespeichersystem im Technikraum, Managementteam blickt auf Dashboard mit Eigenverbrauch und Peak-Shaving."
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="sr-only">
          Titelbild-Platzhalter; Beschreibung enthält Motiv-Vorschlag.
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
        <TLDRItem icon={ShieldCheck}>
          PV senkt deinen Strombezug dauerhaft; mit Speicher steigerst du die
          Eigenverbrauchsquote typischerweise von ~30–40 % auf 60–70 % und
          glättest Lastspitzen.
        </TLDRItem>
        <TLDRItem icon={Gauge}>
          Rechne mit LCOE von ca. 6–14 ct/kWh für gewerbliche Dächer; das liegt
          meist unter aktuellen Industriestrompreisen (~18 ct/kWh, 2025).
        </TLDRItem>
        <TLDRItem icon={PiggyBank}>
          Amortisation: 6–10 Jahre sind häufig erreichbar – abhängig von CAPEX,
          Lastprofil, Eigenverbrauch und Finanzierung.
        </TLDRItem>
        <TLDRItem icon={Network}>
          Förderkulisse: EEG-Vergütungen 2025 (Teile/Volleinspeisung) + KfW 270
          für zinsgünstige Finanzierung; ab 100 kW ist Direktvermarktung Pflicht.
        </TLDRItem>
        <TLDRItem icon={FileSearch}>
          Business-Case sauber modellieren: konservative Erträge, Degradation,
          Wartung (1–2 % p. a.), Szenarien und Risiken (z. B. Nullvergütung bei
          negativen Preisen) berücksichtigen.
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
            Grundlagen: Funktionsweise & Nutzen
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#status-quo">
            Status quo 2025: Preise & Vergütung
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#investition">
            Investition & Amortisation
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#foerderung">
            Förderungen & Finanzierung
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#vorgehen">
            7-Schritte-Vorgehen
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#fehler">
            Fehler vermeiden & Best Practices
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <a
            className={`hover:underline ${accent} font-medium`}
            href="#zusammenfassung"
          >
            Kurzfazit
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

      {/* Erklärung von zwei zentralen fachlichen Gegebenheiten */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Sun className={`w-5 h-5 ${accent}`} />
            <strong>So funktioniert PV im Betrieb</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              Module erzeugen Gleichstrom (DC), ein Wechselrichter wandelt in
              nutzbaren Wechselstrom (AC) und speist in deine Hausverteilung ein.
            </CheckLi>
            <CheckLi>
              Priorität hat Eigenverbrauch; Überschüsse gehen ins Netz (Teileinspeisung)
              oder komplett (Volleinspeisung).
            </CheckLi>
            <CheckLi>
              Typische spezifische Erträge in Deutschland: ~900–1.100 kWh/kWp∙a
              je nach Standort, Ausrichtung und Verschattung.
            </CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Battery className={`w-5 h-5 ${accent}`} />
            <strong>Warum Speicher den Business Case stärkt</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              Speicher verschieben PV-Strom in die Abend-/Morgenstunden, heben
              die Eigenverbrauchsquote auf 60–70 % und reduzieren Netzbezug.
            </CheckLi>
            <CheckLi>
              Peak-Shaving: Batterien puffern kurze Lastspitzen, senken
              Leistungspreise und Anschlussleistungen.
            </CheckLi>
            <CheckLi>
              Bei dynamischen Tarifen können Speicher zusätzlich Arbitragechancen
              nutzen – nur mit sauberem Energiemanagement sinnvoll.
            </CheckLi>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <Anchor id="status-quo" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="mb-5 leading-relaxed">
        {sections[1].content}
      </p>

      {/* Chart */}
      <ComparisonChart />

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          „Solarenergie hat fossile Energieträger in puncto Wirtschaftlichkeit
          hinter sich gelassen – die Zukunft der Stromerzeugung ist erneuerbar.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Indirektes Zitat nach Prof. Dr. Andreas W. Bett (Fraunhofer ISE),
          Experteninterview Intersolar (2021)
        </figcaption>
      </figure>

      {/* 3 */}
      <Anchor id="investition" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <p className="leading-relaxed mb-4">{sections[2].content}</p>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${accent}`} /> Zwei Wege zur
            Wirtschaftlichkeit: Eigenverbrauch vs. Volleinspeisung
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              <strong>Eigenverbrauch + Speicher:</strong> Maximiert den Nutzen
              pro kWh, reduziert Netzbezug und Leistungsspitzen.
            </CheckLi>
            <CheckLi>
              <strong>Volleinspeisung:</strong> Höhere Vergütungssätze, sinnvoll
              bei geringer Tageslast oder ungeeignetem Lastprofil.
            </CheckLi>
            <CheckLi>
              Kombinationen (z. B. zeitweise Volleinspeisung) sind möglich – prüfe
              vertragliche Details und Bilanzkreisvorgaben.
            </CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeEuro className={`w-5 h-5 ${accent}`} /> Kosten & Kennzahlen,
            die in jede Kalkulation gehören
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              CAPEX (Module, WR, Montage, Statik, Brandschutz, Netzanschluss),
              OPEX (Wartung, Versicherung, Monitoring).
            </CheckLi>
            <CheckLi>
              LCOE-Berechnung inkl. Degradation (z. B. 0,3–0,5 % p. a.),
              Diskontsatz/Zins (KfW vs. Bank), Restwert.
            </CheckLi>
            <CheckLi>
              Szenarien für Strompreis, Vergütung und negative Börsenpreise
              (zeitweise Nullvergütung) berücksichtigen.
            </CheckLi>
          </ul>
        </div>
      </div>

      {/* Vergleichstabelle */}
      <div className="mt-8 overflow-x-auto">
        <table
          className="w-full text-sm border-separate border-spacing-y-2"
          aria-describedby="vergleich-caption"
        >
          <caption id="vergleich-caption" className="sr-only">
            Vergleich Teileinspeisung mit Speicher vs. Volleinspeisung ohne
            Speicher – betriebswirtschaftliche und technische Aspekte
          </caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Aspekt</th>
              <th className="px-3 py-2">Teileinspeisung + Speicher</th>
              <th className="px-3 py-2">Volleinspeisung ohne Speicher</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                a: "Einnahmen/Nutzen je kWh",
                c: "Stromkostenersparnis (~18 ct/kWh) + begrenzte EEG-Vergütung",
                o: "Nur EEG-Vergütung; kaum Eigenbedarfseffekt",
              },
              {
                a: "Eigenverbrauchsquote",
                c: "Hoch (60–70 %)",
                o: "Sehr niedrig",
              },
              {
                a: "Leistungspreise",
                c: "Senkung durch Peak-Shaving möglich",
                o: "Unverändert",
              },
              {
                a: "Komplexität",
                c: "Höher (Energiemanagement, Speicher-BMS)",
                o: "Gering",
              },
              {
                a: "Vergütung bei negativen Börsenpreisen",
                c: "Zeitweise 0 ct/kWh (betrifft Einspeiseanteil)",
                o: "Zeitweise 0 ct/kWh",
              },
              {
                a: "Direktvermarktungspflicht",
                c: "< 100 kW: nein; ≥ 100 kW: ja",
                o: "< 100 kW: nein; ≥ 100 kW: ja",
              },
              {
                a: "Amortisation (typisch)",
                c: "6–10 Jahre (profilabhängig)",
                o: "8–12 Jahre (preis-/vergütungsabhängig)",
              },
            ].map((row) => (
              <tr key={row.a} className="bg-zinc-50 rounded-xl">
                <th scope="row" className="px-3 py-2 font-medium">
                  {row.a}
                </th>
                <td className="px-3 py-2">{row.c}</td>
                <td className="px-3 py-2">{row.o}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4 */}
      <Anchor id="foerderung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Förderlandschaft & Recht
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <Pill>EEG</Pill> Anzulegende Werte (Aug 2025–Jan 2026): z. B.
              5,96–8,26 ct/kWh (Teileinspeisung), 7,78–12,87 ct/kWh
              (Volleinspeisung) je nach Leistungsklasse.
            </li>
            <li>
              <Pill>Direktvermarktung</Pill> Ab 100 kW Pflicht; für Dächer < 100 kW
              kann feste Vergütung gewählt werden.
            </li>
            <li>
              <Pill>KfW 270</Pill> Zinsgünstige Kredite für PV, Speicher, Netze –
              Laufzeiten/Zinsbindung je nach Bonität und Programmstand.
            </li>
            <li>
              <Pill>Umsatzsteuer</Pill> Nullsteuersatz (§ 12 Abs. 3 UStG) kann bei
              Lieferung an Betreiber bestimmter PV-Anlagen greifen (Einzelfall prüfen).
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Network className={`w-5 h-5 ${accent}`} /> Technik-Quickcheck
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>
              Wechselrichter passend zum DC-Oversizing (z. B. 1,1–1,3×) wählen;
              String-Design auf Verschattung prüfen.
            </CheckLi>
            <CheckLi>
              Speichergröße an Lastprofil koppeln (Faustformeln/HTW-Guidelines),
              Überdimensionierung vermeiden.
            </CheckLi>
            <CheckLi>
              Brandschutz/Blitzschutz, Dachstatik und Fluchtwege frühzeitig
              berücksichtigen.
            </CheckLi>
            <CheckLi>
              Monitoring & O&M vertraglich fixieren (KPIs, Reaktionszeiten,
              Verfügbarkeiten).
            </CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 1 – volle Breite, 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2400&q=80"
              alt="Industriehalle mit PV-Dach und Technikraum; Visualisierung eines Batterieschranks (Peak-Shaving/Eigenverbrauch)."
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          PV-Dach im Gewerbe: Eigenverbrauch hat Priorität; Speicher stabilisieren
          den Lastgang und reduzieren Leistungsspitzen.
        </figcaption>
      </figure>

      {/* 5 */}
      <Anchor id="vorgehen" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
      <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
        <li>
          <strong>Dach- & Standortcheck:</strong> Statik, Belegungsplan,
          Verschattung, Blitz-/Brandschutz klären. Prüfe Alternativen wie Carports
          oder Nebengebäude.
        </li>
        <li>
          <strong>Last- & Ertragsprofil erstellen:</strong> ¼-h-Messdaten/Smart-Meter
          auswerten, saisonale Schwankungen und Schichtbetrieb berücksichtigen.
          PV-Erträge konservativ simulieren (900–1.100 kWh/kWp∙a).
        </li>
        <li>
          <strong>Systemauslegung:</strong> DC-/AC-Seiten dimensionieren, Strings
          planen, Speichergröße auf Lastspitzen und Nachtbedarf abstimmen. Energiemanagement
          (EMS) definieren.
        </li>
        <li>
          <strong>Business-Case bauen:</strong> CAPEX/OPEX, LCOE, Szenarien für
          Strompreise & EEG-Vergütung; Amortisation (Payback) und IRR ermitteln.
        </li>
        <li>
          <strong>Förderung & Finanzierung:</strong> EEG-Pfad wählen
          (Teile- vs. Volleinspeisung, Direktvermarktungspflicht ab 100 kW),
          KfW 270/Bank anfragen, Konditionen vergleichen.
        </li>
        <li>
          <strong>Ausschreibung & Umsetzung:</strong> Angebote standardisieren,
          Qualitätskriterien (Wirkungsgrade, Garantien, Referenzen) festlegen. Bauzeiten
          und Netzanschluss früh fixieren.
        </li>
        <li>
          <strong>Inbetriebnahme & Betrieb:</strong> Abnahme, MaStR-Eintrag,
          Zählerkonzept und Direktvermarktung einrichten. Monitoring und
          Wartungsplan aktiv leben.
        </li>
      </ol>

      {/* Bild 2 – 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1542452255191-c85a98f1ad3b?auto=format&fit=crop&w=1200&q=60"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1542452255191-c85a98f1ad3b?auto=format&fit=crop&w=2400&q=80"
              alt="Projektteam im Technikraum mit Wechselrichter-Wand und Batterieschrank; Blick auf Dashboard mit Eigenverbrauch."
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Umsetzung mit Plan: Standardisierte Ausschreibungen, klare KPIs für
          Montage, Anschluss und Inbetriebnahme.
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
            <li>
              <strong>Überdimensionierter Speicher:</strong> bindet Kapital und
              bringt kaum Mehrwert, wenn nachts wenig Last anliegt.
            </li>
            <li>
              <strong>Zu optimistische Ertragsannahmen:</strong> ignoriere nicht
              Verschattung, Reinigung, Degradation und Ausfallzeiten.
            </li>
            <li>
              <strong>Vergütungsklauseln übersehen:</strong> Nullvergütung bei
              negativen Börsenpreisen kann Erlöse schmälern.
            </li>
            <li>
              <strong>Unklare O&M-Verantwortung:</strong> fehlendes Monitoring
              führt zu stillen Ertragsverlusten.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Datenbasierte Auslegung:</strong> ¼-h-Profile, Temperatur-
              und Produktionskalender nutzen.
            </li>
            <li>
              <strong>Qualität vor Preis:</strong> geprüfte Komponenten, Garantien
              und Service-KPIs vertraglich fixieren.
            </li>
            <li>
              <strong>Szenarien & Sensitivitäten:</strong> Strompreis, Zins, CAPEX
              und Vergütung variieren und robust entscheiden.
            </li>
            <li>
              <strong>Transparente Governance:</strong> interne Stakeholder einbinden,
              ESG-Kennzahlen und CO₂-Reporting vorbereiten.
            </li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/lastmanagement-peak-shaving">
              Lastmanagement & Peak-Shaving im Mittelstand
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/pv-ausschreibung-direktvermarktung">
              Dach-PV ab 100 kW: Ausschreibung & Direktvermarktung
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/lcoe-solar-batterie-berechnen">
              LCOE & IRR für Solar- und Batteriesysteme berechnen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/energieeinkauf-dynamische-tarife">
              Dynamische Stromtarife & Flexibilität nutzen
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
            q: "Lohnt sich ein Speicher für mein Unternehmen wirklich?",
            a: "Wenn dein Verbrauch überwiegend werktags und in den Abendstunden anfällt, ja: Der Speicher erhöht die Eigenverbrauchsquote und kann Leistungspreise senken. Bei reiner Tageslast ohne Peaks kann eine größere PV-Fläche ohne Speicher wirtschaftlicher sein.",
          },
          {
            q: "Wie groß sollte der Speicher sein?",
            a: "Richte dich nach Lastgängen und PV-Überschüssen: Ziel ist, typische Abend-/Morgenspannen abzudecken und Peaks zu glätten, nicht eine Vollautarkie. Faustregeln der HTW Berlin helfen bei der Dimensionierung; vermeide Überdimensionierung.",
          },
          {
            q: "Was passiert bei negativen Börsenpreisen?",
            a: "Für Neuanlagen kann die EEG-Vergütung zeitweise entfallen; Eigenverbrauch ist davon nicht betroffen. Plane konservativ und prüfe vertragliche Details in Direktvermarktungstarifen.",
          },
          {
            q: "Welche Finanzierung ist üblich?",
            a: "KfW 270 ist der Standard für zinsgünstige Kredite; alternativ kommen Hausbanken oder Contracting-Modelle in Frage. Wichtig sind Zinsbindung, Tilgungsplan und Sicherheiten.",
          },
          {
            q: "Wie schnell amortisiert sich eine PV-Anlage?",
            a: "Häufig 6–10 Jahre, abhängig von CAPEX, LCOE, Eigenverbrauch und Strompreisniveau. Ein belastbarer Business-Case mit Szenarien liefert die verlässlichste Aussage.",
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
                name: "Lohnt sich ein Speicher für mein Unternehmen wirklich?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wenn dein Verbrauch überwiegend werktags und in den Abendstunden anfällt, ja: Der Speicher erhöht die Eigenverbrauchsquote und kann Leistungspreise senken. Bei reiner Tageslast ohne Peaks kann eine größere PV-Fläche ohne Speicher wirtschaftlicher sein.",
                },
              },
              {
                "@type": "Question",
                name: "Wie groß sollte der Speicher sein?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Richte dich nach Lastgängen und PV-Überschüssen: Ziel ist, typische Abend-/Morgenspannen abzudecken und Peaks zu glätten, nicht eine Vollautarkie. Faustregeln der HTW Berlin helfen bei der Dimensionierung; vermeide Überdimensionierung.",
                },
              },
              {
                "@type": "Question",
                name: "Was passiert bei negativen Börsenpreisen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Für Neuanlagen kann die EEG-Vergütung zeitweise entfallen; Eigenverbrauch ist davon nicht betroffen. Plane konservativ und prüfe vertragliche Details in Direktvermarktungstarifen.",
                },
              },
              {
                "@type": "Question",
                name: "Welche Finanzierung ist üblich?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KfW 270 ist der Standard für zinsgünstige Kredite; alternativ kommen Hausbanken oder Contracting-Modelle in Frage. Wichtig sind Zinsbindung, Tilgungsplan und Sicherheiten.",
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
        Für viele Unternehmen ist PV die kalkulierbarste Energie-Investition der
        nächsten Jahre. Wer ein passendes Lastprofil hat, erzielt mit
        Teileinspeisung und gut dimensioniertem Speicher die höchste
        Wirtschaftlichkeit: Eigenverbrauch ersetzt teure Netzenergie, Peak-Shaving
        reduziert Leistungspreise, die EEG-Vergütung stabilisiert Erlöse für
        Überschüsse. Entscheidend sind eine datengestützte Planung, konservative
        Annahmen und eine saubere Umsetzung – dann stimmen Amortisation und IRR.
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">
          Kostenloser Quick-Check: Passt PV + Speicher zu deinem Lastprofil?
        </h2>
        <p className="text-zinc-700 mb-4">
          Wir prüfen Dach, Lastprofil und Förderpfad und schicken dir innerhalb
          weniger Tage eine grobe Wirtschaftlichkeitsabschätzung.
        </p>

        {/* Kein <form>, keine Handler – nur UI */}
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
              placeholder="+49 123456789"
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

          {/* Button ohne Submit-Funktion */}
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
      <h2 className="text-2xl font-bold mb-3">Über die Autorin</h2>
      <div className="flex items-center gap-4">
        <img
          src={author.image}
          alt="Autorin"
          className="w-16 h-16 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-zinc-700">
            {author.role}. Schwerpunkte: PV-Projektierung, LCOE-Modelle,
            Batteriespeicher-Auslegung in Industrie & Gewerbe.
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
          Fraunhofer ISE (2025): Photovoltaics Report – Markt, Kosten, Ausbau.
        </li>
        <li>
          Fraunhofer ISE (2025): Public electricity generation 2024 – 62,7 % erneuerbar, PV-Erzeugung 72,2 TWh.
        </li>
        <li>
          Fraunhofer ISE (aktual. 2025): Aktuelle Fakten zur Photovoltaik in Deutschland – LCOE neuer Dachanlagen ~6–14 ct/kWh.
        </li>
        <li>
          Bundesnetzagentur (08/2025–01/2026): Anzulegende Werte EEG – Teile-/Volleinspeisung nach Leistungsklassen.
        </li>
        <li>
          Finanztip/ADAC (08/2025): Einspeisevergütung 2025; Nullvergütung bei negativen Börsenpreisen.
        </li>
        <li>
          BDEW Strompreisanalyse (07/2025): Industriestrompreise 2025 ~18 ct/kWh (Neuabschlüsse, KMU).
        </li>
        <li>
          SMARD/BNetzA (2024): Modellierter Industriestrompreis 2024 ~16,8 ct/kWh.
        </li>
        <li>
          HTW Berlin (2025): Stromspeicher-Inspektion – Effizienz & Energiemanagement.
        </li>
        <li>
          KfW (05/2025): Programm 270 – Erneuerbare Energien Standard (Merkblatt).
        </li>
        <li>
          BMF (FAQ): Umsatzsteuerlicher Nullsteuersatz § 12 Abs. 3 UStG für PV-Lieferungen an Betreiber – Abgrenzungen.
        </li>
        <li>
          Solarzentrum Berlin (2025): Leitfaden Gewerbe & PV – Peak-Shaving, Speicher-Use-Cases.
        </li>
        <li>
          1KOMMA5°/Zolar (2025): Ertragsbandbreiten in DE (≈900–1.100 kWh/kWp∙a).
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow
          term="Eigenverbrauchsquote"
          def="Anteil des PV-Stroms, der im Unternehmen direkt selbst genutzt wird (statt ins Netz einzuspeisen)."
        />
        <GlossaryRow
          term="Autarkiegrad"
          def="Anteil des Gesamtverbrauchs, der durch eigene PV-Erzeugung (ggf. mit Speicher) gedeckt wird."
        />
        <GlossaryRow
          term="Anzulegender Wert"
          def="Aus dem EEG abgeleiteter Referenzwert zur Berechnung der Marktprämie bzw. Einspeisevergütung."
        />
        <GlossaryRow
          term="Direktvermarktung"
          def="Vermarktung des erzeugten Stroms über einen Direktvermarkter am Spotmarkt; ab 100 kW verpflichtend."
        />
        <GlossaryRow
          term="Peak-Shaving"
          def="Gezieltes Kappen kurzer Leistungsspitzen durch Batteriespeicher, um Leistungspreise zu senken."
        />
      </dl>
    </section>
  </article>
</>
);
}
