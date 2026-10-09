import Link from "next/link";
const deliverables = [
  ["Solução definida", "Uma proposta com problema, utilizadores, entregas, prazos e critérios de aceitação."],
  ["Resultado utilizável", "Análise, mapa, dashboard, aplicação ou relatório de segurança, conforme o serviço contratado."],
  ["Validação documentada", "Verificações realizadas, fontes, limitações conhecidas e recomendações para utilização."],
  ["Entrega acompanhada", "Documentação e orientação à equipa, com condições de suporte e manutenção acordadas."],
];
export default function DeliverablesSection() {
 return <section id="entregaveis" className="deliverables-section"><div className="container section">
   <div className="section-heading"><div><p className="eyebrow">03 / O QUE RECEBE</p><h2>Resultados que a sua<br /><span className="muted-heading">equipa consegue utilizar.</span></h2></div><Link className="text-link" href="/relatorio-exemplo">Exemplo de relatório de segurança ↗</Link></div>
   <div className="deliverables-grid">{deliverables.map(([title,desc],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
 </div></section>;
}
