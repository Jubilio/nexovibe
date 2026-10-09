const guides: Record<string, { intro: string; steps: [string, string][] }> = {
  "gpx-batch-converter": {
    intro: "Experimente no QGIS com uma cópia de um ficheiro GPX sem dados pessoais. Estes passos descrevem a utilização; não executam o plugin neste site.",
    steps: [
      ["Instalar e abrir", "No gestor de plugins do QGIS, procure GPX Batch Converter. Abra a ferramenta e seleccione os ficheiros GPX de teste."],
      ["Escolher a saída", "Seleccione pontos, rotas ou trajectos disponíveis, o formato de saída e uma pasta de destino. Execute a conversão."],
      ["Conferir o resultado", "Abra as camadas criadas, compare-as com o GPX original e consulte o relatório de processamento e os atributos de coordenadas."],
    ],
  },
  "geoclick-capture": {
    intro: "Experimente a verificação de um local público no QGIS. A decisão continua a ser sua; a ferramenta organiza as fontes e as evidências.",
    steps: [
      ["Preparar a verificação", "Instale GeoClick Capture pelo gestor de plugins QGIS e abra um espaço de trabalho. Escolha um local público para comparar."],
      ["Comparar fontes", "Pesquise o local e compare candidatos com as suas camadas ou gazetteer. Reveja as coordenadas e a distância entre as alternativas."],
      ["Registar e exportar", "Seleccione a localização, documente a justificação e as evidências e exporte o pacote de revisão. Verifique o relatório HTML e as tabelas."],
    ],
  },
  "xlsform-translator": {
    intro: "Comece pelo modo de demonstração documentado no repositório, sem chamadas a fornecedores. Para utilização real, siga o guia de instalação no Excel.",
    steps: [
      ["Preparar uma cópia", "Abra uma cópia de teste do questionário, com as folhas survey e choices. Evite dados reais de participantes."],
      ["Traduzir e rever", "Escolha os idiomas e as folhas. Reveja a pré-visualização, os termos e os avisos antes de aplicar as alterações."],
      ["Validar a estrutura", "Compare as colunas linguísticas e confirme que variáveis, fórmulas e lógica foram preservadas. Valide o formulário antes da recolha."],
    ],
  },
};
export default function ProjectDemo({ slug }: { slug: string }) {
  const guide = guides[slug];
  if (!guide) return null;
  return <section id="experimentar" className="project-demo">
    <p className="eyebrow">EXPERIMENTAR O PROJECTO</p><h2>Da documentação à prática.</h2><p>{guide.intro}</p>
    <div className="demo-steps">{guide.steps.map(([title, detail], index) => <details key={title} open={index === 0}><summary><span>0{index + 1}</span>{title}</summary><p>{detail}</p></details>)}</div>
  </section>;
}
