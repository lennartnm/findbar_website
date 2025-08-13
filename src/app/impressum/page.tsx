"use client";

import React from "react";
import { Button } from "@/components/ui/button";

/* ---------- Header aus deiner Startseite (leicht angepasst) ---------- */
function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          {/* Verlinkungen zeigen auf die Startseite mit Ankern */}
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

/* ---------- Impressum Inhalt (Vorlage) ---------- */
export default function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold">Impressum</h1>
        <p className="mt-2 text-sm text-slate-500">
          Bitte ersetze die Platzhalter durch deine echten Unternehmensdaten.
        </p>

        <section className="mt-10 space-y-8 text-sm leading-6 text-slate-700">
          <div>
            <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
            <p>
              <span className="font-medium">Unternehmensname:</span> Musterfirma GmbH<br />
              <span className="font-medium">Anschrift:</span> Musterstraße 1, 12345 Musterstadt, Deutschland<br />
              <span className="font-medium">Vertreten durch:</span> Max Mustermann (Geschäftsführer)
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: hallo@musterfirma.de<br />
              Website: https://www.musterfirma.de
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 123456
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
              Max Mustermann, Musterstraße 1, 12345 Musterstadt
            </p>
          </div>

          <div>
            <h2 className="font-semibold">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <br />
              https://ec.europa.eu/consumers/odr
              <br />
              Unsere E-Mail-Adresse findest du oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Verbraucher­streitbeilegung / Universal­schlichtungsstelle</h2>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Bildnachweise</h2>
            <p>
              Bildquellen/Stockfotos: Bitte hier Quellen angeben (z. B. Unsplash, Shutterstock) oder entfernen.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Stand: {new Date().toLocaleDateString("de-DE")}
          </p>
        </section>
      </main>

      {/* ---------- Footer aus deiner Startseite (Links angepasst) ---------- */}
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

