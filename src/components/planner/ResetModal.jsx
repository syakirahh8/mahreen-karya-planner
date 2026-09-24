import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { RotateCcw } from 'lucide-react'

export default function ResetModal({ isOpen, onClose, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/50 backdrop-blur-xs" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md bg-white border-2 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-brutal-lg text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-yellow border-2 border-brand-dark shadow-brutal flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-brand-dark stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-dark tracking-tight">
                Buat Rencana Baru?
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-medium leading-relaxed">
                Rencana karya yang tersimpan saat ini akan dibersihkan agar kamu bisa mulai merancang ide baru dari awal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-brand-cream text-brand-dark font-heading font-bold text-xs sm:text-sm border-2 border-brand-dark shadow-brutal-sm hover:shadow-brutal active:scale-[0.98] transition-all">
                Batal
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="w-full py-3 px-4 rounded-xl bg-brand-yellow hover:brightness-105 text-brand-dark font-heading font-black text-xs sm:text-sm border-2 border-brand-dark shadow-brutal hover:shadow-brutal-lg active:scale-[0.98] transition-all">
                Ya, Buat Baru
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
