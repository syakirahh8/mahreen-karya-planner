import { ArrowRight, Sparkles } from 'lucide-react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function CtaBannerSection() {
  return (
    <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Big Lavender Card */}
        <div className="relative overflow-hidden bg-brand-lavender border-2 border-brand-dark rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 shadow-brutal sm:shadow-brutal-lg text-center space-y-6 sm:space-y-8">
          {/* Floating Accents inside card */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-12 hidden sm:block">
            <YellowCube className="rotate-12 scale-110" />
          </div>
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 hidden sm:block">
            <YellowCube className="-rotate-12 scale-110" />
          </div>
          <div className="absolute top-10 right-16 hidden md:block">
            <LavenderDot className="w-5 h-5 bg-brand-yellow" />
          </div>

          {/* Badge */}
          <div className="inline-flex">
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white text-brand-dark font-heading font-black text-[11px] sm:text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm inline-flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-brand-yellow text-brand-dark" />
              GABUNG BERSAMA KAMI
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-brand-dark max-w-3xl mx-auto leading-[1.2] sm:leading-[1.15] tracking-tight">
            Indonesia Tidak Kekurangan Ide. Mungkin Ide Berikutnya Datang Darimu.
          </h2>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-xs sm:text-base text-brand-dark/85 font-sans font-semibold leading-relaxed">
            Wadah karya interaktif terbaik untuk melangkah maju dari sekadar wacana menjadi karya yang bisa dibanggakan.
          </p>

          {/* Action Button */}
          <div className="pt-1 sm:pt-2 space-y-3 flex flex-col items-center">
            <a
              href="#planner"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-sm sm:text-lg border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 active:translate-y-0 transition-all text-center"
            >
              <span>Mulai Karya Pertamamu Sekarang</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </a>

            <p className="text-[11px] sm:text-xs font-sans font-bold text-brand-dark/70 tracking-wide">
              100% Gratis • Tanpa Perlu Akun • Akses Langsung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
