import Reveal from '@/components/ui/Reveal'
import { getIcon } from '@/components/ui/Icons'
import { steps } from '@/lib/data'

export default function ProcessSection() {
  return (
    <section className="py-28 px-[6%] relative z-[2]"
      style={{ background: 'linear-gradient(180deg, #08090c 0%, #0e1018 100%)' }}>
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[.68rem] font-bold tracking-[.22em] uppercase text-teal mb-3">
            <span className="w-6 h-px bg-teal" />Como trabalhamos
          </p>
        </Reveal>
        <Reveal delay={.1}>
          <h2 className="font-poppins text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-[1.1] mb-14">
            Processo <em className="italic text-brand-purple">transparente</em>, entrega precisa
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/[.07]">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * .1}>
               <div className={`relative p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[.035] border-b lg:border-b-0
                ${i < steps.length - 1 ? 'lg:border-r border-white/[.07]' : ''}`}>
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <span className="hidden lg:flex absolute top-1/2 -right-px -translate-y-1/2 w-6 h-6 text-[.7rem]
                    items-center justify-center bg-[#08090c] text-fog z-10">→</span>
                )}
                <div className="font-poppins text-[4rem] font-bold leading-none text-brand-purple/10 mb-5">
                  {step.num}
                </div>
                <div className="text-brand-green mb-4">{getIcon(step.icon)}</div>
                <h4 className="text-[.82rem] font-bold tracking-[.1em] uppercase text-white mb-3">{step.title}</h4>
                <p className="text-[.8rem] text-fog leading-[1.75]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
