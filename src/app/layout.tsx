import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'NexoVibe — Inteligência em Dados e SIG',
  description: 'Capacitando organizações com soluções inteligentes baseadas em IA, análise de dados e Geotecnologias em Moçambique.',
  keywords: ['IA', 'GIS', 'SIG', 'Data Analytics', 'Moçambique', 'NexoVibe', 'Moçambique Tech', 'Sentinel'],
  authors: [{ name: 'NexoVibe' }, { name: 'Jubílio Maússe' }],
  openGraph: {
    title: 'NexoVibe — Inteligência em Dados e SIG',
    description: 'Capacitando organizações com soluções inteligentes baseadas em IA, análise de dados e Geotecnologias em Moçambique.',
    url: 'https://nexovibe.co.mz',
    siteName: 'NexoVibe',
    locale: 'pt_MZ',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-MZ" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
