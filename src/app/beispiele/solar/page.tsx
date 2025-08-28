// src/app/blog/pv-anlage-firmendach-roi-foerderungen/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const title =
  "PV-Anlage fürs Firmendach: ROI & Förderungen – Beispielrechnung, Autarkie, Amortisationszeit";
const description =
  "Photovoltaik im Gewerbe: So rechnest du ROI & Amortisationszeit. Mit Beispielrechnung (kWh, Autarkie), Einspeisevergütung 2025, Speicher & Förderungen für Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical:
      "https://www.muster-gmbh.de/blog/pv-anlage-firmendach-roi-foerderungen",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "de_DE",
    url: "https://www.muster-gmbh.de/blog/pv-anlage-firmendach-roi-foerderungen",
    images: [
      {
        url: "/solardach.jpg",
        width: 1600,
        height: 600,
        alt: "PV-Anlage auf Firmendach bei Sonne – ROI & Förderungen einfach erklärt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/solardach.jpg"],
  },
};

const accent = "text-emerald-700";
const author = {
  name: "Max Mustermann",
  role: "Leiter Facility Management (FM)",
  focus:
    "Energie, Nachhaltigkeit, Betriebskostenoptimierung im Gewerbe",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Energieberater für gewerbliche PV",
  linkedin: "https://linkedin.com",
};

export default function Page() {
  return (
    <>
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
            image: ["https://www.muster-gmbh.de/solardach.jpg"],
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              sameAs: [author.linkedin],
            },
            publisher: {
              "@type": "Organization",
              name: "Muster GmbH",
              url: "https://www.muster-gmbh.de",
              logo: {
                "@type": "ImageObject",
                url: "https://www.muster-gmbh.de/logo.png",
              },
            },
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            mainEntityOfPage:
              "https://www.muster-gmbh.de/blog/pv-anlage-firmendach-roi-foerderungen",
          }),
        }}
      />

      {/* Company Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Muster GmbH",
            url: "https://www.muster-gmbh.de",
            email: "muster@beispiel.de",
            telephone: "+49 123456789",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 1",
              addressLocality: "—",
              postalCode: "—",
              addressCountry: "DE",
            },
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
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            PV-Anlage fürs Firmendach: ROI &amp; Förderungen einfach erklärt
          </h1>

          <p className="mt-3 text-lg text-zinc-700">
            Du möchtest mit einer{" "}
            <strong>PV-Anlage im Gewerbe</strong> Stromkosten senken und{" "}
            <strong>Solar-Eigenverbrauch</strong> erhöhen? Hier bekommst du eine
            klare <strong>Beispielrechnung</strong> (kWh, Autarkie,
            Amortisationszeit) und einen praxisnahen Überblick zu
            <strong> Förderungen</strong> &amp; Einspeisevergütung für
            Unternehmen.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-20">20.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://unsplash.com/photos/tall-apartment-buildings-with-many-windows-and-balconies-L1O-ZtA3dcc"
                />
                <img
                  fetchPriority="high"
                  src="https://unsplash.com/photos/tall-apartment-buildings-with-many-windows-and-balconies-L1O-ZtA3dcc"
                  alt="Gewerbedach mit Solarmodulen in der Sonne – Start in die Eigenstromversorgung"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              PV auf dem Firmendach als Hebel für Kostenkontrolle und
              Dekarbonisierung.
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
              <strong>ROI leicht rechnen:</strong> Jahresertrag ≈ kWp ×
              spezifischer Ertrag (Richtwert 900–1.050 kWh/kWp). Die
              Amortisationszeit ergibt sich aus Investition ÷ (Einsparung +
              Einspeiseerlös − Betriebskosten).
            </li>
            <li>
              <strong>Eigenverbrauch schlägt Einspeisung:</strong>{" "}
              Gewerbestrom kostet oft 0,17–0,25 €/kWh. Jede selbst genutzte
              kWh spart den vollen Bezugspreis, Einspeisung vergütet nur wenige
              Cent/kWh.
            </li>
            <li>
              <strong>2025er Vergütung:</strong> Für{" "}
              Teileinspeisung von Dach-PV bis 100–400 kW gelten veröffentlichte
              Sätze ab 01.08.2025; Volleinspeisung erhält höhere ct/kWh – lohnt
              sich, wenn tagsüber wenig Last anliegt.
            </li>
            <li>
              <strong>Förderung für Unternehmen:</strong> Zinsgünstiger
              <em> KfW-270</em>-Kredit bundesweit; Landes-/Kommunalprogramme
              variieren (NRW z. T. ausgesetzt).{" "}
              <strong>Solarpaket I</strong> vereinfacht Genehmigungen und
              erhöht Sätze für größere Dächer.
            </li>
            <li>
              <strong>Speicher &amp; Lastspitzen:</strong> Ein
              Stromspeicher steigert den Eigenverbrauch und kann{" "}
              <em>Lastspitzen</em> kappen – wichtig bei Leistungspreisen in
              Gewerbetarifen.
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
              <a className={`hover:underline ${accent} font-medium`} href="#warum-pv-firma">
                Warum PV fürs Firmendach?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#so-rechnest-du-roi">
                So rechnest du ROI, Autarkie &amp; Amortisationszeit
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#beispielrechnung">
                Beispielrechnung: 200&nbsp;kWp auf einem Bürodach
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#einspeiseverguetung">
                Einspeisevergütung 2025/26: Teile- vs. Volleinspeisung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#foerderungen">
                Förderungen für Unternehmen (KfW, Bund, Länder, Kommunen)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#fehler">
                Häufige Fehler vermeiden
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
        <section id="warum-pv-firma">
          <h2 className="text-2xl font-bold mb-2">Warum PV fürs Firmendach?</h2>
          <p className="leading-relaxed">
            Eine <strong>PV-Anlage für Firmen</strong> macht dich als
            Unternehmen unabhängiger vom Strommarkt, senkt laufende Kosten und
            reduziert CO₂-Emissionen. Die <strong>Photovoltaik im Gewerbe</strong>{" "}
            ist besonders attraktiv, weil Lastspitzen tagsüber auftreten – genau
            dann, wenn die Anlage Strom erzeugt. Kombiniert mit{" "}
            <em>Solar-Eigenverbrauch</em> und ggf. einem Stromspeicher entstehen
            zusätzliche Vorteile: höhere <strong>Autarkie</strong>, mehr
            Planbarkeit und bessere Resilienz.
          </p>

          {/* 2:1 Grid – Nutzen kurz & knackig */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Die Top-Vorteile</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Kostenersparnis:</strong> Jede selbst genutzte kWh
                  ersetzt teuren Netzstrom.
                </li>
                <li>
                  <strong>Planbarkeit:</strong> 20-Jahre-Vergütung für
                  Überschussstrom; transparente OPEX.
                </li>
                <li>
                  <strong>Nachhaltigkeit:</strong> Verbesserter CO₂-Fußabdruck
                  &amp; ESG-Reporting.
                </li>
                <li>
                  <strong>Peak-Shaving:</strong> Speicher senkt{" "}
                  <em>Lastspitzen</em> und Leistungspreise.
                </li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-sm">
                <strong>Gut zu wissen:</strong> Gewerbestrompreise bewegen sich
                – je nach Verbrauch und Entlastungen – häufig im Bereich von ca.
                0,17–0,25 €/kWh. Der Tausch „Netzbezug gegen Eigenstrom“ ist
                daher der wichtigste Renditetreiber.
              </div>
            </aside>
          </div>
        </section>

        {/* Bild 1 – volle Breite */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/windraeder.jpg" />
              <img
                loading="lazy"
                src="/windraeder.jpg"
                alt="Vergleich erneuerbare Energien: Windrad und PV als Team im Energiemix"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Vergleichbar wie Wind: PV liefert tagsüber planbar Energie – ideal
            für Gewerbelasten.
          </figcaption>
        </figure>

        <section id="so-rechnest-du-roi" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            So rechnest du ROI, Autarkie &amp; Amortisationszeit
          </h2>
          <p className="leading-relaxed">
            Die <strong>Amortisationszeit</strong> einer PV-Anlage ergibt sich
            aus Investitionskosten im Verhältnis zu jährlicher{" "}
            <strong>Einsparung</strong> plus <strong>Einspeiseerlös</strong>{" "}
            abzüglich <strong>Betriebskosten</strong>. Nutze diese einfachen
            Bausteine:
          </p>

          {/* Formel-Box */}
          <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Rechentools in Klartext</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Jahresertrag (kWh)</strong> ≈{" "}
                <em>Anlagenleistung (kWp)</em> ×{" "}
                <em>spezifischer Ertrag (kWh/kWp·a)</em>.
              </li>
              <li>
                <strong>Eigenverbrauchsanteil (%)</strong> ={" "}
                (Eigenverbrauch / Jahresertrag) × 100.
              </li>
              <li>
                <strong>Autarkiegrad (%)</strong> = (Eigenverbrauch / eigener
                Jahresverbrauch) × 100.
              </li>
              <li>
                <strong>Jährliche Ersparnis (€)</strong> = Eigenverbrauch (kWh) ×
                Strompreis (€/kWh).
              </li>
              <li>
                <strong>Einspeiseerlös (€)</strong> = Einspeisung (kWh) ×
                Vergütung (€/kWh).
              </li>
              <li>
                <strong>Amortisationszeit (Jahre)</strong> = Investition (€) ÷{" "}
                [Ersparnis + Einspeiseerlös − OPEX].
              </li>
            </ul>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Für <strong>Gewerbe-PV</strong> zählt jede selbst genutzte
              Kilowattstunde doppelt: Sie spart Netzstromkosten und macht das
              Unternehmen unabhängiger. Einspeisung ist ein Bonus –
              <em>Eigenverbrauch</em> ist der Renditekern.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Praxisfazit aus Projekten im Mittelstand (indirektes Zitat)
            </figcaption>
          </figure>
        </section>

        <section id="beispielrechnung" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Beispielrechnung: 200&nbsp;kWp auf einem Bürodach
          </h2>
          <p className="leading-relaxed">
            Angenommen, dein Unternehmen verbraucht jährlich{" "}
            <strong>300.000 kWh</strong>. Auf dem Firmendach wird eine{" "}
            <strong>PV-Anlage mit 200 kWp</strong> installiert. Wir rechnen mit
            einem konservativen spezifischen Ertrag von{" "}
            <strong>950 kWh/kWp·a</strong> und vergleichen zwei Szenarien:
            ohne und mit Speicher.
          </p>

          {/* Vergleichstabelle */}
          <div className="mt-5 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold w-52">
                    Annahmen
                  </th>
                  <th className="p-3 text-left font-semibold">
                    Szenario A: Ohne Speicher
                  </th>
                  <th className="p-3 text-left font-semibold">
                    Szenario B: Mit Speicher
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">PV-Ertrag</td>
                  <td className="p-3">200 kWp × 950 = <strong>190.000 kWh/a</strong></td>
                  <td className="p-3">identisch</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Eigenverbrauchsanteil</td>
                  <td className="p-3">≈ <strong>60 %</strong> → 114.000 kWh</td>
                  <td className="p-3">≈ <strong>80 %</strong> → 152.000 kWh</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Einspeisung</td>
                  <td className="p-3">76.000 kWh</td>
                  <td className="p-3">38.000 kWh</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Autarkiegrad</td>
                  <td className="p-3">114.000 / 300.000 = <strong>38 %</strong></td>
                  <td className="p-3">152.000 / 300.000 = <strong>≈ 51 %</strong></td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Strompreis (Bezug)</td>
                  <td className="p-3">0,20 €/kWh (Beispiel)</td>
                  <td className="p-3">0,20 €/kWh (Beispiel)</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Einsparung p. a.</td>
                  <td className="p-3">114.000 × 0,20 = <strong>22.800 €</strong></td>
                  <td className="p-3">152.000 × 0,20 = <strong>30.400 €</strong></td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">
                    Einspeisevergütung (Teileinspeisung)
                  </td>
                  <td className="p-3">
                    76.000 × 0,0596 = <strong>4.529,60 €</strong>
                  </td>
                  <td className="p-3">
                    38.000 × 0,0596 = <strong>2.264,80 €</strong>
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">OPEX p. a.</td>
                  <td className="p-3">PV ≈ 2 % von 180.000 € → <strong>3.600 €</strong></td>
                  <td className="p-3">
                    PV 3.600 € + Speicher ≈ 1 % von 100.000 € →{" "}
                    <strong>1.000 €</strong> = <strong>4.600 €</strong>
                  </td>
                </tr>
                <tr className="border-t border-zinc-200 bg-zinc-50">
                  <td className="p-3 font-medium">Netto-Cash-flow p. a.</td>
                  <td className="p-3">
                    22.800 + 4.529,6 − 3.600 ={" "}
                    <strong className={accent}>23.729,60 €</strong>
                  </td>
                  <td className="p-3">
                    30.400 + 2.264,8 − 4.600 ={" "}
                    <strong className={accent}>28.064,80 €</strong>
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Investition (CAPEX)</td>
                  <td className="p-3">PV: 200 kWp × 900 €/kWp → <strong>180.000 €</strong></td>
                  <td className="p-3">PV 180.000 € + Speicher 100.000 € → <strong>280.000 €</strong></td>
                </tr>
                <tr className="border-t border-zinc-200 bg-zinc-50">
                  <td className="p-3 font-medium">
                    Amortisationszeit (Payback)
                  </td>
                  <td className="p-3">
                    180.000 ÷ 23.729,6 ≈{" "}
                    <strong className={accent}>7,6 Jahre</strong>
                  </td>
                  <td className="p-3">
                    280.000 ÷ 28.064,8 ≈{" "}
                    <strong className={accent}>≈ 10,0 Jahre</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hinweisbox */}
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
            <strong>Hinweis:</strong> Preise, Vergütungen und Erträge sind
            regional und zeitlich variabel. Nutze die Formeln, ersetze die
            Beispielwerte durch deine Zahlen und prüfe Tarife, Lastgänge und
            Netzentgelte individuell.
          </div>

          {/* 2:1 Grid – Peak-Shaving */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="text-lg font-semibold mb-1">
                Bonus durch Peak-Shaving (optional)
              </h3>
              <p className="text-sm">
                Viele Gewerbetarife enthalten einen{" "}
                <strong>Leistungspreis</strong> pro kW{" "}
                Jahreshöchstlast. Reduziert ein Speicher z. B. die Spitze um
                50 kW und der Leistungspreis beträgt 100 €/kW·a, sparst du
                zusätzlich ca. <strong>5.000 €</strong> jährlich.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h4 className="font-semibold mb-2">Merke</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Speicher: Rendite ≠ nur Eigenverbrauch</li>
                <li>Peak-Shaving + Blindleistung beachten</li>
                <li>Leistungsdaten 15-min-wertig auswerten</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="einspeiseverguetung" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Einspeisevergütung 2025/26: Teile- vs. Volleinspeisung
          </h2>
          <p className="leading-relaxed">
            Für <strong>Dach-PV im Gewerbe</strong> gelten veröffentlichte
            Vergütungssätze, die sich an Leistungsklassen und Betriebsart
            orientieren. <strong>Teileinspeisung</strong> wird mit niedrigeren
            ct/kWh vergütet als <strong>Volleinspeisung</strong>, dafür
            maximierst du deinen <em>Solar-Eigenverbrauch</em>. Seit dem{" "}
            <strong>Solarpaket I</strong> wurden die Sätze für größere Dächer
            aufgewertet und Verfahren vereinfacht.
          </p>

          {/* 2-Spalten Vergleich */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Teileinspeisung</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>PV deckt Firmenlast zuerst, Überschuss wird vergütet</li>
                <li>
                  Renditetreiber: eingesparte <em>Gewerbestrompreise</em>
                </li>
                <li>Empfehlung für die meisten Dachanlagen im Betrieb</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Volleinspeisung</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Gesamter PV-Strom wird eingespeist</li>
                <li>Höhere Vergütungssätze möglich</li>
                <li>
                  Sinnvoll bei sehr geringer Tageslast oder getrennten
                  Dachflächen
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bild 2 – volle Breite */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/firmendach.png" />
              <img
                loading="lazy"
                src="/firmendach.png"
                alt="Bürodach mit Solarpanels, Sonnenbogen, Autarkie-Ring, Amortisations-Uhrsymbol und kWh-Markierungen; dezentes Förder-Ribbon."
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            PV verständlich gemacht: Beispielrechnung zu kWh, Autarkie und
            Amortisation plus Überblick aktueller Förderprogramme.
          </figcaption>
        </figure>

        <section id="foerderungen" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Förderungen für Unternehmen (KfW, Bund, Länder, Kommunen)
          </h2>

          {/* Kacheln */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">KfW 270 – Erneuerbare</h3>
              <p className="text-sm">
                Bundesweites <strong>Förderdarlehen</strong> für
                PV-Investitionen, Speicher &amp; Netzanschluss. Konditionen
                variieren nach Risikoklasse und Laufzeit; Darlehenshöhen auch
                für größere Vorhaben geeignet. Antrag über Hausbank.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">
                EEG-Vergütung &amp; Solarpaket I
              </h3>
              <p className="text-sm">
                Gesetzlich garantierte Vergütung (20 Jahre ab Inbetriebnahme).
                <strong> Solarpaket I</strong> vereinfacht Prozesse (z. B.
                Netzanschluss) und stärkt <em>Gewerbedächer</em>; für größere
                Dachanlagen wurden Sätze angehoben.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">
                Länder &amp; Kommunen (Zuschüsse/Kredite)
              </h3>
              <p className="text-sm">
                Programme sind dynamisch: Einige Städte fördern Dach-PV oder
                Speicher, andere pausieren. Beispiel{" "}
                <strong>NRW</strong>: Teile des Programms wurden 2025
                ausgesetzt. In <strong>Stuttgart</strong> existiert eine
                kommunale Solaroffensive.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">EEW (BAFA) – Effizienz</h3>
              <p className="text-sm">
                Keine direkte BAFA-Zuschusslinie für PV-Module. Für Unternehmen
                sind jedoch <em>Effizienz-Module</em> (z. B. MSR, Prozesse) und
                Energieberatung relevant – oft gute Kombi mit PV-Projekt.
              </p>
            </div>
          </div>

          {/* Mini-Checkliste */}
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h4 className="font-semibold mb-2">Förder-Fahrplan in 5 Schritten</h4>
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Lastgang &amp; Dachfläche prüfen, Ziel (Eigenverbrauch) festlegen</li>
              <li>Invest &amp; Szenarien (mit/ohne Speicher) kalkulieren</li>
              <li>KfW-Kredit 270 mit Hausbank klären</li>
              <li>EEG-Vergütungsklasse und Netzanschlussbedingungen checken</li>
              <li>Land/Kommunal-Töpfe und Fristen prüfen (laufend!)</li>
            </ol>
          </div>
        </section>

        <section id="fehler" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Häufige Fehler vermeiden</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Zu kleine Anlage</strong> – verschenkt Dachpotenzial und
              Skaleneffekte.
            </li>
            <li>
              <strong>Ohne Lastdaten planen</strong> – Eigenverbrauch sinkt,
              Einspeisung steigt unnötig.
            </li>
            <li>
              <strong>Speichergröße nur nach Gefühl</strong> – prüfe
              Peak-Shaving und Tagesprofil.
            </li>
            <li>
              <strong>Vergütungsklassen ignorieren</strong> – Stichtage und
              Leistungskorridore beachten.
            </li>
            <li>
              <strong>Förderfristen verpassen</strong> – Programme ändern sich
              häufig.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Wie viel kWh liefert 1 kWp auf dem Firmendach?
              </h3>
              <p>
                Als Daumenregel kannst du in Deutschland mit{" "}
                <strong>ca. 900–1.050 kWh/kWp·a</strong> rechnen – abhängig von
                Standort, Neigung, Ausrichtung und Verschattung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Lohnt sich ein Stromspeicher im Gewerbe?
              </h3>
              <p>
                Häufig ja: Er erhöht den Eigenverbrauch und kann{" "}
                <em>Lastspitzen</em> reduzieren. Ob sich das rechnet, hängt von
                Leistungspreisen, Tageslastprofil und Speicherpreis ab.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Teileinspeisung oder Volleinspeisung – was ist besser?
              </h3>
              <p>
                Für Betriebe mit Tageslast ist <strong>Teileinspeisung</strong>{" "}
                meist vorteilhaft, weil die Einsparung je Eigenverbrauchs-kWh
                höher ist als die reine Einspeisevergütung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Förderungen gibt es für Unternehmen?
              </h3>
              <p>
                Bundesweit <strong>KfW-270</strong> (Kredit), dazu EEG-Vergütung
                und lokal ggf. Landes-/Kommunalförderungen. Programme ändern
                sich – Fristen prüfen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Amortisationszeit ist realistisch?
              </h3>
              <p>
                Je nach Strompreis, Vergütung und Invest zwischen{" "}
                <strong>6–12 Jahren</strong> für Dach-PV. Speicher verlängert
                den Payback, kann aber über Peak-Shaving Zusatznutzen bringen.
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
                    name: "Wie viel kWh liefert 1 kWp auf dem Firmendach?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "In Deutschland sind ca. 900–1.050 kWh/kWp·a realistisch – je nach Standort, Neigung, Ausrichtung und Verschattung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Lohnt sich ein Stromspeicher im Gewerbe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Speicher erhöhen den Eigenverbrauch und reduzieren Lastspitzen. Die Wirtschaftlichkeit hängt von Leistungspreisen, Lastprofil und Speicherpreis ab.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Teileinspeisung oder Volleinspeisung – was ist besser?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Für Betriebe mit Tageslast meist Teileinspeisung, da die Einsparung je Eigenverbrauchs-kWh höher ist als die reine Einspeisevergütung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Förderungen gibt es für Unternehmen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Bundesweit KfW-Programm 270 (Kredit), EEG-Einspeisevergütung sowie je nach Bundesland/Kommunen weitere Töpfe. Programme ändern sich laufend.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Amortisationszeit ist realistisch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Je nach Strompreis, Vergütung und CAPEX typischerweise 6–12 Jahre für Dach-PV. Speicher verlängert oft den Payback, bringt aber Zusatznutzen.",
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
            <strong>Fragestellung:</strong> Lohnt sich eine PV-Anlage fürs
            Firmendach – und welche Förderung passt?{" "}
            <strong>Antwort:</strong> Ja, wenn du hohen{" "}
            <em>Solar-Eigenverbrauch</em> erreichst. Rechne mit den hier
            gezeigten Formeln, prüfe aktuelle Vergütungsklassen und sichere dir
            einen günstigen <em>KfW-270</em>. Speicher lohnt sich, wenn er
            Eigenverbrauch <em>und</em> Lastspitzen messbar verbessert.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Möchtest du deine Firmen-PV konkret durchrechnen lassen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir analysieren Lastgänge, Dachpotenzial und Förderwege – kompakt,
              verständlich, umsetzbar.
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
                  className={`font-medium underline ${accent}`}
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
                href="/blog/stromspeicher-gewerbe-peak-shaving"
              >
                Stromspeicher im Gewerbe: Peak-Shaving &amp; Wirtschaftlichkeit
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/pv-eigenverbrauch-optimieren-lastmanagement"
              >
                Solar-Eigenverbrauch steigern: Lastmanagement in 5 Schritten
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/mieterstrom-gewerbe-dach-praxisleitfaden"
              >
                Mieterstrom auf Gewerbedächern: Recht &amp; Praxis
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent}`}
                href="/blog/netzanschluss-pv-gewerbe-checkliste"
              >
                Netzanschluss für PV-Anlagen im Gewerbe: Checkliste
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu PV fürs Firmendach
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
                  <td className="p-3 font-medium text-zinc-900">kWp</td>
                  <td className="p-3 text-zinc-700">
                    Kilowattpeak, Nennleistung einer PV-Anlage unter
                    Standardbedingungen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Spezifischer Ertrag
                  </td>
                  <td className="p-3 text-zinc-700">
                    Jahresertrag pro kWp (kWh/kWp·a) – abhängig von Standort und
                    Ausrichtung.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Eigenverbrauch
                  </td>
                  <td className="p-3 text-zinc-700">
                    Anteil des PV-Stroms, den der Betrieb direkt selbst nutzt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Autarkiegrad</td>
                  <td className="p-3 text-zinc-700">
                    Anteil des Gesamtstrombedarfs, der durch eigene PV gedeckt
                    wird.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Einspeisevergütung
                  </td>
                  <td className="p-3 text-zinc-700">
                    Vergütung in ct/kWh für eingespeisten Solarstrom nach EEG,
                    fest für ~20 Jahre ab Inbetriebnahme.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Peak-Shaving</td>
                  <td className="p-3 text-zinc-700">
                    Glättung der Lastspitzen, um Leistungspreise zu senken –
                    häufig mithilfe von Speichern.
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
                {author.role} – {author.focus}
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
              Bundesnetzagentur: „EEG-Förderung und -Fördersätze (PV, Dach) – anzulegende Werte ab 01.08.2025“ – https://www.bundesnetzagentur.de/
              
            </li>
            <li>
              BMWK: „Solarpaket I – Überblick (PDF)“ – https://www.bundeswirtschaftsministerium.de/
            
            </li>
            <li>
              KfW: „Erneuerbare Energien – Standard (270)“ – https://www.kfw.de/
            
            </li>
            <li>
              Eurostat: „Electricity price statistics – Non-household consumers (2024 H2)“ – https://ec.europa.eu/
            
            </li>
            <li>
              SMARD / BNetzA: „Entwicklung der Industriestrompreise (modellierter Preis 2024)“ – https://www.smard.de/
            
            </li>
            <li>
              BA NRW (progres.nrw): „Aussetzen der Förderungen zum Photovoltaikausbau (03.06.2025)“ – https://www.bra.nrw.de/
            
            </li>
            <li>
              Landeshauptstadt Stuttgart: „Solaroffensive – Förderprogramm“ – https://www.stuttgart.de/
            
            </li>
            <li>
              Fraunhofer ISE: „Photovoltaics Report (2025)“ – https://www.ise.fraunhofer.de/
            
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
