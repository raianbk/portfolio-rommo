"use client";

import { motion } from "framer-motion";
import { Play, Film, Sparkles, ArrowDown } from "lucide-react";
import Image from "next/image";
import { EDITOR_INFO } from "../data/projects";

export default function Hero({ onCursorChange }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#080808]"
    >
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#080808] to-[#080808] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Big Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Metadata Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-neutral-400 uppercase rounded-none">
                CREATIVE REEL 2026
              </span>
              <span className="w-8 h-[1px] bg-neutral-700" />
              <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-neutral-400" /> PREMIERE, AFTER EFFECTS, DAVINCI & ILLUSTRATOR
              </span>
            </motion.div>

            {/* Giant Name Headline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter uppercase leading-[0.9] font-display text-white">
                KHONDOKER <br />
                <span className="text-neutral-400">TAWSIF</span> <br />
                JAHANGIR
              </h1>
            </motion.div>

            {/* Main Role */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-10 bg-white" />
              <h2 className="text-lg sm:text-2xl font-bold tracking-[0.25em] text-neutral-200 uppercase font-mono">
                VIDEO EDITOR <span className="text-neutral-600">&</span> MOTION DESIGNER
              </h2>
            </motion.div>

            {/* Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-400 max-w-xl font-light leading-relaxed mb-8"
            >
              "I turn raw footage into stories worth watching."
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href="#selected-work"
                onMouseEnter={() => onCursorChange?.({ text: "WATCH" })}
                onMouseLeave={() => onCursorChange?.(null)}
                className="group relative inline-flex items-center gap-3 px-7 py-4 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-neutral-200"
              >
                <span>EXPLORE WORK</span>
                <Play className="w-3.5 h-3.5 fill-black transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                onMouseEnter={() => onCursorChange?.({ text: "BIO" })}
                onMouseLeave={() => onCursorChange?.(null)}
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                <span>ABOUT & SKILLS</span>
                <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Display Photo DP with Viewfinder HUD */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-neutral-900/80 border border-white/10 p-3 shadow-2xl group">
              {/* Camera Viewfinder Corner Markers */}
              <div className="viewfinder-corner top-4 left-4 border-t-2 border-l-2 border-white/60" />
              <div className="viewfinder-corner top-4 right-4 border-t-2 border-r-2 border-white/60" />
              <div className="viewfinder-corner bottom-4 left-4 border-b-2 border-l-2 border-white/60" />
              <div className="viewfinder-corner bottom-4 right-4 border-b-2 border-r-2 border-white/60" />

              {/* Viewfinder Top Bar */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-[10px] font-mono tracking-widest text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <span className="flex items-center gap-1.5 text-red-500 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> REC
                </span>
                <span>00:01:24:12</span>
                <span className="text-neutral-400">4K 60FPS</span>
              </div>

              {/* Profile Photo Image Frame */}
              <div className="relative w-full h-full overflow-hidden border border-white/10 bg-neutral-950">
                <Image
                  src="/assets/dp.jpg"
                  alt="Khondoker Tawsif Jahangir"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle vignette & film grain gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-white uppercase">
                      Khondoker Tawsif Jahangir
                    </p>
                    <p className="text-[10px] font-mono text-neutral-400">
                      EX-NOIR MEDIA STUDIO
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-mono text-neutral-200">
                    RAW 4:2:2
                  </span>
                </div>
              </div>

              {/* Viewfinder Bottom Status */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500 px-1">
                <span>ISO 800</span>
                <span>F2.8</span>
                <span>1/120s</span>
                <span>5600K</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 relative z-10 flex items-center justify-between border-t border-white/5">
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
          <span>01 / 05</span>
          <span className="w-12 h-[1px] bg-neutral-800" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>

        <a
          href="#selected-work"
          className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-200 group"
        >
          <span className="tracking-widest">SCROLL TO EDIT</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
