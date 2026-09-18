import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ToolsSection from "@/components/sections/ToolsSection";
import CTASection from "@/components/sections/CTASection";
export default function HomePage() {
  return (
    <>
      <Navbar active="/" />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <ToolsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
