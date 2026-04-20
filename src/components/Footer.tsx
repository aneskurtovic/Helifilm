"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { key: "work" as const, href: "#work" },
  { key: "services" as const, href: "#services" },
  { key: "equipment" as const, href: "#equipment" },
  { key: "about" as const, href: "#about" },
  { key: "contact" as const, href: "#contact" },
];

const letters = ["H", "E", "L", "I", "F", "I", "L", "M"];

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-bg border-t border-line" style={{ padding: "100px var(--pad-x) 40px" }}>
      <div className="section-frame">
        <div
          className="flex justify-between display"
          style={{
            fontSize: "clamp(64px, 18vw, 260px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            paddingBottom: 40,
            borderBottom: "1px solid var(--line)",
          }}
        >
          {letters.slice(0, 4).map((l, i) => (
            <span key={`l1-${i}`}>{l}</span>
          ))}
          <span style={{ color: "var(--accent)" }}>·</span>
          {letters.slice(4).map((l, i) => (
            <span key={`l2-${i}`}>{l}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-14">
          <div className="flex flex-col gap-4">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-fg-mute">
              {t.footer.studio}
            </span>
            <p className="text-[14px] leading-[1.8] text-fg-dim m-0">
              Sarajevo<br />
              Bosnia &amp; Herzegovina
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-fg-mute">
              {t.footer.reach}
            </span>
            <p className="text-[14px] leading-[1.8] text-fg-dim m-0">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                {contactInfo.email}
              </a>
              <br />
              <a href={`tel:+${contactInfo.phoneRaw}`} className="hover:text-accent transition-colors">
                {contactInfo.phone}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-fg-mute">
              {t.footer.quickLinks}
            </span>
            <p className="text-[14px] leading-[1.8] text-fg-dim m-0 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-accent transition-colors"
                >
                  {t.nav[link.key]}
                </a>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-fg-mute">
              {t.footer.followUs}
            </span>
            <p className="text-[14px] leading-[1.8] text-fg-dim m-0 flex flex-col">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
              <Link href="/privacy" className="hover:text-accent transition-colors mt-1">
                {t.footer.privacy}
              </Link>
              <Link href="/impressum" className="hover:text-accent transition-colors">
                {t.footer.impressum}
              </Link>
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between gap-2 mt-14 pt-6 mono text-[11px] tracking-[0.1em] text-fg-mute"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <span>{t.footer.rights}</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            {t.footer.status}
          </span>
        </div>
      </div>
    </footer>
  );
}
