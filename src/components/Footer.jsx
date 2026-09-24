export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t-2 border-brand-dark/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-lavender border-2 border-brand-dark flex items-center justify-center font-heading font-extrabold text-xs text-brand-dark shadow-brutal-sm">
            M
          </div>
          <span className="text-xl font-heading font-black tracking-tight text-brand-dark">
            mahreen<span className="text-brand-lavender">.</span>
          </span>
        </div>

        {/* Center / Rights */}
        <p className="text-xs sm:text-sm font-sans font-semibold text-brand-muted text-center sm:text-right">
          © 2026 Mahreen Karya Planner. Dibuat untuk memberdayakan ide kreator Indonesia.
        </p>
      </div>
    </footer>
  )
}
