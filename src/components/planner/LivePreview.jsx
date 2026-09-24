import { Sparkles, Compass, Heart, Lightbulb, Footprints } from 'lucide-react'

export default function LivePreview({
  interest,
  impact,
  idea,
  firstAction,
  currentStep,
}) {
  const isComplete = interest && impact && idea?.trim() && firstAction?.trim()

  return (
    <div className="w-full">
      <div className="border-2 border-brand-dark rounded-2xl sm:rounded-3xl bg-brand-cream p-4 sm:p-7 shadow-brutal sm:shadow-brutal-lg space-y-5 sm:space-y-6 relative overflow-hidden transition-all">
        <div className="flex items-center justify-between border-b-2 border-brand-dark/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lavender animate-pulse" />
            <span className="text-xs font-mono font-bold text-brand-muted tracking-widest uppercase">
              LIVE PREVIEW DRAFT
            </span>
          </div>
          <span
            className={`px-3 py-0.5 rounded-full font-heading font-extrabold text-[11px] border border-brand-dark ${isComplete
              ? 'bg-brand-yellow text-brand-dark'
              : 'bg-white text-brand-muted'
              }`}>
            {isComplete ? 'Siap Diterbitkan' : `Tahap ${currentStep}/4`}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-brand-dark">
              MY KARYA PLAN
            </h3>
            <p className="text-xs text-brand-muted font-sans font-medium mt-1">
              Rencana Aksi Pribadi • #BerkaryaUntukIndonesia
            </p>
          </div>
          <img
            src="/images/logo-black.png"
            alt="Mahreen Indonesia"
            className="h-6 w-auto object-contain shrink-0 hidden sm:block opacity-75"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
          <div className="p-3.5 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1">
            <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-[11px] uppercase">
              <Compass className="w-3.5 h-3.5 text-brand-lavender" />
              <span>My Field</span>
            </div>
            <p
              className={`text-sm font-heading font-bold ${interest ? 'text-brand-dark' : 'text-slate-400 italic'
                }`}>
              {interest || 'Belum dipilih'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1">
            <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-[11px] uppercase">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>I Care About</span>
            </div>
            <p
              className={`text-sm font-heading font-bold ${impact ? 'text-brand-dark' : 'text-slate-400 italic'
                }`}>
              {impact || 'Belum dipilih'}
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          <div className="p-4 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1.5">
            <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-[11px] uppercase">
              <Lightbulb className="w-3.5 h-3.5 text-brand-yellow" />
              <span>My Idea</span>
            </div>
            <p
              className={`text-xs sm:text-sm font-sans font-medium leading-relaxed whitespace-pre-wrap ${idea?.trim() ? 'text-brand-dark' : 'text-slate-400 italic'
                }`}>
              {idea?.trim() || 'Ide kamu akan muncul di sini.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-brand-dark shadow-brutal-sm space-y-1.5">
            <div className="flex items-center gap-1.5 text-brand-muted font-heading font-bold text-[11px] uppercase">
              <Footprints className="w-3.5 h-3.5 text-brand-lavender" />
              <span>My First Step</span>
            </div>
            <p
              className={`text-xs sm:text-sm font-sans font-medium leading-relaxed whitespace-pre-wrap ${firstAction?.trim() ? 'text-brand-dark' : 'text-slate-400 italic'
                }`}>
              {firstAction?.trim() || 'Langkah awal konkretmu akan tercantum di sini.'}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t-2 border-brand-dark/15 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-heading font-extrabold text-brand-dark bg-brand-yellow/30 px-2.5 py-1 rounded-lg border border-brand-dark">
            #BerkaryaUntukIndonesia
          </span>
          <span className="text-[11px] font-sans font-bold text-brand-muted flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-lavender" />
            Mahreen Karya Planner
          </span>
        </div>
      </div>
    </div>
  )
}
