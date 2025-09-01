"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 py-4 flex items-end justify-between">
        {/* Linke Seite: Brand + Navigation */}
        <div className="flex items-end gap-10">
          {/* Brand (Logo) */}
          <a
            href="/"
            className="inline-flex items-end"
            aria-label="findbar – Startseite"
          >
            <Image
              src="/Findbar%20Logo%20PNG.webp"
              alt="findbar Logo"
              width={160}
              height={40}
              priority
              className="block h-8 md:h-10 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-end gap-8 text-sm text-slate-700">
            <a
              href="/"
              className="leading-none pb-0.5 transition-colors hover:text-slate-900"
            >
              Startseite
            </a>
            <a
              href="/blog"
              className="leading-none pb-0.5 transition-colors hover:text-slate-900"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* CTA */}
        <Button asChild className="self-end">
          <a href="/kontakt">Jetzt anfragen</a>
        </Button>
      </div>
    </header>
  );
}
