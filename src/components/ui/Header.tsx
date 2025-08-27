"use client";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm text-slate-700">
          <a href="/" className="hover:text-slate-900 transition-colors">
            Startseite
          </a>
          <a href="/blog" className="hover:text-slate-900 transition-colors">
            Blog
          </a>
        </nav>

        {/* CTA */}
        <Button asChild>
          <a href="/kontakt">Jetzt anfragen</a>
        </Button>
      </div>
    </header>
  );
}
