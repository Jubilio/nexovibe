import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ToolsSection from "@/components/sections/ToolsSection";
export const metadata: Metadata = {
  title: "Sobre Jubílio Maússe",
  description:
    "Conheça o trabalho de Jubílio Maússe na ligação entre SIG, análise humanitária, recolha de dados e desenvolvimento de software.",
};
export default function AboutPage() {
  return (
    <>
      <Navbar active="/sobre" />
      <main id="main-content">
        <section className="container interior-page about-intro">
          <div>
            <p className="eyebrow">SOBRE MIM / POR TRÁS DA NEXOVIBE</p>
            <h1>
              Olá, sou o<br />
              <span>Jubílio Maússe.</span>
            </h1>
            <p className="about-lead">
              Ligo a análise do território à construção de ferramentas úteis.
            </p>
            <p>
              O meu trabalho cruza sistemas de informação geográfica,
              sensoriamento remoto, análise de dados e desenvolvimento de
              software. Interessa-me transformar perguntas complexas em métodos
              claros e soluções que as pessoas consigam utilizar.
            </p>
            <p>
              Na NexoVibe reúno esse percurso: projectos de código aberto,
              ferramentas para recolha e análise de dados e aplicações
              orientadas a desafios reais em Moçambique.
            </p>
            <div className="button-row">
              <Link href="/portfolio" className="button button-primary">
                Conhecer os projectos ↗
              </Link>
              <a
                href="https://www.linkedin.com/in/jubilio-mausse/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-quiet"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <aside className="profile-panel">
            <span className="profile-kicker">JUBÍLIO FILIANO MAÚSSE</span>
            <Image
              className="profile-photo"
              src="/jubilio.jpg"
              width={460}
              height={460}
              sizes="(max-width: 640px) 100vw, 400px"
              alt="Retrato de Jubílio Maússe"
              priority
            />
            <h2>
              Território. Dados.
              <br />
              Possibilidades.
            </h2>
            <dl>
              <div>
                <dt>Contexto</dt>
                <dd>Moçambique</dd>
              </div>
              <div>
                <dt>Foco</dt>
                <dd>GIS · Dados · Software</dd>
              </div>
              <div>
                <dt>Partilha</dt>
                <dd>Projectos de código aberto</dd>
              </div>
            </dl>
          </aside>
        </section>
        <section className="container about-principles">
          <p className="eyebrow">O QUE ORIENTA O MEU TRABALHO</p>
          <div className="services-grid">
            <article className="service-card">
              <span className="step-number">01</span>
              <h3>Contexto antes da ferramenta</h3>
              <p>
                Começar pela pergunta e pelas condições em que a solução será
                utilizada.
              </p>
            </article>
            <article className="service-card">
              <span className="step-number">02</span>
              <h3>Rigor em cada decisão</h3>
              <p>
                Documentar fontes, métodos e limitações para que o trabalho
                possa ser compreendido e reproduzido.
              </p>
            </article>
            <article className="service-card">
              <span className="step-number">03</span>
              <h3>Conhecimento que circula</h3>
              <p>
                Partilhar código, tutoriais e experiências para tornar as
                ferramentas acessíveis a outras pessoas.
              </p>
            </article>
          </div>
        </section>
        <ToolsSection />
        <section className="container about-outro">
          <h2>Também partilho o que aprendo.</h2>
          <p>
            Artigos, mapas e tutoriais sobre GIS, recursos hídricos, análise
            humanitária e fluxos de dados.
          </p>
          <a
            className="text-link"
            href="https://jubilio.github.io/cv_articles"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler artigos e tutoriais ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
