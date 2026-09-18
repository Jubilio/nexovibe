import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          JUBÍLIO MAÚSSE · NEXOVIBE
        </p>
        <h1 id="hero-title">
          Entre dados
          <br />e território,
          <br />
          <span>crio soluções.</span>
        </h1>
        <p className="hero-description">
          Sou especialista em SIG e análise de dados. Desenvolvo ferramentas que
          ligam informação, pessoas e decisões — de Moçambique para o mundo.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/portfolio">
            Explorar projectos <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/sobre" className="button button-quiet">
            Conhecer o meu percurso <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-signature">
          <Image
            src="/jubilio.jpg"
            width={40}
            height={40}
            alt=""
            className="signature-photo"
          />
          <div>
            <strong>Jubílio Filiano Maússe</strong>
            <span>GIS · Data Analytics · Software</span>
          </div>
        </div>
      </div>
      <div className="orbital-panel" aria-hidden="true">
        <div className="orbital-top">
          <span>NEXOVIBE / EXPLORATIONS</span>
          <span>01 — 03</span>
        </div>
        <div className="orbital-grid" />
        <svg className="orbital-art" viewBox="0 0 560 560" fill="none">
          <defs>
            <radialGradient id="orb-glow">
              <stop stopColor="#72ebc6" stopOpacity=".18" />
              <stop offset="1" stopColor="#72ebc6" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="orb-line"
              x1="100"
              y1="80"
              x2="480"
              y2="490"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#89f3d1" />
              <stop offset=".5" stopColor="#297d72" />
              <stop offset="1" stopColor="#89f3d1" stopOpacity=".1" />
            </linearGradient>
          </defs>
          <circle cx="280" cy="280" r="260" fill="url(#orb-glow)" />
          <g stroke="#85e8cd" strokeOpacity=".1">
            <path d="M280 20v520M20 280h520" />
            <circle cx="280" cy="280" r="239" strokeDasharray="2 10" />
            <circle cx="280" cy="280" r="181" />
          </g>
          <g className="orbit-rotation" stroke="url(#orb-line)" strokeWidth="1">
            <ellipse
              cx="280"
              cy="280"
              rx="198"
              ry="79"
              transform="rotate(-38 280 280)"
            />
            <ellipse
              cx="280"
              cy="280"
              rx="198"
              ry="79"
              transform="rotate(22 280 280)"
            />
            <ellipse
              cx="280"
              cy="280"
              rx="198"
              ry="79"
              transform="rotate(82 280 280)"
            />
            <circle cx="119" cy="391" r="5" fill="#8cf4d3" stroke="none" />
            <circle cx="438" cy="343" r="4" fill="#8cf4d3" stroke="none" />
          </g>
          <circle
            cx="280"
            cy="280"
            r="66"
            fill="#0b1e1e"
            stroke="#70dfbd"
            strokeOpacity=".4"
          />
          <path d="M257 304v-48l46 48v-48" stroke="#b7ffe7" strokeWidth="3" />
          <path d="M295 247h18v18" stroke="#b7ffe7" strokeWidth="3" />
        </svg>
        <div className="orbit-label label-data">
          <span>01</span> Dados
        </div>
        <div className="orbit-label label-space">
          <span>02</span> Território
        </div>
        <div className="orbit-label label-code">
          <span>03</span> Código
        </div>
        <div className="orbital-bottom">
          <span>DA ANÁLISE À APLICAÇÃO</span>
          <span>MOZ ↗</span>
        </div>
      </div>
      <div className="hero-baseline">
        <span>TECNOLOGIA COM CONTEXTO. SOLUÇÕES COM PROPÓSITO.</span>
        <a href="#projectos">
          Conheça o trabalho <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
