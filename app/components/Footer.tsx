"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="wave-bg" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto px-8 py-10"
      >
        <div className="flex items-center justify-between">

          {/* Left: Bow + Name */}
          <div className="flex items-center gap-4">
            <Image
              src="/avatar.png"
              alt="avatar"
              width={40}
              height={40}
              className="object-contain"
            />

            <h3
              className="text-3xl text-white"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Kavya Agrawal
            </h3>
          </div>

          {/* Right: Tagline */}
          <div className="text-zinc-400 text-sm">
            Made with{" "}
            <span className="text-[var(--accent)]">♥</span>{" "}
            by Kavya
          </div>
        </div>
      </motion.div>
    </footer>
  );
}