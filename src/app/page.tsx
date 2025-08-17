"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Target,
  TrendingUp,
  Clock,
  Users,
  Globe,
  BarChart,
  Zap,
  Award,
  Search,
  ClipboardList,
  FileText,
  CheckCircle,
  Package,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

// Farben
const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";

// Einheitlicher Container für Blog / Done4You / Pricing / weitere Sections
const containerClass = "w-full max-w-6xl mx-auto px-6";

// BENEFITS (laufen im Marquee)
const benefits = [
  { icon: Eye, label: "Erhöhte Sichtbarkeit", help: "Mehr Präsenz in Suchergebnissen." },
  { icon: Target, label: "Warme Leads", help: "Du erfährst, welche Unternehmen Interesse haben – auch ohne Formular." },
  { icon: TrendingUp, label: "Mehr organischer Traffic", help: "Wachstum ganz ohne bezahlte Werbung." },
  { icon: Clock, label: "Langfristige Wirkung", help: "Blogbeiträge wirken monate- und jahrelang." },
  { icon: Users, label: "Vertrauensaufbau", help: "Als echter Experte deiner Branche wahrgenommen werden." },
  { icon: Globe, label: "Automatisierte Leads", help: "Wir übernehmen den gesamten Prozess für dich." },
  { icon: BarChart, label: "Verbesserte Sales-Pipeline", help: "Dein Vertrieb erhält konkrete Unternehmensnamen statt unqualifizierte Leads." },
  { icon: Zap, label: "Skalierbar & zukunfssicher", help: "Mehr Artikel, mehr Sichtbarkeit - Dort, wo Entscheider aktiv sind." },
  { icon: Award, label: "Starkes Markenimage", help: "Markenkonforme und professionelle Artikel unterstreichen deine Kompetenz." },
  { icon: Search, label: "Optimierte Auffindbarkeit", help: "Gefunden werden, wenn es zählt." },
];

// ABLAUF (Steps)
const ablauf = [
  { icon: ClipboardList, title: "Onboarding", desc: "Verständnis von Zielgruppe, Angebot und Themen." },
  { icon: FileText, title: "Themenfindung", desc: "KI-gestützte und intelligente Themenfindung, die Entscheider wirklich interessiert." },
  { icon: CheckCircle, title: "KI-Blogartikel", desc: "Nach Themenfreigabe entwickelt unsere KI datengestützt, relevante Blogartikel im HTML Format (variabel) und veröffentlicht sie über die nächsten 30 Tage hinweg im CMS." },
  { icon: Package, title: "Leadidentifizierung", desc: "Über allgemeine Formulareintragungen hinweg, identifizieren wir mit innovativer Technologie Unternehmensbesucher." },
  { icon: BarChart3, title: "Sales", desc: "Dein Sales-Team erhält warme Leads und meldet sich zum idealen Zeitpunkt." },
];

// PRICING DATEN – mit altem Preis
const plans = [
  { id: "starter", articles: 20, price: 499, oldPrice: 799, popular: false },
  { id: "growth",  articles: 40, price: 699, oldPrice: 1099, popular: true  },
  { id: "scale",   articles: 60, price: 899, oldPrice: 1399, popular: false },
];


const features = [
  "Themen- & Keyword-Analyse",
  "Hochwertige, KI-optimierte Blogartikel im Markenstil",
  "Perfekte SEO-Ausrichtung (Technik, Struktur, Verlinkung)",
  "Veröffentlichung direkt in deinem CMS",
  "Identifikation von anonymen Unternehmensbesuchern für deinen Vertrieb",
];

// FAQ (added so section compiles)
const faqs = [
  { q: "Wie schnell geht’s los?", a: "Nach dem Onboarding starten wir innerhalb weniger Tage mit den ersten Artikeln." },
  { q: "Können wir Themen vorgeben?", a: "Ja, du kannst Themen vorschlagen oder wir übernehmen die Recherche." },
  { q: "Kündigungsfrist?", a: "Monatlich kündbar – volle Flexibilität." },
];

function formatEUR(n: number) {
  return n.toLocaleString("de-DE");
}

/* ---------- Simple Modal für eingebettetes Calendly ---------- */
function CalendlyModal({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <button
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Overlay schließen"
        onClick={onClose}
      />
      {/* Dialog */}
      <div className="relative z-[101] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <button
            onClick={onClose}
            className="rounded-md border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50"
            aria-label="Popup schließen"
          >
            Schließen
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe
            src={url}
            title="Calendly – Termin buchen"
            className="h-full w-full"
            frameBorder="0"
            allow="clipboard-write; fullscreen"
          />
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Header --------------------------- */
function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          <a href="#blog" className="text-sm" style={{ color: "#334155" }}>
            Blog-Beispiele
          </a>
        
        
          <a href="#preise" className="text-sm" style={{ color: "#334155" }}>
            Preise
          </a>
          <a href="#ablauf" className="text-sm" style={{ color: "#334155" }}>
            Ablauf
          </a>
          <a href="#faq" className="text-sm" style={{ color: "#334155" }}>
            FAQ
          </a>
        </nav>
        <Button asChild>
          <a className="text-white" href="#preise">
            Jetzt anfragen
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 text-center">
      {/* Sehr dezentes Raster, sanftes Fade zu Weiß */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2,6,23,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2,6,23,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
          /* großes Fade für weichen Übergang */
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Graph: sehr helles Grau, Reveal via clip-path */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="h-full w-full text-slate-100 animate-graph-reveal will-change-clip-path">
          <svg
            className="h-full w-full"
            viewBox="0 0 500 200"
            preserveAspectRatio="none"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              points="0,180 60,165 120,160 180,140 240,120 300,95 360,80 420,55 480,30 500,20"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className={`text-4xl md:text-6xl tracking-tight ${serifClass}`}>
          <span className="italic font-bold">findbar:</span> Skaliere durch KI-Blogartikel und
          <br className="hidden md:inline" /> smarter Erkennung relevanter B2B-Besucher.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          Mehr Sichtbarkeit, mehr Leads, dank KI: Wir platzieren dein B2B-Angebot bei Google & ChatGPT und identifizieren anonyme Firmenbesucher für deinen Vertrieb.
        </p>
        <Button asChild>
          <a className="mt-6 inline-block text-white" href="#preise">
            Pakete ansehen
          </a>
        </Button>
      </div>

      {/* Animation Styles */}
      <style>{`
        .animate-graph-reveal {
          clip-path: inset(0 100% 0 0);
          animation: graph-reveal 1.2s ease-out forwards .12s;
        }
        @keyframes graph-reveal {
          to { clip-path: inset(0 0 0 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-graph-reveal {
            animation: none;
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}


/* ---------------------- Benefits Marquee ---------------------- */
function BenefitsMarquee() {
  return (
    <section
      className="relative overflow-hidden py-12 text-white"
      style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}
    >
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-8 will-change-transform"
          style={{ animation: "marquee 80s linear infinite" }}
        >
          {[...benefits, ...benefits, ...benefits].map(
            ({ icon: Icon, label, help }, i) => (
              <div
                key={i}
                className="shrink-0 w-64 rounded-xl border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur-sm shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                </div>
                <div className={`text-lg italic ${serifClass}`}>{label}</div>
                <div className="mt-2 break-words text-xs leading-relaxed text-white/85">
                  {help}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ------------------------- BlogSection (mit neuen Beispielen) ------------------------ */
function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>
          Blog-Beispiele
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Wie kann so ein KI-optimierter Artikel auf deiner Webseite aussehen? Schau dir hier ausgewählte Beispiele an.
        </p>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?",
              tease: "Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir, fundiert zu entscheiden – inklusive Praxisbeispiele und Checkliste.",
              image: "/Cloud vs On-Premise.png",
              alt: "Vergleich zwischen Cloud-Infrastruktur und On-Premise-Servern",
            },
            {
              title: "B2B Kunden gewinnen im Jahr 2025 mit Hilfe von KI",
              tease: "Der wachsende Wettbewerb fordert nach innovativen Marketingansätzen. Vertrauensaufbau wird essentieller denn je. So gelingt es.",
              image: "/B2B Kunden.png",
              alt: "Kundengewinnung durch KI im Jahr 2025",
            },
            {
              title: "Green Energy im Unternehmen – Photovoltaik und Energiespeicher sinnvoll einsetzen",
              tease: "Investition, Amortisation, Förderungen: So planen Firmen PV-Anlagen und Speicherlösungen wirtschaftlich.",
              image: "/Photovoltaik Energiespeicher Unternehmen.png",
              alt: "Photovoltaik-Module und Batteriespeicher in einem Firmengebäude",
            },
          ].map((b, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl border border-slate-200 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Vorschaubild */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={b.image}
                  alt={b.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Textbereich */}
              <div className="p-6">
                <h3 className={`mb-1 text-lg ${serifClass}`}>{b.title}</h3>
                <p className="text-sm text-slate-600">{b.tease}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#1b4d2b]"
                  aria-label={`Beispiel ansehen: ${b.title}`}
                >
                  Beispiel ansehen <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------------- So helfen dir KI-optimierte Blogartikel ---------------------- */
function HowItHelpsSection() {
  const vorteile = [
    { title: "Themen definieren", desc: "Wir analysieren KI-gestützt deine Branche und identifizieren die Themen, nach denen deine Zielkunden wirklich suchen." },
    { title: "KI-Blogartikel erstellen", desc: "Unsere KI erstellt hochwertige, SEO-optimierte Artikel, die Entscheider anziehen – besser als jeder Experte und zu einem Bruchteil der Kosten." },
    { title: "Besucher identifizieren", desc: "Mit intelligenter Technologie erkennen wir, welche Unternehmen deine Website besuchen – auch ohne Formular." },
    { title: "Leads nutzen", desc: "Du erhältst verwertbare Unternehmensdaten, mit denen dein Vertrieb direkt arbeiten und Interessenten ansprechen kann." },
  ];

  return (
    <section id="how-it-helps" className="py-20 border-t border-slate-100">
      <div className={containerClass}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Textseite */}
          <div>
            <h2 className={`text-3xl font-semibold ${serifClass}`}>
              So helfen dir KI-optimierte Blogartikel mit intelligenter Leads-Erkennung
            </h2>
            <p className="mt-4 text-slate-600">
              Artikel, die wirken: sichtbar bei Google, spannend für Leser und wertvoll für deine Sales-Pipeline.
            </p>
            <ul className="mt-6 space-y-4">
              {vorteile.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Zahl im perfekten Kreis – NICHT schrumpfen */}
                  <div className="shrink-0 inline-flex size-10 items-center justify-center rounded-full
                                  bg-[#1b4d2b1A] border border-[#1b4d2b33] text-[#1b4d2b] font-semibold leading-none">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bildseite */}
          <div className="relative w-full max-w-md mx-auto">
            <div
              className="absolute -inset-10 -z-10 blur-2xl"
              style={{
                background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)`,
              }}
            />
            <img
              src="/Lupe.png"
              alt="Darstellung von KI-optimierten Blogartikeln"
              className="relative z-20 w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



/* ---------------------- Minimaler Aufwand – maximaler Vertriebserfolg ---------------------- */
function UnserZielSection() {
  const punkte = [
    "Einmal einrichten – nachhaltig profitieren.",
    "Maximale Zeiteffizienz für dich und dein Team",
    "Transparente Reports: Veröffentlichungen, Rankings, Traffic.",
  ];

  return (
    <section id="done4you" className="py-20">
      <div className={containerClass}>
        <div
          className="relative w-full overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl"
          style={{
            background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)`
          }}
        >
          <div className="relative z-10 grid items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
            
            {/* Bildseite */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className="absolute -inset-10 -z-10 blur-2xl"
                  style={{
                    background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)`
                  }}
                />
                <img
                  src="/Ziele erreichen mit Findbar.png"
                  alt="Darstellung des Done 4 You Prozesses"
                  className="relative z-20 w-full rounded-xl"
                />
              </div>
            </div>

            {/* Textseite */}
            <div className="order-1 md:order-2">
              <p className="text-sm uppercase tracking-wide text-white/70">
             
              </p>
              <h2 className={`mt-2 text-3xl font-semibold ${serifClass}`}>
                Minimaler Aufwand – maximaler Vertriebserfolg
              </h2>
              <p className="mt-4 max-w-prose text-white/90">
 Wir haben Blogartikel in Zeiten von KI und innovativen Trackingmöglichkeiten neu gedacht. Gemeinsam verwandeln wir Content in einen Vertriebsbooster, der nicht nur sichtbar macht – sondern auch die richtigen Kunden zu dir bringt.
              </p>
              <ul className="mt-6 space-y-3 text-white/90">
                {punkte.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      <Check className="h-4 w-4 text-white" strokeWidth={1.6} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <a href="#preise" className="text-white">Pakete ansehen</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}



/* ---------------------- Identification Section ---------------------- */
function IdentificationSection() {
  const zielgruppen = [
    {
      title: "Industrie & Mittelstand",
      desc: "Neue Firmenkunden gewinnen, indem Entscheider genau die Inhalte finden, nach denen sie suchen.",
      icon: Users,
    },
    {
      title: "B2B-Dienstleister & Agenturen",
      desc: "Regelmäßig qualifizierte Leads erhalten, ohne selbst Ressourcen für Content-Produktion zu binden.",
      icon: Target,
    },
    {
      title: "SaaS & Tech-Unternehmen",
      desc: "Komplexe Lösungen verständlich erklären, gezielt Kaufinteresse wecken und anonyme Website-Besucher sichtbar machen.",
      icon: Globe,
    },
    {
      title: "Marketing- & Vertriebsteams in B2B",
      desc: "Effizienter arbeiten: Content, der SEO-Ergebnisse liefert und konkrete Unternehmensleads für die Sales-Pipeline bereitstellt.",
      icon: Search,
    },
  ];

  return (
    <section id="identification" className="bg-white py-20 border-t border-slate-100">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>
          An wen richtet sich unser Angebot?
        </h2>
        <p className="mt-4 text-center text-slate-600">
         Unsere KI-optimierten Blogartikel sind für B2B Unternehmen mit validiertem Angebot und Zielgruppe, bereit für Wachstum.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {zielgruppen.map((z, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4d2b1A] text-[#1b4d2b]">
                <z.icon className="h-6 w-6" />
              </div>
              <h3 className={`mb-2 text-lg font-semibold ${serifClass}`}>{z.title}</h3>
              <p className="text-sm text-slate-600">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Leads Marquee mit Icons ---------------------- */
function LeadsMarquee() {
  const items = [
    { text: "Mehr Leads", icon: Users },
    { text: "Mehr Sichtbarkeit", icon: Eye },
  ];

  return (
    <section id="leads"
      className="relative overflow-hidden py-6"
      style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}
    >
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-12 will-change-transform"
          style={{ animation: "marquee-ltr 70s linear infinite" }}
          aria-hidden
        >
          {[...Array(8)].flatMap((_, k) =>
            items.map(({ text, icon: Icon }, i) => (
              <div
                key={`${k}-${i}`}
                className="flex items-center gap-2 shrink-0"
              >
                {/* Icon-Style wie Benefits, aber kleiner */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                </div>
                <span
                  className={`text-2xl md:text-4xl italic ${serifClass} select-none`}
                  style={{
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                  }}
                >
                  {text}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-60%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}




/* ------------------------ PreiseSection ----------------------- */
function PreiseSection({ onOpenCalendly }: { onOpenCalendly: () => void }) {
  return (
    <section id="preise" className="border-t border-slate-100 bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>
          Unsere Pakete
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { id: "starter", articles: 20, price: 449, oldPrice: 699, popular: false },
            { id: "growth", articles: 40, price: 649, oldPrice: 999, popular: true },
            { id: "scale", articles: 60, price: 849, oldPrice: 1299, popular: false },
          ].map(({ id, articles, price, oldPrice, popular }) => {
            return (
              <div
                key={id}
                className={`group relative rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:shadow-lg ${
                  popular
                    ? "scale-105 border-[#1b4d2b] ring-2 ring-[#1b4d2b]/40"
                    : "border-[#1b4d2b]"
                }`}
              >
                {popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm"
                    style={{ backgroundColor: RG600 }}
                  >
                    Meistverkauft
                  </div>
                )}

                <h3 className={`text-lg font-semibold ${serifClass}`}>
                  {articles} Artikel / Monat
                </h3>

                {/* Preis */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-[#1b4d2b]">
                      {formatEUR(price)}€
                    </span>
                    <span
                      className="text-sm text-slate-500 line-through"
                      aria-label={`Alter Preis ${formatEUR(oldPrice)}€`}
                      title="Alter Preis"
                    >
                      {formatEUR(oldPrice)}€
                    </span>
                    <span className="mb-1 text-xs text-slate-500">pro Monat</span>
                  </div>

                  {/* Marktvalidierungspreis Badge */}
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                    <Check className="h-3 w-3" />
                    Marktvalidierungspreis: Wir sammeln Testimonials
                  </div>

                  <span className="sr-only">
                    Neuer Preis {formatEUR(price)}€ pro Monat statt {formatEUR(oldPrice)}€ pro Monat.
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 rounded-full bg-[#1b4d2b1A] p-1 text-[#1b4d2b]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Button öffnet das Calendly-Modal */}
                <Button
                  className="mt-6 w-full"
                  variant={popular ? "default" : "outline"}
                  onClick={onOpenCalendly}
                >
                  Jetzt anfragen
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Alle Pakete verstehen sich exkl. Mwst. und einmaliger Aufsetzgebühr von 199€. 
          Sie beinhalten alles von Recherche bis Veröffentlichung und nachhaltige Lead-Gewinnung, 
          für maximalen Outcome für dein Angebot.
        </p>
      </div>
    </section>
  );
}



/* ------------------------ AblaufSection – 2x3 Grid ----------------------- */
function AblaufSection() {
  return (
    <section id="ablauf" className="py-20">
      <div className={containerClass}>
        <div
          className="relative overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl"
          style={{ background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)` }}
        >
          <div className="relative z-10 px-6 py-12 md:px-12">
            <h2 className={`text-center text-3xl font-semibold ${serifClass}`}>
              Unser Ablauf – transparent & effizient
            </h2>

            {/* GRID: 2 Reihen x 3 Spalten */}
            <ol
              className="
                mt-12 grid gap-6
                md:grid-cols-3
              "
            >
              {ablaufMitErfolg.map(({ icon: Icon, title, desc }, i) => (
                <li key={i}>
                  <article
                    className="group h-full rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-sm p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/20"
                    style={{
                      hyphens: "auto",
                      WebkitHyphens: "auto",
                      overflowWrap: "break-word",
                      wordBreak: "normal",
                    }}
                  >
                    {/* Header mit Step-Nummer und Icon */}
                    <header className="flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                      </div>
                    </header>

                    {/* Titel */}
                    <h3 className={`mt-4 text-lg font-semibold leading-snug ${serifClass}`}>
                      {title}
                    </h3>

                    {/* Linie */}
                    <hr className="my-4 border-white/10" />

                    {/* Beschreibung */}
                    <p className="text-sm leading-relaxed text-white/90">
                      {desc}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* zarter Innenrand */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

/* ---- Steps (inkl. Erfolg als #6) ---- */
// Nutzt nur Icons, die oben bereits importiert sind:
// ClipboardList, FileText, CheckCircle, Package, BarChart3, Award

const ablaufMitErfolg = [
  {
    icon: ClipboardList,
    title: "Onboarding",
    desc: "Verständnis von Zielgruppe, Angebot und Themen.",
  },
  {
    icon: FileText,
    title: "Themenfindung",
    desc: "KI-gestützte und intelligente Themenfindung, die Entscheider wirklich interessiert.",
  },
  {
    icon: CheckCircle,
    title: "KI-Blogartikel",
    desc: "Nach Themenfreigabe entwickelt unsere KI datengestützt relevante Artikel im HTML-Format und veröffentlicht sie über 30 Tage hinweg im CMS.",
  },
  {
    icon: Package,
    title: "Leadidentifizierung",
    desc: "Über allgemeine Formulareintragungen hinaus identifizieren wir mit innovativer Technologie Unternehmensbesucher.",
  },
  {
    icon: BarChart3,
    title: "Sales",
    desc: "Dein Sales-Team erhält warme Leads und meldet sich zum idealen Zeitpunkt.",
  },
  {
    icon: Award, // 'Erfolg'
    title: "Erfolg",
    desc: "Mehr Sichtbarkeit, bessere Leads und nachhaltiges Wachstum für dein Business.",
  },
];


/* ---------------------- FAQ Section ---------------------- */
function FAQSection() {
  const faqs = [
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "Oft schon nach wenigen Wochen – Google braucht jedoch manchmal etwas länger, um neue Inhalte vollständig zu indexieren.",
    },
    {
      q: "Muss ich selbst Themen recherchieren?",
      a: "Nein. Wir übernehmen die komplette Themen- und Keyword-Recherche für dich.",
    },
    {
      q: "Ist das auch für meine Branche geeignet?",
      a: "Ja. Wir erstellen Inhalte für nahezu jede Branche – ob B2B, B2C oder Nischenmärkte.",
    },
    {
      q: "Was passiert, wenn ich unzufrieden bin?",
      a: "Wir passen die Inhalte nach deinem Feedback an, bis du zufrieden bist.",
    },
    {
      q: "Wie funktioniert die Abrechnung?",
      a: "Transparent, monatlich und jederzeit kündbar.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-20 border-t border-slate-100">
      <div className={containerClass}>
        {/* Überschrift jetzt linksbündig */}
        <h2 className={`text-3xl font-semibold ${serifClass}`}>
          Häufige Fragen
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm text-left"
            >
              <summary className="flex cursor-pointer items-center justify-between font-medium text-left">
                <span>{f.q}</span>
                <span className="ml-4 transition-transform group-open:rotate-180">
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}





/* ----------------------- Root Component ----------------------- */
export default function FindbarPage() {
  const [calOpen, setCalOpen] = React.useState(false);
  const calendlyUrl =
    "https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung";

  return (
    <div className="bg-white text-slate-900">
      {/* 1. Header */}
      <Header />
      {/* 2. Hero */}
      <Hero />
      {/* 3. Benefits mit Marquee */}
      <BenefitsMarquee />
      {/* 4. Blog Beispiele */}
      <BlogSection />
      {/* 5. So helfen dir KI-optimierte Blogartikel */}
      <HowItHelpsSection />
      {/* 6. Done 4 You */}
      <UnserZielSection />
      {/* 7. An wen richtet sich unser Angebot */}
      <IdentificationSection />
      {/* 8. Mehr Leads / Mehr Sichtbarkeit */}
      <LeadsMarquee />
      {/* 9. Pricing */}
      <PreiseSection onOpenCalendly={() => setCalOpen(true)} />
      {/* 10. Ablauf */}
      <AblaufSection />
      {/* 11. FAQ */}
      <FAQSection />

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        <div className="space-x-4">
          <a href="#">Impressum</a>
          <a href="#">AGB</a>
          <a href="#">Datenschutz</a>
        </div>
        <p className="mt-3">
          © {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.
        </p>
      </footer>

      {/* Calendly Popup */}
      <CalendlyModal
        open={calOpen}
        onClose={() => setCalOpen(false)}
        url={calendlyUrl}
      />
    </div>
  );
}

