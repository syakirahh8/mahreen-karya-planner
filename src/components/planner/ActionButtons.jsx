import { Download, Share2, Edit3, PlusCircle, Loader2 } from 'lucide-react'

export default function ActionButtons({
  onDownload,
  onShare,
  onEdit,
  onReset,
  isDownloading = false,
}) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-3 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {/* Unduh Karya Plan */}
        <button
          type="button"
          disabled={isDownloading}
          onClick={onDownload}
          className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl bg-brand-yellow hover:brightness-105 active:scale-[0.98] text-brand-dark font-heading font-black text-xs sm:text-base border-2 border-brand-dark shadow-brutal flex items-center justify-center gap-2 sm:gap-2.5 transition-all disabled:opacity-50"
        >
          {isDownloading ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <Download className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          )}
          <span>Unduh Karya Plan (PNG)</span>
        </button>

        {/* Bagikan Karya */}
        <button
          type="button"
          onClick={onShare}
          className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl bg-brand-lavender hover:brightness-105 active:scale-[0.98] text-brand-dark font-heading font-black text-xs sm:text-base border-2 border-brand-dark shadow-brutal flex items-center justify-center gap-2 sm:gap-2.5 transition-all"
        >
          <Share2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          <span>Bagikan Karya</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Edit Rencana */}
        <button
          type="button"
          onClick={onEdit}
          className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-brand-cream active:scale-[0.98] text-brand-dark font-heading font-bold text-xs sm:text-sm border-2 border-brand-dark shadow-brutal-sm flex items-center justify-center gap-2 transition-all"
        >
          <Edit3 className="w-4 h-4" />
          <span>Edit Rencana</span>
        </button>

        {/* Buat Baru */}
        <button
          type="button"
          onClick={onReset}
          className="w-full py-3 px-5 rounded-2xl bg-brand-cream hover:bg-rose-50 active:scale-[0.98] text-brand-dark hover:text-rose-700 font-heading font-bold text-xs sm:text-sm border-2 border-brand-dark shadow-brutal-sm flex items-center justify-center gap-2 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Buat Rencana Baru</span>
        </button>
      </div>
    </div>
  )
}
