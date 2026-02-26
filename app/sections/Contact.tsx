"use client";

import { motion } from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiMedium,
} from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 px-8 border-t border-zinc-900 overflow-hidden text-center"
    >
      <div className="wave-bg" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2
          className="text-5xl md:text-6xl mb-12 text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let’s Connect
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 text-lg text-zinc-300">

          <div className="flex items-center justify-center gap-3">
            <FiMail className="text-[var(--accent)] text-xl" />
            <a
              href="mailto:kavya1507.agr@gmail.com"
              className="hover:text-white transition"
            >
              kavya1507.agr@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiPhone className="text-[var(--accent)] text-xl" />
            <span>+91 94057 89999</span>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-14">
          <p className="text-zinc-400 tracking-widest mb-6">
            SOCIALS
          </p>

          <div className="flex justify-center gap-8 text-2xl">
            <a
              href="https://github.com/K-avya7"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <SiGithub />
            </a>

            <a
              href="http://linkedin.com/in/kavyaagrawal15/"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <SiLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/user4484mv/"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://medium.com/@kavya1507.agr"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <SiMedium />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}