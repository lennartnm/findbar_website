// src/app/blog/cloud-vs-on-premise/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart H.",
  role: "Cloud & Digital Strategy",
  image: "/author-lennart.webp",
};

const publisher = {
  name: "Findbar",
  url: "https://www.findbar.de",
  logo: "https://www.findbar.de/logo.png",
};

export const metadata: Metadata = {
  title:
    "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im Direktvergleich",
  description:
    "Cloud vs. On-Premise: Was passt zu deinem Unternehmen? Vergleich von Kosten, Sicherheit, Flexibilität – inkl. Praxisbeispiele, Checkliste & Entscheidungsmatrix.",
  alternates: {
    canonical: "https://www.findbar.de/blog/cloud-vs-on-premise",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title:
      "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im Direktvergleich",
    description:
      "Triff eine fundierte Entscheidung: objektiver Vergleich mit Praxisbeispielen, Checkliste & Entscheidungsmatrix.",
    url: "https://www.findbar.de/blog/cloud-vs-on-premise",
    siteName: "Findbar",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 600,
        alt: "Moderne Serverracks als Symbol für Cloud und On-Premise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im Direktvergleich",
    description:
      "Vergleich für Entscheider:innen – inkl. Praxisbeispiele, Checkliste & Entscheidungsmatrix.",
    images: [
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function Page() {
  return (
    <article className="prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        // Structured data for the article
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im Direktvergleich",
            description:
              "Ein praxisnaher Vergleich, der dir hilft, zwischen Cloud und On-Premise zu entscheiden – inklusive Beispiele, Checkliste und Entscheidungsmatrix.",
            inLanguage: "de-DE",
            image:
              "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: publisher.name,
              url: publisher.url,
              logo: { "@type": "ImageObject", url: publisher.logo },
            },
            mainEntityOfPage:
              "https://www.findbar.de/blog/cloud-vs-on-premise",
          }),
        }}
      />

      {/* JSON-LD: Organization (Company) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: publisher.name,
            url: publisher.url,
            logo: publisher.logo,
            sameAs: ["https://www.linkedin.com/company/findbar/"],
          }),
        }}
      />

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Cloud vs. On-Premise – Welche Lösung ist die richtige für dein
          Unternehmen?
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir,
          fundiert zu entscheiden – inklusive Praxisbeispiele und Checkliste.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-20">20.08.2025</time>
          {" · "}Lesedauer:{" "}
          <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 (LCP-Bild) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80"
              />
              <img
                loading="eager"
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80"
                alt="Serverhalle: Sinnbild für Cloud- und On-Premise-Infrastrukturen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Moderne Server-Infrastruktur in einer Datenhalle.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src={author.image}
            alt="Autor:in"
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
            <strong>Entscheidungsmatrix:</strong> Richte deine Wahl an
            Workload, Compliance-Anforderungen und Team-Know-how aus – nicht an
            Glaubensfragen.
          </li>
          <li>
            <strong>Kosten:</strong> Cloud wandelt CapEx in OpEx und skaliert
            feingranular; On-Premise lohnt bei konstanter, gut auslastbarer
            Last. Wir zeigen, wie du TCO realistisch kalkulierst.
          </li>
          <li>
            <strong>Sicherheit:</strong> In der Cloud gilt das{" "}
            <em>Shared-Responsibility-Model</em>; Standards wie BSI C5 helfen,
            Anbieter zu bewerten. :contentReference[oaicite:0]{index=0}
          </li>
          <li>
            <strong>Flexibilität:</strong> Cloud punktet mit schneller
            Bereitstellung und globaler Skalierung; On-Premise mit maximaler
            Kontrolle und niedriger Latenz am Standort.
          </li>
          <li>
            <strong>Praxisbeispiele & Checkliste:</strong> Drei typische
            Szenarien plus eine kompakte Checkliste führen dich zur passenden
            Architektur – Cloud, On-Prem oder Hybrid.
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
              href="#definitionen"
            >
              Was bedeutet Cloud vs. On-Premise?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#kosten"
            >
              Kostenvergleich: CapEx vs. OpEx & TCO-Rechnung
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#sicherheit"
            >
              Sicherheit & Compliance: Verantwortlichkeiten verstehen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#flexibilitaet"
            >
              Flexibilität & Performance im Alltag
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#praxisbeispiele"
            >
              Praxisbeispiele: Drei typische Szenarien
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#checkliste"
            >
              Checkliste & Entscheidungsmatrix
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#migration"
            >
              Migration & Hybrid: Schritt für Schritt starten
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fehler"
            >
              Häufige Fehler vermeiden
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
      <section id="definitionen">
        <h2>Was bedeutet „Cloud“ vs. „On-Premise“ – worin liegt der Kern?</h2>
        <p>
          „Cloud“ beschreibt laut NIST ein Modell, das über das Netzwerk
          bequemen, bedarfsgerechten Zugriff auf einen gemeinsamen Pool
          konfigurierbarer Ressourcen (z. B. Server, Speicher, Anwendungen)
          ermöglicht, die sich mit minimalem Managementaufwand schnell
          bereitstellen und wieder freigeben lassen. Dieses Modell ruht auf fünf
          wesentlichen Merkmalen, drei Servicemodellen (IaaS, PaaS, SaaS) und
          vier Bereitstellungsmodellen (Public, Private, Hybrid, Community).
          :contentReference[oaicite:1]{index=1}
        </p>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="m-0 text-base font-semibold">Cloud (Public)</h3>
              <p className="mt-2">
                IT-Ressourcen beim Provider, Abrechnung nutzungsbasiert,
                Bereitstellung per Self-Service, globale Skalierung.
              </p>
            </div>
            <div>
              <h3 className="m-0 text-base font-semibold">On-Premise</h3>
              <p className="mt-2">
                Eigene Server im Rechenzentrum (oder Colocation), Investitionen
                vorab, volle physische Kontrolle – dafür weniger Elastizität.
              </p>
            </div>
          </div>
        </div>

        {/* Bild 1 – volle Breite, 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://source.unsplash.com/1200x450/?data-center,server"
              />
              <img
                loading="lazy"
                src="https://source.unsplash.com/1600x600/?data-center,server"
                alt="Blick in einen Servergang – Symbol für On-Premise-Infrastruktur"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            On-Premise bedeutet maximale Kontrolle über Hardware – dafür weniger
            Elastizität.
          </figcaption>
        </figure>
      </section>

      <section id="kosten">
        <h2>Kostenvergleich: Wie rechnet man Cloud vs. On-Premise fair?</h2>
        <p>
          Kostenwahrheit entsteht erst mit einer vollständigen
          <strong> TCO</strong>-Betrachtung (Total Cost of Ownership). Cloud
          verlagert typischerweise <strong>CapEx</strong> (Anschaffung) in{" "}
          <strong>OpEx</strong> (Betrieb). On-Premise rechnet sich besonders,
          wenn Workloads konstant sind und du hohe Auslastung erzielen kannst.
          In dynamischen, wachstumsstarken Umgebungen ist die Cloud oft
          wirtschaftlicher, weil du nicht überprovisionieren musst.
        </p>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Kostenblock
                </th>
                <th className="text-left font-semibold p-3">Cloud</th>
                <th className="text-left font-semibold p-3">On-Premise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Hardware</td>
                <td className="p-3">Keine Anschaffung, pay-as-you-go</td>
                <td className="p-3">Server, Storage, Netzwerk (CapEx)</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Betrieb</td>
                <td className="p-3">
                  Strom/Kühlung inkludiert; Admin-Aufwand sinkt je nach Service
                  (IaaS vs. PaaS/SaaS)
                </td>
                <td className="p-3">
                  Strom, Kühlung, Fläche, Wartung, Ersatzteile, Admin-Teams
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Skalierung</td>
                <td className="p-3">Sekunden-/Minutentakt, elastisch</td>
                <td className="p-3">
                  Wochen/Monate (Beschaffung, Einbau), Überprovisionierung
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Abschreibung</td>
                <td className="p-3">Nicht erforderlich</td>
                <td className="p-3">3–5 Jahre (Bilanzwirksamkeit)</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Kostenkontrolle</td>
                <td className="p-3">
                  Hohe Transparenz, aber FinOps nötig (Budget, Reservierungen,
                  Rightsizing)
                </td>
                <td className="p-3">
                  Planbar, aber geringe Elastizität und Auslastungsrisiko
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="m-0 text-base font-semibold">Mini-TCO-Beispiel</h3>
          <p className="mt-2 text-zinc-800">
            Webapp mit 2 vCPUs, 8 GB RAM, 200 GB Storage, 2 TB/Monat Traffic:
            In der Cloud variieren die Kosten je nach Region/Provider und
            Reservierungsgrad; On-Premise entstehen Fixkosten (Server, USV,
            Switches, RZ-Fläche) plus Betrieb. Die Entscheidung kippt oft, wenn
            du Lastspitzen hast oder schnelles Wachstum planst. Laut der{" "}
            <em>Flexera State of the Cloud 2024</em> ist{" "}
            <strong>„Cost Management“</strong> bereits zum zweiten Mal in Folge
            die Top-Herausforderung – FinOps ist Pflicht. :contentReference[oaicite:2]{index=2}
          </p>
        </div>
      </section>

      <section id="sicherheit">
        <h2>Sicherheit & Compliance: Wer ist wofür verantwortlich?</h2>
        <p>
          In der Cloud gilt das <strong>Shared-Responsibility-Model</strong>:
          Der Provider schützt die Infrastruktur (Gebäude, Hardware,
          Virtualisierung), du verantwortest je nach Servicemodell Betriebssystem,
          Anwendungen, Daten, Identitäten und Konfigurationen. Das reduziert
          deinen physischen Aufwand, verlagert aber Sicherheitskompetenz in die
          Konfiguration (z. B. IAM, Netzwerksegmente, Logging). :contentReference[oaicite:3]{index=3}
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Sicherheit in der Cloud ist eine
            <em> gemeinsame Verantwortung</em>: Der Provider schützt die Cloud,
            Kunden schützen, was <em>in</em> der Cloud läuft – Identitäten,
            Daten, Workloads.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Zusammenfassung des AWS Shared-Responsibility-Modells (indirektes
            Zitat). :contentReference[oaicite:4]{index=4}
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2 mt-6">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="m-0 text-base font-semibold">
              Standards & Nachweise, auf die du achten solltest
            </h3>
            <ul className="mt-2 list-disc ml-5 space-y-1">
              <li>ISO/IEC 27001/27017/27018 (ISMS & Cloud)</li>
              <li>BSI C5:2020 (deutscher Mindeststandard für Cloud)</li>
              <li>SOC 1/2/3, PCI DSS, HIPAA (branchenspezifisch)</li>
            </ul>
            <p className="mt-2 text-sm text-zinc-700">
              Der BSI-C5-Katalog definiert Mindestanforderungen und erleichtert
              die Auswahl & Prüfung von Cloud-Anbietern. :contentReference[oaicite:5]{index=5}
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="m-0 text-base font-semibold">
              Praktisch: Security-Fragen für KMU
            </h3>
            <p className="mt-2">
              ENISA empfiehlt, Cloud-Risiken strukturiert zu bewerten
              (Rechte/Rollen, Verschlüsselung, Backup/DR, Support-SLAs) – mit
              klaren Fragen an den Provider. :contentReference[oaicite:6]{index=6}
            </p>
            <ul className="mt-2 list-disc ml-5 space-y-1">
              <li>Wer übernimmt Patching und Key-Management?</li>
              <li>Welche Logs stehen bereit? Wie lange?</li>
              <li>Wo werden Daten gespeichert (Region/Residency)?</li>
              <li>Wie sieht das Notfall- und Wiederanlaufkonzept aus?</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="flexibilitaet">
        <h2>Flexibilität & Performance: Welche Architektur passt zu deinem Use Case?</h2>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <h3 className="m-0 text-base font-semibold">Cloud</h3>
              <p className="mt-2">
                + Schnelle Bereitstellung, Auto-Scaling, Managed Services,{" "}
                globale Reichweite. − Abhängigkeit vom Provider (Lock-in),
                Netzwerklatenz zur Region.
              </p>
            </div>
            <div>
              <h3 className="m-0 text-base font-semibold">On-Premise</h3>
              <p className="mt-2">
                + Maximale Kontrolle, geringe Latenz am Standort, individuelle
                Hardware. − Langsame Skalierung, Vorhaltekapazitäten, CapEx.
              </p>
            </div>
            <div>
              <h3 className="m-0 text-base font-semibold">Hybrid/Edge</h3>
              <p className="mt-2">
                Kombination der Stärken: sensible Daten On-Prem, skalierende
                Teile in der Cloud; Edge reduziert Latenz nahe am Nutzer.
              </p>
            </div>
          </div>
        </div>

        {/* Bild 2 – volle Breite, 16:6 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://source.unsplash.com/1200x450/?cloud,devops"
              />
              <img
                loading="lazy"
                src="https://source.unsplash.com/1600x600/?cloud,devops"
                alt="Team arbeitet an Cloud-Architektur – Whiteboard und Laptops"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Cloud entfaltet ihren Vorteil bei Tempo & Elastizität – On-Premise
            bei Kontrolle & Latenz.
          </figcaption>
        </figure>
      </section>

      <section id="praxisbeispiele">
        <h2>Praxisbeispiele: Wie entscheiden andere Unternehmen?</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="m-0 text-base font-semibold">
              KMU mit saisonalen Peaks (E-Commerce)
            </h3>
            <p className="mt-2">
              Traffic schwankt stark (Sales, Black Friday). Cloud mit
              Autoscaling senkt Overprovisioning. Logs/Monitoring als
              Managed-Services, klare Budgets via Budgets/Alerts – FinOps
              verpflichtend (Reservierungen, Rechtegrößen).
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="m-0 text-base font-semibold">
              Industrie/OT mit Werksnähe
            </h3>
            <p className="mt-2">
              Produktionsnahe Systeme benötigen sehr geringe Latenz und
              deterministische Performance. On-Premise/Edge im Werk, zentrale
              Analytics in der Cloud – verbunden über gesicherte Leitungen.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white sm:col-span-2">
            <h3 className="m-0 text-base font-semibold">Healthcare/Legal</h3>
            <p className="mt-2">
              Strenge Compliance, Aufbewahrung, Auditierbarkeit. Private Cloud
              oder On-Premise für Primärdaten; Public-Cloud für Test/Dev,
              Anonymisierung und skalierende Analyse. Nachweise: ISO, SOC, BSI
              C5 vom Provider einfordern. :contentReference[oaicite:7]{index=7}
            </p>
          </div>
        </div>
      </section>

      <section id="checkliste">
        <h2>Checkliste & Entscheidungsmatrix</h2>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="m-0 text-base font-semibold">Checkliste</h3>
          <ul className="mt-2 list-disc ml-5 space-y-2">
            <li>
              <strong>Workload-Profil:</strong> konstant, volatil oder
              wachsend?
            </li>
            <li>
              <strong>Compliance:</strong> Branchenregulatorik, Datenresidenz,
              Audit-Anforderungen (C5/ISO/SOC)?
            </li>
            <li>
              <strong>Team-Fähigkeiten:</strong> Betrieb/Automatisierung,
              Sicherheit, FinOps vorhanden?
            </li>
            <li>
              <strong>Abhängigkeiten:</strong> Latenzanforderungen, Legacy,
              Spezialhardware?
            </li>
            <li>
              <strong>Kostenhebel:</strong> Reservierungen/Savings-Plans,
              Rightsizing, Architekturoptimierung?
            </li>
          </ul>

          <div className="mt-5 rounded-xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-56">
                    Kriterium
                  </th>
                  <th className="text-left font-semibold p-3">Cloud</th>
                  <th className="text-left font-semibold p-3">On-Premise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kosten bei Volatilität", "⭐⭐⭐⭐", "⭐⭐"],
                  ["Investitionsbedarf", "⭐⭐⭐⭐⭐ (OpEx)", "⭐ (CapEx)"],
                  ["Skalierungstempo", "⭐⭐⭐⭐⭐", "⭐"],
                  ["Kontrolle/Customization", "⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Latenz vor Ort", "⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Compliance-Transparenz", "⭐⭐⭐⭐ (Nachweise)", "⭐⭐⭐"],
                ].map(([k, c, o]) => (
                  <tr key={k} className="border-t border-zinc-200">
                    <td className="p-3 font-medium">{k}</td>
                    <td className="p-3">{c}</td>
                    <td className="p-3">{o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-zinc-600">
            Hinweis: Sterne sind eine vereinfachte, generische Einordnung.
            Bewerte deine konkreten Anforderungen in einem Proof-of-Concept.
          </p>
        </div>
      </section>

      <section id="migration">
        <h2>Migration & Hybrid: Wie startest du ohne Risiko?</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <strong>Assessment:</strong> Inventar, Abhängigkeiten, SLAs,
            Lizenzen, Datenflüsse.
          </li>
          <li>
            <strong>Priorisierung:</strong> Mit „low risk, high value“-Workloads
            beginnen (z. B. CI/CD, Analytics, Test/Dev).
          </li>
          <li>
            <strong>Landing Zone & Sicherheit:</strong> Identitäten,
            Netzwerke, Accounts, Guardrails nach Shared-Responsibility. :contentReference[oaicite:8]{index=8}
          </li>
          <li>
            <strong>FinOps etablieren:</strong> Budgets, Tagging,
            Reserved/Committed Use, Dashboards. :contentReference[oaicite:9]{index=9}
          </li>
          <li>
            <strong>Automatisieren & Observability:</strong> IaC, Backups,
            Monitoring/Logging, Incident-Playbooks.
          </li>
        </ol>
      </section>

      <section id="fehler">
        <h2>Häufige Fehler & Anti-Pattern</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Lift-and-Shift ohne Optimierung:</strong> führt in der
            Cloud zu hohen Kosten (fehlendes Rightsizing).
          </li>
          <li>
            <strong>Kein klares Sicherheitsmodell:</strong> Rollen & Rechte
            unklar, fehlende Logs/Backups – trotz Cloud-Nachweisen. :contentReference[oaicite:10]{index=10}
          </li>
          <li>
            <strong>Regulatorik spät geprüft:</strong> C5/ISO/SOC-Anforderungen
            erst kurz vor Go-Live bedacht. :contentReference[oaicite:11]{index=11}
          </li>
          <li>
            <strong>Vendor-Lock-in unterschätzt:</strong> Fehlende
            Portabilitätsstrategie (Standards, Container, Datenformate).
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Ist Cloud grundsätzlich günstiger als On-Premise?
            </h3>
            <p>
              Nicht pauschal. Bei volatilen Workloads oder schnellem Wachstum
              punktet die Cloud durch Elastizität und nutzungsbasierte Abrechnung.
              Bei gleichmäßiger Last und hoher Auslastung kann On-Premise
              wirtschaftlicher sein – die TCO-Rechnung entscheidet. Studien
              zeigen: Kostenmanagement ist in der Cloud ein Top-Thema. :contentReference[oaicite:12]{index=12}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie sicher ist die Cloud im Vergleich zu On-Premise?
            </h3>
            <p>
              Cloud-Anbieter investieren massiv in physische Sicherheit und
              Basiskontrollen. Deine Sicherheit hängt maßgeblich von
              Konfiguration, Zugriffen und Datenprozessen ab –{" "}
              <em>shared responsibility</em>. Prüfe Nachweise wie BSI C5, ISO,
              SOC. :contentReference[oaicite:13]{index=13}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wann ist eine Hybrid- oder Multi-Cloud sinnvoll?
            </h3>
            <p>
              Wenn du sensible Daten lokal halten, aber Elastizität aus der
              Cloud nutzen willst, oder wenn Latenz/Standortanforderungen eine
              Rolle spielen. Multi-Cloud wird häufig für Resilienz oder
              Best-of-Breed verwendet – ist aber komplex im Betrieb. :contentReference[oaicite:14]{index=14}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Zertifizierungen sollte ich vom Provider verlangen?
            </h3>
            <p>
              Mindestens ISO/IEC 27001, zusätzlich cloud-spezifische Standards
              wie ISO/IEC 27017/27018 und in Deutschland BSI C5. Branchenspezifisch
              ggf. SOC/PCI/HIPAA. :contentReference[oaicite:15]{index=15}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was ist der erste Schritt für eine fundierte Entscheidung?
            </h3>
            <p>
              Erfasse Workloads & Anforderungen (Leistung, Compliance, Latenz),
              erstelle eine TCO-Vergleichsrechnung und führe einen
              Proof-of-Concept mit 1–2 priorisierten Use Cases durch.
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
                  name: "Ist Cloud grundsätzlich günstiger als On-Premise?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kommt auf das Workload-Profil an: Elastizität vs. Auslastung. Eine TCO-Rechnung und FinOps-Disziplin sind entscheidend.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie sicher ist die Cloud im Vergleich zu On-Premise?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Sicherheit ist geteilt (Shared Responsibility). Prüfe Zertifizierungen wie ISO/IEC 27001/27017/27018, SOC und BSI C5.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wann ist eine Hybrid- oder Multi-Cloud sinnvoll?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Wenn du lokale Anforderungen (Latenz, Datenresidenz) mit Cloud-Elastizität kombinieren willst oder Resilienz zwischen Anbietern brauchst.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Zertifizierungen sollte ich vom Provider verlangen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "ISO/IEC 27001, ISO/IEC 27017/27018, BSI C5 und je nach Branche SOC, PCI DSS oder HIPAA.",
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
            Cloud oder On-Premise – was passt zu deinem Unternehmen?
          </strong>{" "}
          Entscheidend sind Workload-Profil, Compliance-Anforderungen und
          Team-Fähigkeiten. Plane mit TCO-Sicht, prüfe Sicherheitsnachweise und
          starte mit einem fokussierten Pilot – die passende Lösung kann Cloud,
          On-Prem oder Hybrid sein.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Welche Architektur bringt dich schneller ans Ziel – Cloud,
            On-Premise oder Hybrid?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir analysieren deine Workloads, rechnen die TCO und bauen dir in 10
            Tagen einen getesteten Pilot.
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
          />

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
            <Link className={`hover:underline ${accent}`} href="#">
              FinOps: 12 Hebel für niedrigere Cloudkosten
            </Link>
          </li>
          <li>
            <Link className={`hover:underline ${accent}`} href="#">
              Cloud Security Best Practices für KMU
            </Link>
          </li>
          <li>
            <Link className={`hover:underline ${accent}`} href="#">
              Hybrid-Cloud-Architekturen: Blueprint & Guardrails
            </Link>
          </li>
          <li>
            <Link className={`hover:underline ${accent}`} href="#">
              Datenresidenz & DSGVO in Public-Cloud-Umgebungen
            </Link>
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
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">CapEx</td>
                <td className="p-3 text-zinc-700">
                  Investitionsausgaben (Anschaffungen), z. B. Server-Hardware
                  für ein eigenes Rechenzentrum.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">OpEx</td>
                <td className="p-3 text-zinc-700">
                  Laufende Betriebskosten, z. B. Cloud-Nutzung, Strom, Kühlung,
                  Personal.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">TCO</td>
                <td className="p-3 text-zinc-700">
                  Total Cost of Ownership – Gesamtkosten über den
                  Lebenszyklus, inklusive verdeckter Kosten wie Betrieb & Risiko.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Shared Responsibility
                </td>
                <td className="p-3 text-zinc-700">
                  Sicherheitsmodell in der Cloud: Provider sichert die
                  Infrastruktur, Kunden sichern Workloads, Konfigurationen &
                  Daten. :contentReference[oaicite:16]{index=16}
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">BSI C5</td>
                <td className="p-3 text-zinc-700">
                  Deutscher Mindeststandard für Cloud-Sicherheit, hilft bei der
                  Bewertung von Anbietern und Audits. :contentReference[oaicite:17]{index=17}
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
            src="/author-lennart.webp"
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a
              href="https://www.linkedin.com/in/lennart/"
              className={`text-sm hover:underline ${accent}`}
            >
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Tech Review Team</strong> – Cloud
            Architecture & Security.
            <a
              href="https://www.linkedin.com/company/findbar/"
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
            NIST SP 800-145 – The NIST Definition of Cloud Computing:{" "}
            <a
              href="https://csrc.nist.gov/pubs/sp/800/145/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://csrc.nist.gov/pubs/sp/800/145/final
            </a>{" "}
            :contentReference[oaicite:18]{index=18}
          </li>
          <li>
            AWS Shared Responsibility Model:{" "}
            <a
              href="https://aws.amazon.com/compliance/shared-responsibility-model/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aws.amazon.com/compliance/shared-responsibility-model/
            </a>{" "}
            :contentReference[oaicite:19]{index=19}
          </li>
          <li>
            BSI – Cloud Computing Compliance Criteria Catalogue (C5:2020):{" "}
            <a
              href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/ComplianceControlsCatalogue/2020/C5_2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.bsi.bund.de/.../C5_2020.pdf
            </a>{" "}
            :contentReference[oaicite:20]{index=20}
          </li>
          <li>
            ENISA – Cloud Security Guide for SMEs / Cybersecurity Guide for
            SMEs:{" "}
            <a
              href="https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes
            </a>{" "}
            &nbsp;|&nbsp;
            <a
              href="https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes
            </a>{" "}
            :contentReference[oaicite:21]{index=21}
          </li>
          <li>
            Flexera – State of the Cloud Report 2024 (Blog/Report):{" "}
            <a
              href="https://www.flexera.com/blog/finops/cloud-computing-trends-flexera-2024-state-of-the-cloud-report/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.flexera.com/blog/finops/cloud-computing-trends-flexera-2024-state-of-the-cloud-report/
            </a>{" "}
            &nbsp;|&nbsp;
            <a
              href="https://sc102-prod-cd.azurewebsites.net/-/media/files/noram/free/state-of-the-cloud-report-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>{" "}
            :contentReference[oaicite:22]{index=22}
          </li>
        </ul>
      </section>
    </article>
  );
}
