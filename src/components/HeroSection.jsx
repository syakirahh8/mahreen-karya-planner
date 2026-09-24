import { ArrowRight, Sparkles, Paintbrush, PenTool, Code, Video } from 'lucide-react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function HeroSection() {
  const categories = [
    { label: 'Desain & UI', icon: Paintbrush },
    { label: 'Artikel & Buku', icon: PenTool },
    { label: 'Web & Coding', icon: Code },
    { label: 'Konten Kreatif', icon: Video },
  ]

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b-2 border-brand-dark/10">
      {/* Floating Decorative Shapes matching design */}
      <div className="absolute top-10 left-8 sm:left-20 animate-bounce duration-1000 hidden sm:block">
        <YellowCube className="rotate-12" />
      </div>
      <div className="absolute top-24 right-10 sm:right-28 hidden sm:block">
        <LavenderDot className="w-5 h-5" />
      </div>
      <div className="absolute bottom-16 left-12 sm:left-28 hidden sm:block">
        <LavenderDot className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 right-8 sm:right-20 hidden sm:block">
        <YellowCube className="-rotate-12" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        {/* Top Pill Badge */}
        <div className="inline-flex">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark text-brand-yellow font-heading font-extrabold text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLATFORM KARYA PERTAMA</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-brand-dark max-w-4xl mx-auto leading-[1.2] sm:leading-[1.18]">
          Ide{' '}
          <span className="relative inline-block px-3.5 sm:px-5 py-0.5 sm:py-1 bg-brand-lavender text-brand-dark rounded-2xl border-2 border-brand-dark -rotate-2 shadow-brutal-sm mx-1">
            Kecil
          </span>{' '}
          Bisa Menjadi{' '}
          <span className="relative inline-block px-3.5 sm:px-5 py-0.5 sm:py-1 bg-brand-yellow text-brand-dark rounded-2xl border-2 border-brand-dark rotate-2 shadow-brutal-sm mx-1">
            Karya
          </span>{' '}
          yang Sangat Berarti.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-muted font-sans font-medium leading-relaxed">
          Dari ide liar, coretan sederhana hingga jadi karya utuh yang bisa dinikmati dan berdampak bagi banyak orang.
        </p>

        {/* Category Tags Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cream border-2 border-brand-dark text-brand-dark font-sans font-bold text-xs sm:text-sm shadow-brutal-sm hover:-translate-y-0.5 transition-all cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-brand-dark" />
                <span>{cat.label}</span>
              </div>
            )
          })}
        </div>

        {/* Hero CTA Button */}
        <div className="pt-4">
          <a
            href="#planner"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-brand-lavender text-brand-dark font-heading font-black text-base sm:text-lg border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 active:translate-y-0 transition-all"
          >
            <span>Ikuti Karya Planner Sekarang</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  )
}
