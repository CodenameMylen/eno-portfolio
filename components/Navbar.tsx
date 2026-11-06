"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { content, type Lang } from "@/lib/content";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", ...content.nav.links.map((link) => link.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const linkClasses = (isActive: boolean) =>
    `rounded-full px-3 py-1.5 text-[13px] font-medium transition-all duration-300 ${
      isActive
        ? "bg-ink text-white shadow-soft"
        : "text-ink/65 hover:bg-blush hover:text-ink"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center gap-3 px-4 pt-4">
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-ink/10 bg-white/75 px-3 py-2 shadow-soft backdrop-blur-xl transition-shadow duration-300 hover:shadow-lift"
      >
        <a
          href="#hero"
          className="ml-1 font-heading text-lg font-semibold tracking-wide text-ink transition-colors duration-200 hover:text-primary"
        >
          EPJ<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClasses(active === link.href.slice(1))}
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={content.nav.langToggle[lang]}
            className="rounded-full border border-ink/10 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-ink/70 transition-all duration-300 hover:border-primary hover:bg-blush hover:text-ink"
          >
            {lang.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? content.nav.closeMenu[lang] : content.nav.openMenu[lang]
            }
            className="rounded-full border border-ink/10 p-2 text-ink transition-all duration-300 hover:border-primary hover:bg-blush lg:hidden"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-ink/10 bg-white/90 p-3 shadow-lift backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {content.nav.links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.35 }}
                  className="rounded-2xl px-4 py-3 text-sm text-ink/75 transition-colors duration-200 hover:bg-blush hover:text-ink"
                >
                  {link.label[lang]}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
