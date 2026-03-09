"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { basePath } from "@/lib/config";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  });

  const contentOpacity = useTransform(smoothedProgress, [0, 0.58], [1, 0]);
  const contentY = useTransform(smoothedProgress, [0, 0.9], [0, 96]);
  const mediaScale = useTransform(smoothedProgress, [0, 1], [1, 1.08]);
  const mediaY = useTransform(smoothedProgress, [0, 1], [0, 72]);
  const overlayOpacity = useTransform(smoothedProgress, [0, 0.75], [0.28, 0.62]);
  const { t } = useLanguage();
  const canAnimate = !prefersReducedMotion;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#04070d]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#04070d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.42),_transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,_rgba(212,164,24,0.18),_transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f] via-[#05070c] to-[#04070d]" />
        <div className="absolute inset-0 animate-gradient bg-[linear-gradient(135deg,rgba(30,58,138,0.14),transparent_34%,rgba(212,164,24,0.08)_72%,transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.24) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 88%)",
          }}
        />
      </div>

      <motion.div
        style={{ scale: mediaScale, y: mediaY }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.div
          initial={
            canAnimate
              ? { scale: 1.18, y: 34, rotateX: 8, opacity: 0.84 }
              : { scale: 1, y: 0, rotateX: 0, opacity: 1 }
          }
          animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
          transition={{
            duration: canAnimate ? 1.8 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformPerspective: 1600 }}
          className="absolute inset-[-4%] origin-center will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={`${basePath}/images/hero-poster.jpg`}
            className="h-full w-full scale-[1.03] object-cover"
            aria-hidden="true"
          >
            <source src={`${basePath}/videos/hero.mp4`} type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#04070d]/70 via-[#04070d]/18 to-[#04070d]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070d]/74 via-transparent to-[#04070d]/52" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04070d] to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex min-h-[100svh] items-center px-4 py-24 sm:px-6 lg:px-10"
      >
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 26 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: canAnimate ? 0.9 : 0, delay: canAnimate ? 0.2 : 0 }}
          className="mx-auto flex w-full max-w-7xl items-center"
        >
          <div className="max-w-3xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#D4A418]" />
              Helifilm Produkcija
            </div>

            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4A418]/35 bg-white/8 shadow-[0_0_60px_rgba(30,58,138,0.18)] backdrop-blur-sm">
                <svg viewBox="0 0 100 100" fill="none" className="h-10 w-10">
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
            </div>

            <h1 className="font-heading text-5xl font-bold tracking-[0.18em] text-white sm:text-7xl lg:text-8xl">
              HELI<span className="text-[#D4A418]">FILM</span>
            </h1>

            <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#D4A418] to-transparent lg:mx-0" />

            <p className="mt-6 max-w-2xl text-lg font-light tracking-[0.18em] text-white/78 sm:text-xl lg:text-2xl">
              {t.hero.tagline}
            </p>

            <motion.a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={canAnimate ? { scale: 1.03, y: -1 } : undefined}
              whileTap={canAnimate ? { scale: 0.98 } : undefined}
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4A418] bg-[#04070d]/35 px-8 py-3 font-medium tracking-[0.18em] text-[#D4A418] transition-colors duration-300 hover:bg-[#D4A418] hover:text-black"
            >
              <span>{t.hero.cta}</span>
              <span aria-hidden="true">↓</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.35em] text-white/48">
          {t.hero.scrollDown}
        </span>
        <motion.div
          animate={canAnimate ? { y: [0, 8, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-[#D4A418]/45 pt-1"
        >
          <div className="h-2 w-1 rounded-full bg-[#D4A418]/60" />
        </motion.div>
      </div>
    </section>
  );
}
