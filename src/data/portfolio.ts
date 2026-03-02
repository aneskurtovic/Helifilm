export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "aerial" | "commercial" | "events" | "realEstate";
  youtubeId: string;
}

export function getYoutubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Mojoj dragoj BiH",
    description: "A cinematic love letter to Bosnia & Herzegovina from the sky.",
    category: "aerial",
    youtubeId: "HkyzhcDuWB0",
  },
  {
    id: "2",
    title: "Welcome to Bosnia and Herzegovina",
    description: "Official promo video showcasing the country's breathtaking landscapes.",
    category: "commercial",
    youtubeId: "p0UG0Q-Rd4c",
  },
  {
    id: "3",
    title: "Explore the Beauty of BiH",
    description: "Stunning drone footage exploring Bosnia & Herzegovina's natural wonders.",
    category: "aerial",
    youtubeId: "n0Rbn-BiHc0",
  },
  {
    id: "4",
    title: "Žuta Tabija — Ramazan u Sarajevu",
    description: "4K aerial capture of Ramadan evening at the iconic Yellow Fortress in Sarajevo.",
    category: "events",
    youtubeId: "5ej96sgQED0",
  },
  {
    id: "5",
    title: "Dragoj mojoj BiH — Himna iz zraka",
    description: "The anthem of Bosnia & Herzegovina accompanied by stunning 4K aerial footage.",
    category: "aerial",
    youtubeId: "MgRGXDqKTyQ",
  },
  {
    id: "6",
    title: "Welcome to Bihać",
    description: "Official promo video — aerial beauty of Bihać and the Una river region.",
    category: "commercial",
    youtubeId: "aDw0sJCvdSo",
  },
  {
    id: "7",
    title: "Livanjski divlji konji — Wild Horses",
    description: "Breathtaking drone footage of wild horses roaming the Livno plains.",
    category: "aerial",
    youtubeId: "olE-pKGibhU",
  },
  {
    id: "8",
    title: "100 Godina FK Željezničar",
    description: "Aerial event coverage celebrating 100 years of FK Željezničar.",
    category: "events",
    youtubeId: "iOIkCYF6lBw",
  },
];
