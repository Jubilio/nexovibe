import { shareMetadata } from "@/lib/share";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Background3D from "@/components/ui/Background3D";
import Analytics from "@/components/ui/Analytics";
import MobileCta from "@/components/ui/MobileCta";
import JsonLd from "@/components/ui/JsonLd";
import { contactEmail, contactPhone } from "@/lib/contact";
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
      <body className="antialiased">
        <Background3D />
        {children}
        <MobileCta />
        <Analytics />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://nexovibe.netlify.app/#organizacao",
              name: "NexoVibe",
              url: "https://nexovibe.netlify.app/",
              logo: "https://nexovibe.netlify.app/icon.png",
              image: "https://nexovibe.netlify.app/social/pt/home.png",
              description: "Recolha de dados de campo, mapas e dashboards de monitoria para ONGs, agências e equipas de investigação em Moçambique.",
              email: contactEmail,
              telephone: contactPhone.replace(/\s/g, ""),
              areaServed: { "@type": "Country", name: "Moçambique" },
              knowsAbout: ["KoboToolbox", "XLSForm", "QGIS", "GIS", "MEAL", "Dashboards de monitoria"],
              founder: { "@type": "Person", name: "Jubílio Maússe", sameAs: ["https://www.linkedin.com/in/jubilio-mausse/", "https://github.com/Jubilio"] },
              sameAs: ["https://github.com/Jubilio"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recolha de dados de campo", description: "Questionários KoboToolbox prontos para o terreno, em várias línguas, e respostas validadas antes da análise." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mapas & análise territorial", description: "Saber onde estão as pessoas, os riscos e as intervenções, com localizações verificadas e mapas prontos a partilhar." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards & relatórios de monitoria", description: "Indicadores do programa actualizados e relatórios que gestores e doadores conseguem ler." } },
                ],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://nexovibe.netlify.app/#site",
              url: "https://nexovibe.netlify.app/",
              name: "NexoVibe",
              inLanguage: "pt-MZ",
              publisher: { "@id": "https://nexovibe.netlify.app/#organizacao" },
            },
          ],
        }} />
      </body>
    </html>
  );
}
