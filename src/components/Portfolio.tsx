"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioItems, getYoutubeThumbnail } from "@/data/portfolio";

type FilterCategory = "all" | "aerial" | "commercial" | "events" | "realEstate";

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });
  // Drone flyover: grid slightly shifts perspective as you scroll
  const gridRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);
  const gridY = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t.portfolio.filters.all },
    { key: "aerial", label: t.portfolio.filters.aerial },
    { key: "commercial", label: t.portfolio.filters.commercial },
    { key: "events", label: t.portfolio.filters.events },
    { key: "realEstate", label: t.portfolio.filters.realEstate },
  ];

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#0a0f1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.portfolio.title}
          </h2>
          <div className="h-1 w-16 bg-[#D4A418] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-[#111827] border border-[#1e3a8a]/20">
            <iframe
              src="https://www.youtube.com/embed/HkyzhcDuWB0"
              title="Helifilm Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">{t.portfolio.showreel}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[#D4A418] text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-[#1e3a8a]/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid — drone flyover perspective */}
        <motion.div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          style={{
            perspective: 1200,
            rotateX: gridRotateX,
            y: gridY,
            transformOrigin: "center top",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setLightbox(item.youtubeId)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111827] border border-[#1e3a8a]/20">
                  <img
                    src={getYoutubeThumbnail(item.youtubeId)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#D4A418]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-medium mt-3 group-hover:text-[#D4A418] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/user/HajrudinSuljic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white rounded-full font-medium hover:bg-[#D4A418]/10 hover:text-[#D4A418] border border-[#1e3a8a]/20 hover:border-[#D4A418]/30 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
            {t.portfolio.viewAll}
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${lightbox}?autoplay=1`}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 text-2xl transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
