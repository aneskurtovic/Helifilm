"use client";

import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "equipment", href: "#equipment" },
  { key: "contact", href: "#contact" },
] as const;

const socials = [
  { name: "Facebook", url: "https://www.facebook.com/HelifilmProdukcija", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "YouTube", url: "https://www.youtube.com/user/HajrudinSuljic", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29.3 29.3 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
  { name: "TikTok", url: "https://www.tiktok.com/@helifilm", icon: "M9 12a4 4 0 104 4V4a5 5 0 005 5" },
  { name: "Instagram", url: "https://www.instagram.com/hajrudin26", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
];

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070b14] border-t border-[#1e3a8a]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-wider text-white">
              HELI<span className="text-[#D4A418]">FILM</span>
            </span>
            <p className="text-gray-500 mt-3 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-[#D4A418] transition-colors text-sm py-1"
                >
                  {t.nav[link.key]}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#D4A418]/10 transition-colors group"
                  aria-label={social.name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-gray-400 group-hover:text-[#D4A418] transition-colors"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1e3a8a]/15 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Helifilm Produkcija. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
