import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Energieberater & PV-Projektmanager",
  avatar: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "M.Sc. Elektrotechnik, Energieplanung",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  mail: "muster@beispiel.de",
  phone: "+49 123456789",
  canonical: "https://www.muster-gmbh.de/blog/photovoltaik-unternehmen-2025",
};

export default function PhotovoltaikUnternehmen2025() {
  const title =
    "Photovoltaik für Unternehmen 2025: Lohnt sich eine PV-Anlage noch? | Muster GmbH";
  const description =
    "Rechnet sich eine PV-Anlage 2025 für Unternehmen? Aktuelle Vergütungssätze, Eigenverbrauch, Steuern & Förderungen – mit Rechenbeispielen und Checklisten.";
  const dateModified = "2025-08-28";
  const datePublished = "2025-08-28";

  const faqItems = [
    {
      q: "Ab welcher Größe lohnt sich PV im Gewerbe?",
      a: "Oft ab ca. 30–50 kWp, wenn tagsüber konstant Strom benötigt wird. Entscheidend sind dein Lastprofil, die Dachfläche und ob mindestens 40–60 % des Solarstroms direkt im Betrieb genutzt werden.",
    },
    {
      q: "Was ist 2025 wirtschaftlicher: Eigenverbrauch oder Volleinspeisung?",
      a: "In der Regel bringt Eigenverbrauch den höchsten Effekt, weil du teuren Netzstrom sparst. Volleinspeisung kann sinnvoll sein, wenn dein Tagesbedarf niedrig ist oder du die Dachfläche maximal monetarisieren möchtest.",
    },
    {
      q: "Brauche ich einen Direktvermarkter für meine Anlage?",
      a: "Unter Solarpaket I können Anlagen bis 200 kW (zeitweise sogar bis 400 kW bei früher Inbetriebnahme) Überschüsse ohne Vergütung unentgeltlich abgeben – damit entfällt die Pflicht zur Direktvermarktung. Prüfe aber, ob sich Direktvermarktung dennoch lohnt.",
    },
    {
      q: "Gibt es 2025 noch Förderkredite?",
      a: "Ja, z. B. KfW-Programm 270 für Erneuerbare (auch für Unternehmen). Zins und Konditionen hängen von Bonität, Laufzeit und Hausbank ab.",
    },
    {
      q: "Wie wirkt sich ein Batteriespeicher im Gewerbe aus?",
      a: "Er erhöht die Eigenverbrauchsquote und kann Lastspitzen reduzieren. Wirtschaftlich ist er besonders, wenn du teure Leistungspreise oder hohe Tagestarife hast.",
    },
    {
      q: "Gilt der 0 %-Umsatzsteuersatz auch für Firmen-PV?",
      a: "Der Nullsteuersatz gilt primär für Anlagen auf oder nahe Wohngebäuden. Für typische Gewerbedächer greift er meist nicht. Kläre das im Einzelfall mit deinem Steuerbüro.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "inLanguage": "de",
    "image": "https://www.muster-gmbh.de/solar1.png",
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.role,
      "url": author.linkedin,
    },
    "publisher": {
      "@type": "Organization",
      "name": company.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.muster-gmbh.de/logo.png",
      },
    },
    "mainEntityOfPage": company.canonical,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": "https://www.muster-gmbh.de",
    "email": company.mail,
    "telephone": company.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address,
      "addressCountry": "DE",
    },
    "sameAs": [author.linkedin, reviewer.linkedin],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={company.canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Muster GmbH" />
        <meta property="og:title" content="Photovoltaik für Unternehmen 2025" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.muster-gmbh.de/solar1.png" />
        <meta property="og:url" content={company.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>

      <article
        className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
      >
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Photovoltaik für Unternehmen: Lohnt sich eine PV-Anlage 2025 noch?
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du möchtest Stromkosten senken, unabhängiger werden und Klimaziele
            erreichen? Hier erfährst du, wie sich gewerbliche PV-Anlagen 2025
            rechnen: aktuelle Vergütungssätze, Eigenverbrauch, Steuern, Förderungen
            – plus Rechenbeispiele und Checklisten.
          </p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={dateModified}>28.08</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/solar1.png" />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src="/solar1.png"
                  alt="Solardach"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Unternehmensdach mit Photovoltaik – moderne Gewerbe-PV 2025
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="/Autorenbild.jpg"
              alt="Autor: Max Mustermann"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-medium text-zinc-900">{author.name}</div>
              <div>{author.role}</div>
            </div>
          </div>
        </header>

        {/* TL;DR */}
        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              Für Unternehmen lohnt sich PV 2025 in den meisten Fällen – vor allem
              bei hoher Tageslast. Eigenverbrauch ist der Renditetreiber, Einspeisung
              liefert den Zusatz-Cashflow.
            </li>
            <li>
              Vergütung (Teileinspeisung) für Dach-PV liegt – je nach Anlagengröße –
              ab August 2025 typischerweise zwischen ca. 7,86 ct/kWh (≤ 10 kWp) und
              5,56 ct/kWh (40–100 kWp).
            </li>
            <li>
              Solarpaket I vereinfacht die Praxis: Bis 200 kW (teilweise bis 400 kW)
              kannst du Überschüsse unentgeltlich abgeben – ohne Direktvermarktung.
            </li>
            <li>
              Förderkredit: KfW 270 ist für Unternehmen offen. Zusätzlich können KMU
              oft IAB (bis 50 %) und Sonder-AfA nutzen – steuerlich prüfen lassen!
            </li>
            <li>
              LCOE von PV liegen 2024/25 je nach Typ grob im Bereich 4–14 ct/kWh –
              deutlich unter typischen Gewerbestromtarifen.
            </li>
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
              <a className={`hover:underline ${accent} font-medium`} href="#warum-jetzt">
                Warum PV für Unternehmen 2025 attraktiv ist
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#verguetung-2025">
                Einspeisevergütung &amp; Marktprämie 2025 – was gilt im Gewerbe?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#solarpaket">
                Solarpaket I: Relevante Erleichterungen für Betriebe
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
                Wirtschaftlichkeit verstehen: Eigenverbrauch, LCOE &amp; Beispielrechnung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#steuern-foerderung">
                Steuern &amp; Förderungen: IAB, Sonder-AfA, KfW 270
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#umsetzung">
                Umsetzung in 7 Schritten: Von der Idee bis zum Betrieb
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#faq">
                FAQ
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="warum-jetzt">
          <h2 className="text-2xl font-bold mb-3">
            Warum PV für Unternehmen 2025 attraktiv ist
          </h2>
          <p className="leading-relaxed">
            Für Betriebe zählt jede Kilowattstunde, die nicht teuer aus dem Netz bezogen
            werden muss. Während Gewerbestromtarife 2025 häufig im Bereich von rund{" "}
            <span className="tabular-nums">25–32 ct/kWh</span> liegen, produziert eine
            typische Dach-PV den Strom – je nach Anlagentyp und Standort – zu
            Stromgestehungskosten im mittleren einstelligen bis niedrigen zweistelligen
            Cent-Bereich pro kWh. Kurz: PV-Eigenverbrauch ersetzt teuren Einkauf durch
            günstige Eigenerzeugung. Die Volleinspeisung bleibt eine Option, wenn du
            tagsüber wenig verbrauchst oder Dachflächen maximal monetarisieren willst.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4 bg-white">
              <div className="text-sm font-semibold text-zinc-900">
                Kostenvorteil pro kWh
              </div>
              <p className="text-zinc-700 mt-1">
                PV-Stromkosten (LCOE) oft 4–14 ct/kWh; Gewerbestromtarife deutlich höher.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 bg-white">
              <div className="text-sm font-semibold text-zinc-900">Planbarkeit</div>
              <p className="text-zinc-700 mt-1">
                20-jährige Vergütung für eingespeisten Überschuss; stabile Kalkulation.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 bg-white">
              <div className="text-sm font-semibold text-zinc-900">Klimaziele</div>
              <p className="text-zinc-700 mt-1">
                Reduzierte Scope-2-Emissionen, ESG-Reporting, positive Außenwirkung.
              </p>
            </div>
          </div>
        </section>

        <section id="verguetung-2025" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Einspeisevergütung &amp; Marktprämie 2025 – was gilt im Gewerbe?
          </h2>
          <p className="leading-relaxed">
            Die Einspeisevergütung wird halbjährlich angepasst. Für Inbetriebnahmen{" "}
            <strong>ab 1.&nbsp;August 2025 bis 31.&nbsp;Januar 2026</strong> liegen die
            Fördersätze für <em>Gebäude-PV (Teileinspeisung)</em> u. a. bei{" "}
            <span className="whitespace-nowrap">7,86 ct/kWh</span> (≤ 10 kWp),{" "}
            <span className="whitespace-nowrap">6,80 ct/kWh</span> (10–40 kWp) und{" "}
            <span className="whitespace-nowrap">5,56 ct/kWh</span> (40–100 kWp). Für
            Volleinspeiser sind die Werte höher. In der Direktvermarktung gelten
            „anzulegende Werte“ (Marktprämie) für Anlagen bis 1 MW; je nach Größe
            variieren diese. Wichtig: Für Anlagen &gt; 100 kW ist die Direktvermarktung
            grundsätzlich Standard – siehe jedoch die Erleichterungen durch Solarpaket I
            im nächsten Abschnitt.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Anlagenteil</th>
                  <th className="text-left font-semibold p-3">Teileinspeisung</th>
                  <th className="text-left font-semibold p-3">Volleinspeisung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">≤ 10 kWp</td>
                  <td className="p-3">7,86 ct/kWh</td>
                  <td className="p-3">12,47 ct/kWh</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">10–40 kWp</td>
                  <td className="p-3">6,80 ct/kWh</td>
                  <td className="p-3">10,45 ct/kWh</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">40–100 kWp</td>
                  <td className="p-3">5,56 ct/kWh</td>
                  <td className="p-3">10,45 ct/kWh</td>
                </tr>
              </tbody>
            </table>
          </div>

         <p className="mt-4 text-sm text-zinc-600">
  Hinweis: Für Anlagen &gt; 100 kW gelten separate Direktvermarktungs-/Marktprämien-
  Regelungen. Prüfe die jeweils gültigen „anzulegenden Werte“.
</p>


        <section id="solarpaket" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">Solarpaket I: Relevante Erleichterungen für Betriebe</h2>
          <p className="leading-relaxed">
            Das Solarpaket I (in Kraft seit Mai 2024) schafft für gewerbliche Dachanlagen
            wichtige Vereinfachungen. Zentral: Die bisherige Pflicht zur Direktvermarktung
            ab 100 kW wurde <strong>flexibilisiert</strong>. Betreiber können bei Anlagen
            bis 200 kW (unter bestimmten Übergangsregeln zeitweise bis 400 kW) ihre
            <em> Überschussmengen</em> ohne Vergütung unentgeltlich abgeben. Diese
            „unentgeltliche Abnahme“ erspart Aufwand und Kosten, wenn sich die formale
            Direktvermarktung für kleine Restmengen nicht lohnt. Beachte jedoch
            Redispatch- und Messanforderungen sowie die Wirtschaftlichkeitsabwägung.
          </p>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Eigenverbrauch ist im Gewerbe der Renditetreiber – je höher die
              Tageslastdeckung, desto kürzer die Amortisation. Einspeiseerlöse bleiben
              wichtig, aber sie ersetzen selten den Vorteil der vermiedenen Strombezugskosten.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — zusammengefasstes Branchenfazit (indirektes Zitat)
            </figcaption>
          </figure>
        </section>

        {/* Bild 1 – Vorlage */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/solar2.jpg" />
              <img
                loading="lazy"
                src="/solar2.jpg"
                alt="Close Shot von Panel"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Moderne Hochleistungsmodule auf einem Gewerbedach – robust, effizient, wartungsarm.
          </figcaption>
        </figure>

        <section id="wirtschaftlichkeit" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Wirtschaftlichkeit verstehen: Eigenverbrauch, LCOE &amp; Beispielrechnung
          </h2>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-xl font-semibold mb-2">Die drei Hebel</h3>
            <ul className="list-disc ml-5 space-y-2 text-zinc-800">
              <li>
                <strong>Eigenverbrauchsquote:</strong> Anteil des PV-Stroms, den dein
                Betrieb direkt nutzt. Jeder selbst genutzte kWh ersetzt teuren Einkauf.
              </li>
              <li>
                <strong>Erzeugungskosten (LCOE):</strong> Hängen von Invest, Betrieb,
                Einstrahlung und Laufzeit ab – im Gewerbe oft im niedrigen Cent-Bereich
                je kWh.
              </li>
              <li>
                <strong>Einspeiseertrag:</strong> Für Überschüsse erhältst du Vergütung
                oder gehst in die Direktvermarktung (bzw. nutzt die unentgeltliche Abnahme).
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Beispiel: 100 kWp Dach-PV mit Eigenverbrauch
          </h3>
          <p className="leading-relaxed">
            Annahmen: Jahresertrag ~100.000 kWh, Invest ~90.000 € (900 €/kWp),
            Betriebskosten ~1,5 % p. a., Strompreis im Gewerbe konservativ{" "}
            <span className="tabular-nums">0,28 €/kWh</span>. Überschüsse werden zu
            einer <em>gewichteten</em> Vergütung von ca.{" "}
            <span className="tabular-nums">6,16 ct/kWh</span> eingespeist (Mix der
            Anlagenteile ≤ 10/≤ 40/≤ 100 kWp). Die Werte dienen der Illustration.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Szenario</th>
                  <th className="text-left font-semibold p-3">Eigenverbrauch</th>
                  <th className="text-left font-semibold p-3">Einspeisung</th>
                  <th className="text-left font-semibold p-3">jährl. Ersparnis/Ertrag</th>
                  <th className="text-left font-semibold p-3">grobe Amortisation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Konservativ", ev: 0.4 },
                  { name: "Realistisch", ev: 0.6 },
                  { name: "Ambitioniert", ev: 0.8 },
                ].map((row) => {
                  const evKWh = 100000 * row.ev;
                  const feedKWh = 100000 - evKWh;
                  const sparen = evKWh * 0.28;
                  const feed = feedKWh * 0.0616;
                  const opex = 90000 * 0.015;
                  const cashflow = sparen + feed - opex;
                  const years = 90000 / cashflow;
                  return (
                    <tr key={row.name} className="border-t border-zinc-200">
                      <td className="p-3 font-medium">{row.name}</td>
                      <td className="p-3">
                        {Math.round(row.ev * 100)}
                        {" %"} ({Math.round(evKWh).toLocaleString("de-DE")} kWh)
                      </td>
                      <td className="p-3">
                        {Math.round((1 - row.ev) * 100)}
                        {" %"} ({Math.round(feedKWh).toLocaleString("de-DE")} kWh)
                      </td>
                      <td className="p-3">
                        {cashflow.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                          maximumFractionDigits: 0,
                        })}
                        /Jahr
                      </td>
                      <td className="p-3">
                        {years.toFixed(1)}{" "}
                        <span className="text-zinc-500">Jahre (≈)</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-zinc-600">
            Die Beispielrechnung ersetzt keine individuelle Wirtschaftlichkeitsanalyse.
            Tarife, Anlagendesign und Lastprofile variieren.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold mb-2">Praktische Tipps</h3>
              <ul className="list-disc ml-5 space-y-1 text-zinc-800">
                <li>Lastgangmessung prüfen (15-Min-Werte) und mit PV-Ertrag matchen.</li>
                <li>Belegungsplan: Verschattungen, Sicherheitsabstände, Fluchtwege.</li>
                <li>Wechselrichter auf spätere Speicher-/Ladeerweiterung auslegen.</li>
                <li>Eigenverbrauch priorisieren (z. B. Prozessverschiebung, Laden).</li>
                <li>Reinigung &amp; Wartung einplanen (OPEX realistisch halten).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="text-lg font-semibold mb-2">Checkliste Förderfähigkeit</h3>
              <ol className="list-decimal ml-5 space-y-1 text-zinc-800">
                <li>Kreditlinie klären (Hausbank für KfW 270).</li>
                <li>Beihilfenrecht &amp; Kumulation prüfen.</li>
                <li>Steuerliche Effekte mit Steuerbüro abstimmen.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Bild 2 – Vorlage */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/solar3.png" />
              <img
                loading="lazy"
                src="/solar3.png"
                alt="Sonne"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Sonnige Aussichten: Hohe Tageslast im Betrieb trifft auf PV-Erzeugung – die perfekte
            Kombination für schnelle Amortisation.
          </figcaption>
        </figure>

        <section id="steuern-foerderung" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Steuern &amp; Förderungen: IAB, Sonder-AfA, KfW 270
          </h2>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
            <p className="leading-relaxed">
              <strong>Förderkredit KfW 270:</strong> Finanzierung von PV-Anlagen (auch Speicher) für
              Unternehmen über Hausbanken. Konditionen sind bonitäts- und laufzeitabhängig.
            </p>
            <p className="leading-relaxed">
              <strong>Steuerliche Instrumente für KMU:</strong> Der{" "}
              <em>Investitionsabzugsbetrag (IAB)</em> erlaubt bis zu 50 % der geplanten
              Anschaffungskosten vorab steuermindernd zu berücksichtigen (Bedingungen beachten).
              Zusätzlich kann die <em>Sonder-AfA</em> nach § 7g EStG über mehrere Jahre genutzt
              werden. Ob degressive AfA infrage kommt, hängt von der Rechtslage zum Anschaffungsjahr
              ab. Die konkrete Ausgestaltung sollte dein Steuerbüro prüfen.
            </p>
            <p className="leading-relaxed">
              <strong>0 %-Umsatzsteuer:</strong> Der Nullsteuersatz gilt regelmäßig für Anlagen{" "}
              <em>auf oder nahe Wohngebäuden</em>. Für typische Gewerbedächer gilt er
              meist nicht – Ausnahmen sind möglich. Lass das unbedingt individuell bewerten.
            </p>
          </div>
        </section>

        <section id="umsetzung" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Umsetzung in 7 Schritten: Von der Idee bis zum Betrieb
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong>Lastprofil analysieren:</strong> 12–24 Monate Daten (15-min) auswerten.
            </li>
            <li>
              <strong>Dach &amp; Statik prüfen:</strong> Nutzbare Fläche, Traglast, Brandschutz.
            </li>
            <li>
              <strong>Vorplanung:</strong> String-Design, Wechselrichter, Anschluss, Messkonzept.
            </li>
            <li>
              <strong>Wirtschaftlichkeit:</strong> Eigenverbrauchsquote, CAPEX/OPEX, Szenarien.
            </li>
            <li>
              <strong>Recht &amp; Netz:</strong> Anmeldung, EEG/Marktprämie, ggf. unentgeltliche
              Abnahme, Verträge.
            </li>
            <li>
              <strong>Beschaffung &amp; Bau:</strong> Angebote, Termine, Qualitätssicherung.
            </li>
            <li>
              <strong>Betrieb:</strong> Monitoring, Wartung, Reinigung, Versicherung.
            </li>
          </ol>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/lastprofil-analyse-gewerbe"
                >
                  Lastprofil verstehen: So optimierst du den Eigenverbrauch
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/pv-speicher-gewerbe">
                  Batteriespeicher im Gewerbe: Lohnt sich Peak-Shaving?
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/direktvermarktung">
                  Direktvermarktung vs. unentgeltliche Abnahme: Entscheidungsleitfaden
                </a>
              </li>
              <li>
                <a className={`hover:underline ${accent}`} href="/blog/e-mobilitaet-laden">
                  PV &amp; E-Mobilität: Laden am Betrieb sinnvoll umsetzen
                </a>
              </li>
            </ul>
          </aside>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>Photovoltaik für Unternehmen 2025 – lohnt sich das?</strong> Ja, in den meisten
            Fällen: Mit hoher Tageslast deckst du große Teile deines Bedarfs selbst und senkst
            planbar Kosten. Einspeisevergütung, Solarpaket-Erleichterungen und Förderkredite
            stabilisieren die Kalkulation. Entscheidend bleibt eine saubere Planung mit Fokus auf
            Eigenverbrauch und ein passendes Mess-/Vermarktungskonzept.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du wissen, wie sich PV <em>für dein</em> Unternehmen rechnet?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir erstellen eine belastbare Wirtschaftlichkeitsanalyse inkl. Lastgang-Abgleich und
              Fördercheck – individuell für deinen Standort.
            </p>

            <form className="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
              <label className="text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                  placeholder="Max Mustermann"
                  required
                />
              </label>
              <label className="text-sm">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                  placeholder="+49 123456789"
                />
              </label>
              <label className="text-sm">
                E-Mail
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                  placeholder="max@mustermann.de"
                  required
                />
              </label>

              <a
                href="#cta-pop"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
              >
                Unverbindlich anfragen
              </a>

              <p id="cta-note" className="text-xs text-zinc-500">
                Mit Absenden des Formulars akzeptierst du unsere Datenschutzbedingungen.
              </p>
            </form>
          </div>

          <div id="cta-pop" className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex">
            <a href="#" className="absolute inset-0 bg-black/50" aria-label="Overlay schließen" />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cta-pop-title"
              className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            >
              <a
                href="#"
                aria-label="Fenster schließen"
                className="absolute right-3 top-3 rounded-md border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
              >
                ✕
              </a>
              <h3 id="cta-pop-title" className="mb-2 text-lg font-semibold">
                Hinweis
              </h3>
              <p className="text-zinc-800">
                In diesem Beispiel-Blogartikel funktionieren die Links nicht. Möchtest du solch ein
                Projekt auch für dein Angebot umsetzen?{" "}
                <a
                  href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium underline ${accent}`}
                >
                  Klicke hier
                </a>{" "}
                und lass uns sprechen.
              </p>
            </div>
          </div>
        </section>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Photovoltaik im Unternehmen
          </h2>

          <div className="rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Begriff</th>
                  <th className="text-left font-semibold p-3">Erklärung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Eigenverbrauch</td>
                  <td className="p-3 text-zinc-700">
                    Anteil des erzeugten PV-Stroms, den dein Betrieb direkt vor Ort nutzt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Teileinspeisung</td>
                  <td className="p-3 text-zinc-700">
                    Betriebsmodell: Ein Teil wird selbst verbraucht, Überschüsse gegen Vergütung ins Netz eingespeist.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Direktvermarktung</td>
                  <td className="p-3 text-zinc-700">
                    Verkauf des PV-Stroms am Markt über einen Direktvermarkter; du erhältst eine Marktprämie.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Unentgeltliche Abnahme</td>
                  <td className="p-3 text-zinc-700">
                    Option nach Solarpaket I: Überschüsse bis zu bestimmten Anlagengrößen ohne Vergütung an den Netzbetreiber abgeben – ohne Direktvermarktung.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">LCOE</td>
                  <td className="p-3 text-zinc-700">
                    Levelized Cost of Electricity: Durchschnittliche Erzeugungskosten über die Lebensdauer (€/kWh).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">IAB / Sonder-AfA</td>
                  <td className="p-3 text-zinc-700">
                    Steuerinstrumente für KMU zur Vorab-Gewinnminderung bzw. zusätzlichen Abschreibung.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Über den Autor</h2>
          <div className="flex items-center gap-4">
            <img
              src="/Autorenbild.jpg"
              alt="Autor"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role} – Fokus: Kosten, Förderungen, Eigenverbrauch in Gewerbe-PV
              </div>
              <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
              Fraunhofer ISE: „Aktuelle Fakten zur Photovoltaik in Deutschland“ (Fassung 18.08.2025).
              https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html
            </li>
            <li>
              Bundesnetzagentur: „EEG-Förderung und -Fördersätze“ – Vergütung &amp; anzulegende Werte
              (August 2025–Januar 2026). https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html
            </li>
            <li>
              Bundesnetzagentur: „Solaranlagen &amp; unentgeltliche Abnahme (Solarpaket I)“.
              https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/Solaranlagen/start.html
            </li>
            <li>
              KfW 270 – Erneuerbare Energien Standard (Förderkredit). https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/Förderprodukte/Erneuerbare-Energien-Standard-(270)/
            </li>
            <li>
              Fraunhofer ISE: „Stromgestehungskosten erneuerbare Energien“ (Studie, Juli 2024).
              https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html
            </li>
            <li>
              BDEW Strompreisanalyse 2025 (Haushalt/Struktur, Einordnung der Kostenblöcke).
              https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
