'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import Cursor from '@/components/ui/Cursor'
import { projects } from '@/lib/data'
import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <>
      <Cursor />
      <Navbar active="/portfolio" />
      <main className="relative min-h-screen bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none grid-flow"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
               backgroundSize: '80px 80px',
               maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)',
             }} />
        <div className="scanline" />
        <div className="animate-orb absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none z-[1]"
             style={{ background: 'radial-gradient(circle, rgba(123,44,191,.10) 0%, transparent 70%)', top: '-10%', left: '-10%' }} />
        <div className="animate-orb2 absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none z-[1]"
             style={{ background: 'radial-gradient(circle, rgba(0,245,212,.08) 0%, transparent 70%)', top: '20%', right: '-10%' }} />

        <div className="relative z-[2]">
          <section className="px-[6%] mb-20">
            <Reveal>
              <p className="text-[.68rem] font-bold tracking-[.25em] uppercase text-brand-green mb-4">Portfólio Estratégico</p>
              <h1 className="font-poppins text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-tight mb-6">
                Soluções com <em className="italic text-brand-purple">Impacto Real</em>
              </h1>
              <p className="max-w-3xl text-slate-400 text-lg leading-relaxed mb-10">
                Projectos recentes em inteligência artificial, automação de fluxos, sistemas de informação geográfica,
                investigação aplicada e análise humanitária — desenvolvidos para transformar dados complexos em decisões úteis.
              </p>
              <div className="flex flex-wrap gap-3">
                {['IA aplicada', 'GIS & Sensoriamento Remoto', 'Automação', 'Humanitarian Data'].map(item => (
                  <span key={item} className="text-[.65rem] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-slate-700 text-slate-300 bg-slate-900/50">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="px-[6%] grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-purple/50"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[.6rem] font-bold tracking-widest uppercase px-3 py-1 bg-brand-dark/80 backdrop-blur-md rounded border border-slate-700 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-brand-green text-[.65rem] font-bold tracking-[.2em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-poppins text-xl font-bold text-white mb-4 group-hover:text-brand-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <a
                        href={project.link}
                        target={project.link.startsWith('mailto:') ? undefined : '_blank'}
                        rel={project.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="text-[.68rem] font-bold tracking-widest uppercase text-white flex items-center gap-2 group/link"
                      >
                        Ver Projecto
                        <span className="w-8 h-px bg-brand-green group-hover/link:w-12 transition-all" />
                      </a>
                      <span className="text-[.6rem] font-bold text-slate-600 tracking-[.2em] text-right">
                        NEXOVIBE — {project.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-colors" />
                </motion.div>
              </Reveal>
            ))}
          </section>

          <section className="px-[6%] mt-32 text-center max-w-4xl mx-auto">
            <Reveal delay={0.4}>
              <div className="p-12 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
                <p className="text-[.65rem] font-bold tracking-[.25em] uppercase text-brand-purple mb-4">Da análise ao produto</p>
                <h2 className="font-poppins text-2xl font-bold text-white mb-6">
                  Uma solução à medida do seu <em className="italic text-brand-green">desafio de dados</em>
                </h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Integramos IA, SIG, automação e análise aplicada para criar ferramentas sustentáveis, auditáveis e adaptadas ao contexto de cada organização.
                </p>
                <a
                  href="mailto:jubilio@nexovibe.co.mz?subject=Novo%20projecto%20NexoVibe"
                  className="inline-block text-[.7rem] font-bold tracking-widest uppercase bg-brand-purple px-10 py-4 rounded-xl text-white hover:bg-brand-purple/80 transition-all shadow-lg shadow-brand-purple/20"
                >
                  Iniciar uma conversa →
                </a>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full" />
              </div>
            </Reveal>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
