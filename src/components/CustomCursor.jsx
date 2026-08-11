"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ cursorState }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isExpanded = Boolean(cursorState?.text);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer Follower Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border border-white/40 bg-white/10 backdrop-blur-[2px] mix-blend-difference uppercase tracking-widest text-[9px] font-bold text-white shadow-2xl"
        animate={{
          x: mousePosition.x - (isExpanded ? 36 : 18),
          y: mousePosition.y - (isExpanded ? 36 : 18),
          width: isExpanded ? 72 : 36,
          height: isExpanded ? 72 : 36,
          scale: isExpanded ? 1 : 0.8,
          borderColor: isExpanded ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
          backgroundColor: isExpanded ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.05)",
          color: isExpanded ? "#000000" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorState?.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-bold text-[10px] tracking-widest leading-none text-black"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
