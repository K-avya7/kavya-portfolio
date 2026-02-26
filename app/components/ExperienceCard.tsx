"use client";

import { motion } from "framer-motion";

interface Props {
  company: string;
  role: string;
  points: string[];
}

export default function ExperienceCard({ company, role, points }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-xl p-8 shadow-lg"
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h3 className="text-xl font-semibold text-white">
          {company}
        </h3>

        <span className="text-sm text-[var(--accent)] mt-2 md:mt-0">
          {role}
        </span>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-4 text-zinc-400 leading-relaxed">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  );
}