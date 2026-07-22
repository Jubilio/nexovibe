import type { Metadata } from 'next'
import XLSFormLegalPage from '@/components/XLSFormLegalPage'

export const metadata: Metadata = { title: 'Support — XLSForm AI Translator' }

export default function Page() {
  return <XLSFormLegalPage
    titlePt="Suporte"
    titleEn="Support"
    introPt="Encontre instruções de instalação, resolução de problemas e canais de contacto para o XLSForm AI Translator."
    introEn="Find installation guidance, troubleshooting information, and contact options for XLSForm AI Translator."
    sections={[
      { titlePt: 'Instalação', titleEn: 'Installation', bodyPt: <p>Instale o Add-in a partir do Microsoft Marketplace quando publicado. Durante testes privados, utilize o manifesto de produção fornecido pelo desenvolvedor.</p>, bodyEn: <p>Install the add-in from Microsoft Marketplace once published. During private testing, use the production manifest supplied by the developer.</p> },
      { titlePt: 'Problemas de carregamento', titleEn: 'Loading problems', bodyPt: <p>Confirme a ligação à Internet, reinicie o Excel e verifique se o serviço está disponível. Em ambientes institucionais, políticas do Microsoft 365 podem bloquear Add-ins personalizados.</p>, bodyEn: <p>Check your internet connection, restart Excel, and confirm that the service is available. In institutional environments, Microsoft 365 policies may block custom add-ins.</p> },
      { titlePt: 'Problemas com provedores', titleEn: 'Provider problems', bodyPt: <p>Quando a chave do servidor estiver indisponível ou sem créditos, abra Settings e introduza uma chave pessoal válida do provedor escolhido. Para Microsoft Translator, inclua também a região Azure.</p>, bodyEn: <p>When the server key is unavailable or out of credit, open Settings and enter a valid personal key for the selected provider. For Microsoft Translator, also include the Azure region.</p> },
      { titlePt: 'Remover chaves pessoais', titleEn: 'Remove personal keys', bodyPt: <p>Abra Settings e use a opção para limpar as chaves da sessão. As chaves também são removidas ao terminar a sessão do navegador ou do painel do Excel.</p>, bodyEn: <p>Open Settings and use the option to clear session keys. Keys are also removed when the browser or Excel task-pane session ends.</p> },
      { titlePt: 'Reportar um problema', titleEn: 'Report a problem', bodyPt: <p>Ao reportar um erro, inclua a versão do Excel, sistema operativo, provedor seleccionado, idioma de origem e destino, e a mensagem exacta do erro. Nunca envie a sua chave de API.</p>, bodyEn: <p>When reporting an issue, include your Excel version, operating system, selected provider, source and target languages, and the exact error message. Never send your API key.</p> },
      { titlePt: 'Contacto', titleEn: 'Contact', bodyPt: <p>Contacto principal: Jubílio Maússe, através do portfólio NexoVibe ou do repositório público do projecto no GitHub.</p>, bodyEn: <p>Primary contact: Jubílio Maússe, through the NexoVibe portfolio or the project's public GitHub repository.</p> }
    ]}
  />
}
