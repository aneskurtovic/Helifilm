"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  portfolioItems,
  getYoutubeThumbnail,
  getYoutubeFallbackThumbnail,
  PortfolioCategory,
} from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

type FilterKey = "all" | PortfolioCategory;
type LightboxState = { id: string; title: string } | null;

function PortfolioThumb({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [src, setSrc] = useState(getYoutubeThumbnail(youtubeId));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      onError={() => setSrc(getYoutubeFallbackThumbnail(youtubeId))}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
    />
  );
}

const filterOrder: FilterKey[] = [
  "all",
  "aerial",
  "commercial",
  "events",
  "realEstate",
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const shown =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  const videoSchemas = portfolioItems.map((item) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: item.title,
    description: item.brief,
    thumbnailUrl: getYoutubeThumbnail(item.youtubeId),
    contentUrl: `https://www.youtube.com/watch?v=${item.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${item.youtubeId}`,
    uploadDate: item.year ? `${item.year}-01-01` : "2023-01-01",
  }));

  const ratioClass = (r: string | undefined) => {
    if (r === "tall") return "md:col-span-6 lg:col-span-5 lg:row-span-2";
    if (r === "wide") return "md:col-span-12 lg:col-span-7";
    return "md:col-span-6";
  };

  const ratioAspect = (r: string | undefined) => {
    if (r === "tall") return "aspect-[4/5]";
    return "aspect-[16/10]";
  };

  return (
    <section id="work" className="relative border-b border-line bg-bg-2 pb-[120px]">
      <SectionHeader
        eyebrow={t.portfolio.eyebrow}
        title={
          <>
            {t.portfolio.title}
            <br />
            <em className="italic text-accent">{t.portfolio.titleEm}</em>
            {t.portfolio.titleRest ? ` ${t.portfolio.titleRest}` : ""}
          </>
        }
        subtitle={t.portfolio.subtitle}
        right={
          <div className="flex flex-wrap gap-2 mt-8">
            {filterOrder.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-[18px] py-3 min-h-[44px] rounded-full border mono text-[11px] tracking-[0.1em] uppercase transition-colors cursor-pointer ${
                  filter === f
                    ? "bg-accent text-bg border-accent"
                    : "border-line-2 text-fg-dim hover:text-fg hover:border-fg-dim"
                }`}
              >
                {t.portfolio.filters[f]}
              </button>
            ))}
          </div>
        }
      />

      <div className="section-frame pad-x grid grid-cols-1 md:grid-cols-12 gap-6">
        {shown.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setLightbox({ id: item.youtubeId, title: item.title })}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex flex-col gap-4 text-left hover:-translate-y-1 transition-transform duration-500 ${ratioClass(item.ratio)}`}
            aria-label={`Play ${item.title}`}
          >
            <div className={`relative overflow-hidden ${ratioAspect(item.ratio)} ${item.ratio === "tall" ? "h-full" : ""} bg-bg-3`}>
              <PortfolioThumb youtubeId={item.youtubeId} title={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {item.label && (
                <div className="absolute top-4 left-4 mono text-[10px] tracking-[0.2em] uppercase text-white/70">
                  {item.label}
                </div>
              )}

              <div
                className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-accent text-bg flex items-center justify-center opacity-70 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M5 3L14 9L5 15V3Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex items-start justify-between gap-5 pt-4 border-t border-line">
              <div className="flex flex-col gap-1">
                <span className="mono text-[10px] tracking-[0.14em] text-fg-mute">
                  № {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="display text-fg group-hover:text-accent transition-colors"
                  style={{ fontSize: 24, lineHeight: 1.1 }}
                >
                  {item.title}
                </h3>
                {(item.client || item.role) && (
                  <span className="mono text-[11px] tracking-[0.08em] text-fg-dim">
                    {item.client}
                    {item.client && item.role ? " — " : ""}
                    {item.role}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-3 shrink-0">
                {item.year && (
                  <span className="mono text-[11px] text-fg-dim">
                    {item.year}
                  </span>
                )}
                <span className="text-fg-dim group-hover:text-accent transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="section-frame pad-x mt-16 flex justify-center">
        <a
          href="https://www.youtube.com/user/HajrudinSuljic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-3 mono text-[11px] uppercase tracking-[0.14em] text-fg-dim hover:text-fg hover:border-fg-dim transition-colors"
        >
          {t.portfolio.viewAll}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl aspect-video overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${lightbox.id}?autoplay=1&vq=hd1080&rel=0`}
                title={`Play: ${lightbox.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/75 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {videoSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </section>
  );
}
