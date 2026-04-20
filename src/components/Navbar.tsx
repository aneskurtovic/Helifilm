"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  { key: "work", href: "#work", label: "Work" },
  { key: "services", href: "#services", label: "Services" },
  { key: "about", href: "#about", label: "Studio" },
  { key: "equipment", href: "#equipment", label: "Equipment" },
  { key: "contact", href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const labels: Record<string, string> = {
    work: t.nav.work,
    services: t.nav.services,
    about: t.nav.about,
    equipment: t.nav.equipment,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,padding,border-color] duration-300 border-b ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-line py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Skip to content
      </a>
      <div className="section-frame grid grid-cols-[auto_1fr_auto] items-center gap-10 pad-x">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-2.5"
          aria-label="Helifilm"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="mono text-[11px] font-semibold tracking-[0.32em] text-fg">
            H E L I F I L M
          </span>
        </a>

        <nav className="hidden lg:flex justify-center gap-7" aria-label="Primary">
          {items.map((it, i) => (
            <a
              key={it.key}
              href={it.href}
              onClick={(e) => go(e, it.href)}
              className="group flex items-baseline gap-1.5 text-fg-dim hover:text-fg transition-colors text-[11px] uppercase tracking-[0.14em]"
            >
              <span className="mono text-[9px] text-fg-mute">0{i + 1}</span>
              <span>{labels[it.key]}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mono text-[10px] tracking-[0.08em] text-fg-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            <span>{t.nav.booking}</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-fg hover:bg-fg hover:text-bg hover:border-fg transition-colors"
          >
            {t.nav.startProject}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>

          <div className="hidden lg:flex items-center mono text-[10px] tracking-[0.2em] text-fg-mute">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-2 min-h-[44px] ${language === "en" ? "text-accent" : "hover:text-fg"}`}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span className="mx-0.5">/</span>
            <button
              onClick={() => setLanguage("bs")}
              className={`px-2 py-2 min-h-[44px] ${language === "bs" ? "text-accent" : "hover:text-fg"}`}
              aria-label="Switch to Bosanski"
              aria-pressed={language === "bs"}
            >
              BS
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1 p-3 min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="block w-5 h-px bg-fg" />
            <span className="block w-5 h-px bg-fg" />
            <span className="block w-5 h-px bg-fg" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-bg-2 border-t border-line"
          >
            <div className="flex flex-col gap-3 pad-x py-5">
              {items.map((it) => (
                <a
                  key={it.key}
                  href={it.href}
                  onClick={(e) => go(e, it.href)}
                  className="text-sm uppercase tracking-[0.14em] text-fg-dim hover:text-fg"
                >
                  {labels[it.key]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-line-2 px-4 py-3 text-[11px] uppercase tracking-[0.14em]"
              >
                {t.nav.startProject} →
              </a>
              <div className="flex items-center gap-1 pt-3 mono text-[11px] tracking-[0.2em] text-fg-dim">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-3 min-h-[44px] ${language === "en" ? "text-accent" : ""}`}
                  aria-label="Switch to English"
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
                <span>/</span>
                <button
                  onClick={() => setLanguage("bs")}
                  className={`px-3 py-3 min-h-[44px] ${language === "bs" ? "text-accent" : ""}`}
                  aria-label="Switch to Bosanski"
                  aria-pressed={language === "bs"}
                >
                  BS
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
