"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Script from "next/script";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsent(true);
    }
    const handler = () => setConsent(true);
    window.addEventListener("cookie-consent-accepted", handler);
    return () => window.removeEventListener("cookie-consent-accepted", handler);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {consent && (
        <>
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

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
