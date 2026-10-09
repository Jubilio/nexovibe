export const contactEmail = "nexovibecontact@gmail.com";
export const contactPhone = "+258 87 451 8769";
export function whatsappUrl(message = "Olá, NexoVibe. Gostaria de conversar sobre um projecto e solicitar uma proposta.") {
  return `https://wa.me/258874518769?text=${encodeURIComponent(message)}`;
}
