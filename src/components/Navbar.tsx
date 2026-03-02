"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "equipment", href: "#equipment" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold tracking-wider text-white">
              HELI<span className="text-[#D4A418]">FILM</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#D4A418]"
                    : "text-gray-300 hover:text-[#D4A418]"
                }`}
              >
                {t.nav[link.key]}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4A418] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 rounded-full border border-white/20 p-0.5">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  language === "en"
                    ? "bg-[#D4A418] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("bs")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  language === "bs"
                    ? "bg-[#D4A418] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                BS
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-3 min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0f1a]/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium transition-colors py-2 ${
                    activeSection === link.href.slice(1)
                      ? "text-[#D4A418]"
                      : "text-gray-300 hover:text-[#D4A418]"
                  }`}
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    language === "en"
                      ? "bg-[#D4A418] text-black"
                      : "text-gray-400 border border-white/20"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("bs")}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    language === "bs"
                      ? "bg-[#D4A418] text-black"
                      : "text-gray-400 border border-white/20"
                  }`}
                >
                  Bosanski
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
