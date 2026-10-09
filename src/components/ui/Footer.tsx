import Link from "next/link";
import { whatsappUrl, contactPhone } from "@/lib/contact";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="wordmark">
            NexoVibe<span className="wordmark-dot">.</span>
          </Link>
          <p>Dados, inteligência geoespacial e software.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Jubilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <Link href="/convites">Convites para eventos</Link>
          <a href="/sobre">Sobre a marca</a>
          <Link href="/privacidade">Privacidade</Link>
          <a href="mailto:nexovibecontact@gmail.com">Email ↗</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp · {contactPhone} ↗</a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} NexoVibe · Moçambique
        </span>
      </div>
    </footer>
  );
}
