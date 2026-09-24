import { useState, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image'
import { motion, AnimatePresence } from 'motion/react'
import {
  Code2,
  Palette,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  Store,
  Sprout,
  Users2,
  Globe2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  AlertCircle,
  PenTool
} from 'lucide-react'

import StepIndicator from './StepIndicator'
import OptionCard from './OptionCard'
import LivePreview from './LivePreview'
import ResultCard from './ResultCard'
import ActionButtons from './ActionButtons'
import Toast from './Toast'
import ResetModal from './ResetModal'

const LOCAL_STORAGE_KEY = 'mahreen_karya_planner_v2'

function getSavedData() {
  try {
    localStorage.removeItem('mahreen_karya_planner_data')
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
  }
  return null
}

export default function KaryaPlanner() {
  const initial = getSavedData()
  const [currentStep, setCurrentStep] = useState(initial?.currentStep || 1)
  const [interest, setInterest] = useState(initial?.interest || '')
  const [customInterest, setCustomInterest] = useState(initial?.customInterest || '')
  const [impact, setImpact] = useState(initial?.impact || '')
  const [customImpact, setCustomImpact] = useState(initial?.customImpact || '')
  const [idea, setIdea] = useState(initial?.idea || '')
  const [firstAction, setFirstAction] = useState(initial?.firstAction || '')
  const [isSubmitted, setIsSubmitted] = useState(initial?.isSubmitted || false)
  const [errors, setErrors] = useState({})
  const [isDownloading, setIsDownloading] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [showResetModal, setShowResetModal] = useState(false)

  const [maxUnlockedStep, setMaxUnlockedStep] = useState(() => {
    let unlocked = 1
    const hasInterest = initial?.interest && (initial.interest !== 'Lainnya' || initial.customInterest?.trim())
    const hasImpact = initial?.impact && (initial.impact !== 'Lainnya' || initial.customImpact?.trim())
    if (hasInterest) unlocked = 2
    if (hasInterest && hasImpact) unlocked = 3
    if (hasInterest && hasImpact && initial?.idea?.trim()) unlocked = 4
    return Math.max(unlocked, initial?.maxUnlockedStep || 1)
  })

  const resultCardRef = useRef(null)
  const interestOptions = [
    { id: 'Technology', label: 'Technology', desc: 'Software, Web, AI, & Solusi Digital', icon: Code2 },
    { id: 'Creative', label: 'Creative', desc: 'Desain Grafis, Video, Musik, & Seni Visual', icon: Palette },
    { id: 'Business', label: 'Business', desc: 'Kewirausahaan, Startup, & Produk Kreatif', icon: Briefcase },
    { id: 'Social Impact', label: 'Social Impact', desc: 'Advokasi, Pendidikan, & Gerakan Sosial', icon: HeartHandshake },
    { id: 'Lainnya', label: 'Lainnya (Tulis Sendiri)', desc: 'Tulis bidang minat unikmu jika belum ada di opsi', icon: PenTool },
  ]

  const impactOptions = [
    { id: 'Education', label: 'Education', desc: 'Akses belajar, literasi, & pengembangan skill', icon: GraduationCap },
    { id: 'UMKM', label: 'UMKM', desc: 'Pemberdayaan usaha mikro & ekonomi lokal', icon: Store },
    { id: 'Environment', label: 'Environment', desc: 'Keberlanjutan lingkungan & aksi ramah bumi', icon: Sprout },
    { id: 'Community', label: 'Community', desc: 'Pemberdayaan warga & ruang interaksi publik', icon: Users2 },
    { id: 'Digital Literacy', label: 'Digital Literacy', desc: 'Edukasi keamanan internet & pemanfaatan teknologi', icon: Globe2 },
    { id: 'Lainnya', label: 'Lainnya (Tulis Sendiri)', desc: 'Tulis area dampak spesifik yang ingin kamu sentuh', icon: PenTool },
  ]

  const effectiveInterest = interest === 'Lainnya' ? customInterest.trim() : interest
  const effectiveImpact = impact === 'Lainnya' ? customImpact.trim() : impact

  useEffect(() => {
    const dataToSave = {
      interest,
      customInterest,
      impact,
      customImpact,
      idea,
      firstAction,
      currentStep,
      maxUnlockedStep,
      isSubmitted,
    }
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave))
    } catch {
    }
  }, [interest, customInterest, impact, customImpact, idea, firstAction, currentStep, maxUnlockedStep, isSubmitted])

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 3500)
      return () => clearTimeout(timer)
    }
  }, [toastMessage])

  const handleSelectInterest = (val) => {
    setInterest(val)
    if (val !== 'Lainnya' || customInterest.trim()) {
      setMaxUnlockedStep((prev) => Math.max(prev, 2))
    }
    setErrors((prev) => ({ ...prev, interest: undefined }))
  }

  const handleSelectImpact = (val) => {
    setImpact(val)
    if (val !== 'Lainnya' || customImpact.trim()) {
      setMaxUnlockedStep((prev) => Math.max(prev, 3))
    }
    setErrors((prev) => ({ ...prev, impact: undefined }))
  }

  const handleChangeIdea = (val) => {
    setIdea(val)
    if (val.trim()) {
      setMaxUnlockedStep((prev) => Math.max(prev, 4))
    }
    if (errors.idea) {
      setErrors((prev) => ({ ...prev, idea: undefined }))
    }
  }

  const handleNext = () => {
    setErrors({})

    if (currentStep === 1) {
      if (!interest) {
        setErrors({ interest: 'Silakan pilih satu bidang minat terlebih dahulu.' })
        return
      }
      if (interest === 'Lainnya' && !customInterest.trim()) {
        setErrors({ interest: 'Silakan tuliskan bidang minat pilihanmu.' })
        return
      }
      setCurrentStep(2)
      setMaxUnlockedStep((prev) => Math.max(prev, 2))
    } else if (currentStep === 2) {
      if (!impact) {
        setErrors({ impact: 'Silakan pilih satu area dampak yang kamu pedulikan.' })
        return
      }
      if (impact === 'Lainnya' && !customImpact.trim()) {
        setErrors({ impact: 'Silakan tuliskan area dampak pilihanmu.' })
        return
      }
      setCurrentStep(3)
      setMaxUnlockedStep((prev) => Math.max(prev, 3))
    } else if (currentStep === 3) {
      if (!idea.trim()) {
        setErrors({ idea: 'Tuliskan konsep idemu sebelum melanjutkan.' })
        return
      }
      if (idea.trim().length < 5) {
        setErrors({ idea: 'Konsep ide terlalu singkat (minimal 5 karakter).' })
        return
      }
      setCurrentStep(4)
      setMaxUnlockedStep((prev) => Math.max(prev, 4))
    }
  }

  const handlePrev = () => {
    setErrors({})
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    setErrors({})

    const currentEffectiveInterest = interest === 'Lainnya' ? customInterest.trim() : interest
    const currentEffectiveImpact = impact === 'Lainnya' ? customImpact.trim() : impact

    const newErrors = {}
    if (!currentEffectiveInterest) newErrors.interest = 'Bidang minat belum dipilih atau diisi.'
    if (!currentEffectiveImpact) newErrors.impact = 'Area dampak belum dipilih atau diisi.'
    if (!idea.trim()) newErrors.idea = 'Konsep ide belum diisi.'
    if (!firstAction.trim()) newErrors.firstAction = 'Langkah awal konkret belum diisi.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitted(true)
    setToastMessage('Karya Plan berhasil dibuat.')
  }

  const handleDownload = async () => {
    if (!resultCardRef.current) return
    setIsDownloading(true)
    try {
      const node = resultCardRef.current
      const width = node.offsetWidth
      const height = node.offsetHeight

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#FFFDF7',
        width: width,
        height: height,
        style: {
          margin: '0',
          position: 'static',
          transform: 'none',
          left: '0',
          top: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${width}px`,
          maxWidth: `${width}px`,
          boxSizing: 'border-box',
        },
      })
      const link = document.createElement('a')
      const currentEffectiveInterest = interest === 'Lainnya' ? customInterest.trim() : interest
      const safeInterest = (currentEffectiveInterest || 'Kreator').replace(/[^a-zA-Z0-9]/g, '')
      const fileName = `Mahreen-KaryaPlan-${safeInterest}.png`
      link.download = fileName
      link.href = dataUrl
      link.click()
      setToastMessage('Karya Plan berhasil diunduh.')
    } catch (err) {
      console.error(err)
      setToastMessage('Gagal mengunduh gambar. Silakan coba lagi.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleShare = async () => {
    const currentEffectiveInterest = interest === 'Lainnya' ? customInterest.trim() : interest
    const currentEffectiveImpact = impact === 'Lainnya' ? customImpact.trim() : impact
    const shareText = `Halo! Ini rencana karyaku di bidang ${currentEffectiveInterest || 'kreatif'} untuk berdampak pada ${currentEffectiveImpact || 'masyarakat'}:\n\nIde: ${idea}\nLangkah Pertama: ${firstAction}\n\n#BerkaryaUntukIndonesia via Mahreen Karya Planner`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Karya Plan - #BerkaryaUntukIndonesia',
          text: shareText,
          url: window.location.href,
        })
        setToastMessage('Berhasil dibagikan.')
      } catch {
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText)
        setToastMessage('Teks rencana karya telah disalin ke clipboard.')
      } catch {
        setToastMessage('Gagal menyalin ke clipboard.')
      }
    }
  }

  // Edit Rencana
  const handleEdit = () => {
    setIsSubmitted(false)
    setCurrentStep(1)
  }

  const handleReset = () => {
    setShowResetModal(true)
  }

  const handleConfirmReset = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    setInterest('')
    setCustomInterest('')
    setImpact('')
    setCustomImpact('')
    setIdea('')
    setFirstAction('')
    setCurrentStep(1)
    setMaxUnlockedStep(1)
    setIsSubmitted(false)
    setErrors({})
    setShowResetModal(false)
    setToastMessage('Rencana telah direset. Siap membuat karya baru.')
  }

  return (
    <section id="planner" className="relative py-12 sm:py-24 bg-white border-b-2 border-brand-dark/10">
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      <ResetModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleConfirmReset}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex">
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-[11px] sm:text-xs tracking-wider uppercase border-2 border-brand-dark shadow-brutal-sm">
              FITUR UTAMA: MULTI-STEP PLANNER
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-brand-dark">
            Rancang Karya Pertamamu dalam 4 Langkah
          </h2>

          <p className="text-xs sm:text-base text-brand-muted font-sans font-medium leading-relaxed max-w-2xl mx-auto">
            Susun rencana karyamu melalui empat tahap sederhana tanpa perlu login. Progres tersimpan otomatis dan hasilnya bisa kamu unduh.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-heading font-bold border border-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Rencana Karya Siap Dieksekusi
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark">
                Selamat! Rencana Karyamu Siap
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-medium">
                Simpan atau unduh kartu rencana karyamu untuk pengingat setiap harinya.
              </p>
            </div>

            <div className="w-full flex items-center justify-center">
              <div
                ref={resultCardRef}
                className="w-full max-w-2xl p-3 sm:p-6 bg-[#FFFDF7] rounded-3xl flex items-center justify-center">
                <ResultCard
                  interest={effectiveInterest}
                  impact={effectiveImpact}
                  idea={idea}
                  firstAction={firstAction}
                />
              </div>
            </div>

            <ActionButtons
              onDownload={handleDownload}
              onShare={handleShare}
              onEdit={handleEdit}
              onReset={handleReset}
              isDownloading={isDownloading}
            />
          </motion.div>
        ) : (
          <div className="space-y-8">
            <StepIndicator
              currentStep={currentStep}
              maxUnlockedStep={maxUnlockedStep}
              onSelectStep={(stepId) => {
                setErrors({})
                setCurrentStep(stepId)
              }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border-2 border-brand-dark shadow-brutal space-y-5 sm:space-y-6">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lavender bg-brand-dark px-2.5 py-0.5 rounded-md">
                              Tahap 01
                            </span>
                            <span className="text-xs font-heading font-bold text-brand-muted">
                              Pilih atau Tulis Bidang Minat
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-dark mt-2">
                            Apa bidang minat utama karyamu?
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-muted font-sans mt-1">
                            Tentukan bidang yang kamu kuasai atau ingin kamu eksplorasi. Tersedia opsi tulis jika bidangmu belum tercantum.
                          </p>
                        </div>

                        {errors.interest && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errors.interest}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          {interestOptions.map((opt) => (
                            <OptionCard
                              key={opt.id}
                              label={opt.label}
                              description={opt.desc}
                              icon={opt.icon}
                              isSelected={interest === opt.id}
                              onClick={() => handleSelectInterest(opt.id)}
                              className={opt.id === 'Lainnya' ? 'sm:col-span-2' : ''}
                            />
                          ))}
                        </div>

                        {interest === 'Lainnya' && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="pt-2 space-y-1.5">
                            <label className="block text-xs font-heading font-black text-brand-dark flex items-center gap-1.5">
                              <PenTool className="w-3.5 h-3.5 text-brand-dark" />
                              <span>Tuliskan Bidang Minat Karyamu:</span>
                            </label>
                            <input
                              type="text"
                              value={customInterest}
                              onChange={(e) => {
                                setCustomInterest(e.target.value)
                                if (e.target.value.trim()) setMaxUnlockedStep((prev) => Math.max(prev, 2))
                                if (errors.interest) setErrors((prev) => ({ ...prev, interest: undefined }))
                              }}
                              placeholder="Tuliskan bidang minat karyamu di sini (misal: Kuliner, Musik, Sains)..."
                              maxLength={50}
                              className="w-full px-4 py-3 rounded-xl bg-brand-cream border-2 border-brand-dark text-sm sm:text-base font-sans font-medium text-brand-dark placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-lavender shadow-brutal-sm transition-all" />
                            <p className="text-[11px] font-sans text-brand-muted">
                              Tuliskan bidang spesifik yang sesuai dengan minat dan keahlianmu.
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lavender bg-brand-dark px-2.5 py-0.5 rounded-md">
                              Tahap 02
                            </span>
                            <span className="text-xs font-heading font-bold text-brand-muted">
                              Pilih atau Tulis Area Dampak
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-dark mt-2">
                            Area dampak apa yang ingin kamu sentuh?
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-muted font-sans mt-1">
                            Pilih sektor atau audiens yang ingin kamu bantu. Kamu juga bisa menulis sendiri jika belum ada di opsi.
                          </p>
                        </div>

                        {errors.impact && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errors.impact}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 gap-2.5 pt-1">
                          {impactOptions.map((opt) => (
                            <OptionCard
                              key={opt.id}
                              label={opt.label}
                              description={opt.desc}
                              icon={opt.icon}
                              isSelected={impact === opt.id}
                              onClick={() => handleSelectImpact(opt.id)}
                            />
                          ))}
                        </div>

                        {impact === 'Lainnya' && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="pt-2 space-y-1.5"
                          >
                            <label className="block text-xs font-heading font-black text-brand-dark flex items-center gap-1.5">
                              <PenTool className="w-3.5 h-3.5 text-brand-dark" />
                              <span>Tuliskan Target Dampak Karyamu:</span>
                            </label>
                            <input
                              type="text"
                              value={customImpact}
                              onChange={(e) => {
                                setCustomImpact(e.target.value)
                                if (e.target.value.trim()) setMaxUnlockedStep((prev) => Math.max(prev, 3))
                                if (errors.impact) setErrors((prev) => ({ ...prev, impact: undefined }))
                              }}
                              placeholder="Tuliskan target dampak karyamu di sini (misal: Lansia, Difabel, Satwa)..."
                              maxLength={50}
                              className="w-full px-4 py-3 rounded-xl bg-brand-cream border-2 border-brand-dark text-sm sm:text-base font-sans font-medium text-brand-dark placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-lavender shadow-brutal-sm transition-all"
                            />
                            <p className="text-[11px] font-sans text-brand-muted">
                              Tuliskan komunitas, sektor, atau penerima manfaat karyamu.
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lavender bg-brand-dark px-2.5 py-0.5 rounded-md">
                              Tahap 03
                            </span>
                            <span className="text-xs font-heading font-bold text-brand-muted">
                              Konsep Dasar
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-dark mt-2">
                            Apa konsep idemu?
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-muted font-sans mt-1">
                            Jelaskan ide mentah atau gambaran karya yang ingin kamu wujudkan.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <textarea
                            rows={4}
                            maxLength={300}
                            value={idea}
                            onChange={(e) => handleChangeIdea(e.target.value)}
                            placeholder="Contoh: Membuat platform kurasi materi belajar coding gratis berbahasa Indonesia untuk mahasiswa dan UMKM lokal..."
                            className={`w-full p-4 rounded-2xl bg-brand-cream border-2 text-sm sm:text-base font-sans font-medium text-brand-dark placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all resize-none ${errors.idea ? 'border-rose-500 bg-rose-50/50' : 'border-brand-dark'
                              }`} />

                          <div className="flex items-center justify-between text-xs font-sans">
                            {errors.idea ? (
                              <span className="text-rose-600 font-semibold">{errors.idea}</span>
                            ) : (
                              <span className="text-brand-muted">Minimal 5 karakter</span>
                            )}
                            <span
                              className={`font-mono font-bold ${idea.length >= 280 ? 'text-amber-600' : 'text-brand-muted'
                                }`}
                            >
                              {idea.length}/300
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lavender bg-brand-dark px-2.5 py-0.5 rounded-md">
                              Tahap 04
                            </span>
                            <span className="text-xs font-heading font-bold text-brand-muted">
                              Langkah Eksekusi
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-dark mt-2">
                            Apa langkah konkret pertama yang bisa kamu lakukan?
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-muted font-sans mt-1">
                            Langkah kecil paling awal yang bisa diselesaikan dalam 1-3 hari ke depan.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <textarea
                            rows={4}
                            maxLength={300}
                            value={firstAction}
                            onChange={(e) => {
                              setFirstAction(e.target.value)
                              if (errors.firstAction) setErrors((prev) => ({ ...prev, firstAction: undefined }))
                            }}
                            placeholder="Contoh: Mengumpulkan 5 modul materi open-source dan merancang struktur navigasi landing page..."
                            className={`w-full p-4 rounded-2xl bg-brand-cream border-2 text-sm sm:text-base font-sans font-medium text-brand-dark placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all resize-none ${errors.firstAction ? 'border-rose-500 bg-rose-50/50' : 'border-brand-dark'
                              }`}
                          />

                          <div className="flex items-center justify-between text-xs font-sans">
                            {errors.firstAction ? (
                              <span className="text-rose-600 font-semibold">{errors.firstAction}</span>
                            ) : (
                              <span className="text-brand-muted">Langkah awal yang realistis dan terukur</span>
                            )}
                            <span
                              className={`font-mono font-bold ${firstAction.length >= 280 ? 'text-amber-600' : 'text-brand-muted'
                                }`}>
                              {firstAction.length}/300
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-4 border-t-2 border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    {currentStep > 1 ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handlePrev}
                        className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-brand-cream text-brand-dark font-heading font-bold text-xs sm:text-sm border-2 border-brand-dark shadow-brutal-sm flex items-center justify-center gap-2 transition-all">
                        <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                        <span>Kembali</span>
                      </motion.button>
                    ) : (
                      <div className="hidden sm:block" />
                    )}

                    {currentStep < 4 ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && (!interest || (interest === 'Lainnya' && !customInterest.trim()))) ||
                          (currentStep === 2 && (!impact || (impact === 'Lainnya' && !customImpact.trim()))) ||
                          (currentStep === 3 && !idea.trim())
                        }
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-yellow hover:brightness-105 text-brand-dark font-heading font-black text-sm border-2 border-brand-dark shadow-brutal flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                        <span>Lanjut ke Tahap {currentStep + 1}</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleSubmit}
                        disabled={!effectiveInterest || !effectiveImpact || !idea.trim() || !firstAction.trim()}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-yellow hover:brightness-105 text-brand-dark font-heading font-black text-sm sm:text-base border-2 border-brand-dark shadow-brutal flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                        <Sparkles className="w-4 h-4" />
                        <span>Create My Karya Plan</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <LivePreview
                  interest={interest === 'Lainnya' ? customInterest.trim() : interest}
                  impact={impact === 'Lainnya' ? customImpact.trim() : impact}
                  idea={idea}
                  firstAction={firstAction}
                  currentStep={currentStep}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
