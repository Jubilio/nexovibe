import { shareMetadata } from "@/lib/share";
import { localeAlternates } from "@/lib/locale";
import type { Metadata } from "next";
export const metadata: Metadata = {
  ...shareMetadata("/", "NexoVibe — Dados, GIS & Software", "Recolha de dados de campo, mapas e dashboards de monitoria para ONGs, agências e equipas de investigação em Moçambique.", "home"), alternates: localeAlternates("/" ) };
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StartSection from "@/components/sections/StartSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DeliverablesSection from "@/components/sections/DeliverablesSection";
import CommunitySection from "@/components/sections/CommunitySection";
import CTASection from "@/components/sections/CTASection";
export default function HomePage() {
  return (
    <>
      <Navbar active="/" />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <StartSection />
        <ProcessSection />
        <DeliverablesSection />
        <ProjectsSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
