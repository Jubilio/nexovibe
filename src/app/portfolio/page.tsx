'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import { projects } from '@/lib/data'
import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-brand-dark pt-32 pb-20">
      <Navbar active="/portfolio" />

      {/* Hero Section */}
      <section className="px-[6%] mb-20">
        <Reveal>
          <p className="text-[.68rem] font-bold tracking-[.25em] uppercase text-brand-green mb-4">Portfólio Estratégico</p>
          <h1 className="font-poppins text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-tight mb-6">
            Soluções de <em className="italic text-brand-purple">Inteligência</em>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10">
            Transformando dados complexos em decisões geoespaciais inteligentes. Especializado em IA, GIS e Data Analytics para o contexto Moçambicano.
          </p>
        </Reveal>
      </section>

      {/* Projects Grid */}
      <section className="px-[6%] grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-purple/50"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
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
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.68rem] font-bold tracking-widest uppercase text-white flex items-center gap-2 group/link"
                  >
                    Ver Projecto
                    <span className="w-8 h-px bg-brand-green group-hover/link:w-12 transition-all" />
                  </a>
                  <span className="text-[.6rem] font-bold text-slate-600 tracking-[.3em]">
                    NEXOVIBE — {project.id.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-colors" />
            </motion.div>
          </Reveal>
        ))}
      </section>

      {/* CTA Placeholder for Missing GIS/Data/AI showcase */}
      <section className="px-[6%] mt-32 text-center max-w-4xl mx-auto">
        <Reveal delay={0.4}>
          <div className="p-12 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
            <h2 className="font-poppins text-2xl font-bold text-white mb-6">
              Desenvolvendo <em className="italic text-brand-green">Novas Fronteiras</em>
            </h2>
            <p className="text-slate-400 mb-8">
              Estamos a finalizar estudos de caso em **Mapeamento de Risco Climático** e **Análise Preditiva Humanitária**. 
              Interessado em ver como podemos aplicar IA + SIG ao seu desafio?
            </p>
            <a
              href="mailto:jubilio@nexovibe.co.mz"
              className="inline-block text-[.7rem] font-bold tracking-widest uppercase bg-brand-purple px-10 py-4 rounded-xl text-white hover:bg-brand-purple/80 transition-all shadow-lg shadow-brand-purple/20"
            >
              Falemos sobre Dados →
            </a>
            
            {/* Visual background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full" />
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
