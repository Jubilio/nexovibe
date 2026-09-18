import { Project } from "@/lib/data";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <a
        className="project-visual"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explorar ${project.title} (abre noutro separador)`}
      >
        <span className="project-visual-label">{project.label}</span>
        <span className="project-monogram" aria-hidden="true">
          {project.mark}
          <span>↗</span>
        </span>
        <span className="project-visual-footer">
          NEXOVIBE / {String(index + 1).padStart(2, "0")}
          <span aria-hidden="true">↗</span>
        </span>
      </a>
      <div className="project-info">
        <p className="project-category">{project.category}</p>
        <h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
            <span aria-hidden="true">↗</span>
          </a>
        </h3>
        <p className="project-description">{project.desc}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
