import { motion } from 'motion/react'
import { ArrowRight, Sparkles, Code2, Palette, Briefcase, HeartHandshake } from 'lucide-react'
import { YellowCube, LavenderDot } from './FloatingShapes'

export default function HeroSection() {
  const categories = [
    { label: 'Technology', icon: Code2 },
    { label: 'Creative', icon: Palette },
    { label: 'Business', icon: Briefcase },
    { label: 'Social Impact', icon: HeartHandshake },
  ]

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b-2 border-brand-dark/10">
      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="absolute top-10 left-8 sm:left-20 hidden sm:block pointer-events-none">
        <YellowCube />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute top-24 right-10 sm:right-28 hidden sm:block pointer-events-none">
        <LavenderDot className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute bottom-16 left-12 sm:left-28 hidden sm:block pointer-events-none">
        <LavenderDot className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [-12, -6, -12] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute bottom-20 right-8 sm:right-20 hidden sm:block pointer-events-none">
        <YellowCube />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6 sm:space-y-8">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark text-brand-yellow font-heading font-extrabold text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLATFORM KARYA PERTAMA</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-brand-dark max-w-4xl mx-auto leading-[1.2] sm:leading-[1.15]">
          Ide{' '}
          <motion.span
            whileHover={{ scale: 1.05, rotate: -4 }}
            className="relative inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 bg-brand-lavender text-brand-dark rounded-xl sm:rounded-2xl border-2 border-brand-dark -rotate-2 shadow-brutal-sm mx-1 cursor-default">
            Kecil
          </motion.span>{' '}
          Bisa Menjadi{' '}
          <motion.span
            whileHover={{ scale: 1.05, rotate: 4 }}
            className="relative inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 bg-brand-yellow text-brand-dark rounded-xl sm:rounded-2xl border-2 border-brand-dark rotate-2 shadow-brutal-sm mx-1 cursor-default">
            Karya
          </motion.span>{' '}
          yang Berarti.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xs sm:text-base text-brand-muted font-sans font-medium leading-relaxed px-2">
          Dari ide liar dan coretan sederhana, susun langkah pertamamu untuk mulai mewujudkannya menjadi karya yang berarti.
        </motion.p>

        {/* Category Tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.35 + idx * 0.06 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-cream border-2 border-brand-dark text-brand-dark font-sans font-bold text-xs sm:text-sm shadow-brutal-sm hover:shadow-brutal transition-all cursor-default">
                <Icon className="w-3.5 h-3.5 text-brand-dark shrink-0" />
                <span>{cat.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Hero CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="pt-2 sm:pt-4 flex justify-center">
          <motion.a
            href="#planner"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-brand-lavender text-brand-dark font-heading font-black text-sm sm:text-lg border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg transition-shadow text-center">
            <span>Ikuti Karya Planner Sekarang</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
