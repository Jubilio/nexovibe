import { shareMetadata } from "@/lib/share";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const inter = localFont({
  src: "../../../public/fonts/inter-latin-variable.woff2",
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
    "Recolha de dados de campo, mapas e dashboards de monitoria para ONGs, agências e equipas de investigação em Moçambique.",
  keywords: [
    "KoboToolbox",
    "XLSForm",
    "MEAL",
    "Dashboards de monitoria",
    "GIS",
    "SIG",
    "Data Analytics",
    "Moçambique",
    "NexoVibe",
    "Moçambique Tech",
    "Soluções tecnológicas",
  ],
  authors: [{ name: "NexoVibe" }],
  ...shareMetadata("/", "NexoVibe — Dados, GIS & Software",
    "Recolha de dados de campo, mapas e dashboards de monitoria para ONGs, agências e equipas de investigação em Moçambique.", "home"),
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
