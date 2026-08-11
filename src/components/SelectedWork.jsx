"use client";

import { motion } from "framer-motion";
import { Play, Film, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../data/projects";

export default function SelectedWork({ onSelectProject, onCursorChange }) {
  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];

  return (
    <section id="selected-work" className="py-28 md:py-36 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-3">
              <Film className="w-3.5 h-3.5 text-neutral-400" />
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-display">
              FEATURED <span className="text-neutral-500">REELS</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <span className="text-xs font-mono text-neutral-400">
              04 COMMERCIAL & SHORT-FORM EDITS
            </span>
          </div>
        </div>

        {/* PROJECTS LAYOUT */}
        <div className="space-y-24">
          {/* ==============================================
              PROJECT 01: Full-Width Feature Spotlight
             ============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectProject(p1)}
            onMouseEnter={() => onCursorChange?.({ text: "PLAY" })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="group cursor-pointer bg-[#151515] border border-white/10 p-6 md:p-10 hover:border-white/40 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* 9:16 Vertical Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black border border-white/20 overflow-hidden group-hover:border-white/60 transition-colors shadow-2xl">
                <Image
                  src={p1.thumbnail}
                  alt={p1.title}
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" />
                  </div>
                </div>

                {/* Vertical Tag */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                  9:16 REEL
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full py-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-white font-bold tracking-widest">PROJECT 01</span>
                  <span>{p1.year}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-display group-hover:text-neutral-200 transition-colors mb-4">
                  {p1.title}
                </h3>

                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8">
                  {p1.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p1.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 font-bold text-xs tracking-[0.2em] text-white uppercase group-hover:translate-x-2 transition-transform duration-300">
                  <span>WATCH PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==============================================
              PROJECT 02 & 03: Asymmetric Split Grid
             ============================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* PROJECT 02 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(p2)}
              onMouseEnter={() => onCursorChange?.({ text: "PLAY" })}
              onMouseLeave={() => onCursorChange?.(null)}
              className="lg:col-span-6 group cursor-pointer bg-[#151515] border border-white/10 p-6 hover:border-white/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-black border border-white/20 overflow-hidden mb-6 group-hover:border-white/60 transition-colors shadow-2xl">
                <Image
                  src={p2.thumbnail}
                  alt={p2.title}
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                  PROJECT 02
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>{p2.category}</span>
                  <span>{p2.year}</span>
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white font-display mb-3">
                  {p2.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p2.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    {p2.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* PROJECT 03 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(p3)}
              onMouseEnter={() => onCursorChange?.({ text: "PLAY" })}
              onMouseLeave={() => onCursorChange?.(null)}
              className="lg:col-span-6 group cursor-pointer bg-[#151515] border border-white/10 p-6 hover:border-white/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-black border border-white/20 overflow-hidden mb-6 group-hover:border-white/60 transition-colors shadow-2xl">
                <Image
                  src={p3.thumbnail}
                  alt={p3.title}
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                  PROJECT 03
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>{p3.category}</span>
                  <span>{p3.year}</span>
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white font-display mb-3">
                  {p3.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p3.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    {p3.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==============================================
              PROJECT 04: Large Feature Layout
             ============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectProject(p4)}
            onMouseEnter={() => onCursorChange?.({ text: "PLAY" })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="group cursor-pointer bg-[#151515] border border-white/10 p-6 md:p-10 hover:border-white/40 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Details Column Left */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between h-full py-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-white font-bold tracking-widest">PROJECT 04</span>
                  <span>{p4.year}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-display group-hover:text-neutral-200 transition-colors mb-4">
                  {p4.title}
                </h3>

                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8">
                  {p4.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p4.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 font-bold text-xs tracking-[0.2em] text-white uppercase group-hover:translate-x-2 transition-transform duration-300">
                  <span>WATCH PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 9:16 Vertical Card Preview Right */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black border border-white/20 overflow-hidden group-hover:border-white/60 transition-colors shadow-2xl">
                <Image
                  src={p4.thumbnail}
                  alt={p4.title}
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                  9:16 REEL
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
