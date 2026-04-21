export type PortfolioRatio = "tall" | "wide" | "std";
export type PortfolioCategory = "aerial" | "commercial" | "events" | "realEstate";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  brief: string;
  category: PortfolioCategory;
  youtubeId: string;
  client?: string;
  year?: number;
  role?: string;
  ratio?: PortfolioRatio;
  label?: string;
  featured?: boolean;
}

export function getYoutubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export function getYoutubeFallbackThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "welcome-to-bihac",
    title: "Welcome to Bihać",
    brief: "Aerial promo for the Una river region — 4K aerial, on-location scout, color-graded master.",
    category: "commercial",
    youtubeId: "aDw0sJCvdSo",
    client: "USK Turizam",
    year: 2024,
    role: "Aerial production & post",
    ratio: "wide",
    label: "01 · UNA · GOLDEN HOUR",
    featured: true,
  },
  {
    id: "2",
    slug: "fk-zeljeznicar-100",
    title: "100 Years of FK Željezničar",
    brief: "Aerial event coverage celebrating a century of one of BiH's most storied football clubs.",
    category: "events",
    youtubeId: "iOIkCYF6lBw",
    client: "FK Željezničar",
    year: 2021,
    role: "Aerial unit & edit",
    ratio: "wide",
    label: "02 · GRBAVICA · NIGHT",
    featured: true,
  },
  {
    id: "3",
    slug: "livanjski-divlji-konji",
    title: "Livanjski divlji konji",
    brief: "Wild horses of the Livno plains, captured over three flight windows at sunrise and dusk.",
    category: "aerial",
    youtubeId: "olE-pKGibhU",
    client: "Self-produced",
    year: 2022,
    role: "Aerial cinematography",
    ratio: "std",
    label: "03 · LIVNO · SUNRISE",
    featured: true,
  },
  {
    id: "4",
    slug: "welcome-to-bosnia",
    title: "Welcome to Bosnia & Herzegovina",
    brief: "Destination promo showcasing the country's natural and cultural landmarks.",
    category: "commercial",
    youtubeId: "p0UG0Q-Rd4c",
    client: "Destination promo",
    year: 2023,
    role: "Aerial production",
    ratio: "std",
    label: "04 · BIH · CULTURAL",
  },
  {
    id: "5",
    slug: "zuta-tabija-ramazan",
    title: "Žuta Tabija — Ramazan in Sarajevo",
    brief: "4K aerial capture of Ramadan evening at Sarajevo's Yellow Fortress.",
    category: "events",
    youtubeId: "5ej96sgQED0",
    client: "TZ Kanton Sarajevo",
    year: 2023,
    role: "Aerial unit",
    ratio: "wide",
    label: "05 · ŽUTA TABIJA · IFTAR",
  },
  {
    id: "6",
    slug: "mojoj-dragoj-bih",
    title: "Mojoj dragoj BiH",
    brief: "A cinematic love letter to Bosnia & Herzegovina from the sky.",
    category: "aerial",
    youtubeId: "HkyzhcDuWB0",
    client: "Self-produced",
    year: 2022,
    role: "Aerial cinematography",
    ratio: "std",
    label: "06 · BIH · LOVE LETTER",
  },
  {
    id: "7",
    slug: "explore-bih",
    title: "Explore the Beauty of BiH",
    brief: "Drone footage exploring natural wonders across Bosnia & Herzegovina.",
    category: "aerial",
    youtubeId: "n0Rbn-BiHc0",
    client: "Self-produced",
    year: 2021,
    role: "Aerial cinematography",
    ratio: "std",
    label: "07 · EXPLORE · NATURE",
  },
  {
    id: "8",
    slug: "himna-iz-zraka",
    title: "Himna iz zraka",
    brief: "The BiH anthem accompanied by stunning 4K aerial footage.",
    category: "aerial",
    youtubeId: "MgRGXDqKTyQ",
    client: "Self-produced",
    year: 2020,
    role: "Aerial cinematography",
    ratio: "std",
    label: "08 · ANTHEM · 4K",
  },
];

export const featuredPortfolio = portfolioItems.filter((item) => item.featured);
