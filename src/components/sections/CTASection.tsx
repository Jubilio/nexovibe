import ContactForm from "@/components/ui/ContactForm";
export default function CTASection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">05 / VAMOS CONVERSAR</p>
          <h2>
            A segurança do
            <br />
            seu sistema começa
            <br />
            <span>com uma conversa.</span>
          </h2>
          <p>
            Descreva o sistema que pretende avaliar e os seus objectivos. A partir dessa informação, definimos o âmbito e preparamos uma proposta.
          </p>
          <a href="mailto:nexovibecontact@gmail.com" className="contact-email">
            nexovibecontact@gmail.com <span aria-hidden="true">↗</span>
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
