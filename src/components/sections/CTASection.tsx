import ContactForm from "@/components/ui/ContactForm";
export default function CTASection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">05 / VAMOS CONVERSAR</p>
          <h2>
            Tem dados, uma ideia
            <br />ou um processo
            <br /><span>para melhorar?</span>
          </h2>
          <p>
            Conte-nos o desafio, quem vai utilizar a solução e o resultado pretendido. Preparamos uma proposta com entregas, prazo e investimento.
          </p>
          <span className="contact-location">
            Moçambique · Colaboração à distância
          </span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
