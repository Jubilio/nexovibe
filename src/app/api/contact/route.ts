import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios em falta.' }, { status: 400 })
    }

    // If RESEND_API_KEY is set, send via Resend. Otherwise log to console (dev mode).
    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          from: 'NEXO VIBE <noreply@nexovibe.co.mz>',
          to: ['jubilio@nexovibe.co.mz'],
          reply_to: email,
          subject: `Nova mensagem de ${name} — ${service || 'NEXO VIBE'}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#08090c;color:#dde3ee;padding:40px;border-radius:8px">
              <h1 style="font-family:Georgia,serif;color:#c9a55a;font-size:2rem;margin-bottom:8px">NEXO VIBE</h1>
              <p style="color:#8892a4;font-size:.8rem;margin-bottom:32px;letter-spacing:.1em;text-transform:uppercase">Nova mensagem de contacto</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);color:#8892a4;width:120px;font-size:.85rem">Nome</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:.9rem">${name}</td></tr>
                <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);color:#8892a4;font-size:.85rem">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:.9rem">${email}</td></tr>
                <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);color:#8892a4;font-size:.85rem">Serviço</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:.9rem">${service || 'Não especificado'}</td></tr>
              </table>
              <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,.04);border-radius:4px;border-left:3px solid #c9a55a">
                <p style="color:#8892a4;font-size:.8rem;margin-bottom:8px;text-transform:uppercase;letter-spacing:.1em">Mensagem</p>
                <p style="line-height:1.7;font-size:.95rem">${message}</p>
              </div>
              <p style="margin-top:32px;color:#8892a4;font-size:.75rem">© 2026 NEXO VIBE · Maputo, Moçambique</p>
            </div>
          `,
        }),
      })
      if (!res.ok) throw new Error('Resend error')
    } else {
      // Dev fallback — log to console
      console.log('[NEXO VIBE Contact]', { name, email, service, message })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
