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

// BENEFITS (laufen im Marquee)
const benefits = [
  { icon: Eye, label: "Erhöhte Sichtbarkeit", help: "Mehr Präsenz in Suchergebnissen." },
  { icon: Target, label: "Gezielte Reichweite", help: "Triff die passende Zielgruppe." },
  { icon: TrendingUp, label: "Mehr organischer Traffic", help: "Wachstum ohne Ads." },
  { icon: Clock, label: "Langfristige Wirkung", help: "Content wirkt monatelang." },
  { icon: Users, label: "Vertrauensaufbau", help: "Als Experte wahrgenommen werden." },
  { icon: Globe, label: "Internationale Reichweite", help: "Kunden über Grenzen hinaus." },
  { icon: BarChart, label: "Bessere Rankings", help: "Top-Positionen sichern." },
  { icon: Zap, label: "Schnelle Ergebnisse", help: "Frühe Verbesserungen sichtbar." },
  { icon: Award, label: "Starkes Markenimage", help: "Auftritt wirkt professionell." },
  { icon: Search, label: "Optimierte Auffindbarkeit", help: "Gefunden werden, wenn es zählt." },
];

// ABLAUF (Steps)
const ablauf = [
  { icon: ClipboardList, title: "Initiales Setup", desc: "Onboarding zu Zielgruppe, Themen, Keywords & Branding." },
  { icon: FileText, title: "Content-Plan-Abnahme", desc: "Gesamtplan (50–200 Artikel) zur Freigabe, Feedback wird gebündelt." },
  { icon: CheckCircle, title: "Beispiel-Content", desc: "2–3 Musterartikel – Stil & Struktur finalisieren." },
  { icon: Package, title: "Batch-Abnahmen", desc: "Regelmäßige Lieferungen (z. B. 10–20) – Prüfung & Freigabe." },
  { icon: BarChart3, title: "Status & Ergebnisse", desc: "Monatliche Reports: Artikel, Rankings, Traffic – Strategie justieren." },
];

// PRICING DATEN
const plans = [
  { id: "starter", articles: 90, price: 499, popular: false },
  { id: "growth", articles: 180, price: 899, popular: true },
  { id: "scale", articles: 360, price: 1399, popular: false },
];

const features = [
  "Recherche & Keyword-Analyse (automatisiert + manuell)",
  "Expertenzitate & Markenstil",
  "Perfekte Tech-SEO-Ausrichtung",
  "Interne & externe Verlinkung",
  "Veröffentlichung im CMS",
];

function formatEUR(n: number) {
  return n.toLocaleString("de-DE");
}

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 gap-8">
        <nav className="flex gap-6">
          <a href="#blog" className="text-sm" style={{ color: "#334155" }}>Blog-Beispiele</a>
          <a href="#preise" className="text-sm" style={{ color: "#334155" }}>Preise</a>
          <a href="#kontakt" className="text-sm" style={{ color: "#334155" }}>Kontakt</a>
        </nav>
        <Button asChild>
          <a className="text-white" href="#preise">Jetzt anfragen</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative text-center py-28 px-6 overflow-hidden bg-white">
      <svg className="absolute inset-0 h-full w-full opacity-5" viewBox="0 0 500 200" preserveAspectRatio="none">
        <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,180 60,165 120,160 180,140 240,120 300,95 360,80 420,55 480,30 500,20" />
      </svg>
      <h1 className={`text-4xl md:text-6xl tracking-tight ${serifClass}`}>
        <span className="italic font-bold">findbar</span>: Skaliere Dein Unternehmen mit
        <br className="hidden md:inline" /> KI-optimierten Blog-Artikeln
      </h1>
      <p className="mt-5 mx-auto max-w-2xl text-slate-600">
        Wir produzieren skalierbare und suchmaschinenoptimierte Blogartikel mit Hilfe von KI – zu einem Bruchteil der bisher üblichen Preise.
      </p>
      <Button asChild>
        <a className="mt-6 inline-block text-white" href="#preise">Pakete ansehen</a>
      </Button>
    </section>
  );
}

function BenefitsMarquee() {
  return (
    <section className="relative overflow-hidden py-12 text-white" style={{ background: `linear-gradient(90deg, ${RG600}, ${RG300})` }}>
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max gap-8 will-change-transform" style={{ animation: "marquee 80s linear infinite" }}>
          {[...benefits, ...benefits, ...benefits].map(({ icon: Icon, label, help }, i) => (
            <div key={i} className="shrink-0 w-64 rounded-xl border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur-sm shadow-sm">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
              </div>
              <div className={`text-lg italic ${serifClass}`}>{label}</div>
              <div className="mt-2 text-xs leading-relaxed text-white/85 break-words">{help}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="py-20 border-t border-slate-100 text-center bg-white">
      <h2 className={`text-3xl font-semibold ${serifClass}`}>Blog-Beispiele</h2>
      <p className="mt-4 text-slate-600">Drei Beispiele aus unterschiedlichen Branchen – sauber strukturiert, suchmaschinenoptimiert, im Markenstil.</p>
      <div className="mt-10 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3 mx-auto">
        {[
          { title: "Gesundheit: 10 Anzeichen für XYZ", tease: "Medizinisch recherchiert, Laienverständlich, E-A-T-konform." },
          { title: "Finanzen: ETF-Strategien 2025", tease: "Aktuelle Quellen, klare Struktur für Top-Rankings." },
          { title: "Nachhaltigkeit: CO₂ im Alltag senken", tease: "Praxistipps + Expertenzitate für Trust & Shares." },
        ].map((b, i) => (
          <article key={i} className="rounded-xl border border-slate-200 p-6 text-left shadow-sm hover:shadow-md transition-shadow">
            <h3 className={`text-lg ${serifClass} mb-1`}>{b.title}</h3>
            <p className="text-sm text-slate-600">{b.tease}</p>
            <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#1b4d2b]">
              Beispiel ansehen <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function UnserZielSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-35">
        <div
          className="absolute -inset-40 blur-3xl [animation:aurora_18s_ease-in-out_infinite]"
          style={{
            background: `
              radial-gradient(60% 60% at 20% 30%, ${RG300}66, transparent 60%),
              radial-gradient(50% 50% at 80% 20%, ${RG600}55, transparent 55%),
              radial-gradient(40% 40% at 60% 80%, ${RG300}55, transparent 60%)
            `
          }}
        />
      </div>

      <style>{`
        @keyframes aurora {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-4%, 2%, 0) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .\\[animation\\:aurora_18s_ease-in-out_infinite\\] {
            animation: none;
          }
        }
      `}</style>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className={`text-3xl font-semibold ${serifClass}`}>
            Unser Ziel: minimaler Zeitaufwand für dich
          </h2>
          <p className="mt-4 max-w-prose text-slate-600">
            Wir orchestrieren deinen Content-Motor so, dass du <em>möglichst wenig operativen Aufwand</em> hast.
            Einmal Onboarding, Plan freigeben, 2–3 Musterartikel abnicken – danach liefern wir regelmäßig in Batches
            und halten dich mit klaren Status-Updates auf dem Laufenden.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: RG600 }}></span>
              <span>Einmal einrichten – nachhaltig profitieren.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: RG600 }}></span>
              <span>Freigaben in Batches statt Micromanagement.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: RG600 }}></span>
              <span>Transparente Reports: Veröffentlichungen, Rankings, Traffic.</span>
            </li>
          </ul>
          <div className="mt-8 flex gap-3">
            <Button asChild><a href="#preise" className="text-white">Pakete ansehen</a></Button>
            <Button variant="outline" asChild><a href="#kontakt">Kurz-Onboarding starten</a></Button>
          </div>
        </div>

        <div className="grid place-items-center">
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-10 -z-10 blur-2xl"
              style={{ background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)` }}
            />
            <img
              src="https://chatgpt.com/s/m_689a3b8887608191ae4d7e21c361c306"
              alt="KI-Roboter spannt einen Bogen"
              className="relative z-20 w-4/5 translate-x-6 rounded-xl shadow-md"
            />
            <img
              src="https://chatgpt.com/s/m_689a3b8887608191ae4d7e21c361c306"
              alt="Zielscheibe"
              className="absolute right-0 top-1/2 z-10 w-2/5 -translate-y-1/2 rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


function PreiseSection() {
  return (
    <section id="preise" className="py-20 border-t border-slate-100 bg-white text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className={`text-3xl font-semibold ${serifClass}`}>Unsere Pakete</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map(({ id, articles, price, popular }) => {
            return (
              <div
                key={id}
                className={`group relative rounded-2xl bg-white p-6 text-left shadow-sm border-2 transition-all hover:shadow-lg ${
                  popular ? "ring-2 ring-[#1b4d2b]/40 scale-105 border-[#1b4d2b]" : "border-[#1b4d2b]"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm" style={{ backgroundColor: RG600 }}>
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
                      <span className="mt-0.5 rounded-full p-1 bg-[#1b4d2b1A] text-[#1b4d2b]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-6 w-full" variant={popular ? "default" : "outline"}>
                  Jetzt anfragen
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Alle Pakete beinhalten: Recherche, Verschriftlichung, Expertenzitate, Markenstil, perfekte Tech-SEO, automatisierte Keyword-Recherche & Nutzung, internes/externes Linking und Veröffentlichung im CMS.
        </p>
      </div>
    </section>
  );
}

function AblaufSection() {
  return (
    <section id="ablauf" className="py-20 text-white" style={{ background: `linear-gradient(90deg, ${RG600}, ${RG300})` }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className={`mb-12 text-center text-3xl font-semibold ${serifClass}`}>Unser Ablauf – transparent & effizient</h2>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
          {ablauf.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center md:w-1/5">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1b4d2b]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className={`mb-2 text-lg font-semibold ${serifClass}`}>{title}</h3>
              <p className="text-sm text-white/90">{desc}</p>
              {idx < ablauf.length - 1 && (
                <ArrowRight className="absolute top-6 right-[-18px] hidden h-5 w-5 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KontaktSection() {
  return (
    <section id="kontakt" className="py-20 border-t border-slate-100 text-center bg-white">
      <h2 className={`text-3xl font-semibold ${serifClass}`}>Kontakt</h2>
      <p className="mt-4 text-slate-600">Schreib uns gerne für weitere Informationen oder ein individuelles Angebot.</p>
      <form className="mx-auto mt-8 grid max-w-lg gap-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" className="rounded-lg border border-slate-300 p-3" />
        <input type="email" placeholder="E-Mail" className="rounded-lg border border-slate-300 p-3" />
        <textarea placeholder="Nachricht" className="h-32 rounded-lg border border-slate-300 p-3" />
        <Button type="submit">Senden</Button>
      </form>
    </section>
  );
}

export default function FindbarPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <Hero />
      <BenefitsMarquee />
      <BlogSection />
      <UnserZielSection />
      <PreiseSection />
      <AblaufSection />
      <KontaktSection />
      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        <div className="space-x-4">
          <a href="#">Impressum</a>
          <a href="#">AGB</a>
          <a href="#">Datenschutz</a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
