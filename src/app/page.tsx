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

// PRICING DATEN
const plans = [
  { id: "starter", articles: 20, price: 699, popular: false },
  { id: "growth", articles: 40, price: 999, popular: true },
  { id: "scale", articles: 60, price: 1299, popular: false },
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

/* ------------------------- BlogSection (mit Vorschaubild & SEO-Titeln) ------------------------ */
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
              title: "Cabriowetter in Deutschland 2025 – Die schönsten Streckenempfehlungen",
              tease: "Entdecke die besten Cabrio-Routen in Deutschland: Von malerischen Küstenstraßen bis zu kurvigen Bergpassagen – perfekt für sonnige Tage.",
              image: "/Cabriotouren in Deutschland.png",
              alt: "Cabrio auf panoramischer Landstraße bei gutem Wetter in Deutschland",
            },
            {
              title: "Küchenkauf 2025 – 7 Dinge, die du unbedingt beachten musst",
              tease: "Von der richtigen Planung bis zur Auswahl langlebiger Materialien: So kaufst du deine Traumküche und vermeidest teure Fehler.",
              image: "/Moderne Kueche.png",
              alt: "Moderne Küche mit viel Tageslicht und Kücheninsel",
            },
            {
              title: "CNC Maschine mieten statt kaufen – Kosten senken & flexibel bleiben",
              tease: "Erfahre, wann sich CNC-Maschinen-Miete lohnt, welche Kostenfallen du vermeiden solltest und wie du den richtigen Anbieter findest.",
              image: "/CNC Maschine mieten.png",
              alt: "Moderne CNC-Maschine in sauberer Werkstatt",
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
    {
      title: "Themen definieren",
      desc: "Wir analysieren KI-gestützt deine Branche und identifizieren die Themen, nach denen deine Zielkunden wirklich suchen.",
      icon: Search,
    },
    {
      title: "KI-Blogartikel erstellen",
      desc: "Unsere KI erstellt hochwertige, SEO-optimierte Artikel, die Entscheider anziehen – besser als jeder Experte und zu einem Bruchteil der Kosten.",
      icon: Zap,
    },
    {
      title: "Besucher identifizieren",
      desc: "Mit intelligenter Technologie erkennen wir, welche Unternehmen deine Website besuchen – auch ohne Formular.",
      icon: TrendingUp,
    },
    {
      title: "Leads nutzen",
      desc: "Du erhältst verwertbare Unternehmensdaten, mit denen dein Vertrieb direkt arbeiten und Interessenten ansprechen kann.",
      icon: CheckCircle,
    },
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
                  <div className="rounded-full bg-[#1b4d2b1A] p-2 text-[#1b4d2b]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bildseite – Shadow entfernt */}
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

function UnserZielSection() {
  return (
    <section id="done4you" className="py-20">
      <div className={containerClass}>
        <div
          className="relative w-full overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl"
          style={{
            background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)`
          }}
        >
          {/* Inhalt */}
          <div className="relative z-10 grid items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
            
            {/* Bildseite – jetzt links auf Desktop */}
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

            {/* Textseite – jetzt rechts auf Desktop */}
            <div className="order-1 md:order-2">
              <p className="text-sm uppercase tracking-wide text-white/70">Content & Lead-Intelligence: Komplett für dich umgesetzt</p>
              <h2 className={`mt-2 text-3xl font-semibold ${serifClass}`}>
                Minimaler Aufwand – maximaler Vertriebserfolg
              </h2>
              <p className="mt-4 max-w-prose text-white/90">
            Wir setzen deinen Content-Motor auf Autopilot: Einmal Onboarding, Themenplan freigeben, 2–3 Musterartikel abnicken – danach liefern wir regelmäßig neue Artikel plus die identifizierten Firmenbesucher, die dein Vertrieb sofort nutzen kann.
              </p>
              <ul className="mt-6 space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-white"></span>
                  <span>Einmal einrichten – nachhaltig profitieren.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-white"></span>
                  <span>Maximale Zeiteffizienz für dich und dein Team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-white"></span>
                  <span>Transparente Reports: Veröffentlichungen, Rankings, Traffic.</span>
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <a href="#preise" className="text-white">Pakete ansehen</a>
                </Button>
              </div>
            </div>

          </div>

          {/* feiner Innenrand */}
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
      title: "Marketing- & Vertriebsteams in B2Br",
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
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>Unsere Pakete</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map(({ id, articles, price, popular }) => {
            return (
              <div
                key={id}
                className={`group relative rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:shadow-lg ${
                  popular ? "scale-105 border-[#1b4d2b] ring-2 ring-[#1b4d2b]/40" : "border-[#1b4d2b]"
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

                <h3 className={`text-lg font-semibold ${serifClass}`}>{articles} Artikel / Monat</h3>

                <div className="mt-4">
                  <div className="inline-flex items-end gap-1">
                    <span className="text-4xl font-bold text-[#1b4d2b]">€{formatEUR(price)}</span>
                    <span className="mb-1 text-xs text-slate-500">pro Monat</span>
                  </div>
                </div>

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
                <Button className="mt-6 w-full" variant={popular ? "default" : "outline"} onClick={onOpenCalendly}>
                  Jetzt anfragen
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Alle Pakete beinhalten alles von Recherche bis Veröffentlichung – plus die Identifikation anonymer Unternehmensbesucher, transparente Reports und nachhaltige Lead-Gewinnung, für maximalen Outcome für dein Angebot.
        </p>
      </div>
    </section>
  );
}

/* ------------------------ AblaufSection – Stepper Timeline ----------------------- */
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

            {/* Stepper: eine Reihe, mit Snap-Scroll auf Mobile */}
            <div className="mt-12 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
              {/* Basislinie */}
              <div className="relative">
                <div className="absolute left-0 right-0 top-6 h-px bg-white/15" aria-hidden />

                <ol
                  className="
                    grid snap-x snap-mandatory gap-6
                    [grid-template-columns:repeat(5,minmax(240px,1fr))]
                    md:[grid-template-columns:repeat(5,1fr)]
                  "
                >
                  {ablauf.map(({ icon: Icon, title, desc }, i) => (
                    <li
                      key={i}
                      className="snap-start"
                    >
                      {/* Step-Header: Punkt + Nummer + Icon */}
                      <div className="relative mb-4 flex items-center gap-3">
                        {/* Punkt/Nummer liegt exakt auf der Basislinie */}
                        <div className="relative">
                          <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 h-7 w-7 rounded-full border border-white/25 bg-white/10 text-xs font-semibold grid place-items-center">
                            {i + 1}
                          </span>
                        </div>

                        <div className="ml-8 flex items-center gap-3 min-w-0">
                          <h3
                            className={`text-lg font-semibold leading-snug ${serifClass}`}
                            style={{
                              hyphens: "auto",
                              WebkitHyphens: "auto",
                              wordBreak: "normal",
                              overflowWrap: "break-word",
                            }}
                          >
                            {title}
                          </h3>
                          <div className="ml-auto hidden md:flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                            <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                          </div>
                        </div>
                      </div>

                      {/* Card-Inhalt – alle gleich hoch dank min-h */}
                      <div className="rounded-xl border border-white/15 bg-white/10 p-4 md:p-5 backdrop-blur-md shadow-sm h-full min-h-[150px]">
                        <p
                          className="text-sm leading-relaxed text-white/90"
                          style={{
                            hyphens: "auto",
                            WebkitHyphens: "auto",
                            wordBreak: "normal",
                            overflowWrap: "break-word",
                          }}
                        >
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}



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

