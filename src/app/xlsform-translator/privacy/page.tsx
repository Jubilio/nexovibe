import type { Metadata } from 'next'
import XLSFormLegalPage from '@/components/XLSFormLegalPage'

export const metadata: Metadata = { title: 'Privacy Policy — XLSForm AI Translator' }

export default function Page() {
  return <XLSFormLegalPage
    titlePt="Política de Privacidade"
    titleEn="Privacy Policy"
    introPt="Esta política explica como o XLSForm AI Translator processa textos, chaves de API e informações técnicas."
    introEn="This policy explains how XLSForm AI Translator processes text, API keys, and technical information."
    sections={[
      { titlePt: 'Dados processados', titleEn: 'Data processed', bodyPt: <p>O suplemento lê apenas as células seleccionadas ou as colunas de idioma escolhidas. Fórmulas, nomes de variáveis e elementos protegidos são preservados.</p>, bodyEn: <p>The add-in reads only selected cells or chosen language columns. Formulas, variable names, and protected elements are preserved.</p> },
      { titlePt: 'Serviços de tradução', titleEn: 'Translation services', bodyPt: <p>Os textos são enviados ao provedor seleccionado, como OpenAI, DeepL ou Microsoft Translator. Cada provedor aplica os seus próprios termos e políticas.</p>, bodyEn: <p>Text is sent to the selected provider, such as OpenAI, DeepL, or Microsoft Translator. Each provider applies its own terms and policies.</p> },
      { titlePt: 'Chaves pessoais de API', titleEn: 'Personal API keys', bodyPt: <p>As chaves pessoais são opcionais, usadas apenas como fallback, transmitidas por HTTPS e mantidas apenas durante a sessão. Não são gravadas no Excel, nos registos de tradução ou permanentemente no servidor.</p>, bodyEn: <p>Personal keys are optional, used only as fallback, transmitted over HTTPS, and kept only for the session. They are not written to Excel, translation logs, or permanently stored on the server.</p> },
      { titlePt: 'Retenção e segurança', titleEn: 'Retention and security', bodyPt: <p>O serviço não foi concebido para armazenar questionários ou traduções. Podem existir registos técnicos temporários sem o conteúdo integral nem as chaves de API, necessários para operação e segurança.</p>, bodyEn: <p>The service is not designed to store questionnaires or translations. Temporary technical logs may exist without full content or API keys, as required for operation and security.</p> },
      { titlePt: 'Responsabilidade do utilizador', titleEn: 'User responsibility', bodyPt: <p>Não envie dados pessoais, confidenciais ou sensíveis sem autorização e sem verificar os requisitos da sua organização e do provedor escolhido.</p>, bodyEn: <p>Do not submit personal, confidential, or sensitive data without authorization and without checking your organisation's and provider's requirements.</p> },
      { titlePt: 'Contacto', titleEn: 'Contact', bodyPt: <p>Para questões de privacidade, use a página de suporte da NexoVibe.</p>, bodyEn: <p>For privacy questions, use the NexoVibe support page.</p> }
    ]}
  />
}
