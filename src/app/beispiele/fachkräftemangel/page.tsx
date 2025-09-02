// src/app/blog/fachkraeftemangel-b2b-employer-branding/page.tsx
import Head from "next/head";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

const accent = "text-emerald-700";

const author = {
  name: "Max Mustermann",
  role: "Employer Branding Manager",
  focus: "Employer Branding, B2B Recruiting, Talent Acquisition",
  image: "/Autorenbild.jpg",
  linkedin: "https://linkedin.com",
};

const reviewer = {
  name: "Claudia Müller",
  role: "Vice President People & Organizations",
  linkedin: "https://linkedin.com",
};

const company = {
  name: "Muster GmbH",
  address: "Musterstraße 1",
  email: "muster@beispiel.de",
  phone: "+49 123456789",
  url: "https://www.muster-gmbh.de",
  logo: "/favicon.ico",
  sameAs: ["https://linkedin.com"],
};

export const metadata = {
  title:
    "Fachkräftemangel im B2B lösen: Mit Employer Branding gezielt Talente ansprechen",
  description:
    "Wie du als B2B-Unternehmen mit einer klaren Employer Value Proposition, starker Karriere-Seite und Social Proof passende Fachkräfte gewinnst.",
};

export default function Page() {
  const canonical =
    "https://www.muster-gmbh.de/blog/fachkraeftemangel-b2b-employer-branding";

  const primaryKeywords = [
    "Fachkräftemangel B2B",
    "Employer Branding",
    "B2B Recruiting",
  ];
  const secondaryKeywords = [
    "Employer Value Proposition (EVP)",
    "Karriere-Seite",
    "Candidate Experience",
    "Talent Acquisition",
    "Mitarbeiter als Markenbotschafter",
    "Social Recruiting",
    "Mittelstand",
    "KMU",
  ];
  const longTail = [
    "Employer Branding im B2B: Beispiele und Checkliste",
    "EVP Vorlage für den Mittelstand",
    "Karriere-Seite Aufbau B2B",
    "LinkedIn Recruiting im B2B",
    "Mitarbeiter-Testimonials rechtssicher nutzen",
  ];

  const toc = [
    { id: "b2b-fachkraeftemangel", label: "Was bedeutet Fachkräftemangel im B2B?" },
    { id: "warum-employer-branding", label: "Warum ist Employer Branding die Antwort?" },
    { id: "evp-entwickeln", label: "Schritt 1: EVP entwickeln – dein Nutzenversprechen" },
    { id: "karriereseite-content", label: "Schritt 2: Karriere-Seite & Content, der konvertiert" },
    { id: "social-advocacy", label: "Schritt 3: Social Recruiting & Employee Advocacy" },
    { id: "candidate-experience", label: "Schritt 4: Candidate Experience messen & optimieren" },
    { id: "beispiele-quickwins", label: "B2B-Beispiele & Quick Wins" },
    { id: "kpis", label: "KPIs: So misst du den Erfolg" },
    { id: "fehler-vermeiden", label: "Typische Fehler – und wie du sie vermeidest" },
  ];

  const pageTitle =
    "Fachkräftemangel im B2B: Wie Unternehmen mit Employer Branding gezielt Talente ansprechen";

  const subHeadline =
    "Der Wettbewerb um Talente ist hart – aber mit einer klaren Arbeitgebermarke, einer starken Karriere-Seite und Social Proof erreichst du genau die Menschen, die wirklich zu dir passen.";

  return (
    <>
      <Head>
        <title>
          Fachkräftemangel im B2B lösen: Mit Employer Branding gezielt Talente
          ansprechen
        </title>
        <meta
          name="description"
          content="Wie du als B2B-Unternehmen mit einer klaren Employer Value Proposition, starker Karriere-Seite und Social Proof passende Fachkräfte gewinnst."
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content="Strategien, Beispiele & KPIs, um im B2B-Fachkräftemarkt die passenden Talente anzuziehen."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/fachkraft1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta
          name="twitter:description"
          content="Mit Employer Branding gezielt Talente im B2B gewinnen – praxisnah erklärt."
        />
        <meta name="twitter:image" content="/fachkraft1.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Fachkräftemangel im B2B: Wie Unternehmen mit Employer Branding gezielt Talente ansprechen",
              description:
                "Ein praxisnaher Leitfaden für B2B-Unternehmen, um trotz Fachkräftemangel passende Talente zu gewinnen – mit EVP, Karriere-Seite, Social Recruiting und klaren KPIs.",
              inLanguage: "de",
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: author.role,
                sameAs: author.linkedin,
              },
              image: [
                `${company.url}/fachkraft1.jpg`,
                `${company.url}/fachkraft2.png`,
                `${company.url}/fachkraft3.png`,
              ],
              datePublished: "2025-08-28",
              dateModified: "2025-08-28",
              publisher: {
                "@type": "Organization",
                name: company.name,
                url: company.url,
                logo: { "@type": "ImageObject", url: `${company.url}${company.logo}` },
              },
              mainEntityOfPage: canonical,
            }),
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.name,
              url: company.url,
              email: company.email,
              telephone: company.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address,
                addressCountry: "DE",
              },
              sameAs: company.sameAs,
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
            {pageTitle}
          </h1>

          <p className="mt-3 text-lg text-zinc-700">{subHeadline}</p>

          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-08-28">28.08</time>
            {" · "}Lesedauer: <span className="tabular-nums">11 Minuten</span>
          </div>

          <figure className="mt-6 overflow-hidden rounded-sm border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/fachkraft1.jpg" />
                <img
                  src="/fachkraft1.jpg"
                  alt="Team in modernem B2B-Unternehmen"
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <figcaption className="sr-only">Team</figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
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
        <aside className="mb-10 rounded-sm border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
          <ul className="list-disc ml-5 space-y-2 text-zinc-800">
            <li>
              Der Fachkräftemangel bleibt auch 2025 spürbar – besonders im Mittelstand.
              Mit klarem Employer Branding erreichst du Menschen, die fachlich UND
              kulturell passen.
            </li>
            <li>
              Deine <strong>EVP (Employer Value Proposition)</strong> ist der Kern
              deiner Arbeitgebermarke: Sie beantwortet, warum Talente gerade bei dir
              arbeiten sollten – konkret, glaubwürdig und überprüfbar.
            </li>
            <li>
              Eine <strong>konvertierende Karriere-Seite</strong> mit echten
              Mitarbeiterstimmen, transparenten Benefits und klaren CTAs ist dein
              wichtigster Recruiting-Kanal.
            </li>
            <li>
              <strong>Social Recruiting</strong> plus{" "}
              <strong>Employee Advocacy</strong> (Mitarbeiter als Botschafter) erhöht
              deine organische Reichweite und senkt die Kosten pro Bewerbung.
            </li>
            <li>
              <strong>KPIs</strong> wie Conversion der Karriere-Seite, Cost-per-Application
              oder Time-to-Hire machen Employer Branding messbar – und
              kontinuierlich besser.
            </li>
          </ul>
        </aside>

        {/* ToC */}
        <nav
          aria-label="Inhaltsverzeichnis"
          className="mb-12 rounded-sm border border-zinc-200 bg-zinc-50 p-5"
        >
          <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="list-decimal ml-5 space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a className={`hover:underline ${accent} font-medium`} href={`#${t.id}`}>
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="b2b-fachkraeftemangel" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Was bedeutet Fachkräftemangel im B2B?</h2>
          <p className="leading-relaxed">
            Im B2B treffen spezialisierte Profile auf einen kleinen Kandidatenmarkt.
            Maschinenbau, Elektrotechnik, IT/OT, Vertrieb im technischen Umfeld – hier
            ist die Nachfrage hoch, das Angebot knapp. Für dich heißt das: Nicht die
            Anzahl der Bewerbungen gewinnt, sondern die{" "}
            <strong>Passung</strong>. Employer Branding sorgt dafür, dass die
            Richtigen überhaupt auf dich aufmerksam werden und sich gezielt bewerben.
          </p>

         <div className="mt-5 grid gap-4 sm:grid-cols-2">
  <div className="rounded-sm border border-zinc-200 p-4">
    <h3 className="font-semibold mb-1">Kurz erklärt</h3>
    <p className="text-zinc-700">
      Fachkräftemangel bedeutet: Es gibt zu wenige qualifizierte
      Bewerber für offene Stellen. Im B2B sind die Anforderungen oft
      hochspezialisiert – die Suche ist entsprechend härter.
    </p>
  </div>

  <div className="rounded-sm border border-zinc-200 p-4">
    <h3 className="font-semibold mb-1">Auswirkungen im Alltag</h3>
    <ul className="list-disc ml-5 text-zinc-700 space-y-1">
      <li>verzögerte Projekte, Liefertermine wackeln</li>
      <li>steigende Kosten pro Einstellung</li>
      <li>Mehrbelastung für das bestehende Team</li>
    </ul>
  </div>
</div>


          {/* Expertenzitat */}
          <figure className="mt-6 rounded-sm border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Der Wettbewerb um qualifizierte Fachkräfte bleibt ein
              Wachstumsfaktor: Wer nicht sichtbar und attraktiv ist, besetzt
              Schlüsselstellen deutlich langsamer.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Institut der deutschen Wirtschaft &amp; DIHK, zusammengefasst (indirektes
              Zitat)
            </figcaption>
          </figure>
        </section>

        <section id="warum-employer-branding" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Warum ist Employer Branding die Antwort?
          </h2>
          <p className="leading-relaxed">
            Employer Branding ist die klare Positionierung deiner Arbeitgebermarke:
            Wofür stehst du, was bietest du – und wem? Im B2B zählt Authentizität. Je
            genauer du Nutzen, Entwicklungsmöglichkeiten und Arbeitsrealität
            beschreibst, desto eher fühlen sich die passenden Fachkräfte angesprochen.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Sichtbarkeit</h3>
              <p className="text-zinc-700">
                Klare Botschaften und ein konsistentes Erscheinungsbild sorgen
                dafür, dass dich Kandidaten wiedererkennen – auf LinkedIn, Messen
                und deiner Karriere-Seite.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Relevanz</h3>
              <p className="text-zinc-700">
                Inhalte, die fachliche Tiefe zeigen (Use Cases, Tech-Stacks,
                Kundenimpact), sprechen die Zielgruppe besser an als generische
                Floskeln.
              </p>
            </div>
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Conversion</h3>
              <p className="text-zinc-700">
                Gute Candidate Experience reduziert Absprünge im Bewerbungsprozess
                und senkt die Time-to-Hire.
              </p>
            </div>
          </div>
        </section>

        <section id="evp-entwickeln" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Schritt 1: EVP entwickeln – dein Nutzenversprechen
          </h2>
          <p className="leading-relaxed">
            Die <strong>EVP (Employer Value Proposition)</strong> bündelt, was dich
            als Arbeitgeber einzigartig macht. Sie ist keine Slogan-Sammlung,
            sondern ein <em>Beweisversprechen</em>.
          </p>

          <div className="mt-5 rounded-sm border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">EVP-Canvas (Kurzvorlage)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-zinc-500 mb-1">Zielrollen</p>
                <ul className="list-disc ml-5">
                  <li>z. B. SPS-Programmierer, Vertriebsingenieur, Data Engineer</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Kernversprechen</p>
                <ul className="list-disc ml-5">
                  <li>Aufgaben &gt; Hier gestaltest du Produkte mit Impact</li>
                  <li>Entwicklung &gt; Mentoring, Weiterbildungen, Budgets</li>
                  <li>Flexibilität &gt; Arbeitszeiten, Mobile Work, Reisen</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Beweise</p>
                <ul className="list-disc ml-5">
                  <li>Kunden- &amp; Projektbeispiele</li>
                  <li>Technologie-Stacks, Tools</li>
                  <li>Benefits mit Zahlen (Boni, 30+ Urlaubstage, Zeitkonto)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Tone of Voice</p>
                <ul className="list-disc ml-5">
                  <li>präzise, handfest, teamnah – ohne Phrasen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-sm border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 mt-0.5" aria-hidden="true" />
              <p className="m-0">
                Formuliere eine <strong>EVP pro Zielgruppe</strong> (Tech, Sales,
                Produktion). So bleibt deine Botschaft spitz – und relevant.
              </p>
            </div>
          </div>
        </section>

        {/* Bild 1 – lokale Grafik */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/fachkraft2.png" />
              <img
                loading="lazy"
                src="/fachkraft2.png"
                alt="Illustration: Zusammenhang Personal und Firmenerfolg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Starke Teams treiben B2B-Erfolg – Employer Branding macht sie sichtbar.
          </figcaption>
        </figure>

        <section id="karriereseite-content" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Schritt 2: Karriere-Seite &amp; Content, der konvertiert
          </h2>
          <p className="leading-relaxed">
            Deine Karriere-Seite ist die <strong>Landingpage</strong> für alle
            Recruiting-Aktivitäten. Hier entscheidet sich, ob Interesse zu
            Bewerbungen wird. Setze auf klare Informationsarchitektur und
            friktionsarme Interaktion.
          </p>

          <div className="mt-6 grid md:grid-cols-[1.6fr,1fr] gap-6">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Must-haves</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Echte Mitarbeiterstimmen (Video/Quote) nach Zielrollen sortiert</li>
                <li>Transparente Benefits und Gehaltsrahmen, wo möglich</li>
                <li>Klare Jobfilter, 1-Click-Bewerbung, mobile Formulare</li>
                <li>„Meet your Manager“-Abschnitt mit Verantwortlichen</li>
                <li>
                  Tech-Stack/Tools im Detail (für Tech- und Engineering-Rollen)
                </li>
              </ul>
            </div>
            <aside className="rounded-sm border border-zinc-200 p-4 bg-zinc-50">
              <h3 className="font-semibold mb-2">Conversion-Booster</h3>
              <ol className="list-decimal ml-5 text-zinc-700 space-y-1">
                <li>Kurzer Bewerbungsprozess (unter 10 Minuten)</li>
                <li>Probearbeit/Case vorab erklären</li>
                <li>Kalender-Link für Rückfragen</li>
              </ol>
            </aside>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border border-zinc-200 rounded-sm overflow-hidden">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left p-3 font-semibold">Element</th>
                  <th className="text-left p-3 font-semibold">Wirkung</th>
                  <th className="text-left p-3 font-semibold">Aufwand</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    e: "Mitarbeiter-Testimonials",
                    w: "Erhöhen Vertrauen und Kultur-Fit",
                    a: "mittel",
                  },
                  {
                    e: "Gehaltsspannen",
                    w: "Mehr qualifizierte Bewerbungen",
                    a: "niedrig",
                  },
                  {
                    e: "Technik-Stack",
                    w: "Relevanz für Engineering/IT",
                    a: "niedrig",
                  },
                  {
                    e: "1-Click-Bewerbung",
                    w: "Reduziert Abbrüche",
                    a: "mittel",
                  },
                ].map((row) => (
                  <tr key={row.e} className="border-t border-zinc-200">
                    <td className="p-3">{row.e}</td>
                    <td className="p-3">{row.w}</td>
                    <td className="p-3">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="social-advocacy" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Schritt 3: Social Recruiting &amp; Employee Advocacy
          </h2>
          <p className="leading-relaxed">
            Sichtbarkeit entsteht heute in den Feeds deiner Zielgruppe. Nutze
            LinkedIn, Xing (wo relevant), Fachforen und Nischen-Communities. Das
            Besondere im B2B: Deine Expert:innen sind die besten Botschafter.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Formate, die funktionieren</h3>
              <ul className="list-disc ml-5 text-zinc-700 space-y-1">
                <li>Projekt-„Behind the Scenes“ (2–3 Bilder, kurzer Text)</li>
                <li>„Team Tuesday“ – Kolleg:innen stellen Rollen vor</li>
                <li>1-Min-Video: „Warum ich hier arbeite“</li>
                <li>Event-Recaps mit Fachinhalten (Slides)</li>
              </ul>
            </div>
            <div className="rounded-sm border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Mitarbeiter als Markenbotschafter</h3>
              <p className="text-zinc-700">
                Ermögliche einfaches Teilen: Vorlagen, Visuals, kurze Captions und
                klare Netiquette. Anerkennung wirkt – etwa über Kudos, kleine
                Prämien oder interne Spotlights.
              </p>
            </div>
          </div>
        </section>

        {/* Bild 2 – lokale Szene */}
        <figure className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-sm border border-zinc-200"
            style={{ aspectRatio: "16 / 6" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/fachkraft3.png" />
              <img
                loading="lazy"
                src="/fachkraft3.png"
                alt="Modernes Büro in einem B2B-Unternehmen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-2 text-xs text-zinc-600">
            Arbeitsumfeld sichtbar machen: Bilder sagen mehr als Benefits-Listen.
          </figcaption>
        </figure>

        <section id="candidate-experience" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Schritt 4: Candidate Experience messen &amp; optimieren
          </h2>
          <p className="leading-relaxed">
            Jede Hürde im Prozess kostet Bewerbungen. Miss aktiv Absprungpunkte und
            optimiere auf wenige, klare Schritte.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Minimalprozess</h3>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Lebenslauf hochladen (ohne Account)</li>
                <li>Max. 3 Screening-Fragen</li>
                <li>Kalender-Link für Erstgespräch</li>
              </ol>
            </div>
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Was du messen solltest</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Conversion Karriere-Seite → Bewerbung</li>
                <li>Time-to-Hire pro Rolle</li>
                <li>Offer-Accept-Rate</li>
                <li>Bewerberzufriedenheit (NPS)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="beispiele-quickwins" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">B2B-Beispiele &amp; Quick Wins</h2>
          <div className="grid md:grid-cols-[2fr,1fr] gap-6">
            <div className="rounded-sm border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">Schnell umsetzbar</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Jobtexte vereinfachen:</strong> Aufgaben, Wirkung,
                  Erwartungen in 3 Abschnitten – ohne Buzzwords.
                </li>
                <li>
                  <strong>Gehaltsrahmen transparent:</strong> erspart
                  Fehlqualifizierungen.
                </li>
                <li>
                  <strong>„Meet your Team“:</strong> 3–5 Teamfotos und kurze
                  Steckbriefe je Rolle.
                </li>
                <li>
                  <strong>Karriere-FAQ:</strong> Bewerbungsdauer, Remote-Anteil,
                  Arbeitszeitmodell, Weiterbildungen.
                </li>
              </ul>
            </div>
            <aside className="rounded-sm border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold mb-2">Langfristige Hebel</h3>
              <p className="text-zinc-700">
                Talent-Pool aufbauen, Hochschulkooperationen, interne Akademie,
                strukturierte Mentoring-Programme – alles zahlt auf deine EVP ein.
              </p>
            </aside>
          </div>
        </section>

        <section id="kpis" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">KPIs: So misst du den Erfolg</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-200 rounded-sm overflow-hidden">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left p-3 font-semibold">KPI</th>
                  <th className="text-left p-3 font-semibold">Zielkorridor</th>
                  <th className="text-left p-3 font-semibold">Tipp zur Verbesserung</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    k: "Conversion Karriere-Seite → Bewerbung",
                    z: "2–5 % (rollenabhängig)",
                    t: "CTAs sichtbar, Reibung minimieren",
                  },
                  {
                    k: "Cost-per-Application",
                    z: "sinken um 15–30 % in 6–12 Monaten",
                    t: "Owned Content + Employee Advocacy",
                  },
                  {
                    k: "Time-to-Hire",
                    z: "−20 % ggü. Vorjahr",
                    t: "Vorselektion und schnelle Termine",
                  },
                  {
                    k: "Offer-Accept-Rate",
                    z: "70–85 %",
                    t: "Erwartungen früh klären, Gehaltsrange",
                  },
                ].map((r) => (
                  <tr key={r.k} className="border-t border-zinc-200">
                    <td className="p-3">{r.k}</td>
                    <td className="p-3">{r.z}</td>
                    <td className="p-3">{r.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="fehler-vermeiden" className="mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Typische Fehler – und wie du sie vermeidest
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Generische Claims:</strong> „flache Hierarchien“ sagt jeder.
              Beweise zählen.
            </li>
            <li>
              <strong>Zu langer Prozess:</strong> Alles, was nicht zwingend ist,
              weg.
            </li>
            <li>
              <strong>„One-size-fits-all“-EVP:</strong> Zielgruppen brauchen
              spezifische Botschaften.
            </li>
            <li>
              <strong>Nur Paid statt Owned:</strong> Ohne gute Karriere-Seite
              verbrennst du Media-Budget.
            </li>
          </ul>
        </section>

       {/* Weiterführende interne Links (Cluster) */}
<aside className="mt-10 rounded-sm border border-zinc-200 bg-zinc-50 p-5">
  <h3 className="font-semibold mb-3">Weiterführende Artikel</h3>
  <ul className="list-disc ml-5 text-sm space-y-2">
    {[
      { label: "EVP-Vorlage für den Mittelstand" },
      { label: "Karriere-Seite: 18-Punkte-Checkliste" },
      { label: "Social Recruiting auf LinkedIn: So geht’s" },
      { label: "Candidate Experience messen und verbessern" },
    ].map((item) => (
      <li key={item.label}>
        <a
          href="#cta-pop"
          role="button"
          aria-controls="cta-pop"
          className={`hover:underline ${accent} font-medium`}
        >
          {item.label}
          <span className="sr-only"> – öffnet Hinweis-Pop-up</span>
        </a>
      </li>
    ))}
  </ul>
</aside>


        {/* FAQ */}
        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-6 text-zinc-700">
            <div>
              <h3 className="font-semibold">
                Was ist der Unterschied zwischen Employer Branding und Recruiting?
              </h3>
              <p>
                Employer Branding schafft die Grundlage (Positionierung, Inhalte,
                Kanäle). Recruiting nutzt diese Basis, um Stellen effektiv zu
                besetzen. Ohne Marke wird Recruiting teurer und langsamer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie lange dauert es, bis Employer Branding wirkt?
              </h3>
              <p>
                Erste Effekte auf Reichweite und Employer Reputation siehst du nach
                6–12 Wochen. Harte KPIs wie Cost-per-Application oder Time-to-Hire
                verbessern sich typischerweise in 3–6 Monaten – abhängig von Rollen
                und Markt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Welche Kanäle eignen sich im B2B besonders?
              </h3>
              <p>
                LinkedIn, Fachportale, Hochschulnetzwerke, Branchenevents und deine
                eigene Karriere-Seite. Für Technikrollen lohnen sich GitHub,
                Stack Overflow (Community) und Tech-Meetups.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Brauche ich für jede Zielrolle eine eigene EVP?
              </h3>
              <p>
                Eine Unternehmens-EVP als Kern – ergänzt um Zielrollen-EVPs (z. B.
                Tech, Sales, Produktion). So bleibt die Botschaft konsistent und
                zugleich relevant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie belege ich unsere Versprechen glaubwürdig?
              </h3>
              <p>
                Mit Belegen: Projektbeispiele, klare Benefits, Lohntransparenz,
                Weiterbildungsetats, interne Mobilität, echte Stories der
                Mitarbeitenden.
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
                    name: "Was ist der Unterschied zwischen Employer Branding und Recruiting?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Employer Branding schafft die Grundlage (Positionierung, Inhalte, Kanäle). Recruiting nutzt diese Basis, um Stellen effektiv zu besetzen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie lange dauert es, bis Employer Branding wirkt?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Erste Effekte nach 6–12 Wochen; harte KPIs verbessern sich häufig in 3–6 Monaten – abhängig von Rollen und Markt.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Welche Kanäle eignen sich im B2B besonders?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "LinkedIn, Fachportale, Hochschulnetzwerke, Branchenevents und die eigene Karriere-Seite; für Technikrollen zusätzlich GitHub/Stack Overflow/Meetups.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Brauche ich für jede Zielrolle eine eigene EVP?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Eine Unternehmens-EVP plus zielrollenspezifische Zusätze (Tech, Sales, Produktion) ist Best Practice.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie belege ich unsere Versprechen glaubwürdig?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Mit Belegen wie Projektbeispielen, Lohntransparenz, Weiterbildungsetats, interner Mobilität und Mitarbeiterstories.",
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
              Wie gewinnst du trotz Fachkräftemangel passende Talente im B2B?
            </strong>{" "}
            Mit klarer Positionierung (EVP), einer konvertierenden Karriere-Seite,
            aktivem Social Recruiting und konsequenter Messung deiner KPIs. So
            senkst du Kosten, beschleunigst Einstellungen und erhöhst die
            Qualität der Matches.
          </p>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Willst du deine Arbeitgebermarke im B2B schärfen und mehr passende
              Bewerbungen erhalten?
            </h2>
            <p className="text-zinc-700 mb-4">
              Wir entwickeln mit dir eine spitze EVP und optimieren deine
              Karriere-Seite – inklusive Content, Tracking und Social Recruiting.
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="Max Mustermann"
                  required
                />
              </label>
              <label className="text-sm">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="+49 123456789"
                />
              </label>
              <label className="text-sm">
                E-Mail
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-sm border border-zinc-300 px-3 py-2"
                  placeholder="max@mustermann.de"
                  required
                />
              </label>

              <a
                href="#cta-pop"
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
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
              className="relative w-full max-w-md rounded-sm bg-white p-6 shadow-xl"
            >
              <a
                href="#"
                aria-label="Fenster schließen"
                className="absolute right-3 top-3 rounded-sm border border-zinc-200 px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50"
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

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar – Die wichtigsten Begriffe zu Fachkräftemangel &amp;
            Employer Branding
          </h2>

          <div className="rounded-sm border border-zinc-200 overflow-hidden">
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
                    b: "Fachkräftemangel",
                    e:
                      "Knappheit an qualifizierten Arbeitskräften für bestimmte Rollen/Branchen – führt zu längeren Besetzungszeiten und höheren Kosten.",
                  },
                  {
                    b: "Employer Branding",
                    e:
                      "Strategische Positionierung der Arbeitgebermarke, um passende Talente anzuziehen und zu binden.",
                  },
                  {
                    b: "EVP (Employer Value Proposition)",
                    e:
                      "Kernversprechen eines Arbeitgebers an Mitarbeitende – Nutzen, Entwicklung, Rahmenbedingungen und Kultur, belegt durch Beispiele.",
                  },
                  {
                    b: "Candidate Experience",
                    e:
                      "Erlebnis von Bewerbenden entlang aller Kontaktpunkte – von Stellenausschreibung bis Onboarding.",
                  },
                  {
                    b: "Employee Advocacy",
                    e:
                      "Mitarbeitende teilen Inhalte und Erfahrungen, erhöhen Reichweite und Glaubwürdigkeit der Arbeitgebermarke.",
                  },
                  {
                    b: "Talent Funnel",
                    e:
                      "Trichter vom ersten Kontakt über Bewerbungen bis zur Einstellung; zeigt Konversionsraten je Stufe.",
                  },
                ].map((row) => (
                  <tr key={row.b} className="border-t border-zinc-200">
                    <td className="p-3 font-medium text-zinc-900">{row.b}</td>
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
              alt="Autor"
              className="w-16 h-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-zinc-700">
                {author.role} · Fokus: {author.focus}
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
              <a href={reviewer.linkedin} className={`hover:underline ${accent}`}>
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
              DIHK (2024/2025): Fachkräftereport – „Fachkräfteengpässe rückläufig – aber
              keine Entwarnung“.{" "}
              <a
                className={accent}
                href="https://www.dihk.de/resource/blob/127242/6ffb666cfa53e926e07b3cf91d5d021f/fachkraefte-dihk-report-fachkraeftesicherung-2024-2025-data.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                dihk.de
              </a>
            </li>
            <li>
              KOFA/IW (März 2025): Fachkräftereport – über 387.000 offene Stellen für
              qualifizierte Arbeitskräfte.{" "}
              <a
                className={accent}
                href="https://www.iwkoeln.de/studien/gero-kunath-jurek-tiedemann-fachkraeftereport-maerz-2025-fachkraeftemangel-kann-investitionsschwung-bremsen.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                iwkoeln.de
              </a>
            </li>
            <li>
              Bundesagentur für Arbeit (2024): Engpassanalyse – Methodik &amp; Übersicht.{" "}
              <a
                className={accent}
                href="https://statistik.arbeitsagentur.de/DE/Navigation/Statistiken/Interaktive-Statistiken/Fachkraeftebedarf/Engpassanalyse-Nav.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                statistik.arbeitsagentur.de
              </a>
            </li>
            <li>
              LinkedIn (2025): Future of Recruiting / Global Talent Trends – Employer
              Branding als Qualitätshebel.{" "}
              <a
                className={accent}
                href="https://business.linkedin.com/talent-solutions/resources/future-of-recruiting"
                target="_blank"
                rel="noopener noreferrer"
              >
                business.linkedin.com
              </a>
            </li>
            <li>
              Randstad (2025): Employer Brand Research – Treiber für Arbeitgeberattraktivität.{" "}
              <a
                className={accent}
                href="https://www.randstad.com/workforce-insights/employer-branding/"
                target="_blank"
                rel="noopener noreferrer"
              >
                randstad.com
              </a>
            </li>
            <li>
              IW (Juli 2025): Prognose – 2028 fehlen 768.000 Fachkräfte.{" "}
              <a
                className={accent}
                href="https://www.iwkoeln.de/presse/pressemitteilungen/alexander-burstedde-jurek-tiedemann-2028-fehlen-768000-fachkraefte.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                iwkoeln.de
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
