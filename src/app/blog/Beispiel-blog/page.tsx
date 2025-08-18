// src/app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich (inkl. Checkliste & Praxisbeispiele)",
  description:
    "Cloud vs. On-Premise: Welche Lösung passt zu deinem Unternehmen? Fundierter Vergleich von Kosten, Sicherheit, Flexibilität – mit aktuellen Studien, Praxisbeispielen und Schritt-für-Schritt-Checkliste.",
  alternates: { canonical: "https://example.com/guides/cloud-vs-on-premise" },
  openGraph: {
    title:
      "Cloud vs. On-Premise – der direkte Vergleich (inkl. Checkliste & Praxisbeispiele)",
    description:
      "Entscheidungshilfe für IT & Management: Kosten, Sicherheit, Flexibilität und Compliance im Überblick – inklusive How-to, Tools und Kontakt-CTA.",
    type: "article",
    images: ["https://images.example.com/hero-cloud-onprem.jpg"],
  },
};

export default function Page() {
  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cloud vs. On-Premise: Kosten, Sicherheit & Flexibilität im direkten Vergleich",
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
        name: "Wie vergleiche ich Cloud- und On-Premise-Kosten fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Gleiche Service-Level und Architektur an (Verfügbarkeit, Geo-Redundanz, 24/7). Berücksichtige Egress, Lizenzen, Personal, Abschreibungen sowie potenzielle Ausfallkosten.",
        },
      },
      {
        "@type": "Question",
        name: "Wann lohnt sich Hybrid?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wenn sensible Daten/Workloads lokal bleiben müssen, aber elastische Lasten und Analytik von Cloud-Skalierung profitieren. Erfolgskritisch sind Netzwerk, IAM und Observability.",
        },
      },
      {
        "@type": "Question",
        name: "Wie adressiere ich NIS2/DORA praktisch?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Erstelle ein Controls-Register je Workload, weise Evidenzen zu (Härtung, Monitoring, Incident-Prozesse), teste regelmäßig und führe Lieferantenreviews samt Exit-Plan durch.",
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
  `;

  return (
    <div className="page">
      {/* JSON-LD (Server Component-kompatibel) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }}
      />

      {/* Client-Snippet für Lesedauer (ohne next/script) */}
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

      {/* Seitenstil ohne styled-jsx */}
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="hero">
        <div className="container">
          <h1 itemProp="headline">
            Cloud vs. On-Premise – Welche Lösung ist die richtige für dein
            Unternehmen?
          </h1>
          <p className="subhead">
            Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir,
            fundiert zu entscheiden – inklusive Praxisbeispiele und Checkliste.
          </p>
          <a className="soft-cta" href="#template">
            Jetzt Workload-Template herunterladen
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
                Cloud-Architekt &amp; FinOps-Practitioner
              </div>
              <div className="meta">
                <span>
                  Zuletzt aktualisiert:{" "}
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
            <span className="badge">Aktuelle Studien</span>
            <span className="badge">EU-Compliance (NIS2/DORA)</span>
          </div>
        </div>
      </header>

      <article className="container" itemProp="articleBody">
        {/* TL;DR */}
        <section className="tldr" aria-label="TL;DR">
          <h2>TL;DR</h2>
          <ul>
            <li>
              <strong>Entscheide pro Workload</strong>, nicht ideologisch:
              Latenz, Datenhoheit, Elastizität &amp; Kostenprofil zählen.
            </li>
            <li>
              <strong>Cloud skaliert &amp; beschleunigt</strong> – aber nur mit
              Governance/FinOps.
            </li>
            <li>
              <strong>On-Premise</strong> punktet bei niedriger Latenz,
              Spezialhardware, Datensouveränität &amp; stabiler Last.
            </li>
            <li>
              <strong>Compliance</strong>: NIS2/DORA erfordern Nachweise,
              Drittanbietersteuerung &amp; Notfalltests.
            </li>
          </ul>
        </section>

        {/* Inhaltsverzeichnis */}
        <nav className="toc">
          <div className="toc-inner infobox">
            <div className="kicker">Inhalt</div>
            <a href="#definition">Definition &amp; Grundlagen</a>
            <a href="#nutzen">Nutzen &amp; Business-Relevanz</a>
            <a href="#frameworks">Modelle &amp; Entscheidungs-Framework</a>
            <a href="#howto">How-to: Schritt-für-Schritt-Checkliste</a>
            <a href="#usecases">Praxisbeispiele</a>
            <a href="#tools">Tools, Templates &amp; Ressourcen</a>
            <a href="#risks">Risiken, Fehler vermeiden &amp; Best Practices</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt &amp; Demo</a>
          </div>
        </nav>

        {/* Definition & Grundlagen */}
        <section id="definition">
          <h2>Definition &amp; Grundlagen</h2>
          <p>
            <strong>Cloud</strong> bezeichnet die Bereitstellung von
            IT-Ressourcen (Compute, Storage, Datenbanken, Plattformen) als
            Service über das Internet. <strong>On-Premise</strong> (On-Premises)
            meint den Betrieb im eigenen Rechenzentrum oder im Colocation-Rack.{" "}
            <strong>Hybrid</strong> kombiniert beides, <strong>Multi-Cloud</strong>{" "}
            nutzt mehrere Public-Cloud-Anbieter.
          </p>
          <div className="infobox">
            <strong>Abgrenzung:</strong> <em>Private Cloud</em> (z. B.
            OpenStack, VMware) kann on-prem oder extern betrieben werden;{" "}
            <em>Edge</em> ergänzt lokale Rechenknoten für Latenz/Konnektivität.
            Datenresidenz, Latenz &amp; Steuerbarkeit sind zentrale
            Unterscheidungsmerkmale.
          </div>
          <div
            className="placeholder"
            role="img"
            aria-label="Diagramm: Architektur-Optionen"
          >
            Diagramm-Platzhalter – Architektur-Optionen: On-Prem · Private Cloud
            · Public Cloud · Hybrid/Edge
          </div>
        </section>

        {/* Nutzen & Business-Relevanz */}
        <section id="nutzen">
          <h2>Nutzen &amp; Business-Relevanz</h2>
          <p>
            Cloud investiert weiterhin stark: Analysten erwarten, dass die
            weltweiten Cloud-Ausgaben 2025 auf rund <strong>$723 Mrd.</strong>{" "}
            steigen – getrieben durch Datenplattformen und KI-Workloads. Das
            unterstreicht den strategischen Stellenwert der Cloud für
            Time-to-Market und Innovationsgeschwindigkeit.
          </p>

          <p>
            Gleichzeitig kämpfen Unternehmen mit Kostenkontrolle: Laut Flexera
            überschreiten Budgets im Schnitt <strong>+17&nbsp;%</strong>, bei
            gleichzeitig erwarteten <strong>+28&nbsp;%</strong>{" "}
            Ausgabensteigerung. <em>84&nbsp;%</em> der Befragten nennen das
            Management der Cloud-Kosten als Top-Herausforderung – FinOps gewinnt
            entsprechend an Gewicht.
          </p>

          <blockquote className="quote">
            „Ohne durchgängige Verantwortlichkeiten für Kosten – von Architektur
            bis Betrieb – bleibt Cloud ein offener Scheck.“
          </blockquote>

          <div className="grid grid-2">
            <div className="infobox">
              <strong>Sicherheit &amp; Compliance:</strong> ENISA liefert 2025
              konkrete Umsetzungshinweise zur NIS2-Verordnung (u. a.
              Controls-Mapping &amp; Evidenzen). Für Finanzunternehmen gilt seit
              17.01.2025 zusätzlich DORA mit strenger Drittanbieter-Aufsicht.
            </div>
            <div className="infobox">
              <strong>Resilienz &amp; Kosten von Ausfällen:</strong> Uptime-Daten
              zeigen: weniger Ausfälle, aber höhere Schäden – viele signifikante
              Vorfälle kosten &gt;$100k. Architekturentscheidungen sollten diese
              Folgekosten modellieren.
            </div>
          </div>

          <div className="infobox">
            <strong>Nachhaltigkeit:</strong> Studien attestieren großen
            Cloud-Plattformen deutliche Effizienzvorteile (bis zu 93&nbsp;%
            energie- und 98&nbsp;% kohlenstoffeffizienter im Vergleich zu
            On-Prem). Hyperscaler stellen Emissions-Dashboards bereit. Ergebnis
            hängt von Architektur &amp; Region ab.
          </div>
        </section>

        {/* Modelle & Framework */}
        <section id="frameworks">
          <h2>Modelle &amp; Entscheidungs-Framework</h2>
          <h3>Workload-Placement-Matrix</h3>
          <div
            className="table-wrap placeholder"
            aria-label="Tabelle: Workload-Placement-Matrix"
          >
            <table className="table" aria-describedby="matrix-desc">
              <caption id="matrix-desc" className="small">
                Vergleichskriterien je Option (Richtungspfeile ≙ Tendenz)
              </caption>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>On-Premise</th>
                  <th>Public Cloud</th>
                  <th>Hybrid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Latenz/Edge-Nähe</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Elastizität/Skalierung</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Datenhoheit/Residenz</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐*</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Time-to-Market</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>OPEX/CAPEX-Flexibilität</td>
                  <td>CAPEX-lastig</td>
                  <td>OPEX-lastig</td>
                  <td>gemischt</td>
                </tr>
                <tr>
                  <td>Vendor-Lock-in-Risiko</td>
                  <td>mittel</td>
                  <td>hoch*</td>
                  <td>mittel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="small">
            *Durch geschickte Architektur (Container, offene Schnittstellen) und
            Verträge (Portabilität, Exit) reduzierbar.
          </p>

          <h3>Compliance-Lens für die EU</h3>
          <p>
            Für <strong>NIS2</strong>-relevante Organisationen empfiehlt sich ein
            Controls-Mapping je Workload (z. B. Identitäts-/Zugriffsmanagement,
            Protokollierung, Incident-Reporting, Lieferantensteuerung).
            Finanzinstitute adressieren mit <strong>DORA</strong> zusätzlich
            Drittanbieter-Risiken (kritische ICT-Provider, TLPT, Register).
          </p>

          <div className="infobox">
            <strong>Deutschland-Spezifika (BSI/C5):</strong> Das <em>BSI-C5</em>{" "}
            definiert einen anerkannten Mindeststandard für Cloudsicherheit;
            viele Hyperscaler verfügen über C5-Atteste. Prüfe Berichtszeitraum,
            Scope und Feststellungen in der Due-Diligence.
          </div>

          <h3>Kosten-/Risiko-Modell</h3>
          <div className="placeholder" aria-label="Diagramm: TCO & Risiko">
            Diagramm-Platzhalter – TCO-Bausteine (Compute, Storage, Egress,
            Lizenzen, Betrieb) + Risiko-Bausteine (Ausfall, Compliance, Lock-in)
          </div>
          <div className="chips" aria-label="Beispielfaktoren">
            <span className="chip">Egress-Kosten</span>
            <span className="chip">Reserved/Committed Use</span>
            <span className="chip">Strom &amp; Kühlung</span>
            <span className="chip">Personal &amp; Skills</span>
            <span className="chip">Recovery-Zeit</span>
          </div>
        </section>

        {/* How-to */}
        <section id="howto">
          <h2>How-to: Schritt-für-Schritt-Checkliste</h2>
          <ol>
            <li>
              <strong>Geschäftsziele &amp; KPIs klären:</strong> Time-to-Market,
              Skalierung, Margen, SLOs. Verankere Kosten- und CO₂-Ziele
              (Emissions-Tracking).
            </li>
            <li>
              <strong>Workloads kategorisieren:</strong> Latenz-sensitiv?
              Datenhoheit? Spezialhardware? Definiere „Cloud-Ready“,
              „Modernisieren“, „Bleibt lokal“.
            </li>
            <li>
              <strong>TCO &amp; Value-at-Risk modellieren:</strong> OPEX/CAPEX,
              Egress &amp; Lizenzen; bewertet mit typischen
              Ausfallkostenklassen.
            </li>
            <li>
              <strong>Compliance-Mapping erstellen:</strong> Controls je
              Workload (NIS2/DORA/BSI-C5) samt Evidenzen.
            </li>
            <li>
              <strong>Operating Model &amp; FinOps aufsetzen:</strong>
              Ownership, Tagging, Budgetsichtbarkeit, automatisierte Policies
              (Rightsizing/Schedules).
            </li>
            <li>
              <strong>Pilot &amp; Exit-Plan definieren:</strong> CI/CD,
              Observability, Portabilität (Datenformate, SLAs,
              Kündigungsfristen).
            </li>
          </ol>

          <div id="template" className="infobox">
            <strong>Template:</strong>{" "}
            <a href="#download-template">Workload-Entscheidungsmatrix (Excel/CSV)</a>{" "}
            mit Kriterien, Gewichtung &amp; Score-Berechnung. Enthält
            Beispiel-Policies (Tagging, Egress-Budgets) und eine Checkliste für
            NIS2/DORA-Evidenzen.
          </div>
        </section>

        {/* Praxisbeispiele */}
        <section id="usecases">
          <h2>Praxisbeispiele</h2>
          <div className="grid grid-2">
            <div className="screenshot placeholder">
              Use-Case-Platzhalter – Fertigung (OT/IIoT)
            </div>
            <div>
              <h3>Fertigung (OT/IIoT, Edge-nah)</h3>
              <p>
                Maschinensteuerung &amp; Bildverarbeitung erfordern{" "}
                <em>&lt;10&nbsp;ms</em> Latenz. Lösung: <strong>On-Prem/Edge</strong>{" "}
                für Steuerung, <strong>Cloud</strong> für Training/Analytics.
                Daten werden lokal gepuffert und zyklisch in ein Data Lakehouse
                synchronisiert.
              </p>
            </div>

            <div className="screenshot placeholder">
              Use-Case-Platzhalter – SaaS/Scale-out
            </div>
            <div>
              <h3>SaaS-Produkt (Scale-out)</h3>
              <p>
                Schwankender Traffic und globaler Rollout sprechen für{" "}
                <strong>Public Cloud</strong>. Mit FinOps (Commitments,
                Autoscaling, Delete-Orphans) bleiben Kosten planbar; KPIs:
                COGS/Unit, Feature-Lead-Time.
              </p>
            </div>

            <div className="screenshot placeholder">
              Use-Case-Platzhalter – Financial Services
            </div>
            <div>
              <h3>Bank/Versicherung (DORA)</h3>
              <p>
                Strenge <strong>Drittanbietersteuerung</strong>, Register &amp;
                Resilienztests sind Pflicht. Architektur häufig{" "}
                <strong>Hybrid</strong>: kritische Kernsysteme lokal/Private
                Cloud, skalierende Analytik &amp; KI in Public Cloud – mit
                klaren Exit-Szenarien.
              </p>
            </div>

            <div className="screenshot placeholder">
              Use-Case-Platzhalter – Öffentlicher Sektor/Healthcare
            </div>
            <div>
              <h3>Öffentlicher Sektor/Healthcare (DE)</h3>
              <p>
                Vergabe fordert oft <strong>BSI-C5</strong>-Atteste. Prüfung der
                Anbieter-Reports (Scope, Zeitraum, Abdeckung) gehört in die
                Due-Diligence; Datenresidenz &amp; Mandantenfähigkeit sind
                entscheidend.
              </p>
            </div>

            <div className="screenshot placeholder">Use-Case-Platzhalter – KI/ML</div>
            <div>
              <h3>KI/ML</h3>
              <p>
                Training kurzzeitig sehr rechenintensiv → <strong>Cloud</strong>{" "}
                punktet mit elastischen GPUs; Dauer-Inferencing mit stabiler
                Last kann <strong>On-Prem</strong> günstiger sein.
                Nachhaltigkeit berücksichtigen (Region/CFD, Emissionstools).
              </p>
            </div>
          </div>
        </section>

        {/* Tools, Templates, Ressourcen */}
        <section id="tools">
          <h2>Tools, Templates &amp; Ressourcen</h2>
          <ul>
            <li>
              <a href="#download-template">
                Workload-Entscheidungsmatrix &amp; Checkliste (Excel/CSV)
              </a>{" "}
              – Gewichtungen, Scores, Evidenz-Nachweise.
            </li>
            <li>FinOps &amp; Kosten: Flexera State of the Cloud 2025.</li>
            <li>Compliance Leitplanken: ENISA NIS2 Technical Guidance; DORA-Infos (EIOPA).</li>
            <li>Nachhaltigkeit: Google Cloud Carbon Footprint; Effizienzstudien.</li>
            <li>BSI/C5: C5-Überblick &amp; C5-Katalog (PDF).</li>
          </ul>

          <div className="micro-ctas">
            <a href="/guides/finops">Guide: FinOps einführen</a>
            <a href="/guides/cloud-strategy">Cloud-Strategie entwickeln</a>
            <a href="/tools/tco-calculator">TCO-Rechner (Beta)</a>
          </div>
        </section>

        {/* Risiken & Best Practices */}
        <section id="risks">
          <h2>Risiken, Fehler vermeiden &amp; Best Practices</h2>
          <h3>Wesentliche Stolperfallen</h3>
          <ul>
            <li>
              <strong>Kein Tagging/Ownership:</strong> Ohne Verantwortliche
              explodieren Cloud-Kosten. Gegenmaßnahme: Tagging-Policy &amp; FinOps-RACI.
            </li>
            <li>
              <strong>Egress-Überraschungen:</strong> Datenabflüsse und
              interregionale Transfers werden unterschätzt. Gegenmaßnahme:
              Architektur für Low-Egress &amp; Datenlokalisierung.
            </li>
            <li>
              <strong>Unterschätzte Ausfallfolgen:</strong> Reine
              Verfügbarkeits-SLAs reichen nicht. Gegenmaßnahme:
              Resilienz-Tests, Notfallübungen.
            </li>
          </ul>

          <h3>Bewährte Vorgehensweisen</h3>
          <ul>
            <li>
              <strong>Entscheidung per Workload:</strong> Matrix nutzen,
              Annahmen &amp; Evidenzen dokumentieren.
            </li>
            <li>
              <strong>Shift-Left für Kosten &amp; Sicherheit:</strong> Kosten
              &amp; Controls bereits im Architekturdesign berücksichtigen.
            </li>
            <li>
              <strong>Nachhaltigkeit integrieren:</strong> Region/Architektur
              nach Emissionsdaten wählen und reporten.
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
              Service-Level &amp; Architektur angleichen (z. B. 99,9&nbsp;% vs.
              99,99&nbsp;%, Geo-Redundanz, 24/7-Betrieb). Egress, Lizenzen,
              Personal, Abschreibungen und Ausfallkosten berücksichtigen.
            </p>
          </details>
          <details>
            <summary>
              <strong>Ist Hybrid ein guter Kompromiss?</strong>
            </summary>
            <p>
              Ja, wenn Governance sitzt: Netzwerk-Design, einheitliche IAM,
              Observability, FinOps &amp; Compliance-Evidenzen sind
              erfolgskritisch.
            </p>
          </details>
          <details>
            <summary>
              <strong>Wie setze ich NIS2/DORA pragmatisch um?</strong>
            </summary>
            <p>
              Controls-Register je Workload, Evidenzen (Härtung, Monitoring,
              Incident), regelmäßige Tests &amp; Lieferantenreviews, klarer
              Exit-Plan.
            </p>
          </details>
        </section>

        {/* CTA unten */}
        <section id="kontakt" className="cta-panel">
          <h2>Kontakt &amp; Demo</h2>
          <p>
            Wir analysieren deine Workloads, modellieren TCO/CO₂ &amp; Risiko
            und entwickeln eine belastbare Roadmap – inkl. NIS2/DORA-Evidenzen.
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
              <label htmlFor="email">E-Mail</label>
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
          <p className="small">Frühstarter-Bonus: Kostenfreie 45-Min-Sprechstunde für die erste 10 Workload-Kandidatenanalyse.</p>
        </section>

        {/* Quellen */}
        <section aria-label="Quellen & weiterführende Links">
          <h2>Quellen (Auswahl, 2024–2025)</h2>
          <ol className="footnotes">
            <li><a className="ref" href="https://www.ciodive.com/news/cloud-spend-growth-forecast-2025-gartner/733401/" target="_blank" rel="noopener">Gartner-Prognose: Public Cloud End-User Spending 2025 (~$723&nbsp;Mrd.)</a> (CIO Dive, 11/2024).</li>
            <li><a className="ref" href="https://www.flexera.com/about-us/press-center/new-flexera-report-finds-84-percent-of-organizations-struggle-to-manage-cloud-spend" target="_blank" rel="noopener">Flexera: State of the Cloud 2025</a> (03/2025).</li>
            <li><a className="ref" href="https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance" target="_blank" rel="noopener">ENISA: NIS2 Technical Implementation Guidance</a> (06/2025).</li>
            <li><a className="ref" href="https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en" target="_blank" rel="noopener">EIOPA: DORA – Entry into application (17.01.2025)</a>.</li>
            <li><a className="ref" href="https://www.datacenterdynamics.com/en/news/uptime-institute-outages-in-2024-less-frequent-and-severe-but-more-expensive/" target="_blank" rel="noopener">Uptime Institute: Ausfälle seltener, aber teurer</a> (05/2025).</li>
            <li><a className="ref" href="https://www.scitepress.org/Papers/2024/133121/133121.pdf" target="_blank" rel="noopener">Sohani/Agrawal: Cloud-CO₂-Tools</a> (2024/2025).</li>
            <li><a className="ref" href="https://cloud.google.com/carbon-footprint" target="_blank" rel="noopener">Google Cloud: Carbon Footprint Dashboard</a>.</li>
            <li><a className="ref" href="https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5_node.html" target="_blank" rel="noopener">BSI: C5-Überblick</a> &amp; <a className="ref" href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/CloudComputing/ComplianceControlsCatalogue-Cloud_Computing-C5.pdf" target="_blank" rel="noopener">C5-Katalog (PDF)</a>.</li>
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
              Dr. Alex Neumann ist Cloud-Architekt &amp; FinOps-Practitioner mit 12+ Jahren Erfahrung in hybriden Plattformen, Kostensteuerung und regulierten Umgebungen. Er begleitet Unternehmen von der Strategie über das Architekturdesign bis zur Umsetzung mit messbaren Geschäftsergebnissen.
              <div className="small">Reviewed by: Marco Weber, CISO (08/2025)</div>
              <div className="tags">
                Themen: <a href="/guides/cloud-strategy">Cloud-Strategie</a>, <a href="/guides/finops">FinOps</a>, <a href="/services/cloud-migration">Cloud-Migration</a>
              </div>
            </div>
          </div>
        </section>

        {/* Download (CSV via Data-URI) */}
        <section id="download-template" className="infobox" aria-label="Download Workload-Entscheidungsmatrix">
          <h2>Workload-Entscheidungsmatrix (CSV)</h2>
          <p>Lade die Vorlage herunter und passe Kriterien/Gewichtungen an deine Anforderungen an.</p>
          <a
            className="btn-download"
            download="workload-entscheidung.csv"
            href={
              "data:text/csv;charset=utf-8,%EF%BB%BF" +
              encodeURIComponent(
                [
                  "Kategorie,Kriterium,Gewichtung (1-5),Score (1-5),Gewichteter Score",
                  "Architektur,Latenz (<ms),5,,, ",
                  "Architektur,Datenhoheit/Residenz,5,,, ",
                  "Kosten,TCO (12-36 Monate),4,,, ",
                  "Kosten,Egress-Kosten,3,,, ",
                  "Compliance,NIS2/DORA Controls erfüllt,5,,, ",
                  "Compliance,BSI-C5 Anforderungen,4,,, ",
                  "Operations,Observability /24x7,3,,, ",
                  "Operations,Team-Skill/Verfügbarkeit,3,,, ",
                  "Risiko,Vendor-Lock-in,3,,, ",
                  "Risiko,Exit-Plan definiert,4,,, ",
                  "„Summe“,,,,",
                ].join("\n")
              )
            }
          >
            CSV herunterladen
          </a>
        </section>
      </article>

      <footer>
        <div className="container small">
          © 2025 AI Blog-Artikel · <a href="/impressum">Impressum</a> ·{" "}
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
