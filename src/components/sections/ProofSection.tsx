import { clientResults, testimonials } from "@/lib/proof";
import JsonLd from "@/components/ui/JsonLd";
// Client results and reviews. Renders nothing until src/lib/proof.ts has real entries.
export default function ProofSection() {
  if (!clientResults.length && !testimonials.length) return null;
  const rated = testimonials.filter(t => t.rating);
  return (
    <section id="resultados" className="section container" aria-labelledby="proof-heading">
      <div className="section-heading"><div><p className="eyebrow">RESULTADOS DE CLIENTES</p><h2 id="proof-heading">O que mudou<br /><span className="muted-heading">para quem trabalhou connosco.</span></h2></div></div>
      {clientResults.length > 0 && <div className="proof-grid">{clientResults.map(item => (
        <article key={item.client + item.result}>
          <span className="start-label">{item.sector}</span>
          <h3>{item.client}</h3>
          <dl>
            <div><dt>Desafio</dt><dd>{item.challenge}</dd></div>
            <div><dt>O que fizemos</dt><dd>{item.work}</dd></div>
            <div><dt>Resultado</dt><dd>{item.result}</dd></div>
          </dl>
          {item.href && <a className="text-link" href={item.href}>Ver entrega ↗</a>}
        </article>
      ))}</div>}
      {testimonials.length > 0 && <div className="proof-grid">{testimonials.map(item => (
        <figure key={item.author + item.date} className="testimonial">
          <blockquote><p>“{item.quote}”</p></blockquote>
          <figcaption><strong>{item.author}</strong> · {item.role}{item.source && <> · <a className="text-link" href={item.source} target="_blank" rel="noopener noreferrer">Ver original ↗</a></>}</figcaption>
        </figure>
      ))}</div>}
      {testimonials.length > 0 && <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://nexovibe.netlify.app/#organizacao",
        name: "NexoVibe",
        review: testimonials.map(t => ({
          "@type": "Review",
          reviewBody: t.quote,
          datePublished: t.date,
          author: { "@type": "Person", name: t.author },
          ...(t.rating ? { reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 } } : {}),
        })),
        ...(rated.length ? { aggregateRating: { "@type": "AggregateRating", ratingValue: (rated.reduce((sum, t) => sum + (t.rating ?? 0), 0) / rated.length).toFixed(1), reviewCount: rated.length, bestRating: 5 } } : {}),
      }} />}
    </section>
  );
}
