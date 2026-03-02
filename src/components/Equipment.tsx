"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { equipment } from "@/data/equipment";

const droneIcons = [
  "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  "M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41",
  "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z",
];

export default function Equipment() {
  const { language, t } = useLanguage();

  return (
    <section id="equipment" className="relative py-24 lg:py-32 bg-[#111827]">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.equipment.title}
          </h2>
          <div className="h-1 w-16 bg-[#D4A418] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.equipment.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {equipment.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-[#1e3a8a]/20 hover:border-[#D4A418]/20 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-[#0d1525] to-[#0a0f1a]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 to-[#D4A418]/5" />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30,58,138,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.5) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4A418"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-16 h-16 mx-auto opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    >
                      <path d={droneIcons[i]} />
                    </svg>
                    <span className="text-white/15 text-xs tracking-[0.3em] uppercase mt-3 block">{item.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 text-xs font-medium text-[#D4A418] bg-[#D4A418]/10 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
