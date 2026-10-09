import { NextRequest, NextResponse } from "next/server";
import { ContactInputError, readContactInput } from "@/lib/contact-input";
import { invitationQuoteSummary } from "@/lib/invitations";

function deliveryError(code: string, status = 502, providerStatus?: number) {
  // Diagnostic categories only: never log credentials, message bodies or raw provider errors.
  console.error("[contact]", { code, ...(providerStatus ? { providerStatus } : {}) });
  const error = code === "EMAIL_UNCONFIRMED" || code === "EMAIL_TIMEOUT"
    ? "Não foi possível confirmar o envio. Verifique a recepção antes de tentar novamente."
    : "O envio está temporariamente indisponível. Pode contactar-nos por email.";
  return NextResponse.json({ error, code }, { status });
}

function providerErrorCode(status: number, data: unknown): string {
  const body = data && typeof data === "object" ? data as Record<string, unknown> : {};
  const code = typeof body.code === "string" ? body.code : "";
  const message = typeof body.message === "string" ? body.message : "";
  if (/unrecogni[sz]ed ip|unauthori[sz]ed ip|ip address.*(?:block|authori)|(?:block|authori).*ip address/i.test(message)) return "EMAIL_IP_BLOCKED";
  if (status === 401 || code === "unauthorized") return "EMAIL_AUTH";
  if (/sender|from email/i.test(message)) return "EMAIL_SENDER";
  if (status === 429 || code === "not_enough_credits" || status === 402) return "EMAIL_LIMIT";
  if (status === 403 || code === "permission_denied") return "EMAIL_PERMISSION";
  if (code === "invalid_parameter" || code === "missing_parameter") return "EMAIL_REQUEST";
  return "EMAIL_PROVIDER";
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await readContactInput(req);
  } catch (error) {
    return NextResponse.json({ error: error instanceof ContactInputError ? error.message : "Pedido inválido." }, { status: error instanceof ContactInputError ? error.status : 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
  if (fields.website !== undefined && (typeof fields.website !== "string" || fields.website.trim())) {
    return NextResponse.json({ error: "Não foi possível validar o pedido." }, { status: 400 });
  }
  if (
    typeof fields.name !== "string" ||
    typeof fields.email !== "string" ||
    typeof fields.message !== "string" ||
    (fields.service !== undefined && typeof fields.service !== "string")
  ) {
    return NextResponse.json(
      { error: "Campos obrigatórios em falta ou inválidos." },
      { status: 400 },
    );
  }
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  const service =
    typeof fields.service === "string" ? fields.service.trim() : "";
  if (
    !name ||
    name.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000 ||
    service.length > 120 ||
    /[\r\n]/.test(name + email + service)
  ) {
    return NextResponse.json(
      { error: "Verifique os campos do formulário." },
      { status: 400 },
    );
  }

  // Resolve the quote on the server; never trust a visitor-supplied price.
  let invitationSummary = "";
  if (fields.invitationPackage !== undefined) {
    if (typeof fields.invitationPackage !== "string") {
      return NextResponse.json({ error: "Pacote de convite inválido." }, { status: 400 });
    }
    const summary = invitationQuoteSummary(fields.invitationPackage);
    if (!summary) return NextResponse.json({ error: "Pacote de convite inválido." }, { status: 400 });
    invitationSummary = `\n\nPedido de convite\n${summary}`;
  }

  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  if (!apiKey) return deliveryError("EMAIL_CONFIG_KEY", 503);
  if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    return deliveryError("EMAIL_CONFIG_SENDER", 503);
  }
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        sender: { name: "NexoVibe", email: senderEmail },
        to: [{ email: "nexovibecontact@gmail.com", name: "NexoVibe" }],
        replyTo: { email, name },
        subject: `Nova mensagem de ${name} — ${service || "NexoVibe"}`,
        // Plain text prevents visitor-supplied markup from becoming email HTML.
        textContent: `NexoVibe — Contacto\n\nNome: ${name}\nEmail: ${email}\nÁrea: ${service || "Não especificada"}\n\n${message}${invitationSummary}`,
      }),
    });
    const result: unknown = await response.json().catch(() => null);
    if (!response.ok) {
      return deliveryError(providerErrorCode(response.status, result), 502, response.status);
    }
    if (
      !result || typeof result !== "object" ||
      !("messageId" in result) || typeof result.messageId !== "string" ||
      !result.messageId.trim()
    ) {
      return deliveryError("EMAIL_UNCONFIRMED");
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    const timeout = error instanceof Error && ["TimeoutError", "AbortError"].includes(error.name);
    return deliveryError(timeout ? "EMAIL_TIMEOUT" : "EMAIL_NETWORK");
  }
}
