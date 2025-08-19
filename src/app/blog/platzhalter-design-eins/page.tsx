// Anweisung für ChatGPT: Importiere weitere Icons, hier, die du zur sinnvollen Darstellung in den unteren Sections benötigst

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


// Anweisung für ChatGPT: Ersetze den Farbverlauf durch verfügbare Informationen, behalte sonst RacingGreen bei

const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";

// Anweisung für ChatGPT: Passe die Platzhalter für Autorenname, Rolle, Image,LinkedIn, Reviewer, Company mit den zur Verfügung gestellten Informationen an

const author = {
  name: "Autorenname",
  role: "Jobtitel und Erfahrungslevel des Autoren",
  image: "/autor.webp", // Ersetze durch echtes Bild
  linkedin: "https://www.linkedin.com/in/platzhalter/",
};

const reviewer = {
  name: "Name des Reviewers",
  role: "Jobtitel des Reviewers",
  linkedin: "https://www.linkedin.com/in/platzhalter/",
};

const company = {
  name: "Offizieller Firmenname",
  url: "https://www.deinefirma.de",
  logo: "/logo.png", // Ersetze durch echte Logo-URL
};

// Sections used for ToC and reading time (strings only). Keep ids stable!

// Anweisung für ChatGPT: Ersetze Titel und Content der Sections, behalte die Länge in etwa bei, ändere außerdem die Section IDs für einen sinnvollen Namen und passe den Code im weiteren Verlauf unten an. Die ersten beiden Sections sollen weiterhin die Grundlagen, Status Quo, und Trends aufgreifen. Abschnitt 3 bis 5 bitte sinnvoll ausfüllen. Greife typische Fehler bei Abschnitt 6 auf

const sections = [
  {
    id: "grundlagen",
    title: "Fragestellung zur Theorie hinter der Kernfrage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
  {
    id: "status-quo",
    title: "Status Quo & Trends zum Kernthema",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
  {
    id: "abschnitt-3",
    title: "Platzhalter für Abschnitttitel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
  {
    id: "abschnitt-4",
    title: "Platzhalter für Abschnitttitel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
  {
    id: "abschnitt-5",
    title: "Platzhalter für Abschnitttitel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
  {
    id: "fehler",
    title: "Platzhalter: Typische Fehler & Risiken – und wie du sie vermeidest",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, risus in tincidunt imperdiet, felis magna gravida ipsum, a laoreet eros nisi a nibh. Proin aliquet dictum lorem, non faucibus mauris luctus in. Vivamus suscipit viverra elit, id volutpat justo malesuada at. Suspendisse potenti. Etiam congue, est in porttitor egestas, libero risus iaculis orci, eu fermentum eros augue ac nunc. Phasellus ac cursus dui. Mauris vitae leo turpis. Nullam volutpat enim et mauris tempus, nec dictum nisl porta. Ut auctor erat sed orci scelerisque, nec dignissim justo viverra. Sed eget felis ac magna posuere pretium non id ipsum. Donec cursus faucibus varius.",
  },
];

const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // 180 wpm conservative

// ---------- UI Components ----------

const TLDRItem = ({
  children,
}: {
  children: ReactNode;
}) => (
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
); // stable anc

// Simple static SVG chart (no client JS)

// Anweisung für ChatGPT: Passe die Faktoren und zu vergleichenden Aspekte hier an, passe außerdem die Anzahl der zu vergleichenden Faktoren sinnvoll an, passe ebenfalls die Werte inhaltsgemäß quellenbasiert an

const ComparisonChart = () => {
  const items = [
    { k: "Faktor 1", vergleich1: 9, vergleich2: 5 },
    { k: "Faktor 2", vergleich1: 9, vergleich2: 6 },
    { k: "Faktor 3", vergleich1: 6, vergleich2: 8 },
    { k: "Faktor 4", vergleich1: 7, vergleich2: 9 },
    { k: "Faktor 5", vergleich1: 7, vergleich2: 8 },
    { k: "Faktor 6", vergleich1: 9, vergleich2: 6 },
  ];
  const max = 10;
  const barH = 16;
  const gap = 6; // distance between grey and green bars (stacked vertically)
  const rowH = barH * 2 + gap + 16; // row height incl. label area
  const padTop = 14;
  const width = 720;
  const left = 200;
  const right = width - 20;
  const scale = (v: number) => (right - left) * (v / max);

  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <svg
        viewBox={`0 0 ${width} ${items.length * rowH + padTop}`}
        role="img"
        aria-label="Platzhalter für sinnvolle Beschreibung des Diagramms"
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
              {/* On-prem (grey, top bar) */}
              <rect x={left} y={y} width={scale(row.vergleich1)} height={barH} fill="#e5e7eb" rx="6" />
              <text x={left + scale(row.vergleich1) + 6} y={y + barH - 4} fontSize="11" className="fill-zinc-500">
                {row.vergleich1}
              </text>
              {/* Cloud (green, bottom bar) */}
              <rect x={left} y={y + barH + gap} width={scale(row.vergleich2)} height={barH} fill="url(#g1)" rx="6" />
              <text x={left + scale(row.vergleich2) + 6} y={y + barH + gap + barH - 4} fontSize="11" className="fill-emerald-700">
                {row.vergleich2}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-sm text-zinc-600">Platzhalter für die Bildunterschrift des Diagramms</figcaption>
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

// Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an

export default function Article() {
  const updated = formatDateDE();
  const title = "PLATZHALTER FÜR TITEL, MAX 90 ZEICHEN, RICH IN KEYWORDS";
  const description = "PLATZHALTER FÜR BESCHREIBUNG, MAX 170 ZEICHEN; RICH IN KEYWORDS";
  const canonical = `${company.url}/blog/platzhalter-design-eins`;

  return (
    <>
      <Head>
        <title>{`${title} | ${company.name}`}</title>
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
          <p className="mt-3 text-lg text-zinc-700">PLATZHALTER FÜR SUB HEADLINE, was zu erwarten ist im Blogartikel.</p>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/hero-placeholder.webp" />
                <img loading="lazy" src="/hero-placeholder.webp" alt="Beschreibung des Bildes aus der Hero Section" className="absolute inset-0 h-full w-full object-cover" />
              </picture>
            </div>
            <figcaption className="sr-only">Platzhalter für Bildunterschrift des Bildes</figcaption>
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

        {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, ein bis zwei Sätze pro TL;DR Stichpunkt */}

        {/* TL;DR */}
        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="space-y-3">
            <TLDRItem>Platzhalter für TL;DR Punkt 1, <strong>wichtiges</strong> betonen.</TLDRItem>
            <TLDRItem>Platzhalter für TL;DR Punkt 2, <strong>wichtiges</strong> betonen.</TLDRItem>
            <TLDRItem>Platzhalter für TL;DR Punkt 3, <strong>wichtiges</strong> betonen.</TLDRItem>
            <TLDRItem>Platzhalter für TL;DR Punkt 4, <strong>wichtiges</strong> betonen.</TLDRItem>
            <TLDRItem>Platzhalter für TL;DR Punkt 5, <strong>wichtiges</strong> betonen.</TLDRItem>
          </ul>
        </aside>

        {/* ToC */}
        <nav aria-label="Inhaltsverzeichnis" className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">Abschnitt 1</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#status-quo">Abschnitt 2</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#abschnitt-3">Abschnitt 3</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#abschnitt-4">Abschnitt 4</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#abschnitt-5">Abschnitt 5</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#fehler">Abschnitt 6</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#faq">Abschnitt 7</a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">Abschnitt 8</a>
            </li>
          </ol>
        </nav>

        {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, wähle ein neues passendes Icon für die beiden zu vergleichenden Aspekte. ein bis zwei Sätze pro Stichpunkt */}

        {/* Content */}
        <section>
          {/* 1 */}
          <Anchor id="grundlagen" />
          <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
          <p className="mb-6 leading-relaxed">{sections[0].content}</p>

          {/* Erklärung von zwei zentralen fachlichen Gegebenheiten */}
     <div className="grid md:grid-cols-2 gap-6">
  <div className="rounded-2xl border border-zinc-200 p-5">
    <h3 className="font-semibold mb-2">
      Erneuter Vergleich zwei fachlich identifizierten Möglichkeiten
    </h3>
    <ul className="space-y-2 text-sm">
      <CheckLi>Stichpunkt 1</CheckLi>
      <CheckLi>Stichpunkt 2</CheckLi>
      <CheckLi>Stichpunkt 3</CheckLi>
    </ul>
  </div>

  <div className="rounded-2xl border border-zinc-200 p-5">
    <h3 className="font-semibold mb-2">
      Erneuter Vergleich zwei fachlich identifizierten Möglichkeiten
    </h3>
    <ul className="space-y-2 text-sm">
      <CheckLi>Stichpunkt 1</CheckLi>
      <CheckLi>Stichpunkt 2</CheckLi>
      <CheckLi>Stichpunkt 3</CheckLi>
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

          {/* Anweisung für ChatGPT: Wähle hier basierend auf deiner Recherche ein Zitat oder eine Aussage eines branchenbekannten Experten, kennzeichne, ob direktes oder indirektes Zitat und gebe eine Quelle an */}

          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">„PLATZHALTER FÜR ZITAT VON EINEM EXPERTEN“</blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">— PLATZHALTER FÜR NAME ODER QUELLE</figcaption>
          </figure>

          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, wähle ein neues passendes Icon für die beiden zu vergleichenden Aspekte. ein bis zwei Sätze pro Stichpunkt */}

          {/* 3 */}
          <Anchor id="abschnitt-3" />
          <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
          <p className="leading-relaxed mb-4">{sections[2].content}</p>

          <div className="rounded-2xl border border-zinc-200 p-5">
  <h3 className="font-semibold mb-2">
    Erneuter Vergleich zwei fachlich identifizierten Möglichkeiten
  </h3>
  <ul className="space-y-2 text-sm">
    <CheckLi>Stichpunkt 1</CheckLi>
    <CheckLi>Stichpunkt 2</CheckLi>
    <CheckLi>Stichpunkt 3</CheckLi>
  </ul>
</div>

          <div className="rounded-2xl border border-zinc-200 p-5">
  <h3 className="font-semibold mb-2">
    Erneuter Vergleich zwei fachlich identifizierten Möglichkeiten
  </h3>
  <ul className="space-y-2 text-sm">
    <CheckLi>Stichpunkt 1</CheckLi>
    <CheckLi>Stichpunkt 2</CheckLi>
    <CheckLi>Stichpunkt 3</CheckLi>
  </ul>
</div>


          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, wähle basierend auf deiner Recherche und vorher angezeigten Textinhalten sinnvoll zwei zu vergleichende Möglichkeiten, passe die Anzahl der zu vergleichenden Aspekte zwischen 3 und 10 inhaltsbasiert sinnvoll an */}

          {/* Vergleichstabelle */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
              <caption id="vergleich-caption" className="sr-only">PLATZHALTER: Beschreibung der Tabelle</caption>
              <thead>
                <tr className="text-left">
                  <th className="px-3 py-2">Aspekt</th>
                  <th className="px-3 py-2">Zu vergleichende Möglichkeit 1</th>
                  <th className="px-3 py-2">Zu vergleichende Möglichkeit 2</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { a: "Platzhalter für Aspekt 1", c: "Performance 1", o: "Performance 2" },
                  { a: "Platzhalter für Aspekt 2", c: "Performance 1", o: "Performance 2" },
                  { a: "Platzhalter für Aspekt 3", c: "Performance 1", o: "Performance 2" },
                  { a: "Platzhalter für Aspekt 4", c: "Performance 1", o: "Performance 2" },
                  { a: "Platzhalter für Aspekt 5", c: "Performance 1", o: "Performance 2" },
                  { a: "Platzhalter für Aspekt 6", c: "Performance 1", o: "Performance 2" },
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

          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, pro Stichpunkt ein Satz */}

          {/* 4 */}
          <Anchor id="abschnitt-4" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
             <h3 className="font-semibold mb-2">Zusammenfassung Thema 1</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Pill>Ein Wort</Pill> Stichpunkt 1
                </li>
                <li>
                  <Pill>Ein Wort</Pill> Stichpunkt 2
                </li>
                <li>
                  <Pill>Ein Wort</Pill> Stichpunkt 3
                </li>
                <li>
                  <Pill>Ein Wort</Pill> Stichpunkt 4
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
             <h3 className="font-semibold mb-2">Zusammenfassung Thema 2</h3>
              <ul className="text-sm space-y-2">
                <CheckLi>Stichpunkt 1</CheckLi>
                <CheckLi>Stichpunkt 2</CheckLi>
                <CheckLi>Stichpunkt 3</CheckLi>
                <CheckLi>Stichpunkt 4</CheckLi>
              </ul>
            </div>
          </div>

          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an */}

         {/* Bild 1 */}
<figure className="mt-8">
  <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/bild-1.webp" />
      <img loading="lazy" src="/bild-1.webp" alt="PLATZHALTER für Beschreibung des Bildes" className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  </div>
  <figcaption className="mt-2 text-sm text-zinc-600">PLATZHALTER für Beschreibung des Bildes als Bildunterschrift</figcaption>
</figure>

          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, wähle ein neues passendes Icon für die beiden zu vergleichenden Aspekte. Zwei Sätze pro Stichpunkt */}

          {/* 5 */}
          <Anchor id="abschnitt-5" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
          <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
            <li>Platzhalter für Satz 1</li>
            <li>Platzhalter für Satz 2</li>
            <li>Platzhalter für Satz 3</li>
            <li>Platzhalter für Satz 4</li>
            <li>Platzhalter für Satz 5</li>
            <li>Platzhalter für Satz 6</li>
            <li>Platzhalter für Satz 7</li>
          </ol>

          {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an */}

         {/* Bild 2 */}
<figure className="mt-8">
  <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/bild-2.webp" />
      <img loading="lazy" src="/bild-2.webp" alt="Platzhalter für Beschreibung des Bildes" className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  </div>
  <figcaption className="mt-2 text-sm text-zinc-600">Platzhalter für Bildunterschrift</figcaption>
</figure>

          {/* Anweisung für ChatGPT: Passe Platzhalter der Fehler und guten Praktiken an, wähle passenden Titel (H5) und pro Stichpunkt ein bis zwei Sätze */}

          {/* 6 */}
          <Anchor id="fehler" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-rose-700" aria-hidden="true" /> Vermeidbare Fehler
              </h3>
              <ul className="text-sm space-y-2">
                <li>Vermeidbarer Fehler 1</li>
                <li>Vermeidbarer Fehler 2</li>
                <li>Vermeidbarer Fehler 3</li>
                <li>Vermeidbarer Fehler 4</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${accent}`} aria-hidden="true" /> Gute Praktiken
              </h3>
              <ul className="text-sm space-y-2">
                <li>Gute Praktiken 1</li>
                <li>Gute Praktiken 2</li>
                <li>Gute Praktiken 3</li>
                <li>Gute Praktiken 4</li>
              </ul>
            </div>
          </div>

          {/* Anweisung für ChatGPT: Passe Platzhalter hier basierend auf dem Inhalt an */}

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a className={`hover:underline ${accent}`} href="/platzhalter_weiterfuehrender_artikel_1">Platzhalter für Artikel 1</a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/platzhalter_weiterfuehrender_artikel_2">Platzhalter für Artikel 2</a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/platzhalter_weiterfuehrender_artikel_3">Platzhalter für Artikel 3</a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/platzhalter_weiterfuehrender_artikel_4">Platzhalter für Artikel 4</a>
              </li>
            </ul>
          </aside>
        </section>

        {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an, Antworten sind jeweils zwei bis drei Sätze lang */}

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl">
            {[
              { q: "Platzhalter für Frage 1", a: "Platzhalter für Antwort 1" },
              { q: "Platzhalter für Frage 2", a: "Platzhalter für Antwort 2" },
              { q: "Platzhalter für Frage 3", a: "Platzhalter für Antwort 3" },
              { q: "Platzhalter für Frage 4", a: "Platzhalter für Antwort 4" },
              { q: "Platzhalter für Frage 5", a: "Platzhalter für Antwort 5" },
            ].map((f) => (
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
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Platzhalter für Frage 1",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Platzhalter für Antwort 1",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Platzhalter für Frage 2",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Platzhalter für Antwort 2",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Platzhalter für Frage 3",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Platzhalter für Antwort 3",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Platzhalter für Frage 4",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Platzhalter für Antwort 4",
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
          <p className="leading-relaxed">Platzhalter für Zusammenfassung</p>
        </section>

        {/* Anweisung für ChatGPT: Passe Platzhalter hier inhaltsbasiert an */}

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Platzhalter für offene CTA relevante Frage</h2>
            <p className="text-zinc-700 mb-4">Platzhalter für Value Proposition</p>

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
              <div className="text-sm text-zinc-700">{author.role}. Platzhalter für Fokusthemen des Autors</div>
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

        {/* Anweisung für ChatGPT: Liste hier die Quellen deiner Recherche, passe die Anzahl der Quellen je nach Recherche an dein tatsächliches Ergebnis an */}

        {/* Quellenverzeichnis */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Platzhalter Quelle 1</li>
            <li>Platzhalter Quelle 2</li>
            <li>Platzhalter Quelle 3</li>
            <li>Platzhalter Quelle 4</li>
            <li>Platzhalter Quelle 5</li>
            <li>Platzhalter Quelle 6</li>
            <li>Platzhalter Quelle 7</li>
            <li>Platzhalter Quelle 8</li>
            <li>Platzhalter Quelle 9</li>
            <li>Platzhalter Quelle 10</li>
            <li>Platzhalter Quelle 11</li>
            <li>Platzhalter Quelle 12</li>
          </ul>
        </section>

        {/* Anweisung für ChatGPT: Erkläre hier fünf fachlich relevante Begriffe aus dem Blogartikel, die Erklärung ist jeweils ein Satz */}

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
          <dl className="rounded-2xl border border-zinc-200 divide-y">
            <GlossaryRow term="Fachbegriff 1" def="Erklärung 1." />
            <GlossaryRow term="Fachbegriff 2" def="Erklärung 2" />
            <GlossaryRow term="Fachbegriff 3" def="Erklärung 3" />
            <GlossaryRow term="Fachbegriff 4" def="Erklärung 4" />
            <GlossaryRow term="Fachbegriff 5" def="Erklärung 5" />
          </dl>
        </section>
      </article>
    </>
  );
}
