import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
// Five questions prospects actually ask before contacting us. Answers use only promises
// already made on the site (1 working day reply, free 48 h review, fixed-price pilot).
const faqs = [
  {
    q: "Que serviços a NexoVibe oferece?",
    a: "Três serviços ligados entre si: recolha de dados de campo com KoboToolbox e XLSForm, mapas e análise territorial em QGIS, e dashboards e relatórios de monitoria. Pode contratar um serviço ou o ciclo completo, do questionário ao relatório.",
    link: { href: "/#servicos", label: "Ver os serviços" },
  },
  {
    q: "Trabalham com organizações fora de Maputo?",
    a: "Sim. Trabalhamos a partir de Moçambique, em colaboração à distância. A configuração de questionários, os mapas e os dashboards são feitos remotamente. Se o projecto precisar de apoio presencial, indique-o no pedido e dizemos na proposta o que é possível.",
  },
  {
    q: "Em quanto tempo recebo uma resposta?",
    a: "Respondemos a cada pedido em 1 dia útil, por email, com os próximos passos e uma estimativa. A revisão gratuita de um questionário XLSForm é devolvida em 48 horas depois de recebermos o ficheiro.",
  },
  {
    q: "Posso começar sem um grande orçamento?",
    a: "Sim. Pode começar com a revisão gratuita do questionário ou com um piloto de preço fechado: um questionário testado, a recolha validada e um primeiro mapa ou dashboard. O preço e as entregas ficam acordados antes de começar.",
    link: { href: "/#comecar", label: "Ver como começar" },
  },
  {
    q: "Como tratam os dados do meu projecto?",
    a: "Tratamos os questionários e ficheiros como confidenciais. No primeiro contacto, não envie dados de inquiridos, palavras-passe nem chaves de acesso. A forma de partilhar e guardar os dados do projecto fica definida na proposta.",
    link: { href: "/privacidade", label: "Ler a política de privacidade" },
  },
];
export default function FAQSection() {
  return (
    <section id="perguntas" className="section container" aria-labelledby="faq-heading">
      <div className="section-heading"><div><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2 id="faq-heading">Antes de pedir<br /><span className="muted-heading">uma proposta.</span></h2></div></div>
      <div className="faq-list">
        {faqs.map(item => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
            {item.link && <Link className="text-link" href={item.link.href}>{item.link.label} ↗</Link>}
          </details>
        ))}
      </div>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      }} />
    </section>
  );
}
