// src/app/blog/scrum-agile-forschung-healthcare/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Agile Coach & Healthcare-Product Owner",
  image: "/Autorenbild.jpg",
};

const canonical = "https://www.beispiel.de/blog/scrum-agile-forschung-healthcare";

export const metadata: Metadata = {
  title:
    "SCRUM & agile Methoden in Forschung und Healthcare – Chancen, Risiken & Praxisleitfaden",
  description:
    "Wie Scrum, Kanban & Co. Forschungsteams, Kliniken und MedTech-Organisationen schneller, sicherer und regulatorisch sauber machen. Praxisnah, für Einsteiger erklärt.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "SCRUM & agile Methoden in Forschung und Healthcare – Chancen, Risiken & Praxisleitfaden",
    description:
      "Für Forschung & Gesundheitswesen: Agil starten, regulatorisch sicher bleiben. Klar erklärt mit Beispielen, Checklisten & FAQ.",
    url: canonical,
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "/platzhalter_in_text.jpg",
        width: 1600,
        height: 600,
        alt: "Scrum-Board mit Forschungsteam im Krankenhaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SCRUM & agile Methoden in Forschung und Healthcare – Chancen, Risiken & Praxisleitfaden",
    description:
      "Agile in Forschung & Gesundheit: Chancen, Stolpersteine, konkrete Schritte.",
    images: ["/platzhalter_in_text.jpg"],
  },
};

export default function Page() {
  const faq = [
    {
      q: "Ist Scrum im regulierten Umfeld (z. B. Klinische Forschung) überhaupt erlaubt?",
      a: "Ja. Scrum ist kompatibel, wenn du regulatorische Anforderungen (z. B. GCP, MDR) explizit einbaust: Definition of Done inkl. Nachweisführung, dokumentierte Abnahmen, Risikomanagement und Traceability.",
    },
    {
      q: "Scrum oder Kanban – womit starten?",
      a: "Wenn du feste Timeboxes, klare Ziele und lernende Releases willst: Scrum. Wenn Arbeit stark fließt, viele Ad-hoc-Aufgaben anfallen oder Betrieb/Support dominiert: Kanban. Mischformen sind normal.",
    },
    {
      q: "Wie dokumentiere ich in agilen Teams ausreichend für Audits?",
      a: "Plane Dokumentation als Ergebnis jedes Items ein (Akzeptanzkriterium), nutze Templates, automatisiere Artefakte (z. B. Change-Logs aus Tickets) und definiere eine „Definition of Done“, die Audit-Tauglichkeit sicherstellt.",
    },
    {
      q: "Wie bekomme ich Ärzt:innen und Forschende in regelmäßige Reviews?",
      a: "Halte Reviews kurz (30–45 Min.), zeige echte Prototypen/Ergebnisse, rotiere die Uhrzeit, ermögliche asynchrone Feedbackwege, und binde klinische Schlüsselpersonen als feste Stakeholder ein.",
    },
    {
      q: "Wie gehe ich mit ungeplanten Anforderungen (z. B. Studienprotokoll-Änderungen) um?",
      a: "Änderungen werden im Backlog priorisiert. In Scrum nur zwischen Sprints; in Kanban sofort mit WIP-Grenzen. Wichtig: transparent machen, was dafür nicht umgesetzt wird.",
    },
    {
      q: "Brauche ich immer einen Scrum Master?",
      a: "Für den Start ist es sehr hilfreich. In reifen Teams kann die Rolle rotieren – aber die Aufgaben (Coaching, Impediment-Management, Moderation) müssen klar abgedeckt sein.",
    },
  ];

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
              "SCRUM & agile Methoden in Forschung und Healthcare – Chancen, Risiken & Praxisleitfaden",
            description:
              "Wie Scrum, Kanban & Co. Forschungsteams, Kliniken und MedTech-Organisationen schneller, sicherer und regulatorisch sauber machen.",
            inLanguage: "de-DE",
            image: `${canonical}/platzhalter_in_text.jpg`,
            author: { "@type": "Person", name: author.name },
            datePublished: "2025-09-12",
            dateModified: "2025-09-12",
            publisher: {
              "@type": "Organization",
              name: "Beispiel GmbH",
              logo: {
                "@type": "ImageObject",
                url: "https://www.beispiel.de/logo.png",
              },
            },
            mainEntityOfPage: canonical,
          }),
        }}
      />
      {/* JSON-LD: Company/Organization (ersetzen mit echten Daten) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Beispiel GmbH",
            url: "https://www.beispiel.de",
            sameAs: [],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "kontakt@beispiel.de",
                telephone: "+49-000-000000",
                areaServed: "DE",
                availableLanguage: ["de"],
              },
            ],
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
            SCRUM &amp; agile Methoden in Forschung und Healthcare – Chancen und
            Stolpersteine
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst Forschungsergebnisse schneller in klinische Praxis oder
            MedTech-Produkte bringen – ohne Qualität und Compliance zu
            gefährden? Hier erfährst du, wie Scrum, Kanban &amp; Co. dir helfen,
            Risiken kontrolliert zu reduzieren, Teams zu fokussieren und echte
            Evidenz schneller zu liefern.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-09-12">12.09</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/platzhalter_in_text.jpg"
                />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src="/platzhalter_in_text.jpg"
                  alt="Team vor einem physischen Scrum-Board in einem Forschungslabor"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Forschungsteam arbeitet am Sprint-Board
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
              Scrum liefert in Forschung &amp; Klinik klare Timeboxes, Rollen
              und Feedback-Schleifen – ideal, um Evidenz schrittweise und
              überprüfbar aufzubauen.
            </li>
            <li>
              Erfolg hängt von sauberer Nachweisführung ab: „Definition of Done“
              &amp; Akzeptanzkriterien müssen Dokumentation, Risiko- und
              Qualitätsanforderungen enthalten.
            </li>
            <li>
              Reguliert heißt nicht starr: Agile Praktiken funktionieren mit
              GCP, MDR und IEC 62304 – sofern Traceability, Validierung und
              Risikokontrolle explizit geplant sind.
            </li>
            <li>
              Häufige Stolpersteine: fehlende Stakeholder-Zeit, zu viele
              Parallel-Aufgaben, unklare Prioritäten, „agil“ ohne Produktziel
              und fehlende Metriken.
            </li>
            <li>
              Praktischer Start: 12-Wochen-Pilot mit klarer Problemhypothese,
              messbaren Outcome-Metriken, kleinem Team und regelmäßigen Reviews
              mit Klinik/Forschung.
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
                href="#was-ist-scrum"
              >
                Was ist Scrum – und warum passt es zu Forschung &amp; Healthcare?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#rollen-ereignisse-artefakte"
              >
                Rollen, Ereignisse, Artefakte: so arbeitest du im Alltag
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#chancen"
              >
                Chancen: schneller lernen, Risiken senken, Qualität sichern
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#stolpersteine"
              >
                Stolpersteine: wo Teams im Gesundheitswesen häufig scheitern
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#regulatorik"
              >
                Regulatorik &amp; Compliance: GCP, MDR, IEC 62304 &amp; Co.
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#praxisleitfaden"
              >
                Praxisleitfaden: in 12 Wochen sicher agil starten
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
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="was-ist-scrum">
          <h2 className="text-2xl font-bold mb-3">
            Was ist Scrum – und warum passt es zu Forschung &amp; Healthcare?
          </h2>
          <p className="leading-relaxed">
            Scrum ist ein leichtgewichtiges Rahmenwerk, das komplexe Probleme
            in kleine, sichtbare Schritte zerlegt. Für Forschungsteams,
            Kliniken, Biotech und MedTech bedeutet das: Du formulierst eine
            klare Problemhypothese, planst kurze Iterationen (Sprints), zeigst
            echte Zwischenergebnisse und lernst gemeinsam mit Stakeholdern – von
            der Studienkoordination bis zur Pflege. Dadurch reduzierst du
            Unsicherheit, vermeidest teure „Big-Bang“-Projekte und baust
            Evidenz, Sicherheit und Nutzen früh auf.
          </p>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Scrum definiert klare Verantwortlichkeiten, Ereignisse und
              Artefakte – alles dient der Transparenz, Überprüfung und
              Anpassung.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — aus dem Scrum&nbsp;Guide (direktes Zitat, 2020)
            </figcaption>
          </figure>

          {/* Bild 1 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/platzhalter_in_text.jpg"
                />
                <img
                  loading="lazy"
                  src="/platzhalter_in_text.jpg"
                  alt="Scrum-Board mit Karten: Hypothesen, Risiken, Akzeptanzkriterien"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Sichtbarkeit &amp; Fokus: Ein gutes Board verbindet Aufgaben mit
              Hypothesen, Risiken und evidenzbasierten Kriterien.
            </figcaption>
          </figure>

          <aside className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-2">
              Kurzdefinition: die Bausteine von Scrum
            </h3>
            <ul className="list-disc ml-5">
              <li>
                <strong>Rollen</strong>: Product Owner, Scrum Master, Team.
              </li>
              <li>
                <strong>Ereignisse</strong>: Sprint, Planning, Daily, Review,
                Retrospektive.
              </li>
              <li>
                <strong>Artefakte</strong>: Product Backlog, Sprint Backlog,
                Inkrement – jeweils mit klaren Qualitäts- und Nachweisregeln.
              </li>
            </ul>
          </aside>
        </section>

        <section id="rollen-ereignisse-artefakte" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Rollen, Ereignisse, Artefakte: so arbeitest du im Alltag
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="text-xl font-semibold mb-2">
                Rollen &amp; Verantwortlichkeiten
              </h3>
              <p>
                <strong>Product Owner</strong> priorisiert Nutzen &amp; Risiken,
                pflegt das Backlog und verantwortet Outcome.{" "}
                <strong>Scrum Master</strong> coacht, räumt Hindernisse aus dem
                Weg und schützt Fokuszeiten. <strong>Team</strong> liefert
                Ende-zu-Ende-Wert – interdisziplinär, selbstorganisiert.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="text-xl font-semibold mb-2">
                Ereignisse &amp; Timeboxes
              </h3>
              <p>
                In 1–4-wöchigen Sprints planst du realistische Ziele,
                synchronisierst täglich kurz (max. 15 Min.), zeigst am Ende
                echte Ergebnisse im Review und verbesserst im Retro gezielt
                Zusammenarbeit, Qualität und Flow.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-xl font-semibold mb-2">
              Artefakte &amp; Nachweisführung
            </h3>
            <p>
              Im Gesundheitswesen zählt, was du nachweisen kannst. Baue daher
              Dokumentation in jedes Item ein: Akzeptanzkriterien, Tests,
              Risiko-Links, Prüfschritte, Freigaben. So entsteht eine
              belastbare Traceability von Anforderung bis Ergebnis – audit-
              und prüffähig.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold">
                    Thema/Fragestellung
                  </th>
                  <th className="p-3 text-left font-semibold">
                    Scrum/Agile Praxis
                  </th>
                  <th className="p-3 text-left font-semibold">
                    Klassisch/wasserfallartig
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Umgang mit Unsicherheit</td>
                  <td className="p-3">Iterativ lernen, Hypothesen prüfen</td>
                  <td className="p-3">Umfang früh festzurren</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Stakeholder-Einbindung</td>
                  <td className="p-3">Regelmäßige Reviews</td>
                  <td className="p-3">Seltene Meilensteine</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Dokumentation</td>
                  <td className="p-3">
                    Inkremental, pro Item (DoD/AKZ) – auditierbar
                  </td>
                  <td className="p-3">Batchweise am Ende – Risiko von Lücken</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Risikomanagement</td>
                  <td className="p-3">
                    Früh integrieren, verknüpfen, nachhalten
                  </td>
                  <td className="p-3">Spät und isoliert</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="chancen" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Chancen: schneller lernen, Risiken senken, Qualität sichern
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">Warum Agil in der Forschung?</h3>
              <p>
                Forschung ist per Definition unsicher. Agile Arbeitsweisen
                reduzieren dieses Risiko durch kurze Lernschleifen,
                experimentell abgesicherte Entscheidungen und echte
                Nutzer-/Patientenrückmeldungen. Ergebnisse werden früh
                überprüfbar, Budgets bleiben steuerbar.
              </p>
              <ul className="mt-3 list-disc ml-5">
                <li>Frühe Prototypen statt spätem Big-Bang</li>
                <li>Messbare Outcomes statt Aktivitätslisten</li>
                <li>Bessere Ausrichtung auf klinischen Nutzen</li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold mb-2">Kernmetriken</h3>
              <ul className="list-disc ml-5">
                <li>Lead Time &amp; Flow-Effizienz</li>
                <li>Defect Escape Rate</li>
                <li>Time-to-Insight (TtI)</li>
                <li>Regulatory-Ready-Rate (Artefakte vollständig)</li>
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
                <source
                  media="(max-width: 640px)"
                  srcSet="/platzhalter_in_text.jpg"
                />
              <img
                  loading="lazy"
                  src="/platzhalter_in_text.jpg"
                  alt="Klinikteam testet einen Prototypen in einem Review"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Reviews zeigen echte Ergebnisse – nicht nur Präsentationen.
            </figcaption>
          </figure>
        </section>

        <section id="stolpersteine" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Stolpersteine: wo Teams im Gesundheitswesen häufig scheitern
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">1) „Agil“ ohne Produktziel</h3>
              <p>
                Ohne klares <em>Product&nbsp;Goal</em> zerfasert die Arbeit. Lege
                ein prüfbares Ziel fest (z. B. „Messbare Verbesserung der
                Medikationssicherheit um 20 % in 6 Monaten“).
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">2) Zu viel Work-in-Progress</h3>
              <p>
                Begrenze parallele Arbeit (WIP), sonst verlängern sich
                Durchlaufzeiten, Qualität leidet und Reviews zeigen nur halbe
                Ergebnisse.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                3) Stakeholder nur „am Rand“
              </h3>
              <p>
                Ärzte, Pflege, Regulatory, Q&amp;R und Datenschutz müssen
                regelmäßig Feedback geben. Plane ihre Zeit in jedem Sprint ein.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold mb-2">
                4) Dokumentation als „Add-on“
              </h3>
              <p>
                Dokumentation ist Teil der Leistung. Verankere sie in der
                Definition of Done und lasse nichts „provisorisch“ live gehen.
              </p>
            </div>
          </div>

          <aside className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold mb-2">Anti-Pattern Check</h3>
            <ul className="list-disc ml-5">
              <li>Sprints ohne fertige, überprüfbare Ergebnisse</li>
              <li>Retros fallen aus oder liefern keine Maßnahmen</li>
              <li>Backlog ist eine Wunschliste ohne Priorisierung</li>
              <li>Keine Traceability von Anforderung bis Test</li>
            </ul>
          </aside>
        </section>

        <section id="regulatorik" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Regulatorik &amp; Compliance: GCP, MDR, IEC 62304 &amp; Co.
          </h2>
          <p>
            Gute Nachricht: Agile Arbeitsweisen sind mit regulatorischen
            Anforderungen vereinbar. Entscheidend ist, dass Transparenz,
            Nachvollziehbarkeit und Qualitätssicherung explizit in Prozesse und
            Artefakte eingebaut werden – etwa über klare Akzeptanzkriterien,
            dokumentierte Abnahmen, Risiko-Links und eine saubere Versions- sowie
            Änderungssteuerung.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Praktische Brücken</h3>
            <ul className="list-disc ml-5">
              <li>
                <strong>GCP-konform</strong>: In klinischen Studien sicherstellt
                du per DoD, dass Datenerhebung, Monitoring, Query-Handling,
                Audit-Trail und Datenschutz je Item nachgewiesen werden.
              </li>
              <li>
                <strong>MDR/ISO</strong>: Für Medizinprodukte verknüpfst du
                Anforderungen mit Risiken, Verifizierungs-/Validierungsnachweisen
                und klinischer Bewertung – fortlaufend, nicht nur am Ende.
              </li>
              <li>
                <strong>IEC 62304</strong>: Lebenszyklusprozesse (z. B.
                Wartung/Problem-Resolution) sind als Backlog-Items planbar und
                überprüfbar – mit klassifizierten Software-Risiken.
              </li>
            </ul>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 text-left font-semibold">Anforderung</th>
                  <th className="p-3 text-left font-semibold">Agile Umsetzung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    Traceability (Anforderung&nbsp;&rarr;&nbsp;Test)
                  </td>
                  <td className="p-3">
                    Ticket-Vorlagen mit Pflichtfeldern: Risiko-ID, Test-Fall,
                    Reviewer, Version.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Risikomanagement</td>
                  <td className="p-3">
                    Risiko-Backlog, regelmäßige Reviews, Verknüpfung zu Items,
                    Prüfschritte in DoD.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Validierung/Verifizierung</td>
                  <td className="p-3">
                    Testpyramide, Abnahme-Kriterien, Evidence-Speicher (z. B.
                    Prüflisten, Testberichte).
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Änderungssteuerung</td>
                  <td className="p-3">
                    Versionierung, Freigaben, Change-Log automatisch aus Tickets.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="praxisleitfaden" className="mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Praxisleitfaden: in 12 Wochen sicher agil starten
          </h2>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Woche 1–2: Ziel &amp; Setup</h3>
            <ul className="list-disc ml-5">
              <li>
                Formuliere eine{" "}
                <strong>Problemhypothese mit Outcome-Metriken</strong> (z. B.
                Fehlerquote, Durchlaufzeit, Patientennutzen).
              </li>
              <li>Besetze Rollen, sichere Stakeholder-Zeit je Sprint.</li>
              <li>
                Definiere eine <strong>DoD</strong>: Dokumentation, Tests,
                Abnahmen, Risiko-Links.
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">
              Woche 3–8: Zwei Sprints mit echten Ergebnissen
            </h3>
            <ul className="list-disc ml-5">
              <li>Backlog schneiden, Risiken identifizieren, priorisieren.</li>
              <li>
                Pro Sprint ein <strong>prüfbares Inkrement</strong> liefern (z. B.
                validierter Datenerfassungs-Workflow, Prototyp).
              </li>
              <li>
                Reviews mit Klinik/Forschung &amp; Q&amp;R, Feedback einplanen.
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">
              Woche 9–12: Stabilisieren &amp; skalieren
            </h3>
            <ul className="list-disc ml-5">
              <li>Metriken prüfen (Outcome, Qualität, Flow).</li>
              <li>Retro-Maßnahmen institutionalisieren.</li>
              <li>
                Skalierung nur, wenn ein <strong>robustes Team-Setup</strong>{" "}
                steht und Artefakte audit-tauglich sind.
              </li>
            </ul>
          </div>

          <aside className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">Checkliste Startvoraussetzungen</h3>
            <ul className="list-disc ml-5">
              <li>Klares Produktziel &amp; messbare Outcomes</li>
              <li>Dedizierte Zeit von Klinik/Forschung &amp; Regulatory</li>
              <li>Definition of Done mit Nachweisführung</li>
              <li>Visualisiertes Board inkl. Risiko-Links</li>
              <li>WIP-Grenzen und Metriken definiert</li>
            </ul>
          </aside>

          {/* Weiterführende interne Links (Cluster) */}
          <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/kanban-im-klinikbetrieb"
                >
                  Kanban im Klinikbetrieb: Flow statt Firefighting
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/definition-of-done-gesundheitswesen"
                >
                  Definition of Done im Gesundheitswesen – Templates &amp;
                  Beispiele
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/iec-62304-agil-umsetzen"
                >
                  IEC 62304 agil umsetzen: Lebenszyklus als Backlog
                </a>
              </li>
              <li>
                <a
                  className={`hover:underline ${accent}`}
                  href="/blog/gcp-agile-checkliste"
                >
                  GCP x Agile: Checkliste für Studien-Teams
                </a>
              </li>
            </ul>
          </aside>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            {faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p>{f.a}</p>
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
                mainEntity: faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie bringst du Agilität sicher in Forschung und Healthcare?
            </strong>{" "}
            Starte klein, definiere ein klares Produktziel, baue
            Nachweisführung, Risiko-Links und Qualitätskriterien in jedes Item
            ein – und lerne in kurzen Zyklen mit echten Nutzer:innen. So
            erreichst du bessere Ergebnisse bei kalkulierbarem Risiko.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Passt Agile zu deinem Team &amp; deiner Regulatorik?
            </h2>
            <p className="text-zinc-700 mb-4">
              Hol dir ein kostenloses Erstgespräch: Wir prüfen gemeinsam Ziel,
              Risiken und einen 12-Wochen-Pilot – praxisnah und
              audit-tauglich.
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
            Mini-Glossar – Die wichtigsten Begriffe zu Scrum &amp; Agilität in
            Forschung &amp; Healthcare
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
                  <td className="p-3 font-medium text-zinc-900">Sprint</td>
                  <td className="p-3 text-zinc-700">
                    Zeitlich begrenzter Arbeitszyklus (1–4 Wochen) mit klarem
                    Ziel und überprüfbarem Ergebnis.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Definition of Done (DoD)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Gemeinsame Qualitäts- und Abschlusskriterien – inklusive
                    Dokumentation, Tests, Abnahmen und ggf. Regulatorik.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Akzeptanzkriterien (AKZ)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Prüfbare Bedingungen, wann ein Item aus Sicht der
                    Stakeholder fertig ist.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Traceability
                  </td>
                  <td className="p-3 text-zinc-700">
                    Nachvollziehbare Verbindung von Bedarf &rarr; Anforderung
                    &rarr; Risiko &rarr; Test &rarr; Ergebnis.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Backlog</td>
                  <td className="p-3 text-zinc-700">
                    Priorisierte Liste von Arbeiten, Hypothesen und Risiken –
                    dynamisch gepflegt vom Product Owner.
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
                href="https://www.linkedin.com"
                className={`text-sm hover:underline ${accent}`}
              >
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>Fachreview Team</strong> – Medical Affairs
              &amp; Quality.
              <a
                href="https://www.linkedin.com"
                className={`ml-2 hover:underline ${accent}`}
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
              Ken Schwaber, Jeff Sutherland: The Scrum Guide (2020).{" "}
              <a
                href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf
              </a>
            </li>
            <li>
              Digital.ai: 17th State of Agile Report (2024).{" "}
              <a
                href="https://2288549.fs1.hubspotusercontent-na1.net/hubfs/2288549/RE-SA-17th-Annual-State-Of-Agile-Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://…/RE-SA-17th-Annual-State-Of-Agile-Report.pdf
              </a>
            </li>
            <li>
              ICH E6(R3) – Guideline for Good Clinical Practice (Step 4, 2025-01-06).{" "}
              <a
                href="https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://database.ich.org/…/ICH_E6(R3)_Step4_FinalGuideline_2025_0106.pdf
              </a>
            </li>
            <li>
              FDA Draft Guidance: E6(R3) GCP Annex 2 (2024-12-30).{" "}
              <a
                href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e6r3-good-clinical-practice-annex-2"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.fda.gov/…/e6r3-good-clinical-practice-annex-2
              </a>
            </li>
            <li>
              Johner Institute – IEC 62304: Medical device software – Lifecycle
              processes (Überblick).{" "}
              <a
                href="https://blog.johner-institute.com/category/iec-62304-medical-software/"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://blog.johner-institute.com/…/iec-62304-medical-software/
              </a>
            </li>
            <li>
              Desai M. et al. (2024): Implementation of Agile in healthcare
              (Open Access).{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11131107/"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC11131107/
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
