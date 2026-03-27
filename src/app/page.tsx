import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'
import dynamic from 'next/dynamic'

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: true })
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true })
const ToolsSection = dynamic(() => import('@/components/sections/ToolsSection'), { ssr: true })
const StatsBar = dynamic(() => import('@/components/sections/StatsBar'), { ssr: true })
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true })

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar active="/" />
      
      <main className="relative bg-brand-dark min-h-screen">
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
