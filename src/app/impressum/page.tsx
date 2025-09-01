"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";

export default function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <h1 className={`text-3xl md:text-4xl ${serifClass} font-semibold mb-8`}>
          Impressum
        </h1>

        {/* Grüne Box wie Benefits Section */}
        <div
          className="rounded-sm text-white p-8 shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${RG300}, ${RG600})`,
          }}
        >
          <div className="space-y-8 text-sm leading-6">
            <div>
              <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
              <p>
                Lennart Niehausmeier<br />
                Am Rabenecksiek 5<br />
                32139 Spenge<br />
                Deutschland
              </p>
              <p>Vertreten durch: Lennart Niehausmeier</p>
            </div>

            <div>
              <h2 className="font-semibold">Kontakt</h2>
              <p>
                Telefon: +49 (0) 151 70084420<br />
                E-Mail: lennart@findbar.info<br />
                Website: www.findbar.info
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Verantwortlich für den Inhalt</h2>
              <p>
                Lennart Niehausmeier<br />
                Am Rabenecksiek 5<br />
                32139 Spenge<br /><br />
                Umsatzsteuer-ID: DE326540742
              </p>
            </div>

            <p className="text-xs text-white/80">
              Stand: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
