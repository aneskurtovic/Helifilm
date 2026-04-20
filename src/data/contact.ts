export const contactInfo = {
  email: "info@helifilm.ba",
  phone: "+387 61 288 221",
  phoneRaw: "38761288221",
  locationCityEn: "Sarajevo, Bosnia & Herzegovina",
  locationCityBs: "Sarajevo, Bosna i Hercegovina",
  whatsappUrl: (text: string) =>
    `https://wa.me/38761288221?text=${encodeURIComponent(text)}`,
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/hajrudin26" },
    { name: "YouTube", url: "https://www.youtube.com/user/HajrudinSuljic" },
    { name: "Facebook", url: "https://www.facebook.com/HelifilmProdukcija" },
    { name: "TikTok", url: "https://www.tiktok.com/@helifilm" },
  ] as const,
};
