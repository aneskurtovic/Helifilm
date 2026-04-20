"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  size?: "xl" | "lg";
  className?: string;
  right?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "xl",
  className = "",
  right,
}: SectionHeaderProps) {
  const fontSize =
    size === "lg"
      ? "clamp(40px, 5.5vw, 80px)"
      : "clamp(48px, 7vw, 112px)";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`section-frame pad-x pt-[140px] pb-16 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <div className={right ? "flex items-end justify-between gap-10 flex-wrap" : ""}>
        <div className="max-w-[1000px]">
          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.18em] uppercase text-fg-dim mb-7">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          <h2
            className="display text-fg"
            style={{ fontSize, lineHeight: 0.96, letterSpacing: "-0.03em" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.55] text-fg-dim">
              {subtitle}
            </p>
          )}
        </div>
        {right}
      </div>
    </motion.div>
  );
}
