import Link from "next/link";
import { services } from "@/lib/data";
import { getIcon } from "@/components/ui/Icons";
export default function ServicesSection() {
  return (
    <section id="servicos" className="expertise-section">
      <div className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SERVIÇOS DE SEGURANÇA</p>
            <h2>
              Três especializações.
              <br />
              <span className="muted-heading">Um objectivo: reduzir o risco.</span>
            </h2>
          </div>
          <p className="section-description">
            Cada avaliação tem um âmbito acordado e recomendações adaptadas ao seu sistema, aos seus dados e à sua equipa.
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
        <div className="invitation-home-link"><p>Também criamos convites personalizados para momentos especiais.</p><Link href="/convites" className="text-link">Explorar convites e pacotes ↗</Link></div>
      </div>
    </section>
  );
}
