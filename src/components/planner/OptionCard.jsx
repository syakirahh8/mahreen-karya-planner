import { Check } from 'lucide-react'

export default function OptionCard({
  label,
  description,
  icon: Icon,
  isSelected,
  disabled = false,
  hasError = false,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`w-full p-4 rounded-2xl border-2 text-left transition-all relative flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-brand-lavender ${
        disabled
          ? 'bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed opacity-50'
          : hasError
          ? 'bg-rose-50 border-rose-500 shadow-sm'
          : isSelected
          ? 'bg-brand-lavender/30 border-brand-dark shadow-brutal translate-x-0.5'
          : 'bg-white border-brand-dark hover:bg-brand-cream hover:border-brand-dark hover:-translate-y-0.5 shadow-brutal-sm'
      }`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {Icon && (
          <div
            className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center shrink-0 transition-colors ${
              isSelected
                ? 'bg-brand-lavender border-brand-dark text-brand-dark shadow-brutal-sm'
                : 'bg-brand-cream border-brand-dark text-brand-dark group-hover:bg-brand-yellow/30'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}

        <div className="min-w-0">
          <p
            className={`text-sm sm:text-base font-heading font-bold tracking-tight truncate ${
              isSelected ? 'text-brand-dark font-extrabold' : 'text-brand-dark'
            }`}
          >
            {label}
          </p>
          {description && (
            <p className="text-xs font-sans text-brand-muted mt-0.5 line-clamp-1">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Selected Indicator */}
      <div
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 ml-2 transition-all ${
          isSelected
            ? 'bg-brand-lavender border-brand-dark text-brand-dark scale-100 shadow-brutal-sm'
            : 'border-brand-dark/20 bg-transparent text-transparent group-hover:border-brand-dark'
        }`}
      >
        <Check className={`w-3.5 h-3.5 stroke-[3] ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </button>
  )
}
