import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-lavender border-2 border-brand-dark flex items-center justify-center font-heading font-extrabold text-sm text-brand-dark shadow-brutal-sm group-hover:rotate-6 transition-transform">
            M
          </div>
          <span className="text-2xl font-heading font-black tracking-tight text-brand-dark">
            mahreen<span className="text-brand-lavender">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm text-brand-dark">
          <a href="#nilai" className="hover:text-brand-lavender transition-colors">
            Nilai Kami
          </a>
          <a href="#planner" className="hover:text-brand-lavender transition-colors">
            Karya Planner
          </a>
          <a href="#cara-kerja" className="hover:text-brand-lavender transition-colors">
            Cara Kerja
          </a>
          <a href="#komunitas" className="hover:text-brand-lavender transition-colors">
            Komunitas
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#planner"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-yellow text-brand-dark font-heading font-bold text-sm border-2 border-brand-dark shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Mulai Sekarang
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border-2 border-brand-dark bg-brand-cream text-brand-dark"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b-2 border-brand-dark px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-3 font-heading font-bold text-base text-brand-dark">
            <a
              href="#nilai"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-brand-lavender/30"
            >
              Nilai Kami
            </a>
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-brand-lavender/30"
            >
              Karya Planner
            </a>
            <a
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-brand-lavender/30"
            >
              Cara Kerja
            </a>
            <a
              href="#komunitas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-brand-lavender/30"
            >
              Komunitas
            </a>
          </nav>
          <a
            href="#planner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 rounded-full bg-brand-yellow text-brand-dark font-heading font-bold text-sm border-2 border-brand-dark shadow-brutal-sm"
          >
            Mulai Sekarang
          </a>
        </div>
      )}
    </header>
  )
}
