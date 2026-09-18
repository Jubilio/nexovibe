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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never acknowledge delivery when no delivery service is configured.
    return NextResponse.json(
      { error: "Envio indisponível. Contacte jubilio@nexovibe.co.mz." },
      { status: 503 },
    );
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from: "NexoVibe <noreply@nexovibe.co.mz>",
        to: ["jubilio@nexovibe.co.mz"],
        reply_to: email,
        subject: `Nova mensagem de ${name} — ${service || "NexoVibe"}`,
        // Plain text prevents visitor-supplied markup from becoming email HTML.
        text: `NexoVibe — Contacto\n\nNome: ${name}\nEmail: ${email}\nÁrea: ${service || "Não especificada"}\n\n${message}`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem." },
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
