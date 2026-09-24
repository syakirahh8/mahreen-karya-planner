import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ValuesSection from './components/ValuesSection'
import QuoteSection from './components/QuoteSection'
import PlannerGeneratorSection from './components/PlannerGeneratorSection'
import ProcessSection from './components/ProcessSection'
import WhyUsSection from './components/WhyUsSection'
import CtaBannerSection from './components/CtaBannerSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark font-sans selection:bg-brand-lavender selection:text-brand-dark flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Nilai / Ruang untuk Tumbuh Section */}
        <ValuesSection />

        {/* 4. Quote / Mulai dari Nol Section */}
        <QuoteSection />

        {/* 5. Fitur Utama: Interactive Planner Generator */}
        <PlannerGeneratorSection />

        {/* 6. Alur & Proses Berkarya Section */}
        <ProcessSection />

        {/* 7. Mengapa Kami & Komunitas Section */}
        <WhyUsSection />

        {/* 8. Call to Action (CTA) Banner Section */}
        <CtaBannerSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}
