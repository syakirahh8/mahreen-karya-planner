import { ArrowRight } from 'lucide-react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function QuoteSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b-2 border-brand-dark/10 overflow-hidden">
      {/* Decorative dots & cube */}
      <div className="absolute top-8 right-12 hidden md:block">
        <LavenderDot className="w-5 h-5" />
      </div>
      <div className="absolute bottom-6 left-10 hidden md:block">
        <YellowCube className="scale-75 rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex">
              <span className="px-3.5 py-1 rounded-full bg-brand-cream text-brand-dark font-heading font-extrabold text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
                MULAI DARI NOL
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-dark leading-[1.15]">
              Kamu Tidak Harus Memulai dengan Ide Besar
            </h2>
            <div>
              <a
                href="#planner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-heading font-bold text-sm border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 transition-all"
              >
                <span>Lihat Cerita Mereka</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <p className="text-base sm:text-lg text-brand-muted font-sans font-medium leading-relaxed">
              Banyak karya monumental berawal dari coretan kecil di secarik kertas. Yang terpenting bukanlah seberapa megah idemu di awal, melainkan keberanian untuk melangkah dan konsistensi untuk menyelesaikannya.
            </p>

            {/* Progress / Statement Bar */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs font-heading font-extrabold tracking-wider text-brand-dark uppercase">
                <span>LANGKAH KECIL LEBIH BAIK DARI DIAM TOTAL</span>
                <span className="text-brand-lavender font-black">100% AKSI</span>
              </div>
              <div className="w-full h-4 rounded-full bg-brand-cream border-2 border-brand-dark p-0.5 overflow-hidden shadow-brutal-sm">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-lavender via-brand-yellow to-brand-lavender animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
