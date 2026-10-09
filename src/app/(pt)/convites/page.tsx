import { localeAlternates } from "@/lib/locale";
import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import InvitationBuilder from "@/components/InvitationBuilder";
import styles from "./convites.module.css";

export const metadata: Metadata = { alternates: localeAlternates("/convites" ),
  title: "Convites personalizados para eventos",
  description: "A tua ideia, num convite feito à tua medida. Convites em imagem, PDF ou página digital com confirmação de presença. Conhece os pacotes NexoVibe.",
  openGraph: { title: "Convites personalizados | NexoVibe", description: "Design inspirado em ti. Escolhe o formato, consulta o preço e partilha a tua ideia.", url: "https://nexovibe.netlify.app/convites" },
};
export default function InvitationsPage() {
  return <>
    <Navbar active="/convites" />
    <main id="main-content" className={styles.page}>
      <section className={`container ${styles.hero}`}>
        <div>
          <p className="eyebrow">NEXOVIBE / CONVITES & CELEBRAÇÕES</p>
          <h1>A tua história.<br />O teu estilo.<br /><em>O teu convite.</em></h1>
          <p className={styles.lead}>Do primeiro “vamos celebrar” ao grande dia. Criamos convites em imagem, PDF e experiências digitais a partir das tuas ideias.</p>
          <div className="button-row"><a className="button button-primary" href="#pacotes">Escolher o meu convite ↗</a><a className="button button-quiet" href="#como-funciona">Como funciona</a></div>
          <p className={styles.caption}>Casamentos · Aniversários · Baptizados · Outros eventos</p>
        </div>
        <div className={styles.art} aria-label="Exemplo ilustrativo de um convite personalizado">
          <div className={styles.paper}><span>UM DIA PARA RECORDAR</span><div className={styles.ornament} aria-hidden="true">✳</div><h2>Ana <i>&</i> Rui</h2><p>Juntos, celebramos<br />o início de uma nova história.</p><div className={styles.rule} /><strong>20 · 02 · 2027</strong><small>MAPUTO, MOÇAMBIQUE</small></div>
          <span className={styles.artLabel}>Exemplo ilustrativo · criado à tua medida</span>
        </div>
      </section>
      <InvitationBuilder />
      <section id="como-funciona" className={`container ${styles.section}`}>
        <p className="eyebrow">DA INSPIRAÇÃO À ENTREGA</p><h2>Tu imaginas. Nós damos forma.</h2>
        <div className={styles.steps}>
          {[["01", "Partilha a ideia", "Envia as cores, o estilo, os textos e as referências que gostas."], ["02", "Escolhe a direcção", "Combinamos design e apoio de IA para explorar uma proposta visual contigo."], ["03", "Aprova os detalhes", "Revemos o design e confirmamos nomes, datas, locais e textos."], ["04", "Está pronto a partilhar", "Recebes os ficheiros ou o link do convite, conforme o pacote escolhido."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>
      <section className={`container ${styles.section}`}>
        <p className="eyebrow">ANTES DE COMEÇAR</p><h2>Os detalhes também contam.</h2>
        <div className={styles.faq}>
          <details><summary>Posso trazer uma ideia ou referência?</summary><p>Sim. Podes partilhar uma paleta, um esboço ou links de inspiração. Criamos uma composição própria e ajustamos contigo até à aprovação, dentro das revisões do pacote.</p></details>
          <details><summary>Como é utilizada a inteligência artificial?</summary><p>A IA apoia a exploração de ideias, elementos visuais e textos. A composição, a revisão e a preparação final são acompanhadas pela NexoVibe e aprovadas por ti.</p></details>
          <details><summary>Os preços são negociáveis?</summary><p>Sim. Os valores apresentados são preços de referência. Partilha o teu orçamento e as necessidades do evento para ajustarmos as entregas e funcionalidades. O valor final é acordado contigo antes de começarmos.</p></details>
          <details><summary>O que fica definido na proposta?</summary><p>O preço final, as entregas, os prazos, as revisões e eventuais extras. Nos convites online, também o período de alojamento, o suporte e, quando aplicável, o número de convidados. O pedido não efectua uma compra nem exige pagamento.</p></details>
          <details><summary>Posso acrescentar funcionalidades?</summary><p>Sim. Check-in com QR Code, organização de mesas, versões bilingues, domínio próprio e peças gráficas adicionais são orçamentados à parte.</p></details>
        </div>
      </section>
    </main><Footer />
  </>;
}
