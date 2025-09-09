"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function AnalyticsProvider() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsent(true);
    }
    const handler = () => setConsent(true);
    window.addEventListener("cookie-consent-accepted", handler);
    return () => window.removeEventListener("cookie-consent-accepted", handler);
  }, []);

  if (!consent) return null;

  return (
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
      <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="m58LhIuKIabk0TfV" data-version="062024"></script>
    </>
  );
}
