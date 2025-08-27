import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Script from "next/script";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
