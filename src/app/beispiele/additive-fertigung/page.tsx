// src/app/blog/additive-fertigung-maschinenbau-2025/page.tsx
import type { Metadata } from "next";
 export default function Page() {
   const updated = "2025-08-28";
   const calendlyUrl =
     "https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung";

export const metadata: Metadata = {
  title:
    "Additive Fertigung (3D-Druck) im Maschinenbau 2025: Anwendungen, Beispiele & ROI",
  description:
    "Wie du 3D-Druck 2025 im Maschinenbau sinnvoll einsetzt: Verfahren, Materialien, Qualität, Kosten, ROI, Best Practices und Praxisbeispiele – kompakt erklärt.",
  alternates: {
    canonical:
      "https://muster-gmbh.de/blog/additive-fertigung-maschinenbau-2025",
  },
  openGraph: {
    title:
      "Additive Fertigung (3D-Druck) im Maschinenbau 2025: Anwendungen, Beispiele & ROI",
    description:
      "Der große Praxis-Guide: Wo 3D-Druck im Maschinenbau heute wirklich wirkt – von Prototypen bis Serie, inklusive Qualitäts- und Kostencheck.",
    type: "article",
    url: "https://muster-gmbh.de/blog/additive-fertigung-maschinenbau-2025",
    images: [
      {
        url: "/druck1.png",
        width: 1600,
        height: 600,
        alt: "3D-Drucker im Einsatz in der Fertigungshalle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Additive Fertigung (3D-Druck) im Maschinenbau 2025: Anwendungen, Beispiele & ROI",
    description:
      "Wo 3D-Druck im Maschinenbau heute wirklich wirkt – Verfahren, Materialien, Qualität, Kosten, ROI.",
    images: ["/druck1.png"],
  },
  robots: { index: true, follow: true },
};

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Berater für digitale Fertigung & Industrial 3D-Druck",
  focus:
    "Additive Fertigung, Ersatzteil-Strategien, DfAM (Design for Additive Manufacturing)",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Head of Production Engineering",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
};

export default function Page() {
  const updated = "2025-08-28";

  return (
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
          Additive Fertigung (3D-Druck) im Maschinenbau 2025: Einsatzmöglichkeiten, Qualität &amp; ROI
        </h1>

        <p className="mt-3 text-lg text-zinc-700">
          Dieser Praxis-Guide zeigt dir, wo 3D-Druck im Maschinenbau 2025 echten
          Nutzen stiftet: von schnellen Prototypen über funktionsfähige
          Betriebsmittel bis hin zu Serien- und Ersatzteilen. Du lernst die
          wichtigsten Verfahren, Qualitätsanforderungen, Materialoptionen und
          Kostenhebel kennen – damit du fundiert entscheiden kannst, was sich
          lohnt und was (noch) nicht.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime={updated}>
            28.08.2025
          </time>
          {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/druck1.png" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/druck1.png"
                alt="3D-Drucker (Hero) in einer Produktionsumgebung"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">3D Drucker</figcaption>
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Additive Fertigung rechnet sich im Maschinenbau besonders bei
            komplexen, leichten und individualisierten Bauteilen, kleinen
            Serien, Betriebsmitteln und digital verwalteten Ersatzteilen.
          </li>
          <li>
            Für Metall dominieren Pulverbettschmelzen (PBF) für hochfeste,
            präzise Teile und Binder Jetting für höhere Stückzahlen; Polymere
            liefern schnelle Funktionsmuster und Hilfsmittel.
          </li>
          <li>
            Qualitätssicherung folgt heute verbindlichen Normen wie ISO{" "}
            52920 und 52901 – wichtig für reproduzierbare Prozesse,
            dokumentierte Prüfpläne und auditable Lieferketten. 
          </li>
          <li>
            Der AM-Markt wächst weiter, allerdings differenziert nach Segmenten;
            2024 lag das globale Wachstum laut Wohlers bei 9,1&nbsp;% auf
            21,9&nbsp;Mrd.&nbsp;USD. 
          </li>
          <li>
            Digitales Ersatzteillager senkt Lagerkosten und Lieferzeiten – 3D-Druck
            ermöglicht On-Demand-Produktion direkt am Einsatzort. 
          </li>
          <li>
            Best Practice: starte mit wirtschaftlich klaren Anwendungsfällen,
            denke DfAM, qualifiziere Prozesse, skaliere mit Standards und
            verknüpfe deine Teile mit einer digitalen Stückliste.
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
              Was ist additive Fertigung im Maschinenbau?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#anwendungsfelder">
              Anwendungsfelder 2025: Wo 3D-Druck heute wirkt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#verfahren">
              Verfahren &amp; Materialwahl: PBF, Binder Jetting, FFF &amp; Co.
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#qualitaet">
              Qualität, Normen &amp; Zertifizierung
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#wirtschaftlichkeit">
              Kosten, ROI &amp; Business-Case
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#vorgehen">
              Schritt-für-Schritt: So startest du mit AM
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
      <section id="was-ist-am">
        <h2 className="text-2xl font-bold mb-3">
          Was ist additive Fertigung im Maschinenbau?
        </h2>
        <p className="leading-relaxed">
          Additive Fertigung (Additive Manufacturing, kurz AM) beschreibt
          Fertigungsverfahren, bei denen Bauteile Schicht für Schicht direkt aus
          digitalen 3D-Daten aufgebaut werden. Anders als bei zerspanenden
          Verfahren wird Material nur dort platziert, wo es statisch oder
          funktional benötigt wird. Das eröffnet Leichtbau, Funktionsintegration,
          schnelle Iterationen und flexible Lieferketten – wichtig für
          Prototyping, Betriebsmittel, Kleinserien und Ersatzteile.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <aside className="md:col-span-1 rounded-xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Kurzvorteile</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Komplexität ohne Mehrkosten</li>
              <li>Gewichtsreduktion durch Topologieoptimierung</li>
              <li>Weniger Bauteile durch Funktionsintegration</li>
              <li>Kurze Lieferzeiten, On-Demand-Fertigung</li>
            </ul>
          </aside>
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-2">Typische Einsatzmotive</h3>
            <p className="text-sm">
              Designfreiheit nutzen, Teile konsolidieren, Kosten in der
              Montage senken, Time-to-Market verkürzen und Lieferkettenrisiken
              reduzieren. In regulierten Branchen kommen zusätzlich
              Dokumentations- und Qualifizierungsanforderungen hinzu.
            </p>
          </div>
        </div>
      </section>

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
              alt="Lagerhalle mit 3D-Druck-Arbeitsplätzen"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Lagerhalle: Additive Fertigung skaliert von Prototyp bis Kleinserie.
        </figcaption>
      </figure>

      <section id="anwendungsfelder" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Anwendungsfelder 2025: Wo 3D-Druck heute wirkt
        </h2>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold mb-2">
            1) Prototypen &amp; Funktionsmuster
          </h3>
          <p className="leading-relaxed">
            Schnelle Iterationen, haptische Tests, frühe Risiko-Entschärfung –
            mit Polymer-Verfahren wie FFF und Photopolymerisation sind
            passgenaue Muster in Stunden möglich. Für Funktionsmuster kommen
            faserverstärkte Polymere oder Metallverfahren zum Einsatz.
          </p>

          <h3 className="font-semibold mt-6 mb-2">2) Betriebsmittel &amp; Vorrichtungen</h3>
          <p className="leading-relaxed">
            Spann- und Prüfmittel, Greifer, Düsen, individuelle Aufnahmen:
            gedruckte Betriebsmittel senken Fertigungszeiten und verbessern die
            Ergonomie. Durch Leichtbau sind Greifer schneller, Roboter tragen
            weniger Masse.
          </p>

          <h3 className="font-semibold mt-6 mb-2">3) Ersatzteile &amp; digitale Lager</h3>
          <p className="leading-relaxed">
            Statt Teile jahrelang physisch zu lagern, werden geprüfte Datensätze
            in einem digitalen Lager verwaltet und bei Bedarf produziert. Das
            reduziert Lagerkosten und verkürzt die Lieferzeit erheblich –
            besonders für seltene Varianten, Altgeräte oder abgelegene Standorte. 
          </p>

          <h3 className="font-semibold mt-6 mb-2">4) Seriennahe Teile &amp; Kleinserien</h3>
          <p className="leading-relaxed">
            Wenn Bauteile komplex, leicht und individualisierbar sein sollen,
            wird 3D-Druck wettbewerbsfähig. Metall-Pulverbettverfahren liefern
            hervorragende Genauigkeit und Materialeigenschaften. Binder Jetting
            adressiert höhere Stückzahlen mit nachgelagerter Sinterung.
          </p>

          <h3 className="font-semibold mt-6 mb-2">5) Reparatur &amp; Instandsetzung</h3>
          <p className="leading-relaxed">
            Additive Reparaturverfahren verkürzen Turnaround-Zeiten und sparen
            Rohmaterial sowie Werkzeugkosten – etwa bei Triebwerkskomponenten,
            wo neue AM-Reparaturpfade signifikante Zeitgewinne schaffen. 
          </p>

          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm">
              Branchenbeispiele: Luft- und Raumfahrt nutzt AM für leichte,
              hochkomplexe Geometrien wie Einspritzköpfe und Pumpen – ein
              Treiber der Serienreife in Metall. 
            </p>
          </div>
        </div>
      </section>

      <section id="verfahren" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Verfahren &amp; Materialwahl: PBF, Binder Jetting, FFF &amp; Co.
        </h2>

        <p className="leading-relaxed">
          Die Wahl des Verfahrens bestimmt Genauigkeit, Materialeigenschaften,
          Stückkosten und Nacharbeit. Im Maschinenbau dominieren drei Pfade:
          Metall-Pulverbettschmelzen (Laser- oder Elektronenstrahl), Binder
          Jetting mit anschließender Sinterung sowie Polymer-Verfahren wie FFF
          und Photopolymerisation.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Kriterium</th>
                <th className="p-3 text-left font-semibold">PBF (Metall)</th>
                <th className="p-3 text-left font-semibold">Binder Jetting (Metall)</th>
                <th className="p-3 text-left font-semibold">FFF (Polymer)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Eigenschaften</td>
                <td className="p-3">Sehr hohe Festigkeit, Dichte, Präzision</td>
                <td className="p-3">Gut bis sehr gut nach Sinterung</td>
                <td className="p-3">Ausreichend bis gut mit faserverstärkten Filamenten</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Bauraum &amp; Detail</td>
                <td className="p-3">Feine Details, dünne Wände, komplexe Kanäle</td>
                <td className="p-3">Gute Details; Schrumpfkompensation beachten</td>
                <td className="p-3">Begrenzt durch Düsendurchmesser und Layerhöhe</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Stückkosten</td>
                <td className="p-3">Höher, besonders bei geringen Stückzahlen</td>
                <td className="p-3">Skalierbar bei höheren Stückzahlen</td>
                <td className="p-3">Niedrig; ideal für Betriebsmittel</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Nachbearbeitung</td>
                <td className="p-3">Entpulvern, Stützstrukturen, Wärmebehandlung</td>
                <td className="p-3">Entpulvern, Entbinder, Sintern</td>
                <td className="p-3">Supportentfernung, ggf. Fräsen an Passflächen</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Typische Materialien</td>
                <td className="p-3">Alu, Edelstahl, Werkzeugstahl, Titan, Inconel</td>
                <td className="p-3">Edelstahl, Werkzeugstahl, Inconel, Kupfer</td>
                <td className="p-3">PLA, PETG, PA, CF-Verbund, TPU</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-zinc-600 mt-2">
          Einordnung zu PBF und Binder Jetting nach aktuellen Branchenvergleichen. 
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Der größte Hebel liegt nicht im Drucken selbst, sondern im
            Bauteildesign und in stabilen Prozessen. Wer DfAM konsequent denkt
            und die Prozesskette qualifiziert, realisiert die Einsparungen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Aus der Praxis zusammengefasst, indirektes Zitat
          </figcaption>
        </figure>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Materialwahl – so denkst du pragmatisch</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Leichtbau&nbsp;&amp;&nbsp;Korrosionsschutz: Aluminium, Titan</li>
              <li>Verschleiß&nbsp;&amp;&nbsp;Härte: Werkzeugstähle, Inconel</li>
              <li>Wärmeleitung&nbsp;&amp;&nbsp;Elektro: Kupferlegierungen</li>
              <li>Polymere Betriebsmittel: PA, PETG, CF-Verbund, TPU</li>
            </ul>
          </div>
          <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h4 className="font-semibold mb-1">Praxis-Hinweis</h4>
            <p className="text-sm">
              Plane Nacharbeit von Anfang an ein: Fräs-Referenzen, Toleranzen,
              Wärmebehandlung, HIP, Oberflächenrauheit, Prüfkonzept.
            </p>
          </aside>
        </div>
      </section>

      {/* Bild 2 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/halle.png" />
            <img
              loading="lazy"
              src="/halle.png"
              alt="Illustration eines 3D-Druckers"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Eine Halle mit industriellen 3D-Druckern.
        </figcaption>
      </figure>

      <section id="qualitaet" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Qualität, Normen &amp; Zertifizierung
        </h2>
        <p className="leading-relaxed">
          Damit additive Teile reproduzierbar und audit-sicher sind, setzen sich
          Normen und Zertifizierungsprogramme durch. Relevante Rahmenwerke sind
          u.&nbsp;a. ISO/ASTM&nbsp;52920 (Qualifikations-Prinzipien für Prozesse
          und Produktionsstätten) sowie ISO/ASTM&nbsp;52901 (Qualitätsanforderungen
          für Serienfertigung). Ergänzend entsteht mit AM-spezifischen
          Hersteller-Zertifizierungen ein transparenter Nachweis der
          Fertigungsreife. 
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Checkliste QS-Bausteine</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Pflichtenheft &amp; Zeichnung mit AM-spezifischen Toleranzen</li>
              <li>Material-Batch, Pulvermanagement, Rückverfolgbarkeit</li>
              <li>Bauteilorientierung, Stützstrukturen, Scan-Strategie</li>
              <li>Wärmebehandlung, HIP, Oberflächenfinish</li>
              <li>Prüfplan (z.&nbsp;B. CT, Zug, Härte, Dichte, Poro-Analyse)</li>
              <li>Prozessfähigkeitsnachweis, Erstmuster, Freigabe</li>
            </ul>
          </div>
          <aside className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-2">Dokupaket, das Audits liebt</h3>
            <p className="text-sm">
              Prozess-FMEA, Abweichungsmanagement, Änderungslenkung,
              Kalibrier-Nachweise, Maschinen-Auslastung, Qualifikationsmatrix.
            </p>
          </aside>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm">
            Markt-Update 2025: Der AM-Markt wächst, jedoch uneinheitlich; Service,
            Software und Materialien legen zu, während Systemhersteller
            schwanken. Für dich heißt das&colon; prüfe Partnerschaften und
            Lieferfähigkeit. 
          </p>
        </div>
      </section>

      <section id="wirtschaftlichkeit" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Kosten, ROI &amp; Business-Case</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Die sechs Kostenhebel</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Design für AM (Bauteilkonsolidierung, Leichtbau)</li>
              <li>Bauteilorientierung &amp; Nesting (Maschinenzeit)</li>
              <li>Materialwahl &amp; Recyclingquote (Pulverkreislauf)</li>
              <li>Nachbearbeitung optimieren (Finish nur wo nötig)</li>
              <li>Qualitätsprüfungen zielgerichtet bündeln</li>
              <li>Skalierung mit passenden Verfahren (z.&nbsp;B. Binder Jetting)</li>
            </ol>
            <p className="mt-3 text-sm text-zinc-700">
              Tipp: Rechne nicht nur Teilekosten, sondern Systemnutzen –
              schnellere Markteinführung, geringere Montagekosten, weniger
              Lagerbindung und bessere Lieferfähigkeit.
            </p>
          </div>
          <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Daumenregel zur Entscheidung</h3>
            <p className="text-sm">
              AM lohnt sich, wenn deine Konstruktion deutlich leichter,
              funktionsintegriert oder stark varianzreich wird – oder wenn du
              lange Lieferzeiten bzw. Werkzeugkosten vermeidest.
            </p>
          </aside>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Business-Case</th>
                <th className="p-3 text-left font-semibold">Wirtschaftlicher Effekt</th>
                <th className="p-3 text-left font-semibold">Messgröße</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Ersatzteil On-Demand</td>
                <td className="p-3">Lagerkosten runter, Lieferzeit runter</td>
                <td className="p-3">Service-Level, Kapitalbindung</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Betriebsmittel Leichtbau</td>
                <td className="p-3">Taktzeit runter, Ergonomie rauf</td>
                <td className="p-3">Taktzeit, Ausschussrate</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Teilekonsolidierung</td>
                <td className="p-3">Montagekosten runter, Qualität rauf</td>
                <td className="p-3">Anzahl Teile, Montagezeit</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Seriennahe Kleinserie</td>
                <td className="p-3">Werkzeugkosten vermeiden</td>
                <td className="p-3">Break-Even vs. Spritzguss/Fräsen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="vorgehen" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Schritt-für-Schritt: So startest du mit AM
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">1) Kandidatenliste identifizieren</h3>
              <p className="text-sm">
                Suche nach Bauteilen mit hoher Komplexität, vielen
                Einzelteilen, häufiger Änderung, langen Lieferzeiten oder hoher
                Variantenvielfalt.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">2) DfAM anwenden</h3>
              <p className="text-sm">
                Bauteile neu denken&colon; Kanäle integrieren, Wandstärken
                variieren, Gitterstrukturen, Bauteilkonsolidierung – dabei
                Toleranzen und Nachbearbeitung mitplanen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">3) Verfahren auswählen</h3>
              <p className="text-sm">
                Metall&colon; PBF für hohe Präzision, Binder Jetting für Volumen.
                Polymer&colon; FFF für Betriebsmittel, Harzverfahren für feine
                Oberflächen.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">4) Prozess qualifizieren</h3>
              <p className="text-sm">
                Parameter festlegen, Prüfkonzept definieren, Erstbemusterung,
                Rückverfolgbarkeit, Dokumentation nach ISO/ASTM etablieren.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">5) Skalieren &amp; digitalisieren</h3>
              <p className="text-sm">
                Digitale Stückliste und digitales Ersatzteillager aufbauen,
                Lieferketten absichern, Make-or-Buy entscheiden.
              </p>
            </div>
          </div>

          <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Keyword-Karte für deinen Content</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>
                Primär&colon; additive Fertigung, 3D-Druck, Maschinenbau,
                Metall-3D-Druck
              </li>
              <li>
                Sekundär&colon; Pulverbettschmelzen, Binder Jetting, DfAM,
                Serienfertigung, digitales Ersatzteillager, Qualitätssicherung
              </li>
              <li>
                Long-Tail&colon; 3D-Druck Ersatzteile Maschinenbau, Binder
                Jetting vs. PBF, DfAM Richtlinien Maschinenbau
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wann ist Metall-3D-Druck wirtschaftlich sinnvoll?
            </h3>
            <p>
              Wenn du Werkzeugkosten vermeidest, komplexe Geometrien brauchst,
              Bauteile konsolidierst oder Lieferzeiten stark reduzieren musst.
              Ab ca. 10–100 Stück lohnt der Vergleich PBF vs. Binder Jetting;
              Polymer-Druck überzeugt bei Betriebsmitteln früh.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Welche Normen sind für AM-Qualität entscheidend?
            </h3>
            <p>
              Insbesondere ISO/ASTM&nbsp;52920 (Qualifikations-Prinzipien) und
              ISO/ASTM&nbsp;52901 (Qualitätsanforderungen für Serienfertigung);
              dazu kommen branchenspezifische Vorgaben und AM-spezifische
              Hersteller-Zertifizierungen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Was ist ein digitales Ersatzteillager?
            </h3>
            <p>
              Ein datenbasiertes Bauteilarchiv, das geprüfte 3D-Modelle,
              Prozessparameter und Freigaben verwaltet. Teile werden erst bei
              Bedarf produziert – Lagerkosten und Lieferzeiten sinken.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Welche Materialien eignen sich für Maschinenbau-Teile?
            </h3>
            <p>
              Aluminium und Titan für Leichtbau, Edelstahl und Werkzeugstähle
              für Robustheit, Nickel-Superlegierungen für Temperaturbeständigkeit,
              Kupfer für Wärmeleitung; bei Polymeren etwa PA, PETG, CF-Verbund
              und TPU.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Wie beginne ich ohne große Investition?
            </h3>
            <p>
              Mit einem Pilot-Use-Case und externem Dienstleister starten,
              DfAM-Know-how aufbauen, Teile qualifizieren, Business-Case testen
              und erst bei stabiler Auslastung in eigene Systeme investieren.
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
                  name: "Wann ist Metall-3D-Druck wirtschaftlich sinnvoll?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Wenn Werkzeugkosten vermieden, komplexe Geometrien benötigt, Bauteile konsolidiert oder Lieferzeiten stark reduziert werden sollen. Ab ca. 10–100 Stück lohnt der Vergleich PBF vs. Binder Jetting; Polymer-Druck überzeugt bei Betriebsmitteln früh.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Normen sind für AM-Qualität entscheidend?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Insbesondere ISO/ASTM 52920 (Qualifikations-Prinzipien) und ISO/ASTM 52901 (Qualitätsanforderungen für Serienfertigung); dazu branchenspezifische Vorgaben und AM-spezifische Hersteller-Zertifizierungen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was ist ein digitales Ersatzteillager?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ein datenbasiertes Bauteilarchiv mit geprüften 3D-Modellen, Prozessparametern und Freigaben; Teile werden On-Demand produziert, Lagerkosten und Lieferzeiten sinken.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Materialien eignen sich für Maschinenbau-Teile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Aluminium, Titan, Edel- und Werkzeugstähle, Nickel-Superlegierungen, Kupfer sowie Polymere wie PA, PETG, CF-Verbund und TPU – je nach Anforderung an Gewicht, Festigkeit, Temperatur und Leitfähigkeit.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie beginne ich ohne große Investition?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Mit Pilot-Use-Case und externem Dienstleister starten, DfAM-Know-how aufbauen, Teile qualifizieren, Business-Case testen und erst bei stabiler Auslastung in eigene Systeme investieren.",
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
            Lohnt sich 3D-Druck im Maschinenbau für deine Teile und Prozesse?
          </strong>{" "}
          Ja – wenn du gezielt auf komplexe, leichte, variantenreiche Bauteile
          setzt, Qualität nach Normen sicherst und ein digitales Ersatzteillager
          aufbaust. Starte fokussiert, denke DfAM, qualifiziere Prozesse und
          skaliere dort, wo es messbar Mehrwert bringt.
        </p>
      </section>

     {/* CTA */}
-      <section aria-label="Kontakt" className="mt-14">
-        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
-          <h2 className="text-xl font-bold mb-2">
-            Willst du prüfen, welche Teile sich bei dir für 3D-Druck eignen?
-          </h2>
-          <p className="text-zinc-700 mb-4">
-            Die Muster GmbH analysiert innerhalb von zwei Wochen deine
-            Bauteile, erstellt eine AM-Kandidatenliste mit ROI-Abschätzung und
-            einen konkreten Startplan.
-          </p>
-
-          <form
-            className="mx-auto grid max-w-xl gap-3 text-left"
-            role="group"
-            aria-describedby="cta-note"
-          >
-            <label className="text-sm">
-              Name
-              <input
-                type="text"
-                name="name"
-                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
-                placeholder="Max Mustermann"
-                required
-              />
-            </label>
-            <label className="text-sm">
-              Telefon
-              <input
-                type="tel"
-                name="phone"
-                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
-                placeholder="+49 123456789"
-              />
-            </label>
-            <label className="text-sm">
-              E-Mail
-              <input
-                type="email"
-                name="email"
-                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
-                placeholder="max@mustermann.de"
-                required
-              />
-            </label>
-
-            <a
-              href="#cta-pop"
-              className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
-            >
-              Unverbindlich anfragen
-            </a>
-
-            <p id="cta-note" className="text-xs text-zinc-500">
-              Mit Absenden des Formulars akzeptierst du unsere
-              Datenschutzbedingungen.
-            </p>
-          </form>
-        </div>
-
-        {/* Pop-up (Modal) */}
-        <div
-          id="cta-pop"
-          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
-        >
-          <a
-            href="#"
-            className="absolute inset-0 bg-black/50"
-            aria-label="Overlay schließen"
-          />
-
-          <div
-            role="dialog"
-            aria-modal="true"
-            aria-labelledby="cta-pop-title"
-            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
-          >
-            <a
-              href="#"
-              aria-label="Fenster schließen"
-              className="absolute right-3 top-3 rounded-md border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
-            >
-              ✕
-            </a>
-
-            <h3 id="cta-pop-title" className="mb-2 text-lg font-semibold">
-              Hinweis
-            </h3>
-            <p className="text-zinc-800">
-              In diesem Beispiel-Blogartikel funktionieren die Links nicht.
-              Möchtest du solch ein Projekt auch für dein Angebot umsetzen?{" "}
-              <a
-                href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
-                target="_blank"
-                rel="noopener noreferrer"
-                className="font-medium text-emerald-700 underline"
-              >
-                Klicke hier
-              </a>{" "}
-              und lass uns sprechen.
-            </p>
-          </div>
-        </div>
-      </section>
+      {/* CTA */}
+      <section aria-label="Kontakt" className="mt-14">
+        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
+          <h2 className="text-xl font-bold mb-2">
+            Willst du prüfen, welche Teile sich bei dir für 3D-Druck eignen?
+          </h2>
+          <p className="text-zinc-700 mb-4">
+            Die Muster GmbH analysiert innerhalb von zwei Wochen deine
+            Bauteile, erstellt eine AM-Kandidatenliste mit ROI-Abschätzung und
+            einen konkreten Startplan.
+          </p>
+
+          {/* Nur Button -> öffnet Modal mit Calendly */}
+          <a
+            href="#cta-pop"
+            className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
+          >
+            Kostenloses Erstgespräch buchen
+          </a>
+          <p id="cta-note" className="mt-2 text-xs text-zinc-500">
+            Der Kalender öffnet sich als Pop-up. Keine Eingaben erforderlich.
+          </p>
+        </div>
+
+        {/* Pop-up (Modal) mit eingebettetem Calendly */}
+        <div
+          id="cta-pop"
+          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
+        >
+          <a
+            href="#"
+            className="absolute inset-0 bg-black/50"
+            aria-label="Overlay schließen"
+          />
+
+          <div
+            role="dialog"
+            aria-modal="true"
+            aria-labelledby="cta-pop-title"
+            className="relative w-full max-w-3xl rounded-xl bg-white p-0 shadow-xl"
+          >
+            <a
+              href="#"
+              aria-label="Fenster schließen"
+              className="absolute right-3 top-3 z-10 rounded-md border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
+            >
+              ✕
+            </a>
+            <h3 id="cta-pop-title" className="sr-only">Terminbuchung</h3>
+
+            {/* Calendly Inline Widget */}
+            <div
+              className="calendly-inline-widget"
+              data-url={`${calendlyUrl}?hide_gdpr_banner=1`}
+              style={{ minWidth: "320px", height: "720px" }}
+            />
+          </div>
+        </div>
+
+        {/* Calendly Script (lädt das Widget) */}
+        <Script
+          src="https://assets.calendly.com/assets/external/widget.js"
+          strategy="afterInteractive"
+        />
+      </section>

    {/* Weiterführende Artikel */}
<aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
  <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
  <ul className="list-disc ml-5 text-sm space-y-2">
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        DfAM Grundlagen; So konstruierst du sinnvoll für 3D-Druck
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        Qualität in der additiven Fertigung&colon; Prüfplan bis Erstmuster
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        Digitales Ersatzteillager&colon; Von CAD bis On-Demand-Teile
      </a>
    </li>
    <li>
      <a
        href="#cta-pop"
        aria-controls="cta-pop"
        className={`font-medium underline ${accent}`}
      >
        PBF vs. Binder Jetting&colon; Das richtige Verfahren wählen
      </a>
    </li>
  </ul>
</aside>


      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Additiver Fertigung im
          Maschinenbau
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
                <td className="p-3 font-medium text-zinc-900">DfAM</td>
                <td className="p-3 text-zinc-700">
                  Design for Additive Manufacturing&colon; Konstruktionsprinzipien,
                  die die Stärken additiver Verfahren ausnutzen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">PBF</td>
                <td className="p-3 text-zinc-700">
                  Powder Bed Fusion&colon; Metall-Pulver wird schichtweise mittels
                  Laser oder Elektronenstrahl verschmolzen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Binder Jetting</td>
                <td className="p-3 text-zinc-700">
                  Tintenstrahl-Bindeprozess auf Metallpulver mit anschließender
                  Entbinderung und Sinterung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">HIP</td>
                <td className="p-3 text-zinc-700">
                  Heißisostatisches Pressen&colon; Verdichtung zur Reduktion von
                  Porosität und zur Eigenschaftsverbesserung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Digitales Lager</td>
                <td className="p-3 text-zinc-700">
                  Verwaltung geprüfter Teiledatensätze statt physischer Lagerung
                  mit On-Demand-Produktion.
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
            <div className="text-sm text-zinc-700">{author.role} – {author.focus}</div>
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <p className="text-sm text-zinc-700">
            Überprüft von&colon; <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
            Wohlers Report 2025 – Pressemitteilung ASTM: Wachstum 9,1&nbsp;% auf
            21,9&nbsp;Mrd.&nbsp;USD.{" "}
            <a
              href="https://www.astm.org/news/press-releases/wohlers-report-2025"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.astm.org/news/press-releases/wohlers-report-2025
            </a>
          </li>
          <li>
            AMPOWER Report 2025 – Marktanalyse und Ausblick.{" "}
            <a
              href="https://additive-manufacturing-report.com/report-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://additive-manufacturing-report.com/report-2025/
            </a>
          </li>
          <li>
            ISO/ASTM 52920&colon;2023 – Qualifikations-Prinzipien; ISO/ASTM 52901 –
            Qualitätsanforderungen Serienfertigung.{" "}
            <a
              href="https://www.iso.org/obp/ui/en/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.iso.org/obp/ui/en/
            </a>
          </li>
          <li>
            Digitales Ersatzteillager – Praxisbeitrag 2025.{" "}
            <a
              href="https://bigrep.com/posts/digital-inventory/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://bigrep.com/posts/digital-inventory/
            </a>
          </li>
          <li>
            Reuters – Additive Reparatur bei Pratt &amp; Whitney reduziert
            Reparaturzeiten.{" "}
            <a
              href="https://www.reuters.com/business/aerospace-defense/rtxs-pratt-whitney-develops-additive-manufacturing-reduce-engine-repair-time-2025-04-08/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.reuters.com/...
            </a>
          </li>
          <li>
            Binder Jetting vs. PBF – aktuelle Vergleiche 2024/2025.{" "}
            <a
              href="https://ebeammachine.com/binder-jetting-vs-powder-bed-fusion-in-additive-manufacturing-explained/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://ebeammachine.com/...
            </a>{" "}
            &nbsp;|&nbsp;
            <a
              href="https://facfox.com/docs/kb/comparing-binder-jet-and-powder-bed-fusion-metal-3d-printing"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://facfox.com/docs/...
            </a>
          </li>
        </ul>
      </section>

      {/* Structured Data – Article & Company */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Additive Fertigung (3D-Druck) im Maschinenbau 2025: Anwendungen, Beispiele & ROI",
            description:
              "Praxis-Guide für den Einsatz von 3D-Druck im Maschinenbau 2025 – Verfahren, Materialien, Qualität, Kosten und ROI.",
            inLanguage: "de",
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            dateModified: updated,
            image: {
              "@type": "ImageObject",
              url: "/druck1.png",
              width: 1600,
              height: 600,
            },
            publisher: {
              "@type": "Organization",
              name: company.name,
              url: "https://muster-gmbh.de",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
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
            url: "https://muster-gmbh.de",
            email: company.email,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address,
              addressCountry: "DE",
            },
          }),
        }}
      />
    </article>
  );
}
