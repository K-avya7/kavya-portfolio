"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isResume = pathname === "/resume";

  const sections = [
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact Me", id: "contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50">
      <nav
        ref={dropdownRef}
        className="relative w-[92%] md:w-[85%] rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 px-6 md:px-10 py-4 flex items-center justify-between"
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={38}
            height={38}
            className="object-contain"
          />

          <span
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Kavya Agrawal
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-6 relative">

          {/* Hamburger hidden on /resume */}
          {!isResume && (
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex flex-col gap-1.5"
            >
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          )}

          {/* Resume ↔ Home Button */}
          {isResume ? (
            <Link
              href="/"
              className="px-5 py-2 rounded-lg bg-black/80 text-white text-sm hover:bg-black transition"
            >
              Home
            </Link>
          ) : (
            <Link
              href="/resume"
              className="px-5 py-2 rounded-lg bg-black/80 text-white text-sm hover:bg-black transition"
            >
              Resume
            </Link>
          )}

          {/* Dropdown hidden on /resume */}
          <AnimatePresence>
            {!isResume && open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-14 w-52 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg py-4"
              >
                {sections.map((section) => (
                  <button
                    key={section.name}
                    onClick={() => handleScroll(section.id)}
                    className="block w-full text-left px-6 py-2 text-zinc-300 hover:text-white hover:bg-white/5 transition"
                  >
                    {section.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </div>
  );
}