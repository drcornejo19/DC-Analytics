import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DC Analytics | Automatización e Inteligencia Artificial para Empresas",
    template: "%s | DC Analytics",
  },
  description:
    "Soluciones digitales a medida para automatizar procesos, organizar información y mejorar resultados en pequeñas y medianas empresas.",
  keywords: [
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "CRM a medida",
    "dashboards empresariales",
    "desarrollo de sistemas",
    "Buenos Aires",
  ],
  authors: [{ name: "David Cornejo" }],
  creator: "DC Analytics",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "DC Analytics",
    title: "DC Analytics | Automatización e Inteligencia Artificial para Empresas",
    description:
      "Automatizamos procesos, analizamos datos e impulsamos resultados con soluciones digitales a medida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Analytics",
    description: "Automatización e Inteligencia Artificial para Empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1420",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
