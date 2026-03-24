import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexoVibe — Inteligência em Dados e SIG',
  description: 'Capacitando organizações com soluções inteligentes baseadas em IA, análise de dados e Geotecnologias em Moçambique.',
  keywords: ['IA', 'GIS', 'SIG', 'Data Analytics', 'Moçambique', 'NexoVibe', 'Moçambique Tech', 'Sentinel'],
  authors: [{ name: 'Jubílio Maússe' }],
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-MZ" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
