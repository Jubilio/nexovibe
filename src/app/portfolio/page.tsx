import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectExplorer from "@/components/ui/ProjectExplorer";
export const metadata: Metadata = {
  title: "Projectos",
  description:
    "Explore o portfólio de soluções NexoVibe: SimGeo, GeoClick Capture, GPX Batch Converter, XLSForm AI Translator e ferramentas de dados e software.",
};
export default function PortfolioPage() {
  return (
    <>
      <Navbar active="/portfolio" />
      <main id="main-content" className="container interior-page">
        <header className="page-heading">
          <p className="eyebrow">PORTFÓLIO / PROJECTOS & EXPLORAÇÕES</p>
          <h1>
            Código que resolve.
            <br />
            <span>Dados que orientam.</span>
          </h1>
          <div className="page-intro">
            <p>
              Projectos e ferramentas que traduzem a abordagem da NexoVibe à
              inteligência geoespacial, à análise de dados e ao software.
              Explore os projectos e o código por trás de cada solução.
            </p>
            <a
              href="https://github.com/Jubilio?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Explorar o GitHub ↗
            </a>
          </div>
        </header>
        <ProjectExplorer />
        <section className="portfolio-cta">
          <div>
            <p className="eyebrow">TEM UM DESAFIO SEMELHANTE?</p>
            <h2>Vamos construir a próxima solução.</h2>
          </div>
          <a className="button button-primary" href="/#contacto">
            Iniciar uma conversa ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
