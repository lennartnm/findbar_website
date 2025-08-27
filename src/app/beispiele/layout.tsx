// src/app/blog/drafts/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,   // noindex
    follow: false,  // nofollow (optional)
    nocache: true,  // optional
  },
};

export default function DraftsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      {/* Wenn dein Artikelbereich schmaler ist, kannst du hier noch einen Container setzen */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
