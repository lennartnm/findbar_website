// src/app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud oder eigener Server? Einfache Erklärung mit Kosten, Sicherheit & Praxisbeispielen (inkl. Checkliste)",
  description:
    "Leicht verständlicher Vergleich: Cloud vs. Server im eigenen Haus. Was kostet es, wie sicher ist es, wie flexibel bist du? Mit Beispielen, klaren Tipps und Checkliste.",
  alternates: { canonical: "https://example.com/guides/cloud-vs-on-premise" },
  openGraph: {
    title:
      "Cloud vs. eigener Server – einfach erklärt (inkl. Checkliste & Beispiele)",
    description:
      "Entscheidungshilfe für Geschäftsführung & IT: Kosten, Sicherheit, Flexibilität und Regeln im Überblick – inkl. Schritt-für-Schritt-Anleitung und Kontakt.",
    type: "article",
    images: ["https://images.example.com/hero-cloud-onprem.jpg"],
  },
};

export default function Page() {
  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cloud vs. On-Premise: Einfacher Vergleich von Kosten, Sicherheit & Flexibilität",
    datePublished: "2025-08-18",
    dateModified: "2025-08-18",
    author: {
      "@type": "Person",
      name: "Dr. Alex Neumann",
      jobTitle: "Cloud-Architekt & FinOps-Practitioner",
      image: "https://images.example.com/authors/alex-neumann.jpg",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Blog-Artikel",
      logo: { "@type": "ImageObject", url: "https://images.example.com/logo.png" },
    },
    image: "https://images.example.com/hero-cloud-onprem.jpg",
    mainEntityOfPage: "https://example.com/guides/cloud-vs-on-premise",
    about: ["Cloud", "On-Premise", "Hybrid Cloud", "FinOps", "NIS2", "DORA"],
  };

  const ldFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie vergleiche ich die Kosten von Cloud und eigenem Server fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Vergleiche immer das Gleiche mit dem Gleichen: gleiche Ausfallsicherheit, gleiche Leistung, gleiche Verfügbarkeit. Rechne auch versteckte Posten ein: Datenübertragung (Egress), Softwarelizenzen, Personalaufwand, Strom/Kühlung, Abschreibungen und mögliche Ausfallkosten.",
        },
      },
      {
        "@type": "Question",
        name: "Wann lohnt sich eine Kombination (Hybrid)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wenn sehr sensible Daten besser im Haus bleiben, du aber bei schwankender Last schnell zusätzliche Leistung brauchst. Wichtig: gutes Netzwerk, einheitliche Zugriffsregeln (IAM) und gemeinsames Monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "Wie setze ich NIS2/DORA praktisch um?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Lege für jede Anwendung fest, welche Schutzmaßnahmen gelten (z. B. Härtung, Protokollierung, Notfallabläufe). Halte Nachweise bereit, teste regelmäßig und prüfe deine Dienstleister – inklusive Ausstiegsplan.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Anwendungen passen besonders gut in die Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Alles, was stark schwankt oder weltweit genutzt wird, z. B. Online‑Shops, Streaming, Software‑Plattformen (SaaS) oder KI‑Training.",
        },
      },
      {
        "@type": "Question",
        name: "Was ist Vendor‑Lock‑in – und wie vermeide ich es?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Vendor‑Lock‑in bedeutet Abhängigkeit von einem Anbieter. Gegensteuern kannst du mit offenen Standards (z. B. Container), exportierbaren Daten, klaren Verträgen zur Portabilität und – wo sinnvoll – Ausweichmöglichkeiten (Multi‑Region/Provider).",
        },
      },
      {
        "@type": "Question",
        name: "Spielt Nachhaltigkeit bei der Entscheidung eine Rolle?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ja. Große Cloud‑Anbieter arbeiten oft energie‑ und CO₂‑effizienter. Entscheidend sind Region und Architektur. Nutze die Emissions‑Dashboards der Anbieter und vergleiche die Werte mit deinen eigenen.",
        },
      },
    ],
  };

  const css = `
    .page{--bg:#fff;--card:#fff;--muted:#4b5563;--text:#111827;--accent:#004225;--accent-2:#1a7f5a;--ok:#0f7a4a;--warn:#b45309;--danger:#b91c1c;--border:#e5e7eb;--radius:16px;--shadow:0 8px 30px rgba(0,0,0,.06);color:var(--text);background:var(--bg)}
    .container{max-width:1100px;margin:0 auto;padding:0 16px}
    .hero{padding:56px 20px 28px;background:#fff;border-bottom:1px solid var(--border)}
    h1{font-size:clamp(28px,4vw,44px);line-height:1.1;margin:0 0 8px}
    .subhead{font-size:clamp(16px,2vw,20px);color:#374151;margin:0 0 20px}
    .byline{display:flex;gap:16px;align-items:center;margin-top:18px;color:var(--muted)}
    .byline img{width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid #f3f4f6}
    .meta{display:flex;gap:18px;flex-wrap:wrap;font-size:14px}
    .badges{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}
    .badge{background:#f0fdf4;border:1px solid #bbf7d0;color:#065f46;padding:8px 12px;border-radius:999px;font-weight:600}
    .soft-cta{display:inline-flex;align-items:center;gap:10px;margin-top:14px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;padding:12px 18px;border-radius:999px;font-weight:700;text-decoration:none;box-shadow:var(--shadow)}
    article{padding:28px 0 60px}
    .tldr,.infobox,.placeholder,.cta-panel,.quote,.table-wrap,.screenshot{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)}
    .tldr{padding:18px;margin:20px 0}
    .tldr h2{margin:0 0 8px;font-size:18px}
    .tldr ul{margin:10px 0 0 18px}
    .toc{margin:24px 0}
    .toc .toc-inner{padding:16px}
    .toc a{display:block;color:#374151;padding:8px 0;border-bottom:1px dashed var(--border);text-decoration:none}
    section{margin:34px 0}
    section h2{font-size:26px;margin:0 0 12px}
    section h3{font-size:20px;margin:18px 0 8px}
    .infobox{padding:16px;border-left:4px solid var(--accent);margin:14px 0}
    .quote{padding:16px;font-style:italic;border-left:4px solid var(--accent);color:#111827;margin:16px 0;background:#f9fafb}
    .placeholder{padding:20px;text-align:center;color:#6b7280;display:flex;justify-content:center;align-items:center;min-height:160px;background:#fafafa}
    .table{width:100%;border-collapse:collapse}
    .table th,.table td{border-bottom:1px solid var(--border);padding:12px 10px;text-align:left}
    .grid{display:grid;gap:18px}
    .grid-2{grid-template-columns:1fr 1fr}
    @media(max-width:860px){.grid-2{grid-template-columns:1fr}}
    .chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
    .chip{border:1px solid var(--border);border-radius:999px;padding:6px 10px;color:#374151;background:#fff}
    .cta-panel{padding:22px;border:2px dashed var(--border);margin:30px 0}
    form label{display:block;margin:10px 0 6px;color:#374151}
    input,textarea,select{width:100%;padding:12px;border-radius:12px;border:1px solid #d1d5db;background:#fff;color:var(--text)}
    button.primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border:0;padding:12px 18px;border-radius:12px;font-weight:800;cursor:pointer}
    .footnotes{font-size:14px;color:#4b5563}
    footer{padding:36px 0;border-top:1px solid var(--border);color:#4b5563}
    .author-card{display:flex;gap:16px;align-items:flex-start}
    .author-card img{width:64px;height:64px;border-radius:14px;border:2px solid #f3f4f6}
    .tags{margin-top:8px}
    .tags a{margin-right:10px;color:var(--accent-2);text-decoration:none}
    .micro-ctas a{display:inline-block;margin:10px 12px 0 0;color:var(--accent-2);text-decoration:none}
    .small{font-size:13px}
    .btn-download{display:inline-block;margin-top:10px;background:#fff;border:1px solid var(--border);padding:10px 14px;border-radius:12px;color:#111827;text-decoration:none}
    .btn-download:hover{border-color:var(--accent);color:#000}

    /* Modal Popup */
    .modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;padding:16px;z-index:9999}
    .modal-backdrop.show{display:flex}
    .modal{background:#fff;border-radius:16px;border:1px solid var(--border);box-shadow:var(--shadow);max-width:560px;width:100%;padding:20px}
    .modal h3{margin:0 0 8px;font-size:20px}
    .modal p{margin:8px 0 0;color:#374151}
    .modal a{color:var(--accent-2);text-decoration:underline}
    .modal .actions{display:flex;gap:8px;justify-content:flex-end;margin-top:16px}
    .modal .btn{border:1px solid var(--border);background:#fff;border-radius:12px;padding:8px 12px;cursor:pointer}
    .modal .btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border:0}
  `;

  return (
    <div className="page">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }}
      />

      {/* Lesedauer */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var el = document.querySelector('.page article');
              if(!el) return;
              var text = (el.innerText || el.textContent || '').trim();
              var words = (text.match(/\\S+/g) || []).length;
              var minutes = Math.max(4, Math.round(words / 230));
              var rt = document.getElementById('readingTime');
              if(rt) rt.textContent = minutes + ' Min.';
            })();
          `,
        }}
      />

      {/* Globaler Pop-up-Handler (mit echtem Link auf "Klicke hier") */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var calendly = "https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung";
              function isInsideTOC(node){
                while(node){
                  if(node.classList && node.classList.contains('toc')) return true;
                  node = node.parentElement;
                }
                return false;
              }
              function showPopup(){
                var backdrop = document.getElementById('popup-backdrop');
                if(!backdrop) return;
                backdrop.classList.add('show');
                var closeBtn = backdrop.querySelector('[data-close]');
                closeBtn && closeBtn.focus();
              }
              function hidePopup(){
                var backdrop = document.getElementById('popup-backdrop');
                if(!backdrop) return;
                backdrop.classList.remove('show');
              }
              document.addEventListener('click', function(e){
                var a = e.target.closest('a');
                if(!a) return;
                if(isInsideTOC(a)) return; // TOC darf normal navigieren
                if(a.id === 'popup-calendly-link') return; // Calendly-Link NICHT abfangen
                if(a.hasAttribute('data-bypass-popup')) return; // optionaler Escape-Hatch
                e.preventDefault();
                showPopup();
              }, true);
              document.addEventListener('submit', function(e){
                e.preventDefault();
                showPopup();
              }, true);
              document.addEventListener('keydown', function(e){
                if(e.key === 'Escape') hidePopup();
              });
              document.addEventListener('click', function(e){
                var backdrop = document.getElementById('popup-backdrop');
                if(!backdrop) return;
                if(e.target === backdrop) hidePopup();
                if(e.target.closest('[data-close]')) hidePopup();
              });
              // Setze den echten Link-Target auf das "Klicke hier"
              document.addEventListener('DOMContentLoaded', function(){
                var link = document.getElementById('popup-calendly-link');
                if(link){
                  link.setAttribute('href', calendly);
                  link.setAttribute('target', '_blank');
                  link.setAttribute('rel', 'noopener noreferrer');
                }
              });
            })();
          `,
        }}
      />

      {/* Styles */}
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Modal Markup */}
      <div id="popup-backdrop" className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <div className="modal">
          <h3 id="popup-title">Hinweis</h3>
          <p>
            Die Verlinkungen im Beispiel‑Blog sind eingeschränkt und werden für dein Angebot individuell eingerichtet. Neugierig?{' '}
            <a id="popup-calendly-link">
              Klicke hier
            </a>{' '}
            und buche dir dein Erstgespräch.
          </p>
          <div className="actions">
            <button className="btn" type="button" data-close>Schließen</button>
          </div>
        </div>
      </div>

      <header className="hero">
        <div className="container">
          <h1 itemProp="headline">
            Cloud oder eigener Server – was passt besser zu deinem Unternehmen?
          </h1>
          <p className="subhead">
            Wir erklären die Unterschiede Schritt für Schritt: Was kostet es, wie sicher ist es und wie schnell kannst du starten? Mit echten Beispielen und einer einfachen Checkliste.
          </p>

          {/* Hero Bild – zwischen Subhead (Text darüber) und CTA */}
          <div
            className="placeholder"
            role="img"
            aria-label="Hero Bild Platzhalter"
            style={{ margin: "6px 0 10px" }}
          >
            Hero‑Bild Platzhalter (1920×640)
          </div>

          <a className="soft-cta" href="#template">
            Jetzt Checkliste & Template öffnen
          </a>

          <div className="byline">
            <img
              src="https://images.example.com/authors/alex-neumann.jpg"
              alt="Autor: Dr. Alex Neumann"
              loading="lazy"
            />
            <div>
              <div>
                <strong itemProp="author">Dr. Alex Neumann</strong> ·
                Cloud‑Architekt &amp; FinOps‑Praktiker
              </div>
              <div className="meta">
                <span>
                  Zuletzt aktualisiert:{' '}
                  <time itemProp="dateModified" dateTime="2025-08-18">
                    18.08.2025
                  </time>
                </span>
                <span>
                  Lesedauer: <span id="readingTime">–</span>
                </span>
              </div>
            </div>
          </div>

          <div className="badges">
            <span className="badge">Mit Checkliste</span>
            <span className="badge">Aktuelle Zahlen</span>
            <span className="badge">EU‑Regeln (NIS2/DORA) erklärt</span>
          </div>
        </div>
      </header>

      <article className="container" itemProp="articleBody">
        {/* Das Wichtigste auf einen Blick */}
        <section className="tldr" aria-label="Das Wichtigste auf einen Blick">
          <h2>Kurz & klar</h2>
          <ul>
            <li>
              <strong>Entscheide pro Anwendung</strong> statt aus dem Bauch: Zähle Latenz (Reaktionszeit), Datenschutz, Flexibilität und Kosten mit.
            </li>
            <li>
              <strong>Cloud beschleunigt & skaliert</strong> – aber nur mit guter Kostensteuerung (FinOps = "Cloud‑Kosten im Griff").
            </li>
            <li>
              <strong>Eigener Server (On‑Premise)</strong> ist stark bei sehr kurzer Reaktionszeit, Spezial‑Hardware, voller Datenkontrolle und gleichmäßiger Last.
            </li>
            <li>
              <strong>Compliance</strong>: EU‑Vorgaben wie NIS2/DORA verlangen Nachweise, klare Abläufe und Tests – egal ob Cloud oder On‑Prem.
            </li>
          </ul>
        </section>

        {/* Inhaltsverzeichnis */}
        <nav className="toc">
          <div className="toc-inner infobox">
            <div className="kicker">Inhalt</div>
            <a href="#definition">1. Grundlagen – was ist was?</a>
            <a href="#nutzen">2. Nutzen & Entscheidungen im Alltag</a>
            <a href="#frameworks">3. Modelle & Entscheidungshilfe</a>
            <a href="#howto">4. Schritt‑für‑Schritt‑Checkliste</a>
            <a href="#usecases">5. Praxisbeispiele</a>
            <a href="#tools">6. Nützliche Tools & Vorlagen</a>
            <a href="#risks">7. Risiken vermeiden – Best Practices</a>
            <a href="#faq">8. FAQ</a>
            <a href="#kontakt">9. Kontakt & Demo</a>
          </div>
        </nav>

        {/* Definition & Grundlagen */}
        <section id="definition">
          <h2>Grundlagen: Cloud, eigener Server & Hybrid</h2>
          <p>
            <strong>Cloud</strong> bedeutet: Rechenleistung, Speicher und Datenbanken werden als Service über das Internet bereitgestellt – du mietest also, was du brauchst.
            <strong> On‑Premise</strong> heißt: Deine Systeme laufen im eigenen Rechenraum oder in einem gemieteten Rack – du kaufst und betreibst selbst.
            <strong> Hybrid</strong> mischt beides, <strong>Multi‑Cloud</strong> nutzt mehrere Cloud‑Anbieter parallel.
          </p>
          <div className="infobox">
            <strong>Abgrenzung in einfachen Worten:</strong> Eine <em>Private Cloud</em> ist eine "eigene Cloud" (z. B. mit VMware oder OpenStack) – sie kann bei dir stehen oder extern betrieben werden. <em>Edge</em> sind kleine lokale Rechenknoten vor Ort, wenn es auf Millisekunden ankommt (z. B. in der Fertigung).
          </div>
          <div
            className="placeholder"
            role="img"
            aria-label="Diagramm: Architektur-Optionen"
          >
            Diagramm‑Platzhalter – Optionen: On‑Prem · Private Cloud · Public Cloud · Hybrid/Edge
          </div>
        </section>

        {/* Nutzen & Business-Relevanz */}
        <section id="nutzen">
          <h2>Warum das Thema wichtig ist</h2>
          <p>
            Die Ausgaben für Cloud wachsen weiter kräftig. Gründe: Datenplattformen und KI benötigen oft kurzfristig viel Leistung – in der Cloud lässt sich das flexibel zuschalten. Das hilft beim schnelleren Go‑to‑Market und bei Innovationen.
          </p>

          <p>
            Gleichzeitig ringen viele Firmen mit der <strong>Kostenkontrolle</strong>. Studien zeigen: Budgets werden häufig überschritten, und Ausgaben steigen. Darum wird <em>FinOps</em> wichtiger – das ist im Kern ein gemeinsamer Prozess von Technik und Finanzen, um Cloud‑Kosten planbar zu machen.
          </p>

          <blockquote className="quote">
            „Ohne klare Verantwortliche für Kosten – von der Architektur bis zum Betrieb – wirkt die Cloud schnell wie ein Blankoscheck.“
          </blockquote>

          <div className="grid grid-2">
            <div className="infobox">
              <strong>Sicherheit & Regeln (EU):</strong> <em>NIS2</em> sind neue Sicherheitsvorgaben für viele Organisationen. Für die Finanzbranche gilt zusätzlich <em>DORA</em>. Beide verlangen klare Prozesse, regelmäßige Tests und Nachweise – unabhängig vom gewählten Modell.
            </div>
            <div className="infobox">
              <strong>Stabilität & Ausfälle:</strong> Ausfälle passieren seltener, sind aber oft teurer. Plane daher nicht nur Verfügbarkeit, sondern auch die Kosten von Ausfallzeiten mit ein.
            </div>
          </div>

          <div className="infobox">
            <strong>Nachhaltigkeit:</strong> Große Cloud‑Anbieter sind oft energie‑ und CO₂‑effizienter als der Betrieb im eigenen Haus. Nutze Emissions‑Dashboards der Anbieter, und vergleiche die Werte mit deinen Zahlen – Standort und Architektur machen einen großen Unterschied.
          </div>
        </section>

        {/* Modelle & Framework */}
        <section id="frameworks">
          <h2>Modelle & Entscheidungshilfe</h2>
          <h3>Wo läuft welche Anwendung am besten?</h3>
          <div
            className="table-wrap placeholder"
            aria-label="Tabelle: Workload-Placement-Matrix"
          >
            <table className="table" aria-describedby="matrix-desc">
              <caption id="matrix-desc" className="small">
                Einfache Orientierung (mehr Sterne = tendenziell besser)
              </caption>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>On‑Premise</th>
                  <th>Public Cloud</th>
                  <th>Hybrid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reaktionszeit (Latenz)</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Flexibles Hoch‑/Runterskalieren</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Datenkontrolle/‑standort</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐*</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Schnelligkeit beim Start (Time‑to‑Market)</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Kostenmodell</td>
                  <td>Mehr Fixkosten (CAPEX)</td>
                  <td>Mehr laufende Kosten (OPEX)</td>
                  <td>Gemischt</td>
                </tr>
                <tr>
                  <td>Risiko Abhängigkeit (Lock‑in)</td>
                  <td>Mittel</td>
                  <td>Hoch*</td>
                  <td>Mittel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="small">
            *Durch Architektur (z. B. Container, offene Schnittstellen) und Verträge (Daten‑Portabilität, Exit‑Regeln) reduzierbar.
          </p>

          <h3>Compliance‑Brille für die EU</h3>
          <p>
            Für <strong>NIS2</strong> lohnt sich ein einfacher Katalog pro Anwendung: Zugriffe, Protokolle, Notfälle, Lieferanten. <strong>DORA</strong> fordert in der Finanzbranche zusätzlich einen sehr genauen Blick auf externe IT‑Dienstleister – inkl. Tests und Register.
          </p>

          <div className="infobox">
            <strong>Deutschland (BSI/C5) kurz erklärt:</strong> Das <em>BSI‑C5</em> ist ein anerkannter Mindeststandard für Cloud‑Sicherheit. Viele große Anbieter haben entsprechende Prüfberichte. Prüfe Zeitraum, Umfang und Feststellungen.
          </div>

          <h3>Kosten & Risiko im Blick</h3>
          <div className="placeholder" aria-label="Diagramm: TCO & Risiko">
            Diagramm‑Platzhalter – Kostenblöcke (Rechenleistung, Speicher, Datenübertragung/Egress, Lizenzen, Betrieb) + Risikoblöcke (Ausfall, Compliance, Abhängigkeiten)
          </div>
          <div className="chips" aria-label="Beispielfaktoren">
            <span className="chip">Datenübertragung (Egress)</span>
            <span className="chip">Rabatte/Commitments</span>
            <span className="chip">Strom & Kühlung</span>
            <span className="chip">Personal & Know‑how</span>
            <span className="chip">Wiederanlauf‑Zeit</span>
          </div>
        </section>

        {/* How-to */}
        <section id="howto">
          <h2>Schritt‑für‑Schritt‑Checkliste</h2>
          <ol>
            <li>
              <strong>Ziele & Kennzahlen klären:</strong> Wie schnell willst du liefern? Wie viel darf es kosten? Welche Verfügbarkeit brauchst du? Nimm auch CO₂‑Ziele mit auf.
            </li>
            <li>
              <strong>Anwendungen einordnen:</strong> Braucht es sehr kurze Reaktionszeiten? Strenge Datenvorgaben? Spezial‑Hardware? Markiere <em>Cloud‑ready</em>, <em>modernisieren</em> oder <em>bleibt lokal</em>.
            </li>
            <li>
              <strong>Kosten & Risiken schätzen:</strong> Laufende (OPEX) vs. feste Kosten (CAPEX), Datenübertragung & Lizenzen – plus typische Kosten im Ausfall.
            </li>
            <li>
              <strong>Regeln abgleichen:</strong> Lege je Anwendung fest, welche Nachweise für NIS2/DORA/BSI‑C5 nötig sind.
            </li>
            <li>
              <strong>Betriebsmodell & FinOps aufsetzen:</strong> Klare Verantwortliche, Tagging, Budgetsicht, automatische Sparregeln (Rightsizing/Abschalt‑Zeiten).
            </li>
            <li>
              <strong>Pilot & Plan B:</strong> Starte klein, beobachte, und halte einen Ausstiegsplan bereit (Datenformate, SLAs, Kündigungsfristen).
            </li>
          </ol>

          <div id="template" className="infobox">
            <strong>Template auf Anfrage:</strong> Einfache Entscheidungsmatrix je Anwendung (Kriterien, Gewichtung, Score) + Beispiel‑Regeln (Tagging, Datenübertragung‑Budget) + NIS2/DORA‑Checkliste.
          </div>
        </section>

        {/* Praxisbeispiele */}
        <section id="usecases">
          <h2>Praxisbeispiele</h2>
          <div className="grid grid-2">
            <div className="screenshot placeholder">
              Use‑Case‑Platzhalter – Fertigung (OT/IIoT)
            </div>
            <div>
              <h3>Fertigung (nahe an den Maschinen)</h3>
              <p>
                Steuerungen und Bildverarbeitung brauchen oft <em>&lt;10 ms</em> Reaktionszeit. Lösung: <strong>On‑Prem/Edge</strong> für die Steuerung, <strong>Cloud</strong> für Training und Auswertung. Daten werden vor Ort gepuffert und regelmäßig in einen zentralen Datenspeicher übertragen.
              </p>
            </div>

            <div className="screenshot placeholder">
              Use‑Case‑Platzhalter – SaaS/Scale‑out
            </div>
            <div>
              <h3>SaaS‑Produkt (stark schwankende Nutzung)</h3>
              <p>
                Wenn Nutzung stark schwankt oder international ist, punktet die <strong>Public Cloud</strong>. Mit FinOps (z. B. Rabatte, automatisches Hoch/Runter) bleiben die Kosten planbar; wichtige Kennzahlen sind Kosten pro Kunde und Zeit bis zum Feature‑Release.
              </p>
            </div>

            <div className="screenshot placeholder">
              Use‑Case‑Platzhalter – Financial Services
            </div>
            <div>
              <h3>Bank/Versicherung (DORA)</h3>
              <p>
                Strenge <strong>Kontrolle externer IT‑Dienstleister</strong> und Resilienz‑Tests sind Pflicht. Häufige Lösung ist <strong>Hybrid</strong>: Kernsysteme bleiben lokal/Private Cloud, Analysen & KI laufen in der Public Cloud – inklusive klarer Ausstiegswege.
              </p>
            </div>

            <div className="screenshot placeholder">Use‑Case‑Platzhalter – Öffentlicher Sektor/Healthcare</div>
            <div>
              <h3>Öffentlicher Sektor/Healthcare (DE)</h3>
              <p>
                Ausschreibungen verlangen oft <strong>BSI‑C5</strong>‑Nachweise. Prüfe die Berichte der Anbieter (Zeitraum, Umfang, Abdeckung) in deiner Due‑Diligence; Datenstandort und Mandantenfähigkeit sind Schlüsselthemen.
              </p>
            </div>

            <div className="screenshot placeholder">Use‑Case‑Platzhalter – KI/ML</div>
            <div>
              <h3>KI & Machine Learning</h3>
              <p>
                Training braucht kurzfristig sehr viel Rechenleistung – hier ist die <strong>Cloud</strong> mit elastischen GPUs im Vorteil. Dauerhaftes Ausführen von Modellen mit gleichmäßiger Last kann <strong>On‑Prem</strong> günstiger sein. Nachhaltigkeit (Region/Emissionen) mitdenken.
              </p>
            </div>
          </div>
        </section>

        {/* Tools, Templates, Ressourcen */}
        <section id="tools">
          <h2>Nützliche Tools & Ressourcen</h2>
          <ul>
            <li>
              Entscheidungsmatrix & Checkliste (auf Anfrage) – Kriterien, Gewichtung, Scores, Nachweise.
            </li>
            <li>Cloud‑Kosten: Flexera State of the Cloud 2025.</li>
            <li>Compliance: ENISA NIS2 Guidance; DORA‑Infos (EIOPA).</li>
            <li>Nachhaltigkeit: Google Cloud Carbon Footprint; Effizienz‑Studien.</li>
            <li>BSI/C5: Überblick & C5‑Katalog (PDF).
            </li>
          </ul>

          {/* Micro‑CTAs */}
          <div className="micro-ctas">
            <a href="/guides/finops">Guide: FinOps einführen</a> -{' '}
            <a href="/guides/cloud-strategy">Cloud‑Strategie entwickeln</a> -{' '}
            <a href="/tools/tco-calculator">TCO‑Rechner (Beta)</a>
          </div>
        </section>

        {/* Risiken & Best Practices */}
        <section id="risks">
          <h2>Risiken vermeiden & gute Gewohnheiten</h2>
          <h3>Typische Stolperfallen</h3>
          <ul>
            <li>
              <strong>Keine Tags/Verantwortlichen:</strong> Ohne klare Zuständigkeiten steigen Cloud‑Kosten schnell. Gegenmittel: Tagging‑Regeln und Rollen (wer entscheidet was?).
            </li>
            <li>
              <strong>Überraschung bei Datenkosten:</strong> Kosten für Datenabflüsse zwischen Regionen werden oft unterschätzt. Gegenmittel: Architektur mit wenig Egress und klaren Datenstandorten.
            </li>
            <li>
              <strong>Folgen von Ausfällen unterschätzt:</strong> Reine Verfügbarkeits‑SLAs reichen nicht. Gegenmittel: Resilienz‑Tests und Notfallübungen.
            </li>
          </ul>

          <h3>Bewährte Vorgehensweisen</h3>
          <ul>
            <li>
              <strong>Pro Anwendung entscheiden:</strong> Nutze die Matrix, dokumentiere Annahmen und Nachweise.
            </li>
            <li>
              <strong>Kosten & Sicherheit früh mitplanen:</strong> Schon im Architektur‑Entwurf berücksichtigen, nicht erst am Ende.
            </li>
            <li>
              <strong>Nachhaltigkeit integrieren:</strong> Region und Architektur nach Emissionsdaten wählen – und berichten.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2>FAQ</h2>
          <details>
            <summary>
              <strong>Wie vergleiche ich Kosten fair?</strong>
            </summary>
            <p>
              Vergleiche gleiche Leistung und Sicherheit (z. B. 99,9 % vs. 99,99 % Verfügbarkeit, mehrere Standorte, 24/7‑Betrieb). Rechne Datenübertragung, Lizenzen, Personal, Strom/Kühlung und Ausfallkosten mit.
            </p>
          </details>
          <details>
            <summary>
              <strong>Ist Hybrid ein guter Kompromiss?</strong>
            </summary>
            <p>
              Ja – wenn die Grundlagen sitzen: sauberes Netzwerk‑Design, einheitliche Zugriffe (IAM), gemeinsames Monitoring, Kostensteuerung und klare Nachweise für Compliance.
            </p>
          </details>
          <details>
            <summary>
              <strong>Wie setze ich NIS2/DORA pragmatisch um?</strong>
            </summary>
            <p>
              Erstelle je Anwendung einen einfachen Maßnahmen‑Zettel mit Nachweisen (Härtung, Monitoring, Incident). Teste regelmäßig, prüfe deine Dienstleister und halte einen Ausstiegsplan bereit.
            </p>
          </details>
          <details>
            <summary>
              <strong>Welche Workloads sind Cloud‑geeignet?</strong>
            </summary>
            <p>
              Anwendungen mit stark schwankender Last und weltweiter Nutzung (SaaS, E‑Commerce, Streaming, KI‑Training) profitieren besonders.
            </p>
          </details>
          <details>
            <summary>
              <strong>Welche Risiken bringt Vendor‑Lock‑in?</strong>
            </summary>
            <p>
              Abhängigkeit erschwert späteren Wechsel. Abhilfe: offene Schnittstellen, Container/OSS, Datenportabilität und vertragliche Exit‑Regeln.
            </p>
          </details>
          <details>
            <summary>
              <strong>Welche Rolle spielt Nachhaltigkeit?</strong>
            </summary>
            <p>
              Große Anbieter sind oft effizienter. Achte auf Region und Architektur, und miss deine Emissionen mit den bereitgestellten Dashboards.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section id="kontakt" className="cta-panel">
          <h2>Kontakt & Demo</h2>
          <p>
            Wir prüfen deine Anwendungen, schätzen Kosten/CO₂ & Risiko und bauen mit dir eine klare Roadmap – inklusive einfacher Nachweisdokumente für NIS2/DORA.
          </p>
          <form action="/api/contact" method="post" className="grid grid-2">
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Vor- und Nachname" required />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" placeholder="+49 ..." />
            </div>
            <div>
              <label htmlFor="email">E‑Mail</label>
              <input id="email" name="email" type="email" placeholder="name@unternehmen.de" required />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="msg">Nachricht</label>
              <textarea id="msg" name="msg" rows={4} placeholder="Kurze Beschreibung, Ziele, gewünschter Zeitraum ..." />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button className="primary" type="submit">Demo anfordern</button>
            </div>
          </form>
        </section>

        {/* Quellen */}
        <section aria-label="Quellen & weiterführende Links">
          <h2>Quellen (Auswahl, 2024–2025)</h2>
          <ol className="footnotes">
            <li><a className="ref" href="https://www.ciodive.com/news/cloud-spend-growth-forecast-2025-gartner/733401/" target="_blank" rel="noopener">Gartner‑Prognose: Public‑Cloud‑Ausgaben 2025</a> (CIO Dive, 11/2024).</li>
            <li><a className="ref" href="https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend" target="_blank" rel="noopener">Flexera: State of the Cloud 2025</a> (03/2025).</li>
            <li><a className="ref" href="https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance" target="_blank" rel="noopener">ENISA: NIS2 Technical Implementation Guidance</a> (06/2025).</li>
            <li><a className="ref" href="https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en" target="_blank" rel="noopener">EIOPA: DORA – seit 17.01.2025 anwendbar</a>.</li>
            <li><a className="ref" href="https://www.datacenterdynamics.com/en/news/uptime-institute-outages-in-2024-less-frequent-and-severe-but-more-expensive/" target="_blank" rel="noopener">Uptime Institute: Ausfälle seltener, aber teurer</a> (05/2025).</li>
            <li><a className="ref" href="https://www.scitepress.org/Papers/2024/133121/133121.pdf" target="_blank" rel="noopener">Sohani/Agrawal: Cloud‑CO₂‑Tools</a> (2024/2025).</li>
            <li><a className="ref" href="https://cloud.google.com/carbon-footprint" target="_blank" rel="noopener">Google Cloud: Carbon Footprint Dashboard</a>.</li>
            <li><a className="ref" href="https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5_node.html" target="_blank" rel="noopener">BSI: C5‑Überblick</a> &{' '}
              <a className="ref" href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/CloudComputing/ComplianceControlsCatalogue-Cloud_Computing-C5.pdf" target="_blank" rel="noopener">C5‑Katalog (PDF)</a>.
            </li>
          </ol>
        </section>

        {/* Autor */}
        <section aria-label="Autor: Expertise">
          <div className="author-card">
            <img
              src="https://images.example.com/authors/alex-neumann.jpg"
              alt="Dr. Alex Neumann"
              loading="lazy"
            />
            <div>
              <strong>Über den Autor</strong><br />
              Dr. Alex Neumann ist Cloud‑Architekt & FinOps‑Praktiker mit über 12 Jahren Erfahrung in hybriden Plattformen, Kostensteuerung und regulierten Umgebungen. Er begleitet Unternehmen von der Strategie über das Architektur‑Design bis zur Umsetzung – mit messbaren Ergebnissen.
              <div className="small" style={{ marginTop: 6 }}>
                <a href="https://www.linkedin.com/in/alex-neumann" target="_blank" rel="noopener">
                  LinkedIn‑Profil ansehen
                </a>
              </div>
              <div className="small">Reviewed by: Marco Weber, CISO (08/2025)</div>
              <div className="tags">
                Themen: <a href="/guides/cloud-strategy">Cloud‑Strategie</a>, <a href="/guides/finops">FinOps</a>, <a href="/services/cloud-migration">Cloud‑Migration</a>
              </div>
            </div>
          </div>
        </section>
      </article>

      <footer>
        <div className="container small">
          © 2025 AI Blog‑Artikel · <a href="/impressum">Impressum</a> ·{' '}
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
