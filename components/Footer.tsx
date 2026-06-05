export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-olive-950 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/adga-mark-cream.svg"
              alt=""
              aria-hidden
              className="h-7 w-7"
            />
            <span className="font-serif text-lg font-semibold tracking-tight">
              Solvenza
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-cream/70">
            <a href="#who" className="hover:text-cream transition-colors">Who</a>
            <a href="#how" className="hover:text-cream transition-colors">How</a>
            <a href="#what" className="hover:text-cream transition-colors">What</a>
            <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
            <a
              href="mailto:alberto@adgascencio.com"
              className="hover:text-cream transition-colors"
            >
              alberto@adgascencio.com
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-olive-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-cream/50">
          <div>© {year} Solvenza</div>
          <div className="italic font-serif text-sm">Built one company at a time.</div>
        </div>
      </div>
    </footer>
  );
}
