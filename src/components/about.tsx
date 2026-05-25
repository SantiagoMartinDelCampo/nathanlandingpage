"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import { t } from "@/lib/i18n";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "Python", "Swift / SwiftUI", "Tailwind CSS",
  "Git", "Figma", "Claude Code",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;

  return (
    <section id="about" className="py-14">
      <div className="max-w-2xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-10"
        >
          {tx.label}
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          variants={fadeUp}
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-8"
        >
          {tx.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          variants={fadeUp}
          className="space-y-5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-12"
        >
          <p>{tx.p1}</p>
          <p>{tx.p2}</p>
          <p>{tx.p3}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          variants={fadeUp}
          className="mb-10"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5">
            {tx.stack_label}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="text-xs text-zinc-600 dark:text-zinc-400 px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 rounded-md bg-zinc-50 dark:bg-zinc-900/40"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="mb-10 pt-8"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5">
            {tx.languages_label}
          </p>
          <div className="space-y-2">
            {tx.languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{lang.name}</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          variants={fadeUp}
          className="pt-8"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            {tx.currently_label}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {tx.currently_text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
