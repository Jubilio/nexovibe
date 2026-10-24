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
  image: { src: string; alt: string; width: number; height: number; caption: string; layout: "identity" | "document" | "cover" };
  featured?: boolean;
  caseStudy?: string;
  status?: string;
};

// Curated against the public repository READMEs on 18 September 2026.
// Keep this snapshot explicit: no runtime dependency on GitHub or invented usage metrics.
export const projects: Project[] = [
  {
    id: "simgeo",
    image: {"src": "/projects/portfolio/simgeo.webp", "alt": "Logótipo original do SimGeo: território, localização e ligações.", "width": 640, "height": 640, "caption": "Identidade do projecto", "layout": "identity"},
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
    image: {"src": "/projects/portfolio/geoclick.svg", "alt": "Ícone original do GeoClick Capture, com marcador de localização e alvo.", "width": 128, "height": 128, "caption": "Identidade do projecto", "layout": "identity"},
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
    image: {"src": "/projects/portfolio/xlsform.svg", "alt": "Ilustração do repositório: folha Excel com o painel de tradução XLSForm.", "width": 1400, "height": 760, "caption": "Ilustração do repositório", "layout": "document"},
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
    image: {"src": "/projects/portfolio/gpx-converter.webp", "alt": "Ícone original do GPX Batch Converter: conversão de dados GPS em camadas GIS.", "width": 256, "height": 256, "caption": "Identidade do projecto", "layout": "identity"},
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
    image: {"src": "/projects/portfolio/tls-watcher.webp", "alt": "Demonstração do repositório TLS Cert Watcher, com campo de domínio e painel de resultados.", "width": 1200, "height": 838, "caption": "Demonstração do repositório", "layout": "document"},
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
    image: {"src": "/projects/portfolio/mwanga.webp", "alt": "Imagem de apresentação original do Mwanga Financial, com símbolo M luminoso.", "width": 640, "height": 640, "caption": "Imagem do repositório", "layout": "identity"},
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
    status: "Em desenvolvimento · Integração de dados pendente",
    image: {"src": "/projects/portfolio/vulnerability.webp", "alt": "Ilustração conceptual de território, povoações e ligações; não representa dados reais de Cabo Delgado.", "width": 1200, "height": 800, "caption": "Ilustração conceptual · IA", "layout": "cover"},
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
    image: {"src": "/projects/portfolio/research.webp", "alt": "Mapa publicado do potencial de águas subterrâneas no distrito de Mueda, com legenda e pontos de água.", "width": 1074, "height": 835, "caption": "Mapa publicado · Mueda", "layout": "document"},
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

// Priority services agreed in the October 2026 positioning: one field-data cycle for NGOs, agencies and research teams.
export const services = [
  { num: "01", title: "Recolha de dados de campo", desc: "Questionários KoboToolbox prontos para o terreno, em várias línguas, e respostas validadas antes da análise.", tags: ["KoboToolbox", "XLSForm", "IA"], icon: "doc", checks: ["Desenho e tradução de questionários XLSForm", "Testes e revisão da lógica antes da recolha", "Validação e limpeza das respostas"] },
  { num: "02", title: "Mapas & análise territorial", desc: "Saber onde estão as pessoas, os riscos e as intervenções, com localizações verificadas e mapas prontos a partilhar.", tags: ["QGIS", "WebGIS", "Earth Engine"], icon: "map", checks: ["Mapas de intervenção e de cobertura", "Verificação de localizações e pontos GPS", "Análise de vulnerabilidade e de risco"] },
  { num: "03", title: "Dashboards & relatórios de monitoria", desc: "Indicadores do programa actualizados e relatórios que gestores e doadores conseguem ler.", tags: ["Power BI", "R", "MEAL"], icon: "pulse", checks: ["Indicadores alinhados com o quadro lógico", "Dashboards para a equipa e para doadores", "Relatórios reproduzíveis e actualizações periódicas"] },
  { num: "04", title: "Ferramentas à medida & formação", desc: "Quando o processo o exige, automatizamos o fluxo de trabalho e preparamos a equipa para o utilizar.", tags: ["Python", "Plugins QGIS", "Formação"], icon: "code", checks: ["Automação e integrações entre ferramentas", "Plugins QGIS e aplicações de apoio", "Formação em QGIS e KoboToolbox"] },
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
