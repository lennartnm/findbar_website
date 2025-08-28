import React from "react";
import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AnalyticsProvider from "@/components/ui/AnalyticsProvider";

// Nur nötig, wenn der Blog eine EIGENE Favicon-Datei haben soll:
export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

<link
  rel="stylesheet"
  href="https://assets.calendly.com/assets/external/widget.css"
/>


export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Analytics wird nur geladen, wenn im CookieBanner akzeptiert */}
      <AnalyticsProvider />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
