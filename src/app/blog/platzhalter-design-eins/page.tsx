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
Scale,
MessageSquareText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/* ---------- Helper ---------- */
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
/* ---------- Theme ---------- */
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";
/* ---------- Meta: Company / Author ---------- */
const author = {
name: "Julia Weber",
role: "Senior Talent Acquisition Consultant (8+ Jahre)",
image: "/autor.webp",
linkedin: "https://www.linkedin.com/in/juliaweber-ta/",
};
const reviewer = {
name: "Dr. Markus Brandt",
role: "Head of People & Culture",
linkedin: "https://www.linkedin.com/in/markus-brandt-people/",
};
const company = {
name: "Talentwerk GmbH",
url: "https://www.talentwerk.de",
logo: "/logo.png",
};
/* ---------- Sections (ToC + Reading Time) ---------- */
const sections = [
{
id: "grundlagen",
title: "Schlechte vs. gute Recruiter: Woran machst du es fest?",
content:
"Gute Recruiter sind Talent-Advisor: Sie verbinden sauberes Anforderungs-Management, transparente Kommunikation und datenbasierte Entscheidungen mit echtem Sparring für Hiring Manager. Schlechte Recruiter arbeiten transaktionsgetrieben: viel Volumen, wenig Qualität, kaum Rückmeldung. Studien zeigen, dass positive Candidate Experience messbar zu besseren Hiring-Ergebnissen führt und sich auch geschäftlich auszahlt. Gleichzeitig erwarten Kandidat:innen heute schnelle Reaktionen, klare Erwartungen und Fairness – bleibt das aus, springen sie ab. 
api.eremedia.com
",
},
{
id: "status-quo",
title: "Status quo & Trends: Vom CV-Fokus zum Skills- und AI-gestützten Recruiting",
content:
"Recruiting verlagert sich in Richtung Skills-basierter Auswahl und verantwortungsvoller KI-Nutzung. Laut LinkedIn sparen Teams, die Generative AI bereits testen oder integrieren, im Schnitt rund einen Arbeitstag pro Woche ein und rücken stärker in eine beratende Rolle – Beziehungskompetenz wird massiv wichtiger. Für die EU setzt die Pay-Transparency-Richtlinie zusätzliche Standards: Gehaltsband vor dem Interview (teils in der Anzeige) und transparente, diskriminierungsfreie Prozesse werden zur Pflicht (Umsetzung bis Juni 2026). Gute Recruiter antizipieren das und machen Transparenz heute schon zum Standard. 
LinkedIn Business Solutions
Council of the European Union
Lockton
",
},
{
id: "signale",
title: "15 klare Signale: So erkennst du gute von schlechten Recruitern",
content:
"Es gibt wiederkehrende Muster: Antwortzeiten, Briefing-Qualität, Marktverständnis, Umgang mit Feedback, Tiefe der Shortlist und Compliance. Gute Recruiter setzen Erwartungsmanagement (Timeline, Prozessschritte) sauber auf, liefern strukturierte Updates, spiegeln den Markt (Gehalt, Verfügbarkeit, Alternativen) und erklären Entscheidungslogik. Schlechte Recruiter pitchen vage, ghosten, schicken unqualifizierte Profile im Schrotflintenmodus und ignorieren Datenschutz sowie Pay-Transparency-Anforderungen. Die folgende Liste macht es greifbar – nutze sie als Schnell-Check im Alltag.",
},
{
id: "praxis",
title: "Praxis: Zwei Wege – transaktionsorientiert vs. beratungsorientiert",
content:
"Transaktionsorientiertes Recruiting optimiert kurzfristig auf Volumen und Geschwindigkeit, oft zulasten der Passgenauigkeit und Candidate Experience. Beratungsorientierte Recruiter arbeiten hypothesengetrieben, priorisieren Qualität der Gespräche, kalibrieren früh und coachen Hiring Manager – das erhöht Fairness, reduziert Absprünge und steigert die Empfehlungsrate. Daten aus der CandE-Benchmark zeigen: Kontinuierliche Kommunikation und klarer Abschluss (Zusage/Absage) sind zentrale Hebel der Wahrnehmung von Fairness. 
api.eremedia.com
",
},
{
id: "checkliste",
title: "Checkliste & Workflow: In 7 Schritten zum Recruiting-Qualitäts-Check",
content:
"Du kannst in jeder Phase systematisch prüfen: 1) Intake, 2) Sourcing, 3) Outreach, 4) Interview-Design, 5) Shortlist & Feedback, 6) Offer, 7) Retention-Signal. Ergänze pro Schritt KPIs (z. B. Time-to-First-Response, Interview-Show-Rate, Candidate-NPS) und nutze einfache, rechtssichere Standards (Gehaltsband kommunizieren, DSGVO-konforme Einwilligung, klare Datenlöschung). So trennst du gute von schlechten Praktiken im Tagesgeschäft. 
Council of the European Union
European Data Protection Supervisor
",
},
{
id: "fehler",
title: "Typische Fehler & Risiken – und wie du sie vermeidest",
content:
"Häufige Stolpersteine: unklare Rollenprofile, kein strukturiertes Interview, fehlende Rückmeldungen, keine Transparenz zu Gehalt, unklare Datenhaltung. Risiken steigen durch regulatorische Entwicklungen (EU-Pay-Transparency, DSGVO). Best Practice: frühe Kalibrierung mit Hiring Manager, strukturierte Bewertungsbögen, verbindliche SLAs (Antwort in 48 h), Gehaltsband pro Rolle, dokumentierte Einwilligungen & Löschfristen. 
Council of the European Union
Lockton
support.hroffice.eu
",
},
];
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // 180 wpm conservative
/* ---------- UI Components ---------- */
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
<div id={id} aria-hidden className="pt-24 -mt-24" /> );
/* ---------- Static SVG Chart ---------- */
const ComparisonChart = () => {
const items = [
{ k: "Transparenz (Gehalt, Prozess)", vergleich1: 3, vergleich2: 9 },
{ k: "Antwortgeschwindigkeit (SLAs)", vergleich1: 4, vergleich2: 9 },
{ k: "Fach-/Marktverständnis", vergleich1: 5, vergleich2: 9 },
{ k: "Candidate Experience & Fairness", vergleich1: 4, vergleich2: 9 },
{ k: "Datenschutz & Compliance", vergleich1: 5, vergleich2: 9 },
{ k: "Daten-/Skills-basiert & KI-Kompetenz", vergleich1: 5, vergleich2: 8 },
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
aria-label="Vergleich: schlechter Recruiter (oben, grau) vs. guter Recruiter (unten, grün) entlang zentraler Qualitätsfaktoren"
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
          {/* Schlechtes Recruiting (grau, obere Leiste) */}
          <rect x={left} y={y} width={scale(row.vergleich1)} height={barH} fill="#e5e7eb" rx="6" />
          <text x={left + scale(row.vergleich1) + 6} y={y + barH - 4} fontSize="11" className="fill-zinc-500">
            {row.vergleich1}
          </text>
          {/* Gutes Recruiting (grün, untere Leiste) */}
          <rect x={left} y={y + barH + gap} width={scale(row.vergleich2)} height={barH} fill="url(#g1)" rx="6" />
          <text x={left + scale(row.vergleich2) + 6} y={y + barH + gap + barH - 4} fontSize="11" className="fill-emerald-700">
            {row.vergleich2}
          </text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Gute Recruiter performen sichtbar stärker bei Transparenz, Tempo, Fairness und Compliance; die Gewichtung folgt aktuellen EU- und Marktanforderungen.
  </figcaption>
</figure>
);
};
/* ---------- Glossary row ---------- */
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
/* ---------- Page ---------- */
export default function Article() {
const updated = formatDateDE();
const title = "Schlechte Recruiter vs. Gute Recruiter erkennen: Signale, Checkliste & Beispiele";
const description =
"Woran erkennst du gute Recruiter? 15 klare Signale, EU-Compliance (Pay Transparency, DSGVO), Trends zu Skills & KI – inkl. Checkliste für deinen Qualitäts-Check.";
const canonical = ${company.url}/blog/schlechte-gute-recruiter-erkennen;
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
        Du willst Recruiting-Qualität erkennen – schnell, fair und compliant? Hier ist dein Kompass: klare Signale, EU-Anforderungen und eine praxistaugliche Checkliste.
      </p>

      {/* Hero 16:6 */}
      <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            {/* Hero: idealer Prompt (16:9): „Modernes Recruiting-Team im Gespräch mit Kandidat:in, heller Meetingraum, Diversity, Fokus auf Transparenz & Fairness, realistischer Stil“ */}
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=450&fit=crop&auto=format&q=60"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=600&fit=crop&auto=format&q=60"
              alt="Recruiting-Gespräch im modernen Meetingraum: transparent, strukturiert, wertschätzend"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="sr-only">Transparente, strukturierte Interviewsituation als visuelles Leitmotiv.</figcaption>
      </figure>

      {/* Meta row – better legibility */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
        <div className="flex items-center gap-3">
          <img src={author.image} alt="Autor:in" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
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
          Gute Recruiter agieren als Talent-Advisor: klare Erwartungen, strukturierte Interviews, sauberes Feedback – das steigert Fairness und Abschlussquote. :contentReference[oaicite:5]{index=5}
        </TLDRItem>
        <TLDRItem icon={Gauge}>
          Trends 2025: Skills-basierte Auswahl und verantwortungsvoller KI-Einsatz beschleunigen Prozesse und erhöhen die Qualität der Einstellungen. :contentReference[oaicite:6]{index=6}
        </TLDRItem>
        <TLDRItem icon={PiggyBank}>
          Pay-Transparency-Richtlinie (EU) verpflichtet zu Gehaltsband & Transparenz – wer das heute schon lebt, gewinnt Vertrauen und spart Zeit. :contentReference[oaicite:7]{index=7}
        </TLDRItem>
        <TLDRItem icon={Network}>
          Messbare Standards (Time-to-First-Response, Candidate-NPS, Show-Rate) machen Qualität sichtbar und verhindern Ghosting. :contentReference[oaicite:8]{index=8}
        </TLDRItem>
        <TLDRItem icon={FileSearch}>
          Checkliste & Workflow helfen dir, in 7 Schritten Qualität zu prüfen – von Intake bis Offer inklusive DSGVO-Basics. :contentReference[oaicite:9]{index=9}
        </TLDRItem>
      </ul>
    </aside>

    {/* ToC */}
    <nav aria-label="Inhaltsverzeichnis" className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
      <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
      <ol className="list-decimal ml-5 space-y-2">
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
            Schlechte vs. gute Recruiter: Woran machst du es fest?
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#status-quo">
            Status quo & Trends: Skills & KI
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#signale">
            15 Signale im Alltag
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#praxis">
            Praxisvergleich: Transaktion vs. Beratung
          </a>
        </li>
        <li>
          <a className={`hover:underline ${accent} font-medium`} href="#checkliste">
            Checkliste & Workflow
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
            <MessageSquareText className={`w-5 h-5 ${accent}`} />
            <strong>Erwartungsmanagement & Kommunikation</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Gute Recruiter definieren Timeline, Schritte und Entscheidungskriterien upfront – inkl. SLA für Rückmeldungen.</CheckLi>
            <CheckLi>Sie bieten Feedback-Loops nach Interviews und sorgen für „definitive closure“ (Zusage/Absage).</CheckLi>
            <CheckLi>Ghosting und vage Aussagen sind klare Red Flags.</CheckLi>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Server className={`w-5 h-5 ${accent}`} />
            <strong>Skills-basierte Auswahl & Daten</strong>
          </div>
          <ul className="space-y-2 text-sm">
            <CheckLi>Fokus auf Skills & Outcomes statt reiner Titel-historie; strukturierte Bewertungsbögen.</CheckLi>
            <CheckLi>Datengestützte KPIs (z. B. Show-Rate, Time-to-First-Response, Candidate-NPS) steuern Qualität.</CheckLi>
            <CheckLi>KI erleichtert Routine (Suchen, Messaging) – mit menschlicher Kontrolle für Fairness & Compliance. :contentReference[oaicite:10]{index=10}</CheckLi>
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
          „Positive Candidate Experiences führen zu positiven Hiring-Outcomes – mit spürbaren Business-Effekten.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Gerry Crispin, Talent Board (direktes Zitat aus dem CandE Benchmark Report). :contentReference[oaicite:11]{index=11}
        </figcaption>
      </figure>

      {/* 3 */}
      <Anchor id="signale" />
      <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
      <p className="leading-relaxed mb-4">{sections[2].content}</p>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${accent}`} /> Belege für Qualität (gute Recruiter)
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Antwort in 24–48 h, klarer Prozessfahrplan, verbindliche Termine.</CheckLi>
            <CheckLi>Gehaltsband & Benefits transparent, frühe Erwartungsklärung zu Hybrid/Office.</CheckLi>
            <CheckLi>Strukturierte Interviews, kalibrierte Scorecards, konsistentes Feedback. :contentReference[oaicite:12]{index=12}</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <BadgeEuro className={`w-5 h-5 ${accent}`} /> Warnzeichen (schlechte Recruiter)
          </h3>
          <ul className="space-y-2 text-sm">
            <CheckLi>Kein Gehaltsband, ausweichende Antworten zu Rolle/Entscheidungen. :contentReference[oaicite:13]{index=13}</CheckLi>
            <CheckLi>Massenaussendungen ohne Bezug, Unkenntnis des Marktes/Stacks.</CheckLi>
            <CheckLi>Ghosting, keine Absagekultur, fehlende DSGVO-Basics. :contentReference[oaicite:14]{index=14}</CheckLi>
          </ul>
        </div>
      </div>

      {/* Vergleichstabelle */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
          <caption id="vergleich-caption" className="sr-only">
            Gegenüberstellung schlechter vs. guter Recruiter entlang relevanter Aspekte
          </caption>
          <thead>
            <tr className="text-left">
              <th className="px-3 py-2">Aspekt</th>
              <th className="px-3 py-2">Schlechter Recruiter</th>
              <th className="px-3 py-2">Guter Recruiter</th>
            </tr>
          </thead>
          <tbody>
            {[
              { a: "Briefing & Rollenverständnis", c: "vage, ohne Must-Haves", o: "präzise, outcome-basiert, kalibriert" },
              { a: "Kommunikation", c: "reaktiv, unregelmäßig", o: "proaktiv, SLAs & Updates" },
              { a: "Transparenz (Gehalt/Prozess)", c: "ausweichend", o: "Gehaltsband & Schritte klar (EU-konform)" },
              { a: "Interview-Design", c: "ungleich, subjektiv", o: "strukturiert, vergleichbar, fair" },
              { a: "Shortlist-Qualität", c: "Schrotflinte", o: "kuratiert, erklärt, divers" },
              { a: "Datenschutz (DSGVO)", c: "unklar, keine Einwilligung", o: "Einwilligung, Fristen, Löschung dokumentiert" },
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
      <Anchor id="praxis" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Landmark className={`w-5 h-5 ${accent}`} /> Zusammenfassung „Transaktion“
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <Pill>Tempo</Pill> Schnelles Sourcing ohne Tiefgang, Fokus auf CV-Schlagwörter.
            </li>
            <li>
              <Pill>Volumen</Pill> Viele Kontakte, geringe Relevanz, höhere Absprungraten.
            </li>
            <li>
              <Pill>Risiko</Pill> Fairness-Wahrnehmung sinkt; Candidate Resentment steigt.
            </li>
            <li>
              <Pill>Outcome</Pill> Mehr Nachbesetzungen, schwächere Quality-of-Hire.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Network className={`w-5 h-5 ${accent}`} /> Zusammenfassung „Beratung“
          </h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Frühe Kalibrierung mit Hiring Manager, Hypothesentests, Marktspiegel.</CheckLi>
            <CheckLi>Strukturierte Interviews & Scorecards erhöhen Vergleichbarkeit und Fairness.</CheckLi>
            <CheckLi>Klare Kommunikation inkl. Absagekultur stärkt Marke & Empfehlungsrate. :contentReference[oaicite:15]{index=15}</CheckLi>
            <CheckLi>Skills- & KI-gestützt für Qualität und Zeitgewinn – mit menschlicher Kontrolle. :contentReference[oaicite:16]{index=16}</CheckLi>
          </ul>
        </div>
      </div>

      {/* Bild 1 – volle Breite, 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=450&fit=crop&auto=format&q=60"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=600&fit=crop&auto=format&q=60"
              alt="Kalibrierungsmeeting zwischen Recruiter:in und Hiring Manager mit Scorecards"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Kalibrierung am Start spart später Runden: Scorecards & Marktspiegel machen Entscheidungen schneller und fairer.
        </figcaption>
      </figure>

      {/* 5 */}
      <Anchor id="checkliste" />
      <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
      <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
        <li>
          <strong>Intake sauber machen:</strong> Rolle in Outcomes übersetzen, „Must-have vs. Nice-to-have“, Gehaltsband fixieren (EU-konform). :contentReference[oaicite:17]{index=17}
        </li>
        <li>
          <strong>Marktspiegel teilen:</strong> Angebot/Nachfrage, typische Bandbreiten, Konkurrenz um Talente – transparent darlegen.
        </li>
        <li>
          <strong>Sourcing fokussieren:</strong> Hypothesengetrieben statt Gießkanne; diverse Pools einbeziehen.
        </li>
        <li>
          <strong>Outreach personalisieren:</strong> Bezug zur Person & Rolle, Timing & Next Steps klar, Antwort-SLAs benennen.
        </li>
        <li>
          <strong>Interview-Design strukturieren:</strong> Kompetenzen definieren, Fragen mappen, Bewertungsbögen nutzen. :contentReference[oaicite:18]{index=18}
        </li>
        <li>
          <strong>Feedback & Closure sichern:</strong> Innerhalb 48 h Rückmeldung; begründete Absagekultur verhindert Resentment. :contentReference[oaicite:19]{index=19}
        </li>
        <li>
          <strong>DSGVO & Aufbewahrung:</strong> Einwilligungen dokumentieren, Löschfristen (z. B. 6–12 Monate) implementieren. :contentReference[oaicite:20]{index=20}
        </li>
      </ol>

      {/* Bild 2 – 16:6 */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1522071901873-411886a10004?w=1200&h=450&fit=crop&auto=format&q=60"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?w=1600&h=600&fit=crop&auto=format&q=60"
              alt="Strukturiertes Interview mit Scorecards und klarem Prozessfahrplan"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Struktur schlägt Bauchgefühl: Skills-Mapping & Scorecards erhöhen Vergleichbarkeit und Fairness.
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
              Unklare Rolle & kein Gehaltsband: erhöht Absprünge und verfehlt EU-Erwartungen (Pay Transparency). :contentReference[oaicite:21]{index=21}
            </li>
            <li>Ghosting & fehlende Absagekultur: beschädigt Marke und Empfehlungsbereitschaft. :contentReference[oaicite:22]{index=22}</li>
            <li>Unstrukturierte Interviews: fördern Bias und inkonsistente Entscheidungen. :contentReference[oaicite:23]{index=23}</li>
            <li>DSGVO-Unsicherheit: keine Einwilligung, keine Löschroutine – hohes Risiko. :contentReference[oaicite:24]{index=24}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
          </h3>
          <ul className="text-sm space-y-2">
            <li>Frühe Kalibrierung, Scorecards & Feedback-SLAs (48 h) – fair und effizient. :contentReference[oaicite:25]{index=25}</li>
            <li>Gehaltsband in der Anzeige/vor Interview; klare Benefits & Arbeitsmodell. :contentReference[oaicite:26]{index=26}</li>
            <li>KI für Recherche & Messaging nutzen, Entscheidungshoheit bleibt menschlich. :contentReference[oaicite:27]{index=27}</li>
            <li>Einwilligungen & Löschfristen dokumentieren (6–12 Monate gängig). :contentReference[oaicite:28]{index=28}</li>
          </ul>
        </div>
      </div>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/recruiting-prozess-optimieren">
              Recruiting-Prozess optimieren: Von Intake bis Offer
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/candidate-experience-verbessern">
              Candidate Experience verbessern: 9 schnelle Hebel
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/leitfaden-pay-transparency">
              Leitfaden Pay Transparency: Was 2026 gilt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/ki-im-recruiting">
              KI im Recruiting: Chancen, Risiken & Best Practices
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
            q: "Was ist das wichtigste Signal für gute Recruiter?",
            a: "Klarheit und Verbindlichkeit: Prozess, Timeline, Kriterien und Gehaltsband werden upfront erklärt; Rückmeldungen erfolgen innerhalb 24–48 h und es gibt einen sauberen Abschluss (Zusage/Absage). :contentReference[oaicite:29]{index=29}",
          },
          {
            q: "Welche Rolle spielt KI im Recruiting?",
            a: "KI nimmt Routinearbeit ab (Suche, Messaging, Vorqualifizierung) und verschafft Zeit für Beziehungsarbeit – Entscheidungen und Fairnesssicherung bleiben menschlich. Teams berichten von spürbaren Effizienzgewinnen. :contentReference[oaicite:30]{index=30}",
          },
          {
            q: "Muss ich ein Gehaltsband nennen?",
            a: "Mit der EU-Pay-Transparency-Richtlinie wird Transparenz zur Norm; in vielen Fällen ist ein Gehaltsband spätestens vor dem Interview verpflichtend, teils direkt in der Anzeige. Frühe Transparenz erhöht zudem die Passung. :contentReference[oaicite:31]{index=31}",
          },
          {
            q: "Wie lange darf ich Kandidat:innendaten speichern?",
            a: "Nur so lange wie nötig; viele Unternehmen löschen nach 6–12 Monaten oder holen eine erneute Einwilligung ein. Wichtig sind dokumentierte Prozesse und einfache Widerrufsmöglichkeiten. :contentReference[oaicite:32]{index=32}",
          },
          {
            q: "Wie messe ich Qualität im Recruiting?",
            a: "Nutze wenige, klare KPIs: Time-to-First-Response, Interview-Show-Rate, Candidate-NPS, Offer-Acceptance-Rate und Quality-of-Hire (Retention, interne Mobilität, Performance). Kontinuierliches Messen verbessert Fairnesswahrnehmung. :contentReference[oaicite:33]{index=33}",
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
                name: "Was ist das wichtigste Signal für gute Recruiter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Klarheit und Verbindlichkeit: Prozess, Timeline, Kriterien und Gehaltsband werden upfront erklärt; Rückmeldungen erfolgen innerhalb 24–48 h und es gibt einen sauberen Abschluss (Zusage/Absage).",
                },
              },
              {
                "@type": "Question",
                name: "Welche Rolle spielt KI im Recruiting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "KI nimmt Routinearbeit ab und verschafft Zeit für Beziehungsarbeit – Entscheidungen und Fairnesssicherung bleiben menschlich. Teams berichten von spürbaren Effizienzgewinnen.",
                },
              },
              {
                "@type": "Question",
                name: "Muss ich ein Gehaltsband nennen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Mit der EU-Pay-Transparency-Richtlinie wird Transparenz zur Norm; in vielen Fällen ist ein Gehaltsband spätestens vor dem Interview verpflichtend, teils direkt in der Anzeige.",
                },
              },
              {
                "@type": "Question",
                name: "Wie lange darf ich Kandidat:innendaten speichern?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Nur so lange wie nötig; viele Unternehmen löschen nach 6–12 Monaten oder holen eine erneute Einwilligung ein. Wichtig sind dokumentierte Prozesse und einfache Widerrufsmöglichkeiten.",
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
        Gute Recruiter erkennst du an Transparenz, Struktur und Fairness – und daran, dass sie als Berater:innen für Hiring Manager agieren. Sie nutzen Skills-basierte Auswahl und
        verantwortungsvoll KI, messen Qualität kontinuierlich und halten EU-Standards (Pay Transparency, DSGVO) ein. Das Ergebnis sind schnellere, fairere Prozesse, bessere Hires und
        eine stärkere Arbeitgebermarke. :contentReference[oaicite:34]{index=34}
      </p>
    </section>

    {/* CTA */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Recruiting-Qualität prüfen lassen?</h2>
        <p className="text-zinc-700 mb-4">Wir auditieren Prozess, Kommunikation & Compliance – inkl. Quick-Wins in 14 Tagen.</p>

        {/* Kein <form>, keine Handler – nur UI */}
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

          {/* Button ohne Submit-Funktion */}
          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-2 font-semibold text-white shadow-sm opacity-70 cursor-not-allowed"
            aria-disabled="true"
            title="Demo – ohne Funktion"
          >
            Audit anfragen
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
            {author.role}. Fokus: Candidate Experience, Interview-Design, EU-Compliance (Pay Transparency, DSGVO).
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
          Talent Board / ERE Media: „2023 Global Candidate Experience (CandE) Benchmark Research Report“, PDF (126 S.). :contentReference[oaicite:35]{index=35}
        </li>
        <li>
          LinkedIn Talent Solutions: „The Future of Recruiting 2025“ – Executive Summary & Methodik-Seite. :contentReference[oaicite:36]{index=36}
        </li>
        <li>
          Council of the European Union: „Pay transparency in the EU“ – Übersicht zu Richtlinie (EU) 2023/970. :contentReference[oaicite:37]{index=37}
        </li>
        <li>
          Lockton: „The EU Pay Transparency Directive – It’s time to prepare“ (Transpositionsfrist bis 7. Juni 2026). :contentReference[oaicite:38]{index=38}
        </li>
        <li>
          European Data Protection Supervisor (EDPS): „Selection and recruitment of staff“ – Hinweise zu Aufbewahrung/Löschung. :contentReference[oaicite:39]{index=39}
        </li>
        <li>
          HR-ON: „GDPR and Recruitment: 5 Key Tips“ – Praxis zu Löschfristen (6–12 Monate). :contentReference[oaicite:40]{index=40}
        </li>
        <li>
          Harvard Business Review: „Reengineering the Recruitment Process“ – strukturierte Verfahren & Skills-Fokus. :contentReference[oaicite:41]{index=41}
        </li>
      </ul>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow term="Candidate Experience" def="Gesamte Wahrnehmung von Bewerbenden entlang des Recruiting-Prozesses – Tempo, Fairness, Transparenz und Feedback." />
        <GlossaryRow term="Talent-Advisor" def="Recruiter:in, die/der Hiring Manager berät, Marktrealität spiegelt und Entscheidungen methodisch absichert." />
        <GlossaryRow term="Scorecard" def="Standardisierter Bewertungsbogen je Kompetenz, macht Interviews vergleichbar und reduziert Bias." />
        <GlossaryRow term="Pay Transparency" def="EU-Vorgabe, Gehaltsinformationen transparent zu machen; z. B. Gehaltsband vor dem Interview offenlegen." />
        <GlossaryRow term="Time-to-First-Response" def="Zeitspanne von Bewerbung/Outreach bis zur ersten qualifizierten Rückmeldung – Kernindikator für Prozessqualität." />
      </dl>
    </section>
  </article>
</>
);
}
