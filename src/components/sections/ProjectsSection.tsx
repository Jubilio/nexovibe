import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
export default function ProjectsSection() {
  return (
    <section id="projectos" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / ENGENHARIA EM PRÁTICA</p>
          <h2>
            Conheça as ferramentas
            <br />
            <span className="muted-heading">que desenvolvemos.</span>
          </h2>
        </div>
        <Link href="/portfolio" className="text-link">
          Todos os projectos <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <p className="portfolio-context">Projectos próprios de dados, GIS e software. Este portefólio apresenta trabalho de desenvolvimento; não representa auditorias de segurança a clientes.</p>
      <div className="projects-grid">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
      </div>
    </section>
  );
}
