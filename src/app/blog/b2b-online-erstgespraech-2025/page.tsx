// src/app/blog/b2b-online-erstgespraech-2025/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist & Gründer von findbar",
  image: "/lennart-niehausmeier.webp",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
};

export const metadata: Metadata = {
  title:
    "B2B Online-Erstgespräch 2025: Strategie, Leitfaden & Fragen, die wirklich funktionieren",
  description:
    "Wie du 2025 dein B2B-Erstgespräch online führst: Agenda, Fragenkatalog, Vertrauensaufbau, Multi-Threading & nächste Schritte – inklusive Vorlagen.",
  alternates: {
    canonical:
      "https://www.findbar.info/blog/b2b-online-erstgespraech-2025",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "B2B Online-Erstgespräch 2025: Strategie, Leitfaden & Fragen, die wirklich funktionieren",
    description:
      "Praxisleitfaden: So strukturierst du dein Discovery-Call 2025, gewinnst Vertrauen und bringst Entscheider zu klaren Next Steps.",
    type: "article",
    url: "https://www.findbar.info/blog/b2b-online-erstgespraech-2025",
    images: [
      {
        url: "/b2b-sales-in-deutschland.jpg",
        width: 1600,
        height: 600,
        alt: "B2B-Vertrieb in Deutschland: Online-Erstgespräch per Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "B2B Online-Erstgespräch 2025: Strategie, Leitfaden & Fragen, die wirklich funktionieren",
    description:
      "Agenda, Fragen, Multi-Threading & Next Steps – was 2025 im Discovery-Call zählt.",
    images: ["/b2b-sales-in-deutschland.jpg"],
  },
  other: {
    "og:locale": "de_DE",
  },
};

export default function Page() {
  const nowISO = "2025-08-29";
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
          B2B Online-Erstgespräch 2025: Welche Strategie funktioniert tatsächlich?
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst dein Erstgespräch (Discovery-Call) so führen, dass
          Entscheider Vertrauen aufbauen, dich als Problemlöser sehen und dem
          nächsten Schritt zustimmen. Hier bekommst du die bewährte Struktur,
          die besten Fragen und klare Beispiele – fokussiert auf 2025.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime={nowISO}>29.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/b2b-sales-in-deutschland.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/b2b-sales-in-deutschland.jpg"
                alt="B2B-Vertriebsmeeting in Deutschland: Online-Erstgespräch per Video"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Online-Erstgespräch im B2B: Videocall mit Buying-Team
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
            Käufer erwarten 2025 eine klare, wertstiftende Gesprächsführung – der
            Mix aus digitaler Selbstrecherche und menschlicher Beratung gewinnt.
            Belege aus aktuellen Studien zeigen: Omnichannel &amp; Relevanz
            entscheiden.
          </li>
          <li>
            Deine Agenda: Ziel &amp; Kontext, Status-quo &amp; Prioritäten, Impact
            &amp; Business-Case, Entscheidungsweg &amp; Stakeholder, Next Steps mit
            gemeinsamem Plan. Kurz, strukturiert, ergebnisorientiert.
          </li>
          <li>
            Die besten Fragen sind offen, business-orientiert und konkretisieren
            Nutzen &amp; Risiko. Vermeide Früh-Pitches – erst verstehen, dann
            beraten.
          </li>
          <li>
            Social Proof &amp; Thought Leadership erhöhen Vertrauen, besonders bei
            neuen Lösungen. Ein kurzer, passender Insight schlägt jede
            Produkttour.
          </li>
          <li>
            Messe Erfolg nicht an „netten Gesprächen“, sondern an verbindlichen
            Next Steps, Einbindung des Buying-Teams und Fortschritt im Mutual
            Action Plan (MAP).
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
            <a className={`hover:underline ${accent} font-medium`} href="#warum-2025-anders-ist">
              Warum 2025 anders ist
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ziel-und-erfolgsmessung">
              Ziel des Erstgesprächs &amp; Erfolgsmessung
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#agenda">
              Die funktionierende Agenda in 7 Schritten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#fragenkatalog">
              Fragenkatalog: 21 Fragen, die Vertrauen schaffen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#vorbereitung">
              Vorbereitung: ICP, Hypothesen &amp; Research
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxisbeispiele">
              Praxisbeispiele &amp; Vorlagen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#haeufige-fehler">
              Häufige Fehler &amp; Gegenmaßnahmen
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
      <section id="warum-2025-anders-ist" className="mt-6">
        <h2 className="text-2xl font-bold mb-3">Warum 2025 anders ist</h2>
        <p>
          Entscheidungsprozesse sind digitaler, verteilter und selbstbestimmter
          geworden. Viele Buying-Teams informieren sich früh eigenständig,
          vergleichen Alternativen und erwarten erst dann ein fokussiertes
          Gespräch – ohne Smalltalk, dafür mit echten Einsichten. Aktuelle
          Studien zeigen drei Konstanten: Omnichannel ist Standard, digitale
          Selbstrecherche dominiert, und Vertrauen entsteht über relevante
          Inhalte plus klare, menschliche Beratung.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Was das für dein Erstgespräch bedeutet</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Du startest mit Kontext – keine Pitch-Monologe.</li>
              <li>Du bringst einen Point-of-View mit Daten &amp; Relevanz.</li>
              <li>Du klärst Stakeholder &amp; Entscheidungslogik früh.</li>
              <li>Du vereinbarst konkrete Next Steps und Verantwortlichkeiten.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Leitplanken 2025</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Omnichannel &amp; Remote bleiben normal.</li>
              <li>Relevanz &amp; Personalisierung schlagen Volumen.</li>
              <li>Thought Leadership baut Vertrauen schneller auf.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ziel-und-erfolgsmessung" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Ziel des Erstgesprächs &amp; Erfolgsmessung
        </h2>
        <p>
          Das Erstgespräch ist kein Demo-Termin, sondern ein Business-Gespräch
          über Ziele, Prioritäten und Risiken. Dein Ziel ist ein{" "}
          <strong>gemeinsames Verständnis</strong> der Problemstellung und eine{" "}
          <strong>verbindliche Entscheidung &amp; Next Steps</strong>. Miss
          Erfolg an harten Kriterien: Wurde ein relevanter Pain verifiziert?
          Sind Stakeholder identifiziert? Gibt es einen Next Step mit Datum und
          Verantwortlichen? Wurde ein kurzer Mutual Action Plan (MAP) gestartet?
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Metrik</th>
                <th className="p-3 text-left font-semibold">Was „gut“ aussieht</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Stakeholder-Abdeckung</td>
                <td className="p-3">
                  Mind. wirtschaftlicher Sponsor, Fachentscheider und Nutzer
                  benannt; Verantwortlichkeiten erfasst.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Qualifizierter Pain</td>
                <td className="p-3">
                  Messbarer Impact auf Umsatz, Kosten oder Risiko; grober
                  Business-Case skizziert.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Next Steps</td>
                <td className="p-3">
                  Konkreter Termin &amp; Ziel (z.&nbsp;B. Stakeholder-Sync,
                  technische Machbarkeit), MAP erstellt.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="agenda" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Die funktionierende Agenda in 7 Schritten</h2>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <p>
              Diese Agenda ist kurz, führt strukturiert durch die wichtigsten
              Themen und erzeugt Verbindlichkeit. Plane 30–40 Minuten ein:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Auftakt &amp; Zielbild (3–4 Min.):</strong> Bestätige
                Ziel &amp; Agenda, kläre Zeit und Ergebnis.
              </li>
              <li>
                <strong>Kontext &amp; Prioritäten (6–8 Min.):</strong> Wo steht
                das Unternehmen? Welche Initiativen laufen? Was hat Priorität?
              </li>
              <li>
                <strong>Pain &amp; Impact (6–8 Min.):</strong> Was kostet das
                Problem? Was passiert, wenn nichts passiert?
              </li>
              <li>
                <strong>Alternativen &amp; Hürden (4–5 Min.):</strong> Was wurde
                versucht? Was steht im Weg?
              </li>
              <li>
                <strong>Entscheidungsweg (4–5 Min.):</strong> Wer ist beteiligt?
                Welche Kriterien &amp; Meilensteine?
              </li>
              <li>
                <strong>Kurz-Insight (2–3 Min.):</strong> Relevante Zahl,
                Case-Snippet oder Best Practice – kein Pitch.
              </li>
              <li>
                <strong>Next Steps (3–4 Min.):</strong> Zusammenfassung,
                Verbindlichkeit, Termin &amp; MAP.
              </li>
            </ol>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <strong>Mini-Skript:</strong> „Passt es, wenn wir kurz Ziel &amp;
              Agenda abgleichen, dann Ihren Kontext und die wichtigsten
              Prioritäten durchgehen, anschließend den Entscheidungsweg
              klären und mit konkreten Next Steps schließen?“
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Zeitbudget &amp; Taktung</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>30–40 Min. für Erstgespräche, 45–60 Min. bei Enterprise.</li>
              <li>15-Min. Buffer vor/nach dem Call &amp; sauberes Follow-up.</li>
              <li>Früh Stakeholder-Termine blocken (MAP).</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="fragenkatalog" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Fragenkatalog: 21 Fragen, die Vertrauen schaffen
        </h2>
        <p>
          Offene, geschäftsnahe Fragen zeigen echtes Interesse und liefern die
          Informationen, die du für eine gute Empfehlung brauchst. Nutze sie
          als Orientierung – nicht als Verhörliste.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Business &amp; Prioritäten</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Welche Ziele haben Priorität in diesem Quartal?</li>
              <li>Was wäre ein messbarer Erfolg in 6–12 Monaten?</li>
              <li>Welche Risiken bremsen aktuell am stärksten?</li>
              <li>Welche Initiativen laufen parallel?</li>
              <li>Wie sieht der Business-Case grob aus?</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Prozess &amp; Entscheidung</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Wer muss unbedingt an Bord sein?</li>
              <li>Welche Evaluationskriterien sind fix?</li>
              <li>Welche Deadlines &amp; Meilensteine gibt es?</li>
              <li>Welche internen Abhängigkeiten bestehen?</li>
              <li>Wie wird Budget freigegeben?</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Technik &amp; Betrieb</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Wie ist die aktuelle Tool-Landschaft?</li>
              <li>Welche Integrationen sind Pflicht?</li>
              <li>Welche Sicherheits- oder Datenschutzanforderungen gelten?</li>
              <li>Welche Nutzungszahlen erwartest du realistisch?</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Change &amp; Value</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Was hat in der Vergangenheit funktioniert – und warum?</li>
              <li>Was wäre der Impact, wenn nichts passiert?</li>
              <li>Welche Quick Wins sind möglich?</li>
              <li>Welche Einwände erwartest du intern?</li>
              <li>Woran erkennen wir früh, dass wir auf Kurs sind?</li>
            </ol>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Thought Leadership ist kein Content-Feuerwerk, sondern ein
            Vertrauensbooster – sie öffnet Türen, in die Ads allein nicht
            hineinkommen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Edelman &amp; LinkedIn, Thought Leadership Impact Report 2025
            (direktes Zitat)
          </figcaption>
        </figure>
      </section>

      {/* Bild 1 – volle Breite, 16:6 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/vielen-hilft-ein-skript-auf-der-pinnwand-neben-dem-schreibtisch.jpg"
            />
            <img
              loading="lazy"
              src="/vielen-hilft-ein-skript-auf-der-pinnwand-neben-dem-schreibtisch.jpg"
              alt="Leitfaden am Arbeitsplatz: Gesprächsskript am Board neben dem Schreibtisch"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Ein klarer Leitfaden hilft, im Gespräch fokussiert zu bleiben – ohne
          unnatürlich zu wirken.
        </figcaption>
      </figure>

      <section id="vorbereitung" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Vorbereitung: ICP, Hypothesen &amp; Research
        </h2>
        <p>
          Gute Erstgespräche beginnen Tage vorher. Definiere deinen{" "}
          <strong>Ideal Customer Profile (ICP)</strong>, formuliere
          Hypothesen, die du im Call testen willst, und recherchiere
          Kontext: aktuelle Initiativen, Zahlen, Presse, Team. Lege ein
          1-Pager-Briefing an: Ziele des Accounts, vermutete Pain-Points,
          mögliche Quick Wins, Stakeholder-Map, 3–5 Kernfragen.
        </p>
        <div className="grid gap-6 md:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">2:1-Gegenüberstellung</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-medium">Vor dem Call</div>
                <ul className="mt-2 list-disc ml-5 space-y-1">
                  <li>Account-Briefing &amp; Hypothesen</li>
                  <li>3–5 Insight-Snippets statt Produktfolien</li>
                  <li>Stakeholder-Map &amp; Terminvorschläge</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Im Call</div>
                <ul className="mt-2 list-disc ml-5 space-y-1">
                  <li>Agenda bestätigen &amp; Kontext heben</li>
                  <li>Fragen führen, Pitch dosieren</li>
                  <li>Next Step &amp; MAP sichern</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Schnell-Checkliste</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>LinkedIn-Research zu Personen &amp; Themen</li>
              <li>Website &amp; Presse: Projekte, KPIs, Zitate</li>
              <li>2 Referenzen, 1 Case, 1 Zahl (relevant)</li>
              <li>Meeting-Ziel, Zeitbox, klare Agenda</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="praxisbeispiele" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Praxisbeispiele &amp; Vorlagen</h2>
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
          <h3 className="font-semibold">E-Mail zur Terminbestätigung</h3>
          <p className="mt-2 text-sm">
            „Freue mich auf morgen. Ziel: prüfen, ob wir Problem&nbsp;X mit
            Y&nbsp;% weniger Aufwand lösen. Agenda: Kontext, Prioritäten,
            Entscheidungsweg, Next Steps. Passt das? Falls ja, wer sollte noch
            dabei sein?“
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-4 bg-white">
          <h3 className="font-semibold">Mutual Action Plan (Kurzfassung)</h3>
          <table className="w-full text-sm mt-2">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Meilenstein</th>
                <th className="p-3 text-left font-semibold">Bis wann</th>
                <th className="p-3 text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Stakeholder-Sync</td>
                <td className="p-3">KW&nbsp;36</td>
                <td className="p-3">Sponsor &amp; Vertrieb</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Technischer Fit</td>
                <td className="p-3">KW&nbsp;37</td>
                <td className="p-3">IT &amp; SE</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Business-Case</td>
                <td className="p-3">KW&nbsp;38</td>
                <td className="p-3">Finance &amp; Vertrieb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Do</th>
                <th className="p-3 text-left font-semibold">Don&apos;t</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Agenda &amp; Zeit bestätigen</td>
                <td className="p-3">Monologe &amp; Feature-Listen</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Business-Impact quantifizieren</td>
                <td className="p-3">Nur Technik diskutieren</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Stakeholder früh einbinden</td>
                <td className="p-3">Auf „wir melden uns“ hoffen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bild 2 – volle Breite, 16:6 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/vertrauen-ist-essentiell-in-b2b-sales.jpg"
            />
            <img
              loading="lazy"
              src="/vertrauen-ist-essentiell-in-b2b-sales.jpg"
              alt="Vertrauen im B2B-Vertrieb: Händedruck nach erfolgreichem Erstgespräch"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Vertrauen entsteht, wenn du Probleme präzise verstehst und konkrete
          nächste Schritte vereinbarst.
        </figcaption>
      </figure>

      <section id="haeufige-fehler" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Häufige Fehler &amp; Gegenmaßnahmen
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold mb-2">Fehler</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Früh-Pitch ohne Verständnis für Prioritäten</li>
              <li>Kein Entscheidungsweg geklärt</li>
              <li>Keine Next Steps, nur „wir melden uns“</li>
              <li>Zu viel Tool-Talk, zu wenig Business-Impact</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Gegenmaßnahmen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Agenda &amp; Ziel fixieren, Fragen führen</li>
              <li>Stakeholder &amp; Kriterien aufdecken</li>
              <li>MAP starten, Termin &amp; Owner sichern</li>
              <li>Impact quantifizieren, kurze Referenz einbauen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wie lange sollte ein B2B-Erstgespräch online dauern?
            </h3>
            <p>30–40 Minuten reichen meist. Enterprise-Kontexte: 45–60 Minuten.</p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Fragen sind Pflicht?</h3>
            <p>
              Ziele &amp; Prioritäten, messbarer Impact, Entscheidungsweg
              (Stakeholder, Kriterien, Meilensteine) und klare Next Steps.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Sollte ich im Erstgespräch schon eine Demo zeigen?
            </h3>
            <p>
              Nur kurz, wenn es Verständnis erleichtert. Fokus bleibt auf
              Business-Zielen und Entscheidungspfad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie messe ich den Erfolg des Erstgesprächs?
            </h3>
            <p>
              Verbindliche Next Steps, identifizierte Stakeholder, qualifizierter
              Pain &amp; grober Business-Case, MAP gestartet.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Tools sind sinnvoll?</h3>
            <p>
              CRM, Kalender-Link, Meeting-Recorder (mit Einwilligung), MAP-Template
              und eine kurze Follow-up-E-Mail Vorlage.
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
                  name: "Wie lange sollte ein B2B-Erstgespräch online dauern?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "30–40 Minuten reichen meist. Enterprise-Kontexte: 45–60 Minuten.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Fragen sind Pflicht?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ziele & Prioritäten, messbarer Impact, Entscheidungsweg (Stakeholder, Kriterien, Meilensteine) und klare Next Steps.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sollte ich im Erstgespräch schon eine Demo zeigen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nur kurz, wenn es Verständnis erleichtert. Fokus bleibt auf Business-Zielen und Entscheidungspfad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie messe ich den Erfolg des Erstgesprächs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Verbindliche Next Steps, identifizierte Stakeholder, qualifizierter Pain & grober Business-Case, MAP gestartet.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Tools sind sinnvoll?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "CRM, Kalender-Link, Meeting-Recorder (mit Einwilligung), MAP-Template und eine kurze Follow-up-E-Mail Vorlage.",
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
            Welche Strategie funktioniert 2025 wirklich im B2B-Online-Erstgespräch?
          </strong>{" "}
          Eine klare, business-orientierte Gesprächsführung mit fokussierter
          Agenda, starken Fragen und verbindlichen Next Steps. Kombiniere kurze
          Insights mit echtem Verständnis – dann folgen Vertrauensaufbau und
          Fortschritt fast automatisch.
        </p>
      </section>

      {/* CTA ohne Formular, Button führt zu findbar.info */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel für dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme
            B2B-Leser für dein Sales-Team.
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
          Mini-Glossar – Die wichtigsten Begriffe zum B2B-Online-Erstgespräch
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
                <td className="p-3 font-medium text-zinc-900">Discovery-Call</td>
                <td className="p-3 text-zinc-700">
                  Erstes Qualifikations- und Vertrauensgespräch, das Bedürfnisse,
                  Prioritäten und den Entscheidungsweg klärt – ohne lange Pitch-Folien.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Ideal Customer Profile (ICP)
                </td>
                <td className="p-3 text-zinc-700">
                  Beschreibung der Kunden, bei denen dein Angebot den höchsten
                  Mehrwert stiftet (Branche, Größe, Reifegrad, Trigger).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Buying-Committee
                </td>
                <td className="p-3 text-zinc-700">
                  Gruppe aus Sponsor, Fachbereich, IT, Compliance u.&nbsp;a., die
                  an der Kaufentscheidung beteiligt ist.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Mutual Action Plan (MAP)
                </td>
                <td className="p-3 text-zinc-700">
                  Gemeinsamer, verbindlicher Fahrplan mit Meilensteinen, Terminen
                  und Verantwortlichkeiten bis zur Entscheidung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">MEDDICC</td>
                <td className="p-3 text-zinc-700">
                  Framework zur Deal-Qualifizierung (u.&nbsp;a. Metrics, Economic
                  Buyer, Decision Criteria); hilft, Risiken früh zu erkennen.
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
            src="/lennart-niehausmeier.webp"
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">
              {author.role}
            </div>
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
            <strong>Peer Reviewer – B2B-Vertrieb</strong> – Senior Sales Advisor.{" "}
            <a
              href="https://www.linkedin.com"
              className={`hover:underline ${accent}`}
            >
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
            McKinsey (2024): „Five fundamental truths: How B2B winners keep
            growing“. https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-fundamental-truths-how-b2b-winners-keep-growing :contentReference[oaicite:0]{index=0}
          </li>
          <li>
            Gartner (2025 Berichte/Recaps): Präferenz für „rep-free buying“
            und Konsequenzen für Kaufreue. https://www.gartner.com/en/sales/insights/b2b-buying-journey &amp; https://www.demandgenreport.com/industry-news/news-brief/3-out-of-5-b2b-buyers-prefer-a-rep-free-buying-experience-gartner/49802/ :contentReference[oaicite:1]{index=1}
          </li>
          <li>
            Edelman &amp; LinkedIn (2025): „B2B Thought Leadership Impact
            Report“. https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report :contentReference[oaicite:2]{index=2}
          </li>
          <li>
            Salesforce (2024/25): „State of Sales“. https://www.salesforce.com/resources/research-reports/state-of-sales/ :contentReference[oaicite:3]{index=3}
          </li>
          <li>
            HubSpot (2024): „Sales Trends Report“. https://www.hubspot.com/hubfs/HubSpots%202024%20Sales%20Trends%20Report.pdf :contentReference[oaicite:4]{index=4}
          </li>
          <li>
            Nextiva (2025): „How to Survive Sales Discovery Calls“. https://www.nextiva.com/blog/sales-discovery-calls.html :contentReference[oaicite:5]{index=5}
          </li>
          <li>
            McKinsey (2021): „B2B sales: Omnichannel everywhere, every time“. https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/b2b-sales-omnichannel-everywhere-every-time :contentReference[oaicite:6]{index=6}
          </li>
        </ul>
      </section>

      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "B2B Online-Erstgespräch 2025: Strategie, Leitfaden & Fragen, die wirklich funktionieren",
            description:
              "Praxisleitfaden für das B2B-Erstgespräch 2025 – mit Agenda, Fragenkatalog, Vertrauensaufbau und Next Steps.",
            inLanguage: "de",
            image: ["https://www.findbar.info/b2b-sales-in-deutschland.jpg"],
            datePublished: "2025-08-29",
            dateModified: "2025-08-29",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Findbar",
              url: "https://www.findbar.info",
              logo: {
                "@type": "ImageObject",
                url: "https://www.findbar.info/icon.png",
              },
            },
            mainEntityOfPage:
              "https://www.findbar.info/blog/b2b-online-erstgespraech-2025",
          }),
        }}
      />

      {/* Company / Organization Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Findbar",
            url: "https://www.findbar.info",
            email: "lennart@findbar.info",
            logo: "https://www.findbar.info/icon.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              postalCode: "32139",
              addressLocality: "Spenge",
              addressCountry: "DE",
            },
          }),
        }}
      />
    </article>
  );
}
