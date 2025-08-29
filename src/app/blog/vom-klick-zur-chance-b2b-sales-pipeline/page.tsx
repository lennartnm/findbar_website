// src/app/blog/vom-klick-zur-chance-b2b-sales-pipeline/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist & Gründer von findbar",
  image: "/lennart-niehausmeier.webp",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
};

const site = {
  name: "Findbar",
  url: "https://www.findbar.info",
  logo: "https://www.findbar.info/icon.png",
  address: "Am Rabenecksiek 5, 32139 Spenge, Germany",
  email: "lennart@findbar.info",
};

export const metadata: Metadata = {
  title:
    "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
  description:
    "Wie du mit Content Vertrauen aufbaust, Kaltakquise schlägst und Entscheider von Information über Consideration bis Decision führst – praxisnah erklärt.",
  alternates: {
    canonical:
      "https://www.findbar.info/blog/vom-klick-zur-chance-b2b-sales-pipeline",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    siteName: site.name,
    url:
      "https://www.findbar.info/blog/vom-klick-zur-chance-b2b-sales-pipeline",
    title:
      "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
    description:
      "Warum Vertrauen Kaltakquise schlägt und wie Content Entscheider von Information über Consideration bis Decision führt.",
    images: [
      {
        url:
          "https://www.findbar.info/vertrauen-beim-verkauf-ist-essentiell.jpg",
        width: 1600,
        height: 600,
        alt: "Vertrauen ist beim B2B-Verkauf essenziell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
    description:
      "Warum Vertrauen Kaltakquise schlägt und wie Content Entscheider durch die Journey führt.",
    images: [
      "https://www.findbar.info/vertrauen-beim-verkauf-ist-essentiell.jpg",
    ],
  },
};

export default function Page() {
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
          Vom Klick zur Chance: So baut Content eine verlässliche B2B-Sales-Pipeline – einfach
          erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Warum Vertrauen Kaltakquise schlägt – und wie du Entscheider entlang der Reise von
          Informational über Consideration bis Decision führst.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-28">28.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/vertrauen-beim-verkauf-ist-essentiell.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/vertrauen-beim-verkauf-ist-essentiell.jpg"
                alt="Zwei Entscheider schütteln sich die Hand – Vertrauensaufbau im B2B-Verkauf"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">Vertrauen als Wachstumshebel im B2B-Vertrieb</figcaption>
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Content schafft <strong>Vertrauen</strong> und Sichtbarkeit – damit du früher in die
            Auswahl kommst und nicht erst anrufst, wenn die Entscheidung praktisch gefallen ist.
          </li>
          <li>
            Baue deine Pipeline entlang der Journey: <strong>Informational</strong> (Problem
            verstehen), <strong>Consideration</strong> (Lösungswege), <strong>Decision</strong>{" "}
            (Angebot &amp; Proof).
          </li>
          <li>
            Kombiniere <strong>Thought Leadership</strong>, praktische Guides und Proof-Formate
            (Cases, Zahlen, Demos), statt nur Features zu bewerben.
          </li>
          <li>
            Miss Wirkung mit <strong>Leading Indicators</strong> (Qualität der Sessions,
            wiederkehrende Besucher, Content-Tiefe) – nicht nur mit MQL-Zahlen.
          </li>
          <li>
            Verzahne Marketing &amp; Sales: Definiere gemeinsame <strong>Hand-Off-Signale</strong>,
            pflege <strong>Content-Pfadlogiken</strong> und nutze <strong>Playbooks</strong> für
            Social Selling &amp; Follow-ups.
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
            <a className={`hover:underline ${accent} font-medium`} href="#warum-content-pipeline">
              Warum Content eine Pipeline baut – und Kaltakquise selten
              mithält
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#buyers-journey">
              Die Reise des Entscheiders: Informational → Consideration → Decision
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#vertrauen-statt-kalt">
              Vertrauen statt Kaltakquise: Psychologie, Social Proof, Risikoabbau
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#content-architektur">
              Content-Architektur: Was braucht es pro Phase?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#distribution">
              Distribution &amp; Touchpoints: SEO, Social, E-Mail, Events
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#messung">
              Messen &amp; optimieren: KPIs, Lead-Signale, Attribution
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#playbooks">
              Playbooks für Marketing &amp; Sales: Vom Klick zur Chance
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faqs">
              Häufige Fragen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
              Kurzfazit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#quellen">
              Quellen
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="warum-content-pipeline" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Warum Content eine Pipeline baut – und Kaltakquise selten mithält
        </h2>
        <p className="leading-relaxed">
          Kaltakquise ist ein Sprint. Content ist ein System. Wer heute B2B-Entscheider gewinnen
          will, muss ihre Art der Informationssuche respektieren: Sie recherchieren selbstständig,
          vergleichen anonym und bilden früh Präferenzen. Wenn du in dieser Phase nicht mit
          relevanten, vertrauenswürdigen Inhalten präsent bist, erreichst du sie später kaum noch –
          egal wie hart das Outbound-Team wählt, wann es anruft oder wie spitz die Liste ist. Der
          Unterschied: Content senkt gefühltes Risiko, baut Kompetenz auf und bringt dich auf die
          Shortlist, bevor der erste Termin entsteht.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="font-semibold text-lg mb-2">Pipeline-Hebel durch Content</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Frühzeitige Sichtbarkeit bei Problemsuche &amp; Lösungsrecherche</li>
            <li>Vertrauensaufbau durch Expertise, Belege und klare Sprache</li>
            <li>Mehr qualifizierte Erstgespräche statt Kaltkontakte ohne Kontext</li>
            <li>Planbare Nachfrage dank wiederholbarer Content-Formate</li>
          </ul>
        </div>
      </section>

      {/* Bild 1 – volle Breite */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/verkauf-ohne-vertrauen-antrag-vergleich.jpg"
            />
            <img
              loading="lazy"
              src="/verkauf-ohne-vertrauen-antrag-vergleich.jpg"
              alt="Vergleich: Vertrieb ohne Vertrauen führt zu Reibung und Abbrüchen"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Ohne Vertrauen bleibt jeder Antrag ein Hindernislauf – Content räumt Hürden früh aus dem
          Weg.
        </figcaption>
      </figure>

      <section id="buyers-journey" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Die Reise des Entscheiders: Informational → Consideration → Decision
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-1">Informational</h3>
            <p className="text-sm">
              Der Entscheider versteht das Problem. Er sucht Definitionen, Ursachen, Benchmarks,
              Checklisten. Ziel: Orientierung und Vertrauen in deine Fachlichkeit.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-1">Consideration</h3>
            <p className="text-sm">
              Es geht um Lösungswege und Kriterien. Vergleiche, Frameworks, ROI-Skizzen, Tool-
              und Prozessalternativen helfen bei der Bewertung.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-1">Decision</h3>
            <p className="text-sm">
              Jetzt zählen Belege: Cases, Demos, Referenzen, Sicherheits- und Integrationsfragen,
              klare nächste Schritte.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <strong>Praxis-Tipp:</strong> Plane Content als <em>Pfade</em>, nicht als Einzelseiten.
          Jeder Beitrag sollte 1–2 logische nächste Schritte verlinken (Guide → Tool-Vergleich →
          Case → Demo).
        </div>
      </section>

      {/* Expertenzitat */}
      <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
        <blockquote className="text-lg font-medium">
          „B2B-Kaufentscheidungen sind Risikomanagement. Wer das Risiko mit exzellentem Content
          reduziert, wird eingeladen – wer nur klingelt, wird gefiltert.“
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-600">
          — Erfahrungswert aus 100+ Content-Projekten, indirektes Zitat
        </figcaption>
      </figure>

      <section id="vertrauen-statt-kalt" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Vertrauen statt Kaltakquise: Psychologie, Social Proof, Risikoabbau
        </h2>
        <p className="leading-relaxed">
          Content schlägt Kaltakquise nicht, weil Telefone schlecht sind – sondern weil Entscheider
          heute <em>vor</em> dem ersten Kontakt wissen möchten, ob du verstehst, was bei ihnen auf
          dem Spiel steht. Gute Inhalte greifen mentale Hürden auf: Unsicherheit über Nutzen und
          Aufwand, Angst vor Fehlentscheidungen, interne Alignment-Probleme. Mit klaren Belegen,
          nachvollziehbaren Beispielen und hilfreichen Tools machst du es leicht, „Ja“ zu sagen.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Die drei Säulen des Vertrauens</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Kompetenz:</strong> Klare Modelle, definierte Begriffe, nachvollziehbare
                Rechnungen.
              </li>
              <li>
                <strong>Integrität:</strong> Transparente Grenzen, ehrliche „Nicht für jeden“-Hinweise.
              </li>
              <li>
                <strong>Wohlwollen:</strong> Inhalte, die <em>wirklich</em> helfen – nicht nur
                verkaufen.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-2">Belege, die zählen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Vorher-Nachher-Kennzahlen (z.&nbsp;B. Zeitersparnis, Genauigkeit)</li>
              <li>Kundenzitate &amp; Referenzen mit Kontext</li>
              <li>Risiko-Umgang: Pilot, Kündigungsfristen, Security-Facts</li>
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
            <source media="(max-width: 640px)" srcSet="/online-meeting-ohne-vertrauen.jpg" />
            <img
              loading="lazy"
              src="/online-meeting-ohne-vertrauen.jpg"
              alt="Online-Meeting ohne Vertrauensbasis – kalter Start statt warmem Dialog"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Ohne vorbereitenden Content wird jedes Erstgespräch zur kalten Produktdemo.
        </figcaption>
      </figure>

      <section id="content-architektur" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Content-Architektur: Was braucht es pro Phase?</h2>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-48">Phase</th>
                <th className="text-left font-semibold p-3">Core-Formate</th>
                <th className="text-left font-semibold p-3 w-56">CTA &amp; Nächster Schritt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Informational</td>
                <td className="p-3">
                  „Was ist…?“-Artikel, Definitionen, Checklisten, Benchmarks, Problem-Diagnose,
                  kurze Videos, Glossare.
                </td>
                <td className="p-3">
                  Weiterführender Guide, Tool-Kalkulator, Newsletter-Opt-in für vertiefende Inhalte.
                </td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Consideration</td>
                <td className="p-3">
                  Lösungswege, Frameworks, Vergleichstabellen, ROI-Skizzen, Anwendungsfälle,
                  Webinare, Live-Q&amp;A.
                </td>
                <td className="p-3">Case Study, interaktiver ROI-Rechner, Termin zur Use-Case-Klärung.</td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Decision</td>
                <td className="p-3">
                  Referenzen, Demos, Proof-of-Concept, Integrations-Leitfäden, Security-Sheets,
                  Preis-Transparenz.
                </td>
                <td className="p-3">POC/Pilot, Angebot anfordern, Security/IT-Abgleich.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">SEO &amp; Intent</h3>
            <p className="text-sm">
              Baue Themencluster mit klaren Suchintentionen: Informations-Keywords für Definition
              &amp; Diagnose; Vergleichs-Keywords für Lösungsbewertung; Brand-/Produktkeywords für
              Kauf. Interne Verlinkung führt den Leser Schritt für Schritt.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-2">Proof-Formate</h3>
            <p className="text-sm">
              Cases mit Metriken, „Behind the Scenes“-Demos, Security-FAQ, Integrations-Blueprints –
              alles, was Risiko real senkt.
            </p>
          </div>
        </div>
      </section>

      <section id="distribution" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Distribution &amp; Touchpoints</h2>
        <p className="leading-relaxed">
          Content wirkt über Kanäle hinweg – wichtig ist die Reihenfolge und der Kontext. Nutze
          organische Suche für die Anbahnung, Social für Reichweite &amp; Persönlichkeit, E-Mail für
          Vertiefung und Events für Aktivierung. Das Ziel ist nicht Reichweite, sondern
          <em>relevante</em> Kontakte, die eine nächste, klar definierte Aktion machen.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">SEO &amp; Blog</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Antworten auf konkrete Fragen (Snippets, FAQ-Blöcke)</li>
              <li>Interne Verlinkung als „Leitplanke“ zur nächsten Aktion</li>
              <li>Evergreen-Assets regelmäßig aktualisieren</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Social &amp; Personal Brands</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Meinungen &amp; Learnings statt Produkt-Posts</li>
              <li>Serienformate (z.&nbsp;B. wöchentliches Mini-Case)</li>
              <li>Kommentieren &amp; Co-Create mit Kund:innen</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">E-Mail &amp; Events</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Nurtures nach Intent, nicht nach Stufe „MQL“</li>
              <li>Live-Demos, Clinics, Office Hours mit klarem Use Case</li>
              <li>Follow-up mit Ressourcensammlung statt „Nur mal nachfragen“</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="messung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Messen &amp; optimieren</h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Ziel</th>
                <th className="text-left font-semibold p-3">Leading Indicators</th>
                <th className="text-left font-semibold p-3">Lagging Indicators</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Vertrauen</td>
                <td className="p-3">Wiederkehrer-Rate, Scroll-Tiefe, Zeit pro Thema</td>
                <td className="p-3">Antwortquoten, Demo-Anfragen, Referenz-Nennungen</td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Pipeline</td>
                <td className="p-3">Qualität der Erstgespräche, Self-Reported Attribution</td>
                <td className="p-3">Win-Rate, Sales-Cycle-Dauer, ACV</td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Effizienz</td>
                <td className="p-3">Content-Nutzung durch Sales, No-Show-Rate</td>
                <td className="p-3">CAC, LTV/CAC, Ramp-Time neuer Reps</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <strong>Hinweis zur Attribution:</strong> Kombiniere modellierte Daten (Analytics,
          CRM-Touchpoints) mit <em>Self-Reported Attribution</em> auf Formularen (&bdquo;Wie hast du
          von uns gehört?&ldquo;). So erfasst du Dark-Social-Effekte ohne Überinstrumentierung.
        </div>
      </section>

      <section id="playbooks" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Playbooks für Marketing &amp; Sales</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Vom Klick zur Chance</h3>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Artikel beantwortet konkrete Frage &amp; bietet vertiefenden Guide an.</li>
              <li>
                Guide endet mit Case &amp; lädt zur Use-Case-Sprechstunde (15&nbsp;Min) ein.
              </li>
              <li>Sales sieht Intent-Signale (Seitenpfad, wiederkehrend, Ressourcen-DL).</li>
              <li>
                SDR folgt mit personalisiertem Pattern: „Ich habe gesehen, dass ... – hier sind die
                2 relevantesten Cases für Ihre Branche.“
              </li>
            </ol>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="font-semibold mb-2">Sales-Enablement</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>One-Pager je Branche/Persona</li>
              <li>Mini-Demos als Loom (2–3&nbsp;Min)</li>
              <li>Antwortbibliothek für Security/Legal</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <ArrowRight className={`w-5 h-5 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Wichtig: Definiere <strong>klare Hand-Off-Signale</strong> (z.&nbsp;B. Case-Konsum,
            Themenkombi, Wiederkehr innerhalb 7&nbsp;Tagen) – erst dann outreachen.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700" id="faq">
          <div>
            <h3 className="font-semibold">
              Wie lange dauert es, bis Content eine B2B-Pipeline spürbar füllt?
            </h3>
            <p>
              Rechne mit 3–6&nbsp;Monaten bis zu stabilen organischen Zuflüssen. Beschleuniger sind
              vorhandene E-Mail-Listen, Social-Reichweiten, Co-Marketing und gezielte
              Performance-Anschubformate.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Brauche ich dafür immer ein großes Redaktionsteam?</h3>
            <p>
              Nein. Starte mit 1–2 Kernformaten (z.&nbsp;B. „Was ist…?“ plus monatlicher Case) und
              erweitere entlang der Nachfrage. Qualität &gt; Quantität.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wie erkenne ich kaufnahen Intent?</h3>
            <p>
              Pfad-Signale: Nutzer lesen Vergleichs- und ROI-Inhalte, besuchen die Preis- oder
              Integrationsseite und kehren innerhalb kurzer Zeit zurück. Kombiniere das mit
              Self-Reported Attribution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Was, wenn meine Lösung erklärungsbedürftig ist?</h3>
            <p>
              Umso besser für Content. Setze auf Diagnose-Guides, Decision-Frameworks und kurze
              Video-Demos mit klaren „Was passiert danach?“-Hinweisen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Rolle spielt Kaltakquise dann noch?</h3>
            <p>
              Outbound bleibt sinnvoll – als <em>warmes</em> Follow-up auf konsumierten Content und
              Events. Reine Kaltakquise ohne Kontext erzeugt heute selten den gewünschten
              Vertrauenseffekt.
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
                  name: "Wie lange dauert es, bis Content eine B2B-Pipeline spürbar füllt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Rechne mit 3–6 Monaten bis zu stabilen organischen Zuflüssen. Beschleuniger sind vorhandene E-Mail-Listen, Social-Reichweiten, Co-Marketing und gezielte Performance-Anschubformate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Brauche ich dafür immer ein großes Redaktionsteam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. Starte mit 1–2 Kernformaten (z. B. „Was ist…?“ plus monatlicher Case) und erweitere entlang der Nachfrage. Qualität ist wichtiger als Quantität.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie erkenne ich kaufnahen Intent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nutzer, die Vergleichs- und ROI-Inhalte konsumieren, die Preis- oder Integrationsseite besuchen und innerhalb kurzer Zeit zurückkehren, zeigen starken Intent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was, wenn meine Lösung erklärungsbedürftig ist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Setze auf Diagnose-Guides, Decision-Frameworks und kurze Video-Demos mit klaren „Was passiert danach?“-Hinweisen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielt Kaltakquise dann noch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Outbound bleibt sinnvoll als warmes Follow-up auf konsumierten Content und Events. Reine Kaltakquise ohne Kontext erzeugt selten Vertrauen.",
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
          <strong>Wie baut Content eine verlässliche B2B-Sales-Pipeline?</strong> Indem er
          Entscheider früh erreicht, Risiken reduziert und klare nächste Schritte anbietet. Setze
          pro Journey-Phase auf passende Formate, messe anhand sinnvoller Leading Indicators und
          verzahne Marketing &amp; Sales über definierte Hand-Off-Signale. So wird aus Klicks
          planbare Nachfrage.
        </p>
      </section>

      {/* CTA ohne Formular, Button führt zu findbar.info */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel für dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme B2B-Leser für dein
            Sales-Team.
          </p>

          <div className="mx-auto max-w-xl">
            <a
              href="https://www.findbar.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
              aria-label="Zu findbar.info wechseln (öffnet in neuem Tab)"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu B2B-Sales-Pipeline &amp; Content
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
                <td className="p-3 font-medium text-zinc-900">Buyers Journey</td>
                <td className="p-3 text-zinc-700">
                  Weg eines Entscheiders von der Problemerkennung (Informational) über
                  Lösungsbewertung (Consideration) bis zur Entscheidung (Decision).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Thought Leadership</td>
                <td className="p-3 text-zinc-700">
                  Inhalte, die Kompetenz und Perspektive zeigen – weniger Werbung, mehr
                  Argumentationshilfe für die Zielgruppe.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Intent-Signal</td>
                <td className="p-3 text-zinc-700">
                  Verhalten, das Kaufnähe vermuten lässt, z.&nbsp;B. Konsum von Vergleichen oder
                  Preis-/Integrationsseiten.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Sales-Enablement</td>
                <td className="p-3 text-zinc-700">
                  Materialien und Prozesse, die Vertriebsgespräche mit Proof &amp; Kontext versorgen
                  (Cases, One-Pager, Demos).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Self-Reported Attribution</td>
                <td className="p-3 text-zinc-700">
                  Freitext-Angabe „Wie hast du von uns gehört?“ – erfasst Kanäle, die in Daten nicht
                  sichtbar sind (z.&nbsp;B. Dark Social).
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
            Überprüft von: <strong>findbar Redaktion</strong> – .{" "}
            <a href={author.linkedin} className={`hover:underline ${accent}`}>
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section id="quellen" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Edelman &amp; LinkedIn (2024): B2B Thought Leadership Impact Report –{" "}
            <a
              href="https://www.edelman.com/sites/g/files/aatuss191/files/2024-02/_2024%20Edelman-LinkedIn%20B2B%20Thought%20Leadership%20Impact%20Report%20Final.pdf"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.edelman.com/…/2024-B2B-Thought-Leadership-Impact-Report
            </a>
          </li>
          <li>
            Gartner: B2B Buying – 75% bevorzugen eine „rep-free“ Experience –{" "}
            <a
              href="https://www.gartner.com/en/sales/insights/b2b-buying-journey"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gartner.com/en/sales/insights/b2b-buying-journey
            </a>
          </li>
          <li>
            Forrester (2024): The State of Business Buying –{" "}
            <a
              href="https://www.forrester.com/press-newsroom/forrester-the-state-of-business-buying-2024/"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.forrester.com/press-newsroom/…-business-buying-2024
            </a>
          </li>
          <li>
            Demand Gen Report (2024): Käufer sind zu ~70% durch, bevor sie Kontakt aufnehmen –{" "}
            <a
              href="https://www.demandgenreport.com/industry-news/80-of-b2b-buyers-initiate-first-contact-once-theyre-70-through-their-buying-journey/48394/"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.demandgenreport.com/…/buyers-initiate-first-contact…
            </a>
          </li>
          <li>
            McKinsey (2024): B2B Pulse – Omnichannel &amp; Selbstbedienung –{" "}
            <a
              href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-fundamental-truths-how-b2b-winners-keep-growing"
              className={accent}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mckinsey.com/…/five-fundamental-truths…
            </a>
          </li>
        </ul>
      </section>

      {/* Structured Data – Article & Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
            description:
              "Warum Vertrauen Kaltakquise schlägt – und wie Content Entscheider von Informational über Consideration bis Decision führt.",
            inLanguage: "de-DE",
            image: [
              "https://www.findbar.info/vertrauen-beim-verkauf-ist-essentiell.jpg",
            ],
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: {
                "@type": "ImageObject",
                url: site.logo,
              },
            },
            datePublished: "2025-08-28",
            dateModified: "2025-08-28",
            mainEntityOfPage:
              "https://www.findbar.info/blog/vom-klick-zur-chance-b2b-sales-pipeline",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: site.logo,
            email: "mailto:" + site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              addressLocality: "Spenge",
              postalCode: "32139",
              addressCountry: "DE",
            },
            sameAs: [author.linkedin],
          }),
        }}
      />
    </article>
  );
}
