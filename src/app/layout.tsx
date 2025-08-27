import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Google Analytics */}
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
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
