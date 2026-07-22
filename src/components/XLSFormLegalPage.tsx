import Link from 'next/link'

interface Section {
  titlePt: string
  titleEn: string
  bodyPt: React.ReactNode
  bodyEn: React.ReactNode
}

interface Props {
  titlePt: string
  titleEn: string
  introPt: string
  introEn: string
  sections: Section[]
}

export default function XLSFormLegalPage({ titlePt, titleEn, introPt, introEn, sections }: Props) {
  return (
    <main className="min-h-screen bg-brand-dark px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-emerald-300 hover:underline">← NexoVibe</Link>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">XLSForm AI Translator</p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">{titlePt}</h1>
          <p className="mt-2 text-xl text-white/70">{titleEn}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <p className="leading-7 text-white/85">{introPt}</p>
            <p className="leading-7 text-white/70">{introEn}</p>
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.titleEn} className="border-t border-white/10 pt-7">
                <h2 className="text-xl font-semibold">{section.titlePt}</h2>
                <h3 className="mt-1 text-base font-medium text-emerald-300">{section.titleEn}</h3>
                <div className="mt-4 grid gap-5 text-sm leading-7 text-white/80 md:grid-cols-2">
                  <div>{section.bodyPt}</div>
                  <div className="text-white/65">{section.bodyEn}</div>
                </div>
              </section>
            ))}
          </div>

          <nav className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7 text-sm">
            <Link className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10" href="/xlsform-translator/privacy">Privacy</Link>
            <Link className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10" href="/xlsform-translator/terms">Terms</Link>
            <Link className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10" href="/xlsform-translator/support">Support</Link>
            <Link className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10" href="/xlsform-translator/user-guide">User Guide</Link>
          </nav>

          <p className="mt-8 text-xs text-white/45">Last updated / Última actualização: 22 July 2026</p>
        </div>
      </div>
    </main>
  )
}
