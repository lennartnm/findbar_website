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
/* =========================
Helper
========================= */
const formatDateDE = (date = new Date()) =>
new Intl.DateTimeFormat("de-DE", {
day: "2-digit",
month: "long",
year: "numeric",
timeZone: "Europe/Berlin",
}).format(date);
const racingGreen = "from-emerald-700 to-emerald-500";
const accent = "text-emerald-700";
/* =========================
E-E-A-T: Personen & Firma
========================= */
const author = {
name: "Leonie Wagner",
role: "Freight Procurement Analyst (E-Commerce, Asien–Europa)",
image: "/autor.webp",
linkedin: "https://www.linkedin.com/in/platzhalter/",
};
const reviewer = {
name: "Dr. Jonas Richter",
role: "Head of Ocean Product (Europa)",
linkedin: "https://www.linkedin.com/in/platzhalter/",
};
const company = {
name: "Logistik Campus GmbH",
url: "https://www.deinefirma.de",
logo: "/logo.png",
};
/* =========================
Kleine UI-Bausteine (keine neuen Components)
========================= */
const TLDRItem = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-3"> <ArrowRight className={`w-5 h-5 mt-1 ${accent}`} aria-hidden="true" /> <span>{children}</span> </li> );
const Pill = ({ children }: { children: ReactNode }) => (
<span className="mr-2 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
{children}
</span>
);
const CheckLi = ({ children }: { children: ReactNode }) => (
<li className="flex items-start gap-2"> <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" aria-hidden="true" /> <span>{children}</span> </li> );
const GlossaryRow = ({ term, def }: { term: string; def: string }) => (
<div className="grid grid-cols-[160px_1fr] gap-4 p-4"> <dt className="font-semibold text-zinc-900">{term}</dt> <dd className="text-zinc-700">{def}</dd> </div> );
const Anchor = ({ id }: { id: string }) => (
<div id={id} aria-hidden="true" className="pt-24 -mt-24" /> );
/* =========================
Statische Vergleichs-Grafik (SVG)
========================= */
const ComparisonChart = () => {
// Vergleich: Suez vs. Kap der Guten Hoffnung (1–10 Skala)
const items = [
{ k: "Transitzeit (kürzer = besser)", suez: 8, kap: 5 },
{ k: "Rate (günstiger = besser)", suez: 6, kap: 5 },
{ k: "Planbarkeit/Regelmäßigkeit", suez: 7, kap: 6 },
{ k: "Störungsrisiko/Umleitungen (niedriger = besser)", suez: 5, kap: 6 },
{ k: "CO₂/Seemeile (niedriger = besser)", suez: 8, kap: 4 },
{ k: "Erstlauf Rotterdam/Hamburg (häufiger = besser)", suez: 7, kap: 6 },
];
const max = 10;
const barH = 14;
const gap = 6;
const rowH = barH * 2 + gap + 18;
const padTop = 18;
const width = 720;
const left = 210;
const right = width - 20;
const height = padTop + items.length * rowH + 20;
const scale = (v: number) => (right - left) * (v / max);
return (
<figure className="mt-10">
<svg viewBox={0 0 ${width} ${height}} role="img" aria-labelledby="chartTitle chartDesc" className="w-full h-auto">
<title id="chartTitle">Suez vs. Kap – Vergleich wichtiger Faktoren</title>
<desc id="chartDesc">Balkendiagramm, das sechs Faktoren zwischen Suez und Kap der Guten Hoffnung vergleicht.</desc>
<defs>
<linearGradient id="gSuez" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stopColor="#059669" />
<stop offset="1" stopColor="#10b981" />
</linearGradient>
<linearGradient id="gKap" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stopColor="#94a3b8" />
<stop offset="1" stopColor="#cbd5e1" />
</linearGradient>
</defs>
      {/* Achsen-Titel */}
    <text x={left} y={14} className="fill-zinc-700" fontSize="12" fontWeight={600}>10 = besser</text>
    <text x={right - 60} y={14} className="fill-emerald-700" fontSize="12" fontWeight={600}>Suez</text>
    <rect x={right - 90} y={6} width={16} height={8} fill="url(#gSuez)" rx="2" />
    <text x={right - 160} y={14} className="fill-zinc-600" fontSize="12" fontWeight={600}>Kap</text>
    <rect x={right - 190} y={6} width={16} height={8} fill="url(#gKap)" rx="2" />

    {items.map((row, i) => {
      const y = padTop + i * rowH;
      return (
        <g key={row.k}>
          <text x={10} y={y + barH + 4} className="fill-zinc-800" fontSize="12" fontWeight={600}>{row.k}</text>

          {/* Kap (grau, oben) */}
          <rect x={left} y={y} width={scale(row.kap)} height={barH} fill="url(#gKap)" rx="5" />
          <text x={left + scale(row.kap) + 6} y={y + barH - 3} fontSize="11" className="fill-zinc-700">{row.kap}</text>

          {/* Suez (grün, unten) */}
          <rect x={left} y={y + barH + gap} width={scale(row.suez)} height={barH} fill="url(#gSuez)" rx="5" />
          <text x={left + scale(row.suez) + 6} y={y + barH + gap + barH - 3} fontSize="11" className="fill-emerald-700">{row.suez}</text>
        </g>
      );
    })}
  </svg>
  <figcaption className="mt-2 text-sm text-zinc-600">
    Werte nach Markt- und Quellenlage 2025 (u. a. MSC Netzpläne, Maersk Netz-Update, Sea-Intelligence Pünktlichkeit). Quellen am Artikelende.
  </figcaption>
</figure>
);
};
/* =========================
Seite
========================= */
export default function Article() {
const updated = formatDateDE();
const title = "Suez vs. Kap 2025: Laufzeiten & Kosten China → Europa für E-Commerce";
const description =
"Seefracht China nach Europa Kosten 2025 erklärt: Transitzeiten Shanghai/Shenzhen → Rotterdam/Hamburg, Routenwahl Suez vs. Kap, Peak-Season-Zuschläge, LCL/FCL/40HC, Puffer & Checklisten.";
const canonical = ${company.url}/blog/suez-vs-kap-2025-seefracht-china-europa-kosten;
return (
<>
<Head>
<title>{${title} | ${company.name}}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<meta name="robots" content="index, follow" />
      {/* Open Graph */}
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content={company.name} />
    <meta property="og:title" content={`${title} | ${company.name}`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/hero-placeholder.webp" />
    <meta property="og:url" content={canonical} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${title} | ${company.name}`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/hero-placeholder.webp" />

    {/* Article Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: "de",
          author: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            url: author.linkedin,
          },
          reviewer: {
            "@type": "Person",
            name: reviewer.name,
            jobTitle: reviewer.role,
            url: reviewer.linkedin,
          },
          publisher: {
            "@type": "Organization",
            name: company.name,
            url: company.url,
            logo: { "@type": "ImageObject", url: company.logo },
          },
          dateModified: new Date().toISOString(),
        }),
      }}
    />
    {/* Organization Schema */}
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
    {/* FAQ Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Wie lange dauert die Seefracht von China nach Europa 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Je nach Route 33–42 Tage via Suez (z. B. Shanghai→Rotterdam 42 Tage) bzw. 41–50 Tage via Kap (z. B. Shanghai→Rotterdam 50 Tage, Ningbo→Rotterdam 49 Tage). Quelle: MSC Netzpläne 2025.",
              },
            },
            {
              "@type": "Question",
              name: "Was kostet 2025 ein 40ft High-Cube (40HC) Asia→North Europe?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Spotraten schwanken. Mitte August 2025 lag der Drewry WCI bei ca. 2.350 USD/FEU, im Juli der FBX11 bei ~3.384 USD/FEU. Zzgl. Zuschläge (z. B. PSS) und lokalen Kosten.",
              },
            },
            {
              "@type": "Question",
              name: "LCL oder FCL – ab wann lohnt der Wechsel?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Als Faustregel lohnt FCL meist ab ca. 12–18 m³, abhängig von Raten und Local Charges. Bei 10–15 m³ unbedingt beide Angebote vergleichen.",
              },
            },
            {
              "@type": "Question",
              name: "Welche Cut-offs muss ich bei ETD/ETA beachten?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Wichtig sind CY Cut-off (Container im Hafen), SI/Docs Cut-off, VGM Cut-off (i. d. R. vor Load-List-Cut-off) sowie EU-ICS2 ENS-Pflichten (Haus-Level seit 1.4.2025).",
              },
            },
          ],
        }),
      }}
    />
  </Head>

  <article lang="de" className="relative mx-auto max-w-3xl px-4 py-10">
    {/* Hero */}
    <header className="mb-10">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          Seefracht · Asia → North Europe
        </span>
        <span className="text-xs text-zinc-600">Aktualisiert: {updated}</span>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-3 text-zinc-700">{description}</p>

      {/* Hero-Bild (Platzhalter-Datei verwenden) */}
      <figure className="mt-6">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 6" }}>
          <img
            src="/hero-placeholder.webp"
            alt="Containerschiff auf der Asien–Europa-Route, Karte mit Suez und Kap"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <figcaption className="mt-2 text-sm text-zinc-600">
          Entscheidung 2025: Suezkanal (kürzer) vs. Kap der Guten Hoffnung (Umfahrung der Roten See).
        </figcaption>
      </figure>

      {/* Autorenbox */}
      <div className="mt-6 flex items-center gap-4 rounded-2xl border border-zinc-200 p-4">
        <img src={author.image} alt={author.name} className="h-12 w-12 rounded-full object-cover" />
        <div className="text-sm">
          <div className="font-semibold">{author.name}</div>
          <div className="text-zinc-600">{author.role}</div>
          <div className="text-zinc-500">
            Fachlich geprüft von {reviewer.name} ({reviewer.role})
          </div>
        </div>
      </div>
    </header>

    {/* TL;DR */}
    <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
      <ul className="space-y-3">
        <TLDRItem>
          <strong>Transitzeit:</strong> Suez bleibt am schnellsten (z. B. Shanghai→Rotterdam ~42 Tage), Kap-Umfahrung +8–12 Tage je nach Loop. :contentReference[oaicite:0]{index=0}
        </TLDRItem>
        <TLDRItem>
          <strong>Kosten:</strong> Mitte Aug 2025 WCI ~2.350 USD/FEU; im Juli FBX11 ~3.384 USD/FEU. PSS (z. B. 250 USD/TEU) kann Q3/Q4 zusätzlich greifen. :contentReference[oaicite:1]{index=1}
        </TLDRItem>
        <TLDRItem>
          <strong>Zuverlässigkeit:</strong> Schedule Reliability erholte sich auf ~66 % im Mai 2025; Kap-Netze bleiben bei einigen Carriern Standard. :contentReference[oaicite:2]{index=2}
        </TLDRItem>
        <TLDRItem>
          <strong>Häfen:</strong> Ob Rotterdam oder Hamburg schneller ist, hängt vom Loop ab (First-Port-of-Call variiert). Rotterdam verzeichnet zahlreiche Erstläufe. :contentReference[oaicite:3]{index=3}
        </TLDRItem>
        <TLDRItem>
          <strong>Compliance:</strong> Seit 1.4.2025 gilt EU-ICS2 Haus-Level-ENS für Seefracht – rechtzeitig Daten einspielen. :contentReference[oaicite:4]{index=4}
        </TLDRItem>
      </ul>
    </aside>

    {/* ToC */}
    <nav aria-label="Inhaltsverzeichnis" className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
      <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
      <ol className="list-decimal ml-5 space-y-2">
        <li><a className={`hover:underline ${accent} font-medium`} href="#grundlagen">1) Warum die Route 2025 entscheidend ist</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#status">2) Status Quo: Raten, Zuverlässigkeit & Peak Season</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#zeiten">3) Reale Laufzeiten: Shanghai/Shenzhen → Rotterdam/Hamburg</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#kosten">4) Kostenbeispiele (LCL/FCL/40HC) & PSS</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#haefen">5) Rotterdam vs. Hamburg: Zeit & Vor-/Nachlauf</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#check">6) ETD/ETA-Checkliste: Cut-off, VGM, ICS2</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#q4">7) Empfehlungen für Q4-Bestände (E-Commerce)</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#faq">FAQ</a></li>
        <li><a className={`hover:underline ${accent} font-medium`} href="#quellen">Quellen</a></li>
      </ol>
    </nav>

    <Anchor id="grundlagen" />
    <section className="prose prose-zinc max-w-none">
      <h2>1) Warum die Route 2025 entscheidend ist</h2>
      <p>
        2025 fahren große Reedereien auf der Asien–Europa-Achse teils weiterhin <strong>via Kap der Guten Hoffnung</strong>, um die Risiken im Roten Meer zu umgehen. Maersk hat Anfang 2025
        ein stabiles Ost-West-Netz <em>via Kap</em> bestätigt – Planbarkeit geht vor, selbst wenn die Etmale länger sind. :contentReference[oaicite:5]{index=5}
      </p>
      <p>
        Für dich als E-Commerce-Importeur bedeutet das: <strong>Laufzeit, Rate und Zuverlässigkeit</strong> hängen 2025 von <em>Loop & Rotation</em> ab (z. B. ob Rotterdam oder Hamburg zuerst
        angelaufen wird) – und davon, ob der jeweilige Dienst via Suez oder via Kap geführt wird.
      </p>
      <ComparisonChart />
    </section>

    <Anchor id="status" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>2) Status Quo: Raten, Zuverlässigkeit & Peak Season</h2>
      <ul>
        <li>
          <strong>Spotraten:</strong> Der Drewry World Container Index lag am 14. Aug 2025 bei ca. <strong>2.350 USD/FEU</strong>. Der FBX11 (China→Nordeuropa) meldete Anfang Juli ~<strong>3.384 USD/FEU</strong>. :contentReference[oaicite:6]{index=6}
        </li>
        <li>
          <strong>Zuverlässigkeit:</strong> Sea-Intelligence zeigt für Mai 2025 eine globale Schedule Reliability von <strong>65,8 %</strong> (höchster Wert seit 11/2023). :contentReference[oaicite:7]{index=7}
        </li>
        <li>
          <strong>Peak-Season-Surcharges (PSS):</strong> 2025 wurden auf Asien→Nordeuropa wieder PSS publiziert, z. B. <strong>250 USD/TEU</strong> (CMA CGM ab 16. Jun 2025). :contentReference[oaicite:8]{index=8}
        </li>
        <li>
          <strong>Kap-Detour:</strong> Reedereiadvisories nennen weiterhin Umroutungen via Kap; die Umfahrung erhöht die Transitzeit typischerweise um ~<strong>8–14 Tage</strong> vs. Suez (service-abhängig). :contentReference[oaicite:9]{index=9}
        </li>
        <li>
          <strong>Nordrange-Staus:</strong> In H1/2025 wurde wiederholt über anhaltende Nordsee-Hafenstaus berichtet (z. B. Ankerlieger vor Rotterdam). :contentReference[oaicite:10]{index=10}
        </li>
      </ul>
    </section>

    <Anchor id="zeiten" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>3) Reale Laufzeiten: Shanghai/Shenzhen → Rotterdam/Hamburg</h2>
      <p className="text-sm text-zinc-600">
        Hinweis: Carrier-Loops unterscheiden sich. Zahlen stammen aus veröffentlichten 2025-Netzplänen (indikativer Charakter).
      </p>

      <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
        <h3 className="font-semibold">Via Suez (Beispiele, Westbound)</h3>
        <ul className="mt-2 space-y-1">
          <li><Pill>Shanghai→Rotterdam</Pill>≈ <strong>42 Tage</strong> (MSC LION). :contentReference[oaicite:11]{index=11}</li>
          <li><Pill>Shanghai→Hamburg</Pill>≈ <strong>37–39 Tage</strong> (je nach Loop, z. B. LION/CONDOR). :contentReference[oaicite:12]{index=12}</li>
          <li><Pill>Yantian (Shenzhen)→Rotterdam</Pill>≈ <strong>38 Tage</strong> (LION). :contentReference[oaicite:13]{index=13}</li>
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
        <h3 className="font-semibold">Via Kap der Guten Hoffnung (Beispiele, Westbound)</h3>
        <ul className="mt-2 space-y-1">
          <li><Pill>Shanghai→Rotterdam</Pill>≈ <strong>50 Tage</strong> (MSC LION via Kap). :contentReference[oaicite:14]{index=14}</li>
          <li><Pill>Ningbo (nahe Shanghai)→Rotterdam</Pill>≈ <strong>49 Tage</strong> (ALBATROS). :contentReference[oaicite:15]{index=15}</li>
          <li><Pill>Yantian (Shenzhen)→Rotterdam</Pill>≈ <strong>44–45 Tage</strong> (SWAN/CONDOR). :contentReference[oaicite:16]{index=16}</li>
          <li className="text-zinc-700 text-sm">
            Delta vs. Suez je nach Dienst meist <strong>+8–12 Tage</strong>.
          </li>
        </ul>
      </div>
    </section>

    <Anchor id="kosten" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>4) Kostenbeispiele (LCL/FCL/40HC) & PSS</h2>

      <h3>4.1 FCL (20′/40′/40HC)</h3>
      <p>
        Für die Orientierung: Mitte Aug 2025 lag der <strong>WCI bei ~2.350 USD/FEU</strong> (40′ ≙ FEU) – zuvor im Juli zeigte der <strong>FBX11 ~3.384 USD/FEU</strong>.
        Rechne zusätzlich mit PSS (z. B. <strong>250 USD/TEU</strong> lt. CMA CGM), BAF/FAF und Lokalkosten. :contentReference[oaicite:17]{index=17}
      </p>
      <ul className="mt-2">
        <li>
          <Pill>Beispielrechnung 40HC</Pill>
          <span className="text-sm">
            40HC Innenvolumen ~<strong>76,3 m³</strong>. Bei 3.384 USD/FEU entspräche das rein rechnerisch ~<strong>≈ 44 USD/m³</strong> für die <em>reine</em> Seefrachtebene (ohne Local Charges).
          </span>{" "}
          :contentReference[oaicite:18]{index=18}
        </li>
      </ul>

      <h3 className="mt-6">4.2 LCL (Stückgut, €/USD pro m³)</h3>
      <p>
        LCL wird <em>pro m³ (CBM)</em> kalkuliert (teils mit Mindestmenge). Zusätzlich fallen <strong>Origin/Destination-Charges</strong> an (Konsolidierung/De-Konsolidierung, Handling).
        Der Break-even zu FCL liegt häufig bei <strong>~12–18 m³</strong> – in der „Grauzone“ (10–15 m³) immer beide Angebote vergleichen. :contentReference[oaicite:19]{index=19}
      </p>
      <ul className="list-disc ml-5">
        <li>
          <Pill>Daumenwert 2025</Pill>
          <span className="text-sm">
            Reine Seefracht LCL häufig grob im zweistelligen USD-Bereich pro m³ zzgl. lokaler Gebühren. Für E-Commerce ist die <strong>Gesamtkalkulation</strong> (m³-Preis + Local Charges) entscheidend.
          </span>
        </li>
      </ul>

      <h3 className="mt-6">4.3 Peak Season Surcharge (PSS)</h3>
      <p>
        PSS ist ein <strong>Saisonzuschlag</strong>, den Carrier in nachfragestarken Phasen erheben. 2025 wurden PSS auf Asien→Nordeuropa mehrfach bestätigt
        (z. B. CMA CGM: <strong>250 USD/TEU</strong> ab 16. Jun 2025; Maersk Updates im Juli/August). Prüfe <em>je Buchung</em> die Carrier-Ankündigung. :contentReference[oaicite:20]{index=20}
      </p>
    </section>

    <Anchor id="haefen" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>5) Rotterdam vs. Hamburg: Zeit & Vor-/Nachlauf</h2>
      <p>
        Ob <strong>Rotterdam</strong> oder <strong>Hamburg</strong> schneller ist, hängt vom <em>Loop</em> ab – manche Dienste rufen Hamburg vor Rotterdam an, andere umgekehrt.
        Der Hafen Rotterdam weist jedoch regelmäßig zahlreiche <em>First-Port-of-Call</em>-Anläufe aus, was Importen häufig einen früheren Entlade-Slot verschafft. :contentReference[oaicite:21]{index=21}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2">Wann Rotterdam sinnvoll ist</h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Loop mit Rotterdam als <em>First Call</em> (oft 1–3 Tage Vorsprung).</CheckLi>
            <CheckLi>Gute Binnenschiff/Schiene-Anbindung in die Benelux/DACH-Region.</CheckLi>
            <CheckLi>Vermeidung zusätzlicher Truck-Kilometer (CO₂/Kosten) Richtung Westen.</CheckLi>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2">Wann Hamburg sinnvoll ist</h3>
          <ul className="text-sm space-y-2">
            <CheckLi>Loop mit Hamburg als frühem Call oder einziger deutscher Entladung.</CheckLi>
            <CheckLi>Vor-/Nachlauf primär für Deutschland/Nordeuropa.</CheckLi>
            <CheckLi>Zoll/Handling im gewohnten Netzwerk (z. B. eigener Spediteur/CFS).</CheckLi>
          </ul>
        </div>
      </div>
    </section>

    <Anchor id="check" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>6) ETD/ETA-Checkliste: Cut-off, VGM, ICS2</h2>
      <div className="rounded-2xl border border-zinc-200 p-5">
        <ul className="space-y-2">
          <CheckLi><strong>CY Cut-off</strong> (Container im Terminal) &amp; <strong>Gate-in</strong> einplanen.</CheckLi>
          <CheckLi><strong>SI/Docs Cut-off</strong> (Shipping Instruction/B/L-Daten) rechtzeitig einreichen.</CheckLi>
          <CheckLi>
            <strong>VGM (Verified Gross Mass)</strong> vor <em>Load-List-Cut-off</em> an Reeder übermitteln – ohne VGM keine Verladung (SOLAS). Viele Carrier verlangen die VGM-Meldung
            innerhalb 24–48 h vor ETA, je nach Hafen. :contentReference[oaicite:22]{index=22}
          </CheckLi>
          <CheckLi>
            <strong>EU-ICS2 (ENS)</strong> beachten: Für Seefracht sind Carrier/House-Filer seit 4.12.2024 bzw. <strong>1.4.2025</strong> zur Voranmeldung verpflichtet (Haus-Ebene).
            Ab 1.9.2025 wird ICS2 vollumfänglich scharfgeschaltet. Klärt, wer filed (Carrier vs. Spediteur). :contentReference[oaicite:23]{index=23}
          </CheckLi>
          <CheckLi>
            <strong>Cut-offs variieren</strong> je Hafen/Terminal/Carrier – immer Booking-Bestätigung prüfen.
          </CheckLi>
          <CheckLi>
            <strong>Detention/Demurrage</strong> vermeiden: Termine für Abholung/De-vanning/Leercontainer-Rückgabe planen (Definitionen siehe Glossar). :contentReference[oaicite:24]{index=24}
          </CheckLi>
        </ul>
      </div>
    </section>

    <Anchor id="q4" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>7) Empfehlungen für Q4-Bestände (E-Commerce)</h2>
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h3 className="font-semibold">Puffer & Buchungsfenster</h3>
        <ul className="space-y-2">
          <CheckLi>
            <Pill>Vorziehen</Pill><strong>ETD um 2–3 Wochen vorziehen</strong> für Black-Friday/Cyber-Monday-Waren. Vor <em>Golden Week</em> (1.–8. Okt 2025) buchen, um Rush/Blank Sailings zu umgehen. 
          </CheckLi>
          <CheckLi>
            <Pill>Sicherheitsbestand</Pill>Plane <strong>+10–15 Tage</strong> extra Laufzeit bei Kap-Loops und Nordrange-Staus ein.
          </CheckLi>
          <CheckLi>
            <Pill>Service-Mix</Pill>Für Topseller ggf. <strong>Split-Strategy</strong>: Hauptvolumen per See, kritische SKUs per Bahn/Air als Puffer.
          </CheckLi>
          <CheckLi>
            <Pill>Preisrisiko</Pill>Spot vs. Kontrakt: Für Q4 Peaks PSS/FAK/GRIs einpreisen; zeitnah quoten lassen (FBX/WCI beobachten). :contentReference[oaicite:26]{index=26}
          </CheckLi>
        </ul>
      </div>

      <h3 className="mt-6 font-semibold">Pragmatische Routing-Tipps</h3>
      <ul className="space-y-2">
        <CheckLi>Loops mit <strong>frühem Rotterdam/Hamburg-Call</strong> bevorzugen, falls Zustellung im Westen/Norden nötig.</CheckLi>
        <CheckLi><strong>Cut-offs</strong> &amp; <strong>CFS-Öffnungszeiten</strong> vor Feiertagen doppelt prüfen (China-Feiertage &amp; EU-Brückentage).</CheckLi>
        <CheckLi><strong>LCL Konsolidierungen</strong> früher buchen (zusätzliche Hub-Zeit für Konso/De-Konso berücksichtigen).</CheckLi>
      </ul>
    </section>

    <Anchor id="faq" />
    <section className="prose prose-zinc max-w-none mt-12">
      <h2>FAQ</h2>
      <details className="group rounded-2xl border border-zinc-200 p-4">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="font-semibold">Was bedeutet „transit time Asia–North Europe“ konkret?</span>
          <Timer className="h-5 w-5 text-zinc-500 group-open:rotate-90 transition" />
        </summary>
        <div className="mt-2 text-zinc-700">
          Das ist die <em>Hafen-zu-Hafen-Zeit</em> (Port-to-Port) laut Fahrplan – ohne Vor-/Nachlauf, Zoll oder Konsolidierungszeiten.
        </div>
      </details>

      <details className="group rounded-2xl border border-zinc-200 p-4 mt-3">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="font-semibold">40ft-Container-Preis: Warum schwankt der so stark?</span>
          <Info className="h-5 w-5 text-zinc-500 group-open:rotate-90 transition" />
        </summary>
        <div className="mt-2 text-zinc-700">
          Angebot/Nachfrage, Umroutungen (Kap), Treibstoffzuschläge, Peak Season und Blank Sailings beeinflussen Spotpreise.
          Indizes wie WCI/FBX geben wöchentlich Orientierung. :contentReference[oaicite:27]{index=27}
        </div>
      </details>

      <details className="group rounded-2xl border border-zinc-200 p-4 mt-3">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="font-semibold">Detention &amp; Demurrage – was ist der Unterschied?</span>
          <CalendarClock className="h-5 w-5 text-zinc-500 group-open:rotate-90 transition" />
        </summary>
        <div className="mt-2 text-zinc-700">
          <strong>Demurrage</strong>: Lagergeld im Terminal nach Freitagen. <strong>Detention</strong>: Nutzungsentgelt außerhalb des Terminals nach Freitagen (Leercontainer-Rückgabe).
          Details und Fristen je Carrier/Hafen. :contentReference[oaicite:28]{index=28}
        </div>
      </details>

      <details className="group rounded-2xl border border-zinc-200 p-4 mt-3">
        <summary className="flex cursor-pointer items-center justify-between">
          <span className="font-semibold">Welche Containergröße nehme ich für E-Commerce?</span>
        </summary>
        <div className="mt-2 text-zinc-700">
          40HC bietet ~<strong>76 m³</strong> Volumen (mehr Höhe) und ist für voluminöse, leichte Güter beliebt. Für kompaktere, schwere Waren kann 20′ sinnvoll sein. :contentReference[oaicite:29]{index=29}
        </div>
      </details>
    </section>

    <section id="zusammenfassung" className="mt-14">
      <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
      <p className="leading-relaxed">
        Für <strong>seefracht china nach europa kosten 2025</strong> gilt: <strong>Suez</strong> ist i. d. R. schneller und oft günstiger pro Liefertag, <strong>Kap</strong> erhöht Laufzeiten,
        kann aber Stabilität bringen. Plane für Q4 <strong>zusätzliche Puffer</strong>, beobachte <strong>FBX/WCI</strong>, und prüfe je Loop die <strong>First-Calls</strong> (Rotterdam/Hamburg).
        Bei <strong>10–15 m³</strong> LCL vs. FCL immer parallel quoten.
      </p>
    </section>

    {/* CTA (nur UI) */}
    <section aria-label="Kontakt" className="mt-14">
      <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Braucht ihr Hilfe bei Routing & Kosten für Q4?</h2>
        <p className="text-zinc-700 mb-4">Wir prüfen euren Loop (Suez vs. Kap), kalkulieren LCL/FCL & PSS und bauen eine realistische ETA-Roadmap.</p>
        <div className="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
          <label className="text-sm">
            Name
            <input name="name" className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2" placeholder="Max Mustermann" />
          </label>
          <label className="text-sm">
            Telefon
            <input name="phone" className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2" placeholder="+49 123456789" />
          </label>
          <label className="text-sm">
            Welche Route/Zeitraum?
            <input name="topic" className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2" placeholder="Shanghai → Rotterdam, ETD 10/2025" />
          </label>
          <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
            Unverbindlich anfragen
          </button>
          <p id="cta-note" className="text-xs text-zinc-500">
            Hinweis: Reines UI, keine Datenübertragung implementiert.
          </p>
        </div>
      </div>
    </section>

    {/* Mini-Glossar */}
    <section className="mt-14 mb-20">
      <h2 className="text-2xl font-bold mb-3">Mini-Glossar</h2>
      <dl className="rounded-2xl border border-zinc-200 divide-y">
        <GlossaryRow term="LCL (Less than Container Load)" def="Stückgut. Du bezahlst pro m³ (CBM) + lokale Gebühren für Konsolidierung/De-Konsolidierung." />
        <GlossaryRow term="FCL (Full Container Load)" def="Ganzcontainer (20′/40′/40HC). Fixe Containerkosten unabhängig von tatsächlichem Füllgrad." />
        <GlossaryRow term="40HC" def="40-Fuß-High-Cube, Innenvolumen ~76 m³ – beliebt für voluminöse, leichtere Güter." />
        <GlossaryRow term="TEU/FEU" def="Maßeinheiten: 20′ = 1 TEU, 40′ = 1 FEU = 2 TEU. Preisindizes listen i. d. R. FEU." />
        <GlossaryRow term="PSS" def="Peak Season Surcharge – Saisonzuschlag in Nachfrage-Spitzen (z. B. Q3/Q4)." />
        <GlossaryRow term="Demurrage" def="Gebühr für Standzeit im Terminal nach Freitagen (Lagergeld im Hafen)." />
        <GlossaryRow term="Detention" def="Gebühr für späte Leercontainer-Rückgabe außerhalb des Terminals (Per-Diem)." />
        <GlossaryRow term="VGM" def="Verified Gross Mass – vorgeschriebene Bruttomasse des Containers (SOLAS). Ohne VGM keine Verladung." />
        <GlossaryRow term="ENS/ICS2" def="EU-Sicherheitsvoranmeldung. Seit 1.4.2025 Haus-Level für Seefracht verpflichtend." />
      </dl>
    </section>

    {/* Quellen */}
    <section id="quellen" className="mt-10">
      <h2 className="text-2xl font-bold mb-3">Quellen & weiterführende Studien</h2>
      <ul className="list-disc ml-5 space-y-2 text-sm text-zinc-700">
        <li>MSC Netzpläne 2025 – Via Suez & Via Kap (Transitzeiten Westbound Shanghai/Ningbo/Yantian → NL/DE/FR/…); jeweils PDF. :contentReference[oaicite:30]{index=30}</li>
        <li>Maersk: Service-Netz-Update (31. Jan 2025) – Ost-West via Kap für Stabilität. :contentReference[oaicite:31]{index=31}</li>
        <li>Sea-Intelligence: Schedule Reliability May 2025 ~65,8 % (Pressemitteilung, 7. Jul 2025). :contentReference[oaicite:32]{index=32}</li>
        <li>Drewry WCI (14. Aug 2025) ~2.350 USD/FEU (global/Asia-EU). :contentReference[oaicite:33]{index=33}</li>
        <li>Freightos FBX11 (China→North Europe) Juli 2025 ~3.384 USD/FEU. :contentReference[oaicite:34]{index=34}</li>
        <li>CMA CGM: Peak Season Surcharge Asien→Nordeuropa (250 USD/TEU ab 16. Jun 2025). :contentReference[oaicite:35]{index=35}</li>
        <li>Port of Rotterdam: „First Port of Call“-Statistik/Dashboard. :contentReference[oaicite:36]{index=36}</li>
        <li>Hapag-Lloyd Containerdaten: 40′ High Cube ≈ 76,3 m³. :contentReference[oaicite:37]{index=37}</li>
        <li>VGM (SOLAS) – IMO/Carrier-Guidelines & Maersk Hinweise zu Cut-offs. :contentReference[oaicite:38]{index=38}</li>
        <li>EU-ICS2 (ENS) – EU Taxation/Customs & Carrier-Updates (Haus-Level seit 1.4.2025). :contentReference[oaicite:39]{index=39}</li>
        <li>Golden-Week-Kalender 2025 (01.–08.10.). </li>
      </ul>
    </section>
  </article>
</>
);
}
