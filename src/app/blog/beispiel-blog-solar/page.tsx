import Head from "next/head";
import {
  CheckCircle2,
  ShieldCheck,
  Gauge,
  PiggyBank,
  Landmark,
  BadgeEuro,
  ArrowRight,
  Info,
  CalendarClock,
  Timer,
  Sun,
  BatteryCharging,
  Factory,
  LineChart,
  Zap,
  FileSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
/**
AI Blog-Artikel
Thema: Green Energy im Unternehmen – Photovoltaik und Energiespeicher sinnvoll einsetzen
Struktur, UI und Stil sind am Beispielcode orientiert. 16:6-Bilder, Racing-Green-Akzent, TL;DR, Checkmarks, Kurzfazit etc.
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
  name: "Jonas Pfeiffer",
  role: "Energie & Sustainability Consultant (10+ Jahre Erfahrung)",
  image:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=240&h=240&q=80&crop=faces&fit=crop",
  linkedin: "https://www.linkedin.com/in/jonaspfeiffer/",
};
const reviewer = {
  name: "Dr.-Ing. Hannah Reuter",
  role: "PV- und Speicherexpertin (Grid Compliance, LCOE)",
  linkedin: "https://www.linkedin.com/in/hannah-reuter/",
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
    title:
      "Was bringen PV & Batteriespeicher fürs Unternehmen – in einfachen Worten",
    content:
      "Photovoltaik (PV) wandelt Sonnenlicht direkt in Strom um. Auf dem Firmendach, an der Fassade oder als Carport liefert sie tagsüber günstige, planbare Energie. Ein Batteriespeicher ergänzt die Anlage: Er speichert Überschüsse und stellt sie später bereit – für Eigenverbrauch, Lastspitzenkappung (Peak Shaving) und Resilienz bei Netzausfällen. Die deutsche PV hat 2024 rund 72–74 TWh Strom erzeugt und etwa 14 % der Stromnachfrage gedeckt; die kumulierte Leistung überschritt 100 GWp – Tendenz stark steigend. Für Entscheider heißt das: PV ist ausgereift, Standardbaustein jeder Energiekostenstrategie und dank neuer Regelungen einfacher umzusetzen als noch vor wenigen Jahren.",
  },
  {
    id: "wirtschaftlichkeit",
    title:
      "Investition, LCOE & Amortisation: So rechnest du PV- und Speicher-Projekte",
    content:
      "Für die Wirtschaftlichkeit zählen drei Dinge: 1) die Stromgestehungskosten (LCOE) der PV- bzw. PV+Speicher-Lösung, 2) dein heutiger und erwarteter Strombezugspreis (inkl. Netzentgelte, Abgaben) und 3) dein Eigenverbrauchsprofil (Lastkurve). Seriöse Referenzen zeigen: Neue PV-Dachanlagen liegen ohne Speicher regelmäßig unter 15 ct/kWh; PV+Speicher ist teurer, aber oft immer noch unter typischen Netzstromkosten für Unternehmen. Der Payback wird in Jahren gerechnet (Investition geteilt durch jährliche Nettoersparnis). Je höher die Eigenverbrauchsquote und je größer die Preisdifferenz zum Netzstrom, desto schneller amortisiert sich das Projekt. Sensitiv ist das Modell v. a. gegenüber CAPEX (€/kWp), Vollbenutzungsstunden (kWh/kWp) und Diskontsatz. Batteriespeicher rechnen sich zusätzlich über Peak Shaving, Lastmanagement und ggf. Erlöse am Energiemarkt (Direktvermarktung, Regelenergie – projektspezifisch).",
  },
  {
    id: "foerderung",
    title:
      "Förderungen & Vergütung: EEG, KfW 270, Einspeisetarife – was aktuell gilt",
    content:
      "In Deutschland stützen mehrere Säulen die Wirtschaftlichkeit: (a) EEG mit festen Vergütungen/Marktprämien je nach Anlagengröße und Einspeiseart (Teileinspeisung vs. Volleinspeisung), (b) zinsgünstige Kredite wie KfW 270 für PV und Speicher sowie (c) Landes-/Kommunalprogramme. Für gewerbliche Dachanlagen bis 1 MW greift die gesetzliche Vergütung bzw. die gleitende Marktprämie; größere Leistungen laufen über Ausschreibungen. Zusätzlich hat das Solarpaket I die Förderung für >40-kW-Dachanlagen angehoben und Genehmigungen beschleunigt. Wichtig: Die konkreten ‚anzulegenden Werte‘ werden halbjährlich angepasst – für den Inbetriebnahmezeitraum August 2025 bis Januar 2026 veröffentlicht die Bundesnetzagentur Tabellen. Unternehmen sollten außerdem steuerliche Effekte (AfA, ggf. §7g EStG für KMU) prüfen – die Ausgestaltung hängt vom Einzelfall ab.",
  },
  {
    id: "technik",
    title:
      "Technik & Netz: Von DC/AC bis VDE-AR-N 4105/4110 – was muss ich beachten?",
    content:
      "Technisch bestehen gewerbliche PV-Systeme aus Modulen (DC), Wechselrichtern (AC), Montagesystem, Verkabelung, Zählern/Messen sowie optionalem Batteriespeicher (DC- oder AC-gekoppelt). Für den Netzanschluss gelten die VDE-Anwendungsregeln: Niederspannung (bis 135 kW Wirkleistung) nach VDE-AR-N 4105; ab 135 kW in der Regel Mittelspannung nach VDE-AR-N 4110 inkl. Zertifikate/Protokolle. Die TAB 2023 der Netzbetreiber präzisieren Details, z. B. Messkonzepte, Kuppelschalter, NA-Schutz und Inbetriebnahmeverfahren. Für Speicher existieren ergänzende FNN-Hinweise. Ein sauberer Netzanschlussprozess (Vorabstimmung Messkonzept, Einspeisepunkt, Blindleistungsbereitstellung) spart Monate.",
  },
  {
    id: "vorgehen",
    title:
      "In 7 Schritten zur PV- & Speicherstrategie: Von der Dachprüfung bis zum PPA",
    content:
      "1) Last- & Potenzialanalyse: 12–24 Monate Messdaten (Lastgang) sichern, Lastspitzen identifizieren, Dach-/Flächencheck (Statik, Verschattung). 2) Zielbild & KPIs festlegen: Eigenverbrauchsquote, Peak-Shaving-Ziele, Resilienz, CO₂-Reduktion, Budget/CapEx-Grenzen. 3) Tech-Design: DC/AC-Kopplung, Wechselrichter/Hybrid-WR, Speichergröße (C-Rate), Brandschutz, Monitoring. 4) Wirtschaftlichkeitsmodell: LCOE, CAPEX (€/kWp, €/kWh), OPEX, Degradation, Strompreis-Szenarien, Förderkulisse, Steuern. 5) Recht/Netz: Netzverträglichkeitsprüfung, Messkonzept, Direktvermarktung/Marktprämie, EEG-Zuordnung (Teil- vs. Volleinspeisung), PPA-Optionen. 6) Ausschreibung & EPC-Vergabe: Festpreisangebote, Lieferzeiten, Gewährleistung, Ertragsgarantien, Service-SLA. 7) Rollout & Betrieb: Bauzeitenplan, Arbeitssicherheit, Inbetriebnahme, KPI-Monitoring (Eigenverbrauch, Peak-Reduktion, spezifischer Ertrag), Wartung & Performance-Ratio.",
  },
  {
    id: "risiken",
    title:
      "Typische Fehler & Risiken – und wie du sie pragmatisch vermeidest",
    content:
      "Häufige Stolpersteine sind: 1) falsche Dimensionierung (zu klein ➝ verschenkter Ertrag; zu groß ➝ unnötige CAPEX), 2) unpassendes Mess-/Abrechnungsdesign (Fehlanreize), 3) Vergessen von Statik/Brandschutz/Dachhaut, 4) unrealistische Strompreisannahmen, 5) fehlende Peak-Shaving-Logik im Speicherbetrieb, 6) zu späte Netzbetreiber-Einbindung, 7) fehlende Ersatzteil- und O&M-Planung. Gegenmittel: Lastdaten- und Schattenanalyse am Anfang, Variantenvergleich (mit/ohne Speicher), Netz-/Messkonzept früh klären, konservative Szenarien rechnen, EPC mit Referenzen wählen, SLA & Performance-KPIs vertraglich fixieren.",
  },
];
// Compute rough reading time (180 wpm conservative)
const wordCount = sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
const readingMinutes = Math.max(10, Math.ceil(wordCount / 180));
// ---------- UI Components ----------
const TLDRItem = ({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) => (
  <li className="flex items-start gap-3"> <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden /> <span>{children}</span> </li> );
const CheckLi = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-2"> <CheckCircle2 className={`w-4 h-4 mt-1 flex-none ${accent}`} aria-hidden /> <span className="flex-1">{children}</span> </li> );
const Pill = ({ children }: { children: ReactNode }) => (
  <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${racingGreen} text-white px-3 py-1 text-xs font-medium`}>
    {children}
  </span>
);
const Anchor = ({ id }: { id: string }) => <div id={id} aria-hidden="true" className="pt-24 -mt-24" />; // stable anchor
// Simple static SVG chart – Vergleich Kosten (€/kWh) Netzstrom vs. PV vs. PV+Speicher
const CostComparisonChart = () => {
  // Illustrative scoring bars (not real-time pricing) – beschriftet im Diagramm
  const items = [
    { k: "Netzstrom (Unternehmen)", value: 0.19 }, // Referenz: EU Non-household avg 2H/2024
    { k: "PV-Dach LCOE (neu)", value: 0.12 }, // < 0.15 €/kWh häufig
    { k: "PV + Speicher LCOE", value: 0.16 }, // Spanne projektspezifisch
  ];
  const max = 0.30;
  const width = 720;
  const left = 200;
  const right = width - 20;
  const barH = 18;
  const rowH = 40;
  const padTop = 14;
  const scale = (v: number) => (right - left) * (v / max);
  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <svg
        viewBox={`0 0 ${width} ${items.length * rowH + padTop}`}
        role="img"
        aria-label="Vergleich grober Kostenindikatoren in €/kWh: Netzstrom (Unternehmen), PV-Dach LCOE, PV+Speicher LCOE"
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
              <text x={10} y={y + barH - 3} className="fill-zinc-700" fontSize="12">
                {row.k}
              </text>
              <rect x={left} y={y} width={scale(row.value)} height={barH} fill={i === 0 ? "#e5e7eb" : "url(#g1)"} rx="6" />
              <text x={left + scale(row.value) + 6} y={y + barH - 4} fontSize="11" className={i === 0 ? "fill-zinc-500" : "fill-emerald-700"}>
                {(row.value * 100).toFixed(1)} ct
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-sm text-zinc-600">
        Richtwerte zur Einordnung: EU-Referenz für Unternehmensstrom (inkl. Abgaben) und typische Spannen aus aktuellen Studien; projektspezifisch abweichend.
      </figcaption>
    </figure>
  );
};
// Glossary row
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
  <div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
export default function Article() {
  const updated = formatDateDE();
  const title = "Green Energy im Unternehmen: Photovoltaik & Batteriespeicher wirtschaftlich planen";
  const description =
    "PV & Speicher im B2B: Investition, Amortisation, Förderungen (EEG, KfW 270), Netz & VDE – Leitfaden mit Rechenlogik, Checklisten und Praxis-Tipps.";
  const canonical = `${company.url}/blog/green-energy-photovoltaik-speicher`;
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
        <meta property="og:image" content={`${company.url}/og/green-energy-pv-speicher.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${company.url}/og/green-energy-pv-speicher.jpg`} />

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
              image: `${company.url}/og/green-energy-pv-speicher.jpg`,
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

        {/* HowTo Schema for the 7 Schritte */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "PV- & Speicherstrategie in 7 Schritten",
              step: [
                "Last- & Potenzialanalyse",
                "Zielbild & KPIs",
                "Technisches Design",
                "Wirtschaftlichkeitsmodell",
                "Recht & Netz",
                "Ausschreibung & EPC-Vergabe",
                "Rollout & Betrieb",
              ].map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s })),
            }),
          }}
        />
      </Head>

      <article lang="de" className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-10 text-zinc-900">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">{title}</h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst Stromkosten senken, Risiken dämpfen und Resilienz erhöhen? Dieser Leitfaden zeigt dir, wie du
            Photovoltaik & Batteriespeicher wirtschaftlich planst – von LCOE und Amortisation bis Förderungen, Netz und
            Betrieb.
          </p>

          {/* Hero 16:6 – Platzhalter (ideal für KI-Generierung) */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              {/* Platzhalter-Bild: Bitte ersetzen durch generiertes/zugelassenes Hero */}
              <div className="absolute inset-0 grid place-items-center bg-zinc-100">
                <div className="text-center px-6">
                  <p className="font-semibold">Hero-Visual (16:6)</p>
                  <p className="text-sm text-zinc-600">
                    Ideal: Luftaufnahme eines Industrie-/Logistikdachs mit PV-Feldern, sichtbarem Batteriespeicher im
                    Container, CFO & Techniker:in im Vordergrund – modern, progressiv, „Racing-Green“-Akzente.
                  </p>
                  <p className="text-xs mt-2 text-zinc-500">
                    KI-Prompt (16:9, dann auf 16:6 croppen): “aerial view of factory rooftop solar arrays and a container
                    battery energy storage system, modern corporate campus, sunny day, high detail, cinematic lighting,
                    emerald green accents, Germany”
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="sr-only">Industrie-Dach mit PV-Feldern und Batteriespeicher</figcaption>
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
            <TLDRItem icon={Gauge}>
              <strong>Eigenverbrauch</strong> schlägt Einspeisung: Je höher die selbst genutzte PV-Menge, desto besser die
              Amortisation. Speicher heben die Quote – und glätten Lastspitzen.
            </TLDRItem>
            <TLDRItem icon={ShieldCheck}>
              <strong>EEG & Solarpaket I</strong> sichern planbare Erlöse; <strong>KfW 270</strong> bietet zinsgünstige
              Finanzierung für PV und Speicher. Werte werden halbjährlich aktualisiert – Timing zählt.
            </TLDRItem>
            <TLDRItem icon={PiggyBank}>
              Neue Dach-PV <strong>&lt; 15 ct/kWh</strong> LCOE sind üblich; PV+Speicher bleibt oft unter Netzstromkosten von
              Unternehmen. <em>Szenario-Rechnung</em> ist Pflicht.
            </TLDRItem>
            <TLDRItem icon={LineChart}>
              <strong>Batteriepreise</strong> sind seit 2024 deutlich gefallen – das verbessert Peak-Shaving-Business-Cases und
              Autarkie.
            </TLDRItem>
            <TLDRItem icon={FileSearch}>
              <strong>Compliance</strong>: VDE-AR-N 4105/4110 und TAB 2023 früh beachten; Messkonzept & Direktvermarktung
              sauber definieren.
            </TLDRItem>
          </ul>
        </aside>

        {/* ToC */}
        <nav aria-label="Inhaltsverzeichnis" className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
                Was bringen PV & Batteriespeicher fürs Unternehmen?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
                Investition, LCOE & Amortisation
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#foerderung">
                Förderungen & Vergütung: EEG, KfW 270
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#technik">
                Technik & Netz (VDE-AR-N 4105/4110)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#vorgehen">
                Vorgehen: In 7 Schritten zur Strategie
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#risiken">
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

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sun className={`w-5 h-5 ${accent}`} />
                <strong>PV – Kurz erklärt</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <CheckLi>Direkte Stromerzeugung aus Licht, tagsüber am günstigsten.</CheckLi>
                <CheckLi>Modular skalierbar: Dach, Fassade, Carports, Freifläche.</CheckLi>
                <CheckLi>Planbare Erträge über 20–25 Jahre; Performance-Ratio heute häufig 80–90 %.</CheckLi>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <BatteryCharging className={`w-5 h-5 ${accent}`} />
                <strong>Batteriespeicher – Kurz erklärt</strong>
              </div>
              <ul className="space-y-2 text-sm">
                <CheckLi>Erhöht Eigenverbrauchsquote, verschiebt Solarstrom in teure Zeitfenster.</CheckLi>
                <CheckLi>Peak Shaving reduziert Leistungspreise und Netzentgelte (tarifabhängig).</CheckLi>
                <CheckLi>Optionale Notstrom/USV-Funktion steigert Resilienz im Betrieb.</CheckLi>
              </ul>
            </div>
          </div>

          {/* Bild 1 – Unsplash 16:6 */}
          <figure className="mt-2 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <img
                loading="lazy"
                src="https://source.unsplash.com/1600x600/?solar,rooftop,factory"
                alt="Fabrikdach mit PV-Modulen in der Sonne"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-zinc-600">
              Industrielles Dach mit PV – Kernnutzen: günstiger Eigenstrom, kalkulierbar über Jahrzehnte.
            </figcaption>
          </figure>

          {/* 2 */}
          <Anchor id="wirtschaftlichkeit" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[1].title}</h2>
          <p className="leading-relaxed mb-4">
            {sections[1].content}
          </p>

          {/* Chart */}
          <CostComparisonChart />

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <PiggyBank className={`w-5 h-5 ${accent}`} /> Typische Kostentreiber (CAPEX/OPEX)
              </h3>
              <ul className="space-y-2 text-sm">
                <CheckLi>CAPEX PV: Module, Wechselrichter, Montage, Elektrik, Planung, Statik.</CheckLi>
                <CheckLi>CAPEX Speicher: Batterie (€/kWh), Leistung (kW), Systemintegration.</CheckLi>
                <CheckLi>OPEX: Versicherung, Reinigung, Wartung, Monitoringsysteme.</CheckLi>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <LineChart className={`w-5 h-5 ${accent}`} /> Markttrends, die rechnen helfen
              </h3>
              <ul className="space-y-2 text-sm">
                <CheckLi>
                  Batteriepreise fielen 2024 auf ~115 $/kWh (Packs); 2025 nur noch leichter Rückgang – dennoch historisch
                  günstig.
                </CheckLi>
                <CheckLi>
                  EU-Referenzpreise für Unternehmensstrom (Non-household) lagen 2H/2024 bei ~0,19 €/kWh (inkl. Abgaben).
                </CheckLi>
                <CheckLi>
                  PV-Ausbau & Erneuerbare drücken Großhandelspreise – laut Jahresauswertung 2024.
                </CheckLi>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <Anchor id="foerderung" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[2].title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className={`w-5 h-5 ${accent}`} /> EEG & Vergütung – Kurzüberblick
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Pill>EEG</Pill> Feste Vergütung/Marktprämie für Dachanlagen, Werte je Größe und Einspeiseart; Anpassung
                  halbjährlich. Bundesnetzagentur veröffentlicht die „anzulegenden Werte“ je Zeitraum.
                </li>
                <li>
                  <Pill>Schneller</Pill> Solarpaket I beschleunigt Prozesse und hebt für &gt;40-kW-Dächer die Förderung an.
                </li>
                <li>
                  <Pill>Ausschreibungen</Pill> Größere Anlagen: Höchstwert 2025 im ersten Segment 6,80 ct/kWh.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <BadgeEuro className={`w-5 h-5 ${accent}`} /> Finanzierung & Steuern (Auswahl)
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Pill>KfW 270</Pill> Förderkredit für PV, Netze & Speicher – auch für Unternehmen.
                </li>
                <li>
                  <Pill>AfA</Pill> Übliche Nutzungsdauer PV 20 Jahre (lineare Abschreibung).
                </li>
                <li>
                  <Pill>§7g EStG</Pill> Sonder-AfA/Investitionsabzugsbetrag für KMU nach Voraussetzungen (Einzelfall!).
                </li>
              </ul>
            </div>
          </div>

          {/* Bild 2 – Unsplash 16:6 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <img
                loading="lazy"
                src="https://source.unsplash.com/1600x600/?battery,energy,storage,container"
                alt="Container-Batteriespeicher neben Firmengebäude"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-zinc-600">
              Batteriespeicher: Eigenverbrauch erhöhen, Leistungspreise senken, Resilienz steigern (je Tarif/Use-Case).
            </figcaption>
          </figure>

          {/* 4 */}
          <Anchor id="technik" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[3].title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Factory className={`w-5 h-5 ${accent}`} /> Relevante Regeln & Nachweise
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Pill>4105</Pill> Niederspannung bis 135 kW Wirkleistung (EZA NS).
                </li>
                <li>
                  <Pill>4110</Pill> Mittelspannung ab 135 kW inkl. Zertifikate/Protokolle (Anhang E).
                </li>
                <li>
                  <Pill>TAB 2023</Pill> Netzbetreiber-TAB präzisieren Messkonzepte & Kuppelschalter; 4110-Pflicht ≥ 135 kW.
                </li>
                <li>
                  <Pill>Speicher</Pill> FNN-Hinweise für Anschluss & Betrieb von Speichern (NS/MS).
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className={`w-5 h-5 ${accent}`} /> Speicher-Use-Cases (wirtschaftlich relevant)
              </h3>
              <ul className="text-sm space-y-2">
                <CheckLi>Eigenverbrauchsoptimierung (Lastverschiebung in teure Zeitfenster).</CheckLi>
                <CheckLi>Peak Shaving (Reduktion Leistungspreise/Netzentgelte – tarifabhängig).</CheckLi>
                <CheckLi>Backup/USV (selektive Notstromkreise, IT/Produktion).</CheckLi>
                <CheckLi>Optional: Direktvermarktung/Regelleistung (Projekt- & Marktzugang nötig).</CheckLi>
              </ul>
              <p className="mt-2 text-xs text-zinc-600">
                Studien/Leitfäden zeigen: Peak Shaving lohnt bei hohen kurzen Lastspitzen und &gt;2.500 Vollbenutzungsstunden –
                prüfe dein Lastprofil.
              </p>
            </div>
          </div>

          {/* 5 */}
          <Anchor id="vorgehen" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[4].title}</h2>
          <ol className="list-decimal ml-5 space-y-3 leading-relaxed">
            <li>
              <strong>Lastdaten sammeln:</strong> 15-min-Messwerte, max. Leistungsspitzen, Saisonalität, künftige Änderungen (E-Mobilität,
              Wärmepumpen, neue Maschinen).
            </li>
            <li>
              <strong>Flächen & Statik checken:</strong> Tragfähigkeit, Dachhaut, Brandschutz, Verschattung, Blitzschutz.
            </li>
            <li>
              <strong>Systemdesign wählen:</strong> DC-/AC-Kopplung, Hybrid-Wechselrichter, Speicher-C-Rate und DoD, Monitoring & SCADA.
            </li>
            <li>
              <strong>Business-Case modellieren:</strong> CAPEX (€/kWp; €/kWh), OPEX, Degradation, LCOE, Strompreis-Szenarien,
              Einspeisevergütung/Marktprämie, Steuern & Finanzierung.
            </li>
            <li>
              <strong>Recht & Netz sichern:</strong> EEG-Zuordnung (Teil-/Volleinspeisung), Direktvermarktung, Messkonzept, Netzanschluss,
              VDE-Nachweise.
            </li>
            <li>
              <strong>EPC beschaffen:</strong> Referenzen, Ertragsgarantien, SLA, Ersatzteile, Bauzeitenplan, Sicherheitskonzept.
            </li>
            <li>
              <strong>Inbetriebnahme & Betrieb:</strong> Abnahme, Anlagenzertifikate/Protokolle, KPI-Monitoring (Eigenverbrauch, Peaks, kWh/kWp),
              Wartung, Reinigung, Performance-Ratio.
            </li>
          </ol>

          {/* 6 */}
          <Anchor id="risiken" />
          <h2 className="text-2xl font-bold mt-12 mb-4">{sections[5].title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-rose-700" /> Vermeidbare Fehler
              </h3>
              <ul className="text-sm space-y-2">
                <li>Nur kWp „maximieren“ statt Lastprofil und Eigenverbrauch zu optimieren.</li>
                <li>Speicher ohne Peak-Shaving-Strategie – Chancen auf Einsparungen bleiben liegen.</li>
                <li>Netzbetreiber, Messkonzept und Direktvermarktung zu spät eingebunden.</li>
                <li>Steuer-/Förderthemen (EEG-Zuordnung, KfW, AfA) erst nach der Bestellung geklärt.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${accent}`} /> Gute Praktiken
              </h3>
              <ul className="text-sm space-y-2">
                <li>Variantenvergleich (mit/ohne Speicher, DC- vs. AC-Kopplung) mit klaren KPIs.</li>
                <li>LCOE- und Sensitivitätsanalyse (CAPEX, kWh/kWp, Strompreis-Szenarien).</li>
                <li>Frühe Netz-/Messkonzept-Fixierung inkl. VDE-Nachweisen & Zeitplanpuffer.</li>
                <li>Wartungs- & Ersatzteilkonzept, Reinigungsplan, Monitoring mit Alarmierung.</li>
              </ul>
            </div>
          </div>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/energiemanagement-einfuehrung">
                  Energiemanagement einführen: Lastdaten, KPIs & Einsparungen
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/ladelogistik-fuhrpark">
                  Ladeinfrastruktur & Fuhrpark: PV-Strom sinnvoll nutzen
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/ppa-fuer-unternehmen">
                  Stromverträge & PPAs für Unternehmen: Chancen & Risiken
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/netzanschluss-checkliste">
                  Netzanschluss-Checkliste: VDE-AR-N 4105/4110 & Messkonzepte
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
                q: "Wie schnell amortisiert sich eine Firmen-PV mit Speicher?",
                a: "Typisch 5–10 Jahre – abhängig von CAPEX (€/kWp, €/kWh), Eigenverbrauchsquote, Strompreis und Förderung. Speicher rechnet sich zusätzlich über Peak-Shaving. Nutze Szenario-Rechnungen (Basis/Best/Worst).",
              },
              {
                q: "Lohnt sich Volleinspeisung noch?",
                a: "Volleinspeisung bietet planbare Erlöse, aber wirtschaftlich schlägt Eigenverbrauch meist die Einspeisevergütung. Hybridlösungen (Teil- & Volleinspeisung getrennt am selben Dach) sind möglich – prüfe die aktuelle EEG-Regelung und lokale Netz-/Messkonzepte.",
              },
              {
                q: "Was kostet PV pro kWp im Gewerbe?",
                a: "Marktwerte schwanken. Seriöse Planungen kalkulieren mit ca. 1.100–1.500 €/kWp für Dach-PV und marktüblichen Speicherpreisen nach Leistung/Kapazität. Reale Angebote einholen und Sensitivitäten rechnen.",
              },
              {
                q: "Welche Normen sind wichtig?",
                a: "Bis 135 kW Wirkleistung gilt VDE-AR-N 4105 (NS); ab 135 kW VDE-AR-N 4110 (MS) inkl. Zertifikaten/Protokollen. Außerdem TAB 2023 deines Netzbetreibers sowie FNN-Hinweise für Speicher.",
              },
              {
                q: "Brauche ich zwingend Direktvermarktung?",
                a: "Für größere Anlagen (und je nach EEG-Zuordnung) ist Direktvermarktung üblich. Sie ermöglicht Marktprämie/Erlöse, braucht aber Messkonzept, Bilanzkreis und einen Vermarktervertrag.",
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
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Wie schnell amortisiert sich eine Firmen-PV mit Speicher?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Typisch 5–10 Jahre – abhängig von CAPEX (€/kWp, €/kWh), Eigenverbrauchsquote, Strompreis und Förderung. Speicher rechnet sich zusätzlich über Peak-Shaving. Nutze Szenario-Rechnungen (Basis/Best/Worst).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Lohnt sich Volleinspeisung noch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Volleinspeisung bietet planbare Erlöse, aber wirtschaftlich schlägt Eigenverbrauch meist die Einspeisevergütung. Hybridlösungen (Teil- & Volleinspeisung getrennt am selben Dach) sind möglich – prüfe die aktuelle EEG-Regelung und lokale Netz-/Messkonzepte.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was kostet PV pro kWp im Gewerbe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Marktwerte schwanken. Seriöse Planungen kalkulieren mit ca. 1.100–1.500 €/kWp für Dach-PV und marktüblichen Speicherpreisen nach Leistung/Kapazität. Reale Angebote einholen und Sensitivitäten rechnen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Normen sind wichtig?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Bis 135 kW Wirkleistung gilt VDE-AR-N 4105 (NS); ab 135 kW VDE-AR-N 4110 (MS) inkl. Zertifikaten/Protokollen. Außerdem TAB 2023 deines Netzbetreibers sowie FNN-Hinweise für Speicher.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Brauche ich zwingend Direktvermarktung?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Für größere Anlagen (und je nach EEG-Zuordnung) ist Direktvermarktung üblich. Sie ermöglicht Marktprämie/Erlöse, braucht aber Messkonzept, Bilanzkreis und einen Vermarktervertrag.",
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
            <strong>PV & Speicher im Unternehmen lohnen sich</strong> – wenn Lastprofil, Systemdesign und Förderkulisse
            zusammenpassen. Neue Dach-PV erzielt häufig LCOE unter 15 ct/kWh, Speicherpreise sind historisch niedrig,
            und EEG/KfW sorgen für Planungssicherheit. Entscheidend sind eine saubere Datenbasis, ein realistisches
            Business-Case-Modell (mit Sensitivitäten) und ein früh geklärtes Netz-/Messkonzept (VDE-konform). Wer
            Eigenverbrauchsquote und Peak-Shaving gezielt optimiert, erreicht kurze Amortisationszeiten und macht seine
            Energieversorgung resilienter.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">PV-/Speicher-Wirtschaftlichkeits-Check gewünscht?</h2>
            <p className="text-zinc-700 mb-4">
              Wir analysieren Lastdaten & Förderkulisse und liefern ein belastbares Konzept inklusive Mess-/Netz-Design
              und Amortisationsrechnung.
            </p>

            {/* Nur UI – kein echtes Submit */}
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
            <img src={author.image} alt="Autor" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role}. Fokus: PV-Business-Cases, Speicher-Use-Cases & Netzanschluss in der Praxis.
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
              Fraunhofer ISE (2025): Aktuelle Fakten zur Photovoltaik in Deutschland – Fassung vom 18.08.2025.
            </li>
            <li>
              Fraunhofer ISE (2024): Stromgestehungskosten erneuerbare Energien – Deutschland 2024 (PV & PV+Speicher LCOE).
            </li>
            <li>
              Bundesnetzagentur: EEG-Förderung & anzulegende Werte (PV), Einspeisevergütung/Direktvermarktung (laufend aktualisiert).
            </li>
            <li>
              BMWK: Solarpaket I – Änderungen für Dachanlagen & Prozesse.
            </li>
            <li>
              KfW 270: Erneuerbare Energien – Standard (PV, Speicher, Netze).
            </li>
            <li>
              Eurostat: Electricity prices for non-household consumers – 2H/2024 Referenzwerte.
            </li>
            <li>
              BNEF (2024): Battery pack prices fell to 115 $/kWh – Trendfortschreibung 2025.
            </li>
            <li>
              VDE-AR-N 4105/4110, TAB 2023 (BDEW) & FNN-Hinweise für Speicher – Netz & Zertifizierung.
            </li>
            <li>
              Solarzentrum Berlin (2025): Gewerbe & PV – Peak Shaving & Speicher-Einsatz.
            </li>
            <li>
              Agora Energiewende (2025): Jahresauswertung 2024 – Einfluss Erneuerbarer auf Strompreise & Emissionen.
            </li>
          </ul>
        </section>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
          <dl className="rounded-2xl border border-zinc-200 divide-y">
            <GlossaryRow
              term="Eigenverbrauchsquote"
              def="Anteil der PV-Erzeugung, der direkt vor Ort verbraucht wird (ohne Netzdurchlauf) – entscheidend für die Wirtschaftlichkeit."
            />
            <GlossaryRow
              term="LCOE / Stromgestehungskosten"
              def="Durchschnittliche Erzeugungskosten je kWh über Lebensdauer der Anlage inkl. CAPEX, OPEX, Degradation."
            />
            <GlossaryRow
              term="Marktprämie"
              def="EEG-Förderinstrument in der Direktvermarktung: Ausgleich zwischen Marktpreis und anzulegendem Wert."
            />
            <GlossaryRow
              term="Direktvermarktung"
              def="Vermarktung des PV-Stroms über einen Stromhändler (Bilanzkreis), statt fester Einspeisevergütung."
            />
            <GlossaryRow
              term="Peak Shaving"
              def="Reduktion von Lastspitzen mittels Batteriespeicher/Lastmanagement, um Leistungspreise/Netzentgelte zu senken."
            />
          </dl>
        </section>
      </article>
    </>
  );
}
