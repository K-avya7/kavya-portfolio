"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onFinish: () => void;
};

export default function IntroOverlay({ onFinish }: Props) {
  const hasRun = useRef(false);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];

    const navType = navEntries[0]?.type;

    if (navType === "reload") {
      sessionStorage.removeItem("introPlayed");
    }

    const hasPlayed = sessionStorage.getItem("introPlayed");

    if (hasPlayed) {
      onFinish();
      return;
    }

    sessionStorage.setItem("introPlayed", "true");

    requestAnimationFrame(() => {
      setVisible(true);

      setTimeout(() => setAnimate(true), 600);

      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 1800);
    });
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex text-5xl md:text-7xl tracking-wide"
            style={{ fontFamily: "var(--font-script)" }}
          >
            <motion.span
              initial={{ x: 0 }}
              animate={animate ? { x: "-130%" } : { x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Kavya&nbsp;
            </motion.span>

            <motion.span
              initial={{ x: 0 }}
              animate={animate ? { x: "130%" } : { x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Agrawal
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}