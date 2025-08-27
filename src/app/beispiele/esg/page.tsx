// src/app/blog/supply-chain-resilienz-digitale-transparenz/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const accent = "text-emerald-700";

  const author = {
    name: "Max Mustermann",
    role: "Supply Chain Risk Manager",
    focus:
      "Risikofrüherkennung, Lieferantenmanagement, resiliente Planung & Bestandsoptimierung",
    image: "/Autorenbild.jpg",
    linkedin: "https://www.linkedin.com",
  };

  const reviewer = {
    name: "Claudia Müller",
    role: "Leiterin Strategischer Einkauf (Head of Procurement)",
    linkedin: "https://www.linkedin.com",
  };

  const canonical =
    "https://www.muster-gmbh.de/blog/supply-chain-resilienz-digitale-transparenz";

  const faq = [
    {
      q: "Was ist Supply-Chain-Resilienz und warum ist sie wichtig?",
      a: "Supply-Chain-Resilienz beschreibt die Fähigkeit deiner Lieferkette, Störungen zu antizipieren, abzufedern und sich schnell zu erholen. Sie ist wichtig, weil sie Ausfallzeiten, Mehrkosten und Umsatzverluste reduziert – und so die Wettbewerbsfähigkeit schützt.",
    },
    {
      q: "Welche Tools brauche ich für digitale Lieferkettentransparenz?",
      a: "Kernbausteine sind ein Supply-Chain-Control-Tower (zentrale Sicht), Event-Monitoring für Frühwarnungen (z. B. Wetter, Geopolitik, Compliance), saubere Stammdaten und eine durchgängige Datenintegration (ERP, TMS, WMS, Planung).",
    },
    {
      q: "Multi-Sourcing vs. Single-Sourcing – was ist besser?",
      a: "Multi-Sourcing reduziert Klumpenrisiken, ist aber komplexer und teils teurer. Single-Sourcing ist effizienter, erhöht aber die Anfälligkeit. In der Praxis setzt du auf hybride Strategien: kritische Teile dual sourcen, Standards bündeln.",
    },
    {
      q: "Wie berechne ich Safety Stock (Sicherheitsbestand) einfach?",
      a: "Ein gängiges Modell: Sicherheitsbestand = Z-Faktor × Standardabweichung der Nachfrage × √(Lieferzeit). Der Z-Faktor steuert dein gewünschtes Servicelevel (z. B. 1,64 für ~95 %).",
    },
    {
      q: "Wie verbinde ich S&OP mit Risikofrüherkennung?",
      a: "Verknüpfe Event-, Lieferanten- und Bestandsrisiken als feste Inputs im S&OP-Zyklus. Risiken erhalten Owner, Maßnahmen und Schwellenwerte; Szenarien fließen in Nachfrage-, Kapazitäts- und Bestandsplanung ein.",
    },
    {
      q: "Welche KPIs zeigen mir echte Transparenzfortschritte?",
      a: "u. a. Anteil transparent gemappter Tier-2/3-Lieferanten, mittlere Erkennungszeit (MTTD) vs. mittlere Reaktionszeit (MTTR), On-Time-In-Full, Servicelevel, Expedite-Kosten, dual gesourcte Teilequote.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Supply-Chain-Resilienz durch digitale Transparenz: Methoden & Tools für Frühwarnsysteme, Multi-Sourcing und Bestandsoptimierung",
    description:
      "Wie du mit digitaler Lieferkettentransparenz Risiken früh erkennst, Multi-Sourcing professionell aufsetzt und Bestände gezielt optimierst – praxisnah erklärt.",
    inLanguage: "de-DE",
    image: [`${canonical}/supply.jpg`],
    datePublished: "2025-08-27",
    dateModified: "2025-08-27",
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      sameAs: author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Muster GmbH",
      logo: {
        "@type": "ImageObject",
        url: "https://www.muster-gmbh.de/logo.png",
      },
    },
    mainEntityOfPage: canonical,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Muster GmbH",
    url: "https://www.muster-gmbh.de",
    email: "mailto:muster@beispiel.de",
    telephone: "+49 123456789",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musterstraße 1",
      addressLocality: "—",
      postalCode: "—",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <Head>
        <title>
          Digitale Lieferkettentransparenz: Supply-Chain-Resilienz mit
          Frühwarnsystem, Multi-Sourcing & Bestandsoptimierung | Muster GmbH
        </title>
        <meta
          name="description"
          content="So baust du echte Supply-Chain-Resilienz auf: Transparenz schaffen, Risiken früher erkennen, Multi-Sourcing klug umsetzen und Bestände wirksam optimieren."
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Supply-Chain-Resilienz durch digitale Transparenz"
        />
        <meta
          property="og:description"
          content="Methoden & Tools für Risikofrüherkennung, Multi-Sourcing und Bestandsoptimierung – praxisnah erklärt."
        />
        <meta property="og:image" content="/supply.jpg" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Supply-Chain-Resilienz durch digitale Transparenz"
        />
        <meta
          name="twitter:description"
          content="Frühwarnsysteme, Multi-Sourcing, Bestandsoptimierung – klare Schritte, messbare Ergebnisse."
        />
        <meta name="twitter:image" content="/supply.jpg" />

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
            Supply-Chain-Resilienz durch digitale Transparenz
          </h1>

          <p className="mt-3 text-lg text-zinc-700">
            Du willst Risiken früher sehen, Alternativen parat haben und
            Bestände gezielt steuern? In diesem Leitfaden erfährst du{" "}
            <strong>Methoden &amp; Tools</strong> für{" "}
            <strong>Risikofrüherkennung</strong>,{" "}
            <strong>Multi-Sourcing</strong> und{" "}
            <strong>Bestandsoptimierung</strong> – verständlich, mit
            Best-Practice-Schritten und KPIs.
          </p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-27">27.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/supply.jpg" />
                <img
                  loading="eager"
                  src="/supply.jpg"
                  alt="Kontrollraum mit Echtzeit-Lieferketten-Dashboard – Symbol für digitale Transparenz"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Hero: Digitale Transparenz macht Risiken sichtbar.
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
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

        {/* TL;DR */}
        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>Digitale Transparenz</strong> ist der Hebel für
              Resilienz: Ohne durchgängige Daten (Lieferanten, Logistik,
              Bestände, externe Events) bleibt Risikomanagement reaktiv.
            </li>
            <li>
              <strong>Frühwarnsysteme</strong> kombinieren Event-Monitoring,
              Control-Tower-Sichten und KI-Signale – sie verkürzen die
              Erkennungszeit (MTTD) und die Reaktionszeit (MTTR).
            </li>
            <li>
              <strong>Multi-Sourcing</strong> reduziert Klumpenrisiken. Starte
              mit kritischen Teilen (ABC/XYZ), definiere Dual-Sourcing-Quoten
              und simuliere Szenarien in S&OP.
            </li>
            <li>
              <strong>Bestandsoptimierung</strong> gelingt mit klaren
              Servicelevel-Zielen, sauberen Stammdaten und belastbaren
              Sicherheitsbestandsformeln – idealerweise mehrstufig
              (Multi-Echelon).
            </li>
            <li>
              <strong>Regulatorik</strong> (z. B. CSDDD) verlangt mehr
              Lieferkettentransparenz – ein Compliance-Treiber, der
              Resilienz-Vorteile schafft.
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
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#warum-transparenz"
              >
                Warum digitale Transparenz Resilienz ermöglicht
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#fruehwarnsysteme"
              >
                Frühwarnsysteme: Von Ereignisdaten zu klaren Signalen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#multi-sourcing"
              >
                Multi-Sourcing systematisch aufbauen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#bestandsoptimierung"
              >
                Bestandsoptimierung: Servicelevel statt Bauchgefühl
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#architektur"
              >
                Architektur: Control Tower, Digital Twin &amp; Data Backbone
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#sop-integration"
              >
                S&OP + Risiko: So verknüpfst du Planung und Frühwarnung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#roadmap-90-tage"
              >
                90-Tage-Roadmap: Vom Pilot zur Wirkung
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
        <section id="warum-transparenz" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Warum digitale Transparenz Resilienz ermöglicht
          </h2>
          <p className="leading-relaxed">
            Resilienz beginnt mit Sichtbarkeit: Du brauchst einen gemeinsamen
            Blick auf Lieferanten, Standorte, Transporte, Bestände und
            Bedarfsplanung – plus <em>externe Daten</em> wie Wetter, Streiks,
            Geopolitik oder Compliance-Ereignisse. Erst wenn diese Informationen
            zusammenfinden, erkennst du <strong>drohende Störungen</strong>{" "}
            früher und kannst <strong>präventiv</strong> handeln: umleiten,
            umplanen, umschalten. Das Ergebnis sind weniger Expedites, stabilere
            Servicelevel und geringere Kostenvolatilität.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Problem: Fragmentierte Datenlandschaft
              </h3>
              <p className="text-zinc-700">
                ERP, TMS, WMS, Lieferantenportale, E-Mails – Informationen sind
                verteilt. Ohne Konsolidierung bleibt Risikomanagement reaktiv.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Lösung: Control-Tower</h3>
              <p className="text-zinc-700">
                Ein <strong>Supply-Chain-Control-Tower</strong> bündelt Daten
                aus allen Quellen und erzeugt <strong>Echtzeit-Sichten</strong>{" "}
                für Planung und Ausführung – die Basis für Frühwarnungen und
                Maßnahmensteuerung.
              </p>
            </div>
          </div>
        </section>

        {/* Bild 1 – Unsplash 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                alt="Live-Dashboard mit Kennzahlen – symbolisiert Control-Tower-Sicht"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Dashboards schaffen gemeinsame Lagebilder – der erste Schritt von
            Transparenz zu Resilienz.
          </figcaption>
        </figure>

        <section id="fruehwarnsysteme" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Frühwarnsysteme: Von Ereignisdaten zu klaren Signalen
          </h2>
          <p>
            Ein <strong>Frühwarnsystem</strong> sammelt Ereignisse
            (Event-Monitoring), ordnet sie deiner Stückliste, Lieferanten und
            Transporten zu und bewertet das Risiko (z. B. nach Wahrscheinlichkeit
            × Auswirkung). Daraus entstehen konkrete <em>Alerts</em> mit
            Handlungsempfehlungen – idealerweise in deinem Control-Tower.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">
              Bausteine eines modernen Frühwarnsystems
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Event-Feeds:</strong> Wetter, Häfen, Streiks,
                Geopolitik, Compliance, Cyber, Lieferantennews.
              </li>
              <li>
                <strong>Mapping:</strong> Zuordnung zu Materialien,
                Lieferantenstandorten, Transporten, Kundenaufträgen.
              </li>
              <li>
                <strong>Scoring:</strong> Risiko-Score pro Ereignis &amp; Teil –
                Schwellenwerte lösen Workflows aus.
              </li>
              <li>
                <strong>Automatisierung:</strong> Standard-Playbooks (umleiten,
                Alternativlieferant, Sicherheitsbestand heben, Expedite,
                Kundenkommunikation).
              </li>
              <li>
                <strong>KI-Erkennung:</strong> Anomalien in Bedarfs- oder
                Lead-Time-Mustern, <em>What-if</em>-Simulationen.
              </li>
            </ul>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Resilienz entsteht, wenn wir Risiken <em>früher</em> sehen als
              andere – und diese Informationen <em>nahtlos</em> in unsere
              Entscheidungen bringen. Ein Control-Tower mit Frühwarnsignalen ist
              dafür das Nervenzentrum.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Max Mustermann, direktes Zitat
            </figcaption>
          </figure>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Quick-Start (30–45 Tage) – Minimal Viable Signals
              </h3>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Top-100 Materialien (ABC/XYZ) und kritische Werke wählen.</li>
                <li>Event-Feeds für Wetter, Häfen, Streiks anbinden.</li>
                <li>Mapping zu Lieferantenstandorten &amp; Transporten.</li>
                <li>Score &amp; Schwellen (rot/gelb/grün) definieren.</li>
                <li>Playbooks je Risikoart (Owner, SLA, Maßnahmen).</li>
              </ol>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">
                Long-Run – Von Alerts zu Szenarien
              </h3>
              <p className="text-zinc-700">
                Verknüpfe Alerts mit <strong>S&OP-Szenarien</strong>, simuliere
                Kapazitäts- und Netzwerkanpassungen (z. B. alternative Häfen),
                und nutze <strong>Digital-Twin</strong>-Modelle für
                End-to-End-What-ifs.
              </p>
            </div>
          </div>
        </section>

        <section id="multi-sourcing" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">Multi-Sourcing systematisch aufbauen</h2>
          <p>
            Eine <strong>Mehrquellenstrategie</strong> reduziert
            Lieferanten-Klumpenrisiken, verbessert Verhandlungsspielräume und
            erhöht die Reaktionsfähigkeit. Der Schlüssel liegt in der
            konsequenten Priorisierung: Nicht alles dual sourcen –{" "}
            <em>das Richtige</em> dual sourcen.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">
                    Kriterium
                  </th>
                  <th className="text-left font-semibold p-3">Single-Sourcing</th>
                  <th className="text-left font-semibold p-3">Multi-Sourcing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Kosten</td>
                  <td className="p-3 text-zinc-700">Skaleneffekte, oft günstiger</td>
                  <td className="p-3 text-zinc-700">Höhere Fixkosten/Anlauf</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Risiko</td>
                  <td className="p-3 text-zinc-700">
                    Klumpenrisiko, lange Wiederanlaufzeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Bessere Absicherung, schnellere Umsteuerung
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Flexibilität
                  </td>
                  <td className="p-3 text-zinc-700">
                    Bindung an Kapazitäten/Technologie
                  </td>
                  <td className="p-3 text-zinc-700">
                    Redundanz, Alternativmuster, Friend-Shoring möglich
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Governance
                  </td>
                  <td className="p-3 text-zinc-700">
                    Einfacher zu steuern, weniger Schnittstellen
                  </td>
                  <td className="p-3 text-zinc-700">
                    Höherer Steuerungsaufwand (Qualität, IP, Forecast-Split)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">1) Kritikalität bewerten</h3>
              <p className="text-zinc-700">
                ABC/XYZ, Make-or-Buy, Substituierbarkeit, Zertifizierungen,
                Werkzeugbindung, Unique Tech.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">2) Portfolio planen</h3>
              <p className="text-zinc-700">
                Ziel-Dualisierung (z. B. 60/40), „Resilience-TCO“ inkl.
                Risikoaufschläge, Qualifizierungsfahrplan.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">3) Governance sichern</h3>
              <p className="text-zinc-700">
                Rahmenverträge, Volumenbandbreiten, Kapazitäts-Commitments,
                Risiko-KPIs, gemeinsame Notfallübungen.
              </p>
            </div>
          </div>
        </section>

        {/* Bild 2 – Unsplash 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1548598680-5cd7b694579b?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1548598680-5cd7b694579b?q=80&w=1600&auto=format&fit=crop"
                alt="Containerterminal im Morgenlicht – Symbol für Multi-Sourcing und logistische Alternativen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Multi-Sourcing entfaltet erst mit logistischen Alternativen seine
            Wirkung.
          </figcaption>
        </figure>

        <section id="bestandsoptimierung" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Bestandsoptimierung: Servicelevel statt Bauchgefühl
          </h2>
          <p>
            Resilienz bedeutet <em>nicht</em> blindes Aufblasen der Bestände.
            Stattdessen definierst du klare <strong>Servicelevel</strong> (z. B.
            95 % für A-Teile) und leitest daraus <strong>Sicherheitsbestände</strong> ab.
            Drei Dinge sind Pflicht: saubere Stammdaten (Einheiten, Lead Times),
            belastbare Nachfragehistorie und die Wahl eines passenden Modells.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Methode</th>
                  <th className="text-left font-semibold p-3">Kurz erklärt</th>
                  <th className="text-left font-semibold p-3">Wann nutzen?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Fixer Puffer
                  </td>
                  <td className="p-3 text-zinc-700">
                    Manuell festgelegter Sicherheitsbestand
                  </td>
                  <td className="p-3 text-zinc-700">
                    Übergangslösung, wenig Volatilität
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Statistisch (Z·σ·√L)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Servicelevel-gesteuert; Streuung der Nachfrage und
                    Lieferzeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Standard für viele Artikelklassen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Max-Min (Reorder Point)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Bestellpunkt und Losgröße – einfach und robust
                  </td>
                  <td className="p-3 text-zinc-700">
                    Stabilere Nachfrage, klare Lead Times
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Multi-Echelon
                  </td>
                  <td className="p-3 text-zinc-700">
                    Optimiert über Werke/Lagerstufen hinweg
                  </td>
                  <td className="p-3 text-zinc-700">
                    Netzwerke mit mehreren Stufen/Regionen
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[2fr,1fr]">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">
                Beispielformel – einfach erklärt
              </h3>
              <p className="text-zinc-800">
                Sicherheitsbestand = <strong>Z</strong> (Servicelevel) ×{" "}
                <strong>σ</strong> (Nachfrage-Stdabw.) ×{" "}
                <strong>√L</strong> (Lieferzeit in Perioden). Ziel: Das
                gewünschte Servicelevel mit minimalem Kapital erreichen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Praxis-Tipp</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Pflege Ausreißer (Promos, Sondereffekte) in der Historie.</li>
                <li>Nutze Segmentierung: A/Hochvolumen genauer, C einfacher.</li>
                <li>Spiegle Risiken im Z-Faktor (z. B. Lohnstreik-Saison).</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="architektur" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Architektur: Control Tower, Digital Twin &amp; Data Backbone
          </h2>
          <p>
            Für <strong>Lieferkettentransparenz</strong> brauchst du ein
            Rückgrat: Datenqualität, eindeutige IDs (Material, Standort), klare
            Integrationspfade (ETL/ELT, Streaming) und ein
            <strong> Control-Tower-Interface</strong>. In reifen Umgebungen
            modelliert ein <strong>Digital Twin</strong> das End-to-End-Netz
            (Werke, Lager, Transport, Servicelevels) und erlaubt
            <em> What-if-Simulationen</em> für Risiken und Kostenziele.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Muss-Kriterien</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Einheitliche Stammdaten &amp; Produktstruktur</li>
                <li>APIs zu ERP/TMS/WMS/Planning</li>
                <li>Echtzeit-Event-Ingestion (Wetter, Häfen, News)</li>
                <li>Rollenbasierte Sichten und Workflows</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Nice-to-have</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>KI-Anomalieerkennung &amp; Prognosen</li>
                <li>Optimierer (Netzwerk, Bestände, Transport)</li>
                <li>Simulationen &amp; Digital-Twin-Szenarien</li>
                <li>Self-Service Analytics für Fachbereiche</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sop-integration" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            S&amp;OP + Risiko: So verknüpfst du Planung und Frühwarnung
          </h2>
          <p>
            Verankere Risiken <em>fest</em> im S&amp;OP: Jede Störung erhält
            einen Owner, Maßnahmen, Schwellenwerte und Szenarien. So wird S&amp;OP
            vom reinen Abgleich von Nachfrage/Kapazität zu einem{" "}
            <strong>Resilienz-Takt</strong>.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Ablauf im Monatszyklus</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>
                <strong>Signal-Review:</strong> Top-Alerts, Trendrisiken,
                Score-Entwicklung.
              </li>
              <li>
                <strong>Netzwerksicht:</strong> Kapazitäts-, Logistik-,
                Lieferanten-Engpässe.
              </li>
              <li>
                <strong>Szenarien:</strong> „Base“, „Risk-Up“, „Mitigation“ –
                mit Kosten- und Serviceauswirkung.
              </li>
              <li>
                <strong>Entscheidung:</strong> Volumen-Shifts, Dualisierung,
                Sicherheitsbestände, Expedites, Kundenpriorisierung.
              </li>
              <li>
                <strong>Tracking:</strong> KPIs &amp; Lessons Learned ins
                Playbook überführen.
              </li>
            </ol>
          </div>
        </section>

        <section id="roadmap-90-tage" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            90-Tage-Roadmap: Vom Pilot zur Wirkung
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">0–30 Tage</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Scope definieren (Teile, Werke, Routen)</li>
                <li>Event-Feeds und Datenquellen anbinden</li>
                <li>Score/Schwellen &amp; Playbooks festlegen</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">31–60 Tage</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Control-Tower-Dashboards produktiv</li>
                <li>Top-10 Risikoteile dualisieren</li>
                <li>Servicelevel je Klasse festlegen</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">61–90 Tage</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>S&amp;OP-Szenarien inklusive Risiken</li>
                <li>Multi-Echelon-Pilot (1–2 Flüsse)</li>
                <li>KPIs &amp; Lessons Learned im Governance-Board</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            {faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          {/* FAQ Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie baust du Supply-Chain-Resilienz durch digitale Transparenz
              auf?
            </strong>{" "}
            Indem du Risiken <em>früh</em> sichtbar machst (Event-Monitoring
            + Control-Tower), <em>gezielt</em> redundante Optionen schaffst
            (Multi-Sourcing) und <em>bewusst</em> Bestände steuerst
            (Servicelevel, robuste Formeln, Multi-Echelon). Mit klaren KPIs,
            verknüpft mit S&amp;OP, transformierst du Reaktivität in
            Handlungsfähigkeit.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Welche Risiken willst du zuerst in den Griff bekommen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir helfen dir, in 90 Tagen von Null auf Frühwarnsystem –
              inklusive Control-Tower-Dashboards, Dual-Sourcing-Plan und
              Servicelevel-Beständen.
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

        {/* Weiterführende interne Links (Cluster) */}
        <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/control-tower-einfuehrung"
              >
                Supply-Chain-Control-Tower: Auswahl, Einführung, KPIs
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/dual-sourcing-praxisleitfaden"
              >
                Dual-Sourcing in der Praxis: Vom Business Case zur Umsetzung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/safety-stock-servicelevel"
              >
                Safety Stock &amp; Servicelevel – der sichere Weg zur
                Verfügbarkeit
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/csddd-lksg-roadmap"
              >
                CSDDD &amp; LkSG umsetzen: Transparenz mit Mehrwert
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Supply-Chain-Resilienz
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
                  <td className="p-3 font-medium text-zinc-900">
                    Supply-Chain-Resilienz
                  </td>
                  <td className="p-3 text-zinc-700">
                    Fähigkeit der Lieferkette, Störungen früh zu erkennen,
                    abzufedern und sich schnell zu erholen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Lieferkettentransparenz
                  </td>
                  <td className="p-3 text-zinc-700">
                    Durchgängige Sicht auf Lieferanten, Materialien, Transporte,
                    Bestände und relevante externe Ereignisse.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Control-Tower
                  </td>
                  <td className="p-3 text-zinc-700">
                    Zentrale Plattform, die Datenströme bündelt und
                    Echtzeit-Entscheidungen ermöglicht.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Safety Stock (Sicherheitsbestand)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Zusätzlicher Bestand, der Nachfrage- und Lieferzeit-
                    Unsicherheiten abfängt, um Servicelevel zu sichern.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">S&amp;OP</td>
                  <td className="p-3 text-zinc-700">
                    Sales &amp; Operations Planning – integrierte Abstimmung
                    von Nachfrage, Kapazität, Bestand und Risiken.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Multi-Echelon
                  </td>
                  <td className="p-3 text-zinc-700">
                    Mehrstufige Optimierung von Beständen über Werke/Lager
                    hinweg, um Gesamtkosten und Servicelevel zu balancieren.
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
              src={author.image}
              alt="Autor"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role} · {author.focus}
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

        {/* Quellenverzeichnis */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              McKinsey: Digital twins – The key to unlocking end-to-end supply
              chain growth (20.11.2024) –{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/digital-twins-the-key-to-unlocking-end-to-end-supply-chain-growth"
              >
                mckinsey.com
              </a>
            </li>
            <li>
              BCG: Cost and Resilience – The New Supply Chain Challenge
              (18.07.2025) –{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.bcg.com/publications/2025/cost-resilience-new-supply-chain-challenge"
              >
                bcg.com
              </a>
            </li>
            <li>
              SAP: Supply chain control towers – Providing end-to-end visibility
              (25.09.2024) –{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.sap.com/resources/supply-chain-control-tower"
              >
                sap.com
              </a>
            </li>
            <li>
              Europäische Kommission: Corporate Sustainability Due Diligence
              (CSDDD) – Omnibus-Update (02/2025) –{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://commission.europa.eu/business-economy-euro/doing-business-eu/sustainability-due-diligence-responsible-business/corporate-sustainability-due-diligence_en"
              >
                commission.europa.eu
              </a>
            </li>
            <li>
              APICS/ MIT: Understanding Safety Stock and mastering its equations
              –{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf"
              >
                web.mit.edu
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
