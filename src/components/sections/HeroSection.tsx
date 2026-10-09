import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="hero container security-hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />NEXOVIBE / DADOS · GIS · SOFTWARE</p>
        <h1 id="hero-title">Transforme dados<br /><span>em decisões.<br />Ideias em soluções.</span></h1>
        <p className="hero-description">Criamos análises, soluções geoespaciais e software para organizações, empresas e equipas de investigação. Da recolha de dados à aplicação, com atenção à qualidade, à privacidade e à segurança.</p>
        <div className="button-row">
          <a className="button button-primary" href="#contacto">Solicitar proposta <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#servicos">Explorar serviços</a>
        </div>
        <p className="hero-capabilities">Data Analytics <span aria-hidden="true">/</span> Geospatial Intelligence <span aria-hidden="true">/</span> Software</p>
      </div>
      <aside className="security-brief" aria-label="Áreas de aplicação da NexoVibe">
        <div className="brief-header"><span>TECNOLOGIA APLICADA</span><span>01—03</span></div>
        <div className="brief-row"><span className="brief-index">01</span><div><h2>Dados & análise</h2><p>Recolha · Indicadores · Dashboards</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">02</span><div><h2>Inteligência geoespacial</h2><p>Mapas · Território · Verificação</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">03</span><div><h2>Software & segurança</h2><p>Aplicações · Automação · IA</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-footer"><p>Do problema à solução.</p><span>Requisitos claros. Resultados verificáveis.<br />Ferramentas adaptadas à sua equipa.</span></div>
        <Link className="text-link brief-link" href="/portfolio">Explorar estudos de caso <span aria-hidden="true">↗</span></Link>
      </aside>
      <div className="hero-baseline"><span>DATA · GEOSPATIAL INTELLIGENCE · SOFTWARE</span><a href="#metodologia">Como trabalhamos <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
