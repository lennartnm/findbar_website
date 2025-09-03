// src/app/magazin/bueroreinigung-gesundheit-motivation-krankheitstage/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

// --------- Basic page constants ---------
const title =
  "Saubere Arbeitsumgebung, produktive Mitarbeiter: Warum regelmäßige Büroreinigung mehr als nur Ästhetik ist";
const description =
  "Wie regelmäßige Büroreinigung Gesundheit schützt, Motivation stärkt und Krankheitstage senkt – mit konkreten Tipps, Reinigungsplan, Checklisten & ROI-Ansatz.";
const canonical =
  "https://www.facility-expert.de/magazin/bueroreinigung-gesundheit-motivation-krankheitstage";

const accent = "text-emerald-700";

const author = {
  name: "Lena Hofmann",
  role: "Arbeitspsychologin & Workplace-Strategin",
  image: "/platzhalter_autor.jpg",
  linkedin: "https://www.linkedin.com/in/lena-hofmann",
};

const publisher = {
  name: "Facility Expert Magazin",
  logo: "/publisher-logo.png",
  url: "https://www.facility-expert.de",
};

const company = {
  "@type": "Organization",
  name: "Facility Expert Services GmbH",
  url: "https://www.facility-expert.de",
  logo: "https://www.facility-expert.de/logo.png",
  telephone: "+49-30-1234567",
  sameAs: [
    "https://www.linkedin.com/company/facility-expert",
    "https://www.xing.com/companies/facilityexpert",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 12",
    addressLocality: "Berlin",
    postalCode: "10115",
    addressCountry: "DE",
  },
};

// --------- Next.js Metadata (App Router) ---------
export const metadata: Metadata = {
  title: `${title} | Facility Expert`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: publisher.name,
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.facility-expert.de/og/bueroreinigung-gesundheit.webp",
        width: 1200,
        height: 630,
        alt:
          "Saubere Arbeitsumgebung: Büroreinigung steigert Motivation und senkt Krankheitstage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://www.facility-expert.de/og/bueroreinigung-gesundheit.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --------- Page Component ---------
export default function Page() {
  const updatedISO = "2025-08-20";
  const updatedLabel = "20.08";
  const readingTime = "10 Minuten";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "de",
    image: [
      "https://www.facility-expert.de/og/bueroreinigung-gesundheit.webp",
    ],
    datePublished: "2025-08-20",
    dateModified: "2025-08-20",
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: `${publisher.url}/publisher-logo.png`,
      },
    },
    mainEntityOfPage: canonical,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie oft sollte ein Büro professionell gereinigt werden?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Täglich: Sanitärbereiche, Küchen, Müllentsorgung und stark frequentierte Touchpoints. Mehrmals pro Woche: Böden und Arbeitsplätze. Wöchentlich bis 14-tägig: Glasflächen innen, seltener genutzte Räume. Quartalsweise: Grundreinigung, Polster, hohe Flächen.",
        },
      },
      {
        "@type": "Question",
        name:
          "Reinigung vs. Desinfektion – was ist der Unterschied im Büroalltag?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Reinigung entfernt Schmutz und einen Großteil der Keime mechanisch (z. B. mit Mikrofasern). Desinfektion inaktiviert gezielt Mikroorganismen. Im Büro reicht im Alltag eine gründliche Reinigung; Desinfektion ist punktuell für Touchpoints und Infektwellen sinnvoll.",
        },
      },
      {
        "@type": "Question",
        name:
          "Welche Maßnahmen verbessern zusätzlich die Innenraumluftqualität (IAQ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Regelmäßiges Stoßlüften oder bedarfsgeführte Lüftung, CO₂-Monitoring, Vermeidung unnötiger Duftstoffe/VOCs, saubere Filter, feuchtearmen Reinigungsprozess, optimale Luftfeuchte (ca. 40–60 %).",
        },
      },
      {
        "@type": "Question",
        name: "Kann Büroreinigung messbar Krankheitstage reduzieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sie ist kein Allheilmittel, aber ein relevanter Baustein: Saubere Touchpoints, gute IAQ und Hygienegewohnheiten verringern Infektionsrisiken und entlasten Atemwege. In Kombination mit Lüftung, Handhygiene und klaren Regeln sinkt die Ansteckungswahrscheinlichkeit.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Flächen sind echte Keim-Hotspots im Büro?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Türklinken, Tastaturen, Mäuse, Telefone, Aufzugknöpfe, Kaffeemaschinen-Bedienfelder, Kühlschrankgriffe, Lichtschalter – also alles, was viele Hände häufig berühren.",
        },
      },
      {
        "@type": "Question",
        name: "Wie argumentiere ich den ROI von Reinigung gegenüber dem Management?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Setze die jährlichen Reinigungskosten ins Verhältnis zu Personalkosten und Ausfalltagen. Schon wenige Prozent weniger Fehlzeiten oder spürbar bessere Konzentration rechtfertigen die Investition – dokumentiert über Kennzahlen wie Krankenquote, CO₂-Werte und Mitarbeiterfeedback.",
        },
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Warum Sauberkeit echte Produktivität schafft", url: `${canonical}#warum-produktivitaet` },
      { "@type": "ListItem", position: 2, name: "Gesundheit: Weniger Keime, bessere Luft", url: `${canonical}#gesundheit-luft` },
      { "@type": "ListItem", position: 3, name: "Motivation: Psychologie eines gepflegten Büros", url: `${canonical}#motivation-psychologie` },
      { "@type": "ListItem", position: 4, name: "Krankheitstage senken: Maßnahmen mit Hebel", url: `${canonical}#krankheitstage-senken` },
      { "@type": "ListItem", position: 5, name: "Reinigungsplan & Checkliste", url: `${canonical}#reinigungsplan` },
      { "@type": "ListItem", position: 6, name: "Kosten, ROI & Business-Case", url: `${canonical}#roi` },
      { "@type": "ListItem", position: 7, name: "FAQ", url: `${canonical}#faq` },
    ],
  };

  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(company) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

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
          Saubere Arbeitsumgebung, produktive Mitarbeiter: Warum regelmäßige
          Büroreinigung mehr als nur Ästhetik ist
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst Krankheitstage senken, die Motivation spürbar heben und
          konzentrierteres Arbeiten ermöglichen? Hier erfährst du, wie clevere
          Büroreinigung, gute Luft und smarte Routinen gemeinsam wirken –
          inklusive Reinigungsplan, Checkliste und ROI-Denkanstoß.
        </p>

        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime={updatedISO}>{updatedLabel}</time>
          {" · "}Lesedauer: <span className="tabular-nums">{readingTime}</span>
        </div>

        {/* Hero 16:6 (LCP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <Image
              src="/platzhalter_in_text.jpg"
              alt="Helles, aufgeräumtes Großraumbüro mit Pflanzen und Tageslicht – Symbol für saubere, gesunde Arbeitsumgebung"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="sr-only">
            Ein gepflegtes Büro fördert Wohlbefinden und Leistung.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <Image
            src={author.image}
            alt="Autorin"
            width={40}
            height={40}
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover"
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
            <strong>Gesundheit:</strong> Regelmäßige Reinigung der Touchpoints
            + gute Innenraumluft senken Infektionsrisiken und entlasten
            Atemwege.
          </li>
          <li>
            <strong>Motivation:</strong> Ein gepflegtes Umfeld signalisiert
            Wertschätzung, stärkt Fokus und reduziert Frust – visuelle Ordnung
            schafft mentale Klarheit.
          </li>
          <li>
            <strong>Weniger Krankheitstage:</strong> Hygieneregeln, Lüftung,
            CO₂-Monitoring und klare Reinigungsintervalle wirken zusammen.
          </li>
          <li>
            <strong>Einfach starten:</strong> Mit Checkliste, priorisierten
            Flächen (High-Touch) und einem 3-Stufen-Plan: täglich – wöchentlich
            – quartalsweise.
          </li>
          <li>
            <strong>Business-Case:</strong> Sauberkeit kostet – aber Ausfälle
            kosten mehr. Schon wenige Prozent weniger Fehltage können die
            Reinigung amortisieren.
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
              href="#warum-produktivitaet"
            >
              Warum Sauberkeit echte Produktivität schafft
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#gesundheit-luft"
            >
              Gesundheit: Weniger Keime, bessere Luft
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#motivation-psychologie"
            >
              Motivation: Psychologie eines gepflegten Büros
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#krankheitstage-senken"
            >
              Krankheitstage senken: Maßnahmen mit Hebel
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#reinigungsplan"
            >
              Reinigungsplan &amp; Checkliste
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#roi">
              Kosten, ROI &amp; Business-Case
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
      <section id="warum-produktivitaet" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Warum Sauberkeit echte Produktivität schafft
        </h2>
        <p className="leading-relaxed">
          Sauberkeit ist kein Selbstzweck. Ein ordentliches, gut gereinigtes
          Büro reduziert Ablenkungen, macht Arbeitsmittel verlässlich verfügbar
          und senkt die Reibungsverluste im Alltag. Das wirkt oft subtil –
          merkst du aber deutlich an Ruhe, Fokus und Tempo. Kurz:{" "}
          <em>Weniger Chaos &gt; mehr kognitive Kapazität</em>.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Sofort-Effekte</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Weniger visuelle Unordnung, klarere Prioritäten</li>
              <li>Weniger Unterbrechungen durch „Wo ist …?“-Momente</li>
              <li>Angenehme Atmosphäre – geringere Reibung im Team</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Langfrist-Effekte</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Stabilere Routinen, planbare Qualität im Alltag</li>
              <li>Höhere Verlässlichkeit von Arbeitsmitteln</li>
              <li>Besseres Employer Branding im Office-Erlebnis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bild 1 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <Image
            src="/platzhalter_in_text.jpg"
            alt="Nahaufnahme von Türklinke und Aufzugknopf – typische High-Touch-Flächen im Büro"
            fill
            loading="lazy"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          High-Touch-Flächen wie Klinken, Knöpfe oder Telefonhörer sind zentrale
          Stellschrauben für Hygiene.
        </figcaption>
      </figure>

      <section id="gesundheit-luft" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Gesundheit: Weniger Keime, bessere Luft
        </h2>
        <p className="leading-relaxed">
          Zwei Hebel entscheiden im Büro über Wohlbefinden und Ausfälle:{" "}
          <strong>saubere Oberflächen</strong> und <strong>gute Luft</strong>.
          Regelmäßige Reinigung verringert die Keimlast an gemeinsam genutzten
          Flächen. Gleichzeitig wirkt die Qualität der Innenraumluft (IAQ) auf
          Konzentration, Augen, Haut und Atemwege – Stichwort CO₂, Feinstaub,
          Staub und VOCs (flüchtige organische Verbindungen).
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-4 bg-white">
          <h3 className="font-semibold mb-2">
            IAQ-Quick-Check (für jeden Arbeitsplatz)
          </h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              CO₂ unter ~1 000 ppm halten; bei &gt;1 200 ppm lüften oder
              Luftwechsel erhöhen.
            </li>
            <li>Staubquellen und Duftstoffe minimieren, Filter sauber halten.</li>
            <li>
              Luftfeuchte moderat (≈40–60 %) – zu trocken reizt Schleimhäute.
            </li>
          </ul>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Innenraumluftqualität ist kein Nice-to-have. Schon moderat bessere
            Luftbedingungen können spürbarere Konzentration und schnellere
            Reaktionszeiten ermöglichen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Aus der Forschung rund um die COGfx-Studienreihe (indirektes
            Zitat)
          </figcaption>
        </figure>
      </section>

      {/* 2:1 Vergleich */}
      <section className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          <aside className="md:col-span-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="font-semibold mb-2">High-Touch-Hotspots</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Tastaturen &amp; Mäuse</li>
              <li>Telefone &amp; Headsets</li>
              <li>Türgriffe, Aufzugknöpfe</li>
              <li>Kaffeemaschine, Kühlschrankgriffe</li>
              <li>Lichtschalter, Druckerbedienfelder</li>
            </ul>
          </aside>
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">
              Warum das zählt – in einfach
            </h3>
            <p className="leading-relaxed">
              Viele Hände berühren dieselben Flächen – Keime finden Abkürzungen.
              Eine solide, feuchtearme Wischreinigung mit Mikrofasern und
              klaren Intervallen hält die Keimlast niedrig. Gepaart mit
              Handhygiene und gutem Lüften sinkt die
              Ansteckungswahrscheinlichkeit im Alltag deutlich.
            </p>
          </div>
        </div>
      </section>

      {/* Bild 2 */}
      <figure className="mt-8">
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
          style={{ aspectRatio: "16 / 6" }}
        >
          <Image
            src="/platzhalter_in_text.jpg"
            alt="CO₂-Messgerät am Arbeitsplatz – visuelles IAQ-Feedback für richtiges Lüften"
            fill
            loading="lazy"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-2 text-xs text-zinc-600">
          CO₂-Monitoring schafft Bewusstsein und erleichtert bedarfsgerechtes
          Lüften.
        </figcaption>
      </figure>

      <section id="motivation-psychologie" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Motivation: Psychologie eines gepflegten Büros
        </h2>
        <p className="leading-relaxed">
          Ein sauberes Büro ist sichtbare Wertschätzung. Es vermittelt: „Deine
          Arbeit zählt – du verdienst gute Bedingungen.“ Das steigert
          Zugehörigkeitsgefühl, reduziert Ärger über „Schmuddelecken“ und
          unterstützt fokussiertes Arbeiten. Ordnung ist zudem ein leichter
          Einstieg in persönliche <em>Micro-Habits</em>: 2-Minuten-Aufräumen am
          Tagesende, sauberer Start am Morgen – weniger Overload, mehr Schwung.
        </p>
        <div className="mt-6 rounded-2xl border border-zinc-200 p-4 bg-emerald-50">
          <h3 className="font-semibold mb-2">Mini-Impuls fürs Team</h3>
          <ol className="ml-5 list-decimal space-y-1">
            <li>„Clean Desk“ light: sichtbare Fläche frei halten</li>
            <li>Gemeinsame Touchpoints nach Gebrauch kurz wischen</li>
            <li>2× täglich lüften (oder CO₂-Ampel nutzen)</li>
          </ol>
        </div>
      </section>

      <section id="krankheitstage-senken" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Krankheitstage senken: Maßnahmen mit Hebel
        </h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Maßnahme
                </th>
                <th className="text-left font-semibold p-3">Wirkprinzip</th>
                <th className="text-left font-semibold p-3">Praxis-Tipp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Touchpoints täglich reinigen
                </td>
                <td className="p-3">
                  Keimketten unterbrechen, Übertragungen reduzieren
                </td>
                <td className="p-3">
                  Mikrofasertücher farbcodieren; milde, materialverträgliche
                  Reiniger nutzen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  CO₂-/IAQ-Monitoring
                </td>
                <td className="p-3">
                  Hinweis auf Luftwechselbedarf; weniger Müdigkeit
                </td>
                <td className="p-3">
                  CO₂-Ampel sichtbar platzieren; Lüftungsroutine festlegen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Feuchte im Zielbereich
                </td>
                <td className="p-3">
                  Schleimhäute bleiben belastbar – weniger Reizungen
                </td>
                <td className="p-3">
                  Zu trockene Winterluft beobachten; Luftbefeuchtung
                  verantwortungsvoll prüfen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Hygiene-Etikette
                </td>
                <td className="p-3">
                  Infektionsrisiken senken (Hustenetikette, zu Hause bleiben bei
                  Symptomen)
                </td>
                <td className="p-3">
                  In Team-Guidelines aufnehmen, Vorbildfunktion der Führung
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-4">
          <h3 className="font-semibold mb-2">3-Stufen-Plan (Quickstart)</h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>Heute:</strong> Touchpoints erfassen, Reinigungsfrequenz
              festlegen, CO₂-Ampel besorgen
            </li>
            <li>
              <strong>Diese Woche:</strong> Team-Briefing, Materialstationen,
              Farbcode, kurze Schulung
            </li>
            <li>
              <strong>Dieses Quartal:</strong> Grundreinigung, Filterservice,
              Review der Kennzahlen (Krankenquote, CO₂-Mittelwerte)
            </li>
          </ul>
        </div>
      </section>

      <section id="reinigungsplan" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Reinigungsplan &amp; Checkliste</h2>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Bereich/Objekt
                </th>
                <th className="text-left font-semibold p-3">Intervall</th>
                <th className="text-left font-semibold p-3">Hinweis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Sanitär/Küche</td>
                <td className="p-3">täglich</td>
                <td className="p-3">Hygienepriorität; Verbrauchsmaterial prüfen</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Türklinken, Knöpfe</td>
                <td className="p-3">täglich</td>
                <td className="p-3">Feuchtearme Wischreinigung</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Arbeitsplätze, Tische</td>
                <td className="p-3">2–3×/Woche</td>
                <td className="p-3">Clean-Desk-Regel erleichtert Reinigung</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Böden</td>
                <td className="p-3">2–3×/Woche</td>
                <td className="p-3">Feucht wischen nach Bedarf</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Monitore/Tastaturen</td>
                <td className="p-3">wöchentlich</td>
                <td className="p-3">Schonende Mittel, Geräte vorher ausschalten</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Glas innen, Leuchten</td>
                <td className="p-3">monatlich</td>
                <td className="p-3">Blendungen reduzieren, Lichtqualität</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Polster/Teppiche</td>
                <td className="p-3">quartalsweise</td>
                <td className="p-3">Tiefenreinigung gegen Staub/VOCs</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">HVAC/Filterservice</td>
                <td className="p-3">nach Hersteller/Quartal</td>
                <td className="p-3">IAQ-Schlüsselstelle – dokumentieren</td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-2">Checkliste – kurz &amp; praktisch</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Flächen-Inventar &amp; Intervallplan vorhanden</li>
            <li>Farbkodierung &amp; Materialstationen eingerichtet</li>
            <li>CO₂-Ampel sichtbar, Lüftungsroutine festgehalten</li>
            <li>Schulung: Clean-Desk, Hustenetikette, Krank zur Arbeit? → Nein</li>
            <li>Quartals-Review: Kennzahlen + Feedback</li>
          </ul>
        </aside>
      </section>

      <section id="roi" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Kosten, ROI &amp; Business-Case</h2>
        <p className="leading-relaxed">
          Der größte Kostenblock eines Büros sind Personalkosten – nicht Miete
          oder Reinigung. Fällt nur ein kleiner Teil der Arbeitszeit durch
          Infekte, Reizungen (z. B. trockene Luft) oder Konzentrationsverluste
          weg, übersteigen die Opportunitätskosten schnell das
          Reinigungssbudget. Deshalb lohnt ein schlauer Mix aus Reinigung,
          IAQ-Pflege und Team-Gewohnheiten.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="font-semibold mb-2">Mini-Rechenbeispiel</h3>
          <p className="text-sm leading-relaxed">
            50 Mitarbeitende × 65 000 € Personalkosten/Jahr ≙ 3,25 Mio. €. Wenn
            bessere Hygiene/IAQ im Schnitt 1 % produktive Zeit rettet, entspricht
            das ≈32 500 € – häufig mehr als das Jahresbudget für die
            Büroreinigung.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wie oft sollte ein Büro professionell gereinigt werden?
            </h3>
            <p>
              Täglich: Sanitär, Küche, Müll und Touchpoints. Mehrmals pro Woche:
              Arbeitsplätze und Böden. Monatlich: Glas/Leuchten. Quartalsweise:
              Grundreinigung, Polster, Filterservice.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Reinigung oder Desinfektion – was ist im Alltag sinnvoll?
            </h3>
            <p>
              Gründliche Reinigung reicht meist. Desinfiziere selektiv
              (z. B. bei Infektwellen) und vermeide übermäßige Chemie, um
              Materialien und Atemwege zu schonen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie integriere ich CO₂-Monitoring ohne viel Aufwand?
            </h3>
            <p>
              Kleine Sensor-Displays („Ampeln“) auf Team-Ebenen platzieren,
              Schwellen definieren (z. B. 900/1 200 ppm) und
              Lüftungsentscheidungen daran koppeln.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Rolle spielt die Luftfeuchte im Winter?
            </h3>
            <p>
              Sehr trockene Luft reizt Augen und Schleimhäute. Halte 40–60 %
              an, aber vermeide Überfeuchtung. Prüfe Optionen mit
              Arbeitsschutz/Facility – Hygiene beachten.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie überzeuge ich Geschäftsführung &amp; Finance?
            </h3>
            <p>
              Sammle Daten: Krankenquote, CO₂-Mittelwerte, Beschwerden,
              Mitarbeiterfeedback. Verknüpfe sie mit Kosten pro Ausfalltag und
              stelle Maßnahmen im Paket dar.
            </p>
          </div>
        </div>

        {/* FAQ Schema.org (redundant zum globalen FAQ; belassen für Konsistenz) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      {/* Zusammenfassung */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            Wie zahlt regelmäßige Büroreinigung auf Gesundheit, Motivation und
            weniger Krankheitstage ein?
          </strong>{" "}
          Durch saubere Touchpoints, bessere IAQ und klare Team-Routinen. Mit
          einem schlanken Plan (täglich–wöchentlich–quartalsweise) und
          Monitoring (CO₂, Feedback) erzielst du schnell spürbare Effekte – und
          einen soliden Business-Case.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Bereit für weniger Krankheitstage und mehr Fokus?
          </h2>
          <p className="text-zinc-700 mb-4">
            Wir konzipieren deinen Reinigungs- und IAQ-Plan – pragmatisch,
            messbar, teamtauglich.
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

        {/* Pop-up (Modal) */}
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
              href="/magazin/reinigungsplan-buero-vorlage"
            >
              Reinigungsplan fürs Büro – Vorlage &amp; Best Practices
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/magazin/innenraumluft-verbessern-co2-monitoring"
            >
              Innenraumluft verbessern: CO₂-Monitoring &amp; Lüftung einfach
              erklärt
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/magazin/clean-desk-policy-psychologie"
            >
              Clean-Desk-Policy: Psychologie, Regeln, Kommunikation
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent}`}
              href="/magazin/desinfektion-im-buero-sinnvoll-oder-overkill"
            >
              Desinfektion im Büro: sinnvoll oder Overkill?
            </a>
          </li>
        </ul>
      </aside>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zur Büroreinigung
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
                <td className="p-3 font-medium text-zinc-900">Touchpoints</td>
                <td className="p-3 text-zinc-700">
                  Häufig berührte Flächen (z. B. Klinken, Knöpfe), die bei der
                  Reinigung Priorität haben.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  IAQ (Innenraumluftqualität)
                </td>
                <td className="p-3 text-zinc-700">
                  Qualität der Luft in Innenräumen; beeinflusst u. a.
                  Konzentration und Wohlbefinden.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">VOCs</td>
                <td className="p-3 text-zinc-700">
                  Flüchtige organische Verbindungen; können aus Reinigern,
                  Möbeln oder Duftstoffen stammen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Clean Desk</td>
                <td className="p-3 text-zinc-700">
                  Arbeitsflächen am Tagesende frei halten; erleichtert Reinigung
                  und mentalen Neustart.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Grundreinigung
                </td>
                <td className="p-3 text-zinc-700">
                  Periodische, intensivere Reinigung von schwer zugänglichen
                  Bereichen, Textilien und Oberflächen.
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
          <Image
            src={author.image}
            alt="Autorin"
            width={64}
            height={64}
            loading="lazy"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">{author.role}</div>
            <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
              LinkedIn-Profil
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className={accent} aria-hidden="true">
            →
          </span>
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Dr. Miriam Keller</strong> – Fachärztin für
            Arbeitsmedizin.
            <a
              href="https://www.linkedin.com/in/miriam-keller"
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
            Harvard T. H. Chan School of Public Health – Office air quality may
            affect employees&apos; cognition &amp; productivity (09.09.2021) –{" "}
            https://hsph.harvard.edu/news/office-air-quality-may-affect-employees-cognition-productivity/
          </li>
          <li>
            OSHA – Indoor Air Quality in Commercial and Institutional Buildings
            (Publikation 3430) –{" "}
            https://www.osha.gov/sites/default/files/publications/3430indoor-air-quality-sm.pdf
          </li>
          <li>
            BAuA – „Trockene Luft“: Literaturstudie zu den Auswirkungen auf die
            Gesundheit (Bericht Gd102) –{" "}
            https://www.baua.de/DE/Angebote/Publikationen/Berichte/Gd102.pdf
          </li>
          <li>
            DGUV Fachbereich Aktuell – Niedrige Luftfeuchte am Arbeitsplatz
            (13.07.2020) –{" "}
            https://publikationen.dguv.de/widgets/pdf/download/article/3876
          </li>
          <li>
            Die Techniker – Pressemitteilung „Krankenstand 2024 leicht
            gesunken“ (27.01.2025) –{" "}
            https://www.tk.de/presse/themen/praevention/gesundheitsstudien/krankenstand-2024-leicht-gesunken-2164486
          </li>
          <li>
            WIdO/AOK – Fehlzeiten-Report 2024 (PDF) –{" "}
            https://www.wido.de/fileadmin/Dateien/Dokumente/Publikationen_Produkte/Buchreihen/Fehlzeitenreport/wido_fzr2024_mitarbeiterbindung_krankheitsbed_fehlzeiten.pdf
          </li>
        </ul>
      </section>
    </article>
  );
}


