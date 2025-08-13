"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const RG600 = "#1b4d2b";
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

export default function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Datenschutzerklärung
        </h1>

        <div
          className="rounded-2xl text-white p-8 shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${RG300}, ${RG600})`,
          }}
        >
          <div className="space-y-8 text-sm leading-6">
            <div>
              <h2 className="font-semibold">1. Verantwortliche Stelle</h2>
              <p>
                Musterfirma GmbH<br />
                Musterstraße 1, 12345 Musterstadt<br />
                E-Mail: hallo@musterfirma.de
              </p>
            </div>

            <div>
              <h2 className="font-semibold">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung einer funktionsfähigen Website
                sowie unserer Inhalte und Leistungen erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">3. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies, um die Nutzung zu analysieren und bestimmte Funktionen bereitzustellen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">4. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten
                sowie das Recht auf Datenübertragbarkeit.
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
