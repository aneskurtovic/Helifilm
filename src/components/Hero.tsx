"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { basePath } from "@/lib/config";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Drone-descend on scroll: camera tilts forward and zooms as you leave the hero
  const videoRotateX = useTransform(scrollYProgress, [0, 0.7], [0, 18]);
  const videoScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.4]);
  const videoY = useTransform(scrollYProgress, [0, 0.7], [0, -80]);
  const { t } = useLanguage();

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Animated gradient fallback background — Bosnian blue tones */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-[#0a0f1a] to-[#D4A418]/10 animate-gradient" />
        {/* Floating particles — golden */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4A418]/30 rounded-full"
              style={{
                left: `${5 + (i * 47) % 90}%`,
                top: `${10 + (i * 31) % 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Grid lines for depth — blue tint */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(30,58,138,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Video Background — drone descend: starts level, tilts + zooms + lifts on scroll */}
      <div className="absolute inset-0" style={{ perspective: "800px" }}>
        <motion.div
          initial={{ rotateX: 12, scale: 1.3 }}
          animate={{ rotateX: 0, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            rotateX: videoRotateX,
            scale: videoScale,
            y: videoY,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={`${basePath}/videos/hero.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-[#0a0f1a]/30 to-[#0a0f1a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/40 via-transparent to-[#0a0f1a]/40" />
        </motion.div>
      </div>

      {/* Content — fades in after drone descend */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        {/* Bosnian lily / logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-[#D4A418]/50 flex items-center justify-center backdrop-blur-sm bg-[#1e3a8a]/10">
            {/* Stylized Bosnian lily / fleur-de-lis */}
            <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10">
              <path
                d="M50 10 C50 10 42 25 42 35 C42 42 46 46 50 48 C54 46 58 42 58 35 C58 25 50 10 50 10Z"
                fill="#D4A418"
                opacity="0.9"
              />
              <path
                d="M25 55 C25 55 35 42 42 40 C48 38 50 42 50 48 C46 52 40 54 35 52 C28 50 25 55 25 55Z"
                fill="#D4A418"
                opacity="0.9"
              />
              <path
                d="M75 55 C75 55 65 42 58 40 C52 38 50 42 50 48 C54 52 60 54 65 52 C72 50 75 55 75 55Z"
                fill="#D4A418"
                opacity="0.9"
              />
              <rect x="47" y="48" width="6" height="30" rx="3" fill="#D4A418" opacity="0.7" />
              <rect x="35" y="80" width="30" height="4" rx="2" fill="#D4A418" opacity="0.5" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider text-white mb-4"
        >
          HELI<span className="text-[#D4A418]">FILM</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4A418] to-transparent mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-2xl"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 border-2 border-[#D4A418] text-[#D4A418] rounded-full font-medium tracking-wide hover:bg-[#D4A418] hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          {t.hero.cta}
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            {t.hero.scrollDown}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-[#D4A418]/50 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-[#D4A418]/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
