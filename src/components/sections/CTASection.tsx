import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/ui/ContactForm'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-28 px-[6%] bg-[#08090c] relative z-[2] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,44,191,.08) 0%, transparent 65%)' }} />
      {/* Watermark */}
      <span className="absolute bottom-[-2rem] right-[4%] font-poppins text-[18rem] font-bold leading-none
        text-white/[.015] pointer-events-none select-none z-0">NV</span>

      <div className="relative z-[2] max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <Reveal>
            <p className="text-[.68rem] font-bold tracking-[.25em] uppercase text-teal mb-6">Próximo passo</p>
          </Reveal>
          <Reveal delay={.1}>
            <h2 className="font-poppins text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Pronto para elevar o seu <em className="italic text-brand-purple">Impacto</em>?
            </h2>
          </Reveal>
          <Reveal delay={.2}>
            <p className="text-fog text-[.9rem] leading-[1.85] mb-10 max-w-[420px]">
              Primeira consulta gratuita. Sem compromisso. Apenas uma conversa sobre o seu projecto e como podemos ajudar.
            </p>
          </Reveal>
          <Reveal delay={.3}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[.82rem] text-fog">
                <span className="w-8 h-px bg-brand-purple/40" />
                <span>jubilio@nexovibe.co.mz</span>
              </div>
              <div className="flex items-center gap-4 text-[.82rem] text-fog">
                <span className="w-8 h-px bg-brand-purple/40" />
                <span>Maputo, Moçambique</span>
              </div>
              <div className="flex items-center gap-4 text-[.82rem] text-fog">
                <span className="w-8 h-px bg-brand-purple/40" />
                <span>Resposta em até 24h</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={.4}>
            <Link href="/"
              className="inline-flex items-center gap-2 mt-10 text-[.72rem] font-semibold tracking-[.1em] uppercase text-fog no-underline
                transition-colors duration-200 hover:text-white">
              ← Voltar ao Início
            </Link>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={.2}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
