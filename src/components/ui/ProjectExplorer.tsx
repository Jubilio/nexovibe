"use client";
import { useState } from "react";
import { categories, Category, projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
export default function ProjectExplorer() {
  const [category, setCategory] = useState<Category>("Todos");
  const filtered = projects.filter(
    (project) => category === "Todos" || project.category === category,
  );
  return (
    <div>
      <div
        className="project-filters"
        role="group"
        aria-label="Filtrar projectos por área"
      >
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
            <span>
              {item === "Todos"
                ? projects.length
                : projects.filter((p) => p.category === item).length}
            </span>
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {filtered.length} projectos ·{" "}
        {category === "Todos" ? "Todas as áreas" : category}
      </p>
      <div className="projects-grid portfolio-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
    </div>
  );
}
