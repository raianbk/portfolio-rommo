"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowRight, Sparkles, Send } from "lucide-react";
import { EDITOR_INFO } from "../data/projects";

export default function Contact({ onCursorChange }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EDITOR_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-32 md:py-44 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-[0.25em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span>START A PROJECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.95] mb-8"
          >
            LET'S MAKE SOMETHING <br />
            <span className="text-neutral-500">WORTH WATCHING.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 font-light mb-12 max-w-xl mx-auto"
          >
            Have a video editing or motion graphics project in mind? Let's turn your raw footage into an engaging visual story.
          </motion.p>

          {/* Email CTA Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            {/* Direct Mailto Link */}
            <a
              href={`mailto:${EDITOR_INFO.email}`}
              onMouseEnter={() => onCursorChange?.({ text: "MAIL" })}
              onMouseLeave={() => onCursorChange?.(null)}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-black font-extrabold text-xs tracking-[0.25em] uppercase hover:bg-neutral-200 transition-all duration-300 shadow-2xl"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => onCursorChange?.({ text: "COPY" })}
              onMouseLeave={() => onCursorChange?.(null)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-5 bg-[#151515] border border-white/20 hover:border-white text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              <span className="truncate max-w-[220px]">{EDITOR_INFO.email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
          </motion.div>

          {/* Copied Toast Notification */}
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-emerald-400 mt-4"
            >
              ✓ EMAIL COPIED TO CLIPBOARD!
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
