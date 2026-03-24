import Link from 'next/link'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar active="/" />
      
      <main className="relative min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex flex-col items-center justify-center px-[6%] text-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
          <div className="animate-orb absolute w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20 z-0"
               style={{ background: 'radial-gradient(circle, #7B2CBF 0%, transparent 70%)', top: '-10%', left: '10%' }} />
          <div className="animate-orb2 absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-10 z-0"
               style={{ background: 'radial-gradient(circle, #00F5D4 0%, transparent 70%)', bottom: '10%', right: '5%' }} />
          
          <div className="relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-green">Inovação Orientada a Impacto</span>
            </div>
            
            <h1 className="font-poppins font-extrabold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.02em' }}>
              NexoVibe — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Inteligência</span> em Dados e Espaço.
            </h1>
            
            <p className="font-inter text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 text-lg md:text-xl">
              Capacitamos organizações com soluções de IA, Análise de Dados e Geotecnologias para decisões eficientes e sustentáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/servicos"
                className="group relative inline-flex items-center gap-3 bg-brand-purple text-white text-sm font-bold tracking-widest uppercase
                  px-10 py-5 rounded-lg transition-all hover:bg-opacity-90 hover:scale-[1.02] shadow-lg shadow-brand-purple/20">
                Explorar Soluções
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="mailto:jubilio@nexovibe.co.mz"
                className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm text-slate-200 text-sm font-semibold tracking-widest uppercase
                  px-10 py-5 rounded-lg border border-slate-700 transition-all hover:border-brand-green hover:text-brand-green no-underline">
                Contactar Especialista
              </a>
            </div>
          </div>
          
          {/* Dashboard Preview Hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <div className="w-px h-12 bg-gradient-to-b from-brand-purple to-transparent" />
          </div>
        </section>

        {/* Mission / Value Prop */}
        <section className="py-24 px-[6%] bg-brand-dark/50 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-green text-sm font-bold tracking-[0.3em] uppercase mb-4">Nossa Missão</h2>
              <h3 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
                Transformamos Dados Complexos em Decisões Estratégicas.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A NexoVibe nasceu da necessidade de integrar inteligência artificial com análise geoespacial de alta precisão. Atuamos onde a tecnologia encontra a sustentabilidade.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-brand-purple font-bold text-2xl mb-1">+Infinitos</div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider">Dados Analisados</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-brand-green font-bold text-2xl mb-1">100%</div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider">Foco em África</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800 overflow-hidden">
                 <div className="flex gap-2 mb-6">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="space-y-4">
                   <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                   <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                   <div className="h-32 w-full bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
                      <span className="text-slate-600 font-mono text-xs">[Visualize Data Streams...]</span>
                   </div>
                   <div className="h-4 w-2/3 bg-slate-800 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Tech Pillars */}
        <section className="py-24 px-[6%]">
          <div className="text-center mb-16">
            <h2 className="text-brand-purple text-sm font-bold tracking-[0.3em] uppercase mb-4">O Que Fazemos</h2>
            <h3 className="text-4xl md:text-6xl font-poppins font-bold text-white">Soluções Integradas</h3>
          </div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Analytics & IA',
                desc: 'Modelos preditivos e dashboards inteligentes para transformar informação em insights accionáveis.',
                icon: '📊',
                color: 'brand-purple'
              },
              {
                title: 'Geotecnologias (SIG)',
                desc: 'Análise espacial de alta precisão para planeamento territorial, riscos naturais e logística.',
                icon: '🌍',
                color: 'brand-green'
              },
              {
                title: 'Automação MEAL',
                desc: 'Digitalização de processos de monitorização e avaliação para ONGs e sector público.',
                icon: '⚡',
                color: 'brand-blue'
              }
            ].map((svc, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.02]">
                <div className="text-4xl mb-6">{svc.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">{svc.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <Link href="/servicos" className="text-sm font-bold tracking-widest uppercase text-slate-500 group-hover:text-white transition-colors">
                  Saber Mais →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

