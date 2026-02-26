"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-8 md:px-20 border-t border-zinc-900 overflow-hidden"
    >
      <div className="wave-bg" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-white">
          Education
        </h2>

        <div className="space-y-12">

          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[24px_1fr] gap-6"
          >
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full mt-2" />
              <div className="flex-1 w-px bg-zinc-700 mt-2" />
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                  Pimpri-Chinchwad College of Engineering and Research
                </h3>

                <p className="text-zinc-400 mt-1">
                  Bachelor of Engineering in Computer Engineering
                </p>

                <p className="text-[var(--accent)] mt-1">
                  CGPA: 9.3
                </p>
              </div>

              <div className="text-zinc-500 text-sm mt-3 md:mt-0">
                November 2022 – Present
              </div>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[24px_1fr] gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full mt-2" />
              <div className="flex-1 w-px bg-zinc-700 mt-2" />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                  Laxminarayan Jr. College, Khamgaon
                </h3>

                <p className="text-zinc-400 mt-1">
                  12th HSC
                </p>

                <p className="text-[var(--accent)] mt-1">
                  Percentage: 86%
                </p>
              </div>

              <div className="text-zinc-500 text-sm mt-3 md:mt-0">
                June 2021 – June 2022
              </div>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[24px_1fr] gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full mt-2" />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                  Sanskar Dnyanpeeth, Khamgaon
                </h3>

                <p className="text-zinc-400 mt-1">
                  10th CBSE
                </p>

                <p className="text-[var(--accent)] mt-1">
                  Percentage: 96.4%
                </p>
              </div>

              <div className="text-zinc-500 text-sm mt-3 md:mt-0">
                June 2019 – June 2020
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}