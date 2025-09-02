import type { Metadata } from "next";
import Header from "@/components/ui/Header"; // ggf. Pfad anpassen
import Footer from "@/components/ui/Footer"; // ggf. Pfad anpassen
import styles from "./funktionsweise.module.css";

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

      <main>
        <section className={styles.wrap}>
          <h1 className="sr-only">Ablauf</h1>

          <ol className={styles.timeline} aria-label="Prozess-Schritte">
            {steps.map((step) => (
              <li className={styles.item} key={step.id}>
                <div className={styles.rail} aria-hidden="true">
                  <span className={styles.dot}>
                    <CheckIcon />
                  </span>
                </div>

                <div className={styles.content}>
                  <div className={styles.kicker}>Step {step.id}</div>
                  <h2 className="text-4xl font-semibold tracking-tight font-serif">
                    {step.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mt-2">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" role="img" aria-label="abgehakt">
      <path d="M7.5 13.3l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" fill="#fff" />
    </svg>
  );
}
