// src/app/blog/lohnbuchhaltung-auslagern/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "HR Shared Services Manager (Entgelt & Prozesse)",
  focus: "Payroll-Prozesse, Digitalisierung, Entgelt-Compliance",
  image: "/public/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Head of Payroll (Leiter Entgeltabrechnung)",
  linkedin: "https://linkedin.com",
};

const org = {
  name: "Muster GmbH",
  url: "https://www.muster-gmbh.de",
  email: "mailto:muster@beispiel.de",
  phone: "+49 123456789",
  street: "Musterstraße 1",
  locality: "Berlin",
  postalCode: "10115",
  country: "DE",
};

const canonical =
  "https://www.muster-gmbh.de/blog/lohnbuchhaltung-auslagern-fehler-vermeiden";

export default function Page() {
  const published = "2025-08-27";
  const modified = "2025-08-27";

  return (
    <>
      <Head>
        <title>
          Lohnbuchhaltung auslagern: Teure Fehler vermeiden – Vorteile,
          Datenschutz, Stammdaten & SLA
        </title>
        <meta
          name="description"
          content="So lagerst du die Lohnbuchhaltung sicher aus: Vorteile, Datenschutz (DSGVO), Übergabe der Stammdaten, On/Offboarding, Fristen, SLA & Monatsprozess – kompakt erklärt."
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Lohnbuchhaltung auslagern: Teure Fehler vermeiden"
        />
        <meta
          property="og:description"
          content="Vorteile, Datenschutz, Stammdaten-Übergabe, On/Offboarding, Fristen, SLA & Monatsprozess – verständlich erklärt."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/public/payroll.jpg" />
        <meta property="og:site_name" content="Muster GmbH" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lohnbuchhaltung auslagern: Teure Fehler vermeiden"
        />
        <meta
          name="twitter:description"
          content="Vorteile, Datenschutz, Stammdaten, Fristen, SLA & Monatsprozess – für KMU."
        />
        <meta name="twitter:image" content="/public/payroll.jpg" />

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Lohnbuchhaltung auslagern: Teure Fehler vermeiden – Vorteile, Datenschutz, Stammdaten & SLA",
              description:
                "Praxisleitfaden für KMU: So gelingt Payroll-Outsourcing (Vorteile, Datenschutz, Stammdaten-Übergabe, On/Offboarding, Fristen, SLA & Monatsprozess).",
              inLanguage: "de",
              image: `${org.url}/public/payroll.jpg`,
              datePublished: published,
              dateModified: modified,
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: author.role,
                url: author.linkedin,
              },
              publisher: {
                "@type": "Organization",
                name: org.name,
                url: org.url,
                logo: {
                  "@type": "ImageObject",
                  url: `${org.url}/public/payroll.jpg`,
                },
              },
              mainEntityOfPage: canonical,
            }),
          }}
        />

        {/* Company Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: org.name,
              url: org.url,
              email: "muster@beispiel.de",
              telephone: "+49 123456789",
              address: {
                "@type": "PostalAddress",
                streetAddress: org.street,
                addressLocality: org.locality,
                postalCode: org.postalCode,
                addressCountry: "DE",
              },
              sameAs: [author.linkedin],
            }),
          }}
        />
      </Head>

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
            Lohnbuchhaltung auslagern: So vermeidest du teure Fehler
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du möchtest{" "}
            <strong>lohnbuchhaltung outsourcing / payroll service</strong>{" "}
            nutzen? In diesem Leitfaden erfährst du, wie du sicher und
            effizient auslagerst – mit Fokus auf Datenschutz (DSGVO),
            reibungslose <strong>Stammdaten</strong>-Übergabe, klare{" "}
            <strong>SLAs</strong> und einen stabilen Monatsprozess inklusive
            <strong> Fristen</strong>, <strong>Krankmeldung (eAU)</strong> sowie{" "}
            <strong>Mitarbeiter On/Offboarding</strong>.
          </p>

          {/* Datum & Lesedauer */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime={modified}>27.08.2025</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">11 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/public/payroll.jpg" />
                <img
                  src="/public/payroll.jpg"
                  alt="Payroll-Outsourcing: Teamwork zwischen Unternehmen und externem Dienstleister"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Outsourcing der Lohnabrechnung: sicher, fristgerecht und
              datenschutzkonform.
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="/public/Autorenbild.jpg"
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
              <strong>Outsourcing spart Zeit und reduziert Risiken:</strong> Ein
              spezialisierter <em>payroll service</em> hält Gesetze und Fristen
              ein, übernimmt Updates und liefert geprüfte Lohnabrechnungen.
            </li>
            <li>
              <strong>DSGVO beachten:</strong> Ohne
              Auftragsverarbeitungsvertrag, TOMs (Technische und Organisatorische
              Maßnahmen) und sauberes Rollen-/Rechtemanagement kein Start.
            </li>
            <li>
              <strong>Stammdaten sind der Hebel:</strong> Eine vollständige,
              geprüfte <em>Stammdaten-Übergabe</em> verhindert Fehl-Abrechnungen
              und Nachläufer – nutze ein verbindliches Datenfeld-Template.
            </li>
            <li>
              <strong>SLAs steuern Qualität:</strong> Definiere Cut-offs,
              Antwortzeiten, Ticketklassen, Eskalationen und eine jährliche
              Payroll-Kalender-Freigabe.
            </li>
            <li>
              <strong>Monatsprozess klar takten:</strong> On/Offboarding,
              eAU/Krankmeldung, Fristen (Beitragsnachweise, Lohnsteuer) – alles
              im Rhythmus, alles dokumentiert.
            </li>
            <li>
              <strong>Kosten realistisch planen:</strong> Üblich sind
              Abrechnungs-Pauschalen pro Kopf plus Extras; Referenzen und
              <em> lohnbuchhaltung auslagern kosten erfahrung kmu</em> prüfen.
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
              <a className={`hover:underline ${accent} font-medium`} href="#warum-outsourcing">
                Warum Lohnbuchhaltung auslagern?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#datenschutz">
                Datenschutz & DSGVO: Was muss in den AV-Vertrag?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#stammdaten">
                Übergabe der Stammdaten: Template & Qualitätssicherung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#on-offboarding">
                On-/Offboarding & eAU: So läuft’s im Alltag
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#schnittstelle-steuerberater">
                Schnittstelle Steuerberater & Systeme (z. B. DATEV)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#sla-prozess">
                SLAs & Monatsprozess: Von Cut-off bis Auszahlung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#fristen">
                Gesetzliche Fristen im Überblick
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#kosten">
                Kosten & Erfahrungen aus der Praxis
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#fehler-checkliste">
                Fehler-Checkliste & Mustervorlagen
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="warum-outsourcing">
          <h2 className="text-2xl font-bold mb-3">Warum Lohnbuchhaltung auslagern?</h2>
          <p className="leading-relaxed">
            Lohn- und Gehaltsabrechnung ist komplex, fristkritisch und
            haftungsrelevant. Gesetzesänderungen, Tarife, Sonderfälle (Kurzarbeit,
            Elternzeit, Pfändungen, Baulohn), Schnittstellen – all das bindet in
            KMU wertvolle Kapazitäten. <strong>Outsourcing</strong> an einen
            erfahrenen <strong>payroll service</strong> reduziert Fehler und schafft
            Planbarkeit: Du bekommst feste Ansprechpartner:innen, geprüfte
            Prozesse, aktuelle Software und skalierbare Ressourcen – ohne eigene
            Personalsuche, Vertretungen oder Weiterbildungslücken.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-1">Vorteile</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Weniger Fehler & Rückfragen</li>
                <li>Gesetzeskonform (DSGVO, SV, Lohnsteuer)</li>
                <li>Planbare Kosten, skalierbar</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h3 className="font-semibold mb-1">Risiken</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Abhängigkeit vom Dienstleister</li>
                <li>Schlechte Datenqualität beim Start</li>
                <li>Unklare SLAs / Verantwortungen</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h3 className="font-semibold mb-1">Lösung</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Saubere Stammdaten-Migration</li>
                <li>AV-Vertrag & TOMs prüfen</li>
                <li>Payroll-Kalender & SLA definieren</li>
              </ul>
            </div>
          </div>

          {/* Bild 1 – 16:6 */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/public/lohnbuchhaltung.jpg" />
                <img
                  loading="lazy"
                  src="/public/lohnbuchhaltung.jpg"
                  alt="Lohnbuchhaltung bereitet oft Kopfschmerzen – extern spart Zeit und Nerven"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Lohnabrechnung intern vs. extern: Outsourcing reduziert Fehlerquellen
              und schafft Kapazität – besonders in Wachstumsphasen.
            </figcaption>
          </figure>
        </section>

        <section id="datenschutz" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Datenschutz & DSGVO: Was muss in den AV-Vertrag?
          </h2>
          <p className="leading-relaxed">
            Für das Outsourcing brauchst du einen{" "}
            <strong>Auftragsverarbeitungsvertrag (AVV)</strong> nach Art. 28 DSGVO.
            Darin regelst du u. a. Zweck, Art und Dauer der Verarbeitung,
            Kategorien von Daten und Betroffenen, technische und organisatorische
            Maßnahmen (TOMs), Vertraulichkeit, Subunternehmer (inkl.
            Widerspruchsrecht), Löschkonzept, Nachweise/Audits, Meldepflichten bei
            Vorfällen sowie Rückgabe/Löschung nach Vertragsende.
          </p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Muss-Checks (Auszug)</h3>
              <ul className="list-disc ml-5">
                <li>Rollen & Verantwortlichkeiten eindeutig</li>
                <li>Subprozessoren & Drittlandtransfers geregelt</li>
                <li>Verschlüsselung, Transportwege, Zugriffskontrollen</li>
                <li>Protokollierung, Berechtigungskonzepte, 4-Augen-Prinzip</li>
                <li>Backup, Notfallplan, RTO/RPO</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Praxis-Tipp</h3>
              <p className="text-sm">
                Nutze ein AVV-Template auf Basis der DSK/KI-Kurzpapiere und führe
                eine dokumentierte TOMs-Prüfung durch. Vereinbare jährliche
                Auditrechte und erfrage Zertifizierungen (z. B. ISAE 3402).
              </p>
            </div>
          </div>
        </section>

        <section id="stammdaten" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Übergabe der Stammdaten: Template & Qualitätssicherung
          </h2>
          <p className="leading-relaxed">
            Die <strong>Stammdaten-Übergabe</strong> entscheidet über den
            späteren Aufwand. Plane ein strukturiertes Import-Template mit
            Pflichtfeldern, Validierungen und Abnahmeschritten. Wichtig: Eine
            „Freeze-Phase“ vor dem Go-live (keine Änderungen ohne Ticket), damit
            der erste Abrechnungslauf sauber durchläuft.
          </p>

          <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-4">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-60">
                    Datenkategorie
                  </th>
                  <th className="text-left font-semibold p-3">Beispiele</th>
                  <th className="text-left font-semibold p-3">Validierung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Person & Vertrag</td>
                  <td className="p-3">
                    Name, Geburtsdatum, Adresse, IBAN, Steuer-ID, SV-Nr.,
                    Eintritt, Vertragsart, Arbeitszeit, Lohnart
                  </td>
                  <td className="p-3">Format-/Plausibilitäts-Checks</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Entgelt & Benefits</td>
                  <td className="p-3">
                    Grundentgelt, Zulagen, Sachbezüge, VWL/BAV, Pfändungen
                  </td>
                  <td className="p-3">Regelwerk mit Ausreißerlogik</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Steuer & SV</td>
                  <td className="p-3">
                    ELStAM-Parameter, Krankenkasse, BG/UV, SV-Schlüssel
                  </td>
                  <td className="p-3">Mussfelder, Codesets</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Qualitätssicherung</h3>
              <ul className="list-disc ml-5">
                <li>Vier-Augen-Prinzip (HR ↔ Payroll)</li>
                <li>Testabrechnung mit 5–10 % Belegschaft</li>
                <li>Abnahmeprotokoll & Go-live-Checklist</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Datenpflege danach</h3>
              <p className="text-sm">
                Änderungen nur via Tickets & definierte Formulare (z. B. Bank,
                Adresse, Arbeitszeit). Kleine Disziplin, große Wirkung.
              </p>
            </div>
          </div>
        </section>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „In jeder ausgelagerten Payroll ist Datenqualität der größte
            Hebel: Wenn Stammdaten, Fristen und Zuständigkeiten klar sind,
            sinkt die Fehlerquote spürbar – und HR hat endlich Zeit für
            Mitarbeitende statt Nacharbeiten.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Indirektes Zitat, zusammengefasst aus Praxis-Feedback von{" "}
            {reviewer.name}, {reviewer.role}
          </figcaption>
        </figure>

        <section id="on-offboarding" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            On-/Offboarding & eAU: So läuft’s im Alltag
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Onboarding</h3>
              <p className="mt-2">
                Neue Mitarbeitende werden mit Checkliste erfasst: Vertrag,
                ELStAM-Abruf, SV-Anmeldung, Bank, Kostenstelle, Lohnart,
                Arbeitszeitmodell. Die Erfassung erfolgt im HR-Tool, Übergabe
                per Schnittstelle oder Ticket an den Dienstleister – ideal bis
                <em> T-10</em> (zehn Kalendertage vor Auszahlung).
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>ELStAM-Abruf/Änderung veranlassen</li>
                <li>SV-Anmeldung via systemgeprüftem Programm/SV-Portal</li>
                <li>Optional: digitale Personalakte</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Offboarding</h3>
              <p className="mt-2">
                Kündigung/Beendigung wird als Offboarding-Ticket gemeldet
                (Ende, Resturlaub, Abschlusszahlung). Die SV-Abmeldung erfolgt
                mit der nächsten Entgeltabrechnung, spätestens innerhalb der
                vorgesehenen Fristen. Arbeitszeugnis/Archivierung inklusive.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>SV-Abmeldung & Jahres-/Endbescheinigungen</li>
                <li>Rückgabe Arbeitsmittel, Zugriffe sperren</li>
                <li>Datenlöschung nach Aufbewahrungskonzept</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Krankmeldung (eAU) – kurz erklärt</h3>
            <p className="text-sm">
              Seit 2023 rufen Arbeitgeber die elektronische
              Arbeitsunfähigkeitsbescheinigung (<strong>eAU</strong>) digital bei
              der Krankenkasse ab. Praxis: Mitarbeitende melden sich krank, HR
              stößt den eAU-Abruf im System an, Payroll verarbeitet
              Entgeltfortzahlung/Krankengeldzuschuss. Die Papier-AU fürs
              Unternehmen entfällt.
            </p>
          </div>
        </section>

        <section id="schnittstelle-steuerberater" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Schnittstelle Steuerberater & Systeme (z. B. DATEV)
          </h2>
          <p>
            Viele KMU arbeiten mit Kanzleien zusammen. Kläre, wer welche Rolle
            übernimmt: Der <strong>payroll service</strong> erstellt die
            Abrechnungen, die Kanzlei prüft/verbucht im Fibu-System (z. B.
            DATEV). Nutze definierte Exporte (Buchungsstapel, Kostenstellen) und
            sichere Freigaben. So vermeidest du Doppelarbeit und Brüche.
          </p>

          {/* 2:1 Grid Vergleich */}
          <div className="mt-6 grid md:grid-cols-[2fr_1fr] gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Austauschformate</h3>
              <ul className="list-disc ml-5">
                <li>DATEV-Buchungsstapel mit Konten/Kostenstellen</li>
                <li>SV-/DEÜV-Meldungen, Lohnjournal, Lohnkonten</li>
                <li>CSV/JSON-Exporte für BI/Controlling</li>
              </ul>
            </div>
            <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Shortcut</h3>
              <p className="text-sm">
                Lege feste Übergabetermine (z. B. T+1) für die Buchungsstapel
                fest. So bucht die Kanzlei zeitnah – und du hast aktuelle
                Zahlen.
              </p>
            </aside>
          </div>
        </section>

        <section id="sla-prozess" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            SLAs & Monatsprozess: Von Cut-off bis Auszahlung
          </h2>
          <p>
            Definiere den Monatsrhythmus als <strong>Payroll-Kalender</strong>:
            Welche Inputs brauchst du bis wann, wer prüft, und wann wird
            ausgezahlt? Beispiel für ein klassisches Zeitmodell:
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Tag</th>
                  <th className="text-left font-semibold p-3">Schritt</th>
                  <th className="text-left font-semibold p-3">Verantwortung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T-10</td>
                  <td className="p-3">Cut-off Stammdaten & Onboardings</td>
                  <td className="p-3">HR → Payroll</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T-7</td>
                  <td className="p-3">Variable Daten (Prämien, Zuschläge)</td>
                  <td className="p-3">Führung/HR → Payroll</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T-4</td>
                  <td className="p-3">Testlauf, Plausibilitäten, Rückfragen</td>
                  <td className="p-3">Payroll ↔ HR</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T-2</td>
                  <td className="p-3">Finale Freigabe (4-Augen)</td>
                  <td className="p-3">HR/Finance</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T</td>
                  <td className="p-3">Zahlung Löhne/Gehälter</td>
                  <td className="p-3">Finance</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">T+1</td>
                  <td className="p-3">Buchungsstapel an Kanzlei/ERP</td>
                  <td className="p-3">Payroll → Steuerberater/ERP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">SLA-Kennzahlen</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>First-Time-Right (%)</li>
                <li>Termintreue (%)</li>
                <li>Antwortzeit je Ticketklasse</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Ticketklassen</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>P1: Zahlungsverzug/Fehler Auszahlung</li>
                <li>P2: SV/LSt-Fristen gefährdet</li>
                <li>P3: Standardanfrage</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Eskalation</h3>
              <p className="text-sm">
                Reaktions-/Lösungszeiten definieren (z. B. P1: 2 h/8 h). Monatliches
                Service-Review mit KPIs & Maßnahmenliste.
              </p>
            </div>
          </div>

          {/* Bild 2 – Prozess/Datenschutz */}
          <figure className="mt-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
              style={{ aspectRatio: "16 / 6" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet="/public/lohnbuchhaltung.png" />
                <img
                  loading="lazy"
                  src="/public/lohnbuchhaltung.png"
                  alt="Schloss/Vault mit Ordner und Cloud; Pfeile für sichere Datenübergabe, kleiner Kalender für Monatsrhythmus, SLA-Check"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-2 text-xs text-zinc-600">
              Fehler vermeiden beim Outsourcing: Datenschutz sicherstellen,
              Stammdaten sauber übergeben, SLAs definieren und den Monatsprozess
              strukturieren.
            </figcaption>
          </figure>
        </section>

        <section id="fristen" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Gesetzliche Fristen im Überblick</h2>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <ul className="list-disc ml-5">
              <li>
                <strong>Lohnsteuer-Anmeldung:</strong> i. d. R. bis zum{" "}
                <strong>10. Tag</strong> nach Ablauf des Anmeldungszeitraums
                (monatlich, vierteljährlich oder jährlich – je nach Vorjahres-Lohnsteuer).
              </li>
              <li>
                <strong>Sozialversicherung – Beitragsnachweise:</strong> gehen
                <em> vor</em> der Fälligkeit bei der Krankenkasse ein (üblich:
                2 Arbeitstage vor Fälligkeit).
              </li>
              <li>
                <strong>Sozialversicherungsbeiträge:</strong> fällig am{" "}
                <strong>drittletzten Bankarbeitstag</strong> des Monats der
                Beschäftigung.
              </li>
              <li>
                <strong>Minijob-Abmeldung:</strong> mit nächster Abrechnung,
                spätestens innerhalb der vorgegebenen Fristen.
              </li>
              <li>
                <strong>eAU:</strong> Arbeitgeber rufen die AU-Daten elektronisch
                bei der Krankenkasse ab; Papier-AU für Arbeitgeber entfällt.
              </li>
            </ul>
          </div>
        </section>

        <section id="kosten" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kosten & Erfahrungen aus der Praxis</h2>
          <p className="leading-relaxed">
            Preislogiken variieren. Üblich sind Pauschalen pro Abrechnung
            (z. B. 8–20 € pro Mitarbeitenden/Monat) plus Zusatzpositionen
            (Einrichtung, An-/Abmeldungen, Dokumentenversand, DATEV-Gebühren).
            Je größer die Belegschaft und je standardisierter die Prozesse,
            desto günstiger der Kopfpreis. Für <strong>KMU</strong> lohnt
            Outsourcing oft bereits ab wenigen Mitarbeitenden – vor allem, wenn
            Vertretungen und Softwarepflege intern fehlen.
          </p>

          <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Kostenblock</th>
                  <th className="text-left font-semibold p-3">Beispiele</th>
                  <th className="text-left font-semibold p-3">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Monatspauschale/Abrechnung</td>
                  <td className="p-3">8–20 € pro MA</td>
                  <td className="p-3">Skaleneffekte ab ~50 MA</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Setup & Migration</td>
                  <td className="p-3">einmalig</td>
                  <td className="p-3">inkl. Testläufe & Schulung</td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium">Extras</td>
                  <td className="p-3">An-/Abmeldung, Dokumentenversand</td>
                  <td className="p-3">Transparente Preisliste vereinbaren</td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="font-semibold mb-2">Erfahrungswert</h3>
            <p className="text-sm">
              Frage Referenzen an (idealerweise aus deiner Branche) und bitte um
              eine Testabrechnung plus KPI-Report. So erkennst du Passung und
              Qualität – nicht nur den Preis.
            </p>
          </aside>
        </section>

        <section id="fehler-checkliste" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Fehler-Checkliste & Mustervorlagen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Top 7 Fehler</h3>
              <ol className="list-decimal ml-5 space-y-1 text-sm">
                <li>Unvollständige Stammdaten (IBAN, SV-Nummer, ELStAM)</li>
                <li>Keine klaren Cut-offs & Freigaben</li>
                <li>Unklare Rollen (HR, Payroll, Steuerberater)</li>
                <li>Fehlende AVV/TOMs & Subprozessor-Transparenz</li>
                <li>Fristen für SV/LSt nicht im Blick</li>
                <li>Kein Ticket- & Eskalationsprozess</li>
                <li>Keine jährliche SLA-/Kalender-Freigabe</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Deine Vorlagen (Startpunkt)</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Stammdaten-Template (CSV/XLSX) mit Mussfeldern</li>
                <li>Payroll-Kalender & Checklisten (On/Offboarding)</li>
                <li>AVV-Checkliste inkl. TOMs-Nachweis</li>
                <li>Preis-/Leistungsverzeichnis (Pflicht vs. Optionen)</li>
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
                Was ist der Unterschied zwischen Lohnbüro, Steuerberater und
                Payroll-Dienstleister?
              </h3>
              <p>
                Lohnbüros fokussieren auf Abrechnung, Kanzleien bieten zusätzlich
                steuerliche Beratung/Vertretung, spezialisierte
                <em> payroll services</em> liefern skalierte Prozesse, Software &
                SLAs. Häufig arbeiten sie zusammen – wichtig ist eine klare
                Rollenverteilung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Daten braucht der Dienstleister zum Start?
              </h3>
              <p>
                Personendaten (inkl. Steuer-ID, SV-Nummer), Vertrags- und
                Entgeltdaten, Krankenkasse, ELStAM, Bank, Kostenstellen,
                Historien (z. B. Resturlaub, Pfändungen). Nutze ein
                Import-Template mit Validierungen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie sichere ich die Qualität der Abrechnung?
              </h3>
              <p>
                Vier-Augen-Prinzip, Testläufe, KPIs (First-Time-Right,
                Termintreue), verbindliche Freigaben, Ticketing mit
                Eskalationspfaden – und jährliche Reviews des Payroll-Kalenders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie integriere ich Krankmeldungen (eAU) im Outsourcing?
              </h3>
              <p>
                Mitarbeitende melden sich krank, HR stößt den eAU-Abruf im
                System an; der Dienstleister verarbeitet die Rückmeldungen
                der Krankenkasse und berechnet EFZ/Zuschüsse. Papier-AU für
                Arbeitgeber entfällt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Fristen sind besonders kritisch?
              </h3>
              <p>
                Lohnsteueranmeldung (regelmäßig bis zum 10.), SV-Beitragsnachweise
                <em> vor</em> Fälligkeit, SV-Beiträge am drittletzten Bankarbeitstag.
                Plane Rückwärtsfristen im Payroll-Kalender.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Was kostet das Auslagern der Lohnabrechnung?
              </h3>
              <p>
                Üblich sind pro Kopf 8–20 € pro Monat plus Extras. Preise hängen
                vom Leistungsumfang, Anzahl Mitarbeitender und Branche ab. Frage
                Referenzen an und prüfe das Preis-/Leistungsverzeichnis.
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
                    name: "Was ist der Unterschied zwischen Lohnbüro, Steuerberater und Payroll-Dienstleister?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Lohnbüros fokussieren auf Abrechnung, Kanzleien bieten zusätzlich steuerliche Beratung/Vertretung, spezialisierte payroll services liefern skalierte Prozesse, Software & SLAs. Oft arbeiten sie zusammen – wichtig ist eine klare Rollenverteilung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Daten braucht der Dienstleister zum Start?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Personendaten (inkl. Steuer-ID, SV-Nummer), Vertrags- und Entgeltdaten, Krankenkasse, ELStAM, Bank, Kostenstellen, Historien. Ein Import-Template mit Validierungen sichert Qualität.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie integriere ich Krankmeldungen (eAU) im Outsourcing?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Mitarbeitende melden sich krank, HR stößt den eAU-Abruf an; der Dienstleister verarbeitet Krankenkassen-Rückmeldungen und berechnet EFZ/Zuschüsse. Die Papier-AU für Arbeitgeber entfällt.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Fristen sind besonders kritisch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Lohnsteueranmeldung (regelmäßig bis zum 10.), SV-Beitragsnachweise vor Fälligkeit, SV-Beiträge am drittletzten Bankarbeitstag – alle Fristen gehören in den Payroll-Kalender.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was kostet das Auslagern der Lohnabrechnung?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Üblich sind pro Kopf 8–20 € pro Monat plus Extras. Preise variieren nach Leistungsumfang, Mitarbeiterzahl und Branche. Referenzen und Preis-/Leistungsverzeichnis prüfen.",
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
              Lohnt es sich, die Lohnbuchhaltung auszulagern – und wie vermeidest
              du dabei Fehler?
            </strong>{" "}
            Ja, wenn du Datenschutz (AVV/TOMs), Datenqualität (Stammdaten),
            klare SLAs und einen fixen Monatsprozess etablierst. Dann werden
            Fristen eingehalten, Nacharbeiten seltener – und HR gewinnt Zeit für
            die Menschen im Unternehmen.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Bereit, deine Lohnbuchhaltung sicher auszulagern?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir begleiten dich von der Stammdaten-Übergabe bis zum stabilen
              Monatsprozess – mit Checklisten, Templates und SLA-Design.
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

        {/* Weiterführende Artikel */}
        <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                ELStAM verständlich erklärt – so klappt der Abruf
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                Digitale Personalakte: Aufbau, Rechte & Aufbewahrung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                Entgeltfortzahlung & Krankengeldzuschuss im Überblick
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="#">
                Checkliste Payroll-Kalender für KMU (inkl. Vorlage)
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Lohnbuchhaltung
            auslagern
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
                  <td className="p-3 font-medium text-zinc-900">AVV</td>
                  <td className="p-3 text-zinc-700">
                    Auftragsverarbeitungsvertrag nach Art. 28 DSGVO zwischen
                    Unternehmen (Verantwortlicher) und Dienstleister
                    (Auftragsverarbeiter).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">ELStAM</td>
                  <td className="p-3 text-zinc-700">
                    Elektronische LohnSteuerAbzugsMerkmale (z. B. Steuerklasse,
                    Kinderfreibetrag) – werden von der Finanzverwaltung
                    bereitgestellt/abgerufen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">DEÜV</td>
                  <td className="p-3 text-zinc-700">
                    Datenerfassungs- und Übermittlungsverordnung – regelt u. a.
                    SV-Meldungen (An-/Abmeldung, Jahresmeldung).
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">eAU</td>
                  <td className="p-3 text-zinc-700">
                    Elektronische Arbeitsunfähigkeitsbescheinigung – Abruf der
                    AU-Daten durch Arbeitgeber bei der Krankenkasse.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">GoBD</td>
                  <td className="p-3 text-zinc-700">
                    Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von
                    Büchern und Unterlagen in elektronischer Form; regeln u. a.
                    Archivierung und Unveränderbarkeit.
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
                {author.role} – {author.focus}
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
              Überprüft von: <strong>{reviewer.name}</strong> – {reviewer.role}.{" "}
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
              Finanzämter Baden-Württemberg – Welche Fristen gelten für die
              Lohnsteueranmeldung? –{" "}
              <a
                className={accent}
                href="https://finanzamt-bw.fv-bwl.de/Startseite/Service/Welche%2BFristen%2Bgelten%2Bfuer%2Bdie%2BLohnsteueranmeldung_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              BMF Lohnsteuerrichtlinien/Hinweise (§ 41a EStG; Anmeldungszeiträume) –{" "}
              <a
                className={accent}
                href="https://lsth.bundesfinanzministerium.de/lsth/2025/A-Einkommensteuergesetz/VI-Steuererhebung-36-47/2-Steuerabzug-vom-Arbeitslohn-Lohnsteuer-38-42g/Paragraf-41a/inhalt.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              Techniker Krankenkasse – Fälligkeit der SV-Beiträge (drittletzter
              Bankarbeitstag) –{" "}
              <a
                className={accent}
                href="https://www.tk.de/firmenkunden/versicherung/beitraege-faq/angaben-beitragszahlung/zu-welchem-zeitpunkt-sind-die-beitraege-faellig-2031324"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              SBK – Stichtage für Beitragsnachweise (2 Arbeitstage vor Fälligkeit) –{" "}
              <a
                className={accent}
                href="https://www.sbk.org/arbeitgeberservice/beitraege/beitragszahlungfaelligkeit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              Minijob-Zentrale – Beitragszahlung, Fristen & Abmeldungen –{" "}
              <a
                className={accent}
                href="https://www.minijob-zentrale.de/DE/fuer-gewerbetreibende/beitragszahlung-und-fristen/beitragszahlung-und-fristen_node.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
              /{" "}
              <a
                className={accent}
                href="https://www.minijob-zentrale.de/DE/fuer-gewerbetreibende/jahresmeldung-abmeldung-sonstige-meldungen/jahresmeldung-abmeldung-sonstige-meldungen_node.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              GKV / TK – eAU: Elektronische Arbeitsunfähigkeitsbescheinigung (seit
              2023 verpflichtend) –{" "}
              <a
                className={accent}
                href="https://www.tk.de/firmenkunden/service/fachthemen/alles-wichtige-zur-eau/seit-2023-eau-fuer-arbeitgeber-verpflichtend-2102198"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
              /{" "}
              <a
                className={accent}
                href="https://www.gkv-datenaustausch.de/arbeitgeber/eau/eau.jsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              DSGVO – Art. 28 Auftragsverarbeiter & Praxishilfen –{" "}
              <a
                className={accent}
                href="https://dsgvo-gesetz.de/art-28-dsgvo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
              /{" "}
              <a
                className={accent}
                href="https://www.datenschutzkonferenz-online.de/media/kp/dsk_kpnr_13.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              GoBD – Grundlagen & Aufbewahrung (Überblick) –{" "}
              <a
                className={accent}
                href="https://www.lexware.de/wissen/buchhaltung-finanzen/gobd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              Kosten-Orientierung (<em>ohne Gewähr</em>) – Beispiele & Leitfäden –{" "}
              <a
                className={accent}
                href="https://www.personio.de/hr-lexikon/lohnabrechnung-auslagern/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
              /{" "}
              <a
                className={accent}
                href="https://www.fuer-gruender.de/wissen/unternehmen-fuehren/buchhaltung/lohnbuchhaltung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
