import Link from "next/link";
const deliverables = [
  ["Resumo executivo", "Uma leitura do risco para apoiar decisões, com âmbito, limitações e prioridades."],
  ["Relatório técnico", "Resultados validados, evidências, condições de reprodução e recomendações de correcção."],
  ["Plano de prioridades", "Acções organizadas por impacto e contexto para orientar o trabalho da equipa."],
  ["Registo de reteste", "Estado das correcções verificadas e riscos que permanecem, segundo o âmbito contratado."],
];
export default function DeliverablesSection() {
 return <section id="entregaveis" className="deliverables-section"><div className="container section">
   <div className="section-heading"><div><p className="eyebrow">03 / O QUE RECEBE</p><h2>Resultados que a sua<br /><span className="muted-heading">equipa consegue utilizar.</span></h2></div><Link className="text-link" href="/relatorio-exemplo">Consultar relatório demonstrativo ↗</Link></div>
   <div className="deliverables-grid">{deliverables.map(([title,desc],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
 </div></section>;
}
