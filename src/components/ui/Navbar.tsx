'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/',          label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre',     label: 'Sobre' },
]

export default function Navbar({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] transition-all duration-400 ${
      scrolled
        ? 'py-3.5 bg-brand-dark/90 backdrop-blur-xl border-b border-slate-800'
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <Link href="/" className="font-poppins text-xl font-bold tracking-[.1em] text-white no-underline flex items-center gap-2">
        <span className="w-8 h-8 rounded bg-gradient-to-br from-brand-purple to-brand-green flex items-center justify-center text-white text-xs">NV</span>
        NexoVibe
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-[0.7rem] font-bold tracking-widest uppercase no-underline transition-colors duration-200 relative group
                ${active === l.href ? 'text-brand-green' : 'text-slate-400 hover:text-white'}`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-brand-green transition-all duration-300
                ${active === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="mailto:jubilio@nexovibe.co.mz"
        className="text-[0.65rem] font-bold tracking-widest uppercase no-underline text-white bg-brand-purple px-6 py-2.5 rounded-lg transition-all hover:bg-opacity-80 hover:-translate-y-px shadow-lg shadow-brand-purple/20"
      >
        Projecto? →
      </a>
    </nav>
  )
}
