import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ToolsSection from "@/components/sections/ToolsSection";
export const metadata: Metadata = {
  title: "Sobre a NexoVibe",
  description:
    "Conheça a NexoVibe: soluções de análise de dados, inteligência geoespacial e software orientadas aos desafios das organizações.",
};
export default function AboutPage() {
  return (
    <>
      <Navbar active="/sobre" />
      <main id="main-content">
        <section className="container interior-page about-intro">
          <div>
            <p className="eyebrow">A NEXOVIBE / TECNOLOGIA COM PROPÓSITO</p>
            <h1>
              Tecnologia que
              <br />
              <span>liga as peças.</span>
            </h1>
            <p className="about-lead">
              Dados, território e software ao serviço das organizações.
            </p>
            <p>
              A NexoVibe é uma marca de soluções tecnológicas que integra
              sistemas de informação geográfica, análise de dados e
              desenvolvimento de software. O seu foco é transformar informação
              complexa em ferramentas úteis para decisões e operações.
            </p>
            <p>
              Com origem em Moçambique, a marca desenvolve aplicações, plugins e
              fluxos de automação adaptados ao contexto de cada projecto — da
              recolha de dados à análise e à apresentação de resultados.
            </p>
            <div className="button-row">
              <Link href="/portfolio" className="button button-primary">
                Conhecer os projectos ↗
              </Link>
              <Link href="/#contacto" className="button button-quiet">
                Falar sobre uma solução ↗
              </Link>
            </div>
          </div>
          <aside
            className="brand-panel"
            aria-label="Áreas de actuação da NexoVibe"
          >
            <span className="brand-kicker">
              NEXOVIBE / DADOS · ESPAÇO · CÓDIGO
            </span>
            <div className="brand-monogram" aria-hidden="true">
              N<span>↗</span>
            </div>
            <h2>
              Da informação
              <br />à aplicação.
            </h2>
            <dl>
              <div>
                <dt>Inteligência</dt>
                <dd>Análise de dados & GIS</dd>
              </div>
              <div>
                <dt>Desenvolvimento</dt>
                <dd>Software & automação</dd>
              </div>
              <div>
                <dt>Abordagem</dt>
                <dd>Soluções à medida</dd>
              </div>
            </dl>
          </aside>
        </section>
        <section className="container about-principles">
          <p className="eyebrow">OS PRINCÍPIOS DA NEXOVIBE</p>
          <div className="services-grid">
            <article className="service-card">
              <span className="step-number">01</span>
              <h3>Contexto antes da ferramenta</h3>
              <p>
                Cada solução começa pela compreensão do desafio, dos dados
                disponíveis e das condições em que será utilizada.
              </p>
            </article>
            <article className="service-card">
              <span className="step-number">02</span>
              <h3>Rigor em cada decisão</h3>
              <p>
                Fontes, métodos e limitações documentados para tornar os
                resultados compreensíveis e os processos reproduzíveis.
              </p>
            </article>
            <article className="service-card">
              <span className="step-number">03</span>
              <h3>Conhecimento que circula</h3>
              <p>
                Código, tutoriais e documentação que facilitam a utilização, a
                manutenção e a evolução das ferramentas.
              </p>
            </article>
          </div>
        </section>
        <ToolsSection />
        <section className="container about-outro">
          <h2>Conhecimento aplicado e partilhado.</h2>
          <p>
            Artigos, mapas e tutoriais que dão contexto ao trabalho em GIS,
            recursos hídricos, análise humanitária e fluxos de dados.
          </p>
          <a
            className="text-link"
            href="https://jubilio.github.io/cv_articles"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar publicações técnicas ↗
          </a>
          <p id="fundador" className="founder-note">
            Fundador e responsável técnico: Jubílio Maússe.{" "}
            <a
              href="https://www.linkedin.com/in/jubilio-mausse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Perfil profissional ↗
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
