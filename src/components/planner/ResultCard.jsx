import { forwardRef } from 'react'
import { Sparkles, Compass, Target, Lightbulb, Footprints, Award, ShieldCheck, CheckCircle2 } from 'lucide-react'

const ResultCard = forwardRef(function ResultCard(
  {
    interest,
    impact,
    idea,
    firstAction,
    date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
  },
  ref
) {
  // Generate a consistent pseudo certificate ID from inputs
  const certId = `MKP-${(interest ? interest.charCodeAt(0) * 17 : 88) + (impact ? impact.charCodeAt(0) * 23 : 99)}-${date.slice(-4)}`

  return (
    <div
      ref={ref}
      id="karya-plan-result-card"
      className="w-full max-w-2xl rounded-3xl bg-[#FFFDF7] border-4 border-brand-dark p-6 sm:p-10 shadow-brutal-lg space-y-6 sm:space-y-7 relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-lavender/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b-2 sm:border-b-[3px] border-brand-dark pb-5 relative z-10 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-dark text-brand-yellow text-[10px] sm:text-xs font-heading font-black tracking-wider uppercase shadow-brutal-sm">
              <Award className="w-3.5 h-3.5 text-brand-yellow" />
              <span>OFFICIAL ROADMAP</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-brand-cream border border-brand-dark font-mono font-bold text-[10px] text-brand-dark">
              {certId}
            </span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-brand-dark">
              MY KARYA PLAN
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-sans font-semibold mt-0.5">
              Rencana Aksi Kreator • Diterbitkan pada {date}
            </p>
          </div>
        </div>

        {/* Brand Logo & Verification Seal */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2.5 shrink-0">
          <img
            src="/images/logo-black.png"
            alt="Mahreen Indonesia"
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow border-2 border-brand-dark shadow-brutal-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-dark stroke-[2.5]" />
            <span className="text-[10px] font-heading font-black tracking-wider uppercase text-brand-dark">
              VERIFIED PLAN
            </span>
          </div>
        </div>
      </div>

      {/* Metadata Badges: My Field & I Care About */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 relative z-10">
        <div className="p-4 sm:p-4.5 rounded-2xl bg-brand-lavender/25 border-2 border-brand-dark shadow-brutal-sm space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-brand-dark font-heading font-extrabold text-[11px] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-dark" />
              <span>BIDANG MINAT</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
          </div>
          <p className="text-lg sm:text-xl font-heading font-black text-brand-dark pt-1">
            {interest || 'Belum Ditentukan'}
          </p>
        </div>

        <div className="p-4 sm:p-4.5 rounded-2xl bg-brand-yellow/30 border-2 border-brand-dark shadow-brutal-sm space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-brand-dark font-heading font-extrabold text-[11px] uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-brand-dark stroke-[2.5]" />
              <span>TARGET DAMPAK</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
          </div>
          <p className="text-lg sm:text-xl font-heading font-black text-brand-dark pt-1">
            {impact || 'Belum Ditentukan'}
          </p>
        </div>
      </div>

      {/* Core Content Sections */}
      <div className="space-y-4 relative z-10">
        {/* My Idea */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-2">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-yellow/40 border border-brand-dark text-[10px] font-heading font-black tracking-wider uppercase text-brand-dark">
              <Lightbulb className="w-3 h-3 text-brand-dark" />
              <span>01. KONSEP DASAR KARYA</span>
            </div>
          </div>
          <p className="text-sm sm:text-base font-sans font-semibold text-brand-dark leading-relaxed whitespace-pre-wrap pt-1">
            {idea || 'Belum ada konsep ide yang ditulis.'}
          </p>
        </div>

        {/* My First Step */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-2">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-lavender/40 border border-brand-dark text-[10px] font-heading font-black tracking-wider uppercase text-brand-dark">
              <Footprints className="w-3 h-3 text-brand-dark" />
              <span>02. AKSI KONKRET LANGKAH PERTAMA</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-muted hidden sm:inline">
              Target 1-3 Hari
            </span>
          </div>
          <p className="text-sm sm:text-base font-sans font-semibold text-brand-dark leading-relaxed whitespace-pre-wrap pt-1">
            {firstAction || 'Belum ada langkah pertama yang ditetapkan.'}
          </p>
        </div>
      </div>

      {/* Commitment Quote */}
      <div className="relative z-10 px-4 py-2.5 rounded-xl bg-brand-cream border border-brand-dark/20 flex items-center gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <p className="text-xs font-sans font-medium text-brand-dark/80 italic">
          "Langkah kecil yang dikerjakan hari ini jauh lebih berharga daripada seribu rencana sempurna yang tak pernah dimulai."
        </p>
      </div>

      {/* Footer Banner with Hashtag & Mahreen Platform Branding */}
      <div className="pt-4 border-t-2 sm:border-t-[3px] border-brand-dark flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-xs sm:text-sm border-2 border-brand-dark shadow-brutal-sm">
            #BerkaryaUntukIndonesia
          </span>
          <span className="text-[11px] font-mono font-bold text-brand-muted hidden sm:inline">
            mahreen.id
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans font-bold text-brand-dark">
          <Sparkles className="w-3.5 h-3.5 text-brand-lavender fill-brand-lavender" />
          <span>Mahreen Karya Planner • Inisiatif Karya Nyata</span>
        </div>
      </div>
    </div>
  )
})

export default ResultCard
