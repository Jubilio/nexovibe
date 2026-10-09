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
  caseStudy?: string;
  status?: string;
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
  },
  {
    id: "geoclick",
    caseStudy: "geoclick-capture",
    status: "Plugin publicado · QGIS",
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
    caseStudy: "xlsform-translator",
    status: "Projecto open source · Em evolução",
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
    caseStudy: "gpx-batch-converter",
    status: "Plugin publicado · QGIS",
    featured: true,
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
  { num: "01", title: "Dados & dashboards", desc: "Transformar dados dispersos em informação utilizável para acompanhamento, investigação e decisão.", tags: ["R", "Python", "Power BI"], icon: "grid", checks: ["Preparação, validação e análise de dados", "Indicadores e relatórios reproduzíveis", "Dashboards adaptados à equipa"] },
  { num: "02", title: "GIS & inteligência geoespacial", desc: "Compreender o território, verificar localizações e desenvolver ferramentas para trabalhar com dados espaciais.", tags: ["QGIS", "WebGIS", "Earth Engine"], icon: "map", checks: ["Análise espacial e cartografia", "Verificação e qualidade de dados geográficos", "Plugins QGIS e aplicações WebGIS"] },
  { num: "03", title: "Software & automação", desc: "Criar aplicações e simplificar tarefas repetitivas, a partir dos processos e necessidades de cada organização.", tags: ["Web", "APIs", "XLSForm"], icon: "code", checks: ["Aplicações e integrações à medida", "Automação de fluxos de trabalho", "Ferramentas de recolha e tradução com IA"] },
  { num: "04", title: "Segurança de IA, Web & dados", desc: "Avaliar riscos de aplicações e orientar correcções, com âmbito e autorização definidos antes dos testes.", tags: ["LLM", "API", "WebGIS"], icon: "code", checks: ["Prompt injection e exposição de informação", "Autenticação, permissões e acesso a dados", "Evidências, recomendações e reteste acordado"] },
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
  { num: "01", title: "Compreender e definir", desc: "Identificar o problema, os utilizadores, os dados disponíveis e os critérios de sucesso. Acordar entregas, prazos e orçamento." },
  { num: "02", title: "Preparar e construir", desc: "Validar os dados, desenhar a solução e desenvolver uma primeira versão. Nas avaliações de segurança, acordar autorização e limites dos testes." },
  { num: "03", title: "Validar em conjunto", desc: "Testar a solução com exemplos representativos, rever resultados com a equipa e documentar limitações e correcções." },
  { num: "04", title: "Entregar e acompanhar", desc: "Disponibilizar a solução e a documentação, preparar a utilização e definir o suporte ou manutenção incluídos na proposta." },
];
export const stats = [
  { num: "GIS", label: "Compreender o território" },
  { num: "DATA", label: "Transformar informação" },
  { num: "CODE", label: "Construir ferramentas" },
];
