export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
      <div className="space-x-4">
        <a href="/impressum" className="transition-colors hover:text-slate-700">Impressum</a>
        <a href="/agb" className="transition-colors hover:text-slate-700">AGB</a>
        <a href="/datenschutz" className="transition-colors hover:text-slate-700">Datenschutz</a>
        <a href="/blog" className="transition-colors hover:text-slate-700">Blog</a>
         <a href="/sitemap.xml" className="transition-colors hover:text-slate-700">Sitemap</a>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
