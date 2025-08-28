// src/app/blog/vom-klick-zur-chance-b2b-sales-pipeline/page.tsx
import type { Metadata } from "next";

const canonical = "https://www.findbar.info/blog/vom-klick-zur-chance-b2b-sales-pipeline";
const accent = "text-emerald-700";

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist & Gründer findbar",
  image: "/lennart-niehausmeier.jpg",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
};

export const metadata: Metadata = {
  title:
    "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
  description:
    "Warum Vertrauen Kaltakquise schlägt, wie Entscheider von Information zu Entscheidung wechseln und welche Content-Bausteine & Lead-Signale deine Pipeline planbar machen.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: canonical,
    title:
      "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
    description:
      "Vertrauen statt Kaltakquise: So orchestrierst du Content, Lead-Signale und Sales-Übergabe zu einer planbaren B2B-Pipeline.",
    locale: "de_DE",
    images: [
      {
        url: "/vertrauen-beim-verkauf-ist-essentiell.jpg",
        width: 1600,
        height: 600,
        alt: "Vertrauen ist im B2B-Vertrieb essenziell – Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
    description:
      "Content, der Vertrauen schafft – plus klare Lead-Signale & ein Sales-Playbook für den Erstkontakt.",
    images: ["/vertrauen-beim-verkauf-ist-essentiell.jpg"],
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
          Vom Klick zur Chance: So baut Content eine verlässliche B2B-Sales-Pipeline
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Vertrauen schlägt Kaltakquise. In diesem Guide lernst du, wie Entscheider von{" "}
          <em>Informational</em> &gt; <em>Consideration</em> &gt;{" "}
          <em>Decision</em> wandern, welche Content-Bausteine pro Phase wirken, wie du
          Lead-Signale liest – und wie der nahtlose Handover an Sales gelingt.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-08-20">20.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">12 Minuten</span>
        </div>

        {/* Hero 16:6 – LCP */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/vertrauen-beim-verkauf-ist-essentiell.jpg" />
              <img
                src="/vertrauen-beim-verkauf-ist-essentiell.jpg"
                alt="Hero: Vertrauen ist beim Verkauf essenziell – ein Handschlag, der den Start einer B2B-Partnerschaft markiert"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Vertrauenssituation im B2B-Vertrieb als Symbolbild.
          </figcaption>
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
            <strong>Vertrauen schlägt Kaltakquise:</strong> Fremde mögen selten kaufen.
            Sichtbarer Nutzen + wiederkehrende Touchpoints bauen Zutrauen auf.
          </li>
          <li>
            <strong>Reise des Entscheiders:</strong> Von Frage zu Lösung zu Auswahl –
            steuere Content entlang <em>Informational</em> &gt; <em>Consideration</em>{" "}
            &gt; <em>Decision</em>.
          </li>
          <li>
            <strong>Content-Bausteine pro Phase:</strong> Guide, Vergleich, Case, FAQ –
            schlank produziert, sauber verlinkt, messbar.
          </li>
          <li>
            <strong>Lead-Signale lesen:</strong> Wiederkehrende Besuche, Seitenpfade, Zeit
            & Deep Dives sind starke Intent-Hinweise – nutze sie für Scoring.
          </li>
          <li>
            <strong>Übergabe an Sales:</strong> Mit einem klaren Playbook wird aus dem
            ersten Kontakt kein Kaltstart, sondern ein Gespräch mit Kontext.
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
            <a className={`hover:underline ${accent} font-medium`} href="#warum-vertrauen-kaltakquise-schlaegt">
              Warum Vertrauen Kaltakquise schlägt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#reise-des-entscheiders">
              Die Reise des Entscheiders: Informational &gt; Consideration &gt; Decision
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#content-bausteine">
              Content-Bausteine pro Phase (Guide, Vergleich, Case, FAQ)
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#lead-signale">
              Lead-Signale verstehen (wiederkehrende Besuche, Seitenpfade, Zeit)
            </a>
          </li>
            <li>
            <a className={`hover:underline ${accent} font-medium`} href="#lead-scoring">
              MQL vs. SQL & Lead-Scoring in der Praxis
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#handover-playbook">
              Übergabe an Sales: Playbook für die erste Kontaktaufnahme
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kpis-messung">
              KPIs & Messung: Von Klicks zu Chancen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#fehler-vermeiden">
              Häufige Fehler, die Leads kosten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#tooling">
              Tooling-Stack: Leichtgewicht, der skaliert
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
              Kurzfazit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#cta">
              Nächster Schritt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mini-glossar">
              Mini-Glossar
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ueber-den-autor">
              Über den Autor
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#quellen">
              Quellen &amp; weiterführende Studien
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="warum-vertrauen-kaltakquise-schlaegt" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Warum Vertrauen Kaltakquise schlägt</h2>
        <p className="leading-relaxed">
          Kaltakquise stößt im B2B oft an Grenzen: Du kennst den Kontext deines Gegenübers
          nicht, triffst ihn im falschen Moment und musst erst erklären, warum du überhaupt
          relevant bist. Content dreht die Reihenfolge um. Er liefert <strong>Beweis</strong>{" "}
          &gt; <strong>Nutzen</strong> &gt; <strong>Begehren</strong>. Menschen lernen dich
          kennen, bevor du sie ansprichst. Das Tempo bestimmt der Entscheider, nicht dein
          Outreach-Kalender. So baust du <em>Vertrauen</em> auf – die Voraussetzung für
          jede ernsthafte Anfrage.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Vertrauensbasierter Ansatz</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Pull statt Push: Inhalte beantworten echte Fragen.</li>
              <li>
                Mehrere Touchpoints erhöhen Sicherheit: Guide &gt; Vergleich &gt; Case &gt; FAQ.
              </li>
              <li>Relevante Belege: Zahlen, Demos, Referenzen, klare nächste Schritte.</li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="text-lg font-semibold mb-2">Kaltakquise</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Unterbricht. Kein Problem fit.</li>
              <li>Start bei Null: Kein Vertrauen, wenig Geduld.</li>
              <li>Hohe Ablehnungsraten und kurze Gespräche.</li>
            </ul>
          </aside>
        </div>

        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/verkauf-ohne-vertrauen-antrag-vergleich.jpg" />
              <img
                loading="lazy"
                src="/verkauf-ohne-vertrauen-antrag-vergleich.jpg"
                alt="Vergleich: Verkauf ohne Vertrauen vs. mit Vertrauen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Ohne Vertrauen wirkt jeder Antrag wie Risiko – mit Vertrauen wie Chance.
          </figcaption>
        </figure>

        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            Vertrauen entsteht, wenn du vor dem Pitch hilfst, Risiken erklärst und die
            nächste Entscheidung leichter machst.
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Indirektes Zitat einer gängigen B2B-Vertriebsmaxime
          </figcaption>
        </figure>
      </section>

      <section id="reise-des-entscheiders" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Die Reise des Entscheiders: Informational &gt; Consideration &gt; Decision
        </h2>
        <p className="leading-relaxed">
          Entscheider gehen selten linear vor, aber ihre Fragen klären sich in drei
          wiederkehrenden Phasen. Du gewinnst Pipeline, wenn du jede Phase mit den
          richtigen Formaten bedienst und diese logisch miteinander verknüpfst.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Phase</th>
                <th className="text-left font-semibold p-3">Ziel des Users</th>
                <th className="text-left font-semibold p-3">Beste Formate</th>
                <th className="text-left font-semibold p-3">Starke CTAs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="p-3 font-medium text-zinc-900">Informational</td>
                <td className="p-3">Problem verstehen, Begriffe klären, Optionen sichten.</td>
                <td className="p-3">How-to-Guide, Definition, Checkliste, Rechner.</td>
                <td className="p-3">„Weiterführender Vergleich“, „Template laden“.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Consideration</td>
                <td className="p-3">Ansätze vergleichen, Risiken einschätzen, Stakeholder einbinden.</td>
                <td className="p-3">Vergleichsartikel, ROI-Sheet, Webinar-Mitschnitt.</td>
                <td className="p-3">„ROI-Kalkulation“, „Demo-Video“.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Decision</td>
                <td className="p-3">Lieferant bewerten, Vertrauen bestätigen, Kauf rechtfertigen.</td>
                <td className="p-3">Case Study, Referenz, Sicherheits-/Compliance-FAQ.</td>
                <td className="p-3">„Erstgespräch buchen“, „Angebot anfordern“.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <strong>Praxis-Tipp:</strong> Verlinke jede Phase klar zur nächsten.
          Unten im Guide gehört immer ein CTA auf den relevanten Vergleich; im Vergleich
          geht es weiter zur passenden Case Study – ohne Sackgassen.
        </div>
      </section>

      <section id="content-bausteine" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Content-Bausteine pro Phase (Guide, Vergleich, Case, FAQ)
        </h2>
        <p className="leading-relaxed">
          Du brauchst keine Content-Fabrik. Vier Bausteine reichen, wenn sie sauber
          geschrieben, verlinkt und gemessen sind. So setzt du sie auf.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Guide (Informational)</h3>
            <p className="mb-2">
              Erklärt das Problem und die Lösungswege. Einfach, visuell, mit Beispielen.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Definiere Begriffe verständlich.</li>
              <li>Checkliste, Mini-Rechner oder Template einbauen.</li>
              <li>Am Ende zur Vergleichsseite weiterführen.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Vergleich (Consideration)</h3>
            <p className="mb-2">
              Hilft bei der Bewertung von Ansätzen oder Anbietern. Neutral, ehrlich, klar.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Objektive Kriterien: Kosten, Aufwand, Risiken, Time-to-Value.</li>
              <li>Tabellarischer Überblick + Kurzfazit je Option.</li>
              <li>Passend zur Case Study verlinken.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Case Study (Decision)</h3>
            <p className="mb-2">
              Zeigt echte Ergebnisse – vorher/nachher, Zahlen, Zitat. Konkreter Use Case.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Ausgangslage, Lösung, Ergebnis in Zahlen.</li>
              <li>Risiken &amp; Learnings transparent benennen.</li>
              <li>CTA: Erstgespräch oder Angebot.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">FAQ (Decision/Trust)</h3>
            <p className="mb-2">
              Beantwortet Einwände: Datenschutz, Integration, Laufzeiten, ROI.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Kurze Antworten, klare Verlinkungen zu Belegen.</li>
              <li>„Ja und“ statt „Nein, aber“ – lösungsorientiert.</li>
              <li>Regelmäßig mit Sales-Feedback aktualisieren.</li>
            </ul>
          </div>
        </div>

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
                alt="Online-Meeting: Ohne Vertrauen wird die Entscheidung vertagt"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Wo Vertrauen fehlt, werden Meetings zu Prüfungen – Content nimmt die Hürden vorher.
          </figcaption>
        </figure>
      </section>

      <section id="lead-signale" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Lead-Signale verstehen (wiederkehrende Besuche, Seitenpfade, Zeit)
        </h2>
        <p className="leading-relaxed">
          Nicht jeder Klick ist Interesse. Stark sind Signale, die <em>Absicht</em> und{" "}
          <em>Reife</em> verraten. Drei Kategorien helfen dir bei der Einordnung.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Wiederkehr</h3>
            <p>3+ Besuche in 14 Tagen deuten auf echtes Projektinteresse hin.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Pfade</h3>
            <p>Guide &gt; Vergleich &gt; Case ist ein Signal für Evaluations-Tiefe.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Zeit &amp; Tiefe</h3>
            <p>
              90+ Sekunden auf Vergleichsseiten oder Downloads (ROI-Sheet, Checklisten)
              sind starke Impulse.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <strong>Hinweis:</strong> Einzelne Metriken können täuschen (z.B. Tab offen).
          Kombiniere Signale und nutze Schwellenwerte statt Bauchgefühl.
        </div>
      </section>

      <section id="lead-scoring" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">MQL vs. SQL &amp; Lead-Scoring in der Praxis</h2>
        <p className="leading-relaxed">
          Marketing-Qualified Leads (MQL) sind Kontakte mit relevantem Verhalten; Sales-Qualified
          Leads (SQL) sind von Sales validiert und terminiert. Was zählt, ist die <em>Übersetzung</em>{" "}
          von Signalen in klare Scores und Übergaberegeln. Ein leichtgewichtiges Scoring reicht
          völlig aus.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Signal</th>
                <th className="text-left font-semibold p-3">Bedingung</th>
                <th className="text-left font-semibold p-3">Score</th>
                <th className="text-left font-semibold p-3">Anmerkung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="p-3 font-medium text-zinc-900">Besuche</td>
                <td className="p-3">3+ in 14 Tagen</td>
                <td className="p-3">+15</td>
                <td className="p-3">Intent-Indikator</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Vergleich gelesen</td>
                <td className="p-3">Mind. 90 Sek. Verweildauer</td>
                <td className="p-3">+20</td>
                <td className="p-3">Evaluations-Tiefe</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Case Study</td>
                <td className="p-3">Scrolltiefe 75%+</td>
                <td className="p-3">+10</td>
                <td className="p-3">Soziale Bewährtheit</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">FAQ Datenschutz</td>
                <td className="p-3">Seitenaufruf</td>
                <td className="p-3">+10</td>
                <td className="p-3">Kaufnahes Interesse</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Job-Rolle passt</td>
                <td className="p-3">IT-Leitung, Fachbereichslead etc.</td>
                <td className="p-3">+10</td>
                <td className="p-3">Fit zur ICP</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Negative Signale</td>
                <td className="p-3">Hoher Bounce, Studenten-Mail</td>
                <td className="p-3">−10</td>
                <td className="p-3">Qualität sichern</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Konvertiere Score in Status</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Score ≥ 30:</strong> MQL – Marketing führt Kontext zusammen, Sales bekommt
              Handover.
            </li>
            <li>
              <strong>Score ≥ 45:</strong> <em>Priorisiertes</em> MQL – innerhalb von 24h anrufen.
            </li>
            <li>
              <strong>Nach Sales-Call</strong>: SQL oder Nurture mit konkretem nächsten Schritt.
            </li>
          </ul>
        </div>
      </section>

      <section id="handover-playbook" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Übergabe an Sales: Playbook für die erste Kontaktaufnahme
        </h2>
        <p className="leading-relaxed">
          Der Erstkontakt entscheidet, ob der Faden reißt oder ein echter Dialog entsteht.
          Mit Kontext aus Content &amp; Signalen fühlt es sich für beide Seiten wie eine
          Fortsetzung an – nicht wie Kaltakquise.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Was Sales bekommt</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Letzte 5 Seiten + Zeit + Scrolltiefe.</li>
              <li>Downloads (ROI-Sheet, Checkliste) und Formulareingaben.</li>
              <li>Vermutete Use-Cases &amp; Stakeholder aus Seitenpfaden.</li>
              <li>Score &amp; Begründung (transparente Regeln).</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Was Sales sagt (Beispiel-Script)</h3>
            <p className="mb-2">
              „Hallo {`{Name}`}, ich melde mich, weil Sie sich unseren Vergleich zu <em>X</em>{" "}
              und die Case Study zu <em>Y</em> angesehen haben. Meist geht es in der Phase um
              A oder B. Soll ich Ihnen in 15 Minuten zeigen, wie andere das gelöst haben?
              Wenn es passt, skizzieren wir die nächsten 2–3 Schritte.“
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <strong>Timing-Regel:</strong> Priorisierte MQLs innerhalb von 24h, alle anderen
          innerhalb von 48h kontaktieren. Der Kontext bleibt frisch – das steigert die
          Annahmequote.
        </div>
      </section>

      <section id="kpis-messung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">KPIs &amp; Messung: Von Klicks zu Chancen</h2>
        <p className="leading-relaxed">
          Starte mit wenigen Kennzahlen, die Ursache und Wirkung abbilden – entlang Funnel
          und Content-Pfad.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Bereich</th>
                <th className="text-left font-semibold p-3">KPI</th>
                <th className="text-left font-semibold p-3">Ziel/Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="p-3 font-medium text-zinc-900">Informational</td>
                <td className="p-3">Unique Visitors, CTR To-Next, Dwell-Time</td>
                <td className="p-3">Qualität des Traffics &amp; Anschlussfähigkeit.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Consideration</td>
                <td className="p-3">Vergleichs-Reads, Scroll 75%+, Downloads</td>
                <td className="p-3">Evaluations-Tiefe &amp; Intent.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Decision</td>
                <td className="p-3">Demo-Requests, Erstgespräche, Win-Rate</td>
                <td className="p-3">Kaufbereitschaft &amp; Sales-Fit.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Gesamt</td>
                <td className="p-3">Cost per Opportunity, Pipeline-Coverage</td>
                <td className="p-3">Effizienz &amp; Planbarkeit.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Attribution pragmatisch</h3>
          <p>
            Arbeite mit <em>First-Touch</em> (Entdeckung) und <em>Last-Non-Direct</em>{" "}
            (Konversion) als Standard. Für große Tickets ergänze eine manuelle
            <em> Deal-Review</em> mit „Welche Inhalte haben euch überzeugt?“.
          </p>
        </div>
      </section>

      <section id="fehler-vermeiden" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Häufige Fehler, die Leads kosten</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Kein roter Faden:</strong> Guide ohne Link zum Vergleich, Vergleich ohne Case.
          </li>
          <li>
            <strong>Zuviel Jargon:</strong> Fachsprache ohne Erklärung schreckt Laien ab.
          </li>
          <li>
            <strong>Kein Proof:</strong> Behauptungen ohne Zahlen oder Belege.
          </li>
          <li>
            <strong>Unklare CTAs:</strong> „Kontakt“ ist zu vage. Besser: „15-Minuten-Check“.
          </li>
          <li>
            <strong>Kein Handover:</strong> Sales ruft ohne Kontext an – das ist Kaltakquise.
          </li>
        </ul>
      </section>

      <section id="tooling" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Tooling-Stack: Leichtgewicht, der skaliert</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>CMS oder Headless-Setup mit sauberer SEO-Struktur.</li>
              <li>Analytics für Scrolltiefe, Zeit, Pfade.</li>
              <li>Formulare mit UTM-Weitergabe und Consent-Steuerung.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Go-to-Market</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>CRM mit Lead-Scoring-Feld und Pflichtübergaben.</li>
              <li>Kalenderbuchung mit gemeinsamer Verfügbarkeit.</li>
              <li>Newsletter/Nurture mit Segmenten pro Phase.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Wie baust du mit Content eine verlässliche B2B-Sales-Pipeline?</strong>{" "}
          Indem du Vertrauen vor Kontakt stellst, Inhalte entlang der Entscheiderreise
          orchestrierst, Lead-Signale klug bewertest und Sales mit einem klaren Playbook
          ausstattest. So wird aus Klicks verlässliche Nachfrage – planbar und messbar.
        </p>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="mt-14 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
      >
        <h2 className="text-2xl font-bold mb-2">Möchtest du Blogartikel für dein B2B-Angebot einführen?</h2>
        <p className="mb-4">
            Unsere KI schreibt Expertenartikel und wir identifizieren anonyme B2B-Leser für dein Sales-Team.
        </p>
        <a
          href="https://www.findbar.info"
          className="inline-block rounded-xl border border-emerald-600 px-5 py-3 font-medium hover:bg-emerald-600 hover:text-white"
          aria-label="Kostenloses Erstgespräch anfragen"
        >
        Mehr dazu
        </a>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Brauche ich viel Content, um Leads zu gewinnen?</h3>
            <p>
              Nein. Vier Bausteine reichen: Guide, Vergleich, Case, FAQ. Wichtig sind Klarheit,
              Verlinkungen und Messung – nicht Masse.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wie schnell sehe ich Ergebnisse?</h3>
            <p>
              Erste Verbesserungen zeigen sich oft nach 6–8 Wochen (mehr Tiefe, erste Anfragen).
              Stabile Pipeline entsteht über 3–6 Monate mit kontinuierlichem Feinschliff.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Rolle spielt SEO vs. Paid?</h3>
            <p>
              Beides. SEO bringt stetige, kaufnahe Suchen; Paid beschleunigt die Sichtbarkeit
              deiner Kerninhalte bei passenden Zielgruppen (z.B. LinkedIn, Retargeting).
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wie messe ich Vertrauen?</h3>
            <p>
              Indirekt über Kombinationen: wiederkehrende Besuche, Vergleichs-Reads, Case-Tiefe,
              Antworten auf kaufnahe FAQs und Demo-Requests.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Was gehört in das Sales-Handover?</h3>
            <p>
              Letzte Seiten, Zeit/Scrolltiefe, Downloads, Score mit Begründung, vermutete Use-Cases
              und empfohlener Gesprächsaufhänger.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Brauche ich viel Content, um Leads zu gewinnen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Nein. Vier Bausteine reichen: Guide, Vergleich, Case, FAQ. Wichtig sind Klarheit, Verlinkungen und Messung – nicht Masse.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Wie schnell sehe ich Ergebnisse?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Erste Verbesserungen zeigen sich oft nach 6–8 Wochen. Stabile Pipeline entsteht über 3–6 Monate mit kontinuierlichem Feinschliff.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Welche Rolle spielt SEO vs. Paid?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Beides. SEO liefert stetige, kaufnahe Suchen; Paid beschleunigt die Sichtbarkeit deiner Kerninhalte bei passenden Zielgruppen.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Wie messe ich Vertrauen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Über Signalkombinationen: wiederkehrende Besuche, Vergleichs-Reads, Case-Tiefe, kaufnahe FAQ und Demo-Requests.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Was gehört in das Sales-Handover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Letzte Seiten, Zeit/Scrolltiefe, Downloads, Score mit Begründung, vermutete Use-Cases und ein Gesprächsaufhänger.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Mini-Glossar */}
      <section id="mini-glossar" className="mt-14 mb-20">
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
                <td className="p-3 font-medium text-zinc-900">MQL (Marketing-Qualified Lead)</td>
                <td className="p-3 text-zinc-700">
                  Kontakt mit relevantem Verhalten (Signale) – bereit für die Übergabe an Sales.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">SQL (Sales-Qualified Lead)</td>
                <td className="p-3 text-zinc-700">
                  Von Sales validiert (Fit, Bedarf, Timing) und mit Termin/Next Step versehen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Dwell-Time</td>
                <td className="p-3 text-zinc-700">
                  Verweildauer auf einer Seite; Indikator für Relevanz und Tiefe.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Pipeline-Coverage</td>
                <td className="p-3 text-zinc-700">
                  Verhältnis aus offener Pipeline zu Zielumsatz (z.B. 3×).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">ICP (Ideal Customer Profile)</td>
                <td className="p-3 text-zinc-700">
                  Beschreibung deiner „Best-Fit“-Kunden (Branche, Größe, Reife, Use-Cases).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Attribution</td>
                <td className="p-3 text-zinc-700">
                  Verfahren, um den Beitrag einzelner Touchpoints zur Konversion einzuschätzen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section id="ueber-den-autor" className="mt-14">
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

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>findbar Redaktion</strong> – B2B-Content &amp; Growth.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section id="quellen" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Edelman – Trust Barometer (B2B Insights):{" "}
            <a href="https://www.edelman.com/trust" className={accent}>
              https://www.edelman.com/trust
            </a>
          </li>
          <li>
            LinkedIn B2B Institute – Research &amp; Reports:{" "}
            <a href="https://b2binstitute.org/research" className={accent}>
              https://b2binstitute.org/research
            </a>
          </li>
          <li>
            Google – Think with Google (B2B Buying Journey):{" "}
            <a href="https://www.thinkwithgoogle.com" className={accent}>
              https://www.thinkwithgoogle.com
            </a>
          </li>
          <li>
            Gartner – B2B Buying Journey Ressourcen:{" "}
            <a href="https://www.gartner.com/en/insights/sales" className={accent}>
              https://www.gartner.com/en/insights/sales
            </a>
          </li>
          <li>
            Forrester – B2B Demand &amp; Pipeline Studien:{" "}
            <a href="https://www.forrester.com" className={accent}>
              https://www.forrester.com
            </a>
          </li>
        </ul>
      </section>

      {/* Structured Data: Article + Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Vom Klick zur Chance: Mit Content eine verlässliche B2B-Sales-Pipeline bauen",
            description:
              "Warum Vertrauen Kaltakquise schlägt und wie du die Entscheiderreise mit den richtigen Content-Bausteinen, Lead-Signalen und einem Sales-Playbook orchestrierst.",
            inLanguage: "de",
            image: ["https://www.findbar.info/vertrauen-beim-verkauf-ist-essentiell.jpg"],
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Findbar",
              logo: { "@type": "ImageObject", url: "https://www.findbar.info/icon.png" },
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
            name: "Findbar",
            url: "https://www.findbar.info",
            email: "mailto:lennart@findbar.info",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              postalCode: "32139",
              addressLocality: "Spenge",
              addressCountry: "DE",
            },
            logo: "https://www.findbar.info/icon.png",
            sameAs: [author.linkedin],
          }),
        }}
      />
    </article>
  );
}
