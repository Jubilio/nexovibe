import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
export default function ProjectsSection() {
  return (
    <section id="projectos" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / TRABALHO SELECCIONADO</p>
          <h2>
            Ideias que se tornam
            <br />
            <span className="muted-heading">ferramentas reais.</span>
          </h2>
        </div>
        <Link href="/portfolio" className="text-link">
          Todos os projectos <span aria-hidden="true">↗</span>
        </Link>
      </div>
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
