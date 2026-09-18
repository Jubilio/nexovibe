import { tools } from "@/lib/data";
export default function ToolsSection() {
  return (
    <section
      className="container tools-section"
      aria-label="Tecnologias e ferramentas"
    >
      <p className="eyebrow">AS FERRAMENTAS POR TRÁS DAS IDEIAS</p>
      <div className="tools-list">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
