// Suggested commercial values. Approve these before merging/publishing.
export const invitationPricingProvisional = true;
export const invitationPackages = [
  {
    id: "essencial", name: "Convite Essencial", price: 1500,
    description: "Uma criação à tua medida, pronta para partilhar ou imprimir.",
    format: "IMAGEM + PDF",
    features: ["Design a partir das tuas referências", "Imagem para WhatsApp e redes sociais", "PDF preparado para impressão", "Duas rondas de ajustes ao design"],
    terms: "Inclui os ficheiros digitais. Impressão física não incluída.",
  },
  {
    id: "digital", name: "Convite Digital", price: 4500,
    description: "Um link com todos os detalhes do teu grande dia.",
    format: "PÁGINA ONLINE",
    features: ["Design personalizado para telemóvel", "Programa, fotografias e localização", "Música opcional e botão de WhatsApp", "Duas rondas de ajustes ao design"],
    terms: "Prazo de alojamento e endereço do convite definidos na proposta. Domínio próprio à parte.",
  },
  {
    id: "completo", name: "Evento Completo", price: 9500,
    description: "O convite e a organização dos convidados, no mesmo lugar.",
    format: "CONVITE + GESTÃO",
    features: ["Tudo do Convite Digital", "Convites por nome e acompanhantes", "Confirmação de presença e painel de gestão", "Lista de presentes com reservas"],
    terms: "Número de convidados, alojamento e suporte definidos na proposta. Check-in e mesas sob orçamento.",
  },
] as const;
export type InvitationPackageId = typeof invitationPackages[number]["id"];
export function getInvitationPackage(id: string) {
  return invitationPackages.find((item) => item.id === id);
}
export function formatInvitationPrice(value: number) {
  return new Intl.NumberFormat("pt-MZ", { maximumFractionDigits: 0 }).format(value) + " MT";
}
export function invitationQuoteSummary(id: string) {
  const item = getInvitationPackage(id);
  if (!item) return null;
  return `${item.name} — ${formatInvitationPrice(item.price)}\n${invitationPricingProvisional ? "Preço provisório, sujeito a aprovação comercial." : "Preço base; extras e âmbito final confirmados na proposta."}\n${item.terms}`;
}
