"use client";

import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Schon vorhandene Zustimmung laden
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsent(true);
    }

    // Event-Listener für nachträgliche Zustimmung
    const handler = () => setConsent(true);
    window.addEventListener("cookie-consent-accepted", handler);
    return () => window.removeEventListener("cookie-consent-accepted", handler);
  }, []);

  return (
    <html lang="de">
      <head>
        {consent && (
          <>
            {/* Google Analytics nur nach Zustimmung */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-E00ZMCKQYL"
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-E00ZMCKQYL');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
