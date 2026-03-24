import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 px-[6%] py-12
      flex flex-col md:flex-row items-center justify-between gap-6
      text-[0.7rem] tracking-wider text-slate-500 relative z-[2]">
      <span className="font-poppins text-lg font-bold tracking-tighter text-white">NexoVibe</span>
      <span>© 2026 <Link href="/" className="text-brand-green no-underline hover:text-brand-green/80">NexoVibe Intelligence</Link>. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/jubilio-mausse/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors no-underline">LinkedIn</a>
        <a href="https://github.com/Jubilio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors no-underline">GitHub</a>
      </div>
    </footer>
  )
}
