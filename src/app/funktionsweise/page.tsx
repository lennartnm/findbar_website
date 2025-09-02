// app/ablauf/page.tsx (oder app/page.tsx)
import type { Metadata } from "next";
import Header from "@/components/ui/Header"; // ggf. Pfad anpassen
import Footer from "@/components/ui/Footer"; // ggf. Pfad anpassen
import React from "react";

export const metadata: Metadata = {
  title: "Findbar: Unsere Funktionsweise",
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

      <main className="flow">
        <section className="wrap">
          <h1 className="sr-only">Ablauf</h1>

          <ol className="timeline" aria-label="Prozess-Schritte">
            {steps.map((step, idx) => (
              <li className="item" key={step.id}>
                {/* linke Leiste */}
                <div className="rail" aria-hidden="true">
                  <span className="dot">
                    <CheckIcon />
                  </span>
                  {/* gestrichelte Linie */}
                  {idx < steps.length - 1 && <span className="dash" />}
                </div>

                {/* Inhalt */}
                <div className="content">
                  <div className="kicker">Step {step.id}</div>
                  <h2 className="title">{step.title}</h2>
                  <p className="text">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer />

      {/* ---- Styles (styled-jsx, unabhängig von Tailwind) ---- */}
      <style jsx>{`
        :global(html, body) {
          background: #fff;
          color: #222;
        }
        .flow {
          display: block;
        }
        .wrap {
          max-width: 980px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }
        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .item {
          position: relative;
          display: grid;
          grid-template-columns: 56px 1fr;
          column-gap: 24px;
          padding-bottom: 48px;
        }
        .rail {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .dot {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #2f66ff; /* blau wie im Screenshot */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(47, 102, 255, 0.3);
          margin-top: 4px;
        }
        .dash {
          position: absolute;
          top: 48px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: calc(100% - 48px);
          border-right: 2px dashed #2f66ff33; /* dezente gestrichelte Linie */
        }
        .content {
          padding-top: 2px;
        }
        .kicker {
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c7c7c7;
          margin-bottom: 8px;
        }
        .title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .text {
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0;
        }
        /* Abstand zwischen Items auf großen Screens */
        @media (min-width: 900px) {
          .item {
            padding-bottom: 72px;
          }
        }
      `}</style>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      role="img"
      aria-label="abgehakt"
    >
      <path
        d="M7.5 13.3l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z"
        fill="#fff"
      />
    </svg>
  );
}
