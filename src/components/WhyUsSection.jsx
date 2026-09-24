import { motion } from 'motion/react'
import { ChevronRight, User } from 'lucide-react'

export default function WhyUsSection() {
  const listItems = [
    {
      num: '01. Focus',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      title: 'Explore Your Potential',
      desc: 'Temukan kekuatan unik dan medium berkarya yang paling cocok dengan karakter dan keahlian dirimu.',
    },
    {
      num: '02. Action',
      badgeBg: 'bg-brand-lavender text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      title: 'Clear & Actionable Steps',
      desc: 'Ubah ide menjadi langkah-langkah kecil yang lebih jelas, realistis, dan mudah untuk mulai dikerjakan',
    },
    {
      num: '03. Community',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      cardBg: 'bg-white text-brand-dark',
      title: 'Share Your Plan',
      desc: 'Bagikan rencana karyamu agar lebih mudah didiskusikan dan dikembangkan bersama.',
    },
  ]

  return (
    <section id="kenapa-mahreen" className="relative py-12 sm:py-20 bg-white border-b-2 border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Heading & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full bg-brand-lavender text-brand-dark font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
                EKOSISTEM KREATIF
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-brand-dark leading-[1.2] sm:leading-[1.15]">
              Tempat untuk Memulai Karya Pertamamu
            </h2>

            <p className="text-xs sm:text-base text-brand-muted font-sans font-medium leading-relaxed">
              Karya Planner membantu kreator, mahasiswa, dan siapa pun yang ingin mengubah ide menjadi langkah awal yang lebih jelas dan terarah.
            </p>

            {/* Avatars */}
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              <div className="flex -space-x-2">
                {['#FCE762', '#9DA8EC', '#5F6479', '#FFF9E3'].map((bg, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: bg }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark flex items-center justify-center font-heading font-bold text-xs shadow-brutal-sm shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-brand-dark" />
                  </div>
                ))}
              </div>
              <div className="text-xs font-sans">
                <p className="text-brand-dark font-heading font-extrabold">Komunitas Kreatif</p>
                <p className="text-brand-muted font-medium">Ruang bertukar gagasan & berkarya bersama</p>
              </div>
            </div>

            {/* Pillars Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="grid grid-cols-3 gap-1.5 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-brand-cream border-2 border-brand-dark shadow-brutal text-center">
              <div>
                <p className="text-sm sm:text-base font-heading font-black text-brand-dark">Fokus</p>
                <p className="text-[10px] sm:text-[11px] font-sans font-bold text-brand-muted">Gagasan Jelas</p>
              </div>
              <div className="border-x-2 border-brand-dark/20 px-1">
                <p className="text-sm sm:text-base font-heading font-black text-brand-dark">Aksi</p>
                <p className="text-[10px] sm:text-[11px] font-sans font-bold text-brand-muted">Langkah Nyata</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-heading font-black text-brand-dark">Dampak</p>
                <p className="text-[10px] sm:text-[11px] font-sans font-bold text-brand-muted">Beri Manfaat</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {listItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${item.cardBg} border-2 border-brand-dark rounded-2xl p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow group cursor-default`}>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-heading font-extrabold px-3 py-0.5 rounded-full border border-brand-dark ${item.badgeBg}`}>
                    {item.num}
                  </span>
                  <ChevronRight className="w-5 h-5 text-brand-muted group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
