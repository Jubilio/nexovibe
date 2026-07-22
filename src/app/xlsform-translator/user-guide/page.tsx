import type { Metadata } from 'next'
import XLSFormLegalPage from '@/components/XLSFormLegalPage'

export const metadata: Metadata = { title: 'User Guide — XLSForm AI Translator' }

export default function Page() {
  return <XLSFormLegalPage
    titlePt="Guia do Utilizador"
    titleEn="User Guide"
    introPt="Guia rápido para traduzir células seleccionadas e questionários Kobo/XLSForm no Microsoft Excel."
    introEn="Quick guide for translating selected cells and Kobo/XLSForm questionnaires in Microsoft Excel."
    sections={[
      { titlePt: 'Abrir o Add-in', titleEn: 'Open the add-in', bodyPt: <p>No Excel, abra Home, seleccione Add-ins e escolha XLSForm AI Translator. O painel abrirá à direita.</p>, bodyEn: <p>In Excel, open Home, select Add-ins, and choose XLSForm AI Translator. The task pane opens on the right.</p> },
      { titlePt: 'Escolher idiomas', titleEn: 'Choose languages', bodyPt: <p>Seleccione o idioma de origem, o idioma de destino e a variante linguística. A interface pode ser alterada entre Português e English no botão de engrenagem.</p>, bodyEn: <p>Select the source language, target language, and language variant. The interface can be switched between Portuguese and English from the settings button.</p> },
      { titlePt: 'Traduzir uma selecção', titleEn: 'Translate a selection', bodyPt: <p>Seleccione as células com texto, clique em Traduzir selecção, reveja a pré-visualização e aplique. A tradução é escrita num bloco equivalente imediatamente à direita, preservando o original.</p>, bodyEn: <p>Select text cells, click Translate selection, review the preview, and apply. The translation is written to an equivalent block immediately to the right, preserving the original.</p> },
      { titlePt: 'Traduzir um XLSForm', titleEn: 'Translate an XLSForm', bodyPt: <p>Abra um ficheiro com folhas survey e choices, escolha os idiomas, seleccione as folhas e clique em Traduzir XLSForm. Colunas como label::Portuguese são criadas quando necessário.</p>, bodyEn: <p>Open a workbook with survey and choices sheets, choose the languages and worksheets, then click Translate XLSForm. Columns such as label::Portuguese are created when required.</p> },
      { titlePt: 'Rever antes de aplicar', titleEn: 'Review before applying', bodyPt: <p>Edite qualquer proposta na pré-visualização. Avisos indicam placeholders, HTML ou outros elementos protegidos que precisam de atenção.</p>, bodyEn: <p>Edit any proposed translation in the preview. Warnings identify placeholders, HTML, or other protected elements that require attention.</p> },
      { titlePt: 'Usar uma chave pessoal', titleEn: 'Use a personal API key', bodyPt: <p>Quando a chave do servidor falhar, abra Settings, escolha o provedor e introduza a sua chave. A chave é mantida apenas durante a sessão e pode ser apagada a qualquer momento.</p>, bodyEn: <p>When the server key fails, open Settings, choose the provider, and enter your key. The key is kept only for the session and can be cleared at any time.</p> },
      { titlePt: 'Boas práticas', titleEn: 'Good practice', bodyPt: <p>Faça uma cópia do ficheiro, teste num pequeno intervalo, reveja toda a tradução e valide o XLSForm antes da recolha de dados.</p>, bodyEn: <p>Make a backup, test on a small range, review every translation, and validate the XLSForm before data collection.</p> }
    ]}
  />
}
