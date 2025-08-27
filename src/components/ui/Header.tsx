"use client";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Linke Seite: Brand + Navigation */}
        <div className="flex items-center gap-10">
          {/* Brand */}
          <a
            href="/"
            className="text-xl md:text-2xl font-serif italic font-bold tracking-tight text-slate-900 hover:opacity-90"
            aria-label="findbar – Startseite"
          >
            findbar
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm text-slate-700">
            <a href="/" className="transition-colors hover:text-slate-900">
              Startseite
            </a>
            <a href="/blog" className="transition-colors hover:text-slate-900">
              Blog
            </a>
          </nav>
        </div>

        {/* CTA */}
        <Button asChild>
          <a href="/kontakt">Jetzt anfragen</a>
        </Button>
      </div>
    </header>
  );
}
