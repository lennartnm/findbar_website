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
  name: "Lena Koch",
  role: "Cloud & Infrastructure Strategin (12+ Jahre Erfahrung)",
  image:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&q=80&crop=faces&fit=crop",
  linkedin: "https://www.linkedin.com/in/lenakoch/",
};

const reviewer = {
  name: "Dr. Markus Weber",
  role: "CISO & Compliance-Experte",
  image:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&h=240&q=80&fit=crop&crop=faces",
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
    title: "Was steckt hinter Cloud und eigenem Server?",
    content:
      "Cloud-Computing steht für die Bereitstellung von Rechenleistung, Speicher und Software über das Internet – flexibel, nutzungsbasiert und in Minuten bereit. Das Gegenstück sind eigene Server (On-Premises), die im eigenen Rechenraum oder Colocation stehen und in der Regel als Investitionsgut angeschafft und vom internen Team betrieben werden. In der Praxis dominiert heute der Hybridansatz: Teile laufen in der Public Cloud, andere bleiben aus fachlichen, regulatorischen oder Kostengründen on-premises. Wichtige Basisbegriffe: Service-Modelle (IaaS, PaaS, SaaS), Betriebsmodelle (Public, Private, Hybrid), sowie CapEx vs. OpEx – also Investition versus laufender Aufwand.",
  },
  {
    id: "status-quo",
    title: "Status Quo & Trends: Hybrid wird zur Norm",
    content:
      "Unabhängige Branchenberichte zeigen: Mehr als die Hälfte der Workloads liegt inzwischen außerhalb eigener Rechenzentren, dennoch behalten viele Unternehmen kritische Systeme on-premises. Gleichzeitig steigt der Druck durch KI-Workloads und Regulatorik. Energie- und Nachhaltigkeitsthemen rücken in den Vordergrund; PUE-Werte moderner Rechenzentren verbessern sich nur langsam, während die Leistungsdichte pro Rack steigt. Für Entscheider heißt das: Architekturentscheidungen müssen Kosten, Geschwindigkeit, Compliance und Nachhaltigkeit ganzheitlich balancieren.",
  },
  {
    id: "kosten",
    title: "Kosten & Wirtschaftlichkeit: TCO, FinOps und Planbarkeit",
    content:
      "Die Cloud verschiebt Ausgaben von CapEx zu OpEx und ermöglicht feingranulare Skalierung – ein Vorteil, wenn Nachfrage schwankt oder Time-to-Market zählt. Gleichzeitig sind Kostentransparenz und -steuerung zentrale Stolpersteine: Ohne saubere Governance und FinOps entstehen leicht Mehrausgaben (z. B. durch überdimensionierte Instanzen, vergessene Volumes, ungenutzte Reservierungen). On-premises kann bei konstanten, gut planbaren Lasten günstiger sein, verlangt aber Vorinvestitionen, Lifecycle-Management und Fachpersonal. Der wirtschaftliche Sweet Spot ist oft ein Hybridmix: Baseline-Last on-premises, variable Spitzen in die Cloud.",
  },
  {
    id: "compliance",
    title: "Compliance, Sicherheit & Souveränität: EU-Regeln im Blick",
    content:
      "Mit NIS2 (ab Oktober 2024 in den Mitgliedstaaten anzuwenden) und DORA (seit 17. Januar 2025 im Finanzsektor) steigen die Anforderungen an Resilienz, Risiko- und Lieferkettenmanagement. Die EU-Data-Act-Regeln zu Datenzugang und Cloud-Wechsel treten ab 12. September 2025 stufenweise in Kraft und sollen Anbieterwechsel erleichtern. Für deutsche Unternehmen ist zudem der BSI-C5-Standard ein wichtiger Prüfmaßstab für Cloud-Services. Souveränitätsangebote (z. B. EU-Datenräume, EU-Data-Boundary, Sovereign Controls) mindern extraterritoriale Zugriffsrisiken, ersetzen aber keine eigene Verschlüsselungs- und Schlüsselstrategie.",
  },
  {
    id: "auswahl",
    title: "Entscheidungsrahmen: In 7 Schritten zur passenden Zielarchitektur",
    content:
      "Die Wahl zwischen Cloud und eigenem Server ist kein Entweder-oder, sondern ein Portfolio- und Architekturthema. Ein tragfähiger Entscheidungsrahmen betrachtet Business-Treiber (Time-to-Value, Differenzierung), technische Anforderungen (Latenz, Datenlokation, Integrationen), Risiko & Compliance (Branchenregeln, Audits) sowie Kosten über die Laufzeit. Ergebnis ist meist eine Zielarchitektur mit klaren Guardrails, Plattform-Standards und Migrations-Roadmap, die neben TCO auch Wertbeiträge wie Innovationsgeschwindigkeit oder Qualitätsgewinne quantifiziert.",
  },
  {
    id: "fehler",
    title: "Typische Fehler & Risiken – und wie du sie vermeidest",
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
  <li className="flex items-start gap-3">
    <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden />
    <span>{children}</span>
  </li>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span
    className={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}
  >
    {children}
  </span>
);

const Anchor = ({ id }: { id: string }) => (
  <div id={id} aria-hidden className="pt-24 -mt-24" />
); // stable anc

// Simple static SVG chart (no client JS) – Cloud vs On-Prem scoring per Kriterium
const ComparisonChart = () => {
  const items = [
    { k: "Time-to-Market", cloud: 9, onprem: 5 },
    { k: "Skalierung", cloud: 9, onprem: 6 },
    { k: "Planbare Kosten", cloud: 6, onprem: 8 },
    { k: "Compliance/Kontrolle", cloud: 7, onprem: 9 },
    { k: "Latenz/Edge", cloud: 7, onprem: 8 },
    { k: "Innovation/Services", cloud: 9, onprem: 6 },
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
              <text x={10} y={y + barH + 6} className="fill-zinc-700" fontSize="12">
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
                className="fill-zinc-500"
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
                className="fill-emerald-700"
              >
                {row.cloud}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-sm text-zinc-600">
        Vergleich (0–10) pro Kriterium. Oben: Grau = Eigener Server, unten: Grün = Cloud.
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
  const title = "Cloud oder eigener Server – was passt besser zu deinem Unternehmen?";
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
        className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-10 text-zinc-900"
      >
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Cloud, On-Premises oder Hybrid? Dieser praxisnahe Leitfaden zeigt dir, wie du
            Kosten, Risiko, Compliance und Geschwindigkeit so ausbalancierst, dass die
            Architektur zu deinen Zielen passt.
          </p>

          {/* Hero with Unsplash (16:9 desktop, 4:5 mobile) */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <picture>
              {/* Mobile first: 4:5 */}
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=1125&fit=crop&q=80&auto=format"
              />
              {/* Desktop: 16:9 */}
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&fit=crop&q=80&auto=format"
                alt="Rechenzentrumsracks und moderne Cloud-Symbolik – Hybrid illustriert"
                className="w-full h-auto object-cover"
              />
            </picture>
            <figcaption className="sr-only">
              Illustration eines Hybrid-Setups aus Cloud und eigenen Servern
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

            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
              <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden />
              <div className="flex items-center gap-2">
                <span className="text-emerald-900">Reviewed by:</span>
                <a
                  href={reviewer.linkedin}
                  className={`font-medium hover:underline ${accent}`}
                >
                  {reviewer.name}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* TL;DR */}
        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="space-y-3">
            <TLDRItem icon={Gauge}>
              Cloud punktet bei <strong>Time-to-Market</strong> und <strong>Skalierung</strong>; On-Premises überzeugt mit <strong>Planbarkeit</strong> und <strong>hoher Kontrolle</strong>.
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
          aria-label="Inhaltsverzeichnis"
          className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
                Was steckt hinter Cloud und eigenem Server?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#status-quo">
                Status Quo & Trends: Hybrid wird zur Norm
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#kosten">
                Kosten & Wirtschaftlichkeit: TCO, FinOps und Planbarkeit
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#compliance">
                Compliance, Sicherheit & Souveränität: EU-Regeln im Blick
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#auswahl">
                Entscheidungsrahmen: In 7 Schritten zur passenden Zielarchitektur
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#fehler">
                Typische Fehler & Risiken – und wie du sie vermeidest
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
                <Cloud className={`w-5 h-5 ${accent}`} />
                <strong>Cloud – Kurz erklärt</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Bereitstellung in Minuten, elastische Skalierung, globale Reichweite.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Bezahlung nach Nutzung (OpEx), viele Managed Services.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Souveränitäts-Optionen (z. B. EU-Data-Boundary, Sovereign Controls).
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Server className={`w-5 h-5 ${accent}`} />
                <strong>Eigener Server – Kurz erklärt</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Maximale physische Kontrolle, feste Latenzen, lokale Datenhaltung.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Hoher CapEx, Lifecycle-Management, Hardware-/Energieverantwortung.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Ideal für konstante Baseline-Lasten und Spezialhardware.
                </li>
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
              „Hybrid ist kein Kompromiss, sondern die passende Antwort auf unterschiedliche Risiko-, Leistungs- und Regulierungsprofile im selben Unternehmen.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Redaktionelle Einschätzung auf Basis aktueller Branchenreports
            </figcaption>
          </figure>

          {/* 3 */}
          <Anchor id="kosten" />
          <h2 className="text-2xl font-bold mt-10 mb-4">{sections[2].title}</h2>
          <p className="leading-relaxed mb-4">{sections[2].content}</p>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <PiggyBank className={`w-5 h-5 ${accent}`} /> Wenn Cloud wirtschaftlich vorn liegt
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Starke Lastspitzen / saisonale Nutzung
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Schneller Markteintritt, Experimentieren, MVPs
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Zugang zu Managed Services (Datenbanken, ML, Streaming)
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BadgeEuro className={`w-5 h-5 ${accent}`} /> Wenn eigener Server wirtschaftlich vorn liegt
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Konstante Grundlast, geringe Varianz
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Lizenzmodelle oder Spezialhardware (z. B. FPGA, HBA)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Datenlokation zwingend und Netzwerk-Egress kostentreibend
                </li>
              </ul>
            </div>
          </div>

          {/* Vergleichstabelle */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2" aria-describedby="vergleich-caption">
              <caption id="vergleich-caption" className="sr-only">
                Vergleich Cloud vs. eigener Server nach Aspekten
              </caption>
              <thead>
                <tr className="text-left">
                  <th className="px-3 py-2">Aspekt</th>
                  <th className="px-3 py-2">Cloud</th>
                  <th className="px-3 py-2">Eigener Server</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    a: "Kostenmodell",
                    c: "OpEx, nutzungsbasiert; FinOps nötig",
                    o: "CapEx + laufende Kosten; planbar bei konstanter Last",
                  },
                  { a: "Bereitstellung", c: "Minuten/Stunden", o: "Wochen/Monate" },
                  { a: "Skalierung", c: "Elastisch, global", o: "Begrenzt durch Hardware/Colo" },
                  { a: "Kontrolle", c: "Geteilte Verantwortung", o: "Maximale Hoheit, volle Verantwortung" },
                  { a: "Souveränität", c: "Boundary/Sovereign-Optionen", o: "Physisch vor Ort, Schlüsselhoheit" },
                  { a: "Latenz", c: "Edge/Regions möglich", o: "Standortnah, deterministisch" },
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
          <Anchor id="compliance" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className={`w-5 h-5 ${accent}`} /> Relevante Vorgaben kurz & knapp
              </h3>
              <ul className="text-sm space-y-2">
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

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Landmark className={`w-5 h-5 ${accent}`} /> Souveränität pragmatisch umsetzen
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Datenklassifizierung (z. B. Öffentlich, Intern, Vertraulich, Hochsensibel)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Kundenseitige Ende-zu-Ende-Verschlüsselung mit <strong>Schlüsselhoheit</strong> (KMS/HSM auch außerhalb des Cloud-Providers möglich)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Regionswahl, EU-Boundary/Sovereign-Controls nutzen
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-1 ${accent}`} /> Vertraglich: Exit-Klauseln, Portabilität, Audit-/Logging-Zugriff
                </li>
              </ul>
            </div>
          </div>

          {/* Bild 1 (Unsplash, responsive crop) */}
          <figure className="mt-8 grid sm:grid-cols-2 gap-5 items-center">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&h=1125&fit=crop&q=80&auto=format"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&h=900&fit=crop&q=80&auto=format"
                alt="Rechenzentrumsflur mit Serverracks"
                className="rounded-2xl border border-zinc-200 w-full h-auto object-cover"
              />
            </picture>
            <figcaption className="text-sm text-zinc-600">
              Passendes Motiv: RZ-Gang, EU-Region – Bildunterschrift betont Datenlokation &amp; Souveränität.
            </figcaption>
          </figure>

          {/* 5 */}
          <Anchor id="auswahl" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
          <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
            <li>
              <strong>Geschäftsziele schärfen:</strong> Welche messbaren Outcomes (z. B. Release-Frequenz, Verfügbarkeit, Margen) sind in 12–24 Monaten nötig?
            </li>
            <li>
              <strong>Workloads segmentieren:</strong> Latenz-kritisch? Datenrestriktionen? Schwankende Last? Lizenz-/Spezialhardware-Bedarfe?
            </li>
            <li>
              <strong>Regulatorik mappen:</strong> NIS2/DORA-Pflichten, Data-Act-Wechselbarkeit, Branchenstandards (z. B. ISO 27001, BSI C5).
            </li>
            <li>
              <strong>Plattform-Standards definieren:</strong> Cloud-Landing-Zone oder On-Prem-Referenzarchitektur (Netz, IAM, Observability, Backup/DR).
            </li>
            <li>
              <strong>Finanzmodell aufsetzen:</strong> FinOps (Showback/Chargeback, Budgets, Reservierungen), CapEx-Planung für on-prem.
            </li>
            <li>
              <strong>Security-by-Design:</strong> Zero-Trust, Identities first, flächendeckende Verschlüsselung, Geheimnis-/Schlüsselverwaltung.
            </li>
            <li>
              <strong>Exit-Strategien vorbereiten:</strong> Daten-/VM-Portabilität, Vertragsklauseln, testbare Migrations-Runbooks (auch zurück!).
            </li>
          </ol>

          {/* Bild 2 (Unsplash, responsive crop) */}
          <figure className="mt-8">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=900&h=1125&fit=crop&q=80&auto=format"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1600&h=900&fit=crop&q=80&auto=format"
                alt="Team plant Architektur auf einem Whiteboard"
                className="rounded-2xl border border-zinc-200 w-full h-auto object-cover"
              />
            </picture>
            <figcaption className="text-sm text-zinc-600">
              Illustration eines Architektur-Workshops: Zielbild, Abhängigkeiten, Migrationswellen.
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
                <li>Nur IaaS-Preise vergleichen statt Gesamtkosten (Netz, Backup, Betrieb, Egress).</li>
                <li>Keine Rollen &amp; Verantwortlichkeiten (FinOps, SecOps, Plattformteam) definiert.</li>
                <li>Fehlende Automatisierung/Guardrails – manuelle Konfiguration, Drift, Shadow-IT.</li>
                <li>Kein technischer &amp; vertraglicher Exit-Plan; fehlende Datenportabilität.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
              </h3>
              <ul className="text-sm space-y-2">
                <li>Plattform-Blueprint (Netz, IAM, Observability, DR) als Code, wiederverwendbar.</li>
                <li>FinOps-Prozesse (Budgets, KPIs, Reservierungen, Rightsizing) verankern.</li>
                <li>Durchgängige Verschlüsselung &amp; Schlüssel-Trennung (Kundenschlüssel).</li>
                <li>Regelmäßige <em>Game Days</em> für Failover, Restore und Exit-Szenarien.</li>
              </ul>
            </div>
          </div>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/finops-einfuehrung">
                  FinOps einführen: Kosten sichtbar machen und steuern
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/hybrid-cloud-architektur">
                  Referenzarchitektur für Hybrid-Cloud: Guardrails in der Praxis
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/nis2-dora-checkliste">
                  NIS2 &amp; DORA Checkliste: Was jetzt auf CTO/CISO zukommt
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/cloud-kosten-senken">
                  Cloud-Kosten senken ohne Qualitätseinbußen
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
                q: "Wann ist On-Premises günstiger als Cloud?",
                a: "Wenn Lasten stabil und gut planbar sind, Hardware lange genutzt wird und Egress-/Netzwerkkosten in der Cloud ins Gewicht fallen. Voraussetzung: Effizienter Betrieb, gute Auslastung und realistische Kapazitätsplanung.",
              },
              {
                q: "Wie adressiere ich das CLOUD-Act-Risiko?",
                a: "Technisch durch kundenseitige Verschlüsselung mit Schlüsselhoheit, juristisch durch geeignete Vertragsklauseln und Datenlokation in der EU. Souveränitäts-Features (EU-Boundary, Sovereign Controls) reduzieren das Risiko zusätzlich – ersetzen aber keine Schlüsselstrategie.",
              },
              {
                q: "Welche Kennzahl ist für Nachhaltigkeit relevant?",
                a: "PUE (Power Usage Effectiveness) zeigt den Facility-Overhead; für ein vollständiges Bild gehören auch CO₂-Intensität des Strommixes und Auslastung/Right-Sizing der IT-Lasten in die Bewertung.",
              },
              {
                q: "Brauche ich zwingend Hybrid-Cloud?",
                a: "Nicht zwingend – aber in der Praxis bietet der Mix oft das beste Verhältnis aus Geschwindigkeit, Kosten und Kontrolle. Wichtig sind klare Schnittstellen, Identitäten und einheitliches Observability-/Security-Modell.",
              },
              {
                q: "Wie plane ich den Anbieterwechsel?",
                a: "Früh Exit-Kriterien, Zielformate (z. B. OVA, S3-kompatibel), Test-Migrationen und Daten-/Schlüssel-Portabilität definieren. Vertragsseitig Wechsel-SLA, Gebühren (Data Act Übergangsregeln beachten) und Support festschreiben.",
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
                    name: "Wann ist On-Premises günstiger als Cloud?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Wenn Lasten stabil und gut planbar sind, Hardware lange genutzt wird und Egress-/Netzwerkkosten in der Cloud ins Gewicht fallen. Voraussetzung: Effizienter Betrieb, gute Auslastung und realistische Kapazitätsplanung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie adressiere ich das CLOUD-Act-Risiko?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Technisch durch kundenseitige Verschlüsselung mit Schlüsselhoheit, juristisch durch geeignete Vertragsklauseln und Datenlokation in der EU. Souveränitäts-Features reduzieren das Risiko zusätzlich – ersetzen aber keine Schlüsselstrategie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Kennzahl ist für Nachhaltigkeit relevant?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "PUE (Power Usage Effectiveness) zeigt den Facility-Overhead; für ein vollständiges Bild gehören auch CO₂-Intensität des Strommixes und Auslastung/Right-Sizing der IT-Lasten in die Bewertung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Brauche ich zwingend Hybrid-Cloud?",
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
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>Cloud oder eigener Server?</strong> Die beste Antwort ist meist <em>Hybrid</em>: Nutze die Stärke der Cloud für Geschwindigkeit, Elastizität und Services – und setze auf eigene Server, wenn Kontrolle, Planbarkeit, spezielle Latenz-/Lizenzanforderungen oder strenge Datenlokation dominieren. Entscheidend ist ein klarer Entscheidungsrahmen mit Governance für Kosten (FinOps), Sicherheit (Zero-Trust, Verschlüsselung), Compliance (NIS2/DORA) und <em>wechselbaren</em> Architekturen im Sinne des Data Act.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Kosten-/Architektur-Check gewünscht?</h2>
            <p className="text-zinc-700 mb-4">
              Wir analysieren deinen Workload-Mix und entwerfen eine belastbare Hybrid-Architektur inkl. Kosten- und Exit-Plan.
            </p>

            {/* Kein <form>, keine Handler – nur UI */}
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
            <img src={author.image} alt="Autorin" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role}. Fokus: Cloud-Strategie, FinOps, Plattform-Teams.
              </div>
              <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <img
              src={reviewer.image}
              alt="Reviewer"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <p className="text-sm text-zinc-700">
              Reviewed by: <strong>{reviewer.name}</strong> – {reviewer.role}.{' '}
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
              NIST SP 800-145: The NIST Definition of Cloud Computing – https://csrc.nist.gov/pubs/sp/800/145/final
            </li>
            <li>
              Uptime Institute Global Data Center Survey 2024 – https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.GlobalDataCenterSurvey.Report.pdf
            </li>
            <li>
              BSI C5 – Cloud Computing Compliance Controls Catalogue – https://www.bsi.bund.de/EN/Themen/…/Kriterienkatalog-C5/kriterienkatalog-c5_node.html
            </li>
            <li>
              NIS2 (EU) – https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
            </li>
            <li>
              DORA (EU) – https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/digital-operational-resilience-act-dora
            </li>
            <li>
              EU Data Act – gilt ab 12.09.2025 – https://eur-lex.europa.eu/EN/legal-content/summary/rules-on-fair-access-to-and-use-of-data-data-act.html
            </li>
            <li>
              IEA (2025): Energy &amp; AI – Data-Center-Strombedarf bis 2030 – https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
            </li>
            <li>
              Flexera (2025): State of the Cloud Report – https://www.flexera.com/blog/finops/the-latest-cloud-computing-trends-flexera-2025-state-of-the-cloud-report/
            </li>
            <li>
              FinOps Foundation (2025): State of FinOps Library – https://data.finops.org/library
            </li>
            <li>
              Microsoft EU Data Boundary (2025) – https://blogs.microsoft.com/on-the-issues/2025/02/26/microsoft-completes-landmark-eu-data-boundary/
            </li>
            <li>AWS European Sovereign Cloud (2025) – https://aws.eu/</li>
            <li>
              Google: Sovereign Controls by T-Systems – https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-controls-tsi
            </li>
          </ul>
        </section>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
          <dl className="rounded-2xl border border-zinc-200 divide-y">
            <GlossaryRow
              term="CapEx"
              def="Investive Ausgaben (z. B. Server-Hardware, RZ-Ausstattung), die über Jahre abgeschrieben werden."
            />
            <GlossaryRow
              term="OpEx"
              def="Laufende Betriebs-Ausgaben (z. B. Instanz-/Lizenz-/Energie-/Personal-Kosten) – typisch für Cloud."
            />
            <GlossaryRow
              term="PUE"
              def="Power Usage Effectiveness; Verhältnis Gesamtstrom / IT-Strom. Je näher 1, desto effizienter die Facility."
            />
            <GlossaryRow
              term="Latenz"
              def="Verzögerung in ms bei Datenübertragung. Kritisch für Echtzeit-/Edge-Anwendungen."
            />
            <GlossaryRow
              term="Daten-Souveränität"
              def="Fähigkeit, Hoheit über Datenzugriffe, -speicherung und -verarbeitung rechtskonform sicherzustellen."
            />
          </dl>
        </section>
      </article>
    </>
  );
}
