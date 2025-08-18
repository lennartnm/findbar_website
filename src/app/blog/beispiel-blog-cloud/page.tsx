import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Cloud, Server, ShieldCheck, Scale, GitBranch } from "lucide-react";
// -----------------------------------------------------------------------------
// Page Meta
// -----------------------------------------------------------------------------
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
const CANONICAL = new URL("/blog/beispiel-blog-cloud", SITE_URL).toString();
export const metadata: Metadata = {
title:
"Cloud oder eigener Server? Entscheidungshilfe für Mittelstand & Scale-ups",
description:
"Cloud vs. eigener Server: Kosten, Sicherheit, Compliance (NIS2/DORA), Performance & Praxisfälle – kompakt erklärt mit Entscheidungs-Checkliste für dein Unternehmen.",
alternates: { canonical: CANONICAL },
robots: { index: true, follow: true },
openGraph: {
title:
"Cloud oder eigener Server? Entscheidungshilfe für Mittelstand & Scale-ups",
description:
"Kosten, Sicherheit, Compliance (NIS2/DORA), Performance & Praxisfälle – kompakt erklärt.",
url: CANONICAL,
type: "article",
locale: "de_DE",
},
twitter: {
card: "summary_large_image",
title:
"Cloud oder eigener Server? Entscheidungshilfe für Mittelstand & Scale-ups",
description:
"Kosten, Sicherheit, Compliance (NIS2/DORA), Performance & Praxisfälle – kompakt erklärt.",
},
};
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const accent = "text-emerald-700";
const updatedAt = "18.08.2025";
const author = {
name: "Lennart Neumann",
role: "Cloud & Security Consultant",
avatar: "/images/authors/lennart.jpg", // Platzhalter
linkedin: "https://www.linkedin.com/in/your-profile/",
};
function minutesToRead(txt: string) {
const words = txt.trim().split(/\s+/).length;
return Math.max(6, Math.round(words / 220)); // konservativ
}
const pageBodyText =
"Cloud oder eigener Server? In diesem Leitfaden erhältst du einen strukturierten Vergleich von Kosten, Sicherheit, Compliance und operativem Aufwand – inklusive Entscheidungs-Checkliste und realistischen Hybrid-Optionen.";
const readingTime = minutesToRead(pageBodyText);
// -----------------------------------------------------------------------------
// ---------- UI Components ----------
// -----------------------------------------------------------------------------
const TLDRItem = ({
icon: Icon,
children,
}: {
icon: LucideIcon;
children: ReactNode;
}) => (
<li className="flex items-start gap-3"> <Icon className={`w-5 h-5 mt-1 ${accent}`} aria-hidden /> <span>{children}</span> </li> );
const Pill = ({ children }: { children: ReactNode }) => (
<span className="inline-block rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs">
{children}
</span>
);
const Anchor = ({ id }: { id: string }) => (
<span id={id} aria-hidden className="block pt-24 -mt-24" />
);
// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
export default function Page() {
return (
<article className="mx-auto max-w-3xl px-6 py-10 text-zinc-900">
{/* Hero */}
<header className="mb-8">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
Cloud oder eigener Server – was passt besser zu deinem Unternehmen?
</h1>
<p className="mt-3 text-zinc-600">
Praxisleitfaden mit Entscheidungs-Checkliste für Kosten, Sicherheit,
Compliance und Betrieb.
</p>
    {/* Hero-Bild – Platzhalter-Beschreibung */}
    <figure className="mt-6 relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-gradient-to-br from-emerald-50 to-white ring-1 ring-emerald-100">
      {/* In der Produktion: passendes Bild einsetzen, das ein IT-Team bei der Cloud-Migration / Serverraum vs. Cloud zeigt */}
      <div className="absolute inset-0 grid place-content-center">
        <div className="text-center">
          <div className="text-sm text-emerald-800 font-medium">
            Platzhalter für Hero-Bild
          </div>
          <div className="text-xs text-emerald-700/70 mt-1">
            Empfehlung: Foto eines IT-Teams, das Infrastruktur-Optionen
            bewertet (Serverrack vs. Cloud-Diagramm)
          </div>
        </div>
      </div>
      <Image
        src="/images/placeholder-hero.png"
        alt="Platzhalter: IT-Team bewertet Cloud vs. Server"
        fill
        priority
        className="object-cover opacity-0"
      />
    </figure>

    {/* Meta */}
    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
      <div className="flex items-center gap-2">
        <Image
          src={author.avatar}
          alt={`Autor: ${author.name}`}
          width={28}
          height={28}
          className="rounded-full ring-1 ring-zinc-200"
        />
        <span>
          {author.name} · {author.role}
        </span>
      </div>
      <span>Zuletzt aktualisiert: {updatedAt}</span>
      <span>Lesedauer: {readingTime} Min.</span>
    </div>
  </header>

  {/* TL;DR */}
  <section
    aria-labelledby="tldr"
    className="mb-8 rounded-lg border border-emerald-100 bg-emerald-50/60 p-5"
  >
    <h2 id="tldr" className="font-semibold text-lg mb-3">
      Das Wichtigste auf einen Blick
    </h2>
    <ul className="space-y-2">
      <TLDRItem icon={Cloud}>
        <strong>Cloud</strong> punktet bei Time-to-Value, Elastizität und
        globaler Verfügbarkeit.
      </TLDRItem>
      <TLDRItem icon={ShieldCheck}>
        <strong>Compliance & Sicherheit</strong> sind machbar (z. B. C5,
        ISO 27001, NIS2), erfordern aber sauberes Rechte- & Datenmanagement.
      </TLDRItem>
      <TLDRItem icon={Server}>
        <strong>Eigener Server</strong> kann bei stabilen Workloads mit
        hohen, planbaren Auslastungen kosteneffizient sein.
      </TLDRItem>
      <TLDRItem icon={GitBranch}>
        <strong>Hybrid</strong> kombiniert Kontrolle on-prem mit
        Cloud-Services für Skalierung & KI.
      </TLDRItem>
      <TLDRItem icon={Scale}>
        Entscheidung per <em>Total Cost & Risk</em> statt nur Hardwarepreis
        treffen.
      </TLDRItem>
    </ul>
  </section>

  {/* Inhaltsverzeichnis */}
  <nav
    aria-label="Inhaltsverzeichnis"
    className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-5"
  >
    <ol className="list-decimal pl-5 space-y-1 marker:text-zinc-400">
      <li>
        <a href="#grundlagen" className="text-emerald-700 hover:underline">
          Grundlagen & Begriffe
        </a>
      </li>
      <li>
        <a href="#vergleich" className="text-emerald-700 hover:underline">
          Vergleich: Kosten, Sicherheit, Performance, Betrieb
        </a>
      </li>
      <li>
        <a href="#compliance" className="text-emerald-700 hover:underline">
          Compliance & Souveränität (C5, NIS2, DORA, Data Act)
        </a>
      </li>
      <li>
        <a href="#praxis" className="text-emerald-700 hover:underline">
          Praxis: Cloud, On-Prem & Hybrid richtig planen
        </a>
      </li>
      <li>
        <a href="#faq" className="text-emerald-700 hover:underline">
          FAQ
        </a>
      </li>
      <li>
        <a href="#quellen" className="text-emerald-700 hover:underline">
          Quellen
        </a>
      </li>
      <li>
        <a href="#glossar" className="text-emerald-700 hover:underline">
          Mini-Glossar
        </a>
      </li>
    </ol>
  </nav>

  {/* Hauptteil – (gekürzte Fassung; Fokus auf Code-Fixes & Struktur) */}
  <section className="prose prose-zinc max-w-none">
    <Anchor id="grundlagen" />
    <h2>Grundlagen & Begriffe</h2>
    <p>{pageBodyText}</p>

    <Anchor id="vergleich" />
    <h2>Vergleich: Kosten, Sicherheit, Performance, Betrieb</h2>
    <ul>
      <li>
        <strong>Kosten:</strong> Cloud = OPEX & Pay-as-you-go; Server =
        CAPEX, aber planbar bei stabiler Last.
      </li>
      <li>
        <strong>Sicherheit:</strong> Geteiltes Verantwortungsmodell in der
        Cloud; on-prem volle Kontrolle, aber voller Aufwand.
      </li>
      <li>
        <strong>Performance:</strong> Nähe zu Nutzern, Peering,
        Latenzanforderungen beachten.
      </li>
      <li>
        <strong>Betrieb:</strong> Patching, Monitoring, 24/7 – intern vs.
        gemanagte Services.
      </li>
    </ul>

    <Anchor id="compliance" />
    <h2>Compliance & Souveränität (C5, NIS2, DORA, Data Act)</h2>
    <p>
      Wichtig für regulierte Branchen: Nachweisbare Kontrollen (z. B. BSI C5
      für Cloud-Dienste), klare Betreiber-Rollen, Logging und
      Datenresidenz/Souveränität je nach Schutzbedarf.
    </p>

    <Anchor id="praxis" />
    <h2>Praxis: Cloud, On-Prem & Hybrid richtig planen</h2>
    <ul>
      <li>
        <Pill>Discovery</Pill> Use-Cases, Datenklassen, Latenzanforderungen.
      </li>
      <li>
        <Pill>Architektur</Pill> Landing Zone, IAM, Netzwerk, Backups.
      </li>
      <li>
        <Pill>FinOps</Pill> Budgets, Reservierungen, Rightsizing.
      </li>
      <li>
        <Pill>Security/Compliance</Pill> Policies, Audits, Belege.
      </li>
      <li>
        <Pill>Migration</Pill> Pilot, Rollout, Review.
      </li>
    </ul>
  </section>

  {/* FAQ */}
  <Anchor id="faq" />
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
    <div className="space-y-6">
      <details className="group border border-zinc-200 rounded-lg p-4">
        <summary className="cursor-pointer font-medium">
          Ist ein eigener Server sicherer als die Cloud?
        </summary>
        <p className="mt-2 text-zinc-700">
          Sicherheit hängt von Kontrollen ab: In der Cloud ist vieles
          „secure by default“, on-prem hast du volle Hoheit – aber auch die
          volle Verantwortung. Audits und Standards (z. B. C5) sind
          Schlüsselfaktoren.
        </p>
      </details>
      <details className="group border border-zinc-200 rounded-lg p-4">
        <summary className="cursor-pointer font-medium">
          Was kostet Cloud im Vergleich zu on-prem?
        </summary>
        <p className="mt-2 text-zinc-700">
          Cloud skaliert verbrauchsabhängig (OPEX). On-prem sind CAPEX hoch,
          können sich bei konstanter Last lohnen. Wichtig sind TCO inkl.
          Betrieb & Personal.
        </p>
      </details>
      <details className="group border border-zinc-200 rounded-lg p-4">
        <summary className="cursor-pointer font-medium">
          Wie erfülle ich NIS2/DORA in der Cloud?
        </summary>
        <p className="mt-2 text-zinc-700">
          Durch klare Zuständigkeiten (Shared Responsibility), technische
          Kontrollen (z. B. IAM, Protokollierung, Backup) und nachweisbare
          Prozesse. Provider-Attestierungen sind hilfreich, ersetzen aber
          nicht die eigene Umsetzung.
        </p>
      </details>
      <details className="group border border-zinc-200 rounded-lg p-4">
        <summary className="cursor-pointer font-medium">
          Für wen ist Hybrid sinnvoll?
        </summary>
        <p className="mt-2 text-zinc-700">
          Wenn bestimmte Daten/Workloads lokal bleiben sollen (Latenz,
          Souveränität, Alt-Systeme), aber Skalierung/Services aus der Cloud
          genutzt werden.
        </p>
      </details>
      <details className="group border border-zinc-200 rounded-lg p-4">
        <summary className="cursor-pointer font-medium">
          Wie plane ich den Anbieterwechsel?
        </summary>
        <p className="mt-2 text-zinc-700">
          Vertrags-Exit-Klauseln, Datenexport-Formate, Automatisierung (IaC),
          Entkopplung per Standards/Container, Migrations-Dry-Runs und klare
          RACI-Pläne vordenken.
        </p>
      </details>
    </div>
  </section>

  {/* CTA */}
  <aside className="mt-12 rounded-lg border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-6">
    <h3 className="text-xl font-semibold">
      Kostenloses Erstgespräch: Cloud-Strategie & Kostencheck
    </h3>
    <p className="text-zinc-700 mt-1">
      Wir prüfen deine Anforderungen und skizzieren eine passende
      Roadmap – in 30 Minuten.
    </p>
    <form
      className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3"
      action="/api/contact"
      method="post"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        required
        className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        aria-label="Telefon"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      />
      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        aria-label="E-Mail"
        required
        className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      />
      <button
        type="submit"
        className="md:col-span-3 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
      >
        Demo anfordern
      </button>
    </form>
  </aside>

  {/* Quellen */}
  <Anchor id="quellen" />
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Quellen</h2>
    <ol className="list-decimal pl-5 space-y-2">
      <li>
        BSI – Kriterienkatalog C5 (Übersicht):{" "}
        <a
          className="text-emerald-700 hover:underline"
          href="https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5_node.html"
          rel="noopener"
          target="_blank"
        >
          https://www.bsi.bund.de/.../kriterienkatalog-c5_node.html
        </a>
      </li>
      <li>
        BSI – C5:2020 (Offizielle PDF):{" "}
        <a
          className="text-emerald-700 hover:underline"
          href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/CloudComputing/ComplianceControlsCatalogue/2020/C5_2020.pdf?__blob=publicationFile&v=3"
          rel="noopener"
          target="_blank"
        >
          C5_2020.pdf
        </a>
      </li>
      <li>
        AWS – European Digital Sovereignty / European Sovereign Cloud:{" "}
        <a
          className="text-emerald-700 hover:underline"
          href="https://aws.amazon.com/compliance/europe-digital-sovereignty/"
          rel="noopener"
          target="_blank"
        >
          aws.com/compliance/europe-digital-sovereignty
        </a>{" "}
        ·{" "}
        <a
          className="text-emerald-700 hover:underline"
          href="https://aws.eu/"
          rel="noopener"
          target="_blank"
        >
          aws.eu
        </a>{" "}
        ·{" "}
        <a
          className="text-emerald-700 hover:underline"
          href="https://aws.amazon.com/blogs/aws/in-the-works-aws-european-sovereign-cloud/"
          rel="noopener"
          target="_blank"
        >
          AWS Blog: European Sovereign Cloud (Ankündigung)
        </a>
      </li>
    </ol>
  </section>

  {/* Glossar */}
  <Anchor id="glossar" />
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Mini-Glossar</h2>
    <dl className="grid grid-cols-1 gap-3">
      <div>
        <dt className="font-medium">C5</dt>
        <dd className="text-zinc-700">
          BSI-Kontrollkatalog zur Bewertung der Informationssicherheit von
          Cloud-Diensten.
        </dd>
      </div>
      <div>
        <dt className="font-medium">NIS2</dt>
        <dd className="text-zinc-700">
          EU-Richtlinie zur Cybersicherheit für kritische und wichtige
          Einrichtungen.
        </dd>
      </div>
      <div>
        <dt className="font-medium">DORA</dt>
        <dd className="text-zinc-700">
          EU-Verordnung zur digitalen Resilienz im Finanzsektor.
        </dd>
      </div>
      <div>
        <dt className="font-medium">Data Act</dt>
        <dd className="text-zinc-700">
          EU-Gesetz für fairen Datenzugang und Interoperabilität.
        </dd>
      </div>
      <div>
        <dt className="font-medium">Hybrid-Cloud</dt>
        <dd className="text-zinc-700">
          Kombination aus on-prem-Ressourcen und Public-Cloud-Services.
        </dd>
      </div>
    </dl>
  </section>

  {/* JSON-LD (Article, Organization, FAQPage) */}
  <ScriptJsonLd />
</article>
);
}
// -----------------------------------------------------------------------------
// Structured Data
// -----------------------------------------------------------------------------
function ScriptJsonLd() {
const org = {
"@context": "https://schema.org",
"@type": "Organization",
name: "Findbar",
url: SITE_URL,
logo: ${SITE_URL}/images/logo.png,
};
const article = {
"@context": "https://schema.org",
"@type": "Article",
headline:
"Cloud oder eigener Server – was passt besser zu deinem Unternehmen?",
description:
"Cloud vs. eigener Server: Kosten, Sicherheit, Compliance (NIS2/DORA), Performance & Praxisfälle – kompakt erklärt mit Entscheidungs-Checkliste.",
inLanguage: "de-DE",
author: {
"@type": "Person",
name: author.name,
},
publisher: {
"@type": "Organization",
name: "Findbar",
logo: {
"@type": "ImageObject",
url: ${SITE_URL}/images/logo.png,
},
},
datePublished: "2025-08-18",
dateModified: "2025-08-18",
mainEntityOfPage: CANONICAL,
image: ${SITE_URL}/images/og/cloud-oder-eigener-server.jpg,
};
// ✅ FAQPage mit 5 Fragen (sichtbarer Block hat ebenfalls 5)
const faq = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "Ist ein eigener Server sicherer als die Cloud?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sicherheit hängt von implementierten Kontrollen ab. Cloud bietet ‚secure by default‘ und Zertifizierungen (z. B. C5), on-prem volle Hoheit aber auch vollen Aufwand.",
},
},
{
"@type": "Question",
name: "Was kostet Cloud im Vergleich zu on-prem?",
acceptedAnswer: {
"@type": "Answer",
text:
"Cloud ist OPEX-basiert und skaliert mit Nutzung. On-prem hat CAPEX-Spitzen, kann bei stabiler Last günstiger sein. Entscheidend sind Gesamtkosten inkl. Betrieb.",
},
},
{
"@type": "Question",
name: "Wie erfülle ich NIS2/DORA in der Cloud?",
acceptedAnswer: {
"@type": "Answer",
text:
"Durch klare Verantwortlichkeiten (Shared Responsibility), technische Kontrollen (IAM, Logging, Backup) und nachweisbare Prozesse; Provider-Atteste unterstützen.",
},
},
{
"@type": "Question",
name: "Für wen ist Hybrid sinnvoll?",
acceptedAnswer: {
"@type": "Answer",
text:
"Für Organisationen mit lokalen Anforderungen (Latenz, Souveränität, Alt-Systeme), die dennoch Cloud-Skalierung und -Services nutzen möchten.",
},
},
{
"@type": "Question",
name: "Wie plane ich den Anbieterwechsel?",
acceptedAnswer: {
"@type": "Answer",
text:
"Exit-Klauseln, Datenexport-Formate, Automatisierung (IaC), Standard-Schnittstellen/Container, Test-Migrationen und ein klarer RACI-Plan sind zentral.",
},
},
],
};
const scripts = [org, article, faq];
return (
<>
{scripts.map((obj, i) => (
<script
key={i}
type="application/ld+json"
// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
/>
))}
</>
);
}
