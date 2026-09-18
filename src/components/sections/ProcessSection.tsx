import { steps } from "@/lib/data";
export default function ProcessSection() {
  return (
    <section className="section container">
      <p className="eyebrow">03 / COMO TRABALHAMOS</p>
      <h2>Clareza em cada etapa.</h2>
      <div className="process-grid">
        {steps.map((step) => (
          <article key={step.num}>
            <span className="step-number">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
