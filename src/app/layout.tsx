import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { basePath } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Helifilm Produkcija — Aerial Cinematography & Video Production",
  description:
    "Professional drone videography and aerial cinematography in Sarajevo, Bosnia. Cinematic filming for film, real estate, events since 2013.",
  icons: {
    icon: [
      { url: `${bp}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${bp}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${bp}/apple-touch-icon.png`,
  },
  manifest: `${bp}/site.webmanifest`,
  keywords: [
    "drone videography",
    "aerial cinematography",
    "Sarajevo",
    "Bosnia",
    "Helifilm",
    "drone filming",
    "video production",
    "dron snimanje",
    "aerijalna kinematografija",
    "snimanje dronom Sarajevo",
  ],
  metadataBase: new URL("https://www.helifilm.ba"),
  openGraph: {
    title: "Helifilm Produkcija — Aerial Cinematography & Video Production",
    description:
      "Professional drone videography and aerial cinematography in Sarajevo, Bosnia.",
    type: "website",
    url: "https://www.helifilm.ba",
    siteName: "Helifilm Produkcija",
    locale: "en_US",
    alternateLocale: "bs_BA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helifilm Produkcija — Aerial Cinematography",
    description: "Professional drone videography based in Sarajevo, Bosnia & Herzegovina.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.helifilm.ba",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href={`${basePath}/images/hero-poster.jpg`} as="image" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-[#0a0f1a] text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
