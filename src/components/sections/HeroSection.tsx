import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="hero container security-hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />NEXOVIBE / DADOS DE CAMPO · GIS · MONITORIA</p>
        <h1 id="hero-title">Do questionário<br /><span>ao mapa<br />e ao relatório.</span></h1>
        <p className="hero-description">Ajudamos ONGs, agências e equipas de investigação em Moçambique a recolher, verificar e mapear dados de campo, e a transformá-los em indicadores que gestores e doadores conseguem usar.</p>
        <div className="button-row">
          <a className="button button-primary" href="#contacto">Solicitar proposta <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#revisao">Rever o meu questionário grátis</a>
        </div>
        <p className="hero-proof">2 plugins QGIS próprios · Tradutor XLSForm para Excel · Análise territorial em Cabo Delgado</p>
        <p className="hero-capabilities">KoboToolbox <span aria-hidden="true">/</span> QGIS <span aria-hidden="true">/</span> Power BI</p>
      </div>
      <div className="security-brief" role="group" aria-label="Serviços prioritários da NexoVibe">
        <div className="brief-header"><span>UM CICLO, TRÊS SERVIÇOS</span><span>01—03</span></div>
        <div className="brief-row"><span className="brief-index">01</span><div><h2>Recolha de dados</h2><p>Questionários · Tradução · Validação</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">02</span><div><h2>Mapas & território</h2><p>Localizações · Cobertura · Vulnerabilidade</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">03</span><div><h2>Monitoria</h2><p>Indicadores · Dashboards · Relatórios</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-footer"><p>Dados fiáveis para decidir.</p><span>A mesma equipa do questionário ao dashboard.<br />Sem perdas entre fornecedores.</span></div>
        <Link className="text-link brief-link" href="/portfolio">Explorar estudos de caso <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-baseline"><span>FIELD DATA · GEOSPATIAL INTELLIGENCE · MEAL</span><a href="#metodologia">Como trabalhamos <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
