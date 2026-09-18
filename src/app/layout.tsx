import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexoVibe — Inteligência em Dados, GIS & Software",
    template: "%s | NexoVibe",
  },
  description:
    "A NexoVibe desenvolve soluções de inteligência geoespacial, análise de dados e software para apoiar decisões e simplificar processos nas organizações.",
  keywords: [
    "IA",
    "GIS",
    "SIG",
    "Data Analytics",
    "Moçambique",
    "NexoVibe",
    "Moçambique Tech",
    "Soluções tecnológicas",
  ],
  authors: [{ name: "NexoVibe" }],
  openGraph: {
    title: "NexoVibe — Inteligência em Dados, GIS & Software",
    description:
      "A NexoVibe desenvolve soluções de inteligência geoespacial, análise de dados e software para apoiar decisões e simplificar processos nas organizações.",
    url: "https://nexovibe.co.mz",
    siteName: "NexoVibe",
    locale: "pt_MZ",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ" className={`${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
