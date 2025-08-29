// src/app/blog/kaltakquise-b2b-was-ist-erlaubt/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const title =
  "Kaltakquise im B2B: Was ist erlaubt? Praxisleitfaden mit rechtssicheren Beispielen";
const description =
  "Was in der B2B-Kaltakquise 2025 in Deutschland erlaubt ist: Telefon, E-Mail, LinkedIn & Co. – einfach erklärt mit Checklisten, Vorlagen und rechtlichen Grundlagen.";
const canonical = "https://www.findbar.info/blog/kaltakquise-b2b-was-ist-erlaubt";
const hero = "/person-bei-kaltsquise.webp";
const accent = "text-emerald-600";

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist und Gründer von findbar",
  image: "/lennart-niehausmeier.webp",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
} as const;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.findbar.info"),
  alternates: {
    canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    images: [{ url: hero, width: 1200, height: 450, alt: "B2B-Kaltakquise: rechtssichere Vorgehensweisen am Telefon und per E-Mail" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [hero],
  },
};

export default function Page() {
  const published = "2025-08-29";
  const modified = "2025-08-29";
  const readingTime = "11 Minuten";

  const faq = [
    {
      q: "Ist telefonische Kaltakquise im B2B generell erlaubt?",
      a: "Nur in engen Grenzen: Gegenüber Unternehmen ist ein Werbeanruf ohne vorherige ausdrückliche Einwilligung nur dann zulässig, wenn eine sogenannte mutmaßliche Einwilligung angenommen werden kann – also wenn mit einem Anruf konkret zu rechnen war (z. B. bei eindeutigem, aktuellem Interesse und klarer Branchennähe). In der Praxis ist das selten der Fall.",
    },
    {
      q: "Darf ich ungefragt E-Mails an Firmenadressen senden?",
      a: "Nein, werbliche E-Mails ohne vorherige Einwilligung sind grundsätzlich unzulässig – auch im B2B. Eine Ausnahme gilt nur für das Bestandskunden-Privileg (§ 7 Abs. 3 UWG), wenn alle Voraussetzungen erfüllt sind (eigene ähnliche Produkte, Adresse bei Verkauf erhoben, klarer Opt-out, kein Widerspruch).",
    },
    {
      q: "Wie sieht es mit LinkedIn/Xing-Direktnachrichten aus?",
      a: "Direktnachrichten mit Werbecharakter gelten wie E-Mails und sind ohne Einwilligung unzulässig. Ein bloßer Kontakt oder eine Vernetzung ersetzt keine Einwilligung.",
    },
    {
      q: "Ist Briefwerbung erlaubt?",
      a: "Ja, postalische Werbung ist in der Regel zulässig (berechtigtes Interesse), solange keine Widersprüche bestehen, die Datenquelle transparent ist und sensible Daten tabu bleiben. Respektiere Werbewidersprüche und Robinsonlisten.",
    },
    {
      q: "Reicht ‚berechtigtes Interesse‘ nach DSGVO für Kaltakquise?",
      a: "Für die Datenverarbeitung kann berechtigtes Interesse grundsätzlich tragen. Aber für den Versandkanal gelten zusätzlich die strengeren Spezialregeln des UWG (z. B. Einwilligungspflicht bei E-Mail). DSGVO ersetzt UWG also nicht.",
    },
    {
      q: "Welche Beweise brauche ich für eine Einwilligung (Opt-in)?",
      a: "Du solltest Einwilligungen nachweisbar dokumentieren (Zeitstempel, Quelle, Zweck, Double-Opt-In-Protokoll). Ohne Beleg riskierst du Abmahnungen und Bußgelder.",
    },
  ];

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
          Kaltakquise im B2B: Was ist erlaubt? Praxisleitfaden
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst neue B2B-Kunden gewinnen – aber rechtskonform. Hier erfährst du, welche
          Kanäle du 2025 in Deutschland nutzen darfst, wo Einwilligungen Pflicht sind und wie
          du Kaltakquise so planst, dass Chancen &gt; Risiken sind.
        </p>

        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime={modified}>29.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">{readingTime}</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={hero} />
              <img
                loading="eager"
                fetchPriority="high"
                src={hero}
                alt="B2B-Kaltakquise: Eine Person bereitet ein rechtssicheres Akquise-Telefonat vor"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Kaltakquise funktioniert – wenn du die rechtlichen Spielregeln kennst.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src={author.image}
            alt="Autor: Lennart Niehausmeier"
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
            <strong>Telefon:</strong> B2B-Werbeanrufe ohne Einwilligung sind nur in seltenen
            Ausnahmefällen zulässig (mutmaßliche Einwilligung). Rechne eher damit, dass du
            Einwilligungen brauchst – und dokumentiere sie sauber.
          </li>
          <li>
            <strong>E-Mail &amp; LinkedIn-DMs:</strong> Werbliche Nachrichten sind ohne vorherige
            ausdrückliche Einwilligung grundsätzlich unzulässig. Bestandskunden-Privileg gilt nur,
            wenn alle Voraussetzungen erfüllt sind.
          </li>
          <li>
            <strong>Post:</strong> Briefwerbung ist meist erlaubt (berechtigtes Interesse), solange
            Widersprüche respektiert, Quellen genannt und sensible Daten gemieden werden.
          </li>
          <li>
            <strong>DSGVO + UWG:</strong> DSGVO regelt die Datenbasis (z. B. berechtigtes Interesse),
            das UWG die Kontaktwege. Beide müssen passen.
          </li>
          <li>
            <strong>Praxis:</strong> Nutze Opt-in-Quellen, bestätige per Double-Opt-In, pflege
            Widerspruchslisten, führe Call-Reason-Logs und trainiere dein Team auf verbindliche
            Gesprächsleitfäden.
          </li>
          <li>
            <strong>Risiken:</strong> Abmahnungen, Unterlassung, Bußgelder – bereits eine einzige
            unzulässige Werbe-Mail kann teuer werden. Saubere Prozesse sparen Ärger und Geld.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-kaltakquise">
              Was ist Kaltakquise im B2B – und warum ist Rechtssicherheit so wichtig?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#rechtsgrundlagen">
              Rechtsgrundlagen: DSGVO vs. UWG – wie greifen beide ineinander?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kanal-guide">
              Kanal-Guide 2025: Telefon, E-Mail, LinkedIn-DM, Brief &amp; mehr
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mutmassliche-einwilligung">
              Mutmaßliche Einwilligung am Telefon: Was heißt das konkret?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#bestandskunden-privileg">
              Bestandskunden-Privileg bei E-Mails: Bedingungen &amp; Beispiele
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxis-checklisten">
              Praxis-Checklisten: Einwilligung, Nachweise, Widerspruch &amp; Logging
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#leitfaden-prozess">
              Leitfaden: Rechtskonformen Akquise-Prozess in 7 Schritten bauen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#risiken-strafen">
              Risiken, Abmahnungen &amp; typische Fehler – und wie du sie vermeidest
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#beispiele-vorlagen">
              Praxisbeispiele, Vorlagen &amp; Formulierungen
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
      <section id="was-ist-kaltakquise" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Was ist Kaltakquise im B2B – und warum ist Rechtssicherheit so wichtig?</h2>
        <p className="leading-relaxed">
          Kaltakquise bedeutet, potenzielle Geschäftskunden ohne bestehende Beziehung anzusprechen –
          klassisch per Telefon, heute zusätzlich per E-Mail, LinkedIn-Nachricht oder sogar per Video-Pitch.
          Das Ziel: Bedarf wecken, ein Erstgespräch vereinbaren, Termine qualifizieren. Das Problem: Nicht
          jeder Kontaktkanal ist ohne Weiteres zulässig. In Deutschland schützt das Gesetz gegen den
          unlauteren Wettbewerb (UWG) vor unzumutbarer Belästigung. Gleichzeitig regelt die DSGVO, auf
          welcher rechtlichen Basis du personenbezogene Daten verarbeiten darfst. Wer die Regeln ignoriert,
          riskiert Abmahnungen, Unterlassungserklärungen und Imageschäden – oft schon nach einer einzigen
          Nachricht. Die gute Nachricht: Mit klaren Prozessen ist rechtskonforme Kaltakquise machbar.
        </p>

        {/* Bild 1 – volle Breite */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/früher-war-kaltsquise-primär-via-telefon.webp" />
              <img
                loading="lazy"
                src="/früher-war-kaltsquise-primär-via-telefon.webp"
                alt="Früher war Kaltakquise primär via Telefon – heute gibt es mehrere Kanäle"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Kaltakquise war lange Telefon-Domäne – heute ist der Rechtsrahmen je Kanal unterschiedlich.
          </figcaption>
        </figure>
      </section>

      <section id="rechtsgrundlagen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Rechtsgrundlagen: DSGVO vs. UWG – wie greifen beide ineinander?</h2>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-2">DSGVO (Datenbasis)</h3>
              <p className="text-zinc-700">
                Die DSGVO regelt, ob und wie du personenbezogene Daten verarbeiten darfst. Für Direktwerbung
                kommt oft <em>berechtigtes Interesse</em> in Frage (Erwägungsgrund&nbsp;47). Das heißt: Du
                darfst Daten nutzen, wenn deine Interessen die Interessen der Betroffenen überwiegen und du
                Transparenz, Widerspruchsmöglichkeiten und Datensparsamkeit sicherstellst.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">UWG (Kontaktweg)</h3>
              <p className="text-zinc-700">
                Das UWG entscheidet, welche <em>Kontaktkanäle</em> du ohne Einwilligung nutzen darfst. Bei
                Telefon, E-Mail oder Direktnachrichten gelten strenge Regeln. Verstöße sind unlauter und können
                abgemahnt werden. Wichtig: DSGVO ersetzt UWG nicht – du brauchst beides im Blick.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <strong className="block mb-1">Merke:</strong>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <span className="font-medium">DSGVO</span>: Rechtsgrundlage für die <em>Datenverarbeitung</em> (z. B. berechtigtes Interesse, Einwilligung).
            </li>
            <li>
              <span className="font-medium">UWG</span>: Regeln für die <em>Ansprache</em> (z. B. Telefonwerbung, E-Mail-Werbung).
            </li>
            <li>
              Beides muss passen – sonst drohen Abmahnungen &amp; Bußgelder.
            </li>
          </ul>
        </div>
      </section>

      <section id="kanal-guide" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Kanal-Guide 2025: Telefon, E-Mail, LinkedIn-DM, Brief &amp; mehr</h2>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-40">Kanal</th>
                <th className="text-left font-semibold p-3">Status im B2B</th>
                <th className="text-left font-semibold p-3">Kernbedingung</th>
                <th className="text-left font-semibold p-3 w-56">Praxis-Hinweis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="p-3 font-medium">Telefon</td>
                <td className="p-3">Nur in Ausnahmefällen ohne Einwilligung</td>
                <td className="p-3">Mutmaßliche Einwilligung erforderlich</td>
                <td className="p-3">Immer Call-Reason dokumentieren; Robinsonlisten beachten</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">E-Mail</td>
                <td className="p-3">Grundsätzlich <span className="font-semibold">nur mit Einwilligung</span></td>
                <td className="p-3">Ausnahme: Bestandskunden-Privileg (§ 7 Abs. 3 UWG)</td>
                <td className="p-3">Double-Opt-In + Opt-out-Link + Absender-Transparenz</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">LinkedIn/Xing-DM</td>
                <td className="p-3">Wie E-Mail: Einwilligung notwendig</td>
                <td className="p-3">Vernetzung ersetzt keine Einwilligung</td>
                <td className="p-3">Erst Content/Events, später Opt-in anbieten</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Briefpost</td>
                <td className="p-3">Meist zulässig (berechtigtes Interesse)</td>
                <td className="p-3">Transparenz + Widerspruch respektieren</td>
                <td className="p-3">Saubere Datenquelle nennen, keine sensiblen Daten</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Fax/SMS</td>
                <td className="p-3">In der Regel unzulässig ohne Einwilligung</td>
                <td className="p-3">Scharfe UWG-Vorgaben</td>
                <td className="p-3">Meiden; Alternativen nutzen</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Rechtskonforme B2B-Akquise ist kein Bauchgefühl, sondern ein sauber dokumentierter Prozess:
            Einwilligungen, kanalbezogene Regeln und ein klarer Widerspruchs-Workflow sind Pflicht.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Zusammenfassung gängiger Rechtsprechung und Kammer-Leitfäden (indirektes Zitat)
          </figcaption>
        </figure>
      </section>

      <section id="mutmassliche-einwilligung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Mutmaßliche Einwilligung am Telefon: Was heißt das konkret?</h2>
        <p className="leading-relaxed">
          Die „mutmaßliche Einwilligung“ ist eine enge Ausnahme: Ein Werbeanruf ohne ausdrückliches Opt-in
          kann zulässig sein, wenn objektiv erwartet werden durfte, dass der Angerufene <em>genau diesen</em>
          Anruf für <em>genau dieses</em> Angebot begrüßt. Das setzt eine klare Branchennähe, einen aktuellen,
          konkreten Anlass und ein erkennbares Interesse voraus (z. B. jüngste RfQ-Ausschreibung, öffentlich
          bekundeter Bedarf, messerscharfe Zielgruppenzuordnung). Bloße generische Relevanz („wir sind auch im
          B2B-Softwaremarkt“) reicht nicht.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-[1.3fr_0.7fr] items-start">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-lg mb-2">Beispiele &amp; Gegenbeispiele</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <span className="font-medium">Eher zulässig:</span> Du rufst die technische Leitung
                eines produzierenden Betriebs an, weil der Betrieb in einer öffentlichen Ausschreibung
                <em>genau</em> eine Maschine sucht, die du in Serie liefern kannst.
              </li>
              <li>
                <span className="font-medium">Eher unzulässig:</span> Kaltanruf bei einer allgemeinen
                info@-Nummer ohne Anlass, nur weil das Unternehmen in derselben Branche tätig ist.
              </li>
              <li>
                <span className="font-medium">Grenzfall:</span> Du reagierst auf eine konkrete Messe-
                Gesprächsanfrage – dann liegt eher eine Einwilligung vor, wenn der Kontakt ausdrücklich
                um Rückruf gebeten hat.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="font-semibold mb-2">Call-Reason-Log (Mini-Template)</h4>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Datum/Uhrzeit, Ansprechpartner, Nummer</li>
              <li>Konkreter Anlass (Ausschreibung, Bedarfshinweis, Publikation)</li>
              <li>Produkte/Leistungen mit eindeutiger Passung</li>
              <li>Kurz-Pitch (1 Satz), kein Druck</li>
              <li>Hinweis auf Widerspruchsrecht &amp; Opt-out</li>
              <li>Ergebnis (kein Interesse, Termin, Wiedervorlage)</li>
            </ol>
          </aside>
        </div>
      </section>

      <section id="bestandskunden-privileg" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Bestandskunden-Privileg bei E-Mails: Bedingungen &amp; Beispiele</h2>
        <p className="leading-relaxed">
          Du darfst Bestandskunden <em>ähnliche eigene</em> Produkte per E-Mail bewerben, wenn <strong>alle</strong> Bedingungen erfüllt sind:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Adresse wurde <em>im Zusammenhang mit einem Verkauf</em> erhalten (nicht nur Lead-Magnet).</li>
          <li>Es geht um <em>eigene</em>, <em>ähnliche</em> Produkte/Dienstleistungen.</li>
          <li>Bei Erhebung und bei jeder E-Mail gibt es eine <em>klare Opt-out-Möglichkeit</em>.</li>
          <li>Es liegt <em>kein Widerspruch</em> vor; Absender ist transparent.</li>
        </ul>
        <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold text-lg mb-2">Beispiel-Formulierung Opt-out-Hinweis</h3>
          <p className="text-sm">
            „Du erhältst diese E-Mail, weil du bei uns [Produkt/Dienstleistung] gekauft hast. Wir informieren dich
            über ähnliche Angebote aus unserem Portfolio. Du kannst dem jederzeit widersprechen – klicke dazu
            auf ‚Abmelden‘ oder schreibe uns an datenschutz@deinefirma.de.“
          </p>
        </div>
      </section>

      <section id="praxis-checklisten" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Praxis-Checklisten: Einwilligung, Nachweise, Widerspruch &amp; Logging</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Einwilligungen (Opt-in)</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Explizit, granular (Kanal), freiwillig, informiert, dokumentiert</li>
              <li>Double-Opt-In inkl. Zeitstempel, Hash/Token, IP (Beweis)</li>
              <li>Transparente Zwecke; kein vorangekreuztes Kästchen</li>
              <li>Einfacher Widerruf (1-Klick-Abmeldung); sofortige Wirkung</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Widerspruchs- &amp; Sperrlisten</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Opt-out-Events zentral erfassen (E-Mail, Telefon, Post)</li>
              <li>Werbesperrdateien pflegen; Team und Tools synchronisieren</li>
              <li>Keine Re-Aktivierung ohne erneutes Opt-in</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 md:col-span-2">
            <h3 className="font-semibold mb-2">Transparenz &amp; Dokumentation</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Datenschutzhinweise aktuell; Rechtsgrundlagen je Kanal erläutern</li>
                <li>Call-Reason-Logs (Telefon), DOI-Protokolle (E-Mail), Opt-out-Historie</li>
                <li>Source-of-Lead (Messe, Webinar, Download) nachvollziehbar</li>
              </ul>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Nur notwendige Daten nutzen (Datensparsamkeit)</li>
                <li>Datenquellen bei Postwerbung angeben</li>
                <li>Aufbewahrungsfristen definieren und automatisieren</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bild 2 – volle Breite */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/rechtskonforme-kaltsquise-ist-in-deutschland-sehr-wichtig.webp" />
              <img
                loading="lazy"
                src="/rechtskonforme-kaltsquise-ist-in-deutschland-sehr-wichtig.webp"
                alt="Rechtskonforme Kaltakquise ist in Deutschland besonders wichtig"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Dokumentation &amp; Transparenz sind die halbe Miete – so vermeidest du Ärger.
          </figcaption>
        </figure>
      </section>

      <section id="leitfaden-prozess" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Leitfaden: Rechtskonformen Akquise-Prozess in 7 Schritten bauen</h2>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong>Zielgruppenschärfe herstellen</strong> – ICP definieren, Branchenlisten prüfen, Fremddaten
            nur aus seriösen, transparenten Quellen nutzen. Prüfe Werbewidersprüche vor Erstkontakt.
          </li>
          <li>
            <strong>Kanalstrategie festlegen</strong> – Telefon nur mit tragfähigem Anlass; E-Mail/DM nur mit
            Opt-in; Post für Erstkontakt erwägen. Füge Opt-in-Mechanismen in alle Touchpoints ein.
          </li>
          <li>
            <strong>Rechtsgrundlagen dokumentieren</strong> – berechtigtes Interesse (Interessenabwägung) oder
            Einwilligung sauber herleiten; Kommunikationskanal-Regeln daneben festhalten.
          </li>
          <li>
            <strong>Consent &amp; Logging aufsetzen</strong> – Double-Opt-In, Event-Tracking für Opt-outs, Call-Logs,
            zentrale Sperrlisten. Rechte der Betroffenen (Auskunft, Löschung, Widerspruch) operationalisieren.
          </li>
          <li>
            <strong>Templates &amp; Leitfäden</strong> – kurze, hilfreiche Ansprache, kein Druck, klare Mehrwerte,
            sofortige Opt-out-Option. Für Telefon: 30-Sekunden-Pitch + Einwilligungsfrage für Follow-ups.
          </li>
          <li>
            <strong>Training &amp; Qualitätssicherung</strong> – Roll-Plays, Einwandbehandlung, rechtliche Do’s&amp;Don’ts;
            Stichproben, Vier-Augen-Prinzip für Listenexporte.
          </li>
          <li>
            <strong>Review &amp; Audit</strong> – Beschwerden und Abmeldungen monatlich prüfen, Prozesse nachschärfen,
            Policy-Updates kommunizieren.
          </li>
        </ol>
      </section>

      <section id="risiken-strafen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Risiken, Abmahnungen &amp; typische Fehler – und wie du sie vermeidest</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="font-semibold mb-2">Typische Fehler</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>„Wir sind vernetzt, also darf ich werben“ – falsch.</li>
              <li>Bestandskunden-Privileg ohne echten Kauf genutzt.</li>
              <li>Kein DOI-Nachweis, fehlende Opt-out-Links.</li>
              <li>Generische Telefon-Listen ohne Anlass.</li>
              <li>Widersprüche nicht systemweit gesperrt.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">So vermeidest du Ärger</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Immer Kanalregeln prüfen (UWG) &amp; Datenbasis dokumentieren (DSGVO).</li>
              <li>Einwilligungen nachweisbar speichern und versionieren.</li>
              <li>Jede Nachricht mit klarer Abmelde-Option versehen.</li>
              <li>„Reason-Why“ für Telefonate schriftlich festhalten.</li>
              <li>Reklamationen innerhalb von 48 h final bearbeiten.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="beispiele-vorlagen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Praxisbeispiele, Vorlagen &amp; Formulierungen</h2>

        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Telefon – Einstiegssatz (mit Anlass)</h3>
            <p className="text-sm">
              „Hallo Frau Müller, hier ist [Name] von [Firma]. Ich rufe an, weil Sie letzte Woche
              in Ihrer Ausschreibung ausdrücklich eine [Kategorie]-Lösung angefragt haben. Darf ich
              Ihnen in 30 Sekunden erklären, wie wir dasselbe bei [Referenzkunde] gelöst haben – und
              dann entscheiden Sie, ob ein Termin sinnvoll ist?“
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Opt-in-E-Mail nach Event/Webinar</h3>
            <p className="text-sm">
              „Danke für deine Teilnahme am Webinar ‚[Titel]‘. Wenn du künftig ähnliche Insights und
              Einladungen erhalten möchtest, bestätige bitte kurz dein Einverständnis: [Bestätigungs-Button].
              Du kannst dich jederzeit mit einem Klick abmelden.“
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5 md:col-span-2">
            <h3 className="font-semibold mb-2">Brief – Aufbau (Erstkontakt)</h3>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Klarer Nutzen in der Betreffzeile (kundennah)</li>
              <li>1–2 Belege (Zahlen/Case), kein Marketing-Buzzwording</li>
              <li>Konkreter nächster Schritt (z. B. QR zum Opt-in oder Terminbuchung)</li>
              <li>Transparenz: Datenquelle + Widerspruchsmöglichkeit (kurz)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          {faq.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold">{item.q}</h3>
              <p>{item.a}</p>
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
              "mainEntity": faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        ></script>
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Kaltakquise im B2B – was ist erlaubt?</strong> Telefon nur mit tragfähiger mutmaßlicher
          Einwilligung, E-Mails und Social-DMs grundsätzlich nur mit Opt-in, Briefwerbung meist zulässig.
          DSGVO (Datenbasis) und UWG (Kanalregeln) greifen ineinander. Wer Einwilligungen, Opt-outs und
          Dokumentation konsequent umsetzt, betreibt planbare, rechtssichere B2B-Akquise.
        </p>
      </section>

      {/* CTA ohne Formular, Button führt zu findbar.info */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel für dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme B2B-Leser für dein Sales-Team.
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
        <h2 className="text-2xl font-bold mb-3">Mini-Glossar - Die wichtigsten Begriffe zu B2B-Kaltakquise</h2>

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
                <td className="p-3 font-medium text-zinc-900">Mutmaßliche Einwilligung</td>
                <td className="p-3 text-zinc-700">
                  Enge Ausnahme bei Telefonwerbung im B2B: Der Anruf ist nur zulässig, wenn ein konkreter
                  Anlass besteht und der Angerufene damit rechnen durfte.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Bestandskunden-Privileg</td>
                <td className="p-3 text-zinc-700">
                  Erlaubt E-Mail-Werbung für eigene ähnliche Produkte an Bestandskunden, wenn alle Bedingungen
                  (Erhebung bei Verkauf, Opt-out, Transparenz) erfüllt sind.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Double-Opt-In (DOI)</td>
                <td className="p-3 text-zinc-700">
                  Zweistufiges Bestätigungsverfahren, das Einwilligungen nachweisbar macht (z. B. Link in
                  Bestätigungs-E-Mail).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Berechtigtes Interesse</td>
                <td className="p-3 text-zinc-700">
                  DSGVO-Rechtsgrundlage, die Direktwerbung grundsätzlich zulassen kann – eine Interessenabwägung
                  und Transparenz bleiben Pflicht.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Werbesperrdatei</td>
                <td className="p-3 text-zinc-700">
                  Interne Liste, die Widersprüche gegen Werbung kanalübergreifend respektiert und erneute
                  Kontaktaufnahme verhindert.
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
            <strong>findbar Redaktion</strong> – Fachreview Content &amp; Rechtstext-Kohärenz.{" "}
            <a
              href="https://www.findbar.info"
              className={`hover:underline ${accent}`}
            >
              Website
            </a>
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            § 7 UWG – Unzumutbare Belästigungen (gesetze-im-internet.de): https://www.gesetze-im-internet.de/uwg_2004/__7.html
          </li>
          <li>
            § 7a UWG – Einwilligung in Telefonwerbung (gesetze-im-internet.de): https://www.gesetze-im-internet.de/uwg_2004/BJNR141400004.html
          </li>
          <li>
            BGH, VI ZR 721/15 – Unerbetene Werbe-E-Mails (dejure.org): https://dejure.org/2017%2C9951
          </li>
          <li>
            IHK München – Marketing per E-Mail, Telefon, Brief etc.: https://www.ihk-muenchen.de/ratgeber/recht/werbung-fairer-wettbewerb/marketing-per-email-telefon-brief-etc/
          </li>
          <li>
            IHK Köln – Werbung per Telefon, Brief und E-Mail: https://www.ihk.de/koeln/hauptnavigation/recht-steuern/werbung-per-telefon-fax-und-e-mail-5224338
          </li>
          <li>
            OLG Hamm, 18 U 154/22 – Werbe-Nachrichten über Social-Media: https://www.dr-bahr.com/news/werbe-nachrichten-ueber-social-media-dienste-wie-xing-linkedin-oder-x-sind-ebenfalls-unzulaessiger-s.html
          </li>
          <li>
            Datenschutzkonferenz – Orientierungshilfe Direktwerbung (PDF): https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DSK/Orientierungshilfen/DSK_20181107_Orientierungshilfe_Direktwerbung.pdf
          </li>
          <li>
            DSGVO – Erwägungsgrund 47 (dsgvo-gesetz.de): https://dsgvo-gesetz.de/erwaegungsgruende/nr-47/
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
            headline: title,
            description,
            inLanguage: "de",
            image: [{ "@type": "ImageObject", url: hero }],
            datePublished: published,
            dateModified: modified,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              image: author.image,
              sameAs: [author.linkedin],
            },
            publisher: {
              "@type": "Organization",
              name: "Findbar",
              url: "https://www.findbar.info",
              logo: {
                "@type": "ImageObject",
                url: "https://www.findbar.info/src/app/icon.png",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Am Rabenecksiek 5",
                postalCode: "32139",
                addressLocality: "Spenge",
                addressCountry: "DE",
              },
            },
            mainEntityOfPage: canonical,
          }),
        }}
      ></script>

      {/* Organization / Company Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Findbar",
            email: "lennart@findbar.info",
            url: "https://www.findbar.info",
            logo: "https://www.findbar.info/src/app/icon.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              postalCode: "32139",
              addressLocality: "Spenge",
              addressCountry: "DE",
            },
            sameAs: ["https://www.linkedin.com/in/lennart-niehausmeier/"],
          }),
        }}
      ></script>
    </article>
  );
}
