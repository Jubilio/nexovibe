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
  metadataBase: new URL("https://nexovibe.netlify.app"),
  title: {
    default: "NexoVibe — Dados, GIS & Software",
    template: "%s | NexoVibe",
  },
  description:
    "Análise de dados, inteligência geoespacial, software e segurança de IA para organizações e empresas. Soluções desenvolvidas em Moçambique.",
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
    title: "NexoVibe — Dados, GIS & Software",
    description:
      "Análise de dados, inteligência geoespacial, software e segurança de IA para organizações e empresas. Soluções desenvolvidas em Moçambique.",
    url: "https://nexovibe.netlify.app",
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
