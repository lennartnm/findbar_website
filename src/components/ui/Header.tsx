"use client";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      {/* exakt derselbe Container wie im restlichen Code */}
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-8 text-sm text-slate-700">
          <a href="/" className="transition-colors hover:text-slate-900">
            Startseite
          </a>
          <a href="/blog" className="transition-colors hover:text-slate-900">
            Blog
          </a>
        </nav>

        <Button asChild>
          <a href="/kontakt">Jetzt anfragen</a>
        </Button>
      </div>
    </header>
  );
}
