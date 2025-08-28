// src/app/blog/additive-fertigung-maschinenbau-2025/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Ingenieur für Fertigungstechnik & Technical Writer",
  focus: "Additive Fertigung, DfAM, Fertigungsdigitalisierung",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Leiterin Konstruktion, Maschinenbau",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
  url: "https://www.muster-gmbh.de",
};

export const metadata: Metadata = {
  title:
    "Additive Fertigung im Maschinenbau 2025: Einsatzmöglichkeiten, Standards & Praxis",
  description:
    "Wie 3D-Druck 2025 im Maschinenbau eingesetzt wird: Anwendungen, Wirtschaftlichkeit, Standards (ISO/ASTM, OPC UA 40540), Best Practices & Checklisten.",
  alternates: {
    canonical:
      "https://www.muster-gmbh.de/blog/additive-fertigung-maschinenbau-2025",
  },
  openGraph: {
    title:
      "Additive Fertigung im Maschinenbau 2025: Einsatzmöglichkeiten, Standards & Praxis",
    description:
      "Der umfassende Leitfaden zu 3D-Druck im Maschinenbau – Anwendungen, ROI, DfAM, Qualität & Normen.",
    url: "https://www.muster-gmbh.de/blog/additive-fertigung-maschinenbau-2025",
    siteName: "Muster GmbH",
    images: [
      {
        url: "/druck1.png",
        width: 1600,
        height: 600,
        alt: "3D-Drucker in der Produktion",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Additive Fertigung im Maschinenbau 2025: Einsatzmöglichkeiten & Standards",
    description:
      "Was sich 2025 lohnt: Anwendungen, ROI, Qualitätsstandards & Integration.",
    images: ["/druck1.png"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const updated = "2025-08-28";
  const updatedLabel = "28.08.2025";
  const readingTime = "10 Minuten";

  return (
    <>
      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Additive Fertigung im Maschinenbau 2025: Einsatzmöglichkeiten, Standards & Praxis",
            description:
              "Wie 3D-Druck 2025 im Maschinenbau eingesetzt wird: Anwendungen, Wirtschaftlichkeit, Standards (ISO/ASTM, OPC UA 40540), Best Practices & Checklisten.",
            inLanguage: "de-DE",
            image: `${company.url}/druck1.png`,
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
                url: `${company.url}/favicon.ico`,
              },
            },
            datePublished: updated,
            dateModified: updated,
            mainEntityOfPage:
              "https://www.muster-gmbh.de/blog/additive-fertigung-maschinenbau-2025",
          }),
        }}
      />

      {/* Company (Organization) Schema */}
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
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Additive Fertigung (3D-Druck) im Maschinenbau: Einsatzmöglichkeiten
            2025
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst wissen, wo sich 3D-Druck heute wirklich lohnt? In diesem
            Leitfaden zeigen wir dir, welche Anwendungen 2025 im Maschinenbau
            wirtschaftlich sind, welche Standards gelten und wie du Additive
            Fertigung sauber in die Produktion integrierst.
          </p>

          {/* Datum & Lesedauer */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={updated}>{updatedLabel}</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">{readingTime}</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/druck1.png" />
                <img
                  src="/druck1.png"
                  alt="3D-Drucker in einer Industrieumgebung"
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="sr-only">3D-Drucker</figcaption>
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
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              3D-Druck ist 2025 im Maschinenbau mehr als Prototyping:{" "}
              <strong>Werkzeuge, Betriebs- und Ersatzteile</strong> gehen in
              Serie – besonders dort, wo Komplexität oder Individualisierung
              gefragt ist.
            </li>
            <li>
              Wirtschaftlichkeit entsteht durch <strong>Design for AM</strong>,
              konturnahe Kühlung, Leichtbau, Funktionsintegration und{" "}
              <strong>digitale Ersatzteillager</strong>.
            </li>
            <li>
              Qualität &amp; Skalierung sichern <strong>ISO/ASTM-Standards</strong>{" "}
              (z. B. 52904, 52931) und <strong>OPC UA 40540</strong> für die
              Maschinen-/MES-Integration.
            </li>
            <li>
              <strong>Break-even</strong> liegt oft bei kleinen bis mittleren
              Stückzahlen und hochkomplexen Geometrien – Spritzguss lohnt sich
              weiterhin für große Serien.
            </li>
            <li>
              Erfolgreiche Einführungen starten <strong>use-case-getrieben</strong>:
              klarer Business Case, zertifizierte Prozesse, messbare KPIs.
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
              <a className={`hover:underline ${accent} font-medium`} href="#was-ist-am">
                Was ist Additive Fertigung?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#warum-2025">
                Warum ist 3D-Druck 2025 im Maschinenbau relevant?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#einsatz">
                Einsatzmöglichkeiten im Maschinenbau
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#verfahren">
                Verfahren &amp; Materialwahl im Vergleich
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
                Wirtschaftlichkeit &amp; Break-even
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#qualitaet-standards">
                Qualität, Standards &amp; Integration
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#dfam">
                Design for Additive Manufacturing (DfAM)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#einführung">
                Einführung in der Praxis: Roadmap &amp; Checkliste
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
        <section id="was-ist-am" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Was ist Additive Fertigung – in einem Satz?
          </h2>
          <p className="leading-relaxed">
            Additive Fertigung (3D-Druck) baut Bauteile schichtweise direkt aus
            3D-Daten auf – im Gegensatz zur subtraktiven Zerspanung oder zum
            Guss. Für den Maschinenbau bedeutet das:{" "}
            <strong>komplexe Geometrien ohne Werkzeuge</strong>, kurze
            Lieferzeiten, Funktionsintegration und Materialeffizienz.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Metall (PBF-LB/M, DED)</h3>
              <p className="text-zinc-700">
                Werkstoffe wie <em>316L, AlSi10Mg, Inconel 718, H13</em> – für
                funktionsfähige Teile, Formen und Hochtemperatur-Anwendungen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Polymere (MJF, SLS, FFF, SLA)</h3>
              <p className="text-zinc-700">
                <em>PA12, PA11, PEEK, ULTEM, Photopolymere</em> – für
                Betriebsmittel, Abdeckungen, Kanäle, Gehäuse.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold">Keramik/Komposit</h3>
              <p className="text-zinc-700">
                Für abrasive, chemisch beständige oder thermisch hoch belastete
                Anwendungen.
              </p>
            </div>
          </div>
        </section>

        <section id="warum-2025" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Warum ist 3D-Druck <span className="whitespace-nowrap">2025</span>{" "}
            im Maschinenbau besonders relevant?
          </h2>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <ul className="grid gap-3 md:grid-cols-2">
              <li>
                <strong>Marktentwicklung:</strong> Der Wohlers Report 2025
                meldet trotz Gegenwind ein globales AM-Wachstum und eine
                Verlagerung hin zu Services, Software und Materialien.
              </li>
              <li>
                <strong>Interoperabilität:</strong> Die Companion Specification{" "}
                <em>OPC UA 40540</em> (Release 1.00 vom 18.12.2024) standardisiert
                Maschinendaten &amp; Job-Modelle – zentral für MES-/ERP-Anbindung.
              </li>
              <li>
                <strong>Standards reifen:</strong> ISO/ASTM-Normen wie{" "}
                <em>52904:2024</em> (Metall-PBF für kritische Anwendungen) und{" "}
                <em>52931:2023</em> (EHS Leitplanken für Metallpulver) erleichtern
                Qualifizierung &amp; Audit.
              </li>
              <li>
                <strong>Use-Cases:</strong> Wärmemanagement (Heat-Exchanger),
                konturnahe Kühlung, Fluid-Manifolds, robotische Greifer und
                <em> digitale Ersatzteillager</em> gewinnen an Fahrt.
              </li>
            </ul>
          </div>

          {/* Bild 1 – volle Breite */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/druck2.jpg" />
                <img
                  loading="lazy"
                  src="/druck2.jpg"
                  alt="Lagerhalle mit 3D-Druck-Zellen"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Moderne AM-Fertigungslinien lassen sich standardisiert an MES/ERP
              anbinden – Grundlage für Qualität, Rückverfolgung und OEE.
            </figcaption>
          </figure>
        </section>

        <section id="einsatz" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Wo lohnt sich Additive Fertigung im Maschinenbau?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                1) Werkzeuge &amp; Formen – konturnahe Kühlung
              </h3>
              <p className="text-zinc-700">
                Mit additiv gefertigten Einsätzen lassen sich Kühlkanäle{" "}
                <em>geometriegerecht</em> nahe der Oberfläche führen. Ergebnis:
                kürzere Zykluszeiten, weniger Verzug, stabilere Qualität – oft
                ohne Werkzeugwechsel. Ideal für Spritzguss, Druckguss,
                Umformwerkzeuge.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                2) Betriebs- &amp; Handhabungsmittel
              </h3>
              <p className="text-zinc-700">
                Leichte, steife Greifer, Prüflehren, Anschläge oder
                Schutzabdeckungen – exakt an Bauteil und Roboter angepasst.
                Bauteilnahe Sensorik und Luft-/Vakuumkanäle lassen sich
                <em> in-Bauteil</em> integrieren.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                3) Fluidik-Manifolds &amp; Wärmemanagement
              </h3>
              <p className="text-zinc-700">
                Strömungsoptimierte Verteiler, Kanäle und kompakte
                Wärmetauscher mit <em>Topology-Optimierung</em> erhöhen
                Effizienz, reduzieren Druckverlust und sparen Einbauraum – z. B.
                in Kühlkreisläufen von Anlagen oder Leistungselektronik.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                4) Ersatzteile on-demand &amp; Legacy-Komponenten
              </h3>
              <p className="text-zinc-700">
                Digitale Lager halten 3D-Modelle und Parameter vor; Teile werden
                <em> bedarfsgerecht</em> gefertigt. Das senkt Kapitalbindung und
                macht obsolet gewordene Komponenten wieder verfügbar – inkl.
                Iterationen zur Funktionsverbesserung.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5 md:col-span-2">
              <h3 className="font-semibold mb-2">
                5) Funktionsbauteile für raue Umgebungen
              </h3>
              <p className="text-zinc-700">
                Mit Metallen (PBF-LB/M, DED) entstehen temperatur-, korrosions-
                und druckbeständige Komponenten – von Gas-/Dampfturbinen-Teilen
                bis zu Pumpenlaufrädern oder Brennerkomponenten.
              </p>
            </div>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Additive Fertigung ist eine horizontale Schlüsseltechnologie im
              Maschinenbau – ihr Nutzen wächst, sobald Daten, Standards und
              Qualitätssicherung zusammenspielen.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — VDMA Arbeitskreis Additive Manufacturing, indirektes Zitat
            </figcaption>
          </figure>
        </section>

        <section id="verfahren" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Verfahren &amp; Materialwahl – welcher 3D-Druck passt zu deinem
            Bauteil?
          </h2>

          <div className="rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold">Verfahren</th>
                  <th className="p-3 text-left font-semibold">
                    Stärken / typische Teile
                  </th>
                  <th className="p-3 text-left font-semibold">Materialien</th>
                  <th className="p-3 text-left font-semibold">Hinweise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">PBF-LB/M (Metall)</td>
                  <td className="p-3">
                    Präzise, dichte Bauteile; komplexe Kanäle; Kühlkanäle,
                    Wärmetauscher, Leichtbau
                  </td>
                  <td className="p-3">316L, AlSi10Mg, H13, Inconel 718</td>
                  <td className="p-3">
                    Aufwändiges Pulver- &amp; Qualitätsmanagement, Support
                    nötig
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">DED (Laser/Arc)</td>
                  <td className="p-3">
                    Große Bauteile, Reparatur/Hybrid-Fertigung, Materialauftrag
                  </td>
                  <td className="p-3">Stähle, Ni-, Ti-, Duplex</td>
                  <td className="p-3">
                    Geringere Oberflächenqualität, Nacharbeit einplanen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">MJF/SLS (Polymer)</td>
                  <td className="p-3">
                    Robuste Betriebsmittel, Gehäuse, Luftkanäle, Kleinserie
                  </td>
                  <td className="p-3">PA12/11, TPE, faserverstärkt</td>
                  <td className="p-3">
                    Gute Maßhaltigkeit, Finishing für Sichtflächen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">FFF/FGF</td>
                  <td className="p-3">
                    Kostengünstig, große Bauteile, Vorrichtungen, CF-Verstärkung
                  </td>
                  <td className="p-3">ABS, PETG, PC, ULTEM</td>
                  <td className="p-3">Anisotropie beachten, Nachbohren</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">SLA/DLP</td>
                  <td className="p-3">
                    Sehr glatte Oberflächen, Dichtungen, transparente Teile
                  </td>
                  <td className="p-3">Photopolymere</td>
                  <td className="p-3">UV-Alterung beachten</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bild 2 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/drucl3.png" />
                <img
                  loading="lazy"
                  src="/drucl3.png"
                  alt="Illustration eines 3D-Druckers"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Verfahren passend zum <em>Use-Case</em> wählen: Geometrie,
              Lastenheft, Toleranzen, Material, Nacharbeit und Zertifizierbarkeit.
            </figcaption>
          </figure>
        </section>

        <section id="wirtschaftlichkeit" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Wirtschaftlichkeit &amp; Break-even: Wann rechnet sich 3D-Druck?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Typische Situationen mit AM-Vorteil
              </h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>hohe Komplexität / Funktionsintegration</li>
                <li>geringe bis mittlere Stückzahlen, viele Varianten</li>
                <li>hohe Werkzeugkosten oder sehr kurze Time-to-Market</li>
                <li>Gewichts-/Strömungs-/Thermik-Optimierung (z. B. HX)</li>
                <li>
                  Ersatzteile mit unregelmäßiger Nachfrage (digitale Lager)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Kosten-Checkliste</h3>
              <ul className="list-disc ml-5 text-zinc-800 space-y-1">
                <li>Material &amp; Bauzeit inkl. Support/Abschöpfen</li>
                <li>Nachbearbeitung (Wärmebehandlung, CNC, Oberflächen)</li>
                <li>Qualifizierung (Prüfkörper, CT, Messung, Doku)</li>
                <li>Skalierung (Mehrfachbelegung, Pulverkreislauf)</li>
                <li>Qualitätsmanagement &amp; Zertifizierung</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">
              3D-Druck vs. Spritzguss – eine Daumenregel
            </h3>
            <p className="text-zinc-700">
              Je höher die Komplexität und je geringer die Stückzahl, desto
              eher ist AM günstiger. Ab größeren Serien kippt die
              Kostenkurve zugunsten des Spritzgusses (Werkzeug amortisiert sich).
              Für viele Polymerteile liegt der Break-even im{" "}
              <em>niedrigen bis mittleren vierstelligen</em> Bereich – abhängig
              von Bauteilgröße, Toleranz und Finish.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold">Kriterium</th>
                  <th className="p-3 text-left font-semibold">
                    3D-Druck (AM)
                  </th>
                  <th className="p-3 text-left font-semibold">Zerspanung</th>
                  <th className="p-3 text-left font-semibold">Guss</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Komplexität</td>
                  <td className="p-3">sehr gut (kanal- &amp; gitterfähig)</td>
                  <td className="p-3">mittel</td>
                  <td className="p-3">gut (Werkzeug nötig)</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Stückzahl</td>
                  <td className="p-3">klein–mittel</td>
                  <td className="p-3">klein–mittel</td>
                  <td className="p-3">groß</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Time-to-Market</td>
                  <td className="p-3">sehr kurz</td>
                  <td className="p-3">mittel</td>
                  <td className="p-3">lang (Werkzeugbau)</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Materialnutzung</td>
                  <td className="p-3">hoch (geringer Verschnitt)</td>
                  <td className="p-3">niedriger (Späne)</td>
                  <td className="p-3">hoch, aber Werkzeugabhängigkeit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="qualitaet-standards" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Qualität, Standards &amp; Integration: Was 2025 zählt
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                ISO/ASTM – die wichtigsten Normen
              </h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>
                  <strong>52904:2024</strong> – Praxis für Metall-PBF bei
                  kritischen Anwendungen (Prozessführung &amp; Kontrolle).
                </li>
                <li>
                  <strong>52931:2023</strong> – EHS-Grundsätze für Metallpulver,
                  Risiko- &amp; Schutzmaßnahmen entlang des Prozesses.
                </li>
                <li>
                  <strong>52927/52928 ff. (2024)</strong> – Prüf- &amp;
                  Materialleitfäden, Powder-Lifecycle-Management.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Datenintegration mit OPC UA 40540
              </h3>
              <p className="text-zinc-700">
                Der Standard definiert Informationsmodelle für AM-Maschinen
                (z. B. Feedstock, Build-Zyklen, Job-Parameter) und erleichtert
                die durchgängige Anbindung an MES/SCADA/ERP – Basis für
                Rückverfolgbarkeit, OEE und automatisierte Qualitätssicherung.
              </p>
            </div>
          </div>

          <aside className="mt-6 rounded-xl border-2 border-dashed border-emerald-300 p-5">
            <h3 className="font-semibold mb-2">Praxis-Tipp</h3>
            <p className="text-zinc-700">
              Nutze zertifizierbare Prozessketten (z. B. AMQ-Programme),
              dokumentiere Parameter &amp; Prüfergebnisse digital, und
              harmonisiere Stammdaten (Material, Lot, Job-IDs) mit OPC UA.
            </p>
          </aside>
        </section>

        <section id="dfam" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Design for Additive Manufacturing (DfAM): Wie holst du das Maximum
            raus?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Leitlinien für bessere Bauteile
              </h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Lastpfade &amp; Topologie optimieren (Gewicht, Steifigkeit)</li>
                <li>Stützstrukturen minimieren (Orientierung, Feature-Maße)</li>
                <li>Innenkanäle glätten, Übergänge verrunden</li>
                <li>Material &amp; Wärmebehandlung früh festlegen</li>
                <li>Prüfkörper &amp; Messpunkte in das Design integrieren</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Typische DfAM-Fehler vermeiden
              </h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Konventionelle Wandstärken ungeprüft übernehmen</li>
                <li>Anspruchsvolle Kanäle ohne Reinigungsstrategie</li>
                <li>Bauteile ohne Zugänglichkeit für Nacharbeit</li>
                <li>Thermische Verzüge in der Bauorientierung ignorieren</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="einführung" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Einführung in der Praxis: Roadmap &amp; Checkliste
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Roadmap in 6 Schritten</h3>
              <ol className="list-decimal ml-5 text-zinc-700 space-y-1">
                <li>Use-Case-Portfolio aufbauen (Nutzen vs. Aufwand)</li>
                <li>DfAM-Vorstudien, Kosten-/Risikoanalyse</li>
                <li>Prozesskette wählen (Maschine, Material, QA)</li>
                <li>Pilot &amp; Qualifizierung (Proben, CT, Doku)</li>
                <li>Skalierung &amp; Integration (OPC UA, MES, Traceability)</li>
                <li>Serienbetrieb &amp; KVP (KPIs, Lessons Learned)</li>
              </ol>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Checkliste</h3>
              <ul className="list-disc ml-5 text-zinc-800 space-y-1">
                <li>Normenlage geklärt (ISO/ASTM, Kundenvorgaben)</li>
                <li>Material-/Pulverkreislauf &amp; EHS definiert</li>
                <li>Prüf-/Freigabestrategie dokumentiert</li>
                <li>Datenflüsse, IDs &amp; Rückverfolgung festgelegt</li>
                <li>Lieferanten/Audits &amp; Zertifikate vorhanden</li>
              </ul>
            </div>
          </div>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/design-for-am-grundlagen"
                >
                  Design for AM: 12 Praxisregeln
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/opc-ua-40540-additive-manufacturing"
                >
                  OPC UA 40540: So integrierst du AM ins MES
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/konturnahe-kuehlung-spritzguss"
                >
                  Konturnahe Kühlung: Fallstudien im Werkzeugbau
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/ersatzteile-on-demand-digitale-lager"
                >
                  Digitale Ersatzteillager: Fahrplan von 0 auf 1
                </a>
              </li>
            </ul>
          </aside>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Ab welcher Stückzahl ist 3D-Druck günstiger als Spritzguss?
              </h3>
              <p>
                Das hängt stark von Geometrie, Toleranz und Finish ab. Für viele
                Polymerteile liegt der Break-even im niedrigen bis mittleren
                vierstelligen Bereich; bei Metallteilen ist AM oft für kleine
                Serien und hochkomplexe Geometrien im Vorteil.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Normen sind für Metall-PBF relevant?
              </h3>
              <p>
                Zentral sind ISO/ASTM 52904:2024 (Prozessführung für kritische
                Anwendungen) und ISO/ASTM 52931:2023 (EHS-Grundsätze für
                Metallpulver). Ergänzend helfen ISO/ASTM
