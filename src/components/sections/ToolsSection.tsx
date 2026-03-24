'use client'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { tools } from '@/lib/data'

export default function ToolsSection() {
  return (
    <section className="py-28 px-[6%] bg-[#131620] relative z-[2]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[.68rem] font-bold tracking-[.22em] uppercase text-teal mb-3">
            <span className="w-6 h-px bg-teal" />Stack tecnológico
          </p>
        </Reveal>
        <Reveal delay={.1}>
          <h2 className="font-poppins text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-[1.1] mb-12">
            Tecnologia <em className="italic text-brand-green">de Ponta</em>
          </h2>
        </Reveal>

        <Reveal delay={.2}>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .4, delay: i * .03 }}
                whileHover={{ y: -2, color: '#00F5D4', borderColor: 'rgba(0,245,212,.3)', backgroundColor: 'rgba(0,245,212,.08)' }}
                className="text-[.72rem] font-bold tracking-[.1em] uppercase px-4 py-2 rounded-lg
                  bg-slate-900 border border-slate-800 text-slate-400 cursor-default transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
