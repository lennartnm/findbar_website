"use client";
import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import React from "react";
import { motion } from "framer-motion";

// Einheitliche Seitenbreite wie in deinem Code
const containerClass = "w-full max-w-6xl mx-auto px-6";

export const metadata: Metadata = {
  title: "Findbar: Funktionsweise",
  description:
    "Von Unternehmensanalyse bis langfristigem Effekt: So läuft unser Content-und-Lead-Prozess ab.",
};

type Step = {
  id: number;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Unternehmensanalyse",
    body:
      "Wer trifft in deiner Zielgruppe die Entscheidungen – und was beschäftigt diese Personen vor einem Kauf? Wir beleuchten ihr Denken, ihre Fragen und ihr Suchverhalten auf Google & Co. So entsteht ein klares Bild davon, wie deine potenziellen Kunden wirklich ticken.",
  },
  {
    id: 2,
    title: "Artikel, die deine Kunden anziehen",
    body:
      "Jeden Monat identifizieren wir die Themen, die deine Entscheider bewegen. Unsere KI analysiert Studien, Fachartikel und aktuelle Branchen-News und verwandelt sie in Content exakt in deinem Markenstil. Das Ergebnis: ein fertiger, suchmaschinenoptimierter Artikel inklusive Webseitencode – bereit zur Veröffentlichung und geliebt von Google & KI-Tools.",
  },
  {
    id: 3,
    title: "Anonyme Besucher sichtbar machen",
    body:
      "Sobald die Artikel live sind, erscheinen sie in Google-Ergebnissen und KI-Übersichten. Deine Zielgruppe findet Antworten auf ihre Fragen – und sieht dein Unternehmen als Experten. Gleichzeitig identifizieren wir über innovativen IP-Abgleich, welche Firmen deine Artikel lesen. So weißt du genau, welche Unternehmen sich für deine Themen interessieren.",
  },
  {
    id: 4,
    title: "Warme Leads für den Vertrieb",
    body:
      "Diese wertvollen Insights gehen direkt an dein Sales-Team: „Firma XY beschäftigt sich gerade mit Thema Z.“ Dein Vertrieb kann im perfekten Moment reagieren – ob mit einem Anruf, einem Report oder einer personalisierten Mail. Ohne Umwege und ohne Kaltakquise.",
  },
  {
    id: 5,
    title: "Langfristiger Effekt",
    body:
      "Jeder veröffentlichte Artikel wirkt nachhaltig: Er bleibt über Monate oder Jahre bei Google sichtbar. Dadurch baust du dir Schritt für Schritt einen stetigen Strom neuer Kundenkontakte auf – ganz ohne ständig steigende Werbekosten.",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[38vh] md:h-[50vh] lg:h-[56vh]">
          {/* Bild */}
          <img
            src="/HeroBildFunktionsweise.jpg"
            alt="Visualisierung des Systems – Funktionsweise"
            className="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
          />
          {/* dunkler Verlauf für bessere Lesbarkeit */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Headline */}
          <div className="absolute inset-x-0 bottom-0">
            <div className={`${containerClass} pb-8`}>
              <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight font-serif">
                So funktioniert unser System
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS – 1-2-2 Grid mit Animation */}
      <main className="bg-white">
        <section className="py-16">
          <div className={containerClass}>
            <h2 className="sr-only">Ablauf</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  className={`rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-transform cursor-default
                    ${i === 0 ? "md:col-span-2" : ""}`} // Step 1 nimmt ganze Breite
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shadow-md"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    {step.id}
                  </motion.div>
                  <h3 className="text-xl font-semibold tracking-tight font-serif">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Kontakt" className="mt-14">
          <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center">
            <h2 className="text-xl font-bold mb-2">
              Möchtest du Blogartikel für dein B2B-Angebot einführen?
            </h2>
            <p className="text-zinc-700 mb-4">
              Unsere KI schreibt Expertenartikel und identifiziert anonyme
              B2B-Leser für dein Sales-Team.
            </p>

            <div className="mx-auto max-w-xl">
              <a
                href="https://www.findbar.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
                aria-label="Zu findbar.info wechseln (öffnet in neuem Tab)"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
