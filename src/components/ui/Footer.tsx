export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1b4d2b] to-[#78A68A] text-white border-t border-white/10 py-8 text-center text-sm">
      <div className="space-x-4">
        <a href="/impressum" className="transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">Impressum</a>
        <a href="/agb" className="transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">AGB</a>
        <a href="/datenschutz" className="transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">Datenschutz</a>
        <a href="/blog" className="transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">Blog</a>
        <a href="/sitemap.xml" className="transition-colors hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">Sitemap</a>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
