// src/app/blog/micro-fulfillment-center-ecommerce/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Head of Fulfillment – 9 Jahre Erfahrung",
  image: "https://source.unsplash.com/96x96/?portrait,man,professional",
  linkedin: "https://www.linkedin.com/",
};

const reviewer = {
  name: "Thomas Müller",
  role: "Director Logistics – 18 Jahre Erfahrung in E-Commerce Logistik",
  image: "https://source.unsplash.com/96x96/?portrait,man,smile",
  linkedin: "https://www.linkedin.com/",
};

const canonical =
  "https://www.example.com/blog/micro-fulfillment-center-ecommerce";

export default function ArticlePage() {
  const publishDate = "2025-08-20";
  const readingTime = "10 Minuten";
  const title =
    "Micro-Fulfillment-Center im E-Commerce: So optimierst du Lieferzeiten & Kosten";
  const description =
    "Wie Händler mit dezentralen Logistiklösungen Same-Day/Next-Day erreichen, Last-Mile-Kosten senken und skalierbar wachsen – inkl. Praxisbeispiele & Fahrplan.";

  const hero = {
    src: "/Micro-Fulfillment.png",
    alt: "Schematische Darstellung eines Micro-Fulfillment-Centers mit städtischer Zustellung",
  };

  const articleImage1 = {
    src: "https://source.unsplash.com/1600x600/?warehouse,robots,automation",
    alt: "Autonome Roboter transportieren Kisten in einem automatisierten Lager",
    caption:
      "Goods-to-Person und autonome mobile Roboter (AMR) sind typische Bausteine in MFCs.",
  };

  const articleImage2 = {
    src: "https://source.unsplash.com/1600x600/?delivery,van,city,logistics",
    alt: "Lieferfahrzeug in urbaner Umgebung auf der letzten Meile",
    caption:
      "Weniger Kilometer auf der letzten Meile durch Nähe zum Kunden – das ist der Kernnutzen dezentraler Micro-Hubs.",
  };

  const company = {
    name: "Findbar GmbH",
    url: "https://www.example.com",
    logo: "https://www.example.com/logo.png",
  };

  const breadcrumbs = [
    { name: "Blog", url: "https://www.example.com/blog" },
    { name: "Logistik & Fulfillment", url: "https://www.example.com/blog/logistik" },
    { name: "Micro-Fulfillment-Center", url: canonical },
  ];

  // JSON-LD: Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "de-DE",
    image: hero.src,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: "Head of Fulfillment",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  // JSON-LD: Organization (Company)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    logo: company.logo,
    sameAs: [author.linkedin],
  };

  // JSON-LD: Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };

  // JSON-LD: FAQ (filled below again to match visible FAQ)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist ein Micro-Fulfillment-Center (MFC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ein MFC ist ein kleines, meist automatisiertes Lager in Kundennähe (z. B. in der Stadt oder im Store-Backroom), das Online-Bestellungen sehr schnell kommissioniert und ausliefert – häufig am selben oder nächsten Tag.",
        },
      },
      {
        "@type": "Question",
        name: "Wann lohnt sich ein MFC wirtschaftlich?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Bei hohen Last-Mile-Kosten, kurzen Liefer-SLAs (Same-Day/Next-Day), starkem Stadtanteil und wiederkehrenden Peaks. Ein Stufenplan mit Pilot-Hub, klaren KPIs und IT-Integration reduziert das Risiko.",
        },
      },
      {
        "@type": "Question",
        name: "Wie integriert man ein MFC in bestehende IT?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Über standardisierte Schnittstellen zwischen Shop/OMS, WMS und Last-Mile-Carriern. Kern ist eine Auftrags-Orchestrierung, die Verfügbarkeit, Entfernung und Auslastung berücksichtigt.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Technologien kommen typischerweise zum Einsatz?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Goods-to-Person-Systeme (AutoStore, Shuttle), AMRs, Sorter, Verpackungs-Automation, sowie Software für Bestandssteuerung und Slotting. Für Stores: Pick-to-Light und In-Store-Picking.",
        },
      },
      {
        "@type": "Question",
        name: "Wie wirken MFCs auf Nachhaltigkeit?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Kürzere Wege senken Emissionen pro Paket; außerdem lassen sich Zustellzeiten bündeln und alternative Zustellarten (Cargo-Bike, Locker) besser einplanen.",
        },
      },
    ],
  };

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
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={hero.src} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={hero.src} />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            Micro-Fulfillment-Center im E-Commerce: Wie Händler mit dezentralen
            Logistiklösungen Lieferzeiten und Kosten optimieren
          </h1>

          <p className="mt-3 text-lg text-zinc-700">
            Same-Day und Next-Day sind der neue Standard – doch die{" "}
            <em>Last-Mile</em> bleibt teuer. Hier erfährst du, wie
            Micro-Fulfillment-Center (MFCs) dich näher an deine Kund:innen
            bringen, Lieferzeiten verkürzen und Kosten spürbar senken. Mit
            Praxisbeispielen, Technologien und einem konkreten Fahrplan.
          </p>

          {/* Datum & Lesedauer */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={publishDate}>
              {new Date(publishDate).toLocaleDateString("de-DE")}
            </time>
            {" · "}Lesedauer: <span className="tabular-nums">{readingTime}</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet={hero.src} />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src={hero.src}
                  alt={hero.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Micro-Fulfillment-Center nahe am Kunden beschleunigen die letzte
              Meile.
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
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
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              Kunden erwarten heute{" "}
              <strong>Same-Day/Next-Day</strong>. Zentrale Großlager stoßen
              dabei an Grenzen – die letzte Meile treibt{" "}
              <strong>überproportional die Kosten</strong>.
            </li>
            <li>
              <strong>Micro-Fulfillment-Center (MFCs)</strong> sind kleine,
              oft <strong>automatisierte Lager</strong> in Stadtnähe. Sie
              reduzieren Wege, beschleunigen Kommissionierung und verbessern die
              Liefertreue.
            </li>
            <li>
              Technologie-Bausteine: <strong>Goods-to-Person</strong>, AMRs,
              smarte Bestandssteuerung, Carrier-Integrationen und
              Retouren-Workflows.
            </li>
            <li>
              <strong>Vorteile</strong>: kürzere Lieferzeiten, bessere
              Kundenzufriedenheit, skalierbare Strukturen und{" "}
              <strong>weniger Emissionen</strong> pro Paket.
            </li>
            <li>
              <strong>Für wen?</strong> Lebensmittel-Quick-Commerce,
              Fashion-Omnichannel, wachstumsstarke KMU – auch via{" "}
              <em>Partner-MFCs</em> ohne hohe CAPEX.
            </li>
            <li>
              <strong>Fahrplan</strong>: Pilotstandort &gt; IT-Integration &gt;
              Prozess-Skalierung &gt; Netzwerk-Rollout – mit klaren KPIs.
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
                href="#einleitung"
              >
                Einleitung – Die Erwartungshaltung der Kunden
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#problem-zentrallager"
              >
                Problem zentraler Großlager: Wege & Kosten
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#was-sind-mfc"
              >
                Was sind Micro-Fulfillment-Center (MFCs)?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#technologie"
              >
                Typische Technologie & Software-Integration
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#herausforderungen-klassisch"
              >
                Herausforderungen im klassischen Fulfillment
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#vorteile-mfc"
              >
                Vorteile von MFCs für Händler & Marken
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#praxisbeispiele"
              >
                Praxisbeispiele aus Handel & KMU
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#umsetzung"
              >
                Umsetzung: Invest, IT & Partner
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#fazit-ausblick"
              >
                Fazit & Ausblick
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#faq"
              >
                FAQ
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="einleitung" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Einleitung – Die Erwartungshaltung der Kunden
          </h2>
          <p>
            Die Regeln im E-Commerce haben sich verschoben:{" "}
            <strong>Same-Day-Delivery</strong> und{" "}
            <strong>Next-Day-Delivery</strong> sind für viele Zielgruppen
            Standard. Studien zeigen, dass Kund:innen flexible und schnelle
            Lieferoptionen zunehmend voraussetzen – Liefertreue und
            unkomplizierte Retouren sind kaufentscheidend. Gleichzeitig steigt
            das Bewusstsein für nachhaltige Zustellungen. Wer hier überzeugt,
            verbessert Wiederkaufsraten und reduziert Supportkosten.
          </p>
          <p>
            Für Händler bedeutet das: Liefernetzwerke neu denken. Denn die{" "}
            <em>letzte Meile</em> verursacht einen{" "}
            <strong>überproportionalen Kostenanteil</strong> und entscheidet
            über die erlebte Servicequalität. Klassische Zentrallager mit
            langen Ausfahrten in die Stadt sind dafür oft zu träge.
            Dezentralisierung ist der Schlüssel – aber nicht blind, sondern
            datengetrieben.
          </p>
        </section>

        <section id="problem-zentrallager" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Problem klassischer Zentrallager: lange Lieferwege, hohe Kosten
          </h2>
          <div className="rounded-xl border border-zinc-200 p-5 bg-white">
            <p className="mb-3">
              Zentrale Megalager bieten Skalenvorteile im Wareneingang und in
              der Lagerhaltung. Auf der Auslieferungsseite jedoch steigen die
              Kosten – je weiter die Pakete bis zur Haustür zurücklegen müssen,
              desto höher der Aufwand. City-Staus, verteilte Empfänger, enge
              Zustellfenster und fehlgeschlagene Zustellversuche treiben die
              Kosten. Ergebnis: Die letzte Meile frisst den Großteil des
              Versandbudgets und verschlechtert die Marge pro Bestellung.
            </p>
            <p>
              Neben Kosten leidet die <strong>Lieferzeit</strong>. Lange Anfahrt
              &gt; kurze Zustellzeitfenster &gt; Rückstau im Depot – am Ende
              wackelt die SLA. Das passt nicht mehr zur Erwartung der
              Kund:innen, die abends bestellen und morgens empfangen möchten.
            </p>
          </div>
        </section>

        <section id="was-sind-mfc" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Was sind Micro-Fulfillment-Center (MFCs)?
          </h2>
          <p>
            <strong>Micro-Fulfillment-Center</strong> sind{" "}
            <em>kleine, automatisierte Lager</em> in Kundennähe – häufig in
            urbanen Gebieten, als Stand-alone-Mikrohub oder als{" "}
            <em>Back-of-Store-Lager</em> im Handel. Sie bündeln einen kuratierten
            Sortimentsteil (Schnelldreher) und kommissionieren Bestellungen
            innerhalb weniger Minuten. Das senkt Zustellwege und beschleunigt
            die Auslieferung drastisch.
          </p>

          {/* Bild 1 – volle Breite */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={`${articleImage1.src}&w=800&q=80`}
                />
                <img
                  loading="lazy"
                  src={`${articleImage1.src}&w=1800&q=80`}
                  alt={articleImage1.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              {articleImage1.caption}
            </figcaption>
          </figure>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Kernidee</h3>
              <p className="text-sm">
                Nähe zum Kunden verkürzt Wege, reduziert Kosten und beschleunigt
                Lieferungen – besonders in dicht besiedelten Regionen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Abgrenzung</h3>
              <p className="text-sm">
                Im Unterschied zu großen Fulfillment-Centern sind MFCs
                flächen- und sortimentsmäßig kleiner, hochautomatisiert und auf
                Geschwindigkeit ausgelegt.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">SLA-Fit</h3>
              <p className="text-sm">
                Ideal für Same-Day/Next-Day, Click-&-Collect, Ship-from-Store
                und schnelle regionale Zustellung.
              </p>
            </div>
          </div>
        </section>

        <section id="technologie" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Typische Technologie: Robotics, Automatisierung & Software
            Integration
          </h2>
          <p>
            MFCs kombinieren <strong>Hardware</strong> und{" "}
            <strong>Software-Orchestrierung</strong>. Auf der Hardwareseite
            dominieren Goods-to-Person-Systeme (z. B.{" "}
            <em>Cube-Storage</em>, Shuttle), autonome mobile Roboter (AMR),
            Fördertechnik und Sorter. Softwareseitig steuern WMS/OMS den
            Auftragsfluss, während Bestands- und Slotting-Algorithmen
            Schnelldreher vorn halten. Carrier-APIs bündeln Versandlabels,
            Zeitfenster und Track-&-Trace.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold mb-2">
              System-Stack in der Praxis (Beispiel)
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 !mt-0">
              <li>
                <strong>WMS/OMS</strong>: Auftragspriorisierung, Wellen vs.
                Waveless, Re-Routing bei Störungen
              </li>
              <li>
                <strong>Robotics</strong>: GtP-Stationen, AMR für Nachschub,
                Auto-Bagging/Auto-Boxing
              </li>
              <li>
                <strong>Planning</strong>: Slotting, Forecast, Bestandsaufbau
                für Peak-Zyklen
              </li>
              <li>
                <strong>Shipping</strong>: Multi-Carrier, Time-Slot-Zustellung,
                Locker/Packstation, Same-Day-Zusteller
              </li>
              <li>
                <strong>Returns</strong>: Vor-Sortierung, Condition Check,
                Wiederverfügbarkeit in Stunden statt Tagen
              </li>
              <li>
                <strong>Analytics</strong>: SLA-Monitoring, Pick-Rate,
                First-Time-Delivery, CO₂ pro Paket
              </li>
            </ul>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Die beste MFC-Technologie nützt dir nichts, wenn die
              <em> Auftrags-Orchestrierung</em> nicht entscheidet, welcher
              Standort, welches Inventar und welcher Carrier{' '}
              <em>jetzt</em> der wirtschaftlichste Weg zum Kunden ist.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Max Mustermann, direktes Zitat aus Projektpraxis
            </figcaption>
          </figure>
        </section>

        <section id="herausforderungen-klassisch" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Herausforderungen im klassischen Fulfillment
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Hohe Last-Mile-Kosten</h3>
              <p className="text-sm">
                Die letzte Meile verschlingt den größten Anteil der
                Versandkosten – besonders im städtischen Raum mit Stop-&-Go,
                Parksuchverkehr und Zustellfenstern.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Retouren-Aufwand</h3>
              <p className="text-sm">
                Zentraler Rückfluss bremst die Wiederverfügbarkeit und erhöht
                Handling-Kosten. Lokale Aufbereitung kann TAT massiv verkürzen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Peak-Anfälligkeit</h3>
              <p className="text-sm">
                Sales-Events &amp; Saisonalität erzeugen Wellen, die zentrale
                Lager kaum glätten können – die regionale Nähe fehlt.
              </p>
            </div>
          </div>

          {/* Gegenüberstellung */}
          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-1/2">
                    Zentrallager
                  </th>
                  <th className="text-left font-semibold p-3 w-1/2">
                    Micro-Fulfillment-Center
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Lange Zustellwege in die Stadt</td>
                  <td className="p-3">Kurze Wege, City-näher</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">SLA-Risiken bei Same-/Next-Day</td>
                  <td className="p-3">SLA-Fit durch Nähe &amp; Tempo</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Retouren zentral und langsam</td>
                  <td className="p-3">Lokale Aufbereitung &amp; Re-Stock</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Wenig flexibel bei Peaks</td>
                  <td className="p-3">Skalierbar via Netzwerk &amp; On-Demand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="vorteile-mfc" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Vorteile von MFCs für Händler &amp; Marken
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                1) Kürzere Lieferzeiten &amp; bessere SLAs
              </h3>
              <p className="text-sm">
                Nähe senkt Transportzeit und Variabilität. Die
                Kommissionierzeit in MFCs liegt – je nach Technologie – nur bei
                wenigen Minuten pro Auftrag.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                2) Kostensenkung auf der letzten Meile
              </h3>
              <p className="text-sm">
                Kürzere Routen, mehr Stopps pro Tour und mehr Erstzustellungen
                drücken die Kosten je Paket spürbar.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">3) On-Demand-Skalierung</h3>
              <p className="text-sm">
                Durch zusätzliche Hubs oder Partner-MFCs lässt sich die
                Kapazität flexibel ausbauen – saisonal und regional.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                4) Nachhaltigkeit &amp; Kundenerlebnis
              </h3>
              <p className="text-sm">
                Weniger Kilometer bedeuten weniger Emissionen pro Paket –
                gleichzeitig steigen Liefertreue und Kundenzufriedenheit.
              </p>
            </div>
          </div>

          {/* Bild 2 – volle Breite */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={`${articleImage2.src}&w=800&q=80`}
                />
                <img
                  loading="lazy"
                  src={`${articleImage2.src}&w=1800&q=80`}
                  alt={articleImage2.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              {articleImage2.caption}
            </figcaption>
          </figure>
        </section>

        <section id="praxisbeispiele" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Praxisbeispiele</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-1">Lebensmittelhandel</h3>
              <p className="text-sm">
                Quick-Commerce-Modelle und Supermärkte nutzen MFCs, um
                Frische-Sortimente schnell zu kommissionieren. Die Kombination
                aus Back-of-Store-MFC (Schnelldreher) und regionalem DC (Langsamdreher)
                ist dabei häufig.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-1">Fashion-Omnichannel</h3>
              <p className="text-sm">
                Filialnetz + MFC erlaubt <em>Ship-from-Store</em>, Click-&-Collect
                und schnelle Heimzustellung. Retouren können lokal geprüft und
                wiederverkaufsfähig gemacht werden – schnellerer Re-Stock.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-1">KMU &amp; D2C-Marken</h3>
              <p className="text-sm">
                Über <em>Partner-MFCs</em> lassen sich Metropolregionen ohne
                Eigeninvest erschließen. Ideal, um neue Märkte zu testen und
                die Liefer-SLAs sofort zu heben.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-1">Marktplatz-Seller</h3>
              <p className="text-sm">
                Für Seller, die Premium-SLAs erfüllen müssen (Prime/Plus),
                sind MFC-Netze ein Hebel für Ranking, Buy-Box und Conversion.
              </p>
            </div>
          </div>
        </section>

        <section id="umsetzung" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Umsetzung: Investitionskosten, IT-Integration &amp; Partner
          </h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            {/* Fließtext */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                1) Investitions- und Betriebskosten realistisch planen
              </h3>
              <p>
                Die Bandbreite reicht von <em>Low-Capex</em> (z. B. Store-Backroom
                mit In-Store-Picking, einfache Regale, mobile Scanner) bis
                <em> High-Capex</em> (Cube-Storage, Shuttle, AMR-Flotten).
                Wichtig sind Total-Cost-of-Ownership (TCO) über 3–5 Jahre,
                Restwerte, Serviceverträge und Energieverbrauch. Plane
                außerdem Puffer für Peak-Kapazität und Wartungsfenster ein.
              </p>

              <h3 className="font-semibold text-lg mt-6 mb-2">
                2) IT-Integration &amp; Datenfluss
              </h3>
              <p>
                MFCs sind so gut wie ihre Schnittstellen. Orchestrierung
                benötigt <strong>saubere Echtzeitdaten</strong>:
                Bestandsgenauigkeit, Auftragsprioritäten, Carrier-Slots,
                Kapazitäten je Standort. Eine zentrale Logik entscheidet:{" "}
                <em>Welcher Standort erfüllt welchen Auftrag am günstigsten bei
                gleicher SLA?</em>
              </p>

              <h3 className="font-semibold text-lg mt-6 mb-2">
                3) Partnerlandschaft &amp; Kooperationen
              </h3>
              <p>
                Baue früh ein Partnernetz: Technologieanbieter (Robotics,
                WMS/OMS), 3PLs mit MFC-Hubs, Same-Day-Zusteller, Locker-/PUDO-Netze,
                City-Logistiker (Cargo-Bikes). Vertragsmodelle sollten
                Skalierung, Datenzugriff und SLA-Sanktionen klar regeln.
              </p>
            </div>

            {/* Infobox rechts */}
            <aside className="rounded-xl border-2 border-dashed border-emerald-300 p-4 bg-emerald-50">
              <h4 className="font-semibold mb-2">
                KPI-Set für deinen MFC-Pilot
              </h4>
              <ul className="text-sm space-y-1">
                <li>Pick/Pack pro Stunde &amp; pro MA</li>
                <li>Durchlaufzeit Auftrag (A bis Z)</li>
                <li>First-Time-Delivery-Rate</li>
                <li>Lieferzeit (Median/P95)</li>
                <li>Kosten pro Paket (inkl. Last-Mile)</li>
                <li>Retouren-TAT und Wiederverfügbarkeit</li>
                <li>CO₂ pro Paket</li>
              </ul>
            </aside>
          </div>

          {/* 2-zu-1 Grid mit Tabelle */}
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6">
            <aside className="rounded-xl border border-zinc-200 p-4 bg-white">
              <h4 className="font-semibold mb-2">Rollout-Stufenplan</h4>
              <ol className="list-decimal ml-5 text-sm space-y-1">
                <li>Pilot-Hub in Kernstadt</li>
                <li>IT-Schnittstellen stabilisieren</li>
                <li>Peak-Simulation &amp; Staffing</li>
                <li>Partner-Netz verdichten</li>
                <li>Netzwerk auf 3–5 Hubs ausrollen</li>
              </ol>
            </aside>

            <div className="rounded-2xl border border-zinc-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left font-semibold p-3">
                      Kostenhebel
                    </th>
                    <th className="text-left font-semibold p-3 w-40">
                      Wirkung
                    </th>
                    <th className="text-left font-semibold p-3">
                      Umsetzungsidee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-200">
                    <td className="p-3">Wegstrecke pro Paket</td>
                    <td className="p-3">sehr hoch</td>
                    <td className="p-3">
                      Stadtnaher Hub, Tourenbündelung, Locker/PUDO
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="p-3">Kommissionierleistung</td>
                    <td className="p-3">hoch</td>
                    <td className="p-3">
                      GtP/AMR, Pick-to-Light, Waveless Picking
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="p-3">Retouren-TAT</td>
                    <td className="p-3">mittel</td>
                    <td className="p-3">
                      Lokale Prüfung &amp; Re-Stock, Auto-Grading
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="p-3">Carrier-Mix</td>
                    <td className="p-3">mittel</td>
                    <td className="p-3">
                      Multi-Carrier mit dynamischem Routing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="fazit-ausblick" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Fazit &amp; Ausblick</h2>
          <p>
            Micro-Fulfillment-Center sind kein Hype mehr, sondern ein bewährter
            Baustein moderner Commerce-Logistik. Sie bringen Händler näher an
            Kund:innen, senken Last-Mile-Kosten und stützen ambitionierte
            Liefer-SLAs. Der Schlüssel ist die Kombination aus kluger
            Standortstrategie, Automatisierung auf Maß und einer
            Orchestrierungs-Logik, die <em>jeden Auftrag</em> an den besten
            Standort und Carrier bindet. So wird aus dezentraler Logistik eine
            <strong> Wettbewerbsvorteils-Maschine</strong>.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Was ist ein Micro-Fulfillment-Center (MFC)?
              </h3>
              <p>
                Ein MFC ist ein kleines, meist automatisiertes Lager in
                Stadtnähe oder im Backroom eines Stores. Es hält
                Schnelldreher-Bestände vor, kommissioniert Aufträge in Minuten
                und ermöglicht Same-Day/Next-Day-Lieferungen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Wann lohnt sich ein MFC?</h3>
              <p>
                Wenn deine Zielkunden in urbanen Regionen sitzen, Last-Mile-Kosten
                hoch sind, du Premium-SLAs versprichst oder häufige Peaks hast.
                Ein Pilot mit klaren KPIs liefert Beweise – bevor du skalierst.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Technologie wird benötigt?
              </h3>
              <p>
                Von manuellen Setups (In-Store-Picking) bis vollautomatisierten
                Lösungen (Cube-Storage, Shuttle, AMR). Zentrale Rolle spielt die
                Software-Orchestrierung zwischen Shop/OMS, WMS und Carriern.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie integriere ich Retouren ins MFC?
              </h3>
              <p>
                Mit lokaler Vor-Sortierung, Condition Check, Foto-Dokumentation
                und schnellem Re-Stock. Das reduziert TAT und Lagerhüter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Kann ich ohne CAPEX starten (Partner-MFC)?
              </h3>
              <p>
                Ja. 3PL-Netze bieten MFC-ähnliche City-Hubs als Service. Du
                testest Markt &amp; SLA, bevor du eigene Automatisierung
                aufbaust.
              </p>
            </div>
          </div>

          {/* FAQ Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          ></script>
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie optimierst du Lieferzeiten und Kosten im E-Commerce?
            </strong>{" "}
            Mit einem Netzwerk aus Micro-Fulfillment-Centern, das nah am Kunden
            sitzt, schlau orchestriert und sinnvoll automatisiert. So erreichst
            du Same-Day/Next-Day zuverlässig, senkst Last-Mile-Kosten und
            steigerst die Kundenzufriedenheit – skalierbar und nachhaltig.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du ein MFC-Pilotprojekt in 90 Tagen live bringen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir entwickeln deinen Stufenplan – Standort, IT-Schnittstellen,
              Partner &amp; KPIs – und begleiten die Umsetzung bis zum Go-Live.
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
            />

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

        {/* Weiterführende Artikel */}
        <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/last-mile-logistik-optimieren"
              >
                Last-Mile optimieren: Locker, PUDO &amp; Cargo-Bikes richtig
                einsetzen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/omnichannel-ship-from-store"
              >
                Omnichannel im Griff: Ship-from-Store Schritt für Schritt
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/retourenmanagement-ecommerce"
              >
                Retourenmanagement: Prozesse, Tools, Kennzahlen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/wms-auswahl-checkliste"
              >
                WMS/OMS auswählen: Checkliste für Skalierung
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Micro-Fulfillment
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
                    Last-Mile-Kosten
                  </td>
                  <td className="p-3 text-zinc-700">
                    Anteil der Zustellkosten auf der letzten Etappe von Depot
                    zur Haustür; häufig der teuerste Teil des Versands.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Goods-to-Person (GtP)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Automatisiertes System, das Behälter zur Arbeitsstation
                    bringt, statt dass Picker:innen durch das Lager laufen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">AMR</td>
                  <td className="p-3 text-zinc-700">
                    Autonomer mobiler Roboter für Materialfluss, Nachschub oder
                    Transport zwischen Zonen im Lager.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">OMS</td>
                  <td className="p-3 text-zinc-700">
                    Order-Management-System: Verknüpft Kanäle, Lager und Carrier
                    und entscheidet, wo ein Auftrag erfüllt wird.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Click-&-Collect
                  </td>
                  <td className="p-3 text-zinc-700">
                    Online bestellen, im Store oder an einer Abholstation
                    abholen; reduziert Zustellkosten und steigert Bequemlichkeit.
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
              <div className="text-sm text-zinc-700">{author.role}</div>
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
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              McKinsey (2025):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.mckinsey.com/industries/logistics/our-insights/what-do-us-consumers-want-from-e-commerce-deliveries"
                target="_blank"
                rel="noopener noreferrer"
              >
                What do US consumers want from e-commerce deliveries?
              </a>
            </li>
            <li>
              DHL – Delivered (2024):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.dhl.com/global-en/delivered/global-trade/challenging-logistics-of-last-mile-delivery.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The challenging logistics of last-mile delivery
              </a>
            </li>
            <li>
              Capgemini Research Institute (2024):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://prod.ucwe.capgemini.com/wp-content/uploads/2024/01/Final-Web-Version-Report-Consumer-Trends-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                What matters to today’s consumer – 2024 Consumer Behavior
                Tracker
              </a>
            </li>
            <li>
              Walmart Corporate (2024):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://corporate.walmart.com/news/2024/07/10/walmarts-grocery-network-transformation-the-next-steps-on-our-supply-chain-modernization-journey"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grocery network transformation: Supply chain modernization
              </a>
            </li>
            <li>
              Interact Analysis via Food Logistics (2024):{" "}
              <a
                className={`hover:underline ${accent}`}
                href="https://www.foodlogistics.com/warehousing/micro-fulfillment/news/22918173/interact-analysis-automated-microfulfillment-centers-witnessed-series-of-challenges-to-adoption-study"
                target="_blank"
                rel="noopener noreferrer"
              >
                Automated Micro-Fulfillment Centers: challenges to adoption
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
