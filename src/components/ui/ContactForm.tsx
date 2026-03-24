'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  const inputCls = `w-full bg-white/[.03] border border-white/[.07] rounded-sm px-4 py-3 text-sm text-frost placeholder-fog/60
    outline-none transition-all duration-200 focus:border-gold/50 focus:bg-white/[.05]`

  return (
    <div className="bg-[#131620] border border-white/[.07] rounded-sm p-8 md:p-10">
      <p className="text-[.68rem] font-bold tracking-[.22em] uppercase text-teal mb-2">Contacto Directo</p>
      <h3 className="font-cormorant text-3xl font-light text-white mb-6">
        Vamos <em className="italic text-gold">conversar</em>
      </h3>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="text-4xl mb-4">✓</div>
            <p className="text-white font-semibold mb-2">Mensagem enviada!</p>
            <p className="text-fog text-sm">Jubílio irá responder em breve.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Nome" value={form.name}    onChange={set('name')}    className={inputCls} />
              <input required placeholder="Email" type="email" value={form.email}   onChange={set('email')}   className={inputCls} />
            </div>
            <select value={form.service} onChange={set('service')} className={inputCls}>
              <option value="">Seleccione um serviço...</option>
              <option>Desenvolvimento de Software</option>
              <option>Prompt Engineering & IA</option>
              <option>Data & GIS Analysis</option>
              <option>SaaS & Produtos Digitais</option>
              <option>Consultoria Estratégica Digital</option>
              <option>Formação & Workshops</option>
            </select>
            <textarea
              required rows={4} placeholder="Descreva o seu projecto..."
              value={form.message} onChange={set('message')}
              className={`${inputCls} resize-none`}
            />
            {status === 'error' && (
              <p className="text-red-400 text-xs">Erro ao enviar. Tente por email: jubilio@nexovibe.co.mz</p>
            )}
            <button
              type="submit" disabled={status === 'loading'}
              className="mt-2 bg-gold text-ink font-bold text-[.75rem] tracking-[.15em] uppercase px-6 py-3.5 rounded-sm
                transition-all duration-200 hover:bg-gold2 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,165,90,.35)]
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'A enviar...' : 'Enviar Mensagem →'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
