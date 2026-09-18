"use client";
import { useRef, useState } from "react";
type Status = "idle" | "loading" | "success" | "error";
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
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
    pending.current = true;
    setStatus("loading");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      const result = await res.json();
      setStatus(res.ok && result.ok === true ? "success" : "error");
    } catch {
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
              setForm({ name: "", email: "", service: "", message: "" });
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
            Área do projecto <span className="optional">(opcional)</span>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={set("service")}
            >
              <option value="">Seleccione uma área</option>
              <option>GIS & análise espacial</option>
              <option>Dados & dashboards</option>
              <option>Software & automação</option>
              <option>IA & XLSForm</option>
              <option>Formação & workshops</option>
              <option>Outro desafio</option>
            </select>
          </label>
          <label htmlFor="contact-message">
            O que gostaria de construir?
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
              rows={4}
              value={form.message}
              onChange={set("message")}
              placeholder="Descreva o seu projecto e os seus objectivos…"
            />
          </label>
          {status === "error" && (
            <p className="form-error" role="alert">
              Não foi possível enviar. Tente novamente ou{" "}
              <a href="mailto:jubilio@nexovibe.co.mz">
                contacte a NexoVibe por email
              </a>
              .
            </p>
          )}
          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "A enviar…" : "Enviar mensagem"}
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
