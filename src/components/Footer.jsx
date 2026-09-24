export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t-2 border-brand-dark/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center group focus:outline-none shrink-0">
          <img
            src="/images/logo-black.png"
            alt="Mahreen Indonesia"
            className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-85 transition-opacity"
          />
        </a>

        {/* Center / Rights */}
        <p className="text-xs sm:text-sm font-sans font-semibold text-brand-muted text-center sm:text-right">
          © 2026 Mahreen Karya Planner. Dibuat untuk memberdayakan ide kreator Indonesia.
        </p>
      </div>
    </footer>
  )
}
