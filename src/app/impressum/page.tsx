"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          <a href="/#blog" className="text-sm" style={{ color: "#334155" }}>
            Blog-Beispiele
          </a>
          <a href="/#preise" className="text-sm" style={{ color: "#334155" }}>
            Preise
          </a>
          <a href="/#ablauf" className="text-sm" style={{ color: "#334155" }}>
            Ablauf
          </a>
          <a href="/#faq" className="text-sm" style={{ color: "#334155" }}>
            FAQ
          </a>
        </nav>
        <Button asChild>
          <a className="text-white" href="/#preise">
            Jetzt anfragen
          </a>
        </Button>
      </div>
    </header>
  );
}

// Neuer Marquee-Bereich
function FirmNameMarquee() {
  return (
    <div className="bg-slate-50 overflow-hidden py-3 border-b border-slate-100">
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
          className="flex w-max gap-16 will-change-transform"
          style={{ animation: "marquee-ltr 40s linear infinite" }}
        >
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className={`text-3xl md:text-4xl italic ${serifClass} text-slate-400 select-none`}
            >
              findbar
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-60%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <FirmNameMarquee /> {/* Marquee direkt unter dem Header */}

      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Impressum
        </h1>

        {/* Grüne Box wie Benefits Section */}
        <div
          className="rounded-2xl text-white p-8 shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${RG300}, ${RG600})`,
          }}
        >
          <div className="space-y-8 text-sm leading-6">
            <div>
              <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
              <p>
                Musterfirma GmbH<br />
                Musterstraße 1<br />
                12345 Musterstadt<br />
                Deutschland
              </p>
              <p>Vertreten durch: Max Mustermann</p>
            </div>

            <div>
              <h2 className="font-semibold">Kontakt</h2>
              <p>
                Telefon: +49 (0) 123 456789<br />
                E-Mail: hallo@musterfirma.de<br />
                Website: www.musterfirma.de
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Registereintrag</h2>
              <p>
                Amtsgericht Musterstadt – HRB 123456
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Umsatzsteuer-ID</h2>
              <p>DE123456789</p>
            </div>

            <div>
              <h2 className="font-semibold">Verantwortlich für den Inhalt</h2>
              <p>
                Max Mustermann<br />
                Musterstraße 1<br />
                12345 Musterstadt
              </p>
            </div>

            <p className="text-xs text-white/80">
              Stand: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        <div className="space-x-4">
          <a href="/impressum">Impressum</a>
          <a href="/agb">AGB</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <p className="mt-3">
          © {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.
        </p>
      </footer>
    </div>
  );
}
