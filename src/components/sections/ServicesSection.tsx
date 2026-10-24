import { services } from "@/lib/data";
import { getIcon } from "@/components/ui/Icons";
export default function ServicesSection() {
  return (
    <section id="servicos" className="expertise-section">
      <div className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / O QUE PODE CONTRATAR</p>
            <h2>
              Dados de campo fiáveis,
              <br />
              <span className="muted-heading">do terreno ao relatório.</span>
            </h2>
          </div>
          <p className="section-description">
            Contrate um serviço ou o ciclo completo. Cada proposta define o problema, as entregas e o acompanhamento.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.num}>
              <div className="service-top">
                <span>{s.num}</span>
                <span aria-hidden="true">{getIcon(s.icon)}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-checks">{s.checks.map((check) => <li key={check}>{check}</li>)}</ul>
              <div className="service-tags">{s.tags.join(" / ")}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
