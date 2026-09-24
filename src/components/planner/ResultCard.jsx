import { forwardRef } from 'react'
import { Sparkles, Compass, Heart, Lightbulb, Footprints, Award } from 'lucide-react'

const ResultCard = forwardRef(function ResultCard(
  { interest, impact, idea, firstAction, date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) },
  ref
) {
  return (
    <div
      ref={ref}
      id="karya-plan-result-card"
      className="w-full max-w-2xl mx-auto rounded-3xl bg-brand-cream border-4 border-brand-dark p-7 sm:p-9 shadow-brutal-lg space-y-6 relative overflow-hidden"
    >
      {/* Decorative background watermark / badge */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-lavender/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Card */}
      <div className="flex items-start justify-between border-b-2 border-brand-dark pb-5 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark text-brand-yellow text-xs font-heading font-black tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>KARYA PLAN RESMI</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-brand-dark mt-2">
            MY KARYA PLAN
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-semibold">
            Diterbitkan pada {date} • Platform Mahreen
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-brand-lavender border-2 border-brand-dark flex flex-col items-center justify-center font-heading font-black text-brand-dark shadow-brutal-sm">
          <span className="text-lg leading-none">M</span>
          <span className="text-[9px] uppercase tracking-tighter">Plan</span>
        </div>
      </div>

      {/* Metadata Badges: My Field & I Care About */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        <div className="p-4 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1">
          <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-xs uppercase">
            <Compass className="w-4 h-4 text-brand-lavender" />
            <span>My Field</span>
          </div>
          <p className="text-lg font-heading font-extrabold text-brand-dark">
            {interest}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1">
          <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-xs uppercase">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>I Care About</span>
          </div>
          <p className="text-lg font-heading font-extrabold text-brand-dark">
            {impact}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-4 relative z-10">
        {/* My Idea */}
        <div className="p-5 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-2">
          <div className="flex items-center gap-2 text-brand-muted font-heading font-bold text-xs uppercase">
            <Lightbulb className="w-4 h-4 text-brand-yellow" />
            <span>My Idea (Konsep Karya)</span>
          </div>
          <p className="text-sm sm:text-base font-sans font-semibold text-brand-dark leading-relaxed whitespace-pre-wrap">
            {idea}
          </p>
        </div>

        {/* My First Step */}
        <div className="p-5 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-2">
          <div className="flex items-center gap-2 text-brand-muted font-heading font-bold text-xs uppercase">
            <Footprints className="w-4 h-4 text-brand-lavender" />
            <span>My First Step (Langkah Awal)</span>
          </div>
          <p className="text-sm sm:text-base font-sans font-semibold text-brand-dark leading-relaxed whitespace-pre-wrap">
            {firstAction}
          </p>
        </div>
      </div>

      {/* Footer Banner with Hashtag */}
      <div className="pt-4 border-t-2 border-brand-dark flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-sm border-2 border-brand-dark shadow-brutal-sm">
            #BerkaryaUntukIndonesia
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans font-bold text-brand-muted">
          <Sparkles className="w-3.5 h-3.5 text-brand-lavender" />
          <span>Komitmen Nyata Langkah Pertama</span>
        </div>
      </div>
    </div>
  )
})

export default ResultCard
