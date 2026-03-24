import Reveal from '@/components/ui/Reveal'
import { stats } from '@/lib/data'

export default function StatsBar() {
  return (
    <div className="flex justify-center border-t border-b border-slate-800 bg-[#020617] relative z-[2]">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * .1}
          className="flex-1 max-w-[220px] text-center px-6 py-10 border-r border-slate-800 last:border-r-0 transition-colors duration-200 hover:bg-brand-purple/[.02] cursor-default">
          <div className="font-poppins text-[2.2rem] font-bold text-brand-green leading-none mb-1">{s.num}</div>
          <div className="text-[.62rem] font-bold tracking-[.2em] uppercase text-slate-500">{s.label}</div>
        </Reveal>
      ))}
    </div>
  )
}
