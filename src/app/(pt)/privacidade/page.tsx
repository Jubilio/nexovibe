import Link from "next/link";
import { shareMetadata } from "@/lib/share";
import { localeAlternates } from "@/lib/locale";
import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export const metadata: Metadata = {
  title: "Privacidade e contacto",
  description: "Como a NexoVibe trata os dados enviados pelo formulário, pelo WhatsApp e, se aceitar, pela medição de visitas.",
  alternates: localeAlternates("/privacidade"),
  ...shareMetadata("/privacidade", "Privacidade e contacto | NexoVibe", "Como a NexoVibe trata os dados enviados pelo formulário, pelo WhatsApp e, se aceitar, pela medição de visitas.", "home"),
};
export default function PrivacyPage() {
  return <><Navbar /><main id="main-content" className="container report-page">
    <Breadcrumbs items={[{ href: "/privacidade", label: "Privacidade" }]} />
    <p className="eyebrow">NEXOVIBE / PRIVACIDADE</p><h1>Os dados do seu contacto.</h1>
    <p>Esta página explica o tratamento dos dados no site institucional da NexoVibe e nos pedidos de proposta. Actualizada em 3 de Novembro de 2026.</p>
    <section><h2>Quem recebe o pedido</h2><p>O contacto comercial é gerido pela NexoVibe, sob responsabilidade de Jubílio Maússe, em Moçambique. Para questões sobre os seus dados, escreva para <a className="text-link" href="mailto:nexovibecontact@gmail.com">nexovibecontact@gmail.com</a>.</p></section>
    <section><h2>Informação recolhida e finalidade</h2><p>O formulário recolhe o nome, email, serviço e mensagem. Pode incluir voluntariamente informações sobre o projecto, evento, prazo ou orçamento. Utilizamos estes dados para responder, esclarecer requisitos e preparar a proposta. O envio não subscreve uma newsletter.</p><p>Não envie palavras-passe, chaves de API, listas de convidados, dados de beneficiários ou outros dados sensíveis no primeiro contacto.</p></section>
    <section><h2>Serviços envolvidos</h2><p>A Netlify aloja o site e processa os pedidos. A Brevo encaminha a mensagem para a caixa de correio da NexoVibe no Gmail, operado pela Google. Estes fornecedores podem tratar informação técnica e dados fora de Moçambique, segundo as suas políticas e condições.</p><p>O endereço IP pode ser utilizado pela infraestrutura de alojamento para registos técnicos e limitação de pedidos. O código do formulário não regista o conteúdo da mensagem nem a chave do serviço de email nos logs.</p></section>
    <section><h2>Contacto por WhatsApp</h2><p>O botão abre uma conversa com a NexoVibe no WhatsApp, serviço da Meta, apenas quando clica. A mensagem preparada pode ser revista antes do envio. O site não envia automaticamente os campos do formulário para o WhatsApp. Ao enviar uma mensagem, partilha o seu número e o conteúdo com esse serviço e com a NexoVibe.</p></section>
    <section><h2>Conservação e pedidos sobre os dados</h2><p>O formulário não mantém uma base de dados própria de contactos. As mensagens enviadas permanecem nos serviços de email até serem eliminadas; os registos técnicos seguem as configurações dos fornecedores. Pode solicitar acesso, correcção ou eliminação pelo email acima. Eventuais necessidades de conservação relacionadas com uma prestação de serviços serão esclarecidas na resposta.</p></section>
    <section id="medicao"><h2>Medição de visitas (Google Analytics)</h2><p>O site pode usar o Google Analytics 4, da Google, para saber que páginas são visitadas, de onde chegam os visitantes e quantos pedidos de proposta são enviados. O Google Analytics só é carregado se clicar em «Aceitar» no aviso de medição. Se recusar ou não responder, nenhum script ou cookie de medição é usado.</p><p>Com o seu consentimento, a Google recebe dados técnicos como páginas vistas, tipo de dispositivo, localização aproximada e cookies de medição (_ga). Não enviamos para a Google o seu nome, email nem o conteúdo da mensagem. A escolha fica guardada no seu navegador e pode alterá-la a qualquer momento em «Preferências de medição», no rodapé.</p></section>
    <section><h2>Navegação e serviços externos</h2><p>O site não usa ferramentas de publicidade. Os links para GitHub, QGIS e outros serviços levam a sites com políticas próprias. As preferências e registos técnicos da infraestrutura são geridos pelos respectivos fornecedores.</p></section>
    <section><h2>XLSForm AI Translator</h2><p>O XLSForm AI Translator tem uma <Link className="text-link" href="/xlsform-translator/privacy">política de privacidade específica</Link>.</p></section>
  </main><Footer /></>;
}
