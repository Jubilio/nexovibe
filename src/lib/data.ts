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
  {
    num: "01",
    title: "Inteligência geoespacial",
    desc: "Cartografia, análise espacial e aplicações WebGIS para compreender o território e apoiar decisões.",
    tags: ["QGIS", "ArcGIS", "Earth Engine", "PostGIS"],
    icon: "map",
  },
  {
    num: "02",
    title: "Dados para decisões",
    desc: "Da recolha à interpretação: questionários, pipelines de análise e dashboards adaptados às perguntas de cada projecto.",
    tags: ["Python", "R", "Power BI", "KoboToolbox"],
    icon: "grid",
  },
  {
    num: "03",
    title: "Software & automação",
    desc: "Plugins, aplicações web e integrações de IA que simplificam tarefas repetitivas e tornam os processos mais consistentes.",
    tags: ["TypeScript", "React", "Django", "Office.js"],
    icon: "code",
  },
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
  {
    num: "01",
    title: "Compreender",
    desc: "Definir o problema, as pessoas que vão usar a solução e os dados disponíveis.",
  },
  {
    num: "02",
    title: "Desenhar",
    desc: "Escolher o método e construir um protótipo que permita testar a ideia.",
  },
  {
    num: "03",
    title: "Desenvolver",
    desc: "Implementar, testar e documentar a solução com atenção à qualidade dos dados.",
  },
  {
    num: "04",
    title: "Acompanhar",
    desc: "Recolher feedback e melhorar a ferramenta com base na utilização real.",
  },
];
export const stats = [
  { num: "GIS", label: "Compreender o território" },
  { num: "DATA", label: "Transformar informação" },
  { num: "CODE", label: "Construir ferramentas" },
];
