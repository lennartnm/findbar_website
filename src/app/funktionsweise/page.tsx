import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import StepsSection from "@/components/ui/StepsSection";

const containerClass = "w-full max-w-6xl mx-auto px-6";

export const metadata: Metadata = {
  title: "Findbar: Funktionsweise",
  description:
    "Von Unternehmensanalyse bis langfristigem Effekt: So läuft unser Content-und-Lead-Prozess ab.",
};

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[38vh] md:h-[50vh] lg:h-[56vh]">
          <img
            src="/HeroBildFunktionsweise.jpg"
            alt="Visualisierung des Systems – Funktionsweise"
            className="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className={`${containerClass} pb-8`}>
              <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight font-serif">
                So funktioniert unser System
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS (Client Component) */}
      <main className="bg-white">
        <StepsSection />

        {/* CTA */}
      <section aria-label="Kontakt" className="mt-14"> <div className="rounded-sm border-2 border-dashed border-emerald-300 p-6 text-center"> <h2 className="text-xl font-bold mb-2"> Möchtest du Blogartikel für dein B2B-Angebot einführen? </h2> <p className="text-zinc-700 mb-4"> Unsere KI schreibt Expertenartikel und identifiziert anonyme B2B-Leser für dein Sales-Team. </p> <div className="mx-auto max-w-xl"> <a href="https://www.findbar.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-sm bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700" aria-label="Zu findbar.info wechseln (öffnet in neuem Tab)" > Mehr erfahren </a> </div> </div> </section>

      </main>

      <Footer />
    </>
  );
}
