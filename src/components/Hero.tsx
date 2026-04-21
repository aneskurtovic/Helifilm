"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import FlightPath from "@/components/hero/FlightPath";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-bg border-b border-line"
    >
      {/* Animated SVG backdrop — topographic flight path */}
      <FlightPath />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,.55) 0%, rgba(10,10,12,.15) 40%, rgba(10,10,12,.85) 100%)",
        }}
      />

      {/* Top telemetry rail */}
      <div className="hidden md:flex absolute top-24 left-0 right-0 justify-between pad-x mono text-[10px] tracking-[0.14em] text-fg-dim z-10">
        <div className="flex gap-6">
          <span>N 43.8563°</span>
          <span>E 18.4131°</span>
          <span>{t.hero.telemetry.loc}</span>
        </div>
        <div className="flex gap-6">
          <span>{t.hero.telemetry.reel}</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            {t.hero.telemetry.playing}
          </span>
        </div>
      </div>

      {/* Center composition */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] pad-x text-center pt-36 pb-28"
      >
        <div className="inline-flex items-center gap-3 mono text-[11px] tracking-[0.2em] uppercase text-fg-dim mb-8">
          <span className="w-12 h-px bg-line-2" />
          {t.hero.kicker}
          <span className="w-12 h-px bg-line-2" />
        </div>

        <h1
          className="display text-fg"
          style={{ fontSize: "clamp(64px, 12vw, 180px)", lineHeight: 0.92 }}
        >
          {t.hero.headlineA}
          <br />
          {t.hero.headlineB}{" "}
          <em className="italic text-accent">{t.hero.headlineC}</em>
        </h1>

        <p className="mt-8 max-w-[620px] text-[17px] leading-[1.55] text-fg-dim">
          {t.hero.subhead}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            onClick={(e) => go(e, "#work")}
            className="inline-flex items-center gap-2.5 rounded-full bg-accent text-bg px-6 py-3.5 text-[13px] uppercase tracking-[0.1em] font-medium transition-transform hover:-translate-y-0.5"
          >
            {t.hero.primaryCta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 2L11 7L3 12V2Z" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.1em] font-medium text-fg hover:bg-fg hover:text-bg transition-colors"
          >
            {t.hero.secondaryCta}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Bottom rail */}
      <div className="hidden md:flex absolute bottom-10 left-0 right-0 justify-between pad-x z-10 mono text-[10px]">
        <div>
          <span className="text-fg-mute tracking-[0.14em] mr-1.5">{t.hero.meta.shootLabel}</span>
          <span className="text-fg-dim tracking-[0.08em]">{t.hero.meta.shootValue}</span>
        </div>
        <div>
          <span className="text-fg-mute tracking-[0.14em] mr-1.5">{t.hero.meta.crewLabel}</span>
          <span className="text-fg-dim tracking-[0.08em]">{t.hero.meta.crewValue}</span>
        </div>
        <div>
          <span className="text-fg-mute tracking-[0.14em] mr-1.5">{t.hero.meta.formatLabel}</span>
          <span className="text-fg-dim tracking-[0.08em]">{t.hero.meta.formatValue}</span>
        </div>
      </div>
    </section>
  );
}
