import { Star, ChevronRight } from 'lucide-react'

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
      desc: 'Panduan taktis anti-overthinking sehingga kamu selalu tahu persis apa yang harus dikerjakan setiap harinya.',
    },
    {
      num: '03. Community',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      cardBg: 'bg-brand-dark text-white',
      title: 'Grow Through Collaboration',
      desc: 'Terhubung dengan ratusan kreator sefrekuensi untuk saling menyemangati dan memberi feedback konstruktif.',
    },
  ]

  return (
    <section id="komunitas" className="relative py-20 bg-white border-b-2 border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Social Proof */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex">
              <span className="px-3.5 py-1 rounded-full bg-brand-lavender text-brand-dark font-heading font-extrabold text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
                EKOSISTEM KREATIF
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-dark leading-[1.15]">
              Tempat untuk Memulai Karya Pertamamu
            </h2>

            <p className="text-sm sm:text-base text-brand-muted font-sans font-medium leading-relaxed">
              Kami hadir untuk mendampingi kreator, pemikir, mahasiswa, dan perancang karya di setiap fase perjalanan mereka dari nol hingga tuntas.
            </p>

            {/* Social Avatars Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {['#FCE762', '#9DA8EC', '#5F6479', '#FFF9E3'].map((bg, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: bg }}
                    className="w-10 h-10 rounded-full border-2 border-brand-dark flex items-center justify-center font-heading font-bold text-xs shadow-brutal-sm"
                  >
                    👤
                  </div>
                ))}
              </div>
              <div className="text-xs font-sans">
                <div className="flex items-center gap-1 text-brand-dark font-heading font-extrabold">
                  <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-dark" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
                <p className="text-brand-muted font-medium">Dipercaya 1,500+ kreator muda</p>
              </div>
            </div>

            {/* Metrics Box */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-brand-cream border-2 border-brand-dark shadow-brutal text-center">
              <div>
                <p className="text-xl sm:text-2xl font-heading font-black text-brand-dark">1500+</p>
                <p className="text-[11px] font-sans font-bold text-brand-muted">Karya Jadi</p>
              </div>
              <div className="border-x-2 border-brand-dark/20">
                <p className="text-xl sm:text-2xl font-heading font-black text-brand-dark">24</p>
                <p className="text-[11px] font-sans font-bold text-brand-muted">Komunitas</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-heading font-black text-brand-dark">98.5%</p>
                <p className="text-[11px] font-sans font-bold text-brand-muted">Kepuasan</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {listItems.map((item) => (
              <div
                key={item.title}
                className={`${item.cardBg} border-2 border-brand-dark rounded-2xl p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 transition-all group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-heading font-extrabold px-3 py-0.5 rounded-full border border-brand-dark ${item.badgeBg}`}
                  >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
