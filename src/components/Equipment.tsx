"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { equipment } from "@/data/equipment";
import { basePath } from "@/lib/config";

export default function Equipment() {
  const { language, t } = useLanguage();

  return (
    <section id="equipment" className="relative py-24 lg:py-32 bg-[#111827] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
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
              <div className="aspect-[16/9] relative overflow-hidden bg-[#0a0f1a]">
                <Image
                  src={`${basePath}${item.image}`}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
