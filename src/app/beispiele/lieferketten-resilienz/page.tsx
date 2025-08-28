import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Supply-Chain-Stratege & SCRM-Berater",
  topics: "Lieferkettenresilienz, Risiko-Management, Digitalisierung",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Head of Operations",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "mailto:muster@beispiel.de",
  phone: "+49123456789",
  url: "https://www.muster-gmbh.example", // Platzhalter-Domain
};

export const metadata: Metadata = {
  title:
    "Supply Chain Resilience: Strategien für krisenfeste Lieferketten – Praxisleitfaden",
  description:
    "Wie du deine Lieferkette widerstandsfähig machst: Risiken erkennen, Kennzahlen, Dual Sourcing, Nearshoring, Bestände, Digital Twins & SCRM – kompakt erklärt.",
  alternates: {
    canonical:
      "https://www.muster-gmbh.example/blog/supply-chain-resilience-strategien", // Platzhalter
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Lieferkettenresilienz",
    "Supply Chain Resilience",
    "resiliente Lieferkette",
    "Supply Chain Risk Management",
    "SCRM",
    "Dual Sourcing",
    "Multi-Sourcing",
    "Nearshoring",
    "Sicherheitsbestand",
    "End-to-End-Transparenz",
    "Digital Twin",
    "Lieferkettengesetz",
    "CSDDD",
    "LkSG",
  ],
  openGraph: {
    title:
      "Supply Chain Resilience: Strategien für krisenfeste Lieferketten – Praxisleitfaden",
    description:
      "Der verständliche Leitfaden zu Risiko-Management, Sourcing-Strategien, Beständen, Transparenz & Compliance (CSDDD, LkSG).",
    url: "https://www.muster-gmbh.example/blog/supply-chain-resilience-strategien",
    siteName: "Muster GmbH",
    images: [
      {
        url: "/supply1.png",
        width: 1600,
        height: 600,
        alt: "Weltkarte mit Lieferkettenknotenpunkten",
      },
    ],
    type: "article",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Supply Chain Resilience: Strategien für krisenfeste Lieferketten – Praxisleitfaden",
    description:
      "Risiken verstehen, Maßnahmen priorisieren, Kennzahlen beherrschen – was resiliente Lieferketten heute ausmacht.",
    images: ["/supply1.png"],
    creator: "@muster",
  },
};

export default function Page() {
  const published = "2025-08-28";
  const displayDate = "28.08.2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Supply Chain Resilience: Strategien für krisenfeste Lieferketten – Praxisleitfaden",
            description:
              "Praktischer Leitfaden für widerstandsfähige Lieferketten: Risiken, KPIs, Dual Sourcing, Nearshoring, Bestände, Transparenz, Digital Twins & SCRM.",
            inLanguage: "de-DE",
            image: [
              {
                "@type": "ImageObject",
                url: "/supply1.png",
                width: 1600,
                height: 600,
              },
            ],
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: company.name,
              url: company.url,
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
            datePublished: published,
            dateModified: published,
            mainEntityOfPage:
              "https://www.muster-gmbh.example/blog/supply-chain-resilience-strategien",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: company.url,
            email: company.email,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address,
              addressLocality: "—",
              postalCode: "—",
              addressCountry: "DE",
            },
            sameAs: [author.linkedin, reviewer.linkedin],
          }),
        }}
      />

      <article
        className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
      >
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Supply Chain Resilience: Strategien für krisenfeste Lieferketten
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            In diesem Leitfaden erfährst du, wie du deine Lieferkette robust
            gegen Krisen machst – mit klaren KPIs, praktikablen Maßnahmen
            (z.&nbsp;B. Dual Sourcing, Nearshoring, Sicherheitsbestände),
            digitaler Transparenz und einem wirksamen
            Supply&nbsp;Chain&nbsp;Risk&nbsp;Management.
          </p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={published}>{displayDate}</time>
            {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
          </div>

          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/supply1.png" />
                <img
                  src="/supply1.png"
                  alt="Weltkarte – globale Lieferkettenknoten"
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Weltkarte als Symbol für globale Lieferketten.
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
              alt="Autor"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-medium text-zinc-900">{author.name}</div>
              <div>{author.role}</div>
            </div>
          </div>
        </header>

        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>Resilienz</strong> bedeutet: Deine Lieferkette kann
              Störungen vorwegnehmen, abfedern und sich schnell erholen – dank
              klarer Rollen, KPIs (z.&nbsp;B. Time-to-Recover), Transparenz und
              geübter Notfallpläne.
            </li>
            <li>
              <strong>Top-Maßnahmen</strong>: Dual/Multi-Sourcing,
              Near-/Friendshoring, Sicherheitsbestände, flexible Kapazitäten,
              Tier-n-Transparenz, Risiko-Playbooks, digitale
              Control-Tower/Digital-Twin-Ansätze.
            </li>
            <li>
              <strong>Rechtlicher Rahmen</strong>: In der EU ist die CSDDD am
              25.07.2024 in Kraft getreten; in DE gilt das LkSG (seit 2023, ab
              2024 für Unternehmen ab 1.000 MA). Compliance ist ein
              Resilienz-Treiber, kein „Nice-to-have“. 
            </li>
            <li>
              <strong>Business Case</strong>: Ein Prozentpunkt höherer
              Servicegrad kann mehr Wert stiften als 5&nbsp;% zusätzliche
              Bestände – sofern du gezielt nach Risiko priorisierst (ABC/XYZ,
              Decoupling Points, dynamische Bestände).
            </li>
            <li>
              <strong>Pragmatischer Start</strong>: 30-60-90-Tage-Plan mit
              Engpass-Mapping, Szenarien, Portfolio-Priorisierung und ersten
              Quick Wins – danach disziplinierte Umsetzung via S&OP/S&OE.
            </li>
          </ul>
        </aside>

        <nav
          aria-label="Inhaltsverzeichnis"
          className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#was-ist">
                Was ist Lieferkettenresilienz?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#risiken-2025">
                Risiken 2025: Was setzt Lieferketten unter Druck?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#kpis">
                KPIs &amp; Begriffe: TTR, TTS, Servicegrad &amp; Co.
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#strategien">
                Acht Strategien für mehr Resilienz
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#roadmap">
                30-60-90-Tage-Roadmap (Mittelstand)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#compliance">
                Compliance kompakt: CSDDD &amp; LkSG
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#tools">
                Tools &amp; Tech-Stack
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

        <section id="was-ist" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Was ist Lieferkettenresilienz?
          </h2>
          <p className="leading-relaxed">
            Lieferkettenresilienz (engl. <em>Supply Chain Resilience</em>)
            beschreibt die Fähigkeit deiner Supply Chain, Risiken frühzeitig zu
            erkennen, auf Störungen flexibel zu reagieren und die
            Leistungsfähigkeit schnell wiederherzustellen. Dazu gehören
            proaktives Risiko-Management (SCRM), redundante/alternative
            Bezugsquellen, robuste Prozesse und die nötige Transparenz über
            mehrere Lieferstufen hinweg (<em>Tier-n</em>).
          </p>
          <p className="leading-relaxed">
            Aktuelle Studien zeigen: Viele Unternehmen haben erste Schritte
            unternommen, z.&nbsp;B. Dual-Sourcing und Regionalisierung. In einer
            großen Befragung berichteten 73&nbsp;% über Fortschritte beim
            Dual-Sourcing und 60&nbsp;% bei Regionalisierungsinitiativen. 
          </p>
          <p className="leading-relaxed">
            Problematisch bleibt allerdings die Tiefe der Transparenz:
            Während viele Unternehmen Tier&nbsp;1 gut kennen, wird es ab Tier&nbsp;2
            dünn – ein wesentlicher Blindspot bei Störungen durch
            Unterlieferanten. Eine deutschsprachige Branchenstudie belegt,
            dass nur knapp ein Drittel Tier&nbsp;2, und nur 14&nbsp;% noch tiefere
            Ebenen systematisch berücksichtigen. 
          </p>
        </section>

        <section id="risiken-2025" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Risiken 2025: Was setzt Lieferketten unter Druck?
          </h2>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <ul className="grid sm:grid-cols-2 gap-4">
              <li>
                <strong>Geopolitik &amp; Handel</strong>: Sanktionen, Zoll- und
                Exportkontrollen, Routenrisiken (z.&nbsp;B. Seewege).
              </li>
              <li>
                <strong>Extremwetter &amp; Umwelt</strong>: Überschwemmungen,
                Dürren, Temperaturspitzen – Produktions- und
                Transportunterbrechungen.
              </li>
              <li>
                <strong>Cyberrisiken</strong>: Ransomware auf ERP/TMS/WMS,
                Manipulation von Planungsdaten.
              </li>
              <li>
                <strong>Marktnachfrage</strong>: Volatilität, Bullwhip-Effekt,
                Produktmix-Sprünge.
              </li>
              <li>
                <strong>Regulatorik</strong>: EU-CSDDD (seit 25.07.2024 in
                Kraft) und deutsches LkSG (seit 2023; ab 2024 für &gt;=1.000
                Mitarbeitende), verschärfen Reporting- und Due-Diligence-Pflichten
                und verlangen belastbare Prozesse und Daten. 
              </li>
            </ul>
          </div>
        </section>

        <section id="kpis" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            KPIs &amp; Begriffe: TTR, TTS, Servicegrad &amp; Co.
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
              <h3 className="text-lg font-semibold mb-2">
                Time-to-Recover (TTR) &amp; Time-to-Survive (TTS)
              </h3>
              <p className="m-0">
                <strong>TTR</strong> ist die Zeit, die ein Knoten (Werk,
                Lieferant, Transportkorridor) benötigt, um nach einer Störung
                wieder auf Normalleistung zu kommen. <strong>TTS</strong> ist
                die Zeit, die deine Supply Chain den Ausfall ohne
                Lieferservicelücke überbrücken kann (z.&nbsp;B. durch
                Bestände/Umrouten).
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="text-lg font-semibold mb-2">Servicegrad</h3>
              <p className="m-0">
                Anteil der Nachfragezeilen, die vollständig und pünktlich
                bedient werden. Resiliente Netzwerke optimieren auf
                <em>verfügbaren</em> Servicegrad unter Risiko – nicht nur auf
                Durchschnittsnachfrage.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
              <h3 className="text-lg font-semibold mb-2">Bestandsreichweite</h3>
              <p className="m-0">
                Reichweite (= Bestand ÷ Verbrauch/Zeiteinheit) zeigt, wie lange
                du einen Versorgungsabriss überbrücken kannst. Dynamische
                Sicherheitsbestände koppeln sich an Forecast-Fehler, Lieferzeiten
                und Kritikalität (ABC/XYZ).
              </p>
            </div>
          </div>
        </section>

        <section id="strategien" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Acht Strategien für mehr Resilienz</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">1) Dual &amp; Multi-Sourcing</h3>
              <p className="m-0">
                Verlasse dich nicht auf eine Quelle. Nutze mindestens zwei
                qualifizierte Lieferanten, idealerweise in unterschiedlichen
                Regionen (Standort-Diversifizierung). Verhandle
                <em>leistungsbasierte</em> Kapazitätsoptionen und sichere
                kritische Rohstoffe via Rahmenverträge.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">2) Near-/Friendshoring</h3>
              <p className="m-0">
                Verlege Teile der Wertschöpfung näher an Kernmärkte, um
                Transportzeiten und politische Risiken zu senken. Kombiniere
                regionale Knoten mit globalen für Kosten/Resilienz-Balance.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">3) Sicherheitsbestände &amp; Entkopplungspunkte</h3>
              <p className="m-0">
                Platziere Sicherheitsbestände an strategischen Knoten (z.&nbsp;B.
                vor Engpassteilen, an Umschlagpunkten). Nutze
                Entkopplungspunkte, um Lieferzeitrisiken vom Kundentakt zu
                trennen.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">4) Flexible Kapazitäten &amp; Verträge</h3>
              <p className="m-0">
                Baue <em>Optionen</em> in Verträge ein: skalierbare Kapazität,
                Second-Site-Freigaben, alternative Spezifikationen,
                „Emergency-Uplift“-Klauseln. Hinterlege Engineering-Releases
                <em>vor</em> der Krise.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">5) End-to-End-Transparenz (Tier-n)</h3>
              <p className="m-0">
                Mappe kritische Stücklistenpositionen bis mindestens Tier&nbsp;2,
                idealerweise tiefer. Automatisiere Frühwarnsignale (Lead-Time-Sprünge,
                OTIF-Abweichungen, ESG-Flags). Denke an NDAs und
                Datensparsamkeit.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">6) Digitale Control Tower &amp; Digital Twins</h3>
              <p className="m-0">
                Echtzeit-Sicht auf Bestände, Kapazitäten und Transportstatus plus
                Simulation („Was-wäre-wenn“). Digital Twins helfen, TTR/TTS zu
                quantifizieren und Szenarien zu testen, bevor du investierst.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">7) SCRM-Prozess &amp; Playbooks</h3>
              <p className="m-0">
                Risiken identifizieren, bewerten, mitigieren und überwachen – als
                wiederkehrender Prozess. Pflege Playbooks mit Rollen, Schwellen,
                Eskalation, Kommunikationsbausteinen und Not-KPIs.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">8) Kollaboration &amp; Partnerschaften</h3>
              <p className="m-0">
                Teile Forecasts, Kapazitätspläne und Risikoindikatoren mit
                Kernpartnern. Entwickle gemeinsame Verbesserungen (z.&nbsp;B.
                Verpackung, Standardisierung), um Variabilität zu reduzieren.
              </p>
            </div>
          </div>

          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Resilienz ist kein Projekt, sondern eine stetige Architektur- und
              Entscheidungsdisziplin: Diversifizieren, Transparenz schaffen,
              Szenarien üben – und regelmäßig nachsteuern.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Experteneinschätzung (indirektes Zitat)
            </figcaption>
          </figure>

          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/supply2.jpg" />
                <img
                  loading="lazy"
                  src="/supply2.jpg"
                  alt="Containerschiff auf hoher See – globaler Warenfluss"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Maritime Korridore sind leistungsfähig – aber störanfällig. Redundanz
              und flexible Routen sind zentrale Resilienzhebel.
            </figcaption>
          </figure>

          <div className="mt-8 grid md:grid-cols-[1.2fr,0.8fr] gap-6 items-start">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg mb-2">
                Just-in-Time vs. Just-in-Case
              </h3>
              <p className="m-0">
                Moderne Resilienz kombiniert JIT-Effizienz mit selektivem
                Pufferaufbau für hochkritische Teile. Ziel ist ein
                <em>risikobewusstes</em> Arbeitsbestands-Niveau, nicht maximaler
                Lageraufbau.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Kriterium</th>
                      <th className="text-left p-3 font-semibold">JIT</th>
                      <th className="text-left p-3 font-semibold">JIC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Kapitalbindung</td>
                      <td className="p-3">Niedrig</td>
                      <td className="p-3">Höher</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Störungstoleranz</td>
                      <td className="p-3">Niedrig</td>
                      <td className="p-3">Hoch (selektiv)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Planung</td>
                      <td className="p-3">Enges Taktregime</td>
                      <td className="p-3">Szenario-basiert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Praxis-Checkliste</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>ABC/XYZ-Kritikalität je Material aktualisiert?</li>
                <li>Tier-2/3 für A-Teile gemappt?</li>
                <li>Dual-Sourcing technisch/qualitativ freigegeben?</li>
                <li>Notfall-Playbooks geübt (S&OE War-Room)?</li>
                <li>Bestandsparameter monatlich an Risiko angepasst?</li>
              </ul>
            </aside>
          </div>

          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/supply3.jpg" />
                <img
                  loading="lazy"
                  src="/supply3.jpg"
                  alt="Containerterminal – Umschlag von Standardcontainern"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Standardisierung und modulare Plattformen reduzieren Varianz – und
              damit Resilienz-Kosten.
            </figcaption>
          </figure>
        </section>

        <section id="roadmap" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            30-60-90-Tage-Roadmap (Mittelstand)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">0–30 Tage</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>Engpass-Materialien (A/volatil) identifizieren</li>
                <li>Tier-2 für Top-10 Stücklistenteile mappen</li>
                <li>Lead-Time-Risiken &amp; Single-Sourcing prüfen</li>
                <li>Bestandsreichweiten &gt; TTS-Ziel anpassen</li>
                <li>War-Room &amp; Eskalationen etablieren (S&amp;OE)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">31–60 Tage</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>Dual-/Multi-Sourcing Business Case je Teil</li>
                <li>Alternative Spezifikationen/Second Source freigeben</li>
                <li>Transport-Routen-Redundanz &amp; Carrier-Mix</li>
                <li>Control-Tower KPIs (OTIF, Backorder, ETA-Abweichungen)</li>
                <li>Szenario-Budget („Krisen-Capex“) definieren</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">61–90 Tage</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>Digital Twin für Top-Produktlinien aufsetzen</li>
                <li>Lieferanten-Scorecard inkl. Resilienzmetriken</li>
                <li>Kontrakte mit Optionen &amp; Notfallklauseln</li>
                <li>Quartalsweises „Black-Swan“-Exercise</li>
                <li>Management-Review &amp; OKRs für Resilienz</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="compliance" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Compliance kompakt: CSDDD &amp; LkSG</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">EU-CSDDD (EU-Richtlinie)</h3>
              <p className="m-0">
                Die EU-Richtlinie über Nachhaltigkeitspflichten in der
                Lieferkette ist am 25.07.2024 in Kraft getreten. Unternehmen in
                Scope müssen menschenrechtliche und umweltbezogene Risiken in
                ihren Wertschöpfungsketten identifizieren, adressieren und
                berichten. Die Mitgliedstaaten setzen die Vorgaben nun in
                nationales Recht um (gestaffelte Fristen). 
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">Deutschland: LkSG</h3>
              <p className="m-0">
                Das deutsche Lieferkettensorgfaltspflichtengesetz gilt seit
                2023 zunächst für &gt;=3.000 Mitarbeitende und seit
                01.01.2024 für &gt;=1.000 Mitarbeitende. BAFA stellt Leitfäden,
                FAQs und Meldewege bereit und aktualisiert fortlaufend
                Berichtspflichten und Fragebögen. 
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Warum das Resilienz treibt</h3>
            <p className="m-0">
              Due-Diligence-Prozesse zwingen zu Risiko-Transparenz über Tier&nbsp;n,
              sauberer Governance (Rollen, Eskalationen) und messbaren
              Verbesserungen – exakt jene Bausteine, die Resilienz nachhaltig
              verankern.
            </p>
          </div>
        </section>

        <section id="tools" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Tools &amp; Tech-Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Kernsysteme</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>ERP/MRP (Disposition, Stücklisten, Workflows)</li>
                <li>TMS/WMS (Transport/Lager, ETA, Slotting)</li>
                <li>SCM-Suite (S&amp;OP, Netzwerkplanung, Inventory)</li>
                <li>Control Tower (E2E-Sicht, Ereignisse, Alarme)</li>
                <li>Digital Twin (Szenarien, TTR/TTS-Simulation)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">Auswahlkriterien</h3>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>API-Offenheit, Datenqualität, Stammdatenschutz</li>
                <li>Was-wäre-wenn-Fähigkeiten, Rechenzeit</li>
                <li>Feingranulare Zugriffe (Lieferanten-Portal)</li>
                <li>Erweiterbarkeit (Risiko-Feeds, ESG-Daten)</li>
                <li>Time-to-Value, TCO, Schulungen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Was ist der erste Schritt zu mehr Lieferkettenresilienz?
              </h3>
              <p>
                Starte mit einer kurzen Kritikalitätsanalyse (ABC/XYZ) und mappe
                für die wichtigsten Teile mindestens Tier&nbsp;2. Richte einen
                War-Room (S&amp;OE) ein und aktualisiere Bestandsparameter für
                Engpassteile.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie viel „Pufferbestand“ ist sinnvoll?
              </h3>
              <p>
                So viel wie nötig, so wenig wie möglich: Richte
                Sicherheitsbestände dynamisch an Forecast-Fehler, Servicegrad-Ziel,
                Lieferzeit und Kritikalität aus – nicht pauschal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Dual Sourcing oder Nearshoring – was wirkt stärker?
              </h3>
              <p>
                Beides ergänzt sich: Dual Sourcing reduziert
                Lieferantenausfall-Risiken, Nearshoring senkt Transport- und
                Geopolitik-Risiken. Entscheidend ist die Materialkritikalität.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie messe ich Resilienzfortschritt?
              </h3>
              <p>
                Über TTR/TTS-Verbesserungen, Servicegrad unter Störung,
                Wiederanlaufzeiten, Anteil Dual-sourcierter A-Teile und
                Frühwarn-Trefferquoten.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Rolle spielt die CSDDD konkret?
              </h3>
              <p>
                Sie verpflichtet zur systematischen Risiko-Prüfung entlang der
                Wertschöpfungskette. Wer das professionell aufsetzt, gewinnt
                Resilienz: bessere Daten, klare Verantwortlichkeiten, schnellere
                Reaktion. 
              </p>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "Was ist der erste Schritt zu mehr Lieferkettenresilienz?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Starte mit ABC/XYZ-Kritikalität und mappe Tier 2 für die wichtigsten Teile. Richte einen War-Room (S&OE) ein und aktualisiere Bestandsparameter.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie viel „Pufferbestand“ ist sinnvoll?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Dynamische, risikoadjustierte Sicherheitsbestände: abhängig von Forecast-Fehler, Servicegrad-Ziel, Lieferzeit und Kritikalität – nicht pauschal.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Dual Sourcing oder Nearshoring – was wirkt stärker?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Beides ergänzt sich: Dual Sourcing adressiert Lieferantenausfall, Nearshoring senkt Transport- und Geopolitik-Risiken. Materialkritikalität entscheidet.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie messe ich Resilienzfortschritt?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Über TTR/TTS-Verbesserungen, Servicegrad unter Störung, Wiederanlaufzeiten, Anteil Dual-sourcierter A-Teile und Frühwarn-Trefferquoten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Rolle spielt die CSDDD konkret?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sie verpflichtet zur Risiko-Prüfung entlang der Wertschöpfungskette. Professioneller Due-Diligence-Prozess erhöht Transparenz, Governance und Reaktionsgeschwindigkeit.",
                    },
                  },
                ],
              }),
            }}
          />
        </section>

        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie wird deine Lieferkette krisenfest – ohne die Kosten explodieren
              zu lassen?
            </strong>{" "}
            Mit einem risiko­basierten Set aus Dual/Multi-Sourcing,
            Near/Friendshoring, dynamischen Beständen, Tier-n-Transparenz,
            digitalen Control-Towern und geübten Playbooks. Compliance (CSDDD,
            LkSG) ist dabei Katalysator, nicht Bremse – setze konsequent auf
            Daten, Rollen und Szenarien.
          </p>
        </section>

        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du deine Lieferkette in 90 Tagen messbar resilienter machen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir priorisieren deine Top-Risiken, bauen Dual-Sourcing &amp;
              Bestandsparameter auf und etablieren einen wirksamen SCRM-Prozess –
              pragmatisch, transparent, messbar.
            </p>

            <form
              className="mx-auto grid max-w-xl gap-3 text-left"
              role="group"
              aria-describedby="cta-note"
            >
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
                Mit Absenden des Formulars akzeptierst du unsere
                Datenschutzbedingungen.
              </p>
            </form>
          </div>

          <div
            id="cta-pop"
            className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
          >
            <a
              href="#"
              className="absolute inset-0 bg-black/50"
              aria-label="Overlay schließen"
            />

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
                In diesem Beispiel-Blogartikel funktionieren die Links nicht.
                Möchtest du solch ein Projekt auch für dein Angebot umsetzen?{" "}
                <a
                  href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-700 underline"
                >
                  Klicke hier
                </a>{" "}
                und lass uns sprechen.
              </p>
            </div>
          </div>
        </section>

       <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
  <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
  <ul className="list-disc ml-5 text-sm space-y-2">
    <li>
      <a
        href="#cta-pop"
        aria-haspopup="dialog"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        S&OP vs. S&OE: Wer entscheidet wann?
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-haspopup="dialog"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        Sicherheitsbestände richtig einstellen: Von ABC/XYZ zu Servicegrad-Zielen
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-haspopup="dialog"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        Dual Sourcing in regulierten Branchen: Qualifizierung &amp; Freigaben
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-haspopup="dialog"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        Control-Tower-Einführung in 100 Tagen: Daten, KPIs, Alarme
      </a>
    </li>
  </ul>
</aside>


        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Supply Chain Resilience
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
                  <td className="p-3 font-medium text-zinc-900">Resilienz</td>
                  <td className="p-3 text-zinc-700">
                    Fähigkeit, Störungen zu antizipieren, abzufangen und sich
                    schnell zu erholen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">SCRM</td>
                  <td className="p-3 text-zinc-700">
                    <em>Supply Chain Risk Management</em>: systematischer
                    Risiko-Prozess (Identifizieren–Bewerten–Mitigieren–Überwachen).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">TTR/TTS</td>
                  <td className="p-3 text-zinc-700">
                    Time-to-Recover (Wiederanlaufzeit) und Time-to-Survive
                    (Überbrückungszeit ohne Servicelücke).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Dual/Multi-Sourcing
                  </td>
                  <td className="p-3 text-zinc-700">
                    Mehrere qualifizierte Bezugsquellen pro kritischem Teil, um
                    Ausfallrisiken zu senken.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Control Tower
                  </td>
                  <td className="p-3 text-zinc-700">
                    Digitale Steuerzentrale mit E2E-Sicht, Ereignissen, KPIs und
                    Alarmschwellen – oft mit Digital-Twin-Funktionen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">LkSG/CSDDD</td>
                  <td className="p-3 text-zinc-700">
                    Deutsche/EU-Regelwerke zu Sorgfaltspflichten in
                    Lieferketten; treiben Risiko-Transparenz und Governance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Über den Autor</h2>
          <div className="flex items-center gap-4">
            <img
              src={author.image}
              alt="Autor"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role} – {author.topics}
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
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
              <a
                href={reviewer.linkedin}
                className={`hover:underline ${accent}`}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              European Commission – Corporate sustainability due diligence
              (CSDDD):{" "}
              <a
                href="https://commission.europa.eu/business-economy-euro/doing-business-eu/sustainability-due-diligence-responsible-business/corporate-sustainability-due-diligence_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://commission.europa.eu/…/corporate-sustainability-due-diligence_en
              </a>{" "}
              
            </li>
            <li>
              McKinsey – Supply chain risk survey (2024):{" "}
              <a
                href="https://www.mckinsey.com/capabilities/operations/our-insights/supply-chain-risk-survey"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.mckinsey.com/…/supply-chain-risk-survey
              </a>{" "}
              
            </li>
            <li>
              BME – Logistikstudie 2024:{" "}
              <a
                href="https://www.bme.de/news/bme-logistikstudie-2024%3A-lieferketten-noch-nicht-resilient-genug/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bme.de/…lieferketten-noch-nicht-resilient-genug
              </a>{" "}
              
            </li>
            <li>
              BAFA – LkSG Überblick:{" "}
              <a
                href="https://www.bafa.de/DE/Lieferketten/Ueberblick/ueberblick_node.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bafa.de/…/ueberblick_node.html
              </a>{" "}
              
            </li>
            <li>
              IHK – Updates zum LkSG (2024/2025):{" "}
              <a
                href="https://www.ihk.de/gera/innovation-umwelt/nachhaltigkeit/lieferkettensorgfaltspflichtengesetz-5126134"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ihk.de/gera/…/lieferkettensorgfaltspflichtengesetz-5126134
              </a>{" "}
              
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
