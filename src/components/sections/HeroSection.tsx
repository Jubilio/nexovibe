'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconArrow } from '@/components/ui/Icons'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen grid place-items-center text-center px-[6%] pt-40 pb-24 overflow-hidden">
      {/* Orbs */}
      <div className="animate-orb  absolute w-[520px] h-[520px] rounded-full blur-[90px] pointer-events-none z-[1]"
           style={{ background: 'radial-gradient(circle, rgba(123,44,191,.14) 0%, transparent 70%)', top: '-100px', left: '-80px' }} />
      <div className="animate-orb2 absolute w-[400px] h-[400px] rounded-full blur-[90px] pointer-events-none z-[1]"
           style={{ background: 'radial-gradient(circle, rgba(0,245,212,.10) 0%, transparent 70%)', bottom: '0', right: '-60px' }} />
      <div className="animate-orb3 absolute w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none z-[1]"
           style={{ background: 'radial-gradient(circle, rgba(123,44,191,.06) 0%, transparent 70%)', top: '40%', left: '55%' }} />

      {/* Grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none grid-flow"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
             backgroundSize: '80px 80px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)',
           }} />

      <div className="scanline" />

      {/* Content */}
      <div className="relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="inline-flex items-center gap-3 mb-10 text-[.68rem] font-bold tracking-[.22em] uppercase text-slate-500"
        >
          <span className="w-8 h-px bg-brand-purple opacity-60" />
          Serviços Especializados · Data + IA + SIG
          <span className="w-8 h-px bg-brand-purple opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .1, ease: [.4,0,.2,1] }}
          className="font-poppins font-bold text-white leading-none mb-5 text-glow"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '-0.03em' }}
        >
          Soluções que<br />
          <em className="italic text-brand-green font-normal text-glow-green">Impulsionam</em> o seu<br />
          <span className="text-outline">Impacto</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .2 }}
          className="text-fog leading-relaxed max-w-[520px] mx-auto mt-8 mb-14"
          style={{ fontSize: 'clamp(.9rem, 1.5vw, 1.05rem)' }}
        >
          Software, Inteligência Artificial e Análise de Dados — cada projecto entregue com precisão e design premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#servicos"
            className="inline-flex items-center gap-3 bg-brand-purple text-white text-[.75rem] font-bold tracking-[.14em] uppercase
              px-9 py-4 rounded-lg transition-all duration-200 hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(123,44,191,.3)]">
            Explorar Soluções <IconArrow />
          </a>
          <a href="mailto:jubilio@nexovibe.co.mz"
            className="inline-flex items-center gap-3 bg-transparent text-slate-200 text-[.75rem] font-semibold tracking-[.12em] uppercase
              px-9 py-4 rounded-lg border border-slate-800 transition-all duration-200 hover:border-brand-green hover:text-brand-green no-underline">
            Contactar Especialista
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-[.62rem] tracking-[.18em] uppercase text-slate-500">
        <div className="w-px h-12 bg-gradient-to-b from-brand-purple to-transparent animate-scroll" />
        Scroll
      </div>
    </div>
  )
}
