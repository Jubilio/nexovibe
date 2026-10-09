"use client";
import { useRef, useState } from "react";
type Status = "idle" | "loading" | "success" | "error";
export default function ContactForm() {
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
        body: JSON.stringify({ name: form.name, email: form.email, service: form.service, message: `Sistema: ${form.system.trim() || "Não especificado"}\nPrazo pretendido: ${form.deadline.trim() || "A definir"}\n\n${form.message.trim()}` }),
        signal: controller.signal,
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.ok === true) {
        setStatus("success");
      } else {
        setErrorMessage(typeof result?.error === "string" ? result.error : "Não foi possível confirmar o envio. Tente novamente mais tarde.");
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
          <label htmlFor="contact-service">
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
              <option>Outro desafio</option>
            </select>
          </label>
          <div className="form-row">
            <label htmlFor="contact-system">Sistema a avaliar <span className="optional">(opcional)</span><input id="contact-system" name="system" maxLength={300} value={form.system} onChange={set("system")} placeholder="Ex.: assistente interno, API, WebGIS" /></label>
            <label htmlFor="contact-deadline">Prazo pretendido <span className="optional">(opcional)</span><input id="contact-deadline" name="deadline" maxLength={100} value={form.deadline} onChange={set("deadline")} placeholder="Ex.: antes do lançamento em Novembro" /></label>
          </div>
          <label htmlFor="contact-message">
            Como podemos ajudar?
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={4000}
              rows={4}
              value={form.message}
              onChange={set("message")}
              placeholder="Descreva o contexto e os seus objectivos. Não inclua palavras-passe, chaves de acesso ou dados pessoais de terceiros."
            />
          </label>
          {status === "error" && (
            <p className="form-error" role="alert">
              {errorMessage || "Não foi possível enviar."}{" "}
              <a href="mailto:nexovibecontact@gmail.com">
                Contactar a NexoVibe por email
              </a>
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
            Os seus dados serão utilizados apenas para responder ao contacto.
          </p>
        </form>
      )}
    </div>
  );
}
