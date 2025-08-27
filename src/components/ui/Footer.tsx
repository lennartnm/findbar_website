export function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
      <div className="space-x-4">
        <a href="/impressum" className="hover:text-slate-700 transition-colors">
          Impressum
        </a>
        <a href="/agb" className="hover:text-slate-700 transition-colors">
          AGB
        </a>
        <a
          href="/datenschutz"
          className="hover:text-slate-700 transition-colors"
        >
          Datenschutz
        </a>
      </div>
      <p className="mt-3">
        © {new Date().getFullYear()} Meine Seite. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
