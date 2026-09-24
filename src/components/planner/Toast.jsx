import { CheckCircle2, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand-dark text-white border-2 border-brand-dark shadow-brutal-lg">
        <div className="w-6 h-6 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-bold">
          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
        </div>
        <p className="text-sm font-sans font-semibold text-brand-cream">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="p-1 text-brand-muted hover:text-white transition-colors"
          aria-label="Tutup notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
