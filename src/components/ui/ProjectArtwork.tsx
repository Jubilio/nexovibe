import type { Project } from "@/lib/data";

export default function ProjectArtwork({ project, eager = false }: { project: Project; eager?: boolean }) {
  const { image } = project;
  return (
    <span className={`project-artwork artwork-${image.layout} artwork-${project.id}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
      {image.layout === "identity" && (
        <span className="project-artwork-type" aria-hidden="true">
          <span>{project.label}</span>
          <strong>{project.title}</strong>
          <span>{project.tags.slice(0, 2).join(" / ")}</span>
        </span>
      )}
    </span>
  );
}
