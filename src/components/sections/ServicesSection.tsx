import { services } from "@/lib/data";
import { getIcon } from "@/components/ui/Icons";
export default function ServicesSection() {
  return (
    <section id="servicos" className="expertise-section">
      <div className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / ÁREAS DE ACTUAÇÃO</p>
            <h2>
              Uma visão integrada.
              <br />
              <span className="muted-heading">Da pergunta à solução.</span>
            </h2>
          </div>
          <p className="section-description">
            Combino conhecimento do território com análise e desenvolvimento
            para responder a desafios concretos.
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
              <div className="service-tags">{s.tags.join(" / ")}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
