"use client";

import { useState } from "react";
import FilmGrain from "../components/FilmGrain";
import AnimatedBackground from "../components/AnimatedBackground";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EditorialStatement from "../components/EditorialStatement";
import SelectedWork from "../components/SelectedWork";
import ProjectModal from "../components/ProjectModal";
import AboutExperience from "../components/AboutExperience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorState, setCursorState] = useState(null);

  return (
    <main className="relative min-h-screen bg-[#080808] text-[#F2F2F2]">
      {/* Animated Motion Grid & Floating Dot Canvas */}
      <AnimatedBackground />

      {/* 35mm Real-Time Canvas Film Grain */}
      <FilmGrain />

      {/* Kinetic Physics Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Header & Navigation */}
      <Navbar onCursorChange={setCursorState} />

      {/* Hero Section */}
      <Hero onCursorChange={setCursorState} />

      {/* Editorial Statement Section */}
      <EditorialStatement />

      {/* Selected Work Portfolio (9:16 Shorts Showcase) */}
      <SelectedWork
        onSelectProject={setSelectedProject}
        onCursorChange={setCursorState}
      />

      {/* About & Experience Section (Noir Media Studio) */}
      <AboutExperience onCursorChange={setCursorState} />

      {/* Software & Creative Capabilities */}
      <Skills onCursorChange={setCursorState} />

      {/* Contact Section */}
      <Contact onCursorChange={setCursorState} />

      {/* Footer */}
      <Footer onCursorChange={setCursorState} />

      {/* Fullscreen Responsive 9:16 Video Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCursorChange={setCursorState}
      />
    </main>
  );
}
