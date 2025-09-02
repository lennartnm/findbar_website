"use client";
import { motion } from "framer-motion";

const steps = [
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

export default function StepsSection() {
  return (
    <section className="py-16">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="sr-only">Ablauf</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className={`rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-transform cursor-default
                ${i === 0 ? "md:col-span-2" : ""}`}
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
              <p className="mt-2 text-gray-700 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
