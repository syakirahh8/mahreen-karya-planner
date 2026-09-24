import { ArrowUpRight } from 'lucide-react'
import { YellowCube } from './FloatingShapes'

export default function ValuesSection() {
  const cards = [
    {
      num: '01',
      title: 'Create',
      bg: 'bg-brand-yellow',
      text: 'Wadah untuk menuangkan ide mentah menjadi rencana nyata langkah demi langkah.',
    },
    {
      num: '02',
      title: 'Grow',
      bg: 'bg-brand-lavender',
      text: 'Kembangkan potensi diri bersama kurikulum & alur berkarya yang terarah.',
    },
    {
      num: '03',
      title: 'Collaborate',
      bg: 'bg-white',
      text: 'Temukan rekan kolaborasi untuk mewujudkan ide besar menjadi nyata bersama.',
    },
    {
      num: '04',
      title: 'Impact',
      bg: 'bg-brand-yellow',
      text: 'Bagikan hasil karyamu ke audiens luas dan berikan dampak positif bagi sekitar.',
    },
  ]

  return (
    <section id="nilai" className="relative py-12 sm:py-20 bg-brand-cream border-b-2 border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-lavender text-brand-dark font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
                WHY US / NILAI KAMI
              </span>
              <YellowCube className="scale-75" />
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-brand-dark leading-tight">
              Ruang untuk Tumbuh, Berkarya, dan Memberi Dampak
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-base text-brand-muted font-sans font-medium leading-relaxed">
            Kami menyediakan ruang yang aman dan terstruktur agar setiap ide yang ada di kepalamu bisa dirawat, dieksekusi, hingga menghasilkan karya nyata.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className={`${card.bg} border-2 border-brand-dark rounded-2xl p-5 sm:p-7 shadow-brutal flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:-translate-y-1 hover:shadow-brutal-lg transition-all group`}
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-brand-dark text-white font-heading font-bold text-xs flex items-center justify-center">
                  {card.num}
                </span>
                <div className="w-8 h-8 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:rotate-45 transition-transform bg-white/40">
                  <ArrowUpRight className="w-4 h-4 text-brand-dark stroke-[2.5]" />
                </div>
              </div>

              <div className="space-y-2.5 mt-8">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-dark/80 font-sans font-semibold leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
