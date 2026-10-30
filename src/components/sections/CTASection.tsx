import ContactForm from "@/components/ui/ContactForm";
import { whatsappUrl, contactPhone } from "@/lib/contact";
export default function CTASection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">05 / VAMOS CONVERSAR</p>
          <h2>
            Tem uma recolha a começar
            <br /><span>ou um relatório para o doador?</span>
          </h2>
          <p>
            Diga-nos o prazo e o que precisa de entregar. Respondemos em 1 dia útil com os próximos passos e uma estimativa.
          </p>
          <span className="contact-location">
            Moçambique · Colaboração à distância
          </span>
          <div className="direct-contact"><a className="button button-secondary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp ↗</a><a href="mailto:nexovibecontact@gmail.com">nexovibecontact@gmail.com</a><span>{contactPhone}</span></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
