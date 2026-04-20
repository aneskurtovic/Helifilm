"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { basePath } from "@/lib/config";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-line bg-bg">
      <div className="section-frame pad-x py-[120px] grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative row-span-2 w-full overflow-hidden bg-bg-3"
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src={`${basePath}/images/owner.jpg`}
            alt="Hajrudin Suljić — Helifilm"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex justify-between mono text-[10px] tracking-[0.2em] uppercase text-white/70">
            <span>Fig. 01</span>
            <span>STUDIO · SARAJEVO · 2014</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="py-10"
        >
          <div className="inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.18em] uppercase text-fg-dim mb-7">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t.about.eyebrow}
          </div>
          <h2
            className="display text-fg"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}
          >
            {t.about.title}{" "}
            <em className="italic text-accent">{t.about.titleEm}</em>
            <br />
            {t.about.titleRest}
          </h2>

          <p className="mt-5 text-[16px] leading-[1.6] text-fg-dim max-w-[520px]">
            {t.about.description}
          </p>
          <p className="mt-5 text-[16px] leading-[1.6] text-fg-dim max-w-[520px]">
            {t.about.description2}
          </p>

          <div className="mt-10 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-8">
            {t.about.signatures.map((sig) => (
              <div key={sig.role} className="flex flex-col gap-1">
                <span className="mono text-[10px] tracking-[0.12em] uppercase text-fg-mute">
                  {sig.role}
                </span>
                <span
                  className="display text-fg"
                  style={{ fontSize: 20 }}
                >
                  {sig.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-bg-3"
          style={{ aspectRatio: "16/10" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(212,164,24,0.08) 0%, rgba(30,58,138,0.1) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end justify-between pad-x py-4 mono text-[10px] tracking-[0.2em] uppercase text-fg-mute">
            <span>Fig. 03</span>
            <span>FLIGHT · DINARIC · SUNSET</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
