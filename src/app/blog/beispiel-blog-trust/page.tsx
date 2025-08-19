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

// ---------- Branding ----------
const racingGreen = "from-emerald-700 to-emerald-500"; // Accent gradient
const accent = "text-emerald-700";

// ---------- Autoren & Firma ----------
const author = {
  name: "Max Mustermann",
  role: "Senior B2B-Marketer & KI-Berater (8+ Jahre Erfahrung)",
  image:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&fit=crop",
  linkedin: "https://www.linkedin.com/in/max-mustermann/",
};

const reviewer = {
  name: "Thomas Müller",
  role: "Leitung Vertrieb (B2B SaaS)",
  linkedin: "https://www.linkedin.com/in/thomas-mueller/",
};

const company = {
  name: "Muster GmbH",
  url: "https://www.findbar.info",
  logo:
    "https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=256&fit=crop",
};

// ---------- Sections (für ToC & Lesedauer) ----------
const sections = [
  {
    id: "grundlagen",
    title:
      "Warum KI 2025 B2B-Neukundengewinnung neu definiert – und Vertrauen die Währung bleibt",
    content:
      "2025 ist KI allgegenwärtig – doch mit jedem neuen Feature steigt auch die Skepsis: Käufer müssen höhere ROI-Erwartungen erfüllen, Sicherheitsbedenken adressieren und Entscheidungen stärker legitimieren. Studien zeigen: Business ist global die am meisten vertraute Institution, gleichzeitig ringen Menschen damit, ob Innovationen gut gemanagt werden – Vertrauen ist also fragil. KI kann genau hier helfen: Sie reduziert Reibung im Kaufprozess, macht Expertise sichtbarer und skaliert glaubwürdige Belege (z. B. unabhängige Reviews, Fallstudien) – vorausgesetzt, wir setzen sie transparent und faktenbasiert ein. Quelle: Edelman Trust Barometer 2024 (Business als einzige vertrauenswürdige Institution; Innovationsskepsis). :contentReference[oaicite:0]{index=0}",
  },
  {
    id: "status-quo",
    title:
      "Status quo & Trends: Selbstbestimmtes B2B-Buying, Peer-Trust und Regulatorik",
    content:
      "B2B-Käufe sind heute stärker selbstgesteuert und digital: 75 % der B2B-Käufer bevorzugen einen rep-freien Kaufprozess – reine Self-Service-Journeys führen aber häufiger zu Reue, weshalb ein hybrider Mix aus digital + Mensch ideal ist. Gleichzeitig vertrauen Käufer bei der Anbieterwahl eher Peers und Drittquellen als Vendor-Websites. Und: KI wird zum Pflichtfeature, Budgets steigen, aber ROI muss schneller belegt werden. Quellen: Gartner (rep-frei-Präferenz), G2 Buyer Behavior 2024 (Peer-Trust, 52 % planen steigende Software-ausgaben, 57 % erwarten ROI ≤ 3 Monate). :contentReference[oaicite:1]{index=1}",
  },
  {
    id: "praxis-expertenwahrnehmung",
    title: "Expertenwahrnehmung: Mit KI in Wochen zur ‚Trusted Authority‘",
    content:
      "Entscheider stufen hochwertiges Thought-Leadership-Material als deutlich vertrauenswürdiger ein als klassische Produktkommunikation. 73 % sagen: Thought Leadership ist die bessere Basis, um Fähigkeiten eines Anbieters zu beurteilen; 86 % würden Marken mit konstant hochwertigem TL eher in RFPs einladen und 60 % wären sogar bereit, einen Aufpreis zu zahlen. KI beschleunigt die Produktion solcher Inhalte – von Research-Synthese über Faktenchecks bis zur Personalisierung – ohne Qualität oder Quellen­transparenz zu opfern. Quelle: Edelman-LinkedIn 2024. :contentReference[oaicite:2]{index=2}",
  },
  {
    id: "go-to-market",
    title: "Dein KI-Go-to-Market: 5 Plays, die Vertrauen systematisch aufbauen",
    content:
      "Vertrauen entsteht, wenn Risiko sinkt und Kompetenz sichtbar wird. Aus der Praxis bewähren sich fünf KI-gestützte Plays: (1) Social-Proof-Engine (automatisierte Fallstudien/Video-Referenzen), (2) TL-Factory (monatsweise evidenzbasierte Executive-Briefings), (3) Proof-of-Value-Demos (mit anonymisierten Kundendaten), (4) Risiko-Transparenz (Security-FAQ, AI-Disclosure, Audit-Trail), (5) Buyer-Enablement (interaktive ROI-Rechner, Vergleichsmatrizen). Diese Taktiken zielen auf die realen Hürden im Buying-Komitee (C-Level, Legal, InfoSec) und verkürzen die ‚Time-to-Confidence‘. Belege: G2 2024 (C-Suite-Einfluss, Security-Gewichtung), Edelman-LinkedIn (TL-Wirkung). :contentReference[oaicite:3]{index=3}",
  },
  {
    id: "compliance",
    title:
      "Compliance 2025: EU-AI-Act – Transparenz ist jetzt marktwirksam",
    content:
      "Der EU-AI-Act ist seit 1. August 2024 in Kraft. Verbotene Systeme und AI-Literacy-Pflichten gelten seit 2. Februar 2025; Regeln für GPAI-Modelle greifen ab 2. August 2025; vollständige Anwendbarkeit ist ab 2. August 2026 (mit Ausnahmen für Hochrisiko). Für Marketing & Sales relevant: klare KI-Kennzeichnung, Dokumentation, Urheberrechts-Compliance sowie Risikomanagement. Die EU bekräftigte 2025 den Zeitplan. Quellen: Europäische Kommission & Reuters. :contentReference[oaicite:4]{index=4}",
  },
  {
    id: "fehler",
    title: "Typische Fehler & Risiken – und wie du sie vermeidest",
    content:
      "Häufige Stolperfallen: AI-Washing ohne echten Nutzen, Intransparenz bei KI-Einsatz, fehlende Security-Antworten, zu wenig Social Proof, keine Messung von Vertrauen. Mit den untenstehenden Gegenmaßnahmen baust du ein robustes, regelkonformes Vertrauensfundament.",
  },
];

const wordCount = sections.reduce(
  (sum, s) => sum + s.content.split(/\s+/).length,
  0
);
const readingMinutes = Math.max(8, Math.ceil(wordCount / 180)); // 180 wpm konservativ

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

const CheckLi = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden />
    <span className="flex-1">{children}</span>
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
  // FIX: make aria-hidden an explicit boolean/string to satisfy TS
  <div id={id} aria-hidden="true" className="pt-24 -mt-24" />
); // stabile Anker

// ---------- Einfache statische Vergleichsgrafik ----------
const ComparisonChart = () => {
  // Relative Wirksamkeit (1–10) zweier Vertrauenshebel:
  // Grau = Vendor-Eigendarstellung; Grün = Unabhängige/soziale Belege
  const items = [
    { k: "Peer-Reviews & Ratings", vergleich1: 6, vergleich2: 9 },
    { k: "Kundenreferenzen (Video/Case)", vergleich1: 6, vergleich2: 9 },
    { k: "Zertifizierungen & Security-Nachweise", vergleich1: 7, vergleich2: 8 },
    { k: "Thought Leadership (Expertenautor:innen)", vergleich1: 5, vergleich2: 8 },
    { k: "Live-Demos/PoV mit Daten", vergleich1: 7, vergleich2: 9 },
    { k: "Transparente KI-Kennzeichnung", vergleich1: 5, vergleich2: 8 },
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
        viewBox={`0 0 ${width} ${items.length * rowH + padTop}`}
        role="img"
        aria-label="Vergleich: Vendor-Eigendarstellung (grau) vs. Unabhängige Belege (grün) nach Vertrauenseffekt (1–10)"
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
              <text
                x={10}
                y={y + barH + 6}
                className="fill-zinc-700"
                fontSize="12"
              >
                {row.k}
              </text>
              {/* Vendor-Eigendarstellung (grau, obere Leiste) */}
              <rect
                x={left}
                y={y}
                width={scale(row.vergleich1)}
                height={barH}
                fill="#e5e7eb"
                rx="6"
              />
              <text
                x={left + scale(row.vergleich1) + 6}
                y={y + barH - 4}
                fontSize="11"
                className="fill-zinc-500"
              >
                {row.vergleich1}
              </text>
              {/* Unabhängige/soziale Belege (grün, untere Leiste) */}
              <rect
                x={left}
                y={y + barH + gap}
                width={scale(row.vergleich2)}
                height={barH}
                fill="url(#g1)"
                rx="6"
              />
              <text
                x={left + scale(row.vergleich2) + 6}
                y={y + barH + gap + barH - 4}
                fontSize="11"
                className="fill-emerald-700"
              >
                {row.vergleich2}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-sm text-zinc-600">
        Einordnung basierend auf: Käufer vertrauen Peers/Drittquellen mehr als
        Vendor-Sites (G2 2024) und hochwertiges Thought Leadership steigert
        RFP-Einladungen (Edelman-LinkedIn 2024).
      </figcaption>
    </figure>
  );
};

// Glossar-Zeile
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
  <div className="grid grid-cols-[160px_1fr] gap-4 p-4">
    <dt className="font-semibold text-zinc-900">{term}</dt>
    <dd className="text-zinc-700">{def}</dd>
  </div>
);

// ---------- Article ----------
export default function Article() {
  // Hydration-safe single timestamp
  const now = new Date();
  const nowISO = now.toISOString();
  const updated = formatDateDE(now);
  const title =
    "B2B-Kunden gewinnen 2025 mit KI: Vertrauen skalieren statt nur Leads sammeln";
  const description =
    "So baust du trotz allgemeinem Vertrauensverlust mit KI echte Expertenwahrnehmung auf – inkl. Plays, Kennzahlen & EU-AI-Act-Check.";
  const canonical = `${company.url}/blog/b2b-kunden-gewinnen-mit-ki-2025`;

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
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&fit=crop"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&fit=crop"
        />

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          // Single timestamp to avoid hydration mismatch warnings
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              inLanguage: "de",
              author: { "@type": "Person", name: author.name },
              reviewedBy: { "@type": "Person", name: reviewer.name },
              datePublished: nowISO,
              dateModified: nowISO,
              image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&fit=crop",
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
            Der Wettbewerb nimmt zu, Budgets werden härter geprüft – und
            Vertrauen wird zur knappsten Ressource. Hier erfährst du, wie du mit
            KI echte Expertise sichtbar machst und B2B-Käufer schneller zu
            sicheren Entscheidungen führst.
          </p>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              {/* Ideal Prompt (16:9) für generatives Titelbild: „C-Level-Team in einem Workshopraum, transparente HUD-Overlays mit KI-Empfehlungen, Charts, Sicherheits-Badges, warme Grüntöne, realistisches Fotolicht, professionelle Unternehmensästhetik“ */}
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&fit=crop"
                  alt="Strategie-Workshop: Team bewertet KI-gestützte Vertrauenssignale und Kundenpfade"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Strategie-Workshop mit KI-Overlays
            </figcaption>
          </figure>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
            <div className="flex items-center gap-3">
              <img
                src={author.image}
                alt={`Autor: ${author.name}`}
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
                <time dateTime={nowISO}>{updated}</time>
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
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="space-y-3">
            <TLDRItem icon={ShieldCheck}>
              Vertrauen skaliert mit Social Proof, Thought Leadership und
              Security-Transparenz – nicht mit mehr Leads. KI beschleunigt genau
              diese drei Hebel.
            </TLDRItem>
            <TLDRItem icon={Gauge}>
              Käufer bevorzugen rep-freie, digitale Journeys – doch Hybride
              (digital + Mensch) verhindern Kaufreue und erhöhen
              Abschluss-Sicherheit. :contentReference[oaicite:6]{index=6}
            </TLDRItem>
            <TLDRItem icon={PiggyBank}>
              Budgets steigen, ROI-Druck auch: 57 % erwarten positive Effekte
              innerhalb von 3 Monaten – liefere schnelle, belegte PoV-Wins.
              :contentReference[oaicite:7]{index=7}
            </TLDRItem>
            <TLDRItem icon={Network}>
              Peer-Quellen schlagen Vendor-Seiten bei Vertrauen – aktiviere
              Reviews, Referenzen, Branchen-Communities und
              Case-Video-Snippets. :contentReference[oaicite:8]{index=8}
            </TLDRItem>
            <TLDRItem icon={FileSearch}>
              EU-AI-Act: Transparenzpflichten und Dokumentation werden zum
              Wettbewerbsfaktor – klare AI-Disclosure schafft Vorsprung.
              :contentReference[oaicite:9]{index=9}
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
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#grundlagen"
              >
                1. Grundlagen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#status-quo"
              >
                2. Status Quo & Trends
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#praxis-expertenwahrnehmung"
              >
                3. Expertenwahrnehmung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#go-to-market"
              >
                4. KI-Go-to-Market
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#compliance"
              >
                5. Compliance 2025
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#fehler"
              >
                6. Fehler & Best Practices
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#faq"
              >
                7. FAQ
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#zusammenfassung"
              >
                8. Kurzfazit
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

          {/* Zwei fachliche Grundlagen */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className={`w-5 h-5 ${accent}`} />
                <strong>Wie Vertrauen im B2B entsteht</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <CheckLi>
                  Kompetenz + Integrität + Evidenz: Käufer suchen Beweise, nicht
                  Behauptungen.
                </CheckLi>
                <CheckLi>
                  Sozialer Beleg (Reviews, Referenzen) reduziert wahrgenommenes
                  Risiko schneller als Prosatexte.
                </CheckLi>
                <CheckLi>
                  Transparenz zu KI-Einsatz & Sicherheit schafft
                  Entscheidungssicherheit.
                </CheckLi>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Server className={`w-5 h-5 ${accent}`} />
                <strong>Wo KI konkret hilft</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <CheckLi>
                  Research-Synthese & Faktencheck: Studien extrahieren, sauber
                  zitieren, Claims belegen.
                </CheckLi>
                <CheckLi>
                  Content-Ops: TL-Artikel, Case-Summaries, Videoskripte,
                  Newsletter – konsistent & on-brand.
                </CheckLi>
                <CheckLi>
                  Buyer-Enablement: Interaktive Demos, ROI-Rechner,
                  personalisierte Playbooks.
                </CheckLi>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <Anchor id="status-quo" />
          <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
          <p className="mb-5 leading-relaxed">
            {sections[1].content} Ergänzend zeigt McKinsey: 65 % der Unternehmen
            nutzen 2024 Generative KI regelmäßig – ein deutlicher Sprung
            gegenüber 2023. Das erhöht den Druck, Glaubwürdigkeit und
            Governance mitzudenken. :contentReference[oaicite:10]{index=10}
          </p>

          {/* Chart */}
          <ComparisonChart />

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Hochwertiges Thought Leadership ist für Entscheider
              vertrauenswürdiger als klassische Marketingmaterialien – und
              öffnet RFP-Türen.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Zusammenfassung nach Edelman-LinkedIn B2B Thought Leadership
              Report 2024. :contentReference[oaicite:11]{index=11}
            </figcaption>
          </figure>

          {/* 3 */}
          <Anchor id="praxis-expertenwahrnehmung" />
          <h2 className="text-2xl font-bold mt-10 mb-4">
            {sections[2].title}
          </h2>
          <p className="leading-relaxed mb-4">{sections[2].content}</p>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className={`w-5 h-5 ${accent}`} /> Zwei Wege zur
                Autorität: Redaktion vs. Co-Creation
              </h3>
              <ul className="space-y-2 text-sm">
                <CheckLi>
                  Redaktionell geführt: KI hilft bei Research, Struktur,
                  Stiltreue – finale Expertise bleibt bei dir.
                </CheckLi>
                <CheckLi>
                  Co-Creation mit Kund:innen: Interviews + KI-Synthese erzeugen
                  authentische, zitierfähige Cases.
                </CheckLi>
                <CheckLi>
                  Beide Wege profitieren von AI-gestütztem
                  Quellen-/Beleg-Management.
                </CheckLi>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BadgeEuro className={`w-5 h-5 ${accent}`} /> Wirkung auf
                Pipeline & Pricing
              </h3>
              <ul className="space-y-2 text-sm">
                <CheckLi>
                  Mehr RFP-Einladungen und kürzere Entscheidungswege durch
                  belegte Kompetenz. :contentReference[oaicite:12]{index=12}
                </CheckLi>
                <CheckLi>
                  Preisprämie möglich, wenn Expertise nachvollziehbar ist (z. B.
                  Benchmarks, Zertifikate). :contentReference[oaicite:13]{index=13}
                </CheckLi>
                <CheckLi>
                  Geringere Churn-Risiken dank Enablement-Inhalten für Nutzer &
                  Champions. :contentReference[oaicite:14]{index=14}
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
                Vergleich zweier Go-to-Market-Ansätze im Hinblick auf Vertrauen
                & Wirkung
              </caption>
              <thead>
                <tr className="text-left">
                  <th className="px-3 py-2">Aspekt</th>
                  <th className="px-3 py-2">KI-Social-Proof-Play</th>
                  <th className="px-3 py-2">Klassischer Outbound</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    a: "Primary Trust-Signal",
                    c: "Peer-Reviews, Referenzen, TL-Artikel",
                    o: "Ads, Cold Outreach, Produktfolien",
                  },
                  {
                    a: "Zeit bis Vertrauen",
                    c: "Kurz (PoV-Demos, Belege on-demand)",
                    o: "Länger (mehr Touchpoints nötig)",
                  },
                  {
                    a: "Einfluss im Buying-Komitee",
                    c: "Stark bei C-Level/Legal/InfoSec dank Nachweisen",
                    o: "Begrenzt – Claim-Lastigkeit",
                  },
                  {
                    a: "Skalierung",
                    c: "Automatisierte Case-Summaries, Snippets, Übersetzungen",
                    o: "Manuell, ressourcenintensiv",
                  },
                  {
                    a: "Compliance-Fit EU-AI-Act",
                    c: "Transparente AI-Disclosure & Dokumentation",
                    o: "Uneinheitlich, Risiko von AI-Washing",
                  },
                  {
                    a: "ROI-Beweis",
                    c: "Interaktive Rechner, Benchmarks, Kunden-KPIs",
                    o: "Indikativ, oft ohne Third-Party-Beleg",
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
          <Anchor id="go-to-market" />
          <h2 className="text-2xl font-bold mt-12 mb-4">
            {sections[3].title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Landmark className={`w-5 h-5 ${accent}`} /> Zusammenfassung
                Play 1–3
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Pill>Proof</Pill> Social-Proof-Engine: sammelt, prüft und
                  publiziert kontinuierlich Referenzen & Reviews
                  (API/Integrationen).
                </li>
                <li>
                  <Pill>Insight</Pill> TL-Factory: monatliche, evidenzbasierte
                  Executive-Briefings mit eindeutigen Zahlen & Quellen.
                </li>
                <li>
                  <Pill>Value</Pill> PoV-Demos: 2-wöchige, risikofreie
                  Testumgebungen mit anonymisierten Kundendaten und klaren
                  Erfolgskriterien.
                </li>
                <li>
                  <Pill>Enable</Pill> Buyer-Kits: Checklisten,
                  Vergleichstabellen, Security-FAQ für das Buying-Komitee.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Network className={`w-5 h-5 ${accent}`} /> Zusammenfassung Play
                4–5
              </h3>
              <ul className="text-sm space-y-2">
                <CheckLi>
                  Risk-Transparency: veröffentliche AI-Disclosure, Datenflüsse,
                  Subprozessoren, Zertifizierungen (ISO, SOC 2).
                </CheckLi>
                <CheckLi>
                  Community-First: aktiviere Kund:innen als Co-Autoren (Panels,
                  Webinare, Peer-Runden) – KI hilft bei Planung & Nachbereitung.
                </CheckLi>
                <CheckLi>
                  Hybrid-Journey: biete Self-Service + schnellen Expert-Zugang,
                  um Reue zu vermeiden. :contentReference[oaicite:15]{index=15}
                </CheckLi>
                <CheckLi>
                  Security-Signale: betone Breach-Historie (null/incidents),
                  Zertifikate, Bug-Bounty – Käufer achten darauf.
                  :contentReference[oaicite:16]{index=16}
                </CheckLi>
              </ul>
            </div>
          </div>

          {/* Bild 1 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&fit=crop"
                  alt="Whiteboard-Roadmap für KI-Go-to-Market mit Vertrauenssignalen und RACI-Plan"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Roadmap: Von Social Proof bis AI-Disclosure – Bausteine einer
              vertrauensbildenden Journey.
            </figcaption>
          </figure>

          {/* 5 */}
          <Anchor id="compliance" />
          <h2 className="text-2xl font-bold mt-12 mb-4">
            {sections[4].title}
          </h2>
          <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
            <li>
              Zeitleiste beachten: Verbotene Systeme & AI-Literacy seit
              02.02.2025; GPAI-Pflichten ab 02.08.2025; volle Anwendbarkeit ab
              02.08.2026. :contentReference[oaicite:17]{index=17}
            </li>
            <li>
              Transparenz: Markiere KI-Features, erkläre
              Trainingsdaten/Urheberrecht, führe Modell-/Prompt-Protokolle
              (Audit-Trail). :contentReference[oaicite:18]{index=18}
            </li>
            <li>
              Risikomanagement: dokumentiere Data-Flows, DPIA/TRA, Bias-Tests,
              Incident-Prozesse; aktualisiere laufend.
            </li>
            <li>
              Security-Signale: Zertifizierungen (ISO 27001, SOC 2), Pen-Tests,
              Drittanbieter-Risiko – im Buying-Kit sichtbar machen.
              :contentReference[oaicite:19]{index=19}
            </li>
            <li>
              Marketing-Claims absichern: Belege durch Benchmarks, Kunden-KPIs,
              unabhängige Quellen (keine AI-Washing-Versprechen).
              :contentReference[oaicite:20]{index=20}
            </li>
            <li>
              Hybride Beratung: Self-Service + Expertengespräch anbieten, um
              Compliance-Fragen früh zu klären.
              :contentReference[oaicite:21]{index=21}
            </li>
            <li>
              Timeline bleibt: 2025 bestätigte die EU die fristgerechte
              Umsetzung – nicht auf Aufschub hoffen.
              :contentReference[oaicite:22]{index=22}
            </li>
          </ol>

          {/* Bild 2 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&fit=crop"
                  alt="Compliance-Checkliste auf Laptop; EU-Flagge reflektiert im Glas"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              EU-AI-Act im Blick: Transparenzpflichten werden zum
              Differenzierungsmerkmal im Vertrieb.
            </figcaption>
          </figure>

          {/* 6 */}
          <Anchor id="fehler" />
          <h2 className="text-2xl font-bold mt-12 mb-4">
            {sections[5].title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-rose-700" /> Vermeidbare Fehler
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  AI-Washing: „KI-Magie“ ohne Nutzen/Belege – zerstört Vertrauen
                  schneller als jedes Bugfix. :contentReference[oaicite:23]{index=23}
                </li>
                <li>
                  Intransparenz: Keine AI-Disclosure, unklare Datenflüsse –
                  verstößt gegen Erwartungen & künftige Pflichten.
                  :contentReference[oaicite:24]{index=24}
                </li>
                <li>
                  Security-Blindspot: Breach-Historie/Certs verschweigen –
                  InfoSec blockt den Deal. :contentReference[oaicite:25]{index=25}
                </li>
                <li>
                  Nur Lead-Volumen: Ohne Social Proof & TL bleibt Conversion
                  niedrig (Peer-Trust fehlt).
                  :contentReference[oaicite:26]{index=26}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  Beweise vor Behauptungen: Jede Kernthese mit Studie, Kennzahl
                  oder Case belegen.
                </li>
                <li>
                  Hybrid-Journey: Self-Serve + Expert-Sprechstunde, um Reue zu
                  vermeiden. :contentReference[oaicite:27]{index=27}
                </li>
                <li>
                  Security-FAQ & Compliance-Kit öffentlich verlinken (ISO/SOC,
                  Subprozessoren, DPA, Incident-Policy).
                  :contentReference[oaicite:28]{index=28}
                </li>
                <li>
                  Kontinuierliches TL-Programm mit Executive-Distribution
                  (Newsletter, LinkedIn-Slides, Webinar-Clips).
                  :contentReference[oaicite:29]{index=29}
                </li>
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
                  href="/blog/ai-disclosure-checkliste-b2b"
                >
                  AI-Disclosure in der Praxis: Checkliste für Marketing & Vertrieb
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/b2b-thought-leadership-redaktion-mit-ki"
                >
                  Thought Leadership mit KI: Redaktionsplan & Workflow
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/security-signale-im-vertrieb"
                >
                  Security-Signale, die Deals beschleunigen
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/roi-rechner-b2b-vorlage"
                >
                  ROI-Rechner für B2B-Software: Vorlage & Implementierung
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
                q: "Wie hilft KI konkret, Vertrauen aufzubauen?",
                a: "KI beschleunigt Research, Faktencheck und die Produktion von Social-Proof-Assets (Case-Summaries, Video-Snippets, Review-Aggregationen). Gleichzeitig ermöglicht sie personalisierte Buyer-Kits (z. B. Security-FAQ), die Entscheidungsrisiken senken.",
              },
              {
                q: "Ist ‚rep-frei‘ gleichbedeutend mit ‚ohne Menschen‘?",
                a: "Nein. Käufer wünschen Selbstbestimmung – aber hybride Modelle mit schnellen Expert-Touchpoints reduzieren Kaufreue. Biete Self-Service plus Beratung on-demand. :contentReference[oaicite:30]{index=30}",
              },
              {
                q: "Welche Inhalte steigern Expertenwahrnehmung am stärksten?",
                a: "Evidenzbasierte Thought-Leadership-Beiträge mit klaren Daten, konkreter Guidance und seriöser Autor:innenschaft. Das wirkt vertrauensbildender als Marketing-Folien. :contentReference[oaicite:31]{index=31}",
              },
              {
                q: "Welche Rolle spielt Security in der Bewertung?",
                a: "Eine große: 81 % prüfen die Sicherheits-/Breach-Historie von Anbietern; Zertifizierungen und Data-Governance sind kaufentscheidend. :contentReference[oaicite:32]{index=32}",
              },
              {
                q: "Was fordert der EU-AI-Act für Marketing-KI?",
                a: "Transparenz über KI-Nutzung, technische Dokumentation, Urheberrechts-Konformität und Risikomanagement – mit gestaffelten Fristen bis 2026. :contentReference[oaicite:33]{index=33}",
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
                    name: "Wie hilft KI konkret, Vertrauen aufzubauen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "KI beschleunigt Research, Faktencheck und Social-Proof-Produktion und ermöglicht personalisierte Buyer-Kits, die Entscheidungsrisiken senken.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Ist ‚rep-frei‘ gleichbedeutend mit ‚ohne Menschen‘?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nein. Käufer wünschen Selbstbestimmung – aber hybride Modelle mit schnellen Expert-Touchpoints reduzieren Kaufreue.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Welche Inhalte steigern Expertenwahrnehmung am stärksten?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Evidenzbasierte Thought-Leadership-Beiträge mit klaren Daten, Guidance und seriöser Autor:innenschaft.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Rolle spielt Security in der Bewertung?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sehr groß: Käufer prüfen Sicherheits-/Breach-Historie, Zertifizierungen und Data-Governance.",
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
            B2B-Käufer 2025 wollen Selbstbestimmung, schnelle Evidenz und klare
            Sicherheit – nicht mehr Claims. KI ist das Werkzeug, um Expertise
            sichtbar zu machen, Social Proof zu skalieren und Compliance
            transparent zu leben. So wandelst du allgemeinen Vertrauensverlust
            in einen Vorteil: Liefere belegte Ergebnisse, offenbare deinen
            KI-Einsatz und führe Käufer hybrid – digital stark, menschlich
            erreichbar.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Lust auf eine 2-Wochen-PoV-Demo mit echten Belegen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir zeigen dir, wie ein KI-gestütztes Proof-of-Value Vertrauen in
              deiner Pipeline messbar erhöht.
            </p>

            {/* Kein <form>, nur UI */}
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
                Mehr Infos: {company.url}
              </p>
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Über die Autorin / den Autor
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={author.image}
              alt={`Autor: ${author.name}`}
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role}. Fokus: KI-Go-to-Market, Buyer-Enablement,
                Trust-Signale.
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
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              Edelman Trust Barometer 2024 – Global Report.
              :contentReference[oaicite:34]{index=34}
            </li>
            <li>
              Edelman-LinkedIn: 2024 B2B Thought Leadership Impact Report.
              :contentReference[oaicite:35]{index=35}
            </li>
            <li>
              G2: 2024 Buyer Behavior Report (PDF & Overview).
              :contentReference[oaicite:36]{index=36}
            </li>
            <li>
              Gartner: B2B Buying Journey – 75 % bevorzugen rep-freie Experience.
              :contentReference[oaicite:37]{index=37}
            </li>
            <li>
              Europäische Kommission – AI Act: Anwendungstermine & Pflichten.
              :contentReference[oaicite:38]{index=38}
            </li>
            <li>
              Reuters (04.07.2025): EU bestätigt Zeitplan des AI Acts.
              :contentReference[oaicite:39]{index=39}
            </li>
            <li>
              LinkedIn B2B Institute – Research Hub & 2030 B2B Trends.
              :contentReference[oaicite:40]{index=40}
            </li>
            <li>
              McKinsey (30.05.2024): The state of AI in early 2024 – 65 %
              Gen-AI-Nutzung. :contentReference[oaicite:41]{index=41}
            </li>
          </ul>
        </section>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
          <dl className="rounded-2xl border border-zinc-200 divide-y">
            <GlossaryRow
              term="Thought Leadership"
              def="Evidenzbasierte Inhalte von Fachexpert:innen, die Perspektiven verschieben und konkrete Lösungen zeigen."
            />
            <GlossaryRow
              term="Buyer-Enablement"
              def="Hilfsmittel, die Käufer intern überzeugen lassen (ROI-Rechner, Security-FAQ, Vergleichsmatrizen)."
            />
            <GlossaryRow
              term="AI-Disclosure"
              def="Transparente Angaben zu Einsatz, Daten, Modellen und Grenzen von KI-Funktionen."
            />
            <GlossaryRow
              term="PoV-Demo"
              def="Kurztest mit realitätsnahen Daten zur schnellen, messbaren Nutzenbelegung."
            />
            <GlossaryRow
              term="GPAI-Modelle"
              def="Allgemeine KI-Grundmodelle, für die im EU-AI-Act besondere Transparenz-/Dokupflichten gelten."
            />
          </dl>
        </section>
      </article>
    </>
  );
}
