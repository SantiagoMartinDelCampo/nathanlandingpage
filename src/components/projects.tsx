"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import { t } from "@/lib/i18n";

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang].projects;

  return (
    <section id="projects" className="py-14">
      <div className="max-w-2xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-10"
        >
          {tx.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-3"
        >
          {tx.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-zinc-400 dark:text-zinc-500 mb-10"
        >
          {tx.subtitle}
        </motion.p>

        <div className="space-y-0">
          {tx.items.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-5"
            >
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-400 dark:text-zinc-500 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
