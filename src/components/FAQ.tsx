"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { faqItems } from "@/data/faq";
import { SectionHeader } from "./ui/SectionHeader";

export default function FAQ() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q[language],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[language],
      },
    })),
  };

  return (
    <section id="faq" className="relative border-b border-line bg-bg-2 pb-[120px]">
      <SectionHeader
        eyebrow={t.faq.eyebrow}
        title={<em className="italic text-accent">{t.faq.title}</em>}
        size="lg"
      />

      <div className="section-frame pad-x">
        <div className="max-w-4xl mx-auto divide-y divide-[rgba(244,241,234,0.1)] border-y border-line">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="display text-fg group-hover:text-accent transition-colors"
                    style={{ fontSize: 22, lineHeight: 1.2 }}
                  >
                    {item.q[language]}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-1 text-accent text-2xl leading-none shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-fg-dim leading-[1.65] text-[16px]">
                        {item.a[language]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
