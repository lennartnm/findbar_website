import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Lennart Example",
  role: "Cloud- & Infrastrukturberater",
  image: "/autor-lennart.webp",
  linkedIn: "https://www.linkedin.com/in/your-profile",
};

export const metadata: Metadata = {
  title:
    "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich",
  description:
    "Cloud oder On-Premise? Vergleiche TCO, Sicherheit (BSI C5, ENISA), Flexibilität & Compliance – mit Checkliste, Beispielen und Entscheidungsmatrix.",
  alternates: {
    canonical: "https://www.deinunternehmen.de/blog/cloud-vs-on-premise",
  },
  openGraph: {
    title:
      "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?",
    description:
      "Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir, fundiert zu entscheiden.",
    url: "https://www.deinunternehmen.de/blog/cloud-vs-on-premise",
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 600,
        alt: "Cloud- und On-Premise-Infrastruktur im Vergleich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?",
    description:
      "Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir, fundiert zu entscheiden.",
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const updated = "2025-08-20";
  const updatedHuman = "20.08.2025";
  const readingMinutes = 16;

  // JSON-LD: Article + Organization
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich",
    description:
      "Cloud oder On-Premise? Vergleiche TCO, Sicherheit (BSI C5, ENISA), Flexibilität & Compliance – mit Checkliste, Beispielen und Entscheidungsmatrix.",
    inLanguage: "de",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
    datePublished: "2025-08-20",
    dateModified: updated,
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Dein Unternehmen GmbH",
      logo: {
        "@type": "ImageObject",
        url: "https://www.deinunternehmen.de/logo.png",
      },
    },
    mainEntityOfPage:
      "https://www.deinunternehmen.de/blog/cloud-vs-on-premise",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dein Unternehmen GmbH",
    url: "https://www.deinunternehmen.de",
    logo: "https://www.deinunternehmen.de/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/deinunternehmen/",
      "https://x.com/deinunternehmen",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49-30-1234567",
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["German"],
      },
    ],
  };

  return (
    <article className="prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Header (Starter Section Anfang) */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Cloud vs. On-Premise – Welche Lösung ist die richtige für dein
          Unternehmen?
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Kosten, Sicherheit, Flexibilität: Hier erhältst du einen klaren,
          datenbasierten Vergleich von Cloud, On-Premise und Hybrid-Ansätzen
          inkl. Checkliste. So triffst du eine fundierte Entscheidung – passend
          zu Größe, Regulierung und Zielen deines Unternehmens.
        </p>

        {/* Datum & Lesedauer */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime={updated}>{updatedHuman}</time>
          {" · "}Lesedauer:{" "}
          <span className="tabular-nums">{readingMinutes} Minuten</span>
        </div>

        {/* Hero 16:6 (LCP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="eager"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop"
                alt="Modernes Rechenzentrum und Cloud-UI als Symbol für Cloud vs. On-Premise"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Cloud- und On-Premise-Infrastruktur im Vergleich.
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
            <strong>Kernfrage:</strong> Cloud bietet Tempo und Elastizität,
            On-Premise volle Hoheit und Vorhersehbarkeit. Hybrid vereint beides
            – sinnvoll, wenn du klare Workload-Kriterien definierst.
          </li>
          <li>
            <strong>Kosten (TCO):</strong> Cloud senkt CapEx und skaliert nach Bedarf, erfordert aber <em>FinOps</em> für Kostenkontrolle. Organisationen mit reifem FinOps erzielen bessere Transparenz und Governance.
          </li>
          <li>
            <strong>Sicherheit &amp; Compliance:</strong> Für Cloud-Dienste
            existieren etablierte Standards wie NIST SP 800-145 (Definition),
            BSI C5 (deutscher Mindeststandard) und die in der EU diskutierte
            EUCS-Zertifizierung.
          </li>
          <li>
            <strong>Risikolage:</strong> Ransomware und Verfügbarkeitsangriffe
            bleiben Top-Bedrohungen. Resilienz- und Backup-Strategien sind
            Pflicht – unabhängig vom Betriebsmodell.
          </li>
          <li>
            <strong>Entscheidung:</strong> Richte dich nach
            Datenklassifikation, Latenz, Integrationen, Regulierung (z. B.
            DSGVO/NIS2) und Team-Fähigkeiten. Nutze die Checkliste und Tabelle
            unten.
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
              href="#unterschied"
            >
              Was ist der Unterschied? (Definitionen &amp; Modelle)
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#kosten"
            >
              Kosten &amp; TCO: CapEx vs. OpEx, FinOps &amp; Planung
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#sicherheit"
            >
              Sicherheit &amp; Compliance: BSI C5, ENISA, EUCS, DSGVO
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#flexibilitaet"
            >
              Flexibilität, Skalierung, Leistung &amp; Latenz
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#lockin"
            >
              Vendor Lock-in, Portabilität &amp; Reversibilität
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#hybrid"
            >
              Hybrid- &amp; Multi-Cloud richtig nutzen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#matrix"
            >
              Entscheidungsmatrix &amp; Vergleichstabelle
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#umsetzung"
            >
              Umsetzung in 10 Schritten – Praxisleitfaden
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#faq"
            >
              FAQ: Häufige Einwände &amp; Antworten
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="unterschied">
        <h2>Was ist der Unterschied zwischen Cloud und On-Premise?</h2>
        <p>
          <strong>Cloud</strong> bedeutet: IT-Ressourcen wie Rechenleistung,
          Speicher und Plattformen werden über das Netz bezogen, skalieren
          elastisch und werden vom Anbieter betrieben. Die anerkannte
          Referenzdefinition liefert NIST SP 800-145 (u. a. On-Demand
          Self-Service, breite Netzzugänglichkeit, Ressourcen-Pooling,
          Elastizität und gemessener Service).
        </p>
        <p>
          <strong>On-Premise</strong> heißt: Du betreibst Hardware und Software
          in deiner eigenen Umgebung (z. B. Rechenzentrum oder Serverraum) und
          trägst Verantwortung für Beschaffung, Betrieb, Patching,
          Kapazitätsplanung und Sicherheit.
        </p>

        {/* 2-zu-1 Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold">Typische Stärken Cloud</h3>
            <ul className="mt-2 list-disc ml-5">
              <li>Schnelle Bereitstellung &amp; Pay-as-you-go</li>
              <li>Globale Skalierung &amp; Managed Services</li>
              <li>OpEx statt hoher CapEx</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold">Typische Stärken On-Premise</h3>
            <ul className="mt-2 list-disc ml-5">
              <li>Volle physische Kontrolle &amp; Datenhoheit</li>
              <li>Vorhersehbare Auslastung, feste Budgets</li>
              <li>Sehr niedrige Latenzen, Edge-Nähe</li>
            </ul>
          </div>
        </div>

    {/* Bild 1 – Vorlage */}
<figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
  <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
      />
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
        alt="Serverracks On-Premise – Symbol für eigene Infrastruktur"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  </div>

  {/* Beschriftung direkt unter dem Bild */}
  <figcaption className="px-4 py-2 text-sm text-zinc-600">
    On-Premise bietet maximale Kontrolle – aber auch volle Betriebspflicht.
  </figcaption>
</figure>



      <section id="kosten" className="mt-14">
        <h2>Kosten &amp; TCO: CapEx vs. OpEx, FinOps &amp; Planung</h2>
        <p>
          Der <strong>Gesamtaufwand (TCO)</strong> umfasst nicht nur Hardware,
          sondern auch Lizenzen, Energie, Kühlung, Fläche, Personal,
          Ausfallsicherheit und Opportunitätskosten.
          <br />
          In der Cloud verlagert sich ein großer Teil in <em>OpEx</em> mit
          feingranularer Abrechnung, was Agilität erhöht. Ohne Governance drohen
          jedoch Kostenüberraschungen – daher ist <em>FinOps</em> zentral:
          Cloud-Kosten müssen messbar, zuordenbar und steuerbar werden
          (Chargeback/Showback, Budgets, Commitments). Aktuelle FinOps-Daten
          zeigen: Organisationen legen 2024/25 einen klaren Fokus auf das
          Reduzieren von Verschwendung und das Managen von Commitments.
        </p>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <strong>Praxis-Tipp:</strong> Kalkuliere Cloud-Workloads mit
          <span className="whitespace-nowrap"> Reserved/Committed</span>-
          Modellen und Rightsizing, plane On-Premise mit realistischen
          Auslastungsfaktoren (nicht Peak), und vergleiche Szenarien
          <em>über 3–5 Jahre</em> inkl. Personal &amp; Risikoaufschlag.
        </div>

        {/* Vergleichstabelle */}
        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Kriterium</th>
                <th className="text-left font-semibold p-3">Cloud</th>
                <th className="text-left font-semibold p-3">On-Premise</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  k: "Investitionsprofil",
                  c: "Geringe CapEx, variable OpEx",
                  o: "Hohe CapEx, niedrigere laufende OpEx",
                },
                {
                  k: "Skalierung",
                  c: "Elastisch, nahezu sofort",
                  o: "Langsam, Beschaffung/Install nötig",
                },
                {
                  k: "Kostenkontrolle",
                  c: "Sehr granular, FinOps erforderlich",
                  o: "Planbar, aber weniger flexibel",
                },
                {
                  k: "Vertragsbindung",
                  c: "Provider- & Servicebindung (Egress/Features)",
                  o: "Vendorbindung auf Hardware/Hypervisor",
                },
                {
                  k: "Abschreibung",
                  c: "Keine, laufender Aufwand",
                  o: "Abschreibung über Nutzungsdauer",
                },
              ].map((r) => (
                <tr key={r.k} className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">{r.k}</td>
                  <td className="p-3 text-zinc-700">{r.c}</td>
                  <td className="p-3 text-zinc-700">{r.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Cloud ist kein Selbstzweck – wer Kosten kontrollieren will, macht
            sie von Anfang an zum Design-Kriterium und etabliert klare
            Verantwortlichkeiten.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Indirektes Zitat in Anlehnung an aktuelle Empfehlungen zur
            Cloud-Governance &amp; Kostenkontrolle (FinOps/Governance-Trends).
          </figcaption>
        </figure>
      </section>

      <section id="sicherheit" className="mt-14">
        <h2>Sicherheit &amp; Compliance: BSI C5, ENISA, EUCS, DSGVO</h2>
        <p>
          Sicherheit ist <em>kein</em> Cloud- oder On-Premise-Alleinstellungsmerkmal,
          sondern Ergebnis guter Prozesse und Standards. Orientierung geben:
          <strong> NIST SP 800-145</strong> (Grundprinzipien der Cloud),
          <strong> BSI C5</strong> als Mindeststandard für Cloud-Anbieter in
          Deutschland sowie die geplante <strong>EUCS</strong>-Zertifizierung
          auf EU-Ebene.
        </p>
        <p>
          Zur Bedrohungslage: Die ENISA „Threat Landscape 2024“ nennt
          Verfügbarkeitsangriffe und Ransomware als Top-Risiken – deshalb sind
          Härtung, Patch-Management, Netzwerksegmentierung und getestete
          Wiederanlaufpläne Pflicht, egal ob Cloud oder On-Premise.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold">Cloud – darauf achten</h3>
            <ul className="mt-2 list-disc ml-5">
              <li>Nachweis (Attest) gemäß BSI C5:2020</li>
              <li>Shared-Responsibility klären (z. B. Patching)</li>
              <li>Backup, KMS, Schlüssel-Hoheit &amp; HSM-Optionen</li>
              <li>Netzwerk-Isolation (Private Links, Zero Trust)</li>
              <li>Datenlokation &amp; EUCS-Level (sobald verfügbar)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold">On-Premise – darauf achten</h3>
            <ul className="mt-2 list-disc ml-5">
              <li>Physische Sicherheit &amp; Zutrittskontrolle</li>
              <li>Monitoring, Logging, SIEM/SOAR-Integration</li>
              <li>Redundanz (Strom, Kühlung, Netzwerk)</li>
              <li>Lifecycle-Management &amp; Härtung</li>
              <li>Notfallvorsorge, Offsite-Backups</li>
            </ul>
          </div>
        </div>

        {/* Bild 2 */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
              />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                alt="Audit- und Compliance-Checkliste für Cloud-Sicherheit"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="text-sm text-zinc-600">
            Compliance schafft Vertrauen: Prüfe Nachweise (z. B. BSI C5) und
            verankere Verantwortlichkeiten klar.
          </figcaption>
        </figure>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <strong>Recht &amp; Regulierung:</strong> Behalte DSGVO,
          Auftragsverarbeitung, NIS2 und – sobald final – die EUCS im Blick. In
          Brüssel wird weiter über Ausgestaltung und Marktwirkung der EUCS
          diskutiert.
        </div>
      </section>

      <section id="flexibilitaet" className="mt-14">
        <h2>Flexibilität, Skalierung, Leistung &amp; Latenz</h2>
        <p>
          Cloud punktet mit Elastizität und globalen Regionen. On-Premise
          gewinnt, wenn Latenz ultrakritisch ist (z. B. Produktion, Edge,
          Echtzeit). Viele Unternehmen kombinieren: Daten nahe an Maschinen,
          Analyse in der Cloud – oder umgekehrt, je nach Integrationen.
        </p>
        <p>
          Wichtig ist eine <strong>Workload-Typisierung</strong>:
          Stabiler Dauerbetrieb mit hoher Grundlast eignet sich häufig für
          On-Premise oder Private Cloud; volatile, experimentelle oder stark
          wachsende Lasten brillieren in der Public Cloud.
        </p>
      </section>

      <section id="lockin" className="mt-14">
        <h2>Vendor Lock-in, Portabilität &amp; Reversibilität</h2>
        <p>
          Lock-in entsteht überall: in proprietären Cloud-Diensten ebenso wie in
          spezifischer Hardware, Hypervisoren oder Storage-Systemen On-Premise.
          Plane <strong>Reversibilität</strong> von Anfang an (Datenformate,
          Egress-Kosten, Laufzeiten, Exit-Prozesse, IaC-Abstraktion).
        </p>
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
          <strong>Good Practice:</strong> Nutze offene Standards, Container,
          Kubernetes und deklarative IaC (z. B. Terraform/Pulumi), um
          Portabilität zu erhöhen; evaluiere Managed PaaS vs. DIY bewusst.
        </div>
      </section>

      <section id="hybrid" className="mt-14">
        <h2>Hybrid- &amp; Multi-Cloud richtig nutzen</h2>
        <p>
          Hybrid ist <em>kein</em> Kompromiss, sondern eine Strategie:
          Latenzkritisches oder streng reguliertes bleibt On-Premise, alles
          andere wandert in die Cloud. Beobachte Trends wie
          <strong> Cloud-Repatriation</strong> – viele Unternehmen verschieben
          Workloads situativ zurück, ohne die Cloud grundsätzlich in Frage zu
          stellen. Das Ziel ist Optimierung, nicht Ideologie.
        </p>
        <p>
          Für EU-Organisationen kann die künftige EUCS-Zertifizierung eine neue
          Entscheidungsdimension eröffnen, insbesondere bei Souveränitäts- und
          Lieferkettenanforderungen.
        </p>
      </section>

      <section id="matrix" className="mt-14">
        <h2>Entscheidungsmatrix &amp; Vergleich</h2>

        {/* Kompakte Entscheidungsmatrix */}
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-64">
                  Auswahlkriterium
                </th>
                <th className="text-left font-semibold p-3">Cloud</th>
                <th className="text-left font-semibold p-3">On-Premise</th>
                <th className="text-left font-semibold p-3">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  k: "Lastprofil",
                  c: "Volatil, saisonal, unklar",
                  o: "Stabil, vorhersehbar, dauerhaft hoch",
                  n: "Workload-Analyse &amp; Forecasting notwendig (FinOps).",
                },
                {
                  k: "Compliance/Souveränität",
                  c: "Mit C5-Attest, EUCS-Level beachten",
                  o: "Volle physische Kontrolle",
                  n: "Branche/Behörde? Prüfe Zertifizierungen/Standorte.",
                },
                {
                  k: "Time-to-Value",
                  c: "Schnell (Managed Services)",
                  o: "Langsamer (Beschaffung/Setup)",
                  n: "Projektdruck und Integrationen berücksichtigen.",
                },
                {
                  k: "Kostenmodell",
                  c: "OpEx, hochgranular",
                  o: "CapEx, planbar",
                  n: "Szenarien über 3–5 Jahre vergleichen.",
                },
                {
                  k: "Latenz/Edge",
                  c: "Regionen/Local Zones prüfen",
                  o: "Physisch nah an Maschine",
                  n: "Mischmodelle (Edge + Cloud Analytics).",
                },
              ].map((r) => (
                <tr key={r.k} className="border-t border-zinc-200">
                  <td className="p-3 font-medium">{r.k}</td>
                  <td className="p-3">{r.c}</td>
                  <td className="p-3">{r.o}</td>
                  <td className="p-3">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Infobox */}
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <strong>Quick-Wahl:</strong> Wenn du <em>schnell</em> starten musst,
          unbekannte Last hast und global skalieren willst → Cloud (mit FinOps).
          Wenn du <em>stabile</em> Grundlast, klare Latenzanforderungen und ein
          erfahrenes Ops-Team hast → On-Premise. Hybrid, wenn beides zutrifft.
        </div>
      </section>

      <section id="umsetzung" className="mt-14">
        <h2>Umsetzung in 10 Schritten – So gehst du vor</h2>
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong>Use-Cases priorisieren:</strong> Geschäftsziele, SLAs,
            Regulatorik, Integrationen.
          </li>
          <li>
            <strong>Daten klassifizieren:</strong> Schutzbedarf,
            Souveränität/Standorte, Retention.
          </li>
          <li>
            <strong>Workloads typisieren:</strong> Stabil vs. volatil, Batch vs.
            Echtzeit.
          </li>
          <li>
            <strong>Architektur entscheiden:</strong> Cloud, On-Premise,
            Hybrid/Multi – mit Exit-Plan.
          </li>
          <li>
            <strong>Kosten-Szenarien rechnen:</strong> 3–5 Jahre, TCO,
            Risiken/Reserven, Commitments.
          </li>
          <li>
            <strong>Sicherheitsgrundlagen definieren:</strong> C5-Nachweise
            prüfen, Zero Trust, Backup/Recovery-Tests.
          </li>
          <li>
            <strong>Governance &amp; FinOps verankern:</strong> Budgets,
            Showback/Chargeback, Tagging, KPIs.
          </li>
          <li>
            <strong>Automatisieren:</strong> IaC, CI/CD, Policy-as-Code,
            Security-as-Code.
          </li>
          <li>
            <strong>Observability:</strong> Metriken/Logs/Traces, SLOs,
            Kapazitäts-/Kosten-Drift.
          </li>
          <li>
            <strong>Iterieren:</strong> Regelmäßige Review-Zyklen, ggf.
            Repatriation oder Re-Plattform.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Was ist Cloud-Computing laut NIST?
            </h3>
            <p>
              Ein Modell für bequemen, bedarfsgesteuerten Zugriff auf einen
              gemeinsam genutzten Pool konfigurierbarer Ressourcen (u. a.
              Netzwerke, Server, Speicher, Anwendungen) – schnell
              bereitzustellen und mit gemessener Nutzung.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ist Cloud per se sicherer als On-Premise?
            </h3>
            <p>
              Weder noch. Sicherheit hängt von Prozessen, Architektur und
              Umsetzung ab. Standards und Attests (z. B. BSI C5) helfen bei der
              Bewertung von Cloud-Anbietern.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was bringt FinOps für die Kostenkontrolle?
            </h3>
            <p>
              FinOps schafft Kostentransparenz, Verantwortlichkeiten und
              Steuerung (z. B. Commitments, Budgets). 2024/25 ist das Reduzieren
              von Verschwendung ein Top-Prioritätsthema.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Rolle spielt EUCS für die Auswahl?
            </h3>
            <p>
              EUCS (im Entstehen) soll eine EU-weit einheitliche
              Cloud-Zertifizierung bieten, die Unternehmen bei der Auswahl
              sicherer Dienste unterstützt. Details und Zeitplan sind weiterhin
              in Diskussion.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was ist mit Cloud-Repatriation gemeint?
            </h3>
            <p>
              Das Zurückholen bestimmter Workloads aus der Public Cloud in
              On-Premise/Private/Hybrid-Umgebungen, meist zur Optimierung von
              Kosten, Latenz oder Compliance – nicht als generelle Abkehr von
              Cloud.
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
                  name: "Was ist Cloud-Computing laut NIST?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ein Modell für bequemen, bedarfsgesteuerten Zugriff auf einen gemeinsamen Pool konfigurierbarer Ressourcen – schnell bereitzustellen und mit gemessener Nutzung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Cloud per se sicherer als On-Premise?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Weder noch. Sicherheit hängt von Prozessen, Architektur und Umsetzung ab. Standards und Attests (z. B. BSI C5) helfen bei der Bewertung von Cloud-Anbietern.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was bringt FinOps für die Kostenkontrolle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "FinOps schafft Kostentransparenz, Verantwortlichkeiten und Steuerung (z. B. Commitments, Budgets). Reduzieren von Verschwendung ist ein Top-Prioritätsthema.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielt EUCS für die Auswahl?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "EUCS (im Entstehen) soll eine EU-weit einheitliche Cloud-Zertifizierung bieten. Details und Zeitplan sind weiterhin in Diskussion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was ist mit Cloud-Repatriation gemeint?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Das Zurückholen bestimmter Workloads aus der Public Cloud in On-Premise/Private/Hybrid-Umgebungen zur Optimierung von Kosten, Latenz oder Compliance.",
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
          Triff die Entscheidung pro Workload: Volatile, innovationsgetriebene
          Fälle profitieren von der Cloud (mit FinOps-Steuerung); stabile,
          latenzkritische und streng regulierte Szenarien passen oft besser
          On-Premise oder in eine Private/Hybrid-Cloud. Standards wie BSI C5
          und die kommende EUCS erleichtern die Bewertung.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Unsicher, welche Plattform für deine Workloads optimal ist?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir analysieren Lastprofile, Risiko und Kosten – und bauen dir eine
            umsetzbare Cloud- oder On-Prem-Roadmap in 14 Tagen.
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
            <a
              className={`hover:underline ${accent}`}
              href="/blog/finops-einfuehrung"
            >
              FinOps einführen: Von Kosten zu Business-Mehrwert
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/bsi-c5-guide">
              BSI C5 verstehen: Checkliste für Cloud-Einkauf &amp; Audit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent}`} href="/blog/hybrid-cloud">
              Hybrid-Cloud-Architekturen: Patterns, Tools &amp; Fallstricke
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/blog/kubernetes-portabilitaet"
            >
              Portabilität mit Kubernetes &amp; IaC: So vermeidest du Lock-in
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
                {
                  t: "TCO (Total Cost of Ownership)",
                  e:
                    "Gesamtbetriebskosten einer Lösung über ihren Lebenszyklus (Invest, Betrieb, Personal, Risiko).",
                },
                {
                  t: "FinOps",
                  e:
                    "Betriebsmodell zur finanziellen Steuerung der Cloud: Transparenz, Verantwortlichkeit, Optimierung.",
                },
                {
                  t: "BSI C5",
                  e:
                    "Prüfkatalog des BSI als Mindeststandard zur Bewertung der Sicherheit von Cloud-Diensten (Attestierung).",
                },
                {
                  t: "EUCS",
                  e:
                    "Geplantes EU-Zertifizierungsschema für Cloud-Services zur einheitlichen Sicherheitsbewertung.",
                },
                {
                  t: "Cloud-Repatriation",
                  e:
                    "Gezielte Rückführung einzelner Workloads aus der Public Cloud in Private/On-Premise/Hybrid-Umgebungen.",
                },
              ].map((row) => (
                <tr key={row.t} className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">{row.t}</td>
                  <td className="p-3 text-zinc-700">{row.e}</td>
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
            alt="Autorin"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a href={author.linkedIn} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Alex Reviewer</strong> – Head of Cloud
            Architecture.{" "}
            <a
              href="https://www.linkedin.com/in/your-reviewer/"
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
      <a 
        href="https://example.com/studie" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline"
      >
        Beispielstudie (2023): Auswirkungen von XY
      </a>
    </li>
  </ul>
</section>

    </article>
  );
}
