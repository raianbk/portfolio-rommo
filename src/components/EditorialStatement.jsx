"use client";

import { motion } from "framer-motion";

export default function EditorialStatement() {
  const words = [
    "EDITING",
    "ISN'T",
    "JUST",
    "ABOUT",
    "CUTTING",
    "FOOTAGE.",
    "IT'S",
    "ABOUT",
    "RHYTHM,",
    "TIMING,",
    "MOVEMENT",
    "AND",
    "STORY.",
  ];

  return (
    <section className="py-28 md:py-40 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-8"
        >
          // PHILOSOPHY OF MOTION
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4 max-w-4xl mx-auto">
          {words.map((word, index) => {
            const isHighlight =
              word === "RHYTHM," ||
              word === "TIMING," ||
              word === "MOVEMENT" ||
              word === "STORY.";

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight ${
                  isHighlight
                    ? "text-white font-display underline underline-offset-8 decoration-neutral-700"
                    : "text-neutral-500 font-display"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-[1px] bg-white/40 mx-auto mt-12"
        />
      </div>
    </section>
  );
}
