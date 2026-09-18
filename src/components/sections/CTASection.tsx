import ContactForm from "@/components/ui/ContactForm";
export default function CTASection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">04 / VAMOS CONVERSAR</p>
          <h2>
            O próximo projecto
            <br />
            pode começar
            <br />
            <span>com uma conversa.</span>
          </h2>
          <p>
            Tem um desafio de dados, um projecto GIS ou uma ferramenta em mente?
            Partilhe o seu desafio com a NexoVibe.
          </p>
          <a href="mailto:jubilio@nexovibe.co.mz" className="contact-email">
            jubilio@nexovibe.co.mz <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-location">
            Moçambique · Colaboração à distância
          </span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
