// src/app/blog/hybrides-arbeiten-sensorik-analytics/page.tsx
import React from "react";
import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart Weber",
  role: "Workplace-Strategie & Digitalisierung",
  url: "https://www.findbar.de/team/lennart-weber",
  image: "/autor-lennart-weber.webp",
};

export default function Page() {
  const title =
    "Hybrides Arbeiten messbar machen: Sensorik & Analytics für flexible Büros";
  const description =
    "So optimierst du Desk-Sharing, Meetingräume und Flächenkosten mit Belegungssensoren und Workplace-Analytics – inkl. Praxisbeispielen, KPIs und Fahrplan.";

  const canonical =
    "https://www.findbar.de/blog/hybrides-arbeiten-sensorik-analytics";

  const hero =
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop";

  const heroAlt =
    "Modernes Hybrid-Office mit flexiblen Arbeitsplätzen und Sensoren an Decke/Schreibtischen";

  const published = "2025-08-20";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        {/* OpenGraph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Findbar" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={hero} />
        <meta property="og:url" content={canonical} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={hero} />
        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              inLanguage: "de",
              image: hero,
              datePublished: published,
              dateModified: published,
              author: {
                "@type": "Person",
                name: author.name,
                url: author.url,
              },
              publisher: {
                "@type": "Organization",
                name: "Findbar",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.findbar.de/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonical,
              },
            }),
          }}
        />
        {/* Company / Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Findbar",
              url: "https://www.findbar.de",
              sameAs: [
                "https://www.linkedin.com/company/findbar",
                "https://x.com/findbar",
              ],
              logo: "https://www.findbar.de/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+49-30-1234567",
                  contactType: "customer service",
                  areaServed: "DE",
                  availableLanguage: ["German", "English"],
                },
              ],
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
            Hybrides Arbeiten messbar machen: Wie Büroausstatter mit Sensorik
            und Analytics flexible Arbeitsplätze optimieren
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst Desk-Sharing, Meetingräume und Flächenkosten endlich auf
            Basis von Daten steuern? Hier erfährst du, wie Belegungssensoren und
            Workplace-Analytics dir zeigen, was wirklich genutzt wird – und wie
            du daraus konkrete Entscheidungen ableitest.
          </p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={published}>20.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet={`${hero}&w=900`} />
                <img
                  loading="eager"
                  src={hero}
                  alt={heroAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Hybrides Büro mit sensorgestützten Arbeitsplätzen
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
              alt="Autor:in"
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
              Hybrides Arbeiten verändert die Flächennutzung: Ohne Daten wirken
              Buchungssysteme und Bauchgefühl oft aneinander vorbei – Sensorik
              zeigt die <strong>tatsächliche Nutzung</strong>.
            </li>
            <li>
              Belegungssensoren an Tischen, in Räumen und Zonen plus
              Luftqualitätsdaten liefern <strong>Nutzungsprofile</strong>,
              Peak-Zeiten und <strong>Optimierungspotenziale</strong>.
            </li>
            <li>
              Für Unternehmen zahlt sich das in <strong>Effizienz</strong>{" "}
              (weniger Leerstand), <strong>Zufriedenheit</strong> (freie Plätze)
              und <strong>Nachhaltigkeit</strong> (Energie) aus.
            </li>
            <li>
              Büroausstatter entwickeln sich zu <strong>Beratungspartnern</strong>: 
              Auswahl der Sensorik, Integration ins Dashboard und laufendes{" "}
              <strong>Reporting</strong> als Service.
            </li>
            <li>
              Praxis: Von 20&nbsp;% Flächenreduktion bis weniger{" "}
              <em>Ghost Meetings</em> – datengetriebene Entscheidungen
              ermöglichen schnelle, messbare Ergebnisse.
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
                Einleitung – Warum jetzt messen?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#wandel"
              >
                Wandel zum hybriden Arbeiten
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#problem"
              >
                Problem: Klassische Planung reicht nicht mehr
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#loesung"
              >
                Lösung: Sensorik &amp; Workplace-Analytics
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#praxisnutzen"
              >
                Praxisnutzen &amp; KPIs
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#rolle-bueroausstatter"
              >
                Rolle von Büroausstattern
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#use-cases"
              >
                Use Cases &amp; Beispiele
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
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#zusammenfassung"
              >
                Kurzfazit
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="einleitung">
          <h2 className="text-2xl font-bold mb-2">
            Einleitung – Warum das Thema relevant ist
          </h2>
          <p className="leading-relaxed">
            Hybrid-Modelle bringen Dynamik in den Büroalltag: Mal sind
            Schreibtische leer, mal fehlen Plätze. Meetingräume sind montags um
            10 Uhr überzogen, am Freitag um 16 Uhr stehen sie leer. Ohne
            belastbare Daten bleibt die Planung Spekulation – und genau hier
            setzt Sensorik an. Sie macht Nutzung sichtbar, damit du Flächen,
            Buchungsregeln, Öffnungszeiten und Services mit
            <strong> maximaler Wirkung</strong> anpasst. Kurz: Du holst aus
            jeder Bürofläche mehr Output heraus und senkst gleichzeitig Kosten.
          </p>
        </section>

        <section id="wandel" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Wandel zum hybriden Arbeiten (Homeoffice + Büro)
          </h2>
          <p>
            Die Arbeitswelt ist nicht mehr „entweder–oder“. Hybrides Arbeiten
            kombiniert Fokusphasen zuhause mit Zusammenarbeit im Office. In
            vielen Unternehmen pendelt sich die Büroanwesenheit auf wenige Tage
            ein – mit klaren Peak-Zeiten (z. B. Di–Do) und eher leeren Montagen
            oder Freitagen. Genau diese Wellenbewegung führt zu ineffizienter
            Flächennutzung, wenn Infrastruktur und Regeln nicht darauf
            abgestimmt sind.
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">
              Was heißt das konkret für dein Büro?
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Desk-Sharing statt fester Plätze</li>
              <li>
                Mehr Kollaborationszonen, weniger reine Einzelarbeitsplätze
              </li>
              <li>Flexible Meetingräume: kurz, ad hoc, hybridfähig</li>
              <li>Service-Levels passen sich an Peak-Tage an</li>
            </ul>
          </div>
        </section>

        <section id="problem" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Problemstellung: Klassische Büroplanung reicht nicht mehr
          </h2>
          <p>
            Früher konnte man eine Etage nach Köpfen planen: ein Tisch pro
            Mitarbeitendem, fixe Abteilungen, fixe Sitzordnung. Heute ist
            <strong> Auslastung</strong> die wichtigste Kennzahl – nicht die
            Anzahl der Schreibtische. Doch vielen fehlt Transparenz: Wieviel
            Fläche wird tatsächlich genutzt? Welche Räume sind chronisch
            überbucht? Welche Zonen sind Ladenhüter?
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">
                Fixe Arbeitsplätze &nbsp;vs.&nbsp; Desk-Sharing
              </h3>
              <p className="text-zinc-700">
                Fixe Plätze garantieren Verfügbarkeit, erzeugen aber hohe
                Leerstände an Remote-Tagen. Desk-Sharing nutzt Fläche besser
                aus, erfordert jedoch verlässliche <em>Verfügbarkeitsdaten</em>{" "}
                und klare Regeln (z. B. Clean Desk).
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">
                Buchungskalender &nbsp;vs.&nbsp; tatsächliche Nutzung
              </h3>
              <p className="text-zinc-700">
                Reservationen ohne Check-in führen zu <em>Ghost Meetings</em>:
                Der Kalender sagt „belegt“, der Raum ist leer. Nur Sensorik
                liefert den Realitätscheck.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Aspekt</th>
                  <th className="text-left font-semibold p-3">Fixe Plätze</th>
                  <th className="text-left font-semibold p-3">
                    Desk-Sharing &amp; Sensorik
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Auslastung</td>
                  <td className="p-3">Schwankend, oft niedrig</td>
                  <td className="p-3">Hoch, datenbasiert gesteuert</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Transparenz</td>
                  <td className="p-3">Gefühl, subjektive Eindrücke</td>
                  <td className="p-3">Echtzeit- und Historien-Daten</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Kostensteuerung</td>
                  <td className="p-3">Schlecht steuerbar</td>
                  <td className="p-3">Gezielte Flächenoptimierung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="loesung" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Lösungsansatz: Sensorik &amp; Workplace-Analytics
          </h2>
          <p>
            Sensorik misst, wie viele Personen sich wo und wann aufhalten –{" "}
            <strong>ohne personenbezogene Daten</strong>. In Kombination mit
            Buchungs-, Zutritts- oder WLAN-Daten entsteht ein 360°-Bild. Ein
            Dashboard verdichtet diese Signale zu Trends, Heatmaps und KPIs.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold mb-2">Typen von Sensoren</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Desk-/Stuhl-Sensoren</strong> (z. B. Druck, PIR):
                  erkennen Belegung einzelner Arbeitsplätze.
                </li>
                <li>
                  <strong>Raum-/Zonensensoren</strong> (Time-of-Flight, Radar,
                  Computer Vision mit Privacy-Masking): zählen Personen in
                  Bereichen.
                </li>
                <li>
                  <strong>Gate-/Eingangssensoren</strong>: erfassen
                  Personenströme am Eingang, liefern Peak- und Tagesprofile.
                </li>
                <li>
                  <strong>Umweltsensoren</strong> (CO₂, VOC, Temperatur,
                  Feuchte): zeigen Luftqualität und Komfort an.
                </li>
              </ul>

              <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="text-left font-semibold p-3">Sensor</th>
                      <th className="text-left font-semibold p-3">Genauigkeit</th>
                      <th className="text-left font-semibold p-3">Privatsphäre</th>
                      <th className="text-left font-semibold p-3">
                        Installation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-200">
                      <td className="p-3">Desk PIR/Druck</td>
                      <td className="p-3">Mittel–Hoch</td>
                      <td className="p-3">Sehr hoch</td>
                      <td className="p-3">Einfach, batteriebetrieben</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-3">Time-of-Flight/Radar</td>
                      <td className="p-3">Hoch</td>
                      <td className="p-3">Hoch</td>
                      <td className="p-3">Decke/Wand, Stromversorgung</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-3">Computer Vision (gepixelt)</td>
                      <td className="p-3">Sehr hoch</td>
                      <td className="p-3">Hoch (ohne IDs)</td>
                      <td className="p-3">Aufwendiger, Netzwerk</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-3">CO₂/IAQ</td>
                      <td className="p-3">Indirekt (Proxy)</td>
                      <td className="p-3">Sehr hoch</td>
                      <td className="p-3">Einfach</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h4 className="font-semibold mb-2">Quick Wins</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Check-in &amp; Auto-Release gegen Ghost Meetings</li>
                <li>Peak-Tage entzerren (Events, Kantine, Shuttle)</li>
                <li>Fokuszonen ausbauen, selten genutzte Räume umwidmen</li>
                <li>CO₂ live anzeigen &amp; Lüftung dynamisch steuern</li>
              </ul>
            </aside>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Ohne verlässliche Auslastungsdaten bleiben
              Arbeitsplatzstrategien Annahmen. Sensorik liefert die
              Entscheidungsgrundlage – vom Desk bis zum Portfolio.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Dr. Jana Richter, Workplace-Analytics (indirektes Zitat)
            </figcaption>
          </figure>

          {/* Bild 1 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                  alt="Dashboard für Workplace-Analytics mit Belegungs-Heatmap"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Auslastung sehen statt schätzen: Heatmaps und Zeitprofile machen
              Muster greifbar.
            </figcaption>
          </figure>
        </section>

        <section id="praxisnutzen" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Praxisnutzen für Unternehmen</h2>
          <p>
            Daten entfalten ihren Wert erst, wenn du daraus Entscheidungen
            ableitest. Diese Ergebnisse sind im Alltag besonders relevant:
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Effizienz</h3>
              <p className="text-zinc-700">
                Leerstände identifizieren, Flächen konsolidieren, Cleaning- und
                Catering-Services am Bedarf ausrichten. Ziel: gleiche
                Leistungsfähigkeit mit weniger Quadratmetern.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Mitarbeiterzufriedenheit</h3>
              <p className="text-zinc-700">
                Verfügbarkeit erhöhen, Fokuszonen und Kollab-Flächen
                balancieren, Raumkonflikte abbauen – die richtige Fläche zur
                richtigen Zeit.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Nachhaltigkeit</h3>
              <p className="text-zinc-700">
                Bedarfsgerechte Beleuchtung, Heizung, Lüftung. Weniger
                verschwendete Energie, geringere Emissionen, bessere Luft.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="font-semibold mb-3">
              KPIs, auf die es wirklich ankommt
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Durchschnittliche Auslastung</strong> pro Zone/Tag
                </li>
                <li>
                  <strong>Peak-Auslastung</strong> (max. gleichzeitige Personen)
                </li>
                <li>
                  <strong>Belegungsdauer</strong> pro Desk/Raum
                </li>
                <li>
                  <strong>Ghost-Rate</strong> (gebucht, aber leer)
                </li>
              </ul>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Turnover</strong> (Anzahl verschiedener Nutzer pro
                  Desk)
                </li>
                <li>
                  <strong>Zeit bis Verfügbarkeit</strong> (Room/Desk)
                </li>
                <li>
                  <strong>CO₂-Spitzen</strong> &amp; <strong>IAQ-Score</strong>
                </li>
                <li>
                  <strong>Flächen-€/MA</strong> &amp;{" "}
                  <strong>€/genutzte Stunde</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* 2:1 Grid – Hardware vs. Software */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
              <h3 className="font-semibold mb-2">Technik – kurz erklärt</h3>
              <p className="text-zinc-700">
                Sensoren senden an Gateways, die Daten werden verschlüsselt in
                die Cloud übertragen, dort anonymisiert/aggregiert und im
                Dashboard visualisiert. Über Integrationen (z. B. Outlook/Teams,
                SSO, BI-Tools) fließen Buchungen, Badge-Daten oder WLAN-Zählung
                hinzu.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h4 className="font-semibold mb-2">Privacy by Design</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Keine Identifizierung einzelner Personen</li>
                <li>Edge-Anonymisierung (bei Kamera: Pixel/Heatmap)</li>
                <li>Datenminimierung &amp; Speicherfristen</li>
                <li>DPIA/AVV mit Datenschutz &amp; Betriebsrat</li>
              </ul>
            </div>
          </div>

          {/* Bild 2 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=900&auto=format&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                  alt="Decken-Sensoren in einem modernen Konferenzraum"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Raum- und Zonensensoren schaffen Transparenz bei Meetingräumen.
            </figcaption>
          </figure>
        </section>

        <section id="rolle-bueroausstatter" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Konkrete Rolle von Büroausstattern
          </h2>
          <p>
            Moderne Büroausstatter sind nicht mehr nur Möbellieferanten. Sie
            verbinden <strong>Einrichtung, Sensorik und Analytics</strong> zu
            einer Lösung – und begleiten den Wandel als Partner.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Beratung</h3>
              <p className="text-zinc-700">
                Auswahl geeigneter Sensoren (Desk, Raum, Gate), Funkstandards
                (z. B. BLE, LoRaWAN), Platzierung, Datenschutzkonzept und
                Piloten – abgestimmt auf dein Nutzungsmuster.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Einrichtung + IT</h3>
              <p className="text-zinc-700">
                Möbel, Akustik, Strom/Netz, digitale Beschilderung und
                Buchungssysteme greifen ineinander. Ergebnis: Flächen, die sich
                am tatsächlichen Bedarf orientieren.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Reporting as a Service</h3>
              <p className="text-zinc-700">
                Monatliche Reports, Handlungsempfehlungen und A/B-Tests
                (z. B. andere Raumgrößen, Umwidmung, Policies) – so bleibt die
                Optimierung am Laufen.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold mb-2">Fehler vermeiden</h3>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Nur Buchungen messen – <em>Nutzung</em> bleibt unsichtbar</li>
              <li>
                Zu grobe Sensorik – Zonen werden optimiert, einzelne Engpässe
                bleiben
              </li>
              <li>KPIs ohne Schwellenwerte – keine klare Handlung</li>
              <li>Datenschutz erst am Ende – Widerstände vorprogrammiert</li>
            </ul>
          </div>
        </section>

        <section id="use-cases" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Use Cases &amp; Beispiele</h2>

          <div className="mt-4 space-y-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Mittelständisches Unternehmen reduziert Bürofläche um 20&nbsp;%
              </h3>
              <p className="text-zinc-700">
                Ausgangslage: Überbuchte Meetingräume, aber leere Einzelplätze.
                Vorgehen: 3-monatiger Pilot mit Raum- und Desk-Sensoren, darauf
                basierend Umwidmung von 8 kleinen Meetingräumen zu 4 größeren
                kollaborativen Flächen, Einführung von Auto-Release bei
                No-Show-Buchungen. Ergebnis: höhere Flächeneffizienz,
                konsolidierte Etage, rund 20&nbsp;% weniger Fläche – bei
                gleichbleibender Performance.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Großraumbüro gewinnt Transparenz – Meetingraum-Konflikte sinken
              </h3>
              <p className="text-zinc-700">
                Ausgangslage: Kalendereinträge suggerieren volle Auslastung,
                tatsächlich stehen Räume oft leer. Vorgehen: Raum-Sensoren und
                Check-in am Panel, nach 10 Minuten No-Show wird der Slot wieder
                freigegeben. Ergebnis: &gt;30&nbsp;% weniger Konflikte, bessere
                Verfügbarkeit zur Kernzeit (Di–Do 10–14 Uhr).
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Nachhaltigkeit im Alltag</h3>
              <p className="text-zinc-700">
                IAQ-Sensoren (CO₂) steuern die Lüftung bedarfsorientiert.
                Beleuchtung und HVAC folgen der Belegung. Das reduziert
                Verbräuche, verbessert die Luftqualität und senkt Kosten – ganz
                ohne Komfortverlust.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Frage</th>
                  <th className="text-left font-semibold p-3">Datenquelle</th>
                  <th className="text-left font-semibold p-3">Entscheidung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Wie viele Desks brauche ich?</td>
                  <td className="p-3">Desk-Belegung + Peak-Tage</td>
                  <td className="p-3">
                    Ziel-Quote (z. B. 1,4:1) festlegen, Zonen umschichten
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Welche Raumgrößen fehlen?</td>
                  <td className="p-3">Raum-Auslastung nach Kapazität</td>
                  <td className="p-3">
                    Kleine Räume zu Projektzonen, Fokusboxen ergänzen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Wo spare ich Energie?</td>
                  <td className="p-3">Belegung + CO₂-Spitzenzeiten</td>
                  <td className="p-3">
                    Beleuchtung/HVAC an Nutzung koppeln, Zeitpläne anpassen
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">ROI grob kalkulieren</h3>
            <p className="text-sm text-zinc-700">
              Beispiel: 300 Desks, 40 Räume. Hardware + Betrieb ca. 8–15&nbsp;€
              pro Platz/Raum &amp; Monat (Projektabhängig). Wenn dadurch 15&nbsp;%
              weniger Fläche benötigt wird, amortisiert sich die Lösung oft in{" "}
              &lt;12 Monaten. Formel: <em>(Flächenkostenersparnis + Betriebs- und
              Energiekostenersparnis − Systemkosten) / Systemkosten</em>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Wie unterscheiden sich Buchungsdaten und echte Belegung?
              </h3>
              <p>
                Buchungen zeigen Absichten, Sensorik die Realität. Durch
                Auto-Release bei No-Shows und Check-in-Pflichten verbindest du
                beides – und erhältst verlässliche Auslastungswerte.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Sind Kameras wegen Datenschutz ein No-Go?
              </h3>
              <p>
                Nicht zwingend. Moderne Systeme anonymisieren am Sensor (Pixel,
                Heatmap) und speichern keine Personenbilder. Wichtig sind
                DPIA/AVV, Information der Belegschaft und klar definierte
                Speicherfristen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Reichen WLAN- oder Badge-Daten nicht aus?
              </h3>
              <p>
                Sie sind ein guter Start, aber ungenau bei Zonen/Desks.
                Kombiniert mit Raum-/Desk-Sensoren erhältst du die Präzision für
                konkrete Umbauten oder Flächenentscheidungen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Ergebnisse sind realistisch?
              </h3>
              <p>
                Typisch sind 10–30&nbsp;% Flächenersparnis, weniger
                Raumkonflikte, bessere Verfügbarkeit an Peak-Tagen und spürbare
                Energieeinsparungen – abhängig von Ausgangslage und Konsequenz
                bei der Umsetzung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie starte ich, ohne gleich das ganze Büro zu verkabeln?
              </h3>
              <p>
                Mit einem 8–12-wöchigen Pilot in repräsentativen Zonen. Danach
                entscheidest du über Rollout, Umbauten und Policies auf Basis
                echter Daten.
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
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Wie unterscheiden sich Buchungsdaten und echte Belegung?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Buchungen zeigen Absichten, Sensorik die Realität. Durch Auto-Release und Check-in-Pflichten verbindest du beides – und erhältst verlässliche Auslastungswerte.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Sind Kameras wegen Datenschutz ein No-Go?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nicht zwingend. Moderne Systeme anonymisieren am Sensor (Pixel, Heatmap) und speichern keine Personenbilder. Wichtig sind DPIA/AVV, Information der Belegschaft und Speicherfristen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Reichen WLAN- oder Badge-Daten nicht aus?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sie sind ein guter Start, aber ungenau bei Zonen/Desks. Kombiniert mit Raum-/Desk-Sensoren erhältst du die Präzision für konkrete Umbauten oder Flächenentscheidungen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Ergebnisse sind realistisch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Typisch sind 10–30 % Flächenersparnis, weniger Raumkonflikte, bessere Verfügbarkeit an Peak-Tagen und spürbare Energieeinsparungen – abhängig von Ausgangslage und Umsetzung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie starte ich, ohne gleich das ganze Büro zu verkabeln?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Mit einem 8–12-wöchigen Pilot in repräsentativen Zonen. Danach entscheidest du über Rollout, Umbauten und Policies auf Basis echter Daten.",
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
              Wie machen Büroausstatter hybrides Arbeiten messbar und wirksam?
            </strong>{" "}
            Mit Sensorik und Analytics wird Nutzung sichtbar – und damit
            steuerbar. Wer klein startet, KPIs definiert und konsequent handelt,
            erzielt schnell Effekte: weniger Fläche, zufriedenere Teams,
            nachhaltiger Betrieb.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Soll dein Büro sich an die Menschen anpassen – statt umgekehrt?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir verbinden Einrichtung, Sensorik &amp; Analytics zu einer
              Lösung – vom Pilot bis zum Portfolio-Reporting.
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

          {/* Pop-up (Modal) */}
          <div
            id="cta-pop"
            className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
          >
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
                href="/blog/desk-sharing-einfuehrung"
              >
                Desk-Sharing einführen: Regeln, Tools, Change
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/meetingraeume-optimieren"
              >
                Meetingräume optimieren: Von Ghost Meetings zu Verfügbarkeit
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/luftqualitaet-im-buero"
              >
                Bessere Luft im Büro: IAQ messen &amp; verbessern
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/workplace-analytics-datenquellen"
              >
                Workplace-Analytics: Datenquellen &amp; Dashboards
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Sensorik &amp; Analytics
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
                  <td className="p-3 font-medium text-zinc-900">Desk-Sharing</td>
                  <td className="p-3 text-zinc-700">
                    Mehr Personen teilen sich weniger Arbeitsplätze; Buchung und
                    Daten sorgen für Verfügbarkeit.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Ghost Meeting
                  </td>
                  <td className="p-3 text-zinc-700">
                    Gebuchter Raum ohne tatsächliche Nutzung; verhindert durch
                    Check-in/Auto-Release.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">IAQ</td>
                  <td className="p-3 text-zinc-700">
                    <em>Indoor Air Quality</em>; Luftqualitäts-Metriken (CO₂,
                    VOC, Temperatur, Feuchte) für Komfort &amp; Gesundheit.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Time-of-Flight
                  </td>
                  <td className="p-3 text-zinc-700">
                    Distanzmessung per Lichtimpuls; erkennt Personen sehr
                    präzise, ohne Identifizierung.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Workplace-Analytics
                  </td>
                  <td className="p-3 text-zinc-700">
                    Zusammenführung und Auswertung von Nutzungs-, Buchungs-,
                    Zutritts- und Umweltdaten zur Steuerung von Flächen.
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
              <a
                href="https://www.linkedin.com/in/lennartweber"
                className={`text-sm hover:underline ${accent}`}
              >
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von:{" "}
              <strong>Dr. Jana Richter</strong> – Workplace-Analytics Lead.{" "}
              <a
                href="https://www.linkedin.com/in/jana-richter"
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
              CBRE (2024): European Office Occupier Sentiment Survey –{" "}
              <a
                href="https://www.cbre.com/insights/reports/european-office-occupier-sentiment-survey-2024"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.cbre.com/insights/reports/european-office-occupier-sentiment-survey-2024
              </a>
            </li>
            <li>
              CBRE (2025): Global Workplace &amp; Occupancy Insights –{" "}
              <a
                href="https://www.cbre.com/insights/reports/2024-2025-global-workplace-and-occupancy-insights"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.cbre.com/insights/reports/2024-2025-global-workplace-and-occupancy-insights
              </a>
            </li>
            <li>
              Gensler Research Institute (2024): Global Workplace Survey –{" "}
              <a
                href="https://www.gensler.com/gri/global-workplace-survey-2024"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.gensler.com/gri/global-workplace-survey-2024
              </a>
            </li>
            <li>
              Kastle Systems (laufend): Back to Work Barometer –{" "}
              <a
                href="https://www.kastle.com/safety-wellness/getting-america-back-to-work-occupancy-by-day-of-week/"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.kastle.com/safety-wellness/getting-america-back-to-work-occupancy-by-day-of-week/
              </a>
            </li>
            <li>
              de Bakker et&nbsp;al. (2017): Energy Savings of Occupancy-Based
              Control –{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0360132316304735"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.sciencedirect.com/science/article/pii/S0360132316304735
              </a>
            </li>
            <li>
              Density (2025): Case Study – $1M+ Savings via Occupancy –{" "}
              <a
                href="https://www.density.io/resources/how-density-helped-a-top-e-commerce-company-save-1m-a-year"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.density.io/resources/how-density-helped-a-top-e-commerce-company-save-1m-a-year
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
