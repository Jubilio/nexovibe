export const categories = [
  "Todos",
  "GIS & Território",
  "Dados & Investigação",
  "Software & IA",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "Todos">;
  desc: string;
  link: string;
  tags: string[];
  label: string;
  mark: string;
  accent: string;
  featured?: boolean;
};

// Curated against the public repository READMEs on 18 September 2026.
// Keep this snapshot explicit: no runtime dependency on GitHub or invented usage metrics.
export const projects: Project[] = [
  {
    id: "simgeo",
    title: "SimGeo",
    category: "GIS & Território",
    desc: "Cenários de cheias, ciclones e secas associados a dados de população, vulnerabilidade e infraestruturas para apoiar decisões no território.",
    link: "https://github.com/Jubilio/simgeo",
    tags: ["React", "Django", "PostGIS", "Earth Engine"],
    label: "SISTEMA DE APOIO À DECISÃO",
    mark: "SG",
    accent: "mint",
    featured: true,
  },
  {
    id: "geoclick",
    title: "GeoClick Capture",
    category: "GIS & Território",
    desc: "Verificação de localizações no QGIS: comparar fontes, guardar evidências e documentar cada decisão num registo auditável.",
    link: "https://github.com/Jubilio/qgis-latlon",
    tags: ["Python", "PyQGIS", "QGIS"],
    label: "PLUGIN QGIS",
    mark: "GC",
    accent: "blue",
    featured: true,
  },
  {
    id: "xlsform-ai",
    title: "XLSForm AI Translator",
    category: "Software & IA",
    desc: "Criação e tradução de questionários KoboToolbox dentro do Excel, com pré-visualização e preservação de variáveis, fórmulas e lógica.",
    link: "https://github.com/Jubilio/xlsform-ai-translator",
    tags: ["TypeScript", "Office.js", "XLSForm"],
    label: "MICROSOFT EXCEL ADD-IN",
    mark: "XL",
    accent: "violet",
    featured: true,
  },
  {
    id: "gpx-converter",
    title: "GPX Batch Converter",
    category: "GIS & Território",
    desc: "Conversão e união de ficheiros GPX em Shapefiles directamente no QGIS. Um fluxo de trabalho para transformar recolhas GPS em camadas prontas a analisar.",
    link: "https://github.com/Jubilio/gpx-batch-converter",
    tags: ["Python", "PyQGIS", "GPX"],
    label: "AUTOMAÇÃO GEOGRÁFICA",
    mark: "GPX",
    accent: "mint",
  },
  {
    id: "tls-watcher",
    title: "TLS Cert Watcher",
    category: "Software & IA",
    desc: "Verificação individual ou em lote de certificados TLS, com detalhes de validade e exportação de resultados em CSV e JSON.",
    link: "https://github.com/Jubilio/TLS-Cert-Watcher",
    tags: ["React", "Node.js", "Express"],
    label: "SEGURANÇA & MONITORIA",
    mark: "TLS",
    accent: "blue",
  },
  {
    id: "mwanga",
    title: "Mwanga",
    category: "Software & IA",
    desc: "Gestão financeira familiar com acompanhamento de receitas, despesas e poupanças, visualização de dados e uma assistente de IA.",
    link: "https://github.com/Jubilio/mwanga",
    tags: ["React", "Express", "SQLite", "PWA"],
    label: "PRODUTO DIGITAL",
    mark: "MW",
    accent: "violet",
  },
  {
    id: "vulnerability",
    title: "Vulnerabilidade em Cabo Delgado",
    category: "Dados & Investigação",
    desc: "Projecto de análise em R que combina deslocamento e indicadores ambientais e socioeconómicos num índice territorial de vulnerabilidade.",
    link: "https://github.com/Jubilio/cabo-delgado-vulnerability",
    tags: ["R", "sf", "R Markdown"],
    label: "ANÁLISE REPRODUTÍVEL",
    mark: "CD",
    accent: "mint",
  },
  {
    id: "research",
    title: "Investigação & conhecimento",
    category: "Dados & Investigação",
    desc: "Artigos, mapas e tutoriais sobre águas subterrâneas, sensoriamento remoto, análise humanitária e recolha de dados com KoboToolbox.",
    link: "https://jubilio.github.io/cv_articles",
    tags: ["GIS", "Remote Sensing", "MEAL"],
    label: "PUBLICAÇÕES & TUTORIAIS",
    mark: "RD",
    accent: "blue",
  },
];

export const services = [
  { num: "01", title: "Segurança de aplicações de IA", desc: "Avaliação de assistentes, sistemas RAG e agentes: instruções maliciosas, exposição de informação e utilização indevida de ferramentas.", tags: ["LLM", "RAG", "Agentes"], icon: "code", checks: ["Acesso a documentos e isolamento entre utilizadores", "Prompt injection e tratamento de respostas", "Permissões, limites e acções das ferramentas"] },
  { num: "02", title: "Pentest Web & API", desc: "Testes controlados para identificar falhas nas aplicações e integrações que suportam as suas operações.", tags: ["Web", "REST", "GraphQL"], icon: "grid", checks: ["Autenticação e gestão de sessões", "Autorização e acesso a recursos", "Lógica de negócio e exposição de dados"] },
  { num: "03", title: "Segurança de dados & WebGIS", desc: "Revisão de plataformas geoespaciais e fluxos de dados, com atenção à sensibilidade da informação e a quem lhe pode aceder.", tags: ["WebGIS", "Dados", "Serviços OGC"], icon: "map", checks: ["Permissões de camadas e serviços geográficos", "Exportações e acesso a dados sensíveis", "Configuração e partilha da informação"] },
];
export const tools = [
  "Python",
  "R",
  "QGIS",
  "ArcGIS",
  "Earth Engine",
  "PostGIS",
  "React",
  "TypeScript",
  "Django",
  "Power BI",
  "KoboToolbox",
  "XLSForm",
];
export const steps = [
  { num: "01", title: "Definir o âmbito", desc: "Acordar os sistemas, objectivos, autorização, limites operacionais e condições dos testes." },
  { num: "02", title: "Avaliar e validar", desc: "Executar os testes acordados, confirmar os resultados e documentar as evidências e limitações." },
  { num: "03", title: "Priorizar e orientar", desc: "Entregar os resultados com impacto, prioridades de correcção e recomendações aplicáveis." },
  { num: "04", title: "Apoiar e retestar", desc: "Esclarecer as recomendações e verificar as correcções dentro do período acordado na proposta." },
];
export const stats = [
  { num: "GIS", label: "Compreender o território" },
  { num: "DATA", label: "Transformar informação" },
  { num: "CODE", label: "Construir ferramentas" },
];
