"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Film, Sparkles, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose, onCursorChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const embedUrl = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  const directShortsUrl = `https://youtube.com/shorts/${project.youtubeId}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#111111] border border-white/15 shadow-2xl overflow-hidden z-10 my-auto rounded-none grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        >
          {/* Close Button Header (Mobile + Desktop) */}
          <button
            onClick={onClose}
            onMouseEnter={() => onCursorChange?.({ text: "CLOSE" })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors"
            aria-label="Close Project Viewer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: 9:16 Vertical Video Player Frame */}
          <div className="lg:col-span-6 bg-black flex items-center justify-center p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 relative">
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden">
              <iframe
                src={embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Right Column: Detailed Metadata & Breakdown */}
          <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[75vh] lg:max-h-[85vh]">
            <div>
              {/* Category & Year */}
              <div className="flex items-center gap-3 mb-4 text-xs font-mono text-neutral-400">
                <span className="px-2.5 py-1 bg-white/10 border border-white/10 uppercase tracking-widest text-white">
                  {project.category}
                </span>
                <span>•</span>
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white font-display mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Metadata Grid */}
              <div className="space-y-6 border-t border-b border-white/10 py-6 mb-8">
                <div>
                  <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-1">
                    ROLE / RESPONSIBILITY
                  </h3>
                  <p className="text-sm font-semibold text-white">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-2">
                    SOFTWARE & CREATIVE TOOLKIT
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-1">
                    FORMAT & ASPECT RATIO
                  </h3>
                  <p className="text-xs font-mono text-neutral-300">
                    9:16 Vertical Reel (Short-Form Digital Media)
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <a
                href={directShortsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
              >
                <span>OPEN ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                CLOSE VIEWER
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
