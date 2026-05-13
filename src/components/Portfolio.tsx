"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  portfolioItems,
  getYoutubeThumbnail,
  getYoutubeFallbackThumbnail,
} from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

type LightboxState = { id: string; title: string } | null;

const MOSAIC: Array<{ aspect: string; span: string }> = [
  { aspect: "aspect-[21/9]", span: "md:col-span-12" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
  { aspect: "aspect-[16/9]", span: "md:col-span-6" },
  { aspect: "aspect-[16/9]", span: "md:col-span-6" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
  { aspect: "aspect-[16/10]", span: "md:col-span-4" },
];

function PortfolioThumb({
  youtubeId,
  title,
  eager,
}: {
  youtubeId: string;
  title: string;
  eager: boolean;
}) {
  // Hero uses maxres for sharpness at full width; grid slots use hqdefault
  // (480x360, ~25KB) since they render at <=400px on screen anyway. Cuts ~1.3MB
  // of image weight across the visible mosaic.
  const initial = eager
    ? getYoutubeThumbnail(youtubeId)
    : getYoutubeFallbackThumbnail(youtubeId);
  const [src, setSrc] = useState(initial);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      loading={eager ? "eager" : "lazy"}
      onError={() => setSrc(getYoutubeFallbackThumbnail(youtubeId))}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const shown = portfolioItems.slice(0, MOSAIC.length);

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
      />

      <div className="section-frame pad-x grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-x-6 md:gap-y-12">
        {shown.map((item, i) => {
          const slot = MOSAIC[i];
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setLightbox({ id: item.youtubeId, title: item.title })}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col text-left hover:-translate-y-1 transition-transform duration-500 ${slot.span}`}
              aria-label={`Play ${item.title}`}
            >
              <div className={`relative overflow-hidden ${slot.aspect} bg-bg-3`}>
                <PortfolioThumb youtubeId={item.youtubeId} title={item.title} eager={i === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div
                  className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M5 3L14 9L5 15V3Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="pt-5">
                <h3
                  className="display text-fg group-hover:text-accent transition-colors"
                  style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <div className="mono text-[10px] tracking-[0.18em] uppercase text-fg-mute mt-2">
                  {item.year ? `${item.year} · ` : ""}{item.category}
                </div>
              </div>
            </motion.button>
          );
        })}
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
              className="w-full max-w-[min(95vw,1600px)] max-h-[90vh] aspect-video overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${lightbox.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
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
