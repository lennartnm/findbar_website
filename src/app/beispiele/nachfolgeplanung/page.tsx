// src/app/blog/nachfolgeplanung-mittelstand-fehler/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const title =
  "Nachfolgeplanung im Mittelstand: Typische Fehler vermeiden – praxisnaher Leitfaden";
const description =
  "So planst du die Unternehmensnachfolge im Mittelstand ohne teure Stolperfallen – mit Checklisten, Zeitplan, Praxisbeispielen und klaren To-dos.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      "https://www.muster-gmbh.de/blog/nachfolgeplanung-mittelstand-fehler",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://www.muster-gmbh.de/blog/nachfolgeplanung-mittelstand-fehler",
    images: [
      {
        url: "/nachfolge1.png",
        width: 1600,
        height: 600,
        alt: "Firmengebäude",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/nachfolge1.png"],
  },
};

const author = {
  name: "Max Mustermann",
  role: "Berater für Nachfolge & M&A im Mittelstand",
  focus: "Unternehmensnachfolge, Unternehmensbewertung, MBO/MBI, Deal-Strukturierung",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Rechtsanwältin (Gesellschaftsrecht) & zertifizierte Nachfolgeberaterin",
  linkedin: "https://linkedin.com",
};

const publisher = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
  url: "https://www.muster-gmbh.de",
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
          Nachfolgeplanung im Mittelstand: Typische Fehler vermeiden
        </h1>

        <p className="mt-3 text-lg text-zinc-700">
          Du willst dein Unternehmen sicher übergeben – ohne Chaos, Reibungsverluste
          und Wertvernichtung? In diesem Leitfaden erfährst du, wie du{" "}
          <strong>Nachfolgeplanung</strong> im Mittelstand strukturiert angehst,
          typische Fehler vermeidest und mit einem klaren{" "}
          <strong>5-Stufen-Plan</strong> Schritt für Schritt vorgehst.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-28">28.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/nachfolge1.png" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/nachfolge1.png"
                alt="Firmengebäude"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Firmengebäude – Symbol für Stabilität bei der Unternehmensnachfolge
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>Früh anfangen:</strong> Idealerweise 3–5 Jahre vor Übergabe
            starten – Zeit für Bewertung, Struktur, Finanzierung und Onboarding.
          </li>
          <li>
            <strong>Kein Blindflug:</strong> Ohne saubere Finanz- und Prozessdaten
            (Data Room, KPIs, Verträge) sinkt der Kaufpreis und steigt das Risiko.
          </li>
          <li>
            <strong>Familienlogik &gt; Rechtsform:</strong> Regeln (Familienverfassung,
            Rollen, Kommunikation) klären – sonst drohen Konflikte nach der Übergabe.
          </li>
          <li>
            <strong>Steuern &amp; Recht mitdenken:</strong> Holding-Struktur, Earn-out,
            Pensionszusagen, Gewährleistungen – fachlich sauber strukturieren.
          </li>
          <li>
            <strong>Nachfolger fit machen:</strong> Übergabeplan mit 100-Tage-Roadmap
            und Shadowing – Kultur, Kunden und Team sichern.
          </li>
          <li>
            <strong>Plan B bereithalten:</strong> Interne (Familie/MBO) und externe
            Optionen (MBI, Search Fund) parallel prüfen.
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
            <a className={`hover:underline ${accent} font-medium`} href="#warum-jetzt">
              Warum jetzt? Der Druck zur Nachfolge steigt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#haeufige-fehler">
              Typische Fehler in der Nachfolgeplanung (und wie du sie vermeidest)
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#5-stufen-plan">
              Der 5-Stufen-Plan: So gehst du strukturiert vor
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#bewertung-preis">
              Unternehmensbewertung &amp; Kaufpreis: Was realistisch ist
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#steuern-recht">
              Steuern &amp; Recht: Stolperfallen und smarte Strukturen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mensch-faktor">
              Der Faktor Mensch: Kommunikation, Kultur, Führung
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
      <section id="warum-jetzt">
        <h2 className="text-2xl font-bold mb-3">
          Warum jetzt? Der Druck zur Nachfolge steigt
        </h2>
        <p className="leading-relaxed">
          Viele Mittelständler stehen vor einem Generationswechsel. Demografie, Fachkräfte- und
          Finanzierungsdruck erhöhen die Komplexität. Studien von Kammern und Förderbanken zeigen
          deutlich: In den nächsten Jahren wollen besonders viele Eigentümer übergeben oder – wenn
          keine Lösung gelingt – den Betrieb schließen. Das macht{" "}
          <strong>frühzeitige Nachfolgeplanung</strong> zur Chefsache und schützt Wert,
          Arbeitsplätze und Kundenzufriedenheit.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-3xl font-extrabold tabular-nums">3–5</div>
            <div className="text-sm text-zinc-600">
              Jahre Vorlauf sind in der Praxis ideal, um Bewertung, Strukturierung und Onboarding
              sauber zu orchestrieren.
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-3xl font-extrabold tabular-nums">6–12</div>
            <div className="text-sm text-zinc-600">
              Monate reine Transaktionsphase (DD, Finanzierung, Verträge) sind realistisch – ohne
              Vorbereitung deutlich länger.
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-3xl font-extrabold tabular-nums">100</div>
            <div className="text-sm text-zinc-600">
              Tage: So lange sollte die operative <em>Onboarding-Roadmap</em> mindestens laufen,
              um Kultur &amp; Kundenbeziehungen zu sichern.
            </div>
          </div>
        </div>
      </section>

      {/* Bild 1 – Unsplash (Bürokratie) */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/nachfolge2.jpg"
            />
            <img
              loading="lazy"
              src="/nachfolge2.jpg"
              alt="Ordner, Verträge und Checklisten – die Nachfolge ist bürokratisch anspruchsvoll"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Übergaben scheitern oft an fehlender Vorbereitung: Verträge, Datenraum, Prozesse.
        </figcaption>
      </figure>

      <section id="haeufige-fehler">
        <h2 className="text-2xl font-bold mb-3">
          Typische Fehler in der Nachfolgeplanung (und wie du sie vermeidest)
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              1) Zu spät starten
            </h3>
            <p className="text-zinc-700">
              Ohne Vorlauf fehlt Zeit für Bewertung, steuerliche Strukturierung und die Auswahl der
              besten Nachfolgeoption (Familie, MBO, MBI, Verkauf an Strategen, Search Fund). Starte
              mit einem groben <strong>Zeitplan (5 Phasen)</strong> und halte Meilensteine ein.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              2) Kein belastbarer Datenraum
            </h3>
            <p className="text-zinc-700">
              Lücken in Verträgen, Pensionszusagen, IP-Rechten oder fehlende KPI-Reihen senken den
              Kaufpreis und verlangsamen die Due Diligence. Baue früh einen{" "}
              <em>Data Room</em> mit Finanz-, Kunden-, Lieferanten- und HR-Daten auf.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              3) Familienkonflikte unterschätzen
            </h3>
            <p className="text-zinc-700">
              Rollen ungeklärt? Dann drohen Spannungen zwischen Gesellschaftern und Management.
              Hilft: <strong>Familienverfassung</strong>, klare Governance, neutrale Moderation.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              4) Steuer- und Rechtsfragen „nebenbei“
            </h3>
            <p className="text-zinc-700">
              Ob Holding, Anteilstausch, Earn-out, Verkäuferdarlehen oder Garantien – die Struktur
              entscheidet über Sicherheit, Liquidität und Steuern. Ziehe früh Steuer- und
              Rechtsberatung hinzu.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              5) Kommunikation nach innen &amp; außen
            </h3>
            <p className="text-zinc-700">
              Spätes oder unklar kommuniziertes Vorgehen verunsichert Belegschaft, Kunden und
              Banken. Plane Botschaften für Mitarbeitende, Schlüsselpartner und Finanzierungspartner.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900 mb-2">
              6) Kein Plan B
            </h3>
            <p className="text-zinc-700">
              Bei Engpässen am Markt für Nachfolger zahlt sich Parallelisierung aus: Interne
              Kandidaten entwickeln, externe Kandidaten (MBI) über Netzwerke und Plattformen wie{" "}
              <em>nexxt-change</em> ansprechen, Suchfonds prüfen.
            </p>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Nachfolge ist kein Ereignis, sondern ein Prozess: Wer früh plant, hält mehr Optionen
            offen – und übergibt ein stärkeres Unternehmen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — IfM Bonn, indirektes Zitat aus dem Themendossier „Nachfolge in Familienunternehmen“
          </figcaption>
        </figure>
      </section>

      {/* Bild 2 – Unsplash (Handshake) */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&auto=format&fit=crop&w=960"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&auto=format&fit=crop&w=1600"
              alt="Handshake bei der Vertragsunterzeichnung – gelungene Unternehmensnachfolge"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          Vertrauen und klare Regeln – der Mix, der Nachfolgen stabil macht.
        </figcaption>
      </figure>

      <section id="5-stufen-plan">
        <h2 className="text-2xl font-bold mb-3">Der 5-Stufen-Plan: So gehst du strukturiert vor</h2>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Strategie klären (0–6 Monate):</strong> Ziele, Zeithorizont, Wunschrollen.
              Interne vs. externe Nachfolge, Status Quick-Check, Deal-Optionen (MBO, MBI, Verkauf).
            </li>
            <li>
              <strong>Unternehmen „transaktionsfähig“ machen (3–12 Monate):</strong> Data Room,
              KPI-Set, Verträge, IP, Pensionszusagen, Risikomatrix, ESG-Basics.
            </li>
            <li>
              <strong>Bewertung &amp; Kaufpreislogik (parallel):</strong> Ertragswert, Multiple,
              DCF; Brücke zu <em>Equity Value</em> (Net Debt, Working Capital). Mechaniken:
              Earn-out, Verkäuferdarlehen, Besserungsschein.
            </li>
            <li>
              <strong>Investorensuche &amp; DD (6–12 Monate):</strong> Longlist/Shortlist,
              Teaser/Info-Memo, Management-Termine, indikatives Angebot, LOI, Due Diligence,
              Kredit-/Förderfinanzierung.
            </li>
            <li>
              <strong>Verträge &amp; Übergabe (2–6 Monate):</strong> SPA, Garantien, Closing,
              100-Tage-Plan, Shadowing, Kommunikationsfahrplan, Retention-Programm für Schlüsselkräfte.
            </li>
          </ol>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Checkliste „Transaktionsfähigkeit“</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Jahresabschlüsse, BWA, Planrechnung (3 Jahre historisch, 3 Jahre Planung)</li>
                <li>Top-10 Kunden &amp; Lieferanten inkl. Verträge und Kündigungsfristen</li>
                <li>HR: Organigramm, Schlüsselrollen, Vergütungen, Pensionszusagen</li>
                <li>IT &amp; IP: Lizenzen, Marken, Domains, Quellcode-Rechte</li>
                <li>ESG-Risiken (Compliance, Umwelt, Arbeitssicherheit)</li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Quick Win</h3>
              <p className="text-sm">
                Lege schon heute einen digitalen <em>Data Room</em> an und pflege ihn monatlich.
                Das spart später Zeit, Nerven und Kaufpreiseinbußen.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section id="bewertung-preis">
        <h2 className="text-2xl font-bold mb-3">
          Unternehmensbewertung &amp; Kaufpreis: Was realistisch ist
        </h2>
        <p>
          Für KMU wird häufig eine Kombination aus <strong>Ertragswert</strong> und
          <strong> Markt-Multiples</strong> herangezogen. Entscheidend ist die Zukunftsfähigkeit:
          wiederkehrende Umsätze, Abhängigkeiten, Teamstärke, Investitionsbedarf. Kaufpreise werden
          oft über <em>Earn-out</em>, Verkäuferdarlehen und Working-Capital-Mechaniken feinjustiert.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Thema</th>
                <th className="text-left font-semibold p-3">Was Käufer sehen wollen</th>
                <th className="text-left font-semibold p-3">Preiswirkung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Wiederkehrende Erlöse</td>
                <td className="p-3">Langfristige Verträge, geringe Churn-Rate</td>
                <td className="p-3">Multiples ↑</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Kundenkonzentration</td>
                <td className="p-3">Top-Kunde &lt; 20% Umsatz</td>
                <td className="p-3">Risiko ↓ → Preis ↑</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Investitionsstau</td>
                <td className="p-3">Transparente Capex-Roadmap</td>
                <td className="p-3">Preisabschlag vermeidbar</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Team &amp; Nachfolge der 2. Ebene</td>
                <td className="p-3">Retention-Plan, klare Rollen</td>
                <td className="p-3">Sicherheit ↑</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="steuern-recht">
        <h2 className="text-2xl font-bold mb-3">
          Steuern &amp; Recht: Stolperfallen und smarte Strukturen
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Typische Stolperfallen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Unklare Gewährleistungen und Haftungsrahmen im Kaufvertrag (SPA)</li>
              <li>Pensionszusagen ohne saubere Bilanzierung</li>
              <li>Fehlende IP-/Markenrechte oder strittige Lizenzen</li>
              <li>Keine Vorkehrungen zur Erbschaft- und Schenkungsteuer</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Was hilft</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Rechtzeitig Holding-/Strukturvarianten prüfen (Share vs. Asset Deal)</li>
              <li>Steuerliche Verschonungen strategisch nutzen</li>
              <li>Earn-out/Verkäuferdarlehen für Brücken zwischen Preis &amp; Risiko</li>
              <li>Garantiekatalog und Freigrenzen klar definieren</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="mensch-faktor">
        <h2 className="text-2xl font-bold mb-3">
          Der Faktor Mensch: Kommunikation, Kultur, Führung
        </h2>
        <p>
          Nachfolge ist ein <strong>Change-Prozess</strong>. Erfolgreich ist er, wenn Menschen
          mitgehen: Belegschaft, Führungsteam, Kunden und Banken. Plane Kommunikation pro Zielgruppe
          und sichere Schlüsselkräfte – etwa über Boni, Beteiligungen oder klare Entwicklungspfade.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Kommunikationsfahrplan</h3>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Phase 1: Kernteam &amp; Advisory einbinden</li>
              <li>Phase 2: Führungskräfte &amp; Schlüsselrollen informieren</li>
              <li>Phase 3: Mitarbeitende (Townhall, Q&amp;A)</li>
              <li>Phase 4: Kunden &amp; Lieferanten mit klarer Botschaft</li>
              <li>Phase 5: Banken, Förderpartner, Öffentlichkeit</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">100-Tage-Plan (Auszug)</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Shadowing &amp; Übergabe der Schlüsselbeziehungen</li>
              <li>Weekly mit Führungsteam, monatliche KPI-Reviews</li>
              <li>Risiko-Backlog (Top-10) abarbeiten</li>
              <li>„Quick Wins“ kommunizieren – Vertrauen schaffen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Weiterführende interne Links (Cluster) */}
      <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/unternehmensbewertung-kmu">
              Unternehmensbewertung im KMU: Methoden &amp; Multiples
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/familienverfassung-checkliste">
              Familienverfassung: So vermeidest du Konflikte
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/mbo-mbi-unterschiede">
              MBO vs. MBI: Welcher Weg passt zu dir?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/due-diligence-checkliste">
              Due-Diligence-Checkliste für mittelständische Unternehmen
            </a>
          </li>
        </ul>
      </aside>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wann sollte ich mit der Nachfolgeplanung beginnen?
            </h3>
            <p>Idealerweise 3–5 Jahre vor geplanter Übergabe, um Struktur, Bewertung, Steuern, Finanzierung und Onboarding in Ruhe vorzubereiten.</p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Nachfolgeoptionen gibt es?</h3>
            <p>Familieninterne Übergabe, Management-Buy-out (MBO), Management-Buy-in (MBI), Verkauf an Strategen oder Finanzinvestoren, sowie Suchfonds (Search Funds).</p>
          </div>
          <div>
            <h3 className="font-semibold">Wie finde ich passende Nachfolgerinnen und Nachfolger?</h3>
            <p>Parallel über interne Entwicklung, Netzwerke, spezialisierte M&amp;A-Berater sowie Plattformen wie <em>nexxt-change</em>. Ein gutes Info-Memo erleichtert die Ansprache.</p>
          </div>
          <div>
            <h3 className="font-semibold">Wie wird der Kaufpreis bestimmt?</h3>
            <p>Meist aus Ertragswert und Markt-Multiples, angepasst um Net Debt und Working Capital. Variablen wie Earn-outs gleichen unterschiedliche Erwartungen aus.</p>
          </div>
          <div>
            <h3 className="font-semibold">Welche steuerlichen Punkte sind wichtig?</h3>
            <p>Rechtsform und Struktur (Share vs. Asset Deal), Verschonungsregeln bei Erbschaft/Schenkung, Pensionszusagen und Holding-Strukturen – bitte mit Steuerprofis planen.</p>
          </div>
          <div>
            <h3 className="font-semibold">Wie sichere ich Team und Kundenbeziehungen?</h3>
            <p>Frühzeitige, zielgruppengerechte Kommunikation, Retention-Programme und ein 100-Tage-Plan mit Fokus auf Kultur und Schlüsselbeziehungen.</p>
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
                  name: "Wann sollte ich mit der Nachfolgeplanung beginnen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Idealerweise 3–5 Jahre vor geplanter Übergabe, um Struktur, Bewertung, Steuern, Finanzierung und Onboarding in Ruhe vorzubereiten.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Nachfolgeoptionen gibt es?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Familieninterne Übergabe, Management-Buy-out (MBO), Management-Buy-in (MBI), Verkauf an Strategen oder Finanzinvestoren sowie Suchfonds (Search Funds).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie finde ich passende Nachfolgerinnen und Nachfolger?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Parallel über interne Entwicklung, Netzwerke, spezialisierte M&A-Berater sowie Plattformen wie nexxt-change. Ein gutes Info-Memo erleichtert die Ansprache.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie wird der Kaufpreis bestimmt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Meist aus Ertragswert und Markt-Multiples, angepasst um Net Debt und Working Capital. Variablen wie Earn-outs gleichen unterschiedliche Erwartungen aus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche steuerlichen Punkte sind wichtig?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Rechtsform und Struktur (Share vs. Asset Deal), Verschonungsregeln bei Erbschaft/Schenkung, Pensionszusagen und Holding-Strukturen – bitte mit Steuerprofis planen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie sichere ich Team und Kundenbeziehungen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Frühzeitige, zielgruppengerechte Kommunikation, Retention-Programme und ein 100-Tage-Plan mit Fokus auf Kultur und Schlüsselbeziehungen.",
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
          <strong>Wie vermeidest du die typischen Fehler der Nachfolgeplanung im Mittelstand?</strong>{" "}
          Starte früh, arbeite datenbasiert, sichere die Menschen – und strukturiere Steuern &amp;
          Recht klug. Mit dem 5-Stufen-Plan, einem sauberen Datenraum und klarer Kommunikation
          übergibst du stabil und zu einem fairen Preis.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Willst du deine Nachfolge in 90 Tagen auf Schiene bringen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir strukturieren Bewertung, Datenraum und Kommunikationsfahrplan – und begleiten dich
            bis zum LOI. Unverbindliche Erstberatung anfragen.
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
              Mit Absenden des Formulars akzeptierst du unsere Datenschutzbedingungen.
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
          />

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
              In diesem Beispiel-Blogartikel funktionieren die Links nicht. Möchtest du solch ein
              Projekt auch für dein Angebot umsetzen?{" "}
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

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zur Nachfolgeplanung im Mittelstand
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
                <td className="p-3 font-medium text-zinc-900">MBO</td>
                <td className="p-3 text-zinc-700">
                  Management-Buy-out: Übernahme durch das bestehende Managementteam.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">MBI</td>
                <td className="p-3 text-zinc-700">
                  Management-Buy-in: Externes Management übernimmt das Unternehmen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Earn-out</td>
                <td className="p-3 text-zinc-700">
                  Variable Kaufpreis­komponente, abhängig von künftigen Ergebnissen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Due Diligence</td>
                <td className="p-3 text-zinc-700">
                  Sorgfältige Prüfung eines Unternehmens vor einer Transaktion.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Equity Value</td>
                <td className="p-3 text-zinc-700">
                  Wert des Eigenkapitals nach Abzug von Nettoverschuldung und
                  Working-Capital-Anpassung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Familienverfassung</td>
                <td className="p-3 text-zinc-700">
                  Dokument, das Regeln, Rollen und Entscheidungswege in Familienunternehmen festlegt.
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
            <div className="text-sm text-zinc-700">{author.role} – {author.focus}</div>
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
            KfW Research – Nachfolge-Monitoring Mittelstand 2024/2025 (PDF):{" "}
            <a
              href="https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-Fokus-Volkswirtschaft/Fokus-2025/Fokus-Nr.-481-Januar-2025-Nachfolge.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.kfw.de/.../Fokus-Nr.-481-Januar-2025-Nachfolge.pdf
            </a>
            . 
          </li>
          <li>
            DIHK – Report Unternehmensnachfolge 2024 (PDF):{" "}
            <a
              href="https://www.ihk.de/blueprint/servlet/resource/blob/6216340/f116562232859c88c887a3be7d35724e/dihk-report-unternehmensnachfolge-2024-data.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ihk.de/.../dihk-report-unternehmensnachfolge-2024-data.pdf
            </a>
            . 
          </li>
          <li>
            IfM Bonn – Themendossier „Nachfolge in Familienunternehmen“:{" "}
            <a
              href="https://www.ifm-bonn.org/themendossiers/nachfolge-in-familienunternehmen"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ifm-bonn.org/themendossiers/nachfolge-in-familienunternehmen
            </a>
            . 
          </li>
          <li>
            BMWK – Evaluation „Unternehmensnachfolge – aus der Praxis für die Praxis“ (2025, PDF):{" "}
            <a
              href="https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Evaluationen/evaluation-unternehmensnachfolge-aus-der-praxis-fuer-die-praxis.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.bundeswirtschaftsministerium.de/.../evaluation-unternehmensnachfolge-...
            </a>
            . 
          </li>
          <li>
            RKW Kompetenzzentrum – Initiative „Unternehmensnachfolge – aus der Praxis für die
            Praxis“:{" "}
            <a
              href="https://www.rkw-kompetenzzentrum.de/gruendung/unternehmensnachfolge/die-initiative/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.rkw-kompetenzzentrum.de/.../unternehmensnachfolge/die-initiative/
            </a>
            . 
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
            headline: title,
            description,
            inLanguage: "de",
            mainEntityOfPage:
              "https://www.muster-gmbh.de/blog/nachfolgeplanung-mittelstand-fehler",
            image: {
              "@type": "ImageObject",
              url: "/nachfolge1.png",
              width: 1600,
              height: 600,
            },
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              url: author.linkedin,
            },
            editor: {
              "@type": "Person",
              name: reviewer.name,
            },
            publisher: {
              "@type": "Organization",
              name: publisher.name,
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
                width: 512,
                height: 512,
              },
            },
            datePublished: "2025-08-28",
            dateModified: "2025-08-28",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: publisher.name,
            url: publisher.url,
            email: publisher.email,
            telephone: publisher.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: publisher.address,
              addressCountry: "DE",
            },
            sameAs: [author.linkedin],
          }),
        }}
      />
    </article>
  );
}
