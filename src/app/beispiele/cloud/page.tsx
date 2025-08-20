// src/app/blog/cloud-vs-on-premise/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

/**
 * Blog Artikel Creator (Typ 1 Erklärend)
 * Thema: Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?
 * Hinweis: Dieser Artikel ist als SSG/SSR-Inhalt ohne Client-Hydration konzipiert.
 */

const title =
  "Cloud vs. On-Premise 2025: Kosten, Sicherheit & Flexibilität – der klare, datenbasierte Vergleich inkl. Checkliste";
const description =
  "Cloud, On-Premise oder Hybrid? Vergleich 2025: Kosten, Sicherheit, Flexibilität, TCO-Methodik, DSGVO & Vendor-Lock-in – inkl. Checkliste & Entscheidungs-Framework.";
const canonical = "https://www.beispiel.de/blog/cloud-vs-on-premise";

const hero =
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1920&q=80"; // Datacenter (Taylor Vick)
const imgAltHero =
  "Blick in ein modernes Rechenzentrum mit Patchfeldern und Kabeln – Symbolbild für On-Premises-Infrastruktur";

const inlineImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"; // Laptop/Cloud-Work
const inlineImgAlt =
  "Cloud-Architektur in der Praxis: Entwickler-Laptop mit Code und Cloud-Symbole";

const author = {
  name: "Lennart Schröder",
  role: "Cloud- & Kostenstrategie (FinOps) Consultant",
  image: "/autor-lennart.webp",
};

const accent = "text-emerald-700";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    images: [{ url: hero, width: 1200, height: 630, alt: imgAltHero }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [hero],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <article className="prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Headline / Hero */}
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Kosten, Sicherheit, Flexibilität: Hier erhältst du einen klaren, datenbasierten
          Vergleich von Cloud, On-Premise und Hybrid-Ansätzen – inklusive Checkliste
          &amp; Entscheidungs-Framework.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-20">20.08.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 (LCP-Bild: eager) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={`${hero}&w=1200`} />
              <img
                loading="eager"
                src={hero}
                alt={imgAltHero}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Modernes Rechenzentrum als Symbol für lokale Infrastruktur (On-Premises).
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/autor-lennart.webp"
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
      {/* TL;DR */}
      <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>Kosten:</strong> Cloud verschiebt Ausgaben von CapEx zu OpEx und skaliert
            granular; On-Prem lohnt sich bei stabiler Last und hohen Auslastungsgraden; Hybrid
            senkt Migrations- und Exit-Risiken. Für eine seriöse TCO nutze Kalkulatoren und
            Messdaten statt Pauschalwerte. :contentReference[oaicite:0]{index=0}
          </li>
          <li>
            <strong>Sicherheit &amp; Compliance:</strong> Cloud folgt dem
            Shared-Responsibility-Modell und bietet starke Standards, On-Prem bietet maximale
            Datensouveränität. Der europäische Threat Landscape Report zeigt: Resilienz &amp;
            Governance sind zentral. :contentReference[oaicite:1]{index=1}
          </li>
          <li>
            <strong>Flexibilität:</strong> Cloud punktet bei Time-to-Value und Elastizität,
            On-Prem bei deterministischer Latenz; Hybrid kombiniert das Beste aus beiden Welten
            für sensible Workloads (z. B. regulierte Daten). :contentReference[oaicite:2]{index=2}
          </li>
          <li>
            <strong>Marktentwicklung:</strong> Endkundenausgaben für Public Cloud werden 2025
            voraussichtlich ~723 Mrd. US-$ erreichen – aber ohne FinOps drohen Kostenentgleisungen. :contentReference[oaicite:3]{index=3}
          </li>
          <li>
            <strong>Entscheidungshilfe:</strong> Nutze die Checkliste &amp; das Scoring-Framework
            (unten), um Workloads Cloud-, On-Prem- oder Hybrid-geeignet zuzuordnen – inkl. Exit-,
            Lock-in- und Egress-Bewertung.
          </li>
        </ul>
      </aside>

      {/* ToC */}
      {/* ToC */}
      <nav
        aria-label="Inhaltsverzeichnis"
        className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
      >
        <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#einordnung-2025">
              1. Einordnung 2025: Problem &amp; Lösung in 120 Sekunden
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#grundlagen">
              2. Grundlagen: Was ist Cloud, On-Prem &amp; Hybrid?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kosten">
              3. Kosten &amp; TCO: CapEx vs. OpEx, FinOps &amp; Praxisformeln
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#sicherheit">
              4. Sicherheit, Resilienz &amp; Compliance (DSGVO)
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#flexibilitaet">
              5. Flexibilität, Performance &amp; Lock-in
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#hybrid-praxis">
              6. Hybrid in der Praxis: Wann lohnt es sich?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#checkliste">
              7. Checkliste &amp; Scoring-Framework (Download-fähig)
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              8. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="einordnung-2025">
        <h2 className="text-2xl font-bold mb-3">
          Einordnung 2025: Problem &amp; Lösung in 120 Sekunden
        </h2>
        <p className="leading-relaxed">
          2025 wächst die Cloud weiter rasant: Analysten erwarten rund 723 Mrd. US-$ an
          Endkundenausgaben – getrieben von KI-Workloads und schnellerer Time-to-Value. Gleichzeitig
          hadern viele Unternehmen mit Cloud-Kosten, wenn Governance und FinOps fehlen. Die Folge:
          Verschwendung, Schatten-IT und verschleierte Verantwortlichkeiten. Die Lösung ist kein
          dogmatisches „Cloud-only“, sondern ein workload-basierter Ansatz, der Cloud, On-Prem und
          Hybrid gegeneinander abwägt – mit klaren Entscheidungsregeln, Messdaten und einem
          belastbaren Exit-Plan. :contentReference[oaicite:4]{index=4}
        </p>
      </section>

      <section id="grundlagen" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Grundlagen: Was ist Cloud, On-Prem &amp; Hybrid?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">Knackige Definitionen</h3>
            <p>
              <strong>Cloud Computing</strong> ist laut NIST ein Modell für allgegenwärtigen,
              bedarfsgerechten Zugriff auf einen geteilten Pool konfigurierbarer Ressourcen, die
              schnell bereitgestellt und wieder freigegeben werden können. Die Definition beschreibt
              wesentliche Merkmale (z. B. On-Demand-Self-Service, Elastizität), Service-Modelle
              (IaaS, PaaS, SaaS) und Bereitstellungsmodelle (Public, Private, Hybrid). :contentReference[oaicite:5]{index=5}
            </p>
            <p>
              <strong>On-Premises</strong> bedeutet, dass Hardware, Software und Daten im eigenen
              Rechenzentrum betrieben werden – maximale Hoheit, dafür Verpflichtung für Betrieb,
              Patching, Monitoring und Kapazitätsplanung.
            </p>
            <p>
              <strong>Hybrid</strong> kombiniert On-Prem/Private-Cloud mit Public-Cloud-Ressourcen
              und orchestriert Workloads zwischen den Welten – etwa per VPN, Direct Connect oder
              SD-WAN. So lassen sich Kontrolle und Skalierung verbinden. :contentReference[oaicite:6]{index=6}
            </p>
          </div>

          {/* Infobox */}
          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="font-semibold mb-2">Primäre Keywords</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>Cloud vs. On-Premise</li>
              <li>Hybrid Cloud</li>
              <li>Kostenvergleich Cloud On-Prem</li>
              <li>Sicherheit Cloud vs. On-Prem</li>
              <li>TCO Cloud</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-2">Sekundäre Keywords</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>CapEx vs. OpEx</li>
              <li>DSGVO/Datensouveränität</li>
              <li>FinOps</li>
              <li>Vendor Lock-in &amp; Egress</li>
              <li>Disaster Recovery &amp; SLA</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="kosten" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Kosten &amp; TCO: CapEx vs. OpEx, FinOps &amp; Praxisformeln
        </h2>
        <p>
          Der Kernunterschied: On-Prem ist CapEx-lastig (Anschaffung, Abschreibung, Vorhaltekapazität),
          Cloud ist OpEx-getrieben (nutzer- bzw. verbrauchsabhängig). In der Cloud profitierst du von
          Elastizität – zahlst aber für Egress, Managed Services und ggf. Premium-SLAs. Für belastbare
          Business-Cases arbeite mit konkreten Nutzungsprofilen (CPU-Stunden, Speicher-GB, I/O,
          Datenabflüsse), nicht mit Prozent-Daumenregeln. Nutze offizielle Preis-/TCO-Tools als
          Startpunkt. :contentReference[oaicite:7]{index=7}
        </p>

        {/* Gegenüberstellung als Tabelle */}
        <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-6">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-48">Kriterium</th>
                <th className="text-left font-semibold p-3">Cloud</th>
                <th className="text-left font-semibold p-3">On-Prem</th>
                <th className="text-left font-semibold p-3">Hybrid</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Investitionsstruktur",
                  "OpEx (Pay-as-you-go, Reservierungen, Savings-Plans)",
                  "CapEx (Hardware, Lizenzen) + laufende OpEx",
                  "Mix (gezielte CapEx + elastische OpEx)",
                ],
                [
                  "Auslastungsrisiko",
                  "Gering (elastisch, aber Risiko bei falscher Dimensionierung)",
                  "Hoch (Über-/Unterprovisionierung)",
                  "Mittel (Dämpfung durch Workload-Platzierung)",
                ],
                [
                  "Planbarkeit",
                  "Schwankend (Nutzung, Egress, Preismodelle)",
                  "Hoch (fixe Assets, klar kalkulierbar)",
                  "Mittel (Governance nötig)",
                ],
                [
                  "Optimierung",
                  "FinOps, Rightsizing, Reservierungen, Autoscaling",
                  "Konsolidierung, Virtualisierung, Lifecycle-Mgmt.",
                  "Policy-basierte Platzierung, Cloud Bursting",
                ],
                [
                  "Kostenfallen",
                  "Egress, überdimensionierte Instanzen, Zombie-Ressourcen",
                  "Überkapazität, Wartungsstaus, Ersatzteil-Engpässe",
                  "Doppelte Pfadkosten, komplexe Governance",
                ],
              ].map((row) => (
                <tr className="border-t border-zinc-200" key={row[0]}>
                  <td className="p-3 font-medium text-zinc-900">{row[0]}</td>
                  <td className="p-3 text-zinc-700">{row[1]}</td>
                  <td className="p-3 text-zinc-700">{row[2]}</td>
                  <td className="p-3 text-zinc-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bild 1 – volle Breite, 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet={`${inlineImg}&w=1200`} />
              <img
                loading="lazy"
                src={inlineImg}
                alt={inlineImgAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Kosten realistisch einschätzen: Nutzungsmuster &amp; Preismodelle bestimmen die TCO – nicht
            Pauschalwerte.
          </figcaption>
        </figure>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-lg font-semibold">Praxisformeln (vereinfachte Heuristiken)</h3>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm">
              <p className="mb-2">
                <strong>Cloud-Compute (Monat):</strong> vCPU-Stunden × Preis/vCPU-Std + RAM-GB-Std ×
                Preis/GB-Std + Managed-Service-Gebühren ± Reservierungsrabatte
              </p>
              <p className="mb-2">
                <strong>Cloud-Storage (Monat):</strong> belegte TB × Speicherpreis/TB + Anfragen +
                <span className="font-medium"> Egress-GB × Egress-Preis</span>
              </p>
              <p className="mb-2">
                <strong>On-Prem (Monat):</strong> (CapEx + Installationskosten) / Nutzungsdauer in
                Monaten + Energie + Kühlung + Fläche + Personal + Wartung + Lizenzen
              </p>
              <p className="mb-0">
                <strong>Hybrid:</strong> Obiges anteilig nach Workload-Platzierung (Policy-basiert).
              </p>
            </div>
          </div>
          <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
            <h4 className="font-semibold mb-1">Tipp</h4>
            <p>
              Erstelle dein Basisszenario mit offiziellen Kalkulatoren (z. B. AWS Pricing
              Calculator) und messe anschließend echte Nutzungsdaten, um Abweichungen zu schließen. :contentReference[oaicite:8]{index=8}
            </p>
          </aside>
        </div>

        {/* Expertenzitat */}
        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „FinOps gehört in die Pipeline, nicht in die Excel-Nachschau: Policies und Budgets als
            Code verhindern Kostenüberraschungen und schaffen Verantwortlichkeit bereits im
            Design.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Zusammenfassung aktueller FinOps-Best-Practices (indirektes Zitat nach McKinsey). :contentReference[oaicite:9]{index=9}
          </figcaption>
        </figure>
      </section>

      <section id="sicherheit" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Sicherheit, Resilienz &amp; Compliance (DSGVO)
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p>
              Cloud-Provider investieren massiv in Security-Kontrollen, Zertifizierungen und
              Incident-Response. Dennoch bleibt Sicherheit <em>geteilt</em>: Der Provider sichert das
              Fundament, du sicherst Konfiguration, Identitäten, Daten und Workloads (Shared
              Responsibility). On-Prem bedeutet maximale Gestaltungshoheit, jedoch auch
              Ressourcenbedarf für 24/7-Betrieb, Patch-Zyklen und Red-Team-Übungen.
            </p>
            <p>
              Die europäische Bedrohungslage bleibt anspruchsvoll; Resilienz, Monitoring und
              Wiederanlaufzeiten sind entscheidend. Nutze Immutable Backups, Netzwerksegmentierung
              und regelmäßige Recovery-Drills – unabhängig vom Betriebsmodell. :contentReference[oaicite:10]{index=10}
            </p>
          </div>
          <aside className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
            <h4 className="font-semibold mb-1">Compliance-Schnellcheck (EU/DSGVO)</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Vertragliche Garantien zu Datenstandort &amp; Drittstaatentransfer</li>
              <li>Protokollierte TOMs (Art. 32 DSGVO), Verschlüsselung at-rest/in-transit</li>
              <li>Auftragsverarbeitung (Art. 28), Sub-Prozessoren &amp; Auditrechte</li>
              <li>Exit-/Portabilitätsklauseln, Egress-Konditionen</li>
              <li>Nachweisbare Wiederherstellungsziele (RPO/RTO)</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="flexibilitaet" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Flexibilität, Performance &amp; Lock-in
        </h2>
        <p>
          Cloud liefert schnelle Bereitstellung, nahezu unbegrenzte Skalierung und Zugang zu
          Plattformdiensten (Daten/AI/ML). On-Prem sichert deterministische Latenzen, lokale
          Datenhaltung und volle Hardware-Kontrolle. Hybrid verbindet beides – über sichere
          Netzwerkpfade (VPN, Direct, SD-WAN) und konsistente Management-Ebenen. :contentReference[oaicite:11]{index=11}
        </p>
        <p>
          Achte auf Lock-in-Treiber (proprietäre APIs, proprietäre Datenbanken) und
          <em> Egress-Kosten</em>. Architekturen mit offenen Standards, Containern und
          Daten-Portabilität verringern Wechselbarrieren.
        </p>
      </section>

      <section id="hybrid-praxis" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Hybrid in der Praxis: Wann lohnt es sich?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Regulierte Daten</strong> (Gesundheit, öffentlicher Sektor): Sensible Daten
                verbleiben privat, Frontends/Analytics skalieren in der Public Cloud.
              </li>
              <li>
                <strong>Latenzkritik</strong>: Edge/On-Prem nahe am Prozess, Trainings-/Batch-Jobs
                in der Cloud.
              </li>
              <li>
                <strong>Modernisierung ohne Big Bang</strong>: Altsysteme On-Prem weiterbetreiben,
                neue Services cloud-nativ aufbauen (Strangler-Pattern).
              </li>
              <li>
                <strong>Resilienz &amp; Ransomware</strong>: Immutable Snapshots + Offsite-Recovery
                in der Cloud erhöhen die Wiederanlaufgeschwindigkeit.
              </li>
            </ul>
          </div>
          <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
            <h4 className="font-semibold mb-1">Daumenregel</h4>
            <p>
              Hybrid ist kein Selbstzweck. Es lohnt sich, wenn klare Anforderungen (Datenhoheit,
              Latenz, Regulatorik) den Mehraufwand rechtfertigen und Governance/FinOps etabliert
              sind.
            </p>
          </aside>
        </div>
      </section>

      <section id="checkliste" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Checkliste &amp; Scoring-Framework</h2>

        {/* 2:1 Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold">A) Workload-Check (Score 0–5 je Kriterium)</h3>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm">
              <ol className="list-decimal ml-5 space-y-1">
                <li>Datensensibilität &amp; Regulatorik (DSGVO, Sektorgesetze)</li>
                <li>Latenzfenster &amp; Bandbreitenbedarf (Edge, Standortnähe)</li>
                <li>Lastprofil (Spitzen, Saisonalität, Wachstum/Unsicherheit)</li>
                <li>Plattformabhängigkeit (proprietär vs. offen), Portabilität</li>
                <li>Team-Reifegrad (Cloud-Ops/FinOps/SecOps-Kompetenzen)</li>
                <li>Exit-Plan vorhanden (Daten-Export, Egress, Alternativen)</li>
                <li>Budgetmodell (CapEx-Präferenz vs. OpEx-Steuerung)</li>
              </ol>
            </div>

            <h3 className="text-lg font-semibold mt-6">B) Auswertung</h3>
            <p className="text-sm">
              Summiere Punkte für <em>Cloud-Treiber</em> (3–5 bei 2–6) vs. <em>On-Prem-Treiber</em>{" "}
              (0–2 bei 1–3). Beispielhafte Schwellen:
            </p>
            <ul className="list-disc ml-5 text-sm">
              <li>
                <strong>Cloud</strong>: starke Volatilität, geringe Regulierung, Team mit Cloud-/FinOps-Reife
              </li>
              <li>
                <strong>On-Prem</strong>: hochregulierte Daten, harte Latenz, stabile Auslastung
              </li>
              <li>
                <strong>Hybrid</strong>: gemischte Anforderungen, Migrationspfad oder Exit-Reduktion
              </li>
            </ul>
          </div>

          <aside className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
            <h4 className="font-semibold mb-2">C) Tool-Hinweise</h4>
            <p className="mb-2">
              Kalkuliere die Basiskosten mit offiziellen Pricing-Tools und verankere
              Kosten-Policies „as code“ (Budgets, Quotas, Tagging) im Delivery-Prozess. :contentReference[oaicite:12]{index=12}
            </p>
            <p className="mb-0">
              Ohne frühe Governance droht Verschwendung – verankere FinOps in Architektur &amp;
              Entwicklung (Shift-Left). :contentReference[oaicite:13]{index=13}
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Ist Cloud immer günstiger als On-Prem?</h3>
            <p>
              Nein. Cloud lohnt sich bei dynamischer Last und schneller Innovation. On-Prem ist im
              Vorteil bei stabiler Auslastung, langer Nutzungsdauer und klarer Kapazitätsplanung.
              Vollständige TCO-Vergleiche benötigen reale Nutzungsdaten und berücksichtigen Egress,
              Plattformdienste sowie Personalaufwand. :contentReference[oaicite:14]{index=14}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wie beeinflusst FinOps meine Entscheidung?</h3>
            <p>
              FinOps als Code (Budgets, Limits, Policies in CI/CD) verhindert Kostenentgleisungen
              und beschleunigt Entscheidungen, weil Kosten eine Design-Dimension werden. :contentReference[oaicite:15]{index=15}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Ist Hybrid nur eine Übergangslösung?</h3>
            <p>
              Nicht zwingend. Für sensible Daten, Latenzanforderungen oder schrittweise
              Modernisierung ist Hybrid ein dauerhaft tragfähiges Zielbild – sofern Governance und
              Automatisierung stimmen. :contentReference[oaicite:16]{index=16}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Rolle spielt die aktuelle Bedrohungslage?</h3>
            <p>
              Die ENISA-Analysen zeigen eine anhaltend hohe Bedrohungslage. Resilienzmaßnahmen wie
              Immutable Backups und regelmäßige Wiederherstellungsübungen sind Pflicht – unabhängig
              vom Betriebsmodell. :contentReference[oaicite:17]{index=17}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Gibt es eine allgemein „richtige“ Lösung?</h3>
            <p>
              Nein. „Richtig“ ist die Lösung, die deine Workloads, Risiken und Ziele bestmöglich
              abbildet – gemessen an Kosten, Compliance, Performance und Exit-Fähigkeit.
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
                  name: "Ist Cloud immer günstiger als On-Prem?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. Cloud lohnt sich bei dynamischer Last und schneller Innovation. On-Prem ist im Vorteil bei stabiler Auslastung und klarer Kapazitätsplanung. TCO-Vergleiche benötigen reale Nutzungsdaten und berücksichtigen Egress, Plattformdienste sowie Personalaufwand.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie beeinflusst FinOps meine Entscheidung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "FinOps als Code (Budgets, Limits, Policies in CI/CD) verhindert Kostenentgleisungen und beschleunigt Entscheidungen, weil Kosten eine Design-Dimension werden.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Hybrid nur eine Übergangslösung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nicht zwingend. Für sensible Daten, Latenzanforderungen oder schrittweise Modernisierung ist Hybrid ein dauerhaft tragfähiges Zielbild – sofern Governance und Automatisierung stimmen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielt die aktuelle Bedrohungslage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Die ENISA-Analysen zeigen eine anhaltend hohe Bedrohungslage. Resilienzmaßnahmen wie Immutable Backups und regelmäßige Wiederherstellungsübungen sind Pflicht – unabhängig vom Betriebsmodell.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gibt es eine allgemein „richtige“ Lösung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. „Richtig“ ist die Lösung, die Workloads, Risiken und Ziele bestmöglich abbildet – gemessen an Kosten, Compliance, Performance und Exit-Fähigkeit.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Zusammenfassung */}
      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Welche Lösung ist die richtige?</strong> Die Antwort ist workload-spezifisch:
          Cloud, On-Prem und Hybrid sind Werkzeuge in deinem Architektur-Baukasten. Nutze die
          Checkliste, ermittle TCO mit echten Nutzungsdaten und verankere FinOps &amp; Security
          by-design – dann triffst du eine belastbare Entscheidung und behältst die Kosten im Griff.
        </p>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Unsicher, welche Architektur zu deinen Workloads passt?
          </h2>
          <p className="text-zinc-700 mb-4">
            Hol dir ein 30-Minuten-Sparring: Wir mappen deine Top-3-Workloads auf Cloud, On-Prem
            oder Hybrid – inkl. grober TCO-Skizze &amp; Exit-Plan.
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

            {/* Button öffnet das Pop-up via :target */}
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
        <div
          id="cta-pop"
          className="fixed inset-0 z-50 hidden items-center justify-center p-4 target:flex"
        >
          {/* Klick auf Overlay schließt wieder */}
          <a href="#" className="absolute inset-0 bg-black/50" aria-label="Overlay schließen" />

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
            <a className={`hover:underline ${accent}`} href="/blog/finops-einführen">
              FinOps einführen: Budgets &amp; Policies als Code
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/dsgvo-cloud-datenstandort">
              DSGVO in der Cloud: Datenstandort, TOMs &amp; Audit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/hybrid-cloud-architektur">
              Hybrid-Cloud-Architektur: Netzwerkpfade &amp; Orchestrierung
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/exit-strategie-egress">
              Exit-Strategie &amp; Egress-Kosten: So bleibst du beweglich
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
                  "Cloud Computing",
                  "Bereitstellung von IT-Ressourcen (Compute, Storage, Dienste) als Service über das Netz – elastisch, self-service, nutzungsbasiert.",
                ],
                [
                  "On-Premises",
                  "Betrieb von IT-Systemen im eigenen Rechenzentrum mit voller Kontrolle – inklusive Verantwortung für Betrieb und Sicherheit.",
                ],
                [
                  "Hybrid Cloud",
                  "Kombination aus On-Prem/Private-Cloud und Public-Cloud mit orchestrierter Workload-Verteilung.",
                ],
                ["CapEx", "Investitionskosten (z. B. Hardware, Aufbau)."],
                ["OpEx", "Laufende Betriebskosten (z. B. Nutzung, Lizenzen, Energie)."],
                [
                  "FinOps",
                  "Praxis, Cloud-Kosten durch Transparenz, Verantwortlichkeit und Automatisierung (Policies as Code) zu steuern.",
                ],
                [
                  "Vendor Lock-in",
                  "Erschwerte Wechselbarkeit durch proprietäre Dienste, Datenformate oder hohe Egress-Gebühren.",
                ],
                [
                  "Egress-Kosten",
                  "Gebühren für ausgehenden Datenverkehr aus der Cloud – wichtig für TCO und Exit-Pläne.",
                ],
              ].map((row) => (
                <tr className="border-t border-zinc-200" key={row[0]}>
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
            src={author.image}
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a
              href="https://www.linkedin.com/in/lennart-schroeder"
              className={`text-sm hover:underline ${accent}`}
            >
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Dr. Jana Keller</strong> – Principal Architect &amp; CISO-Advisor.{" "}
            <a
              href="https://www.linkedin.com/in/jana-keller"
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
            NIST Special Publication 800-145 –{" "}
            <a
              href="https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              The NIST Definition of Cloud Computing
            </a>{" "}
            (abgerufen am 20.08.2025). :contentReference[oaicite:18]{index=18}
          </li>
          <li>
            CIO Dive (nach Gartner) –{" "}
            <a
              href="https://www.ciodive.com/news/cloud-spend-growth-forecast-2025-gartner/733401/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              Global cloud spend to surpass $700B in 2025
            </a>{" "}
            (19.11.2024). :contentReference[oaicite:19]{index=19}
          </li>
          <li>
            ENISA –{" "}
            <a
              href="https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              Threat Landscape 2024
            </a>{" "}
            (19.09.2024). :contentReference[oaicite:20]{index=20}
          </li>
          <li>
            McKinsey –{" "}
            <a
              href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/everything-is-better-as-code-using-finops-to-manage-cloud-costs"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              Everything is better as code: Using FinOps to manage cloud costs
            </a>{" "}
            (03.02.2025). :contentReference[oaicite:21]{index=21}
          </li>
          <li>
            AWS –{" "}
            <a
              href="https://docs.aws.amazon.com/pdfs/pricing-calculator/latest/userguide/aws-pc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              Pricing Calculator – User Guide
            </a>{" "}
            (aktuelle Doku). :contentReference[oaicite:22]{index=22}
          </li>
          <li>
            TechRadar Pro –{" "}
            <a
              href="https://www.techradar.com/pro/when-cloud-growth-outpaces-control-waste-follows"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              When cloud growth outpaces control, waste follows
            </a>{" "}
            (2025). :contentReference[oaicite:23]{index=23}
          </li>
        </ul>
      </section>

      {/* Structured Data (Article + Company) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "de",
            image: hero,
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            author: { "@type": "Person", name: author.name },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Beispiel GmbH",
            url: "https://www.beispiel.de",
            sameAs: [
              "https://www.linkedin.com/company/beispiel-gmbh",
              "https://twitter.com/beispiel",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 1",
              addressLocality: "Berlin",
              postalCode: "10115",
              addressCountry: "DE",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: "+49-30-000000",
                email: "sales@beispiel.de",
                areaServed: "DE",
                availableLanguage: ["de", "en"],
              },
            ],
          }),
        }}
      />

      {/* Footer-Hinweis zu Bildquellen (Unsplash Lizenz) */}
      <footer className="mt-10 text-xs text-zinc-500">
        Bildquellen: Unsplash (Lizenz). Beispielbilder für Hero &amp; Inline-Grafik ausgewählt.
      </footer>
    </article>
  );
}
