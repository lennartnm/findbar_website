// src/app/blog/automatisierung-moebelproduktion-montageanlagen/page.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Automatisierung in der Möbelproduktion: Ab wann lohnen sich Montageanlagen wirklich?",
  description:
    "Automatische Montage von Scharnieren und Beschlägen, geringere Personalkosten, stabile Qualität: So finden Sie die Schwelle, ab der sich Anlagen rechnen.",
  alternates: {
    canonical:
      "https://www.beispiel.de/blog/automatisierung-moebelproduktion-montageanlagen",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Automatisierung in der Möbelproduktion: Ab wann lohnen sich Montageanlagen wirklich?",
    description:
      "Praxisleitfaden für die automatische Montage von Scharnieren & Beschlägen: ROI, Qualität, Beispiele, Entscheidungshilfe.",
    type: "article",
    url:
      "https://www.beispiel.de/blog/automatisierung-moebelproduktion-montageanlagen",
    images: [
      {
        url:
          "https://www.beispiel.de/og/automatisierung-moebelproduktion-montageanlagen.jpg",
        width: 1200,
        height: 630,
        alt:
          "Montagezelle mit automatischer Scharnier- und Beschlagmontage in einer Möbelproduktion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automatisierung in der Möbelproduktion: Ab wann lohnen sich Montageanlagen wirklich?",
    description:
      "Automatische Montage, Personalkosten senken, Qualität stabilisieren – so berechnen Sie den ROI.",
    images: [
      "https://www.beispiel.de/og/automatisierung-moebelproduktion-montageanlagen.jpg",
    ],
  },
};

export default function Page() {
  // CI: Primär #00BFB2, Hover/Focus Sekundär #0069B3
  const accent = "text-[#00BFB2] hover:text-[#0069B3]";
  const author = {
    name: "Max Weber",
    role: "Industrial Engineer Holz- & Möbelindustrie",
    image: "/platzhalter_autor.jpg",
    linkedin: "https://www.linkedin.com/in/platzhalter/",
  };

  return (
    <article
      className={`${montserrat.className} 
        prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
        mt-12 md:mt-16 mb-0
        relative after:block after:h-12 md:after:h-16 after:content-['']
      `}
    >
{/* Mini-Band ganz oben: zeigt "Vorlage" wiederholt auf grauem Hintergrund */}
<section
  aria-label="Vorlagen-Band"
  role="presentation"
  className="mb-6 -mt-4 rounded-[3px] border border-zinc-200 bg-zinc-100 px-3 py-1 text-[11px] leading-6 tracking-wide text-zinc-600"
>
  <p className="overflow-hidden whitespace-nowrap">
    {Array(40).fill("Beispielartikel").join(" · ")}
  </p>
</section>


      
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight">
          Automatisierung in der Möbelproduktion: Ab wann lohnen sich
          Montageanlagen wirklich?
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Sie möchten Scharniere und Beschläge schneller, günstiger und
          gleichmäßig montieren? Hier erfahren Sie, ab wann automatische Anlagen
          die bessere Wahl sind – und wie Sie die Rechnung sauber aufsetzen.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-03">03.09</time>
          {" · "}Lesedauer:{" "}
          <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-[3px] border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/platzhalter_in_text.jpg" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/platzhalter_in_text.jpg"
                alt="Automatische Montagezelle für Scharniere und Beschläge in einer modernen Möbelfertigung"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Roboterzelle montiert Scharniere und Beschläge an Fronten und
            Korpussen.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/platzhalter_autor.jpg"
            alt="Autor: Max Weber"
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
      <aside className="mb-10 rounded-[5px] border border-[#00BFB2]/30 bg-[#00BFB2]/10 p-5">
        <h2 className="text-lg font-medium mb-3">
          Das Wichtigste auf einen Blick
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Automatische Montage lohnt sich, wenn Sie wiederkehrende
            Montageaufgaben (Scharniere, Beschläge, System&nbsp;32-Bohrbilder)
            mit stabiler Nachfrage haben und Auslastung planen können.
          </li>
          <li>
            Der ROI wird von drei Hebeln getragen: Personalkosten je Stunde,
            Taktzeitverkürzung pro Teil und Kosten durch Nacharbeit/Ausschuss,
            die durch gleichbleibende Qualität sinken.
          </li>
          <li>
            Halbautomatische Bohr-/Einpressmaschinen sind ideal als Einstieg
            (präzise, schnell, flexibel); vollautomatische Zellen bringen den
            größten Effekt bei Serien und Varianten mit Stammdatenpflege.
          </li>
          <li>
            Rechnen Sie konservativ: reale OEE (Verfügbarkeit&nbsp;×&nbsp;Leistung&nbsp;×&nbsp;Qualität),
            Rüstzeiten und Schulungskurven einkalkulieren – dann ergibt sich
            häufig eine Amortisation innerhalb von 12–36&nbsp;Monaten.
          </li>
          <li>
            Bonus: Automatisierung bringt konstante Qualität und
            dokumentierbare Prozesse – wichtig für Reklamationsquote,
            Zertifizierungen und Kundenzufriedenheit.
          </li>
        </ul>
      </aside>

      {/* ToC */}
      <nav
        aria-label="Inhaltsverzeichnis"
        className="mb-12 rounded-[5px] border border-zinc-200 bg-zinc-50 p-5"
      >
        <h2 className="text-base font-medium mb-3">Inhaltsverzeichnis</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-automatische-montage">
              Was ist automatische Montage in der Möbelfertigung?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#nutzen-qualitaet-kosten">
              Warum automatisieren? Qualität, Taktzeit und Personalkosten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#break-even-roi">
              Ab wann lohnt es sich? Break-even &amp; ROI einfach gerechnet
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#technologiebausteine">
              Technologie-Bausteine: Von Bohrlehre bis Roboterzelle
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxisbeispiele">
              Praxisbeispiele &amp; Benchmarks aus der Branche
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#fahrplan">
              Fahrplan: So gehen Sie in 6 Schritten vor
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

      {/* Hauptteil */}
      <section id="was-ist-automatische-montage">
        <h2 className="text-2xl font-medium mb-2">
          Was ist automatische Montage in der Möbelfertigung?
        </h2>
        <p className="leading-relaxed text-zinc-800">
          Unter automatischer Montage verstehen wir das wiederholgenaue
          Bohren, Einpressen und Verschrauben von Scharnieren, Montageplatten,
          Führungen und Beschlägen – möglichst ohne manuelles Anzeichnen. Die
          Spannweite reicht von{" "}
          <strong>halbautomatischen Bohr- und Einpressmaschinen</strong>, die
          das System&nbsp;32 sicher abbilden, bis zu{" "}
          <strong>vollautomatischen Zellen</strong>, die Türen, Fronten oder
          Korpusse per Handling zuführen, positionieren und die Montage
          in einem definierten Takt durchführen.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[5px] border border-zinc-200 p-4 bg-white md:col-span-2">
            <h3 className="text-lg font-medium mb-2">
              Typische Prozessschritte
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Bohren der Topf- und Dübellöcher nach System&nbsp;32</li>
              <li>Einpressen von Topfscharnieren und Montageplatten</li>
              <li>Verschrauben mit Drehmomentkontrolle</li>
              <li>In-Line-Prüfung (z.&nbsp;B. Kamera, Kraft-Weg-Überwachung)</li>
              <li>Rückverfolgbarkeit (Bauteil-ID, Datensatz, Prüfprotokoll)</li>
            </ul>
          </div>
          <aside className="rounded-[5px] border border-[#00BFB2]/30 bg-[#00BFB2]/10 p-4">
            <h4 className="font-medium mb-1">Gut zu wissen</h4>
            <p className="text-sm">
              „System&nbsp;32“ bezeichnet den 32-mm-Rasterabstand für
              Lochreihen in Möbeln. Damit werden Bohrbilder standardisiert – ein
              Schlüssel für einfache Automatisierung.
            </p>
          </aside>
        </div>
      </section>

      {/* Bild 1 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-[3px] border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/platzhalter_in_text.jpg" />
            <img
              loading="lazy"
              src="/platzhalter_in_text.jpg"
              alt="Montagezelle montiert Scharniere automatisiert an Möbelfronten"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Moderne Montagezellen übernehmen Bohren, Einpressen und Verschrauben
          in einem Durchlauf – reproduzierbar und dokumentiert.
        </figcaption>
      </figure>

      <section id="nutzen-qualitaet-kosten" className="mt-10">
        <h2 className="text-2xl font-medium mb-2">
          Warum automatisieren? Qualität, Taktzeit und Personalkosten
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">Gleichbleibende Qualität</h3>
            <p>
              Automatische Anlagen montieren in definierten Bewegungsbahnen und
              Drehmomenten. Sensoren prüfen den Prozess (z.&nbsp;B. Kraft-Weg beim
              Einpressen). Das senkt Nacharbeit und Reklamationen – und sorgt
              für saubere Serienqualität, auch bei Schichtwechsel.
            </p>
          </div>
          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">Produktivität &amp; Taktzeit</h3>
            <p>
              Durch automatisches Positionieren, Mehrspindel-Bohrköpfe und
              parallele Abläufe sinken Taktzeiten pro Front/Korpus deutlich.
              Gleichzeitig wird die Ausbringung planbarer – wichtig für
              Liefertermintreue.
            </p>
          </div>
          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">Personalkosten senken</h3>
            <p>
              Ein Teil der manuellen, repetitiven Arbeit entfällt, sodass eine
              Anlage mehrere Arbeitsplätze ersetzt oder Mitarbeitende wertschöpfen­der
              eingesetzt werden können (Qualität, Rüstung, Materialfluss).
            </p>
          </div>
          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">Dokumentation &amp; Nachverfolgung</h3>
            <p>
              Prozessdaten lassen sich speichern (Bauteil-ID, Anzugsdrehmoment,
              Prüfergebnis). Das erleichtert Audit, Garantieabwicklung und
              kontinuierliche Verbesserung.
            </p>
          </div>
        </div>
      </section>

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-[5px] border-l-4 border-[#00BFB2] bg-[#00BFB2]/10 p-5">
        <blockquote className="text-lg font-medium">
          „Wer Montage automatisiert, kauft vor allem Planbarkeit: konstante
          Ausbringung, messbare Qualität und stabile Prozesskosten – die Basis
          für einen belastbaren ROI.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Zusammenfassung branchenüblicher Best Practices (indirektes Zitat)
        </figcaption>
      </figure>

      <section id="break-even-roi" className="mt-10">
        <h2 className="text-2xl font-medium mb-2">
          Ab wann lohnt es sich? Break-even &amp; ROI einfach gerechnet
        </h2>
        <p className="mb-4">
          Statt auf Bauchgefühl zu setzen, lohnt sich eine strukturierte Rechnung.
          Nutzen Sie dazu drei Eingaben: <strong>Lohnkosten je Stunde</strong>,{" "}
          <strong>Taktzeit pro Teil</strong> und{" "}
          <strong>Qualitätskosten (Nacharbeit/Ausschuss)</strong>.
        </p>

        <div className="rounded-[5px] border border-zinc-200 p-5 bg-white">
          <h3 className="text-lg font-medium mb-2">Kleine ROI-Rezeptur</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="mb-2">
                <strong>1) Ist-Kosten/Teil (manuell)</strong>
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Arbeitszeit/Teil × Lohnkosten/h{" "}
                  <span className="text-zinc-500">(inkl. Lohnnebenkosten)</span>
                </li>
                <li>+ Qualitätskosten/Teil</li>
                <li>+ Gemeinkostenanteil (z.&nbsp;B. Prüfzeit)</li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="mb-2">
                <strong>2) Soll-Kosten/Teil (automatisiert)</strong>
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Bedienzeit/Teil × Lohnkosten/h{" "}
                  <span className="text-zinc-500">(oft geringer)</span>
                </li>
                <li>
                  + Abschreibung/Teil{" "}
                  <span className="text-zinc-500">(Investition ÷ Jahresmenge)</span>
                </li>
                <li>+ Rest-Qualitätskosten/Teil</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-[5px] border border-[#00BFB2]/30 bg-[#00BFB2]/10 p-4 text-sm">
            <p>
              <strong>Break-even-Menge</strong> entsteht dort, wo{" "}
              <em>Kosten/Teil (manuell)</em> = <em>Kosten/Teil (automatisiert)</em>.
              Ab dieser Menge pro Jahr spart die Anlage – jeder weitere Auftrag
              erhöht den ROI.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">
            Beispielrechnung (vereinfachte Annahmen)
          </h3>
          <div className="overflow-x-auto rounded-[5px] border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left p-3 font-medium">Parameter</th>
                  <th className="text-left p-3 font-medium">Manuell</th>
                  <th className="text-left p-3 font-medium">Automatisiert</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Taktzeit pro Front (Bohren+Montage)</td>
                  <td className="p-3">60&nbsp;s</td>
                  <td className="p-3">25&nbsp;s</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Bedienpersonal</td>
                  <td className="p-3">1 Person</td>
                  <td className="p-3">0,5 Person{" "}
                    <span className="text-zinc-500">(geteilte Aufsicht)</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Qualitätskosten/Teil</td>
                  <td className="p-3">0,30&nbsp;€</td>
                  <td className="p-3">0,10&nbsp;€</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Lohnkosten (inkl. NK)</td>
                  <td className="p-3">35&nbsp;€/h</td>
                  <td className="p-3">35&nbsp;€/h</td>
                </tr>
                <tr className="border-t bg-zinc-50">
                  <td className="p-3 font-medium">Kosten/Teil (nur Arbeit+Qualität)</td>
                  <td className="p-3">
                    {/* Rechenweg: (60 s = 1,0 min = 1/60 h) × 35 €/h + 0,30 € */}
                    {(1 / 60 * 35 + 0.30).toFixed(2)}&nbsp;€
                  </td>
                  <td className="p-3">
                    {/* Rechenweg: (25 s = 0,4167 min = 25/3600 h) × 35 €/h × 0,5 + 0,10 € */}
                    {(25 / 3600 * 35 * 0.5 + 0.10).toFixed(2)}&nbsp;€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-zinc-600">
            Hinweis: Die Investition (Anlage, Peripherie, Schulung) wird über die
            geplante Jahresmenge abgeschrieben und zu den Automatisierungskosten
            pro Teil addiert. Rechnen Sie konservativ mit einer realen OEE und
            angemessenen Rüst-/Störzeiten.
          </p>
        </div>
      </section>

      <section id="technologiebausteine" className="mt-10">
        <h2 className="text-2xl font-medium mb-2">
          Technologie-Bausteine: Von Bohrlehre bis Roboterzelle
        </h2>

        <div className="grid gap-5">
          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">1) Halbautomatisch</h3>
            <p className="mb-2">
              Bohr- und Einpressmaschinen für System&nbsp;32 und Scharniere
              liefern präzise, wiederholgenaue Ergebnisse. Sie eignen sich für
              variantenreiche Aufträge, kleine bis mittlere Serien und als
              Einstieg in Prozessstabilität.
            </p>
            <ul className="list-disc ml-5 text-sm">
              <li>
                Mehrspindel-Bohrköpfe, Anschläge, Pneumatik-Niederhalter,
                Einpressvorrichtungen
              </li>
              <li>
                Schnellwechsel der Bohrbilder, digital hinterlegte Programme
              </li>
              <li>
                Optionale Drehmomentsteuerung beim Verschrauben
              </li>
            </ul>
          </div>

          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">2) Vollautomatisch</h3>
            <p className="mb-2">
              Linien oder Zellen mit Teile-Handling, automatischem Rüsten,
              Bildverarbeitung und Prozessüberwachung. Ideal bei hohen Stückzahlen
              und klaren Stammdaten (Bohrbilder, Varianten, Materialien).
            </p>
            <ul className="list-disc ml-5 text-sm">
              <li>Roboter-Pick&amp;Place, Palettierer, Fördersysteme</li>
              <li>In-Line-Prüfung, Poka-Yoke, Rückverfolgbarkeit</li>
              <li>Integration in ERP/MES für Auftragssteuerung</li>
            </ul>
          </div>

          <div className="rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">3) Digitaler Layer</h3>
            <p className="mb-2">
              Digitale Werkerführung, Programmverwaltung und Datenerfassung
              sichern Reproduzierbarkeit und erleichtern Audits. Der Layer ist
              entscheidend, damit die Anlage auch bei Varianten stabil läuft.
            </p>
          </div>
        </div>
      </section>

      {/* Bild 2 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-[3px] border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/platzhalter_in_text.jpg" />
            <img
              loading="lazy"
              src="/platzhalter_in_text.jpg"
              alt="System 32 Bohrbild als Grundlage für automatische Scharniermontage"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Standardisierte Bohrbilder (System&nbsp;32) sind das Rückgrat stabiler
          Montageprozesse.
        </figcaption>
      </figure>

      <section id="praxisbeispiele" className="mt-10">
        <h2 className="text-2xl font-medium mb-2">
          Praxisbeispiele &amp; Benchmarks aus der Branche
        </h2>
        <div className="rounded-[5px] border border-zinc-200 p-5 bg-white">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Leistungsfähige Montagestraßen</strong> in der
              Küchenmöbelproduktion erreichen mehrere Korpusse pro Minute bei
              hoher Anlagenverfügbarkeit. Das zeigt, welches Potenzial in
              automatisierter Montage steckt – und wie wichtig stabile
              Materialflüsse sind.
            </li>
            <li>
              <strong>Halbautomatische Bohr-/Einpressmaschinen</strong> sind
              in Werkstätten und mittelständischen Betrieben weit verbreitet. Sie
              verbinden Präzision mit Flexibilität und sind oft der schnellste
              Weg, Qualität und Taktzeit zu verbessern.
            </li>
            <li>
              <strong>Digitale Fabriken</strong> (Paperless, vernetzte
              Maschinen, Echtzeit-Daten) berichten überdurchschnittliche
              Produktivitätsgewinne – vor allem, wenn Montage, Zuschnitt, CNC,
              Kanten und Logistik sauber integriert sind.
            </li>
          </ul>
        </div>
      </section>

      <section id="fahrplan" className="mt-10">
        <h2 className="text-2xl font-medium mb-2">
          Fahrplan: So gehen Sie in 6 Schritten vor
        </h2>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong>Prozess auswählen:</strong> Scharniere/Beschläge mit
            klaren Bohrbildern, relevanter Menge und Qualitätsproblemen haben
            den größten Hebel.
          </li>
          <li>
            <strong>Daten sammeln:</strong> Taktzeit, Ausschuss, Nacharbeit,
            Rüstzeit, Störungen, Personaleinsatz, Lohnkosten.
          </li>
          <li>
            <strong>Technologiestufe wählen:</strong> Halbautomatisch für
            schnellen Einstieg; vollautomatisch für Serien und hohe
            Wiederholrate.
          </li>
          <li>
            <strong>ROI kalkulieren:</strong> Reale OEE, Abschreibung, Service,
            Energie, Platzbedarf berücksichtigen.
          </li>
          <li>
            <strong>Pilot &amp; Schulung:</strong> Mit einem klaren Use Case
            starten, Bediener:innen und Instandhaltung früh einbinden.
          </li>
          <li>
            <strong>Skalieren:</strong> Standards schaffen (Bohrbilder,
            Werkzeuge, Programme), digitale Rückverfolgung etablieren.
          </li>
        </ol>

        {/* 2:1 Vergleich */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-[5px] border border-zinc-200 p-5">
            <h3 className="text-lg font-medium mb-2">
              Manuell vs. halbautomatisch vs. vollautomatisch
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left p-3 font-medium">Kriterium</th>
                    <th className="text-left p-3 font-medium">Manuell</th>
                    <th className="text-left p-3 font-medium">Halbauto</th>
                    <th className="text-left p-3 font-medium">Vollauto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Qualität (Streuung)</td>
                    <td className="p-3">hoch</td>
                    <td className="p-3">niedrig</td>
                    <td className="p-3">sehr niedrig</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Taktzeit</td>
                    <td className="p-3">lang</td>
                    <td className="p-3">mittel</td>
                    <td className="p-3">kurz</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Rüstaufwand</td>
                    <td className="p-3">manuell</td>
                    <td className="p-3">schnellwechsel</td>
                    <td className="p-3">programmgesteuert</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Flexibilität (Varianten)</td>
                    <td className="p-3">hoch</td>
                    <td className="p-3">hoch</td>
                    <td className="p-3">mittel</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Invest</td>
                    <td className="p-3">niedrig</td>
                    <td className="p-3">mittel</td>
                    <td className="p-3">hoch</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Bedienpersonal</td>
                    <td className="p-3">1–2</td>
                    <td className="p-3">1</td>
                    <td className="p-3">0,5–1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-[5px] border border-[#00BFB2]/30 bg-[#00BFB2]/10 p-5">
            <h4 className="font-medium mb-1">Quick-Check</h4>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Stabile Nachfrage &amp; wiederkehrende Bohrbilder?</li>
              <li>2+ FTE in der Montage gebunden?</li>
              <li>Messbare Reklamations- oder Nacharbeitskosten?</li>
              <li>Genügend Platz und Materialfluss gesichert?</li>
            </ul>
          </aside>
        </div>

        {/* Weiterführende interne Links (Cluster) */}
        <aside className="mt-10 rounded-[5px] border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-medium mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/oee-in-der-holzindustrie">
                OEE in der Holzindustrie: So messen Sie Verfügbarkeit, Leistung, Qualität
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/system-32-bohrbilder-richtig-anlegen">
                System&nbsp;32: Bohrbilder richtig anlegen und pflegen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/montage-schraubprozesse-absichern">
                Schraubprozesse absichern: Drehmoment, Poka-Yoke &amp; Dokumentation
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/roi-rechner-automatisierung">
                ROI-Rechner für Automatisierung: Vorlage mit Beispiel
              </a>
            </li>
          </ul>
        </aside>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-medium mb-4">FAQ</h2>
        <div className="space-y-6 text-[#444]">
          <div>
            <h3 className="font-medium">
              Ab welcher Stückzahl lohnt sich eine Montageanlage?
            </h3>
            <p>
              Das hängt von Lohnkosten, Taktzeit und Qualitätskosten ab. Als
              Faustregel gilt: Je repetitiver der Prozess und je höher die
              Auslastung, desto schneller die Amortisation. Rechnen Sie mit realer
              OEE und konservativen Annahmen.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Mit welcher Technologie sollte ich starten?
            </h3>
            <p>
              Beginnen Sie oft mit halbautomatischen Bohr-/Einpressmaschinen für
              Scharniere und Montageplatten. Sie sind schnell eingeführt und
              heben Qualität und Taktzeit spürbar. Danach können Sie
              schrittweise automatisieren (Handling, Prüfen, Verschrauben).
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Bleibe ich bei vielen Varianten flexibel?
            </h3>
            <p>
              Ja, wenn Bohrbilder und Programme sauber gepflegt sind. Wichtig
              sind Schnellwechsel-Vorrichtungen, Referenzanschläge und digitale
              Datensätze je Variante.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Wie sichere ich die Qualität in der automatischen Montage?
            </h3>
            <p>
              Durch Prozessüberwachung (z.&nbsp;B. Kraft-Weg beim Einpressen,
              Kamera-Checks) und dokumentiertes Drehmoment beim Schrauben.
              Prüfprotokolle je Bauteil erleichtern das Reklamationsmanagement.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Welche Rollen brauche ich intern?
            </h3>
            <p>
              Bedienung/Anlagenführung, Instandhaltung, Prozessverantwortliche
              für Stammdaten und Qualität. Schulung und Standardisierung sind
              entscheidend.
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
                  name: "Ab welcher Stückzahl lohnt sich eine Montageanlage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Das hängt von Lohnkosten, Taktzeit und Qualitätskosten ab. Als Faustregel gilt: Je repetitiver der Prozess und je höher die Auslastung, desto schneller die Amortisation. Rechnen Sie mit realer OEE und konservativen Annahmen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Mit welcher Technologie sollte ich starten?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Beginnen Sie oft mit halbautomatischen Bohr-/Einpressmaschinen für Scharniere und Montageplatten. Sie sind schnell eingeführt und heben Qualität und Taktzeit spürbar. Danach können Sie schrittweise automatisieren (Handling, Prüfen, Verschrauben).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bleibe ich bei vielen Varianten flexibel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, wenn Bohrbilder und Programme sauber gepflegt sind. Wichtig sind Schnellwechsel-Vorrichtungen, Referenzanschläge und digitale Datensätze je Variante.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie sichere ich die Qualität in der automatischen Montage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Durch Prozessüberwachung (z. B. Kraft-Weg beim Einpressen, Kamera-Checks) und dokumentiertes Drehmoment beim Schrauben. Prüfprotokolle je Bauteil erleichtern das Reklamationsmanagement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rollen brauche ich intern?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Bedienung/Anlagenführung, Instandhaltung, Prozessverantwortliche für Stammdaten und Qualität. Schulung und Standardisierung sind entscheidend.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-medium mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            Ab wann lohnen sich Montageanlagen für Scharniere und Beschläge?
          </strong>{" "}
          Immer dann, wenn Sie wiederkehrende Bohrbilder haben, die Auslastung
          planen können und Personalkosten, Taktzeit und Qualitätskosten
          zusammengenommen niedriger sind als bislang. Starten Sie pragmatisch mit
          halbautomatischen Lösungen, professionalisieren Sie Stammdaten und heben
          Sie anschließend die Automatisierungstiefe – so erreichen Sie verlässlich
          einen positiven ROI.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-[5px] border-2 border-dashed border-[#2FAEA2] p-6 text-center">
          <h2 className="text-xl font-medium mb-2">
            Möchten Sie wissen, ob sich eine Montageanlage in Ihrem Werk rechnet?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir analysieren Ihren Montageprozess und bauen auf Wunsch einen
            belastbaren ROI-Case – transparent, herstellerneutral, praxisnah.
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
                className="mt-1 w-full rounded-none border border-zinc-300 px-3 py-2"
                placeholder="Max Mustermann"
                required
              />
            </label>
            <label className="text-sm">
              Telefon
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full rounded-none border border-zinc-300 px-3 py-2"
                placeholder="+49 123456789"
              />
            </label>
            <label className="text-sm">
              E-Mail
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-none border border-zinc-300 px-3 py-2"
                placeholder="max@mustermann.de"
                required
              />
            </label>

            <a
              href="#cta-pop"
              className="mt-2 inline-flex items-center justify-center rounded-[5px] bg-[#00BFB2] px-4 py-2 font-medium text-white hover:bg-[#08979A] focus:outline-none focus:ring-2 focus:ring-[#0069B3] transition-colors"
            >
              Unverbindlich anfragen
            </a>

            <p id="cta-note" className="text-xs text-zinc-500">
              Mit dem Absenden des Formulars akzeptieren Sie unsere
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
            className="relative w-full max-w-md rounded-[5px] bg-white p-6 shadow-xl"
          >
            {/* Schließen-Button */}
            <a
              href="#"
              aria-label="Fenster schließen"
              className="absolute right-3 top-3 rounded-[5px] border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
            >
              ✕
            </a>

            <h3 id="cta-pop-title" className="mb-2 text-lg font-medium">
              Hinweis
            </h3>
            <p className="text-zinc-800">
              In diesem Beispiel-Blogartikel funktionieren die Links nicht.
              Möchten Sie solch ein Projekt auch für Ihr Angebot umsetzen?{" "}
              <a
                href="https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung?month=2025-08"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium underline ${accent}`}
              >
                Klicken Sie hier
              </a>{" "}
              und lassen Sie uns sprechen.
            </p>
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-medium mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Automatisierung in der
          Möbelmontage
        </h2>

        <div className="rounded-[5px] border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-medium p-3 w-56">Begriff</th>
                <th className="text-left font-medium p-3">Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">System&nbsp;32</td>
                <td className="p-3 text-zinc-700">
                  Rastermaß mit 32&nbsp;mm Lochabstand für standardisierte
                  Bohrbilder an Möbelteilen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">OEE</td>
                <td className="p-3 text-zinc-700">
                  Overall Equipment Effectiveness – Kennzahl aus Verfügbarkeit,
                  Leistung und Qualität, misst die reale Anlageneffektivität.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Poka-Yoke</td>
                <td className="p-3 text-zinc-700">
                  Fehlervermeidung durch konstruktive oder prozessuale
                  Vorkehrungen, z.&nbsp;B. durch Formschluss oder Sensorik.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Einpresskraft</td>
                <td className="p-3 text-zinc-700">
                  Kraft, mit der Scharniertöpfe oder Montageplatten in das
                  Werkstück eingepresst werden; lässt sich überwachen und
                  dokumentieren.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Drehmomentüberwachung
                </td>
                <td className="p-3 text-zinc-700">
                  Kontrolle des Anzugsdrehmoments beim Verschrauben zur
                  Sicherung der Verbindungsqualität.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="mt-14">
        <h2 className="text-2xl font-medium mb-3">Über den Autor</h2>
        <div className="flex items-center gap-4">
          <img
            src={author.image}
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-medium">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von:{" "}
            <strong>Sarah König</strong> – Leiterin Industrial Engineering
            (Holztechnik).{" "}
            <a href="https://www.linkedin.com/in/platzhalter/" className={`hover:underline ${accent}`}>
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Automatisierung in der Möbelproduktion: Ab wann lohnen sich Montageanlagen wirklich?",
            description:
              "Praxisleitfaden für automatische Montage von Scharnieren & Beschlägen inklusive ROI-Rechnung, Qualität und Technologie-Bausteinen.",
            inLanguage: "de",
            image:
              "https://www.beispiel.de/og/automatisierung-moebelproduktion-montageanlagen.jpg",
            datePublished: "2025-09-03",
            dateModified: "2025-09-03",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Muster GmbH",
              url: "https://www.beispiel.de",
              logo: {
                "@type": "ImageObject",
                url: "https://www.beispiel.de/logo.png",
              },
            },
            mainEntityOfPage:
              "https://www.beispiel.de/blog/automatisierung-moebelproduktion-montageanlagen",
          }),
        }}
      />

      {/* Organization Schema (Company) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Muster GmbH",
            url: "https://www.beispiel.de",
            sameAs: ["https://www.linkedin.com/company/platzhalter/"],
          }),
        }}
      />

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-medium mb-3">
          Quellen &amp; weiterführende Studien
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Eurostat (2025): „EU hourly labour costs ranged from €11 to €55 in
            2024“.{" "}
            <a
              href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250328-1"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20250328-1
            </a>
          </li>
          <li>
            HOMAG Case Study: „Assembly technology for the future (Bribus)“.{" "}
            <a
              href="https://www.homag.com/en/company/news/case-studies/detail/assembly-technology-for-the-future"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.homag.com/en/company/news/case-studies/detail/assembly-technology-for-the-future
            </a>
          </li>
          <li>
            Hettich: „Automatic drilling and insertion machines (BlueMax)“.{" "}
            <a
              href="https://hta.hettich.com/en-de/automatic-drilling-and-insertion-machines"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://hta.hettich.com/en-de/automatic-drilling-and-insertion-machines
            </a>
          </li>
          <li>
            Blum: „Boring and insertion machines – overview“.{" "}
            <a
              href="https://www.blum.com/us/en/products/assembly-devices/drilling-insertion-machines/overview/"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.blum.com/us/en/products/assembly-devices/drilling-insertion-machines/overview/
            </a>
          </li>
          <li>
            McKinsey (2025): „Rethinking how new factories are being built“.{" "}
            <a
              href="https://www.mckinsey.com/capabilities/operations/our-insights/smarter-growth-lower-risk-rethinking-how-new-factories-are-built"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mckinsey.com/capabilities/operations/our-insights/smarter-growth-lower-risk-rethinking-how-new-factories-are-built
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
