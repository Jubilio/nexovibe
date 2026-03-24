'use client'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const values = [
    { title: 'Inovação orientada a impacto', desc: 'Soluções que resolvem problemas reais.' },
    { title: 'Precisão e qualidade de dadas', desc: 'A base para qualquer decisão inteligente.' },
    { title: 'Ética e transparência', desc: 'Integridade em cada algoritmo e mapa.' },
    { title: 'Eficiência e Automação', desc: 'Fazendo mais com menos erro humano.' },
    { title: 'Sustentabilidade', desc: 'Foco no longo prazo e equilíbrio ambiental.' },
  ]

  return (
    <main className="min-h-screen bg-brand-dark pt-32">
      <Navbar active="/sobre" />

      {/* Hero Section */}
      <section className="px-[6%] mb-24">
        <Reveal>
          <p className="text-[.68rem] font-bold tracking-[.25em] uppercase text-brand-green mb-4">Sobre a NexoVibe</p>
          <h1 className="font-poppins text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-tight mb-8">
            Unindo <em className="italic text-brand-purple">Dados</em>,<br /> 
            Espaço e IA.
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal delay={0.1}>
            <p className="text-slate-400 text-lg leading-relaxed">
              A **NexoVibe** nasceu da necessidade de transformar a complexidade tecnológica em clareza estratégica. 
              Especializados no mercado de Moçambique, combinamos Inteligência Artificial, 
              Análise de Dados e Geotecnologias (SIG) para criar soluções que impulsionam o impacto real.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg leading-relaxed">
              Focamos em apoiar organizações humanitárias, governamentais e empresariais na 
              digitalização de processos e na tomada de decisões baseadas em evidências espaciais e preditivas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-[6%] py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="p-10 rounded-2xl bg-brand-dark border border-brand-purple/20">
              <h2 className="text-brand-purple text-[.65rem] font-bold tracking-[.3em] uppercase mb-6">Nossa Missão</h2>
              <p className="font-poppins text-2xl font-bold text-white leading-snug">
                Capacitar organizações com soluções inteligentes baseadas em IA e SIG para tomada de decisão eficiente e sustentável.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-10 rounded-2xl bg-brand-dark border border-brand-green/20">
              <h2 className="text-brand-green text-[.65rem] font-bold tracking-[.3em] uppercase mb-6">Nossa Visão</h2>
              <p className="font-poppins text-2xl font-bold text-white leading-snug">
                Ser a referência em África na integração de Inteligência Artificial, Data Analytics e Geotecnologias aplicadas ao impacto.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-[6%] py-32">
        <Reveal>
          <h2 className="font-poppins text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-20">
            Valores que nos <em className="italic text-brand-purple text-outline">guiam</em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group p-8 rounded-xl border border-slate-800 hover:border-brand-green/30 transition-all bg-slate-900/20">
                <div className="w-10 h-px bg-brand-purple mb-6 group-hover:w-full transition-all duration-500" />
                <h4 className="font-poppins text-lg font-bold text-white mb-3">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
