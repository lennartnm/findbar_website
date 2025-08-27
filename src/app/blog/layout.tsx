import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AnalyticsProvider from "@/components/ui/AnalyticsProvider";

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
