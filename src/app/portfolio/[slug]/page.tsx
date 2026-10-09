import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/data";
import ProjectArtwork from "@/components/ui/ProjectArtwork";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find(item => item.slug === slug);
  if (!item) return {};
  return { title: `${item.name} — Estudo de caso`, description: item.lead, alternates: { canonical: `/portfolio/${slug}` }, openGraph: { title: `${item.name} | NexoVibe`, description: item.lead, url: `/portfolio/${slug}` } };
}
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find(item => item.slug === slug);
  if (!item) notFound();
  const project = projects.find(project => project.caseStudy === slug);
  return <><Navbar active="/portfolio" /><main id="main-content" className="container report-page case-study">
    <Link href="/portfolio" className="text-link">← Todos os projectos</Link>
    <p className="eyebrow">ESTUDO DE CASO / {item.area}</p><h1>{item.name}</h1><p className="case-lead">{item.lead}</p>
    <dl className="report-facts"><div><dt>Estado</dt><dd>{item.status}</dd></div><div><dt>Contribuição</dt><dd>Projecto próprio · concepção e desenvolvimento</dd></div><div><dt>Tecnologias</dt><dd>{item.tools.join(" · ")}</dd></div><div><dt>Referência</dt><dd>{item.version}</dd></div></dl>
    {project && <figure className={`case-artwork accent-${project.accent}`}><ProjectArtwork project={project} eager /><figcaption className="project-image-caption">{project.image.caption}</figcaption></figure>}
    <figure className="case-flow"><figcaption>Fluxo de utilização documentado</figcaption><ol>{item.flow.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol></figure>
    <section><h2>O problema</h2><p>{item.problem}</p></section>
    <section><h2>A abordagem</h2><p>{item.approach}</p></section>
    <section><h2>O resultado verificável</h2><p>{item.result}</p><div className="button-row"><a href={item.source} className="button button-secondary" target="_blank" rel="noopener noreferrer">Código e documentação ↗</a><a href={item.evidence} className="text-link">{item.evidenceLabel} ↗</a></div></section>
    <section><h2>Limitações e estado</h2><p>{item.limits}</p><p className="form-note">Descrição baseada na documentação pública consultada em 9 de Outubro de 2026. As versões e funcionalidades podem evoluir.</p></section>
    <section><h2>Tem um processo semelhante?</h2><p>Podemos estudar os dados, as regras e os utilizadores do seu projecto e propor uma solução adaptada.</p><div className="button-row"><Link href="/#contacto" className="button button-primary">Solicitar proposta ↗</Link></div></section>
  </main><Footer /></>;
}
