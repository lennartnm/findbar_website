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

/* -------------------------------- i18n -------------------------------- */

type Lang = "de" | "en";

const dictionaries: Record<Lang, any> = {
  de: {
    langLabel: "DE",
    nav: { blog: "Blog-Beispiele", prices: "Preise", process: "Ablauf", faq: "FAQ" },
    cta: { request: "Jetzt anfragen", viewPackages: "Pakete ansehen" },
    hero: {
      titlePre: "findbar:",
      title: "Skaliere Dein Unternehmen mit",
      titleLine2: "KI-optimierten Blog-Artikeln",
      sub: "Wir produzieren skalierbare und suchmaschinenoptimierte Blogartikel mit Hilfe von KI – zu einem Bruchteil der bisher üblichen Preise.",
    },
    marqueeLeads: ["Mehr Leads", "Mehr Sichtbarkeit"],
    sections: {
      blogExamples: { title: "Blog-Beispiele", sub: "Drei SEO-optimierte Blogartikel aus verschiedenen Branchen – perfekt strukturiert, suchmaschinenoptimiert und im Markenstil." },
      helps: {
        title: "So helfen dir KI-optimierte Blogartikel",
        sub: "Unsere Artikel verbinden modernste KI-Technologie mit menschlicher Expertise – für Inhalte, die ranken, gelesen und geteilt werden.",
        items: {
          seo: { title: "SEO-optimiert", desc: "Wir integrieren relevante Keywords, um bessere Google-Platzierungen zu sichern." },
          fast: { title: "Schnelle Produktion", desc: "Von der Idee bis zur Veröffentlichung in wenigen Tagen." },
          evergreen: { title: "Langfristiger Traffic", desc: "Evergreen-Content sorgt für monatelangen, konstanten Besucherstrom." },
          niche: { title: "Branchenspezifisch", desc: "Inhalte, die exakt zu deinem Geschäft und deiner Zielgruppe passen." },
        },
      },
      done4you: {
        label: "Done 4 You",
        headline: "Minimaler Zeitaufwand für dich",
        body: "Wir orchestrieren deinen Content-Motor so, dass du möglichst wenig operativen Aufwand hast. Einmal Onboarding, Plan freigeben, 2–3 Musterartikel abnicken – danach liefern wir regelmäßig in Batches und halten dich mit klaren Status-Updates auf dem Laufenden.",
        bullets: [
          "Einmal einrichten – nachhaltig profitieren.",
          "Freigaben in Batches statt Micromanagement.",
          "Transparente Reports: Veröffentlichungen, Rankings, Traffic.",
        ],
      },
      audience: {
        title: "An wen richtet sich unser Angebot?",
        sub: "Unsere KI-optimierten Blogartikel sind für alle, die ihre Reichweite erhöhen und Kunden gezielt ansprechen wollen.",
        items: {
          smb: { title: "KMU & Selbstständige", desc: "Regelmäßig Content veröffentlichen, ohne sich um Themenfindung oder SEO kümmern zu müssen." },
          mkt: { title: "Marketing-Teams", desc: "Suchmaschinen dominieren und Content-Strategien effizient skalieren." },
          pub: { title: "Blogger & Publisher", desc: "Passiv Traffic und Leads generieren – mit Evergreen-Content." },
          local: { title: "Lokale Dienstleister", desc: "In der Region sichtbar bleiben und gezielt neue Kunden gewinnen." },
        },
      },
      prices: { title: "Unsere Pakete", bestseller: "Meistverkauft", perMonth: "pro Monat", unit: "Artikel / Monat" },
      process: { title: "Unser Ablauf – transparent & effizient" },
      faq: { title: "Häufige Fragen" },
    },
    benefits: {
      increased_visibility: { label: "Erhöhte Sichtbarkeit", help: "Mehr Präsenz in Suchergebnissen." },
      targeted_reach: { label: "Gezielte Reichweite", help: "Triff die passende Zielgruppe." },
      more_traffic: { label: "Mehr organischer Traffic", help: "Wachstum ohne Ads." },
      long_term: { label: "Langfristige Wirkung", help: "Content wirkt monatelang." },
      trust: { label: "Vertrauensaufbau", help: "Als Experte wahrgenommen werden." },
      intl: { label: "Internationale Reichweite", help: "Kunden über Grenzen hinaus." },
      rankings: { label: "Bessere Rankings", help: "Top-Positionen sichern." },
      fast_results: { label: "Schnelle Ergebnisse", help: "Frühe Verbesserungen sichtbar." },
      brand: { label: "Starkes Markenimage", help: "Auftritt wirkt professionell." },
      findability: { label: "Optimierte Auffindbarkeit", help: "Gefunden werden, wenn es zählt." },
    },
    steps: {
      setup: { title: "Initiales Setup", desc: "Onboarding zu Zielgruppe, Themen, Keywords & Branding." },
      plan: { title: "Content-Plan", desc: "Freigabe des Themenentwurfs für die nächsten 30 Tage." },
      samples: { title: "Beispiel-Texte", desc: "Manuelle Abnahme der ersten zwei bis drei Blogartikel." },
      batches: { title: "Batch-Abnahmen", desc: "Lieferung der ausstehenden Blog-Artikel für den Monat." },
      reporting: { title: "Reporting", desc: "Berichte zu Performance, Impressionen, Anfragen und mehr." },
    },
    features: [
      "Recherche & Keyword-Analyse (automatisiert + manuell)",
      "Expertenzitate & Markenstil",
      "Perfekte Tech-SEO-Ausrichtung",
      "Interne & externe Verlinkung",
      "Veröffentlichung im CMS",
    ],
    faqs: [
      { q: "Wie schnell sehe ich Ergebnisse?", a: "Oft schon nach wenigen Wochen – Google braucht jedoch manchmal etwas länger, um neue Inhalte vollständig zu indexieren." },
      { q: "Muss ich selbst Themen recherchieren?", a: "Nein. Wir übernehmen die komplette Themen- und Keyword-Recherche für dich." },
      { q: "Ist das auch für meine Branche geeignet?", a: "Ja. Wir erstellen Inhalte für nahezu jede Branche – ob B2B, B2C oder Nischenmärkte." },
      { q: "Was passiert, wenn ich unzufrieden bin?", a: "Wir passen die Inhalte nach deinem Feedback an, bis du zufrieden bist." },
      { q: "Wie funktioniert die Abrechnung?", a: "Transparent, monatlich und jederzeit kündbar." },
    ],
    blog: {
      items: {
        b1: {
          title: "Cabriowetter in Deutschland 2025 – Die schönsten Streckenempfehlungen",
          tease: "Entdecke die besten Cabrio-Routen in Deutschland: Von malerischen Küstenstraßen bis zu kurvigen Bergpassagen – perfekt für sonnige Tage.",
          image: "/Cabriotouren in Deutschland.png",
          alt: "Cabrio auf panoramischer Landstraße bei gutem Wetter in Deutschland",
        },
        b2: {
          title: "Küchenkauf 2025 – 7 Dinge, die du unbedingt beachten musst",
          tease: "Von der richtigen Planung bis zur Auswahl langlebiger Materialien: So kaufst du deine Traumküche und vermeidest teure Fehler.",
          image: "/Moderne Kueche.png",
          alt: "Moderne Küche mit viel Tageslicht und Kücheninsel",
        },
        b3: {
          title: "CNC Maschine mieten statt kaufen – Kosten senken & flexibel bleiben",
          tease: "Erfahre, wann sich CNC-Maschinen-Miete lohnt, welche Kostenfallen du vermeiden solltest und wie du den richtigen Anbieter findest.",
          image: "/CNC Maschine mieten.png",
          alt: "Moderne CNC-Maschine in sauberer Werkstatt",
        },
      },
    },
    modal: { close: "Schließen", calendlyTitle: "Calendly – Termin buchen" },
    footer: { imprint: "Impressum", terms: "AGB", privacy: "Datenschutz", rights: "Alle Rechte vorbehalten." },
  },
  en: {
    langLabel: "EN",
    nav: { blog: "Blog examples", prices: "Pricing", process: "Process", faq: "FAQ" },
    cta: { request: "Request now", viewPackages: "View packages" },
    hero: {
      titlePre: "findbar:",
      title: "Scale your business with",
      titleLine2: "AI-optimized blog articles",
      sub: "We produce scalable, SEO-optimized blog posts with AI—at a fraction of typical costs.",
    },
    marqueeLeads: ["More leads", "More visibility"],
    sections: {
      blogExamples: { title: "Blog examples", sub: "Three SEO-optimized blog posts from different industries – perfectly structured, search-optimized, and on-brand." },
      helps: {
        title: "How AI-optimized posts help",
        sub: "Our articles blend state-of-the-art AI with human expertise—for content that ranks, gets read, and gets shared.",
        items: {
          seo: { title: "SEO-optimized", desc: "We integrate relevant keywords to secure better Google rankings." },
          fast: { title: "Fast production", desc: "From idea to publish in just a few days." },
          evergreen: { title: "Long-term traffic", desc: "Evergreen content keeps traffic flowing for months." },
          niche: { title: "Industry-specific", desc: "Content tailored exactly to your business and audience." },
        },
      },
      done4you: {
        label: "Done 4 You",
        headline: "Minimal time investment for you",
        body: "We orchestrate your content engine so you have as little operational effort as possible. One onboarding, approve the plan, sign off 2–3 sample posts—then we deliver in batches and keep you updated with clear status reports.",
        bullets: [
          "Set up once – benefit long term.",
          "Batch approvals instead of micromanagement.",
          "Transparent reports: publications, rankings, traffic.",
        ],
      },
      audience: {
        title: "Who is this for?",
        sub: "Our AI-optimized articles are for anyone who wants to grow reach and target customers precisely.",
        items: {
          smb: { title: "SMBs & freelancers", desc: "Publish consistently without worrying about topics or SEO." },
          mkt: { title: "Marketing teams", desc: "Dominate search and scale content strategies efficiently." },
          pub: { title: "Bloggers & publishers", desc: "Generate passive traffic and leads with evergreen content." },
          local: { title: "Local service providers", desc: "Stay visible in your region and win new customers." },
        },
      },
      prices: { title: "Our packages", bestseller: "Best seller", perMonth: "per month", unit: "articles / month" },
      process: { title: "Our process – transparent & efficient" },
      faq: { title: "Frequently asked questions" },
    },
    benefits: {
      increased_visibility: { label: "Increased visibility", help: "More presence in search results." },
      targeted_reach: { label: "Targeted reach", help: "Reach the right audience." },
      more_traffic: { label: "More organic traffic", help: "Growth without ads." },
      long_term: { label: "Long-term impact", help: "Content that works for months." },
      trust: { label: "Build trust", help: "Be perceived as an expert." },
      intl: { label: "International reach", help: "Customers beyond borders." },
      rankings: { label: "Better rankings", help: "Secure top positions." },
      fast_results: { label: "Fast results", help: "Early improvements visible." },
      brand: { label: "Stronger brand image", help: "A more professional presence." },
      findability: { label: "Optimized findability", help: "Get found when it matters." },
    },
    steps: {
      setup: { title: "Initial setup", desc: "Onboarding for target audience, topics, keywords & branding." },
      plan: { title: "Content plan", desc: "Approve the draft topics for the next 30 days." },
      samples: { title: "Sample posts", desc: "Manual approval of the first two to three articles." },
      batches: { title: "Batch deliveries", desc: "Delivery of the remaining articles for the month." },
      reporting: { title: "Reporting", desc: "Reports on performance, impressions, inquiries and more." },
    },
    features: [
      "Research & keyword analysis (automated + manual)",
      "Expert quotes & brand voice",
      "Perfect technical SEO alignment",
      "Internal & external linking",
      "Publishing in the CMS",
    ],
    faqs: [
      { q: "How fast will I see results?", a: "Often within a few weeks—though Google can take longer to fully index new content." },
      { q: "Do I have to research topics myself?", a: "No. We handle the entire topic and keyword research for you." },
      { q: "Is this suitable for my industry?", a: "Yes. We create content for nearly any industry—B2B, B2C or niche markets." },
      { q: "What if I'm not satisfied?", a: "We revise content based on your feedback until you're happy." },
      { q: "How does billing work?", a: "Transparent, monthly, and cancellable at any time." },
    ],
    blog: {
      items: {
        b1: {
          title: "Convertible weather in Germany 2025 – The most beautiful routes",
          tease: "Discover the best convertible routes in Germany: from scenic coastal roads to winding mountain passes—perfect for sunny days.",
          image: "/Cabriotouren in Deutschland.png",
          alt: "Convertible on a scenic country road in Germany",
        },
        b2: {
          title: "Kitchen purchase 2025 – 7 things you must consider",
          tease: "From proper planning to durable materials: buy your dream kitchen and avoid costly mistakes.",
          image: "/Moderne Kueche.png",
          alt: "Modern kitchen with daylight and island",
        },
        b3: {
          title: "Renting a CNC machine vs buying – cut costs & stay flexible",
          tease: "When renting pays off, pitfalls to avoid, and how to find the right provider.",
          image: "/CNC Maschine mieten.png",
          alt: "Modern CNC machine in a clean workshop",
        },
      },
    },
    modal: { close: "Close", calendlyTitle: "Calendly – Book a call" },
    footer: { imprint: "Imprint", terms: "Terms", privacy: "Privacy", rights: "All rights reserved." },
  },
};

function useNested(obj: any, path: string): any {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

const I18nCtx = React.createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  nf: Intl.NumberFormat;
  dict: any;
} | null>(null);

function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>(() =>
    typeof window !== "undefined"
      ? ((localStorage.getItem("lang") as Lang) || "de")
      : "de"
  );
  React.useEffect(() => {
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const dict = dictionaries[lang];
  const t = (path: string) => useNested(dict, path) ?? path;
  const nf = React.useMemo(
    () =>
      new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [lang]
  );
  return (
    <I18nCtx.Provider value={{ lang, setLang, t, nf, dict }}>
      {children}
    </I18nCtx.Provider>
  );
}

function useI18n() {
  const ctx = React.useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/* ---------------------------- Styling consts --------------------------- */
const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";
const containerClass = "w-full max-w-6xl mx-auto px-6"; // Einheitlicher Container

/* -------------------------- Datenstrukturen ---------------------------- */

const benefitKeys = [
  "increased_visibility",
  "targeted_reach",
  "more_traffic",
  "long_term",
  "trust",
  "intl",
  "rankings",
  "fast_results",
  "brand",
  "findability",
] as const;
const benefitIcons = [Eye, Target, TrendingUp, Clock, Users, Globe, BarChart, Zap, Award, Search];

const stepKeys = ["setup", "plan", "samples", "batches", "reporting"] as const;
const stepIcons = [ClipboardList, FileText, CheckCircle, Package, BarChart3];

const plans = [
  { id: "starter", articles: 30, price: 499, popular: false },
  { id: "growth", articles: 90, price: 799, popular: true },
  { id: "scale", articles: 180, price: 1099, popular: false },
];

/* ----------------------------- Utilities ------------------------------ */
function ArticleUnit() {
  const { t } = useI18n();
  return <>{t("sections.prices.unit")}</>;
}

/* ----------------------------- Components ----------------------------- */

function CalendlyModal({ open, onClose, url }: { open: boolean; onClose: () => void; url: string; }) {
  const { t } = useI18n();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-label="Overlay" onClick={onClose} />
      <div className="relative z-[101] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <button onClick={onClose} className="rounded-md border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50" aria-label="Close popup">
            {t("modal.close")}
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe src={url} title={t("modal.calendlyTitle")} className="h-full w-full" frameBorder={0} allow="clipboard-write; fullscreen" />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { t, lang, setLang, dict } = useI18n();
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          <a href="#blog" className="text-sm" style={{ color: "#334155" }}>{t("nav.blog")}</a>
          <a href="#preise" className="text-sm" style={{ color: "#334155" }}>{t("nav.prices")}</a>
          <a href="#ablauf" className="text-sm" style={{ color: "#334155" }}>{t("nav.process")}</a>
          <a href="#faq" className="text-sm" style={{ color: "#334155" }}>{t("nav.faq")}</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild>
            <a className="text-white" href="#preise">{t("cta.request")}</a>
          </Button>
          <div className="flex items-center gap-2 text-sm" aria-label="Language switch">
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 rounded ${lang === "de" ? "bg-slate-900 text-white" : "border border-slate-200"}`}
              aria-pressed={lang === "de"}
            >DE</button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded ${lang === "en" ? "bg-slate-900 text-white" : "border border-slate-200"}`}
              aria-pressed={lang === "en"}
            >EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(2,6,23,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.04) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        backgroundPosition: "center",
        maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
      }} />

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="h-full w-full text-slate-100 animate-graph-reveal will-change-clip-path">
          <svg className="h-full w-full" viewBox="0 0 500 200" preserveAspectRatio="none">
            <polyline fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" points="0,180 60,165 120,160 180,140 240,120 300,95 360,80 420,55 480,30 500,20" />
          </svg>
        </div>
      </div>

      <div className="relative z-20">
        <h1 className={`text-4xl md:text-6xl tracking-tight ${serifClass}`}>
          <span className="italic font-bold">{t("hero.titlePre")}</span> {t("hero.title")}<br className="hidden md:inline" /> {t("hero.titleLine2")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">{t("hero.sub")}</p>
        <Button asChild>
          <a className="mt-6 inline-block text-white" href="#preise">{t("cta.viewPackages")}</a>
        </Button>
      </div>

      <style>{`
        .animate-graph-reveal { clip-path: inset(0 100% 0 0); animation: graph-reveal 1.2s ease-out forwards .12s; }
        @keyframes graph-reveal { to { clip-path: inset(0 0 0 0); } }
        @media (prefers-reduced-motion: reduce) { .animate-graph-reveal { animation: none; clip-path: inset(0 0 0 0); } }
      `}</style>
    </section>
  );
}

function BenefitsMarquee() {
  const { dict } = useI18n();
  return (
    <section className="relative overflow-hidden py-12 text-white" style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}>
      <div className="relative mx-auto max-w-[100vw]" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <div className="flex w-max gap-8 will-change-transform" style={{ animation: "marquee 80s linear infinite" }}>
          {benefitKeys.map((key, i) => {
            const Icon = benefitIcons[i];
            const b = dict.benefits[key];
            return (
              <div key={key} className="shrink-0 w-64 rounded-xl border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur-sm shadow-sm">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                </div>
                <div className={`text-lg italic ${serifClass}`}>{b.label}</div>
                <div className="mt-2 break-words text-xs leading-relaxed text-white/85">{b.help}</div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function BlogSection() {
  const { t, dict } = useI18n();
  const items = [dict.blog.items.b1, dict.blog.items.b2, dict.blog.items.b3];
  return (
    <section id="blog" className="bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>{t("sections.blogExamples.title")}</h2>
        <p className="mt-4 text-center text-slate-600">{t("sections.blogExamples.sub")}</p>
        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((b: any, i: number) => (
            <article key={i} className="overflow-hidden rounded-xl border border-slate-200 text-left shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img src={b.image} alt={b.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className={`mb-1 text-lg ${serifClass}`}>{b.title}</h3>
                <p className="text-sm text-slate-600">{b.tease}</p>
                <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#1b4d2b]" aria-label={`Beispiel ansehen: ${b.title}`}>
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

function HowItHelpsSection() {
  const { dict } = useI18n();
  const items = [
    { data: dict.sections.helps.items.seo, icon: Search },
    { data: dict.sections.helps.items.fast, icon: Zap },
    { data: dict.sections.helps.items.evergreen, icon: TrendingUp },
    { data: dict.sections.helps.items.niche, icon: CheckCircle },
  ];
  return (
    <section id="how-it-helps" className="py-20 border-t border-slate-100">
      <div className={containerClass}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl font-semibold ${serifClass}`}>{dict.sections.helps.title}</h2>
            <p className="mt-4 text-slate-600">{dict.sections.helps.sub}</p>
            <ul className="mt-6 space-y-4">
              {items.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="rounded-full bg-[#1b4d2b1A] p-2 text-[#1b4d2b]"><v.icon className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-semibold">{v.data.title}</h4>
                    <p className="text-sm text-slate-600">{v.data.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-10 -z-10 blur-2xl" style={{ background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)` }} />
            <img src="/Lupe.png" alt="Darstellung von KI-optimierten Blogartikeln" className="relative z-20 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function UnserZielSection() {
  const { dict, t } = useI18n();
  return (
    <section id="done4you" className="py-20">
      <div className={containerClass}>
        <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl" style={{ background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)` }}>
          <div className="relative z-10 grid items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-10 -z-10 blur-2xl" style={{ background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)` }} />
                <img src="/Ziele erreichen mit Findbar.png" alt="Done 4 You Illustration" className="relative z-20 w-full rounded-xl" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm uppercase tracking-wide text-white/70">{dict.sections.done4you.label}</p>
              <h2 className={`mt-2 text-3xl font-semibold ${serifClass}`}>{dict.sections.done4you.headline}</h2>
              <p className="mt-4 max-w-prose text-white/90">{dict.sections.done4you.body}</p>
              <ul className="mt-6 space-y-3 text-white/90">
                {dict.sections.done4you.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-white" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button asChild><a href="#preise" className="text-white">{t("cta.viewPackages")}</a></Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function IdentificationSection() {
  const { dict } = useI18n();
  const items = [dict.sections.audience.items.smb, dict.sections.audience.items.mkt, dict.sections.audience.items.pub, dict.sections.audience.items.local];
  const icons = [Users, Target, Globe, Search];
  return (
    <section id="identification" className="bg-white py-20 border-t border-slate-100">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>{dict.sections.audience.title}</h2>
        <p className="mt-4 text-center text-slate-600">{dict.sections.audience.sub}</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {items.map((z: any, i: number) => {
            const Icon = icons[i];
            return (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4d2b1A] text-[#1b4d2b]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`mb-2 text-lg font-semibold ${serifClass}`}>{z.title}</h3>
                <p className="text-sm text-slate-600">{z.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadsMarquee() {
  const { dict } = useI18n();
  const items = dict.marqueeLeads as string[];
  const icons = [Users, Eye];
  return (
    <section id="leads" className="relative overflow-hidden py-6" style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}>
      <div className="relative mx-auto max-w-[100vw]" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <div className="flex w-max gap-12 will-change-transform" style={{ animation: "marquee-ltr 70s linear infinite" }} aria-hidden>
          {[...Array(8)].flatMap((_, k) =>
            items.map((text: string, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={`${k}-${i}`} className="flex items-center gap-2 shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                  </div>
                  <span className={`text-2xl md:text-4xl italic ${serifClass} select-none`} style={{ color: "#ffffff", letterSpacing: "0.04em" }}>{text}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
      <style>{`
        @keyframes marquee-ltr { from { transform: translateX(-60%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
}

function PreiseSection({ onOpenCalendly }: { onOpenCalendly: () => void }) {
  const { dict, nf } = useI18n();
  return (
    <section id="preise" className="border-t border-slate-100 bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>{dict.sections.prices.title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map(({ id, articles, price, popular }) => (
            <div key={id} className={`group relative rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:shadow-lg ${popular ? "scale-105 border-[#1b4d2b] ring-2 ring-[#1b4d2b]/40" : "border-[#1b4d2b]"}`}>
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm" style={{ backgroundColor: RG600 }}>
                  {dict.sections.prices.bestseller}
                </div>
              )}
              <h3 className={`text-lg font-semibold ${serifClass}`}>{articles} {dict.sections.prices.unit}</h3>
              <div className="mt-4">
                <div className="inline-flex items-end gap-1">
                  <span className="text-4xl font-bold text-[#1b4d2b]">{nf.format(price)}</span>
                  <span className="mb-1 text-xs text-slate-500">{dict.sections.prices.perMonth}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                {dict.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 rounded-full bg-[#1b4d2b1A] p-1 text-[#1b4d2b]"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-sm text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={popular ? "default" : "outline"} onClick={onOpenCalendly}>
                {dictionaries.de.cta.request === dictionaries.en.cta.request ? dict.cta.request : dict.cta.request}
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          {/* Optional: einen eigenen Übersetzungsschlüssel anlegen, hier vereinfachend weggelassen */}
        </p>
      </div>
    </section>
  );
}

function AblaufSection() {
  const { dict } = useI18n();
  return (
    <section id="ablauf" className="py-20">
      <div className={containerClass}>
        <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl" style={{ background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)` }}>
          <div className="relative z-10 px-6 py-12 md:px-12">
            <h2 className={`text-center text-3xl font-semibold ${serifClass}`}>{dict.sections.process.title}</h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
              {stepKeys.map((k, idx) => {
                const Icon = stepIcons[idx];
                const s = dict.steps[k];
                return (
                  <div key={k} className="group relative rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm font-semibold">{idx + 1}</div>
                    <div className="absolute right-4 top-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                      </div>
                    </div>
                    <div className="pt-12">
                      <h3 className={`text-lg font-semibold ${serifClass}`}>{s.title}</h3>
                      <p className="mt-2 text-sm text-white/90">{s.desc}</p>
                    </div>
                    <div className="absolute inset-x-0 -bottom-px h-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.7), rgba(255,255,255,0.0))" }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { dict } = useI18n();
  const faqs = dict.faqs as { q: string; a: string }[];
  return (
    <section id="faq" className="bg-slate-50 py-20 border-t border-slate-100">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold ${serifClass}`}>{dict.sections.faq.title}</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm text-left">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-left">
                <span>{f.q}</span>
                <span className="ml-4 transition-transform group-open:rotate-180"><ArrowRight className="h-4 w-4 text-slate-500" /></span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FindbarPage() {
  const [calOpen, setCalOpen] = React.useState(false);
  const calendlyUrl = "https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung";
  const year = new Date().getFullYear();

  return (
    <I18nProvider>
      <div className="bg-white text-slate-900">
        <Header />
        <Hero />
        <BenefitsMarquee />
        <BlogSection />
        <HowItHelpsSection />
        <UnserZielSection />
        <IdentificationSection />
        <LeadsMarquee />
        <PreiseSection onOpenCalendly={() => setCalOpen(true)} />
        <AblaufSection />
        <FAQSection />

        <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
          <div className="space-x-4">
            <a href="#">{dictionaries.de.footer.imprint === dictionaries.en.footer.imprint ? "Impressum" : undefined}</a>
            <a href="#">{dictionaries.de.footer.terms === dictionaries.en.footer.terms ? "AGB" : undefined}</a>
            <a href="#">{dictionaries.de.footer.privacy === dictionaries.en.footer.privacy ? "Datenschutz" : undefined}</a>
          </div>
          <p className="mt-3">© {year} findbar. {/* Rechte-Hinweis wird über Sprach-Attribut im <html> unterstützt */}</p>
        </footer>

        <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} url={calendlyUrl} />
      </div>
    </I18nProvider>
  );
}
