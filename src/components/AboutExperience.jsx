"use client";

import { motion } from "framer-motion";
import { ExternalLink, Film, Award, Sparkles, Video, Layers, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { EDITOR_INFO } from "../data/projects";

export default function AboutExperience({ onCursorChange }) {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              <span>BACKGROUND & EXPERIENCE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-display">
              ABOUT <span className="text-neutral-500">ME</span>
            </h2>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Stylized Editorial Portrait DP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/5] bg-neutral-900 border border-white/15 p-3 shadow-2xl group">
              <div className="relative w-full h-full overflow-hidden border border-white/10 bg-black">
                <Image
                  src="/assets/dp.jpg"
                  alt="Khondoker Tawsif Jahangir"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neutral-300 uppercase">
                    EDITORIAL PORTRAIT
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white mt-2">
                    Khondoker Tawsif Jahangir
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    VIDEO EDITOR & MOTION DESIGNER
                  </p>
                </div>
              </div>

              {/* Viewfinder crosshairs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-30">
                <div className="w-full h-[1px] bg-white absolute top-1/2" />
                <div className="h-full w-[1px] bg-white absolute left-1/2" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Bio & Experience Resume */}
          <div className="lg:col-span-7 space-y-16">
            {/* Editorial Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-white font-display leading-tight mb-6">
                "TURNING RAW FOOTAGE INTO STORIES WORTH WATCHING."
              </h3>
              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-6">
                {EDITOR_INFO.bio}
              </p>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                Whether cutting high-energy promotional cuts, building sleek kinetic typography overlays, or color-correcting cinematic reels, my approach centers around tempo, emotional rhythm, and structural clarity.
              </p>
            </motion.div>

            {/* Creative Résumé / Experience Block */}
            <motion.div
              id="experience"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase mb-8">
                <Award className="w-3.5 h-3.5 text-neutral-400" />
                <span>STUDIO EXPERIENCE</span>
              </div>

              {/* Noir Media Studio Experience Card */}
              <div className="bg-[#151515] border border-white/10 p-6 md:p-8 hover:border-white/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      PREVIOUS EXPERIENCE
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold uppercase text-white font-display">
                      Jr. Motion Designer
                    </h4>
                  </div>

                  <a
                    href={EDITOR_INFO.experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => onCursorChange?.({ text: "EXTERNAL" })}
                    onMouseLeave={() => onCursorChange?.(null)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white hover:text-black font-mono text-xs font-bold text-white transition-all duration-300 w-fit"
                  >
                    <span>NOIR MEDIA STUDIO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  Collaborated on short-form promotional content, visual effects assets, motion graphics titles, and video editing workflows.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Motion Graphics
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Premiere & After Effects
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Social Reels & Shorts
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
