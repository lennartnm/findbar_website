// src/app/blog/haeufige-fehler-blechbearbeitung/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

const title =
  "5 häufige Fehler in der industriellen Blechbearbeitung – und wie du sie vermeidest";
const description =
  "Praktischer Leitfaden für Fertiger: Von Walzrichtung und K-Faktor bis Gratbildung, Verzug & Toleranzen. Mit Checklisten, Tabellen & konkreten Maßnahmen.";
const canonical =
  "https://www.findbar.de/blog/haeufige-fehler-blechbearbeitung";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    locale: "de_DE",
    images: [
      {
        url: "/platzhalter_im_text.jpg",
        width: 1600,
        height: 600,
        alt:
          "Blechbearbeitung in der Praxis: Abkanten, Stanzen und Laserschneiden im Überblick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/platzhalter_im_text.jpg"],
  },
};

const accent = "text-emerald-700";

const author = {
  name: "Max Weber",
  role: "Branchenexperte Blechverarbeitung",
  avatar: "/platzhalter_autor.jpg",
};

const isoDate = "2025-09-03";
const displayDate = "03.09.2025";

export default function Page() {
  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
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
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          5 häufige Fehler in der industriellen Blechbearbeitung – und wie du
          sie vermeidest
        </h1>

        <p className="mt-3 text-lg text-zinc-700">
          In diesem Leitfaden lernst du, die größten Zeit- und
          Qualitätsfresser in der Blechbearbeitung zu erkennen und abzustellen:
          von falscher Walzrichtung und K-Faktor über Gratbildung und Verzug bis
          hin zu unklaren Toleranzen. Mit klaren Checklisten, Tabellen und
          Maßnahmen, die sofort wirken.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime={isoDate}>{displayDate}</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/platzhalter_im_text.jpg" />
              <img
                fetchPriority="high"
                loading="eager"
                src="/platzhalter_im_text.jpg"
                alt="Abkantpresse in der Blechbearbeitung: Bediener richtet ein Werkstück aus"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Abkantpresse richtet Blechtafel aus – Symbolbild für Präzision in
            der Fertigung
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/platzhalter_autor.jpg"
            alt="Autor: Team Industrielle Fertigung"
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
            <strong>Walzrichtung beachten:</strong> Falsch orientierte Teile
            reißen leichter. Plane Biegungen bevorzugt quer zur Walzrichtung und
            markiere die Kornrichtung auf Zeichnung und Rohblech.
          </li>
          <li>
            <strong>K-Faktor &amp; Mindestbiegeradius richtig ansetzen:</strong>{" "}
            Falsche Werte führen zu Maßabweichungen und Rissen. Nutze Tabellen,
            Materialtests und die passende V-Öffnung.
          </li>
          <li>
            <strong>Gratbildung schon an der Quelle vermeiden:</strong> Prüfe
            Schneidspalt, Werkzeugzustand und Schnittparameter statt nur
            nachzuschleifen.
          </li>
          <li>
            <strong>Verzug kontrollieren:</strong> Reihenfolge, Symmetrie von
            Ausbrüchen und Wärmeinput minimieren; wo nötig spannen, richten oder
            stressarm glühen.
          </li>
          <li>
            <strong>Toleranzen eindeutig definieren:</strong> Biegeabzug,
            Kantenbruch, Messbezug und Oberflächenanforderungen klar auf der
            Zeichnung festhalten.
          </li>
          <li>
            <strong>Schulung &amp; Standards etablieren:</strong> Einfache
            Standardblätter für V-Öffnung, Werkzeugradien, K-Faktor und
            Prüfpläne sparen täglich Ausschuss.
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
            <a className={`hover:underline ${accent} font-medium`} href="#einordnung">
              Warum passieren die Fehler – und was kostet es dich?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler-1-walzrichtung"
            >
              Fehler 1: Walzrichtung beim Biegen ignoriert
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler-2-kfaktor-radius"
            >
              Fehler 2: K-Faktor und Mindestbiegeradius falsch gewählt
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler-3-grate"
            >
              Fehler 3: Gratbildung und schlechte Kantenqualität
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler-4-verzug"
            >
              Fehler 4: Verzug nach Schneiden, Stanzen oder Biegen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler-5-toleranzen"
            >
              Fehler 5: Unklare Toleranzen und fehlende Prüfbezüge
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#praxis-tools"
            >
              Praxis-Tools: Checklisten, Tabellen &amp; Standards
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* Einordnung */}
      <section id="einordnung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Warum passieren die Fehler – und was kostet es dich?
        </h2>
        <p className="leading-relaxed">
          In der Blechbearbeitung summieren sich kleine Ungenauigkeiten schnell
          zu echten Kosten: Eine falsche Walzrichtung oder ein zu kleiner
          Biegeradius führt zu Rissen, eine unpassende V-Öffnung zu
          Maßabweichungen; stumpfe Schneidwerkzeuge sorgen für Grate, die
          Nacharbeit erfordern. Und wenn Toleranzen oder Messbezüge fehlen,
          eskalieren Reklamationen. Die gute Nachricht: Mit wenigen Standards,
          klaren Zeichnungen und sauberen Prozessparametern lassen sich 80&nbsp;% der
          typischen Probleme vermeiden.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-4">
            <div className="text-sm font-semibold mb-1">Schnellgewinn</div>
            <p className="text-sm text-zinc-700">
              Walzrichtung kennzeichnen, V-Öffnung tabellieren, Werkzeuge
              turnusmäßig prüfen.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <div className="text-sm font-semibold mb-1">Risikofalle</div>
            <p className="text-sm text-zinc-700">
              Scharfe Innenradien, Biegen entlang der Walzrichtung, fehlende
              Biegeabzüge.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <div className="text-sm font-semibold mb-1">Langfristig</div>
            <p className="text-sm text-zinc-700">
              Schulungen, Materialtests, Standard-Work für Einrichten &amp;
              Prüfplanung.
            </p>
          </div>
        </div>
      </section>

      {/* Bild 1 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/platzhalter_im_text.jpg" />
            <img
              loading="lazy"
              src="/platzhalter_im_text.jpg"
              alt="Walzrichtung und Biegerichtung am Blechteil visuell markiert"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Walzrichtung vs. Biegerichtung: Eine simple Markierung verhindert
          Risse und spart Ausschuss.
        </figcaption>
      </figure>

      {/* Fehler 1 */}
      <section id="fehler-1-walzrichtung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Fehler&nbsp;1: Walzrichtung beim Biegen ignoriert
        </h2>
        <p className="leading-relaxed">
          Blechtafeln besitzen eine ausgeprägte Walzrichtung. Wird entlang der
          Kornstruktur gebogen, sinkt die Duktilität – das Risiko für Risse am
          Innenradius steigt. Viele Risse entstehen so erst bei der Montage oder
          im Einsatz, wirken also wie „späte“ Qualitätsprobleme.
        </p>

        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <strong className="block mb-2">So vermeidest du den Fehler:</strong>
          <ul className="list-disc ml-5 space-y-1">
            <li>Bevorzugt quer zur Walzrichtung biegen.</li>
            <li>
              Walzrichtung auf Zeichnung und Rohblech eindeutig markieren
              (Pfeil, Text).
            </li>
            <li>
              Bei engen Radien: Materialtests (Streifen quer/parallel) und
              gegebenenfalls Radius vergrößern.
            </li>
            <li>
              CAM-Nesting so ausrichten, dass kritische Biegungen nicht parallel
              zur Walzrichtung liegen.
            </li>
          </ul>
        </div>
      </section>

      {/* Fehler 2 */}
      <section id="fehler-2-kfaktor-radius" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Fehler&nbsp;2: K-Faktor und Mindestbiegeradius falsch gewählt
        </h2>
        <p className="leading-relaxed">
          Der K-Faktor beschreibt die Lage der neutralen Faser im Blech beim
          Biegen. Wird er falsch angenommen, passt die gestreckte Länge nicht –
          Bauteile werden zu lang oder zu kurz. Zusätzlich führen zu kleine
          Innenradien zu Materialversagen, besonders bei hochfesten Stählen und
          Aluminium.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Praxis-Daumenregeln (Startwerte)
            </h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                V-Öffnung grob: ca. 6&nbsp;× Materialdicke (Luftbiegen, Stahl).
              </li>
              <li>
                Stempelradius ≈ 0,63&nbsp;× Materialdicke als untere Grenze,
                größer ist sicherer.
              </li>
              <li>
                Mindestbiegeradius variiert je Werkstoff; bei Stahl oft ≥
                Materialdicke, bei Aluminium tendenziell größer.
              </li>
              <li>
                K-Faktor typischer Startbereich: 0,3&nbsp;–&nbsp;0,5 (Material,
                Werkzeug, Prozess abhängig).
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Typische Symptome bei falschen Werten
            </h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Unter- oder Übermaß nach dem Kanten.</li>
              <li>Risse am Innenradius, Orange-Peel-Effekt.</li>
              <li>Unsaubere Kanten, Eindrücke durch falsche V-Öffnung.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 overflow-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Werkstoff</th>
                <th className="text-left font-semibold p-3">
                  Startwert Mindest-Innenradius
                </th>
                <th className="text-left font-semibold p-3">Hinweise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Stahl</td>
                <td className="p-3">≈ 1&nbsp;× Materialdicke</td>
                <td className="p-3">
                  Bei höherer Festigkeit Radius erhöhen; saubere Kantenflächen
                  verbessern Ergebnis.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Aluminium</td>
                <td className="p-3">≈ 2&nbsp;× Materialdicke</td>
                <td className="p-3">
                  Sprödbruch vermeiden: quer zur Walzrichtung biegen,
                  Stempelradius vergrößern.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Kupfer</td>
                <td className="p-3">≈ 1,5&nbsp;× Materialdicke</td>
                <td className="p-3">
                  Weiches Material, dennoch auf Oberflächenabzeichnungen achten.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Die meisten Biegefehler entstehen nicht an der Maschine, sondern
            vorher: falsche V-Öffnung, unpassender Stempelradius und ein
            K-Faktor, der nicht zum Material passt.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Aus der Praxis zusammengefasst, inspiriert durch Leitfäden und
            Herstellerblogs (indirektes Zitat)
          </figcaption>
        </figure>
      </section>

      {/* Fehler 3 */}
      <section id="fehler-3-grate" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Fehler&nbsp;3: Gratbildung und schlechte Kantenqualität
        </h2>
        <p className="leading-relaxed">
          Grate entstehen beim Stanzen, Laserschneiden oder Scherschneiden durch
          einen Mix aus falschem Schneidspalt, stumpfen Werkzeugen oder
          unpassenden Prozessparametern. Wer Grate nur durch Nacharbeit entfernt
          statt die Ursache zu beheben, zahlt doppelt: in Zeit und
          Wiederholkosten.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
          <h3 className="text-lg font-semibold mb-2">
            Ursachen-Wirkung-Gegenmaßnahmen
          </h3>
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Symptom</th>
                  <th className="text-left font-semibold p-3">Ursache</th>
                  <th className="text-left font-semibold p-3">
                    Gegenmaßnahme
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Grate nach dem Stanzen</td>
                  <td className="p-3">
                    Schneidspalt zu klein/zu groß, stumpfe Stempel oder Matrizen
                  </td>
                  <td className="p-3">
                    Schneidspalt tabelliert festlegen, Werkzeuge nach Plan
                    schleifen/wechseln
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Anlauffarben, Aufwurf am Laserschnitt</td>
                  <td className="p-3">Zu geringe Leistung oder falsches Gas</td>
                  <td className="p-3">
                    Parameter prüfen, Düse/Gas an Material anpassen,
                    Schnittfuge reinigen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3">Schergrat am Tafelscheren-Schnitt</td>
                  <td className="p-3">Stumpfes Messer, falsche Spalteinstellung</td>
                  <td className="p-3">
                    Messer wenden/wechseln, Spalt nach Materialdicke einstellen
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-600 mt-2">
            Tipp: Lege eine Oberflächen- und Kantenqualität (z.&nbsp;B. „frei von
            scharfen Graten, Kantenbruch 0,2&nbsp;× 45°“) für Bauteilfamilien
            fest.
          </p>
        </div>
      </section>

      {/* Bild 2 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/platzhalter_im_text.jpg" />
            <img
              loading="lazy"
              src="/platzhalter_im_text.jpg"
              alt="Entgraten eines gelaserten Blechbauteils – Fokus auf Kantenqualität"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Saubere Kanten sind die Basis für passgenaue Baugruppen und stabile
          Beschichtungen.
        </figcaption>
      </figure>

      {/* Fehler 4 */}
      <section id="fehler-4-verzug" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Fehler&nbsp;4: Verzug nach Schneiden, Stanzen oder Biegen
        </h2>
        <p className="leading-relaxed">
          Lokale Wärme beim Lasern, unsymmetrische Ausbrüche beim Stanzen oder
          ungünstige Biegefolgen verursachen Verzug. Besonders dünne Bleche und
          große, lange Geometrien reagieren empfindlich.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">Maßnahmen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Wärmeinput reduzieren: Schnittreihenfolgen und Mikrosteg-Setzung
                optimieren.
              </li>
              <li>
                Symmetrisch ausbrechen, kleine Stege stehenlassen, Bauteil
                spannen.
              </li>
              <li>
                Biegefolge planen: vom komplexen zum einfachen Flansch,
                zunächst lange Schenkel.
              </li>
              <li>
                Bei Bedarf richten oder stressarm glühen; Messbezug vorgeben.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Quick-Check</h3>
            <p className="text-sm">
              Lange Teile &gt; 800&nbsp;mm? Dünnes Blech ≤ 1,5&nbsp;mm?{" "}
              Dann Verzug von Anfang an in der Prüfplanung berücksichtigen
              (Auflagepunkte, Messstrategie, Richten).
            </p>
          </aside>
        </div>
      </section>

      {/* Fehler 5 */}
      <section id="fehler-5-toleranzen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Fehler&nbsp;5: Unklare Toleranzen und fehlende Prüfbezüge
        </h2>
        <p className="leading-relaxed">
          Wenn auf Zeichnungen der Biegeabzug fehlt, der Messbezug unklar ist
          oder Anforderungen an Kantenbruch und Oberflächen fehlen, entstehen
          vermeidbare Diskussionen, Nacharbeit oder Ausschuss.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
          <h3 className="text-lg font-semibold mb-2">Zeichnung-Checkliste</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Walzrichtung markieren und Biegeabzug bzw. gestreckte Länge
              angeben.
            </li>
            <li>
              Kantenbruch definieren (z.&nbsp;B. 0,2&nbsp;× 45°) und
              Entgratungszustand festlegen.
            </li>
            <li>
              Messbezugspunkte benennen, insbesondere bei gebogenen Teilen.
            </li>
            <li>
              Toleranznorm und Oberflächenanforderung (z.&nbsp;B. vor/nach
              Beschichtung) angeben.
            </li>
          </ul>
        </div>
      </section>

      {/* Praxis-Tools */}
      <section id="praxis-tools" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Praxis-Tools: Checklisten, Tabellen &amp; Standards
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Standardblatt Abkanten
            </h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>V-Öffnung pro Materialdicke tabelliert hinterlegen.</li>
              <li>Stempelradien und Mindest-Innenradien definieren.</li>
              <li>Start-K-Faktor je Material dokumentieren.</li>
              <li>Einrichteplan inkl. Probebiegung und Messpunkten.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">Schneid-Standard</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Schneidspalt je Material/​Dicke, Werkzeugpflegeplan.</li>
              <li>Laserschnitt-Parameterblätter nach Werkstofffamilie.</li>
              <li>Prozesskontrolle: Grat-Audit pro Schicht.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 overflow-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Situation</th>
                <th className="text-left font-semibold p-3">Do</th>
                <th className="text-left font-semibold p-3">Don&apos;t</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Biegen neuer Werkstoff</td>
                <td className="p-3">Probebiegung, K-Faktor validieren</td>
                <td className="p-3">Serienstart ohne Test</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Laser-Programmierung</td>
                <td className="p-3">
                  Mikrosteg-Setzung, Reihenfolge auf Verzug prüfen
                </td>
                <td className="p-3">Lange Schnitte ohne Unterbrechung</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Stanzen dünner Bleche</td>
                <td className="p-3">Schneidspalt fein justieren</td>
                <td className="p-3">Mit stumpfen Werkzeugen laufen lassen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Was ist der K-Faktor beim Biegen und wofür brauche ich ihn?
            </h3>
            <p>
              Der K-Faktor beschreibt, wo die neutrale Faser in der Dicke des
              Blechs liegt. Er wird zur Berechnung der gestreckten Länge
              benötigt, damit das Endmaß nach dem Biegen stimmt.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Warum sollte ich quer zur Walzrichtung biegen?
            </h3>
            <p>
              Quer zur Walzrichtung bleibt das Material duktiler. Das senkt das
              Risiko von Rissen und vergrößert das Prozessfenster bei engen
              Innenradien.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie bestimme ich den richtigen Mindestbiegeradius?
            </h3>
            <p>
              Nutze Werkstofftabellen als Startwert (z.&nbsp;B. Stahl etwa
              Materialdicke, Aluminium oft größer) und validiere mit
              Probebiegungen an Originalmaterial.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was tun gegen Grate am Stanzei oder Laserschnitt?
            </h3>
            <p>
              Schneidspalt und Werkzeugzustand prüfen, Parameterblätter je
              Werkstoff pflegen und bei Bedarf Düsen/​Gas anpassen. Nacharbeit
              sollte die Ausnahme sein.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie beuge ich Verzug bei langen Teilen vor?
            </h3>
            <p>
              Wärmeinput minimieren, symmetrisch ausbrechen, spannen und die
              Biegefolge planen. Messstrategie und eventuelles Richten vorab
              festlegen.
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
                    "Was ist der K-Faktor beim Biegen und wofür brauche ich ihn?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Der K-Faktor beschreibt die Lage der neutralen Faser in der Blechdicke. Er wird zur Berechnung der gestreckten Länge benötigt, damit das Endmaß nach dem Biegen stimmt.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Warum sollte ich quer zur Walzrichtung biegen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Quer zur Walzrichtung bleibt das Material duktiler, was Risse am Innenradius verhindert und das Prozessfenster vergrößert.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie bestimme ich den richtigen Mindestbiegeradius?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Tabellenwerte pro Werkstoff dienen als Start. Die finale Freigabe erfolgt über Probebiegungen an Originalmaterial und validierte Messungen.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Was tun gegen Grate am Stanzei oder Laserschnitt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Schneidspalt korrekt einstellen, Werkzeuge warten und Parameterblätter je Werkstoff pflegen; Nacharbeit nur als Ausnahme.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie beuge ich Verzug bei langen Teilen vor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Wärmeinput reduzieren, symmetrisch ausbrechen, spannen, Biegefolge planen und Messstrategie samt möglichem Richten festlegen.",
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
            Wie vermeidest du die häufigsten Fehler in der Blechbearbeitung?
          </strong>{" "}
          Markiere und berücksichtige die Walzrichtung, lege K-Faktor,
          Mindestbiegeradius und V-Öffnung standardisiert fest, behebe
          Gratursachen an der Quelle und plane Biegefolgen sowie Messbezüge
          sauber. Mit wenigen, gut gepflegten Standards sinken Ausschuss,
          Nacharbeit und Reklamationen spürbar.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Willst du deine Biege- und Schneidprozesse messbar stabilisieren?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir erstellen dir Standardblätter für V-Öffnung, K-Faktor und
            Prüfplanung – individuell für Material, Maschinenpark und
            Bauteilfamilien.
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

        <div
          id="cta-pop"
          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
        >
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
                className="font-medium text-emerald-700 underline"
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
            <a
              className={`hover:underline ${accent}`}
              href="/blog/k-faktor-richtig-berechnen"
            >
              K-Faktor richtig berechnen: Von der Theorie zum Prüfplan
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/gratbildung-vermeiden"
            >
              Gratbildung vermeiden: Schneidspalt, Gas &amp; Werkzeugpflege
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/blech-verzug-reduzieren"
            >
              Verzug reduzieren: Reihenfolge, Mikrosteg, Richten
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/blech-toleranzen-richtig-angeben"
            >
              Toleranzen in der Blechkonstruktion richtig angeben
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zur Blechbearbeitung
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
                <td className="p-3 font-medium text-zinc-900">Walzrichtung</td>
                <td className="p-3 text-zinc-700">
                  Bevorzugte Kornrichtung im Blech, die Biegeeigenschaften,
                  Festigkeit und Rissneigung beeinflusst.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">K-Faktor</td>
                <td className="p-3 text-zinc-700">
                  Dimensionslose Zahl, die die Lage der neutralen Faser zur
                  Blechdicke beschreibt – basis für die gestreckte Länge.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">V-Öffnung</td>
                <td className="p-3 text-zinc-700">
                  Breite der Matrizenöffnung beim Luftbiegen; bestimmt Kräfte,
                  Anpressbild und erreichbare Radien.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Mindestbiegeradius
                </td>
                <td className="p-3 text-zinc-700">
                  Kleinster Innenradius, bei dem ein Werkstoff ohne Risse
                  gebogen werden kann.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Schneidspalt</td>
                <td className="p-3 text-zinc-700">
                  Spalt zwischen Stempel und Matrize; beeinflusst
                  Schnittqualität, Grat und Werkzeugverschleiß.
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
            src="/platzhalter_autor.jpg"
            alt="Autor: Team Industrielle Fertigung"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a href="#" className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <p className="text-sm text-zinc-700">
            Überprüft von:{" "}
            <strong>Qualitätssicherung &amp; Anwendungstechnik</strong> – interne
            Fachprüfung.
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
            headline: title,
            description,
            inLanguage: "de-DE",
            author: {
              "@type": "Organization",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Findbar GmbH",
              logo: {
                "@type": "ImageObject",
                url: "/platzhalter_im_text.jpg",
              },
            },
            datePublished: isoDate,
            dateModified: isoDate,
            image: [
              "https://www.findbar.de/platzhalter_im_text.jpg",
              "https://www.findbar.de/platzhalter_im_text.jpg",
            ],
            mainEntityOfPage: canonical,
          }),
        }}
      />

      {/* Organization Schema.org (Company) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Findbar GmbH",
            url: "https://www.findbar.de",
            logo: "https://www.findbar.de/platzhalter_im_text.jpg",
          }),
        }}
      />

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Quellen &amp; weiterführende Studien
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            TRUMPF: „3 Dinge, die Bieger nie tun sollten“.{" "}
            <a
              href="https://www.trumpf.com/de_INT/newsroom/stories/3-dinge-die-bieger-nie-tun-sollten/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.trumpf.com/de_INT/newsroom/stories/3-dinge-die-bieger-nie-tun-sollten/
            </a>
          </li>
          <li>
            247TailorSteel: „Schleif- und Walzrichtung einstellen“.{" "}
            <a
              href="https://247tailorsteel.com/de/ueber-uns/wissenszentrum/blog/schleif-und-walzrichtung"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://247tailorsteel.com/de/ueber-uns/wissenszentrum/blog/schleif-und-walzrichtung
            </a>
          </li>
          <li>
            ADH Machine Tool: „Die 8 häufigsten Probleme beim Biegen mit
            Abkantpressen“.{" "}
            <a
              href="https://www.adhmt.com/de/abkantpressen-biege-probleme-und-losungen/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.adhmt.com/de/abkantpressen-biege-probleme-und-losungen/
            </a>
          </li>
          <li>
            Xometry: „Minimale Biegeradien für Bleche: Referenztabelle &amp;
            Rechner“.{" "}
            <a
              href="https://xometry.pro/de/artikel/blechen-minimale-biegeradien/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://xometry.pro/de/artikel/blechen-minimale-biegeradien/
            </a>
          </li>
          <li>
            Rime Wiki: „Mindestbiegeradius – Das sollte unbedingt beachtet
            werden“.{" "}
            <a
              href="https://rime.de/de/wiki/mindestbiegeradius/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://rime.de/de/wiki/mindestbiegeradius/
            </a>
          </li>
          <li>
            Wikipedia: „Biegeverkürzung“ (K-Faktor Grundlagen).{" "}
            <a
              href="https://de.wikipedia.org/wiki/Biegeverk%C3%BCrzung"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://de.wikipedia.org/wiki/Biegeverk%C3%BCrzung
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
