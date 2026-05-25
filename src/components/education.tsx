"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import { t } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const { lang } = useLang();
  const tx = t[lang].education;

  return (
    <section id="education" className="py-14">
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
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-10"
        >
          {tx.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeUp}
          className="pb-8 mb-8"
        >
          <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
            {tx.degree}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{tx.institution}</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{tx.graduation}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5">
            {tx.courses_label}
          </p>
          <div className="flex flex-wrap gap-2">
            {tx.courses.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="text-xs text-zinc-600 dark:text-zinc-400 px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 rounded-md bg-zinc-50 dark:bg-zinc-900/40"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
