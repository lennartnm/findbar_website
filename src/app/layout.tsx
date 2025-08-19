import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

