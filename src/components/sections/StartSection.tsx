// Two low-commitment ways to start before a full proposal: a free XLSForm review and a fixed-price pilot.
export default function StartSection() {
  return (
    <section id="comecar" className="section container" aria-labelledby="start-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">COMO COMEÇAR</p>
          <h2 id="start-heading">
            Comece pequeno.
            <br />
            <span className="muted-heading">Decida com o resultado na mão.</span>
          </h2>
        </div>
      </div>
      <div className="start-grid">
        <article id="revisao">
          <span className="start-label">Grátis · Sem compromisso</span>
          <h3>Vai para o terreno em breve?</h3>
          <p>Envie o seu XLSForm. Em 48 horas devolvemos uma lista de erros de lógica, saltos e tradução.</p>
          <a className="button button-secondary" href="#contacto">Rever o meu questionário ↗</a>
          <p className="form-note">Tratamos o ficheiro como confidencial. Não envie dados de inquiridos.</p>
        </article>
        <article>
          <span className="start-label">Piloto · Preço fechado</span>
          <h3>Comece com um piloto de preço fechado.</h3>
          <p>Um questionário KoboToolbox testado, a recolha validada e um mapa ou dashboard com os primeiros indicadores. O preço e as entregas ficam acordados antes de começar.</p>
          <p className="start-guarantee">Se o questionário não passar nos testes acordados, corrigimos sem custo adicional.</p>
          <a className="button button-primary" href="#contacto">Pedir o piloto ↗</a>
        </article>
      </div>
    </section>
  );
}
