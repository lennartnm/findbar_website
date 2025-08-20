// src/app/blog/cloud-vs-on-premise/page.tsx
import type { Metadata } from "next";
import { ArrowRight, Check, Shield, Gauge } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart Hoffmann",
  role: "Cloud & IT-Strategieberater",
  url: "https://www.dein-unternehmen.de/team/lennart-hoffmann",
};

const publisher = {
  name: "Dein Unternehmen GmbH",
  url: "https://www.dein-unternehmen.de",
  logo: "https://www.dein-unternehmen.de/logo.png",
};

export const metadata: Metadata = {
  title:
    "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich – inkl. Praxisbeispiele & Checkliste",
  description:
    "Cloud oder On-Premise? Erfahre, welche Lösung für dein Unternehmen passt. Konkreter Kosten-, Sicherheits- und Flexibilitätsvergleich inkl. Praxisbeispielen & Checkliste.",
  alternates: {
    canonical: "https://www.dein-unternehmen.de/blog/cloud-vs-on-premise",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title:
      "Cloud vs. On-Premise: Der klare Entscheidungsleitfaden für dein Unternehmen",
    description:
      "Kosten, Sicherheit, Flexibilität – was passt zu dir? Mit Praxisbeispielen, Tabelle & Checkliste.",
    url: "https://www.dein-unternehmen.de/blog/cloud-vs-on-premise",
    images: [
      {
        url: "https://source.unsplash.com/1600x900/?cloud,servers,datacenter",
        width: 1600,
        height: 900,
        alt: "Cloud- und On-Premise-Infrastruktur im Vergleich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?",
    description:
      "Der direkte Vergleich von Kosten, Sicherheit & Flexibilität – inkl. Praxisbeispiele & Checkliste.",
    images: ["https://source.unsplash.com/1600x900/?cloud,servers,datacenter"],
  },
};

export default function Page() {
  const published = "2025-08-20";
  const updated = "2025-08-20";
  const readingTime = "10 Minuten";

  const hero = "https://source.unsplash.com/1600x600/?cloud,datacenter";

  const imgCloud =
    "https://source.unsplash.com/1600x600/?public-cloud,cloud-computing,api";
  const imgOnPrem =
    "https://source.unsplash.com/1600x600/?server-rack,data-center,enterprise";

  const headline =
    "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?";
  const subHeadline =
    "Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir, fundiert zu entscheiden – inklusive Praxisbeispiele und Checkliste.";

  const faq = [
    {
      q: "Wann ist On-Premise günstiger als die Cloud?",
      a: "Wenn deine Lasten sehr stabil und hoch sind, du Hardware über mehrere Jahre abschreibst, günstigen Strom/Flächen hast und ein starkes internes Team betreibst. Prüfe zusätzlich Ersatzteile, Redundanzen und Kapitalkosten.",
    },
    {
      q: "Ist die Cloud automatisch sicherer?",
      a: "Nicht automatisch – sie bietet starke Sicherheitsfeatures, aber du musst sie korrekt konfigurieren (Identitäten, Netzsegmente, Verschlüsselung, Logging). Sicherheit bleibt eine geteilte Verantwortung.",
    },
    {
      q: "Wie vermeide ich Vendor Lock-in in der Cloud?",
      a: "Setze auf portable Architekturen (Container, Kubernetes, offene Standards), abstrahiere Managed Services bewusst und plane Exit-Strategien in Verträgen (SLA, Datenexportformate).",
    },
    {
      q: "Was bedeutet Datenresidenz für uns in der EU?",
      a: "Du musst wissen, wo Daten gespeichert/weiterverarbeitet werden und welche Rechtsräume greifen. Nutze EU-Regionen, Standardvertragsklauseln und Impact Assessments – besonders bei personenbezogenen Daten.",
    },
    {
      q: "Ist ein Hybrid-Ansatz ein Kompromiss oder „Best of both worlds“?",
      a: "Beides kann stimmen. Hybrid vermeidet Extrempositionen und ermöglicht Workload-Platzierung nach Nutzen, bringt aber Komplexität im Betrieb und in der Governance mit sich.",
    },
    {
      q: "Wie starte ich, wenn ich heute On-Premise bin?",
      a: "Beginne mit einem TCO-Vergleich, wähle 1–2 geeignete Workloads (z. B. DWH-Bursting, Entwicklungsumgebungen), richte Landing Zone, Identitäten und Sicherheitsleitplanken ein und iteriere.",
    },
  ];

  const faqsSchema = faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich",
    description:
      "Ein praxisnaher Leitfaden: Cloud oder On-Premise? Wir vergleichen Kosten (TCO), Sicherheit, Compliance und Flexibilität – inkl. Fallbeispiele und Checkliste.",
    inLanguage: "de",
    image: hero,
    datePublished: published,
    dateModified: updated,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      url: publisher.url,
      logo: {
        "@type": "ImageObject",
        url: publisher.logo,
      },
    },
    mainEntityOfPage:
      "https://www.dein-unternehmen.de/blog/cloud-vs-on-premise",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: publisher.name,
    url: publisher.url,
    logo: publisher.logo,
    sameAs: [
      "https://www.linkedin.com/company/dein-unternehmen",
      "https://x.com/deinunternehmen",
    ],
  };

  return (
<article
  className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  ">

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          {headline}
        </h1>
        <p className="mt-3 text-lg text-zinc-700">{subHeadline}</p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime={updated}>20.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">{readingTime}</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={hero} />
              <img
                loading="eager"
                src={hero}
                alt="Visualisierung von Cloud- und Rechenzentrumsinfrastruktur"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Cloud- und On-Premise-Infrastruktur im Überblick
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/autor-lennart-hoffmann.webp"
            alt="Autor: Lennart Hoffmann"
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
            <strong>Kein „one size fits all“:</strong> Entscheide pro
            Workload. Stabil-hohe Lasten sprechen oft für On-Premise; variable,
            wachstumsgetriebene Lasten profitieren von der Cloud.
          </li>
          <li>
            <strong>Kosten realistisch vergleichen:</strong> Beziehe CapEx,
            OpEx, Personalkosten, Ausfallsicherheit, Lizenzen, Migration und
            Exit-Szenarien in eine <abbr title="Total Cost of Ownership">TCO</abbr>-Betrachtung ein.
          </li>
          <li>
            <strong>Sicherheit ist geteilt:</strong> In der Cloud gilt das
            Shared-Responsibility-Modell; On-Premise trägst du die volle
            Verantwortung für Betrieb und Schutzmaßnahmen.
          </li>
          <li>
            <strong>Compliance & Standort:</strong> EU-Regionen, Vertragsklauseln
            und Exit-Prozesse sauber regeln – egal ob Cloud oder On-Premise.
          </li>
          <li>
            <strong>Pragmatischer Weg:</strong> Häufig startet man mit Hybrid –
            die jeweils passenden Workloads dorthin, wo sie wirtschaftlich und
            risikoseitig am meisten Sinn machen.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-was">
              Was ist was? Begriffe & Modelle kurz erklärt
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#kosten-tco"
            >
              Kosten & TCO: CapEx vs. OpEx, Lizenzen & versteckte Posten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#sicherheit">
              Sicherheit & Verfügbarkeit: Verantwortung, Risiken, Resilienz
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#compliance">
              Compliance & Datenstandort: EU-Anforderungen richtig umsetzen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxis">
              Praxisbeispiele: Zwei typische Entscheidungswege
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#checkliste">
              Checkliste & Entscheidungsmatrix
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
      <section id="was-ist-was">
        <h2 className="text-2xl font-bold mb-3">
          Was ist was? Begriffe & Modelle kurz erklärt
        </h2>
        <p className="text-zinc-700">
          „Cloud“ ist kein Ort, sondern ein Betriebsmodell: IT-Ressourcen werden
          <em> on demand</em> bereitgestellt, elastisch skaliert und nach Nutzung
          abgerechnet. Klassisch unterscheidet man <strong>IaaS</strong> (Rechen-,
          Speicher-, Netzwerkressourcen), <strong>PaaS</strong>{" "}
          (Laufzeit-/Datenbank-/Integrationsdienste) und <strong>SaaS</strong>{" "}
          (fertige Anwendungen). „On-Premise“ meint den Betrieb in deinen
          eigenen Rechenzentren oder Colocations – mit voller technischer und
          organisatorischer Verantwortung.
        </p>

        {/* 2:1 Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="md:col-span-2 rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Cloud – Stärken</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Elastische Skalierung & schnelle Bereitstellung</li>
              <li>Breites Ökosystem (Daten, KI, Integration, DevTools)</li>
              <li>OpEx-Modell mit granularer Abrechnung</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">Cloud – Grenzen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Laufende Kosten bei Dauerlasten</li>
              <li>Komplexität von Governance & Kostenkontrolle (FinOps)</li>
              <li>Abhängigkeiten von Providern/Regionen</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">On-Premise – Stärken</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Volle Kontrolle über Hardware, Netz & Datenort</li>
              <li>Planbare Kosten bei stabilen Workloads</li>
              <li>Individuelle Härtung & Spezial-Hardware möglich</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">On-Premise – Grenzen</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>CapEx-Budget & längere Bereitstellungszeiten</li>
              <li>Skalierung nur in Stufen (Kapazitätsplanung)</li>
              <li>Eingeschränkte Zugang zu modernen Managed Services</li>
            </ul>
          </div>
        </div>

        {/* Bild 1 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={imgCloud} />
              <img
                loading="lazy"
                src={imgCloud}
                alt="Symbolbild: Öffentliche Cloud – elastische Ressourcen & Dienste"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Cloud: Dienste on demand, Abrechnung nach Nutzung, globales
            Regionsnetz.
          </figcaption>
        </figure>
      </section>

      <section id="kosten-tco" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Kosten & TCO: CapEx vs. OpEx, Lizenzen & versteckte Posten
        </h2>
        <p className="text-zinc-700">
          Vergleiche Kosten nicht nur auf dem Papierpreis. Entscheidend ist die
          <strong> Total Cost of Ownership (TCO)</strong> über die Nutzungsdauer:
          Anschaffung, Betrieb, Personal, Ausfälle, Lizenzen, Energie, Kühlung,
          Migration, Schulung, Monitoring, Backups – und die Kosten, wenn du
          später wieder wechseln willst (Exit).
        </p>

        {/* Vergleichstabelle */}
        <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-6">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold w-1/3">Kostenblock</th>
                <th className="p-3 text-left font-semibold">Cloud</th>
                <th className="p-3 text-left font-semibold">On-Premise</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Investitionen",
                  "Geringe Anfangskosten (OpEx), Pay-as-you-go",
                  "Hohe CapEx für Hardware, RZ-Infrastruktur",
                ],
                [
                  "Variable Lasten",
                  "Sehr effizient durch elastische Skalierung",
                  "Über-/Unterprovisionierung möglich",
                ],
                [
                  "Dauerlasten",
                  "Dauerhafte Gebühren, ggf. Rabatte via Commitments",
                  "Planbare Abschreibung, günstiger bei hoher Auslastung",
                ],
                [
                  "Lizenzen",
                  "SaaS/PaaS inkludiert, aber Provider-spezifisch",
                  "Eigene Lizenzverwaltung (BYOL), Wartungsverträge",
                ],
                [
                  "Personal",
                  "Weniger Infrastruktur-Betrieb, Fokus auf Plattform/App",
                  "Mehr Betrieb/Monitoring/Facility-Management",
                ],
                [
                  "Ausfälle",
                  "Mehrregion-Optionen, aber Daten-/Architekturkosten",
                  "Redundanzen selbst aufbauen & finanzieren",
                ],
                [
                  "Exit",
                  "Datenexport, Architektur-Portabilität beachten",
                  "Hardware-Verwertung, Migration & Rückbau",
                ],
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                  <td className="p-3 text-zinc-700">{row[1]}</td>
                  <td className="p-3 text-zinc-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Gauge className="w-4 h-4" aria-hidden="true" />
              FinOps-Hinweise für die Cloud
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Budgets & Budgetsperren je Team/Produkt</li>
              <li>Tagging-Standards für Kostenzuordnung</li>
              <li>Commitments (z. B. Savings Plans) bewusst wählen</li>
              <li>Right-sizing, Idle-Elimination, Storage-Klassen</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" aria-hidden="true" />
              Kostentreiber On-Premise im Blick
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Redundanz (USV, Generator, Leitungen) & Wartung</li>
              <li>Hardware-Erneuerungszyklen, Lieferzeiten</li>
              <li>Strompreise, Kühlung, Flächenkosten</li>
              <li>24/7-Betrieb, Rufbereitschaft, Ersatzteilhaltung</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sicherheit" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Sicherheit & Verfügbarkeit: Verantwortung, Risiken, Resilienz
        </h2>
        <p className="text-zinc-700">
          In Public Clouds gilt das <strong>Shared-Responsibility-Modell</strong>:
          Der Provider sichert <em>unter</em>halb deiner Workloads (Physik,
          Rechen-/Speicher-/Netz-Layer, Hypervisor), du verantwortest
          Konfiguration, Identitäten, Daten, Anwendungen. On-Premise liegt alles
          bei dir – mit maximaler Kontrolle, aber auch Aufwand.
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Die meisten Sicherheitsprobleme sind <em>Konfigurations</em>- und{" "}
            <em>Prozess</em>-Probleme – nicht Technologiefehler. Egal ob Cloud
            oder On-Premise: Ohne saubere Identitäten, Segmentierung,
            Verschlüsselung und Logging bleibt Sicherheit Zufall.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Dr. Jana Reimers, CISO Advisor (indirektes Zitat)
          </figcaption>
        </figure>

        {/* Bild 2 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={imgOnPrem} />
              <img
                loading="lazy"
                src={imgOnPrem}
                alt="On-Premise-Rechenzentrum mit Serverracks und Verkabelung"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            On-Premise: Volle Hoheit – und volle Verantwortung für Härtung und
            Resilienz.
          </figcaption>
        </figure>

        {/* Infobox */}
        <aside className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-2">Praktische Security-Leitplanken</h3>
          <ul className="grid md:grid-cols-2 gap-2 list-disc ml-5">
            <li>Zero-Trust-Identitäten (MFA, konditionale Policies)</li>
            <li>Verschlüsselung at rest & in transit</li>
            <li>Netz-Segmentierung, Private Endpoints</li>
            <li>Härtung von Images/Golden Builds</li>
            <li>Protokollierung & SIEM/UEBA-Anbindung</li>
            <li>Backup & Restore-Tests, RPO/RTO realistisch planen</li>
          </ul>
        </aside>
      </section>

      <section id="compliance" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Compliance & Datenstandort: EU-Anforderungen richtig umsetzen
        </h2>
        <p className="text-zinc-700">
          Ob Cloud oder On-Premise: Für personenbezogene Daten gilt die DSGVO.
          Achte auf Datenresidenz (EU-Regionen), klare
          Auftragsverarbeitungsverträge, Standardvertragsklauseln,
          technische/organisatorische Maßnahmen und Exit-Regelungen. Für
          kritische Dienste kommen je nach Branche zusätzliche Regimes wie NIS2
          oder branchenspezifische Standards hinzu.
        </p>

        {/* 2-Spalten Faktenbox */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Worauf du in der Cloud achtest</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Regionenwahl (EU), Datenklassifizierung & Logging</li>
              <li>Technische & rechtliche Transfermechanismen</li>
              <li>Provider-Zertifizierungen (z. B. ISO/IEC 27001)</li>
              <li>Exit-Plan: Exportformate, Löschkonzepte, Fristen</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Worauf du On-Premise achtest</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Physische Sicherheit (Zutritt, Video, Klima, Brand, Strom)
              </li>
              <li>
                Patch-, Schwachstellen-, Log- und Rechte-Management in Eigenregie
              </li>
              <li>Nachweise & Audits (z. B. ISMS, BCM, Notfalltests)</li>
              <li>Verträge mit Colocation/Netzbetreibern prüfen</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="praxis" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Praxisbeispiele: Zwei typische Entscheidungswege
        </h2>

        <div className="space-y-8">
          {/* Fall 1 */}
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Fall A – Digitales Scale-up</h3>
            <p className="text-zinc-700">
              Ein SaaS-Startup mit stark schwankender Nachfrage und globalem
              Wachstum entscheidet sich für Cloud-First. Gründe: schnelle
              Feature-Entwicklung mit PaaS-Diensten, elastische Skalierung,
              internationale Expansion ohne eigene RZ-Invests. Kostenkontrolle
              erfolgt via FinOps (Budgets, Tagging, Rightsizing, Commitments).
            </p>
            <ul className="mt-3 list-disc ml-5 text-sm">
              <li>Workloads: API, Web, Datenbank (Managed), Analytics</li>
              <li>SLA: Multi-AZ, Backup-Automatisierung, IaC-Wiederholbarkeit</li>
              <li>Exit: Portabilität durch Container & offene Datenformate</li>
            </ul>
          </div>

          {/* Fall 2 */}
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Fall B – Industrieller Mittelstand</h3>
            <p className="text-zinc-700">
              Ein Fertiger mit stabilen Kernsystemen (ERP/MES), sensiblen
              Produktionsdaten und Latenzanforderungen wählt Hybrid: kritische
              Steuerungssysteme verbleiben On-Premise; Analytics, DWH-Bursting
              und Kollaboration wandern in die Cloud. So vereinen sie Kontrolle
              mit Innovationsgeschwindigkeit.
            </p>
            <ul className="mt-3 list-disc ml-5 text-sm">
              <li>Workloads: OT-nahe Systeme On-Premise, BI/ML in der Cloud</li>
              <li>Netz: Private Links, strikte Segmentierung, Zero-Trust</li>
              <li>Governance: Zentrales Identitäts- & Rollenmodell</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="checkliste" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Checkliste & Entscheidungsmatrix
        </h2>

        {/* Checkliste */}
        <div className="rounded-2xl border border-zinc-200 p-5">
          <h3 className="font-semibold mb-2">Checkliste – so triffst du die Wahl</h3>
          <ul className="space-y-2">
            {[
              "Lastprofil analysiert (Spitzen, Wachstum, Saisonalität)?",
              "Datenklassifizierung & regulatorische Anforderungen dokumentiert?",
              "TCO-Modell mit CapEx/OpEx, Personal, Energie, Lizenzen, Ausfällen?",
              "Sicherheitsleitplanken (Identitäten, Verschlüsselung, Logging) definiert?",
              "Exit-Strategie & Vertragsregelungen (SLA, Support, Datenexport) geklärt?",
              "FinOps/IT-Controlling oder Servicekalkulation aufgesetzt?",
              "Betriebs- und Störfallprozesse (RPO/RTO, DR) geprüft und getestet?",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Entscheidungsmatrix */}
        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold">Kriterium</th>
                <th className="p-3 text-left font-semibold">Trifft eher zu auf</th>
                <th className="p-3 text-left font-semibold">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Stark variable, unvorhersehbare Last",
                  "Cloud",
                  "Elastische Skalierung, bedarfsorientierte Kosten",
                ],
                [
                  "Hochstabile Dauerlast, 24/7",
                  "On-Premise",
                  "Hohe Auslastung + Abschreibung vorteilhaft",
                ],
                [
                  "Strenge Latenzanforderungen (ms-kritisch)",
                  "On-Premise/Edge",
                  "Nähe zur Maschine/Produktion",
                ],
                [
                  "Schnelle globale Expansion geplant",
                  "Cloud",
                  "Regionen & CDN verfügbar",
                ],
                [
                  "Sehr sensible Daten + spezielle Vorgaben",
                  "Beides",
                  "Cloud: EU-Regionen & Controls; On-Prem: volle Hoheit",
                ],
                [
                  "Team-Know-how im RZ-Betrieb vorhanden",
                  "On-Premise",
                  "Eigene Teams nutzen",
                ],
                [
                  "Time-to-Market/Innovation priorisiert",
                  "Cloud",
                  "PaaS/Managed Services beschleunigen",
                ],
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                  <td className="p-3 text-zinc-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          {faq.map((f, i) => (
            <div key={i}>
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
              mainEntity: faqsSchema,
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            Cloud oder On-Premise – was ist für dich die beste Entscheidung?
          </strong>{" "}
          Wähle nicht ideologisch, sondern workload-basiert: Prüfe Lastprofil,
          Risiken, Compliance und TCO. In vielen Fällen liefert ein Hybrid-Ansatz
          kurzfristig die beste Balance aus Geschwindigkeit, Kontrolle und
          Kostenkontrolle – mit klaren Leitplanken für Sicherheit und Governance.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Willst du gemeinsam deine Cloud- oder On-Prem-Strategie festzurren?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir analysieren deinen Ist-Stand, vergleichen TCO und entwickeln
            deine Roadmap – in 10 Werktagen zur belastbaren Entscheidungsgrundlage.
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
                className={`font-medium underline ${accent}`}
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
            <a
              className={`hover:underline ${accent}`}
              href="/blog/finops-kostenkontrolle-in-der-cloud"
            >
              FinOps: Kostenkontrolle in der Cloud – Leitplanken & Best Practices
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/hybrid-cloud-architekturen-richtig-planen"
            >
              Hybrid-Cloud: Architekturen richtig planen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/dsgvo-cloud-datenresidenz"
            >
              DSGVO & Datenresidenz in der Cloud – was wirklich zählt
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/exit-strategie-aus-der-cloud"
            >
              Exit-Strategie aus der Cloud: So bleibst du handlungsfähig
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Cloud vs. On-Premise
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
                [
                  "IaaS / PaaS / SaaS",
                  "Service-Modelle der Cloud – von Infrastruktur (IaaS) über Plattformdienste (PaaS) bis zu fertigen Anwendungen (SaaS).",
                ],
                [
                  "TCO (Total Cost of Ownership)",
                  "Gesamtkosten über die Nutzungsdauer – inkl. Betrieb, Personal, Ausfällen, Migration und Exit.",
                ],
                [
                  "Shared-Responsibility-Modell",
                  "Aufteilung der Sicherheitsverantwortung zwischen Cloud-Provider (unterer Stack) und Kunde (Konfiguration, Daten, Apps).",
                ],
                [
                  "RPO/RTO",
                  "Recovery Point/Time Objective – wie viel Datenverlust und Ausfallzeit akzeptabel ist.",
                ],
                [
                  "Datenresidenz",
                  "Geografischer Speicher- und Verarbeitungsort von Daten, relevant für Compliance/DSGVO.",
                ],
                [
                  "FinOps",
                  "Praxis zur finanziellen Steuerung und Optimierung von Cloud-Kosten über Teams hinweg.",
                ],
              ].map((row, i) => (
                <tr key={i} className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                  <td className="p-3 text-zinc-700">{row[1]}</td>
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
            src="/autor-lennart-hoffmann.webp"
            alt="Autorin/Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a
              href="https://www.linkedin.com/in/lennart-hoffmann"
              className={`text-sm hover:underline ${accent}`}
            >
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Sarah Mertens</strong> – Lead Cloud
            Architect.{" "}
            <a
              href="https://www.linkedin.com/in/sarah-mertens"
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
            NIST Special Publication 800-145 – The NIST Definition of Cloud
            Computing:{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf"
            >
              https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf
            </a>
          </li>
          <li>
            AWS – Shared Responsibility Model:{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html"
            >
              https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-model.html
            </a>
          </li>
          <li>
            ENISA – Threat Landscape 2024:{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024"
            >
              https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024
            </a>
          </li>
          <li>
            Flexera – State of the Cloud Report 2024 (PDF):{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://sc102-prod-cd.azurewebsites.net/-/media/files/noram/free/state-of-the-cloud-report-2024.pdf?sc_lang=en-ca"
            >
              https://sc102…/state-of-the-cloud-report-2024.pdf
            </a>
          </li>
          <li>
            Uptime Institute – Global Data Center Survey 2024 (PDF):{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.GlobalDataCenterSurvey.Report.pdf?version=0"
            >
              https://datacenter.uptimeinstitute.com/…/2024.GlobalDataCenterSurvey.Report.pdf
            </a>
          </li>
          <li>
            EDPB – Guidelines 02/2024 on GDPR Article 48, v2.1 (2025, PDF):{" "}
            <a
              className={`hover:underline ${accent}`}
              href="https://www.edpb.europa.eu/system/files/2025-06/edpb_guidelines_202402_article48_v2_en.pdf"
            >
              https://www.edpb.europa.eu/…/article48_v2_en.pdf
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
