// src/app/blog/additive-fertigung-maschinenbau-2025/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const accent = "text-emerald-700";

  const author = {
    name: "Max Mustermann",
    role: "Autor · Fokus: Industrie 4.0, Additive Fertigung, Maschinenbau-Strategie",
    image: "/Autorenbild.jpg",
    linkedin: "https://linkedin.com",
  };

  const reviewer = {
    name: "Claudia Müller",
    role: "Fach-Reviewerin Additive Fertigung",
    linkedin: "https://linkedin.com",
  };

  const company = {
    name: "Muster GmbH",
    email: "muster@beispiel.de",
    phone: "+49123456789",
    street: "Musterstraße 1",
    locality: "—",
    postalCode: "—",
    country: "DE",
  };

  const canonical = "https://www.beispiel.de/blog/additive-fertigung-maschinenbau-2025";
  const title =
    "Additive Fertigung (3D-Druck) im Maschinenbau: Einsatzmöglichkeiten 2025";
  const description =
    "Wie 3D-Druck 2025 im Maschinenbau Produktentwicklung, Ersatzteilversorgung und Produktion beschleunigt – Technologien, Anwendungsfälle, Qualität, Kosten & Umsetzung.";

  const datePublished = "2025-08-28";
  const dateModified = "2025-08-28";

  return (
    <>
      <Head>
        <title>{title} | {company.name}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} | ${company.name}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.beispiel.de/druck1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${company.name}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.beispiel.de/druck1.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              inLanguage: "de",
              image: ["https://www.beispiel.de/druck1.png"],
              datePublished,
              dateModified,
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: "Autor",
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
                email: company.email,
                telephone: company.phone,
              },
              mainEntityOfPage: canonical,
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
              url: "https://www.beispiel.de",
              email: company.email,
              telephone: company.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.street,
                addressLocality: company.locality,
                postalCode: company.postalCode,
                addressCountry: company.country,
              },
            }),
          }}
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
            Additive Fertigung (3D-Druck) im Maschinenbau: Einsatzmöglichkeiten 2025
          </h1>

          <p className="mt-3 text-lg text-zinc-700">
            Du willst wissen, wo 3D-Druck im Maschinenbau 2025 wirklich Mehrwert stiftet? 
            In diesem Leitfaden bekommst du eine klare Einordnung der Technologien, 
            praxistaugliche Anwendungsfälle, Qualitäts- und Kostenfaktoren – plus eine 
            Schritt-für-Schritt-Roadmap für deinen Start.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am <time dateTime={dateModified}>28.08</time>
            {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/druck1.png" />
                <img
                  src="/druck1.png"
                  alt="3D-Drucker im Einsatz (Hero)"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              3D-Drucker Nahaufnahme – Additive Fertigung im Maschinenbau
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
              <strong>Wo 3D-Druck 2025 punktet:</strong> Funktionsintegration, leichte
              Strukturen und schnelle Ersatzteilverfügbarkeit – besonders in Prototyping,
              Betriebsmitteln, Kleinserien und Ersatzteilen.
            </li>
            <li>
              <strong>Technologie-Fit ist entscheidend:</strong> PBF/SLM für hochfeste
              Metallteile, MJF/SLS für belastbare Polymerbauteile, Binder Jetting und DED
              für Volumen &amp; Tempo; FFF/FGF für kosteneffiziente Hilfsmittel.
            </li>
            <li>
              <strong>Qualität ist beherrschbar:</strong> Mit Normen wie ISO/ASTM 52900,
              durchgängiger Prozesskette (Daten, Druck, Nachbearbeitung) und validierter
              Qualitätssicherung.
            </li>
            <li>
              <strong>Business Case:</strong> Rechnet sich bei komplexen Geometrien,
              niedriger Stückzahl, Gewichtsersparnis und hohen Stillstandskosten.
            </li>
            <li>
              <strong>Starten in 90 Tagen:</strong> Use-Cases priorisieren, „Design for AM“-Regeln
              einführen, Make-or-Buy klären, Material &amp; Qualität absichern, Pilot fertigen.
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
            <li><a className={`hover:underline ${accent} font-medium`} href="#was-ist-additive-fertigung">Was ist Additive Fertigung (3D-Druck)?</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#wie-funktioniert-3d-druck">Wie funktioniert 3D-Druck im Maschinenbau?</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#technologien-ueberblick">Technologien im Überblick</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#anwendungen-2025">Top-Anwendungen 2025</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#design-for-am">Design for AM &amp; Leichtbau</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#qualitaet-normen">Qualität &amp; Normen</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#kosten-business-case">Kosten &amp; Business-Case</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#make-or-buy">Make-or-Buy: intern vs. extern</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#roadmap-90-tage">Roadmap: In 90 Tagen zum Pilot</a></li>
            <li><a className={`hover:underline ${accent} font-medium`} href="#faq">FAQ</a></li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="was-ist-additive-fertigung" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Was ist Additive Fertigung (3D-Druck)?</h2>
          <p className="text-zinc-700">
            Additive Fertigung beschreibt Fertigungsverfahren, bei denen Bauteile schichtweise
            aus digitalen 3D-Daten aufgebaut werden – im Gegensatz zur subtraktiven Bearbeitung.
            Das ermöglicht Geometrien, die konventionell kaum herstellbar sind, reduziert
            Materialeinsatz und verkürzt Entwicklungszyklen. Für den Maschinenbau heißt das:
            schnellere Iterationen, funktionsintegrierte Bauteile und eine resiliente
            Ersatzteilstrategie – on demand, nahe am Einsatzort.
          </p>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              2025 wächst der AM-Markt weiter – getrieben durch industrielle Anwendungen. 
              Besonders relevant sind Metall-PBF, Polymer-Pulverbett und Binder-Jetting für 
              kosteneffiziente Seriennähe, dazu KI-gestützte Bauteiloptimierung und 
              automatisierte Prozessketten.
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Indirektes Zitat (Branchenlage 2025 basierend auf aktuellen Marktberichten)
            </figcaption>
          </figure>
        </section>

        <section id="wie-funktioniert-3d-druck" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Wie funktioniert 3D-Druck im Maschinenbau?</h2>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>CAD &amp; Simulation:</strong> Bauteil definieren, Funktion klären, Lastfälle simulieren.</li>
              <li><strong>AM-gerechtes Design:</strong> Wandstärken, Stützstrukturen, Orientierungen, Überhänge planen.</li>
              <li><strong>Material &amp; Technologie wählen:</strong> Anforderungen mit AM-Verfahren mappen.</li>
              <li><strong>Build-Job vorbereiten:</strong> Slicen, Parameter, Nesting, Job-Freigabe.</li>
              <li><strong>Druck &amp; Überwachung:</strong> Prozessmonitoring, Qualitätssicherung.</li>
              <li><strong>Nachbearbeitung:</strong> Entpulvern, Wärmebehandlung, Support-Removal, CNC-Finish, Messen.</li>
              <li><strong>Freigabe &amp; Dokumentation:</strong> Maß-/Werkstoffnachweise, Prüfpläne, Rückverfolgbarkeit.</li>
            </ol>
          </div>
        </section>

        <section id="technologien-ueberblick" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Technologien im Überblick</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Metall</h3>
              <ul className="space-y-1">
                <li><strong>PBF/SLM:</strong> Höchste Präzision &amp; Dichte; Turbomaschinen, Hydraulik, Werkzeuge.</li>
                <li><strong>DED/WAAM:</strong> Hohe Aufbauraten, Reparatur &amp; Cladding, Großbauteile.</li>
                <li><strong>Binder Jetting (Sinter-AM):</strong> Seriennähe, Nachsintern, gute Stückkosten.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Polymere</h3>
              <ul className="space-y-1">
                <li><strong>SLS/MJF:</strong> Funktionsbauteile ohne Stützstrukturen, Serien-Kleinmengen.</li>
                <li><strong>FFF/FGF:</strong> Günstig &amp; robust für Vorrichtungen, Hilfs- und Betriebsmittel.</li>
                <li><strong>SLA/DLP:</strong> Hohe Oberflächengüte, Dichtungen, transparente Prototypen.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Keramik &amp; Spezial</h3>
              <ul className="space-y-1">
                <li>Keramik-AM für Hochtemperatur-/Medienbeständigkeit.</li>
                <li>Multi-Material &amp; Funktionsintegration (Kanäle, Sensorik).</li>
                <li>Großformatiger Druck (Portal/Roboter) für Anlagenkomponenten.</li>
              </ul>
            </div>
          </div>

          {/* Bild 1 – Unsplash 16:6 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&auto=format&fit=crop&w=1200"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&auto=format&fit=crop&w=1800"
                  alt="Pulverbett-Prozess im 3D-Druck – Funkenflug in Baukammer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Pulverbett-Schmelzen (PBF/SLM) – hohe Dichte, feine Details.
            </figcaption>
          </figure>
        </section>

        <section id="anwendungen-2025" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Top-Anwendungen 2025: Wo 3D-Druck sofort wirkt</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">1) Prototyping &amp; Tests</h3>
              <p className="text-zinc-700">
                Iterationen in Tagen statt Wochen. Passform-, Funktions- und Dichtigkeits-Tests
                ohne Werkzeugbau. Ideal: Polymer-Pulverbett, SLA, FFF.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">2) Betriebsmittel &amp; Vorrichtungen</h3>
              <p className="text-zinc-700">
                Leichte Greifer, ergonomische Montagehilfen, Prüflehren – günstige FFF/FGF-Teile
                mit Faserverstärkung sparen Taktzeit und schonen Bauteile.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">3) Ersatzteile on demand</h3>
              <p className="text-zinc-700">
                Digitale Lager statt Regal: seltene, obsoleszierende Teile drucken und
                Stillstandskosten senken. Material- und Qualifikationskonzept beachten.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">4) Kleinserien &amp; Losgröße 1</h3>
              <p className="text-zinc-700">
                Variantenvielfalt ohne Werkzeug. Besonders spannend: Binder-Jetting (Metall)
                und SLS/MJF (Polymer) für wirtschaftliche Stückkosten.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">5) Funktionsintegration</h3>
              <p className="text-zinc-700">
                Kühlkanäle, Gewichtsreduktion, Bionik-Strukturen, Dämpfung – Designfreiheit
                bringt Performancevorteile und Energieeffizienz.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">6) Reparatur &amp; Remanufacturing</h3>
              <p className="text-zinc-700">
                DED/WAAM zum Auftragen defekter Zonen, Lebensdauerverlängerung bei großen
                Bauteilen. Lohnend bei teuren, langen Lieferzeiten.
              </p>
            </div>
          </div>

          {/* 2:1 Grid Gegenüberstellung */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <aside className="md:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Warum jetzt? Drei harte Fakten</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Der globale AM-Markt legte 2024 um rund 9&nbsp;% auf über 21&nbsp;Mrd. USD zu.</li>
                <li>VDMA-Unternehmen blicken 2025 optimistisch auf AM-Wachstum in Deutschland.</li>
                <li>Normen &amp; Prozessketten reifen, Qualität ist besser absicherbar als noch vor 3–5 Jahren.</li>
              </ul>
            </aside>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Schnell-Check: Eignet sich dein Use-Case?</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Komplexe Geometrie &amp; Leichtbaupotenzial</li>
                <li>Kleine bis mittlere Stückzahlen</li>
                <li>Hohe Variantenvielfalt / Individualisierung</li>
                <li>Hohe Stillstandskosten bei Ersatzteilen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="design-for-am" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Design for AM &amp; Leichtbau – so holst du das Maximum heraus</h2>
          <p className="text-zinc-700">
            „Design for AM“ (DfAM) heißt: Du konstruierst so, dass das Bauteil additiv optimal
            herstellbar ist. Das umfasst Stützstrategien, Bauteilorientierung, Entpulverbarkeit,
            Toleranzen und Nachbearbeitung. Der größte Hebel liegt im Leichtbau: Topologie-
            Optimierung und generatives Design senken Masse, erhöhen Steifigkeit und ermöglichen
            Kanäle oder Mehrzonen-Strukturen direkt im Bauteil.
          </p>

          {/* Vergleichstabelle */}
          <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-6">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Ansatz</th>
                  <th className="text-left font-semibold p-3">Vorteile</th>
                  <th className="text-left font-semibold p-3">Beachten</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Topologie-Optimierung</td>
                  <td className="p-3">Max. Steifigkeit bei minimaler Masse; ideale AM-Kombination.</td>
                  <td className="p-3">Glättung, Übergänge, Fertigbarkeit &amp; Stützstrukturen einplanen.</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Generatives Design (KI)</td>
                  <td className="p-3">Schnelle Variantenbildung nach Zielgrößen (Gewicht, Kosten).</td>
                  <td className="p-3">Grenzwerte, Lastfälle, Randbedingungen sauber definieren.</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Gitter- &amp; Bionikstrukturen</td>
                  <td className="p-3">Dämpfung, Kühlung, medienführende Kanäle, Funktionsintegration.</td>
                  <td className="p-3">Prüfkonzept &amp; Reinigbarkeit, Mindeststeg-/Wandstärken beachten.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bild 2 – Unsplash 16:6 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1597257374343-2bbf8b0698e9?q=80&auto=format&fit=crop&w=1200"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1597257374343-2bbf8b0698e9?q=80&auto=format&fit=crop&w=1800"
                  alt="Leichtbau-Gitterstruktur – 3D-gedruckte Topologie"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Leichtbau durch Gitter- und Bionikstrukturen – DfAM in der Praxis.
            </figcaption>
          </figure>
        </section>

        <section id="qualitaet-normen" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Qualität &amp; Normen: Was muss erfüllt sein?</h2>
          <p className="text-zinc-700">
            Für industrielle Teile zählen Wiederholgenauigkeit und Nachweise. In der Praxis
            haben sich Terminologien und Leitplanken über Normen etabliert (z.&nbsp;B. ISO/ASTM
            52900-Familie). Ergänzend helfen Branchenrichtlinien (z.&nbsp;B. VDMA-Spezifikationen)
            und werkstoffspezifische Prüfstandards. Wichtig sind definierte Prozessfenster,
            dokumentierte Parameter, bauteilnahe Proben, zerstörungsfreie Prüfungen und
            zertifizierte Lieferketten (Pulver, Maschinen, Dienstleister).
          </p>

          <div className="mt-6 rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Praxis-Bausteine der Qualitätssicherung</h3>
            <ul className="grid md:grid-cols-2 gap-2 list-disc ml-5">
              <li>Material-Freigaben &amp; Chargenrückverfolgbarkeit</li>
              <li>Maschinen-Qualifizierung (OQ/PQ), regelmäßige Prüfungen</li>
              <li>In-situ-Monitoring, Oberflächen- &amp; Dichteprüfungen</li>
              <li>Wärmebehandlung, HIP, CNC-Finish, Messtechnik</li>
              <li>Dokumentierte Prüfpläne, Bauteil-Zertifikate</li>
              <li>Normenkonforme Daten &amp; Prozessdokumentation</li>
            </ul>
          </div>
        </section>

        <section id="kosten-business-case" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Kosten &amp; Business-Case: Wann rechnet sich 3D-Druck?</h2>
          <p className="text-zinc-700">
            Der AM-Business-Case hängt von Bauteilkomplexität, Stückzahl und Folgekosten ab.
            Während konventionelle Verfahren bei großen Serien unschlagbar sind, punktet AM,
            wenn Werkzeug- und Rüstkosten dominieren oder Funktionsintegration signifikant
            Mehrwert bringt.
          </p>
          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Hebel</th>
                  <th className="text-left font-semibold p-3">AM-Vorteil</th>
                  <th className="text-left font-semibold p-3">Kennzahlen &amp; Indikatoren</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Tooling vermeiden</td>
                  <td className="p-3">Wegfall von Werkzeugkosten &amp; -zeiten.</td>
                  <td className="p-3">ROI bei <span className="tabular-nums">≤ 500</span> Stk./Variante realistisch.</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Leichtbau</td>
                  <td className="p-3">Energie-/Leistungsgewinne, geringere Trägheit.</td>
                  <td className="p-3">Masse-Reduktion um 20–60&nbsp;% möglich.</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Stillstandskosten</td>
                  <td className="p-3">Ersatzteil on demand – Ausfallzeiten sinken.</td>
                  <td className="p-3">Tausende € je Stunde Ausfall vermeidbar.</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Montagefreundlichkeit</td>
                  <td className="p-3">Bauteilanzahl verringern, Montagezeit sparen.</td>
                  <td className="p-3">Teilezahl-Reduktion um 30–80&nbsp;% machbar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="make-or-buy" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Make-or-Buy: Eigene Fertigung oder Dienstleister?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Eigene AM-Zelle – wann sinnvoll?</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Stetiger Bedarf (Betriebsmittel, Prototypen, Kleinserien)</li>
                <li>Know-how-Aufbau zu DfAM &amp; Qualifizierung gewünscht</li>
                <li>Vertrauliche Geometrien / kurze Reaktionszeiten</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Dienstleister – wann besser?</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Metall-PBF in Luftfahrt-/Med-Qualität inkl. Zertifikate</li>
                <li>Großbauteile (DED/WAAM) oder Serien via Binder Jetting</li>
                <li>Schwankende Nachfrage, viele Werkstoffe &amp; Verfahren</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="roadmap-90-tage" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Roadmap: In 90 Tagen zum funktionierenden AM-Pilot</h2>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Use-Cases auswählen:</strong> 10–20 Teile grob bewerten (Komplexität, Stückzahl, Stillstandskosten).</li>
              <li><strong>DfAM-Check &amp; Redesign:</strong> 2–3 Kandidaten topologieoptimiert neu denken.</li>
              <li><strong>Technologie &amp; Material:</strong> Verfahren mappt auf Lastprofil (Metall PBF / Polymer SLS/MJF / Binder Jetting / DED).</li>
              <li><strong>Qualität &amp; Normen:</strong> Prüf- &amp; Nachweisplan aufsetzen, Proben festlegen.</li>
              <li><strong>Fertigung:</strong> Interne Zelle oder zertifizierter Dienstleister – klar definierte Prozesskette.</li>
              <li><strong>Nachbearbeitung &amp; Messung:</strong> Wärmebehandlung, Supports, Finish, Maß-/Werkstoffnachweise.</li>
              <li><strong>Wirtschaftlichkeit:</strong> Soll-Ist vergleichen, Skalierung planen (Baukasten, Datenbibliothek).</li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">Welche 3D-Druck-Verfahren eignen sich für funktionale Maschinenteile?</h3>
              <p>
                Für hohe Festigkeit und Dichte: Metall-PBF/SLM (z.&nbsp;B. AlSi10Mg, 17-4PH, Ti6Al4V). 
                Für robuste Polymerteile: SLS/MJF (PA12, PA11, TPU). Für große Volumina oder Reparaturen: DED/WAAM.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Wie sichere ich die Qualität ab?</h3>
              <p>
                Normen nutzen (z.&nbsp;B. ISO/ASTM 52900-Familie), Maschinen und Prozesse qualifizieren, 
                Prüfpläne mit bauteilnahen Proben definieren, Materialchargen rückverfolgen, Messberichte dokumentieren.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Wann ist AM günstiger als Fräsen oder Gießen?</h3>
              <p>
                Bei komplexer Geometrie, geringer bis mittlerer Stückzahl, kurzen Entwicklungszyklen 
                und wenn Werkzeuge teuer sind. Außerdem, wenn Leichtbau und Funktionsintegration 
                Performance- oder Energiegewinne bringen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Welche Materialien sind 2025 relevant?</h3>
              <p>
                Metalle: Aluminium, Edelstahl, Werkzeugstähle, Nickel- und Titanlegierungen. 
                Polymere: PA12, PA11 (biobasiert), TPU, PEEK/PEKK. Keramiken für Hochtemperatur- und 
                Verschleißanwendungen gewinnen an Bedeutung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Brauche ich zwingend eine eigene AM-Zelle?</h3>
              <p>
                Nein. Viele starten mit zertifizierten Dienstleistern. Eine eigene Zelle lohnt sich,
                wenn der Bedarf kontinuierlich ist und du interne Kompetenzen aufbauen willst.
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
                    "name": "Welche 3D-Druck-Verfahren eignen sich für funktionale Maschinenteile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Für hohe Festigkeit und Dichte: Metall-PBF/SLM (z. B. AlSi10Mg, 17-4PH, Ti6Al4V). Für robuste Polymerteile: SLS/MJF (PA12, PA11, TPU). Für große Volumina oder Reparaturen: DED/WAAM."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie sichere ich die Qualität ab?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Normen nutzen (z. B. ISO/ASTM 52900-Familie), Maschinen und Prozesse qualifizieren, Prüfpläne mit bauteilnahen Proben definieren, Materialchargen rückverfolgen, Messberichte dokumentieren."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wann ist AM günstiger als Fräsen oder Gießen?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Bei komplexer Geometrie, geringer bis mittlerer Stückzahl, kurzen Entwicklungszyklen und wenn Werkzeuge teuer sind. Außerdem, wenn Leichtbau und Funktionsintegration Performance- oder Energiegewinne bringen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Materialien sind 2025 relevant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Metalle: Aluminium, Edelstahl, Werkzeugstähle, Nickel- und Titanlegierungen. Polymere: PA12, PA11 (biobasiert), TPU, PEEK/PEKK. Keramiken für Hochtemperatur- und Verschleißanwendungen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Brauche ich zwingend eine eigene AM-Zelle?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Nein. Viele starten mit zertifizierten Dienstleistern. Eine eigene Zelle lohnt sich, wenn der Bedarf kontinuierlich ist und interne Kompetenzen aufgebaut werden sollen."
                    }
                  }
                ]
              }),
            }}
          />
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>Frage: Wo lohnt sich Additive Fertigung im Maschinenbau 2025 am meisten?</strong>{" "}
            Antwort: Dort, wo Komplexität, Varianten und Zeitdruck dominieren. Mit der richtigen
            Technologieauswahl, DfAM-Redesign und einem sauberen Qualitäts-Setup lassen sich
            Entwicklungszeiten verkürzen, Bauteile verbessern und Ersatzteile on demand sichern.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du AM-Potenziale in deinem Maschinenbau-Portfolio heben?
            </h2>
            <p className="text-zinc-700 mb-4">
              {company.name} hilft dir von der Use-Case-Priorisierung bis zum validierten Pilot –
              pragmatisch, messbar, skalierbar.
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
                  placeholder={company.phone}
                />
              </label>
              <label className="text-sm">
                E-Mail
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
                  placeholder={company.email}
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
                Dies ist ein statisches Beispiel. Schreib uns direkt an{" "}
                <a
                  href={`mailto:${company.email}`}
                  className={`font-medium underline ${accent}`}
                >
                  {company.email}
                </a>{" "}
                oder ruf uns an:{" "}
                <a href={`tel:${company.phone}`} className={`font-medium underline ${accent}`}>
                  {company.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Weiterführende interne Links (Cluster) */}
        <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/design-for-am-grundlagen">
                Design for AM: 12 Grundregeln für bessere Bauteile
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/3d-druck-technologien-vergleich">
                3D-Druck-Technologien im Vergleich: Metall, Polymer, Keramik
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/ersatzteile-on-demand">
                Ersatzteile on demand: Digitale Lagerhaltung im Maschinenbau
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/qualitaetssicherung-additive-fertigung">
                Qualitätssicherung in der Additiven Fertigung: Von der Probe bis zum Zertifikat
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Additiver Fertigung
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
                  <td className="p-3 font-medium text-zinc-900">PBF/SLM</td>
                  <td className="p-3 text-zinc-700">
                    Powder Bed Fusion/Selective Laser Melting – Laser schmilzt Metallpulver schichtweise zu dichten Bauteilen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">SLS/MJF</td>
                  <td className="p-3 text-zinc-700">
                    Polymer-Pulverbettverfahren ohne Stützstrukturen – ideal für funktionale Kunststoffteile.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">DED/WAAM</td>
                  <td className="p-3 text-zinc-700">
                    Auftragschweißen (Draht/Pulver) mit Laser/Arc – hohe Aufbauraten, Reparatur und Großbauteile.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Binder Jetting</td>
                  <td className="p-3 text-zinc-700">
                    Binder verklebt Pulver; Bauteile werden nachträglich gesintert – seriennahe Stückkosten.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">DfAM</td>
                  <td className="p-3 text-zinc-700">
                    Design for Additive Manufacturing – Konstruktionsprinzipien für fertigungsgerechtes AM-Design.
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
              alt="Autor: Max Mustermann"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role}
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
              Wohlers Report 2025 – Press Coverage:{" "}
              <a className={accent} href="https://www.metal-am.com/wohlers-report-2025-shows-global-additive-manufacturing-industry-growth-over-9/">
                Global AM industry grew 9.1% to $21.8B in 2024 (metal-am.com)
              </a>
            </li>
            <li>
              3Dnatives (14.04.2025):{" "}
              <a className={accent} href="https://www.3dnatives.com/en/wohlers-report-2025-growth-global-additive-manufacturing-140420256/">
                Wohlers Report 2025 – growth figures &amp; outlook
              </a>
            </li>
            <li>
              VDMA Additive Manufacturing:{" "}
              <a className={accent} href="https://vdma.eu/en/additive-manufacturing">
                Branchenressourcen &amp; Use-Cases (vdma.eu)
              </a>
            </li>
            <li>
              3D Printing Industry (17.04.2025):{" "}
              <a className={accent} href="https://3dprintingindustry.com/news/new-vdma-survey-77-of-am-companies-expect-domestic-growth-over-the-next-two-years-238635/">
                VDMA-Umfrage 2025 – Wachstumserwartungen Deutschland
              </a>
            </li>
            <li>
              ISO/ASTM 52900 – Terminologie Additive Fertigung:{" "}
              <a className={accent} href="https://www.iso.org/obp/ui/">
                Normenüberblick (iso.org)
              </a>
            </li>
            <li>
              AMFG (05.02.2025):{" "}
              <a className={accent} href="https://amfg.ai/2025/02/05/additive-manufacturing-forecast-2025-technology-and-applications/">
                Additive Manufacturing Forecast 2025 – Technologie &amp; Anwendungen
              </a>
            </li>
            <li>
              Fraunhofer IGCV (2025):{" "}
              <a className={accent} href="https://www.igcv.fraunhofer.de/en/research/competences/additive_manufacturing_am.html">
                Additive Manufacturing Processes for Industry
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
