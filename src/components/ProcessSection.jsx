import { motion } from 'motion/react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function ProcessSection() {
  const steps = [
    {
      step: 'Step 1',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      num: '01',
      title: 'Definisikan Ide',
      desc: 'Tuliskan keresahan, gagasan, atau ide mentahmu tanpa takut salah atau dihakimi.',
    },
    {
      step: 'Step 2',
      badgeBg: 'bg-brand-lavender text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      num: '02',
      title: 'Susun Rencana Karya',
      desc: 'Pecah ide besar menjadi langkah-langkah mikro yang terukur, realistis, dan jelas.',
    },
    {
      step: 'Step 3',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      num: '03',
      title: 'Ambil Langkah Pertama',
      desc: 'Konsisten luangkan waktu 30 menit per hari untuk mencicil progres karya hingga selesai.',
    },
    {
      step: 'Step 4',
      badgeBg: 'bg-brand-cream text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      num: '04',
      title: 'Kembangkan Karyamu',
      desc: 'Publikasikan karyamu, bangun portofolio bereputasi, dan raih peluang berharga.',
    },
  ]

  return (
    <section id="cara-kerja" className="relative py-12 sm:py-20 bg-brand-cream border-b-2 border-brand-dark/10">
      <div className="absolute top-8 left-10 hidden sm:block">
        <YellowCube className="rotate-12 scale-90" />
      </div>
      <div className="absolute bottom-10 right-14 hidden sm:block">
        <LavenderDot className="w-5 h-5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="space-y-2.5 sm:space-y-3 max-w-2xl">
          <div className="inline-flex">
            <span className="px-3 py-1 rounded-full bg-white text-brand-dark font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
              ALUR BERKARYA
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-brand-dark">
            Perjalanan Sederhana Menuju Karya Nyata
          </h2>
          <p className="text-xs sm:text-base text-brand-muted font-sans font-medium">
            4 langkah sederhana untuk mengubah ide menjadi rencana karya yang siap dimulai
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`${item.cardBg} border-2 border-brand-dark rounded-2xl p-5 sm:p-6 shadow-brutal flex flex-col justify-between min-h-[220px] sm:min-h-[250px] hover:shadow-brutal-lg transition-shadow cursor-default`}>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-heading font-extrabold px-3 py-1 rounded-full border border-brand-dark ${item.badgeBg}`}>
                  {item.step}
                </span>
                <span className="text-xs font-mono font-bold opacity-60">
                  {item.num}
                </span>
              </div>

              <div className="space-y-2 mt-6">
                <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
