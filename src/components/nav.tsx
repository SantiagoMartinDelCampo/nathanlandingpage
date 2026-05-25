"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";
import { t } from "@/lib/i18n";

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const tx = t[lang].nav;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { label: tx.about, id: "about" },
    { label: tx.education, id: "education" },
    { label: tx.projects, id: "projects" },
    { label: tx.goals, id: "goals" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors duration-150 flex-shrink-0"
        >
          Nathan Chung
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-5 mr-2">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-150"
          >
            <span className={lang === "en" ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-600"}>EN</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className={lang === "es" ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-600"}>ES</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-150"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
