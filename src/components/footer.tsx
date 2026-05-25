"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang].footer;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-10"
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
              Nathan Chung
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {new Date().getFullYear()}, {tx.open}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:nathanchung144@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 group"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="group-hover:underline underline-offset-2">
                nathanchung144@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-martin-del-campo-8a0734335"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 group"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="group-hover:underline underline-offset-2">
                linkedin.com/in/santiago-martin-del-campo
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
