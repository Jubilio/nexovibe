// Source-backed descriptions, reviewed 2026-10-09. No invented client outcomes or usage metrics.
export const caseStudies = [
  {
    slug: "gpx-batch-converter", name: "GPX Batch Converter", area: "GIS & automação", status: "Plugin publicado no catálogo QGIS", version: "1.3.0 documentada no repositório",
    lead: "Dos ficheiros GPS às camadas prontas para análise.",
    problem: "Uma recolha de campo pode produzir vários ficheiros GPX, com trajectos, rotas e pontos. Preparar cada ficheiro separadamente exige operações repetidas e dificulta o acompanhamento da origem dos dados.",
    approach: "Desenvolvimento de um plugin integrado no QGIS, com processamento em lote, escolha de camadas, conversão em segundo plano e opção de união dos resultados. O fluxo regista o resultado de cada operação e preserva a proveniência na união.",
    result: "A implementação documenta conversão para Shapefile, GeoPackage, GeoJSON, KML e CSV, exportação do relatório de processamento e atributos de coordenadas WGS 84. O plugin pode ser consultado no catálogo oficial QGIS.",
    limits: "A disponibilidade das camadas depende do conteúdo do GPX. Os atributos de coordenadas reflectem a geometria no momento da conversão. Não apresentamos uma medição publicada de tempo poupado ou número de utilizadores.",
    tools: ["Python", "PyQGIS", "GDAL"], flow: ["Ficheiros GPX", "Seleccionar e converter", "Camadas + relatório"],
    source: "https://github.com/Jubilio/gpx-batch-converter", evidence: "https://plugins.qgis.org/plugins/gpx_batch_converter/", evidenceLabel: "Consultar plugin no QGIS",
  },
  {
    slug: "geoclick-capture", name: "GeoClick Capture", area: "Qualidade de dados geográficos", status: "Plugin publicado no catálogo QGIS", version: "2.0.1 documentada no repositório",
    lead: "Uma localização escolhida com contexto e evidências.",
    problem: "Fontes diferentes podem atribuir coordenadas diferentes ao mesmo lugar. É necessário comparar as alternativas e conservar os motivos da decisão, sobretudo quando os dados serão revistos por outra pessoa.",
    approach: "Criação de um espaço de verificação dentro do QGIS que reúne pesquisa online, gazetteers, camadas existentes e coordenadas manuais. A comparação apresenta concordância e distância entre fontes, mantendo a decisão final com o utilizador.",
    result: "O plugin documenta uma fila de revisão e a exportação de um pacote com JSON, relatório HTML, tabelas CSV, manifesto e anexos. O registo conserva a fonte seleccionada, a justificação, o responsável e a data da verificação.",
    limits: "A recomendação automática apoia a revisão; não garante que a localização esteja correcta. A qualidade depende das fontes e evidências utilizadas. Não são apresentados resultados de impacto de clientes.",
    tools: ["Python", "PyQGIS", "QGIS"], flow: ["Comparar fontes", "Rever e decidir", "Exportar evidências"],
    source: "https://github.com/Jubilio/qgis-latlon", evidence: "https://plugins.qgis.org/plugins/qgis_latlon/", evidenceLabel: "Consultar plugin no QGIS",
  },
  {
    slug: "xlsform-translator", name: "XLSForm AI Translator", area: "Software & ferramentas humanitárias", status: "Projecto open source em evolução", version: "1.4.0 documentada no repositório",
    lead: "Criar e traduzir questionários sem perder a estrutura.",
    problem: "Um questionário multilingue contém texto para traduzir, mas também fórmulas, variáveis e lógica que devem permanecer intactas. Misturar estas tarefas aumenta o risco de alterações involuntárias.",
    approach: "Desenvolvimento de um suplemento para Microsoft Excel, com análise da estrutura, criação de colunas linguísticas e uma pré-visualização editável. A tradução é organizada em lotes e separada dos elementos técnicos protegidos.",
    result: "O repositório documenta criação de folhas XLSForm, comparação com um formulário de referência, relatório de validação, glossário Inglês–Português e aplicação das traduções após revisão. Inclui um modo de demonstração sem chamadas a fornecedores.",
    limits: "As traduções exigem revisão humana e o formulário deve ser testado antes da recolha. A instalação depende do ambiente Excel; o acesso a fornecedores pode ter custos. Não apresentamos certificação Microsoft nem métricas de adopção.",
    tools: ["TypeScript", "Office.js", "XLSForm"], flow: ["Analisar formulário", "Traduzir e rever", "Aplicar alterações"],
    source: "https://github.com/Jubilio/xlsform-ai-translator", evidence: "/xlsform-translator/user-guide", evidenceLabel: "Ler guia de utilização",
  },
];
