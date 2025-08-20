// src/app/blog/b2b-sales-vertrauen/page.tsx
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const accent = "text-emerald-700";
  const canonical = "https://example.com/blog/b2b-sales-vertrauen";
  const title =
    "B2B Sales & sinkendes Vertrauen: Wie du mit Vertrauensvorschuss schon vor dem Erstgespräch deine Closing-Rate steigerst";
  const description =
    "Warum Vertrauen im B2B-Vertrieb sinkt – und wie du mit systematischem Vertrauensvorschuss vor dem Erstgespräch mehr Termine konvertierst und mehr Deals schließt.";
  const publishDate = "2025-08-20";

  const author = {
    name: "Lennart Schulze",
    role: "B2B Growth Strategist",
    image: "/autor-lennart.webp",
    linkedin: "https://www.linkedin.com/in/lennart-schulze/",
  };

  const publisher = {
    name: "Findbar – B2B Growth Studio",
    url: "https://example.com",
    logo: "https://example.com/logo.svg",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
        />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
        />

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          // no self-closing script in React
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              inLanguage: "de",
              author: {
                "@type": "Person",
                name: author.name,
                url: author.linkedin,
              },
              datePublished: publishDate,
              dateModified: publishDate,
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
              publisher: {
                "@type": "Organization",
                name: publisher.name,
                url: publisher.url,
                logo: {
                  "@type": "ImageObject",
                  url: publisher.logo,
                },
              },
              mainEntityOfPage: canonical,
            }),
          }}
        ></script>

        {/* Company / Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: publisher.name,
              url: publisher.url,
              logo: publisher.logo,
              sameAs: [author.linkedin],
            }),
          }}
        ></script>
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
            B2B Sales &amp; sinkendes Vertrauen: Vertrauensvorschuss vor dem
            Erstgespräch als Growth-Hebel
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Käufer:innen sind skeptischer denn je. In diesem Leitfaden zeige ich
            dir, wie du noch vor dem ersten Call einen{" "}
            <strong>systematischen Vertrauensvorschuss</strong> aufbaust – mit
            Thought Leadership, Social Proof, Warm Intros, einem{" "}
            <em>Digital Sales Room</em> und einem <em>Mutual Action Plan</em> –
            damit mehr Erstgespräche stattfinden und deine Closing-Rate sichtbar
            steigt.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-20">20.08.2025</time>
            {" · "}Lesedauer:{" "}
            <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  loading="eager"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Handshake zwischen zwei Geschäftspartnern als Symbol für Vertrauen im B2B-Vertrieb"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Vertrauen ist die Währung des B2B-Vertriebs
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src="/autor-lennart.webp"
              alt="Autor: Lennart Schulze"
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
              <strong>Sinkendes Vertrauen</strong>: B2B-Buyer bevorzugen
              selbstgesteuerte Recherche und sind risikoaverser – Vertrauen muss{" "}
              <em>vor</em> dem Erstgespräch sichtbar gemacht werden (z. B. mit
              Thought Leadership, glaubwürdigen Referenzen, klaren
              Erwartungen).
            </li>
            <li>
              <strong>Vertrauensvorschuss</strong> heißt: Du reduzierst
              wahrgenommenes Risiko, lieferst Kontext &amp; Beweise und
              signalisierst Fairness –{" "}
              <span className="font-medium">bevor</span> ihr miteinander
              sprecht.
            </li>
            <li>
              <strong>Die 7 Bausteine</strong>: Brand &amp; Thought Leadership,
              Social Proof, Warm Introductions, Digital Sales Room, Mutual
              Action Plan, Risiko-Paket (Security/Compliance), klare Agenda.
            </li>
            <li>
              <strong>Sofort umsetzbar</strong>: Sende vorab ein kurzes
              Kontext-Video, einen passenden Case mit Zahlen, eine
              Erwartungs-Agenda und einen MAP-Teaser. Erscheine als Trusted
              Advisor – nicht als Pitcher.
            </li>
            <li>
              <strong>Messung</strong>: Meeting-Show-Up-Rate, Vorab-Engagement
              (DSR-Views), Zeit bis „MAP akzeptiert“, Opportunity-Win-Rate,
              Cycle-Time.
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
                href="#problem-trust"
              >
                Warum Vertrauen im B2B-Sales sinkt – und was das für dich
                bedeutet
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#vertrauensvorschuss"
              >
                Was ist „Vertrauensvorschuss“ – und wie funktioniert er?
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#bausteine"
              >
                Die 7 Bausteine für Vertrauen vor dem Erstgespräch
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#playbooks"
              >
                Playbooks: Outbound, Inbound, RFP – Schritt-für-Schritt
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#metriken"
              >
                Metriken: So misst du den Effekt auf die Closing-Rate
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#roadmap"
              >
                30-Tage-Roadmap zur Umsetzung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#fehler"
              >
                Häufige Fehler &amp; wie du sie vermeidest
              </a>
            </li>
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="problem-trust">
          <h2 className="text-2xl font-bold">
            Warum sinkt Vertrauen – und was heißt das für deinen Sales-Prozess?
          </h2>
          <p className="leading-relaxed">
            B2B-Kaufgruppen recherchieren heute überwiegend selbst, vergleichen
            Anbieter anonym und treffen intern „defensive“ Safe-Choice-Entscheidungen.
            Analystenberichte und Thought Leadership prägen dabei den ersten
            Eindruck – nicht dein Pitch. Studien zeigen, dass viele B2B-Buyer
            eine <em>rep-freie</em> Erfahrung bevorzugen, rein digitale Käufe
            aber deutlich öfter zu <strong>Kaufreue</strong> führen. Das heißt:
            Menschen wollen Selbstständigkeit <em>und</em> Sicherheit – beides
            lieferst du durch <strong>frühen Vertrauensaufbau</strong> vor dem
            Erstgespräch. (Quelle: Edelman Trust Barometer 2024; Gartner B2B
            Buying Report; Forrester Business Trust)
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-5 border-b md:border-b-0 md:border-r border-zinc-200">
                <h3 className="font-semibold mb-1">
                  Key Insight: Risiko dominiert
                </h3>
                <p className="text-zinc-700">
                  In Forrester-Daten geben viele B2B-Kaufende an, aus
                  Risikoaversion häufig die vermeintlich sicherste Option zu
                  wählen. Dein Job: wahrgenommenes Risiko senken – schon <em>vor</em> dem Call.
                </p>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">
                  Key Insight: Hybrid gewinnt
                </h3>
                <p className="text-zinc-700">
                  75 % bevorzugen rep-frei – doch rein digitale Käufe
                  bereuen viele. Ein <strong>hybrider</strong> Prozess aus
                  Self-Service + menschlicher Beratung schafft Vertrauen und
                  bessere Entscheidungen.
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
                  srcSet="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
                  alt="B2B-Team bei der Recherche – Selbstinformation vor dem ersten Sales-Call"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Die meisten Entscheidungen reifen, bevor du im Meeting bist – du
              musst <strong>vorher</strong> Vertrauen sichtbar machen.
            </figcaption>
          </figure>
        </section>

        <section id="vertrauensvorschuss" className="mt-12">
          <h2 className="text-2xl font-bold">
            Was ist „Vertrauensvorschuss“ – und wie funktioniert er?
          </h2>
          <p className="leading-relaxed">
            <strong>Vertrauensvorschuss</strong> bedeutet, dass die Käuferseite
            dir <em>vor</em> eurem ersten Gespräch grundlegende Kompetenz,
            Integrität und Fürsorge zutraut. Das erreichst du, indem du
            <em> sichtbare Beweise</em> für Kompetenz, Zuverlässigkeit und
            Fairness bereitstellst: echte Ergebnisse (Case Studies mit Zahlen),
            unabhängige Bestätigungen (z. B. Analyst-Erwähnungen), ein klares
            Erwartungsmanagement (Agenda, Zielbild) und <em>Signale der
            Zusammenarbeit</em> (z. B. ein gemeinsamer Fahrplan als Mutual
            Action Plan). So verschiebst du die Wahrnehmung vom „Vendor“ hin zum{" "}
            <strong>Trusted Advisor</strong>.
          </p>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Thought Leadership und klare Belege für Wirkung sind
              Vertrauens-Abkürzungen. Wer sie vor dem Erstgespräch liefert,
              wird eher zu relevanten Gesprächen eingeladen – und gewinnt
              bevorzugt die Shortlist.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Zusammenfassung zentraler Befunde aus dem Edelman &amp;
              LinkedIn B2B Thought Leadership Impact Report 2024
              (indirektes Zitat)
            </figcaption>
          </figure>
        </section>

        <section id="bausteine" className="mt-12">
          <h2 className="text-2xl font-bold">
            Die 7 Bausteine für Vertrauen <span className="whitespace-nowrap">vor dem Erstgespräch</span>
          </h2>

          <div className="mt-6 space-y-8">
            {/* 1 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                1) Brand &amp; Thought Leadership: werde im Kopf gewählt
              </h3>
              <p className="text-zinc-700">
                In vielen Märkten sind nur ~5 % der Zielgruppe gerade
                kaufbereit. Brand-Building und <em>echtes</em> Thought
                Leadership sorgen dafür, dass du im richtigen Moment
                erinnert wirst – und dass man dir zutraut, komplexe Probleme zu
                lösen. Nutze prägnante, problemfokussierte Artikel, kurze
                Research-Snippets und datenbasierte POVs, die Kaufentscheidungen{" "}
                <em>vorstrukturieren</em>.
              </p>
              <ul className="mt-3 list-disc ml-5 text-sm">
                <li>Fokussiere Kernprobleme, nicht Produktfeatures.</li>
                <li>
                  Zeige methodische Exzellenz (Frameworks, Modelle, Benchmarks).
                </li>
                <li>
                  Distribuiere über LinkedIn &amp; Newsletter – ohne Gating,
                  wenn möglich.
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                2) Social Proof, der zählt: Beweise statt Behauptungen
              </h3>
              <div className="mt-3">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <div className="text-sm font-medium">Case-KPIs</div>
                    <div className="text-zinc-700 text-sm">
                      „+38 % SQL-Rate in 90 Tagen“ – mit Methode, Kontext &
                      baseline.
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <div className="text-sm font-medium">3rd-Party-Trust</div>
                    <div className="text-zinc-700 text-sm">
                      Erwähnungen/Reports (Analysten), Zertifizierungen,
                      Sicherheits-Badges – verlinkt, prüfbar.
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <div className="text-sm font-medium">
                      Stimmen aus der Praxis
                    </div>
                    <div className="text-zinc-700 text-sm">
                      Video-Testimonials, Referenzkontakte (optional), Logos –
                      <em>passend</em> zum Use Case der Person.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                3) Warm Introductions vor Cold Outreach
              </h3>
              <p className="text-zinc-700">
                Ein warmes Intro über gemeinsame Kontakte oder bestehende
                Kund:innen überträgt <em>geliehenes Vertrauen</em>. Baue
                dafür eine kleine Referral-Motion auf: kurze Intro-Vorlage,
                Give-Get für Partner, klare ICP/Trigger-Events für relevante
                Empfehlungen.
              </p>
              <div className="mt-3 rounded-xl border border-zinc-200 p-4 bg-white">
                <div className="text-sm font-semibold mb-2">
                  Mini-Vorlage für ein Intro-Snippet (zum Weiterleiten)
                </div>
                <pre className="whitespace-pre-wrap text-sm">
                  {`Hey {Name}, wir arbeiten gerade mit {Firma X} daran, {Problem Y} zu lösen.
In 12 Wochen haben wir {konkretes Ergebnis}. Ich denke, das passt auch zu {Firma Z}.
Wärst du offen für ein kurzes Intro?`}
                </pre>
              </div>
            </div>

            {/* 4 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                4) Digital Sales Room (DSR): dein „Trust Hub“ vor dem Call
              </h3>
              <p className="text-zinc-700">
                Sammle alle relevanten Vertrauenssignale auf einer
                personalisierten Microsite: 90-Sekunden-Video, Agenda,
                Team-Bios (LinkedIn), 1–2 Cases, Sicherheits-One-Pager,
                ROI/TCO-Kalkulator und ein{" "}
                <em>MAP-Teaser</em> mit Meilensteinen bis zur
                Entscheidung. So fühlt sich das Erstgespräch wie ein
                <strong>Fortschritt</strong> an – nicht wie ein Risiko.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                5) Mutual Action Plan (MAP): gemeinsam Klarheit schaffen
              </h3>
              <p className="text-zinc-700">
                Ein MAP ist ein gemeinsam gepflegter Fahrplan inklusive
                Meilensteinen, Verantwortlichkeiten und Entscheidungs­kriterien.
                Stelle ihn bereits <em>vor</em> dem Erstgespräch in Aussicht und
                bringe eine einfache Vorlage mit. Das senkt Unsicherheit und
                beschleunigt komplexe Deals.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden border border-zinc-200">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="text-left font-semibold p-2">Meilenstein</th>
                      <th className="text-left font-semibold p-2">Owner</th>
                      <th className="text-left font-semibold p-2">Fällig</th>
                      <th className="text-left font-semibold p-2">Erfolgskriterium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Problem-/Impact-Alignment</td>
                      <td className="p-2">Buying Champion</td>
                      <td className="p-2">KW 35</td>
                      <td className="p-2">Gemeinsame Problemformulierung (1-Pager)</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Value Case (ROI/TCO)</td>
                      <td className="p-2">Vendor SE</td>
                      <td className="p-2">KW 36</td>
                      <td className="p-2">Bestätigte Annahmen &amp; Zahlen</td>
                    </tr>
                    <tr className="border-t border-zinc-200">
                      <td className="p-2">Security/Legal Review</td>
                      <td className="p-2">Procurement</td>
                      <td className="p-2">KW 37</td>
                      <td className="p-2">Checklist „grün“</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                6) Risiko reduzieren: Security, Compliance, Fairness
              </h3>
              <p className="text-zinc-700">
                Schicke früh ein <em>Risiko-Paket</em>: Security-Factsheet,
                Datenverarbeitung (DSGVO), Architektur-Skizze, klare
                Offboarding-Regeln, Referenzen aus regulierten Branchen. Das
                zeigt: Ihr habt nichts zu verstecken – und seid vorbereitet.
              </p>
            </div>

            {/* 7 */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold text-lg">
                7) Agenda &amp; Erwartungsmanagement: Transparenz schlägt Taktik
              </h3>
              <p className="text-zinc-700">
                Versende vorab eine <strong>2-Punkte-Agenda</strong> (Ziel,
                Entscheidungskriterien) plus Option auf „No-Pitch-Call“. So
                fühlen sich Buyer ernst genommen und steigen leichter ein.
              </p>
            </div>
          </div>

          {/* Bild 2 */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1600&auto=format&fit=crop"
                  alt="Videocall: Vertrauensaufbau durch klare Agenda und offene Kommunikation"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="text-sm text-zinc-600">
              Kurzes Kontext-Video + Agenda im Vorfeld senken Hürden und
              erhöhen Show-Up-Rates.
            </figcaption>
          </figure>
        </section>

        <section id="playbooks" className="mt-12">
          <h2 className="text-2xl font-bold">
            Playbooks: So setzt du Vertrauensvorschuss in typischen Szenarien um
          </h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">A) Outbound (kalter Erstkontakt)</h3>
              <ol className="list-decimal ml-5 text-zinc-700 space-y-1">
                <li>Warm-Intro prüfen (Netzwerk, Kund:innen, Partner).</li>
                <li>
                  Kurz-Mail mit Problem-Hypothese, 1 Beweis (Case-Zahl),{" "}
                  <em>30-Sek. Loom</em>, Link zum DSR-Snippet.
                </li>
                <li>No-Pitch-Option: „Sparring zur Problemvalidierung“.</li>
                <li>Erstgespräch: 15 min Problem-Alignment, 10 min MAP-Teaser.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">
                B) Inbound (Demo-Anfrage, mid-funnel)
              </h3>
              <ol className="list-decimal ml-5 text-zinc-700 space-y-1">
                <li>Auto-Reply mit Agenda-Vorschlag &amp; DSR-Link.</li>
                <li>
                  Passende Case Study + ROI-Mini-Rechner (3 Inputs, 1 Output).
                </li>
                <li>Team-Bios (LinkedIn), Security-One-Pager.</li>
                <li>Im Erstcall gemeinsam MAP skizzieren und festhalten.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 md:col-span-2">
              <h3 className="font-semibold">C) RFP / Ausschreibung</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>
                  Vorab „<strong>Decision-Brief</strong>“: Klarheit zu Kriterien,
                  Risiken, Erfolgsmessung.
                </li>
                <li>
                  Interaktive <strong>Evidence-Library</strong> (Zertifikate,
                  Reports, Referenzen) im DSR.
                </li>
                <li>
                  Senior-Sponsor früh sichtbar machen (Executive Alignment).
                </li>
                <li>MAP als Anhang: Meilensteine bis Go-Live.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-1">Warm Intro vs. Cold Outreach</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="text-left font-semibold p-2">Aspekt</th>
                    <th className="text-left font-semibold p-2">Warm Intro</th>
                    <th className="text-left font-semibold p-2">Cold Outreach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-emerald-200">
                    <td className="p-2">Vertrauen zu Beginn</td>
                    <td className="p-2">geliehen &amp; hoch</td>
                    <td className="p-2">null bis gering</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="p-2">Relevanz-Wahrnehmung</td>
                    <td className="p-2">„für mich kuratiert“</td>
                    <td className="p-2">„Standard-Pitch“</td>
                  </tr>
                  <tr className="border-t border-emerald-200">
                    <td className="p-2">Wahrsch. auf Erstcall</td>
                    <td className="p-2">deutlich höher</td>
                    <td className="p-2">niedriger</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-zinc-700">
              Tipp: Baue ein Referral-Programm auf (Partner, Kund:innen, Alumni)
              und halte eine schlanke Intro-Vorlage bereit.
            </p>
          </div>
        </section>

        <section id="metriken" className="mt-12">
          <h2 className="text-2xl font-bold">
            Metriken: Wie wirkt Vertrauensvorschuss auf die Closing-Rate?
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Leading Indicators</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Show-Up-Rate Erstgespräch</li>
                <li>DSR-Engagement (Views, Zeit, Assets geöffnet)</li>
                <li>„Agenda akzeptiert“-Antworten</li>
                <li>„MAP angenommen“ innerhalb 7 Tage</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Lagging Indicators</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Opportunity-Win-Rate (pro Segment)</li>
                <li>Sales-Cycle-Dauer (Median)</li>
                <li>Average Deal Size / Margen</li>
                <li>Time-to-Value nach Go-Live</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-zinc-700">
            Richte einfache Dashboards ein (CRM + DSR-Analytics). Vergleiche
            Kohorten <em>mit</em> vs. <em>ohne</em> Vertrauenspaket vor dem
            Erstgespräch. Schon kleine Steigerungen bei Show-Up- und
            MAP-Akzeptanz schlagen deutlich auf Closing-Rate und Cycle-Time
            durch.
          </p>
        </section>

        <section id="roadmap" className="mt-12">
          <h2 className="text-2xl font-bold">Deine 30-Tage-Roadmap</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Woche 1: Assets &amp; Story</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>1 Case mit <em>harten Zahlen</em> finalisieren.</li>
                <li>Security-/Compliance-One-Pager erstellen.</li>
                <li>Agenda-Vorlage &amp; MAP-Template definieren.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Woche 2: Digital Sales Room</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>Microsite mit Video, Bios, Case, ROI-Mini-Tool.</li>
                <li>Tracking für DSR-Events aktivieren.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Woche 3: Warm-Intro-Engine</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>Referral-Liste &amp; Intro-Vorlagen aufsetzen.</li>
                <li>Partner-Give-Get definieren (z. B. Co-Marketing).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Woche 4: Enablement &amp; Test</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>Team-Training „No-Pitch-First-Call“.</li>
                <li>AB-Test mit/ohne Vertrauenspaket starten.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fehler" className="mt-12">
          <h2 className="text-2xl font-bold">
            Häufige Fehler – und bessere Alternativen
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold">Fehler</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>Gating von mageren PDFs („Leadgen“ ohne Wert).</li>
                <li>Feature-Demo im Erstcall ohne Problem-Alignment.</li>
                <li>
                  Keine <em>Belege</em> – nur Logos, keine Kennzahlen.
                </li>
                <li>Agenda fehlt, MAP kommt zu spät.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="font-semibold">Besser so</h3>
              <ul className="list-disc ml-5 text-zinc-700">
                <li>Wertvolle Inhalte frei zugänglich (Thought Leadership).</li>
                <li>No-Pitch-Option + 2-Punkte-Agenda versenden.</li>
                <li>Case-KPIs mit Methode &amp; Baseline.</li>
                <li>MAP-Teaser schon vor dem Erstgespräch.</li>
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
                Wie viel Material sollte ich vor dem Erstgespräch senden?
              </h3>
              <p>
                Maximal 3–5 hochrelevante Assets: 90-Sekunden-Video, Agenda,
                passender Case (mit Zahlen), Security-One-Pager und MAP-Teaser.
                Alles weitere in deinen Digital Sales Room.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Was, wenn ich noch keine großen Referenzen habe?
              </h3>
              <p>
                Starte mit <em>Beweis-Proxies</em>: Pilot-Ergebnisse,
                Benchmarks, Methoden-Transparenz, Zertifizierungen,
                Gründer-/Team-Track-Record. Wichtig ist Nachprüfbarkeit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie führe ich einen Mutual Action Plan ein, ohne pushy zu sein?
              </h3>
              <p>
                Positioniere den MAP als <em>Service</em>: „Damit wir intern
                schneller Klarheit bekommen – darf ich unseren Fahrplan kurz
                zeigen?“ Gemeinsam ausfüllen, Ownership benennen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Lohnt sich ein Warm-Intro-Programm wirklich?
              </h3>
              <p>
                Ja – geliehenes Vertrauen senkt Reibung. Halte Intro-Vorlagen
                bereit, biete Gegenwert (z. B. Co-Content) und bitte gezielt
                um Intros zu ICP-Accounts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche KPI belegen den Erfolg?
              </h3>
              <p>
                Vor allem: Show-Up-Rate, DSR-Engagement, MAP-Akzeptanz,
                Win-Rate, Cycle-Time. Vergleiche Kohorten mit/ohne
                Vertrauenspaket.
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
                    name: "Wie viel Material sollte ich vor dem Erstgespräch senden?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Maximal 3–5 hochrelevante Assets: 90-Sekunden-Video, Agenda, passender Case (mit Zahlen), Security-One-Pager und MAP-Teaser. Alles weitere in deinen Digital Sales Room.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Was, wenn ich noch keine großen Referenzen habe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nutze Beweis-Proxies: Pilot-Ergebnisse, Benchmarks, Methoden-Transparenz, Zertifizierungen, Gründer-/Team-Track-Record. Wichtig ist Nachprüfbarkeit.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Wie führe ich einen Mutual Action Plan ein, ohne pushy zu sein?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Positioniere den MAP als Service: „Damit wir intern schneller Klarheit bekommen – darf ich unseren Fahrplan kurz zeigen?“ Gemeinsam ausfüllen und Ownership benennen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Lohnt sich ein Warm-Intro-Programm wirklich?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ja – geliehenes Vertrauen senkt Reibung. Halte Intro-Vorlagen bereit, biete Gegenwert (z. B. Co-Content) und bitte gezielt um Intros zu ICP-Accounts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche KPI belegen den Erfolg?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Show-Up-Rate, DSR-Engagement, MAP-Akzeptanz, Win-Rate, Cycle-Time. Vergleiche Kohorten mit/ohne Vertrauenspaket.",
                    },
                  },
                ],
              }),
            }}
          ></script>
        </section>

        {/* Summary */}
        <section id="zusammenfassung" className="mt-14">
          <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
          <p className="leading-relaxed">
            <strong>
              Wie erhöhst du deine Closing-Rate in Zeiten sinkenden Vertrauens?
            </strong>{" "}
            Indem du <em>vor</em> dem Erstgespräch sichtbar Risiko reduzierst:
            mit starken Belegen (Case-Zahlen, Security), klarer Agenda,
            Thought-Leadership und einem gemeinsamen MAP. So wirst du als
            Trusted Advisor wahrgenommen – und gewinnst häufiger die Shortlist.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-2xl border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du deinen Vertrauensvorschuss systematisieren?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir bauen dir in 30 Tagen einen Digital Sales Room, MAP-Templates
              und eine Warm-Intro-Engine – damit mehr Erstgespräche stattfinden
              und mehr Deals schließen.
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
            ></a>

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
                href="/blog/mutual-action-plan"
              >
                Mutual Action Plan: Vorlage, Beispiele, Best Practices
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/digital-sales-room">
                Digital Sales Room: Der schnellste Vertrauensaufbau im B2B
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/warm-introductions">
                Warm Introductions: So baust du deine Referral-Engine
              </a>
            </li>
            <li>
              <a className={`hover:underline ${accent}`} href="/blog/b2b-thought-leadership">
                Thought Leadership, das wirklich Deals bewegt
              </a>
            </li>
          </ul>
        </aside>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu B2B-Vertrauen &amp; Closing-Rate
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
                  <td className="p-3 font-medium text-zinc-900">
                    Vertrauensvorschuss
                  </td>
                  <td className="p-3 text-zinc-700">
                    Vorweggenommene Glaubwürdigkeit durch Beweise, Referenzen
                    und Transparenz – noch vor dem Erstgespräch.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Digital Sales Room (DSR)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Personalisierte Microsite, die alle relevanten
                    Vertrauenssignale, Inhalte und nächsten Schritte bündelt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Mutual Action Plan (MAP)
                  </td>
                  <td className="p-3 text-zinc-700">
                    Gemeinsamer Fahrplan mit Meilensteinen, Verantwortlichen und
                    Erfolgskriterien – reduziert Unsicherheit und beschleunigt Entscheidungen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Social Proof</td>
                  <td className="p-3 text-zinc-700">
                    Externe Belege wie Case-KPIs, Kundenstimmen, Zertifikate oder
                    Analysten-Erwähnungen.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">
                    Trusted Advisor
                  </td>
                  <td className="p-3 text-zinc-700">
                    Rollenbild im B2B-Sales: Problemlöser und Co-Pilot statt
                    Vendor; fokus auf Risikoabbau und Mehrwert.
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
              <div className="text-sm text-zinc-700">{author.role}</div>
              <a href={author.linkedin} className={`text-sm hover:underline ${accent}`}>
                LinkedIn-Profil
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von: <strong>Julia Weber</strong> – Head of Sales Enablement.{" "}
              <a href="https://www.linkedin.com" className={`hover:underline ${accent}`}>
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
              Edelman &amp; LinkedIn: 2024 B2B Thought Leadership Impact Report – PDF:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://www.edelman.com/sites/g/files/aatuss191/files/2024-02/_2024%20Edelman-LinkedIn%20B2B%20Thought%20Leadership%20Impact%20Report%20Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                edelman.com
              </a>
            </li>
            <li>
              Gartner: B2B Buying Report (rep-freie Präferenz vs. Kaufreue) – PDF:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://emt.gartnerweb.com/ngw/globalassets/en/sales-service/documents/trends/gartner-b2b-buying-report.pdf."
                target="_blank"
                rel="noopener noreferrer"
              >
                gartnerweb.com
              </a>
            </li>
            <li>
              Edelman: 2024 Trust Barometer – Global Report:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://www.edelman.com/sites/g/files/aatuss191/files/2024-02/2024%20Edelman%20Trust%20Barometer%20Global%20Report_FINAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                edelman.com
              </a>
            </li>
            <li>
              Forrester: „Are B2B Buyers Cowards?“ – Blog/Research:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://www.forrester.com/blogs/are-b2b-buyers-cowards/"
                target="_blank"
                rel="noopener noreferrer"
              >
                forrester.com
              </a>
            </li>
            <li>
              Forrester: „B2B Buyers Rate Their Most Trusted Information Sources“:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://www.forrester.com/blogs/b2b-buyers-rate-their-most-trusted-information-sources/"
                target="_blank"
                rel="noopener noreferrer"
              >
                forrester.com
              </a>
            </li>
            <li>
              LinkedIn B2B Institute: Die 95-5-Regel:
              <a
                className={`ml-1 hover:underline ${accent}`}
                href="https://business.linkedin.com/marketing-solutions/b2b-institute/b2b-research/trends/95-5-rule"
                target="_blank"
                rel="noopener noreferrer"
              >
                business.linkedin.com
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
