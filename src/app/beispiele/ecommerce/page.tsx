// src/app/blog/digitale-b2b-onlineshops-4-strategien/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const accent = "text-emerald-700";

  const author = {
    name: "Max Mustermann",
    role: "B2B E-Commerce Consultant",
    focus: "B2B Commerce, UX, Checkout-Optimierung, System-Integrationen",
    image: "/Autorenbild.jpg",
    linkedin: "https://linkedin.com",
  };

  const reviewer = {
    name: "Claudia Müller",
    role: "Head of Digital Commerce",
    linkedin: "https://linkedin.com",
  };

  const company = {
    name: "Muster GmbH",
    url: "https://www.muster-gmbh.de",
    email: "muster@beispiel.de",
    phone: "+49 123456789",
    street: "Musterstraße 1",
    locality: "Musterstadt",
    postalCode: "00000",
    country: "DE",
  };

  const meta = {
    title:
      "Digitale B2B-Onlineshops: 4 Strategien für ein reibungsloses Kauferlebnis",
    description:
      "Wie du B2B-Kunden schneller zum Abschluss führst: Suche & Schnellbestellung, B2B-Checkout, Personalisierung & Self-Service, sowie ERP & PunchOut-Integration.",
    canonical:
      "https://www.muster-gmbh.de/blog/digitale-b2b-onlineshops-4-strategien",
    ogImage: "/ecommerce1.jpg",
    datePublished: "2025-08-28",
    dateModified: "2025-08-28",
    readingTime: "10 Minuten",
    language: "de",
  };

  const articleLD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    inLanguage: meta.language,
    image: [`${company.url}${meta.ogImage}`],
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      sameAs: [author.linkedin],
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.canonical,
    },
  };

  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.locality,
      postalCode: company.postalCode,
      addressCountry: "DE",
    },
    sameAs: [author.linkedin, reviewer.linkedin],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: company.email,
        telephone: company.phone,
        areaServed: "DE",
        availableLanguage: ["de"],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:url" content={meta.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
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
            Digitale B2B-Onlineshops: 4 Strategien für ein reibungsloses
            Kauferlebnis
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst, dass gewerbliche Käufer ohne Reibung bestellen – vom
            Finden des richtigen Produkts bis zur Bestellung mit
            Bestellnummer/PO und Zahlungsziel? In diesem Leitfaden bekommst du
            vier praxiserprobte Strategien, die sich in B2B-Shops schnell
            auszahlen.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={meta.dateModified}>
              {new Date(meta.dateModified).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
              })}
            </time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">{meta.readingTime}</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-sm border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/ecommerce1.jpg" />
                <img
                  fetchPriority="high"
                  src="/ecommerce1.jpg"
                  alt="Pakete im Versandlager – Symbol für B2B-Logistik und schnelle Bestellabwicklung"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Pakete: Visual für Fulfillment im B2B-E-Commerce
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
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
        </header>

        {/* TL;DR */}
        <aside className="mb-10 rounded-sm border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>Schnell zum Produkt:</strong> Optimierte Suche,
              klare Kategorien und <em>Schnellbestellung</em> (SKU/CSV) sind im
              B2B Pflicht – sie sparen Stammkunden Minuten bei jeder Order.
            </li>
            <li>
              <strong>Checkout, der B2B kann:</strong> Zahlungsziel, PO-Feld,
              Lieferadressen, Freigaben &amp; Pflichtangaben – alles ohne Umwege
              im Flow abbilden.
            </li>
            <li>
              <strong>Personalisierung &amp; Self-Service:</strong>{" "}
              kundenindividuelle Preise, Kontingente und Bestelllisten direkt im
              Konto – dadurch weniger Rückfragen, mehr Wiederkäufe.
            </li>
            <li>
              <strong>Nahtlose Integration:</strong> ERP/PIM/CRM und
              <em> PunchOut (OCI/cXML)</em> verbinden Shop &amp; Procurement,
              damit Warenkörbe und Preise überall konsistent sind.
            </li>
            <li>
              <strong>Messbar verbessern:</strong> Such-Zero-Result-Rate,
              Checkout-Abbruchquote, Wiederkaufsrate und Supporttickets als
              Leit-KPIs im Blick behalten.
            </li>
          </ul>
        </aside>

        {/* ToC */}
        <nav
          aria-label="Inhaltsverzeichnis"
          className="mb-12 rounded-sm border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#was-ist-b2b-onlineshop"
              >
                Was ist ein B2B-Onlineshop – und warum hakt es oft?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#strategie-1-suche-schnellbestellung"
              >
                Strategie 1: Schnell zum Produkt (Suche, Kategorien,
                Schnellbestellung)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#strategie-2-b2b-checkout"
              >
                Strategie 2: Checkout, der B2B kann
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#strategie-3-personalisierung-selfservice"
              >
                Strategie 3: Personalisierung &amp; Self-Service
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#strategie-4-integration-punchout"
              >
                Strategie 4: Integration mit ERP &amp; PunchOut (OCI/cXML)
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#praxis-checkliste"
              >
                Praxis-Checkliste: 20 Punkte für reibungsloses Bestellen
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#haeufige-fehler"
              >
                Häufige Fehler – und wie du sie vermeidest
              </a>
            </li>
          </ol>
        </nav>

        {/* Intro / Problem & Lösung */}
        <section id="was-ist-b2b-onlineshop">
          <h2 className="text-2xl font-bold mb-3">
            Was ist ein B2B-Onlineshop – und warum hakt es oft?
          </h2>
          <p className="leading-relaxed">
            Ein B2B-Onlineshop ist ein digitaler Vertriebskanal, über den
            Geschäftskunden wiederkehrend und häufig in größeren Warenkörben
            bestellen. Das klingt nach „wie B2C, nur mehr“ – ist es aber nicht:
            B2B-Orders brauchen{" "}
            <em>kundenspezifische Preise, PO-Nummern, mehrere Lieferadressen,
            Freigaben, individuelle Sortimente und Zahlungsziele</em>. Genau
            hier entstehen Reibungen: Käufer finden Produkte nicht schnell
            genug, Checkout-Felder passen nicht zu internen Prozessen oder Preise
            variieren zwischen ERP und Shop.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[2fr,1fr]">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Wo Reibung im B2B-Kaufprozess entsteht
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Unpräzise Suche, keine SKU-/Teilenummern-Treffer</li>
                <li>
                  Keine <strong>Schnellbestellung</strong> (SKU/CSV) und keine
                  Bestelllisten
                </li>
                <li>Checkout ohne PO-Feld, ohne Zahlungsziel oder Freigaben</li>
                <li>Abweichende Preise zwischen ERP, Shop &amp; Angebot</li>
                <li>Kein PunchOut – Medienbrüche im E-Procurement</li>
              </ul>
            </div>

            <aside className="rounded-sm border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Quick Insight</h3>
              <p className="text-sm">
                <strong>B2B-Käufer sind Wiederholungstäter</strong>: Sie kennen
                ihre Artikelnummern. Je weniger Klicks bis zum Warenkorb, desto
                höher die Conversion – und desto geringer die Supportlast.
              </p>
            </aside>
          </div>
        </section>

        {/* Bild 1 – Unsplash */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/ecommerce2.png"
              />
              <img
                loading="lazy"
                src="/ecommerce2.png"
                alt="Gepackte Kartons im Lager – Symbol für wiederkehrende B2B-Bestellungen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            B2B-Einkauf ist häufig: Geschwindigkeit und Prozess-Passung sind
            entscheidend.
          </figcaption>
        </figure>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-sm border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „B2B-Shops gewinnen, wenn sie Zeit sparen: Treffer in der Suche,
            Listen kaufen können, Checkout ohne Nachfragen – und überall die
            gleichen Preise.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Max Mustermann, direktes Zitat
          </figcaption>
        </figure>

        {/* Strategie 1 */}
        <section id="strategie-1-suche-schnellbestellung" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Strategie 1: Schnell zum Produkt – Suche, Kategorien &amp;
            Schnellbestellung
          </h2>
          <p>
            Die schnellste Conversion ist die, die gar nicht „verkaufen“ muss:
            Wenn Profikunden ihre SKU eingeben, erwarten sie <em>sofortige</em>{" "}
            Treffer, Autocomplete und passende Filter. Ergänze das um
            Bestelllisten und CSV-Uploads – und Stammkunden sind in Sekunden am
            Ziel.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Wie sieht eine B2B-fähige Suche aus?
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Autocomplete mit <strong>SKU/Teilenummer</strong>, Synonymen und
              Fehlertoleranz (z. B. „M8 Schraube“ ≈ „M8x30“)
            </li>
            <li>Filter für Bestand, Staffelpreise, Lieferzeit, Zertifikate</li>
            <li>Zero-Result-Tracking und Synonym-Management</li>
            <li>„Zuletzt gekauft“ und „Passend zu …“ in der Ergebnisliste</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Schnellbestellung – das B2B-Produktivitätstool
          </h3>
          <p>
            Biete eine dedizierte Maske für die <strong>Schnellbestellung</strong>:
            Eingabefelder für SKU &amp; Menge, Tab-Navigation, Zeilen-Dupes,
            Einfügen per Zwischenablage sowie <strong>CSV-Upload</strong>.{" "}
            Praktisch: Bestelllisten benennen, teilen und wiederverwenden.
          </p>

          <div className="mt-6 rounded-sm border border-zinc-200 p-4">
            <h4 className="font-semibold mb-2">UI-Bausteine (Beispiele)</h4>
            <ul className="grid md:grid-cols-2 gap-2 list-disc ml-5">
              <li>Autocomplete mit SKU-Priorisierung</li>
              <li>„Zuletzt bestellt“-Widget im Suchoverlay</li>
              <li>CSV-Upload mit Validierung (SKU, Menge, Standort)</li>
              <li>Bestelllisten mit Reorder in 1-Click</li>
            </ul>
          </div>

          <aside className="mt-6 rounded-sm border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-relaxed">
              Tipp: Wenn deine Kategorie-Navigation zu breit ist, verliert man
              sich schnell. Straffe die Taxonomie und reduziere die Anzahl
              Top-Level-Kategorien zugunsten klarer Pfade – das hilft der Suche
              und der Orientierung gleichermaßen.
            </p>
          </aside>
        </section>

        {/* Strategie 2 */}
        <section id="strategie-2-b2b-checkout" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Strategie 2: Checkout, der B2B kann
          </h2>
          <p>
            B2B-Checkouts müssen Unternehmensrealität abbilden:{" "}
            <em>PO-Feld (Bestellnummer), Kostenstelle, Zahlungsziel,
            Lieferadressen, Versand per Spedition, Netto-Preise</em>. Schaffe
            das ohne Sonderwege durch klare Felder, logische Reihenfolge und
            schlanke Validierung.
          </p>

          <div className="mt-6 rounded-sm border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Check-Punkt</th>
                  <th className="text-left font-semibold p-3">B2C</th>
                  <th className="text-left font-semibold p-3">B2B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Preis-Anzeige</td>
                  <td className="p-3">Brutto</td>
                  <td className="p-3">Netto (kundenspezifisch)</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Zahlarten</td>
                  <td className="p-3">Karte, Wallet</td>
                  <td className="p-3">Rechnung, SEPA, Zahlungsziel</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Felder</td>
                  <td className="p-3">Standardadresse</td>
                  <td className="p-3">PO-/Kostenstelle, Mehrfach-Lieferadressen</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Freigabe</td>
                  <td className="p-3">Selten</td>
                  <td className="p-3">Mehrstufig möglich</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Pflichtfelder ohne Frust
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>PO-Nummer/Kostenstelle als eigenes Feld, deutlich beschriftet</li>
            <li>Rechnungs- vs. Lieferadresse klar trennen</li>
            <li>
              Lieferoptionen an Warenkorb koppeln (Gewicht, Gefahrgut,
              Sperrgut)
            </li>
            <li>
              Freigabe-Workflow aktivierbar (z. B. unter dem Firmenkonto, Level
              pro Nutzer)
            </li>
            <li>Mehrwertsteuer-ID und Debitorennummer sauber erfassen</li>
          </ul>

          <p className="mt-4">
            Reduziere Reibung mit Adress-Autocomplete, validiere
            Mehrwertsteuer-ID serverseitig und erlaube „Kauf auf Rechnung“ für
            verifizierte Firmenkonten. Zeige Staffelpreise, Verfügbarkeiten und
            Lieferzeiten <em>im Checkout</em> noch einmal an – das vermeidet
            Rückfragen.
          </p>
        </section>

        {/* Bild 2 – Unsplash */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/ecommerce3.png"
              />
              <img
                loading="lazy"
                src="/ecommerce3.png"
                alt="Einkaufswagen-Icon vor Laptop – Visual für Checkout & Payment im E-Commerce"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Ein B2B-Checkout muss Unternehmensprozesse abbilden – nicht umgekehrt.
          </figcaption>
        </figure>

        {/* Strategie 3 */}
        <section id="strategie-3-personalisierung-selfservice" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Strategie 3: Personalisierung &amp; Self-Service
          </h2>
          <p>
            Im B2B entscheiden <strong>Konditionen und Bequemlichkeit</strong>.
            Hinterlege kundenindividuelle Preislisten, Rabatte, Mindestmengen
            und exklusive Sortimente. Ergänze Self-Service-Funktionen im
            Konto: offene Posten, Rechnungen, Retouren, Lieferadressen,
            Bestelllisten, Nutzer &amp; Rollen, Budget-Limits und
            Freigabestufen.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[2fr,1fr]">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">
                Personalisierung, die wirklich hilft
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Kundenspezifische Preise und Staffelungen, sichtbar nach Login
                </li>
                <li>Produkt-Verfügbarkeiten pro Standort</li>
                <li>Empfehlungen: „Zuletzt gekauft“, „Kompatibel mit …“</li>
                <li>Angebote ins Konto laden und in den Warenkorb übernehmen</li>
              </ul>
            </div>
            <aside className="rounded-sm border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Self-Service-Gewinner</h3>
              <p className="text-sm">
                Weniger E-Mails, weniger Telefon: Wenn Kunden Rechnungen,
                Lieferscheine und Bestellverlauf selbst finden, sinken
                Supporttickets – und die Zufriedenheit steigt.
              </p>
            </aside>
          </div>
        </section>

        {/* Strategie 4 */}
        <section id="strategie-4-integration-punchout" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Strategie 4: Nahtlose Integration – ERP/PIM/CRM &amp; PunchOut
            (OCI/cXML)
          </h2>
          <p>
            Ohne saubere Daten kein reibungsloser Einkauf. Integriere ERP, PIM
            und CRM, damit Preise, Verfügbarkeiten, Kundengruppen und
            Sortimente im Shop stimmen. Für Unternehmenskunden mit
            E-Procurement ist <strong>PunchOut</strong> (z. B. OCI oder cXML)
            der Schlüssel: Käufer starten aus ihrem System, authentifizieren
            sich automatisch im Shop, befüllen den Warenkorb und senden ihn zur
            Genehmigung zurück – ohne Medienbruch.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Integrations-Roadmap in 5 Schritten
          </h3>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Produkt- und Preisquelle festlegen (PIM/ERP als „Single Source“)</li>
            <li>Preislogik modellieren (Kundengruppe, Verträge, Staffel)</li>
            <li>Verfügbarkeiten &amp; Lieferzeiten synchron halten</li>
            <li>Order-Sync inkl. PO-Nummer, Kostenstelle, Anhänge</li>
            <li>PunchOut-Flow testen (Login, Warenkorb-Transfer, Genehmigung)</li>
          </ol>

          <div className="mt-6 rounded-sm border border-zinc-200 p-4">
            <h4 className="font-semibold mb-2">PunchOut – kurz erklärt</h4>
            <p className="text-sm">
              <strong>OCI</strong> ist weit verbreitet im DACH-Raum,{" "}
              <strong>cXML</strong> international. Beide übertragen Warenkörbe
              samt Preisen zurück ins E-Procurement. Wichtig: vertragliche
              Konditionen und Sortimente müssen identisch sein – sonst drohen
              Freigabeabbrüche.
            </p>
          </div>
        </section>

        {/* Praxis-Checkliste */}
        <section id="praxis-checkliste" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Praxis-Checkliste: 20 Punkte für reibungsloses Bestellen
          </h2>
          <div className="rounded-sm border border-zinc-200 p-4">
            <ul className="grid gap-2 md:grid-cols-2 list-disc ml-5">
              <li>SKU-Suche mit Autocomplete &amp; Tippfehler-Toleranz</li>
              <li>CSV-Schnellbestellung &amp; Bestelllisten mit Reorder</li>
              <li>Klarer Hinweis: Netto- vs. Brutto-Preise</li>
              <li>PO-Feld, Kostenstelle, interne Notiz im Checkout</li>
              <li>Zahlungsziel und Kauf auf Rechnung für verifizierte Konten</li>
              <li>Mehrere Lieferadressen pro Bestellung</li>
              <li>Freigabe-Workflow (Rollen, Budgets, Limits)</li>
              <li>Self-Service: Rechnungen, Lieferscheine, offene Posten</li>
              <li>Individuelle Preise nach Login</li>
              <li>Verfügbarkeiten &amp; Lieferzeiten in PDP &amp; Checkout</li>
              <li>Zero-Search-Results &lt; 5% (Zielwert)</li>
              <li>Checkout-Abbruchquote monatlich tracken</li>
              <li>Performance: TTFB &lt; 0,2 s, LCP &lt; 2,5 s</li>
              <li>Barrierefreiheit: Form-Labels, Fokus, Kontraste</li>
              <li>Fehlertexte konkret und hilfreich</li>
              <li>
                PunchOut getestet (Login, Rücktransfer, Freigabe, Bestellung)
              </li>
              <li>ERP-Preislogik dokumentiert &amp; versioniert</li>
              <li>Backup-Zahlarten falls Rechnung abgelehnt</li>
              <li>Kontakt/Service gut sichtbar im Checkout</li>
              <li>Tracking DSGVO-konform, Events klar benannt</li>
            </ul>
          </div>
        </section>

        {/* Häufige Fehler */}
        <section id="haeufige-fehler" className="mt-10">
          <h2 className="text-2xl font-bold mb-3">
            Häufige Fehler – und wie du sie vermeidest
          </h2>
          <div className="rounded-sm border border-rose-200 bg-rose-50 p-4">
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>„B2C-Checkout reicht doch“:</strong> Ohne PO/Kostenstelle
                steigen Rückfragen und Abbrüche.
              </li>
              <li>
                <strong>Uneinheitliche Preise:</strong> ERP ≠ Shop. Baue eine
                eindeutige Preisquelle und synce täglich.
              </li>
              <li>
                <strong>Silos:</strong> Shop, ERP, PIM, CRM arbeiten aneinander
                vorbei. Plane Integrationen und Verantwortlichkeiten.
              </li>
              <li>
                <strong>Unauffindbare Produkte:</strong> Keine SKU-Suche,
                schlechte Synonyme – behebe Zero-Result-Treffer zuerst.
              </li>
              <li>
                <strong>Fehlende Rollen &amp; Freigaben:</strong> Ohne Limits
                und Stufen funktioniert Teameinkauf nicht.
              </li>
            </ul>
          </div>
        </section>

       {/* Weiterführende interne Links (Cluster) */}
<aside className="mt-10 rounded-sm border border-zinc-200 bg-zinc-50 p-5">
  <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
  <ul className="list-disc ml-5 text-sm space-y-2">
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        aria-haspopup="dialog"
        className={`hover:underline ${accent}`}
        data-original-href="/blog/b2b-preislogik-kundenspezifische-preise"
      >
        B2B-Preislogik verstehen: Kundenspezifische Preise sauber modellieren
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        aria-haspopup="dialog"
        className={`hover:underline ${accent}`}
        data-original-href="/blog/headless-commerce-vs-suite"
      >
        Headless Commerce vs. Suite: Wann lohnt sich was?
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        aria-haspopup="dialog"
        className={`hover:underline ${accent}`}
        data-original-href="/blog/pim-produktdaten-qualität"
      >
        PIM in der Praxis: Produktdaten richtig strukturieren
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        aria-haspopup="dialog"
        className={`hover:underline ${accent}`}
        data-original-href="/blog/pagespeed-core-web-vitals-ecommerce"
      >
        Pagespeed im Shop verbessern: Core Web Vitals im Griff
      </a>
    </li>
  </ul>
</aside>


        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Was ist der Unterschied zwischen B2B- und B2C-Checkout?
              </h3>
              <p>
                B2B benötigt zusätzliche Felder (PO/Kostenstelle),
                Zahlungsziele, Rollen &amp; Freigaben, häufig Netto-Preise und
                mehrere Lieferadressen – alles im gleichen Flow, ohne
                Sonderprozesse.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Brauche ich für B2B unbedingt eine Schnellbestellung?
              </h3>
              <p>
                Ja, wenn Stammkunden mit SKUs arbeiten. Eine
                CSV-Schnellbestellung und Bestelllisten sparen pro Order
                mehrere Minuten und senken Supportaufkommen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wann lohnt sich PunchOut (OCI/cXML)?
              </h3>
              <p>
                Sobald Kunden per E-Procurement einkaufen. PunchOut eliminiert
                Medienbrüche, überträgt Warenkörbe samt Konditionen zurück ins
                System und vereinfacht Freigaben.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche KPIs zeigen mir, ob mein Shop „reibungslos“ ist?
              </h3>
              <p>
                Such-Zero-Result-Rate, Checkout-Abbruchquote,
                Wiederkaufsrate/Reorder-Quote, durchschnittliche Zeit bis zur
                Bestellung und Anzahl der Supporttickets pro 100 Orders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie starte ich, wenn ich heute noch manuell per E-Mail verkaufe?
              </h3>
              <p>
                Beginne mit Login-Bereich, festen Preislisten, einfacher
                Schnellbestellung und Rechnungskauf – und integriere dann Schritt
                für Schritt ERP und PunchOut.
              </p>
            </div>
          </div>

          {/* FAQ Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    name:
                      "Was ist der Unterschied zwischen B2B- und B2C-Checkout?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "B2B benötigt zusätzliche Felder (PO/Kostenstelle), Zahlungsziele, Rollen & Freigaben, häufig Netto-Preise und mehrere Lieferadressen – alles im gleichen Flow, ohne Sonderprozesse.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Brauche ich für B2B unbedingt eine Schnellbestellung?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ja, wenn Stammkunden mit SKUs arbeiten. Eine CSV-Schnellbestellung und Bestelllisten sparen pro Order mehrere Minuten und senken Supportaufkommen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wann lohnt sich PunchOut (OCI/cXML)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sobald Kunden per E-Procurement einkaufen. PunchOut eliminiert Medienbrüche, überträgt Warenkörbe samt Konditionen zurück ins System und vereinfacht Freigaben.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Welche KPIs zeigen mir, ob mein Shop „reibungslos“ ist?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Such-Zero-Result-Rate, Checkout-Abbruchquote, Wiederkaufsrate/Reorder-Quote, durchschnittliche Zeit bis zur Bestellung und Anzahl der Supporttickets pro 100 Orders.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Wie starte ich, wenn ich heute noch manuell per E-Mail verkaufe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Beginne mit Login-Bereich, festen Preislisten, einfacher Schnellbestellung und Rechnungskauf – und integriere dann Schritt für Schritt ERP und PunchOut.",
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
            <strong>
              Wie schaffst du ein reibungsloses Kauferlebnis im B2B-Shop?
            </strong>{" "}
            Mache das Finden und Bestellen radikal schnell (Suche &amp;
            Schnellbestellung), bilde Unternehmensprozesse im Checkout ab,
            personalisiere Preise &amp; Konten – und verbinde Shop und
            Backend-Systeme inkl. PunchOut. So reduzierst du Reibung,
            beschleunigst Wiederkäufe und senkst Supportkosten.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Möchtest du deinen B2B-Shop spürbar schneller und einfacher
              machen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir analysieren Suche, Checkout und Integrationen – und liefern
              dir in 10 Werktagen einen konkreten Umsetzungsplan.
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="Max Mustermann"
                  required
                />
              </label>
              <label className="text-sm">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="+49 123456789"
                />
              </label>
              <label className="text-sm">
                E-Mail
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="max@mustermann.de"
                  required
                />
              </label>

              {/* Button öffnet das Pop-up via :target */}
              <a
                href="#cta-pop"
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
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
              className="relative w-full max-w-md rounded-sm bg-white p-6 shadow-xl"
            >
              {/* Schließen-Button */}
              <a
                href="#"
                aria-label="Fenster schließen"
                className="absolute right-3 top-3 rounded-sm border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
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

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu B2B-Onlineshops
          </h2>

          <div className="rounded-sm border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Begriff</th>
                  <th className="text-left font-semibold p-3">Erklärung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Schnellbestellung</td>
                  <td className="p-3 text-zinc-700">
                    Maske für das schnelle Hinzufügen vieler Artikel per
                    SKU/CSV, inklusive Mengen und Standorte.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">PunchOut</td>
                  <td className="p-3 text-zinc-700">
                    Verbindung zwischen E-Procurement und Shop; Warenkörbe samt
                    Konditionen werden zur Genehmigung zurückgespielt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">PO-Nummer</td>
                  <td className="p-3 text-zinc-700">
                    Interne Bestellnummer deines Kunden, die auf Rechnung,
                    Lieferschein und in der Bestellung erscheinen muss.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Staffelpreise</td>
                  <td className="p-3 text-zinc-700">
                    Preisnachlässe je nach Abnahmemenge – im B2B Standard.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">E-Procurement</td>
                  <td className="p-3 text-zinc-700">
                    Software für den Unternehmenseinkauf (z. B. SAP Ariba),
                    über die Bestellungen freigegeben und gebucht werden.
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
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              Baymard Institute – „Homepage &amp; Navigation UX Best Practices
              2024“.{" "}
              <a
                className={accent}
                href="https://baymard.com/blog/ecommerce-navigation-best-practice"
              >
                https://baymard.com/blog/ecommerce-navigation-best-practice
              </a>
            </li>
            <li>
              Oro Inc. – „The Future of B2B eCommerce: Trends to Watch for
              2026“ (21.08.2025).{" "}
              <a
                className={accent}
                href="https://oroinc.com/b2b-ecommerce/blog/b2b-ecommerce-trends/"
              >
                https://oroinc.com/b2b-ecommerce/blog/b2b-ecommerce-trends/
              </a>
            </li>
            <li>
              TradeCentric – „What is a PunchOut Catalog and How Does It Work?“
              (13.08.2025).{" "}
              <a
                className={accent}
                href="https://tradecentric.com/blog/punchout-catalog/"
              >
                https://tradecentric.com/blog/punchout-catalog/
              </a>
            </li>
            <li>
              DHL eCommerce – „2025 Online Shopper Trends Report“ (03.06.2025).{" "}
              <a
                className={accent}
                href="https://www.dhl.com/global-en/microsites/ec/ecommerce-insights/insights/reports/2025-ecommerce-trends-report.html"
              >
                https://www.dhl.com/global-en/.../2025-ecommerce-trends-report.html
              </a>
            </li>
            <li>
              Handelskraft – „B2B-Shop: 7 Shopfunktionen, die ihr unbedingt
              bieten solltet“ (17.09.2024).{" "}
              <a
                className={accent}
                href="https://www.handelskraft.de/b2b-shop-funktionen/"
              >
                https://www.handelskraft.de/b2b-shop-funktionen/
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
