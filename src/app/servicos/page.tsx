import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ToolsSection from '@/components/sections/ToolsSection'
import CTASection from '@/components/sections/CTASection'

export default function ServicosPage() {
  return (
    <>
      <Cursor />
      <Navbar active="/servicos" />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <ProcessSection />
        <ToolsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
