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
    default: "Jubílio Maússe — GIS, Dados & Software | NexoVibe",
    template: "%s | NexoVibe",
  },
  description:
    "Portfólio de Jubílio Maússe: inteligência geoespacial, análise de dados e desenvolvimento de software. Conheça os projectos, ferramentas e investigações da NexoVibe.",
  keywords: [
    "IA",
    "GIS",
    "SIG",
    "Data Analytics",
    "Moçambique",
    "NexoVibe",
    "Moçambique Tech",
    "Jubílio Maússe",
  ],
  authors: [{ name: "NexoVibe" }, { name: "Jubílio Maússe" }],
  openGraph: {
    title: "Jubílio Maússe — GIS, Dados & Software | NexoVibe",
    description:
      "Portfólio de Jubílio Maússe: inteligência geoespacial, análise de dados e desenvolvimento de software. Conheça os projectos, ferramentas e investigações da NexoVibe.",
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
