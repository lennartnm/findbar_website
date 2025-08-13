// 🚫 Kein "use client" hier oben!

import React from "react";
import Header from "@/components/Header"; // Client-Komponente separat
import { Button } from "@/components/ui/button";

const RG600 = "#1b4d2b";
const RG300 = "#7ca98e";
const serifClass = "font-serif";

// ✅ Noindex für Suchmaschinen
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function AGBPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div
          className="rounded-2xl text-white p-8 shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${RG300}, ${RG600})`,
          }}
        >
          <div className="space-y-8 text-sm leading-6">
            <div>
              <h2 className="font-semibold">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
                die zwischen uns und unseren Kunden geschlossen werden.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">2. Vertragsschluss</h2>
              <p>
                Der Vertrag kommt durch schriftliche Bestätigung oder durch
                Nutzung unserer Leistungen zustande.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">3. Preise und Zahlung</h2>
              <p>
                Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten
                Preise. Zahlungen sind ohne Abzug fällig.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">4. Haftung</h2>
              <p>
                Wir haften nur für Vorsatz und grobe Fahrlässigkeit.
                Weitergehende Ansprüche sind ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">5. Schlussbestimmungen</h2>
              <p>
                Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag
                im Übrigen wirksam.
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
