import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Helifilm Produkcija — Aerial Production for Balkan Film, Tourism & Property",
  description:
    "Sarajevo-based aerial cinematography studio, shooting across the Balkans since 2013. Film-rated drone kit, licensed operators, broadcast-grade delivery.",
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
    "aerial production Balkans",
    "film TV drone operator",
    "tourism video Bosnia",
    "aerial real estate",
    "snimanje dronom Sarajevo",
    "aerijalna kinematografija",
  ],
  metadataBase: new URL("https://www.helifilm.ba"),
  openGraph: {
    title: "Helifilm Produkcija — Aerial Production for Balkan Film, Tourism & Property",
    description:
      "Sarajevo-based aerial cinematography studio. Film-rated kit. Shooting across the Balkans since 2013.",
    type: "website",
    url: "https://www.helifilm.ba",
    siteName: "Helifilm Produkcija",
    locale: "en_US",
    alternateLocale: "bs_BA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helifilm Produkcija — Aerial Cinematography",
    description: "Aerial production for Balkan film, tourism, and property.",
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
      <body className={`${interTight.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} font-sans antialiased bg-[#0a0a0c] text-white`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
