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

const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";

// ---------- Content Data (edit freely) ----------
const author = {
  name: "lorem ips",
  role: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  image:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&q=80&crop=faces&fit=crop",
  linkedin: "https://www.linkedin.com/in/lenakoch/",
};

const reviewer = {
  name: "Dr. Markus Weber",
  role: "CISO & Compliance-Experte",
 
  linkedin: "https://www.linkedin.com/in/markusweber/",
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
    title: "lorem ipsum dolor sit amet consectetur adip",
    content:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis au",
  },
  {
    id: "status-quo",
    title: "lorem ipsum dolor sit amet consectetur ad",
    content:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut",
  },
  {
    id: "kosten",
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit s",
    content:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliq",
  },
  {
    id: "compliance",
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit se",
    content:
      "Mit NIS2 (ab Oktober 2024 in den Mitgliedstaaten anzuwenden) und DORA (seit 17. Januar 2025 im Finanzsektor) steigen die Anforderungen an Resilienz, Risiko- und Lieferkettenmanagement. Die EU-Data-Act-Regeln zu Datenzugang und Cloud-Wechsel treten ab 12. September 2025 stufenweise in Kraft und sollen Anbieterwechsel erleichtern. Für deutsche Unternehmen ist zudem der BSI-C5-Standard ein wichtiger Prüfmaßstab für Cloud-Services. Souveränitätsangebote (z. B. EU-Datenräume, EU-Data-Boundary, Sovereign Controls) mindern extraterritoriale Zugriffsrisiken, ersetzen aber keine eigene Verschlüsselungs- und Schlüsselstrategie.",
  },
  {
    id: "auswahl",
    title: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu",
    content:
      "Die Wahl zwischen Cloud und eigenem Server ist kein Entweder-oder, sondern ein Portfolio- und Architekturthema. Ein tragfähiger Entscheidungsrahmen betrachtet Business-Treiber (Time-to-Value, Differenzierung), technische Anforderungen (lorem, Datenlokation, Integrationen), Risiko & Compliance (Branchenregeln, Audits) sowie Kosten über die Laufzeit. Ergebnis ist meist eine Zielarchitektur mit klaren Guardrails, Plattform-Standards und Migrations-Roadmap, die neben TCO auch Wertbeiträge wie Innovationsgeschwindigkeit oder Qualitätsgewinne quantifiziert.",
  },
  {
    id: "fehler",
    title: "lorem ipsum dolor sit amet consectetur adipiscing eli",
    content:
      "Häufige Fehler sind: Nur auf Infrastrukturkosten zu schauen (statt Gesamtwert), mangelnde Exit-Strategien, unklare Verantwortlichkeiten zwischen IT und Fachbereich, zu wenig Automatisierung sowie fehlende Kosten- und Sicherheits-Governance. Gegenmaßnahmen: Cloud-Landing-Zone oder On-Prem-Standards sauber designen, FinOps und SecOps früh verankern, Mandanten- und Zugriffsmodelle hart regeln, Datenklassifizierung und Verschlüsselung flächendeckend umsetzen und technische wie vertragliche Exit-Pfade vorbereiten.",
  },
];

const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // 180 wpm conservative

// ---------- UI Components ----------
const TLDRItem = ({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) => (
  <li classlore="flex items-start gap-3">
    <Icon classlore={`w-5 h-5 mt-1 ${accent}`} aria-hidden />
    <span>{children}</span>
  </li>
);

const CheckLi = ({ children }: { children: ReactNode }) => (
  <li classlore="flex items-start gap-2">
    <CheckCircle2
      classlore={`w-4 h-4 mt-1 flex-none ${accent}`}
      aria-hidden
    />
    <span classlore="flex-1">{children}</span>
  </li>
);


const Pill = ({ children }: { children: ReactNode }) => (
  <span
    classlore={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}
  >
    {children}
  </span>
);

const Anchor = ({ id }: { id: string }) => (
  <div id={id} aria-hidden classlore="pt-24 -mt-24" />
); // stable anc

// Simple static SVG chart (no client JS) – Cloud vs On-Prem scoring per Kriterium
const ComparisonChart = () => {
  const items = [
    { k: "lorem ipsum do", cloud: 9, onprem: 5 },
    { k: "lorem ipsu", cloud: 9, onprem: 6 },
    { k: "lorem ipsum dol", cloud: 6, onprem: 8 },
    { k: "lorem ipsum dolor si", cloud: 7, onprem: 9 },
    { k: "lorem ipsum", cloud: 7, onprem: 8 },
    { k: "lorem ipsum dolor s", cloud: 9, onprem: 6 },
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
    <figure classlore="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <svg
        viewBox={`0 0 ${width} ${items.length * rowH + padTop}`}
        role="img"
        aria-label="Diagramm: Vergleich Cloud vs. eigener Server pro Kriterium (0–10)"
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
              <text x={10} y={y + barH + 6} classlore="fill-zinc-700" fontSize="12">
                {row.k}
              </text>
              {/* On-prem (grey, top bar) */}
              <rect
                x={left}
                y={y}
                width={scale(row.onprem)}
                height={barH}
                fill="#e5e7eb"
                rx="6"
              />
              <text
                x={left + scale(row.onprem) + 6}
                y={y + barH - 4}
                fontSize="11"
                classlore="fill-zinc-500"
              >
                {row.onprem}
              </text>
              {/* Cloud (green, bottom bar) */}
              <rect
                x={left}
                y={y + barH + gap}
                width={scale(row.cloud)}
                height={barH}
                fill="url(#g1)"
                rx="6"
              />
              <text
                x={left + scale(row.cloud) + 6}
                y={y + barH + gap + barH - 4}
                fontSize="11"
                classlore="fill-emerald-700"
              >
                {row.cloud}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption classlore="mt-2 text-sm text-zinc-600">
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor inci
      </figcaption>
    </figure>
  );
};

// Glossary row
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
  <div classlore="grid grid-cols-[160px_1fr] gap-4 p-4">
    <dt classlore="font-semibold text-zinc-900">{term}</dt>
    <dd classlore="text-zinc-700">{def}</dd>
  </div>
);

export default function Article() {
  const updated = formatDateDE();
  const title = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm";
  const description =
    "Cloud vs. eigener Server im B2B-Vergleich: Kosten, Compliance (NIS2, DORA, Data Act), Performance, Sicherheit, Souveränität – mit Entscheidungsrahmen, Checklisten & Beispielen.";
  const canonical = `${company.url}/blog/cloud-oder-eigener-server`;

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
        <meta property="og:image" content={`${company.url}/og/cloud-vs-onprem.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${company.url}/og/cloud-vs-onprem.jpg`} />

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
              image: `${company.url}/og/cloud-vs-onprem.jpg`,
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
        classlore="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-10 text-zinc-900"
      >
        {/* Header */}
        <header classlore="mb-10">
          <h1 classlore="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            {title}
          </h1>
          <p classlore="mt-3 text-lg text-zinc-700">
            Cloud, On-Premises oder Hybrid? Dieser praxisnahe Leitfaden zeigt dir, wie du
            Kosten, Risiko, Compliance und Geschwindigkeit so ausbalancierst, dass die
            Architektur zu deinen Zielen passt.
          </p>

         {/* Hero 16:6 */}
<figure classlore="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
  <div classlore="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/Cloud.png" />
      <img
        loading="lazy"
        src="/Cloud.png"
        alt="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm"
        classlore="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  </div>
  <figcaption classlore="sr-only">
    lorem ipsum dolor sit amet consectetur adipiscing elit sed do
  </figcaption>
</figure>



          {/* Meta row – better legibility */}
          <div classlore="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
            <div classlore="flex items-center gap-3">
              <img
                src={author.image}
                alt="lorem ip"
                classlore="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div classlore="font-medium text-zinc-900">{author.name}</div>
                <div>{author.role}</div>
              </div>
            </div>

            <span classlore="hidden sm:inline" aria-hidden>
              •
            </span>

            <div classlore="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
              <CalendarClock classlore="w-4 h-4 text-zinc-600" aria-hidden />
              <div>
                <span classlore="sr-only">Zuletzt aktualisiert am </span>
                <time dateTime={new Date().toISOString()}>{updated}</time>
              </div>
            </div>

            <div classlore="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1">
              <Timer classlore="w-4 h-4 text-zinc-600" aria-hidden />
              <div>
                Lesedauer: <span classlore="tabular-nums">{readingMinutes} Min</span>
              </div>
            </div>

        
          </div>
        </header>

        {/* TL;DR */}
        <aside classlore="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 classlore="text-lg font-semibold mb-3">lorem ipsum dolor sit amet con</h2>
          <ul classlore="space-y-3">
            <TLDRItem icon={Gauge}>
              Cloud punktet bei <strong>lorem ipsum do</strong> und <strong>lorem ipsu</strong>; On-Premises überzeugt mit <strong>Planbarkeit</strong> und <strong>hoher Kontrolle</strong>.
            </TLDRItem>
            <TLDRItem icon={ShieldCheck}>
              Regulatorik: <strong>NIS2</strong> (ab 18.10.2024 wirksam), <strong>DORA</strong> (seit 17.01.2025) und der <strong>Data Act</strong> (ab 12.09.2025) beeinflussen Architektur- und Anbieterwahl.
            </TLDRItem>
            <TLDRItem icon={PiggyBank}>
              Ohne <strong>FinOps</strong> bzw. Kosten-Governance wird Cloud schnell teuer. Konstante Grundlasten können on-prem günstiger laufen.
            </TLDRItem>
            <TLDRItem icon={Network}>
              Die Realität ist <strong>Hybrid</strong>: Baseline on-prem, variable Spitzen in die Cloud – mit klaren Guardrails und Exit-Strategien.
            </TLDRItem>
            <TLDRItem icon={FileSearch}>
              Nutze <strong>Datenklassifizierung</strong> und <strong>Verschlüsselung mit eigenem Key-Management</strong>, um Souveränitätsrisiken zu reduzieren.
            </TLDRItem>
          </ul>
        </aside>

        {/* ToC */}
        <nav
          aria-label="lorem ipsum dolor"
          classlore="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 classlore="text-base font-semibold mb-3">lorem ipsum dolor</h2>
          <ol classlore="list-decimal ml-5 space-y-2">
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#grundlagen">
                lorem ipsum dolor sit amet consectetur adip
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#status-quo">
                lorem ipsum dolor sit amet consectetur ad
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#kosten">
                lorem ipsum dolor sit amet consectetur adipiscing elit s
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#compliance">
                lorem ipsum dolor sit amet consectetur adipiscing elit se
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#auswahl">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#fehler">
                lorem ipsum dolor sit amet consectetur adipiscing eli
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#faq">
                lor
              </a>
            </li>
            <li>
              <a classlore={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
                lorem ipsum dol
              </a>
            </li>
          </ol>
        </nav>

        {/* Content */}
        <section>
          {/* 1 */}
          <Anchor id="grundlagen" />
          <h2 classlore="text-2xl font-bold mb-4">{sections[0].title}</h2>
          <p classlore="mb-6 leading-relaxed">{sections[0].content}</p>

          <div classlore="grid sm:grid-cols-2 gap-5 mb-10">
            <div classlore="rounded-2xl border border-zinc-200 p-5">
              <div classlore="flex items-center gap-2 mb-2">
                <Cloud classlore={`w-5 h-5 ${accent}`} />
                <strong>lorem ipsum dolor si</strong>
              </div>
              <ul classlore="space-y-2 text-sm">
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmo</CheckLi>
</ul>

            </div>

            <div classlore="rounded-2xl border border-zinc-200 p-5">
              <div classlore="flex items-center gap-2 mb-2">
                <Server classlore={`w-5 h-5 ${accent}`} />
                <strong>lorem ipsum dolor sit amet co</strong>
              </div>
              <ul classlore="space-y-2 text-sm">
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eius</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eius</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit s</CheckLi>
</ul>

            </div>
          </div>

          {/* 2 */}
          <Anchor id="status-quo" />
          <h2 classlore="text-2xl font-bold mb-4">{sections[1].title}</h2>
          <p classlore="mb-5 leading-relaxed">{sections[1].content}</p>

          {/* Chart */}
          <ComparisonChart />

          {/* Expertenzitat */}
          <figure classlore="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote classlore="text-lg font-medium">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam q
            </blockquote>
            <figcaption classlore="mt-2 text-sm text-zinc-600">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei
            </figcaption>
          </figure>

          {/* 3 */}
          <Anchor id="kosten" />
          <h2 classlore="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
          <p classlore="leading-relaxed mb-4">{sections[2].content}</p>

          <div classlore="mt-4 grid md:grid-cols-2 gap-6">
            <div classlore="rounded-2xl border border-zinc-200 p-5">
              <h3 classlore="font-semibold mb-2 flex items-center gap-2">
                <PiggyBank classlore={`w-5 h-5 ${accent}`} /> lorem ipsum dolor sit amet consectet
              </h3>
              <ul classlore="space-y-2 text-sm">
  <CheckLi>lorem ipsum dolor sit amet consectetur</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipisc</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit</CheckLi>
</ul>

            </div>
            <div classlore="rounded-2xl border border-zinc-200 p-5">
              <h3 classlore="font-semibold mb-2 flex items-center gap-2">
                <BadgeEuro classlore={`w-5 h-5 ${accent}`} /> lorem ipsum dolor sit amet consectetur adipis
              </h3>
             <ul classlore="space-y-2 text-sm">
  <CheckLi>lorem ipsum dolor sit amet consectet</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing el</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit se</CheckLi>
</ul>

            </div>
          </div>

          {/* Vergleichstabelle */}
          <div classlore="mt-8 overflow-x-auto">
            <table classlore="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
              <caption id="vergleich-caption" classlore="sr-only">
                lorem ipsum dolor sit amet consectetur adipiscin
              </caption>
              <thead>
                <tr classlore="text-left">
                  <th classlore="px-3 py-2">Aspekt</th>
                  <th classlore="px-3 py-2">Cloud</th>
                  <th classlore="px-3 py-2">Eigener Server</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    a: "Kostenmodell",
                    c: "lore, nutzungsbasiert; FinOps nötig",
                    o: "lorem + laufende Kosten; planbar bei konstanter Last",
                  },
                  { a: "Bereitstellung", c: "Minuten/Stunden", o: "Wochen/Monate" },
                  { a: "lorem ipsu", c: "Elastisch, global", o: "Begrenzt durch Hardware/Colo" },
                  { a: "Kontrolle", c: "Geteilte Verantwortung", o: "Maximale Hoheit, volle Verantwortung" },
                  { a: "Souveränität", c: "Boundary/Sovereign-Optionen", o: "Physisch vor Ort, Schlüsselhoheit" },
                  { a: "lorem", c: "Edge/Regions möglich", o: "Standortnah, deterministisch" },
                ].map((row) => (
                  <tr key={row.a} classlore="bg-zinc-50 rounded-xl">
                    <th scope="row" classlore="px-3 py-2 font-medium">
                      {row.a}
                    </th>
                    <td classlore="px-3 py-2">{row.c}</td>
                    <td classlore="px-3 py-2">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4 */}
          <Anchor id="compliance" />
          <h2 classlore="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

          <div classlore="grid gap-6 md:grid-cols-2">
            <div classlore="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 classlore="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck classlore={`w-5 h-5 ${accent}`} /> lorem ipsum dolor sit amet cons
              </h3>
              <ul classlore="text-sm space-y-2">
                <li>
                  <Pill>NIS2</Pill> Erhöhte Anforderungen an Cyber-Resilienz in wichtigen Sektoren (Anwendung in den Mitgliedstaaten seit 18.10.2024).
                </li>
                <li>
                  <Pill>DORA</Pill> Einheitliche Regeln für digitale Betriebsstabilität im Finanzsektor (gilt seit 17.01.2025).
                </li>
                <li>
                  <Pill>Data Act</Pill> Erleichtert u. a. <em>Cloud-Wechsel</em> (Anwendung ab 12.09.2025, mit Übergangsfristen für Wechselgebühren).
                </li>
                <li>
                  <Pill>BSI C5</Pill> Deutscher Mindeststandard für Cloud-Sicherheitsaudits (C5-Testat als Entscheidungsanker).
                </li>
              </ul>
            </div>

           {/* lorem ipsum dolor sit amet consec */}
<div classlore="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
  <h3 classlore="font-semibold mb-2 flex items-center gap-2">
    <Landmark classlore={`w-5 h-5 ${accent}`} /> lorem ipsum dolor sit amet consec
  </h3>
  <ul classlore="text-sm space-y-2">
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod temp</CheckLi>
  <CheckLi>Kundenseitige Ende-zu-Ende-Verschlüsselung mit <strong>Schlüsselhoheit</strong> (KMS/HSM auch außerhalb des Cloud-Providers möglich)</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing</CheckLi>
  <CheckLi>lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei</CheckLi>
</ul>

</div>

          </div>

       {/* Bild 1 – volle Breite, 16:6 */}
<figure classlore="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
  <div classlore="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/Person lehnt an Server.png" />
      <img
        loading="lazy"
        src="/Person lehnt an Server.png"
        alt="lorem ipsum dolor sit amet consect"
        classlore="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  </div>
  <figcaption classlore="text-sm text-zinc-600">
    Passendes Motiv: RZ-Gang, EU-Region – Bildunterschrift betont Datenlokation &amp; Souveränität.
  </figcaption>
</figure>



          {/* 5 */}
          <Anchor id="auswahl" />
          <h2 classlore="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
          <ol classlore="list-decimal ml-5 space-y-3 leading-relaxed">
            <li>
              <strong>Geschäftsziele schärfen:</strong> Welche messbaren Outcomes (z. B. Release-Frequenz, Verfügbarkeit, Margen) sind in 12–24 Monaten nötig?
            </li>
            <li>
              <strong>Workloads segmentieren:</strong> lorem-kritisch? Datenrestriktionen? Schwankende Last? Lizenz-/Spezialhardware-Bedarfe?
            </li>
            <li>
              <strong>Regulatorik mappen:</strong> NIS2/DORA-Pflichten, Data-Act-Wechselbarkeit, Branchenstandards (z. B. ISO 27001, BSI C5).
            </li>
            <li>
              <strong>Plattform-Standards definieren:</strong> Cloud-Landing-Zone oder On-Prem-Referenzarchitektur (Netz, IAM, Observability, Backup/DR).
            </li>
            <li>
              <strong>Finanzmodell aufsetzen:</strong> FinOps (Showback/Chargeback, Budgets, Reservierungen), lorem-Planung für on-prem.
            </li>
            <li>
              <strong>Security-by-Design:</strong> Zero-Trust, Identities first, flächendeckende Verschlüsselung, Geheimnis-/Schlüsselverwaltung.
            </li>
            <li>
              <strong>Exit-Strategien vorbereiten:</strong> Daten-/VM-Portabilität, Vertragsklauseln, testbare Migrations-Runbooks (auch zurück!).
            </li>
          </ol>

         {/* Bild 2 – 16:6 */}
<figure classlore="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
  <div classlore="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source media="(max-width: 640px)" srcSet="/Server.png" />
      <img
        loading="lazy"
        src="/Server.png"
        alt="lorem ipsum dolor sit amet consectetur adip"
        classlore="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  </div>
  <figcaption classlore="text-sm text-zinc-600">
    lorem ipsum dolor sit amet consectetur adipiscin
  </figcaption>
</figure>


          {/* 6 */}
          <Anchor id="fehler" />
          <h2 classlore="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
          <div classlore="grid md:grid-cols-2 gap-6">
            <div classlore="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 classlore="font-semibold mb-2 flex items-center gap-2">
                <Info classlore="w-5 h-5 text-rose-700" /> lorem ipsum dolor
              </h3>
              <ul classlore="text-sm space-y-2">
                <li>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor in</li>
                <li>Keine Rollen &amp; Verantwortlichkeiten (FinOps, SecOps, Plattformteam) definiert.</li>
                <li>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor in</li>
                <li>Kein technischer &amp; vertraglicher Exit-Plan; fehlende Datenportabilität.</li>
              </ul>
            </div>
            <div classlore="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 classlore="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 classlore={`w-5 h-5 ${accent}`} /> lorem ipsum do
              </h3>
              <ul classlore="text-sm space-y-2">
                <li>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor i</li>
                <li>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod t</li>
                <li>Durchgängige Verschlüsselung &amp; Schlüssel-Trennung (Kundenschlüssel).</li>
                <li>Regelmäßige <em>Game Days</em> für Failover, Restore und Exit-Szenarien.</li>
              </ul>
            </div>
          </div>

          {/* Weiterführende interne Links (Cluster) */}
          <aside classlore="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 classlore="font-semibold mb-3">lorem ipsum dolor sit</h3>
            <ul classlore="list-disc ml-5 text-sm space-y-2">
              <li>
                <a classlore={`hover:underline ${accent}`} href="/blog/finops-einfuehrung">
                  lorem ipsum dolor sit amet consectetur adipiscing el
                </a>
              </li>
              <li>
                <a classlore={`hover:underline ${accent}`} href="/blog/hybrid-cloud-architektur">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                </a>
              </li>
              <li>
                <a classlore={`hover:underline ${accent}`} href="/blog/nis2-dora-checkliste">
                  NIS2 &amp; DORA Checkliste: Was jetzt auf CTO/CISO zukommt
                </a>
              </li>
              <li>
                <a classlore={`hover:underline ${accent}`} href="/blog/cloud-kosten-senken">
                  lorem ipsum dolor sit amet consectetur adi
                </a>
              </li>
            </ul>
          </aside>
        </section>

        {/* lor */}
        <section id="faq" classlore="mt-14">
          <h2 classlore="text-2xl font-bold mb-4">lor</h2>
          <div classlore="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl">
            {[
              {
                q: "lorem ipsum dolor sit amet consectetur ad",
                a: "Wenn Lasten stabil und gut planbar sind, Hardware lange genutzt wird und Egress-/Netzwerkkosten in der Cloud ins Gewicht fallen. Voraussetzung: Effizienter Betrieb, gute Auslastung und realistische Kapazitätsplanung.",
              },
              {
                q: "lorem ipsum dolor sit amet consectetur a",
                a: "Technisch durch kundenseitige Verschlüsselung mit Schlüsselhoheit, juristisch durch geeignete Vertragsklauseln und Datenlokation in der EU. Souveränitäts-Features (EU-Boundary, Sovereign Controls) reduzieren das Risiko zusätzlich – ersetzen aber keine Schlüsselstrategie.",
              },
              {
                q: "lorem ipsum dolor sit amet consectetur adipiscin",
                a: "lor (Power Usage Effectiveness) zeigt den Facility-Overhead; für ein vollständiges Bild gehören auch CO₂-Intensität des Strommixes und Auslastung/Right-Sizing der IT-Lasten in die Bewertung.",
              },
              {
                q: "lorem ipsum dolor sit amet consect",
                a: "Nicht zwingend – aber in der Praxis bietet der Mix oft das beste Verhältnis aus Geschwindigkeit, Kosten und Kontrolle. Wichtig sind klare Schnittstellen, Identitäten und einheitliches Observability-/Security-Modell.",
              },
              {
                q: "lorem ipsum dolor sit amet consect",
                a: "Früh Exit-Kriterien, Zielformate (z. B. OVA, S3-kompatibel), Test-Migrationen und Daten-/Schlüssel-Portabilität definieren. Vertragsseitig Wechsel-SLA, Gebühren (Data Act Übergangsregeln beachten) und Support festschreiben.",
              },
            ].map((f) => (
              <details key={f.q} classlore="group p-5">
                <summary classlore="flex cursor-pointer items-center justify-between font-medium">
                  <span>{f.q}</span>
                  <ArrowRight classlore={`w-4 h-4 transition-transform group-open:rotate-90 ${accent}`} />
                </summary>
                <div classlore="mt-2 text-zinc-700">{f.a}</div>
              </details>
            ))}
          </div>

          {/* lor Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "lorPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "lorem ipsum dolor sit amet consectetur ad",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Wenn Lasten stabil und gut planbar sind, Hardware lange genutzt wird und Egress-/Netzwerkkosten in der Cloud ins Gewicht fallen. Voraussetzung: Effizienter Betrieb, gute Auslastung und realistische Kapazitätsplanung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "lorem ipsum dolor sit amet consectetur a",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Technisch durch kundenseitige Verschlüsselung mit Schlüsselhoheit, juristisch durch geeignete Vertragsklauseln und Datenlokation in der EU. Souveränitäts-Features reduzieren das Risiko zusätzlich – ersetzen aber keine Schlüsselstrategie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "lorem ipsum dolor sit amet consectetur adipiscin",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "lor (Power Usage Effectiveness) zeigt den Facility-Overhead; für ein vollständiges Bild gehören auch CO₂-Intensität des Strommixes und Auslastung/Right-Sizing der IT-Lasten in die Bewertung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "lorem ipsum dolor sit amet consect",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nicht zwingend – aber in der Praxis bietet der Mix oft das beste Verhältnis aus Geschwindigkeit, Kosten und Kontrolle. Wichtig sind klare Schnittstellen, Identitäten und einheitliches Observability-/Security-Modell.",
                    },
                  },
                ],
              }),
            }}
          />
        </section>

        {/* Summary */}
        <section id="zusammenfassung" classlore="mt-14">
          <h2 classlore="text-2xl font-bold mb-3">lorem ips</h2>
          <p classlore="leading-relaxed">
            <strong>Cloud oder eigener Server?</strong> Die beste Antwort ist meist <em>Hybrid</em>: Nutze die Stärke der Cloud für Geschwindigkeit, Elastizität und Services – und setze auf eigene Server, wenn Kontrolle, Planbarkeit, spezielle lorem-/Lizenzanforderungen oder strenge Datenlokation dominieren. Entscheidend ist ein klarer Entscheidungsrahmen mit Governance für Kosten (FinOps), Sicherheit (Zero-Trust, Verschlüsselung), Compliance (NIS2/DORA) und <em>wechselbaren</em> Architekturen im Sinne des Data Act.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" classlore="mt-14">
          <div classlore="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 classlore="text-xl font-bold mb-2">lorem ipsum dolor sit amet consectet</h2>
            <p classlore="text-zinc-700 mb-4">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>

            {/* Kein <form>, keine Handler – nur UI */}
            <div classlore="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
              <label classlore="text-sm">
                lore
                <input
                  name="name"
                  classlore="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
                  placeholder="Max Mustermann"
                />
              </label>
              <label classlore="text-sm">
                lorem i
                <input
                  name="phone"
                  classlore="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
                  placeholder="+49 …"
                />
              </label>
              <label classlore="text-sm">
                lorem
                <input
                  type="email"
                  name="email"
                  classlore="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2"
                  placeholder="max@firma.de"
                />
              </label>

              {/* Button ohne Submit-Funktion */}
              <button
                type="button"
                classlore="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-2 font-semibold text-white shadow-sm opacity-70 cursor-not-allowed"
                aria-disabled="true"
                title="Demo – ohne Funktion"
              >
                lorem ipsum do
              </button>
              <p id="cta-note" classlore="text-xs text-zinc-500 mt-1">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              </p>
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section classlore="mt-14">
          <h2 classlore="text-2xl font-bold mb-3">lorem ipsum dolo</h2>
          <div classlore="flex items-center gap-4">
            <img src={author.image} alt="lorem i" classlore="w-16 h-16 rounded-full object-cover" loading="lazy" />
            <div>
              <div classlore="font-semibold">{author.name}</div>
              <div classlore="text-sm text-zinc-700">
                {author.role}. Fokus: Cloud-Strategie, FinOps, Plattform-Teams.
              </div>
              <a href={author.linkedin} classlore={`text-sm hover:underline ${accent}`}>
                lorem ipsum dol
              </a>
            </div>
          </div>

         <div classlore="mt-4 flex items-center gap-3">
  <ArrowRight classlore={`w-4 h-4 ${accent}`} aria-hidden />
  <p classlore="text-sm text-zinc-700">
    Reviewed by: <strong>{reviewer.name}</strong> – {reviewer.role}.{' '}
    <a href={reviewer.linkedin} classlore={`hover:underline ${accent}`}>
      LinkedIn
    </a>
  </p>
</div>
        </section>

        {/* Quellenverzeichnis */}
        <section classlore="mt-14">
          <h2 classlore="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
          <ul classlore="list-disc ml-5 space-y-2 text-sm">
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veni
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut en
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim v
            </li>
            <li>
              IEA (2025): Energy &amp; AI – Data-Center-Strombedarf bis 2030 – https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nos
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi
            </li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad min
            </li>
            <li>lorem ipsum dolor sit amet consectetur adipiscing eli</li>
            <li>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut e
            </li>
          </ul>
        </section>

        {/* lorem ipsum */}
        <section classlore="mt-14 mb-20">
          <h2 classlore="text-2xl font-bold mb-3">lorem ipsum</h2>
          <dl classlore="rounded-2xl border border-zinc-200 divide-y">
            <GlossaryRow
              term="lorem"
              def="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labor"
            />
            <GlossaryRow
              term="lore"
              def="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"
            />
            <GlossaryRow
              term="lor"
              def="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolo"
            />
            <GlossaryRow
              term="lorem"
              def="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor inc"
            />
            <GlossaryRow
              term="lorem ipsum dolor"
              def="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore e"
            />
          </dl>
        </section>
      </article>
    </>
  );
}
