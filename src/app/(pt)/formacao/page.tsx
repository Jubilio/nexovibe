import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { localeAlternates } from "@/lib/locale";
import { shareMetadata } from "@/lib/share";
export const metadata: Metadata = {
  title: "Formação e comunidade",
  description: "Formação em plugins QGIS, apresentação técnica e recursos partilhados por Jubílio Maússe.",
  alternates: localeAlternates("/formacao"),
  ...shareMetadata("/formacao", "Formação e comunidade | NexoVibe", "Plugins QGIS: ferramentas desenvolvidas, conhecimento partilhado e recursos para aprender.", "training"),
};
export default function TrainingPage() {
  return <><Navbar active="/formacao" /><main id="main-content" className="container interior-page training-page">
    <header className="page-heading"><p className="eyebrow">FORMAÇÃO & COMUNIDADE</p><h1>Aprender, construir<br /><span>e partilhar.</span></h1><div className="page-intro"><p>Recursos e registos de uma sessão sobre desenvolvimento de plugins QGIS com Python, apresentados por Jubílio Maússe no âmbito de uma formação OpenStreetMap Ghana.</p></div></header>
    <section className="training-overview" aria-labelledby="training-title"><div><p className="eyebrow">ACTIVIDADE PASSADA · 21 AGOSTO 2026</p><h2 id="training-title">Introduction to QGIS Plugins</h2><p>Dos problemas operacionais à criação de ferramentas: estrutura de plugins, processamento em segundo plano, documentação e exemplos com GPX Batch Converter e GeoClick Capture.</p>
      <dl className="report-facts"><div><dt>Apresentador</dt><dd>Jubílio Maússe</dd></div><div><dt>Contexto</dt><dd>OpenStreetMap Ghana Training</dd></div><div><dt>Data indicada nos materiais</dt><dd><time dateTime="2026-08-21">21 de Agosto de 2026</time></dd></div><div><dt>Recursos</dt><dd>Apresentação de 14 páginas e manual técnico</dd></div></dl>
      <div className="button-row"><a className="button button-primary" href="/resources/qgis-plugin-training-2026-08-21.pdf" download>Descarregar apresentação · PDF ↧</a><a className="text-link" href="https://jubilio.github.io/qgis-plugin-development-manual/" target="_blank" rel="noopener noreferrer">Consultar manual ↗</a></div><p className="form-note">Apresentação original em inglês, de Agosto de 2026. As versões, compatibilidades e contagens apresentadas são históricas; consulte a documentação actual dos plugins.</p>
    </div><figure><a href="/community/training-poster.webp" target="_blank" rel="noopener noreferrer"><Image src="/community/training-poster.webp" alt="Cartaz da formação OpenStreetMap Ghana com Jubílio Maússe, anunciada para 21 de Agosto de 2026." width={2048} height={2048} sizes="(max-width: 850px) 100vw, 35vw" priority /></a><figcaption>Cartaz original da actividade. Inscrições encerradas.</figcaption></figure></section>
    <section className="section" aria-labelledby="session-heading"><p className="eyebrow">REGISTOS & MATERIAIS</p><h2 id="session-heading">A sessão e o conhecimento por trás.</h2><div className="training-gallery">
      <figure><a href="/community/training-session.webp" target="_blank" rel="noopener noreferrer"><Image src="/community/training-session.webp" alt="Captura da sessão online com Jubílio Maússe a apresentar o caso GPX Batch Converter." width={909} height={581} sizes="(max-width: 850px) 100vw, 60vw" /></a><figcaption>Registo da sessão: o problema e a solução GPX Batch Converter.</figcaption></figure>
      <figure><a href="/community/speaker-profile.webp" target="_blank" rel="noopener noreferrer"><Image src="/community/speaker-profile.webp" alt="Perfil de Jubílio Maússe publicado nos materiais da formação OpenStreetMap Ghana." width={1280} height={1280} sizes="(max-width: 850px) 100vw, 35vw" /></a><figcaption>Perfil do apresentador nos materiais originais da formação.</figcaption></figure>
    </div></section>
    <section className="training-resources"><h2>Continue a explorar.</h2><div className="button-row"><Link className="button button-secondary" href="/portfolio/gpx-batch-converter">Estudo de caso GPX ↗</Link><Link className="button button-secondary" href="/portfolio/geoclick-capture">Estudo de caso GeoClick ↗</Link><Link className="text-link" href="/#contacto">Conversar sobre formação ↗</Link></div></section>
  </main><Footer /></>;
}
