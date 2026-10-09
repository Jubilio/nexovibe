"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { getInvitationPackage, type InvitationPackageId } from "@/lib/invitations";
import { whatsappUrl } from "@/lib/contact";
type Status = "idle" | "loading" | "success" | "error";
export default function ContactForm({ invitationPackage }: { invitationPackage?: InvitationPackageId }) {
  const selectedInvitation = invitationPackage ? getInvitationPackage(invitationPackage) : undefined;
  const whatsapp = whatsappUrl(selectedInvitation ? `Olá, NexoVibe. Tenho interesse no pacote ${selectedInvitation.name}. Gostaria de confirmar as entregas, o prazo e o preço negociável.` : undefined);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    system: "",
    deadline: "",
  });
  const pending = useRef(false);
  const website = useRef<HTMLInputElement>(null);
  const set =
    (key: keyof typeof form) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: event.target.value }));
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (pending.current) return;
    setErrorMessage("");
    setErrorCode("");
    if (!form.name.trim() || !form.message.trim()) {
      setErrorMessage("Preencha o nome e a mensagem antes de enviar.");
      setStatus("error");
      return;
    }
    pending.current = true;
    setStatus("loading");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.current?.value || "", name: form.name, email: form.email, service: selectedInvitation ? `Convites — ${selectedInvitation.name}` : form.service, ...(selectedInvitation ? { invitationPackage: selectedInvitation.id } : {}), message: `${selectedInvitation ? "Tipo de evento / convidados" : "Projecto"}: ${form.system.trim() || "Não especificado"}\n${selectedInvitation ? "Data do evento / entrega" : "Prazo pretendido"}: ${form.deadline.trim() || "A definir"}\n\n${form.message.trim()}` }),
        signal: controller.signal,
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.ok === true) {
        setStatus("success");
      } else {
        setErrorMessage(res.status === 429 ? "Recebemos vários pedidos desta ligação. Aguarde um minuto antes de tentar novamente." : typeof result?.error === "string" ? result.error : "Não foi possível confirmar o envio. Tente novamente mais tarde.");
        setErrorCode(typeof result?.code === "string" && /^EMAIL_[A-Z_]+$/.test(result.code) ? result.code : `HTTP_${res.status}`);
        setStatus("error");
      }
    } catch {
      setErrorMessage("Não foi possível confirmar o envio. Verifique a ligação e a recepção antes de tentar novamente.");
      setErrorCode("EMAIL_CONNECTION");
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      pending.current = false;
    }
  };
  return (
    <div className="contact-form-panel">
      {status === "success" ? (
        <div className="form-success" role="status">
          <span aria-hidden="true">✓</span>
          <h3>Mensagem enviada.</h3>
          <p>
            Obrigado pelo contacto. A NexoVibe responderá assim que possível.
          </p>
          <button
            className="button button-secondary"
            onClick={() => {
              setForm({ name: "", email: "", service: "", message: "", system: "", deadline: "" });
              setStatus("idle");
            }}
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          aria-label="Formulário de contacto"
          aria-busy={status === "loading"}
        >
          <div className="contact-trap" aria-hidden="true">
            <label htmlFor="contact-website">Deixe este campo vazio</label>
            <input ref={website} id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="form-row">
            <label htmlFor="contact-name">
              O seu nome
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                value={form.name}
                onChange={set("name")}
                placeholder="Como se chama?"
              />
            </label>
            <label htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                name="email"
                autoComplete="email"
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={set("email")}
                placeholder="nome@organizacao.com"
              />
            </label>
          </div>
          {!selectedInvitation && <label htmlFor="contact-service">
            Serviço pretendido <span className="optional">(opcional)</span>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={set("service")}
            >
              <option value="">Seleccione um serviço</option>
 <option>Segurança de aplicações de IA</option>
              <option>Pentest Web & API</option>
              <option>Segurança de dados & WebGIS</option>
              <option>GIS & análise espacial</option>
              <option>Dados & dashboards</option>
              <option>Software & automação</option>
              <option>IA & XLSForm</option>
              <option>Formação & workshops</option>
              <option>Convites para eventos</option>
              <option>Outro desafio</option>
            </select>
          </label>}
          {!selectedInvitation && form.service === "Convites para eventos" && <p className="form-note"><a href="/convites#pacotes">Escolher pacote e consultar o preço ↗</a></p>}
          <div className="form-row">
            <label htmlFor="contact-system">{selectedInvitation ? "Tipo de evento e número de convidados" : "Projecto ou sistema"} <span className="optional">(opcional)</span><input id="contact-system" name="system" maxLength={300} value={form.system} onChange={set("system")} placeholder={selectedInvitation ? "Ex.: casamento, 150 convidados" : "Ex.: dashboard, WebGIS, aplicação ou avaliação"} /></label>
            <label htmlFor="contact-deadline">{selectedInvitation ? "Data do evento e entrega pretendida" : "Prazo pretendido"} <span className="optional">(opcional)</span><input id="contact-deadline" name="deadline" maxLength={100} value={form.deadline} onChange={set("deadline")} placeholder={selectedInvitation ? "Ex.: evento em Fevereiro, entrega em Janeiro" : "Ex.: antes do lançamento em Novembro"} /></label>
          </div>
          <label htmlFor="contact-message">
            {selectedInvitation ? "Conta-nos a tua ideia" : "Como podemos ajudar?"}
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={4000}
              rows={4}
              value={form.message}
              onChange={set("message")}
              placeholder={selectedInvitation ? "Cores, estilo, textos e links de referências visuais. Não inclua a lista de convidados nesta fase." : "Descreva o contexto e os seus objectivos. Não inclua palavras-passe, chaves de acesso ou dados pessoais de terceiros."}
            />
          </label>
          {status === "error" && (
            <p className="form-error" role="alert">
              {errorMessage || "Não foi possível enviar."}{" "}
              <a href="mailto:nexovibecontact@gmail.com">
                Contactar a NexoVibe por email
              </a>
              {" · "}<a href={whatsapp} target="_blank" rel="noopener noreferrer">Continuar pelo WhatsApp</a>
              {errorCode && <span className="block mt-2">Referência: {errorCode}</span>}
            </p>
          )}
          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "A enviar…" : "Solicitar proposta"}
            <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">
            Os seus dados serão utilizados para responder ao contacto e preparar a proposta. <Link href="/privacidade">Política de privacidade</Link>.
          </p>
          <p className="form-note">Prefere conversar primeiro? <a href={whatsapp} target="_blank" rel="noopener noreferrer">Abrir WhatsApp ↗</a></p>
        </form>
      )}
    </div>
  );
}
