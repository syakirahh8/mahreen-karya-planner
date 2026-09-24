import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function CtaBannerSection() {
  return (
    <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Lavender Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden bg-brand-lavender border-2 border-brand-dark rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 shadow-brutal sm:shadow-brutal-lg text-center space-y-6 sm:space-y-8">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [12, 18, 12] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute top-6 left-6 sm:top-10 sm:left-12 hidden sm:block pointer-events-none">
            <YellowCube className="scale-110" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [-12, -6, -12] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 hidden sm:block pointer-events-none">
            <YellowCube className="scale-110" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute top-10 right-16 hidden md:block pointer-events-none">
            <LavenderDot className="w-5 h-5 bg-brand-yellow" />
          </motion.div>

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
            Wadah interaktif untuk membantu mengubah ide menjadi langkah karya yang lebih nyata
          </p>

          {/* Action Button */}
          <div className="pt-1 sm:pt-2 space-y-3 flex flex-col items-center">
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              href="#planner"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-sm sm:text-lg border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg transition-all text-center">
              <span>Mulai Karya Pertamamu Sekarang</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </motion.a>

            <p className="text-[11px] sm:text-xs font-sans font-bold text-brand-dark/70 tracking-wide">
              Tanpa Login • Langsung Mulai • Progres Tersimpan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
