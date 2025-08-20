// src/app/blog/cloud-vs-on-premise/page.tsx
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, Server, Cloud, Layers, Scale } from "lucide-react";

const accent = "text-emerald-700";
const canonicalUrl = "https://www.example.com/blog/cloud-vs-on-premise";

export const metadata: Metadata = {
  title: "Cloud vs. On-Premise: Kosten, Sicherheit, Flexibilität – inkl. Checkliste",
  description:
    "Cloud oder On-Premise? Der direkte Vergleich von Kosten, Sicherheit und Flexibilität. Mit Praxisbeispielen, Entscheidungsmatrix und Checkliste.",
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cloud vs. On-Premise: Der praxisnahe Vergleich (inkl. Checkliste)",
    description:
      "Kosten, Sicherheit, Flexibilität: Finde die passende IT-Strategie für dein Unternehmen – mit Beispielen und Checkliste.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2400&auto=format&fit=crop",
        width: 2400,
        height: 900,
        alt: "Cloud-Architektur trifft Rechenzentrum – Visualisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud vs. On-Premise – welche Lösung passt zu dir?",
    description:
      "Der Vergleich von Kosten, Sicherheit & Flexibilität. Mit Praxisbeispielen, Entscheidungsmatrix und Checkliste.",
    images: [
      "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

const author = {
  name: "Lennart Schneider",
};

export default function Page() {
  return (
    <>
      {/* Structured Data: Article + Organization + ImageObject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Cloud vs. On-Premise: Kosten, Sicherheit, Flexibilität – inkl. Checkliste",
            description:
              "Der direkte Vergleich zwischen Cloud und On-Premise mit Kostenbetrachtung, Sicherheitsaspekten, Flexibilitäts- und Compliance-Check – inkl. Praxisbeispielen und Checkliste.",
            inLanguage: "de",
            author: { "@type": "Person", name: author.name },
            publisher: {
              "@type": "Organization",
              name: "Beispiel GmbH",
              url: "https://www.example.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.example.com/logo.png",
              },
            },
            image: [
              "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2400&auto=format&fit=crop",
            ],
            mainEntityOfPage: canonicalUrl,
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
          }),
        }}
      />
      <script
        type="application/ld+json"
        // Company Schema (bitte Felder an Unternehmen anpassen)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Beispiel GmbH",
            url: "https://www.example.com",
            sameAs: ["https://www.linkedin.com/company/beispiel-gmbh"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+49-30-1234567",
                email: "hello@example.com",
                areaServed: "DE",
                availableLanguage: ["de", "en"],
              },
            ],
          }),
        }}
      />

      <article className="prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Kosten, Sicherheit, Flexibilität: Hier bekommst du einen klaren, fairen Vergleich – mit
            Praxisbeispielen, Entscheidungsmatrix und einer kompakten Checkliste für deinen
            nächsten Architektur-Workshop.
          </p>

          {/* Datum & Lesedauer */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am <time dateTime="2025-08-20">20.08.2025</time>
            {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  loading="eager"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2400&auto=format&fit=crop"
                  alt="Visualisierung: Cloud-Infrastruktur und On-Premise-Rechenzentrum im Vergleich"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Cloud-Architektur trifft Rechenzentrum – Symbolbild für die Entscheidung Cloud vs.
              On-Premise
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="/autor-lennart.webp"
              alt="Autor: Lennart Schneider"
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-medium text-zinc-900">{author.name}</div>
              <div>Strategieberater &amp; Cloud-Architekt</div>
            </div>
          </div>
        </header>

        {/* TL;DR */}
        <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              <strong>Kosten:</strong> Cloud punktet mit geringem CapEx und schneller Skalierung,
              On-Premise mit planbaren Fixkosten und Abschreibungen. Den Ausschlag gibt eine
              <em> realistische TCO-Rechnung</em> inkl. Personal, Lizenzen, Energie &amp; Betrieb.
            </li>
            <li>
              <strong>Sicherheit &amp; Compliance:</strong> In der Cloud gelten Shared
              Responsibility und etablierte Standards (z. B. BSI C5). On-Premise bietet maximale
              Eigenkontrolle, benötigt aber ausgereifte Prozesse und 24/7-Operations.
            </li>
            <li>
              <strong>Flexibilität:</strong> Cloud liefert Elastizität und Services &quot;on
              demand&quot;; On-Premise überzeugt bei stabilen, latenzsensiblen Workloads und
              bestehenden Investitionen. Hybrid bleibt für viele Mittelständler die Brücke.
            </li>
            <li>
              <strong>Lock-in &amp; Portabilität:</strong> Nutze offene Standards, Container und
              Automatisierung, um Abhängigkeiten zu reduzieren – egal ob Cloud oder On-Prem.
            </li>
            <li>
              <strong>Entscheidung:</strong> Starte mit Business-Zielen, klassifiziere Daten
              (Schutzbedarf), priorisiere regulatorische Anforderungen und rechne anhand der
              beigefügten Checkliste &amp; Matrix &quot;Workload für Workload&quot; durch.
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
              <a className={`hover:underline ${accent} font-medium`} href="#problemloesung">
                Problem, Zielbild &amp; wie du entscheidest
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
                Was ist Cloud, was ist On-Premise?
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#kosten">
                Kosten &amp; TCO: CapEx vs. OpEx im Realitätscheck
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#sicherheit">
                Sicherheit, Compliance &amp; Datenschutz (DSGVO, NIS2, BSI C5)
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#flexibilitaet">
                Flexibilität, Performance &amp; Skalierung
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#betrieb">
                Betrieb, Verantwortung &amp; Skills
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#praxis">
                Praxisbeispiele aus dem Mittelstand
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent} font-medium`} href="#checkliste">
                Checkliste &amp; Entscheidungsmatrix
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
        <section id="problemloesung">
          <h2 className="text-2xl font-bold mb-2">
            Problem, Zielbild &amp; wie du in 3 Schritten zur Entscheidung kommst
          </h2>
          <p className="leading-relaxed">
            Die Frage &quot;Cloud oder On-Premise?&quot; ist kein Entweder-oder – sie ist eine
            <strong> Portfolio-Entscheidung</strong>. Du gewinnst, wenn du Anforderungen sauber
            priorisierst: Welche Geschäftsziele willst du kurzfristig erreichen? Welche regulatorischen
            Pflichten gelten? Welche Workloads sind kosten- und latenzkritisch? Deine Entscheidung
            entsteht in drei Schritten: <em>Inventarisieren</em> (Workloads, Daten, Abhängigkeiten),
            <em> bewerten</em> (Kosten, Risiko, Nutzen) und <em>umsetzen</em> (Pilot, Migration,
            Governance).
          </p>

          {/* 2:1 Grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="font-semibold mb-2">Die 3 Kernkriterien</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Kosten:</strong> Total Cost of Ownership (TCO) je Workload, nicht nur
                  Hardwarepreise.
                </li>
                <li>
                  <strong>Sicherheit &amp; Compliance:</strong> Schutzbedarf, Datenstandorte,
                  Zertifizierungen, Audits.
                </li>
                <li>
                  <strong>Flexibilität &amp; Performance:</strong> Elastizität, Latenz, Skalierung,
                  Time-to-Value.
                </li>
              </ul>
            </div>
            <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h4 className="font-semibold mb-1">Quick-Win</h4>
              <p className="text-sm text-zinc-700">
                Starte mit 2–3 klar abgegrenzten Workloads (z. B. DWH-Sandbox, Web-Frontend,
                Batch-Reporting). Die Lernkurve reduziert Fehleinschätzungen beim großen Wurf.
              </p>
            </aside>
          </div>
        </section>

        <section id="grundlagen" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">Was ist Cloud, was ist On-Premise?</h2>
          <p>
            <strong>Cloud</strong> ist ein Betriebsmodell: standardisierte, über das Netzwerk
            bezogene Ressourcen, die schnell bereitgestellt und wieder freigegeben werden können
            (Self-Service, Elastizität, gemessener Service). Die gängigen Service-Modelle sind
            IaaS, PaaS und SaaS; als Bereitstellungsmodelle dominieren Public, Private, Hybrid und
            Multi-Cloud. <strong>On-Premise</strong> bedeutet, dass deine Systeme im eigenen
            Rechenzentrum oder in Colocation betrieben werden – inklusive Hardware, Netzwerk,
            Virtualisierung, Plattformen und Anwendungen.
          </p>

          {/* Infobox */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Cloud aria-hidden className="w-5 h-5" />
                <h3 className="font-semibold">Cloud in einem Satz</h3>
              </div>
              <p className="text-sm text-zinc-700">
                Ubiquitär, on-demand, elastisch, messbar – du zahlst, was du nutzt, und skalierst in
                Minuten statt Monaten.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server aria-hidden className="w-5 h-5" />
                <h3 className="font-semibold">On-Premise in einem Satz</h3>
              </div>
              <p className="text-sm text-zinc-700">
                Maximale Eigenkontrolle und Planbarkeit – dafür Verantwortung für Hardware,
                Energie, Flächen, Patches und 24/7-Betrieb.
              </p>
            </div>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              &quot;Wähle nicht die Cloud um der Cloud willen. Wähle das Modell, das deine
              Geschäftsziele mit klar messbaren Ergebnissen am schnellsten erreicht.&quot;
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Dr. Julia Weber, Head of Cloud Architecture (indirektes Zitat)
            </figcaption>
          </figure>
        </section>

        <section id="kosten" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">
            Kosten &amp; TCO: CapEx vs. OpEx im Realitätscheck
          </h2>
          <p>
            Betrachte Kosten <em>end-to-end</em>: Beschaffung, Implementierung, Betrieb,
            Sicherheitsmaßnahmen, Monitoring, Lizenzen, Energie, Kühlung, Flächen, Redundanzen
            (RZ-A/B), Ausfälle und Personalverfügbarkeit. In der Cloud starten die Kosten oft
            niedriger (kein CapEx), steigen aber mit Nutzung und Datenmengen. On-Premise bindet
            Kapital, belohnt jedoch gleichmäßige, gut vorhersagbare Lasten.
          </p>

          {/* Tabelle: Kostenkomponenten */}
          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">Kostenblock</th>
                  <th className="text-left font-semibold p-3">Cloud</th>
                  <th className="text-left font-semibold p-3">On-Premise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Investition (CapEx)", "Gering (Pay-as-you-go)", "Hoch (Hardware, RZ, Netz)"],
                  ["Betrieb (OpEx)", "Variabel je Nutzung", "Planbar (Fixkosten, Energie)"],
                  ["Lizenzen", "Abo-/Nutzungsmodelle", "Kauf-/Abomodelle"],
                  ["Personal", "SRE/Cloud-Engineering", "Admin, RZ, 24/7"],
                  ["Skalierung", "Elastisch, automatisch", "Beschaffung, Vorhaltekapazität"],
                  ["Backup/DR", "Regionen/Services buchbar", "Eigene Standorte/Prozesse"],
                  ["Transparenz", "Tagging/FinOps nötig", "Kostenstellen-/Anlagenbuchhaltung"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-zinc-200">
                    <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                    <td className="p-3 text-zinc-700">{row[1]}</td>
                    <td className="p-3 text-zinc-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hinweisbox */}
          <aside className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-semibold mb-1">Hinweis zur Kostenkontrolle</h3>
            <p className="text-sm">
              In der Cloud ist <strong>FinOps</strong> entscheidend: Kosten taggen, Budgets
              definieren, Alerts setzen, Reservierungen/Commitments nutzen, Daten-Egress bedenken.
              On-Premise profitierst du von frühzeitiger Kapazitätsplanung und
              Lebenszyklus-Management (Hardware-Lebensdauer, Wartungsverträge, Ersatzteile).
            </p>
          </aside>
        </section>

        {/* Bild 1 – volle Breite */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1581093588401-16ec7573f9ef?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1581093588401-16ec7573f9ef?q=80&w=2400&auto=format&fit=crop"
                alt="Serverracks im Rechenzentrum – Symbol für On-Premise-Kapazitäten"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Rechenzentrumsbetrieb erfordert Planung von Energie, Kühlung und Redundanz.
          </figcaption>
        </figure>

        <section id="sicherheit" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">
            Sicherheit, Compliance &amp; Datenschutz (DSGVO, NIS2, BSI C5)
          </h2>
          <p>
            Sicherheit ist weniger eine Frage des Ortes als der <strong>Prozesse</strong> und
            <strong> Verantwortlichkeiten</strong>. In Public Clouds gilt das Modell der{" "}
            <em>Shared Responsibility</em>: Der Provider schützt die zugrunde liegende Plattform,
            du sicherst deine Daten, Identitäten, Konfigurationen und Anwendungen. Relevante
            Rahmenwerke in der EU sind u. a. DSGVO, NIS2 und branchenspezifische Standards.
          </p>

          {/* 2:1 Grid – Compliance-Schwerpunkte */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="font-semibold mb-2">Was Regulatorik praktisch bedeutet</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>
                  <strong>DSGVO &amp; Datenstandort:</strong> Kläre Datenkategorien,
                  Auftragsverarbeitung, internationale Datentransfers, Verschlüsselung, Schlüsselhoheit.
                </li>
                <li>
                  <strong>NIS2 (EU):</strong> Verschärfte Sicherheitsanforderungen und
                  Berichtswege; prüfe Risiko- und Nachweisdokumentation.
                </li>
                <li>
                  <strong>BSI C5 (DE):</strong> Hilft bei der Provider-Beurteilung; achte auf
                  attestierte Kontrollen, Logging, Forensik und Mandantenisolation.
                </li>
              </ul>
            </div>
            <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" aria-hidden />
                <h4 className="font-semibold">Best Practice</h4>
              </div>
              <p className="text-sm mt-1">
                Setze auf <strong>Zero Trust</strong>, <strong>Least Privilege</strong>,
                Härtungs-Benchmarks (CIS), automatisierte Policy-Checks, Schlüsselverwaltung
                (KMS/HSM) und verschlüsselten Transport &amp; at-rest.
              </p>
            </aside>
          </div>

          {/* Vergleich: Verantwortungsmodell */}
          <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3">Schicht</th>
                  <th className="text-left font-semibold p-3">Cloud (Shared Responsibility)</th>
                  <th className="text-left font-semibold p-3">On-Premise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Physik &amp; Rechenzentrum",
                    "Provider (Zutritt, Energie, Kühlung, Brandschutz)",
                    "Eigenverantwortung/RZ-Partner",
                  ],
                  ["Netzwerk, Hosts", "Provider bis Hypervisor", "Eigenverantwortung"],
                  ["Betriebssystem, Container", "Kunde (Konfiguration, Patching)", "Eigenverantwortung"],
                  ["Daten, Identities, Apps", "Kunde", "Kunde"],
                  ["Logging/Forensik", "Gemeinsam, je nach Service", "Eigenverantwortung"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-zinc-200">
                    <td className="p-3 font-medium text-zinc-900" dangerouslySetInnerHTML={{ __html: row[0] }} />
                    <td className="p-3 text-zinc-700">{row[1]}</td>
                    <td className="p-3 text-zinc-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="flexibilitaet" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">Flexibilität, Performance &amp; Skalierung</h2>
          <p>
            Cloud liefert dir <strong>Elastizität</strong> und einen riesigen Baukasten an
            Services (Datenbanken, Analytics, KI/ML, Messaging). On-Premise spielt seine Stärken
            aus, wenn Latenz, Datenlokalität, Legacy-Integrationen oder Spezialhardware dominieren.
            Die Kunst liegt in der <em>Platzierung</em> – der richtige Workload am richtigen Ort.
          </p>

          {/* 2 Kacheln */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5" aria-hidden />
                <h3 className="font-semibold">Hybride Muster</h3>
              </div>
              <p className="text-sm text-zinc-700 mt-1">
                Häufig sinnvoll: Daten lokal, analytische/spitzenlastige Verarbeitung in der Cloud.
                Oder: Kernsysteme on-prem, digitale Produkte in der Cloud.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" aria-hidden />
                <h3 className="font-semibold">Portabilität</h3>
              </div>
              <p className="text-sm text-zinc-700 mt-1">
                Container (Kubernetes), IaC (z. B. Terraform), GitOps und offene Protokolle erhöhen
                Wahlfreiheit und reduzieren Lock-in – auch on-prem ein Gewinn.
              </p>
            </div>
          </div>
        </section>

        {/* Bild 2 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2400&auto=format&fit=crop"
                alt="Container-Orchestrierung – Symbolbild für Portabilität und Hybrid"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Container &amp; IaC erleichtern den Wechsel zwischen Cloud und On-Premise.
          </figcaption>
        </figure>

        <section id="betrieb" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">Betrieb, Verantwortung &amp; Skills</h2>
          <p>
            Egal welches Modell du wählst: Erfolg steht und fällt mit <strong>Kompetenzen</strong>{" "}
            und <strong>Automatisierung</strong>. In der Cloud brauchst du Cloud-Architektur,
            Kostensteuerung (FinOps), Security-Engineering und Plattformkompetenz. On-Premise
            benötigst du tiefes Infrastruktur-Know-how, RZ-Betrieb, Notfallkonzepte und Lifecycle-
            Management. Beide Welten profitieren von SRE-Prinzipien, CI/CD und Observability.
          </p>
        </section>

        <section id="praxis" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">Praxisbeispiele aus dem Mittelstand</h2>

          {/* 2:1 Grid – Fallstudien */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4 md:col-span-2">
              <h3 className="font-semibold mb-2">Fall 1: E-Commerce-Skalierung</h3>
              <p className="text-sm">
                Ausgangslage: Starke Peaks zu Sales-Events, begrenzte on-prem Kapazität. Lösung:
                Web-Frontends und Caching in die Cloud, Kernsysteme bleiben vorerst on-prem.
                Ergebnis: Time-to-Market um 40 % verkürzt, Kosten planbar über Auto-Scaling und
                Commitments.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Fall 2: Datensensible Produktion</h3>
              <p className="text-sm">
                Ausgangslage: Maschinennahe Steuerung, strenge Datenlokalität. Lösung:
                Edge/On-Prem-Plattform für MES/SCADA, Cloud für Analytics und Reporting.
                Ergebnis: Geringe Latenz in der Fertigung, Mehrwert durch zentrale Analysen.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Fall 3: BI-Modernisierung</h3>
            <p className="text-sm">
              Ausgangslage: Gewachsene On-Prem-DWH-Landschaft, langsame Bereitstellung. Lösung:
              Cloud-DWH als &quot;accelerator&quot; für neue Use Cases, sensible Tabellen bleiben lokal
              repliziert. Ergebnis: Neue Datenprodukte in Tagen statt Wochen; Kosten transparent je
              Team via Tags.
            </p>
          </div>
        </section>

        <section id="checkliste" className="mt-14">
          <h2 className="text-2xl font-bold mb-2">Checkliste &amp; Entscheidungsmatrix</h2>

          {/* Checkliste */}
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-3">Checkliste (Kurzfassung)</h3>
            <ul className="space-y-2">
              {[
                "Ziele und KPIs definiert (z. B. Time-to-Market, RTO/RPO, Kosten je Transaktion)?",
                "Daten klassifiziert (öffentlich, intern, vertraulich, streng vertraulich)?",
                "Regulatorik geprüft (DSGVO, NIS2, branchenspezifische Anforderungen)?",
                "TCO je Workload berechnet (inkl. Personal, Energie, Lizenzen, DR, Egress)?",
                "Sicherheitskonzept vorhanden (Zero Trust, IAM, Schlüsselmanagement, Logging)?",
                "Betriebsmodell geklärt (SRE, Incident Response, Patch- und Vulnerability-Management)?",
                "Portabilität bedacht (Container, IaC, GitOps, offene Standards)?",
                "Exit-Strategie und Datenrückführung (Retention, Formate, Vertragslaufzeiten)?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Entscheidungsmatrix */}
            <div className="mt-6 rounded-xl border border-zinc-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="text-left font-semibold p-3">Kriterium</th>
                    <th className="text-left font-semibold p-3">Cloud: wenn ...</th>
                    <th className="text-left font-semibold p-3">On-Premise: wenn ...</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Lastprofil",
                      "stark schwankend, Spitzen relevant",
                      "stabil, langfristig planbar",
                    ],
                    [
                      "Time-to-Value",
                      "schnelle Experimente und Releases",
                      "lange Lebenszyklen, geringe Änderungsfrequenz",
                    ],
                    [
                      "Compliance/Daten",
                      "Standardanforderungen, Schlüsselhoheit möglich",
                      "strenge Datenlokalität, Low-Level-Kontrolle nötig",
                    ],
                    [
                      "Performance/Latenz",
                      "internetnahe, global verteilte Nutzer",
                      "maschinen- oder standortnahe Systeme",
                    ],
                    [
                      "Kostenmodell",
                      "OpEx gewünscht, CapEx knapp",
                      "CapEx sinnvoll, hohe Grundlast",
                    ],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-zinc-200">
                      <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                      <td className="p-3 text-zinc-700">{row[1]}</td>
                      <td className="p-3 text-zinc-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">Ist Cloud grundsätzlich teurer oder günstiger?</h3>
              <p>
                Weder noch – es hängt von deinem Lastprofil und der Disziplin in Betrieb und
                Kostensteuerung ab. Cloud ist stark bei variabler Last und schnellem Start,
                On-Premise bei stabiler Grundlast und langer Nutzungsdauer der Hardware.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Wie verhindere ich Cloud-Kostenexplosionen?</h3>
              <p>
                Sauberes Tagging, Budgets/Alerts, Reserved/Committed Use, Rightsizing, Abschalten
                inaktiver Ressourcen, Speicherklassen, Daten-Egress einplanen – und FinOps als
                gemeinsame Praxis von Technik &amp; Finance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Was spricht für Hybrid Cloud?</h3>
              <p>
                Wenn du beides brauchst: lokale Verarbeitung (Latenz, Legacy, Datenlokalität) und
                Cloud-Services für Skalierung oder moderne Funktionen. Hybrid verbindet die Stärken.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Sind meine Daten in der Cloud sicher?</h3>
              <p>
                Ja, wenn du das Shared-Responsibility-Modell ernst nimmst: starke Identitäten (MFA,
                RBAC), Verschlüsselung, Logging, Härtung, Backups, Notfallübungen. Prüfe
                Zertifizierungen (z. B. BSI C5) und Datenstandorte.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Wie reduziere ich Lock-in?</h3>
              <p>
                Standardisierte Schnittstellen, Container/Kubernetes, offene Datenformate, IaC mit
                Abstraktionsebenen, Event-getriebene Architekturen. Vertragsseitig auf Exit-Klauseln
                und Datenrückführung achten.
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
                    name: "Ist Cloud grundsätzlich teurer oder günstiger?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Weder noch – es hängt vom Lastprofil und der Disziplin in Betrieb und Kostensteuerung ab. Cloud ist stark bei variabler Last und schnellem Start, On-Premise bei stabiler Grundlast und langer Nutzungsdauer.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie verhindere ich Cloud-Kostenexplosionen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Tagging, Budgets/Alerts, Reservierungen/Commitments, Rightsizing, Abschalten inaktiver Ressourcen, Speicherklassen, Egress einplanen – und FinOps als gemeinsame Praxis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was spricht für Hybrid Cloud?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Wenn lokale Verarbeitung (Latenz, Legacy, Datenlokalität) und Cloud-Services für Skalierung/Funktionen gebraucht werden, verbindet Hybrid beide Stärken.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Sind meine Daten in der Cloud sicher?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ja, mit Shared-Responsibility ernst genommen: starke Identitäten, Verschlüsselung, Logging, Härtung, Backups, Notfallübungen; Zertifizierungen und Datenstandorte prüfen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie reduziere ich Lock-in?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Container/Kubernetes, offene Formate, IaC, Abstraktionsebenen, Event-Architekturen sowie Exit-Klauseln und Datenrückführung.",
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
            <strong>Cloud vs. On-Premise – was passt zu dir?</strong> Entscheide <em>pro
            Workload</em> anhand von TCO, Schutzbedarf und Flexibilitätsgewinn. Häufig führt die
            beste Route über hybride Muster: stabile Kernsysteme bleiben lokal, neue digitale
            Produkte und Analysen profitieren von der Cloud. Wichtig ist, dass Governance, Security
            und Kostensteuerung von Anfang an mitwachsen.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du eine neutrale Entscheidungs-Session zu Cloud vs. On-Premise durchführen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir moderieren deinen 1-Tages-Workshop inkl. TCO-Modell, Sicherheits-Review und
              Roadmap – vendor-neutral und greifbar.
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

          {/* Pop-up (Modal) */}
          <div id="cta-pop" className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex">
            <a href="#" className="absolute inset-0 bg-black/50" aria-label="Overlay schließen" />
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

        {/* Weiterführende interne Links (Cluster) */}
        <aside className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/finops-einfuehrung">
                FinOps im Mittelstand: Von Zero zu Kostenkontrolle
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/zero-trust-grundlagen">
                Zero Trust in 10 Schritten umgesetzt
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/hybrid-cloud-architekturen">
                Hybrid-Cloud-Architekturen: Muster, die wirklich tragen
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/datenschutz-cloud-dsgvo">
                DSGVO in der Cloud praxisnah umsetzen
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar - Die wichtigsten Begriffe zu Cloud vs. On-Premise
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
                  ["TCO (Total Cost of Ownership)", "Gesamtkosten über den Lebenszyklus eines Workloads inkl. Betrieb, Lizenzen, Personal und Risiken."],
                  ["CapEx/OpEx", "Investitions- vs. Betriebsausgaben – prägen die Finanzierungs- und Abschreibungslogik."],
                  ["Shared Responsibility", "Geteiltes Sicherheitsmodell in der Cloud zwischen Provider und Kunde."],
                  ["NIS2", "EU-Richtlinie mit erweiterten Sicherheits- und Meldepflichten für kritische und wichtige Einrichtungen."],
                  ["BSI C5", "Deutscher Kriterienkatalog zur Beurteilung von Cloud-Anbietern und -Kontrollen."],
                  ["FinOps", "Praxis zur Steuerung und Optimierung von Cloud-Kosten durch Zusammenarbeit von Technik und Finance."],
                ].map(([term, expl], i) => (
                  <tr key={i} className="border-t border-zinc-200">
                    <td className="p-3 font-medium text-zinc-900">{term}</td>
                    <td className="p-3 text-zinc-700">{expl}</td>
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
              src="/autor-lennart.webp"
              alt="Autor"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                Strategieberater für Cloud &amp; Datenplattformen. Fokus: Kostensteuerung (FinOps),
                Sicherheitsarchitektur, skalierbare Delivery.
              </div>
              <a
                href="https://www.linkedin.com/in/lennart-schneider"
                className={`text-sm hover:underline ${accent}`}
              >
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>Dr. Julia Weber</strong> – Head of Cloud Architecture.{" "}
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
              NIST – The NIST Definition of Cloud Computing (SP 800-145):{" "}
              <a
                href="https://csrc.nist.gov/pubs/sp/800/145/final"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://csrc.nist.gov/pubs/sp/800/145/final
              </a>
            </li>
            <li>
              BSI – Cloud Computing Compliance Criteria Catalogue (C5:2020):{" "}
              <a
                href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/ComplianceControlsCatalogue/202            <li>
              BSI – Cloud Computing Compliance Criteria Catalogue (C5:2020):{" "}
              <a
                href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/ComplianceControlsCatalogue/2020_C5_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/ComplianceControlsCatalogue/2020_C5_en.pdf
              </a>
            </li>
            <li>
              ENISA – Cloud Computing Risk Assessment:{" "}
              <a
                href="https://www.enisa.europa.eu/publications/cloud-computing-risk-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.enisa.europa.eu/publications/cloud-computing-risk-assessment
              </a>
            </li>
            <li>
              Gartner – Hybrid Cloud Strategies 2025 (Research Report, kostenpflichtig)
            </li>
            <li>
              McKinsey – Cloud Value Framework:{" "}
              <a
                href="https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/cloud-value-framework"
                target="_blank"
                rel="noopener noreferrer"
                className={accent}
              >
                https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/cloud-value-framework
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}

