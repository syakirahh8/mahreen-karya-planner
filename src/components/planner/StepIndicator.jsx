import { Check, Lock } from 'lucide-react'

export default function StepIndicator({ currentStep, onSelectStep, maxUnlockedStep }) {
  const steps = [
    { id: 1, num: '01', title: 'Interest', desc: 'Minat Utama' },
    { id: 2, num: '02', title: 'Impact', desc: 'Area Dampak' },
    { id: 3, num: '03', title: 'Idea', desc: 'Konsep Ide' },
    { id: 4, num: '04', title: 'Action', desc: 'Aksi Pertama' },
  ]

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed'
    if (stepId === currentStep) return 'active'
    if (stepId <= maxUnlockedStep) return 'inactive'
    return 'locked'
  }

  return (
    <div className="w-full">
      {/* Desktop Stepper */}
      <div className="hidden sm:grid grid-cols-4 gap-3">
        {steps.map((step) => {
          const status = getStepStatus(step.id)
          const isClickable = step.id <= maxUnlockedStep && step.id !== currentStep

          return (
            <button
              key={step.id}
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onSelectStep(step.id)}
              className={`p-3.5 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between ${
                status === 'active'
                  ? 'bg-brand-lavender/30 border-brand-dark shadow-brutal ring-2 ring-brand-lavender/60'
                  : status === 'completed'
                  ? 'bg-brand-cream border-brand-dark shadow-brutal-sm hover:-translate-y-0.5 cursor-pointer'
                  : status === 'inactive'
                  ? 'bg-white border-brand-dark/40 shadow-none cursor-pointer hover:border-brand-dark'
                  : 'bg-slate-100 border-dashed border-slate-300 text-slate-400 cursor-not-allowed opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-full text-xs font-heading font-black flex items-center justify-center border-2 ${
                    status === 'active'
                      ? 'bg-brand-dark text-brand-yellow border-brand-dark'
                      : status === 'completed'
                      ? 'bg-brand-yellow text-brand-dark border-brand-dark'
                      : status === 'inactive'
                      ? 'bg-white text-brand-dark border-brand-dark'
                      : 'bg-slate-200 text-slate-400 border-slate-300'
                  }`}
                >
                  {status === 'completed' ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : status === 'locked' ? (
                    <Lock className="w-3 h-3" />
                  ) : (
                    step.num
                  )}
                </span>

                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-muted">
                  Tahap {step.id}/4
                </span>
              </div>

              <div>
                <p
                  className={`text-sm font-heading font-bold leading-tight ${
                    status === 'active' || status === 'completed'
                      ? 'text-brand-dark'
                      : 'text-brand-muted'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-[11px] font-sans font-medium text-brand-muted mt-0.5">
                  {step.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Mobile Stepper Compact */}
      <div className="sm:hidden flex items-center justify-between p-3 rounded-2xl bg-brand-cream border-2 border-brand-dark shadow-brutal-sm">
        {steps.map((step, idx) => {
          const status = getStepStatus(step.id)
          const isClickable = step.id <= maxUnlockedStep && step.id !== currentStep

          return (
            <div key={step.id} className="flex items-center flex-1 justify-center relative">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onSelectStep(step.id)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  !isClickable && status === 'locked' ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full text-xs font-heading font-black flex items-center justify-center border-2 transition-all ${
                    status === 'active'
                      ? 'bg-brand-lavender text-brand-dark border-brand-dark scale-110 shadow-brutal-sm'
                      : status === 'completed'
                      ? 'bg-brand-yellow text-brand-dark border-brand-dark'
                      : 'bg-white text-slate-400 border-slate-300'
                  }`}
                >
                  {status === 'completed' ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    step.num
                  )}
                </span>
                <span
                  className={`text-[10px] font-heading font-bold ${
                    status === 'active' ? 'text-brand-dark font-extrabold' : 'text-brand-muted'
                  }`}
                >
                  {step.title}
                </span>
              </button>

              {idx < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-1 ${
                    step.id < currentStep ? 'bg-brand-dark' : 'bg-slate-300'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
