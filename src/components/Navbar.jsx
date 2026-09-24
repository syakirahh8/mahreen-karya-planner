import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group focus:outline-none shrink-0 py-1">
          <img
            src="/images/logo-black.png"
            alt="Mahreen Indonesia"
            className="h-7 sm:h-9 w-auto object-contain group-hover:opacity-85 transition-opacity"
          />
        </a>

        {/* Desktop/Tablet Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-sans font-semibold text-xs lg:text-sm text-brand-dark">
          <a href="#nilai" className="hover:text-brand-lavender transition-colors py-1">
            Tentang Mahreen
          </a>
          <a href="#planner" className="hover:text-brand-lavender transition-colors py-1">
            Karya Planner
          </a>
          <a href="#cara-kerja" className="hover:text-brand-lavender transition-colors py-1">
            Cara Kerja
          </a>
          <a href="#kenapa-mahreen" className="hover:text-brand-lavender transition-colors py-1">
            Kenapa Mahreen
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#planner"
            className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-brand-yellow text-brand-dark font-heading font-bold text-xs lg:text-sm border-2 border-brand-dark shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-all">
            Mulai Sekarang
            <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border-2 border-brand-dark bg-brand-cream text-brand-dark active:scale-95 transition-transform"
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-brand-dark bg-brand-cream px-4 sm:px-6 py-6 space-y-5 animate-fadeIn shadow-brutal">
          <nav className="flex flex-col gap-2 font-heading font-bold text-base text-brand-dark">
            <a
              href="#nilai"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-brand-lavender/30 transition-colors">
              Tentang Mahreen
            </a>
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-brand-lavender/30 transition-colors">
              Karya Planner
            </a>
            <a
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-brand-lavender/30 transition-colors">
              Cara Kerja
            </a>
            <a
              href="#kenapa-mahreen"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-brand-lavender/30 transition-colors">
              Kenapa Mahreen
            </a>
          </nav>

          <div className="pt-2 border-t-2 border-brand-dark/10">
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-sm border-2 border-brand-dark shadow-brutal active:scale-[0.98] transition-all">
              <span>Mulai Sekarang</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
