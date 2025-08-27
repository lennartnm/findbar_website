import React from "react";
import Header from "@/src/components/ui/Header.tsx";
import Footer from "@/src/components/ui/Footer.tsx";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
