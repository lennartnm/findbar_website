import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import React from "react";

// gleiche Container-Breite wie in deinem Code
const containerClass = "w-full max-w-6xl mx-auto px-6";

export const metadata: Metadata = {
  title: "So funktioniert’s – Ablauf",
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

      <main className="bg-white">
        <section className="py-16">
          <div className={containerClass}>
            <h1 className="sr-only">Ablauf</h1>

            <ol className="space-y-10 md:space-y-12" aria-label="Prozess-Schritte">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="grid grid-cols-[48px_1fr] items-center gap-5 md:grid-cols-[56px_1fr] md:gap-6"
                >
                  {/* Nummern-Kreis (keine Verbindungslinie) */}
                  <div className="flex items-center justify-center">
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-sm text-white font-semibold
                                 md:h-14 md:w-14"
                      style={{ backgroundColor: "#ebebeb" }}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Inhalt; Zahl ist durch align-items:center auf Höhe der Headline */}
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight font-serif">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

 <section aria-label="Kontakt" className="mt-14">
        <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Möchtest du Blogartikel für dein B2B-Angebot einführen?
          </h2>
          <p className="text-zinc-700 mb-4">
            Unsere KI schreibt Expertenartikel und identifiziert anonyme B2B-Leser für dein Sales-Team.
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
