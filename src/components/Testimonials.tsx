"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const { language, t } = useLanguage();
  const [i, setI] = useState(0);

  const next = () => setI((prev) => (prev + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const current = testimonials[i];

  return (
    <section
      id="testimonials"
      className="border-b border-line bg-bg"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "160px var(--pad-x)" }}
    >
      <div className="flex justify-between items-end gap-6 mb-12 flex-wrap">
        <div className="inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.18em] uppercase text-fg-dim">
          <span className="w-2 h-2 rounded-full bg-accent" />
          {t.testimonials.eyebrow}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-line-2 flex items-center justify-center text-fg-dim hover:bg-fg hover:text-bg hover:border-fg transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L3 7L9 12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <span className="mono text-[12px] tracking-[0.14em] text-fg-dim">
            0{i + 1} <span className="text-fg-mute">/ 0{testimonials.length}</span>
          </span>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-line-2 flex items-center justify-center text-fg-dim hover:bg-fg hover:text-bg hover:border-fg transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L11 7L5 12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.blockquote
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 m-0 p-0"
        >
          <span
            className="serif italic text-accent"
            style={{ fontSize: 140, lineHeight: 0.6, marginLeft: -12 }}
          >
            &ldquo;
          </span>
          <p
            className="display italic m-0 text-fg"
            style={{
              fontSize: "clamp(28px, 3.4vw, 48px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}
          >
            {current.quote[language]}
          </p>
          <footer className="flex justify-between pt-8 border-t border-line mono text-[11px] tracking-[0.1em]">
            <span className="text-fg">— {current.name}</span>
            <span className="text-fg-dim">{current.role[language]}</span>
          </footer>
        </motion.blockquote>
      </AnimatePresence>

      <div className="flex gap-0 mt-10 justify-center">
        {testimonials.map((_, j) => (
          <button
            key={j}
            onClick={() => setI(j)}
            className="p-3 flex items-center justify-center cursor-pointer"
            aria-label={`Show testimonial ${j + 1}`}
            aria-pressed={j === i}
          >
            <span
              className="block h-0.5 transition-all duration-300"
              style={{
                width: j === i ? 24 : 8,
                background: j === i ? "var(--accent)" : "var(--line-2)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
