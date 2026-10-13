import Image from "next/image";
import Link from "next/link";
export default function CommunitySection() {
  return <section className="section container community-highlight" aria-labelledby="community-heading">
    <div className="section-heading"><div><p className="eyebrow">FORMAÇÃO & COMUNIDADE</p><h2 id="community-heading">Ferramentas criadas.<br /><span className="muted-heading">Conhecimento partilhado.</span></h2></div><Link className="text-link" href="/formacao">Explorar formação e recursos ↗</Link></div>
    <div className="community-grid"><figure><Image src="/community/qgis-tools.webp" alt="Apresentação conjunta dos plugins GeoClick Capture e GPX Batch Converter." width={1735} height={906} sizes="(max-width: 850px) 100vw, 60vw" /><figcaption>Dois plugins próprios para desafios de GIS.</figcaption></figure>
      <div className="community-copy"><p>Da preparação de ficheiros GPS à verificação de localizações, desenvolvemos ferramentas e partilhamos os processos por trás de cada solução.</p><ul><li>GPX Batch Converter: conversão e união de ficheiros GPS.</li><li>GeoClick Capture: comparação de fontes e registo de evidências.</li><li>Formação documentada sobre desenvolvimento de plugins QGIS.</li></ul><div className="button-row"><Link className="button button-secondary" href="/portfolio/gpx-batch-converter">Conhecer o GPX ↗</Link><Link className="text-link" href="/portfolio/geoclick-capture">Conhecer o GeoClick ↗</Link></div></div>
    </div>
  </section>;
}
