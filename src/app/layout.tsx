import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";
import AnalyticsProvider from "@/components/ui/AnalyticsProvider";

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
  icons: {
    icon: "/public/icon.png",        // liegt in /public
    shortcut: "/public/icon.png",
    apple: "/public/icon.png",       // optional – falls du ein eigenes apple-touch-icon hast, hier ersetzen
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* Analytics wird nur nach Consent geladen */}
        <AnalyticsProvider />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
