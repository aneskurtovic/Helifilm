"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./ui/SectionHeader";

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="relative border-b border-line bg-bg pb-[140px]">
      <SectionHeader
        eyebrow={t.process.eyebrow}
        title={
          <>
            {t.process.title}
            <br />
            <em className="italic text-accent">{t.process.titleEm}</em>
            {t.process.titleRest ? ` ${t.process.titleRest}` : ""}
          </>
        }
        subtitle={t.process.subtitle}
      />

      <div className="section-frame pad-x grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 border-t border-line-2 pt-5"
          >
            <div className="flex justify-between mono text-[10px] tracking-[0.14em] uppercase text-fg-mute">
              <span>{s.n}</span>
              <span>{s.day}</span>
            </div>
            <div className="h-0.5 bg-line overflow-hidden">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${(i + 1) * 18}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block h-full bg-accent"
              />
            </div>
            <h3
              className="display text-fg"
              style={{ fontSize: 28, lineHeight: 1.08, letterSpacing: "-0.01em" }}
            >
              {s.t}
            </h3>
            <p className="text-[14px] leading-[1.55] text-fg-dim">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
