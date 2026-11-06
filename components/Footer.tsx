"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import {
  content,
  GITHUB_URL,
  LINKEDIN_URL,
  type Lang,
} from "@/lib/content";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const { footer } = content;

  const backToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-night text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 py-12 text-center md:flex-row md:justify-between md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#hero"
              className="font-heading text-2xl font-semibold text-white"
            >
              EPJ<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-white/60">
              © {footer.copyright}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.linkedinAria[lang]}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.githubAria[lang]}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-glow"
            >
              <Github className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={backToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-glow"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
