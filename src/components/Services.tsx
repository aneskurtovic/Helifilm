"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#111827]">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <div className="h-1 w-16 bg-[#D4A418] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const content = t.services.items[service.translationKey];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-[#1e3a8a]/20 hover:border-[#D4A418]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4A418]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A418]/20 transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A418"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4A418] transition-colors duration-300">
                  {content.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{content.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
