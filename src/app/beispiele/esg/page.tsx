// src/app/blog/csrd-esrs-2025/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "ESG-Reporting Manager (CSRD/ESRS)",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Chief Sustainability Officer (CSO)",
  linkedin: "https://linkedin.com",
};

const publisher = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
  logo: "/favicon.ico",
};

export const metadata: Metadata = {
  title:
    "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
  description:
    "Praxisleitfaden für den Mittelstand: doppelte Wesentlichkeit, Datenprozesse, KPIs, EU-Taxonomie, Scope-3 und eine klar strukturierte Roadmap bis zum Nachhaltigkeitsbericht.",
  alternates: { canonical: "https://www.beispiel.de/blog/csrd-esrs-2025" },
  openGraph: {
    type: "article",
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden für den Mittelstand: doppelte Wesentlichkeit, Datenprozesse, KPIs, EU-Taxonomie, Scope-3 und Roadmap.",
    url: "https://www.beispiel.de/blog/csrd-esrs-2025",
    images: [
      {
        url: "/nachhaltiges-windrad.jpg",
        width: 1600,
        height: 600,
        alt: "Windrad als Symbol für nachhaltige Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
    description:
      "Praxisleitfaden für mittelständische B2B-Unternehmen: doppelte Wesentlichkeit, Datenprozesse, KPIs & Roadmap.",
    images: ["/nachhaltiges-windrad.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "CSRD & ESRS 2025: Was mittelständische B2B-Unternehmen jetzt konkret umsetzen müssen",
            description:
              "Praxisleitfaden für den Mittelstand: doppelte Wesentlichkeit, Datenprozesse, KPIs, EU-Taxonomie, Scope-3 und eine Roadmap zum Nachhaltigkeitsbericht.",
            inLanguage: "de-DE",
            image: [
              "https://www.beispiel.de/nachhaltiges-windrad.jpg",
              "https://www.beispiel.de/nachhaltigkeit.jpg",
              "https://www.beispiel.de/ms-neu.jpg",
            ],
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            datePublished: "2025-08-27",
            dateModified: "2025-08-27",
            publisher: {
              "@type": "Organization",
              name: publisher.name,
              logo: {
                "@type": "ImageObject",
                url: "https://www.beispiel.de/favicon.ico",
              },
            },
            mainEntityOfPage:
              "https://www.beispiel.de/blog/csrd-esrs-2025",
          }),
        }}
      />
      {/* JSON-LD: Organization (Company Schema Markup) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: publisher.name,
            url: "https://www.beispiel.de",
            email: publisher.email,
            telephone: publisher.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: publisher.address,
              addressLocality: "—",
              postalCode: "—",
              addressCountry: "DE",
            },
            logo: "https://www.beispiel.de/favicon.ico",
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
            CSRD &amp; ESRS 2025: Was Unternehmen konkret umsetzen müssen – der
            Praxisleitfaden für den Mittelstand
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst 2025 einen konformen Nachhaltigkeitsbericht liefern? Hier
            findest du – klar und praxisnah – alles zu doppelter
            Wesentlichkeit, Datenprozessen, KPIs, EU-Taxonomie, Scope-3 und
            einer Roadmap bis zur Prüfung.
          </p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-27">27.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">12 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/nachhaltiges-windrad.jpg"
                />
                <img
                  fetchPriority="high"
                  decoding="async"
                  src="/nachhaltiges-windrad.jpg"
                  alt="Windrad über grüner Landschaft – Sinnbild für Nachhaltigkeit und Transformation"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Titelbild: Nachhaltigkeit strategisch umsetzen
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
          <h2 className="text-lg font-semibold mb-3">
            Das Wichtigste auf einen Blick
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>CSRD-Pflichten:</strong> Große Unternehmen berichten
              bereits ab GJ 2024; für viele „Wave 2 &amp; 3“-Unternehmen wurden
              die Starttermine 2025/2026 um zwei Jahre verschoben. Prüfe deinen
              Status jetzt und plane mit realistischen Kapazitäten. :contentReference[oaicite:0]{index=0}
            </li>
            <li>
              <strong>Doppelte Wesentlichkeit zuerst:</strong> Materialität
              entscheidet, welche ESRS-Themen (z. B. Klima E1, Arbeit S1,
              Unternehmensführung G1) du 2025 wirklich berichten musst – mit
              sauber dokumentierter Methodik. :contentReference[oaicite:1]{index=1}
            </li>
            <li>
              <strong>Datenprozesse &amp; KPIs:</strong> Baue früh ein
              belastbares Datengerüst (Aktivitäten, Verantwortungen, Kontrollen)
              für Kern-KPIs wie Scope-1/2/3, Energie, Taxonomie-Umsatz/CapEx/OpEx
              und Social-Kennzahlen. 
            </li>
            <li>
              <strong>Transitional Reliefs nutzen:</strong> &lt;750 MA können
              im ersten Jahr Scope-3 und Teile von S/E-Standards auslassen –
              mit klarer Begründung und Plan zum Nachziehen. 
            </li>
            <li>
              <strong>Prüfung &amp; Digital:</strong> Es gilt (zunächst)
              Limited Assurance; Digital-Tagging per Inline-XBRL folgt mit ESMA-RTS.
              Plane frühzeitig Tooling &amp; Kontrollen. :contentReference[oaicite:4]{index=4}
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
              <a className={`hover:underline ${accent} font-medium`} href="#was-ist-csrd-esrs">
                Was ist CSRD &amp; ESRS – und ab wann gilt was?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#doppelte-wesentlichkeit">
                Doppelte Wesentlichkeitsanalyse verständlich erklärt
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#datenprozesse-kpis">
                Datenprozesse &amp; KPIs: Das Pflicht-Set 2025
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#scope3-praxis">
                Scope-3 in der Praxis (mit Quick Wins)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#taxonomie">
                EU-Taxonomie: Umsatz, CapEx, OpEx richtig berichten
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#lkSG-csddd">
                LkSG &amp; CSDDD: Wie Lieferkettenregeln ins Bild passen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#roadmap">
                Roadmap bis zum Bericht – Quartal für Quartal
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
        <section id="was-ist-csrd-esrs" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Was ist CSRD &amp; ESRS – und ab wann gilt was?
          </h2>
          <p className="leading-relaxed">
            Die Corporate Sustainability Reporting Directive (CSRD) erweitert die
            Nachhaltigkeitsberichterstattung in der EU massiv. Berichtet wird
            nach den European Sustainability Reporting Standards (ESRS). „Wave 1”
            – vor allem bisher NFRD-pflichtige Unternehmen – berichten ab
            GJ 2024. Für „Wave 2 &amp; 3” hat der Gesetzgeber 2025 eine
            zweijährige Pause („Stop-the-Clock“) beschlossen, um Erleichterungen
            umzusetzen. Prüfe daher genau, ob du 2025 bereits berichtest – oder
            ob dein Start in 2027/2028 liegt. :contentReference[oaicite:5]{index=5}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">ESRS auf einen Blick</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>ESRS 1 (Grundlagen), ESRS 2 (Allgemeine Angaben)</li>
                <li>Umwelt: E1–E5 (Klima, Verschmutzung, Wasser, Biodiversität, Ressourcennutzung)</li>
                <li>Soziales: S1–S4 (Eigene Belegschaft, Wertschöpfungskette, Betroffene, Kunden)</li>
                <li>Governance: G1 (Geschäftsgebaren)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Wichtige 2025-Updates</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  „Quick-Fix“ für Wave-1: mehr Flexibilität, weniger Last bei
                  gleichbleibenden Kernanforderungen. :contentReference[oaicite:6]{index=6}
                </li>
                <li>
                  EFRAG arbeitet an vereinfachten ESRS-Entwürfen (Sommer 2025).
                  :contentReference[oaicite:7]{index=7}
                </li>
                <li>
                  Omnibus-Vorschläge prüfen u. a. den Fokus auf sehr große
                  Unternehmen &gt;1.000 MA. :contentReference[oaicite:8]{index=8}
                </li>
              </ul>
            </div>
          </div>

          {/* Bild 1 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/nachhaltigkeit.jpg" />
                <img
                  loading="lazy"
                  src="/nachhaltigkeit.jpg"
                  alt="Teamwork am Whiteboard – Fahrplan für die CSRD-Umsetzung"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Strategie vor Reporting: erst Materialität und Prozesse, dann KPIs
              und Bericht.
            </figcaption>
          </figure>
        </section>

        <section id="doppelte-wesentlichkeit" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Doppelte Wesentlichkeitsanalyse verständlich erklärt
          </h2>
          <p>
            „Doppelt“ bedeutet: Du bewertest <em>Impact</em> (Auswirkungen deines
            Geschäfts auf Umwelt &amp; Menschen) und <em>Financial</em>
            (Nachhaltigkeits-Risiken &amp; -Chancen für dein Geschäft). Nur was
            dabei wesentlich ist, musst du nach ESRS berichten – und zwar
            nachvollziehbar, mit Methode, Stakeholder-Einbindung und klaren
            Schwellen. :contentReference[oaicite:9]{index=9}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">So gehst du vor (5 Schritte)</h3>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Scope &amp; Stakeholder festlegen (inkl. Wertschöpfungskette)</li>
                <li>Brutto-Themenliste: ESRS-Themen + branchenspezifisch ergänzen</li>
                <li>
                  Bewertungsmatrix (Impact/Financial) mit Skalen, Quellen &amp;
                  Evidenzen
                </li>
                <li>
                  Wesentlichkeitsschwellen definieren, dokumentieren, beschließen
                </li>
                <li>
                  Ergebnis in <strong>ESRS 2</strong> offenlegen (Governance,
                  Strategie, Prozesse)
                </li>
              </ol>
              <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                <p className="text-sm">
                  Tipp: Für Social-Themen (S1–S4) ist die Beziehung der
                  Stakeholder zum Unternehmen entscheidend (nicht die operative
                  Kontrolle). :contentReference[oaicite:10]{index=10}
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Dokumentation, die hält</h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Methodenpapier &amp; Bewertungslogik</li>
                <li>Stakeholder-Map &amp; Protokolle</li>
                <li>Quellen/Evidenzen je Thema</li>
                <li>Board-Entscheid (Freigabe)</li>
              </ul>
            </aside>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Materialität ist kein Buzzword, sondern dein zentrales
              Effizienz-Hebel: Sie trennt Muss-Angaben von Nice-to-Have – und
              spart dir Monate an Datensammelei.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Max Mustermann, direktes Zitat
            </figcaption>
          </figure>
        </section>

        <section id="datenprozesse-kpis" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Datenprozesse &amp; KPIs: Das Pflicht-Set 2025
          </h2>
          <p>
            Für mittelständische B2B-Unternehmen empfiehlt sich ein schlankes,
            aber prüffestes KPI-Set. Starte mit Datenverantwortungen (RACI),
            Datendefinitionen (Glossar), Messmethoden und Kontrollen – bevor du
            Tools automatisierst. Denke parallel an Prüfpfade (Limited
            Assurance), denn deine Daten werden extern geprüft. :contentReference[oaicite:11]{index=11}
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left p-3 font-semibold">KPI-Bereich</th>
                  <th className="text-left p-3 font-semibold">Relevante ESRS</th>
                  <th className="text-left p-3 font-semibold">Was 2025 zählt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Klima &amp; Energie</td>
                  <td className="p-3">E1, ESRS 2</td>
                  <td className="p-3">
                    Scope-1/2 (Standorte, Fuhrpark), erste Scope-3-Hotspots,
                    Energiekonsum &amp; -intensität, Ziele/Pläne. :contentReference[oaicite:12]{index=12}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">EU-Taxonomie</td>
                  <td className="p-3">Art. 8 Taxonomie</td>
                  <td className="p-3">
                    Umsatz/CapEx/OpEx: eligible vs. aligned – Methodik und
                    Annahmen sauber darlegen. 
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Soziales</td>
                  <td className="p-3">S1 (ggf. S2–S4)</td>
                  <td className="p-3">
                    Aufbau Kern-Kennzahlen (Fluktuation, Arbeitssicherheit,
                    Trainings, Diversität) nach Materialität.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Governance</td>
                  <td className="p-3">G1, ESRS 2</td>
                  <td className="p-3">
                    Richtlinien, Korruptionsprävention, Lieferanten-Code of
                    Conduct, Whistleblowing-Prozesse.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Phase-ins &amp; Erleichterungen</h3>
              <p className="text-sm">
                Unternehmen &lt;750 MA können in Jahr 1 Scope-3 sowie alle
                S-Angaben (S1) und Biodiversität (E4) vorübergehend auslassen;
                in Jahr 2 sind weitere Erleichterungen möglich. Dokumentiere
                dein Vorgehen transparent. 
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Digital-Tagging (Inline-XBRL)</h3>
              <p className="text-sm">
                CSRD sieht digitalisierte, maschinenlesbare Berichte vor.
                Verpflichtendes Tagging greift, sobald ESMA die ESEF-RTS
                finalisiert – frühestens auf 2025-Daten. Plane das Mapping zur
                ESRS-Taxonomie jetzt. 
              </p>
            </div>
          </div>
        </section>

        <section id="scope3-praxis" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Scope-3 in der Praxis</h2>
          <p>
            Ohne Scope-3 geht es langfristig nicht. Starte pragmatisch:
            konsumiere Sekundärdaten (Emission-Faktoren) dort, wo Primärdaten
            (Lieferanten) noch fehlen, und fokussiere 3–5 Kategorien mit
            größtem Einfluss (z. B. eingekaufte Güter, Transport, Nutzung
            verkaufter Produkte). 
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                Quick-Wins für das erste Berichtsjahr
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Spend-basiert starten, dann sukzessive Primärdaten einholen</li>
                <li>Lieferanten-Onboarding mit Datenanforderungen &amp; FAQ</li>
                <li>Kategorien priorisieren, Reduktionspfad an KPIs koppeln</li>
                <li>Schätzungen sauber kennzeichnen (Methodik/Unsicherheit)</li>
              </ul>
            </div>

            <aside className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Do’s &amp; Don’ts</h3>
              <ul className="text-sm space-y-1">
                <li className="flex gap-2">
                  <span className="font-medium">Do:</span> Datenherkunft,
                  Versionen, Verantwortliche festhalten
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Don’t:</span> Werte ohne
                  Unschärfe angeben
                </li>
              </ul>
            </aside>
          </div>

          {/* Bild 2 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/ms-neu.jpg" />
                <img
                  loading="lazy"
                  src="/ms-neu.jpg"
                  alt="Dashboard mit Emissionsdaten – Beispiel für Scope-3-Steuerung"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Visualisiere Hotspots – und verknüpfe sie mit Maßnahmen &amp;
              Lieferanten-Engagement.
            </figcaption>
          </figure>
        </section>

        <section id="taxonomie" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            EU-Taxonomie: Umsatz, CapEx, OpEx richtig berichten
          </h2>
          <p>
            Nicht nur <em>eligible</em>, sondern auch <em>aligned</em> zählt:
            Du offenlegst, wie viel deines Umsatzes, deiner Investitionen
            (CapEx) und deiner laufenden Aufwendungen (OpEx) mit
            Taxonomie-konformen Aktivitäten verknüpft ist (Art. 8-DA). Halte die
            Methodik (Screening, DNSH, Mindestschutz) transparent. 
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-1">So gehst du vor</h3>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Aktivitäten mappen (eligible / non-eligible)</li>
                  <li>Technische Kriterien prüfen (aligned ja/nein)</li>
                  <li>KPIs für Umsatz/CapEx/OpEx berechnen</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Typische Stolpersteine</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Unklare Denominatoren/Zuordnungen</li>
                  <li>DNSH-Nachweise lückenhaft</li>
                  <li>CapEx-Pläne nicht dokumentiert</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Praxis-Benchmark</h3>
                <p>
                  Durchschnittliche Alignments sind niedrig – wichtig ist die
                  Richtung und die Qualität der Nachweise. :contentReference[oaicite:18]{index=18}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lkSG-csddd" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            LkSG &amp; CSDDD: Wie Lieferkettenregeln ins Bild passen
          </h2>
          <p>
            In Deutschland gilt das LkSG ab 2024 ab 1.000 Mitarbeitenden. EU-weit
            schafft die CSDDD einen Rahmen für menschenrechtliche und
            umweltbezogene Sorgfaltspflichten; die Richtlinie ist in Kraft,
            nationale Umsetzungen laufen. Berichte und Due-Diligence-Prozesse
            lassen sich verzahnen – z. B. über Lieferanten-Code, Risiko-Scorings
            und Abhilfemaßnahmen. 
          </p>
          <div className="mt-4 rounded-xl border border-zinc-200 p-4">
            <p className="text-sm">
              Hinweis: 2025 werden im Rahmen des Omnibus-Pakets weitere
              Entlastungen diskutiert (z. B. geringere Nachweispflichten für KMU
              in Wertschöpfungsketten). Behalte nationale Leitfäden im Blick. :contentReference[oaicite:20]{index=20}
            </p>
          </div>
        </section>

        <section id="roadmap" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Roadmap bis zum Nachhaltigkeitsbericht (Mittelstand)
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold w-40">Quartal</th>
                  <th className="p-3 text-left font-semibold">Ziele</th>
                  <th className="p-3 text-left font-semibold">Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Q3/2025</td>
                  <td className="p-3">
                    Projekt aufsetzen, Governance, Zeitplan, Budget
                  </td>
                  <td className="p-3">RACI, Projektplan, Richtlinien-Review</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Q4/2025</td>
                  <td className="p-3">
                    Doppelte Wesentlichkeit abschließen, KPI-Set fixieren
                  </td>
                  <td className="p-3">
                    Materialitätsreport, Datenmodell, Erhebungs-Templates
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Q1/2026</td>
                  <td className="p-3">
                    Datenerhebung, Lieferantendaten, Taxonomie-Mapping
                  </td>
                  <td className="p-3">KPI-Dashboards, Audit-Trail, Controls</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Q2/2026</td>
                  <td className="p-3">
                    Entwurf Nachhaltigkeitsbericht (ESRS-Struktur), Tagging-Pilot
                  </td>
                  <td className="p-3">Draft, XBRL-Mapping, Management-Review</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Q3/2026</td>
                  <td className="p-3">
                    Limited Assurance vorbereiten, Korrekturen/Verbesserungen
                  </td>
                  <td className="p-3">
                    Prüfer-Packages, Nachweise, Maßnahmenplan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/doppelte-wesentlichkeit-guide"
                >
                  Doppelte Wesentlichkeit Schritt-für-Schritt
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/eu-taxonomie-kpi-beispiele"
                >
                  EU-Taxonomie: KPI-Beispiele &amp; Vorlagen
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/scope-3-datenquellen"
                >
                  Scope-3 im Mittelstand: Datenquellen &amp; Faktoren
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/csrd-xbrl-tagging"
                >
                  CSRD Digital-Tagging (Inline-XBRL) erklärt
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
                Betrifft die CSRD 2025 mein mittelständisches B2B-Unternehmen?
              </h3>
              <p>
                Kommt darauf an: „Wave 2 &amp; 3“ wurde per „Stop-the-Clock“
                um zwei Jahre verschoben. Prüfe Größe/Listing und nationale
                Umsetzung – manche Unternehmen sind dennoch früher betroffen
                (z. B. als Tochter in Konzernabschlüssen). :contentReference[oaicite:21]{index=21}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Muss ich 2025 schon ein digitales Tagging liefern?
              </h3>
              <p>
                Tagging wird mit den ESMA-RTS verbindlich. Bereite dich vor
                (Taxonomie-Mapping, Tools), auch wenn die Pflicht erst mit
                Wirksamwerden der RTS greift. 
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Gilt Scope-3 direkt – oder gibt es Übergangsregeln?
              </h3>
              <p>
                Für &lt;750 Mitarbeitende gibt es Erleichterungen im ersten
                Jahr. Mittelstand sollte Scope-3 aber früh aufsetzen, um
                Lieferanten zu onboarden und Hotspots zu steuern. 
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Prüfung verlangt die CSRD?
              </h3>
              <p>
                Es gilt Limited Assurance. Eine Ausweitung auf Reasonable
                Assurance ist (Stand 2025) perspektivisch diskutiert; setze
                dennoch auf saubere Kontrollen und Nachweise. :contentReference[oaicite:24]{index=24}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie kombiniere ich CSRD, LkSG und CSDDD effizient?
              </h3>
              <p>
                Baue ein integriertes Due-Diligence-System: Lieferanten-Code,
                Risiko-Scorings, Maßnahmen, Beschwerdemechanismus – und verknüpfe
                es mit ESRS-Angaben zu S/G-Themen. 
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
                    name:
                      "Betrifft die CSRD 2025 mein mittelständisches B2B-Unternehmen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Per Stop-the-Clock (April 2025) wurden Starttermine für Wave 2 & 3 um zwei Jahre verschoben. Prüfe Größe/Listing und nationale Umsetzung sowie Konzernbezüge.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Muss ich 2025 schon ein digitales Tagging liefern?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Digital-Tagging wird mit den ESMA-RTS verbindlich. Vorbereitung (Taxonomie-Mapping, Tools) sollte 2025 starten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Gilt Scope-3 direkt – oder gibt es Übergangsregeln?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Für Unternehmen mit <750 Mitarbeitenden gibt es Erleichterungen im ersten Jahr. Trotzdem früh mit Scope-3 anfangen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Prüfung verlangt die CSRD?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Limited Assurance ist Pflicht; erhöhte Prüfungsniveaus sind in Diskussion.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Wie kombiniere ich CSRD, LkSG und CSDDD effizient?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ein integriertes Due-Diligence-System (Lieferanten-Code, Risiko-Scorings, Abhilfe, Beschwerde) kann Berichte und Pflichten verbinden.",
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
              CSRD &amp; ESRS lassen dir 2025 zwar mehr Luft – aber nur, wenn
              du strukturiert vorgehst.
            </strong>{" "}
            Beginne mit der doppelten Wesentlichkeit, stelle ein schlankes
            KPI-Set auf, nutze Übergangsregeln bewusst, kläre Taxonomie-KPIs und
            bereite Limited Assurance sowie Digital-Tagging vor. So wird aus
            Pflicht ein Wettbewerbsvorteil.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Wie startest du am effizientesten mit CSRD &amp; ESRS?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir unterstützen dich bei Materialität, KPI-Set, EU-Taxonomie und
              Audit-Vorbereitung – pragmatisch und mittelstandstauglich.
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
                  className={`font-medium underline ${accent}`}
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
            Mini-Glossar – Die wichtigsten Begriffe zu CSRD &amp; ESRS
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
                  <td className="p-3 font-medium text-zinc-900">CSRD</td>
                  <td className="p-3 text-zinc-700">
                    EU-Richtlinie, die die Nachhaltigkeitsberichterstattung
                    (Umwelt, Soziales, Governance) stark ausweitet.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">ESRS</td>
                  <td className="p-3 text-zinc-700">
                    Standards, nach denen du gemäß CSRD berichtest (E, S, G +
                    Querschnitt ESRS 1/2).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Doppelte Wesentlichkeit
                  </td>
                  <td className="p-3 text-zinc-700">
                    Kombination aus Wirkung auf Umwelt/Menschen und finanzieller
                    Relevanz für dein Geschäft.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Scope-3</td>
                  <td className="p-3 text-zinc-700">
                    Indirekte Emissionen entlang der Wertschöpfungskette
                    (z. B. Lieferanten, Transport, Nutzung).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    EU-Taxonomie
                  </td>
                  <td className="p-3 text-zinc-700">
                    System zur Einstufung ökologisch nachhaltiger Aktivitäten;
                    offenlegt werden u. a. Umsatz/CapEx/OpEx.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Limited Assurance
                  </td>
                  <td className="p-3 text-zinc-700">
                    Externe Prüfung mit moderater Sicherheit – gilt als
                    Mindestanforderung für CSRD-Berichte.
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
              src="/Autorenbild.jpg"
              alt="Autor: Max Mustermann"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">{author.role}</div>
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
              Überprüft von:{" "}
              <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
              European Commission – Corporate sustainability reporting (Policy
              timeline &amp; Quick-Fix/Omnibus/Stop-the-Clock):
              https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en
            </li>
            <li>
              EUR-Lex – Directive (EU) 2025/794 („Stop-the-Clock“ – Verschiebung
              für Wave 2 &amp; 3):
              https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025L0794
            </li>
            <li>
              EUR-Lex – ESRS (Delegated Regulation (EU) 2023/2772 – Erstes
              Set):
              https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L:2023:202
            </li>
            <li>
              EFRAG – Implementation Guidance: Value Chain (IG 2):
              https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/EFRAG%20IG%202%20Value%20Chain_final.pdf
            </li>
            <li>
              European Commission – FAQ zu CSRD (Schätzungen/Anwendung/Scope):
              https://finance.ec.europa.eu/publications/frequently-asked-questions-implementation-eu-corporate-sustainability-reporting-rules_en
            </li>
            <li>
              PwC / Deloitte – Assurance &amp; 2025 Quick-Fix/Omnibus
              (Überblick):
              https://www.pwc.com/us/en/ghosts/european-unions-corporate-sustainability-reporting-directive.html
              ,{" "}
              https://dart.deloitte.com/USDART/home/publications/deloitte/heads-up/2025/european-sustainability-omnibus-reporting-standards
            </li>
            <li>
              EUR-Lex – Delegated Regulation (EU) 2021/2178 (Taxonomie Art. 8 –
              KPIs):
              https://eur-lex.europa.eu/eli/reg_del/2021/2178/oj/eng
            </li>
            <li>
              BAFA – LkSG: Ausweitung Anwendungsbereich (ab 2024 &gt;1.000 MA):
              https://www.bafa.de/SharedDocs/Pressemitteilungen/DE/Lieferketten/2023_20_ausweitung_anwendungsbereich.html
            </li>
            <li>
              Rat der EU – CSDDD final angenommen:
              https://www.consilium.europa.eu/en/press/press-releases/2024/05/24/corporate-sustainability-due-diligence-council-gives-its-final-approval/
            </li>
            <li>
              EFRAG – Digital Reporting with XBRL (ESRS-Taxonomie &amp; RTS):
              https://www.efrag.org/en/sustainability-reporting/esrs-workstreams/digital-reporting-with-xbrl
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
