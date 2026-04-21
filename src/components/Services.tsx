"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./ui/SectionHeader";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const capabilityImages: Record<number, string> = {
  0: `${bp}/images/Capabilities/aerial-cinematography.webp`,
  1: `${bp}/images/Capabilities/tourism-destination.webp`,
  2: `${bp}/images/Capabilities/real-estate-property.webp`,
  3: `${bp}/images/Capabilities/commercial-brand.webp`,
  4: `${bp}/images/Capabilities/event-coverage.webp`,
  5: `${bp}/images/Capabilities/post-production.webp`,
};

export default function Services() {
  const { t } = useLanguage();
  const items = t.services.items;

  return (
    <section id="services" className="relative border-b border-line bg-bg pb-[120px]">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={
          <>
            {t.services.title}
            <br />
            <em className="italic text-accent">{t.services.titleEm}</em>
            {t.services.titleRest ? ` ${t.services.titleRest}` : ""}
          </>
        }
        subtitle={t.services.subtitle}
      />

      <div className="section-frame pad-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
        {items.map((s, i) => (
          <motion.article
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col border-t border-line hover:border-accent transition-colors pt-5"
          >
            <div
              className="relative aspect-[3/2] mb-6 bg-bg-3 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
              style={
                !capabilityImages[i]
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg, rgba(212,164,24,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    }
                  : undefined
              }
            >
              {capabilityImages[i] ? (
                <Image
                  src={capabilityImages[i]}
                  alt={s.t}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                  draggable={false}
                  priority={i < 2}
                />
              ) : null}
              <div className="absolute inset-0 flex items-end justify-between pad-x py-4 mono text-[9px] tracking-[0.2em] uppercase text-fg-mute">
                <span>Fig. {s.n}</span>
                <span>{s.label}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3 mono text-[10px] text-fg-mute tracking-[0.2em]">
              <span>{s.n}</span>
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </div>
            <h3
              className="display text-fg mb-3"
              style={{ fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.01em" }}
            >
              {s.t}
            </h3>
            <p className="text-[15px] leading-[1.55] text-fg-dim mb-5 flex-1">
              {s.d}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono text-[10px] tracking-[0.06em] text-fg-dim border border-line-2 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
