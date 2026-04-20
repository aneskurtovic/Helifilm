"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { contactInfo } from "@/data/contact";

type ChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const Chip = ({ label, active, onClick }: ChipProps) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full px-4 py-3 min-h-[44px] text-[13px] transition-all cursor-pointer"
    style={{
      border: active
        ? "1px solid var(--accent)"
        : "1px solid rgba(255,255,255,0.18)",
      background: active ? "var(--accent)" : "transparent",
      color: active ? "#0a0a0c" : "rgba(255,255,255,0.85)",
    }}
  >
    {label}
  </button>
);

export default function Contact() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "",
    budget: "",
    when: "",
    location: "",
    name: "",
    company: "",
    email: "",
    brief: "",
  });
  const set = (k: keyof typeof data, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const services = Object.values(t.contact.form.projectTypes);
  const budgets = Object.values(t.contact.form.budgets);
  const whens = ["This month", "Next 30–60 days", "Q3 / later", "Flexible"];

  const canNext =
    (step === 1 && data.service) ||
    (step === 2 && data.budget && data.when) ||
    (step === 3 && data.name && data.email);

  const labels = ["Scope", "Timing", "You"];

  return (
    <section
      id="contact"
      className="relative"
      style={{ background: "var(--accent)", color: "#0a0a0c", padding: "120px 0" }}
    >
      <div className="section-frame pad-x grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(10,10,12,0.6)" }}>
            <span className="w-2 h-2 rounded-full bg-bg" />
            {t.contact.eyebrow}
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(48px, 6vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#0a0a0c",
              margin: "16px 0 24px",
            }}
          >
            {t.contact.title}
            <br />
            <em className="italic">{t.contact.titleEm}</em>
            {t.contact.titleRest ? ` ${t.contact.titleRest}` : ""}
          </h2>
          <p
            className="text-[17px] max-w-[440px] mb-12"
            style={{ color: "rgba(10,10,12,0.7)" }}
          >
            {t.contact.subtitle}
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 mb-8"
            style={{
              borderTop: "1px solid rgba(10,10,12,0.15)",
              borderBottom: "1px solid rgba(10,10,12,0.15)",
            }}
          >
            <div className="flex flex-col gap-1">
              <span className="mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "rgba(10,10,12,0.55)" }}>
                {t.contact.info.email}
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="display"
                style={{ fontSize: 20, color: "#0a0a0c" }}
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "rgba(10,10,12,0.55)" }}>
                {t.contact.info.phone}
              </span>
              <a
                href={`tel:+${contactInfo.phoneRaw}`}
                className="display"
                style={{ fontSize: 20, color: "#0a0a0c" }}
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "rgba(10,10,12,0.55)" }}>
                {t.contact.info.location}
              </span>
              <span className="display" style={{ fontSize: 20, color: "#0a0a0c" }}>
                {contactInfo.locationCityEn}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 mono text-[12px] tracking-[0.08em]">
            {t.contact.assurances.map((a) => (
              <div key={a} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-bg" />
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="p-10"
          style={{
            background: "#0a0a0c",
            color: "#f4f1ea",
            borderRadius: 2,
            minHeight: 520,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="flex gap-6 mb-8 pb-6"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex items-center gap-2.5"
                style={{ opacity: step >= n ? 1 : 0.4, transition: "opacity .3s" }}
              >
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full mono text-[11px]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: step >= n ? "var(--accent)" : "transparent",
                    color: step >= n ? "#0a0a0c" : "inherit",
                  }}
                >
                  0{n}
                </span>
                <span className="mono text-[11px] tracking-[0.12em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {labels[n - 1]}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {step === 1 && (
              <>
                <label className="mono text-[11px] tracking-[0.12em] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                  01 · {t.contact.form.projectType}
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Chip key={s} label={s} active={data.service === s} onClick={() => set("service", s)} />
                  ))}
                </div>
                <label htmlFor="contact-brief" className="mono text-[11px] tracking-[0.12em] uppercase block mb-3 mt-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-brief"
                  value={data.brief}
                  onChange={(e) => set("brief", e.target.value)}
                  className="w-full bg-transparent text-[16px] py-3 outline-none"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.45)",
                    color: "#f4f1ea",
                    minHeight: 80,
                    resize: "vertical",
                  }}
                  placeholder="e.g. 60s tourism promo — hero shots at dawn, social cuts + cinema master."
                />
              </>
            )}

            {step === 2 && (
              <>
                <label className="mono text-[11px] tracking-[0.12em] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                  02 · {t.contact.form.budget}
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <Chip key={b} label={b} active={data.budget === b} onClick={() => set("budget", b)} />
                  ))}
                </div>
                <label className="mono text-[11px] tracking-[0.12em] uppercase block mb-3 mt-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t.contact.form.location}
                </label>
                <div className="flex flex-wrap gap-2">
                  {whens.map((w) => (
                    <Chip key={w} label={w} active={data.when === w} onClick={() => set("when", w)} />
                  ))}
                </div>
                <input
                  id="contact-location"
                  value={data.location}
                  onChange={(e) => set("location", e.target.value)}
                  className="w-full bg-transparent text-[16px] py-3 outline-none mt-6"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.45)", color: "#f4f1ea" }}
                  placeholder="City, region, or 'travel OK'"
                  aria-label="Shoot location"
                />
              </>
            )}

            {step === 3 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="mono text-[11px] tracking-[0.12em] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {t.contact.form.name}
                    </label>
                    <input
                      id="contact-name"
                      value={data.name}
                      onChange={(e) => set("name", e.target.value)}
                      className="w-full bg-transparent text-[16px] py-3 outline-none"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.45)", color: "#f4f1ea" }}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="mono text-[11px] tracking-[0.12em] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {t.contact.form.company}
                    </label>
                    <input
                      id="contact-company"
                      value={data.company}
                      onChange={(e) => set("company", e.target.value)}
                      className="w-full bg-transparent text-[16px] py-3 outline-none"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.45)", color: "#f4f1ea" }}
                      autoComplete="organization"
                    />
                  </div>
                </div>
                <label htmlFor="contact-email" className="mono text-[11px] tracking-[0.12em] uppercase block mb-3 mt-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  type="email"
                  className="w-full bg-transparent text-[16px] py-3 outline-none"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.45)", color: "#f4f1ea" }}
                  autoComplete="email"
                />
              </>
            )}

            {step === 4 && (
              <div className="flex flex-col items-center text-center gap-4 py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="#0a0a0c" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="display m-0" style={{ fontSize: 36 }}>
                  {t.contact.form.success}
                </h3>
                <p className="max-w-[320px] m-0" style={{ color: "rgba(255,255,255,0.7)" }}>
                  A producer will reply within 48 hours with a scoped quote.
                </p>
              </div>
            )}
          </motion.div>

          {step < 4 && (
            <div
              className="flex justify-between mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="rounded-full border border-line-2 px-5 py-3 mono text-[11px] uppercase tracking-[0.14em] text-fg-dim hover:text-fg transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                disabled={!canNext}
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium uppercase tracking-[0.1em] transition-opacity"
                style={{
                  background: "var(--accent)",
                  color: "#0a0a0c",
                  opacity: canNext ? 1 : 0.4,
                }}
              >
                {step === 3 ? t.contact.form.send : "Continue →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
