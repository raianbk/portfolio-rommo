"use client";

import { ArrowUp, ExternalLink } from "lucide-react";
import { EDITOR_INFO } from "../data/projects";

export default function Footer({ onCursorChange }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 md:py-16 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Editor Brand Info */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-widest uppercase font-display mb-1">
            {EDITOR_INFO.name}
          </h4>
          <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">
            {EDITOR_INFO.role}
          </p>
          <a
            href={`mailto:${EDITOR_INFO.email}`}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            {EDITOR_INFO.email}
          </a>
        </div>

        {/* Center: Experience Link */}
        <div>
          <p className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1">
            STUDIO AFFILIATION
          </p>
          <a
            href={EDITOR_INFO.experience.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onCursorChange?.({ text: "EXTERNAL" })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors font-semibold"
          >
            <span>NOIR MEDIA STUDIO</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Right: Copyright & Back To Top */}
        <div className="flex flex-col md:items-end gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => onCursorChange?.({ text: "TOP" })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors uppercase font-bold tracking-widest text-[10px] w-fit"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUp className="w-3 h-3 text-white" />
            </div>
          </button>

          <p className="text-[10px] text-neutral-600">
            © 2026 {EDITOR_INFO.name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
