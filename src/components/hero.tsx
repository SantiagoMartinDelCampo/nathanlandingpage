"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import { t } from "@/lib/i18n";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  // Clear any hash from URL on mount so the page always opens at the top
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-zinc-500 dark:text-zinc-500">
            {tx.availability}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5"
        >
          {tx.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-8 leading-tight"
        >
          Nathan Chung
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.7, ease: "easeOut" }}
          className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg"
        >
          {tx.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors duration-150"
          >
            {tx.cta_projects}
          </button>
          <a
            href="/cv.pdf"
            download="Nathan_Chung_CV.pdf"
            className="flex items-center gap-1.5 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-sm font-medium rounded-lg hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {tx.cta_cv}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
