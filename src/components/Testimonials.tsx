"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    name: "Amir Kovačević",
    role: { en: "Film Director", bs: "Filmski Reditelj" },
    quote: {
      en: "Helifilm delivered absolutely stunning aerial footage for our documentary. Their eye for cinematic composition from the air is unmatched. The quality exceeded our expectations.",
      bs: "Helifilm je isporučio apsolutno zapanjujuće aerijalne snimke za naš dokumentarac. Njihovo oko za kinematsku kompoziciju iz vazduha je nenadmašno. Kvalitet je premašio naša očekivanja.",
    },
  },
  {
    name: "Lejla Hadžić",
    role: { en: "Real Estate Agency Owner", bs: "Vlasnica Agencije za Nekretnine" },
    quote: {
      en: "The aerial property tours from Helifilm transformed how we market luxury listings. Our clients are always impressed by the production quality. Highly recommended!",
      bs: "Aerijalne ture nekretnina od Helifilma su transformisale način na koji promoviramo luksuzne nekretnine. Naši klijenti su uvijek impresionirani kvalitetom produkcije. Toplo preporučujemo!",
    },
  },
  {
    name: "Dino Mustafić",
    role: { en: "Tourism Board Director", bs: "Direktor Turističke Zajednice" },
    quote: {
      en: "Working with Helifilm on our tourism campaign was a fantastic experience. They captured Bosnia's landscapes in ways we never imagined possible. True professionals.",
      bs: "Rad sa Helifilmom na našoj turističkoj kampanji bio je fantastično iskustvo. Uhvatili su bosanske pejzaže na načine koje nikada nismo zamislili. Pravi profesionalci.",
    },
  },
];

export default function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#0a0f1a] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4A418]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <div className="h-1 w-16 bg-[#D4A418] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-[#1e3a8a]/20 hover:border-[#D4A418]/20 transition-all duration-300 relative"
            >
              <div className="text-6xl text-[#D4A418]/20 font-serif absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10 pt-6">
                {testimonial.quote[language]}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A418] to-[#1e3a8a] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role[language]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
