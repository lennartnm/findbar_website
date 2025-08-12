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
      {/* Gepunktetes Pattern mit Fading */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          color: "#1b4d2b",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      ></div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className={`text-3xl font-semibold ${serifClass}`}>Unser Ziel: minimaler Zeitaufwand für dich</h2>
          <p className="mt-4 max-w-prose text-slate-600">
            Wir orchestrieren deinen Content-Motor so, dass du <em>möglichst wenig operativen Aufwand</em> hast.
            Einmal Onboarding, Plan freigeben, 2–3 Musterartikel abnicken – danach liefern wir regelmäßig in Batches
            und halten dich mit klaren Status-Updates auf dem Laufenden.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{backgroundColor: RG600}}></span><span>Einmal einrichten – nachhaltig profitieren.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{backgroundColor: RG600}}></span><span>Freigaben in Batches statt Micromanagement.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{backgroundColor: RG600}}></span><span>Transparente Reports: Veröffentlichungen, Rankings, Traffic.</span></li>
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
              style={{
                background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)`
              }}
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
