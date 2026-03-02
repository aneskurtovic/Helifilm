"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/HelifilmProdukcija",
      icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/user/HajrudinSuljic",
      icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29.3 29.3 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@helifilm",
      icon: "M9 12a4 4 0 104 4V4a5 5 0 005 5",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hajrudin26",
      icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z",
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#111827]">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="h-1 w-16 bg-[#D4A418] mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder={t.contact.form.name}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-[#1e3a8a]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4A418]/50 focus:bg-white/[0.08] transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.contact.form.email}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-[#1e3a8a]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4A418]/50 focus:bg-white/[0.08] transition-all duration-300"
              />
            </div>
            <div>
              <select
                required
                className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-[#1e3a8a]/20 text-white focus:outline-none focus:border-[#D4A418]/50 focus:bg-white/[0.08] transition-all duration-300"
              >
                <option value="">{t.contact.form.projectType}</option>
                <option value="aerial">{t.contact.form.projectTypes.aerial}</option>
                <option value="realEstate">{t.contact.form.projectTypes.realEstate}</option>
                <option value="event">{t.contact.form.projectTypes.event}</option>
                <option value="commercial">{t.contact.form.projectTypes.commercial}</option>
                <option value="other">{t.contact.form.projectTypes.other}</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder={t.contact.form.message}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-[#1e3a8a]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4A418]/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#D4A418] text-black font-semibold text-lg hover:bg-[#c49615] transition-colors duration-300"
            >
              {submitted ? t.contact.form.success : t.contact.form.send}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A418]/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4A418" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{t.contact.info.email}</div>
                  <a href="mailto:info@helifilm.ba" className="text-white hover:text-[#D4A418] transition-colors">
                    info@helifilm.ba
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A418]/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4A418" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{t.contact.info.phone}</div>
                  <a href="tel:+38761288221" className="text-white hover:text-[#D4A418] transition-colors">
                    +387 61 288 221
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A418]/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4A418" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{t.contact.info.location}</div>
                  <span className="text-white">{t.contact.info.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t.contact.info.social}</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-[#1e3a8a]/20 flex items-center justify-center hover:bg-[#D4A418]/10 hover:border-[#D4A418]/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-gray-400 group-hover:text-[#D4A418] transition-colors"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#0d1525] border border-[#1e3a8a]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46080.272763887!2d18.3870!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c9a4b5dfd1%3A0x5e84839ed7e47a8e!2sSarajevo!5e0!3m2!1sen!2sba!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sarajevo Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
