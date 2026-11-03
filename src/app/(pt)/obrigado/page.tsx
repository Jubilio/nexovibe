import { localeAlternates } from "@/lib/locale";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import LeadTracker from "@/components/ui/LeadTracker";
import { whatsappUrl } from "@/lib/contact";
export const metadata: Metadata = {
  title: "Pedido recebido",
  description: "Confirmação do pedido enviado à NexoVibe e próximos passos.",
  alternates: localeAlternates("/obrigado"),
  robots: { index: false, follow: true },
};
export default function ThankYouPage() {
  return <><Navbar /><main id="main-content" className="container report-page thank-you">
    <LeadTracker />
    <p className="eyebrow">NEXOVIBE / PEDIDO RECEBIDO</p>
    <h1>Obrigado. Recebemos o seu pedido.</h1>
    <p className="case-lead">Respondemos em 1 dia útil, por email, com os próximos passos e uma estimativa.</p>
    <section><h2>O que acontece a seguir</h2><ol className="thank-you-steps">
      <li><span>01</span>Lemos o pedido e, se faltar alguma informação, fazemos uma pergunta curta por email.</li>
      <li><span>02</span>Enviamos os próximos passos e uma estimativa de prazo e entregas.</li>
      <li><span>03</span>Se pediu a revisão do questionário, devolvemos a lista de erros em 48 horas depois de recebermos o ficheiro.</li>
    </ol></section>
    <section><h2>Enquanto espera</h2><p>Veja como trabalhamos em projectos reais ou fale connosco no WhatsApp se o assunto for urgente.</p>
      <div className="button-row"><Link className="button button-secondary" href="/portfolio">Ver estudos de caso ↗</Link><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp ↗</a></div>
    </section>
  </main><Footer /></>;
}
