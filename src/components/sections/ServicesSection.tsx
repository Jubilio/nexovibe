'use client'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { getIcon } from '@/components/ui/Icons'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-28 px-[6%] bg-brand-dark relative z-[2]">
      <div className="grid gap-24 max-w-[1200px] mx-auto" style={{ gridTemplateColumns: '320px 1fr' }}>

        {/* Sticky header */}
        <div className="sticky top-32 self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[.68rem] font-bold tracking-[.22em] uppercase text-brand-green mb-6">
              <span className="w-6 h-px bg-brand-green" />O que oferecemos
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <h2 className="font-poppins text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.1] mb-4">
              Poder em<br /><em className="italic text-brand-purple font-normal">Dados & Espaço</em>
            </h2>
          </Reveal>
          <Reveal delay={.2}>
            <p className="text-slate-400 text-[.9rem] leading-[1.85]">
              Integramos Inteligência Artificial, Data Analytics e Geotecnologias para criar soluções sob medida para o mercado Moçambicano.
            </p>
          </Reveal>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-4">
          {services.map((svc, i) => (
            <Reveal key={svc.num} delay={(i % 3) * .1}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(123,44,191,0.03)' }}
                className={`svc-bar relative bg-slate-900 border rounded-xl overflow-hidden p-10 grid gap-6 cursor-pointer transition-all duration-300
                  ${svc.featured ? 'border-brand-purple/40 bg-brand-purple/5 shadow-xl shadow-brand-purple/10' : 'border-slate-800 hover:border-brand-purple/30'}`}
                style={{ gridTemplateColumns: '1fr auto' }}
              >
                {/* Featured badge */}
                {svc.featured && (
                  <span className="absolute top-6 right-6 text-[.58rem] font-bold tracking-[.15em] uppercase text-white
                    bg-brand-purple/80 px-2.5 py-1 rounded-full">
                    PRIORIDADE
                  </span>
                )}

                <div>
                  <p className="font-poppins text-[.75rem] font-bold tracking-[.1em] text-slate-500 mb-3">{svc.num} /</p>
                  <h3 className="font-poppins text-[1.5rem] font-bold text-white leading-[1.2] mb-3 whitespace-pre-line">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-[.84rem] leading-[1.8] max-w-[480px]">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {svc.tags.map(tag => (
                      <span key={tag}
                        className="text-[.62rem] font-bold tracking-[.12em] uppercase px-3 py-1.5 rounded-full
                          bg-slate-800 text-slate-400 border border-slate-700 transition-all duration-200
                          group-hover:border-brand-green/30 group-hover:text-brand-green">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-[52px] h-[52px] border border-slate-700 rounded-lg flex items-center justify-center
                  text-slate-500 self-start transition-all duration-300 group-hover:border-brand-green group-hover:text-brand-green flex-shrink-0">
                  {getIcon(svc.icon)}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
