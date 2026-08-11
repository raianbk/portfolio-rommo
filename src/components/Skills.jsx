"use client";

import { motion } from "framer-motion";
import { Film, Sparkles, Layers, Sliders, Volume2, Wand2, Scissors, Eye, Palette, PenTool } from "lucide-react";
import { EDITOR_INFO } from "../data/projects";

export default function Skills({ onCursorChange }) {
  const primaryTools = [
    {
      name: "Adobe Premiere Pro",
      type: "NON-LINEAR EDITING",
      desc: "Timeline assembly, story pacing, audio sync, multicam editing, and final master rendering.",
      icon: Film,
      accent: "from-purple-900/30 to-blue-900/10",
    },
    {
      name: "Adobe After Effects",
      type: "MOTION & COMPOSITING",
      desc: "Kinetic typography, keyframe animation, green screen tracking, 2D motion graphics, and VFX visual passes.",
      icon: Sparkles,
      accent: "from-indigo-900/30 to-purple-900/10",
    },
    {
      name: "DaVinci Resolve",
      type: "COLOR GRADING & FINISHING",
      desc: "Professional color grading, LUT creation, node-based color correction, and broadcast-ready master passes.",
      icon: Palette,
      accent: "from-amber-900/30 to-rose-900/10",
    },
    {
      name: "Adobe Illustrator",
      type: "VECTOR GRAPHICS & DESIGN",
      desc: "Vector asset creation, logo preparation, visual branding elements, and kinetic layout assets.",
      icon: PenTool,
      accent: "from-orange-900/30 to-amber-900/10",
    },
  ];

  const skillCapabilities = [
    { label: "VIDEO EDITING", icon: Scissors, desc: "Pacing, rhythm & structural narrative cut" },
    { label: "MOTION DESIGN", icon: Layers, desc: "Kinetic titles, keyframes & graphics" },
    { label: "STORYTELLING", icon: Eye, desc: "Emotional beats & engaging video hooks" },
    { label: "TRANSITIONS", icon: Wand2, desc: "Seamless whip, match & speed ramp cuts" },
    { label: "VISUAL EFFECTS", icon: Sparkles, desc: "Compositing, keying & visual overlays" },
    { label: "COLOR CORRECTION", icon: Sliders, desc: "Cinematic LUTs & DaVinci color passes" },
    { label: "SOUND / AUDIO EDITING", icon: Volume2, desc: "Sound design, SFX layering & mixing" },
  ];

  return (
    <section id="skills" className="py-28 md:py-36 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-neutral-400" />
              <span>CREATIVE TOOLKIT</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white font-display">
              SOFTWARE <span className="text-neutral-500">& SKILLS</span>
            </h2>
          </div>
        </div>

        {/* Primary Software Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {primaryTools.map((tool, idx) => {
            const IconComp = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#151515] border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:border-white/40 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase px-2.5 py-1 bg-black/40 border border-white/10">
                      {tool.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white font-display mb-3">
                    {tool.name}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Skill Capabilities List Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-8">
            // EDITORIAL DISCIPLINE & CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCapabilities.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#111111] border border-white/10 p-5 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                    <h4 className="text-sm font-bold tracking-widest uppercase text-white font-display">
                      {skill.label}
                    </h4>
                  </div>
                  <p className="text-[11px] font-mono text-neutral-500">
                    {skill.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Kinetic Infinite Marquee Banner */}
      <div className="w-full bg-[#111111] border-y border-white/10 py-4 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
          <span>• PREMIERE PRO</span>
          <span>• AFTER EFFECTS</span>
          <span>• DAVINCI RESOLVE</span>
          <span>• ADOBE ILLUSTRATOR</span>
          <span>• VIDEO EDITING</span>
          <span>• MOTION DESIGN</span>
          <span>• SOUND EDITING</span>
          <span>• COLOR CORRECTION</span>
          <span>• KINETIC TYPOGRAPHY</span>
          <span>• PREMIERE PRO</span>
          <span>• AFTER EFFECTS</span>
          <span>• DAVINCI RESOLVE</span>
          <span>• ADOBE ILLUSTRATOR</span>
          <span>• VIDEO EDITING</span>
          <span>• MOTION DESIGN</span>
          <span>• SOUND EDITING</span>
          <span>• COLOR CORRECTION</span>
        </div>
      </div>
    </section>
  );
}
