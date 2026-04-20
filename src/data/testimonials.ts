export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; bs: string };
  company?: string;
  project?: string;
  photo?: string;
  logo?: string;
  quote: { en: string; bs: string };
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amir Kovačević",
    role: { en: "Film Director", bs: "Filmski reditelj" },
    quote: {
      en: "Helifilm delivered absolutely stunning aerial footage for our documentary. Their eye for cinematic composition from the air is unmatched. The quality exceeded our expectations.",
      bs: "Helifilm je isporučio apsolutno zapanjujuće aerijalne snimke za naš dokumentarac. Njihovo oko za kinematsku kompoziciju iz vazduha je nenadmašno. Kvalitet je premašio naša očekivanja.",
    },
  },
  {
    id: "2",
    name: "Lejla Hadžić",
    role: { en: "Real Estate Agency Owner", bs: "Vlasnica agencije za nekretnine" },
    quote: {
      en: "The aerial property tours from Helifilm transformed how we market luxury listings. Our clients are always impressed by the production quality.",
      bs: "Aerijalne ture nekretnina od Helifilma su transformisale način na koji promoviramo luksuzne nekretnine. Naši klijenti su uvijek impresionirani kvalitetom produkcije.",
    },
  },
  {
    id: "3",
    name: "Dino Mustafić",
    role: { en: "Tourism Board Director", bs: "Direktor turističke zajednice" },
    quote: {
      en: "Working with Helifilm on our tourism campaign was a fantastic experience. They captured Bosnia's landscapes in ways we never imagined possible. True professionals.",
      bs: "Rad sa Helifilmom na našoj turističkoj kampanji bio je fantastično iskustvo. Uhvatili su bosanske pejzaže na načine koje nikada nismo zamislili. Pravi profesionalci.",
    },
  },
];
