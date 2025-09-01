export default function Footer() {
  return (
    <footer className="bg-slate-100 text-black border-t border-slate-200 py-8 text-center text-sm">
      <div className="space-x-4">
        <a href="/impressum" className="transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Impressum</a>
        <a href="/agb" className="transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">AGB</a>
        <a href="/datenschutz" className="transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Datenschutz</a>
        <a href="/blog" className="transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Blog</a>
        <a href="/sitemap.xml" className="transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">Sitemap</a>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
