"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

interface Props {
  title: string;
  stack: string;
  description: string;
  highlight?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  stack,
  description,
  highlight,
  github,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group bg-white/40 backdrop-blur-md border border-gray-300 rounded-2xl p-8 transition hover:border-[var(--accent)] hover:-translate-y-2 duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[var(--accent)] transition">
          {title}
        </h3>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition text-xl"
          >
            <SiGithub />
          </a>
        )}
      </div>

      <p className="text-sm text-slate-600 mb-4">{stack}</p>

      <p className="text-slate-700 leading-relaxed">{description}</p>

      {highlight && (
        <p className="mt-4 text-sm text-[var(--accent)]">{highlight}</p>
      )}
    </motion.div>
  );
}