"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-8 md:px-20 border-t border-zinc-900 overflow-hidden"
    >
      <div className="wave-bg" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.05fr_1fr] gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-[380px] h-[480px]">
              <div className="absolute inset-0 rounded-2xl bg-purple-400/20 blur-3xl scale-105" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Kavya Agrawal"
                  width={380}
                  height={480}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Me
            </h2>

            <div
              className="text-zinc-300 leading-relaxed space-y-4 text-sm md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                I’m a Computer Engineering student focused on building scalable
                backend systems and production-ready applications. I enjoy
                making applications with real impact, which are fun to use and maybe a little chaotic.
              </p>

              <p>
                During my internship at PTC Software, I worked on backend
                services responsible for data flow between enterprise products,
                optimized GitLab CI/CD pipelines to reduce unnecessary runner
                consumption, and built alert-integrated tooling using
                Prometheus and Datadog to support SRE incident workflows.
              </p>

              <p>
                I’m equally interested in intelligent systems — exploring RAG
                pipelines, FAISS vector databases, and open-source LLM
                integrations to bridge backend engineering with AI-driven
                automation.
              </p>

              <p className="text-[var(--accent)] font-medium">
                Let’s turn ideas into real products together!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}