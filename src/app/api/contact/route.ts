import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
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

  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  if (!apiKey || !senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    // Never acknowledge delivery when no delivery service is configured.
    return NextResponse.json(
      { error: "Envio indisponível. Contacte nexovibecontact@gmail.com." },
      { status: 503 },
    );
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
        textContent: `NexoVibe — Contacto\n\nNome: ${name}\nEmail: ${email}\nÁrea: ${service || "Não especificada"}\n\n${message}`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem." },
        { status: 502 },
      );
    }
    const result: unknown = await response.json();
    if (
      !result || typeof result !== "object" ||
      !("messageId" in result) || typeof result.messageId !== "string" ||
      !result.messageId.trim()
    ) {
      return NextResponse.json(
        { error: "Não foi possível confirmar o envio da mensagem." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem." },
      { status: 502 },
    );
  }
}
