"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { equipmentItems, categoryOrder } from "@/data/equipment";
import { SectionHeader } from "./ui/SectionHeader";

export default function Equipment() {
  const { t } = useLanguage();

  return (
    <section id="equipment" className="relative border-b border-line bg-bg-2 pb-[140px]">
      <SectionHeader
        eyebrow={t.equipment.eyebrow}
        title={
          <>
            {t.equipment.title}
            <br />
            <em className="italic text-accent">{t.equipment.titleEm}</em>
            {t.equipment.titleRest ? ` ${t.equipment.titleRest}` : ""}
          </>
        }
        subtitle={t.equipment.subtitle}
      />

      <div className="section-frame pad-x grid grid-cols-2 lg:grid-cols-4 gap-10 border-t border-line pt-10">
        {categoryOrder.map((cat, ci) => {
          const rows = equipmentItems.filter((it) => it.category === cat);
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="mono text-[10px] tracking-[0.2em] uppercase text-accent">
                  {t.equipment.categories[cat]}
                </span>
                <span className="flex-1 h-px bg-line-2" />
              </div>
              {rows.map((it) => (
                <div
                  key={it.name}
                  className="flex flex-col gap-0.5 py-2.5"
                  style={{ borderTop: "1px dashed var(--line)" }}
                >
                  <span
                    className="display text-fg"
                    style={{ fontSize: 20, lineHeight: 1.2 }}
                  >
                    {it.name}
                  </span>
                  <span className="mono text-[11px] tracking-[0.06em] text-fg-dim">
                    {it.spec}
                  </span>
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>

      <div className="section-frame pad-x mt-20">
        <div
          className="relative w-full bg-bg-3 overflow-hidden"
          style={{
            aspectRatio: "21/9",
            backgroundImage:
              "linear-gradient(135deg, rgba(212,164,24,0.1) 0%, rgba(10,10,12,0.6) 100%)",
          }}
        >
          <div className="absolute inset-0 flex items-end justify-between pad-x py-6 mono text-[10px] tracking-[0.2em] uppercase text-fg-mute">
            <span>Fig. 02</span>
            <span>STUDIO · GEAR · WALL · SARAJEVO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
