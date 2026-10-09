const MAX_BODY_BYTES = 32 * 1024;
export class ContactInputError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
export async function readContactInput(req: Request): Promise<unknown> {
  const origin = req.headers.get("origin");
  const allowed = [new URL(req.url).origin, process.env.URL, process.env.DEPLOY_PRIME_URL]
    .filter((value): value is string => Boolean(value));
  if (!origin || !allowed.includes(origin) || req.headers.get("sec-fetch-site") === "cross-site") {
    throw new ContactInputError(403, "Abra o formulário no site da NexoVibe para enviar o pedido.");
  }
  if (req.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new ContactInputError(415, "Formato de pedido inválido.");
  }
  const declaredLength = req.headers.get("content-length");
  if (declaredLength && (!/^\d+$/.test(declaredLength) || Number(declaredLength) > MAX_BODY_BYTES)) {
    throw new ContactInputError(413, "A mensagem é demasiado longa.");
  }
  const reader = req.body?.getReader();
  if (!reader) throw new ContactInputError(400, "Pedido inválido.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new ContactInputError(413, "A mensagem é demasiado longa.");
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  try { return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); }
  catch { throw new ContactInputError(400, "Pedido inválido."); }
}
