"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";

const placeholderLogos = [
  "BHRT",
  "Tourism BiH",
  "FK Željezničar",
  "TZ USK",
  "Sarajevo Film",
];

export function LogoStrip({ label, logos }: { label: string; logos?: string[] }) {
  const items = logos && logos.length > 0 ? logos : placeholderLogos;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col items-center lg:items-start gap-5"
    >
      <Eyebrow>{label}</Eyebrow>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
        {items.map((name) => (
          <span
            key={name}
            className="text-sm font-medium tracking-[0.15em] uppercase text-white/45 hover:text-white/70 transition-colors"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
