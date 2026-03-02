"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { basePath } from "@/lib/config";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: 11, suffix: "+", label: t.about.stats.years },
    { value: 500, suffix: "+", label: t.about.stats.projects },
    { value: 8, suffix: "+", label: t.about.stats.countries },
    { value: 200, suffix: "+", label: t.about.stats.clients },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0f1a] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Owner photo */}
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative">
              <img
                src={`${basePath}/images/owner.jpg`}
                alt="Hajrudin Suljic - Helifilm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#D4A418]/20 -z-10" />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h2>
            <div className="h-1 w-16 bg-[#D4A418] mb-8 rounded-full" />
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              {t.about.description}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t.about.description2}
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-[#1e3a8a]/20 hover:border-[#D4A418]/20 transition-colors duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A418] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
