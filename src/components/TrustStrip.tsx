"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();
  const clients = t.trust.clients;
  const doubled = [...clients, ...clients];

  return (
    <section className="border-b border-line bg-bg pt-20 pb-16">
      <div
        className="flex items-center justify-center gap-5 mono text-[11px] tracking-[0.18em] uppercase text-fg-dim mb-10 pad-x text-center"
      >
        <span className="block w-20 h-px bg-line-2" />
        <span>{t.trust.label}</span>
        <span className="block w-20 h-px bg-line-2" />
      </div>

      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-20 marq px-10">
          {doubled.map((c, i) => (
            <span
              key={i}
              className="serif italic whitespace-nowrap text-fg-dim"
              style={{ fontSize: 28, letterSpacing: "0.04em" }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="section-frame mt-12 pad-x pt-10 border-t border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.trust.stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <span
                className="display text-fg"
                style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                {s.n}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
