
import type { Metadata } from "next";
import { ArrowRight, Zap, Shield, PiggyBank } from "lucide-react";

/**
 * SEO-Keyword-Notizen (aus SERP-Analyse, 20.08.2025):
 * Primäre Keywords: Photovoltaik Unternehmen, PV-Anlage Gewerbe, Photovoltaik Speicher, Eigenverbrauch, Einspeisevergütung 2025, KfW Förderung Unternehmen
 * Sekundäre Keywords: Amortisation Photovoltaik, Wirtschaftlichkeit PV Speicher, Stromspeicher Dimensionierung, Lastspitzenkappung/Peak Shaving, Solarpaket I, Direktvermarktung, EEG 2023/2025, Strompreis Gewerbe
 */

export const revalidate = 3600;

const title =
  "Green Energy im Unternehmen: Photovoltaik & Energiespeicher wirtschaftlich planen (Investition, Amortisation, Förderungen)";
const description =
  "So setzen Unternehmen PV-Anlagen und Speicherlösungen sinnvoll ein: Kosten, Amortisation, Einspeisevergütung 2025 & KfW-Förderung – einfach erklärt mit Rechenbeispiel.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.beispiel.de/blog/green-energy-photovoltaik-speicher",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title,
    description,
    locale: "de_DE",
    url: "https://www.beispiel.de/blog/green-energy-photovoltaik-speicher",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 600,
        alt: "Photovoltaik auf Gewerbedach mit Batteriespeicher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  keywords: [
    "Photovoltaik Unternehmen",
    "PV-Anlage Gewerbe",
    "Energiespeicher",
    "Eigenverbrauch",
    "Einspeisevergütung 2025",
    "KfW Förderung Photovoltaik",
    "Amortisation Photovoltaik",
    "Wirtschaftlichkeit PV Speicher",
    "Peak Shaving",
    "Solarpaket I",
  ],
};

const accent = "text-emerald-700";
const author = {
  name: "Lennart Müller",
  role: "Berater für Energieeffizienz & PV-Projekte",
  image: "/autor-lennart-mueller.webp",
};

export default function Page() {
  const published = "2025-08-20";
  const modified = "2025-08-20";

  // Sichtbare Inhaltsabschnitte (IDs für ToC)
  const toc = [
    { id: "warum-jetzt", label: "Warum PV & Speicher für Unternehmen jetzt sinnvoll sind" },
    { id: "grundlagen", label: "Grundlagen: Eigenverbrauch, Einspeisung & Peak Shaving" },
    { id: "kosten-amortisation", label: "Kosten & Amortisation einfach erklärt" },
    { id: "foerderungen-recht", label: "Förderungen & Recht 2025: EEG, Solarpaket I, KfW" },
    { id: "dimensionierung", label: "Dimensionierung: So bestimmst du PV-Leistung & Speichergröße" },
    { id: "praxis-beispiel", label: "Praxisbeispiel: Business Case für ein KMU" },
    { id: "umsetzung", label: "Umsetzung in 7 Schritten (Checkliste)" },
    { id: "fehler-vermeiden", label: "Typische Fehler vermeiden: Best Practices" },
    { id: "vergleich", label: "Vergleich: PV vs. Speicher vs. PPA" },
  ];

  const faqItems = [
    {
      q: "Ab wann lohnt sich ein Stromspeicher im Gewerbe?",
      a: "Wenn deine Lastspitzen durch den Speicher messbar gesenkt werden (Peak Shaving) und deine Eigenverbrauchsquote steigt. Typisch ist eine Speicherkapazität von 0,3–0,8 kWh je kWp PV-Leistung – abhängig vom Lastprofil und der gewünschten Autarkie.",
    },
    {
      q: "Welche Einspeisevergütung erhalte ich 2025?",
      a: "Für Teileinspeisung liegen die Sätze bis etwa 7,86 ct/kWh, für Volleinspeisung bis rund 12,6 ct/kWh (je nach Anlagenklasse und Zeitraum).",
    },
    {
      q: "Gilt die 0 % Umsatzsteuer für PV weiterhin?",
      a: "Für Lieferung und Installation kleiner PV-Anlagen gilt weiterhin unter Bedingungen die Umsatzsteuerbefreiung (‘Nullsteuersatz’). Prüfe den aktuellen gesetzlichen Stand mit deinem Steuerberater.",
    },
    {
      q: "Was fördert die KfW für Unternehmen?",
      a: "Zinsgünstige Kredite für erneuerbare Energien (z. B. Programm 270) und ergänzende Programme. Konditionen sind bonitätsabhängig, die Mittel werden über Hausbanken beantragt.",
    },
    {
      q: "Wie groß sollte ich meine PV-Anlage auslegen?",
      a: "Richte dich am Tageslastprofil aus: Dachfläche nutzen, aber die Leistung so wählen, dass der größte Teil der Erzeugung in Geschäftszeiten verbraucht wird. Überschüsse können eingespeist oder für E-Mobilität/Wärmepumpe genutzt werden.",
    },
    {
      q: "Muss ich in die Direktvermarktung?",
      a: "Ab bestimmten Größen und Einspeisemengen ja; EEG und Solarpaket I legen Schwellen fest. Für Anlagen >40 kW auf Dächern wurden Förderanreize angepasst.",
    },
  ];

  return (
<article className="prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Green Energy im Unternehmen – Photovoltaik & Energiespeicher sinnvoll einsetzen
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Investition, Amortisation, Förderungen: So planst du PV-Anlagen und Speicherlösungen wirtschaftlich – in klaren
          Schritten, mit Rechenbeispiel und Checkliste.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-08-20">20.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">18–22 Minuten</span>
        </div>

        {/* Hero 16:6 – LCP-Bild priorisieren */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=70"
              />
              <img
                // LCP: nicht lazy
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80"
                alt="Gewerbedach mit Photovoltaikfeldern und Batterieschrank"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                decoding="sync"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            PV auf Gewerbedach: Wirtschaftlich durch hohen Eigenverbrauch und Peak Shaving.
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Eigenverbrauch ist der Renditetreiber: Je mehr Solarstrom du selbst nutzt, desto schneller rechnet sich die
            Anlage – Speicher erhöhen die Quote und glätten Lastspitzen.
          </li>
          <li>
            Einspeisevergütung 2025: Bis ca. <strong>7,86 ct/kWh (Teileinspeisung)</strong> bzw.{" "}
            <strong>bis 12,6 ct/kWh (Volleinspeisung)</strong> – Details und Klassen im Abschnitt „Förderungen“.
          </li>
          <li>
            Stromgestehungskosten (LCOE) von PV sind in Deutschland sehr niedrig; PV <em>mit</em> Batterie kann
            wettbewerbsfähig zu konventionellen Kraftwerken sein.
          </li>
          <li>
            KfW (u. a. Programm 270) bietet zinsgünstige Kredite – Finanzierung immer über die Hausbank anstoßen.
          </li>
          <li>
            Business Case: Rechne mit aktuellem Gewerbestrom (Ø ~25 ct/kWh für Neuverträge, Stand Aug. 2025) und
            konservativen Erträgen – dann Amortisation typ. im Bereich 7–12 Jahre.
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
      <section id="warum-jetzt">
        <h2 className="text-2xl font-bold mb-3">
          Warum PV &amp; Speicher für Unternehmen jetzt sinnvoll sind
        </h2>
        <p className="leading-relaxed">
          Die wirtschaftliche Logik ist einfach: Du ersetzt teuren Netzstrom durch günstigen Eigenstrom. Für Neuverträge
          liegt der durchschnittliche <strong>Gewerbestrompreis 08/2025 bei ~25,03 ct/kWh</strong> (bundesweiter
          Durchschnitt). Jede selbst genutzte kWh aus der PV-Anlage senkt deine Stromrechnung entsprechend.
        </p>
        <p className="leading-relaxed">
          Parallel sind die <strong>Stromgestehungskosten (LCOE) von PV</strong> laut aktuellen Studien niedrig; Analysen zeigen,
          dass <em>Photovoltaik – sogar mit Batteriespeicher</em> – in Deutschland sehr wettbewerbsfähig ist. Das senkt
          dein Investitionsrisiko.
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-200 p-4">
            <Zap className="w-5 h-5" aria-hidden="true" />
            <p className="mt-2 text-sm text-zinc-700">
              <strong>ESG & CO₂</strong>: Der nationale CO₂-Preis beträgt 2025 <strong>55 €/t</strong>. Eigener Solarstrom
              reduziert indirekte Emissionen (Scope 2) und verbessert Ratings.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <Shield className="w-5 h-5" aria-hidden="true" />
            <p className="mt-2 text-sm text-zinc-700">
              <strong>Resilienz</strong>: Speicher puffern Lastspitzen, stützen bei Netzausfällen (USV/Notstrom je Konzept)
              und bieten Flexibilität für Ladeinfrastruktur.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <PiggyBank className="w-5 h-5" aria-hidden="true" />
            <p className="mt-2 text-sm text-zinc-700">
              <strong>Förderkulisse</strong>: EEG-Vergütung, Solarpaket-I-Erleichterungen und KfW-Finanzierung unterstützen
              Investitionen – Details unten.
            </p>
          </div>
        </div>
      </section>

      {/* Vollbreites Bild */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=70"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80"
              alt="Industriehalle mit PV-Feldern; Fokus auf Gleichstromleitungen und Wechselrichter"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          PV auf dem Gewerbedach: Hoher Eigenverbrauch macht die Anlage besonders rentabel.
        </figcaption>
      </figure>

      <section id="grundlagen" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Grundlagen: Eigenverbrauch, Einspeisung & Peak Shaving</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Was ist Eigenverbrauch?</h3>
            <p className="text-zinc-700">
              Anteil deines Solarstroms, den du unmittelbar im Betrieb nutzt. <strong>Je höher, desto besser</strong>, denn du
              vermeidest den Zukauf teuren Netzstroms. Speicher erhöhen den Eigenverbrauch, indem sie Tagesüberschüsse in
              die Abendstunden verschieben.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Wie funktioniert Peak Shaving?</h3>
            <p className="text-zinc-700">
              Kurzzeitige Lastspitzen sind teuer (Leistungspreise). Der Speicher liefert in Lastspitzen zusätzliche kW,
              sodass dein Netzbezug <em>gekappt</em> wird. Das senkt Netzentgelte und Grundpreise – wichtig besonders für
              produzierende Betriebe.
            </p>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „PV-Anlagen produzieren in Deutschland inzwischen so günstig, dass sie – selbst kombiniert mit Batteriespeichern –
            in vielen Fällen unter den Vollkosten konventioneller Kraftwerke liegen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Zusammenfassung aus aktuellen Studien und Marktanalysen.
          </figcaption>
        </figure>
      </section>

      <section id="kosten-amortisation" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kosten &amp; Amortisation einfach erklärt</h2>
        <p className="leading-relaxed">
          Für die Wirtschaftlichkeit betrachtest du <strong>CAPEX</strong> (Anschaffung) und <strong>OPEX</strong>
          (Betrieb), Einsparungen durch Eigenverbrauch, Erlöse aus Einspeisung sowie ggf. Steuervorteile. Die einfache
          Daumenregel: <em>Je höher der Eigenverbrauch und je teurer dein Netzstrom, desto kürzer die Amortisation</em>.
        </p>
        <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2">Mini-Formeln</h3>
          <ul className="list-disc ml-5 text-sm text-zinc-800 space-y-2">
            <li>
              <strong>Jährliche Einsparung</strong> ≈ Eigenverbrauch [kWh] × Strompreis [€/kWh]
            </li>
            <li>
              <strong>Jährlicher Einspeiseerlös</strong> ≈ Einspeisemenge [kWh] × Vergütung [€/kWh]
            </li>
            <li>
              <strong>Einfacher Payback</strong> ≈ (CAPEX − Zuschüsse) ÷ (Einsparung + Einspeiseerlös − OPEX)
            </li>
          </ul>
          <p className="text-xs text-zinc-500 mt-2">
            Hinweis: Für Investentscheidungen zusätzlich Kapitalbindung, Steuern, Degradation, De-/Inflation und
            Finanzierungskosten (WACC) berücksichtigen.
          </p>
        </div>
        <p className="leading-relaxed mt-4">
          Orientierung: Für Neuansetzungen ab 08/2025 liegen <strong>Einspeisesätze</strong> (je nach Klasse) in der
          Teileinspeisung um 7–8 ct/kWh, in der Volleinspeisung um 12–13 ct/kWh. Die Werte ändern sich periodisch – prüfe
          die tagesaktuellen Sätze.
        </p>
      </section>

      <section id="foerderungen-recht" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Förderungen &amp; Recht 2025: EEG, Solarpaket I, KfW</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">EEG & Einspeisevergütung</h3>
            <p className="text-zinc-700">
              Das EEG regelt Vergütung bzw. Marktprämie; <strong>bis 100 kW</strong> gelten feste Vergütungssätze, größere
              Anlagen gehen in die Direktvermarktung.
            </p>
            <p className="text-zinc-700 mt-2">
              Konkrete Vergütung <em>(Neuansetzungen)</em>: Teileinspeisung bis ~7,86 ct/kWh, Volleinspeisung bis ~12,6 ct/kWh
              – je nach Anlagengröße und Zeitraum.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Solarpaket I</h3>
            <p className="text-zinc-700">
              Für <strong>größere Dachanlagen ab 40 kW</strong> wurde die Förderung als Reaktion auf Kostenentwicklungen um{" "}
              <strong>+1,5 ct/kWh</strong> angehoben; außerdem wurden diverse Verfahren vereinfacht.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">KfW-Finanzierung (z. B. Programm 270)</h3>
            <p className="text-zinc-700">
              Zinsgünstige Kredite für <strong>PV, Speicher & Ladeinfrastruktur</strong>; Antragstellung über die Hausbank,
              Konditionen bonitäts- und laufzeitabhängig.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Steuern & Abgaben</h3>
            <p className="text-zinc-700">
              Prüfe Ertragsteuer, Stromsteuer, ggf. § 3 Nr. 72 EStG-Privilegien sowie Umsatzsteuer-Regeln. Hole
              steuerlichen Rat ein; Rechtslage kann sich ändern.
            </p>
          </div>
        </div>
      </section>

      {/* Zweites Bild */}
      <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=70"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80"
              alt="Batteriespeicher-Racks in Technikraum: Peak Shaving und Eigenverbrauchsoptimierung"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="text-sm text-zinc-600">
          Batteriespeicher: Lastspitzen kappen, Eigenverbrauch erhöhen – zwei Hebel für die Wirtschaftlichkeit.
        </figcaption>
      </figure>

      <section id="dimensionierung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Dimensionierung: So bestimmst du PV-Leistung &amp; Speichergröße</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">PV-Leistung (kWp)</h3>
            <p className="text-zinc-700">
              Starte mit deiner nutzbaren Dachfläche und dem <strong>Lastprofil</strong>. Ziel: Tageserzeugung in
              Geschäftszeiten deckt Grund- und Teile der Arbeitsspitzen. Überdimensionierung kann sinnvoll sein, wenn
              Ladepunkte/Wärmepumpe vorhanden oder geplant sind.
            </p>
            <div className="mt-3 rounded-lg bg-zinc-50 border border-zinc-200 p-3 text-sm">
              <div className="font-medium">Daumenregel</div>
              <div>kWp ≈ (Jahresverbrauch tagsüber in kWh) ÷ (1.000–1.100 kWh/kWp·a)</div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Speichergröße (kWh)</h3>
            <p className="text-zinc-700">
              Speicher dimensionierst du am Bedarf: Puffern von Mittagsüberschüssen in Abendstunden, plus kurzfristige
              Leistung für <strong>Peak Shaving</strong>. Oft sinnvoll: <strong>0,3–0,8 kWh je kWp</strong> PV, bei stark
              variablen Lasten auch mehr. Beachte Zyklenfestigkeit und C-Rate.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-3">
                <div className="font-medium">Energie</div>
                <div>kWh für Eigenverbrauch</div>
              </div>
              <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-3">
                <div className="font-medium">Leistung</div>
                <div>kW für Peaks (15-min-Intervalle)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="praxis-beispiel" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Praxisbeispiel: Business Case für ein KMU</h2>
        <p className="leading-relaxed">
          Beispielbetrieb mit 300.000 kWh Jahresverbrauch, werktags 7–19 Uhr aktiv. Geplante Anlage:{" "}
          <strong>200 kWp PV</strong>, <strong>120 kWh Speicher</strong>.
        </p>
        <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Annahmen (konservativ)</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>PV-Ertrag: 200 kWp × 1.000 kWh/kWp·a = <strong>200.000 kWh/a</strong></li>
                <li>Eigenverbrauch ohne Speicher: 55 % → 110.000 kWh/a</li>
                <li>Eigenverbrauch mit Speicher: 75 % → 150.000 kWh/a</li>
                <li>Einspeisung: 50.000 kWh/a</li>
                <li>Gewerbestrompreis: 0,25 €/kWh (Ø Neuverträge 08/2025)</li>
                <li>Einspeisevergütung (Teileinspeisung): 0,078 €/kWh (Richtwert)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CAPEX (Richtwerte)</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>PV 200 kWp: 200 k €</li>
                <li>Speicher 120 kWh: 90 k €</li>
                <li>EMS/Montage/Netz: 40 k €</li>
                <li><strong>Summe: 330 k €</strong> (ohne Finanzierung; Standort & Marktpreise variieren)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
              <h4 className="font-semibold">Einsparung & Erlöse p. a.</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Eigenverbrauch 150.000 kWh × 0,25 € = <strong>37.500 €</strong></li>
                <li>Einspeiseerlös 50.000 kWh × 0,078 € = <strong>3.900 €</strong></li>
                <li><strong>Brutto-Cashflow: ≈ 41.400 €</strong> (OPEX nicht berücksichtigt)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-4">
              <h4 className="font-semibold">Payback (einfach)</h4>
              <p className="text-sm">
                Payback ≈ 330.000 € ÷ 41.400 €/a ≈ <strong>7,97 Jahre</strong>.
              </p>
              <p className="text-xs text-zinc-500">
                Realistisch verlängert/verkürzt sich der Wert durch Finanzierung, OPEX, Degradation, Steuern und
                Strompreis/EEG-Entwicklung.
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-zinc-500 mt-2">
          Hinweis: Beispielwerte dienen der Veranschaulichung. Prüfe lokale Erträge, Preise und Rechtslage vor
          Investition.
        </p>
      </section>

      <section id="umsetzung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Umsetzung in 7 Schritten (Checkliste)</h2>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong>Lastprofil & Potenzial</strong>: 12-Monats-Lastgangdaten analysieren, Dachflächen und Statik prüfen.
          </li>
          <li>
            <strong>Wirtschaftlichkeit</strong>: Szenarien (mit/ohne Speicher) rechnen; Einspeise- & Strompreis-Szenarien.
          </li>
          <li>
            <strong>Förderung & Finanzierung</strong>: KfW-Optionen, ggf. regionale Programme; frühe Hausbank-Einbindung.
          </li>
          <li>
            <strong>Netzanfrage & Messkonzept</strong>: Anmeldung beim Netzbetreiber, Zähler-/Messstellenkonzept wählen.
          </li>
          <li>
            <strong>Ausschreibung & Vergabe</strong>: Angebote vergleichbar machen (kWp/kWh, Garantien, EMS-Funktionen).
          </li>
          <li>
            <strong>Installation & Inbetriebnahme</strong>: Abnahme, Dokumentation, Schulung Betrieb/Arbeitssicherheit.
          </li>
          <li>
            <strong>Monitoring & Optimierung</strong>: Eigenverbrauch, Peak Shaving, Ladepunkte/Wärmepumpe integrieren.
          </li>
        </ol>
      </section>

      <section id="fehler-vermeiden" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Typische Fehler vermeiden: Best Practices</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Technik</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>EMS mit Lastganganalyse & Regelstrategien (Eigenverbrauch vs. Peak Shaving) wählen.</li>
              <li>Ausreichende Wechselrichter-Überdimensionierung für Temperatur- und Degradationsreserven.</li>
              <li>Brandschutz & Abschaltkonzepte (Rettungswege) berücksichtigen.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Kaufmännisch</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Strompreis- und EEG-Szenarien (sensitiv) rechnen; konservative Annahmen treffen.</li>
              <li>OPEX (Versicherung, Reinigung, Wartung) und Degradation im LCOE berücksichtigen.</li>
              <li>Liefer-/Performance-Garantien und Pönalen vertraglich absichern.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="vergleich" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Vergleich: PV vs. Speicher vs. PPA</h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Option</th>
                <th className="text-left font-semibold p-3">Vorteile</th>
                <th className="text-left font-semibold p-3">Risiken/Beachten</th>
                <th className="text-left font-semibold p-3">Typischer Einsatz</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Eigenes PV-Dach</td>
                <td className="p-3">Hoher Eigenverbrauch, planbare Kosten, ESG-Boost</td>
                <td className="p-3">CAPEX, Genehmigung/Netz, Betrieb</td>
                <td className="p-3">Produktion, Logistik, Handel</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">PV + Speicher</td>
                <td className="p-3">Mehr Eigenverbrauch, Peak Shaving, Resilienz</td>
                <td className="p-3">Mehr CAPEX, EMS-Komplexität</td>
                <td className="p-3">Variable Lastprofile, hohe Leistungspreise</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Offsite-PPA</td>
                <td className="p-3">Keine CAPEX, CO₂-Reduktion vertraglich</td>
                <td className="p-3">Preis-/Mengen-/Ausgleichsenergierisiken</td>
                <td className="p-3">Standorte ohne Dachfläche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          {faqItems.map((it, i) => (
            <div key={i}>
              <h3 className="font-semibold">{it.q}</h3>
              <p>{it.a}</p>
            </div>
          ))}
        </div>

        {/* FAQ Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: { "@type": "Answer", text: it.a },
              })),
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Wie planen Firmen PV & Speicher wirtschaftlich?</strong> Richte die Anlagengröße an deinem Lastprofil aus,
          maximiere den Eigenverbrauch und nutze einen Speicher für Peak Shaving. Prüfe EEG-Sätze und KfW-Finanzierung und
          kalkuliere konservativ – dann ist eine Amortisation im einstelligen bis niedrigen zweistelligen Jahresbereich
          realistisch.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Du möchtest wissen, wie PV & Speicher in deinem Unternehmen rechnen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir analysieren Lastgänge, dimensionieren Anlage & Speicher und liefern dir eine belastbare ROI-Kalkulation.
          </p>

          <form className="mx-auto grid max-w-xl gap-3 text-left" role="group" aria-describedby="cta-note">
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
              Mit Absenden des Formulars akzeptierst du unsere Datenschutzbedingungen.
            </p>
          </form>
        </div>

        {/* Pop-up (Modal) */}
        <div id="cta-pop" className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex">
          {/* Klick auf Overlay schließt wieder */}
          <a href="#" className="absolute inset-0 bg-black/50" aria-label="Overlay schließen" />

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
              In diesem Beispiel-Blogartikel funktionieren die Links nicht. Möchtest du solch ein Projekt auch für dein
              Angebot umsetzen?{" "}
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
            <a className={`hover:underline ${accent}`} href="/blog/lastmanagement-peak-shaving">
              Lastmanagement & Peak Shaving: So senkst du Leistungspreise
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/ladeinfrastruktur-mit-pv">
              Ladeinfrastruktur mit PV & Speicher: Praxisleitfaden
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/energieeinkauf-ppa">
              PPA verstehen: Strombezug mit Planbarkeit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/solarpaket-1-unternehmen">
              Solarpaket I für Unternehmen: Die wichtigsten Änderungen
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Photovoltaik & Speicher im Unternehmen
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
              {[
                ["Eigenverbrauch", "Anteil des erzeugten Solarstroms, den du direkt im Betrieb nutzt."],
                ["Teileinspeisung", "Du verbrauchst einen Teil selbst und speist Überschüsse ins Netz ein (EEG-Vergütung)."],
                ["Volleinspeisung", "Gesamte Erzeugung wird eingespeist; du beziehst deinen Strom weiter aus dem Netz."],
                ["Peak Shaving", "Kappen teurer Lastspitzen durch kurzzeitige Speicherleistung, um Netzkosten zu senken."],
                ["LCOE", "Levelized Cost of Electricity: durchschnittliche Stromgestehungskosten über die Lebensdauer der Anlage."],
                ["EMS", "Energiemanagementsystem: steuert PV, Speicher, Verbraucher und ggf. Ladepunkte."],
              ].map(([term, expl]) => (
                <tr className="border-t border-zinc-200" key={term}>
                  <td className="p-3 font-medium text-zinc-900">{term}</td>
                  <td className="p-3 text-zinc-700">{expl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Über den Autor</h2>
        <div className="flex items-center gap-4">
          <img
            src="/autor-lennart-mueller.webp"
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">Lennart Müller</div>
            <div className="text-sm text-zinc-700">
              Energieberater mit Fokus auf PV-Projekte im Mittelstand, Lastmanagement & Finanzierung.
            </div>
            <a href="https://www.linkedin.com/in/lennartmueller" className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Dr. Jana Köhler</strong> – Energieökonomin (PV & Speicher).
            <a href="https://www.linkedin.com" className={`hover:underline ${accent} ml-2`}>
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
            Bundesnetzagentur – EEG-Förderung & Fördersätze (feste Vergütung bis 100 kW, Marktprämie/Direktvermarktung).
          </li>
          <li>
            Finanztip – Einspeisevergütung 2025 (Teileinspeisung/Volleinspeisung; aktuelle Werte).
          </li>
          <li>
            photovoltaik.org – Einspeisevergütung 2025 (Detailklassen & Zeiträume).
          </li>
          <li>
            KfW – Photovoltaik für Unternehmen & Programm 270 (Förderkredite, Konditionen).
          </li>
         <li>
  BMWK – Solarpaket I (u. a. +1,5 ct/kWh für &gt;40 kW Dachanlagen; Entbürokratisierung).
</li>

          <li>
            Fraunhofer ISE – LCOE-Studie & Presseinfo (PV/PV+Speicher vs. konventionell).
          </li>
          <li>
            Strom-Report – Gewerbestrompreis Ø August 2025 (Neuabschlüsse).
          </li>
          <li>
            DEHSt/UBA – Nationaler Emissionshandel (CO₂-Preis 55 €/t in 2025).
          </li>
        </ul>
      </section>

      {/* Strukturierte Daten: Article + Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "de-DE",
            datePublished: published,
            dateModified: modified,
            author: { "@type": "Person", name: author.name },
            publisher: {
              "@type": "Organization",
              name: "Musterfirma GmbH",
              logo: {
                "@type": "ImageObject",
                url: "https://www.beispiel.de/logo.png",
                width: 512,
                height: 512,
              },
            },
            image: [
              "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
            ],
            mainEntityOfPage: "https://www.beispiel.de/blog/green-energy-photovoltaik-speicher",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Musterfirma GmbH",
            url: "https://www.beispiel.de",
            sameAs: ["https://www.linkedin.com/company/musterfirma/"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beispielstraße 1",
              postalCode: "10115",
              addressLocality: "Berlin",
              addressCountry: "DE",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+49-30-123456",
                contactType: "customer service",
                availableLanguage: ["German"],
              },
            ],
          }),
        }}
      />
    </article>
  );
}

