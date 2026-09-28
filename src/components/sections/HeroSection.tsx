import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="hero container security-hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />NEXOVIBE / SECURITY & ENGINEERING</p>
        <h1 id="hero-title">Conheça o risco.<br /><span>Proteja o que<br />está a construir.</span></h1>
        <p className="hero-description">Segurança para aplicações de IA, dados e sistemas geoespaciais. Identificamos falhas, demonstramos o impacto e ajudamos a definir o que corrigir primeiro.</p>
        <div className="button-row">
          <a className="button button-primary" href="#contacto">Solicitar avaliação <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#servicos">Explorar serviços</a>
        </div>
        <p className="hero-capabilities">AI Security <span aria-hidden="true">/</span> Web & API <span aria-hidden="true">/</span> Data & GIS</p>
      </div>
      <aside className="security-brief" aria-label="Âmbito das avaliações de segurança">
        <div className="brief-header"><span>SUPERFÍCIE DE AVALIAÇÃO</span><span>01—03</span></div>
        <div className="brief-row"><span className="brief-index">01</span><div><h2>Inteligência artificial</h2><p>Modelos · Documentos · Agentes</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">02</span><div><h2>Aplicações & APIs</h2><p>Identidade · Permissões · Integrações</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-row"><span className="brief-index">03</span><div><h2>Dados & território</h2><p>Camadas · Serviços · Exportações</p></div><span aria-hidden="true">↗</span></div>
        <div className="brief-footer"><p>Do risco à correcção.</p><span>Âmbito definido. Evidências documentadas.<br />Prioridades claras para a sua equipa.</span></div>
        <Link className="text-link brief-link" href="/relatorio-exemplo">Ver exemplo de entrega <span aria-hidden="true">↗</span></Link>
      </aside>
      <div className="hero-baseline"><span>SECURE AI, DATA & GEOSPATIAL SYSTEMS</span><a href="#metodologia">Como trabalhamos <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
