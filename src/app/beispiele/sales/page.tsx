// src/app/blog/b2b-kunden-gewinnen-2025-mit-ki/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lena Schwarz",
  role: "B2B Growth Strategin & AI Consultant",
  url: "https://www.findbar.de/team/lena-schwarz",
};

const company = {
  name: "findbar GmbH",
  url: "https://www.findbar.de",
  logo: "https://www.findbar.de/logo.svg",
  sameAs: ["https://www.linkedin.com/company/findbar/"],
};

export default function ArticlePage() {
  const title =
    "B2B Kunden gewinnen 2025 mit KI: Vertrauen aufbauen, bevor das erste Gespräch entsteht";
  const description =
    "So gewinnst du 2025 planbar B2B-Kunden mit KI – trotz Vertrauensverlust und härterem Cold Calling. Taktiken, Playbook, Tools & KPIs.";
  const canonical =
    "https://www.findbar.de/blog/b2b-kunden-gewinnen-2025-mit-ki";

  const faq = [
    {
      q: "Wie kann ich 2025 ohne große Budgets KI für B2B-Leadgenerierung nutzen?",
      a: "Starte mit drei Bausteinen: (1) KI-gestützte Recherche & Account-Scoring, (2) personalisierte Snippets für Outreach und Landingpages, (3) Vertrauenssignale automatisiert sichtbar machen (Referenzen, Sicherheits- und ROI-Claims mit Quellen). Nutze bestehende Tools (CRM, MAP) und ergänze kleine KI-Utilities statt Big-Bang-Projekte.",
    },
    {
      q: "Ist Cold Calling 2025 noch sinnvoll?",
      a: "Ja – aber nur signalbasiert. Kaltanrufe ohne Relevanz werden abgeblockt. Kombiniere Intent-Signale, Warm-ups (Social, E-Mail) und eine Value-first-Eröffnung. KI hilft, das Timing, die Hypothese zum Pain und passende Proof Points vorab zu validieren.",
    },
    {
      q: "Welche Kennzahlen zeigen, dass mein Vertrauensaufbau funktioniert?",
      a: "Frühe Trust-KPIs wie Click-to-Meeting-Rate, Zeit bis Erstantwort, Anteil Leads mit „Problem-fit“-Score, Social Proof Views und Anzahl wiederkehrender Website-Besucher aus Zielaccounts. Später: Win-Rate, Sales-Cycle-Dauer pro Deal-Stufe und Churn-Risiko in der Onboarding-Phase.",
    },
    {
      q: "Was sind die größten KI-Risiken im B2B-Vertrieb?",
      a: "Halluzinationen und veraltete Infos, Compliance-Verstöße (Datenschutz, Urheberrecht), und ungewollte Einheitskommunikation. Gegenmaßnahmen: Human-in-the-Loop, Quellenpflicht, Guardrails (PII-Filter), Marken-Styleguide als Prompt-Basis und klare Approval-Workflows.",
    },
    {
      q: "Wie baue ich vor dem ersten Call einen Vertrauensvorschuss auf?",
      a: "Verknüpfe personalisierte Inhalte (Mikro-Landingpages), echte Proof Points (Fallstudien, Benchmarks) und Sicherheits-/Compliance-Statements. Verstärke das durch Social Validation (Testimonials, Experten-Zitate) und Pre-Call Assets wie ROI-Kalkulatoren oder Diagnose-Checklisten.",
    },
    {
      q: "Welche Inhalte funktionieren 2025 für B2B-Käufer:innen besonders gut?",
      a: "Konkrete, problemnahe Formate: Schritt-für-Schritt-Guides, interaktive ROI-Rechner, kurze Video-Demos, kompakte Vergleichstabellen (Ist vs. Soll), sowie branchenspezifische Playbooks mit Daten und klaren Next Steps.",
    },
  ];

  // Build FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "de",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
      logo: {
        "@type": "ImageObject",
        url: company.logo,
      },
    },
    image: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60",
    ],
    datePublished: "2025-08-20",
    dateModified: "2025-08-20",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    logo: company.logo,
    sameAs: company.sameAs,
  };

  const toc = [
    { id: "einordnung-2025", label: "Warum 2025 anders ist" },
    { id: "b2b-kaufprozess", label: "Was hat sich im B2B-Kaufprozess verändert?" },
    { id: "vertrauenskrise", label: "Vertrauenskrise: Daten & Konsequenzen" },
    { id: "vertrauensvorschuss", label: "Warum du einen Vertrauensvorschuss brauchst" },
    { id: "ki-vertrauen", label: "Mit KI Vertrauen aufbauen – vor dem ersten Gespräch" },
    { id: "cold-calling-2025", label: "Cold Calling 2025: Schwieriger, aber smarter" },
    { id: "playbook-30-tage", label: "Playbook: 30-Tage KI-Outbound-Plan" },
    { id: "toolstack", label: "Tool-Stack & Daten" },
    { id: "messgroessen", label: "KPIs & Benchmarks für Vertrauen" },
    { id: "fehler", label: "Typische Fehler & Governance" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60"
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={company.name} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        ></script>
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
            B2B Kunden gewinnen im Jahr 2025 mit Hilfe von KI: Vertrauen vor dem
            ersten Gespräch
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Der Wettbewerb um Aufmerksamkeit ist explodiert, Cold Calling wird
            härter – und gleichzeitig erwarten Entscheider:innen{" "}
            <strong>klare Beweise für Wert</strong>, noch bevor sie mit Sales
            sprechen. Hier zeige ich dir, wie du mit KI 2025 planbar Pipeline
            aufbaust und einen <strong>Vertrauensvorschuss</strong> schaffst.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am <time dateTime="2025-08-20">20.08.2025</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60"
                  alt="Strategieboard mit Datenpunkten und KI-Visualisierung – B2B-Pipeline planen"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">KI als Vertrauensbooster im B2B</figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=128&q=60"
              alt="Autorin"
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
              <strong>Vertrauenslücke schließen:</strong> Käufer:innen verlangen
              Beweise (ROI, Sicherheit, Peer-Stimmen) <em>vor</em> dem Erstgespräch. KI
              hilft, diese Trust-Signale skalierbar zu liefern.
            </li>
            <li>
              <strong>Cold Calling ist härter – aber smarter:</strong> Ohne Relevanz
              keine Chance. Nutze Intent-Signale, Warm-ups und personalisierte{" "}
              {'>'}30-Sekunden-Hypothesen statt generischer Pitches.
            </li>
            <li>
              <strong>AI-first Outbound:</strong> Account-Scoring, Content-Snippets,
              Mikro-Landingpages und Proof-Aggregation verkürzen den Sales-Cycle und
              erhöhen die Win-Rate.
            </li>
            <li>
              <strong>Governance schlägt Gimmicks:</strong> Quellenpflicht, PII-Filter,
              Human-in-the-Loop und Marken-Guidelines sind Pflicht – sonst kippt
              Vertrauen.
            </li>
            <li>
              <strong>30-Tage-Plan inklusive:</strong> Tägliche Sprints und KPIs, um
              sichtbare Ergebnisse in einem Monat zu erreichen.
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
            {toc.map((t) => (
              <li key={t.id}>
                <a className={`hover:underline ${accent} font-medium`} href={`#${t.id}`}>
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="einordnung-2025">
          <h2>Warum 2025 anders ist</h2>
          <p>
            2025 ist das Jahr, in dem sich B2B-Vertrieb und -Marketing endgültig{" "}
            <strong>AI-first</strong> ausrichten – nicht, weil KI „cool“ ist, sondern
            weil Käufer:innen in einem <em>Signalrauschen</em> aus Angeboten,
            Preisoptionen und Sicherheitsfragen <strong>klare Beweise</strong> für Wert
            verlangen. Studien zeigen, dass <em>Business-Entscheider:innen</em>{" "}
            Vertrauen verlieren und nur Anbietern Zeit schenken, die{" "}
            <strong>vorab Substanz</strong> liefern: konkrete Ergebnisse, belastbare
            Quellen, Risiko-Reduktion und nachvollziehbare Datenschutz-Praktiken.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">
              Problem → Lösung in 30 Sekunden (Above-the-Fold-Formel)
            </h3>
            <ul className="list-disc ml-5">
              <li>
                <strong>Problem:</strong> Geringe Antwortquoten, zähe Ersttermine,
                interne Skepsis.
              </li>
              <li>
                <strong>Ursache:</strong> Vertrauensdefizit und wachsende
                Entscheidungsabwägungen; Buyers bevorzugen selbstbestimmte Recherche.
              </li>
              <li>
                <strong>Lösung:</strong> KI-gestützter Trust-Funnel mit
                personalisierten Hypothesen, Social Proof, Sicherheits- und ROI-Belegen
                – <em>vor</em> dem Call.
              </li>
            </ul>
          </div>
        </section>

        <section id="b2b-kaufprozess" className="mt-14">
          <h2>Was hat sich im B2B-Kaufprozess verändert?</h2>
          <p>
            B2B-Kaufentscheidungen verlaufen fragmentiert, digital und
            mehrstimmig: Buying-Groups recherchieren selbst, vergleichen Optionen,
            prüfen Sicherheit und Budgetwirkung – häufig ohne direkten Kontakt zum
            Vertrieb. Mehrere Branchenreports berichten 2025 von einer{" "}
            <strong>klaren Präferenz für rep-freie oder hybrid-digitale Journeys</strong>,
            während Supplier-Outreach ohne Relevanz aktiv gemieden wird. Gleichzeitig
            steigt die Erwartung an <strong>nachweisbaren ROI</strong> und{" "}
            <strong>Datensouveränität</strong>.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-zinc-900">Selbstrecherche</h3>
              <p className="text-zinc-700">
                Große Teile der Bewertungsphase passieren ohne Vendor-Kontakt. Deine
                Inhalte müssen <em>vor</em> dem Gespräch überzeugen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-zinc-900">Mehr Stakeholder</h3>
              <p className="text-zinc-700">
                Sicherheit, IT-Fit, Legal und Finanzen prägen die Entscheidung stärker
                – Trust-Signale müssen funktionsübergreifend wirken.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-zinc-900">Proof oder Pause</h3>
              <p className="text-zinc-700">
                Ohne <em>Proof Points</em> (KPIs, Cases, Compliance) gewinnt das Risiko.
                KI kann diese Belege massenhaft, aber präzise personalisieren.
              </p>
            </div>
          </div>
        </section>

        <section id="vertrauenskrise" className="mt-14">
          <h2>Vertrauenskrise: Daten & Konsequenzen</h2>
          <p>
            Global wächst die Skepsis gegenüber Führung und Institutionen – und damit
            auch gegenüber Versprechen von Anbietern. Für B2B heißt das:{" "}
            <strong>Belege schlagen Behauptungen</strong>. Unternehmen mit transparenter
            Kommunikation, klaren Quellen und realistischen Outcome-Prognosen holen
            schneller Ersttermine und senken No-Show-Raten. Deine Aufgabe ist es,
            Vertrauen messbar zu machen und frühzeitig zu verdienen.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">Auswirkungen auf deinen Funnel</h3>
            <ul className="list-disc ml-5">
              <li>
                <strong>Pre-Call Proof:</strong> Cases, Benchmarks, Sicherheits- und
                Datenschutz-Infos sichtbar <em>vor</em> dem Erstkontakt.
              </li>
              <li>
                <strong>Signalbasierte Priorisierung:</strong> Intent-Signale entscheiden
                über Timing und Pitch – nicht Listenvolumen.
              </li>
              <li>
                <strong>Transparente Roadmaps:</strong> klare Steps, Risiken und
                Mitwirkung der Kundenseite reduzieren Friktion.
              </li>
            </ul>
          </div>
        </section>

        <section id="vertrauensvorschuss" className="mt-14">
          <h2>Warum du einen Vertrauensvorschuss brauchst</h2>
          <p>
            Im ersten Gespräch geht es 2025 weniger darum, „zu erklären, was du
            tust“, sondern zu bestätigen, dass du <em>verstanden</em> hast,{" "}
            <strong>was beim Gegenüber weh tut</strong> – und dass du für ähnliche
            Kontexte <strong>nachweislich Ergebnisse</strong> geliefert hast. Ein
            Vertrauensvorschuss verkürzt die Zeit bis zum Business Case, verbessert die
            Datenqualität im CRM und erhöht die Bereitschaft, interne Champions zu
            aktivieren. KI macht diesen Vorschuss skalierbar.
          </p>
        </section>

        <section id="ki-vertrauen" className="mt-14">
          <h2>Mit KI Vertrauen aufbauen – <em>vor</em> dem ersten Gespräch</h2>
          <p>
            Der Kern: KI verwandelt verstreute Signale in <strong>relevante
            Hypothesen</strong>, übersetzt Proof Points in <strong>personalisierte
            Assets</strong> und liefert diese zur richtigen Zeit an die richtigen
            Rollen. So entsteht der Eindruck von „du kennst unsere Welt“ –{" "}
            <em>bevor</em> du anrufst.
          </p>

          {/* Bild 1 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=60"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1600&q=60"
                  alt="Team analysiert Intent-Signale und passt Outbound-Strategie an"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Intent, Proof, Personalisierung: Die drei Säulen des KI-gestützten
              Vertrauensaufbaus.
            </figcaption>
          </figure>

          {/* 2-zu-1 Grid */}
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">1) Intent & Priorisierung</h3>
              <p>
                Sammle Kaufsignale (Website-Besuche, Content-Downloads, Tech-Stack,
                Hiring, News) und lass KI daraus Hypothesen bauen:{" "}
                <em>Welcher Pain ist wahrscheinlich? Welche Rolle treibt das Thema?
                Welche Barrieren existieren?</em> Scoring priorisiert Accounts, bei
                denen Timing, Reifegrad und Fit stimmen.
              </p>
              <ul className="list-disc ml-5">
                <li>Firmografien + Trigger (z. B. Funding, Standorteröffnungen)</li>
                <li>Produktnutzung/Trials (bei PLG) + Support-Tickets</li>
                <li>Technographien + Sicherheitsstandards der Branche</li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h4 className="font-semibold mb-1">Quick Win</h4>
              <p className="text-sm">
                Accounts mit <em>3+</em> Signalen erhalten automatisch eine{" "}
                <strong>Mikro-Landingpage</strong> mit Case-Snippet, Sicherheitsinfo und
                Call-to-Action zu einem 20-Min-Value-Check.
              </p>
            </aside>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">2) Proof-Aggregation</h3>
              <p>
                KI extrahiert aus Cases, Reviews und Benchmarks die{" "}
                <strong>relevanten Kennzahlen</strong> (z. B. „−28 % Time-to-Quote“,
                „+18 % Upsell-Rate“) und ordnet sie Branche, Use Case und Tool-Stack zu.
                Ergebnis: präzise, prüfbare Belege statt generischer Slides.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">3) Personal-Snippets</h3>
              <p>
                Für jede Rolle werden <strong>Snippets</strong> erzeugt (CFO: ROI in
                Monaten; CISO: Zertifikate, Datenflüsse; Ops: Integrationen). Diese
                Snippets landen in E-Mails, Social-Posts und auf der Mikro-Landingpage.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">4) Safety & Compliance</h3>
              <p>
                Transparente Datenschutz-Darstellung (Auftragsverarbeitung,
                Speicherorte, Retention), Audit-Spuren für KI-Outputs und
                <strong> Human-Review</strong> sind Pflicht – Vertrauen kippt sonst
                sofort.
              </p>
            </div>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Vertrauen entsteht, wenn Anbieter Relevanz beweisen, Risiken adressieren
              und Outcomes transparent machen – <em>bevor</em> Sales spricht. KI skaliert
              genau diese drei Effekte.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Gartner, 2025 (indirektes Zitat)
            </figcaption>
          </figure>
        </section>

        <section id="cold-calling-2025" className="mt-14">
          <h2>Cold Calling 2025: schwieriger – und gleichzeitig relevanter denn je</h2>
          <p>
            Kalte Outbound-Anrufe ohne Bezug laufen ins Leere. Rechtliche
            Rahmenbedingungen und eine hohe Ablehnungshaltung verlangen{" "}
            <strong>Legitimität, Relevanz und Timing</strong>. Der Weg aus der Falle:
            KI-gestützte Signal-Selektion, Warm-Up-Sequenzen (Social/E-Mail) und eine
            <em>30-Sekunden-Hypothese</em>, die sofort zeigt, warum es sich lohnt,
            zuzuhören.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Aspekt</th>
                  <th className="text-left font-semibold p-3">Klassischer Outbound</th>
                  <th className="text-left font-semibold p-3">KI-gestützter Outbound</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Zielauswahl</td>
                  <td className="p-3">Große Listen, generische ICP-Filter</td>
                  <td className="p-3">Intent-Signale, Buying-Stage, Priorisierung</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Botschaft</td>
                  <td className="p-3">Feature-Pitch</td>
                  <td className="p-3">
                    Rollenbasierte Hypothese + relevanter Proof Point (Case, Benchmark)
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Timing</td>
                  <td className="p-3">zufällig</td>
                  <td className="p-3">Signale (Besuche, Jobs, News), beste Call-Fenster</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Compliance</td>
                  <td className="p-3">manuell, fehleranfällig</td>
                  <td className="p-3">PII-Filter, Opt-Out-Sync, Audit-Trails</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bild 2 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=60"
                  alt="Sales-Team telefoniert mit datenbasiertem Playbook am Bildschirm"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Cold Calling lebt – wenn Relevanz, Timing und Proof stimmen.
            </figcaption>
          </figure>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Die 30-Sekunden-Hypothese</h3>
            <p className="text-zinc-700">
              „Wir sehen bei <strong>[Firma]</strong> {">"} <strong>[Signal]</strong> und
              dass <strong>[Rolle]</strong> dadurch meist{" "}
              <strong>[Pain + Metrik]</strong> spürt. In ähnlichen Setups hat{" "}
              <strong>[Case]</strong> in <strong>[Zeit]</strong>{" "}
              <strong>[Outcome]</strong> erreicht – ohne{" "}
              <strong>[typische Hürde]</strong>. Macht es Sinn, das in 20 Min. zu
              prüfen?“
            </p>
          </div>
        </section>

        <section id="playbook-30-tage" className="mt-14">
          <h2>Playbook: 30-Tage KI-Outbound-Plan</h2>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Tag 1–3:</strong> ICP verfeinern (Branche, Tool-Stacks,
                Sicherheitsanforderungen), Datenbereinigung, PII-Filter aktivieren.
              </li>
              <li>
                <strong>Tag 4–7:</strong> Signale einrichten (Web-Analytics,
                Firmendaten, News), KI-Scoring kalibrieren, 20 Top-Accounts wählen.
              </li>
              <li>
                <strong>Tag 8–12:</strong> Proof-Bibliothek bauen (Cases, Benchmarks,
                Zertifikate), Snippets nach Rolle automatisch generieren.
              </li>
              <li>
                <strong>Tag 13–16:</strong> Mikro-Landingpages pro Account erstellen
                (Problem-Hypothese, Outcomes, Security, CTA).
              </li>
              <li>
                <strong>Tag 17–21:</strong> Warm-Up (Social + E-Mail), dann Call-Wellen
                in den besten Zeitfenstern; Live-Einwände sammeln und Snippets
                nachschärfen.
              </li>
              <li>
                <strong>Tag 22–26:</strong> A/B-Tests: Value-Hook, CTA-Friktion, Proof
                Reihenfolge. Meeting-Show-Rate steigern (Reminder, Pre-Read).
              </li>
              <li>
                <strong>Tag 27–30:</strong> Review: Pipeline-Zuwachs, Meetings, SQO,
                Win-Signal-Korrelation. Nächste 40 Accounts aufsetzen.
              </li>
            </ol>
          </div>
        </section>

        <section id="toolstack" className="mt-14">
          <h2>Tool-Stack & Daten: Was du wirklich brauchst</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Must-haves</h3>
              <ul className="list-disc ml-5">
                <li>CRM mit sauberem Datenmodell & Pflichtfeldern für Proof</li>
                <li>Marketing-Automation oder Sequences-Tool</li>
                <li>Signalquellen (Web, Firmografie, Tech, News)</li>
                <li>KI-Layer: Snippets, Scoring, Landingpage-Gerüst</li>
                <li>Compliance-Guardrails: PII-Filter, Opt-Out-Sync, Logging</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Nice-to-haves</h3>
              <ul className="list-disc ml-5">
                <li>Interaktive ROI-Rechner und Vergleichsgeneratoren</li>
                <li>Autorisierte Review-Feeds (G2, Capterra) als Proof-Quelle</li>
                <li>Conversational-Intelligence mit anonymisiertem Redaction</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="messgroessen" className="mt-14">
          <h2>KPIs & Benchmarks für Vertrauen</h2>
          <p>
            Miss Vertrauen wie jede Pipeline-Stufe. Starte mit Frühindikatoren,
            bevor du auf Closed-Won schaust – sonst reagierst du zu spät.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Phase</th>
                  <th className="text-left font-semibold p-3">Metriken</th>
                  <th className="text-left font-semibold p-3">Zielkorridor (Start)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Awareness</td>
                  <td className="p-3">
                    % Zielaccounts mit ≥1 Signal/Woche, Social Proof Views
                  </td>
                  <td className="p-3">30–40 % Accounts/Woche</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Engagement</td>
                  <td className="p-3">Click-to-Meeting-Rate, Pre-Read-Öffnungen</td>
                  <td className="p-3">3–6 % C2M, 50–70 % Pre-Read</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Evaluation</td>
                  <td className="p-3">Security-Review-Pass, Pilot-Start-Rate</td>
                  <td className="p-3">70 % Pass, 20–30 % Pilot</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Closing</td>
                  <td className="p-3">Win-Rate, Cycle-Dauer in Tagen</td>
                  <td className="p-3">25–35 % Win, −15–25 % Cycle vs. Baseline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="fehler" className="mt-14">
          <h2>Typische Fehler & Governance</h2>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <ul className="list-disc ml-5">
              <li>
                <strong>KI ohne Quellen:</strong> Jede Aussage braucht belegbare
                Herkunft. Hinterlege Links/Belege in deinem Asset-Gerüst.
              </li>
              <li>
                <strong>Personalisierung ohne Relevanz:</strong> „Hallo {`{Vorname}`}``
                reicht nicht. Relevanz = Signal × Hypothese × Proof.
              </li>
              <li>
                <strong>Compliance hinten angestellt:</strong> Opt-Out,
                Legitimate-Interest-Abwägung, Dokumentation – das sind Deal-Enabler,
                keine Bremsen.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            {faq.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          {/* FAQ Schema is injected in Head */}
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>Wie gewinnst du 2025 B2B-Kunden trotz Vertrauensverlust und härterem Cold Calling?</strong>{" "}
            Indem du KI nutzt, um <em>vor</em> dem Erstkontakt Relevanz und Belege zu
            liefern: Intent-Signale erkennen, Proof personalisieren, Compliance
            transparent machen. So entsteht ein Vertrauensvorschuss, der die
            Erstgesprächsquote und die Win-Rate spürbar erhöht.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Bereit für einen AI-first Outbound, der Vertrauen vor dem ersten Call
              schafft?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir bauen dir in 30 Tagen ein signalbasiertes KI-Playbook inkl.
              Proof-Bibliothek, Mikro-Landingpages und KPI-Dashboard.
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

              {/* Button öffnet das Pop-up via :target */}
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

          {/* Pop-up (Modal) */}
          <div
            id="cta-pop"
            className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
          >
            {/* Klick auf Overlay schließt wieder */}
            <a
              href="#"
              className="absolute inset-0 bg-black/50"
              aria-label="Overlay schließen"
            ></a>

            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cta-pop-title"
              className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            >
              {/* Schließen-Button */}
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
                href="/blog/intent-signale-fuer-b2b-outbound"
              >
                Intent-Signale im B2B: Von Daten zu Deals
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/roi-rechner-b2b">
                Interaktive ROI-Rechner: So verkürzt du Sales-Zyklen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/ki-governance">
                KI-Governance im Vertrieb: Guardrails, die Vertrauen schützen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/social-proof-b2b">
                Social Proof, der wirklich wirkt: Cases, Reviews, Benchmarks
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu „B2B-Kundengewinnung mit KI“
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
                  <td className="p-3 font-medium text-zinc-900">Intent-Signal</td>
                  <td className="p-3 text-zinc-700">
                    Messbarer Hinweis auf aktives Interesse (z. B. Besuch einer
                    Pricing-Seite, Job-Posting, Tech-Stack-Wechsel).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Proof Point</td>
                  <td className="p-3 text-zinc-700">
                    Beleg für Wirksamkeit (Kennzahlen, Case-Snippet, Zertifikat,
                    Benchmark), der Risiko reduziert.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Mikro-Landingpage
                  </td>
                  <td className="p-3 text-zinc-700">
                    Personalisierte Zielseite pro Account/Rolle mit Hypothese, Proof und
                    CTA – vor dem Erstgespräch.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Human-in-the-Loop (HITL)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Menschliche Qualitätskontrolle für KI-Outputs, inkl.
                    Quellencheck, Compliance und Tonalität.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Legitimate Interest</td>
                  <td className="p-3 text-zinc-700">
                    Rechtsgrundlage der DSGVO für B2B-Outreach, wenn berechtigtes
                    Interesse vorliegt und Opt-Out respektiert wird.
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
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=128&q=60"
              alt="Autorin"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role}. Schwerpunkte: Intent-Daten, KI-Playbooks, Trust-Design.
              </div>
              <a
                href="https://www.linkedin.com/in/"
                className={`text-sm hover:underline ${accent}`}
              >
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>Markus Feld</strong> – Head of Revenue
              Operations.
              <a href="https://www.linkedin.com/in/" className={`hover:underline ${accent}`}>
                {" "}
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
              Edelman – 2025 Trust Barometer (Global Report):{" "}
              https://www.edelman.com/sites/g/files/aatuss191/files/2025-01/2025%20Edelman%20Trust%20Barometer_Final.pdf
            </li>
            <li>
              Gartner – B2B Buying Journey Insights (2025):{" "}
              https://www.gartner.com/en/sales/insights/b2b-buying-journey
            </li>
            <li>
              Salesforce – State of Sales (aktuelle Ausgabe):{" "}
              https://www.salesforce.com/resources/research-reports/state-of-sales/
            </li>
            <li>
              HubSpot – 2025 State of Marketing: https://www.hubspot.com/state-of-marketing
            </li>
            <li>
              HubSpot – State of Cold Calling 2025:{" "}
              https://blog.hubspot.com/sales/state-of-cold-calling
            </li>
            <li>
              Forrester – Predictions 2025 (B2B Marketing & Sales):{" "}
              https://www.forrester.com/predictions/b2b-2025/
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
