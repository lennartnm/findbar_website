// src/app/blog/b2b-blogging-101/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

const url = "https://www.findbar.info/blog/b2b-blogging-101";
const title =
  "B2B-Blogging 101: Warum ein Unternehmensblog heute Pflicht ist – und wie du startest";
const description =
  "Verstehe in 10 Minuten, wie ein B2B-Blog Sichtbarkeit schafft, Vertrauen aufbaut und planbar Leads generiert – inklusive Formaten, KPIs und Schritt-für-Schritt-Start.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url,
    title,
    description,
    locale: "de_DE",
    images: [
      {
        url: "/content-creation-im-b2b.jpg",
        width: 1600,
        height: 600,
        alt: "Illustration: Content wird zu Umsatz im B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/content-creation-im-b2b.jpg"],
  },
};

const author = {
  name: "Lennart Niehausmeier",
  role: "Digital Growth Specialist & Gründer von findbar",
  image: "/lennart-niehausmeier.webp",
  linkedin: "https://www.linkedin.com/in/lennart-niehausmeier/",
};

const publisher = {
  name: "Findbar",
  logo: "/src/app/icon.png",
  url: "https://www.findbar.info",
};

const accent = "text-emerald-700";

export default function Page() {
  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight">
          B2B-Blogging 101: Warum ein Unternehmensblog heute Pflicht ist (und
          wie du startest)
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          In diesem Leitfaden erfährst du verständlich, was ein guter
          B2B-Blog&nbsp;leistet, welche 5 Grundformate du brauchst und mit
          welchen Messgrößen du echten Business-Impact sichtbar machst.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-08-28">28.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/content-creation-im-b2b.jpg"
              />
              <img
                src="/content-creation-im-b2b.jpg"
                alt="Content wird zu Umsatz: So verwandelt ein B2B-Blog Aufmerksamkeit in Leads"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Illustration: Content wird zu Umsatz
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src={author.image}
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
      <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Ein B2B-Blog zahlt auf drei Business-Ziele ein: mehr Sichtbarkeit
            in Suchmaschinen, stärkeres Vertrauen durch Expertise und planbare
            Lead-Generierung entlang der Buyer Journey.
          </li>
          <li>
            Starte schlank mit 5 Grundformaten: Guide, Checkliste, Case, FAQ,
            Meinung. Jedes Format erfüllt einen klaren Job im Funnel.
          </li>
          <li>
            Du brauchst einen Themen- und Keyword-Cluster, einen 90-Tage-Plan
            sowie saubere Basics: Suchintention, interne Verlinkung, klare
            CTAs, Performance und Barrierefreiheit.
          </li>
          <li>
            Miss, was zählt: organischer Traffic, Engagement-Signale, qualifizierte
            Leads und Sales-Einfluss. Leite daraus Themen und Optimierungen ab.
          </li>
          <li>
            Veröffentlichen allein reicht nicht. Distribution, Repurposing und
            regelmäßige Updates bringen die Reichweite, die du dir wünschst.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-b2b-blogging">
              Was ist B2B-Blogging und was leistet es?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#warum-pflicht">
              Warum ein Unternehmensblog heute Pflicht ist
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#grundformate">
              Die 5 Grundformate, die funktionieren
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#so-startest-du">
              So startest du: Schritt für Schritt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#messgroessen">
              Messgrößen, die wirklich zählen
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#fehler-fixes">
              Häufige Fehler und schnelle Fixes
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#distribution">
              Distribution, Repurposing und Updates
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
              Kurzfazit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#glossar">
              Mini-Glossar
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-b2b-blogging" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Was ist B2B-Blogging und was leistet es?</h2>
        <p className="leading-relaxed">
          Ein B2B-Blog ist der zentrale Ort, an dem dein Unternehmen Probleme
          deiner Zielkunden erklärt, Lösungen in die Tiefe bringt und Vertrauen
          durch wiederkehrende Qualität aufbaut. Anders als Social-Posts oder
          Ads ist dein Blog ein dauerhaftes Asset: Artikel arbeiten langfristig
          für dich, werden gefunden, verlinkt und immer wieder gelesen. Das
          zahlt auf drei Dinge ein: Sichtbarkeit, Vertrauen und Leads.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-1">Sichtbarkeit</h3>
            <p className="text-zinc-700">
              Du deckst Suchintentionen entlang der Buyer Journey ab, baust
              Themen-Autorität auf und gewinnst stetig organischen Traffic.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-1">Vertrauen</h3>
            <p className="text-zinc-700">
              Du demonstrierst Expertise mit klaren Definitionen, nachvollziehbaren
              Prozessen und ehrlichen Vergleichen inklusive Grenzen und Trade-offs.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-1">Leads</h3>
            <p className="text-zinc-700">
              Mit relevanten CTAs, Content-Upgrades und Formularen verwandelst
              du Aufmerksamkeit in qualifizierte Anfragen.
            </p>
          </div>
        </div>
      </section>

      <section id="warum-pflicht" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Warum ein Unternehmensblog heute Pflicht ist</h2>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="leading-relaxed">
            Kaufentscheidungen im B2B sind komplex, dauern lange und binden
            mehrere Stakeholder. Sie beginnen häufig mit Recherche. Wer in
            dieser Phase hilfreiche, glaubwürdige Antworten liefert, schafft
            frühzeitig Präferenz. Dein Blog ist die planbare Grundlage dafür.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">SEO als Compound-Effekt</h3>
            <p className="text-zinc-700">
              Jeder hochwertige Artikel erweitert deinen Themen-Cluster. Mit
              sauberer interner Verlinkung stärkst du wichtige Pillar-Seiten.
              So wächst Sichtbarkeit verlässlich – nicht sprunghaft.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Thought Leadership, die man nachprüfen kann</h3>
            <p className="text-zinc-700">
              Zeige Methoden, Datenpunkte und echte Beispiele aus Projekten.
              Transparenz erzeugt Vertrauen – Marketing und Fachabteilung ziehen
              an einem Strang.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Planbare Pipeline</h3>
            <p className="text-zinc-700">
              Mit klaren CTA-Mustern (Demo, Checkliste, Template, Beratung) und
              Lead-Routing ins CRM wird Content zu messbarem Deal-Einfluss.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Employer Branding inklusive</h3>
            <p className="text-zinc-700">
              Gute Inhalte zeigen Kultur und Kompetenz. Sie ziehen Bewerber an,
              die zu deiner Arbeitsweise passen.
            </p>
          </div>
        </div>
      </section>

      <section id="grundformate" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Die 5 Grundformate, die funktionieren</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Guide</h3>
            <p className="text-zinc-700">
              Schritt-für-Schritt-Erklärungen zu Kernproblemen deiner ICP. Ziel:
              Verständnis und Orientierung. Beispiel-Themen:{" "}
              <em>B2B-Blog erstellen Schritt für Schritt</em>,{" "}
              <em>Content-Plan in 90 Tagen</em>.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Checkliste</h3>
            <p className="text-zinc-700">
              Kompakte Prüf- und To-do-Listen für Qualitätssicherung. Ideal als
              PDF-Download mit E-Mail-Opt-in.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Case</h3>
            <p className="text-zinc-700">
              Konkrete Ergebnisse aus Projekten. Struktur: Ausgangslage, Ansatz,
              Umsetzung, Resultate, Learnings. Kein Marketing-Sprech, sondern
              Zahlen und Prozess.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">FAQ</h3>
            <p className="text-zinc-700">
              Präzise Antworten auf häufige Einwände und Detailfragen. Perfekt,
              um Sales zu entlasten und Suchintentionen mit klarer Sprache zu
              bedienen.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5 sm:col-span-2">
            <h3 className="font-semibold">Meinung</h3>
            <p className="text-zinc-700">
              Pointierte Perspektiven zu Trends und Best Practices. Zeigt Haltung
              und Positionierung. Wichtig: fundieren, nicht polarisieren.
            </p>
          </div>
        </div>

        {/* Bild 1 – volle Breite, 16:6 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/firmengebaude.jpg" />
              <img
                loading="lazy"
                src="/firmengebaude.jpg"
                alt="Moderner Firmenkomplex als Symbol für professionelle Unternehmenskommunikation"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Dein Blog als Schaufenster: Expertise sichtbar machen, bevor Sales
            ins Gespräch kommt.
          </figcaption>
        </figure>
      </section>

      <section id="so-startest-du" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">So startest du: Schritt für Schritt</h2>

        <div className="grid gap-6 sm:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-zinc-200 p-5">
            <ol className="list-decimal ml-5 space-y-3">
              <li>
                <strong>Ziele definieren:</strong> Welche Metriken willst du
                bewegen? Beispielsweise mehr qualifizierte Demo-Anfragen aus
                organischem Traffic.
              </li>
              <li>
                <strong>ICP &amp; Journey schärfen:</strong> Entscheider,
                Anwender, IT – wer recherchiert wann zu welchem Problem? Notiere
                Trigger-Ereignisse und typische Einwände.
              </li>
              <li>
                <strong>Themen- und Keyword-Cluster bauen:</strong> Ein
                Pillar-Thema (z.&nbsp;B. <em>B2B-Blog</em>) plus 10–20
                unterstützende Unterthemen. Leite Suchintention, Fragen und
                Synonyme ab. Beispiele für Long-Tail:{" "}
                <em>B2B-Blog Ideen für Industrieunternehmen</em>,{" "}
                <em>Redaktionsplan Vorlage B2B</em>,{" "}
                <em>Thought Leadership Beispiele</em>.
              </li>
              <li>
                <strong>Redaktionsplan für 90 Tage:</strong> Wöchentlich ein
                Stück Content, abwechselnd Guide, Checkliste, Case, FAQ,
                Meinung. Zuständigkeiten und Deadlines klar halten.
              </li>
              <li>
                <strong>Produktion vereinfachen:</strong> Outline, Quellen,
                Interview mit Fachexperten, Draft, Review, Lektorat, Freigabe.
                Jede Phase bekommt ein kurzes Checklist-Kriterium.
              </li>
              <li>
                <strong>Onpage-Basics:</strong> klare Headlines, Meta-Daten,
                strukturierte Daten, barrierefreie Medien, interne Verlinkung,
                saubere Ladezeiten, mobile Darstellung, klare CTAs.
              </li>
              <li>
                <strong>Distribution:</strong> Newsletter, LinkedIn, Sales-Enablement,
                Communities, Slide-Decks, Webinare. Wiederverwende Kernaussagen
                als Snippets.
              </li>
            </ol>
          </div>

          <aside className="rounded-xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold mb-2">Mini-Checkliste Veröffentlichung</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Suchintention getroffen</li>
              <li>Einzigartige Beispiele integriert</li>
              <li>Interne Links gesetzt</li>
              <li>Ein klarer CTA je Abschnitt</li>
              <li>OG-Bild &amp; Meta-Daten gepflegt</li>
              <li>Barrierefreie Alt-Texte</li>
            </ul>
          </aside>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            Wer im B2B Vertrauen gewinnen will, muss zuerst generös mit Wissen
            sein. Ein Blog macht Expertise sichtbar, wiederauffindbar und für
            Sales nutzbar – jeden Tag.
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Lennart Niehausmeier, direktes Zitat
          </figcaption>
        </figure>
      </section>

      <section id="messgroessen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Messgrößen, die wirklich zählen</h2>
        <p className="leading-relaxed">
          Wähle wenige, aussagekräftige KPIs und verbinde sie sauber mit
          Quellen wie Web-Analytics, Search Console und CRM. Entscheidend ist
          die Entwicklung im Zeitverlauf und der Beitrag zur Pipeline.
        </p>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-6">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">KPI</th>
                <th className="text-left font-semibold p-3">Definition</th>
                <th className="text-left font-semibold p-3 w-56">Zielwert/Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Organischer Traffic</td>
                <td className="p-3 text-zinc-700">
                  Sitzungen aus unbezahlter Suche auf Blog-Artikel und Pillar-Seiten.
                </td>
                <td className="p-3 text-zinc-700">stetiges Wachstum je Monat</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Engagement-Rate</td>
                <td className="p-3 text-zinc-700">
                  Kombination aus Scroll-Tiefe, Verweildauer und Interaktionen
                  wie Klicks auf interne Links oder Sprungmarken.
                </td>
                <td className="p-3 text-zinc-700">Verbesserung je Update</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Lead-Konversionsrate
                </td>
                <td className="p-3 text-zinc-700">
                  Leads geteilt durch Sitzungen der relevanten Artikel. Klarer
                  CTA und passendes Angebot sind Schlüsselfaktoren.
                </td>
                <td className="p-3 text-zinc-700">kontinuierliche Steigerung</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Influenced Pipeline</td>
                <td className="p-3 text-zinc-700">
                  Anteil der Opportunities, in denen Blog-Besuche als Touchpoints
                  auftauchen.
                </td>
                <td className="p-3 text-zinc-700">sichtbarer Anteil an Deals</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Formeln &amp; Auswertung</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Lead-Rate:</strong> Leads ÷ Sitzungen je Artikel.
              </li>
              <li>
                <strong>CTR CTA:</strong> CTA-Klicks ÷ Seitenaufrufe.
              </li>
              <li>
                <strong>Artikel-ROI:</strong> attributable Pipeline − Kosten
                (Produktion, Distribution).
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Qualitative Signale</h3>
            <p className="text-zinc-700">
              Kommentare aus Sales-Gesprächen, Antworten auf Newsletter, geteilte
              Snippets auf LinkedIn und Erwähnungen in Communities.
            </p>
          </div>
        </div>

        {/* Bild 2 – volle Breite, 16:6 */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/contentproduktion-im-unternehmen-nimmt-zeit-in-anspruch.jpg"
              />
              <img
                loading="lazy"
                src="/contentproduktion-im-unternehmen-nimmt-zeit-in-anspruch.jpg"
                alt="Contentproduktion im Unternehmen braucht Zeit und Struktur"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Content entsteht im Team: klare Zuständigkeiten, feste Zeitfenster
            und eine saubere Vorlage verkürzen die Produktionszeit.
          </figcaption>
        </figure>
      </section>

      <section id="fehler-fixes" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Häufige Fehler und schnelle Fixes</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold mb-2">Fehler</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Themen ohne Suchintention</li>
              <li>Zu breite Stichworte statt Long-Tail</li>
              <li>Unklare CTAs oder zu viele Aktionen</li>
              <li>Keine interne Verlinkung</li>
              <li>Einmal veröffentlichen, nie aktualisieren</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Fixes</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Recherche zu Pains, Fragen, Synonymen</li>
              <li>Cluster aus Pillar plus 10–20 Unterthemen</li>
              <li>Ein klarer CTA pro Abschnitt</li>
              <li>Breadcrumbs und kontextuelle Links</li>
              <li>Quartalsweise Refresh pro Top-Seite</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="distribution" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Distribution, Repurposing und Updates</h2>
        <p className="leading-relaxed">
          Reichweite entsteht durch wiederholte, kontextgerechte Ausspielung.
          Plane Distribution gleich mit der Produktion ein und verknüpfe Artikel
          mit deinen Kanälen.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Distribution</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Newsletter Teaser mit Deep-Link</li>
              <li>LinkedIn Post-Serie mit Kernzitaten</li>
              <li>Sales-Mail-Vorlage mit Ressourcen</li>
              <li>Community-Thread mit How-to</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Repurposing</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Guide → Checkliste &amp; Slides</li>
              <li>Case → Webinar &amp; Snippets</li>
              <li>FAQ → Support-Makros</li>
              <li>Meinung → Podcast-Clip</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5">
            <h3 className="font-semibold">Updates</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Quartals-Review der Top 10 Seiten</li>
              <li>Frische Beispiele und Zahlen ergänzen</li>
              <li>Interne Links auf neue Inhalte setzen</li>
              <li>Meta-Daten und Snippets justieren</li>
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
              Wie oft sollte ein B2B-Unternehmen bloggen?
            </h3>
            <p>
              Konstanz schlägt Frequenz. Ein hochwertiger Artikel pro Woche ist
              für die meisten Teams realistisch. Entscheidend ist die Qualität
              und dass die Themen deinen Cluster stärken.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Team-Rollen brauche ich für einen Blog?
            </h3>
            <p>
              Redaktion/SEO für Recherche und Struktur, Fachexperten für Tiefe,
              Texter für Lesbarkeit, Design für Medien und jemand, der das
              Projekt managt und veröffentlicht.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ab wann rechnet sich ein Unternehmensblog?
            </h3>
            <p>
              Erste Rankings kommen oft nach wenigen Wochen, stabile Effekte
              nach einigen Monaten. Mit jedem neuen Beitrag verstärkt sich der
              Compound-Effekt deines Themen-Clusters.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Brauche ich zwingend Cases?</h3>
            <p>
              Ja, denn sie liefern Belege und Kontext. Es müssen keine
              „Namen-Dropper“ sein – wichtig sind Problem, Vorgehen, Ergebnis
              und Learnings.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was sind gute CTAs in B2B-Artikeln?
            </h3>
            <p>
              Je nach Funnel-Stufe: Checkliste, Template, Demo, Beratung,
              Produkt-Tour, Webinar. Ein CTA pro Abschnitt reicht – dafür
              auffällig, relevant und leicht klickbar.
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
                  name: "Wie oft sollte ein B2B-Unternehmen bloggen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Konstanz schlägt Frequenz. Ein hochwertiger Artikel pro Woche ist für die meisten Teams realistisch. Entscheidend ist die Qualität und dass die Themen deinen Cluster stärken.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Team-Rollen brauche ich für einen Blog?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Redaktion/SEO, Fachexperten, Texter, Design und eine verantwortliche Person für Projektmanagement und Veröffentlichung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ab wann rechnet sich ein Unternehmensblog?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Erste Rankings nach Wochen, stabile Effekte nach Monaten. Mit jedem Beitrag verstärkt sich der Compound-Effekt deines Themen-Clusters.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Brauche ich zwingend Cases?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja. Case-Studies liefern Belege und Kontext: Problem, Vorgehen, Ergebnis und Learnings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was sind gute CTAs in B2B-Artikeln?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Je nach Funnel-Stufe: Checkliste, Template, Demo, Beratung, Produkt-Tour oder Webinar. Ein klarer CTA pro Abschnitt.",
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
            Frage des Artikels: Warum ist ein B2B-Blog heute Pflicht – und wie
            startest du richtig
          </strong>{" "}
          Antwort: Ein Blog ist der Hebel, um stetige Sichtbarkeit, Vertrauen
          und qualifizierte Leads zu erzeugen. Starte fokussiert mit den fünf
          Formaten, arbeite mit Themen-Clustern und miss, was wirklich zählt.
          So wird Content zum Umsatztreiber.
        </p>
      </section>

      {/* CTA ohne Formular, Button führt zu findbar.info */}
      <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel für dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme
            B2B-Leser für dein Sales-Team.
          </p>

          <div className="mx-auto max-w-xl">
            <a
              href="https://www.findbar.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
              aria-label="Zu findbar.info wechseln (öffnet in neuem Tab)"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section id="glossar" className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu B2B-Blogging
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
                <td className="p-3 font-medium text-zinc-900">ICP</td>
                <td className="p-3 text-zinc-700">
                  Ideal Customer Profile – Beschreibung der Unternehmen, für die
                  dein Angebot am besten passt.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Pillar-Seite</td>
                <td className="p-3 text-zinc-700">
                  Zentrale Seite eines Themen-Clusters, die ein Thema umfassend
                  abdeckt und auf Detailartikel verlinkt.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Long-Tail-Keyword</td>
                <td className="p-3 text-zinc-700">
                  Spezifische Suchphrase mit geringerer Konkurrenz und klarer
                  Suchintention, z.&nbsp;B. „B2B-Blog Ideen für Industrie“.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">CTA</td>
                <td className="p-3 text-zinc-700">
                  Call to Action – konkretisierte Handlungsaufforderung wie
                  „Demo anfragen“ oder „Checkliste herunterladen“.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Repurposing</td>
                <td className="p-3 text-zinc-700">
                  Weiterverwendung eines Inhalts in anderen Formaten, etwa als
                  Slides, Video oder Newsletter-Serie.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Influenced Pipeline</td>
                <td className="p-3 text-zinc-700">
                  Anteil der Vertriebs-Opportunities, die Content-Touchpoints
                  beinhalten.
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
            src="/lennart-niehausmeier.webp"
            alt="Autor"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">
              {author.role}. Fokus: B2B-Content, SEO, nutzerzentriertes Wachstum.
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
            Überprüft von: <strong>Team findbar</strong> – Redaktion und SEO.
            <a
              href="https://www.findbar.info"
              className={`ml-2 hover:underline ${accent}`}
            >
              Website
            </a>
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Content Marketing Institute – B2B Content Marketing Benchmarks,
            Budgets, and Trends 2025:{" "}
            <a
              href="https://www.contentmarketinginstitute.com/"
              className={accent}
            >
              https://www.contentmarketinginstitute.com/
            </a>
          </li>
          <li>
            HubSpot – State of Marketing Report:{" "}
            <a href="https://www.hubspot.com/research" className={accent}>
              https://www.hubspot.com/research
            </a>
          </li>
          <li>
            Edelman Trust Barometer – Business &amp; Trust Insights:{" "}
            <a href="https://www.edelman.com/trust" className={accent}>
              https://www.edelman.com/trust
            </a>
          </li>
          <li>
            Google Search Central – SEO-Starter-Guide:{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
              className={accent}
            >
              https://developers.google.com/search/docs/fundamentals/seo-starter-guide
            </a>
          </li>
          <li>
            GA4-Ressourcen von Google Analytics:{" "}
            <a href="https://support.google.com/analytics" className={accent}>
              https://support.google.com/analytics
            </a>
          </li>
        </ul>
      </section>

      {/* Article & Organization Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            inLanguage: "de-DE",
            image: "/content-creation-im-b2b.jpg",
            datePublished: "2025-08-28",
            dateModified: "2025-08-28",
            author: {
              "@type": "Person",
              name: author.name,
              url: author.linkedin,
            },
            publisher: {
              "@type": "Organization",
              name: publisher.name,
              url: publisher.url,
              logo: {
                "@type": "ImageObject",
                url: "https://www.findbar.info/src/app/icon.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Findbar",
            url: "https://www.findbar.info",
            email: "mailto:lennart@findbar.info",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Am Rabenecksiek 5",
              postalCode: "32139",
              addressLocality: "Spenge",
              addressCountry: "DE",
            },
            logo: "https://www.findbar.info/src/app/icon.png",
            sameAs: [author.linkedin],
          }),
        }}
      />
    </article>
  );
}
