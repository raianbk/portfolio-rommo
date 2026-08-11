"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EDITOR_INFO } from "../data/projects";

export default function Navbar({ onCursorChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "WORK", href: "#selected-work" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "py-3 bg-[#080808]/80 backdrop-blur-md border-b border-white/5 shadow-2xl"
              : "py-6 bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo / Name */}
            <a
              href="#hero"
              onMouseEnter={() => onCursorChange?.({ text: "HOME" })}
              onMouseLeave={() => onCursorChange?.(null)}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs tracking-widest group-hover:bg-white group-hover:text-black transition-colors duration-300">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base md:text-lg text-white group-hover:text-neutral-300 transition-colors font-display">
                  R o M m O
                </span>
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono hidden sm:inline-block">
                  VIDEO EDITOR & MOTION DESIGNER
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => onCursorChange?.({ text: "GO" })}
                  onMouseLeave={() => onCursorChange?.(null)}
                  className="relative text-xs font-semibold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* Status Indicator & Email CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-neutral-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>AVAILABLE FOR WORK</span>
              </div>

              <a
                href="#contact"
                onMouseEnter={() => onCursorChange?.({ text: "HIRE" })}
                onMouseLeave={() => onCursorChange?.(null)}
                className="px-4 py-2 text-xs font-bold tracking-widest border border-white/20 hover:border-white rounded-none bg-transparent hover:bg-white hover:text-black transition-all duration-300 uppercase"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
