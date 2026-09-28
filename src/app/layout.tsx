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
    default: "NexoVibe — Segurança de IA, Dados & WebGIS",
    template: "%s | NexoVibe",
  },
  description:
    "Avaliações de segurança de aplicações de IA, pentest Web e API e revisão de segurança de dados e WebGIS. Evidências claras e apoio à correcção.",
  keywords: [
    "AI Security",
    "Pentest Web e API",
    "Segurança WebGIS",
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
    title: "NexoVibe — Segurança de IA, Dados & WebGIS",
    description:
      "Avaliações de segurança de aplicações de IA, pentest Web e API e revisão de segurança de dados e WebGIS. Evidências claras e apoio à correcção.",
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
