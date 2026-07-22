import type { Metadata } from 'next'
import XLSFormLegalPage from '@/components/XLSFormLegalPage'

export const metadata: Metadata = { title: 'Terms of Use — XLSForm AI Translator' }

export default function Page() {
  return <XLSFormLegalPage
    titlePt="Termos de Utilização"
    titleEn="Terms of Use"
    introPt="Ao utilizar o XLSForm AI Translator, o utilizador aceita estes termos e assume responsabilidade pela revisão das traduções."
    introEn="By using XLSForm AI Translator, the user accepts these terms and remains responsible for reviewing translations."
    sections={[
      { titlePt: 'Finalidade', titleEn: 'Purpose', bodyPt: <p>O Add-in auxilia a tradução de questionários Kobo/XLSForm e de células seleccionadas no Excel. Não substitui revisão linguística, técnica ou de protecção de dados.</p>, bodyEn: <p>The add-in assists with translating Kobo/XLSForm questionnaires and selected Excel cells. It does not replace linguistic, technical, or data-protection review.</p> },
      { titlePt: 'Precisão das traduções', titleEn: 'Translation accuracy', bodyPt: <p>Traduções automáticas podem conter erros. O utilizador deve rever todas as traduções antes de publicar, recolher dados ou tomar decisões.</p>, bodyEn: <p>Machine translations may contain errors. Users must review all translations before publishing, collecting data, or making decisions.</p> },
      { titlePt: 'Uso permitido', titleEn: 'Permitted use', bodyPt: <p>É permitido utilizar o serviço para fins profissionais, académicos, humanitários e administrativos legítimos, respeitando leis, políticas internas e direitos de terceiros.</p>, bodyEn: <p>The service may be used for legitimate professional, academic, humanitarian, and administrative purposes, subject to laws, internal policies, and third-party rights.</p> },
      { titlePt: 'Uso proibido', titleEn: 'Prohibited use', bodyPt: <p>É proibido tentar contornar limites, explorar vulnerabilidades, enviar conteúdo ilícito, abusar de chaves alheias ou utilizar o serviço para causar dano.</p>, bodyEn: <p>Users must not bypass limits, exploit vulnerabilities, submit unlawful content, misuse third-party keys, or use the service to cause harm.</p> },
      { titlePt: 'Custos de provedores', titleEn: 'Provider charges', bodyPt: <p>Quando utiliza uma chave pessoal, o utilizador é responsável por créditos, subscrições, limites e cobranças do respectivo provedor.</p>, bodyEn: <p>When using a personal key, the user is responsible for credits, subscriptions, limits, and charges imposed by the relevant provider.</p> },
      { titlePt: 'Disponibilidade e alterações', titleEn: 'Availability and changes', bodyPt: <p>O serviço pode ser actualizado, suspenso ou alterado para manutenção, segurança ou conformidade. Não é garantida disponibilidade ininterrupta.</p>, bodyEn: <p>The service may be updated, suspended, or changed for maintenance, security, or compliance. Uninterrupted availability is not guaranteed.</p> },
      { titlePt: 'Limitação de responsabilidade', titleEn: 'Limitation of liability', bodyPt: <p>Na medida permitida por lei, a NexoVibe e o desenvolvedor não respondem por perdas decorrentes de traduções incorrectas, indisponibilidade, custos de API ou uso inadequado.</p>, bodyEn: <p>To the extent permitted by law, NexoVibe and the developer are not liable for losses arising from inaccurate translations, downtime, API charges, or misuse.</p> }
    ]}
  />
}
