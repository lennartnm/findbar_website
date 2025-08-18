import Head from "next/head";
import {
CheckCircle2,
ShieldCheck,
Gauge,
Network,
FileSearch,
Landmark,
ArrowRight,
Info,
CalendarClock,
Timer,
Brain,
Megaphone,
LineChart,
Sparkles,
Users,
BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/* -----------------------------------------------------
Helper
----------------------------------------------------- */
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";
/* -----------------------------------------------------
Content Data (edit freely)
----------------------------------------------------- */
const author = {
name: "Nora Schubert",
role: "B2B Marketing & KI-Strategin (10+ Jahre Erfahrung)",
image:
"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=240&h=240&q=80&crop=faces&fit=crop",
linkedin: "https://www.linkedin.com/in/noraschubert/",
};
const reviewer = {
name: "Prof. Dr. Felix Hartmann",
role: "Forscher für Vertrauen & Markenwirkung",
linkedin: "https://www.linkedin.com/in/felixhartmann/",
};
const company = {
name: "Deine Firma GmbH",
url: "https://www.deinefirma.de",
logo:
"https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=256&h=256&q=80&fit=crop&crop=faces",
};
/* Sections used for reading time estimate (strings only) */
const sections = [
{
id: "grundlagen",
title:
"Warum 2025 der Vertrauensvorschuss vor Sales den Unterschied macht",
content:
"B2B-Kaufentscheidungen entstehen 2025 zunehmend in selbstgesteuerten, digitalen Buying Journeys – häufig ohne direkten Kontakt mit Sales bis kurz vor die Shortlist. Studien von Forrester und Gartner zeigen eine klare Präferenz für rep-freie Erlebnisse; gleichzeitig wächst die Unsicherheit: komplexe Buying-Teams, lange Zyklen, Skepsis gegenüber Marketingbotschaften. Wer früh Vertrauen aufbaut, reduziert wahrgenommenes Risiko und schafft eine positive Voreinstellung. KI hilft, diesen Vertrauensvorsprung systematisch zu erzeugen: bessere Inhalte, schnellere Antworten, nachvollziehbare Belege, konsistente Qualität – ohne Massen-Spam. Grundlage ist eine saubere Datenbasis, Governance gegen Halluzinationen und ein klarer redaktioneller Anspruch.",
},
{
id: "trends",
title: "Status Quo 2025: Hidden Buyers, rep-freie Präferenzen & KI",
content:
"Edelman & LinkedIn rücken 2025 die Hidden Buyer in den Fokus: interne Einflussnehmende, die Thought Leadership aktiv konsumieren und Kaufentscheidungen prägen. In Gartner- und Forrester-Analysen bevorzugen eine Mehrheit der B2B-Käufer rep-freie, digitale Erlebnisse; gleichzeitig beklagen viele Käufer Unzufriedenheit mit Anbietern nach dem Kauf. McKinsey zeigt, dass GenAI signifikante Hebel in Marketing & Sales hebt – von Produktivität bis Umsatzwachstum –, sofern Qualitäts- und Vertrauensmechanismen mitgedacht werden.",
},
{
id: "framework",
title: "Framework: Vertrauensmaschine mit KI in fünf Ebenen",
content:
"Das Vertrauensframework bündelt KI-Workflows in fünf Ebenen: (1) Autorität durch herausragende Thought Leadership, (2) Beweise via Referenzen, Demos & Daten, (3) Hilfsbereitschaft durch nützliche Tools & Erklärungen, (4) Transparenz zu Preis, Roadmap, Sicherheit & Nachhaltigkeit, (5) Reputation über unabhängige Gütesiegel und Stimmen aus dem Markt. Jede Ebene lässt sich mit KI skalieren – immer mit Faktenprüfung, Quellenangaben und menschlicher Review.",
},
{
id: "taktiken",
title: "12 konkrete KI-Taktiken für mehr Vertrauen vor dem Erstgespräch",
content:
"Von Research-Sprints über RAG-gestützte Content-Assembly bis zu Digital Sales Rooms, die sich pro Account automatisch anreichern – der Werkzeugkasten ist reif. Entscheidend ist ein Redaktionsprozess mit Freigabe-Gates, Fact-Checks und klaren Stil- und Quellenregeln, um Substanz vor Volumen zu stellen.",
},
{
id: "messung",
title: "Messung: Leading-Indikatoren für Vertrauen und Kaufbereitschaft",
content:
"Vertrauen wird sichtbar in wiederkehrenden Besuchen, geteilten Inhalten, direkten Marken-Suchen, eingeladenen Pitches, DSR-Aktivität, Meeting-Akzeptanzraten und Opportunity-Konversionsraten. Ergänzend helfen Umfragen (z. B. wahrgenommenes Risiko, Klarheit) und Qualitäts-Signale (Zitierquote, Quellenqualität).",
},
{
id: "risiken",
title: "Risiken & Gegenmaßnahmen",
content:
"KI verleitet zu Content-Inflation. Risiken: Halluzinationen, Bias, Datenschutz, übergriffige Personalisierung, rechtliche Stolpersteine. Gegenmittel: RAG mit kuratiertem Wissensspeicher, Quellenoffenlegung, menschliche Redaktion, QA-Checklisten, Logging & Audit, klare Opt-outs und Purpose-Limits pro Use Case.",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(10, Math.ceil(wordCount / 180)); // conservative 180 wpm
/* -----------------------------------------------------
UI Components (reuse visual patterns from example)
----------------------------------------------------- */
const TLDRItem = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => (
<li className="flex items-start gap-3"> <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden /> <span>{children}</span> </li> );
const CheckLi = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-2"> <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden /> <span className="flex-1">{children}</span> </li> );
const Pill = ({ children }: { children: ReactNode }) => (
<span
className={inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium}
{children}
</span> );
const Anchor = ({ id }: { id: string }) => <div id={id} aria-hidden className="pt-24 -mt-24" />;
/* -----------------------------------------------------
Static SVG chart – Vertrauenshebel vs. Wirkung
----------------------------------------------------- */
const TrustImpactChart = () => {
const items = [
{ k: "Thought Leadership Qualität", impact: 9, effort: 6 },
{ k: "Drittanbieter-Referenzen/Siegel", impact: 8, effort: 5 },
{ k: "Produkt-Demo/Trial & DSR", impact: 8, effort: 4 },
{ k: "Transparente Preise & Roadmap", impact: 7, effort: 5 },
{ k: "Nachhaltigkeitsnachweise (ESG)", impact: 7, effort: 6 },
];
const max = 10;
const barH = 16;
const gap = 6;
const rowH = barH * 2 + gap + 16;
const padTop = 14;
const width = 720;
const left = 220;
const right = width - 20;
const scale = (v: number) => (right - left) * (v / max);
return (
<figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
<svg
viewBox={0 0 ${width} ${items.length * rowH + padTop}}
role="img"
aria-label="Diagramm: Vertrauenshebel und relative Wirkung (0–10) vs. Implementierungsaufwand"
>
<defs>
<linearGradient id="gImpact" x1="0" x2="1">
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
          {/* Aufwand (grau, oben) */}
          <rect x={left} y={y} width={scale(row.effort)} height={barH} fill="#e5e7eb" rx="6" />
          <text x={left + scale(row.effort) + 6} y={y + barH - 4} fontSize="11" className="fill-zinc-500">
            {row.effort}
          </text>
          {/* Wirkung (grün, unten) */}
          <rect
            x={left}
            y={y + barH + gap}
            width={scale(row.impact)}
            height={barH}
            fill="url(#gImpact)"
            rx="6"
          />
          <text
            x={left + scale(row.impact) + 6}
            y={y + barH + gap + barH - 4}
            fontSize="11"
            className="fill-emerald-700"
          >
            {row.impact}
          </text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Oben: Implementierungsaufwand (grau), unten: erwartete Wirkung auf Vertrauen/Conversion (grün). Einschätzungen auf
    Basis aktueller Studien und Praxisprojekten.
  </figcaption>
</figure>
);
};
/* Glossary row */
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
/* -----------------------------------------------------
Page
----------------------------------------------------- */
export default function Article() {
const updated = formatDateDE();
const title =
"B2B-Kunden gewinnen 2025 mit KI: Vertrauensvorschuss vor Sales – so gelingt’s";
const description =
"Wie du 2025 mit KI einen Vertrauensvorsprung schaffst: Thought Leadership, Social Proof, Digital Sales Rooms, Metriken & Praxis-Workflows – kompakt und umsetzbar.";
const canonical = ${company.url}/blog/b2b-kunden-gewinnen-mit-ki-2025;
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
    <meta property="og:image" content={`${company.url}/og/b2b-ki-vertrauen-2025.jpg`} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${company.url}/og/b2b-ki-vertrauen-2025.jpg`} />

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
          image: `${company.url}/og/b2b-ki-vertrauen-2025.jpg`,
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
        Der Wettbewerb nimmt zu, Budgets sind knapp – und Kaufentscheider meiden kalte
        Akquise. Die Lösung: Du baust{" "}
        <strong>Vertrauen vor dem ersten Gespräch</strong> auf und positionierst
        dein Unternehmen als <strong>Experte</strong>. KI hilft dir dabei, das
        systematisch, schnell und messbar zu skalieren.
      </p>

      {/* Hero 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          {/* Platzhalter: Für KI-Bildgenerator – Prompt im Alt-Text */}
          <img
            loading="eager"
            src="/hero-b2b-ki-vertrauen-2025.png"
            alt="KI-Bild-Prompt: 'B2B Buying Committee in modernem Konferenzraum, transparente Daten-Layer, Vertrauenssymbole (Siegel, Referenzen), digitale Sales-Räume – fotorealistisch, 16:9, hochwertiges Licht'"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <figcaption className="sr-only">
          Symbolbild: Buying-Committee, Vertrauenssignale & KI-Assistenz
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
          <strong>Vertrauen vor Sales entscheidet</strong>: 2025 prägen{" "}
          <em>Hidden Buyers</em> und rep-freie Präferenzen die Journey – hochwertige
          Thought Leadership beeinflusst Kaufbereitschaft und RFP-Einladungen (Edelman/LinkedIn 2025).
        </TLDRItem>
        <TLDRItem icon={ShieldCheck}>
          <strong>KI skaliert Qualität</strong>: GenAI steigert Produktivität und Umsatzhebel,
          wenn Inhalte <em>belegt, überprüft und hilfreich</em> sind – keine Massenware (McKinsey 2025).
        </TLDRItem>
        <TLDRItem icon={Network}>
          <strong>Digital zuerst</strong>: Ein Großteil der Interaktionen läuft digital; viele Käufer
          bevorzugen eine rep-freie Erfahrung – Vertrauen entsteht über Inhalte, Demos und Beweise
          (Gartner/Forrester 2024–2025).
        </TLDRItem>
        <TLDRItem icon={FileSearch}>
          <strong>Messbar machen</strong>: Beobachte Leading-Indikatoren wie Direct/Brand Search,
          DSR-Aktivität, geteilte Inhalte und Meeting-Akzeptanzraten – nicht nur klassische MQLs.
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
          <a className={`hover:underline ${accent} font-medium`} href="#trends">
            {sections[1].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#framework">
            {sections[2].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#taktiken">
            {sections[3].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#messung">
            {sections[4].title}
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#risiken">
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
      {/* 1 */}
      <Anchor id="grundlagen" />
      <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
      <p className="mb-6 leading-relaxed">
        {sections[0].content}
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Megaphone className={`w-5 h-5 ${accent}`} />
            <strong>Was ist „Vertrauensvorschuss“?</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>
              Positive Voreinstellung beim Buying-Committee <em>vor</em> Kontakt mit Sales.
            </CheckLi>
            <CheckLi>
              Beruht auf <strong>Autorität</strong> (Expertise), <strong>Beweisen</strong> (Referenzen, Demos) und{" "}
              <strong>Transparenz</strong> (Preise, Sicherheit, ESG).
            </CheckLi>
            <CheckLi>
              Wird in digitalen Kanälen aufgebaut: Content, Communities, Events, Digital Sales Rooms.
            </CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Brain className={`w-5 h-5 ${accent}`} />
            <strong>Wie hilft KI konkret?</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Recherchiert schneller, fasst zusammen, vergleicht Quellen.</CheckLi>
            <CheckLi>Erstellt hochwertige Entwürfe mit RAG – inklusive Zitate & Belege.</CheckLi>
            <CheckLi>Personalisiert Inhalte ohne Daten auszuufern (Privacy by Design).</CheckLi>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <Anchor id="trends" />
      <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
      <p className="mb-5 leading-relaxed">
        <Pill>Edelman/LinkedIn 2025</Pill>{" "}
        Thought Leadership wirkt besonders auf <em>Hidden Buyers</em> – interne
        Einflussnehmende außerhalb der offiziellen Buying List – und erhöht die Offenheit für Outreach und
        Einladungen in den Pitch. Quelle: Edelman & LinkedIn, „B2B Thought Leadership Impact Report 2025“.
      </p>
      <p className="mb-5 leading-relaxed">
        <Pill>Forrester & Gartner</Pill> Ein signifikanter Anteil der B2B-Käufer bevorzugt
        rep-freie, digitale Prozesse; dennoch steigt die Kaufreue bei reinem Self-Service. Anbieter, die
        digitale <strong>Buyer Enablement</strong> mit menschlicher Expertise kombinieren, gewinnen Vertrauen.
      </p>
      <p className="mb-5 leading-relaxed">
        <Pill>McKinsey 2025</Pill> GenAI entfaltet Wirkung entlang der gesamten Go-to-Market-Kette –
        von Segmentierung und Content bis Deal-Support –, wenn Governance (Quellen, Freigaben, Logging) mitwächst.
      </p>

      {/* Chart */}
      <TrustImpactChart />

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          „Vertrauen ist 2025 die härteste Währung im B2B. GenAI lohnt sich dort am meisten,
          wo es <em>Belege</em> sichtbarer macht und <em>Komplexität</em> für Buying-Teams reduziert.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Redaktionelle Einschätzung auf Basis aktueller Studien (Edelman/LinkedIn 2025; McKinsey 2025;
          Forrester/Gartner 2024–2025)
        </figcaption>
      </figure>

      {/* 3 */}
      <Anchor id="framework" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className={`w-5 h-5 ${accent}`} /> Ebene 1: Autorität
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Jährliche „Flaggschiff-Studie“ (eigene Daten + Sekundärquellen).</CheckLi>
            <CheckLi>Point-of-View-Artikel zu kontroversen Themen – mit Quellen.</CheckLi>
            <CheckLi>Speaker-Decks + Kurzvideos; Distribution via LinkedIn & Newsletter.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeCheck className={`w-5 h-5 ${accent}`} /> Ebene 2: Beweise
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Kurzstudien, Benchmarks, ROI-Kalkulatoren, interaktive Demos.</CheckLi>
            <CheckLi>Case Library mit quantifizierten Ergebnissen & Zitaten.</CheckLi>
            <CheckLi>DSRs (Digital Sales Rooms) pro Account – kuratierte Evidenzen.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Users className={`w-5 h-5 ${accent}`} /> Ebene 3: Hilfsbereitschaft
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Guides, Checklisten, Mini-Tools – „Enablement vor Pitch“.</CheckLi>
            <CheckLi>Antwortzeit &amp; Klarheit erhöhen (AI Assistants mit Quellen).</CheckLi>
            <CheckLi>Community-Beteiligung statt Einweg-Kommunikation.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Ebenen 4–5: Transparenz & Reputation
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Preismodelle &amp; Erwartungsmanagement offenlegen.</CheckLi>
            <CheckLi>Sicherheits-/Nachhaltigkeitsnachweise teilen (Datenpunkte!).</CheckLi>
            <CheckLi>Unabhängige Gütesiegel/Analystenberichte verlinken.</CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 1 – 16:6 (Unsplash API) */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1529336953121-ad0b0f80b6d8?w=1200&q=80&auto=format&fit=crop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1529336953121-ad0b0f80b6d8?w=2000&q=80&auto=format&fit=crop"
              alt="Meeting eines Buying-Committees – Notebooks, Diagramme, kollaborative Entscheidungen"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Buying-Committee: Vertrauen entsteht durch Evidenz, Klarheit und Hilfsbereitschaft – nicht durch Druck.
        </figcaption>
      </figure>

      {/* 4 */}
      <Anchor id="taktiken" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FileSearch className={`w-5 h-5 ${accent}`} /> Research & Content
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>
              <strong>Research-Sprints (GenAI + Analysten):</strong> Cluster-Fragen, Quellenkorpus, Synthesen,
              Zitatverwaltung; monatlicher „Insights Brief“ (Edelman/LinkedIn 2025 als Referenzformat).
            </CheckLi>
            <CheckLi>
              <strong>RAG-gestützte Content-Assembly:</strong> Eigene Cases, Produkt-Docs, Studien; automatische
              Quellen-Fußnoten + Link-Outs.
            </CheckLi>
            <CheckLi>
              <strong>Expert:innen-Q&A Assistant:</strong> Website-Chat mit dokumentierten Antworten & Quellen; Eskalation an Menschen.
            </CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <LineChart className={`w-5 h-5 ${accent}`} /> ABM & Distribution
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>
              <strong>Intent-Signale + Snippet-Factory:</strong> Account-spezifische Snippets für Social & E-Mail – mit
              strengen Frequency Caps.
            </CheckLi>
            <CheckLi>
              <strong>Digital Sales Rooms (DSR):</strong> Automatisch befüllt mit relevanten Belegen, Demos, ROI-Calc;
              Notification nur bei echter Aktivität.
            </CheckLi>
            <CheckLi>
              <strong>Employee Advocacy:</strong> AI generiert persönliche Kurzposts, aber menschliche Anpassung ist Pflicht.
            </CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${accent}`} /> Governance & Qualität
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Fact-Check-Playbook (Quellenklassen A/B/C, 4-Augen-Freigabe).</CheckLi>
            <CheckLi>PII-Minimierung, Consent-Management, Opt-out für Personalisierung.</CheckLi>
            <CheckLi>Halluzinations-Prevention: Retrieval, Confidence-Scores, Red-Flags.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Info className={`w-5 h-5 ${accent}`} /> Schnellstarter (30 Tage)
          </h3>
          <ol className="text-sm space-y-2 list-decimal ml-5">
            <li>Wissensspeicher kuratieren (Cases, Decks, Policies, Studien).</li>
            <li>Top-3 Pain Points definieren; FAQ & „Wie geht…?“-Artikel planen.</li>
            <li>RAG-Assistent pilotieren (nur Docs mit Freigabe).</li>
            <li>DSR-Template erstellen; ein Pilot-Account auswählen.</li>
            <li>Metriken & QA-Gates festlegen (siehe Mess-Teil).</li>
          </ol>
        </div>
      </div>

      {/* Bild 2 – 16:6 (Unsplash API) */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1523956208760-8a27b05f7b3b?w=1200&q=80&auto=format&fit=crop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1523956208760-8a27b05f7b3b?w=2000&q=80&auto=format&fit=crop"
              alt="Dashboard mit Metriken zu Content-Performance, DSR-Aktivität, Marken-Suchen"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Übersichtliche Messung: Leading-Indikatoren für Vertrauen sind oft schneller sichtbar als Umsatzmetriken.
        </figcaption>
      </figure>

      {/* 5 */}
      <Anchor id="messung" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <LineChart className={`w-5 h-5 ${accent}`} /> Leading-Indikatoren
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Wiederkehrende Besuche pro Buying-Unit (anonym & bekannt).</CheckLi>
            <CheckLi>Direkter Traffic, Marken-Suchen, Newsletter-CTR/Reply.</CheckLi>
            <CheckLi>DSR-Engagement (Zeit, geteilte Artefakte, Kommentare).</CheckLi>
            <CheckLi>Share-Rate von Thought Leadership, Earned Mentions.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Users className={`w-5 h-5 ${accent}`} /> Pipeline-Nähe
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Meeting-Akzeptanzraten, RFP-/Pitch-Einladungen.</CheckLi>
            <CheckLi>„No Decision“-Quote sinkt; Deal-Qualität steigt.</CheckLi>
            <CheckLi>Time-to-First-Opportunity, Stage-Konversionen.</CheckLi>
          </ul>
        </div>
      </div>

      {/* Vergleichstabelle */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
          <caption id="vergleich-caption" className="sr-only">
            Vergleich: Vertrauensmaßnahmen & Wirkung
          </caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Maßnahme</th>
              <th className="px-3 py-2">Wirkung auf Vertrauen</th>
              <th className="px-3 py-2">Hinweis</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                a: "Flaggschiff-Studie",
                b: "Hohe Autorität, Earned Mentions",
                c: "Zahlen, Methodik & Rohdaten offenlegen",
              },
              {
                a: "Case Library",
                b: "Beweisführung & Risikoreduktion",
                c: "Outcome > Features; Zahlen kontextualisieren",
              },
              {
                a: "DSR pro Account",
                b: "Klarheit & Konsistenz in der Evaluation",
                c: "Kein Overload; relevantes Material kuratieren",
              },
              {
                a: "Preistransparenz",
                b: "Erwartungsmanagement",
                c: "Spannen & Trade-offs statt starrer Preislisten",
              },
              {
                a: "Sustainability-Report",
                b: "Glaubwürdigkeit & Differenzierung",
                c: "Zertifizierte Daten, Fortschritt vs. Versprechen",
              },
            ].map((row) => (
              <tr key={row.a} className="bg-zinc-50 rounded-xl">
                <th scope="row" className="px-3 py-2 font-medium">
                  {row.a}
                </th>
                <td className="px-3 py-2">{row.b}</td>
                <td className="px-3 py-2">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 6 */}
      <Anchor id="risiken" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-rose-700" /> Vermeidbare Fehler
          </h3>
          <ul className="text-sm space-y-2">
            <li>Content-Flut ohne Substanz; keine Quellen, keine Beweise.</li>
            <li>Überpersonalisierung & Tracking ohne klare Einwilligung.</li>
            <li>Halluzinationen durch fehlende Retrieval-/QA-Prozesse.</li>
            <li>Fehlende Freigabe-Gates & Logs für Audit/Compliance.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>Quellenoffenlegung, Methodik, Zahlen – jederzeit nachvollziehbar.</li>
            <li>RAG + Fact-Checks + menschliche Redaktion als Standard.</li>
            <li>Privacy by Design, Frequency Caps, klare Opt-outs.</li>
            <li>DSR-Playbooks & Enablement für Buying-Teams.</li>
          </ul>
        </div>
      </div>

      {/* Interne Links */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/ai-content-governance">
              AI Content Governance: Quellen, QA & Freigaben richtig aufsetzen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/abm-2025">
              ABM 2025: DSRs & Signal-gestützte Distribution in der Praxis
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/ai-sales-playbooks">
              AI Sales Playbooks: Vom ersten Touchpoint bis zum Closing
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
            q: "Welche Rolle spielt Thought Leadership im B2B 2025 wirklich?",
            a: "Eine zentrale: Hochwertige Thought-Leadership-Inhalte beeinflussen die Wahrnehmung im Buying-Committee – inklusive Hidden Buyers. Studien zeigen, dass solche Inhalte Offenheit für Outreach und Pitch-Einladungen erhöhen, wenn sie substanziell und belegt sind.",
          },
          {
            q: "Wie vermeide ich KI-Content, der nach Massenware klingt?",
            a: "Mit RAG (Retrieval Augmented Generation), strenger Quellenkurationsliste, Stilguide, Zitaten, Zahlen und menschlicher Redaktion. Weniger, dafür besser – und immer mit Beweisen.",
          },
          {
            q: "Brauche ich unbedingt Digital Sales Rooms?",
            a: "Nicht zwingend – aber DSRs bündeln Belege, Demos und nächste Schritte an einem Ort pro Account. Gerade bei rep-freien Präferenzen helfen sie, Orientierung zu geben und Vertrauen zu vertiefen.",
          },
          {
            q: "Welche KPIs zeigen früh, dass Vertrauen wächst?",
            a: "Wiederkehrende Besuche, Share-Rate, Direct/Brand Search, DSR-Engagement, Meeting-Akzeptanz, Einladungen in RFP/Pitches – bevor Umsatzmetriken sichtbar werden.",
          },
          {
            q: "Wie gehe ich mit Compliance & Datenschutz um?",
            a: "PII-Minimierung, rechtliche Einwilligungen, Transparenz, Logging; technische Schutzmaßnahmen (z. B. Zugriffsebenen, Red-Flag-Checks) und klare Freigabeprozesse für Inhalte.",
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
              ...[
                {
                  q: "Welche Rolle spielt Thought Leadership im B2B 2025 wirklich?",
                  a: "Hochwertige Thought-Leadership-Inhalte beeinflussen die Wahrnehmung im Buying-Committee – inklusive Hidden Buyers. Substanzielle Inhalte erhöhen Offenheit für Outreach und Pitch-Einladungen, wenn sie belegt sind.",
                },
                {
                  q: "Wie vermeide ich KI-Content, der nach Massenware klingt?",
                  a: "RAG, kuratierte Quellen, Stilguide, Zitate, Zahlen und menschliche Redaktion – Qualität statt Volumen; Beweise sind Pflicht.",
                },
                {
                  q: "Brauche ich unbedingt Digital Sales Rooms?",
                  a: "DSRs bündeln Belege, Demos und nächste Schritte pro Account – hilfreich bei rep-freien Präferenzen, um Orientierung zu geben.",
                },
                {
                  q: "Welche KPIs zeigen früh, dass Vertrauen wächst?",
                  a: "Wiederkehrende Besuche, Share-Rate, Direct/Brand Search, DSR-Engagement, Meeting-Akzeptanz, RFP-/Pitch-Einladungen.",
                },
                {
                  q: "Wie gehe ich mit Compliance & Datenschutz um?",
                  a: "PII-Minimierung, Einwilligungen, Transparenz, Logging; technische Schutzmaßnahmen und klare Freigaben für Inhalte.",
                },
              ].map((x) => ({
                "@type": "Question",
                name: x.q,
                acceptedAnswer: { "@type": "Answer", text: x.a },
              })),
            ],
          }),
        }}
      />
    </section>

    {/* Summary */}
    <section id="zusammenfassung" className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
      <p className="leading-relaxed">
        <strong>B2B-Kunden 2025 gewinnen</strong> heißt: <em>Vertrauen vor Sales</em> systematisch aufbauen –
        mit Thought Leadership, klaren Beweisen, hilfreichen Formaten und transparenter Kommunikation. KI ist der
        <em>Multiplikator</em>, der Qualität skaliert, Antworten beschleunigt und Belege sichtbar macht – unter der
        Bedingung guter Governance (RAG, Quellen, Freigaben). So wirst du als <strong>Experte</strong> wahrgenommen,
        reduzierst Risiko im Buying-Committee und erhöhst die Chancen auf Shortlist, Pitch-Einladung und Abschluss.
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Vertrauens- &amp; KI-Enablement-Check gewünscht?</h2>
        <p className="text-zinc-700 mb-4">
          Wir analysieren deine Journey, richten eine schlanke KI-Vertrauensmaschine ein (RAG, DSR, Metriken) und
          liefern ein 90-Tage-Playbook inkl. Qualitätssicherung.
        </p>

        {/* Demo-Formular (UI, ohne Funktion) */}
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
            className={`mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${racingGreen} px-4 py-2 font-semibold text-white shadow-sm opacity-70 cursor-not-allowed`}
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
        <img src={author.image} alt="Autorin" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-zinc-700">
            {author.role}. Fokus: Thought Leadership, ABM, Digital Sales Rooms &amp; RAG-Governance.
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

    {/* Quellen */}
    <section className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Edelman & LinkedIn (2025): B2B Thought Leadership Impact Report –{" "}
          https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report
        </li>
        <li>
          Edelman & LinkedIn (2025) – PDF{" "}
          https://www.edelman.com/sites/g/files/aatuss191/files/2025-07/2025%20Edelman-LinkedIn%20B2B%20Thought%20Leadership%20Impact%20Report_FINAL.pdf
        </li>
        <li>
          McKinsey (2025): Unlocking profitable B2B growth through gen AI –{" "}
          https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/unlocking-profitable-b2b-growth-through-gen-ai
        </li>
        <li>
          McKinsey (2024): Generative AI & B2B Sales –{" "}
          https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/an-unconstrained-future-how-generative-ai-could-reshape-b2b-sales
        </li>
        <li>
          Gartner / Forrester (2024–2025): Rep-freie Präferenzen & digitaler Kauf – Überblick{" "}
          https://www.demandgenreport.com/industry-news/news-brief/3-out-of-5-b2b-buyers-prefer-a-rep-free-buying-experience-gartner/49802/
        </li>
        <li>
          Forrester (2024): The State of Business Buying – Press Room –{" "}
          https://www.forrester.com/press-newsroom/forrester-the-state-of-business-buying-2024/
        </li>
        <li>
          Forrester (2024): Younger Generations Are Shaking Up B2B Buying –{" "}
          https://www.forrester.com/blogs/younger-b2b-buyers/
        </li>
        <li>
          Demand Gen Report (2024): Content Preferences Benchmark Survey – PDF –{" "}
          https://53a3b3d3789413ab876e-c1e3bb10b0333d7ff7aa972d61f8c669.ssl.cf1.rackcdn.com/DGR_DG283_SURV_ContentPref_April_2024_Final.pdf
        </li>
        <li>
          CMI (2024/25): B2B Content Marketing Benchmarks –{" "}
          https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research
        </li>
        <li>
          Deloitte Digital x WSJ (2024): Trust & Sustainability im B2B –{" "}
          https://deloitte.wsj.com/cmo/looking-to-improve-b2b-customer-trust-demonstrating-sustainability-can-help-2af65d54
        </li>
        <li>
          Edelman (2025): Trust Barometer – Global Report –{" "}
          https://www.edelman.com/trust/2025/trust-barometer
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow
          term="Hidden Buyers"
          def="Interne Einflussnehmende ohne offizielle Rolle im Buying-Committee, die Entscheidungen mitprägen."
        />
        <GlossaryRow
          term="RAG (Retrieval Augmented Generation)"
          def="GenAI-Ansatz, der Antworten mit dokumentenbasiertem Abruf verknüpft – für belegbare, überprüfbare Inhalte."
        />
        <GlossaryRow
          term="Digital Sales Room (DSR)"
          def="Digitaler, account-spezifischer Raum mit kuratierten Belegen, Demos, Docs und Nächsten Schritten."
        />
        <GlossaryRow
          term="ABM (Account-Based Marketing)"
          def="Strategie zur fokussierten, account-spezifischen Ansprache und Enablement von Buying-Units."
        />
        <GlossaryRow
          term="Buyer Enablement"
          def="Materialien & Tools, die Käufer:innen helfen, intern Entscheidungen zu treffen – statt nur zu überzeugen."
        />
      </dl>
    </section>
  </article>
</>
);
}
