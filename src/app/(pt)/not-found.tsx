import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que procura não existe ou mudou de endereço.",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return <><Navbar /><main id="main-content" className="container report-page not-found">
    <p className="eyebrow">ERRO 404 / PÁGINA NÃO ENCONTRADA</p>
    <h1>Esta página não existe.</h1>
    <p className="case-lead">O endereço pode ter mudado ou ter um erro. Estes caminhos levam ao que a maioria das pessoas procura:</p>
    <ul className="not-found-links">
      <li><Link href="/#servicos">Serviços: recolha de dados, mapas e monitoria</Link></li>
      <li><Link href="/portfolio">Projectos e estudos de caso</Link></li>
      <li><Link href="/#revisao">Revisão gratuita do seu questionário</Link></li>
      <li><Link href="/sobre">Sobre a NexoVibe</Link></li>
    </ul>
    <div className="button-row"><Link className="button button-primary" href="/">Voltar ao início</Link><Link className="text-link" href="/#contacto">Solicitar proposta ↗</Link></div>
  </main><Footer /></>;
}
